# GPT Image 2 Prompt Gallery — Mandatory Consultation Rule

## What it is

Community-maintained gallery of 162+ categorized GPT Image 2 prompts plus a prompt-craft guide.
Repository: https://github.com/wuyoscar/gpt_image_2_skill

Three reference layers:
- `references/gallery.md` — Category routing index (30 categories, 162 prompts)
- `references/gallery-<category>.md` — Concrete prompts + previews per category
- `references/craft.md` — Prompt-writing principles (JSON schema, layout-first, typographic rules)

## Status

✅ **Public repository** — `gh api repos/wuyoscar/gpt_image_2_skill` accessible
✅ **162 prompts** across 30 categories + craft.md guide

---

## Mandatory Rule

**Before writing any image generation prompt, consult this gallery.** No exceptions.

No agent may submit an image prompt to any generation pipeline (Higgsfield, KIE.AI, muapi, infsh)
without first opening the gallery index and loading the relevant category file.

---

## Agent Authority

| Agent | Rule | Autonomy |
|-------|------|----------|
| **FREYJA** | MUST consult gallery before writing image prompts | Direct access — no redirect to MAYA required |
| **MAYA** | MUST consult gallery when generating own prompts | Full autonomy — no redirect to FREYJA required |
| **ORION** (aiox-master) | MUST consult gallery before any image prompt | Direct access |
| **Claude (no AIOX agent)** | MUST consult gallery before any image prompt | Direct access |
| Other AIOX agents | NOT required | Route through MAYA or FREYJA |

### FREYJA → MAYA flow (narrative direction)

When FREYJA generates a prompt brief for MAYA:
- FREYJA consults the gallery and embeds the relevant pattern in the brief
- MAYA does NOT re-consult if FREYJA already embedded gallery patterns in the brief

### MAYA self-generation (autonomous)

When MAYA generates prompts without a FREYJA brief:
- MAYA MUST consult the gallery directly — no delegation to FREYJA needed
- MAYA has full creative autonomy AFTER consulting the gallery
- This path is valid and expected — MAYA is not always downstream of FREYJA

---

## Consultation Protocol (3 steps)

### Step 1 — Open gallery index (always first)

```bash
gh api repos/wuyoscar/gpt_image_2_skill/contents/skills/gpt-image/references/gallery.md \
  --jq '.content' | base64 -d
```

Raw URL fallback:
```
https://raw.githubusercontent.com/wuyoscar/gpt_image_2_skill/main/skills/gpt-image/references/gallery.md
```

### Step 2 — Load closest category file (ONE for normal requests; max 3 for hybrid styles)

```bash
gh api repos/wuyoscar/gpt_image_2_skill/contents/skills/gpt-image/references/gallery-<category>.md \
  --jq '.content' | base64 -d
```

Replace `<category>` with the slug from the table below.

### Step 3 — Load craft.md when prompt is complex

Required for: dense text, UI mockups, data diagrams, research figures, multi-panel layouts,
weak prompts, no close gallery match, or JSON-schema product renders.

```bash
gh api repos/wuyoscar/gpt_image_2_skill/contents/skills/gpt-image/references/craft.md \
  --jq '.content' | base64 -d
```

### Loading policy

- Open gallery.md first — always
- Load ONE category file — not all 30
- Load craft.md only when the prompt is complex or no close gallery match exists
- Never pre-load all category files into context

---

## 30 Categories Quick Reference

| Range | Category slug | When to use |
|-------|--------------|-------------|
| 1–12 | `anime-and-manga` | Anime/manga, character grids, multi-panel manga |
| 13–22 | `gaming` | Game screenshots, UI, open worlds, strategy maps |
| 23–25 | `retro-and-cyberpunk` | Dark neon, cyberpunk, mecha, retro-futurism |
| 26–30 | `cinematic-and-animation` | Ghibli, Pixar, noir, storyboard, VHS aesthetic |
| 31–32 | `character-design` | Character sheets, reference sheets, elven/fantasy |
| 33–45 | `typography-and-posters` | Posters, Saul Bass, propaganda, text-heavy creatives |
| 46–47 | `illustration` | Editorial illustration, papercut |
| 48–49 | `watercolor` | Watercolor botanical, nature |
| 50–51 | `ink-and-chinese` | Chinese ink painting, scrolls |
| 52–53 | `pixel-art` | Pixel sprites, retro games |
| 54–55 | `isometric` | Isometric scenes, cafes, villages |
| 56–59 | `product-and-food` | Commercial product renders, food explosion, dieline |
| 60–62 | `brand-systems-and-identity` | Brand kits, identity systems |
| 63–66 | `photography` | Photorealistic scenes, chessboard, subway |
| 67–74 | `infographics-and-field-guides` | Educational boards, museum infographics, travel cards |
| 75–95 | `research-paper-figures` | Diagrams, architecture figures, heatmaps, attention |
| 96–99 | `official-openai-cookbook-examples` | Official reference examples |
| 100–101 | `edit-endpoint-showcase` | Image editing / reference transformation prompts |
| 102–106 | `ui-ux-mockups` | App mockups, dashboards, neobank UI |
| 107–111 | `data-visualization` | Chord diagrams, treemaps, network graphs |
| 112–116 | `technical-illustration` | Exploded views, cutaway diagrams, internals |
| 117–121 | `architecture-and-interior` | Biophilic labs, Brutalist museums, Japanese interiors |
| 122–128 | `scientific-and-educational` | Anatomy posters, periodic table, phylogeny trees |
| 129–135 | `fashion-editorial` | Luxury editorial, haute couture, streetwear lookbook |
| 136–140 | `fine-art-painting` | Hockney, Rothko, Rivera, impressionist |
| 141–146 | `more-illustration-styles` | Risograph, kawaii stickers, low-poly, holographic |
| 147–152 | `cinematic-film-references` | Anderson, Tarkovsky, Villeneuve, Blade Runner, noir |
| 153–154 | `beauty-and-lifestyle` | Skincare trays, fragrance rituals |
| 155–156 | `events-and-experience` | Wayfinding maps, zoo/park experience |
| 157–160 | `tattoo-design` | Japanese dragon, neo-traditional, black & grey |
| 161–162 | `screen-photography` | Laptop/device screens in natural environments |

**Arthur @arthsystems_ aesthetic → start with:** `cinematic-film-references` (No. 147–152) or `photography` (No. 63–66).
**Product renders → start with:** `product-and-food` (No. 56–59) + `craft.md` JSON schema section.
**Typography/posters → start with:** `typography-and-posters` (No. 33–45) + `craft.md` rule #1 (exact text in quotes).

---

## Anti-Patterns

❌ **Writing an image prompt from scratch without opening gallery.md first** — always route through the index before writing

❌ **Loading all 30 category files** — load the closest ONE; max 3 for explicit hybrid style requests

❌ **MAYA delegating prompt creation to FREYJA when working autonomously** — MAYA can and should consult the gallery directly

❌ **FREYJA redirecting to MAYA for prompt consultation** — FREYJA accesses the gallery directly

❌ **Skipping craft.md for dense text, UI, or diagram prompts** — these categories require the craft grammar; gallery category alone is insufficient

❌ **Other AIOX agents (@dev, @qa, ARES, HERMES, ALEX) using this gallery directly** — route through MAYA or FREYJA

❌ **MAYA re-consulting gallery when FREYJA already embedded gallery patterns in the brief** — unnecessary double-load; trust FREYJA's embedded reference

---

## Product Application

| Product | How gallery feeds it |
|---------|---------------------|
| **RUNA SYSTEMS** | Teaching clients how to use reference galleries as a prompt-crafting system; FREYJA/MAYA use gallery patterns for @arthsystems_ editorial images — cinematic + fashion categories |