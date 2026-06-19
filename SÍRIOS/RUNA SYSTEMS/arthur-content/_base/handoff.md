---
date: 2026-05-26
tags: [maya, genhq, arthur, handoff]
project: runa-systems-global
type: brain-file
updated: 2026-05-27
active_session: false
---

# Handoff — Arthur Runa (_base)

Session context document. MAYA reads this at the start of every generation session.
Update the "Last Session Summary" and "Open Jobs" sections after each session.

---

## Active UUIDs (Higgsfield — permanent)

### Human — Arthur (Character Sheet × 10)

| UUID | Label |
|------|-------|
| `06525df3-7237-4781-8278-0f45c684c7f2` | Character sheet ref 01 |
| `4a62aea6-e32a-471f-a3ca-33e3b25818b6` | Character sheet ref 02 |
| `57c94747-552b-445b-85f0-d938023b7d16` | Character sheet ref 03 |
| `d64514a1-1721-4193-87b5-baccd4ffae8a` | Character sheet ref 04 |
| `4c6dba30-8e82-4174-af0f-df3e3f088388` | Character sheet ref 05 |
| `9a7aeaaa-570a-43ac-a312-c44df0e673d6` | Character sheet ref 06 |
| `397662ef-b437-4351-a3dc-8c0c82343546` | Character sheet ref 07 |
| `a9915873-6b1a-4d50-883b-896024725834` | Character sheet ref 08 |
| `d526ad1d-f25b-4474-8ddb-e21a31ea2b81` | Character sheet ref 09 |
| `02f6d3ea-eb41-415d-83fb-81b728117110` | Character sheet ref 10 |

**Soul ID (soul_2 model):** `a4f9c61c-e105-4bb8-833d-c40158ef6224`

### Style References Active (this base project)
*(Fill when style references are uploaded to Higgsfield — see reference-ids.md Type B)*

### Art References Active
*(Fill when art references are uploaded — see reference-ids.md Type C)*

---

## HeyGen Assets

| Asset | ID | Notes |
|-------|-----|-------|
| Arthur Avatar ID | *(TBD — create at heygen.com)* | Talking head for Reels Mode A |
| Arthur Voice ID | *(TBD — clone voice at heygen.com)* | PT-BR voice |

---

## Google Sheet

| Field | Value |
|-------|-------|
| Sheet Name | MAYA Production Log — Arthur |
| Spreadsheet ID | `1Mow1w7FSKmYvl2tWyrWVi0aGFGyy3LMa2-LLDZV9JGc` |
| URL | https://docs.google.com/spreadsheets/d/1Mow1w7FSKmYvl2tWyrWVi0aGFGyy3LMa2-LLDZV9JGc/edit |

---

## Active Rules (Base Project)

- GPT Image 2 (Higgsfield) is PRIMARY for all image types — no exceptions
- Always use all 10 character sheet UUIDs (`--image` × 10) for Arthur scenes
- Use Soul ID only for formal portraits / headshots without complex props or scenes
- nano-banana-2 is BACKUP ONLY — activate only if GPT Image 2 fails
- All @arthsystems_ assets require FREYJA review before publishing
- Max 10 generations per batch → fallback 5+5 → fallback individual

---

## Open Jobs

| Job ID | Model | Status | Description |
|--------|-------|--------|-------------|
| *(none yet)* | — | — | — |

---

## Analytics Context (May 2026)

Source: Windsor.ai @arthsystems_ report, last 90 days.

| Metric | Value | Benchmark |
|--------|-------|-----------|
| Followers | 74 | — |
| Total posts | 9 | — |
| Carousel engagement | 9–10% | B2B benchmark: 1–3% (exceptional) |
| Reels reach avg | 210 | 2.3× more reach than carousels |
| Carousel reach avg | ~90 | — |
| Stories published | 0 | **Critical gap** |
| Saves in 90 days | 1 | **Critical gap — no framework/checklist content** |

### Top performers (validates hook formulas)

| # | Format | Hook | Reach | Interactions |
|---|--------|------|-------|-------------|
| 1 | Reel | "Não seja mais um ignorante" | 210 | 14 |
| 2 | Carousel | "Construo negócios que não precisam de mim" | 101 | 10 + 1 save |
| 3 | Carousel | "Enquanto você lê isso, Runa Systems está funcionando" | 98 | 9 + 1 share |
| 4 | Carousel | "Você não tem um problema de produtividade" | 72 | 7 |

### Validated hook formulas

1. **Cognitive Dissonance + Implicit Judgment** — "Não seja mais um [noun]"
2. **Identity Declaration + Proof** — "[I + verb + bold claim]"
3. **Temporal Paradox** — "Enquanto você [X], [system] está [Y]"

### Timing (data-validated)

- Best day: **Friday** (63% of weekly views)
- Best windows: **12h–14h** (lunch) or **18h–20h** (end of workday)
- Avoid: before 10h

### Validated CTA keywords

Active: ARQUITETO, RUNA, SISTEMA | Pending setup: ARQUITETURA, ISIS, SQUAD

---

## Last Session Summary

**Date:** 2026-05-27 — GenHQ v3 data-driven revision + epic-paper T3 onboarding
**What was built:** GenHQ §11 rewritten (6 content types incl. Stories + Save-Driving). §12 Hook Pattern Library, §13 Content Calendar Template, §14 CTA Keyword Catalog inserted. Old §12–15 renumbered to §15–18. epic-paper T3 onboarded: rule file, capability-map, CLAUDE.md.
**What worked:** Analytics gaps confirmed by Windsor.ai data. Hook formulas validated against top performers. Paper MCP identity resolved as local HTTP endpoint from Paper Desktop app.
**What failed:** N/A
**Next session priority:** (1) Upload Arthur's character sheet photos to Higgsfield — test GPT Image 2 + 10 refs workflow. (2) **Create first Stories content** (critical gap — zero Stories in 90 days). (3) **Create first Save-Driving Content** (framework/checklist via epic-paper + Paper MCP — gap of only 1 save in 90 days). (4) Configure pending keywords: ARQUITETURA, ISIS, SQUAD in Zernio.

---

## CLI Command Template (copy for every session)

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
