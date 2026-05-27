---
date: 2026-05-26
tags: [maya, genhq, arthur, references, uuids]
project: runa-systems-global
type: brain-file
updated: 2026-05-26
---

# Reference IDs — Arthur Runa (_base)

Master catalog of all Higgsfield UUIDs and external IDs organized by reference type.
Inverse Prompts enable use of reference patterns with models that have no UUID system.

---

## Type A — Human References

### Arthur Runa — Character Sheet (10 reference images)

Higgsfield UUIDs (use with `--image <uuid>` × 10 in gpt_image_2 CLI command):

| UUID | Notes |
|------|-------|
| 06525df3-7237-4781-8278-0f45c684c7f2 | Character sheet ref 01 |
| 4a62aea6-e32a-471f-a3ca-33e3b25818b6 | Character sheet ref 02 |
| 57c94747-552b-445b-85f0-d938023b7d16 | Character sheet ref 03 |
| d64514a1-1721-4193-87b5-baccd4ffae8a | Character sheet ref 04 |
| 4c6dba30-8e82-4174-af0f-df3e3f088388 | Character sheet ref 05 |
| 9a7aeaaa-570a-43ac-a312-c44df0e673d6 | Character sheet ref 06 |
| 397662ef-b437-4351-a3dc-8c0c82343546 | Character sheet ref 07 |
| a9915873-6b1a-4d50-883b-896024725834 | Character sheet ref 08 |
| d526ad1d-f25b-4474-8ddb-e21a31ea2b81 | Character sheet ref 09 |
| 02f6d3ea-eb41-415d-83fb-81b728117110 | Character sheet ref 10 |

**Soul ID (soul_2 model):** `a4f9c61c-e105-4bb8-833d-c40158ef6224`

**Inverse Prompt (model-agnostic):**
```
Arthur Runa, Brazilian male, late 20s, sharp jaw, dark brown eyes,
dark brown short hair, athletic but lean build, approximately 1.80m,
neutral expression, confident posture
```

**When to use UUIDs vs Soul ID:**
| Method | Use Case |
|--------|---------|
| `--image <uuid>` × 10 (gpt_image_2) | Complex scenes, cars, environments, action, props |
| `soul_id` (soul_2 model) | Formal portraits, headshots, close-ups without complex props |
| Inverse Prompt (text) | Any model without UUID support (nano-banana-2, HeyGen, etc.) |

**CLI command template:**
```bash
higgsfield generate create gpt_image_2 \
  --prompt "[scene description]" \
  --image 06525df3-7237-4781-8278-0f45c684c7f2 \
  --image 4a62aea6-e32a-471f-a3ca-33e3b25818b6 \
  --image 57c94747-552b-445b-85f0-d938023b7d16 \
  --image d64514a1-1721-4193-87b5-baccd4ffae8a \
  --image 4c6dba30-8e82-4174-af0f-df3e3f088388 \
  --image 9a7aeaaa-570a-43ac-a312-c44df0e673d6 \
  --image 397662ef-b437-4351-a3dc-8c0c82343546 \
  --image a9915873-6b1a-4d50-883b-896024725834 \
  --image d526ad1d-f25b-4474-8ddb-e21a31ea2b81 \
  --image 02f6d3ea-eb41-415d-83fb-81b728117110 \
  --quality high --resolution 2k --aspect_ratio 9:16 --wait
```

---

## Type A — Additional Soul IDs (other people)

| Person | Soul ID | Training Date | Notes |
|--------|---------|---------------|-------|
| *(add as trained)* | | | |

---

## Type B — Style References

### Setup — Computer Workspace Series (6 images)

> All 6 images: ⚠️ warm tones. CONVERT to brand palette when using as reference.

---

#### B-S01 — Tech Sanctuary Empty ⚠️
**ID:** `0329a543_1` · **UUID:** `TBD_UPLOAD` · **Source:** Midjourney (Setup)  
**When to use:** Workspace establishing shots; "place of creation" backgrounds; no-person frames.  
**Encoded rules:** Desk perpendicular to panoramic window; dual monitors flank view; recliner = meditation zone; elevated mountain position; premium dark materials.

**Inverse Prompt:**
```text
Minimalist premium workspace, empty — dual monitors flanking panoramic floor-to-ceiling window,
mountain panorama beyond, Eames-style recliner in corner, dark wood and black surfaces, elevated position.
CONVERT: warm amber → deep charcoal ambient (#1A1A1A) + cool blue moonlight through glass.
```

---

#### B-S02 — Creator Against Panorama ⚠️
**ID:** `3e2dd347_3` · **UUID:** `TBD_UPLOAD` · **Source:** Midjourney (Setup)  
**When to use:** Ambition/scale posts; "thinking big" establishing shots; person-from-behind frames.  
**Encoded rules:** Figure occupies ~15% of frame; panoramic window dominates; dual curved monitors echo window curve; identity implied, not shown.

**Inverse Prompt:**
```text
Person from behind at desk, small figure against massive floor-to-ceiling panoramic window,
dual curved monitors, mountain landscape beyond, scale of creator vs. world.
CONVERT: warm sunset tones → cool night-city blue-white or moonlit silver.
```

---

#### B-S03 — Three-Layer Depth ⚠️
**ID:** `7b7bccf6_0` · **UUID:** `TBD_UPLOAD` · **Source:** Midjourney (Setup)  
**When to use:** Systems/perspective posts; recursion and meta-thinking content.  
**Encoded rules:** Three-layer composition: desk → window frame → valley; one monitor mirrors exterior (recursion effect); figure from behind.

**Inverse Prompt:**
```text
Creator from behind at desk, one monitor displaying the exterior landscape (recursive mirror effect),
deep three-layer composition: desk → window frame → panoramic valley.
CONVERT: golden sunset → blue moonlight dusk, deep shadows in interior.
```

---

#### B-S04 — Empty Throne ⚠️
**ID:** `7b7bccf6_3` · **UUID:** `TBD_UPLOAD` · **Source:** Midjourney (Setup)  
**When to use:** CTA/invitation posts; "your seat is waiting" messaging; empty-chair framing.  
**Encoded rules:** Chair as protagonist; viewer = implied occupant; most saturated image in set — requires maximum palette conversion.

**Inverse Prompt:**
```text
Empty ergonomic chair before dual ultrawide monitors, floor-to-ceiling window, implied viewer presence, cinematic.
CONVERT (critical — most saturated): warm golden sunset → deep charcoal walls (#1A1A1A),
electric blue accent on monitors (#0040FF), silver moonlight through glass, zero warm tones remain.
```

---

#### B-S05 — Corner Command Post ⚠️
**ID:** `b9f0ff30_3` · **UUID:** `TBD_UPLOAD` · **Source:** Midjourney (Setup)  
**When to use:** Architecture/systems posts; "seeing all angles" content; dual-window setups.  
**Encoded rules:** L-shape corner maximizes two window faces; angular architectural interior; geometric ceiling; orthogonal lines dominant.

**Inverse Prompt:**
```text
Corner workspace, two perpendicular floor-to-ceiling windows meeting at 90°,
dual monitors, angular architectural interior with geometric ceiling, light from two sides.
CONVERT: golden hour → blue-white cool daylight or night-city blue glow.
```

---

#### B-S06 — Open Air Minimalism ⚠️
**ID:** `f1e0184e_0` · **UUID:** `TBD_UPLOAD` · **Source:** Midjourney (Setup)  
**When to use:** Simplicity/focus posts; "you don't need much" messaging; freedom-as-discipline.  
**Encoded rules:** Outdoor terrace desk; elevated coastal position; single monitor (constraint = clarity); oil lamp = artisanal intent; no walls = openness.

**Inverse Prompt:**
```text
Person from behind at outdoor terrace desk, elevated coastal position, single monitor, oil lamp,
coastal mountains and ocean in distance, open-air setup with no walls, minimal.
CONVERT: warm golden hour → cool coastal twilight, stone surfaces retain natural grey.
```

---

### Estilos — Coastal & Cliff Series (3 images)

---

#### B-E01 — Architect at the Edge ⚠️
**ID:** `5a3f11a5_0` · **UUID:** `TBD_UPLOAD` · **Source:** Midjourney (Estilos)  
**When to use:** Contrarian/edge-thinker positioning; "standing apart" content; vision posts.  
**Encoded rules:** Triptych diagonal composition; subject on extreme terrain; natural fur signals authority in hostile context; coastal verticality.

**Inverse Prompt:**
```text
Man standing on coastal rock cliff edge, natural fur cloak, arms at sides, looking out to sea,
triptych/three-panel composition, vertical cliff walls framing figure, raw terrain.
CONVERT: warm coastal light → cold grey coastal storm light, slate and ocean blue tones.
```

---

#### B-E02 — Stone & Glass Command ✅ BRAND ALIGNED
**ID:** `c37ec5f0_0` · **UUID:** `TBD_UPLOAD` · **Source:** Midjourney (Estilos)  
**When to use:** HIGHEST PRIORITY — no conversion needed; vision/identity posts; brand palette demonstration.  
**Encoded rules:** Natural stone cliff becomes the architecture; glass wall merges interior/exterior; grey-green palette is brand-adjacent; stone slab desk = permanence; zero warm tones.

**Inverse Prompt:**
```text
Stone cliff face as architectural wall, glass facade merging interior with exterior cliff and grey sky,
stone slab desk, laptop open, cool grey-green palette, no warm tones,
architecture built INTO natural rock. (Use as-is — already brand-aligned.)
```

---

#### B-E03 — Cliff Edge Workspace ⚠️
**ID:** `bc4c61cb_0` · **UUID:** `TBD_UPLOAD` · **Source:** Midjourney (Estilos)  
**When to use:** "Build from anywhere" content; freedom-as-discipline; constraint = focus posts.  
**Encoded rules:** Rocky terrain as desk surface; ocean as backdrop; single laptop = only tool needed; extreme context highlights clarity through limitation.

**Inverse Prompt:**
```text
Laptop placed on rocky coastal terrain at ocean's edge — rock is the desk,
dramatic ocean backdrop, waves, horizontal infinity.
CONVERT: warm golden cliff → cool blue-grey stone, stormy grey Atlantic light.
```

---

### Estilos — Surreal Scale Series (3 images)

---

#### B-E04 — Anti-Gravity Architecture ⚠️
**ID:** `99e3a578_0` · **UUID:** `TBD_UPLOAD` · **Source:** Midjourney (Estilos)  
**When to use:** "Think impossible" / disruption content; framework or product launches.  
**Encoded rules:** Floating rock island defies physics; ancient stone texture on impossible form; empty = viewer is the next arrival; scale rules do not apply.

**Inverse Prompt:**
```text
Massive floating rock island in mid-air above clouds, ancient stone texture,
impossible architecture in surreal sky, empty — viewer implied as next arrival.
CONVERT: warm sunset behind island → deep indigo night sky with electric blue atmospheric light.
```

---

#### B-E05 — Walking Impossible Ground ⚠️
**ID:** `99e3a578_3` · **UUID:** `TBD_UPLOAD` · **Source:** Midjourney (Estilos)  
**When to use:** Action-despite-uncertainty content; tutorial starts; "this seems impossible but here's someone doing it."  
**Encoded rules:** Tiny human on floating island edge; courage + scale contrast; the extraordinary becomes ordinary once you're there.

**Inverse Prompt:**
```text
Tiny human figure walking on edge of massive floating rock island above clouds,
impossible becomes ordinary once you're there, scale: human vs. architecture.
CONVERT: warm sunset → cold moonlit blue above cloud layer, figure silhouetted.
```

---

#### B-E06 — Dwarfed by Technology ⚠️
**ID:** `6ab549c8_0` · **UUID:** `TBD_UPLOAD` · **Source:** Midjourney (Estilos)  
**When to use:** AI/technology power posts; scale-reveal content; "what we're building."  
**Encoded rules:** Human at ~5% of frame height; alien biomorphic tech structure dominates; organic curves + mechanical precision; awe, not fear.

**Inverse Prompt:**
```text
Tiny human figure dwarfed by massive alien biomorphic technology structure,
human at base looking up, organic curves meet mechanical precision, scale implies awe.
CONVERT: warm amber bio-glow → cold electric blue bioluminescence, dark void background (#000000).
```

---

### Estilos — Workspace Architecture Series (2 images)

---

#### B-E07 — Organic Glass Studio ⚠️
**ID:** `ecdf3fff_0` · **UUID:** `TBD_UPLOAD` · **Source:** Midjourney (Estilos)  
**When to use:** Deep work / environment design posts; "space where thinking happens."  
**Encoded rules:** Organic arch = frame-within-frame; glass roof brings sky inside; stone desk = permanence; vegetation integrated = biophilic; curve softens tech.

**Inverse Prompt:**
```text
Interior organic stone arch as room frame, glass roof showing sky, stone desk with laptop,
vertical vegetation integrated into architecture, biophilic design studio.
CONVERT: warm golden interior light → cool overcast grey-white daylight through glass ceiling.
```

---

#### B-E08 — Reflected Architecture ⚠️
**ID:** `ecdf3fff_3` · **UUID:** `TBD_UPLOAD` · **Source:** Midjourney (Estilos)  
**When to use:** Systems/architecture posts; "what you build reflects back" messaging.  
**Encoded rules:** Stone columns create vertical rhythm; reflective pond doubles the full composition; symmetry as design principle; permanence.

**Inverse Prompt:**
```text
Ancient stone columns framing view, perfectly still reflective pond doubling the architectural composition,
symmetry, permanence, vertical stone rhythm.
CONVERT: warm golden stone → cool grey stone in overcast or deep blue moonlight.
```

---

### Estilos — Portal Architecture Series (3 images)

---

#### B-E09 — The Portal (Warm Interior) ⚠️
**ID:** `7febb009_1` · **UUID:** `TBD_UPLOAD` · **Source:** Midjourney (Estilos)  
**When to use:** "Enter a new world" / product launches; module 0 / onboarding posts; threshold moments.  
**Encoded rules:** Triangular stone arch creates perspective pull to interior; stone path leads viewer in; frame-within-frame; interior reveals content.

**Inverse Prompt:**
```text
Triangular stone arch portal at dusk, stone path leading through arch toward glowing interior,
strong depth-pull perspective, threshold moment.
CONVERT: warm golden interior light → cool electrical blue interior (#0040FF), exterior stone dark grey.
```

---

#### B-E10 — Portal with Creator ⚠️ (blue screen aligned)
**ID:** `7febb009_3` · **UUID:** `TBD_UPLOAD` · **Source:** Midjourney (Estilos)  
**When to use:** "Inside access" posts; "I'm already here" CTAs; tech-as-illumination content.  
**Encoded rules:** Same arch; person inside at laptop; screen = sole light source casting outward; blue screen glow already fits brand palette.

**Inverse Prompt:**
```text
Triangular stone arch portal, person seated inside at laptop,
laptop screen the sole light source casting blue glow (#0040FF) outward through arch.
Exterior stone dark, threshold framing. (Blue screen light already brand-aligned — minimal conversion.)
```

---

#### B-E11 — Portal in Dusk (Closest Aligned)
**ID:** `c3f20a9a_3` · **UUID:** `TBD_UPLOAD` · **Source:** Midjourney (Estilos)  
**When to use:** Brand-coherent portal alternative; preferred when full conversion is not possible.  
**Encoded rules:** Same portal; purple-grey dusk grading = closest to brand palette in entire 25-image set; no extreme warm tones; deep shadows dominant.

**Inverse Prompt:**
```text
Triangular stone arch portal at deep purple-grey dusk, cool atmospheric light, stone path leading through,
high contrast between dark stone arch and slightly lighter sky.
MINIMAL CONVERSION: deepen shadows to #1A1A1A, push sky toward indigo — palette nearly aligned already.
```

---

### Estilos — Special Context Series (3 images)

---

#### B-E12 — Cosmic Mundane ⚠️
**ID:** `c37ec5f0_1` · **UUID:** `TBD_UPLOAD` · **Source:** Midjourney (Estilos)  
**When to use:** Founder humor; contrast posts; "we take this seriously even if it looks absurd."  
**Encoded rules:** Astronaut suit = extreme professional context; laptop = mundane tool; flower field = soft/natural; juxtaposition IS the message.

**Inverse Prompt:**
```text
Person in full astronaut suit sitting cross-legged in flower field, laptop open,
treating cosmic absurdity as ordinary, natural environment vs. technical extreme.
CONVERT: warm soft floral palette → cool moon-grey field, astronaut suit metallic silver (#AAAAAA).
```

---

#### B-E13 — The Meeting ⚠️
**ID:** `0d6a587c_3` · **UUID:** `TBD_UPLOAD` · **Source:** Midjourney (Estilos)  
**When to use:** AI-as-companion posts; "building relationship with machines" content; first-contact aesthetic.  
**Encoded rules:** Human and machine face each other at equal distance; forest lake = neutral ground; turtle rover = harmless but advanced; mutual respect implied.

**Inverse Prompt:**
```text
Human figure facing a futuristic tortoise-shaped rover at forest lake edge,
equal distance, mutual facing, forest reflections in still water, first-contact aesthetic.
CONVERT: warm forest gold → cool blue forest twilight, reflections silver-blue.
```

---

#### B-E14 — Observer in the Pod ⚠️
**ID:** `7c2c09ef_3` · **UUID:** `TBD_UPLOAD` · **Source:** Midjourney (Estilos)  
**When to use:** "Watching from above" / strategic distance posts; observation/analysis content.  
**Encoded rules:** Circular pod creates perfect frame around figure; panoramic window to river valley below; solitude by design; observer's throne aesthetic.

**Inverse Prompt:**
```text
Person seated in circular pod/capsule chair, facing panoramic window opening to river valley below,
pod forms perfect circular frame around figure, observer's throne, solitude by design.
CONVERT: warm amber pod interior → cool silver and charcoal (#AAAAAA, #1A1A1A), blue river valley beyond.
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
