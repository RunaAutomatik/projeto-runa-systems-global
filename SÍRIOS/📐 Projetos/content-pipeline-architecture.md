---
date: 2026-03-25
tags: [architecture, content-pipeline, arthsystems, instagram, automation, orion]
project: runa-systems-global
type: architecture-decision
status: approved — Stage 1 implementation in progress
---

# Content Automation Pipeline — Architecture

> Designed by ORION · Requested by FREYJA · Implemented by @dev
> Monorepo: `runa-systems-global` · Account: @arthsystems_

---

## Problem Statement

FREYJA produces narrative briefs (copy, structure, mood). There is currently no automated system to transform those briefs into ready-to-post Instagram content (carousels, images, videos) and publish them via the Meta Graph API.

---

## Architecture Overview

```
FREYJA Brief (JSON)
        │
        ▼
┌───────────────────┐
│  content-worker   │  ← NEW: apps/content-worker/
│  HTTP API         │  Receives briefs, renders content, returns files
│                   │
│  ┌─────────────┐  │
│  │  carousel/  │  │  Puppeteer → HTML/CSS → PNG slides array
│  │  renderer   │  │
│  └─────────────┘  │
│  ┌─────────────┐  │
│  │  image/     │  │  Puppeteer → HTML/CSS → PNG (1 slide)
│  │  renderer   │  │  Future: Imagen via Vertex AI for mood shots
│  └─────────────┘  │
│  ┌─────────────┐  │
│  │  video/     │  │  Stage 2: Remotion Cloud Run
│  │  compositor │  │  Stage 1: stub (returns placeholder)
│  └─────────────┘  │
└───────────────────┘
        │
        ▼  rendered files (PNG array / video URL)
        │
┌───────────────────┐
│ instagram-worker  │  ← EXISTING: apps/instagram-worker/
│                   │  Expanded with outbound publish
│  ┌─────────────┐  │
│  │ publish.js  │  │  NEW: Meta Graph API → upload → publish
│  └─────────────┘  │
│  ┌─────────────┐  │
│  │ webhook     │  │  EXISTING: inbound comments + DM delivery
│  │ server      │  │
│  └─────────────┘  │
└───────────────────┘
        │
        ▼
   Instagram Feed / Stories / Reels
```

---

## Decision Log

### D1 — Carousel & Images: Puppeteer over AI generation

**Decision:** HTML/CSS → Puppeteer → PNG for all text-based content.

**Reasoning:**
- Dark aesthetic with precise typography requires pixel-perfect brand control
- AI image gen (DALL-E, Imagen) is inconsistent for text-heavy carousels
- Puppeteer runs in-process as a Node.js dependency — no Docker required
- Brand templates can be versioned and iterated in code

**When AI gen makes sense (Stage 1.5):** Mood/concept posts without text overlay.
Candidate: Imagen via Vertex AI (GWS already authenticated as automatikruna@gmail.com).

### D2 — Video/Reels: Remotion deferred to Stage 2

**Decision:** Stub compositor in Stage 1. Remotion in Stage 2.

**Reasoning:**
- Remotion setup (React component library + Cloud Run renderer) has high upfront cost
- Stage 1 ROI is in carousels + images (80% of content volume)
- Stories can be served as static images in Stage 1 (full-size 1080x1920)
- Remotion Cloud Run (GCP) is the cleanest path — no Docker locally, renders remotely

**Stage 2 plan:** `apps/content-worker/src/video/` → Remotion with `@remotion/cloudrun` pointing to GCP project linked to automatikruna@gmail.com.

### D3 — Two workers, clear ownership boundary

| Worker | Responsibility | Stage |
|--------|---------------|-------|
| `content-worker` | Creation (brief → rendered files) | NEW Stage 1 |
| `instagram-worker` | Inbound (webhooks, DMs) + Outbound (publish) | EXISTING + publish.js |

This prevents coupling between content creation and engagement automation — different deploy cycles, different failure modes.

### D4 — Distribution: separate step with review gate

**Decision:** Publishing is a deliberate action, not automatic after rendering.

`content-worker` returns files. FREYJA (or Arthur) reviews. Then calls `instagram-worker /publish` explicitly.

**Future:** n8n (HERMES) can automate the full chain when review gates are trusted.

---

## FREYJA Brief Format (standardized)

FREYJA must produce briefs in this JSON schema when handing off to content-worker:

```json
{
  "type": "carousel | image | story | reel | video",
  "content_id": "arc-01-post-001",
  "brand": "dark-architect",
  "narrative": {
    "hook": "Você não tem problema de produtividade.",
    "cta": "ARQUITETO"
  },
  "slides": [
    { "title": "Slide title", "body": "Body text", "note": "visual note for future AI gen" }
  ],
  "caption": "Full caption for Instagram post",
  "hashtags": ["arquitetura", "sistemas"],
  "mood": "dark, minimal, commanding — for future AI image gen",
  "visual_direction": "Close crop, strong shadows, text centered"
}
```

**Notes:**
- `slides` array is required for `carousel`, single-element for `image`
- `mood` and `visual_direction` are stored but unused in Stage 1 (used in Stage 1.5 for AI gen)
- `brand` maps to a template file in `content-worker/src/carousel/templates/`

---

## Monorepo Structure (post Stage 1)

```
apps/
├── instagram-worker/
│   ├── package.json          ← unchanged
│   ├── railway.json          ← unchanged
│   └── src/
│       ├── index.js          ← EXISTING: webhook + DM server
│       ├── instagram.js      ← EXISTING: sendDM, sendQuickReply
│       ├── triggers.js       ← EXISTING: keyword matching
│       └── publish.js        ← NEW: outbound publishing
│
└── content-worker/           ← NEW
    ├── package.json
    ├── railway.json
    └── src/
        ├── index.js          ← HTTP API server
        ├── brief.schema.js   ← Zod validation schema
        ├── carousel/
        │   ├── renderer.js   ← Puppeteer HTML→PNG
        │   └── templates/
        │       └── dark-architect.html
        ├── image/
        │   └── renderer.js   ← Single image (reuses carousel pipeline)
        └── video/
            └── compositor.js ← Stage 1 stub / Stage 2 Remotion
```

---

## Meta Graph API — Publishing Flow

### Single Image Post
```
1. POST /{ig-user-id}/media        → image_url, caption  → container_id
2. GET  /{ig-user-id}/media/{id}   → poll until status_code = FINISHED
3. POST /{ig-user-id}/media_publish → creation_id        → post live
```

### Carousel Post
```
1. POST /{ig-user-id}/media (×N slides)  → container_id per slide
2. POST /{ig-user-id}/media              → media_type=CAROUSEL, children=[ids]  → carousel_id
3. GET  /{ig-user-id}/media/{id}         → poll carousel_id until FINISHED
4. POST /{ig-user-id}/media_publish      → carousel live
```

**Note:** Images must be publicly accessible URLs. Stage 1 approach: upload to a temporary public host (Supabase Storage or R2) before calling the Graph API.

---

## Stage Roadmap

| Stage | What | When |
|-------|------|------|
| **Stage 1** | content-worker scaffold + Puppeteer renderer + publish.js | 2026-03-25 |
| **Stage 1.5** | Imagen via Vertex AI for mood shots | TBD |
| **Stage 2** | Remotion Cloud Run for Reels + Videos | TBD |
| **Stage 3** | n8n (HERMES) full automation — FREYJA brief → auto-publish | TBD |

---

## Open Questions

- [ ] Where to host rendered images temporarily before Meta Graph upload? (Supabase Storage vs R2)
- [ ] Should content-worker run on Railway (alongside instagram-worker) or as a separate service?
- [ ] Remotion: GCP Cloud Run project already exists or needs creation?

---

*Architecture by ORION · 2026-03-25*
