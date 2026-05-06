---
date: 2026-05-06
tags: [skills, muapi, lip-sync, video, image-edit, marketing-vip, maya, dev, devops, muapi-studio]
project: runa-systems-global
type: skill-documentation
tier: T3
status: installed
---

# muapi-studio — Skill Documentation

> T3 onboarding doc — direct REST access to api.muapi.ai for exclusive AV generation capabilities.
> Rule file: [[muapi-direct-usage]] | Capability map: [[capability-map]]

---

## Overview

**muapi-studio** provides direct REST access to `api.muapi.ai` — the same backend that powers the `infsh` CLI, but without the abstraction layer. Exposes 229+ AI generation models across 6 categories, including capabilities **not available anywhere else in the stack**: Lip Sync Studio (9 models), GPT-4o image editing, Midjourney v7, extended video models (Veo 3.1, Sora 2, Wan 2.6), and Marketing Studio VIP (1080p product ads with avatar references).

**License:** Proprietary (api.muapi.ai)
**Auth:** `~/.infsh-token` — same API key as infsh, no new credential needed
**Docs:** https://api.muapi.ai

---

## Skills / Workflows

### Workflow 1 — Lip Sync Studio (Tier 0 — no alternative)

| Model | Use Case |
|-------|---------|
| `infinitetalk-image-to-video` | Default — static face + any audio |
| `wan2.2-speech-to-video` | PT-BR realism |
| `ltx-2.3-lipsync` | Max quality |
| `ltx-2-19b-lipsync` | Cinematic, slowest |
| `sync-lipsync` | Alternative sync engine |
| `latent-sync` | Latent space sync |
| `creatify-lipsync` | Creatify integration |
| `veed-lipsync` | Veed engine |
| `infinitetalk-video-to-video` | Video source face + audio |

### Workflow 2 — Extended Video

| Model | Notes |
|-------|-------|
| `veo3.1-text-to-video` | Google Veo 3.1 |
| `openai-sora-2-text-to-video` | Sora 2 |
| `wan2.6-text-to-video` | Wan 2.6 |
| `kling-v3.0-pro-text-to-video` | Kling 3.0 Pro |

Use only when Higgsfield does not carry the specific model.

### Workflow 3 — Image Editing (Tier 0 — no alternative)

| Model | Use Case |
|-------|---------|
| `gpt4o-edit` | Text-guided GPT-4o image editing |
| `gpt4o-image-to-image` | GPT-4o image-to-image |
| `midjourney-v7-omni-reference` | MJ v7 with omni-reference |
| `flux-kontext-max-i2i` | Flux Kontext image-to-image |

### Workflow 4 — Marketing Studio VIP

| Model | Use Case |
|-------|---------|
| `sd-2-vip-omni-reference-1080p` | 1080p premium ads with avatar + refs |
| `seedance-2-vip-omni-reference` | VIP Seedance 2 with references |

---

## CLI Usage (muapi-client.py)

```bash
# Lip sync — default
python ~/.claude/skills/muapi-studio/scripts/muapi-client.py \
  --endpoint infinitetalk-image-to-video \
  --image ./face.jpg \
  --audio ./voice.mp3 \
  --output ./lipsync.mp4

# Lip sync — PT-BR realism
python ~/.claude/skills/muapi-studio/scripts/muapi-client.py \
  --endpoint wan2.2-speech-to-video \
  --image ./face.jpg --audio ./ptbr-narration.mp3 --output ./lipsync-ptbr.mp4

# Extended video
python ~/.claude/skills/muapi-studio/scripts/muapi-client.py \
  --endpoint veo3.1-text-to-video \
  --prompt "architect walks through digital infrastructure, cinematic 9:16" \
  --aspect_ratio 9:16 --duration 6 \
  --output ./veo-clip.mp4

# GPT-4o image edit
python ~/.claude/skills/muapi-studio/scripts/muapi-client.py \
  --endpoint gpt4o-edit \
  --prompt "change background to dark architectural space, keep person exactly as is" \
  --image ./photo.jpg \
  --output ./edited.png

# Marketing Studio VIP
python ~/.claude/skills/muapi-studio/scripts/muapi-client.py \
  --endpoint sd-2-vip-omni-reference-1080p \
  --prompt "confident presenter holds product, UGC style, studio lighting" \
  --images ./product.jpg ./avatar.png ./reference.jpg \
  --aspect_ratio 9:16 --duration 15 \
  --output ./vip-ad.mp4
```

---

## Priority Chains

### Lip Sync (no alternative in stack)

```
Tier 0 → muapi infinitetalk-image-to-video   — default
       → muapi wan2.2-speech-to-video         — PT-BR realism
       → muapi ltx-2.3-lipsync                — max quality
(no fallback — muapi is the ONLY route)
```

### Extended Video

```
Tier 0 → Higgsfield CLI/Skills (seedance_2_0, kling3_0)
Tier 1 → muapi (veo3.1, openai-sora-2, wan2.6, kling-v3.0-pro)
Tier 2 → infsh (standard models)
```

### Image Editing

```
Tier 0 → muapi gpt4o-edit / midjourney-v7-omni-reference
Tier 1 → Higgsfield gpt_image_2 (scenes + refs — NOT text-guided editing)
```

### Marketing VIP

```
Tier 0 → muapi sd-2-vip-omni-reference-1080p  — 1080p premium
Tier 1 → Higgsfield Marketing Studio          — standard quality
```

---

## Pipeline Position

```
FREYJA *brief-maya (narrative direction)
  → MAYA: ElevenLabs TTS (generate voice)
  → MAYA: muapi lip sync (face animation)
  → FREYJA *av-review (narrative adherence)
  → [REJECTED] → MAYA regenerates
  → [APPROVED] → FREYJA *approve-output → HERMES publish
```

For standalone/non-@arthsystems_ requests:
```
User → MAYA: muapi-client.py --endpoint <model> → asset returned
```

---

## Decision Tree

```
Need to animate a face with audio?
  └── YES → muapi Lip Sync (Tier 0, no alternative)
        ├── Standard use → infinitetalk-image-to-video
        ├── PT-BR realism → wan2.2-speech-to-video
        └── Max quality → ltx-2.3-lipsync

Need to edit an image with text instruction?
  └── YES → muapi gpt4o-edit or midjourney-v7-omni-reference

Need a video model NOT on Higgsfield?
  └── Veo 3.1 / Sora 2 / Wan 2.6 / Kling 3.0 Pro → muapi extended video

Need a 1080p product ad with avatar + refs?
  └── muapi sd-2-vip-omni-reference-1080p

Everything else (standard Seedance, cinematic video)?
  └── Higgsfield CLI/MCP (Tier 0 in general hierarchy)
```

**When NOT to use muapi:**
- Standard Seedance 2.0 → use Higgsfield CLI/MCP
- Text generation or code → use Claude native
- Operations available on infsh → prefer infsh (simpler interface)

---

## File Structure

```
~/.claude/skills/muapi-studio/
├── SKILL.md               ← Skill definition
├── scripts/
│   └── muapi-client.py    ← Main client script
└── references/
    └── model-catalog.md   ← Full 229+ model listing
```

**Auth:** `~/.infsh-token` (`x-api-key` header — same key as infsh)

---

## Setup

```bash
# Already installed — 2026-05-06
# Location: ~/.claude/skills/muapi-studio/
# Invoke: /muapi-studio or python ~/.claude/skills/muapi-studio/scripts/muapi-client.py

# Auth file (shared with infsh — no new setup needed):
cat ~/.infsh-token
```

---

## Anti-Patterns

❌ **Using muapi for standard Seedance 2.0** — use Higgsfield CLI/MCP (Tier 0). muapi is NOT a replacement for `seedance_2_0` on Higgsfield.

❌ **Using infsh when muapi-direct has the exclusive model** — For Lip Sync, GPT-4o edit, and MJ v7: infsh has no equivalents. muapi is Tier 0 for these.

❌ **Calling muapi for text generation or code** — use Claude native. muapi is exclusively for media generation.

❌ **Using muapi without a FREYJA brief for @arthsystems_ content** — no asset ships without narrative direction from FREYJA.

❌ **Using seedance-2-vip-omni-reference for standard videos** — Standard Seedance goes through Higgsfield. VIP endpoint is exclusively for product ads with avatar + references.

❌ **Forgetting --output flag** — always save locally. Never rely only on CDN URL for final assets.

---

## Product Application

| Product | muapi-studio Role |
|---------|-----------------|
| **RUNA SYSTEMS** | Teaching module — lip sync + GPT-4o edit pipeline as part of Dev Neural / MAYA module; demonstrates full ElevenLabs TTS → muapi lip sync → FREYJA review pipeline |

---

## Related Skills & Rules

- `higgsfield-mcp-usage.md` — Tier 0 for standard video (seedance_2_0, gpt_image_2)
- `inference-sh-usage.md` — Tier 1 fallback for standard AV generation
- `capability-map.md` → MAYA row — full AV stack priority chain
- Rule: [[muapi-direct-usage]] — full priority chains, agent assignment, CLI examples
- Capability map: [[capability-map]] → MAYA row

---

## Onboarding Status

| Item | Status |
|------|--------|
| Skill installed | ✅ `~/.claude/skills/muapi-studio/` |
| `muapi-client.py` script | ✅ `~/.claude/skills/muapi-studio/scripts/muapi-client.py` |
| Auth configured | ✅ `~/.infsh-token` (shared with infsh) |
| `muapi-direct-usage.md` rule file | ✅ `.claude/rules/muapi-direct-usage.md` |
| `CLAUDE.md` entry | ✅ Rules System table |
| `capability-map.md` entry | ✅ MAYA row + muapi-direct section |
| Obsidian documentation | ✅ This file |
