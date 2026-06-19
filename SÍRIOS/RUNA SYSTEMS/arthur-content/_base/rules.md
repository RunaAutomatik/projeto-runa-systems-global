---
date: 2026-05-28
tags: [rules, runa-extensions, genhq, maya]
type: brain-file
project: runa-systems-global
---

# RUNA Systems — GenHQ Extensions

> RUNA-specific extension layer for the GenHQ framework.
> The GenHQ skeleton is preserved as-is. This file adds steps that are
> exclusive to the RUNA Systems ecosystem — before, inside, and after the framework.
> In case of conflict, the GenHQ framework takes precedence structurally;
> RUNA extensions add constraints, never override framework logic.

---

## Pré-Framework

Steps required **before** starting any GenHQ production session for @arthsystems_ content.

### 1. FREYJA Brief — Mandatory

All @arthsystems_ content starts with a FREYJA `*brief-maya` brief.
No image or video generation for Arthur's personal brand begins without narrative direction from FREYJA.

- FREYJA defines: content type, narrative direction, style, technical spec, product context
- Brief format: see `.claude/rules/epic-paper-usage.md` → FREYJA → MAYA Brief Format
- Exception: standalone generation tasks (non-@arthsystems_, drafts, explorations) may skip this step

### 2. GPT Image 2 Prompt Gallery — Mandatory Consultation

Before writing any image generation prompt, consult the community gallery.

- Rule file: `.claude/rules/gpt-image-2-skill-usage.md`
- Step 1: open `references/gallery.md` (category routing index)
- Step 2: load the closest category file (one per request; max 3 for hybrid styles)
- Step 3: load `references/craft.md` only for dense text, UI mockups, or complex layouts

Arthur @arthsystems_ aesthetic → start with: `cinematic-film-references` (147–152) or `photography` (63–66).

FREYJA embeds gallery patterns in the brief → MAYA does NOT re-consult if gallery already cited in brief.
MAYA generating autonomously → MAYA MUST consult gallery directly before writing any prompt.

### 3. Conversion Post Protocol

Every post that goes to production must have all 4 elements before publishing:

| Element | What it is |
|---------|-----------|
| **Keyword** | DM trigger word (e.g., RUNA, SISTEMA, ARQUITETO) |
| **Zernio automation** | Keyword → DM response configured in Zernio API |
| **Entregável** | Deliverable sent via DM (PDF, doc, prompt, template) |
| **Checkout link** | Active payment link for RUNA (R$ 7.000) |

Rule file: `.claude/rules/conversion-post-protocol.md`
A post without all 4 = incomplete. Do not publish.

---

## Dentro do Framework

RUNA-specific constraints applied **inside** the GenHQ production process.

### Dual-Method Higgsfield — Decision Tree

```
Scene has props / car / environment / action / objects
  → Method 1: gpt_image_2 + 15 reference UUIDs

Formal portrait / headshot / close-up (face only, no complex geometry)
  → Method 2: text2image_soul_v2 + soul_id
```

**Method 1 — GPT Image 2 + Reference Photos (primary)**

```bash
higgsfield generate create gpt_image_2 \
  --prompt "[cinematic scene description]" \
  --image <uuid_01> ... --image <uuid_15> \
  --quality high --resolution 2k --aspect_ratio 9:16 --wait
```

- UUIDs: see `_base/reference-ids.md` → Type A (current set)
- UUIDs status as of 2026-05-28: 15-photo upload pending → all TBD
- `role: "image"` for all media (CLI handles automatically)

**Method 2 — soul_2 Portrait (secondary)**

```json
{
  "model": "text2image_soul_v2",
  "soul_id": "a4f9c61c-e105-4bb8-833d-c40158ef6224",
  "prompt": "[portrait description — person only, no background]",
  "enhance_prompt": false
}
```

- Soul ID status as of 2026-05-28: needs retraining on new 15-photo set
- Do NOT use for scenes with cars, complex props, or physical action

Rule file: `.claude/rules/higgsfield-mcp-usage.md`

### Paleta Mandatória — Solarpunk Híbrido

All generated content for @arthsystems_ must align with the dual-theme Solarpunk identity.

**Papel theme (light / Instagram day content):**
- Background: `oklch(0.9450 0.0200 90)` ≈ `#F2EEDF` — warm cream
- Sage primary: `oklch(0.4650 0.0450 145)` ≈ `#4A6B4E`
- Amber accent: `oklch(0.6050 0.1050 65)` ≈ `#B47B3F`

**Forest theme (dark / Instagram night content, Reels):**
- Background: `oklch(0.1650 0.0080 145)` ≈ `#0E1410` — deep forest
- Sage Forest: `oklch(0.6850 0.0450 145)` ≈ `#88A88E`
- Amber Forest: `oklch(0.7450 0.0850 75)` ≈ `#D4A574`

**FORBIDDEN in all generated content:**
- `#000000` as dominant background or surface
- `#0040FF` electric blue (any shade)
- `#1A1A1A` charcoal as primary surface
- Purple/neon gradients
- Glassmorphism
- Cold/sterile industrial aesthetic

Full token reference: `_base/color-palette.md`
Aesthetic rules + What Fails: `_base/style-bible.md`

### Inverse Prompt

The Inverse Prompt (model-agnostic character + style description for Arthur) lives in:

```
_base/reference-ids.md → ## Inverse Prompt (Model-Agnostic)
```

- Use this as the base character anchor for all generation methods
- The UUIDs in Method 1 are Higgsfield-specific — use them alongside the Inverse Prompt for gpt_image_2 calls
- For soul_2 (Method 2), the soul_id replaces the Inverse Prompt as the character anchor
- Never invent a character description from scratch — always pull from `reference-ids.md`

---

## Pós-Framework

Steps required **after** image/video generation, before any asset is published.

### 1. Paper MCP — Carousel Composition

After generating the images with Higgsfield, carousel assets go through Paper Desktop composition.

- Tool: `epic-paper` skill → Paper MCP (local HTTP at `http://127.0.0.1:29979/mcp`)
- Flow: MAYA uses `mcp__paper__create_artboard` + `mcp__paper__write_html` per slide
- Canvas: 1080×1080 per slide
- Screenshot verification after each slide: `mcp__paper__get_screenshot`
- Rule file: `.claude/rules/epic-paper-usage.md`
- Requires: Paper Desktop app open with file loaded

This step applies to carousels. For standalone images (feed posts), Paper MCP is optional.

### 2. FREYJA `*av-review` — Mandatory Approval

No @arthsystems_ asset ships without FREYJA's narrative approval.

FREYJA checks (6-point review):
- Architect Frame (never recovery/burnout narrative)
- Style Fidelity (matches requested style: ARCHITECT / MANIFESTO / TERMINAL)
- Product Alignment (serves the active product being sold)
- Cognitive Tension (visual gap that creates desire)
- Voice DNA (Arthur's visual identity)
- Technical Quality (no artifacts, correct dimensions)

Result: APPROVED ✅ → proceed to publishing | REJECTED ❌ → MAYA regenerates with FREYJA feedback
Escalation: if MAYA asset is rejected 3+ times, escalate to @aiox-master for brief clarification.

### 3. HERMES — Publishing via Zernio + n8n

All @arthsystems_ publishing goes through HERMES using Zernio API + n8n automation.
**Never publish manually** (no direct Instagram app posting, no manual scheduling outside Zernio).

- Zernio tool: `mcp__zernio__posts_create` or `mcp__zernio__posts_publish_now`
- Account disambiguation: always verify `account_id` before posting (multiple accounts possible)
- Before publishing: confirm all 4 Conversion Post Protocol elements are active (see Pré-Framework §3)

---

## File Dependency Map

```
_base/rules.md (this file)
  ├── references: _base/reference-ids.md   (Inverse Prompt, UUIDs, soul_id)
  ├── references: _base/color-palette.md   (Solarpunk tokens)
  ├── references: _base/style-bible.md     (aesthetic rules, What Works/Fails)
  ├── references: _base/environment-descriptors.md  (environment stubs)
  └── references: Skills/Skills MAYA Framework GenHQ.md  (framework skeleton)

Rule files (in .claude/rules/):
  ├── higgsfield-mcp-usage.md   (Method 1 + Method 2 full docs)
  ├── epic-paper-usage.md       (Paper MCP carousel workflow)
  ├── gpt-image-2-skill-usage.md  (gallery consultation protocol)
  └── conversion-post-protocol.md  (4-element publishing gate)
```

---

## Verification Checklist

MAYA should be able to answer these from the brain files:

| Question | Source |
|----------|--------|
| Method 1 or Method 2 for a scene with a car? | Method 1 (gpt_image_2 + refs) — this file §Dentro |
| When to use Paper MCP? | After image generation, for carousel composition — this file §Pós |
| Inverse Prompt for Arthur? | `_base/reference-ids.md` → Inverse Prompt section |
| FORBIDDEN colors? | This file §Dentro + `_base/color-palette.md` |
| Can MAYA publish directly to Instagram? | No — must go through FREYJA review + HERMES/Zernio |
| What 4 elements must exist before publishing? | Keyword + Zernio automation + Entregável + Checkout |
