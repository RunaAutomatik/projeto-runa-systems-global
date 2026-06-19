---
date: 2026-05-26
tags: [maya, genhq, arthur, failure-log]
project: runa-systems-global
type: brain-file
updated: 2026-05-26
---

# Failure Log — Arthur Runa (_base)

Catalog of rejected generations and failed prompts. MAYA reads this before each session
to avoid repeating known failures. Never delete entries — append only.

Purpose: build negative knowledge. Every entry is a pattern to avoid.

Format:
```
## YYYY-MM-DD — [category] — [model]
**What failed:** [prompt or element that failed]
**Why it failed:** [observed result vs. expected]
**Pattern to avoid:** [concise rule derived from this failure]
**Retry with:** [what to change — or "do not retry"]
---
```

### Categories
- `person-drift` — Arthur's face/build not matching references
- `scene-bleed` — background/environment contaminating person reference
- `typography-hallucination` — text rendered incorrectly
- `style-mismatch` — aesthetic drift from brand palette
- `model-failure` — technical error (timeout, API failure)
- `composition-error` — framing, aspect ratio, or layout issue
- `other`

---

<!-- APPEND ENTRIES BELOW THIS LINE -->
