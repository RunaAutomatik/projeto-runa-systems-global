# Capability Map — Tool & Skill Assignment

## Reference

Full map: `SÍRIOS/📐 Projetos/capability-map.md`

Before executing ANY task, check the capability map to identify the correct tool, skill, or MCP.
Never guess or reinvent — if the capability exists, use it.

## Quick Lookup by Agent

| Agent | Primary Skills | Primary MCPs |
|-------|---------------|-------------|
| FREYJA | ads-dna, seo-content, obsidian-markdown, **content-repurposing**, **linkedin-content**, **technical-blog-writing** | Supabase |
| MAYA | **higgsfield-generate**, **higgsfield-soul-id**, **higgsfield-product-photoshoot** (Skills), **gpt-image-2** (Higgsfield CLI — KIE.AI broken), **nano-banana-2**, **seedance-2** (Higgsfield CLI/MCP), **elevenlabs-tts**, **elevenlabs-dialogue**, **ai-voice-cloning**, **elevenlabs-music**, **background-removal**, **image-upscaling**, HeyGen REST API, **muapi-lipsync**, **muapi-video-extended**, **muapi-image-edit**, **muapi-marketing-vip**, **video-use** (raw footage editing) | Higgsfield MCP (soul/media mgmt), Higgsfield CLI (generation Tier 1) |
| HERMES | ai-automation-workflows, twitter-automation, **ai-content-pipeline**, **ai-social-media-content** | n8n-mcp, Gmail, Google Calendar |
| ARES | ads-*, ads-plan, ads-competitor, ads-meta, ads-google, spec-writing, **competitor-teardown**, **customer-persona**, **pitch-deck-visuals**, **product-hunt-launch**, **gstack/office-hours**, **runa-os-audit**, **lp-copy**, **sales-sequence**, **client-copy** | — |
| HELIOS | seo-* (all 13 sub-skills), seo-content-brief, **web-search** | — |
| ALEX | defuddle, seo-competitor-pages, **ai-rag-pipeline**, **web-search**, **speech-to-text** | notebooklm-mcp |
| ORION | obsidian-cli, obsidian-markdown, json-canvas, obsidian-bases, agent-workflows, **prompt-engineering**, **knowledge-extraction**, **llm-wiki-setup**, **wiki-self-heal**, **runa-intake** | Gmail, Google Calendar, Netlify, notebooklm-mcp |
| @dev | ui-ux-pro-max, frontend-design, agent-sdk-dev, video-to-website, **stitch-loop**, **impeccable-live**, **building-inferencesh-apps**, **javascript-sdk**, **python-sdk**, **agent-browser**, **agent-ui**, **chat-ui**, **tools-ui**, **widgets-ui**, **remotion-render**, **gstack/autoplan**, **gstack/browse** | Figma, Supabase |
| @qa | code-review, testing-strategy, pr-review-toolkit, **gstack/review**, **gstack/cso**, **gstack/qa** | — |
| @devops | devops-automation, commit-commands, hookify, **stop-notification**, **post-tool-format** | Netlify |
| @architect | architecture-design, agent-workflows | — |
| @ux-design-expert | **stitch-design**, **taste-design**, **impeccable**, ui-ux-pro-max, frontend-design | StitchMCP (⚠️ requires setup) |
| @data-engineer | (code tools) | Supabase |

## Tool Selection Priority (always follow this order)

1. **Native Claude Code tools** (Read, Write, Edit, Bash, Grep, Glob) — fastest, local
2. **Project skills** (`.claude/skills/`) — workflow-specific
3. **Global skills** (`~/.claude/skills/`) — ads, seo, obsidian, ui-ux
   - **2.5: muapi-studio skill** — for lip sync, extended video, GPT-4o edit, MJ v7 (no infsh equivalent)
4. **MCPs** — only for external services (n8n, Supabase, Figma, etc.)
5. **Plugins** — for structured workflows (code-review, commit-commands, etc.)

## inference.sh Skills (via `infsh` CLI — ACTIVE ✓)

Token: stored at `~/.infsh-token` | CLI: `infsh` (global, no args needed)
Full usage rules: `.claude/rules/inference-sh-usage.md`

### MAYA — Image Generation
| Category | Skill | App IDs / Provider |
|----------|-------|---------|
| **Image (premium)** | gpt-image-2 | KIE.AI external — `kie-client.py --model gpt-image-2` |
| **Image (standard)** | nano-banana-2 | `google/gemini-3-flash-image` (infsh) — DEFAULT |
| **Image (fast draft)** | p-image, nano-banana | `pruna/p-image`, `google/gemini-3-pro-image-preview` (infsh) |
| **Image (legacy)** | flux-image | `falai/flux-dev`, `falai/flux-dev-lora` (infsh) — demoted |
| **Image (alt)** | qwen-image-2 | `qwen/qwen-vl-max` (infsh) |
| **Image (existing)** | ai-image-generation | `bytedance/seedream-4-5` (infsh) |
| **Image process** | background-removal, image-upscaling | `falai/birefnet`, `falai/topaz-image-upscaler` |

### MAYA — Video Production
| Category | Skill | App IDs / Provider |
|----------|-------|---------|
| **Video (primary)** | Higgsfield MCP | `mcp__claude_ai_MCP_Higgsfield__generate_video` — see higgsfield-mcp-usage.md |
| **Video (fallback 1)** | seedance-2 | `higgsfield/seedance-2` (infsh) |
| **Video (fallback 2)** | seedance-2 | KIE.AI external — `kie-client.py --model seedance-2` |
| **Video (final fallback)** | seedance-1 | `bytedance/seedance-1` (infsh) |
| **Video (fast draft)** | p-video | `pruna/p-video` (infsh) |
| **Video (avatar)** | HeyGen REST API | `POST api.heygen.com/v2/video/generate` — for Reels Mode A |
| **Image→Video** | image-to-video | `falai/image-to-video` |
| **Marketing video** | ai-marketing-videos | via infsh |

### MAYA — Audio / Voice
| Category | Skill | App IDs |
|----------|-------|---------|
| **TTS** | elevenlabs-tts, elevenlabs-dialogue | `elevenlabs/text-to-speech`, `elevenlabs/dialogue` |
| **Voice processing** | elevenlabs-dubbing, elevenlabs-voice-changer, elevenlabs-voice-isolator | `elevenlabs/*` |
| **STT** | elevenlabs-stt, speech-to-text | `elevenlabs/scribe` |
| **Music** | elevenlabs-music, ai-music-generation | `elevenlabs/music` |
| **Sound FX** | elevenlabs-sound-effects, dialogue-audio | `elevenlabs/sound-effects` |
| **Voice cloning** | ai-voice-cloning | `elevenlabs/voice-design` |

### Other Agents — inference.sh Skills
| Agent | Skills |
|-------|--------|
| FREYJA | content-repurposing, linkedin-content, technical-blog-writing, newsletter-curation, press-release-writing |
| ARES | competitor-teardown, customer-persona, pitch-deck-visuals, product-hunt-launch, product-changelog |
| ALEX | ai-rag-pipeline, web-search, speech-to-text |
| HERMES | ai-automation-workflows, ai-content-pipeline, ai-social-media-content |
| @dev | building-inferencesh-apps, javascript-sdk, python-sdk, python-executor, agent-browser, agent-tools, agent-ui, chat-ui, tools-ui, widgets-ui, remotion-render |
| @architect | prompt-engineering, video-prompting-guide |

### Worker-only (no agent required)
| Skill | Use Case |
|-------|---------|
| background-removal | Auto post-generation pipeline |
| image-upscaling | Auto quality enhancement |
| speech-to-text | Auto transcription |
| remotion-render | Programmatic React video render |

**Usage pattern:**
```bash
infsh app run <app-id> --input '{"prompt":"..."}'
```

## External Providers — KIE.AI

**Purpose:** Models NOT available on infsh. Accessed via REST API using `kie-client.py`.
**Key:** `KIE_API_KEY=0d47e2b479b31cd2f06d62c499bfa8e6` (set in `.env`)
**Client:** `C:/Users/user/.claude/skills/create-post/scripts/kie-client.py`
**API base:** `https://api.kie.ai`

| Model | Type | CLI call | When to use |
|-------|------|---------|-------------|
| GPT Image 2 | Image | `python kie-client.py --model gpt-image-2 --prompt "..." --size 1080x1350 --output path.png` | Premium final image assets |
| Seedance 2.0 | Video | `python kie-client.py --model seedance-2 --prompt "..." --duration 6 --output path.mp4` | Fallback when `higgsfield/seedance-2` (infsh) is unavailable |

**Agent owner:** MAYA
**Usage rule:** MCP → infsh → KIE.AI chain for video. KIE.AI is the ONLY route for GPT Image 2.

---

## MCP Higgsfield (claude.ai native connector — ACTIVE ✓)

**Owner:** MAYA | **Rule file:** `.claude/rules/higgsfield-mcp-usage.md`
**Status:** Connected — `claude.ai MCP Higgsfield` in `~/.claude.json`
**Tool prefix:** `mcp__claude_ai_MCP_Higgsfield__*` (deferred — load via ToolSearch)

| Tool | Purpose |
|------|---------|
| `generate_video` | **PRIMARY** video generation — Tier 0 in all video tasks |
| `generate_image` | Higgsfield-native image generation (cinematic aesthetic) |
| `job_status` | Poll async job — REQUIRED after generate_video/image |
| `job_display` | Retrieve completed asset URL |
| `media_upload` / `media_confirm` | Upload reference media for image-to-video |
| `models_explore` | Check available Higgsfield models |
| `show_generations` / `show_medias` | Browse history and media library |
| `balance` / `transactions` | Account management |

**⚠️ ASYNC:** `generate_video` is non-blocking. Always poll `job_status` before `job_display`.

---

## muapi-direct Skills (api.muapi.ai direct — ACTIVE ✓)

**Owner:** MAYA | **Rule file:** `.claude/rules/muapi-direct-usage.md`
**Script:** `~/.claude/skills/muapi-studio/scripts/muapi-client.py`
**Auth:** `~/.infsh-token` (`x-api-key` header — same key as infsh)

| Workflow | Key Models | When to Use |
|----------|-----------|-------------|
| **Lip Sync** | `infinitetalk-image-to-video`, `ltx-2.3-lipsync`, `wan2.2-speech-to-video` | Face animation with audio — **no equivalent exists in stack** |
| **Extended Video** | `veo3.1-text-to-video`, `openai-sora-2-text-to-video`, `wan2.6-text-to-video`, `kling-v3.0-pro-text-to-video` | Models absent from Higgsfield CLI |
| **Image Edit** | `gpt4o-edit`, `midjourney-v7-omni-reference`, `flux-kontext-max-i2i` | High-fidelity text-guided image editing |
| **Marketing VIP** | `sd-2-vip-omni-reference-1080p`, `seedance-2-vip-omni-reference` | VIP product ads 1080p with avatar + references |

**Tier position:** Tier 2 in general hierarchy. **Tier 0** exclusively for: Lip Sync (no alternative), GPT-4o edit, MJ v7.

---

## Google Stitch Skills (UI Design Generation)

**Owner:** `@ux-design-expert` (Uma) — primary | `@dev` (Dex) — stitch-loop only
**Rule file:** `.claude/rules/stitch-usage.md`
**Prerequisite:** StitchMCP must be configured in `~/.claude.json` (⚠️ pending setup)

| Skill | When to invoke | Output |
|-------|---------------|--------|
| `taste-design` | First step on any new project before generating screens | `.stitch/DESIGN.md` — anti-generic design system |
| `stitch-design` | Generate or edit a specific page/screen | `.stitch/designs/{page}.html` + screenshot |
| `stitch-loop` | Build full multi-page site autonomously | All pages via baton system |

**Decision:** "Design it" → Stitch (Uma). "Code it" → ui-ux-pro-max + @dev.

**Products:** SITE$ (primary), $QUAD, CREATOR$, RUNA SYSTEMS (teaching clients).

## Impeccable — Design Quality Skill (ACTIVE ✓)

**Owner:** `@ux-design-expert` (Uma) primary | `@devops` for CLI/pre-commit
**Rule file:** `.claude/rules/impeccable-usage.md`
**Install:** `~/.agents/skills/impeccable/` (symlink: `~/.claude/skills/impeccable`)
**DESIGN.md:** Stitch-format compatible — reads taste-design output directly

| Use Case | Command/Tool | Agent |
|----------|-------------|-------|
| Detect anti-patterns in source | `npx impeccable detect src/ --json` | @devops (pre-commit) |
| Full design audit after Stitch | `/impeccable audit` | @ux-design-expert |
| Targeted refinement | `/impeccable polish`, `/typeset`, `/colorize`, `/layout` | @ux-design-expert |
| Browser-based iteration | `/impeccable live` | @dev |
| Pin decisions to DESIGN.md | `/impeccable pin` | @ux-design-expert |

**Pipeline slot:** `taste-design → stitch-design → impeccable audit → @dev integrates`
Apache 2.0 — bundleable for RUNA SYSTEMS client delivery.

## Claude Code Hooks

Project hooks registered in `.claude/settings.local.json`:

| Hook | Event | File | What it does |
|------|-------|------|-------------|
| code-intel-pretool | PreToolUse (Write\|Edit) | `code-intel-pretool.cjs` | Code intelligence enrichment before file edits |
| synapse-engine | UserPromptSubmit | `synapse-engine.cjs` | Prompt enrichment on every user message |
| stop-notification | Stop | `stop-notification.cjs` | Windows balloon tip when Claude finishes responding |

## gstack Skills (via `~/.claude/skills/gstack/` — ACTIVE ✓)

Instalado em 2026-04-10. 23 skills de engineering virtual por Garry Tan (YC).
Full doc: `SÍRIOS/🛠️ Skills/Skills gstack.md`

| Skill | Comando | Agent Owner | Quando usar |
|-------|---------|-------------|-------------|
| office-hours | `/office-hours` | ARES / @pm | Validar produto antes de codar — método YC |
| autoplan | `/autoplan` | @dev / @architect | Pipeline CEO→Design→Eng→DX automático |
| review | `/review` | @qa | Code review pré-PR com Claude + Codex paralelo |
| qa | `/qa` | @qa | QA com Chromium real (Playwright) |
| browse | `/browse` | HERMES / @dev | Browser daemon sub-100ms com estado persistente |
| cso | `/cso` | @qa | Security audit OWASP Top 10 + STRIDE |
| pair-agent | `/pair-agent` | @dev | Compartilhar browser entre múltiplos agentes |
| investigate | `/investigate` | @qa / @dev | Debug profundo de bugs |
| design-shotgun | `/design-shotgun` | @ux-design-expert | Múltiplas variações de design em paralelo |
| careful | `/careful` | qualquer | Tasks de alto risco — execução lenta e cuidadosa |

**IMPORTANTE:** `/ship` do gstack inclui git push — protocolo AIOX exige que push seja feito via @devops.
Usar `/review` do gstack, mas delegar push para `@devops *push`.

## LLM Wiki Skills (Karpathy pattern — ACTIVE ✓)

Installed 2026-04-18. `llm-wiki-setup` + `wiki-self-heal` in `~/ai-second-brain-skills/`.
Full usage rules: `.claude/rules/llm-wiki-usage.md`

| Skill | Comando | Agent Owner | Quando usar |
|-------|---------|-------------|-------------|
| llm-wiki-setup | `/llm-wiki-setup` | ORION | Bootstrap novo knowledge vault (Karpathy 3-layer) |
| wiki-self-heal | `/wiki-self-heal` | ORION | Health-check + gap-fill em wiki existente |

**Vault ativo:** `AKASHA/` — layout nested, hot cache ativado.
**SÍRIOS:** não usar — tem estrutura Obsidian própria.

## Workers — Bike Method Phase Status

All workers follow the Bike Method deployment protocol. Protocol doc: `SÍRIOS/RUNA SYSTEMS/worker-deployment-protocol.md`

**Rule:** Every worker starts at Phase 1 (Training Wheels). No worker ships at Phase 4.

| Worker | Port | Phase | Phase Since | Advance Criteria |
|--------|------|-------|-------------|-----------------|
| instagram-worker | :3000 | Phase 1 — Training Wheels | 2026-05-01 | 10 consecutive approved publishes |
| content-worker | :3001 | Phase 1 — Training Wheels | 2026-05-01 | 10 consecutive approved carousel exports |

Required frontmatter in every worker `.md` doc:
```yaml
bike-method-phase: 1
phase-updated: YYYY-MM-DD
phase-advance-criteria: "N outputs approved without intervention"
kill-switch:
  criteria: "..."
  activator: "@devops"
```

---

## Deprecation — Kill Switch Protocol

Protocol doc: `SÍRIOS/RUNA SYSTEMS/deprecation-protocol.md`

Kill Switch triggers when ANY of: inactivity 30d, no KPI, no owner, cost > benefit, failure rate >10%, superseded.

**Review authority:** @devops (Gage) — 48h SLA.

| Currently Deprecated | Replacement |
|----------------------|-------------|
| ALPHA® (GPT assistant) | FREYJA + ARES + squad agents |
| MAYA® (GPT assistant) | MAYA (AIOX agent) + inference.sh |
| ICARUS® (GPT assistant) | AGENT$ + squad architecture |
| ManyChat | Zernio API integration |

| Kill Switch Candidate | Status |
|-----------------------|--------|
| n8n-mcp | Monitoring — disabledMcpjsonServers, not used |

---

## Gaps

| Gap | Status |
|-----|--------|
| StitchMCP not configured | ⚠️ Pending — user must set up at labs.google.com/stitch |
| Magic MCP (@21st-dev) | ⚠️ Pending — requires API key from 21st.dev console |

## video-use (Raw Footage Editing — ACTIVE ✓ installed 2026-05-12)

**Owner:** MAYA | **Rule file:** `.claude/rules/video-use-usage.md`
**Status:** Installed 2026-05-12 — video-use 0.1.0 — symlink active — ELEVENLABS_API_KEY configured
**Requires:** `ELEVENLABS_API_KEY` in `~/Developer/video-use/.env`, Python 3.14 ✅, FFmpeg v8.0.1 ✅

| Capability | Mechanism | When to use |
|------------|-----------|-------------|
| Filler removal | ElevenLabs Scribe word-level timestamps | Every talking head / class recording |
| Silence removal | Waveform gap analysis | Multi-take, interviews, long footage |
| Color grade | FFmpeg ASC CDL filter chains | Dark/cinematic consistent aesthetic |
| Subtitle burn | SRT word-boundary, 2 words uppercase | Reels, accessibility |
| Multi-take selection | Sub-agent selects best segment | Recordings with multiple attempts |
| Animation overlays | Backends: HyperFrames, Remotion, Manim, PIL | Course diagrams, data animations |

**Critical distinction:** video-use = *edit real footage*. Remotion = *create from zero via React code*.
They are complementary: Remotion is one of video-use's animation overlay backends.

**Usage pattern:**
```bash
cd /path/to/footage
claude
# then in natural language: "Edita esses vídeos para Instagram Reels"
```

**Products:** CREATOR$ (primary Reels pipeline), RUNA SYSTEMS (class modules for Skool), Lives de construção (highlights R$97)

---

Last updated: 2026-05-12
