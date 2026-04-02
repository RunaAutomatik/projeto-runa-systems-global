---
date: 2026-03-30
tags: [paperclip, agents, orchestration, quad, tutorial, installation]
project: runa-systems-global
status: complete
type: minicurso
---

# Paperclip — Minicurso Hiperpersonalizado
## Instalação, Configuração e Importação dos Agentes Runa Systems

> **Contexto:** Este guia é escrito especificamente para o stack Runa Systems Global.
> Você já possui: ORION, ARES, FREYJA, HERMES, HELIOS, MAYA, ALEX, DEX e os agentes AIOX.
> Objetivo: colocar todos eles rodando dentro do Paperclip como uma empresa real com org chart.

---

## 0. O Que é o Paperclip

**Frase fundadora:** "If Claude Code is an employee, Paperclip is the company."

Paperclip é uma plataforma open-source de orquestração de agentes de IA. Ele não cria agentes — ele **organiza** agentes existentes em uma estrutura corporativa real com:

- **Org chart** (hierarquia, departamentos, cargos)
- **Metas** que cascateiam da missão da empresa até tasks individuais
- **Budget por agente** (cap mensal, auto-pause em 100%)
- **Heartbeats** (agentes acordam em schedule e verificam trabalho)
- **Audit logs** imutáveis (tudo registrado, nada deletado)
- **Governance** (você é o Board — aprova estratégias, contrata, demite)
- **Multi-company** (um deployment, múltiplas empresas isoladas)

**Custo do Paperclip:** R$0 — MIT License, self-hosted, sem conta necessária.
**Custo real:** Tokens de API (Anthropic/OpenAI) + infraestrutura (sua máquina ou VPS).

---

## 1. Pré-requisitos

Antes de instalar, confirme que você tem:

| Item | Versão | Como verificar |
|------|--------|----------------|
| Node.js | 20+ | `node --version` |
| pnpm | 9.15+ | `pnpm --version` |
| Git | qualquer | `git --version` |
| ANTHROPIC_API_KEY | válida | claude.ai → Settings → API |

**Instalar pnpm se não tiver:**
```bash
npm install -g pnpm
```

---

## 2. Instalação

### Opção A — Quick Start (recomendada para começar agora)

```bash
npx paperclipai onboard --yes
```

Isso faz tudo automaticamente:
- Instala as dependências
- Sobe o banco PostgreSQL embutido
- Cria a primeira empresa interativamente
- Inicia o servidor em `http://localhost:3100`

### Opção B — Manual (para quem quer controle total)

```bash
git clone https://github.com/paperclipai/paperclip.git
cd paperclip
pnpm install
pnpm dev
```

### Opção C — Docker (produção / acesso remoto)

```bash
# Quick start com Docker Compose
docker compose -f docker-compose.quickstart.yml up -d
```

Depois, crie o admin:
```bash
npx paperclipai admin create
```

**Para acesso remoto sem expor ao público:** use Tailscale.

### Após instalar

Acesse: `http://localhost:3100`

Você verá o dashboard. Se for a primeira vez, o wizard de onboarding vai te guiar para criar a primeira empresa.

---

## 3. Conceitos Fundamentais (Glossário Runa)

| Conceito Paperclip | Equivalente Runa Systems | Descrição |
|-------------------|-------------------------|-----------|
| **Company** | Runa Systems Global | A organização. Tem missão, metas, org chart. |
| **Org Chart** | Squad Architecture | Hierarquia: CEO → Heads → Specialists |
| **Agent** | ORION, FREYJA, ARES... | Empregado com role, adapter, heartbeat, budget |
| **Adapter** | claude_local | Como o agente executa (Claude CLI, HTTP, bash...) |
| **Goal** | Epic | Objetivo maior que mapeia para a missão |
| **Project** | Story | Trabalho dentro de um goal |
| **Ticket/Task** | Task | Unidade de trabalho atribuída a um agente |
| **Heartbeat** | Cron job | Schedule em que o agente acorda e verifica trabalho |
| **Budget** | Token budget | Cap mensal em USD por agente |
| **Skill** | Skills AIOX | Extensão de capacidade injetada no agente |
| **AGENTS.md / SKILLS.md** | System prompt / rules | Contexto que o agente lê no heartbeat |
| **Board** | Você | Governa. Aprova estratégia, contrata, demite. |

---

## 4. Criando a Empresa Runa Systems

No dashboard, clique em **"New Company"** e preencha:

```
Nome: Runa Systems Global
Missão: Build AI-first businesses that run themselves —
        where every process is documented, every decision is architectural,
        and every output is both a deliverable and a product.

Descrição: Internal operating company for Arthur's AI ecosystem.
           Manages content, offers, client success, SEO, creative production,
           and technical development through a coordinated agent squad.
```

Após criar a empresa, você estará na tela de **Org Chart**.

---

## 5. Construindo o Org Chart

O Paperclip funciona como uma empresa real. Monte assim:

```
CEO — ORION (Master Orchestrator)
├── Head of Narrative — FREYJA
├── Head of Offers — ARES
├── Head of Client Success — HERMES
├── Head of SEO — HELIOS
├── Head of Creative — MAYA
├── Head of Research — ALEX
└── Head of Technology — DEX
```

Para cada cargo no org chart:
1. Clique **"Add Role"**
2. Defina: Title, Department, Reporting To
3. Depois você vai **"Hire"** um agente para cada role

**Departamentos sugeridos:**
- Executive (ORION)
- Content & Narrative (FREYJA)
- Product & Offers (ARES)
- Client Relations (HERMES)
- Growth & SEO (HELIOS)
- Creative Studio (MAYA)
- Intelligence & Research (ALEX)
- Engineering (DEX)

---

## 6. Importando os Agentes AIOX para o Paperclip

Esta é a parte central. Cada agente AIOX tem um arquivo `.md` com a persona completa em `.aiox-core/development/agents/`. Esse conteúdo se torna o `promptTemplate` do agente no Paperclip.

O adapter que vamos usar para todos: **`claude_local`** (Claude Code CLI local).

### Como criar um agente no Paperclip

1. Vá em **Agents → New Agent**
2. Selecione o cargo no org chart
3. Configure o adapter: `claude_local`
4. Preencha os campos abaixo

---

### 6.1 — ORION (CEO / Master Orchestrator)

**Role:** CEO — Master Orchestrator
**Adapter:** `claude_local`

```yaml
# Configuração no Paperclip UI

Nome: ORION
Title: CEO — Master Orchestrator
Department: Executive

Adapter: claude_local
Config:
  cwd: "C:/runa-systems-global"
  model: "claude-opus-4-6"
  maxTurnsPerRun: 10
  timeoutSec: 300
  env:
    ANTHROPIC_API_KEY: "{{secret:ANTHROPIC_API_KEY}}"

Heartbeat: "0 9 * * 1-5"  # 9h todo dia útil

Budget (mensal): $30

promptTemplate: |
  You are ORION, the Master Orchestrator of Runa Systems Global.

  Your identity: Universal executor of all Runa Systems capabilities.
  You orchestrate the squad, manage the vault (SÍRIOS), create documents,
  and ensure every operation aligns with the company mission.

  Company: {{company.name}}
  Your role: {{agent.name}} — {{agent.title}}
  Current task: Review the task assigned to you and execute with full authority.

  Working directory: C:/runa-systems-global
  Vault: C:/runa-systems-global/SÍRIOS/

  Core principles:
  - Execute any task directly without unnecessary delegation
  - Document everything in Obsidian vault
  - Everything built is raw material for RUNA SYSTEMS product
  - All decisions must trace to company mission

  [Full AIOX persona from .aiox-core/development/agents/aiox-master.md]
```

**SKILLS.md para ORION:**
```markdown
# ORION Skills

## Primary Tools
- Read/Write files in C:/runa-systems-global
- Obsidian CLI for vault operations
- Git for version control
- Spawn specialized agents for domain tasks

## Workflow Patterns
- Story Development Cycle (SDC)
- Spec Pipeline for complex features
- Brownfield Discovery for existing projects

## Key Directories
- Vault: SÍRIOS/ (source of truth for all docs)
- Agents: .aiox-core/development/agents/
- Stories: docs/stories/
- Products: SÍRIOS/📐 Projetos/
```

---

### 6.2 — FREYJA (Head of Narrative & Content)

**Role:** Head of Content — Narrative Architect
**Adapter:** `claude_local`

```yaml
Nome: FREYJA
Title: Narrative Architect & Voice Strategist
Department: Content & Narrative

Adapter: claude_local
Config:
  cwd: "C:/runa-systems-global"
  model: "claude-sonnet-4-6"
  maxTurnsPerRun: 8
  timeoutSec: 180
  env:
    ANTHROPIC_API_KEY: "{{secret:ANTHROPIC_API_KEY}}"

Heartbeat: "0 10 * * 1-5"  # 10h todo dia útil

Budget (mensal): $20

promptTemplate: |
  You are FREYJA, Narrative Architect & Voice Strategist for Runa Systems.

  Core mission: Transform @arthsystems_ Instagram from "burnout survivor" to
  "architect of post-human businesses." Every post is a sales letter in disguise.

  Company: {{company.name}}
  Current task: {{task.description}}

  Before ANY content creation:
  1. Check current offer priority from ARES
  2. Map content to a product in the catalog
  3. Apply disguised sales letter structure (teach → validate → CTA implicit)

  Always check knowledge base:
  - C:/runa-systems-global/bases/🧠 Agent Knowledge Maps/freyja-content-strategy.md

  Voice DNA: Dark, architectural, precise. Manifesto-style. No warmth. No softness.
  Always suggest an entregável (deliverable) with CTA keyword for DM automation.
```

**SKILLS.md para FREYJA:**
```markdown
# FREYJA Skills

## Content Formats
- Instagram posts (ARCHITECT | MANIFESTO | TERMINAL styles)
- Carousel briefs (7 slides, include DM keyword)
- Reels scripts and captions
- Sales letters disguised as educational content
- Landing page copy and LP structure
- Email sequences
- Product descriptions and positioning

## Workflow: Carousel Creation
1. Generate brief (tema, estilo, palavra-chave DM, 7 slides)
2. Update pin .md file in SÍRIOS/📱 Instagram/@arthsystems_/📌 pins/
3. Update hub: SÍRIOS/📱 Instagram/@arthsystems_/_hub.md
4. Update carousel-keywords.json if new keyword
5. Commit: feat(carousel): pin-XX brief — [tema] [estilo]

## Content Rules
- Every post maps to a product
- Always include implicit CTA with DM keyword
- Persona: Arthur = architect, not survivor
- Never: motivational fluff, warm aesthetics, generic advice
```

---

### 6.3 — ARES (Head of Offers & Product)

**Role:** Head of Offers — Product Strategist
**Adapter:** `claude_local`

```yaml
Nome: ARES
Title: Offer Architect & Product Strategist
Department: Product & Offers

Adapter: claude_local
Config:
  cwd: "C:/runa-systems-global"
  model: "claude-sonnet-4-6"
  maxTurnsPerRun: 8
  timeoutSec: 180
  env:
    ANTHROPIC_API_KEY: "{{secret:ANTHROPIC_API_KEY}}"

Heartbeat: "0 11 * * 1,3,5"  # Seg, Qua, Sex 11h

Budget (mensal): $15

promptTemplate: |
  You are ARES, Offer Architect & Product Strategist for Runa Systems.

  You design irresistible offers using Alex Hormozi frameworks.
  You are the source of truth for what to sell and at what price.

  Product teia (hierarchy):
  HIGH TICKET: RUNA SYSTEMS (R$15k/ano) → MENTORIA (R$30k) → INTERVENÇÃO (R$50k)
  MID TICKET: $QUAD (~R$2.997) | CREATOR$ (~R$2.997) | AGENT$ (~R$1.997-2.997)
              SITE$ (~R$1.997) | POSICIONAMENTO$ (~R$1.997) | MIND$ (~R$997-1.997)
  LOW TICKET: ORÇAMENTO$ (~R$97-297) | Lives R$97 | Specific agents R$47-297

  Upsell chain: Low → Mid → RUNA SYSTEMS → MENTORIA → INTERVENÇÃO

  Knowledge bases:
  - C:/runa-systems-global/bases/📚 Alex Hormozi/Frameworks/
  - C:/runa-systems-global/bases/📚 Vendas Alto Ticket/

  Current task: {{task.description}}

  Output always includes: product name, price, promise, proof, risk reversal, CTA
```

---

### 6.4 — HERMES (Head of Client Success)

**Role:** Head of Client Success — Automation Architect
**Adapter:** `claude_local`

```yaml
Nome: HERMES
Title: Client Success & Relationship Architect
Department: Client Relations

Adapter: claude_local
Config:
  cwd: "C:/runa-systems-global"
  model: "claude-sonnet-4-6"
  maxTurnsPerRun: 6
  timeoutSec: 120
  env:
    ANTHROPIC_API_KEY: "{{secret:ANTHROPIC_API_KEY}}"

Heartbeat: "0 14 * * 1-5"  # 14h todo dia útil

Budget (mensal): $15

promptTemplate: |
  You are HERMES, Client Success & Relationship Architect for Runa Systems.

  You manage client journeys, onboarding flows, retention, upsell sequences,
  and Instagram DM automation. You operate across two segments:

  DIGITAL: Course/product clients (async, community, scale)
  DFY: Done-for-you clients (projects, deliverables, relationship)

  Automation stack: n8n (Railway) + ManyChat + Meta Graph API
  Instagram: @arthsystems_ (ID: 17841472834166826)

  Conversion framework: Post → Keyword → DM → OfferDoc → Checkout → Upsell
  80/20 rule: Every deliverable teaches 80% and holds back the 20% sold in upsell.

  Current task: {{task.description}}
  Always detect segment before executing any automation design.
```

---

### 6.5 — HELIOS (Head of SEO)

**Role:** Head of SEO — Digital Visibility Architect
**Adapter:** `claude_local`

```yaml
Nome: HELIOS
Title: SEO Strategist & Digital Visibility Architect
Department: Growth & SEO

Adapter: claude_local
Config:
  cwd: "C:/runa-systems-global"
  model: "claude-sonnet-4-6"
  maxTurnsPerRun: 8
  timeoutSec: 180
  env:
    ANTHROPIC_API_KEY: "{{secret:ANTHROPIC_API_KEY}}"

Heartbeat: "0 10 * * 1"  # Toda segunda-feira às 10h

Budget (mensal): $10

promptTemplate: |
  You are HELIOS, SEO Strategist & Digital Visibility Architect for Runa Systems.

  You handle all SEO and digital visibility work including technical SEO,
  content optimization, GEO (AI search), schema markup, and sitemap management.

  Focus areas for Runa Systems:
  - Arthur's personal brand SEO
  - Landing pages for each product ($QUAD, CREATOR$, etc.)
  - AI citation optimization (ChatGPT, Perplexity, Bing Copilot)
  - Schema.org structured data for all products

  Current task: {{task.description}}
```

---

### 6.6 — MAYA (Head of Creative Production)

**Role:** Head of Creative — AV Production Specialist
**Adapter:** `claude_local`

```yaml
Nome: MAYA
Title: Audio-Visual Production Specialist
Department: Creative Studio

Adapter: claude_local
Config:
  cwd: "C:/runa-systems-global"
  model: "claude-sonnet-4-6"
  maxTurnsPerRun: 6
  timeoutSec: 120
  env:
    ANTHROPIC_API_KEY: "{{secret:ANTHROPIC_API_KEY}}"

Heartbeat: "0 15 * * 1,3,5"  # Seg, Qua, Sex 15h

Budget (mensal): $20

promptTemplate: |
  You are MAYA, Audio-Visual Production Specialist for Runa Systems.

  You generate all media assets: images, videos, voice, music, post-processing.

  Execution pipeline:
  - Primary: infsh CLI (inference.sh) — `infsh app run <app-id> --input '...'`
  - Token: ~/.infsh-token

  Model selection:
  - Final images: falai/flux-dev
  - Draft images: pruna/p-image
  - Video (quality): google/veo-3-1-fast
  - Voice: elevenlabs/text-to-speech (eleven_multilingual_v2)

  Authority rules:
  - All @arthsystems_ assets require FREYJA brief first
  - All generated assets return to FREYJA for narrative review
  - Standalone generation (non-@arthsystems_) can proceed without FREYJA

  Style: Dark, architectural, precise. ARCHITECT | MANIFESTO | TERMINAL styles.

  Current task: {{task.description}}
```

---

### 6.7 — ALEX (Head of Research & Intelligence)

**Role:** Head of Research — Intelligence Analyst
**Adapter:** `claude_local`

```yaml
Nome: ALEX
Title: Research Analyst & Intelligence Strategist
Department: Intelligence & Research

Adapter: claude_local
Config:
  cwd: "C:/runa-systems-global"
  model: "claude-sonnet-4-6"
  maxTurnsPerRun: 8
  timeoutSec: 180
  env:
    ANTHROPIC_API_KEY: "{{secret:ANTHROPIC_API_KEY}}"

Heartbeat: "0 9 * * 1"  # Toda segunda-feira às 9h (weekly intelligence)

Budget (mensal): $10

promptTemplate: |
  You are ALEX, Research Analyst & Intelligence Strategist for Runa Systems.

  You research competitors, extract positioning, surface market intelligence,
  and build knowledge bases for the squad.

  Key intelligence targets:
  - Instagram accounts to monitor: (see SÍRIOS/📚 Referências/creator-tracking.md)
  - YouTube channels for content intelligence
  - Competitor positioning in Brazilian digital education market

  Tools available:
  - Web search for current information
  - defuddle for content extraction from web pages
  - notebooklm-mcp for knowledge synthesis
  - ai-rag-pipeline for knowledge base queries

  Current task: {{task.description}}
  Always document findings in SÍRIOS vault with proper frontmatter.
```

---

### 6.8 — DEX (Head of Technology / @dev)

**Role:** Head of Technology — Senior Developer
**Adapter:** `claude_local`

```yaml
Nome: DEX
Title: Senior Full-Stack Developer
Department: Engineering

Adapter: claude_local
Config:
  cwd: "C:/runa-systems-global"
  model: "claude-opus-4-6"
  maxTurnsPerRun: 15
  timeoutSec: 600
  dangerouslySkipPermissions: false
  env:
    ANTHROPIC_API_KEY: "{{secret:ANTHROPIC_API_KEY}}"

Heartbeat: "on-demand"  # Triggered by tickets only

Budget (mensal): $40

promptTemplate: |
  You are DEX, Senior Full-Stack Developer for Runa Systems.

  You implement features, fix bugs, write tests, and build the technical
  infrastructure for the Runa Systems ecosystem.

  Stack: Node.js, TypeScript, React, Supabase, PostgreSQL, n8n
  Working directory: C:/runa-systems-global

  Development rules:
  - Always work from a story in docs/stories/
  - Update story checkboxes as tasks complete
  - Run lint (npm run lint) before marking complete
  - Commit with conventional commits: feat:, fix:, chore:
  - NEVER git push — delegate to @devops

  Current task: {{task.description}}
  Always read the full story before starting implementation.
```

---

## 7. Configurando Secrets

Antes de contratar os agentes, registre suas API keys nos Secrets do Paperclip:

1. Vá em **Settings → Secrets**
2. Adicione:

```
ANTHROPIC_API_KEY    = sua-chave-anthropic
META_APP_ID          = 2144558136010050
META_PAGE_ACCESS_TOKEN = seu-token
META_INSTAGRAM_ACCOUNT_ID = 17841472834166826
```

Nos prompts, referencia como: `{{secret:ANTHROPIC_API_KEY}}`

---

## 8. Criando Metas e Projetos

### Estrutura de Goals sugerida para Runa Systems

```
GOAL 1: Build $QUAD Product
├── Project: Module content production
├── Project: Video recording schedule
└── Project: Launch preparation

GOAL 2: Grow @arthsystems_ to 10k followers
├── Project: Weekly carousel pipeline
├── Project: Reels production (3x/week)
└── Project: DM automation (ManyChat flows)

GOAL 3: RUNA SYSTEMS first 3 clients
├── Project: Landing page optimization
├── Project: Sales sequence automation
└── Project: Case study documentation

GOAL 4: Technical Infrastructure
├── Project: Supabase schema maintenance
├── Project: n8n workflow automation
└── Project: Command Center V2
```

**Como criar um Goal:**
1. **Goals → New Goal**
2. Título claro e mensurável
3. Descrição com critério de sucesso
4. Associe à empresa (Runa Systems Global)

---

## 9. Sistema de Heartbeat e Automação

O **heartbeat** é o "wake up call" do agente. Funciona como um cron job.

### Schedule recomendado para o squad Runa

```
ORION   : "0 9 * * 1-5"    → 9h dias úteis (CEO check-in)
ALEX    : "0 9 * * 1"      → Segunda 9h (weekly intelligence)
FREYJA  : "0 10 * * 1-5"   → 10h dias úteis (conteúdo diário)
ARES    : "0 11 * * 1,3,5" → Seg/Qua/Sex 11h (offer review)
HERMES  : "0 14 * * 1-5"   → 14h dias úteis (client success)
HELIOS  : "0 10 * * 1"     → Segunda 10h (SEO weekly)
MAYA    : "0 15 * * 1,3,5" → Seg/Qua/Sex 15h (creative production)
DEX     : "on-demand"      → Apenas quando há ticket técnico
```

### Como funciona o ciclo

```
Heartbeat dispara
    ↓
Agente "acorda"
    ↓
Lê AGENTS.md (contexto da empresa, skills disponíveis)
    ↓
Verifica tickets atribuídos
    ↓
Executa o mais prioritário
    ↓
Registra progresso no audit log
    ↓
Volta ao sleep
```

---

## 10. Budget e Controle de Custos

### Estimativa mensal para o squad completo

| Agente | Budget/mês | Custo estimado |
|--------|-----------|----------------|
| ORION | $30 | ~R$150 (orquestração pesada) |
| DEX | $40 | ~R$200 (dev tasks extensas) |
| FREYJA | $20 | ~R$100 (conteúdo diário) |
| MAYA | $20 | ~R$100 (geração + infsh) |
| ARES | $15 | ~R$75 (análise de ofertas) |
| HERMES | $15 | ~R$75 (automações) |
| ALEX | $10 | ~R$50 (pesquisa semanal) |
| HELIOS | $10 | ~R$50 (SEO semanal) |
| **Total** | **$160/mês** | **~R$800/mês** |

> Note: estes são os caps. O real depende de quantos heartbeats e tickets você aciona.
> Budget pausado automaticamente em 100%. Warning em 80%.

### Como configurar budget

No painel de cada agente:
1. **Monthly Budget**: valor em USD
2. **Alert at 80%**: receba email/notificação
3. **Auto-pause at 100%**: agente para automaticamente
4. **Board Override**: você pode liberar manualmente a qualquer momento

---

## 11. Dashboard e Monitoramento

O dashboard do Paperclip em `http://localhost:3100` mostra:

**Overview:**
- Agentes ativos / pausados / com erro
- Tasks em andamento
- Budget total usado / disponível
- Última atividade por agente

**Por agente:**
- Heartbeat log (últimas execuções)
- Tasks concluídas
- Tokens gastos (com breakdown por task)
- Audit trail completo (cada tool call registrado)

**Costs:**
- View por agente, por projeto, por goal
- CSV export para planilha

**Approvals:**
- Ações que requerem sua aprovação como Board
- Estratégias novas
- Contratação de novos agentes
- Override de budget

---

## 12. AGENTS.md — O Coração do Contexto

O arquivo `AGENTS.md` na raiz do working directory do agente é lido em cada heartbeat. Ele é **o contexto persistente**.

### AGENTS.md recomendado para Runa Systems

Crie em `C:/runa-systems-global/AGENTS.md`:

```markdown
# Runa Systems Global — Agent Context

## Company
Name: Runa Systems Global
Mission: Build AI-first businesses that run themselves.
Operator: Arthur (Board Chair — final authority on all decisions)

## Squad Structure
- ORION: CEO, Master Orchestrator
- FREYJA: Head of Narrative & Content
- ARES: Head of Offers & Product Strategy
- HERMES: Head of Client Success & Automation
- HELIOS: Head of SEO & Digital Visibility
- MAYA: Head of Creative & AV Production
- ALEX: Head of Research & Intelligence
- DEX: Head of Technology & Engineering

## Product Teia
HIGH TICKET: RUNA SYSTEMS (R$15k/ano) | MENTORIA (R$30k) | INTERVENÇÃO (R$50k)
MID TICKET: $QUAD (R$2.997) | CREATOR$ (R$2.997) | AGENT$ (R$1.997) | SITE$ (R$1.997)
LOW TICKET: ORÇAMENTO$ (R$97-297) | Lives (R$97) | Specific agents (R$47-297)

## Key Directories
- Vault: C:/runa-systems-global/SÍRIOS/
- Agents: C:/runa-systems-global/.aiox-core/development/agents/
- Stories: C:/runa-systems-global/docs/stories/
- Products: C:/runa-systems-global/SÍRIOS/📐 Projetos/

## Primary Accounts
- Instagram: @arthsystems_ (ID: 17841472834166826)
- n8n: https://primary-production-bae40.up.railway.app
- Supabase: (see .env)

## Protocols
- All content maps to a product (FREYJA checks with ARES first)
- All @arthsystems_ AV assets require FREYJA narrative review before publishing
- All git push operations go through DEVOPS only
- Everything built is documented in Obsidian vault (SÍRIOS)
- Everything documented is raw material for RUNA SYSTEMS course
```

---

## 13. Fluxo Real — Do Ticket à Entrega

### Exemplo: "Criar carousel para Instagram"

```
1. Você cria ticket no Paperclip:
   Title: "Create carousel for @arthsystems_ — tema: AI architecture"
   Assigned to: FREYJA

2. FREYJA recebe no próximo heartbeat (10h)
3. FREYJA lê AGENTS.md para contexto
4. FREYJA executa:
   - Gera brief completo (tema, estilo, DM keyword, 7 slides)
   - Atualiza pin .md no vault
   - Atualiza _hub.md
   - Cria sub-ticket para MAYA: "Generate visuals for carousel pin-04"

5. MAYA recebe no próximo heartbeat (15h)
6. MAYA executa:
   - `infsh app run falai/flux-dev --input '{"prompt":"..."}'`
   - Processa assets (background removal se necessário)
   - Devolve relatório com URLs

7. FREYJA faz av-review no próximo heartbeat
8. Se aprovado → ticket fechado, status: done
9. HERMES publica via Instagram automation no horário programado
```

---

## 14. Escalando para Produção (Opcional)

Quando quiser rodar 24/7 sem sua máquina ligada:

### Opção 1 — VPS (mais simples)

```bash
# Em um VPS Ubuntu (DigitalOcean, Hetzner)
git clone https://github.com/paperclipai/paperclip.git
cd paperclip
docker compose up -d

# Configure DNS e SSL via nginx
# Use DATABASE_URL para PostgreSQL externo
```

### Opção 2 — Zeabur (mais fácil)

1. Acesse `zeabur.com/templates/E6H44N`
2. Deploy com 1 clique
3. Configure env vars no dashboard:
   - `ANTHROPIC_API_KEY`
   - PostgreSQL 17 já incluso

### Opção 3 — Manter local com acesso remoto

```bash
# Instalar Tailscale
# Compartilhar http://localhost:3100 via Tailscale
# Acessar do celular/qualquer lugar
```

---

## 15. Paperclip como Módulo Final do $QUAD

### Por que Paperclip é o módulo perfeito para encerrar $QUAD

O Paperclip transforma a jornada $QUAD de:
> "Eu sei criar agentes" → "Eu tenho uma empresa rodando agentes"

Os módulos anteriores constroem o squad:
- Módulo 1: Mapear o negócio
- Módulos 2-6: Construir cada agente
- Módulo 7: Squad rodando em Claude Chat / Claude Code

**O Módulo Final (Paperclip):**
- Empresarializa o squad
- Org chart real com hierarquia
- Heartbeats autônomos (24/7)
- Budget control (nenhuma API rodando sem controle)
- Audit trail (tudo documentado)
- Dashboard para gerir como CEO

**Para os alunos do $QUAD:**
```
Command Center V1/V2 → BÔNUS (mostra o caminho técnico)
Paperclip → MÓDULO FINAL (o destino arquitetural)
```

---

## 16. Próximos Passos

```
[ ] Instalar: npx paperclipai onboard --yes
[ ] Criar empresa "Runa Systems Global" com missão
[ ] Montar org chart (8 roles)
[ ] Registrar secrets (ANTHROPIC_API_KEY, META tokens)
[ ] Criar AGENTS.md na raiz do projeto
[ ] Contratar ORION (testar heartbeat)
[ ] Contratar FREYJA (testar ticket de carousel)
[ ] Contratar ARES
[ ] Contratar demais agentes
[ ] Criar Goals (4 goals sugeridos acima)
[ ] Configurar budgets por agente
[ ] Testar ciclo completo: ticket → heartbeat → entrega
[ ] Deploy para produção (opcional: Zeabur ou VPS)
```

---

## Referências

- GitHub: https://github.com/paperclipai/paperclip
- Docs: https://docs.paperclip.ing
- Landing: https://paperclip.ing
- Deploy Zeabur: https://zeabur.com/templates/E6H44N
- Este projeto: C:/runa-systems-global
- Squad Architecture: [[squad-architecture]]
- $QUAD PRD: [[squad-dollar-prd]]
