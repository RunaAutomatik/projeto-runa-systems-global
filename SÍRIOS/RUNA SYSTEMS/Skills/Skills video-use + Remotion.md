---
date: 2026-05-12
tags: [skills, video-use, remotion, maya, video, editing, footage, programmatic, ffmpeg, reels]
project: runa-systems-global
type: skill-doc
---

# Skills video-use + Remotion — Edição de Footage e Vídeo Programático

> Duas ferramentas distintas que cobrem camadas diferentes do pipeline de produção de vídeo.
> **video-use** edita footage bruta gravada — corte, filler removal, color grade, legendas.
> **Remotion** cria vídeo programaticamente via React — animações, overlays, vídeos data-driven.
> Elas não competem. Dentro do video-use, Remotion é um dos backends de animação para overlays.

---

## A Diferença Fundamental

```
Você tem footage gravada?          → video-use
Você precisa criar vídeo do zero?  → Remotion
```

| | video-use | Remotion |
|---|---|---|
| **Input** | Footage bruta (.mp4, .mov, etc.) | Código React + dados |
| **Output** | Footage editada e polida (final.mp4) | Vídeo gerado programaticamente |
| **Motor** | FFmpeg | Browser engine (CSS, SVG, WebGL, Canvas) |
| **Paradigma** | *Editar o que existe* | *Criar do zero via código* |
| **Caso típico** | Arthur grava uma aula, quer fillers removidos e legendas | Gerar vídeo de dados do GitHub Unwrapped |
| **Agente dono** | MAYA | @dev / MAYA |

---

## PARTE 1 — video-use

### Por que existe

O ecossistema tinha tudo para **gerar** vídeo (Higgsfield MCP, muapi, HeyGen) e **animar** avatar (lip sync via muapi), mas não tinha nada para **editar footage real gravada**. Quando Arthur grava uma aula, um talking head ou uma VSL, o pipeline parava. Sem video-use, edição manual no Premiere ou CapCut.

video-use resolve isso como uma **skill do Claude Code**: você navega até a pasta com os vídeos, abre o Claude, conversa em português, e recebe `final.mp4` editado.

**Cadeia de valor:**
```
Arthur grava raw footage
  → video-use (Claude Code skill)
      → ElevenLabs Scribe transcreve (word-level timestamps)
      → Corta fillers (umm, uh) + silêncios
      → Color grade (warm cinematic ou custom)
      → Subtítulos burned (word-boundary, uppercase)
      → Self-eval automático (3 passes)
  → final.mp4 em /edit/
  → MAYA distribui (Higgsfield/muapi se precisar de overlay AI)
  → HERMES publica via n8n + Meta Graph API
```

### Status

```
⚠️ Não instalado ainda — auditoria aprovada em 2026-05-12
✅ ELEVENLABS_API_KEY configurada no .env
✅ ffmpeg disponível — v8.0.1 full build (CUDA, NVENC, d3d12va)
✅ Python 3.14 disponível
⚠️ uv não instalado — usar pip install -e .
Repo: https://github.com/browser-use/video-use
```

**Instalação (quando pronto):**
```bash
git clone https://github.com/browser-use/video-use ~/Developer/video-use
ln -sfn ~/Developer/video-use ~/.claude/skills/video-use
cd ~/Developer/video-use
pip install -e .
# .env já tem ELEVENLABS_API_KEY — copiar para ~/Developer/video-use/.env
```

### Como usar (workflow padrão)

```bash
# 1. Navegar até a pasta com os vídeos
cd /path/to/footage

# 2. Abrir o Claude Code
claude

# 3. Conversar em português com o agente
# Exemplos de comandos:
"Edita esses vídeos em um vídeo final para o Instagram Reels"
"Remove os fillers e os silêncios longos"
"Adiciona legendas em uppercase no estilo dark"
"Aplica color grade escuro e cinematográfico"
```

**O agente vai:**
1. Transcrever com ElevenLabs Scribe (cache automático — não re-transcreve)
2. Propor estratégia em texto claro — **aguarda sua aprovação antes de cortar**
3. Executar cortes, grade, legendas via FFmpeg
4. Self-evaluar o output antes de mostrar (3 passes automáticos)
5. Salvar `final.mp4` em `/edit/`
6. Persistir notas da sessão em `project.md` para retomar depois

### Capacidades Detalhadas

| Capacidade | Como funciona | Quando usar |
|------------|--------------|------------|
| **Filler removal** | Detecta "umm", "uh", hesitações via transcrição word-level | Toda footage de talking head / aula gravada |
| **Silence removal** | Corta gaps de silêncio usando waveform analysis | Entrevistas, multi-take, footage longa |
| **Color grade** | Filter chains FFmpeg (ASC CDL: slope, offset, power, saturation) | Sempre que quiser consistência visual dark/cinematic |
| **Subtitle burn** | SRT sincronizado, word-boundary, 2 palavras uppercase | Reels para Instagram, conteúdo sem áudio |
| **Multi-take selection** | Sub-agente editor escolhe a melhor take por segmento | Gravações com múltiplas tentativas |
| **Animation overlays** | Backends: HyperFrames, Remotion, Manim, PIL | Vídeos de curso com gráficos, aulas técnicas |
| **Session memory** | `project.md` persiste estratégia e decisões entre sessões | Projetos longos com múltiplas sessões de edição |

### Regras de Produção (Hard Rules do video-use)

1. **Subtítulos sempre por último** no filter chain — antes dos overlays causa falha silenciosa
2. **Cortes word-boundary** — nunca corta no meio de uma palavra
3. **30ms padding** em cada corte — absorve drift de timestamp do Scribe
4. **Fades de áudio** (30ms) em cada segmento — elimina pops audíveis
5. **Estratégia confirmada antes de executar** — agente propõe, você aprova
6. **Cache de transcrição** — nunca re-transcreve a mesma fonte
7. **Output em `/edit/`** — nunca escreve dentro do diretório do projeto

### Custo

| Item | Custo |
|------|-------|
| ElevenLabs Scribe | ~$0.40/hora de áudio (~$0.06 para 10 min) |
| Claude tokens | Mínimo — lê transcrição texto, não frames |
| FFmpeg | Gratuito, local |

Comparado a Descript ($24/mês) ou edição manual: custo irrelevante, integrado ao Claude Code.

### Casos de Uso no Ecossistema

**CREATOR$ — Pipeline de Reels:**
```
Arthur grava talking head sobre "Como montei meu squad neural"
→ video-use remove fillers e silêncios
→ Color grade dark cinematic
→ Subtítulos burned (captação sem áudio no feed)
→ final.mp4 → HERMES publica @arthsystems_
```

**RUNA SYSTEMS — Gravações de Aula para Skool:**
```
Arthur grava aula do Módulo 3 (Claude Code no terminal)
→ video-use processa footage bruta
→ Multi-take: melhor explicação de cada conceito
→ Animação Manim para diagrama do pipeline (overlay automático)
→ Legendas (acessibilidade)
→ final.mp4 → upload Skool
```

**Lives de Construção (R$97):**
```
Live gravada, 2h de footage bruta
→ video-use seleciona highlights, remove mortes, corta para 45 min
→ Produto entregável para quem comprou gravação
```

### Mapeamento de Agentes

| Agente | Role com video-use |
|--------|-------------------|
| **MAYA** | Owner primário — executa o skill e retorna assets |
| **Arthur (direto)** | Pode rodar diretamente no terminal (`cd /videos && claude`) |
| **FREYJA** | Emite brief narrativo (tom, estilo, ritmo) → MAYA executa |
| **@dev** | Integração pipeline (content-worker lê outputs de /edit/) |

### Anti-Patterns

❌ **Instalar sem ter footage bruta** — se o workflow é 100% IA generativa (Higgsfield + muapi), não há input para video-use. Só instalar quando tiver casos de uso reais de footage gravada.

❌ **Usar para conteúdo gerado por IA** — video-use edita footage real. Para vídeo IA, use Higgsfield MCP (Seedance) ou muapi.

❌ **Pular a confirmação de estratégia** — o agente sempre propõe antes de cortar. Nunca clicar "prossiga" sem ler a estratégia.

❌ **Usar para lip sync ou avatar** — isso é muapi (`infinitetalk-image-to-video`). video-use edita footage, não anima avatar.

❌ **Rodar sem `ELEVENLABS_API_KEY` no .env** — a transcrição falha silenciosamente sem a key. Confirmar que o `.env` local da skill tem a variável.

---

## PARTE 2 — Remotion

### Por que existe

Remotion resolve um problema diferente: às vezes você precisa criar um vídeo a partir de **dados, componentes React, ou lógica programática** — não de footage gravada. Exemplos: animações de dashboard, vídeos personalizados por usuário, intros animadas, overlays com gráficos dinâmicos.

Dentro do video-use, Remotion atua como um **sub-agente de animação** — quando o brief pede um overlay técnico (diagrama, gráfico, texto animado), o video-use spawna Remotion para gerar o .mp4 do overlay, que depois é composto na footage via FFmpeg.

**Skill registrada:**
```
remotion-render — Programmatic React video render (infsh: via remotion-render skill)
```

### Status

```
✅ Skill disponível via infsh — remotion-render
✅ Node.js disponível (verificar versão: node --version)
⚠️ Node.js 22+ obrigatório para composições browser-native
Repo: https://github.com/remotion-dev/remotion
Docs: https://remotion.dev/docs
Licença: Remotion License (requer licença comercial para empresa)
```

### Como funciona tecnicamente

Remotion usa o browser engine para renderizar componentes React frame a frame. Cada frame é um snapshot do estado do componente em um determinado tempo. FFmpeg concatena os frames em vídeo final.

```
Componente React (JSX/TSX)
  → Studio (preview interativo)
  → renderMedia() — renderiza frame a frame via Chromium
  → FFmpeg concatena frames
  → final.mp4 / .webm / .gif
```

### Capacidades Principais

| Capacidade | Descrição | Caso de uso |
|------------|-----------|------------|
| **Vídeo programático** | React components → vídeo | Data-driven content, templated videos |
| **Animações** | CSS, Canvas, SVG, WebGL via código | Intros, overlays, motion graphics |
| **Vídeos parametrizados** | Props dinâmicas → variantes | Personalização em escala (ex: GitHub Unwrapped) |
| **Lambda / Cloud Run** | Render na nuvem em paralelo | Batches de vídeo, escala |
| **Player** | Reprodução in-browser | Embeds, dashboards |
| **Agent Skills** | Integração com Claude Code/Codex | Geração via prompt direto |

### APIs Principais

```typescript
// Render um vídeo a partir de uma composição
await renderMedia({
  composition,
  serveUrl,
  codec: 'h264',
  outputLocation: 'out/video.mp4',
  inputProps: { dados: [...] }
});

// Listar composições disponíveis
const composicoes = await getCompositions(serveUrl);

// Render de frame único (preview/thumbnail)
await renderStill({ composition, frame: 0, output: 'thumb.png' });
```

### Quando usar Remotion

**USE Remotion quando:**
- Precisa de um overlay animado com dados dinâmicos (gráficos, counters, timelines)
- Vai criar vídeos em batch com variações (ex: vídeo personalizado por mentorando)
- Quer criar uma intro/outro animada reutilizável para todos os Reels
- Precisa de um diagrama animado para explicar um conceito técnico em aula

**NÃO use Remotion quando:**
- Tem footage bruta para editar → **video-use**
- Precisa de vídeo cinematográfico com IA → **Higgsfield MCP** (Seedance)
- Precisa de lip sync com avatar → **muapi** (infinitetalk)
- Precisa de vídeo de avatar falando → **HeyGen REST API**
- É uma animação simples estática → PIL (mais rápido, sem Node.js)

### Casos de Uso no Ecossistema

**CREATOR$ — Overlay de estatísticas para Reels:**
```
Reel "Meu squad neural gerou X resultados"
→ video-use processa footage de Arthur falando
→ Remotion gera overlay animado com números/gráficos
→ video-use compõe overlay na footage via FFmpeg
→ final.mp4 com dados animados sobre o vídeo
```

**RUNA SYSTEMS — Vídeo de apresentação do módulo:**
```
Cada módulo do curso tem uma intro animada (30s)
→ Remotion gera intro com: nome do módulo, ícone animado, barra de progresso
→ Parametrizado: muda título + cor por módulo automaticamente
→ video-use compõe como head do vídeo de aula
```

**AGENT$ — Demonstração animada de pipeline:**
```
Explicar visualmente como o pipeline de agentes funciona
→ Remotion anima o fluxo: FREYJA → MAYA → HERMES com setas e timing
→ Diagrama em movimento mais claro que imagem estática
→ Exporta como .mp4 para embed no Skool
```

### Mapeamento de Agentes

| Agente | Role com Remotion |
|--------|------------------|
| **@dev (Dex)** | Primário — cria e mantém componentes React/Remotion |
| **MAYA** | Executa `remotion-render` como sub-agente de animação dentro do video-use |
| **@ux-design-expert (Uma)** | Design dos componentes visuais antes da implementação |
| **FREYJA** | Emite brief de overlay (narrativa, timing, dados) → @dev implementa |

### Anti-Patterns

❌ **Usar Remotion para editar footage** — Remotion cria do zero, não edita arquivos existentes. Para footage: video-use.

❌ **Usar para uma animação simples que PIL resolve** — PIL é mais rápido, sem dependência de Node.js. Reserve Remotion para composições complexas.

❌ **Ignorar a licença comercial** — Remotion requer licença paga para uso em empresa. Verificar antes de distribuir produtos com vídeos gerados por Remotion.

❌ **Rodar sem Node.js 22+** — composições browser-native falham. Verificar `node --version` antes de usar HyperFrames ou composições WebGL.

---

## Árvore de Decisão Completa — Qual usar?

```
Tenho footage gravada do Arthur/aula?
  ├── SIM → video-use
  │         (corte, fillers, grade, subs, multi-take)
  │
  └── NÃO — preciso criar vídeo:
        ├── Vídeo cinematográfico com IA (cena, personagem, estética dark)
        │     → Higgsfield MCP (Seedance 2.0) — MAYA
        │
        ├── Talking head / avatar falando (script → vídeo)
        │     → HeyGen REST API — MAYA
        │
        ├── Lip sync (foto + áudio → animação)
        │     → muapi infinitetalk ou ltx-2.3 — MAYA
        │
        ├── Overlay animado com dados / diagrama técnico
        │     → Remotion — @dev
        │
        ├── Animação simples (logo, texto, efeito)
        │     → PIL (nativo no video-use) — MAYA
        │
        └── Vídeo de produto / ad 1080p com avatar + refs
              → muapi Marketing VIP — MAYA
```

---

## Aplicação nos Produtos

| Produto | video-use | Remotion |
|---------|-----------|---------|
| **CREATOR$** | Pipeline primário de Reels gravados | Overlays de estatísticas e dados |
| **RUNA SYSTEMS** | Edição de aulas gravadas para Skool | Intros animadas por módulo |
| **$QUAD** | Demonstrações gravadas do squad em ação | Diagramas animados de arquitetura |
| **AGENT$** | Footage de agentes sendo configurados | Animação de pipeline de agentes |
| **Lives de construção** | Highlight de lives gravadas (R$97 produto) | — |

---

## Conexões no Ecossistema

```
Arthur grava footage
  → video-use (MAYA executa, Arthur supervisiona)
      → ElevenLabs Scribe (key: .env → ELEVENLABS_API_KEY)
      → FFmpeg v8.0.1 (instalado, full build CUDA)
      → [se overlay necessário] → Remotion sub-agente (@dev/MAYA)
  → final.mp4 em /edit/
  → HERMES publica via Meta Graph API / n8n
  → FREYJA *av-review se for conteúdo @arthsystems_
```

---

*Auditoria e aprovação: 2026-05-12*
*video-use: https://github.com/browser-use/video-use*
*Remotion: https://github.com/remotion-dev/remotion | https://remotion.dev/docs*
*ELEVENLABS_API_KEY: configurada em .env (2026-05-12)*
*Rule file: `.claude/rules/capability-map.md` → MAYA section*
