# ensaio-fotografico

Generate professional synthetic photoshoots for clients using Higgsfield Soul Characters.
Train a character once → generate unlimited professional scenes at any time, without re-uploading photos.

## Trigger

`/ensaio-fotografico [client-name]`

---

## Prerequisites

Higgsfield CLI installed at `~/.local/bin/higgsfield.exe` (v0.1.26+).
Auth completed once via: `higgsfield auth login` (browser flow).

Higgsfield MCP connector configured in Claude.ai (required for Phase 1 — soul training only):
> Claude.ai → Settings → Connectors → Add custom connector
> Name: Higgsfield | URL: https://mcp.higgsfield.ai/mcp

---

## Phase 1 — Create Client Soul (one-time per client, ~5 minutes)

### When to run Phase 1

Only when the client has no registered soul_id yet.
Check first: does `pesto/brand-kit/[client]/soul.json` exist?
- If yes → skip to Phase 2.
- If no → run Phase 1.

### Steps

1. Load tools:
   ```
   ToolSearch: "select:mcp__claude_ai_MCP_Higgsfield__soul_train_wizard,mcp__claude_ai_MCP_Higgsfield__soul_train,mcp__claude_ai_MCP_Higgsfield__soul_status"
   ```

2. Request reference photos from user:
   ```
   "Please provide 3-5 photos of [client-name] from different angles.
    Photos should be clear, well-lit, and show the face/body you want to replicate."
   ```

3. Train with guided interface (recommended):
   ```
   soul_train_wizard()
   ```
   Or direct training:
   ```
   soul_train(name: "pesto-[client-name]", photos: [...])
   → { soul_id: "..." }
   ```

4. Poll until training completes:
   ```
   soul_status(soul_id) → wait for training_status = "ready"
   Poll every 30s. Training typically takes 2-10 minutes.
   ```

5. Register soul permanently:
   Create `pesto/brand-kit/[client-name]/soul.json`:
   ```json
   {
     "client": "[client-name]",
     "soul_name": "pesto-[client-name]",
     "soul_id": "[soul_id_from_training]",
     "trained_at": "[YYYY-MM-DD]",
     "notes": "Reference: [photo source description]"
   }
   ```

6. Confirm to user:
   ```
   "Soul 'pesto-[client-name]' created and registered.
    ID: [soul_id]
    From now on, generate photoshoots anytime with /ensaio-fotografico [client-name] — no re-upload needed."
   ```

---

## Phase 2 — Generate Photoshoot Variations (reusable, unlimited)

### Input

- Client name
- Style brief (3-5 words, e.g., "estúdio clean branco", "outdoor urbano tarde", "corporativo sóbrio")
- Number of variations (default: 3)

### Steps

1. Get soul_id from `pesto/brand-kit/[client-name]/soul.json`
   Or confirm via MCP: `soul_list() → find "pesto-[client-name]"`

2. Generate 3 default variations via CLI `--wait` (adapt prompts based on style brief):

   **Variation 1 — Studio Clean:**
   ```bash
   higgsfield generate create nano_banana_flash \
     --prompt "professional portrait, studio white background, clean lighting, sharp focus" \
     --soul-id "[soul_id]" --aspect_ratio 1:1 --wait
   → prints image_url_1
   ```

   **Variation 2 — Urban Outdoor:**
   ```bash
   higgsfield generate create nano_banana_flash \
     --prompt "urban outdoor portrait, natural afternoon light, city background, editorial" \
     --soul-id "[soul_id]" --aspect_ratio 1:1 --wait
   → prints image_url_2
   ```

   **Variation 3 — Warm Lifestyle:**
   ```bash
   higgsfield generate create nano_banana_flash \
     --prompt "warm lifestyle portrait, cozy indoor environment, soft bokeh, authentic moment" \
     --soul-id "[soul_id]" --aspect_ratio 1:1 --wait
   → prints image_url_3
   ```

   > Run sequentially (CLI blocks per call) or open 3 terminals in parallel.

3. Save to local folder:
   ```
   pesto/[client-name]/ensaio-[YYYY-MM-DD]/
   ├── foto-01-studio.png
   ├── foto-02-urban.png
   └── foto-03-lifestyle.png
   ```

7. Present summary to user for selection:
   ```
   "Ensaio fotográfico de [client-name] gerado.
    3 variações disponíveis em pesto/[client-name]/ensaio-[date]/
    - foto-01: estúdio clean
    - foto-02: outdoor urbano
    - foto-03: lifestyle warm
    Quais usar? Posso gerar mais variações com diferentes ambientes."
   ```

---

## Adapting Prompts to Style Brief

When user provides a style brief, override the default prompts:

| Style brief | Prompt direction |
|-------------|-----------------|
| "estúdio clean" | Studio, white/grey background, controlled lighting |
| "outdoor urbano" | City streets, natural light, architectural background |
| "corporativo sóbrio" | Office environment, formal attire context, professional lighting |
| "lifestyle criativo" | Creative workspace, relaxed posture, warm tones |
| "editorial minimalista" | Minimal background, high contrast, fashion editorial style |

Always append: `soul_id: "[soul_id]"` to every prompt.

---

## Fallback (if CLI unavailable)

If the CLI is not available, use MCP async for generation (soul management always requires MCP):

```
ToolSearch: "select:mcp__claude_ai_MCP_Higgsfield__generate_image,mcp__claude_ai_MCP_Higgsfield__job_status,mcp__claude_ai_MCP_Higgsfield__job_display"

generate_image(
  prompt: "[scene description]",
  soul_id: "[soul_id]",
  aspect_ratio: "1:1"
) → { job_id }

job_status(job_id) — poll every 20s until "completed"
job_display(job_id) → { image_url }
```

Do NOT fall back to inference.sh for person-based photoshoots — consistency cannot be guaranteed without soul_id.

---

## Market Context (for explaining value to clients)

Professional studio photoshoot: R$2,000–5,000 per session.
This skill: R$0 per session after one-time Soul training (~5 min).
Consistent character across unlimited scenes, environments, styles.
