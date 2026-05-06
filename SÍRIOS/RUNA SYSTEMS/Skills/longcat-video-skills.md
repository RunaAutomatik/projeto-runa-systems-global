---
date: 2026-05-06
tags: [skills, longcat-video, video-generation, video-continuation, long-video, avatar, local-inference, maya, t3]
project: runa-systems-global
type: skill-documentation
tier: T3
status: documented
---

# LongCat-Video — Skill Documentation

> Modelo local de geração de vídeo com 13.6B parâmetros da Meituan.
> Capacidades únicas no stack: **video continuation** e **long video (minutos)**.
> Inferência 100% local — zero custo de API, privacidade total.

---

## Overview

LongCat-Video é um modelo fundacional de geração de vídeo de código aberto (MIT) desenvolvido pelo Meituan LongCat Team. Com 13.6B parâmetros em arquitetura unificada, suporta:

- **Text-to-Video** — 720p, 30fps
- **Image-to-Video** — animação a partir de imagem estática
- **Video Continuation** — extensão de vídeos existentes sem color drift *(único no stack)*
- **Long Video** — vídeos de minutos, não segundos *(único no stack)*
- **Avatar (Audio-Driven)** — animação de personagem com áudio single ou multi-stream

**Posição no stack:** Tier 0 exclusivo para video continuation e long video. Tier 4 (fallback local) para T2V/I2V quando APIs estão indisponíveis ou há requisito de privacidade.

**Agente primário:** MAYA

---

## Capacidades / Workflows

### 1. Video Continuation (Tier 0 — sem equivalente)

Estender um clipe de vídeo existente mantendo coerência visual e sem color drift.

```bash
conda activate longcat-video
torchrun run_demo_video_continuation.py \
  --checkpoint_dir=./weights/LongCat-Video \
  --enable_compile
```

**Quando usar:** Sempre que a tarefa for "estender" ou "continuar" um vídeo existente. Não existe equivalente em Higgsfield, muapi ou infsh.

---

### 2. Long Video — Minutos (Tier 0 — sem equivalente)

Geração de vídeos longos (minutos) sem degradação de qualidade.

```bash
conda activate longcat-video
torchrun run_demo_long_video.py \
  --checkpoint_dir=./weights/LongCat-Video \
  --enable_compile
```

**Mecanismo:** Block Sparse Attention + estratégia coarse-to-fine. Treinado nativamente em tarefas de continuation — não é pós-processamento.

---

### 3. Text-to-Video (Tier 4 — fallback local)

```bash
# Single GPU
torchrun run_demo_text_to_video.py \
  --checkpoint_dir=./weights/LongCat-Video --enable_compile

# Dual GPU (mais rápido)
torchrun --nproc_per_node=2 run_demo_text_to_video.py \
  --context_parallel_size=2 --checkpoint_dir=./weights/LongCat-Video
```

**Quando usar:** Apenas quando Higgsfield MCP, muapi e infsh estão indisponíveis, ou quando há requisito de privacidade (dados não podem sair do dispositivo).

---

### 4. Image-to-Video (Tier 3 — fallback local)

```bash
torchrun --nproc_per_node=2 run_demo_image_to_video.py \
  --context_parallel_size=2 \
  --checkpoint_dir=./weights/LongCat-Video
```

---

### 5. Avatar — Audio-Driven (Single-Audio)

```bash
torchrun --nproc_per_node=2 run_demo_avatar_single_audio_to_video.py \
  --context_parallel_size=2 \
  --checkpoint_dir=./weights/LongCat-Video-Avatar \
  --stage_1=at2v
```

**Parâmetros-chave:**
- `audio_cfg` 3–5 → qualidade de lip sync ideal
- Reference frame index 0–24 → máxima consistência
- Mask frame range padrão 3 → valores maiores introduzem artefatos

---

### 6. Avatar — Audio-Driven (Multi-Audio)

Múltiplos speakers em paralelo ou concatenação.

```bash
torchrun --nproc_per_node=2 run_demo_avatar_multi_audio_to_video.py \
  --context_parallel_size=2 \
  --checkpoint_dir=./weights/LongCat-Video-Avatar
```

**Diferencial:** muapi-studio suporta apenas single-stream de áudio. LongCat-Video-Avatar suporta multi-speaker nativamente.

---

## Cadeia de Prioridade — Video Generation

```
Video Continuation → LongCat-Video (Tier 0 — ÚNICO no stack)
Long Video         → LongCat-Video (Tier 0 — ÚNICO no stack)

T2V / I2V geral:
  Tier 0 → Higgsfield MCP (seedance_2_0)
  Tier 1 → Higgsfield CLI / Skills
  Tier 2 → muapi-studio (Veo 3.1, Sora 2, Wan 2.6, Kling 3.0 Pro)
  Tier 3 → infsh (higgsfield/seedance-2, bytedance/seedance-1)
  Tier 4 → LongCat-Video (local, GPU-dependent)

Avatar / Lip Sync:
  Tier 0 → muapi-studio (infinitetalk-image-to-video, wan2.2-speech-to-video)
  Tier 1 → LongCat-Video-Avatar (local, multi-audio support)
```

---

## Decision Tree

```
Preciso de um vídeo?
  ├── Continuar/estender vídeo existente → LongCat-Video continuation (único)
  ├── Vídeo longo (> 15s, minutos) → LongCat-Video long video (único)
  ├── Vídeo curto (< 15s) + API disponível → Higgsfield MCP → muapi → infsh
  ├── Lip sync / avatar
  │     ├── API disponível → muapi-studio Tier 0
  │     └── GPU local + privacidade → LongCat-Video-Avatar Tier 1
  └── Vídeo interativo → LongCat-Video run_demo_interactive_video.py
```

---

## Setup — Instalação

### Pré-requisitos de hardware

| Config | VRAM mínima | Resolução | Uso |
|--------|-------------|-----------|-----|
| Single GPU | ~24GB | 720p | T2V, I2V, continuation |
| Dual GPU | 2×16GB+ | 720p | Inferência paralela com context parallelism |
| Single GPU | ~12-16GB | 480p | Fallback para GPUs menores |

### Passos de instalação

```bash
# 1. Clonar repositório
git clone https://github.com/meituan-longcat/LongCat-Video.git
cd LongCat-Video

# 2. Criar ambiente conda
conda create -n longcat-video python=3.10
conda activate longcat-video

# 3. PyTorch com CUDA 12.4
pip install torch==2.6.0+cu124 torchvision==0.21.0+cu124 torchaudio==2.6.0

# 4. FlashAttention-2
pip install flash_attn==2.7.4.post1

# 5. Dependências
pip install -r requirements.txt
conda install -c conda-forge librosa ffmpeg
pip install -r requirements_avatar.txt  # apenas para avatar

# 6. Baixar pesos (foundation)
huggingface-cli download meituan-longcat/LongCat-Video --local-dir ./weights/LongCat-Video

# 7. Baixar pesos avatar (opcional)
huggingface-cli download meituan-longcat/LongCat-Video-Avatar --local-dir ./weights/LongCat-Video-Avatar
```

---

## Anti-Patterns de Uso Incorreto

❌ **Usar para clipes curtos quando Higgsfield está disponível** — Higgsfield MCP é Tier 0. LongCat-Video é Tier 4 para T2V geral, com overhead de setup e GPU.

❌ **Rodar sem verificar GPU VRAM** — o modelo faz OOM silencioso em GPUs subdimensionadas. Verifique `nvidia-smi` antes.

❌ **Usar LongCat-Video-Avatar como Tier 0 de lip sync** — muapi-studio é produção-ready, sem requisito de GPU. Avatar local é fallback de privacidade/budget.

❌ **Executar sem `--enable_compile` em single GPU** — sem compilação, a inferência por frame é significativamente mais lenta.

❌ **Usar torchrun multi-GPU sem `--context_parallel_size`** — o flag deve ser igual a `--nproc_per_node` para evitar incompatibilidade de tensores.

❌ **Baixar pesos sem ativar o conda env** — HuggingFace CLI precisa do ambiente correto para bindings CUDA.

---

## Especificações Técnicas

| Especificação | Valor |
|---------------|-------|
| Parâmetros | 13.6B (denso) |
| Arquitetura | Unificada (T2V + I2V + continuation em um único modelo) |
| Resolução | 720p (primária), 480p (GPU limitada) |
| Frame rate | 30fps |
| Duração máxima | Minutos (long video mode) |
| Treinamento | Multi-reward RLHF via GRPO |
| Inferência eficiente | Block Sparse Attention + coarse-to-fine |
| Licença | MIT |

---

## Aplicação em RUNA SYSTEMS

| Produto | Papel |
|---------|-------|
| **RUNA SYSTEMS** | Módulo Dev Neural — ensino de inferência local, pipeline de video continuation, demonstração de geração de vídeo longo sem custo de API. Capacita clientes a operar modelos open-source de ponta sem dependência de terceiros. |

---

## Skills Relacionadas e Regras

| Documento | Relação |
|-----------|---------|
| [[higgsfield-mcp-usage]] | Tier 0 para T2V/I2V — usar antes de LongCat-Video |
| [[muapi-direct-usage]] | Tier 0 para Lip Sync e edição de imagem |
| [[inference-sh-usage]] | Tier 3 alternativo para T2V via infsh |
| [[capability-map]] | Posição completa na hierarquia de geração de vídeo |

---

## Status de Onboarding

| Item | Status |
|------|--------|
| Documentação T3 | ✅ Completo — 2026-05-06 |
| Rule file | ✅ `.claude/rules/longcat-video-usage.md` |
| Capability map | ✅ Atualizado |
| CLAUDE.md | ✅ Atualizado |
| Memory | ✅ `project_tooling.md` |
| Instalação local | ⚠️ Pendente — requer GPU com CUDA 12.4 e ~24GB VRAM |
| Pesos baixados | ⚠️ Pendente — 13.6B params via HuggingFace |
| Agente owner | MAYA (primário), @dev (setup env) |
