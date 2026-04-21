---
date: 2026-04-09
tags: [runa-intervencao, mentoria, sessao-01, mapeamento, processos, squad, rpg-card]
project: runa-systems-global
type: lesson-structure
fase: 1 — Fundação
titulo-rpg: Explorador
proximo: sessao-02-tcode-ambiente
---

# Runa Intervenção — Session 01: Business Process Mapping

> **Purpose:** Map the client's entire business operation to identify where AI agents, hybrid workflows, workers/scripts, and human-only work lives.
> **Output:** Complete process map + priority sector for first squad deployment.
> **Template:** This structure serves ALL future Runa Intervenção clients — Session 01 is always this.

---

## Session Structure (90–120 min)

### BLOCK 1 — Framing (10 min)

**Objective:** Get the client to understand WHY mapping comes before any automation.

**Key message to deliver:**

> "Antes de colocar qualquer agente pra trabalhar, a gente precisa saber exatamente o que ele vai fazer. Squad sem mapeamento vira caos organizado — agentes duplicando trabalho, entrando em conflito ou assumindo funções que nem precisavam ser automatizadas."

**The 3-layer sequence to anchor:**
1. Mapeamento → 2. Delegação → 3. Squad

**Analogy to use:**
> "Um empresa que contrata pessoas sem organograma cresce com problemas. A diferença com agente de IA é que ele não reclama, não pede ajuda e não levanta a mão quando algo tá errado. Ele simplesmente produz um output ruim — e você só percebe tarde demais."

---

### BLOCK 2 — The 3 Levels of Business Hierarchy (20 min)

**Core concept from Sincra methodology:**

Every business process lives in one of 3 levels. Before mapping tasks, the client needs to understand which level each process belongs to:

| Level | Name | What lives here |
|-------|------|-----------------|
| **L0/L1** | Strategic | Company DNA, ICP, offers, services, positioning |
| **L2** | Tactical | Project setup, client configuration, # of deliverables, accounts payable, meeting cadence |
| **L3** | Operational | Where work actually happens: editing, writing copy, recording, executing |

**Critical rule:**
- Lower levels inherit context from higher levels
- An AI agent at L3 MUST have access to L2 context to function without hallucinating
- If the context is missing, the AI either gets lost or makes things up

**Practical application:**
> "Quando você for mapear, cada atividade que você faz precisa ser classificada em um desses três níveis. Isso vai determinar que tipo de agente consegue atuar nela."

---

### BLOCK 3 — Tarefas vs Microtarefas (25 min)

**The most important conceptual shift of the entire session.**

**The "atom" principle:**
Most people describe what they do in tasks. But tasks are made of microtasks — and it's at the microtask level that you find what can actually be automated.

**Definition of a microtask:**
> "O ato de parar, pensar em algo, clicar e executar."

Actions that seem trivial — creating a folder in Drive, copying a link, filling a field — are all microtasks. They individually take 30 seconds, but together they steal hours.

**Example to use live:**
- "Criar landing page" = tarefa (appears simple)
- Reality: 55 microtasks — research, brief reading, platform login, section writing, mobile testing, link checking, publishing, client notification...
- Original time: 12 days → After mapping and automation: 2 hours

**The "Breadcrumb" principle (Migalhas de Pão):**
This is why microtask mapping matters for AI specifically.

> "A IA precisa de migalhas de contexto — a quantidade certa de informação para cada etapa. Se você der pão inteiro (contexto demais de uma vez), ela se perde. Se der migalhas muito distantes, ela alucina. O mapeamento cria as migalhas na sequência certa."

**Handoff Checklists:**
Before any task passes from one area to another (e.g., from briefing to execution), there must be a checklist verifying that only 100% correct work advances. This prevents rework and is how you build reliable agent handoffs later.

**Workshop moment — Worksheet 1A (15 min):**
Ask the client to list EVERYTHING they do in a typical week, categorized by:
1. Criação de conteúdo
2. Vendas e captação
3. Entrega e onboarding de clientes
4. Operação e gestão

For EACH activity: name it + estimated weekly time.

**After listing, ask Worksheet 1B questions:**
1. Which activity, if eliminated from your week, would have the greatest immediate positive impact?
2. Which activity could a well-configured agent do better than you in 30 days?
3. Which activity ONLY you can do — because it depends on your presence, intuition, or relationships?

---

### BLOCK 4 — The 4 Categories: Where Does Each Process Go? (25 min)

**Core concept:**
> "IA não é um humano mais rápido. É um tipo diferente de executor."

The goal is NOT to automate everything. The goal is to identify WHAT can be delegated, at WHAT level, to WHAT type of executor.

**The 4 Categories:**

#### Category 1 — Full Agent (IA Completa)
- Bureaucratic, repetitive, low cognitive value tasks ("Tarefas D")
- Examples: fill fields, organize folders, create standard documents, copy links, send templated messages
- Agent authority: **Executa** or **Decide** (within defined parameters)
- AI processes high volumes of these with zero fatigue

#### Category 2 — Hybrid (Humano + IA)
- Human uses AI as direct augmentation — AI amplifies but human supervises throughout
- Examples: writing with AI assistance, analysis where human validates output, meetings where AI takes notes but human decides
- Agent authority: **Draft** (human reviews and approves before any action)
- The human's "valor-hora" justifies staying involved

#### Category 3 — Worker / Script (Automação Processual)
- Repetitive procedural tasks with no judgment required — but structured differently from agents
- Examples: file movement, scheduled notifications, data formatting, report generation
- These are pipelines, not agents — they run on triggers, not conversations
- Tools: n8n, Zapier, Make, scripts

#### Category 4 — Human Only (Humano Insubstituível)
- Requires creativity, final responsibility, signatures, strategic decisions, relationship
- Examples: closing a high-ticket sale, firing an employee, defining company positioning, building client trust
- No delegation possible — and that's correct

**The goal of the squad:**
> "O objetivo é que o humano seja o responsável e a IA ou o código sejam os executores — sempre que possível. Isso libera sua hora para o que só você consegue fazer."

**Workshop moment — Worksheet 2 (15 min):**
For each activity identified in Block 3, apply the Delegation Matrix:
- Category: Full Agent / Hybrid / Worker / Human Only
- Agent authority level: Draft / Executa / Decide

---

### BLOCK 5 — Real Results to Anchor Belief (10 min)

Use these concrete examples from mapped businesses to make the transformation tangible:

| Process | Before | After |
|---------|--------|-------|
| Project opening (folders, docs, links) | 45 minutes | 3 minutes |
| Briefing analysis | 3 hours | 3 minutes |
| Landing page creation (55 microtasks) | 12 days | 2 hours |
| Dynamic caption generation | Manual per client | Automatic (agent reads client rules from L2) |
| Journey Log | None | Every action fingerprinted → automatic efficiency analysis |

---

### BLOCK 6 — The Attack Plan (10 min)

**Closing move of the session:**

By end of Session 01, the client should have:
1. ✅ Complete list of weekly activities (Worksheet 1)
2. ✅ Each activity classified in the Delegation Matrix (Worksheet 2)
3. ✅ Clear answer: which SECTOR of the business gets the squad first?

**The selection criteria for first squad:**
- Highest time loss in Category 1 and 3 activities
- Most repetitive handoffs between areas
- Where errors/rework happen most frequently

**A névoa levanta — revelação da trilha personalizada:**

Com base no diagnóstico desta sessão, a trilha personalizada S09–S17 é revelada. Antes da S01, essas sessões aparecem como `[???]` no mapa. Agora o mapa abre.

Mostre ao cliente quais 9 das 12 sessões de especialização se aplicam ao negócio dele — na sequência certa. Esse momento transforma "um programa" em "O SEU programa."

> "Esse é o mapa que vai guiar a sua jornada daqui pra frente. As sessões que você vai fazer não são as mesmas de todo mundo — elas são definidas pelo que a gente acabou de mapear."

**Closing message:**
> "A gente identificou onde está o maior potencial. Antes de montar o squad, você precisa das ferramentas certas. Na próxima sessão você vai instalar e configurar o ambiente onde tudo vai rodar: o Claude Code — o terminal neural que conecta você aos seus agentes. Quando o ambiente estiver pronto, a gente constrói o squad em cima dele."

---

## Key Concepts Cheat Sheet (for Arthur to reference live)

| Concept | One-line explanation |
|---------|---------------------|
| 3 levels (L0–L3) | Strategic → Tactical → Operational. Each inherits from the level above |
| Microtarefa | The atom of a process: stop, think, click, execute |
| Migalhas de Pão | Context chunks for AI — right amount, right sequence, prevents hallucination |
| Tarefas D | Bureaucratic, repetitive tasks — first targets for full agent delegation |
| Valor-hora | The human's time is expensive — only justify presence where no agent can replace |
| Handoff Checklist | Gate before passing work between areas — ensures only 100% correct work advances |
| Journey Log | Fingerprint of every action — enables automatic process efficiency analysis |
| Squad = empresa | Define scope before deploying, just like hiring has job descriptions |

---

## Session Outputs (what client delivers before Session 02)

- [ ] Worksheet 1A filled: all weekly activities + time estimates
- [ ] Worksheet 1B answered: 3 strategic questions
- [ ] Worksheet 2 filled: delegation matrix for all activities
- [ ] Identified: priority sector for first squad

---

## Notes for Personalization (fill after receiving client's brief)

> When client's pre-filled brief arrives, revisit Blocks 3 and 4 to use THEIR specific activities as examples instead of generic ones. The concept structure stays — only the examples change.

---

## Source Material

- Video: "Como usar IA e ClickUp pra ESCALAR seus processos" (Sincra methodology — Alan Nicolas, Thiago Finch, Pedro Valério)
- NotebookLM: https://notebooklm.google.com/notebook/607cf50c-6fe6-410d-b2e5-f7d4b4f70638
- Brief template: MAPEANDO O NEGÓCIO.pdf
- Timestamps used: -2:04:00 to -1:13:00 and -51:00 to -4:50

---

---

## RPG CARD — S01

### 🏆 TÍTULO DESBLOQUEADO: EXPLORADOR
*"Mapeou o terreno. Agora sabe onde pisará."*

| Campo | Conteúdo |
|-------|---------|
| **DESAFIO (gate)** | Worksheets 1A + 1B + 2 preenchidas. Mínimo 10 tarefas categorizadas, 3 processos mapeados em L2, setor prioritário identificado e justificado. |
| **ARTEFATOS** | Worksheet 1A (Hierarquia L0–L3) · Worksheet 1B (3 perguntas estratégicas) · Worksheet 2 (Matriz de Delegação) · Plano de Ataque · Mapa da Névoa (trilha S09–S17 revelada) |
| **HABILIDADE** | Classificar qualquer tarefa nas 4 categorias de execução: Agente Completo / Híbrido / Worker / Humano |
| **PRÓXIMA SESSÃO** | S02 — †CODE I · Ambiente — instalação e configuração do Claude Code |

---

## Connections

- **Programa:** [[trilha-runa-21-sessoes]] — roadmap completo das 21 sessões
- **Product:** [[runa-mentoria-prd]] — PRD completo RUNA SYSTEMS
- **Next session:** S02 — †CODE I — Ambiente (instalação e configuração do Claude Code)
- **Brief template:** MAPEANDO O NEGÓCIO.pdf → enviar ao cliente antes da S01
- **Artefatos:** [[worksheet-1a-hierarquia-l0-l3|Worksheet 1A — Hierarquia L0–L3]] · [[worksheet-1b-tarefas-vs-microtarefas|Worksheet 1B — Tarefas vs Microtarefas]] · [[worksheet-2-matriz-delegacao|Worksheet 2 — Matriz de Delegação]]
