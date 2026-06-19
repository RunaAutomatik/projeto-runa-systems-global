---
date: 2026-05-26
tags: [maya, genhq, framework, image-generation, video-production, skills]
project: runa-systems-global
type: skill-doc
version: v3
source: GenHQ Framework v3 — plan reactive-sleeping-flame.md
---

# MAYA GenHQ Framework — Complete Production Guide (v3)

> Full AV production framework for MAYA. Covers model hierarchy, reference taxonomy (4 types + Inverse Prompt), folder architecture, brain file templates, production rules, and Arthur's complete asset catalog.

---

## 1. Model Hierarchy

| Priority | Model | Access | Use For |
|----------|-------|--------|---------|
| **PRIMARY** | GPT Image 2 | Higgsfield CLI / MCP | ALL images — humans, scenes, props, cars, environments, layouts, typography. No exceptions. |
| **BACKUP ONLY** | nano-banana-2 | infsh (`google/gemini-3-flash-image`) | Only when GPT Image 2 fails. Never for typography. |
| **VIDEO** | Seedance 2.0 | Higgsfield CLI/MCP | All video generation |
| **PORTRAIT FALLBACK** | soul_2 | Higgsfield MCP | Formal portraits/headshots only — no props, no complex scenes |
| **AVATAR / LIP SYNC** | HeyGen REST API | REST direct | Reels Mode A (talking head + lip sync) |
| **VSL COMPOSITION** | Remotion | npm / Cloud Run | Programmatic video with motion graphics |

**Rule:** GPT Image 2 is primary for EVERYTHING. nano-banana-2 is a fallback, not an alternative.

---

## 2. CLI vs MCP — When to Use Each

| Method | When to Use | Advantage |
|--------|------------|-----------|
| **Higgsfield CLI** (`--wait`) | Generation tasks | Single command, blocks until done, prints URL directly. No polling loop. |
| **Higgsfield MCP** | Soul management, media browsing, media upload/confirm | Exposes `soul_list`, `soul_train_wizard`, `show_medias`, `show_generations` — no CLI equivalent |
| **infsh** | Fallback when CLI unavailable | Standard inference.sh models |

**Key insight:** `--wait` flag in CLI eliminates the 3-step MCP polling loop (generate → poll → display). Always use `--wait` for generation.

---

## 3. Reference Taxonomy — 4 Types + Inverse Prompt

### What Is an Inverse Prompt?

Every reference entry has two components:
1. **UUID** — the file ID in Higgsfield's media library (Higgsfield-specific)
2. **Inverse Prompt** — a text description of what the reference visual encodes

The Inverse Prompt exists because UUIDs only work in Higgsfield. For nano-banana-2, HeyGen, or any model without a media library system, you paste the Inverse Prompt directly in the prompt field. This makes the reference system model-agnostic.

---

### Type A — Human References

**What:** Character Sheets of real people for identity cloning.

**Rule:** ONLY photos with neutral background, multiple angles, full body visible. No editorial photos. No dramatic lighting. No complex backgrounds.

**Why the rule:** Models do scene-understanding on reference images. A photo of Arthur in front of an office building makes the model extract the building, the lighting, the environment — not Arthur. A photo on a white background forces the model to extract ONLY Arthur's identity.

**Where:** `references/human/`

**Entry format:**
```
### Arthur Runa — Character Sheet

> ⚠️ DEPRECATED — UUIDs below are from old photos (previous appearance).
> New 15-photo set uploaded 2026-05-28. UUIDs pending Higgsfield upload.
> See: SÍRIOS/RUNA SYSTEMS/arthur-content/_base/reference-ids.md → Type A

UUID-01: 06525df3-7237-4781-8278-0f45c684c7f2  [DEPRECATED]
UUID-02: 4a62aea6-e32a-471f-a3ca-33e3b25818b6  [DEPRECATED]
UUID-03: 57c94747-552b-445b-85f0-d938023b7d16  [DEPRECATED]
UUID-04: d64514a1-1721-4193-87b5-baccd4ffae8a  [DEPRECATED]
UUID-05: 4c6dba30-8e82-4174-af0f-df3e3f088388  [DEPRECATED]
UUID-06: 9a7aeaaa-570a-43ac-a312-c44df0e673d6  [DEPRECATED]
UUID-07: 397662ef-b437-4351-a3dc-8c0c82343546  [DEPRECATED]
UUID-08: a9915873-6b1a-4d50-883b-896024725834  [DEPRECATED]
UUID-09: d526ad1d-f25b-4474-8ddb-e21a31ea2b81  [DEPRECATED]
UUID-10: 02f6d3ea-eb41-415d-83fb-81b728117110  [DEPRECATED]
Soul ID: a4f9c61c-e105-4bb8-833d-c40158ef6224  (needs retraining on new photos)

Inverse Prompt (updated 2026-05-28 — based on new photo set):
"Arthur Runa, white male, early-to-mid 30s, brown hair side-parted and swept back
(medium-length, slightly wavy, well-groomed), full reddish-auburn beard,
light blue-green eyes, slim-medium build with high cheekbones and defined jaw,
confident posture — expression range from neutral/serious to genuine warm smile"
```

**Usage:**
- GPT Image 2 CLI: `--image <uuid>` repeated × 10
- soul_2 MCP: `soul_id: a4f9c61c-e105-4bb8-833d-c40158ef6224`
- nano-banana-2: paste Inverse Prompt into the prompt field

---

### Type B — Style References

**What:** Images encoding aesthetic — lighting, mood, color palette, atmosphere, composition.

**Sources:** Midjourney generations, Pinterest curation, film frames.

**Where:** `references/style/`

**Entry format:**
```
### Dark Brutalist Architecture
UUID: [higgsfield-uuid after upload]
Source: Midjourney (YYYY-MM-DD)
Inverse Prompt:
"Raw concrete surfaces, deep angular shadows, dramatic overhead lighting,
silver-gray-charcoal palette, brutalist geometry, no warm tones,
cinematic aspect ratio 9:16"
When to use: Reels requiring heavy urban environment
```

**Key distinction from Type A:** Style references set the SCENE. Never use a style reference as a person reference.

---

### Type C — Art References

**What:** Finished works (published carousels, covers, ads) encoding DESIGN RULES — not visual mood, but layout logic: text positioning, type hierarchy, proportions, split-screen rules.

**This is the most sophisticated type.** The Inverse Prompt here does not describe the visual — it describes the RULES the visual implements. This creates a reusable design system.

**Where:** `references/art/`

**Entry format:**
```
### Carousel Pin-01 (ARQUITETO) — Editorial Split Screen
UUID: [higgsfield-uuid after upload]
Source: @arthsystems_ published 2026-04-15
Inverse Prompt (design rules):
"Split layout: left 45% = full-bleed image | right 55% = text block.
Headline: 2 lines max, uppercase, 48-56px. Subheadline: 1 line, gray #888.
Background: pure black #000. No border between image and text — hard cut.
CTA block: bottom 15% of text column, white button on black."
When to use: Any new carousel with similar editorial structure
```

**Power move:** To generate content following the same design logic, paste only the Inverse Prompt — no image upload needed. The design rules are model-agnostic.

---

### Type D — Brand References

**What:** Logos, graphic effects, textures, brand marks.

**Where:** `references/brand/`

**Entry format:**
```
### Logo arthsystems_ (dark version)
UUID: [higgsfield-uuid after upload]
Local: references/brand/logo-dark.png
Inverse Prompt:
"Minimalist wordmark 'arthsystems_' in lowercase. Font: geometric sans-serif.
Color: white #FFF on black background. No icon, text only.
The underscore is part of the brand name."
```

---

## 4. Color Palette

Color palettes are NOT UUIDs. They are separate text documents with hex codes and usage rules. Store in `color-palette.md` at the project root.

**Arthur / @arthsystems_ brand palette — Solarpunk Híbrido:**

#### Tema Papel (light — :root)

| Token | OKLCH | Hex approx. | Use |
|-------|-------|-------------|-----|
| `--background` | oklch(0.9450 0.0200 90) | `#F2EEDF` | Primary background — warm cream |
| `--foreground` | oklch(0.2350 0.0120 130) | `#1F2418` | Text — dark ink |
| `--primary` (sage) | oklch(0.4650 0.0450 145) | `#4A6B4E` | Primary accent — sage green |
| `--accent` (amber) | oklch(0.6050 0.1050 65) | `#B47B3F` | Secondary accent — amber |
| `--card` | oklch(0.9750 0.0220 90) | `#FBF8EC` | Surface 1 |
| `--secondary` | oklch(0.8950 0.0300 90) | `#E8E2CC` | Surface 2 |
| `--border` | oklch(0.8150 0.0400 90) | `#D4CCAE` | Border |

#### Tema Forest (dark — .dark)

| Token | OKLCH | Hex approx. | Use |
|-------|-------|-------------|-----|
| `--background` | oklch(0.1650 0.0080 145) | `#0E1410` | Primary background — deep forest |
| `--foreground` | oklch(0.9350 0.0050 145) | `#E8EDE9` | Text — light |
| `--primary` (sage) | oklch(0.6850 0.0450 145) | `#88A88E` | Sage Forest |
| `--accent` (amber) | oklch(0.7450 0.0850 75) | `#D4A574` | Amber Forest |
| `--card` | oklch(0.2050 0.0080 145) | `#161C18` | Surface 1 Forest |
| `--secondary` | oklch(0.2550 0.0080 145) | `#1F2620` | Surface 2 Forest |
| `--border` | oklch(0.2950 0.0100 145) | `#27302A` | Border Forest |

#### Semantic tokens (both themes)
`--sage`, `--sage-deep`, `--sage-soft`, `--sage-glow` · `--amber`, `--amber-deep`, `--amber-soft`
`--ink`, `--ink-soft`, `--ink-muted`, `--ink-faint` · `--surface-1`, `--surface-2`, `--surface-3`

#### Typography tokens
- `--font-sans`: Geist, ui-sans-serif
- `--font-serif`: Fraunces, Georgia, ui-serif
- `--font-mono`: Geist Mono, ui-monospace

**Forbidden:** Dominant `#000000` as background, Electric Blue `#0040FF`, Charcoal `#1A1A1A` as primary surface, purple/neon gradients, glassmorphism overuse. Warm tones are NOT forbidden — they ARE the system (amber, cream, sage).

> Full token reference: `_base/color-palette.md` (single source of truth)

---

## 5. Folder Structure — Per-Campaign

```
{project}/
├── references/
│   ├── human/          ← Character Sheets (people for identity cloning)
│   ├── style/          ← Aesthetic references (lighting, mood, atmosphere)
│   ├── art/            ← Finished works (design systems / layout rules)
│   ├── brand/          ← Logos, textures, graphic marks
│   └── product/        ← Product shots (360°, variants) — for physical products
├── outputs/            ← Generated files
├── reference-ids.md    ← MASTER: all UUIDs by type + Inverse Prompts
├── model-descriptions.md  ← Physical descriptors + wardrobe notes (for humans)
├── color-palette.md    ← Hex codes, names, usage rules
├── prompt-log.md       ← Every executed prompt (append-only)
├── failure-log.md      ← Rejected generations — what failed and why
├── style-bible.md      ← Style bible + what works / what fails (brain file)
├── environment-descriptors.md  ← Text descriptions of each scene/environment
└── handoff.md          ← Session context: active UUIDs, rules, open job IDs
```

**7 brain files:** `reference-ids.md`, `model-descriptions.md`, `color-palette.md`, `prompt-log.md`, `failure-log.md`, `style-bible.md`, `handoff.md`

---

## 6. Brain File Templates

### Template: handoff.md

```markdown
---
project: {project-name}
updated: YYYY-MM-DD
active_session: false
---

# Handoff — {Project Name}

## Active UUIDs (Higgsfield)
### Human — Arthur

> ⚠️ DEPRECATED — UUIDs below are from old photos (previous appearance).
> New 15-photo set uploaded 2026-05-28. UUIDs pending Higgsfield upload.
> Replace with new UUIDs after upload. See: `_base/reference-ids.md` → Type A

UUID-01: 06525df3-7237-4781-8278-0f45c684c7f2  [DEPRECATED]
UUID-02: 4a62aea6-e32a-471f-a3ca-33e3b25818b6  [DEPRECATED]
UUID-03: 57c94747-552b-445b-85f0-d938023b7d16  [DEPRECATED]
UUID-04: d64514a1-1721-4193-87b5-baccd4ffae8a  [DEPRECATED]
UUID-05: 4c6dba30-8e82-4174-af0f-df3e3f088388  [DEPRECATED]
UUID-06: 9a7aeaaa-570a-43ac-a312-c44df0e673d6  [DEPRECATED]
UUID-07: 397662ef-b437-4351-a3dc-8c0c82343546  [DEPRECATED]
UUID-08: a9915873-6b1a-4d50-883b-896024725834  [DEPRECATED]
UUID-09: d526ad1d-f25b-4474-8ddb-e21a31ea2b81  [DEPRECATED]
UUID-10: 02f6d3ea-eb41-415d-83fb-81b728117110  [DEPRECATED]
Soul ID: a4f9c61c-e105-4bb8-833d-c40158ef6224  (needs retraining on new photos)

### Style Active This Project
[UUIDs of active style references for this campaign]

### Art References Active
[UUIDs of active art references for this campaign]

## Active Rules This Project
- [Rule 1 specific to this campaign]
- [Rule 2]

## Open Jobs
| Job ID | Model | Status | Description |
|--------|-------|--------|-------------|
| [id] | [model] | Pending/Done | [prompt summary] |

## Last Session Summary
Date: YYYY-MM-DD
What was generated: [summary]
What worked: [what worked]
What failed: [what failed, why]
Next session priority: [next step]

## Google Sheet ID
[spreadsheet-id here]
```

---

### Template: style-bible.md

```markdown
---
project: {project-name}
updated: YYYY-MM-DD
---

# Style Bible — {Project Name}

## Aesthetic DNA
[3-5 adjectives — ex: dark, architectural, precise, cold, cinematic]

## What Consistently Works
### Prompts / Patterns
- "[prompt element]" → [observed result]
- "[prompt element]" → [observed result]

### Model Notes
- GPT Image 2: works best with [...]
- Seedance 2.0: works best with [...]

## What Consistently Fails
- "[element or pattern]" → [why it fails]

## Current Best Prompt Template
[current best prompt after iterations]

## Lighting Vocabulary
[lighting terms that work in this project]

## Camera / Composition Notes
[angles, focal distances, compositions that work]
```

---

## 7. Character Sheet Rule — Full Explanation

**The problem:** When a model receives a reference image, it performs scene-understanding — extracts everything visible: person, environment, lighting, composition, mood.

**Bad reference (editorial photo):** Arthur standing dramatically in front of a building at night → model extracts: architectural building, dramatic night lighting, specific composition. Output: a similar scene, possibly with a figure that doesn't look like Arthur.

**Good reference (Character Sheet):** Arthur on white background, multiple angles → model extracts ONLY: face, proportions, visual identity. Without scene context, the model applies that identity to whatever new scene you describe in the prompt.

**Character Sheet is not just for people.** The concept extends to any object:
- Arthur's setup (desk, monitor, keyboard) → photos from all angles on neutral background → model learns the "setup character sheet"
- Physical product → 360° photos on neutral background → model learns exact product geometry

**Arthur's setup photos:** `C:\Users\Admin\Downloads\Setup` — upload to `references/human/` (if Character Sheet style) or `references/style/` (if scene-in-context style).

| Photo | Where it goes | Effect |
|-------|--------------|--------|
| Arthur on white background, multiple angles | `references/human/` | Model learns who Arthur is |
| Setup photos in neutral background | `references/human/` | Model learns the setup character sheet |
| Arthur + setup in complete scene | `references/style/` | Environment reference — not person reference |
| Arthur in front of lit office | `references/art/` or `references/style/` | Style/environment reference — NEVER person reference |

---

## 8. Batch Rules

**Max 10 per batch:** Submit maximum 10 generation jobs simultaneously.

**5+5 fallback:** If a batch of 10 fails → split into two groups of 5 and retry.

**Individual fallback:** If groups of 5 still fail → run one by one.

**Why this matters:** With progressive fallback, if 1 job of 10 is causing errors, you isolate which one by reducing the group. Without this, one failure brings down everything and you don't know the cause.

---

## 9. Google Sheets Feedback Loop

The Google Sheet is a machine-readable log. MAYA reads it before each batch (sees what was approved/rejected) and writes to it after each generation (Status: Pending). Arthur evaluates and changes status to Approved/Rejected.

**Create the sheet:**
```bash
gws sheets spreadsheets create --json '{"title":"MAYA Production Log"}'
```
Returns: `spreadsheetId` — record this in `reference-ids.md` and `handoff.md`.

**Configure headers (row 1):**
```bash
gws sheets spreadsheets values batchUpdate \
  --params '{"spreadsheetId":"SHEET_ID"}' \
  --json '{"valueInputOption":"RAW","data":[{"range":"Sheet1!A1:H1","values":[["Prompt","UUIDs","Output Path","Status","Notes","Model","Job ID","Date"]]}]}'
```

**MAYA writes after generation:**
```bash
gws sheets spreadsheets values append \
  --params '{"spreadsheetId":"SHEET_ID","range":"Sheet1!A:H","valueInputOption":"RAW"}' \
  --json '{"values":[["[prompt]","[uuids]","[output_path]","Pending","","gpt_image_2","[job_id]","[date]"]]}'
```

**MAYA reads before next batch:**
```bash
gws sheets spreadsheets values get \
  --params '{"spreadsheetId":"SHEET_ID","range":"Sheet1!A:H"}'
```

---

## 10. MAYA 10-Step Workflow

1. **Read handoff.md** — load session context, open job IDs, active UUIDs
2. **Read style-bible.md** — load what works, what fails, current best prompt
3. **Read Google Sheet** — identify approved/rejected items from last session
4. **Consult GPT Image 2 prompt gallery** — `gh api repos/wuyoscar/gpt_image_2_skill/contents/skills/gpt-image/references/gallery.md --jq '.content' | base64 -d` → route to correct category
5. **Compose prompt** using gallery pattern + style-bible insights + active rules
6. **Execute via Higgsfield CLI** with `--wait`:
   ```bash
   higgsfield generate create gpt_image_2 \
     --prompt "[scene]" \
     --image UUID-01 --image UUID-02 ... --image UUID-10 \
     --quality high --resolution 2k --aspect_ratio 9:16 --wait
   ```
7. **Log to prompt-log.md** (append): prompt, model, params, job ID, timestamp
8. **Write to Google Sheet** — Status: Pending
9. **Return to FREYJA for av-review** (if @arthsystems_ content) OR deliver directly (if standalone)
10. **Update handoff.md** — last session summary, what worked, what failed, next priority

---

## 11. Content Type Scope

| Type | Pipeline | Models / Tools | FREYJA Review? |
|------|---------|----------------|----------------|
| **Posts** | FREYJA brief → MAYA generates image → FREYJA writes copy | GPT Image 2 (Higgsfield PRIMARY); nano-banana-2 (backup) | Yes |
| **Carousels** | FREYJA brief → MAYA creates artboards via epic-paper skill via Paper MCP | Paper MCP (`write_html` per slide) — requires Paper Desktop app open + MCP connected | Yes |
| **Stories** | FREYJA brief (casual/daily) → MAYA generates image → Zernio + direct upload | nano-banana-2 or GPT Image 2 | No (daily cadence) |
| **Save-Driving Content** | FREYJA brief → MAYA designs framework/checklist/architecture via epic-paper | Paper MCP (document layout) — PDF delivered via DM keyword | Yes |
| **Reels Virais** | FREYJA brief → MAYA generates video → FREYJA review | Seedance 2.0 (Higgsfield) — 15-30s, direct camera, hook in first 3s | Yes |
| **Reels Avatar** | Script → FREYJA brief → HeyGen → FREYJA review | HeyGen REST API (talking head + native lip sync) | Yes |
| **VSL** | Script → HeyGen (Arthur talking) + Remotion (full composition with motion/graphics) | HeyGen + Remotion | Yes |

**For Reels Avatar and VSL:** HeyGen has its own system (Avatar ID + Voice ID). No Higgsfield UUIDs needed. Add a `## HeyGen Assets` section in `reference-ids.md`.

**Minimum weekly content mix (from @arthsystems_ analytics):**
- 2 carousels + 1 Reel Viral (minimum 3 posts/week)
- 1-3 Stories/day (daily cadence — currently zero, critical gap)
- 1 Save-Driving post per 2 weeks (framework/checklist — fixes zero-save metric)
- Peak day: **Friday** (63% of weekly views) → always schedule carousel on Friday

**Reel Viral specs (validated):**
- Duration: 15-30s (no longer)
- Camera: direct, no b-roll
- Hook: delivered in first 3 seconds — no context-setting
- Hook pattern must match one of the 3 validated formulas (see §12)

---

## 12. Hook Pattern Library

Three validated hook formulas from @arthsystems_ top performers (90-day analytics).

### Formula 1 — Cognitive Dissonance + Implicit Judgment

**Structure:** [implicit disqualifier] + [identity label that stings]

**Template:** "Não seja mais um [noun that represents the failure]"
**Variation A:** "Enquanto você [passive activity], outros [active achievement]"
**Variation B:** "[common belief]. [single word contradiction]."

**Validated example (top Reel — 210 reach, 14 interactions):**
> "Não seja mais um ignorante digital"

**When to use:** Reels Virais, first slide of carousel

---

### Formula 2 — Identity Declaration + Proof

**Structure:** [strong first-person declaration] + [implied system/evidence]

**Template:** "[I + verb + bold claim] (que não [common dependency])"
**Variation A:** "[Possessive] [system] [does X] enquanto [human activity]"

**Validated example (top carousel — 101 reach, 1 save):**
> "Construo negócios que não precisam de mim"

**When to use:** Carousel slide 1, post caption opening

---

### Formula 3 — Temporal Paradox

**Structure:** [present action of reader] + [simultaneous autonomous action of system]

**Template:** "Enquanto você [reads/sleeps/does X], [agent/system] está [doing Y]"

**Validated examples (98 reach, 9 interactions + 1 share):**
> "Enquanto você lê isso, Runa Systems está funcionando"
> "Enquanto você lê este post, um agente da Runa está [...]"

**When to use:** Carousel slide 1, Reel hook voiceover, Stories

---

### Application Rules

- Every carousel slide 1 MUST use one of the 3 formulas
- Reels Virais MUST open with Formula 1 or Formula 3 within the first 3 seconds
- Do NOT use Formula 2 as a Reel hook — requires visual context to land
- Rotate formulas: no 2 consecutive posts with the same formula

---

## 13. Content Calendar Template

Weekly structure based on @arthsystems_ peak engagement data (90 days).

### Weekly Cadence (minimum)

| Day | Content | Type | Timing |
|-----|---------|------|--------|
| Monday | Story — context/question | Story | 12h-14h |
| Wednesday | Post or Reel Avatar | Post / Reel Avatar | 12h-14h |
| **Friday** | Carousel (MAIN — peak day) | Carousel | 12h-14h |
| Daily | Story — behind-the-scenes or teaser | Story | 18h-20h |

**Friday is mandatory.** 63% of weekly views concentrate on Friday. Never skip Friday carousel.

### Scheduling Rules

- **Always** schedule Friday carousel first when planning the week
- **Avoid** publishing before 10h — engagement below baseline
- **Best windows:** 12h-14h (lunch) or 18h-20h (evening)
- **Save-Driving Content** (framework/checklist): publish Tuesday or Thursday — avoids competing with Friday carousel

### 4-Week Rotation Template

| Week | Monday | Wednesday | Friday |
|------|--------|-----------|--------|
| 1 | Story + Reel Viral | Story | Carousel (Formula 2 hook) |
| 2 | Story | Carousel (Formula 3 hook) | Reel Viral |
| 3 | Story + Save-Driving post | Story | Carousel (Formula 1 hook) |
| 4 | Story | Reel Avatar | Carousel (Formula 2 hook) |

Cycle repeats. Each 4-week block = 4 carousels, 2 Reels Virais, 1 Reel Avatar, 1 Save-Driving post, daily Stories.

---

## 14. CTA Keyword Catalog

Keywords trigger Zernio automations → DM → entregável delivery → WhatsApp → discovery call / checkout.
All new keywords require full 4-element setup before publishing (see `.claude/rules/conversion-post-protocol.md`).

| Keyword | Status | Entregável | Zernio Automation |
|---------|--------|-----------|-------------------|
| **ARQUITETO** | ✅ Active | Pin 01 assets — carousel entregável | Configured |
| **RUNA** | ✅ Active | Pin 02 assets | Configured |
| **SISTEMA** | ✅ Active | Pin 03 assets | Configured |
| **ARQUITETURA** | 🔄 Pending | Framework/checklist (save-driving content) | Not yet configured |
| **ISIS** | 🔄 Pending | AI agent intro / MAYA demo | Not yet configured |
| **SQUAD** | 🔄 Pending | Agent squad builder guide | Not yet configured |

**Setup sequence for pending keywords:**
1. Create entregável file (PDF or structured doc)
2. Configure Zernio trigger (keyword → DM → entregável link)
3. Confirm checkout link is active
4. Only then: use keyword in a post

---

## 15. Arthur's Asset Catalog

### Higgsfield — Character Sheet

> ⚠️ DEPRECATED — UUIDs below are from old photos (previous appearance, ~10 photos).
> New 15-photo set uploaded 2026-05-28. UUIDs pending Higgsfield upload.
> See: `_base/reference-ids.md` → Type A for current status.

| # | UUID | Status |
|---|------|--------|
| 01 | `06525df3-7237-4781-8278-0f45c684c7f2` | DEPRECATED |
| 02 | `4a62aea6-e32a-471f-a3ca-33e3b25818b6` | DEPRECATED |
| 03 | `57c94747-552b-445b-85f0-d938023b7d16` | DEPRECATED |
| 04 | `d64514a1-1721-4193-87b5-baccd4ffae8a` | DEPRECATED |
| 05 | `4c6dba30-8e82-4174-af0f-df3e3f088388` | DEPRECATED |
| 06 | `9a7aeaaa-570a-43ac-a312-c44df0e673d6` | DEPRECATED |
| 07 | `397662ef-b437-4351-a3dc-8c0c82343546` | DEPRECATED |
| 08 | `a9915873-6b1a-4d50-883b-896024725834` | DEPRECATED |
| 09 | `d526ad1d-f25b-4474-8ddb-e21a31ea2b81` | DEPRECATED |
| 10 | `02f6d3ea-eb41-415d-83fb-81b728117110` | DEPRECATED |

**New UUIDs — Folder 2 PRIMARY (burst 14:48–14:50, 2026-05-28) — USE THESE for gpt_image_2:**

| # | Source File | UUID | Status |
|---|------------|------|--------|
| 01 | 14.48.47.jpeg | `acb33bff-a019-489a-869c-0207f214d765` | ✅ ACTIVE |
| 02 | 14.48.48 (1) | `2f24a94f-9905-4357-a78e-fb132187f343` | ✅ ACTIVE |
| 03 | 14.48.48 (2) | `1b34fd83-ea2c-47f2-a730-500accb5fb30` | ✅ ACTIVE |
| 04 | 14.48.48 (3) | `870aa8c9-0d6b-419e-8226-edb38aa8318f` | ✅ ACTIVE |
| 05 | 14.48.48 (4) | `1077bd54-7de9-4022-9b9f-29b4ce4efb62` | ✅ ACTIVE |
| 06 | 14.48.48.jpeg | `83d39e51-f1ed-40bc-bd74-bd56b595f681` | ✅ ACTIVE |
| 07 | 14.48.49 (1) | `d444658d-a625-4c24-bb88-477a4907df4e` | ✅ ACTIVE |
| 08 | 14.48.49 (2) | `a25b9b76-c6fa-4715-9379-5e2d35084bc0` | ✅ ACTIVE |
| 09 | 14.48.49 (3) | `db5086a5-55d3-412c-895e-39eeeda1d177` | ✅ ACTIVE |
| 10 | 14.48.49 (4) | `16f01e94-158c-455f-8c75-f448dce77d7d` | ✅ ACTIVE |
| 11 | 14.48.49 (5) | `14c4b1d4-e05a-49c4-b38c-8a5df0394963` | ✅ ACTIVE |
| 12 | 14.48.49.jpeg | `461aa7b3-49d7-4446-a67e-780b65e5b0d7` | ✅ ACTIVE |
| 13 | 14.48.50 (1) | `f8492c76-35ba-49f5-9ee6-35395b5e1a54` | ✅ ACTIVE |
| 14 | 14.48.50 (2) | `e187ad6a-8de5-47bb-8267-c38b9476b8fb` | ✅ ACTIVE |
| 15 | 14.48.50.jpeg | `6c2f8764-6f5c-4566-8522-e9fe63239574` | ✅ ACTIVE |

### Higgsfield — Soul ID

```
a4f9c61c-e105-4bb8-833d-c40158ef6224  (needs retraining on new 15-photo set)
```

Use with model `text2image_soul_v2` for formal portraits/headshots. NOT for scenes with props or complex geometry.

### HeyGen Assets

```
Avatar ID: [to be configured — Arthur's HeyGen avatar]
Voice ID:  [to be configured — Arthur's cloned voice]
```

Generate via HeyGen dashboard. Record avatar creation session to get ID. Voice clone via HeyGen Voice Cloning workflow.

### Multiple Soul IDs

Soul ID = one trained model per person. You can have as many as needed:

| Person | Soul ID |
|--------|---------|
| Arthur Runa | `a4f9c61c-e105-4bb8-833d-c40158ef6224` |
| Mentee / Client | Train via MCP `soul_train_wizard` → new ID generated |

Training requirements: ~10-20 high-quality photos per person. Soul IDs are Higgsfield-specific.

---

## 16. External Image Upload Workflow (Midjourney, Pinterest, etc.)

To get UUIDs from externally generated images, you need to upload them to Higgsfield's media library. Direct URL pasting is not supported — requires CLI upload.

```
1. Organize images locally in structured folders
   (e.g.: C:\Users\Admin\Downloads\references\style\)

2. Expose the folder via Claude Desktop "+" button
   (Claude Desktop > add folder as session context)

3. Authenticate in Higgsfield (once per device):
   higgsfield auth login

4. Instruct Claude to upload the folder:
   "Upload all images in this folder to Higgsfield"

5. Claude executes CLI:
   higgsfield media upload <file.jpg>

6. Higgsfield server generates the UUID:
   UUID appears AFTER "=" in the returned asset URL
   Ex: https://cdn.higgsfield.ai/media?id=abc123def456...
   → UUID = abc123def456...

7. Claude creates reference-ids.md catalog with all collected UUIDs
```

| Image source | Destination subfolder |
|-------------|----------------------|
| Arthur Character Sheets | `references/human/` |
| Midjourney / Pinterest style images | `references/style/` |
| Published carousels (screenshots) | `references/art/` |
| Logos, graphic marks | `references/brand/` |

**Privacy:** UUIDs are private to your Higgsfield account. Not shareable between users.

---

## 17. Anti-Patterns

❌ **Using nano-banana-2 as primary** — it's the backup. GPT Image 2 via Higgsfield is always first.

❌ **Using soul_2 for scenes with cars, props, or complex environments** — geometry fails. Use GPT Image 2 + all 10 character sheet refs.

❌ **Using editorial photos as person references** — Character Sheet rule. Neutral background only for human references.

❌ **Putting color hex codes in reference-ids.md** — palettes go in `color-palette.md`. UUIDs and Inverse Prompts go in `reference-ids.md`. Two separate files.

❌ **Mixing Type B (style) and Type A (human) references** — a photo of Arthur in a cinematic scene is a style reference, not a person reference. Do not use it in `--image` slots meant for person cloning.

❌ **Skipping handoff.md update at end of session** — the next session starts cold without it. The entire framework depends on this file being current.

❌ **Submitting >10 jobs in one batch** — follow the 10 → 5+5 → 1-by-1 fallback chain.

❌ **Skipping prompt gallery consultation** — gallery.md must be consulted before writing any GPT Image 2 prompt. No exceptions.

❌ **Using nano-banana-2 for typography** — text generation via Gemini Flash hallucinates. For text-heavy creatives, only GPT Image 2.

---

## 18. Quick Reference CLI

### GPT Image 2 — Arthur Scene (Folder 2 PRIMARY — 15 refs)

```bash
higgsfield generate create gpt_image_2 \
  --prompt "[cinematic scene description]" \
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

### soul_2 — Portrait Only
```bash
# Via MCP (no CLI equivalent for soul_2)
# mcp__claude_ai_MCP_Higgsfield__generate_image
# model: text2image_soul_v2
# soul_id: a4f9c61c-e105-4bb8-833d-c40158ef6224
# enhance_prompt: false
```

### Seedance 2.0 — Video
```bash
higgsfield generate create seedance_2_0 \
  --prompt "[video scene description]" \
  --aspect_ratio 9:16 \
  --duration 6 \
  --wait
```

### nano-banana-2 — Backup Image
```bash
infsh app run google/gemini-3-flash-image \
  --input '{"prompt": "[description — Inverse Prompt from reference]", "width": 1080, "height": 1350}'
```

---

## Related Documents

- `Skills MAYA Produção AV.md` — full AV production stack reference
- `higgsfield-mcp-usage.md` — CLI + MCP access rules, async job pattern
- `inference-sh-usage.md` — infsh skills for MAYA
- `gpt-image-2-skill-usage.md` — mandatory prompt gallery consultation rule
- `SÍRIOS/RUNA SYSTEMS/arthur-content/_base/reference-ids.md` — Arthur's permanent UUID catalog
- `SÍRIOS/RUNA SYSTEMS/arthur-content/_base/handoff.md` — Arthur's permanent session context
