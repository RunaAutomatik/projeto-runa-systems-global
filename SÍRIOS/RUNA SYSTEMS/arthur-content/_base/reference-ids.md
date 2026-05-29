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

> ⚠️ **UUID STATUS: OLD PHOTOS DEPRECATED — NEW CHARACTER SHEET PENDING UPLOAD**
> 15 new Arthur photos received 2026-05-28 (WhatsApp).
> Upload to Higgsfield → replace UUID table → update CLI template below.
> Old 10 UUIDs retained temporarily for reference until new IDs are confirmed.

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

#### New UUIDs (pending upload)

Source: `C:\Users\Admin\Downloads\WhatsApp Unknown 2026-05-28 at 16.09.55` — 15 photos.
Upload each to Higgsfield → fill table below.

| Photo filename | Higgsfield UUID | Notes |
|---------------|----------------|-------|
| WhatsApp Image 2026-05-28 at 12.32.50.jpeg | TBD | |
| WhatsApp Image 2026-05-28 at 12.32.51.jpeg | TBD | |
| WhatsApp Image 2026-05-28 at 12.32.52.jpeg | TBD | |
| WhatsApp Image 2026-05-28 at 12.32.53.jpeg | TBD | |
| WhatsApp Image 2026-05-28 at 12.32.54.jpeg | TBD | |
| WhatsApp Image 2026-05-28 at 12.32.55.jpeg | TBD | |
| WhatsApp Image 2026-05-28 at 12.32.56.jpeg | TBD | |
| WhatsApp Image 2026-05-28 at 12.32.57.jpeg | TBD | |
| WhatsApp Image 2026-05-28 at 12.32.58.jpeg | TBD | |
| WhatsApp Image 2026-05-28 at 12.32.59.jpeg | TBD | |
| WhatsApp Image 2026-05-28 at 12.33.00.jpeg | TBD | |
| WhatsApp Image 2026-05-28 at 12.33.01.jpeg | TBD | |
| WhatsApp Image 2026-05-28 at 12.33.02.jpeg | TBD | |
| WhatsApp Image 2026-05-28 at 12.33.03.jpeg | TBD | |
| WhatsApp Image 2026-05-28 at 12.33.04.jpeg | TBD | |

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

**CLI command template (update UUIDs after upload):**
```bash
higgsfield generate create gpt_image_2 \
  --prompt "[scene description]" \
  --image [UUID_01] \
  --image [UUID_02] \
  --image [UUID_03] \
  --image [UUID_04] \
  --image [UUID_05] \
  --image [UUID_06] \
  --image [UUID_07] \
  --image [UUID_08] \
  --image [UUID_09] \
  --image [UUID_10] \
  --image [UUID_11] \
  --image [UUID_12] \
  --image [UUID_13] \
  --image [UUID_14] \
  --image [UUID_15] \
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
**ID:** `5a3f11a5_0` · **UUID:** `TBD_UPLOAD` · **Source:** Midjourney (Estilos)
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
**ID:** `c37ec5f0_0` · **UUID:** `TBD_UPLOAD` · **Source:** Midjourney (Estilos)
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
**ID:** `bc4c61cb_0` · **UUID:** `TBD_UPLOAD` · **Source:** Midjourney (Estilos)
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
**ID:** `99e3a578_0` · **UUID:** `TBD_UPLOAD` · **Source:** Midjourney (Estilos)
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
**ID:** `99e3a578_3` · **UUID:** `TBD_UPLOAD` · **Source:** Midjourney (Estilos)
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
**ID:** `6ab549c8_0` · **UUID:** `TBD_UPLOAD` · **Source:** Midjourney (Estilos)
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
**ID:** `ecdf3fff_0` · **UUID:** `TBD_UPLOAD` · **Source:** Midjourney (Estilos)
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
**ID:** `ecdf3fff_3` · **UUID:** `TBD_UPLOAD` · **Source:** Midjourney (Estilos)
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
**ID:** `7febb009_1` · **UUID:** `TBD_UPLOAD` · **Source:** Midjourney (Estilos)
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
**ID:** `7febb009_3` · **UUID:** `TBD_UPLOAD` · **Source:** Midjourney (Estilos)
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
**ID:** `c3f20a9a_3` · **UUID:** `TBD_UPLOAD` · **Source:** Midjourney (Estilos)
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
**ID:** `c37ec5f0_1` · **UUID:** `TBD_UPLOAD` · **Source:** Midjourney (Estilos)
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
**ID:** `0d6a587c_3` · **UUID:** `TBD_UPLOAD` · **Source:** Midjourney (Estilos)
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
**ID:** `7c2c09ef_3` · **UUID:** `TBD_UPLOAD` · **Source:** Midjourney (Estilos)
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
