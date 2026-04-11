---
date: 2026-03-30
tags: [product, squad, paperclip, prd, final-module, quad, orchestration]
project: runa-systems-global
status: approved — ready for production
type: product-prd-addendum
parent: squad-dollar-prd
---

# $QUAD — Módulo Final: Paperclip Integration
## PRD Addendum — "A Empresa que Se Governa"

> **Connects to:** [[squad-dollar-prd]]
> **Position:** Final module — the architectural destination
> **Tagline:** "You built the squad. Now build the company."

---

## Executive Summary

The Paperclip module is the final act of $QUAD — it takes everything the student built in Modules 1-7 (orchestrator + 5 specialist agents running in Claude) and **empresarializes** it into a real, self-governing company with org chart, budget control, heartbeat automation, and governance.

This isn't just another tool tutorial. It's the **architectural evolution** from "I have agents" to "I have a company."

**Strategic position:**
- Command Center V1/V2 → **BONUS** (technical path, optional)
- Paperclip → **MÓDULO FINAL OBRIGATÓRIO** (architectural destination)

**Why Paperclip wins the final module:**
- Zero cost for the platform (MIT, self-hosted)
- Plugs directly into the agents built in Modules 2-7
- Visual proof that the squad is a real company (not just prompts)
- Creates an "I want this for my company" moment → RUNA SYSTEMS upsell

---

## The Problem This Solves

After building all agents in $QUAD, students face the "management problem":

> "I have 6 agents. Now what? How do I coordinate them? How do I know what's running? How do I control costs? How do I assign work without being in the middle of everything?"

Running each agent manually in separate Claude windows = chaos at scale.
The student needs a **control plane** — and Paperclip is exactly that.

---

## Module Architecture

### MODULE 8 — A EMPRESA QUE SE GOVERNA *(Paperclip Final Module)*

**Duration:** ~3 hours total content (5 lessons)
**Format:** Screen recording + guided implementation
**Deliverable:** Student's squad running in Paperclip as a self-governing company

---

### Lesson 8.0 — Why This Changes Everything (10 min)

**Video + Text**

Content:
- The difference between "having agents" and "having a company"
- What breaks when you manage 6 agents manually
- The 3 problems Paperclip solves: coordination, budget, governance
- Live demo: Arthur's Runa Systems squad before (chaos) vs after (Paperclip)

**Key hook:** Show the org chart of Runa Systems running in Paperclip.
The student recognizes their own agents — FREYJA, ARES, HERMES — now employees in a company.

---

### Lesson 8.1 — Instalação e Configuração (20 min)

**Screen Recording + Text Guide**

Content:
1. Pre-requisites check (Node.js 20, pnpm, API key)
2. Single command install: `npx paperclipai onboard --yes`
3. Dashboard walkthrough: what each section does
4. Creating the company: name, mission, description
5. Secrets management: storing API keys safely

**Deliverable:** Student has Paperclip running with their company created.

**Common pitfall to address:** Node.js version. Most students will have 18. Fix: `nvm install 20 && nvm use 20`

---

### Lesson 8.2 — Construindo o Org Chart (25 min)

**Screen Recording + Template**

Content:
1. The org chart logic: who reports to who and why
2. Mapping $QUAD's agent squad to Paperclip roles
3. Live build: creating all 6 positions in the UI
4. The CEO as orchestrator (ORION / student's orchestrator)
5. Departments: why they matter for budget segmentation

**Template provided:**
```
STUDENT'S COMPANY NAME
Mission: [from Module 1 business mapping]

CEO (Orchestrator)
├── Content Agent (from Module 4)
├── Offer Agent (from Module 3)
├── Automation Agent (from Module 5)
├── Intelligence Agent (from Module 6)
└── [Optional] Creative Agent
```

**Deliverable:** Student has their full org chart mapped.

---

### Lesson 8.3 — Importando Seus Agentes (45 min)

**Screen Recording — The Core Lesson**

Content:
1. Understanding the `claude_local` adapter
2. Anatomy of an agent configuration:
   - `cwd` (working directory)
   - `model` (which Claude)
   - `promptTemplate` (their system prompt from $QUAD)
   - `env` (secrets)
   - `maxTurnsPerRun`
3. **THE KEY INSIGHT:** The system prompts built in Modules 2-7 → paste directly into `promptTemplate`
4. Live import: configuring all 5 specialist agents + orchestrator
5. Writing `AGENTS.md` — the shared context file all agents read
6. First heartbeat test: creating a test ticket and watching the agent execute

**The transformation moment:** Student watches their FREYJA agent wake up, read the task, write a caption — autonomously.

**Template provided:**
```yaml
# Agent Import Template

Agent: [Name]
Role: [Title in org chart]
Adapter: claude_local
Config:
  cwd: "[path to their project]"
  model: "claude-sonnet-4-6"
  maxTurnsPerRun: 8
  timeoutSec: 180
  env:
    ANTHROPIC_API_KEY: "{{secret:ANTHROPIC_API_KEY}}"

promptTemplate: |
  [System prompt built in $QUAD Modules 2-7]
  Current task: {{task.description}}
  Company: {{company.name}}
```

**AGENTS.md template provided** — ready to customize.

---

### Lesson 8.4 — Automação, Budget e Governança (30 min)

**Screen Recording + Text**

Content:
1. **Heartbeat setup:** Configuring when each agent wakes up
   - Content agent: daily 10h
   - Offer agent: 3x/week
   - Intelligence agent: weekly Monday
2. **Budget control:**
   - Setting monthly caps per agent
   - Understanding 80% warning / 100% auto-pause
   - The math: how to estimate monthly spend
3. **Creating Goals and Projects:**
   - Mapping the student's top 3 business goals
   - Breaking into projects
   - Creating first batch of tickets
4. **The governance mindset:**
   - You're not an operator anymore — you're the Board
   - What requires your approval vs runs autonomously
   - When to override vs when to let the system run

**Key mental shift:** From "running agents" to "governing a company."

---

### Lesson 8.5 — A Empresa Rodando ao Vivo (30 min)

**Live Demo Recording — The Finale**

Content:
1. Arthur's Runa Systems squad running a full workflow end-to-end:
   - Goal: "Create carousel content for @arthsystems_ this week"
   - Ticket assigned to FREYJA
   - FREYJA wakes, generates carousel brief
   - FREYJA creates sub-ticket for MAYA
   - MAYA wakes, generates image via infsh
   - FREYJA reviews, approves
   - HERMES schedules for publishing
2. Dashboard walkthrough: watching budget, audit log, activity
3. The "company feel" moment: 6 agents running a real business workflow

**Closing statement:**
> "You started $QUAD building agents. You're ending it running a company.
> The question now is: what do you want this company to build?"
> [CTA: RUNA SYSTEMS — "Let's build yours together."]

---

## Bonus Materials for Module 8

### Bonus 8A — Template Squad Config Export
Complete YAML configuration file for a standard $QUAD squad in Paperclip.
Ready to import, with placeholder variables for customization.
Students paste their system prompts and they're live in 30 minutes.

### Bonus 8B — The $QUAD Company Blueprint
PDF: Complete framework for translating any business into a Paperclip company.
Includes: org chart template, goal hierarchy, agent configuration checklist,
budget calculator, heartbeat schedule, AGENTS.md template.

### Bonus 8C — Command Center V2 (Optional Technical Path)
For students who want to build their own custom interface instead of using Paperclip.
"If Paperclip is the company, Command Center is your custom HQ."
Positioned explicitly as optional — Paperclip is the standard recommendation.

---

## Production Plan

### What Arthur records for Module 8 (in order):

- [ ] **8.0** — "Why this changes everything" (demo before/after, 10 min)
- [ ] **8.1** — Instalação ao vivo (fresh install, all commands shown, 20 min)
- [ ] **8.2** — Construindo org chart de Alpha® no Paperclip (25 min)
- [ ] **8.3** — Importando todos os agentes de Alpha® (45 min — the core demo)
- [ ] **8.4** — Configurando heartbeats, budget e goals (30 min)
- [ ] **8.5** — Full workflow end-to-end ao vivo (30 min)
- [ ] **Bonus 8A** — Export do config template (10 min)

**Total recording time:** ~3 hours
**Total editing time:** ~6 hours (2x ratio)

### Dependencies (must exist before recording):
- Alpha®'s full agent squad from Modules 2-7 (complete)
- Runa Systems Global Paperclip instance running
- All agents configured and tested
- At least one full workflow cycle completed (proof it works)

---

## Upsell Architecture — Module 8 → RUNA SYSTEMS

Module 8 is the single most powerful upsell moment in $QUAD.

**The setup:** Student has their company running in Paperclip. They see:
- 6 agents executing autonomously
- Budget being consumed
- Audit trail showing real work done
- Business operations happening without manual effort

**The desire created:**
> "I built a small version of this. Arthur built the full version over 6 months.
> What would it look like if Arthur built mine?"

**The offer:**
> "RUNA SYSTEMS: Arthur builds your full AI company infrastructure.
> Everything in $QUAD — plus the knowledge bases, the content pipeline,
> the automation stack, the Paperclip deployment — built for YOUR business."

**The CTA at the end of Module 8:**
```
"You've just built your squad. The question is:
do you want to scale it yourself, or do you want me to scale it with you?

[RUNA SYSTEMS → R$15.000/ano — or book a call for MENTORIA]"
```

**Expected conversion rate:** 3-5% of $QUAD buyers → RUNA SYSTEMS
At 100 students: 3-5 clients × R$15k = R$45k-75k from one module's upsell.

---

## Technical Requirements for Module Production

### Arthur's environment for recording:
- Paperclip running at localhost:3100
- Full Runa Systems squad imported and tested
- Alpha®'s squad (separate company) in the same Paperclip instance
- Screen recorder showing both terminal + browser
- Budget real enough to show real costs (not fake numbers)

### Student requirements (checklist for lesson 8.1):
- [ ] Node.js 20+ installed
- [ ] pnpm 9.15+ installed
- [ ] Anthropic API key (from completing $QUAD prerequisites)
- [ ] The 5 system prompts from Modules 2-7 (their agents)
- [ ] A project directory (their working directory from $QUAD)

---

## Module 8 — $QUAD Updated Module Index

| Module | Title | Status |
|--------|-------|--------|
| 0 | Comece Aqui | Planned |
| 1 | Mapping Your Business | Planned |
| 2 | Building the Orchestrator | Planned |
| 3 | The Offer Agent | Planned |
| 4 | The Content Agent | Planned |
| 5 | The Automation Agent | Planned |
| 6 | The Intelligence Agent | Planned |
| 7 | The Squad Running Live | Planned |
| **8** | **A Empresa que Se Governa (Paperclip)** | **✅ PRD Complete** |
| BONUS | Command Center (Optional Tech Path) | Repositioned |

---

## Product Radar — RUNA SYSTEMS Raw Material

This module generates the following course raw material:

| Content captured | Product module |
|-----------------|----------------|
| Paperclip installation end-to-end | RUNA SYSTEMS — Tooling Stack |
| Agent import from Claude system prompts | RUNA SYSTEMS — Squad Architecture |
| Org chart design for solo business | $QUAD content |
| Budget management for AI operations | RUNA SYSTEMS — Financeiro Neural |
| Heartbeat automation patterns | RUNA SYSTEMS — Projetos Neural |
| Full company workflow demo | Sales asset for all products |

---

## Connections

- **Parent PRD:** [[squad-dollar-prd]]
- **Architecture:** [[squad-architecture]]
- **Minicurso técnico:** [[paperclip-minicurso]]
- **Product catalog:** [[product-catalog]]
- **Raw material:** [[product-course-raw-material]]
- **Upsells to:** [[runa-systems-prd]]
