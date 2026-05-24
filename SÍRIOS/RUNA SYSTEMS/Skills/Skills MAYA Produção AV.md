---
date: 2026-05-23
tags: [skills, maya, video, imagem, audio, producao-av, higgsfield, muapi, elevenlabs, video-use]
project: runa-systems-global
type: skill-doc
---

# Skills MAYA — Produção AV

> MAYA owns all audio-visual production in the ecosystem. This document covers every generation layer: video (Higgsfield MCP/CLI, muapi extended), image (GPT Image 2, nano-banana-2), lip sync (muapi Studio), ElevenLabs audio suite, raw footage editing (video-use), and the mandatory GPT Image 2 Gallery consultation.

---

## Video Generation — Priority Chain

**Always follow this order — do not skip tiers:**

```
Tier 0 → Higgsfield MCP     mcp__claude_ai_MCP_Higgsfield__generate_video
Tier 1 → Higgsfield CLI     higgsfield generate create seedance_2_0 --wait
Tier 2 → infsh              infsh app run higgsfield/seedance-2
Tier 3 → muapi-studio       veo3.1-text-to-video / sora-2 / wan2.6 / kling-v3.0-pro
Tier 4 → KIE.AI fallback    python kie-client.py --model seedance-2
Tier 5 → Last resort        infsh app run bytedance/seedance-1
```

**Agente:** MAYA
**Quando usar:** Any Reel, brand video, cinematic clip, animated content from text
**Quando NÃO usar:** Editing real footage (use video-use); avatar lip sync (use muapi Lip Sync)

**MCP pattern (Tier 0):**
```
mcp__claude_ai_MCP_Higgsfield__generate_video(prompt, aspect_ratio: "9:16", duration: 6)
→ poll mcp__claude_ai_MCP_Higgsfield__job_status(job_id) every 15–30s
→ mcp__claude_ai_MCP_Higgsfield__job_display(job_id) → video_url
```

**CLI pattern (Tier 1 — preferred when CLI available):**
```bash
higgsfield generate create seedance_2_0 \
  --prompt "cinematic scene, dark aesthetic, 9:16" \
  --aspect_ratio 9:16 --duration 6 --wait
```

**Casos de uso:**
- Reels for @arthsystems_ feed (9:16, 6s)
- Brand cinematic clips (seedance_2_0, kling3_0)
- Course module intros (cinematic_studio_3_0)

---

## Image Generation — Arthur @arthsystems_ Config

Two validated methods. Choose based on scene type.

### Method 1: GPT Image 2 + Reference Photos (PRIMARY for Arthur scenes)

**Quando usar:** Scenes with props, cars, environments, complex compositions
**Validated:** Job 04c2c44e — Arthur + Mustang at night, excellent result

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

### Method 2: soul_2 (portraits/headshots — no complex props)

**Quando usar:** Formal photoshoot, headshot, close-up portrait
**Quando NÃO usar:** Scenes with cars, action, complex objects

```
mcp__claude_ai_MCP_Higgsfield__generate_image(
  model: "text2image_soul_v2",
  soul_id: "a4f9c61c-e105-4bb8-833d-c40158ef6224",
  prompt: "[portrait description]"
)
```

---

## Image Generation — General Priority Chain

```
Tier 1 → gpt_image_2 Higgsfield CLI   — Arthur + refs, cinematic scenes
Tier 2 → nano-banana-2 (infsh)         — standard brand images, no person
Tier 3 → p-image (infsh)              — fast drafts, iteration only
```

> KIE.AI GPT Image 2: BROKEN as of 2026-05-04 (403/404). Use Higgsfield CLI.

**nano-banana-2:**
```bash
infsh app run google/gemini-3-flash-image --input '{"prompt": "dark architect, cinematic", "width": 1080, "height": 1080}'
```

**Post-processing:**
```bash
infsh app run falai/birefnet --input '{"image_url": "https://..."}'          # background removal
infsh app run falai/topaz-image-upscaler --input '{"image_url": "https://..."}' # upscaling
```

---

## GPT Image 2 Prompt Gallery — Mandatory Consultation

Before writing ANY image generation prompt, consult the gallery.

**3-step protocol:**
```bash
# Step 1 — Always first
gh api repos/wuyoscar/gpt_image_2_skill/contents/skills/gpt-image/references/gallery.md \
  --jq '.content' | base64 -d

# Step 2 — Load closest category (ONE for normal, max 3 for hybrid)
gh api repos/wuyoscar/gpt_image_2_skill/contents/skills/gpt-image/references/gallery-<slug>.md \
  --jq '.content' | base64 -d

# Step 3 — Only for dense text, UI, diagrams, weak prompts
gh api repos/wuyoscar/gpt_image_2_skill/contents/skills/gpt-image/references/craft.md \
  --jq '.content' | base64 -d
```

**Arthur aesthetic → start with:** `cinematic-film-references` (147–152) or `photography` (63–66)
**Product renders → start with:** `product-and-food` (56–59) + craft.md JSON schema section

**MAYA rule:** When generating autonomously (no FREYJA brief), consult gallery directly — no delegation needed.

---

## Lip Sync Studio (muapi-direct — Tier 0, no alternative)

**Script:** `~/.claude/skills/muapi-studio/scripts/muapi-client.py`
**Auth:** reads `~/.infsh-token` as x-api-key

```bash
# Default: static face + audio
python ~/.claude/skills/muapi-studio/scripts/muapi-client.py \
  --endpoint infinitetalk-image-to-video \
  --image ./face.jpg \
  --audio ./voice.mp3 \
  --output ./lipsync.mp4

# PT-BR realism
python ~/.claude/skills/muapi-studio/scripts/muapi-client.py \
  --endpoint wan2.2-speech-to-video \
  --image ./face.jpg --audio ./ptbr-narration.mp3 --output ./lipsync-ptbr.mp4

# Max quality (slowest)
python ~/.claude/skills/muapi-studio/scripts/muapi-client.py \
  --endpoint ltx-2.3-lipsync --image ./face.jpg --audio ./voice.mp3 --output ./result.mp4
```

**Lip sync pipeline:** `FREYJA *brief-maya` → `ElevenLabs TTS (voice.mp3)` → `muapi lip sync` → `FREYJA *av-review`

**Quando usar:** Any talking head or avatar animation — no equivalent exists elsewhere in the stack
**Quando NÃO usar:** Standard video generation (use Higgsfield); image editing (use GPT-4o edit or MJ v7)

---

## Extended Video — muapi Models (not on Higgsfield)

Use when Higgsfield does not have the specific model:

```bash
python ~/.claude/skills/muapi-studio/scripts/muapi-client.py \
  --endpoint veo3.1-text-to-video \
  --prompt "cinematic scene 9:16" --aspect_ratio 9:16 --duration 6 \
  --output ./veo-clip.mp4
```

Available endpoints: `veo3.1-text-to-video`, `openai-sora-2-text-to-video`, `wan2.6-text-to-video`, `kling-v3.0-pro-text-to-video`

---

## Image Editing — muapi (GPT-4o, MJ v7)

For text-guided image editing (Tier 0 for this use case — no equivalent):

```bash
python ~/.claude/skills/muapi-studio/scripts/muapi-client.py \
  --endpoint gpt4o-edit \
  --prompt "change background to dark architectural space, keep person exactly as is" \
  --image ./photo.jpg --output ./edited.png
```

Endpoints: `gpt4o-edit`, `gpt4o-image-to-image`, `midjourney-v7-omni-reference`, `flux-kontext-max-i2i`

---

## Marketing Studio VIP 1080p

For product ads with avatar + references (1080p, VIP quality):

```bash
python ~/.claude/skills/muapi-studio/scripts/muapi-client.py \
  --endpoint sd-2-vip-omni-reference-1080p \
  --prompt "confident presenter holds product, UGC style, studio lighting" \
  --images ./product.jpg ./avatar.png ./reference.jpg \
  --aspect_ratio 9:16 --duration 15 --output ./vip-ad.mp4
```

---

## ElevenLabs Audio Suite

**Agent:** MAYA | **Token:** via infsh standard auth

| Capability | App ID | Command |
|-----------|--------|---------|
| TTS (premium) | `elevenlabs/text-to-speech` | `infsh app run elevenlabs/text-to-speech --input '{"text":"...","voice_id":"...","model_id":"eleven_multilingual_v2"}'` |
| Multi-speaker dialogue | `elevenlabs/dialogue` | `infsh app run elevenlabs/dialogue` |
| Music (up to 10 min) | `elevenlabs/music` | `infsh app run elevenlabs/music --input '{"prompt":"...","duration_seconds":120}'` |
| STT (Scribe, 98%+) | `elevenlabs/scribe` | `infsh app run elevenlabs/scribe --input '{"audio_url":"..."}'` |
| Sound FX | `elevenlabs/sound-effects` | `infsh app run elevenlabs/sound-effects --input '{"text":"...","duration_seconds":5}'` |
| Dubbing | `elevenlabs/dubbing` | `infsh app run elevenlabs/dubbing` |
| Voice changer | `elevenlabs/voice-changer` | `infsh app run elevenlabs/voice-changer --input '{"audio_url":"...","voice":"daniel"}'` |
| Voice isolator | `elevenlabs/voice-isolator` | `infsh app run elevenlabs/voice-isolator` |
| Voice cloning | `elevenlabs/voice-design` | `infsh app run elevenlabs/voice-design` |

**Language model for PT-BR:** always use `eleven_multilingual_v2`

**Casos de uso:**
- TTS → narrate RUNA SYSTEMS course modules
- Scribe → transcribe sales calls, generate subtitles
- Music → background for @arthsystems_ Reels (commercial license)
- Lip sync pipeline → TTS first, then muapi lip sync

---

## video-use — Raw Footage Editing (ACTIVE ✅ 2026-05-12)

**Status:** video-use 0.1.0 — FFmpeg v8.0.1 — ElevenLabs Scribe — Python 3.14
**Path:** `~/Developer/video-use` (skill symlink: `~/.claude/skills/video-use`)
**Requirement:** `ELEVENLABS_API_KEY` in `~/Developer/video-use/.env`

**Agente:** MAYA (primary); Arthur can run directly
**Quando usar:** Real recorded footage — talking heads, classes, VSLs, multi-take recordings
**Quando NÃO usar:** AI-generated video (Higgsfield/muapi); lip sync animation (muapi); programmatic overlays (Remotion)

**Standard workflow:**
```bash
cd /path/to/footage
claude
# In Portuguese: "Edita esses vídeos para Instagram Reels"
```

The agent will:
1. Transcribe via ElevenLabs Scribe (word-level, auto-cached)
2. Propose edit strategy — waits for approval before cutting
3. Execute: filler removal → silence removal → color grade → subtitles
4. Self-evaluate (3 passes)
5. Save `final.mp4` in `/edit/`

**Capabilities:**
| Capability | Mechanism |
|-----------|-----------|
| Filler removal | Word-level Scribe timestamps |
| Silence removal | Waveform gap analysis |
| Color grade | FFmpeg ASC CDL filter chains |
| Subtitle burn | SRT word-boundary, 2 words uppercase |
| Multi-take selection | Sub-agent selects best segment per concept |
| Animation overlays | HyperFrames, Remotion, Manim, PIL backends |
| Session memory | `project.md` persists strategy across sessions |

**Hard production rules:**
- Subtitles always LAST in the filter chain
- Per-segment extract → lossless concat (never single-pass filtergraph)
- 30ms padding per cut edge; 30ms audio fades per segment
- Word-boundary cuts only — never split mid-word
- Strategy confirmed before execution — always
- Outputs in `/edit/` — never inside the project directory

**Cost:** ElevenLabs Scribe ~$0.06/10min of audio | FFmpeg: free

**Casos de uso:**
- CREATOR$: Arthur talks-head → remove fillers + color grade → Reels pipeline
- RUNA SYSTEMS: class recordings → clean + subtitles → Skool upload
- Lives de construção (R$97): 2h raw → 45min highlight cut

---

## Remotion — Programmatic Video (Overlay Layer)

**Agente:** @dev (primary); MAYA (executes as sub-agent inside video-use)
**Quando usar:** Animated overlays with dynamic data, batch personalized videos, React-based intro sequences
**Quando NÃO usar:** Footage editing (video-use); AI cinematic (Higgsfield); lip sync (muapi)

**Skill:** `remotion-render` via infsh
**Node.js 22+ required** for browser-native compositions

```typescript
await renderMedia({
  composition,
  serveUrl,
  codec: 'h264',
  outputLocation: 'out/video.mp4',
  inputProps: { data: [...] }
});
```

> Inside video-use: Remotion runs as a parallel sub-agent when the brief requests an animated overlay. video-use composes the Remotion .mp4 into footage via FFmpeg.

---

## Higgsfield MCP — Soul Management & Media Library

These operations have NO CLI equivalent — use MCP directly:

| Tool | Purpose |
|------|---------|
| `mcp__claude_ai_MCP_Higgsfield__soul_list` | List trained souls |
| `mcp__claude_ai_MCP_Higgsfield__soul_status` | Check soul training status |
| `mcp__claude_ai_MCP_Higgsfield__soul_train_wizard` | Guided soul training |
| `mcp__claude_ai_MCP_Higgsfield__show_generations` | Browse generation history |
| `mcp__claude_ai_MCP_Higgsfield__show_medias` | Browse media library, verify IDs |
| `mcp__claude_ai_MCP_Higgsfield__media_upload` | Upload reference media |
| `mcp__claude_ai_MCP_Higgsfield__media_confirm` | Confirm uploaded media |
| `mcp__claude_ai_MCP_Higgsfield__balance` | Check credit balance |

**Arthur's soul ID:** `a4f9c61c-e105-4bb8-833d-c40158ef6224` (soul_2 — for portraits)

---

## @arthsystems_ Production Flow

All content for Arthur's Instagram account requires FREYJA review:

```
FREYJA *brief-maya
  → MAYA executes (CLI/MCP/muapi/video-use)
  → FREYJA *av-review (narrative adherence check)
    → [REJECTED] → MAYA regenerates with FREYJA feedback
    → [APPROVED] → FREYJA *approve-output
  → HERMES publishes via n8n + Meta Graph API
```

For standalone / non-@arthsystems_ requests: MAYA executes directly, no FREYJA review required.

---

## Agency Visual Identity Pipeline (ACTIVE ✅ 2026-05-24)

Sequential pipeline for building complete brand visual identities. 12 skills installed at `~/.claude/skills/`. MAYA owns 7 of them.

**Full pipeline:**
```
creative-brief (ARES/FREYJA)
  → paleta-cores (MAYA)
  → logomarca (MAYA) + tipografia (@ux-design-expert)
  → mock-corporativo (MAYA) + mock-produto (MAYA) + mock-ambiente (MAYA)
  → moodboard (MAYA)
  → moodboard-to-motion (FREYJA/MAYA)
  → lp-builder (@dev/MAYA)
  → arte-final (@qa)
```

**Output folder per client:** `outputs/[cliente]/{brief,paleta,logo,mockups,moodboard,apresentacao,lp}/`

### `paleta-cores` — Brand Color Palette

**Skill:** `/paleta-cores` | **Owner:** MAYA + @ux-design-expert
**Trigger:** "definir paleta", "paleta da marca", "cores da marca"
**Requires:** `creative-brief` completed first (brand personality + context)

Uses GPT Image 2 (Higgsfield) to generate palette visualization. Saves to `outputs/[cliente]/paleta/paleta.json`.

```
/paleta-cores
# Reads brief from outputs/[cliente]/brief/
# Generates color harmony + contrast analysis
# Saves paleta.json + swatch image
```

---

### `logomarca` — Logo Generation

**Skill:** `/logomarca` | **Owner:** MAYA
**Trigger:** "criar logo", "gerar logo", "rebrand", "identidade visual"
**Requires:** `paleta-cores` completed (brand colors as constraint)

Calls Higgsfield MCP directly. Generates multiple logo variants. Saves `media_id` for downstream moodboard use.

```
/logomarca
# Uses gpt_image_2 with palette constraints from paleta.json
# Generates: primary logo, horizontal, icon-only variants
# Saves media_ids to outputs/[cliente]/logo/logo-refs.json
```

---

### `mock-corporativo` — Corporate Stationery Mockups

**Skill:** `/mock-corporativo` | **Owner:** MAYA
**Trigger:** "mockup de cartão de visita", "papelaria corporativa", "business card mockup"
**Requires:** `logomarca` completed (logo media_id needed)

Uses Higgsfield GPT Image 2 with the real logo as reference image.

```
/mock-corporativo
# Generates: business card, letterhead, envelope, email signature
# Outputs to outputs/[cliente]/mockups/corporativo/
```

---

### `mock-produto` — Product Mockups

**Skill:** `/mock-produto` | **Owner:** MAYA
**Trigger:** "mockup de camiseta", "mockup de embalagem", "product mockup", "merchandise"
**Requires:** `logomarca` completed

Uses GPT Image 2 with logo reference for branded product mockups.

```
/mock-produto
# Generates: apparel, packaging, branded merchandise
# Outputs to outputs/[cliente]/mockups/produto/
```

---

### `mock-ambiente` — Environmental / OOH Mockups

**Skill:** `/mock-ambiente` | **Owner:** MAYA
**Trigger:** "mockup de outdoor", "car wrap mockup", "mockup OOH", "signage mockup"
**Requires:** `logomarca` completed

Out-of-home advertising and environmental brand application mockups via GPT Image 2.

```
/mock-ambiente
# Generates: billboard, storefront, vehicle wrap, trade show
# Outputs to outputs/[cliente]/mockups/ambiente/
```

---

### `moodboard` — Visual Mood & Identity Board

**Skill:** `/moodboard` | **Owner:** MAYA
**Trigger:** "criar moodboard", "painel visual", "mood da marca"
**Requires:** `paleta-cores` + `logomarca` both completed (uses real logo in composition)

Generates a single 16:9 moodboard image via Higgsfield GPT Image 2, embedding the real logo and brand colors. Performs prerequisites check before executing.

```
/moodboard
# Checks: paleta.json + logo-refs.json exist
# Generates: 1 × 16:9 moodboard with logo, palette, textures, typography feel
# Saves to outputs/[cliente]/moodboard/moodboard.png
```

---

### `lp-builder` — Landing Page Builder

**Skill:** `/lp-builder` | **Owner:** @dev / MAYA (hero image via Higgsfield optional)
**Trigger:** "criar landing page", "página de vendas", "lp para o produto"
**Requires:** `creative-brief` + `paleta-cores` (design tokens for HTML)

Generates a self-contained HTML file for the product landing page. Hero image generated via Higgsfield (optional). Applies brand colors and typography from `paleta.json`.

```
/lp-builder
# Reads brand tokens from paleta.json
# Optionally generates hero via GPT Image 2
# Outputs: outputs/[cliente]/lp/index.html (self-contained, no dependencies)
```

---

## Anti-Patterns

❌ Using MCP polling loop when CLI `--wait` is available (3 tool calls vs 1)
❌ Using soul_2 for scenes with cars or complex props — geometry fails; use gpt_image_2 + refs
❌ Using KIE.AI for GPT Image 2 — broken as of 2026-05-04; use Higgsfield CLI
❌ Using infsh as primary when CLI/Skills are available — CLI is Tier 1, infsh is Tier 2
❌ Using muapi for standard Seedance — Higgsfield is Tier 0 for standard video
❌ Calling any muapi endpoint without `--output` flag — always save locally
❌ Publishing @arthsystems_ content without FREYJA review
❌ Using video-use for AI-generated video — it edits real footage only
❌ Skipping GPT Image 2 Gallery consultation before writing any image prompt
