# LongCat-Video — Usage Rules

## What it is

Local inference video generation model (13.6B parameters) from Meituan LongCat Team.
Supports text-to-video, image-to-video, video-continuation, long video (minutes), and
audio-driven avatar animation. Runs entirely locally — no API costs, full privacy.

Repo: https://github.com/meituan-longcat/LongCat-Video | License: MIT

**Critical distinction:** This is a LOCAL model, not an API. Requires GPU hardware with
CUDA 12.4 support. Before using, verify GPU VRAM availability (720p requires ~24GB+).

## Status

```
✅ Documentation complete — T3 onboarding 2026-05-06
⚠️ Installation required — local GPU setup (CUDA 12.4, conda, PyTorch 2.6.0)
⚠️ Model weights not downloaded — 13.6B params (large download via HuggingFace)
```

To install when GPU is ready, see Workflow 0 below.

---

## Agent Assignment

| Agent | Role |
|-------|------|
| **MAYA** | Primary owner — all video generation workflows |
| @dev | Environment setup, torchrun execution, multi-GPU configuration |
| @devops | Conda env management, weight storage, GPU monitoring |

Other agents: route through MAYA for any generation task.

---

## Unique Capabilities (No Stack Equivalent)

| Capability | Why Unique | Stack Gap Filled |
|-----------|-----------|-----------------|
| **Video Continuation** | Extend any existing video forward in time | Nothing in Higgsfield/muapi/infsh does this |
| **Long Video (minutes)** | Native pretraining on continuation — no color drift at scale | All stack alternatives max at ~15s clips |
| **Local Inference** | Zero API cost, complete privacy, offline operation | All other AV tools require external APIs |
| **Avatar multi-audio** | Parallel or concatenated multi-speaker audio animation | muapi has single-stream only |

---

## Tier Position in Video Generation Stack

```
Video Continuation (unique):
  Tier 0 → LongCat-Video run_demo_video_continuation.py    — ONLY option in stack

Long Video (unique):
  Tier 0 → LongCat-Video run_demo_long_video.py            — ONLY option in stack

Text-to-Video (general):
  Tier 0 → Higgsfield MCP (seedance_2_0)
  Tier 1 → Higgsfield CLI (seedance_2_0, veo3_1, kling3_0)
  Tier 2 → muapi-studio (veo3.1, Sora 2, Wan 2.6, Kling 3.0 Pro)
  Tier 3 → infsh (higgsfield/seedance-2, bytedance/seedance-1)
  Tier 4 → LongCat-Video run_demo_text_to_video.py          — fallback only (GPU-dependent)

Image-to-Video (general):
  Tier 0 → Higgsfield MCP
  Tier 1 → Higgsfield CLI
  Tier 2 → muapi-studio
  Tier 3 → LongCat-Video run_demo_image_to_video.py         — fallback only

Avatar / Lip Sync:
  Tier 0 → muapi-studio (infinitetalk-image-to-video, wan2.2-speech-to-video)
  Tier 1 → LongCat-Video-Avatar (single-audio and multi-audio)             — local alternative
```

---

## Models

| Model | Weights Path | Use Case |
|-------|-------------|---------|
| `LongCat-Video` | `./weights/LongCat-Video` | T2V, I2V, continuation, long video |
| `LongCat-Video-Avatar` | `./weights/LongCat-Video-Avatar` | Audio-driven character animation |

---

## Hardware Requirements

| Config | VRAM | Resolution | Use Case |
|--------|------|-----------|---------|
| Single GPU | ~24GB | 720p | T2V, I2V, continuation |
| Dual GPU | 2×16GB+ | 720p | Faster inference via context parallelism |
| Single GPU | ~12-16GB | 480p | Lower VRAM fallback |

---

## Workflow 0 — Installation (One-Time Setup)

```bash
# Clone repository
git clone https://github.com/meituan-longcat/LongCat-Video.git
cd LongCat-Video

# Create conda environment
conda create -n longcat-video python=3.10
conda activate longcat-video

# Install PyTorch with CUDA 12.4
pip install torch==2.6.0+cu124 torchvision==0.21.0+cu124 torchaudio==2.6.0

# Install FlashAttention (GPU-dependent build)
pip install flash_attn==2.7.4.post1

# Install dependencies
pip install -r requirements.txt
conda install -c conda-forge librosa ffmpeg
pip install -r requirements_avatar.txt

# Download model weights (LongCat-Video foundation)
huggingface-cli download meituan-longcat/LongCat-Video --local-dir ./weights/LongCat-Video

# Download Avatar weights (optional — for lip sync workflows)
huggingface-cli download meituan-longcat/LongCat-Video-Avatar --local-dir ./weights/LongCat-Video-Avatar
```

---

## Workflow 1 — Text-to-Video

```bash
conda activate longcat-video

# Single GPU
torchrun run_demo_text_to_video.py \
  --checkpoint_dir=./weights/LongCat-Video \
  --enable_compile

# Dual GPU (faster)
torchrun --nproc_per_node=2 run_demo_text_to_video.py \
  --context_parallel_size=2 \
  --checkpoint_dir=./weights/LongCat-Video
```

Output: 720p, 30fps video.

---

## Workflow 2 — Image-to-Video

```bash
conda activate longcat-video

torchrun --nproc_per_node=2 run_demo_image_to_video.py \
  --context_parallel_size=2 \
  --checkpoint_dir=./weights/LongCat-Video
```

Output: Animation derived from input image.

---

## Workflow 3 — Video Continuation (UNIQUE — Tier 0)

Extend an existing video clip forward in time without color drift.

```bash
conda activate longcat-video

torchrun run_demo_video_continuation.py \
  --checkpoint_dir=./weights/LongCat-Video \
  --enable_compile
```

**Pipeline integration:**
```
MAYA generates base clip (Higgsfield/muapi)
  → LongCat-Video continuation extends duration
  → FREYJA *av-review (narrative adherence)
  → HERMES publish
```

---

## Workflow 4 — Long Video (Minutes) (UNIQUE — Tier 0)

Generate extended video without quality degradation or color drift.

```bash
conda activate longcat-video

torchrun run_demo_long_video.py \
  --checkpoint_dir=./weights/LongCat-Video \
  --enable_compile
```

Output: Minutes-long video at 720p, 30fps via coarse-to-fine strategy + Block Sparse Attention.

---

## Workflow 5 — Avatar (Audio-Driven Animation)

### Single-Audio (one speaker):
```bash
conda activate longcat-video

torchrun --nproc_per_node=2 run_demo_avatar_single_audio_to_video.py \
  --context_parallel_size=2 \
  --checkpoint_dir=./weights/LongCat-Video-Avatar \
  --stage_1=at2v
```

### Multi-Audio (multiple speakers):
```bash
torchrun --nproc_per_node=2 run_demo_avatar_multi_audio_to_video.py \
  --context_parallel_size=2 \
  --checkpoint_dir=./weights/LongCat-Video-Avatar
```

**Avatar tuning tips:**
- Lip sync quality: `audio_cfg` between 3–5
- Reference frame consistency: index 0–24 (other ranges reduce repeated actions)
- Mask frame range: default 3 (higher values may introduce artifacts)

---

## When to Use

**USE LongCat-Video when:**
- Task requires **video continuation** (extend a clip) — only option in stack
- Task requires **long video (minutes)** — only option in stack
- Privacy requirement: no data must leave local machine
- API budget exhausted for the session
- Multi-audio avatar (muapi supports single-stream only)

**Do NOT use LongCat-Video when:**
- No GPU available (13.6B params — CPU inference is not viable)
- Quick draft needed → use Higgsfield MCP (fastest, no setup)
- Lip sync for production content → use muapi-studio (API, no GPU needed, battle-tested)
- Single-audio lip sync for PT-BR → use muapi `wan2.2-speech-to-video` (Tier 0)
- Image editing task → use muapi `gpt4o-edit` (unrelated capability)

---

## Decision Tree

```
Need a video?
  ├── Video continuation (extend existing) → LongCat-Video (ONLY option)
  ├── Long video (> 15s) → LongCat-Video (ONLY option)
  ├── Short video (< 15s) + API available → Higgsfield MCP → muapi → infsh
  ├── Lip sync / avatar
  │     ├── API available → muapi-studio Tier 0
  │     └── Local GPU + privacy needed → LongCat-Video-Avatar Tier 1
  └── Interactive video generation → LongCat-Video run_demo_interactive_video.py
```

---

## Anti-Patterns

❌ **Using LongCat-Video for standard short clips when Higgsfield is available** — Higgsfield MCP is Tier 0 for general video. LongCat-Video is Tier 4 for T2V (GPU cost, setup overhead).

❌ **Using without checking GPU VRAM** — model will OOM silently on undersized GPUs. Check `nvidia-smi` before running.

❌ **Downloading weights without activating conda env first** — HuggingFace CLI must run inside the `longcat-video` conda env to use the correct Python/CUDA bindings.

❌ **Using LongCat-Video-Avatar as primary lip sync** — muapi-studio lip sync models are production-ready API calls. LongCat-Video-Avatar is a local fallback for privacy/budget constraints.

❌ **Running without `--enable_compile` on single GPU** — compilation adds startup time but significantly improves per-frame throughput.

❌ **Using torchrun multi-GPU without `--context_parallel_size`** — context parallelism flag must match `--nproc_per_node` to avoid tensor shape mismatches.

---

## Product Application

| Product | Role |
|---------|------|
| **RUNA SYSTEMS** | Teaching module — Dev Neural content on open-source video generation, local inference pipeline, video continuation as a post-production technique. Demonstrates the "build without API costs" principle for clients who want full control. |

---

## Technical Specs

| Spec | Value |
|------|-------|
| Parameters | 13.6B (dense) |
| Architecture | Unified (T2V + I2V + continuation) |
| Output resolution | 720p (primary), 480p (VRAM-constrained) |
| Frame rate | 30fps |
| Max duration | Minutes-long (long video mode) |
| Training | Multi-reward RLHF via GRPO |
| Efficient inference | Block Sparse Attention + coarse-to-fine |
| License | MIT |
| Repo | https://github.com/meituan-longcat/LongCat-Video |
