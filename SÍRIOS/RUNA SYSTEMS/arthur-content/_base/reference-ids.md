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

| Title | UUID | Source | Inverse Prompt | When to Use |
|-------|------|--------|---------------|-------------|
| *(upload Midjourney/Pinterest refs and add entries here)* | | | | |

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
