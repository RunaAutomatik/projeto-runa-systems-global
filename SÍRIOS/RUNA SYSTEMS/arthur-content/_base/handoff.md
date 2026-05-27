---
date: 2026-05-26
tags: [maya, genhq, arthur, handoff]
project: runa-systems-global
type: brain-file
updated: 2026-05-26
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

## Last Session Summary

**Date:** 2026-05-26 — Framework setup session
**What was generated:** Framework files created. No media generated yet.
**What worked:** _base/ folder structure + all brain files created.
**What failed:** N/A
**Next session priority:** First generation session — upload Arthur's character sheet photos to Higgsfield and test GPT Image 2 + 10 refs workflow.

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
