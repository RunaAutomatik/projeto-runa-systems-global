---
date: 2026-04-18
tags: [plano, infraestrutura, repos, auditoria, runa-systems]
project: runa-systems-global
type: plan
status: pending-review
---

# Plan: Repo Evaluation + Infrastructure Audit
## 2026-04-18 | Pre-PRD Workstreams

> Pre-work before building the RUNA SYSTEMS PRD.
> Two parallel tracks: (A) 13 repos evaluation, (B) infra cleanup.
> Decision: INSTALL / STUDY / SKIP / DEFER for each repo.
> Fix priority: CRITICAL → HIGH → MEDIUM for infra items.

---

## PART A — 13 Repos Evaluation

| # | Repo | Priority | Decision |
|---|------|----------|----------|
| 1 | hermes-agent | HIGH | STUDY + DEFER |
| 2 | evolver | MEDIUM | SKIP |
| 3 | ai-second-brain-skills | HIGH | INSTALL |
| 4 | GitNexus | MEDIUM | DEFER |
| 5 | claude-code-best-practice | HIGH | STUDY NOW |
| 6 | airllm | LOW | SKIP |
| 7 | antigravity-awesome-skills | MEDIUM | SELECTIVE |
| 8 | andrej-karpathy-skills | HIGH | INSTALL (low effort) |
| 9 | gsap-skills | MEDIUM | DEFER |
| 10 | setter-bot | HIGH | STUDY + QUESTION |
| 11 | OBLITERATUS | LOW | SKIP |
| 12 | voicebox | HIGH | INSTALL (desktop app) |
| 13 | octogent | MEDIUM | STUDY |

---

### 1. hermes-agent (NousResearch)
**O que é:** Self-improving AI agent runtime. Python-based. Cria skills da própria experiência, memória cross-session, scheduler cron, roda em CLI + Telegram + Discord + WhatsApp + Signal.

**Como usar:** Shell script de instalação (Linux/macOS/WSL2). Entry point: `hermes` CLI.

**Onde no workflow:** Infraestrutura de deployment de agents como serviços persistentes (não só sessões Claude Code).

**Por que:** O AIOX atual roda agents como personas dentro do Claude Code. Hermes permite que agents rodem de forma autônoma e persistente — Telegram bot que aprende, WhatsApp assistant para clientes, cron jobs de conteúdo.

**Caso de uso Runa Systems:**
- Deploy HERMES como bot Telegram real para triagem de leads de @arthsystems_
- Deploy ORION como assistente WhatsApp para clientes do programa RUNA SYSTEMS
- Cada "agente neural" do $QUAD poderia ser deployado via Hermes para clientes high-ticket

**Decisão:** STUDY + DEFER
- Estudar a arquitetura de skills/memory para aplicar no AIOX
- Deploy real requer servidor (Railway/VPS) — questão estratégica pendente
- ⚠️ Não instalar ainda — perguntar ao Arthur sobre infraestrutura de servidor

---

### 2. evolver (EvoMap)
**O que é:** GEP (Genome Evolution Protocol) — engine de auto-evolução de prompts de agents. Analisa logs/erros do diretório memory/, gera protocolos de melhoria, registra audit trail.

**Como usar:** `node index.js --loop` (contínuo) ou `--review` (human-in-the-loop).

**Onde no workflow:** Pós-sessão de trabalho com agents para otimizar prompts sistematicamente.

**Por que:** Processo de melhoria de agents atualmente é ad-hoc. Evolver sistematiza.

**Caso de uso Runa Systems:** Rodar contra definições de agents AIOX após sessões de cliente para auto-melhorar prompts.

**Decisão:** SKIP
- O AIOX já tem `*modify-agent` e `*improve-self` com processo equivalente
- Adiciona dependência Node.js + complexidade sem ganho claro
- GEP é interessante como conceito mas não é prioridade agora

---

### 3. ai-second-brain-skills (NulightJens)
**O que é:** Dois skills Claude Code que implementam o padrão LLM wiki de Karpathy. Transforma pasta de markdown em KB auto-mantida e auto-corrigida. Sem banco de dados — só markdown.

**Como usar:**
1. Instalar skills `llm-wiki-setup` e `wiki-self-heal`
2. Drop de fontes em `raw/`
3. Claude ingere e sintetiza wiki pages automaticamente
4. Rodar `wiki-self-heal` periodicamente

**Onde no workflow:** Manutenção e expansão do AKASHA vault. Fase de ingestion de novos autores/frameworks.

**Por que:** AKASHA hoje é curado manualmente. Este skill automatiza: drop transcript → KB sintetizada, cross-referenciada, auto-corrigida.

**Caso de uso Runa Systems:**
- Feed AKASHA com transcrições de Hormozi/Brunson/Ladeira → Claude gera wiki sintetizada automaticamente
- FREYJA e ARES passam a consultar KB que se auto-mantém
- Quando novos livros/cursos chegam: drop no raw/, rodar ingestion

**Decisão:** INSTALL
- Baixo risco (só markdown + Claude Code skills)
- Alto valor para AKASHA que já é infra central
- Instalar via `npx skills add` ou clone manual

---

### 4. GitNexus (abhigyanpatwari)
**O que é:** MCP de code intelligence com 16 tools. Analisa codebase (14 linguagens), dependency mapping com Tree-sitter ASTs, impact analysis, multi-repo. Web UI + CLI + MCP.

**Como usar:** `npm install -g gitnexus`, `gitnexus analyze`, conectar MCP ao Claude Code.

**Onde no workflow:** Durante desenvolvimento (@dev) para entender impacto antes de mudanças em codebases grandes.

**Por que:** Melhor que Grep manual para codebases complexas. Useful para apps/command-center e workers.

**Caso de uso Runa Systems:** Useful quando o Command Center ou workers crescerem em complexidade. Atualmente projetos ainda são pequenos.

**Decisão:** DEFER
- MCP adicional requer configuração e aumenta overhead de sessão
- Prioridade baixa enquanto os apps são pequenos
- Revisar quando apps/command-center crescer

---

### 5. claude-code-best-practice (shanraisshan)
**O que é:** 46k stars. Repositório com 82+ tips do core team Anthropic + comunidade. Cobre: subagents, commands, skills, hooks, MCPs, agent teams, routines, computer use, code review multi-agent.

**Como usar:** Estudar como documentação. Aplicar padrões ao AIOX. Potencialmente extrair CLAUDE.md principles.

**Onde no workflow:** Meta-nível — melhora como Arthur e o AIOX operam. Também: conteúdo direto para módulos do RUNA SYSTEMS program.

**Por que:** 82+ padrões validados pelo core team. Fonte primária de best practices para o que Arthur está construindo e ensinando.

**Caso de uso Runa Systems:**
- Extrair patterns de multi-agent teams para o módulo de Claude Code do programa
- Identificar capabilities que ainda não usamos (routines, computer use, remote control)
- Raw material para aulas 1.4–1.7 do modulo-claude-code (Skills in depth, MCPs, Hooks, Subagents)

**Decisão:** STUDY NOW
- Leitura prioritária antes de construir o PRD do RUNA SYSTEMS
- Não requer instalação — é documentação
- Fazer extração de insights para product-course-raw-material.md

---

### 6. airllm (lyogavin)
**O que é:** Python library para rodar modelos 70B+ em 4GB VRAM via layer-wise decomposition. Sem quantização.

**Como usar:** `pip install airllm`, usar AutoModel como HuggingFace.

**Onde no workflow:** Inferência local com modelos open-source.

**Por que:** Rodar LLMs localmente sem custos de API.

**Caso de uso Runa Systems:** Potencialmente útil se Arthur tiver GPU. Mas inference.sh já cobre geração de mídia e Claude cobre texto.

**Decisão:** SKIP
- Requer GPU dedicada (Arthur não tem setup confirmado)
- Docker não disponível neste ambiente
- inference.sh + Claude já cobrem todos os casos de uso ativos
- Guardar na watchlist para quando infraestrutura local de GPU existir

---

### 7. antigravity-awesome-skills (sickn33)
**O que é:** 1,423+ skill playbooks para Claude Code/Cursor/Antigravity. NPX installer. Bundles por role: Web Wizard, Security Engineer, OSS Maintainer, etc.

**Como usar:** `npx antigravity-awesome-skills` (instala tudo) ou instalar bundles específicos seletivamente.

**Onde no workflow:** Expansão de capabilities de agents específicos via skills direcionadas.

**Por que:** 1,423 skills é um arsenal. Filtrar os 20-30 mais relevantes poupa semanas de criação manual.

**Caso de uso Runa Systems:**
- Bundle "Security Engineer" para @qa (@cso já existe via gstack)
- Bundle "OSS Maintainer" para @devops
- Skills específicas de testing, API design, documentation

**Decisão:** SELECTIVE
- Não instalar tudo — 1,423 skills aumenta ruído no contexto
- Estratégia: navegar o catálogo, identificar os 15-20 mais relevantes, instalar individualmente
- Executar após o PRD — quando o escopo estiver claro

---

### 8. andrej-karpathy-skills (forrestchang)
**O que é:** CLAUDE.md com 4 princípios derivados de observações de Karpathy sobre erros comuns de LLMs em código:
1. Think Before Coding — declare assumptions, ask rather than guess
2. Simplicity First — minimal code, no speculative features
3. Surgical Changes — only modify what's necessary
4. Goal-Driven Execution — define success criteria, loop until met

**Como usar:** Copiar CLAUDE.md principles para o projeto ou instalar como plugin.

**Onde no workflow:** Sempre ativo via CLAUDE.md — molda comportamento de @dev.

**Por que:** Previne over-engineering, mudanças não solicitadas, e hallucination de features.

**Caso de uso Runa Systems:** Merge dos 4 princípios no CLAUDE.md do AIOX para melhorar @dev. Esforço mínimo, impacto imediato.

**Decisão:** INSTALL (low effort)
- Zero dependências — só texto para adicionar ao CLAUDE.md
- Alinha com a Constitution do AIOX (Article IV: No Invention, Article V: Quality First)
- Fazer merge hoje ao final da sessão

---

### 9. gsap-skills (GreenSock)
**O que é:** Skills oficiais GSAP para Claude Code. 8 módulos: core, timeline, ScrollTrigger, plugins, React, performance, Vue, Svelte.

**Como usar:** `npx skills add gsap-skills`

**Onde no workflow:** Quando construindo SITE$ ou landing pages com animações.

**Por que:** Claude halucina a API do GSAP sem contexto. Skills corrigem isso.

**Caso de uso Runa Systems:** Landing page do RUNA SYSTEMS com animações GSAP. Demos de SITE$.

**Decisão:** DEFER
- Útil quando SITE$ estiver ativo (próxima fase)
- Instalar quando o primeiro projeto de website começar
- Baixo risco, instalar em 2 minutos quando necessário

---

### 10. setter-bot (jasonc00person)
**O que é:** Bot para automação de DM outreach no Instagram. Shell + JS + Claude skills. Gerencia listas de prospects, scripts de conversa, lead magnets. AI-powered para qualificação.

**Como usar:** Configurar listas de prospects e templates de conversa, rodar o bot.

**Onde no workflow:** HERMES — Instagram DM automation. Complementa Zernio (reactivo) com outreach proativo.

**Por que:** O framework de conversão atual é reactivo (post → comment trigger → DM). Setter-bot adiciona proatividade.

**Caso de uso Runa Systems:**
- Automatizar a etapa de "setter" no funil @arthsystems_
- Lista de prospects qualificados → DM automático → qualificação → aperitivo → oferta
- Potencialmente: teachar o modelo para clientes do $QUAD como estratégia de vendas

**Decisão:** STUDY + QUESTÃO ESTRATÉGICA
- ⚠️ Outreach proativo via bot viola Terms of Service do Instagram → risco de ban
- Zernio comment automations são reactivas (mais safe)
- Questão para Arthur: quer explorar esse risco calculado?

---

### 11. OBLITERATUS (elder-plinius)
**O que é:** Toolkit para remover comportamentos de recusa de LLMs open-source via "abliteration" (SVD decomposition). Remove guardrails sem re-treinamento.

**Como usar:** HuggingFace Spaces (sem instalação), Gradio local, CLI ou Python API.

**Onde no workflow:** Experimentação com modelos locais.

**Por que:** Cria modelos sem restrições para casos de uso específicos.

**Caso de uso Runa Systems:** Não aplicável. Inference.sh cobre geração. GPU local não disponível. Risco ético e legal significativo.

**Decisão:** SKIP
- Sem GPU local, sem Docker — não roda no ambiente atual
- Não alinha com o stack cloud-first
- Risco legal/reputacional para marca Runa Systems

---

### 12. voicebox (jamiepine)
**O que é:** Voice cloning studio local e gratuito. Alternativa ao ElevenLabs. 5 engines TTS (Qwen3-TTS, LuxTTS, Chatterbox, HumeAI), 23 idiomas, audio effects, timeline editor. Desktop app (Windows/macOS).

**Como usar:** Download do desktop app (Windows). Criar voice profile de Arthur, gerar voiceovers via UI ou REST API.

**Onde no workflow:** MAYA — produção de áudio. Substitui parcialmente ElevenLabs para volume alto.

**Por que:**
- ElevenLabs cobra por caracter — escala traz custo
- Voicebox é gratuito e local — sem custo por caracter
- Clona a voz do Arthur para produção de conteúdo em escala
- REST API permite integração com o pipeline MAYA existente

**Caso de uso Runa Systems:**
- Clone da voz Arthur → voiceovers ilimitados para Reels, aulas do programa, demos de produto
- Integrar REST API no content-worker para pipeline automático
- Ensinar clientes RUNA SYSTEMS a clonar a própria voz (módulo de conteúdo com IA)

**Decisão:** INSTALL (desktop app)
- Alto valor imediato: reduz custo ElevenLabs
- Desktop app Windows disponível — sem GPU overhead inicialmente (CPU mode)
- GPU acelera mas não é obrigatório para começar

---

### 13. octogent (hesamsheikh)
**O que é:** Dashboard de orquestração para múltiplas sessões Claude Code simultâneas. "Tentáculos" = contextos isolados com todo.md. Inter-agent messaging, spawn de child agents, web UI.

**Como usar:** `pnpm install && pnpm dev`. Web interface para gerenciar sessions.

**Onde no workflow:** Quando rodando múltiplos agents simultâneos (AIOX multi-agent).

**Por que:** Torna orquestração multi-agent visível e gerenciável. Alternativa/complemento ao Command Center.

**Caso de uso Runa Systems:**
- Gerenciar sessões paralelas: FREYJA (conteúdo) + HERMES (automação) + ARES (oferta) simultaneamente
- Substituir ou complementar o apps/command-center

**Decisão:** STUDY
- Conceito de "tentáculos" (contextos isolados com markdown) é poderoso e alinha com AIOX
- Avaliar se vale migrar do Command Center ou integrar
- Não instalar ainda — command-center já existe e funciona

---

## PART B — Infrastructure Audit & Cleanup

### INVENTÁRIO ATUAL

**Global hooks (~/.claude/settings.json):**
| Hook | Event | Matcher | Status |
|------|-------|---------|--------|
| gsd-check-update.js | SessionStart | none | OK (raro) |
| gsd-context-monitor.js | PostToolUse | ⚠️ NENHUM | 🔴 CRÍTICO |
| gsd-statusline.js | StatusLine | n/a | OK |

**Project hooks (.claude/settings.local.json):**
| Hook | Event | Matcher | Timeout | Status |
|------|-------|---------|---------|--------|
| code-intel-pretool.cjs | PreToolUse | Write\|Edit | 10s | OK |
| post-tool-format.cjs | PostToolUse | Edit\|Write | 12s | OK |
| synapse-engine.cjs | UserPromptSubmit | none | 6s | OK (aceita) |
| stop-notification.cjs | Stop | none | 8s async | OK |
| precompact-session-digest.cjs | ⚠️ NÃO CONFIGURADO | - | - | ÓRFÃO |

**Global MCPs (~/.claude.json):**
| MCP | Status |
|-----|--------|
| Neon | ✅ Active |
| zernio | 🔴 Token expirado |

**Project MCPs (.mcp.json):**
| MCP | Status |
|-----|--------|
| n8n-mcp | 🔴 DISABLED + JWT expirado (2026-04-16) |
| notebooklm-mcp | ✅ Active |

**Global skills (54 total):**
- ads-* (20): ✅ todos mapeados para ARES
- seo-* (13): ✅ todos mapeados para HELIOS
- obsidian-*, json-canvas, knowledge-extraction, graphify: ✅ ORION
- defuddle, gstack, paperclip*, para-memory-files: avaliar uso
- react-components, remotion, shadcn-ui, stitch-*, taste-design: ✅ @dev/@ux
- design-md, enhance-prompt: ⚠️ avaliar se usados

**Project skills (9):**
agent-workflows, architecture-design, code-review, devops-automation, spec-writing, story-management, testing-strategy, ui-ux-pro-max, video-to-website — todos relevantes ✅

**Plugins ativos (12):**
agent-sdk-dev, code-review, commit-commands, explanatory-output-style, feature-dev, frontend-design, hookify, learning-output-style, plugin-dev, pr-review-toolkit, ralph-loop, security-guidance, cli-anything

**Workers:**
| Worker | Port | Status |
|--------|------|--------|
| apps/content-worker | 3001 | ✅ |
| apps/instagram-worker | 3000 | ✅ |
| apps/command-center | - | ✅ |
| apps/lp-runa | - | ⚠️ Untracked in git |
| apps/site-movimento | - | ⚠️ Assess usage |

**Scripts:**
carousel-watcher.js, carousel-keywords.json, dia-abrir.sh, dia-fechar.sh, export-carousel.py, export-brand-assets.py, generate-creator-dollar-docs.py, generate-creator-dollar-terms.py

---

### PRIORIDADE DE AÇÃO

#### 🔴 CRÍTICO — Executar imediatamente

**C1: gsd-context-monitor.js — Adicionar matcher**

Problema: PostToolUse sem matcher → dispara em TODA tool call → no Antigravity (cmd.exe PATH) Python não encontrado → ptyHost perde heartbeat → terminal trava.

Solução: Editar `~/.claude/settings.json` para adicionar matcher. Opções:
- Opção A: matcher `"Bash|Write|Edit"` — só dispara em tools que realmente mudam estado
- Opção B: Remover o hook temporariamente (usar só statusline para contexto)
- Recomendação: **Opção A** — preserva funcionalidade com menos disparos

**C2: Zernio token renovar**
- Rodar `/zernio:authenticate` na próxima sessão com Antigravity restart

---

#### 🟡 ALTO — Executar na próxima sessão de infra

**H1: n8n-mcp JWT expirou (2026-04-16)**
- Token no .mcp.json expirou há 2 dias
- Ação: Gerar novo API key no Railway n8n instance, atualizar .mcp.json
- Nota: n8n-mcp está disabled no settings.local.json — baixo impacto imediato

**H2: precompact-session-digest.cjs — Resolver estado**
- Arquivo existe em .claude/hooks/ mas não está configurado em settings.local.json
- Opções: Registrar como PostToolUse hook de compactação OU deletar se não necessário
- Avaliar: este hook está sendo usado para alguma funcionalidade ativa?

**H3: apps/lp-runa — Trackear no git ou arquivar**
- Aparece como `??` (untracked) no git status
- Decisão: commitar (se é trabalho ativo) ou adicionar ao .gitignore

---

#### 🟢 MÉDIO — Sessão de cleanup dedicada

**M1: Plugin audit — Avaliar 2 plugins específicos**
- `ralph-loop@claude-plugins-official` — O que faz? Verificar se está sendo usado ativamente
- `learning-output-style` + `explanatory-output-style` — ambos ativos = comportamento de output duplo (atualmente ativo na sessão). Definir qual manter como padrão.

**M2: Skills cleanup — 3 a avaliar**
- `design-md`: symlink. Está sendo usado pelo @ux ou MAYA?
- `enhance-prompt`: symlink. Está ativo no workflow?
- `para-memory-files`: O que faz? Conflita com o sistema de memória manual?

**M3: .venv handling**
- Se `.venv` existe no projeto root e Antigravity o injeta no PATH → Python stub quebra hooks
- Solução: confirmar se `.venv` está no .gitignore; mover para subpasta específica se necessário

**M4: apps/site-movimento — Avaliar status**
- O que é este worker? Está sendo usado?

---

## QUESTÕES ESTRATÉGICAS

> Para responder antes de executar qualquer item:

**Q1 — Setter-bot (repo #10):** Outreach proativo via bot no Instagram viola ToS do Meta e tem risco real de ban. Quer explorar isso como risk calculado, ou manter só comment automation reactiva?

**Q2 — Hermes Agent (repo #1):** Para deployar agents como serviços persistentes (Telegram/WhatsApp), precisamos de um servidor. Já tem Railway ou VPS disponível para isso, ou é infra futura?

**Q3 — gsd-context-monitor.js:** Prefere (A) adicionar matcher para reduzir frequência, ou (B) remover o hook completamente enquanto o problema de Python não está resolvido?

**Q4 — Plugin output style:** Explanatory + Learning output style ambos ativos. Isso é intencional (quer os dois behaviors)? Ou prefere escolher um?

**Q5 — ralph-loop plugin:** Conhece este plugin e usa ativamente? Não identifiquei um caso de uso claro no nosso workflow.

---

## SEQUÊNCIA DE EXECUÇÃO PROPOSTA

```
Sessão atual (ou próxima):
  1. Corrigir gsd-context-monitor.js (C1) — depende da Q3
  2. Merge Karpathy principles no CLAUDE.md (repo #8) — 10 minutos
  3. Instalar ai-second-brain-skills (repo #3) — 15 minutos
  
Próxima sessão de infra (dedicada):
  4. Renovar n8n JWT (H1)
  5. Resolver precompact-session-digest.cjs (H2)
  6. Plugin audit + M1-M4 cleanup
  
Após PRD RUNA SYSTEMS construído:
  7. Instalar voicebox desktop (repo #12)
  8. Selective skills da antigravity-awesome-skills (repo #7)
  9. Avaliar octogent vs command-center (repo #13)
  
Futuro (infra de servidor disponível):
  10. Deploy hermes-agent para agents persistentes (repo #1)
  11. gsap-skills quando SITE$ ativo (repo #9)
  12. GitNexus quando apps crescerem (repo #4)
```

---

## REPOS: DECISÃO FINAL

| Repo | Decisão | Timing |
|------|---------|--------|
| hermes-agent | STUDY + DEFER (requer servidor) | Futuro |
| evolver | SKIP | — |
| ai-second-brain-skills | ✅ INSTALL | Esta semana |
| GitNexus | DEFER | Quando apps crescerem |
| claude-code-best-practice | ✅ STUDY NOW | PRÉ-PRD |
| airllm | SKIP | — |
| antigravity-awesome-skills | SELECTIVE (pós-PRD) | Após PRD |
| andrej-karpathy-skills | ✅ INSTALL (merge CLAUDE.md) | Esta sessão |
| gsap-skills | DEFER | Quando SITE$ ativo |
| setter-bot | ⚠️ QUESTÃO ESTRATÉGICA | Depende Q1 |
| OBLITERATUS | SKIP | — |
| voicebox | ✅ INSTALL desktop app | Pós-PRD |
| octogent | STUDY | Pós-PRD |
