---
date: 2026-05-26
tags: [maya, genhq, arthur, prompt-log]
project: runa-systems-global
type: brain-file
updated: 2026-05-26
---

# Prompt Log — Arthur Runa (_base)

Append-only log of every prompt executed. One entry per generation job.
MAYA writes here after every `infsh` or `higgsfield generate` call.

Format:
```
## YYYY-MM-DD — [content type] — [model]
**Prompt:** [full prompt text]
**UUIDs used:** [list or "none"]
**Params:** quality=[X] resolution=[X] aspect_ratio=[X]
**Job ID:** [higgsfield job ID or infsh run ID]
**Output:** [URL or local path]
**Status:** Pending / Approved / Rejected
**Notes:** [any observations]
---
```

---

<!-- APPEND ENTRIES BELOW THIS LINE -->
