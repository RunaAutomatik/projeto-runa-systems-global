---
date: 2026-03-26
tags: [architecture, content-pipeline, freyja, arthsystems, remotion, puppeteer]
project: runa-systems-global
---

# Content Automation Pipeline — Architecture

Architecture decision document for @arthsystems_ content production pipeline.
Responds to FREYJA → ORION handoff artifact (2026-03-25).

## Current State

| Content Type | Status | Implementation |
|---|---|---|
| Carousel | ✅ Operational | Puppeteer → HTML template → PNG → Supabase |
| Image (single) | ✅ Operational | Same pipeline (1 slide) |
| Story (9:16) | ✅ Operational | Same pipeline, 1080×1920 viewport |
| Reel / Video | ❌ Stub | compositor.js returns `status: 'pending'` |
| AI Image Gen | ⚠️ Schema fields only | `mood`/`visual_direction` in brief, renderer unused |
| Publish image | ✅ Operational | instagram-worker/publish.js |
| Publish carousel | ✅ Operational | instagram-worker/publish.js |
| Publish reel | ❌ Not implemented | — |

## Architecture by Content Type

### Carousel / Image / Story → Puppeteer (keep)

No changes to core pipeline. Extend via:
- New templates in `carousel/templates/` for mood variants
- `brand` field in brief controls template selection

### AI Image Generation (Stage 1.5)

**Stack: Replicate API + Flux 1.1 Pro**

Rationale: Superior for dark/minimalist aesthetic, REST API (no Docker), supports negative prompts, better brand consistency than DALL-E 3.

```
brief (use_ai_gen: true, mood, visual_direction)
  → ai-image/renderer.js
  → POST api.replicate.com/v1/predictions (Flux 1.1 Pro)
  → poll until succeeded
  → download buffer → Supabase Storage
  → return { imageUrl }
```

Brief schema addition: `use_ai_gen: z.boolean().default(false)`

### Video / Reels

#### Stage 1 — FFmpeg Slideshow

Compose Puppeteer PNG slides into MP4 via `ffmpeg` system binary.

```
carousel slides (PNG) → ffmpeg concat filter → MP4 9:16
```

Use `child_process.execFile('ffmpeg', [...args])` in `video/compositor.js`.

Suitable for: animated Stories, slide-based Reels, simple Ads.
Effort: 1-2 days.

#### Stage 2 — Remotion Lambda

React-based programmatic video rendered on AWS Lambda (no Docker required).

```
brief (script[]) → @remotion/lambda renderMediaOnLambda() → S3 URL → publishReel()
```

Brief additions for Stage 2:
```js
script: z.array(z.object({
  duration_s: z.number(),
  visual: z.string(),
  text: z.string().optional(),
})).optional(),
audio: z.object({
  music_mood: z.string().optional(),
}).optional(),
```

**Remotion NOT recommended for Stage 1** — 4-5 day setup overhead. FFmpeg covers 80% of use cases.

### Distribution — Separate Workers (keep current architecture)

```
FREYJA brief → POST content-worker:3001/render → POST instagram-worker:3002/publish
```

Missing: `publishReel()` in `instagram-worker/src/publish-reel.js` (Stage 2).
Meta Graph API accepts reels via `media_type: REELS` + `video_url`.

## Monorepo Structure

```
apps/
  content-worker/
    src/
      brief.schema.js          ← add use_ai_gen, script, audio (Stage 1.5/2)
      carousel/renderer.js     ← done
      carousel/templates/      ← extend with mood variants
      image/renderer.js        ← done
      ai-image/renderer.js     ← CREATE (Replicate API) — Stage 1.5
      video/compositor.js      ← FILL (FFmpeg Stage 1, Remotion Stage 2)
      storage.js               ← done

  instagram-worker/
    src/
      publish.js               ← publishImage + publishCarousel (done)
      publish-reel.js          ← CREATE (Stage 2)
```

## FREYJA Brief Format

### Stage 1 (current, operational)
```json
{
  "type": "carousel",
  "content_id": "post-20260326-001",
  "brand": "dark-architect",
  "narrative": { "hook": "...", "cta": "ARQUITETO" },
  "slides": [
    { "title": "Hook", "body": "..." },
    { "body": "..." },
    { "title": "CTA", "body": "Comente ARQUITETO 👇" }
  ],
  "caption": "...",
  "hashtags": ["arquitetura"],
  "mood": "dark cinematic",
  "visual_direction": "dark background, serif typography, centered text"
}
```

### Stage 1.5 additions
```json
{
  "use_ai_gen": true
}
```

### Stage 2 additions
```json
{
  "type": "reel",
  "script": [
    { "duration_s": 3, "visual": "black screen, text fades in", "text": "Hook line" },
    { "duration_s": 5, "visual": "dark background, bullet points appear", "text": "..." }
  ],
  "audio": { "music_mood": "dark ambient" }
}
```

## Roadmap

| Phase | Deliverable | Effort |
|---|---|---|
| Stage 1 (now) | FFmpeg compositor for slide-based reels | 1-2 days |
| Stage 1.5 | Replicate AI Image Gen + use_ai_gen flag | 1-2 days |
| Stage 2 | Remotion Lambda + publishReel + script field | 4-5 days |

## Related
- [[runa-systems-business-context]]
- [[conversion-framework-cta]]
- apps/content-worker/src/brief.schema.js
- apps/content-worker/src/video/compositor.js
