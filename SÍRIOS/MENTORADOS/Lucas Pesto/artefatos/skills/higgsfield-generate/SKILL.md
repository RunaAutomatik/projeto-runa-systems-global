# higgsfield-generate

Generate images, videos, and Soul Character content via Higgsfield CLI or MCP.

## Trigger

`/higgsfield-generate [mode] [prompt]`

Modes: `image` | `soul` | `video`

---

## Prerequisites

Higgsfield CLI installed at `~/.local/bin/higgsfield.exe` (v0.1.26+).
Auth completed once via: `higgsfield auth login` (browser flow).

Higgsfield MCP connector configured in Claude.ai (required for soul management):
> Claude.ai → Settings → Connectors → Add custom connector
> Name: Higgsfield | URL: https://mcp.higgsfield.ai/mcp

MCP tools are deferred — load via ToolSearch before calling soul management tools.

---

## Mode A — Image Generation

Generate a single image from a text prompt.

### Steps

1. Run CLI with `--wait` (blocks until complete, prints URL):

   ```bash
   # Standard image (no specific person)
   higgsfield generate create nano_banana_flash \
     --prompt "[detailed visual description]" \
     --aspect_ratio 1:1 \
     --wait

   # Image with reference photos (person-specific scenes)
   higgsfield generate create gpt_image_2 \
     --prompt "[detailed visual description]" \
     --image <ref-id-1> --image <ref-id-2> \
     --quality high --resolution 2k --aspect_ratio 1:1 \
     --wait
   ```
   → Prints image URL directly in terminal.

2. Save to project folder: `pesto/[client]/[date]-[theme]/imagens/`

### Fallback chain (if CLI unavailable)

```
Tier 1 — MCP async:
  ToolSearch: "select:mcp__claude_ai_MCP_Higgsfield__generate_image,mcp__claude_ai_MCP_Higgsfield__job_status,mcp__claude_ai_MCP_Higgsfield__job_display"
  generate_image(prompt, aspect_ratio) → { job_id }
  job_status(job_id) — poll every 15-30s until "completed"
  job_display(job_id) → { image_url }

Tier 2 — inference.sh:
  infsh app run google/gemini-3-flash-image --input '{"prompt": "[prompt]", "width": 1080, "height": 1080}'
```

---

## Mode B — Soul Character (Synthetic Photoshoot)

Create a consistent character from real photos → generate unlimited scenes via soul_id.

### Phase 1: Train Soul (once per client)

Soul training has no CLI equivalent — always use MCP.

1. Load tools:
   ```
   ToolSearch: "select:mcp__claude_ai_MCP_Higgsfield__soul_train_wizard,mcp__claude_ai_MCP_Higgsfield__soul_status,mcp__claude_ai_MCP_Higgsfield__soul_list"
   ```

2. Ask user for 3-5 reference photos of the client (different angles).

3. Train character:
   ```
   soul_train_wizard()
   → guided interface for character training
   ```
   Or direct training:
   ```
   soul_train(photos: [...])
   → { soul_id: "..." }
   ```

4. Poll until ready:
   ```
   soul_status(soul_id) → { training_status: "processing" | "ready" | "failed" }
   ```

5. Register soul_id:
   Create file `pesto/brand-kit/[client]/soul.json`:
   ```json
   {
     "client": "[client-name]",
     "soul_name": "pesto-[client-name]",
     "soul_id": "[id]",
     "trained_at": "[YYYY-MM-DD]"
   }
   ```

### Phase 2: Generate Scenes (reusable, no re-upload needed)

1. Get soul_id from `pesto/brand-kit/[client-name]/soul.json`
   Or confirm via MCP: `soul_list() → find "pesto-[client-name]"`

2. Run CLI with `--wait` (preferred):

   ```bash
   higgsfield generate create nano_banana_flash \
     --prompt "[scene description]" \
     --soul-id "[soul_id]" \
     --aspect_ratio 1:1 \
     --wait
   ```
   → Prints image URL directly in terminal.

3. Fallback if CLI unavailable (MCP async):
   ```
   ToolSearch: "select:mcp__claude_ai_MCP_Higgsfield__generate_image,mcp__claude_ai_MCP_Higgsfield__job_status,mcp__claude_ai_MCP_Higgsfield__job_display"
   generate_image(prompt: "...", soul_id: "[soul_id]", aspect_ratio: "1:1") → { job_id }
   job_status(job_id) — poll every 20s until "completed"
   job_display(job_id) → { image_url }
   ```

### Naming convention

`pesto-[client-name]` — e.g., `pesto-fernanda`, `pesto-joao`, `pesto-empresa-abc`

---

## Mode C — Video Generation

Generate cinematic video clips for Reels and social media.

### Steps

1. Run CLI with `--wait` (blocks until complete, prints URL):

   ```bash
   higgsfield generate create seedance_2_0 \
     --prompt "[cinematic description]" \
     --aspect_ratio 9:16 \
     --duration 6 \
     --wait
   ```
   → Prints video URL directly in terminal. Video generation typically takes 2-5 minutes.

2. Save to: `pesto/[client]/reels/[date]-[theme]/`

### Fallback chain (if CLI unavailable)

```
Tier 1 — MCP async (video takes longer — poll every 20-30s):
  ToolSearch: "select:mcp__claude_ai_MCP_Higgsfield__generate_video,mcp__claude_ai_MCP_Higgsfield__job_status,mcp__claude_ai_MCP_Higgsfield__job_display"
  generate_video(prompt, aspect_ratio: "9:16", duration: 6) → { job_id }
  job_status(job_id) — poll every 20-30s until "completed"
  job_display(job_id) → { video_url }

Tier 2 — inference.sh:
  infsh app run higgsfield/seedance-2 --input '{"prompt": "[prompt]", "duration": 6, "aspect_ratio": "9:16"}'
```

---

## Output Summary

Always report to user:
- Mode used
- Asset URL or local path
- Any fallback used and why
