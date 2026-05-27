# muapi-direct — Usage Rules

## What it is

Direct REST access to `api.muapi.ai` — the same backend that powers the `infsh` CLI,
but without the abstraction layer. Exposes 229+ AI generation models across 6 categories,
including exclusive capabilities not available through any other stack layer:
Lip Sync Studio (9 models), GPT-4o image editing, Midjourney v7, extended video models
(Veo 3.1, Sora 2, Wan 2.6), and Marketing Studio VIP (1080p product ads with references).

API docs: https://api.muapi.ai | Source: https://github.com/Anil-matcha/Open-Generative-AI

## Status

✅ **Script installed** — `~/.claude/skills/muapi-studio/scripts/muapi-client.py`
✅ **API key** — reads from `~/.infsh-token` (same key as infsh — no new credential needed)
✅ **Skill registered** — `/muapi-studio` skill active in Claude Code
✅ **Reference docs** — `~/.claude/skills/muapi-studio/references/`

---

## Agent Assignment

| Agent | Role |
|-------|------|
| **MAYA** | Primary owner — all generation workflows (lip sync, video, image edit, marketing VIP) |
| @dev | Script updates and pipeline integration only |
| FREYJA | Brief writer and AV reviewer — does NOT execute muapi directly |

Other agents: route through MAYA for any generation.

---

## Access Layer Position

muapi-direct sits between the infsh abstraction and raw HTTP calls:

```
Tier 0 → Higgsfield MCP/CLI/Skills   — seedance_2_0, kling3_0, gpt_image_2
Tier 1 → KIE.AI (kie-client.py)      — GPT Image 2 premium (if restored), Seedance fallback
Tier 2 → muapi-studio (this)         — Lip sync, GPT-4o edit, MJ v7, extended video, Marketing VIP
Tier 3 → infsh                       — Standard image/video models available on infsh
```

**Exception — muapi IS Tier 0 for:**
- Any Lip Sync task (no alternative exists anywhere in the stack)
- GPT-4o image editing (`gpt4o-edit`)
- Midjourney v7 (`midjourney-v7-omni-reference`)

---

## Priority Chains

### Lip Sync (no alternative in stack)

```
Tier 0 → muapi-studio infinitetalk-image-to-video   — default
       → muapi-studio wan2.2-speech-to-video         — PT-BR realism
       → muapi-studio ltx-2.3-lipsync                — max quality
       → muapi-studio ltx-2-19b-lipsync              — cinematic (slowest)
Tier 1 → (no equivalent anywhere else — no fallback)
```

### Extended Video (Veo 3.1, Sora 2, Wan 2.6, Kling 3.0 Pro)

```
Tier 0 → Higgsfield CLI/Skills (seedance_2_0, kling3_0, veo3_1 if available)
Tier 1 → muapi-studio (veo3.1-text-to-video, openai-sora-2-text-to-video, wan2.6-text-to-video)
Tier 2 → infsh (standard models)
```

### Image Editing (GPT-4o, Midjourney v7)

```
Tier 0 → muapi-studio gpt4o-edit / midjourney-v7-omni-reference
Tier 1 → Higgsfield gpt_image_2 (scenes + refs, NOT text-guided editing)
```

### Marketing Studio VIP

```
Tier 0 → muapi-studio sd-2-vip-omni-reference-1080p  — 1080p premium
Tier 1 → Higgsfield Marketing Studio (marketing_studio_video)  — standard quality
```

---

## Model Catalog Quick Reference

| Workflow | Key Endpoints | Primary Use |
|----------|-------------|-------------|
| **Lip Sync** | `infinitetalk-image-to-video`, `wan2.2-speech-to-video`, `ltx-2.3-lipsync` | Face animation with audio |
| **Extended Video** | `veo3.1-text-to-video`, `openai-sora-2-text-to-video`, `wan2.6-text-to-video`, `kling-v3.0-pro-text-to-video` | Models absent from Higgsfield |
| **Image Edit** | `gpt4o-edit`, `gpt4o-image-to-image`, `midjourney-v7-omni-reference`, `flux-kontext-max-i2i` | Text-guided image editing |
| **Marketing VIP** | `seedance-2-vip-omni-reference`, `sd-2-vip-omni-reference-1080p` | VIP product ads 1080p |

Full catalog: `~/.claude/skills/muapi-studio/references/model-catalog.md`

---

## Workflow 1 — Lip Sync Studio

```bash
# Default: static face + any audio
python ~/.claude/skills/muapi-studio/scripts/muapi-client.py \
  --endpoint infinitetalk-image-to-video \
  --image ./face.jpg \
  --audio ./voice.mp3 \
  --output ./lipsync.mp4

# PT-BR realism
python ~/.claude/skills/muapi-studio/scripts/muapi-client.py \
  --endpoint wan2.2-speech-to-video \
  --image ./face.jpg --audio ./ptbr-narration.mp3 --output ./lipsync-ptbr.mp4
```

Pipeline: `FREYJA *brief-maya` → `MAYA: ElevenLabs TTS` → `MAYA: muapi lip sync` → `FREYJA *av-review`

---

## Workflow 2 — Extended Video

```bash
python ~/.claude/skills/muapi-studio/scripts/muapi-client.py \
  --endpoint veo3.1-text-to-video \
  --prompt "architect walks through digital infrastructure, cinematic 9:16" \
  --aspect_ratio 9:16 --duration 6 \
  --output ./veo-clip.mp4
```

Use only when Higgsfield doesn't have the specific model.

---

## Workflow 3 — Image Editing

```bash
python ~/.claude/skills/muapi-studio/scripts/muapi-client.py \
  --endpoint gpt4o-edit \
  --prompt "change background to dark architectural space, keep person exactly as is" \
  --image ./photo.jpg \
  --output ./edited.png
```

---

## Workflow 4 — Marketing Studio VIP

```bash
python ~/.claude/skills/muapi-studio/scripts/muapi-client.py \
  --endpoint sd-2-vip-omni-reference-1080p \
  --prompt "confident presenter holds product, UGC style, studio lighting" \
  --images ./product.jpg ./avatar.png ./reference.jpg \
  --aspect_ratio 9:16 --duration 15 \
  --output ./vip-ad.mp4
```

---

## Anti-Patterns

❌ **Using muapi for standard Seedance 2.0** — Use Higgsfield CLI/MCP (Tier 0). muapi is NOT a replacement for `seedance_2_0` on Higgsfield.

❌ **Using infsh when muapi-direct has the exclusive model** — For lip sync, GPT-4o edit, and MJ v7, muapi-direct is Tier 0. infsh has no equivalents.

❌ **Calling muapi for text generation or code** — Use Claude native. muapi is exclusively for media generation.

❌ **Using muapi without a FREYJA brief for @arthsystems_ content** — No asset ships without narrative direction from FREYJA.

❌ **Using seedance-2-vip-omni-reference for standard videos** — Standard Seedance goes through Higgsfield. VIP endpoint is exclusively for product ads with avatar + references.

❌ **Forgetting --output flag** — Always save locally. Never rely only on CDN URL for final assets.

---

## Product Application

| Product | muapi-direct Role |
|---------|-----------------|
| **RUNA SYSTEMS** | Teaching clients the lip sync + GPT-4o edit pipeline; @arthsystems_ reels and talking head demos with ElevenLabs voice |