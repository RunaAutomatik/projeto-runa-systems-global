---
date: 2026-05-24
tags: [skills, index, hub, capabilities]
project: runa-systems-global
type: skill-doc
---

# Skills Index — Capability Map

> Every capability this ecosystem can execute, organized by agent.
> "Quero fazer X" → find the task below → open the linked document.

---

## Agent Files

| Agent | Persona | Skills Document |
|-------|---------|----------------|
| **@aiox-master** | Orion | [[Skills Agentes AIOX]] |
| **ARES** | — | [[Skills ARES Aquisição]] |
| **FREYJA** | — | [[Skills FREYJA Conteúdo]] |
| **MAYA** | — | [[Skills MAYA Produção AV]] · [[Skills MAYA Framework GenHQ]] |
| **HERMES** | — | [[Skills HERMES Automação]] |
| **HELIOS** | — | [[Skills HELIOS SEO]] |
| **ORION** | — | [[Skills ORION Knowledge]] |
| **@dev** | Dex | [[Skills Dev]] · [[Skills Dev Plataforma]] |
| **@devops + @qa** | Gage · Quinn | [[Skills DevOps QA]] |
| **@ux-design-expert** | Uma | [[Skills Design UI]] |
| Cross-agent | — | [[Skills gstack]] · [[Skills graphify]] · [[Skills LLM Wiki]] · [[Skills Obsidian]] |
| Reference docs | — | [[stitch-skills]] · [[knowledge-extraction]] |

---

## Por Tarefa — Quick Lookup

### Imagem
→ [[Skills MAYA Produção AV]] — Higgsfield gpt_image_2, nano-banana-2, background-removal
→ [[Skills MAYA Produção AV]] → seção Higgsfield CLI/MCP para cenas com Arthur + referências

### Vídeo
→ [[Skills MAYA Produção AV]] → Higgsfield MCP `generate_video` (Tier 0)
→ [[Skills MAYA Produção AV]] → seedance-2, muapi extended video (fallbacks)

### Voz / TTS / Áudio
→ [[Skills MAYA Produção AV]] → seção Audio: elevenlabs-tts, dialogue, music

### Lip sync (animar rosto com áudio)
→ [[Skills MAYA Produção AV]] → muapi: `infinitetalk-image-to-video` / `wan2.2-speech-to-video` (PT-BR)

### Edição de footage real (filler removal, color grade, subtitles)
→ [[Skills MAYA Produção AV]] → video-use skill

### Editar imagem com instrução de texto (GPT-4o edit, MJ v7)
→ [[Skills MAYA Produção AV]] → muapi: `gpt4o-edit` / `midjourney-v7-omni-reference`

### Vídeo de produto 1080p com avatar e referências
→ [[Skills MAYA Produção AV]] → muapi: `sd-2-vip-omni-reference-1080p`

### Organizar campanha AV (pasta de projeto, UUID tracking, feedback loop)
→ [[Skills MAYA Framework GenHQ]] → modelo de 11 arquivos, `reference-ids.md`, `seance-prompt-framework.md`, Google Sheets feedback loop via `gws`

### Identidade visual de marca completa (Agency Pipeline — 12 skills)
→ [[Skills ARES Aquisição]] → `/creative-brief` — onboarding de cliente (Step 1)
→ [[Skills MAYA Produção AV]] → `/paleta-cores` — paleta de cores com Higgsfield (Step 2)
→ [[Skills MAYA Produção AV]] → `/logomarca` — logo gerado com gpt_image_2 + refs (Step 3a)
→ [[Skills Design UI]] → `/tipografia` — font pairing + specimen HTML interativo (Step 3b)
→ [[Skills MAYA Produção AV]] → `/mock-corporativo` — mockup papelaria e cartão (Step 4a)
→ [[Skills MAYA Produção AV]] → `/mock-produto` — mockup embalagem/produto (Step 4b)
→ [[Skills MAYA Produção AV]] → `/mock-ambiente` — mockup lifestyle/ambiente (Step 4c)
→ [[Skills MAYA Produção AV]] → `/moodboard` — moodboard 4 imagens Higgsfield (Step 5)
→ [[Skills Design UI]] → `/moodboard-to-motion` — prompt para claude.ai/design animar (Step 6)
→ [[Skills MAYA Produção AV]] → `/lp-builder` — landing page com brand system (Step 7)
→ [[Skills DevOps QA]] → `/arte-final` — preflight: DPI, CMYK, sangria, fontes (Step 8)

### Converter skill de claude.ai → Claude Code
→ [[Skills Agentes AIOX]] → `/skill-converter` — converte SKILL.md single-file → pasta com scripts/ + references/

### Design system completo (taste-design → stitch → impeccable)
→ [[Skills Design UI]] → pipeline: `/taste-design` → `/stitch-design` → `/stitch-loop` → `/impeccable`

### Auditoria de qualidade visual de UI gerada por IA
→ [[Skills Design UI]] → `/impeccable audit`, `npx impeccable detect`

### SEO técnico, conteúdo, schema, sitemap, AI search
→ [[Skills HELIOS SEO]] — 13 sub-skills

### Conteúdo (posts, carousel, copy, hooks, ads-dna)
→ [[Skills FREYJA Conteúdo]] — content-repurposing, linkedin-content, seo-content

### Automação Instagram / WhatsApp (DMs, triggers, sequências)
→ [[Skills HERMES Automação]] — n8n-mcp, Zernio API, comment automations

### Diagnosticar o nível AI de um prospect (Four Cs)
→ [[Skills ARES Aquisição]] → `/runa-os-audit`

### Qual produto RUNA recomendar para um prospect
→ [[Skills ARES Aquisição]] → tabela Score → Produto (0–25 / 26–50 / 51–75 / 76–100)

### Onboarding dia 1 — novo cliente RUNA SYSTEMS
→ [[Skills ARES Aquisição]] → `/runa-intake`

### Capturar voice DNA e contexto de negócio de um cliente
→ [[Skills ARES Aquisição]] → `/runa-intake` Q2 → `references/voice.md`

### Identificar primeiro candidato EAD de um cliente
→ [[Skills ARES Aquisição]] → `/runa-intake` Q7 → `context/pain-ead.md`

### Knowledge base persistente (Karpathy wiki pattern)
→ [[Skills LLM Wiki]] → `/llm-wiki-setup` (bootstrap) → `/wiki-self-heal` (manutenção)

### Ingerir artigos, PDFs ou páginas no vault AKASHA
→ [[Skills LLM Wiki]] → Chrome Web Clipper + AKASHA Clip Server → `AKASHA/raw/`

### NotebookLM — sessões, perguntas, Audio Overview (podcast)
→ [[Skills ORION Knowledge]] → seção notebooklm-mcp

### Obsidian — vault, notas, canvas, bases de dados
→ [[Skills Obsidian]] — obsidian-cli, obsidian-bases, json-canvas

### Extrair e estruturar conhecimento de qualquer fonte
→ [[knowledge-extraction]] → `/knowledge-extraction`

### Knowledge graph visual (código, vault, docs)
→ [[Skills graphify]] → `/graphify <pasta>`

### Encontrar clusters temáticos ou caminho entre conceitos
→ [[Skills graphify]] → output HTML interativo + `/graphify path <A> <B>`

### Commit convencional / commit-push-PR
→ [[Skills DevOps QA]] → commit-commands: `/commit`, `/commit-push-pr`

### Code review antes de PR (multi-dimension)
→ [[Skills DevOps QA]] → `/pr-review-toolkit:review-pr`

### Hook para prevenir comportamento indesejado
→ [[Skills DevOps QA]] → `/hookify`

### Ativar agente especializado (@dev, @qa, @pm, @po, @sm...)
→ [[Skills Agentes AIOX]] → sintaxe `@agent-name` + SDC workflow

### Validar ideia de produto antes de codar (YC method)
→ [[Skills gstack]] → `/office-hours`

### Code review com dois modelos em paralelo
→ [[Skills gstack]] → `/review`

### QA com browser real (Chromium + Playwright)
→ [[Skills gstack]] → `/qa` + `/browse`
→ [[Skills Browser Tools]] → playwright MCP, browse daemon

### Security audit (OWASP Top 10 + STRIDE)
→ [[Skills gstack]] → `/cso`

### Pipeline de planning automático sem interrupções
→ [[Skills gstack]] → `/autoplan`

### Extrair conteúdo limpo de URL (sem JS)
→ [[Skills Dev Plataforma]] → `/defuddle`

### Inicializar aplicação Agent SDK (TypeScript ou Python)
→ [[Skills Dev Plataforma]] → `/agent-sdk-dev:new-sdk-app`

### Criar nova skill ou plugin com guided workflow
→ [[Skills Dev Plataforma]] → `/plugin-dev:create-plugin` / `/plugin-dev:skill-development`

### UI/frontend — componentes, landing page, deploy
→ [[Skills Dev]] → ui-ux-pro-max, frontend-design, video-to-website

---

## System Status

| File | What it covers | Status |
|------|---------------|--------|
| [[Skills MAYA Produção AV]] | Higgsfield MCP/CLI, muapi, infsh, video-use, ElevenLabs + Agency Pipeline (paleta-cores, logomarca, mock-*, moodboard, lp-builder) | ✅ Active |
| [[Skills MAYA Framework GenHQ]] | GenHQ production organization — pasta de 11 arquivos, UUID tracking, Character Sheet rule, feedback loop Google Sheets, batch rules | ✅ Active |
| [[Skills FREYJA Conteúdo]] | Content strategy, copy, carousel briefs, ads-dna | ✅ Active |
| [[Skills HERMES Automação]] | n8n-mcp, Zernio API, Instagram/WhatsApp automations | ✅ Active |
| [[Skills ARES Aquisição]] | /runa-os-audit (Four Cs) + /runa-intake (Day 1 onboarding) + /creative-brief (agency onboarding) | ✅ Active |
| [[Skills HELIOS SEO]] | 13 SEO sub-skills | ✅ Active |
| [[Skills ORION Knowledge]] | NotebookLM MCP, knowledge-extraction, Obsidian orchestration | ✅ Active |
| [[Skills Design UI]] | taste-design, stitch-design, impeccable + tipografia + moodboard-to-motion | ✅ Active |
| [[Skills Dev Plataforma]] | Claude Code native skills, plugin-dev, agent-sdk-dev | ✅ Active |
| [[Skills Dev]] | ui-ux-pro-max, frontend, video-to-website, @dev stack | ✅ Active |
| [[Skills DevOps QA]] | commit-commands, code-review, pr-review-toolkit, hookify + arte-final (preflight) | ✅ Active |
| [[Skills Agentes AIOX]] | 11-agent roster, activation syntax, SDC, exclusive operations + skill-converter | ✅ Active |
| [[Skills Browser Tools]] | Playwright MCP, browse daemon, web interaction | ✅ Active |
| [[Skills gstack]] | 23 engineering skills: /office-hours, /autoplan, /review, /qa, /cso | ✅ Active |
| [[Skills graphify]] | Knowledge graph — HTML interativo + Obsidian export | ✅ Active |
| [[Skills LLM Wiki]] | llm-wiki-setup + wiki-self-heal — AKASHA vault (Karpathy pattern) | ✅ Active |
| [[Skills Obsidian]] | Vault, bases, canvas, obsidian-cli | ✅ Active |
| [[stitch-skills]] | Stitch baton system deep reference (StitchMCP ⚠️ pending) | ✅ Reference |
| [[knowledge-extraction]] | /knowledge-extraction deep reference — AKASHA integration | ✅ Reference |
| Ads (18 sub-skills) | — | ❌ Removed 2026-04-24 |
| GSD (32 commands) | — | ❌ Removed 2026-04-24 |

---

## Cross-References

| Document | Contains | Relation |
|----------|---------|---------|
| [[capability-map]] | Tool/skill/MCP assignment by agent + app IDs + CLI patterns | Technical version of this index — authoritative for exact commands |
| [[agent-reference]] | Full profile of all agents: personas, commands, skills, MCPs | Agent-first lookup (vs. task-first here) |

> **Navigation:**
> - "Quero fazer X" → this document (task-first)
> - "App ID / CLI exato?" → [[capability-map]] (tool-first)
> - "Entender o agente Y" → [[agent-reference]] (persona-first)
