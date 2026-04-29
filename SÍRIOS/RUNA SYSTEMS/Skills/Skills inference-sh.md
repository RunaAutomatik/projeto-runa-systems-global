---
date: 2026-03-29
tags: [skills, inference-sh, ia, imagem, video, audio, llm]
project: runa-systems-global
---

# Skills inference-sh

> CLI: `infsh` | Token: `~/.infsh-token` | Status: ✅ ATIVO
> Estrutura base: `infsh app run <app-id> --input '{"param": "valor"}'`
> 150+ modelos disponíveis em https://app.inference.sh/explore

---

## GERAÇÃO DE IMAGEM

### FLUX Dev LoRA
- **Comando:** `infsh app run falai/flux-dev-lora --input '{"prompt": "..."}'`
- **Para que serve:** Geração de imagens de alta qualidade com estilos personalizáveis
- **Caso de uso RUNA:** Criar visuais para carousels do @arthsystems_, banners de oferta, covers de live

### P-Image (rápido + econômico)
- **Comando:** `infsh app run pruna/p-image --input '{"prompt": "...", "aspect_ratio": "9:16"}'`
- **Formatos:** `1:1` | `16:9` | `9:16` | `4:3` | `3:4`
- **Para que serve:** Geração rápida em múltiplos formatos para diferentes plataformas
- **Caso de uso RUNA:** Stories Instagram (9:16), thumbnails YouTube (16:9), posts quadrados (1:1)

### P-Image com Estilos LoRA
- **Comando:** `infsh app run pruna/p-image-lora --input '{"prompt": "...", "lora_preset": "neon-punk"}'`
- **Presets:** `photos-realism` | `cinematic-movie-style` | `neon-punk` | `anime-2-5d` | `pixel-art` | `retro-90s-style` | `ethereal-portrait` | `graffiti-splash` | `ink-sketchbook` | `paper-cut`
- **Para que serve:** Aplicar estéticas visuais consistentes sem prompt engineering complexo
- **Caso de uso RUNA:** Manter identidade visual do @arthsystems_ com estilo TERMINAL (neon-punk) ou ARCHITECT (cinematic)

### Seedream 4.5 (cinematográfico 2K–4K)
- **Comando:** `infsh app run bytedance/seedream-4-5 --input '{"prompt": "..."}'`
- **Para que serve:** Imagens de altíssima qualidade para materiais impressos ou de destaque
- **Caso de uso RUNA:** Capa de produto RUNA SYSTEMS, materiais de pitch para clientes high-ticket

### Gemini 3 Pro Image
- **Comando:** `infsh app run google/gemini-3-pro-image-preview --input '{"prompt": "..."}'`
- **Para que serve:** Modelo Google com forte compreensão de texto dentro da imagem
- **Caso de uso RUNA:** Criar mockups de interfaces, gráficos com textos legíveis, infográficos

### Reve (edição por texto)
- **Comando:** `infsh app run falai/reve --input '{"prompt": "ação de edição", "image_url": "https://..."}'`
- **Para que serve:** Editar qualquer imagem descrevendo em texto o que quer mudar
- **Caso de uso RUNA:** Ajustar cor de fundo de foto de produto, remover elementos, reposicionar objetos nos slides do carousel

### Topaz Image Upscaler
- **Comando:** `infsh app run falai/topaz-image-upscaler --input '{"image_url": "https://..."}'`
- **Para que serve:** Aumentar resolução de imagens mantendo qualidade profissional
- **Caso de uso RUNA:** Preparar imagens geradas por IA para uso em materiais impressos ou fullscreen

### Remover Fundo (BiRefNet)
- **Comando:** `infsh app run infsh/birefnet --input '{"image_url": "https://..."}'`
- **Para que serve:** Recortar imagens com fundo transparente precisamente
- **Caso de uso RUNA:** Preparar fotos de produto para composição em templates de post

---

## GERAÇÃO DE VÍDEO

### Veo 3.1 Fast (Google — com áudio)
- **Comando:** `infsh app run google/veo-3-1-fast --input '{"prompt": "..."}'`
- **Para que serve:** Vídeos de alta qualidade com áudio sincronizado, geração rápida
- **Caso de uso RUNA:** Reels para @arthsystems_, vídeos de demonstração de produto, conteúdo B-roll para edições

### Veo 3.1 (melhor qualidade)
- **Comando:** `infsh app run google/veo-3-1 --input '{"prompt": "..."}'`
- **Para que serve:** Vídeos cinematográficos premium com controle de frame
- **Caso de uso RUNA:** Vídeos de lançamento de produto RUNA SYSTEMS, conteúdo para lives de construção

### P-Video (rápido e econômico)
- **Comando:** `infsh app run pruna/p-video --input '{"prompt": "...", "audio": true}'`
- **Para que serve:** Prototipagem rápida de vídeos para aprovação de conceito
- **Caso de uso RUNA:** Testar conceitos de vídeo antes de produzir a versão final com Veo

### Seedance 1.5 Pro (controle de primeiro frame)
- **Comando:** `infsh app run bytedance/seedance-1-5-pro --input '{"prompt": "...", "first_frame_url": "https://..."}'`
- **Para que serve:** Animar uma imagem específica como ponto de partida do vídeo
- **Caso de uso RUNA:** Animar logo do RUNA SYSTEMS ou foto de produto a partir de uma imagem gerada

### Imagem → Vídeo (Wan 2.5)
- **Comando:** `infsh app run falai/wan-2-5-i2v --input '{"image_url": "https://...", "prompt": "animate slowly"}'`
- **Para que serve:** Transformar qualquer imagem estática em vídeo animado
- **Caso de uso RUNA:** Dar vida aos slides de carousel transformando-os em Reels animados

### Adicionar Som ao Vídeo (Foley)
- **Comando:** `infsh app run infsh/hunyuanvideo-foley --input '{"video_url": "https://...", "prompt": "ambient office sound"}'`
- **Para que serve:** Adicionar efeitos de som realistas a vídeos silenciosos
- **Caso de uso RUNA:** Adicionar ambiência a vídeos de demonstração do Claude Code, Anti-gravity

### Upscale de Vídeo (Topaz)
- **Comando:** `infsh app run falai/topaz-video-upscaler --input '{"video_url": "https://..."}'`
- **Para que serve:** Aumentar resolução de vídeos para qualidade HD/4K
- **Caso de uso RUNA:** Melhorar qualidade de gravações de tela para uso em cursos e materiais do RUNA SYSTEMS

---

## VOZ / TTS

### ElevenLabs TTS (premium — 22 vozes, 32 idiomas)
- **Comando:** `infsh app run elevenlabs/tts --input '{"text": "Texto aqui", "voice": "daniel"}'`
- **Vozes femininas:** `aria` (americana conversacional) | `alice` (britânica) | `bella` | `jessica` | `laura` | `lily` | `sarah`
- **Vozes masculinas:** `george` (britânico autoritário) | `adam` | `bill` | `brian` | `callum` | `charlie` | `daniel` (britânico commanding) | `eric` | `harry` | `liam` | `roger` | `will`
- **Para que serve:** Narração profissional para vídeos, podcasts, audiobooks
- **Caso de uso RUNA:** Narrar os módulos do curso RUNA SYSTEMS, criar voiceover para Reels e vídeos de lançamento

### ElevenLabs TTS — Modelo específico
- **Comando:** `infsh app run elevenlabs/tts --input '{"text": "...", "voice": "george", "model_id": "eleven_multilingual_v2"}'`
- **Modelos:** `eleven_multilingual_v2` (máxima qualidade, pt-BR) | `eleven_turbo_v2_5` (balanceado) | `eleven_flash_v2_5` (ultra-rápido)
- **Para que serve:** Escolher o modelo certo para cada cenário (qualidade vs. velocidade)
- **Caso de uso RUNA:** `eleven_multilingual_v2` para o curso, `eleven_flash_v2_5` para notificações automatizadas

### Kokoro TTS (alternativa econômica)
- **Comando:** `infsh app run infsh/kokoro-tts --input '{"prompt": "...", "voice": "af_sarah"}'`
- **Vozes:** `af_sarah` | `af_nicole` | `af_sky` | `am_michael` | `am_adam` | `bf_emma` | `bm_george`
- **Para que serve:** Geração de voz de qualidade para uso em automações com menor custo
- **Caso de uso RUNA:** Narração automática de updates do HERMES, respostas de automação via N8N

### Voice Changer (transformar voz)
- **Comando:** `infsh app run elevenlabs/voice-changer --input '{"audio_url": "https://...", "voice": "daniel"}'`
- **Para que serve:** Mudar a voz de um áudio existente para qualquer voz da biblioteca
- **Caso de uso RUNA:** Dublar conteúdo gravado com outra voz para variações A/B de ads

---

## AVATAR / TALKING HEAD (foto que fala)

### OmniHuman 1.5 — melhor qualidade
- **Comando:** `infsh app run bytedance/omnihuman-1-5 --input '{"image_url": "https://retrato.jpg", "audio_url": "https://voz.mp3"}'`
- **Para que serve:** Animar qualquer foto para falar sincronizando com áudio (alternativa ao HeyGen/Synthesia)
- **Caso de uso RUNA:** Criar avatars de apresentação dos 8 agentes neurais do RUNA SYSTEMS, vídeos de vendas com porta-voz virtual

### Fabric 1.0 (imagem fala com lipsync)
- **Comando:** `infsh app run falai/fabric-1-0 --input '{"image_url": "https://...", "audio_url": "https://..."}'`
- **Para que serve:** Lipsync realista para qualquer imagem, incluindo personagens ou logos
- **Caso de uso RUNA:** Animar mascote/personagem da marca para vídeos de conteúdo

### PixVerse Lipsync (realismo máximo)
- **Comando:** `infsh app run falai/pixverse-lipsync --input '{"image_url": "https://...", "audio_url": "https://..."}'`
- **Para que serve:** Máxima qualidade de lipsync para uso em vídeos de alta visibilidade
- **Caso de uso RUNA:** Vídeos de vendas com avatar de alta fidelidade para páginas de oferta RUNA

---

## MÚSICA

### ElevenLabs Music (até 10 min, licença comercial)
- **Comando:** `infsh app run elevenlabs/music --input '{"prompt": "lo-fi chill beats", "duration_seconds": 120}'`
- **Duração:** 5 a 600 segundos (10 minutos)
- **Para que serve:** Música de fundo 100% original sem royalties para qualquer conteúdo
- **Caso de uso RUNA:** Trilha das lives de construção, música de fundo de vídeos do @arthsystems_, jingles de abertura de aulas do RUNA SYSTEMS

### Diffrythm (geração rápida)
- **Comando:** `infsh app run infsh/diffrythm --input '{"prompt": "cinematic orchestral dramatic build"}'`
- **Para que serve:** Instrumentais rápidos para uso imediato em vídeos e conteúdo
- **Caso de uso RUNA:** Trilha de abertura de vídeos de lançamento, música de transição entre módulos do curso

### Tencent Song Generation (música + vocal)
- **Comando:** `infsh app run infsh/tencent-song-generation --input '{"prompt": "pop energético sobre transformação e crescimento"}'`
- **Para que serve:** Músicas completas com vocal para campanhas e conteúdo de marca
- **Caso de uso RUNA:** Jingle do RUNA SYSTEMS para reels virais, música tema de lançamento

---

## ÁUDIO / TRANSCRIÇÃO

### ElevenLabs Scribe (98%+ precisão)
- **Comando:** `infsh app run elevenlabs/stt --input '{"audio_url": "https://audio.mp3"}'`
- **Para que serve:** Transcrição precisa de qualquer áudio em 90+ idiomas com identificação de speakers
- **Caso de uso RUNA:** Transcrever calls de vendas para análise, gerar legendas automáticas, extrair highlights de lives

### Fast Whisper (com timestamps)
- **Comando:** `infsh app run infsh/fast-whisper-large-v3 --input '{"audio_url": "https://...", "timestamps": true}'`
- **Para que serve:** Transcrição rápida com marcação de tempo para edição de vídeo
- **Caso de uso RUNA:** Transcrever podcasts e lives para criar posts, threads e materiais escritos do CREATOR$

### Tradução automática de áudio
- **Comando:** `infsh app run infsh/whisper-v3-large --input '{"audio_url": "https://...", "task": "translate"}'`
- **Para que serve:** Traduzir qualquer áudio automaticamente para inglês
- **Caso de uso RUNA:** Adaptar conteúdo do @arthsystems_ para audiência internacional

### Efeitos de Som (ElevenLabs)
- **Comando:** `infsh app run elevenlabs/sound-effects --input '{"text": "thunder and heavy rain", "duration_seconds": 5}'`
- **Para que serve:** Criar efeitos sonoros personalizados para qualquer cena ou contexto
- **Caso de uso RUNA:** Efeitos para vídeos de demonstração do Claude Code, sons de UI para o Command Center

---

## LLMs (100+ modelos via OpenRouter)

### Claude Opus 4.5 (mais poderoso)
- **Comando:** `infsh app run openrouter/claude-opus-45 --input '{"prompt": "..."}'`
- **Para que serve:** Tarefas de raciocínio complexo, geração de código avançado, análise profunda
- **Caso de uso RUNA:** Geração de propostas comerciais completas, análise estratégica de clientes, development do AGENT$

### Claude Sonnet 4.5 (balanceado)
- **Comando:** `infsh app run openrouter/claude-sonnet-45 --input '{"prompt": "..."}'`
- **Para que serve:** Uso geral — excelente custo-benefício para a maioria das tarefas
- **Caso de uso RUNA:** Copy de posts, emails de vendas, scripts de conteúdo para o @arthsystems_

### Claude Haiku 4.5 (rápido e barato)
- **Comando:** `infsh app run openrouter/claude-haiku-45 --input '{"prompt": "..."}'`
- **Para que serve:** Tarefas simples em alta velocidade e baixo custo para automações
- **Caso de uso RUNA:** Classificar DMs recebidas, responder perguntas frequentes via N8N, processar dados em batch

### Gemini 3 Pro (Google)
- **Comando:** `infsh app run openrouter/gemini-3-pro-preview --input '{"prompt": "..."}'`
- **Para que serve:** Processamento multimodal, análise de imagens + texto
- **Caso de uso RUNA:** Analisar screenshots de resultados de clientes, processar PDFs de contratos

### Kimi K2 Thinking (raciocínio em cadeia)
- **Comando:** `infsh app run openrouter/kimi-k2-thinking --input '{"prompt": "..."}'`
- **Para que serve:** Planejamento passo a passo, decomposição de problemas complexos
- **Caso de uso RUNA:** Montar roadmap de implementação do RUNA SYSTEMS para clientes, estruturar plano de conteúdo 30 dias

---

## TWITTER / X AUTOMAÇÃO

### Postar tweet
- **Comando:** `infsh app run x/post-tweet --input '{"text": "Texto do tweet"}'`
- **Caso de uso RUNA:** Publicar conteúdo do @arthsystems_ automaticamente via HERMES

### Postar com imagem
- **Comando:** `infsh app run x/post-create --input '{"text": "Caption", "media_url": "https://imagem.jpg"}'`
- **Caso de uso RUNA:** Publicar carousel exportado como imagem no Twitter/X

### Curtir tweet
- **Comando:** `infsh app run x/post-like --input '{"tweet_id": "1234567890"}'`
- **Caso de uso RUNA:** Engajamento automático em tweets de prospects e parceiros

### Retweet
- **Comando:** `infsh app run x/post-retweet --input '{"tweet_id": "1234567890"}'`
- **Caso de uso RUNA:** Amplificar conteúdo estratégico do ecossistema Runa

### Enviar DM
- **Comando:** `infsh app run x/dm-send --input '{"user_id": "...", "text": "Mensagem"}'`
- **Caso de uso RUNA:** Replicar a estratégia de DM do Instagram no Twitter para prospects

### Seguir usuário
- **Comando:** `infsh app run x/user-follow --input '{"username": "nomeusuario"}'`
- **Caso de uso RUNA:** Seguir automaticamente usuários que interagem com o conteúdo

---

## WORKFLOWS COMPLETOS

### Criar conteúdo visual completo
```bash
# 1. Gerar imagem de alta qualidade
infsh app run pruna/p-image --input '{"prompt": "logo RUNA SYSTEMS fundo escuro neon azul", "aspect_ratio": "1:1"}'
# (copiar URL do output)

# 2. Fazer upscale profissional
infsh app run falai/topaz-image-upscaler --input '{"image_url": "URL_DO_STEP_1"}'
```

### Criar vídeo com apresentador virtual (alternativa ao HeyGen)
```bash
# 1. Escrever e gerar narração
infsh app run elevenlabs/tts --input '{"text": "Olá! Sou Arthur e hoje vou mostrar como o RUNA SYSTEMS funciona.", "voice": "daniel", "model_id": "eleven_multilingual_v2"}'
# (copiar URL do áudio)

# 2. Animar foto com a narração
infsh app run bytedance/omnihuman-1-5 --input '{"image_url": "https://foto-arthur.jpg", "audio_url": "URL_DO_STEP_1"}'
```

### Transcrever e repurposar conteúdo
```bash
# 1. Transcrever live ou podcast
infsh app run elevenlabs/stt --input '{"audio_url": "https://live-gravada.mp3"}'
# (texto gerado → usar para criar posts, threads, carousels)
```

### Criar trilha sonora personalizada para vídeo
```bash
infsh app run elevenlabs/music --input '{"prompt": "corporate inspirational background, clean piano with subtle strings", "duration_seconds": 60}'
```
