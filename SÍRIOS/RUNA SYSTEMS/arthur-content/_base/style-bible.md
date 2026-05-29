---
date: 2026-05-28
tags: [maya, genhq, arthur, style-bible]
project: runa-systems-global
type: brain-file
updated: 2026-05-28
canonical-source: apps/lp-runa/src/globals.css
---

# Style Bible — Arthur Runa (_base)

Living document. MAYA reads this at the start of every session.
Append to "Works" / "Fails" / "Session Notes" after each generation session.

---

## Aesthetic DNA

```
organic | biofílico | warm | architectural | solarpunk
```

**Temperature:** warm-cool hybrid — cream and amber anchor the warmth; sage and deep forest anchor precision.
**Dominant feeling:** a Brazilian architect who works at the intersection of nature and systems.
**Never:** tech-bro, cold-minimal, motivational poster, luxury fashion, generic dark mode.

---

## What Consistently Works

### Prompts / Patterns

```
- "deep forest dark background (#0E1410)" → grounds Arthur without flattening the image
- "sage green accent lighting" → warm-cool separation; Arthur reads as present, not ghostly
- "warm amber rim light" → separates Arthur from background; adds solarpunk warmth
- "biophilic ambient light" → diffused, organic, zero hard technical shadows
- "black fitted turtleneck" → consistent wardrobe anchor; signals architect without label
- "architectural lighting" → controlled precision; never clinical
- "dappled forest light" → Solarpunk nature layer; works in outdoor/semi-outdoor scenes
- "neutral confident expression" → direct gaze without aggression
- "upright posture, controlled movement" → architect embodiment, never casual slouch
- "cinematic, 9:16" → primary Reels format; Higgsfield gpt_image_2 reads this correctly
```

### Prompt Combos by Scene Type

**Forest / Interior dark (default):**
```
black fitted turtleneck, deep forest dark background (#0E1410),
sage green accent lighting, warm amber rim light, architectural composition,
cinematic, 9:16
```

**Urban / Outdoor architectural:**
```
dark technical jacket, urban architectural environment,
natural ambient light with warm afternoon quality, purposeful stride,
sage undertones in shadow areas, cinematic, 9:16
```

**Editorial / Brand post (Papel mode):**
```
white fitted shirt + black trousers, warm cream background (#F2EEDF),
soft directional natural light, sage accent in shadow fill,
controlled expression, medium shot, 1:1
```

**Tech / Digital:**
```
black fitted turtleneck, standing near digital interface,
deep forest dark background (#0E1410),
sage green accent lighting, warm amber rim light,
sharp focus on face, architectural composition
```

### Model Notes

**GPT Image 2 via Higgsfield CLI (Method 1 — PRIMARY):**
- Best for: complex scenes, props, cars, environments, urban architecture, outdoor
- Requires: 10 Arthur reference media IDs (`--image <uuid>` × 10, see reference-ids.md)
- Role must be `image` not `reference` for gpt_image_2
- Quality: `--quality high --resolution 2k` for final assets; `medium / 1k` for drafts
- Prompt structure: scene description first, then lighting, then technical params
- Validated: Arthur + Mustang at night (job `04c2c44e`) — excellent geometry + consistency

**soul_2 via Higgsfield MCP (Method 2 — SECONDARY):**
- Best for: formal portraits, headshots, close-ups without props
- Soul ID: `a4f9c61c-e105-4bb8-833d-c40158ef6224`
- Do NOT use for: scenes with cars, objects, hands manipulating things, complex backgrounds
- `enhance_prompt: false` when soul_id is provided — do not let model rewrite the scene
- MCP tool: `generate_image(model: text2image_soul_v2, soul_id: ..., prompt: ...)`

**Selection rule:**
```
Scene has props / car / environment / physical action  →  Method 1 (GPT Image 2 + 10 refs)
Formal portrait / headshot / close-up                 →  Method 2 (soul_2)
```

**nano-banana-2 (infsh fallback — non-Arthur images):**
- Use for: brand textures, abstract solarpunk scenes without Arthur
- App ID: `google/gemini-3-flash-image`
- Do NOT use for: Arthur's face — no UUID ref support, drift is high

**Seedance 2.0 (video):**
- Primary: Higgsfield MCP `generate_video` → `job_status` → `job_display`
- Fallback chain: infsh `higgsfield/seedance-2` → KIE.AI `kie-client.py --model seedance-2`
- Format: `aspect_ratio: 9:16`, `duration: 6` for Reels
- Prompt: open with Arthur physical description before any scene description

---

## What Consistently Fails

```
- "black dominant background" (#000000) → flat, dead; loses the forest warmth of Solarpunk Híbrido
- "electric blue accent" / "ambient blue light" / "cold blue rim" → old SINTROPIA; wrong universe
- "neon" / "purple glow" / "LED strip lights" → wrong aesthetic entirely
- "glassmorphism" → trendy, not biophilic, not on-brand
- "motivational tech aesthetic" → generic, commodity; kills architect positioning
- "warm orange" / "sunny warm light" (uncontrolled) → too casual, loses forest quality
- "pure white background" → not on-brand; use cream (#F2EEDF) for Papel mode
- "casual clothes" / "graphic tees" / "bright colors" → wardrobe rule violation
- "smiling wide" / "relaxed informal pose" → undermines architect narrative
- "enhance_prompt: true" with soul_2 when soul_id is set → model rewrites scene, ignores brief
```

---

## Current Best Prompt Template

### Instagram Reels (9:16, Forest mode — dark)

```
Arthur Runa, Brazilian male late 20s, sharp jaw, dark brown eyes,
dark brown short hair, athletic but lean ~1.80m, neutral confident expression,
upright posture, [OUTFIT: black fitted turtleneck],
[SCENE: standing in dark architectural workspace / urban exterior at dusk / ...],
deep forest dark background (#0E1410), sage green accent lighting,
warm amber rim light (#B47B3F), biophilic ambient light,
architectural composition, cinematic, 9:16
```

### Feed Post (1:1, Papel mode — light)

```
Arthur Runa, Brazilian male late 20s, sharp jaw, dark brown eyes,
dark brown short hair, athletic but lean ~1.80m, neutral confident expression,
upright controlled posture, [OUTFIT: white fitted shirt + dark trousers],
[SCENE: minimal editorial, light architectural interior],
warm cream background (#F2EEDF), soft directional natural light,
sage green fill in shadow areas, amber warmth in highlights,
medium shot, 1:1, editorial photography style
```

### Talking Head / Avatar (HeyGen / soul_2 portrait)

```
Arthur Runa, Brazilian male late 20s, sharp jaw, dark brown eyes,
dark brown short hair, athletic lean ~1.80m, neutral expression,
direct eye contact, dark turtleneck or crewneck,
clean deep forest dark background (#0E1410),
sage green side accent, warm amber rim
```

---

## Lighting Vocabulary

Terms validated for Solarpunk Híbrido — use these, not the SINTROPIA-era terms.

| Term | Hex / Token | When to use |
|------|------------|-------------|
| `sage green accent lighting` | `#4A6B4E` (Papel) / `#88A88E` (Forest) | Key or fill light; adds presence without coldness |
| `warm amber rim light` | `#B47B3F` (Papel) / `#D4A574` (Forest) | Backlight separation; solarpunk warmth layer |
| `deep forest dark background` | `#0E1410` | Dark mode scenes; Forest theme primary BG |
| `biophilic ambient light` | — | Diffused, organic, no hard technical shadows |
| `architectural lighting` | — | Controlled precision shafts; intentional, not random |
| `dappled forest light` | — | Filtered through canopy; outdoor/semi-outdoor only |
| `warm cream surface` | `#F2EEDF` | Papel mode backgrounds and surfaces |
| `soft afternoon warm quality` | — | Outdoor scenes; describes amber/golden light direction |
| `directional natural light` | — | Clean window or skylight source; Papel mode editorial |

### Do NOT use these terms (old SINTROPIA / wrong universe)

| Forbidden term | Why |
|----------------|-----|
| `ambient blue light` | SINTROPIA identity — incompatible with Solarpunk Híbrido |
| `cold rim lighting` | Wrong temperature — kills amber warmth |
| `ambient blue LED` | Tech-bro aesthetic; not biophilic |
| `neon` | Wrong aesthetic universe |
| `purple glow` | Wrong aesthetic universe |
| `cold studio lighting` | Too clinical; not organic |
| `harsh spotlight` | Breaks biophilic softness |

---

## Camera / Composition Notes

| Parameter | Recommendation | Rationale |
|-----------|----------------|-----------|
| **Shot size** | Medium (waist-up) | Best face fidelity preservation with gpt_image_2 refs |
| **Aspect ratio** | 9:16 primary | Instagram Reels; Higgsfield reads this natively |
| | 1:1 secondary | Feed posts, carousels |
| **Angle** | Slight low angle or eye-level | Architect authority; never high-angle (diminishes presence) |
| **Framing** | Rule of thirds — Arthur slightly off-center | Environment/architecture fills the remaining frame |
| **Close-up use** | Test carefully | Model can drift from refs at high proximity with gpt_image_2 |
| **Background fill** | Always forest dark (#0E1410) or architectural texture | Empty/white BG kills the world-building |
| **Depth** | Shallow with bokeh suggestion | Separates Arthur from background without harsh cutout |

### Composition Archetypes (architect reinforcement)

1. **Architect surveying** — Arthur in foreground, architectural structure receding behind him
2. **System builder** — Arthur near diagram / interface, not looking at camera, purposeful gaze
3. **Threshold** — Arthur standing in a doorway or transition space; metaphor for build/cross/enter
4. **Editorial minimal** — clean Papel background, Arthur's posture as the only composition element

---

## Session Notes

*(Append after each generation session — do not delete previous entries)*

### Template
```
## YYYY-MM-DD — [session type: editorial / reels / avatar / product]
Generated: [N] assets
Approved: [N] | Rejected: [N]
Method used: [GPT Image 2 + refs | soul_2 | nano-banana-2 | Seedance]
Key learning: [one sentence]
Pattern added to "Works": [yes — what] / no
Pattern added to "Fails": [yes — what] / no
```

---

<!-- THIS FILE IS THE PRIMARY INTELLIGENCE ACCUMULATOR -->
<!-- MAYA: read this before generating. Append after generating. -->
<!-- All tokens sourced from: apps/lp-runa/src/globals.css -->
