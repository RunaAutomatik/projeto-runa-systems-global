---
date: 2026-05-28
tags: [maya, genhq, arthur, references, uuids]
project: runa-systems-global
type: brain-file
updated: 2026-05-28
---

# Reference IDs — Arthur Runa (_base)

Master catalog of all Higgsfield UUIDs and external IDs organized by reference type.
Inverse Prompts enable use of reference patterns with models that have no UUID system.

---

## Type A — Human References

### Arthur Runa — Character Sheet

> ✅ **UUID STATUS: NEW CHARACTER SHEET UPLOADED — 2026-05-28**
> 29 Arthur photos uploaded to Higgsfield (15 primary + 14 supplementary).
> Folder 2 (burst session 14:48–14:50) = PRIMARY 15 for gpt_image_2 CLI template.
> Old 10 UUIDs (pre-2026-05-28): retained below for reference only.

#### Old UUIDs (deprecated — trained on previous character photos)

| UUID | Status |
|------|--------|
| 06525df3-7237-4781-8278-0f45c684c7f2 | DEPRECATED |
| 4a62aea6-e32a-471f-a3ca-33e3b25818b6 | DEPRECATED |
| 57c94747-552b-445b-85f0-d938023b7d16 | DEPRECATED |
| d64514a1-1721-4193-87b5-baccd4ffae8a | DEPRECATED |
| 4c6dba30-8e82-4174-af0f-df3e3f088388 | DEPRECATED |
| 9a7aeaaa-570a-43ac-a312-c44df0e673d6 | DEPRECATED |
| 397662ef-b437-4351-a3dc-8c0c82343546 | DEPRECATED |
| a9915873-6b1a-4d50-883b-896024725834 | DEPRECATED |
| d526ad1d-f25b-4474-8ddb-e21a31ea2b81 | DEPRECATED |
| 02f6d3ea-eb41-415d-83fb-81b728117110 | DEPRECATED |

#### Folder 2 PRIMARY — 15 refs ✅ (burst 14:48–14:50 — use these for gpt_image_2 CLI)

| Photo filename | Higgsfield UUID |
|---------------|----------------|
| 14.48.47.jpeg | acb33bff-a019-489a-869c-0207f214d765 |
| 14.48.48 (1).jpeg | 2f24a94f-9905-4357-a78e-fb132187f343 |
| 14.48.48 (2).jpeg | 1b34fd83-ea2c-47f2-a730-500accb5fb30 |
| 14.48.48 (3).jpeg | 870aa8c9-0d6b-419e-8226-edb38aa8318f |
| 14.48.48 (4).jpeg | 1077bd54-7de9-4022-9b9f-29b4ce4efb62 |
| 14.48.48.jpeg | 83d39e51-f1ed-40bc-bd74-bd56b595f681 |
| 14.48.49 (1).jpeg | d444658d-a625-4c24-bb88-477a4907df4e |
| 14.48.49 (2).jpeg | a25b9b76-c6fa-4715-9379-5e2d35084bc0 |
| 14.48.49 (3).jpeg | db5086a5-55d3-412c-895e-39eeeda1d177 |
| 14.48.49 (4).jpeg | 16f01e94-158c-455f-8c75-f448dce77d7d |
| 14.48.49 (5).jpeg | 14c4b1d4-e05a-49c4-b38c-8a5df0394963 |
| 14.48.49.jpeg | 461aa7b3-49d7-4446-a67e-780b65e5b0d7 |
| 14.48.50 (1).jpeg | f8492c76-35ba-49f5-9ee6-35395b5e1a54 |
| 14.48.50 (2).jpeg | e187ad6a-8de5-47bb-8267-c38b9476b8fb |
| 14.48.50.jpeg | 6c2f8764-6f5c-4566-8522-e9fe63239574 |

#### Folder 1 Supplementary — 14 refs ✅ (morning session 12:14–12:52)

| Photo filename | Higgsfield UUID |
|---------------|----------------|
| 12.14.32.jpeg | 6a4309ed-5333-463a-a883-a1e1fb9b88d3 |
| 12.14.49.jpeg | 83e75396-b908-4c0a-8bd6-5a956323c7d4 |
| 12.15.13.jpeg | 8a8b4df3-1360-4a49-bc75-df99995e21e2 |
| 12.16.33.jpeg | d34082b2-4786-4b7c-890f-24c1e9f876b7 |
| 12.16.58.jpeg | 710ad214-cb51-4ae8-92dd-31b0b1baca25 |
| 12.17.28.jpeg | 17713aed-fbd6-4fab-b4a7-3281d8620702 |
| 12.27.32.jpeg | 0daef1f8-c825-4c19-b66e-716c37ab6057 |
| 12.32.50.jpeg | 827b22ab-d479-4808-b89e-98dcf508c001 |
| 12.36.52.jpeg | 54e7b4c4-8e57-42f2-9a95-ac3c9a97a2ab |
| 12.40.00.jpeg | fec72eab-bb1f-405b-a015-74dd3f124765 |
| 12.40.22.jpeg | d16ec8c3-7b6e-460b-8937-b69fe0e779a3 |
| 12.51.31.jpeg | 3f30695c-0e1f-4197-8398-a8067e4d2956 |
| 12.51.55.jpeg | 58322372-f011-4bbb-889e-1cc0497af4dd |
| 12.52.40.jpeg | 8234d8f4-5c2f-4613-b738-91bdb121fb5d |

**Soul ID (soul_2 model):** `a4f9c61c-e105-4bb8-833d-c40158ef6224`
*(Retrain recommended after uploading new character sheet.)*

**Inverse Prompt (model-agnostic — updated 2026-05-28):**
```
Arthur Runa, white male, early-to-mid 30s, brown hair side-parted and swept back
(medium-length, slightly wavy, well-groomed), full reddish-auburn beard,
light blue-green eyes, slim-medium build with high cheekbones and defined jaw,
confident posture — expression range from neutral/serious to genuine warm smile
```

**When to use UUIDs vs Soul ID:**
| Method | Use Case |
|--------|---------|
| `--image <uuid>` × 15 (gpt_image_2) | Complex scenes, environments, action, props — requires new UUIDs after upload |
| `soul_id` (soul_2 model) | Formal portraits, headshots, close-ups without complex props |
| Inverse Prompt (text) | Any model without UUID support (nano-banana-2, HeyGen, muapi, etc.) |

**CLI command template (Folder 2 PRIMARY — updated 2026-05-28):**
```bash
higgsfield generate create gpt_image_2 \
  --prompt "[scene description]" \
  --image acb33bff-a019-489a-869c-0207f214d765 \
  --image 2f24a94f-9905-4357-a78e-fb132187f343 \
  --image 1b34fd83-ea2c-47f2-a730-500accb5fb30 \
  --image 870aa8c9-0d6b-419e-8226-edb38aa8318f \
  --image 1077bd54-7de9-4022-9b9f-29b4ce4efb62 \
  --image 83d39e51-f1ed-40bc-bd74-bd56b595f681 \
  --image d444658d-a625-4c24-bb88-477a4907df4e \
  --image a25b9b76-c6fa-4715-9379-5e2d35084bc0 \
  --image db5086a5-55d3-412c-895e-39eeeda1d177 \
  --image 16f01e94-158c-455f-8c75-f448dce77d7d \
  --image 14c4b1d4-e05a-49c4-b38c-8a5df0394963 \
  --image 461aa7b3-49d7-4446-a67e-780b65e5b0d7 \
  --image f8492c76-35ba-49f5-9ee6-35395b5e1a54 \
  --image e187ad6a-8de5-47bb-8267-c38b9476b8fb \
  --image 6c2f8764-6f5c-4566-8522-e9fe63239574 \
  --quality high --resolution 2k --aspect_ratio 9:16 --wait
```

---

## Type A — Additional Soul IDs (other people)

| Person | Soul ID | Training Date | Notes |
|--------|---------|---------------|-------|
| *(add as trained)* | | | |

---

## Type B — Style References

> **Brand palette: Solarpunk Híbrido** — warm Papel (cream `#F2EEDF`, sage `#4A6B4E`, amber `#B47B3F`) +
> Forest dark (`#0E1410`, sage `#88A88E`, amber `#D4A574`). Warm tones are REQUIRED — never convert
> warm to cold. FORBIDDEN: electric blue `#0040FF`, dominant black `#000000`, cold indigo, charcoal
> `#1A1A1A` as dominant surface.

---

### Setup — Computer Workspace Series (6 images)

> All 6 images: Warm Solarpunk Híbrido Papel palette — golden hour, amber, sage, natural materials.
> BRAND ALIGNED — use warm tones as-is. No conversion needed.

---

#### B-S01 — Tech Sanctuary Empty ✅
**ID:** `0329a543_1` · **UUID:** `TBD_UPLOAD` · **Source:** Midjourney (Setup)
**When to use:** Workspace establishing shots; "place of creation" backgrounds; no-person frames.
**Encoded rules:** Desk perpendicular to panoramic window; dual monitors flank view; recliner = meditation zone; elevated mountain position; premium natural materials.

**Inverse Prompt:**
```text
Minimalist premium workspace, empty — dual monitors flanking panoramic floor-to-ceiling window,
mountain panorama beyond, Eames-style recliner in corner, natural warm wood surfaces, elevated position.
Warm golden hour light through glass, amber desk lamp glow, sage-tinted plants framing the desk.
Cream-warm walls, biophilic organic materials throughout.
```

---

#### B-S02 — Creator Against Panorama ✅
**ID:** `3e2dd347_3` · **UUID:** `TBD_UPLOAD` · **Source:** Midjourney (Setup)
**When to use:** Ambition/scale posts; "thinking big" establishing shots; person-from-behind frames.
**Encoded rules:** Figure occupies ~15% of frame; panoramic window dominates; dual curved monitors echo window curve; identity implied, not shown.

**Inverse Prompt:**
```text
Person from behind at desk, small figure against massive floor-to-ceiling panoramic window,
dual curved monitors, mountain landscape beyond, scale of creator vs. world.
Warm golden sunset light fills the frame — amber atmospheric depth, sage-tinted mountains,
warm cream interior. Solarpunk Híbrido palette — use warm tones as-is.
```

---

#### B-S03 — Three-Layer Depth ✅
**ID:** `7b7bccf6_0` · **UUID:** `TBD_UPLOAD` · **Source:** Midjourney (Setup)
**When to use:** Systems/perspective posts; recursion and meta-thinking content.
**Encoded rules:** Three-layer composition: desk → window frame → valley; one monitor mirrors exterior (recursion effect); figure from behind.

**Inverse Prompt:**
```text
Creator from behind at desk, one monitor displaying the exterior landscape (recursive mirror effect),
deep three-layer composition: desk → window frame → panoramic valley.
Warm golden light throughout — amber atmospheric depth, sage-tinged vegetation beyond window,
warm wood desk surface.
```

---

#### B-S04 — Empty Throne ✅ PRIORITY
**ID:** `7b7bccf6_3` · **UUID:** `TBD_UPLOAD` · **Source:** Midjourney (Setup)
**When to use:** CTA/invitation posts; "your seat is waiting" messaging; empty-chair framing.
**Encoded rules:** Chair as protagonist; viewer = implied occupant; most saturated warm image in set — highest Solarpunk Híbrido intensity.

**Inverse Prompt:**
```text
Empty ergonomic chair before dual ultrawide monitors, floor-to-ceiling window, implied viewer presence, cinematic.
Rich warm golden sunset floods the scene — amber walls glowing, warm sage ambient light on screens,
warm cream light pouring through window. Most saturated Solarpunk Híbrido entry — use warm palette at full intensity.
```

---

#### B-S05 — Corner Command Post ✅
**ID:** `b9f0ff30_3` · **UUID:** `TBD_UPLOAD` · **Source:** Midjourney (Setup)
**When to use:** Architecture/systems posts; "seeing all angles" content; dual-window setups.
**Encoded rules:** L-shape corner maximizes two window faces; angular architectural interior; geometric ceiling; orthogonal lines dominant.

**Inverse Prompt:**
```text
Corner workspace, two perpendicular floor-to-ceiling windows meeting at 90°,
dual monitors, angular architectural interior with geometric ceiling, light from two sides.
Warm golden hour fills both window faces — amber atmospheric light, sage accent from plants,
organic warm materials throughout.
```

---

#### B-S06 — Open Air Minimalism ✅
**ID:** `f1e0184e_0` · **UUID:** `TBD_UPLOAD` · **Source:** Midjourney (Setup)
**When to use:** Simplicity/focus posts; "you don't need much" messaging; freedom-as-discipline.
**Encoded rules:** Outdoor terrace desk; elevated coastal position; single monitor (constraint = clarity); oil lamp = artisanal intent; no walls = openness.

**Inverse Prompt:**
```text
Person from behind at outdoor terrace desk, elevated coastal position, single monitor, oil lamp,
coastal mountains and ocean in distance, open-air setup with no walls, minimal.
Warm golden hour light — amber oil lamp glow, sage coastal vegetation, warm natural stone surfaces.
Solarpunk Híbrido: organic simplicity in warm atmosphere.
```

---

### Estilos — Coastal & Cliff Series (3 images)

---

#### B-E01 — Architect at the Edge ✅
**ID:** `5a3f11a5_0` · **UUID:** `49bd5752-d1d1-4f71-b2f1-a124e9f2f183` · **Source:** Midjourney (Estilos)
**When to use:** Contrarian/edge-thinker positioning; "standing apart" content; vision posts.
**Encoded rules:** Triptych diagonal composition; subject on extreme terrain; natural fur signals authority in hostile context; coastal verticality.

**Inverse Prompt:**
```text
Man standing on coastal rock cliff edge, natural fur cloak, arms at sides, looking out to sea,
triptych/three-panel composition, vertical cliff walls framing figure, raw terrain.
Warm golden coastal light — amber atmospheric haze, sage-tinted ocean in distance, warm natural stone cliff.
```

---

#### B-E02 — Stone & Glass Command ✅ BRAND ALIGNED (Forest dark variation)
**ID:** `c37ec5f0_0` · **UUID:** `7ede68b0-60c8-469b-9d09-d49c6f3fa976` · **Source:** Midjourney (Estilos)
**When to use:** HIGHEST PRIORITY — Forest dark palette; vision/identity posts; architectural brand demonstration.
**Encoded rules:** Natural stone cliff becomes the architecture; glass wall merges interior/exterior; grey-sage stone palette maps to Forest dark; stone slab desk = permanence.

**Inverse Prompt:**
```text
Stone cliff face as architectural wall, glass facade merging interior with exterior cliff,
stone slab desk, laptop open, natural sage-grey stone palette with warm amber accents,
architecture built INTO natural rock.
Forest dark variation: evening light, #0E1410 shadows, sage green stone faces, amber ember glow within.
```

---

#### B-E03 — Cliff Edge Workspace ✅
**ID:** `bc4c61cb_0` · **UUID:** `77ba0ee3-0c90-4b7b-9b2a-04592b796826` · **Source:** Midjourney (Estilos)
**When to use:** "Build from anywhere" content; freedom-as-discipline; constraint = focus posts.
**Encoded rules:** Rocky terrain as desk surface; ocean as backdrop; single laptop = only tool needed; extreme context highlights clarity through limitation.

**Inverse Prompt:**
```text
Laptop placed on rocky coastal terrain at ocean's edge — rock is the desk,
dramatic ocean backdrop, waves, horizontal infinity.
Warm amber cliff light — natural golden stone, sage-tinted ocean depth, warm coastal atmosphere.
```

---

### Estilos — Surreal Scale Series (3 images)

---

#### B-E04 — Anti-Gravity Architecture ✅
**ID:** `99e3a578_0` · **UUID:** `33aa7e59-150f-42ac-9694-1de58793a30c` · **Source:** Midjourney (Estilos)
**When to use:** "Think impossible" / disruption content; framework or product launches.
**Encoded rules:** Floating rock island defies physics; ancient stone texture on impossible form; empty = viewer is the next arrival; scale rules do not apply.

**Inverse Prompt:**
```text
Massive floating rock island in mid-air above clouds, ancient stone texture,
impossible architecture in surreal sky, empty — viewer implied as next arrival.
Warm golden sunset sky — amber atmospheric depth, sage-tinged ancient stone, golden hour clouds below island.
Solarpunk Híbrido: organic impossible architecture in warm organic atmosphere.
```

---

#### B-E05 — Walking Impossible Ground ✅
**ID:** `99e3a578_3` · **UUID:** `cfd33901-49ba-4e03-973d-268d624b0421` · **Source:** Midjourney (Estilos)
**When to use:** Action-despite-uncertainty content; tutorial starts; "this seems impossible but here's someone doing it."
**Encoded rules:** Tiny human on floating island edge; courage + scale contrast; the extraordinary becomes ordinary once you're there.

**Inverse Prompt:**
```text
Tiny human figure walking on edge of massive floating rock island above clouds,
impossible becomes ordinary once you're there, scale: human vs. architecture.
Warm golden sunset behind figure — amber-lit clouds, warm ancient stone underfoot, silhouette in golden light.
```

---

#### B-E06 — Dwarfed by Technology ✅
**ID:** `6ab549c8_0` · **UUID:** `8c1326ea-07d2-48d8-b97a-9edef24b6f13` · **Source:** Midjourney (Estilos)
**When to use:** AI/technology power posts; scale-reveal content; "what we're building."
**Encoded rules:** Human at ~5% of frame height; alien biomorphic tech structure dominates; organic curves + mechanical precision; awe, not fear.

**Inverse Prompt:**
```text
Tiny human figure dwarfed by massive alien biomorphic technology structure,
human at base looking up, organic curves meet mechanical precision, scale implies awe.
Warm Papel version: warm amber bio-glow throughout structure, organic golden light emanating from form.
Forest dark version: deep forest dark atmosphere (#0E1410), sage green bioluminescence (#88A88E)
from organic curves, warm amber ember light at base where human stands.
```

---

### Estilos — Workspace Architecture Series (2 images)

---

#### B-E07 — Organic Glass Studio ✅ PRIORITY (most Solarpunk entry)
**ID:** `ecdf3fff_0` · **UUID:** `b2adf69b-a760-4d29-ab57-f73d500a47c0` · **Source:** Midjourney (Estilos)
**When to use:** Deep work / environment design posts; "space where thinking happens"; HIGHEST PRIORITY for Solarpunk Híbrido content.
**Encoded rules:** Organic arch = frame-within-frame; glass roof brings sky inside; stone desk = permanence; vegetation integrated = biophilic; curve softens tech.

**Inverse Prompt:**
```text
Interior organic stone arch as room frame, glass roof showing sky, stone desk with laptop,
vertical vegetation integrated into architecture, biophilic design studio.
Warm golden natural light through glass ceiling — sage green vertical vegetation walls,
amber wood accents on desk, organic stone in cream-warm tones.
Most biophilic and Solarpunk-aligned entry in the entire catalog.
```

---

#### B-E08 — Reflected Architecture ✅
**ID:** `ecdf3fff_3` · **UUID:** `71627010-9a43-4d02-adc7-7f7b95a81f41` · **Source:** Midjourney (Estilos)
**When to use:** Systems/architecture posts; "what you build reflects back" messaging.
**Encoded rules:** Stone columns create vertical rhythm; reflective pond doubles the full composition; symmetry as design principle; permanence.

**Inverse Prompt:**
```text
Ancient stone columns framing view, perfectly still reflective pond doubling the architectural composition,
symmetry, permanence, vertical stone rhythm.
Warm golden stone columns — amber atmospheric depth, sage-tinted water reflections, warm earth palette.
```

---

### Estilos — Portal Architecture Series (3 images)

---

#### B-E09 — The Portal (Warm Interior) ✅
**ID:** `7febb009_1` · **UUID:** `5bf21894-6234-4386-8a02-aa21e856cd84` · **Source:** Midjourney (Estilos)
**When to use:** "Enter a new world" / product launches; module 0 / onboarding posts; threshold moments.
**Encoded rules:** Triangular stone arch creates perspective pull to interior; stone path leads viewer in; frame-within-frame; interior reveals content.

**Inverse Prompt:**
```text
Triangular stone arch portal at dusk, stone path leading through arch toward glowing interior,
strong depth-pull perspective, threshold moment.
Warm amber interior glow through arch — sage-tinted stone path, golden warm light source beyond threshold.
Forest dark variation: deep forest dark exterior (#0E1410), warm amber interior glow inviting entry.
```

---

#### B-E10 — Portal with Creator ✅
**ID:** `7febb009_3` · **UUID:** `d78def9a-9de3-40b7-9396-043c7a52cfe3` · **Source:** Midjourney (Estilos)
**When to use:** "Inside access" posts; "I'm already here" CTAs; screen-as-illumination content.
**Encoded rules:** Same arch; person inside at laptop; screen = sole light source casting outward; warm amber screen glow fits Solarpunk palette.

**Inverse Prompt:**
```text
Triangular stone arch portal, person seated inside at laptop,
warm amber screen glow the sole light source casting outward through arch.
Deep forest dark exterior (#0E1410), warm amber light from screen (#D4A574) and sage ambient glow.
Exterior stone dark, threshold framing — amber warmth from within.
```

---

#### B-E11 — Portal in Dusk (Forest dark mapping)
**ID:** `c3f20a9a_3` · **UUID:** `7f84c8b8-7805-40f2-816f-32ea9be86ffe` · **Source:** Midjourney (Estilos)
**When to use:** Forest dark variation portal; preferred when deep shadow atmosphere is needed.
**Encoded rules:** Same portal; purple-grey dusk grading maps to Forest dark palette; deep shadows dominant; closest to #0E1410 in the catalog.

**Inverse Prompt:**
```text
Triangular stone arch portal at deep purple-grey dusk, atmospheric light, stone path leading through,
high contrast between dark stone arch and slightly lighter sky.
Forest dark mapping: deep shadow approaching #0E1410, sage-atmospheric grey sky,
warm amber glow in stone depths. Closest entry to Forest dark palette — minimal adjustment needed.
```

---

### Estilos — Special Context Series (3 images)

---

#### B-E12 — Cosmic Mundane ✅
**ID:** `c37ec5f0_1` · **UUID:** `59a01c44-38e8-4bab-8fca-ddaf9f17f94e` · **Source:** Midjourney (Estilos)
**When to use:** Founder humor; contrast posts; "we take this seriously even if it looks absurd."
**Encoded rules:** Astronaut suit = extreme professional context; laptop = mundane tool; flower field = soft/natural; juxtaposition IS the message.

**Inverse Prompt:**
```text
Person in full astronaut suit sitting cross-legged in flower field, laptop open,
treating cosmic absurdity as ordinary, natural environment vs. technical extreme.
Warm soft floral palette — amber wildflowers, sage green field, warm natural light.
Solarpunk contrast: high-tech garment in organic warm biophilic environment.
```

---

#### B-E13 — The Meeting ✅
**ID:** `0d6a587c_3` · **UUID:** `720c3a0b-ac1e-4087-bb39-876c73ebf94e` · **Source:** Midjourney (Estilos)
**When to use:** AI-as-companion posts; "building relationship with machines" content; first-contact aesthetic.
**Encoded rules:** Human and machine face each other at equal distance; forest lake = neutral ground; turtle rover = harmless but advanced; mutual respect implied.

**Inverse Prompt:**
```text
Human figure facing a futuristic tortoise-shaped rover at forest lake edge,
equal distance, mutual facing, forest reflections in still water, first-contact aesthetic.
Warm forest gold — amber forest light filtering through canopy, sage green forest surroundings,
warm reflections in still water.
Forest dark variation: twilight approach with #0E1410 forest shadows, sage and amber accent light.
```

---

#### B-E14 — Observer in the Pod ✅ PRIORITY
**ID:** `7c2c09ef_3` · **UUID:** `13a67b62-87b8-424f-bcec-264ddf543afd` · **Source:** Midjourney (Estilos)
**When to use:** "Watching from above" / strategic distance posts; observation/analysis content.
**Encoded rules:** Circular pod creates perfect frame around figure; panoramic window to river valley below; solitude by design; observer's throne aesthetic.

**Inverse Prompt:**
```text
Person seated in circular pod/capsule chair, facing panoramic window opening to river valley below,
pod forms perfect circular frame around figure, observer's throne, solitude by design.
Warm amber pod interior — sage-tinted organic curves, warm amber upholstery,
valley beyond in warm golden-sage tones. Brand-aligned as-is — use warm tones at full intensity.
```

---

### Extra Uploads — Unnamed

Additional Midjourney style references uploaded without assigned names. Use as supplementary composition or environment references.

| ID | UUID | Notes |
|----|------|-------|
| `c37ec5f0_2` | `28a13a7e-da76-4197-8ba0-8b03b4a6badf` | Midjourney (Estilos) — unnamed variant |
| `ea1c1ae5_2` | `95d68483-3d36-4f0d-8da3-9118ec1c09ac` | Midjourney (Estilos) — unnamed variant |
| `ea1c1ae5_3` | `1de23bde-7522-4170-89f6-4acdf71e46da` | Midjourney (Estilos) — unnamed variant |
| `0d6a587c_2` | `12aeff53-2aa8-4364-a24f-7bc7b18a7376` | Midjourney (Estilos) — unnamed variant |
| `2f229066_2` | `542e79b3-ea9f-486e-b29f-49c98dece94b` | Midjourney (Estilos) — unnamed variant |

---

## Type C — Art References (Design Rules)

| Title | UUID | Source | Inverse Prompt (Design Rules) | When to Use |
|-------|------|--------|------------------------------|-------------|
| *(upload finished carousels/ads and add entries here)* | | | | |

---

## Type D — Brand References

| Title | UUID | Local Path | Inverse Prompt | When to Use |
|-------|------|-----------|---------------|-------------|
| *(upload logos/textures and add entries here)* | | | | |

---

## HeyGen Assets

| Asset | ID | Notes |
|-------|-----|-------|
| Arthur Avatar ID | *(TBD — create avatar at heygen.com)* | Talking head model |
| Arthur Voice ID | *(TBD — clone voice at heygen.com)* | PT-BR voice |

---

## Google Sheet Production Log

| Field | Value |
|-------|-------|
| Sheet Name | MAYA Production Log — Arthur |
| Spreadsheet ID | `1Mow1w7FSKmYvl2tWyrWVi0aGFGyy3LMa2-LLDZV9JGc` |
| Columns | A=Prompt \| B=UUIDs \| C=Output path \| D=Status \| E=Notes \| F=Model \| G=Job ID \| H=Date |
| URL | https://docs.google.com/spreadsheets/d/1Mow1w7FSKmYvl2tWyrWVi0aGFGyy3LMa2-LLDZV9JGc/edit |
