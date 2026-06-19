# Higgsfield MCP — Usage Rules

## What it is

Direct access to the Higgsfield AI platform. Higgsfield specializes in cinematic video
generation (Seedance models) and image generation including GPT Image 2 with reference photos.

Three access layers are available: Skills (highest abstraction), CLI (direct control), MCP (async API).

Higgsfield docs: https://higgsfield.ai

## Status

✅ **CLI installed** — `~/.local/bin/higgsfield.exe` v0.1.26
✅ **Skills installed** — `~/.claude/skills/higgsfield-generate`, `higgsfield-soul-id`, `higgsfield-product-photoshoot`
✅ **MCP connected** — `claude.ai MCP Higgsfield` in `~/.claude.json`
⚠️ **Auth required** — `higgsfield auth login` (browser-flow, must be done once per device)

Tool prefix (MCP): `mcp__claude_ai_MCP_Higgsfield__*` (deferred — load via ToolSearch before calling)

## Agent Assignment

| Agent | Role |
|-------|------|
| **MAYA** | Primary owner — all video and image generation |
| @dev | Read-only: `show_generations`, `show_medias` for pipeline integration |

Other agents: route through MAYA.

---

## Access Layer Priority (Generation Tasks)

```
Tier 0 → Skills (/higgsfield:generate)              — highest abstraction, model intelligence built-in
Tier 1 → CLI (higgsfield generate create <model>)   — single --wait command, handles polling/retries
Tier 2 → MCP (mcp__claude_ai_MCP_Higgsfield__*)     — async 3-step flow, use for soul/media management
```

**For generation:** Always prefer Skills or CLI — the `--wait` flag blocks until done and prints URL,
eliminating the MCP polling loop (3+ tool calls vs 1).

**For soul management and media browsing:** MCP is preferred — it exposes `soul_list`, `soul_status`,
`soul_train_wizard`, `show_medias`, `show_generations` which have no CLI equivalent.

---

## Image Generation — Arthur @arthsystems_

### Method 1: GPT Image 2 + Reference Photos (PRIMARY)

**Use for:** Complex scenes, props, cars, environments, moderate action, editorial compositions.
**Validated:** Job `04c2c44e` (Arthur + Mustang at night) — excellent result.

#### CLI Command

```bash
higgsfield generate create gpt_image_2 \
  --prompt "[cinematic scene description]" \
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

**Key params for gpt_image_2:**
- `--image <uuid>` — reference media ID, repeat × N (10 for Arthur)
- `--quality` — `low` / `medium` / `high`
- `--resolution` — `1k` / `2k` / `4k`
- `--aspect_ratio` — `9:16` (Reels), `16:9` (YouTube), `1:1` (square)
- `--wait` — blocks until completed, prints URL; **ALWAYS use this flag**

**Role note:** gpt_image_2 requires `role: "image"` for medias (not `"reference"`). CLI handles this automatically.

#### MCP Fallback (gpt_image_2 via MCP)

```json
{
  "model": "gpt_image_2",
  "prompt": "[scene description]",
  "medias": [
    {"id": "06525df3-7237-4781-8278-0f45c684c7f2", "role": "image"},
    {"id": "4a62aea6-e32a-471f-a3ca-33e3b25818b6", "role": "image"}
  ],
  "aspect_ratio": "9:16",
  "resolution": "2k",
  "quality": "high"
}
```
→ poll `job_status` → `job_display` (3 steps minimum)

### Method 2: soul_2 (SECONDARY)

**Use for:** Formal photoshoots, headshots, portraits without props or complex geometry.
**Do NOT use for:** Scenes with cars, complex objects, physical action.

```json
{
  "model": "text2image_soul_v2",
  "soul_id": "a4f9c61c-e105-4bb8-833d-c40158ef6224",
  "prompt": "[portrait description]",
  "enhance_prompt": false
}
```

Soul managed via MCP: `soul_list`, `soul_status`, `soul_train_wizard`.

### Selection Rule

```
Scene has props / car / environment / action  →  Method 1 (GPT Image 2 + refs)
Formal portrait / headshot / close-up         →  Method 2 (soul_2)
```

---

## Image Generation — Priority Chain (General)

```
Tier 0 → KIE.AI gpt-image-2     — ⚠️ BROKEN (403 Cloudflare + 404 endpoint as of 2026-05-04)
Tier 1 → gpt_image_2 (Higgsfield CLI/Skills) — PRIMARY for Arthur + reference scenes
Tier 2 → nano-banana-2 (infsh)  — standard/fast brand images without person
```

**Note:** KIE.AI GPT Image 2 is non-functional. Higgsfield is the ONLY working route for GPT Image 2.

---

## Video Generation — Priority Chain

```
Tier 0 → Skills /higgsfield:generate (seedance_2_0)      — preferred abstraction
Tier 1 → CLI: higgsfield generate create seedance_2_0 --wait
Tier 2 → infsh app run higgsfield/seedance-2              — if CLI unavailable
Tier 3 → kie-client.py --model seedance-2                 — KIE.AI fallback
Tier 4 → infsh app run bytedance/seedance-1               — last resort
```

---

## Skills Reference

| Skill | Invoke | Purpose |
|-------|--------|---------|
| `higgsfield-generate` | `/higgsfield:generate` | Primary generation — image + video with model selection |
| `higgsfield-soul-id` | `/higgsfield:soul-id` | Soul management — train, list, status |
| `higgsfield-product-photoshoot` | `/higgsfield:product-photoshoot` | Product photography workflow |

Skills installed at: `~/.claude/skills/higgsfield-generate` (+ soul-id, product-photoshoot symlinks)

---

## MCP Tool Reference

| Tool | Purpose | Preferred Access |
|------|---------|-----------------|
| `generate_video` | Generate video from text/image | CLI Tier 0 → MCP Tier 2 |
| `generate_image` | Generate image from text/refs | CLI Tier 0 → MCP Tier 2 |
| `job_status` | Poll async job | MCP (required if not using --wait) |
| `job_display` | Retrieve completed URL | MCP (required if not using --wait) |
| `soul_list` | List trained souls | **MCP primary** (no CLI equivalent) |
| `soul_status` | Check soul training status | **MCP primary** |
| `soul_train` | Train new soul | **MCP primary** |
| `soul_train_wizard` | Guided soul training | **MCP primary** |
| `show_generations` | Browse generation history | **MCP primary** |
| `show_medias` | Browse media library, verify IDs | **MCP primary** |
| `media_upload` | Upload reference media | MCP or CLI auto-upload |
| `media_confirm` | Confirm uploaded media | MCP |
| `models_explore` | List available models | MCP or see MODELS below |
| `balance` | Check credit balance | MCP |
| `transactions` | View transaction history | MCP |
| `list_workspaces` | List workspaces | MCP |
| `select_workspace` | Switch workspace | MCP |
| `show_marketing_studio` | Marketing studio templates | MCP |

---

## Available Models (key subset — 2026-05-04)

### Image Models
| Model ID (CLI) | Description |
|----------------|-------------|
| `gpt_image_2` | GPT Image 2 — best for person + scene with references |
| `text2image_soul_v2` | soul_2 — formal portraits with trained soul |
| `soul_cinematic` | Soul in cinematic environments |
| `soul_location` | Soul at specific locations |
| `soul_cast` | Soul in cast/narrative scenarios |
| `nano_banana_flash` | Fast generation |
| `flux_kontext` | Flux with context awareness |
| `kling_omni_image` | Kling image model |

### Video Models
| Model ID (CLI) | Description |
|----------------|-------------|
| `seedance_2_0` | Seedance 2 — PRIMARY video model |
| `cinematic_studio_2_5` | Cinematic quality video |
| `cinematic_studio_3_0` | Latest cinematic studio |
| `kling3_0` | Kling 3.0 video |
| `veo3_1` | Veo 3.1 video |

Full list: `higgsfield models` or `higgsfield-ai/cli` GitHub → MODELS.md

---

## Critical: Async Job Pattern (MCP only)

When NOT using `--wait` (MCP route), MUST poll manually:

```
1. generate_video/image(prompt, params)  → { job_id: "abc123" }
2. job_status(job_id)                    → { status: "in_progress" }
   ... wait 15-30s, repeat ...
3. job_status(job_id)                    → { status: "completed" }
4. job_display(job_id)                   → { video_url / image_url }
```

**The CLI `--wait` flag eliminates all 3 steps above in a single command.**

---

## Workflows

### Workflow 1 — Arthur Cinematic Scene (GPT Image 2 + refs)

```
FREYJA *brief-maya (narrative + prompt + Method 1)
  → MAYA: higgsfield generate create gpt_image_2 \
          --prompt "[scene]" --image <id> × 10 \
          --quality high --resolution 2k --aspect_ratio 9:16 --wait
  → FREYJA: *av-review (narrative adherence check)
    → [REJECTED] → MAYA regenerates with FREYJA feedback
    → [APPROVED] → FREYJA *approve-output → HERMES publish
```

### Workflow 2 — Arthur Portrait (soul_2)

```
FREYJA *brief-maya (portrait brief + Method 2)
  → MAYA: MCP generate_image(model: text2image_soul_v2, soul_id: a4f9c61c, ...)
  → poll job_status → job_display
  → FREYJA: *av-review → approve/reject
```

### Workflow 3 — Standard Reel (video)

```
FREYJA *brief-maya (video brief)
  → MAYA: /higgsfield:generate (seedance_2_0, 9:16, 6s)
  → FREYJA: *av-review → HERMES publish
```

### Workflow 4 — Direct Generation (no FREYJA review)

Applies to: non-@arthsystems_ requests, drafts, standalone content.

```
MAYA: higgsfield generate create <model> --prompt "..." --wait
  → asset URL returned to user
```

---

## Anti-Patterns

❌ **Using MCP polling loop when CLI `--wait` is available** — MCP requires 3 tool calls minimum; CLI does it in 1.

❌ **Using soul_2 for scenes with cars or complex props** — geometry fails. Use GPT Image 2 + refs.

❌ **Using soul_2 with `medias` but without `soul_id`** — forces `enhance_prompt: true`, rewrites scene prompt into portrait description, ignores the actual scene.

❌ **Using KIE.AI for GPT Image 2** — endpoint is broken (403/404 as of 2026-05-04). Use Higgsfield CLI.

❌ **Using `generate_image` for text-heavy creatives** — hallucination risk. Use KIE.AI gpt-image-2 (if restored) or nano-banana-2.

❌ **Using `role: "reference"` for gpt_image_2 medias** — server auto-coerces but logs adjustment. Always use `role: "image"`.

❌ **Calling Higgsfield without a FREYJA brief for @arthsystems_ content** — no asset ships without narrative direction.

❌ **Using infsh as primary when CLI/Skills are available** — CLI is Tier 1, infsh is Tier 2.

❌ **Skipping `models_explore` or MODELS.md when a model error occurs** — check model availability before debugging the prompt.

---

## Product Application

| Product | Higgsfield role |
|---------|----------------|
| RUNA SYSTEMS | Teaching the full AV production pipeline; @arthsystems_ Reels + editorial images |