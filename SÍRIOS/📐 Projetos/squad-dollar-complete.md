---
date: 2026-04-04
tags: [product, spec, $QUAD, squad, agents, course]
project: RUNA SYSTEMS
status: production-ready
---

# $QUAD — Complete Product Specification

> **Tagline:** "Seu squad trabalha. Você orquestra. Você cobra premium."
> **Price:** R$997 | **Platform:** Skool | **Format:** Build-in-public screen recordings + text lessons + templates

---

## 1. Product Overview

### Big Idea

Most people try to automate their business by connecting platforms. $QUAD teaches a different approach: you design intelligent agents that carry your business logic — your offer architecture, your brand voice, your competitive intelligence — and deploy them as a coordinated squad.

The squad runs the cognitive work. You orchestrate strategy and collect revenue.

### Core Promise

By the end of $QUAD, the student has a configured AI agent squad running their specific business logic. Not a tutorial watched. Not a template downloaded. An actual squad built, tested, and operating — ORCHESTRATOR + OFFER AGENT + CONTENT AGENT + INTELLIGENCE AGENT — doing real work.

### What Students Build (Concrete Deliverable)

A working AI squad consisting of:
1. An **ORCHESTRATOR** that routes tasks, manages context, and coordinates the specialists
2. An **OFFER AGENT** that knows their product teia, prices, narratives, and can structure proposals
3. A **CONTENT AGENT** that writes in their exact brand voice — captions, scripts, sales letters
4. An **INTELLIGENCE AGENT** that researches competitors, surfaces positioning gaps, synthesizes market data
5. Optional: a **COMMUNICATION AGENT** with the knowledge and logic for client conversations

Every agent is configured inside Claude.ai Projects with complete system prompts, knowledge bases, and tested delegations.

### Ideal Customer Profile (ICP)

**Primary:**
- Solo consultants and mentors charging R$3k–R$20k/project or /month
- Service business owners with 2–5 clients simultaneously
- Agency owners who are the bottleneck in their own delivery

**Secondary:**
- Online course creators who also sell high-ticket coaching
- Professionals transitioning from employment to consulting

**Specific indicators they are ready:**
- Has at least one defined offer (even if informal)
- Uses Claude.ai at least occasionally — not a complete beginner
- Has more cognitive demand than time to meet it
- Is working solo or with 1–2 assistants — not running a 20-person team yet

### What $QUAD Is NOT For

- Complete beginners to AI who have never used Claude.ai
- Students looking for automation platform setup (n8n, ManyChat, Zapier) — that is a different product
- Teams larger than 5 people with dedicated ops infrastructure
- Anyone expecting a "done-for-you" squad — this is build-it-yourself, live, with Arthur

### Position in the Product Teia

```
Low ticket (entry)                Mid ticket                     High ticket
ORÇAMENTO$ (R$97–297)   →   $QUAD (R$997)            →   RUNA SYSTEMS (R$15k–50k)
                             CREATOR$ (R$997)          →   RUNA MENTORIA (R$30k)
                             AGENT$ (R$1.997)           →   RUNA INTERVENÇÃO (R$50k)
                             SITE$ (R$1.997)
```

**$QUAD is the entry point to the mid-ticket stack.** It sells the architecture concept. RUNA SYSTEMS sells the full operating system. Students who finish $QUAD and feel the power of a functioning squad are the warmest prospects for RUNA SYSTEMS.

**Upsell chain from $QUAD:**
- Student completes $QUAD → sees value → RUNA SYSTEMS pitch (full ecosystem, 8 neural agents, complete business operating system)
- Student wants content agent to publish autonomously → CREATOR$ (content pipeline, workers)
- Student wants offer and commercial automation → AGENT$ (build and monetize custom agents)

---

## 2. The $QUAD Framework

### Squad Architecture

```
                    ┌─────────────────────────────────────────┐
                    │            YOU (The Owner)               │
                    │        Strategic intent only             │
                    └──────────────────┬──────────────────────┘
                                       │
                    ┌──────────────────▼──────────────────────┐
                    │           ORCHESTRATOR                    │
                    │   Routes requests. Manages context.       │
                    │   Knows the squad's capabilities.         │
                    │   Returns structured output to owner.     │
                    └─────┬──────────────┬──────────────┬──────┘
                          │              │              │
          ┌───────────────▼──┐  ┌────────▼────┐  ┌────▼──────────────┐
          │  OFFER AGENT     │  │CONTENT AGENT│  │INTELLIGENCE AGENT │
          │  (ARES-equiv.)   │  │(FREYJA-eq.) │  │  (ALEX-equiv.)    │
          │                  │  │             │  │                   │
          │ • Product teia   │  │ • Brand     │  │ • Competitor scan │
          │ • Offer narrativ.│  │   voice     │  │ • Market gaps     │
          │ • Pricing logic  │  │ • Captions  │  │ • Intelligence    │
          │ • Proposal struct│  │ • Scripts   │  │   synthesis       │
          │ • Objection map  │  │ • Sales copy│  │ • Research briefs │
          └──────────────────┘  └─────────────┘  └───────────────────┘

          ┌──────────────────────────────────────────────────────────┐
          │ OPTIONAL: COMMUNICATION AGENT (HERMES-equiv.)            │
          │ Knows: client onboarding logic, FAQ responses, follow-up │
          │ patterns, objection handling, conversation sequences     │
          │ NOTE: This is the AGENT LOGIC — not the automation setup │
          └──────────────────────────────────────────────────────────┘
```

### What Each Agent Does and Why

**ORCHESTRATOR**
The central router. When you say "I have a sales call tomorrow with a nutritionist who's been following me for 6 months — what should I send her today?", the orchestrator decides what the OFFER AGENT knows about your offer at that price point, what the CONTENT AGENT can write, and how to combine it. Without an orchestrator, agents work in isolation. With one, they function as a cohesive team.

**OFFER AGENT**
Carries the entire architecture of your business: what you sell, at what prices, to whom, with what narrative, with what objections already mapped. It can draft a proposal in your voice, identify the right offer for a specific client profile, and explain your pricing logic internally. This agent holds the commercial brain of the business.

**CONTENT AGENT**
Writes in your exact brand voice. It knows your tone, your recurring formats, your frameworks, your vocabulary, what you never say. It can draft captions, write a sales letter for a launch, create a nurture sequence, or build a script for a video. It is not a generic copywriter — it is trained on YOUR voice and YOUR offers.

**INTELLIGENCE AGENT**
Your research arm. It runs competitor teardowns, surfaces positioning gaps, synthesizes market intelligence, identifies what your audience is saying and what they are not finding elsewhere. When you need to make a strategic decision, this agent gives you the data layer underneath it.

**COMMUNICATION AGENT (optional)**
Knows your entire client journey: what happens after someone buys, what the onboarding sequence covers, how you handle common objections, what the follow-up cadence looks like. This is the agent's KNOWLEDGE AND LOGIC — the behavior it would exhibit in a conversation. How that logic gets triggered through platforms (ManyChat, WhatsApp, etc.) is out of scope for $QUAD.

### The Orchestrator Model Explained

The orchestrator is not a super-agent that knows everything. It is a routing agent that knows WHO to ask. Its system prompt contains:
- A map of what each specialist agent does
- When to delegate vs. handle directly
- How to combine outputs from multiple agents
- How to report back to the owner in a consistent format

This mirrors how a great EA or Chief of Staff works: they do not replace your specialists — they coordinate them and surface the right output at the right moment.

### Squad vs. Single Agent: Why This Approach Works

| Single Agent | Squad Architecture |
|---|---|
| Overloaded system prompt — tries to do everything | Focused agents — each has one domain of excellence |
| Context collapses as the conversation grows | Orchestrator manages context distribution |
| Inconsistent voice when switching modes | Content agent is always the voice; offer agent is always the commerce brain |
| Cannot specialize without sacrificing breadth | Each specialist is deep; orchestrator provides breadth |
| Hard to update — one change affects everything | Modular — update the offer agent without touching content |

### The Base Structure This Creates

Once the student has this squad, they have the foundation for everything else:
- CREATOR$: add media generation and a content pipeline to the CONTENT AGENT
- AGENT$: productize and monetize their agent architecture for clients
- RUNA SYSTEMS: scale to the full 8-neural-agent operating system
- $QUAD itself becomes the product they sell to clients who want their own squad

---

## 3. Skool Classroom Structure

### Classroom Layout

```
$QUAD Classroom
│
├── CLASSROOM (video + text lessons, organized by module)
│   ├── MODULE 0 — COMECE AQUI
│   ├── MODULE 1 — ENTENDENDO AGENTES
│   ├── MODULE 2 — ARQUITETURA DO SEU SQUAD
│   ├── MODULE 3 — O ORQUESTRADOR
│   ├── MODULE 4 — O AGENTE DE OFERTA
│   ├── MODULE 5 — O AGENTE DE CONTEÚDO
│   ├── MODULE 6 — O AGENTE DE INTELIGÊNCIA
│   ├── MODULE 7 — SKILLS E CAPACIDADES
│   ├── MODULE 8 — O SQUAD OPERANDO
│   └── MODULE 9 — A EMPRESA QUE SE GOVERNA
│
├── COMMUNITY (active feed for squad sharing and Q&A)
│   └── Weekly pinned thread: "Compartilhe seu squad esta semana"
│
└── MATERIALS LIBRARY (pinned post or dedicated section)
    ├── Squad Architecture Template (PDF + editable)
    ├── System Prompt Framework — Orchestrator
    ├── Agent Brief Template
    ├── Delegation Matrix Template
    ├── Squad Configuration Export (YAML)
    ├── Paperclip Setup Guide
    └── Arthur's Full Squad Config (annotated)
```

### Community Space Usage

The community is NOT a support ticket system. It is a demonstration space. Arthur models how to use it:
- Posts his own squad updates ("Updated my CONTENT AGENT system prompt — here's what changed and why")
- Shares real outputs his squad produced that week
- Runs a weekly "Squad Review" thread where students share their config and get feedback

This community usage pattern teaches students that the squad is a living system — not a one-time setup.

---

## 4. Complete Module Map

---

### MODULE 0 — COMECE AQUI
**Purpose:** Orientation. Set expectations. Kill confusion before it starts.

**0.1 — Como este curso funciona**
- Format: 8-min video + written summary
- Content: How Skool works, where materials are, the community thread cadence, what "build in public" means. Arthur on screen navigating the classroom.
- Tool on screen: Skool classroom UI
- Student action: Post an intro in the community: name, business type, why $QUAD now
- No deliverable — orientation only

**0.2 — O que você vai construir**
- Format: 6-min video
- Content: Full demo of the finished squad running. Arthur shares his screen — Claude.ai Projects open, ORCHESTRATOR running, a live prompt being routed to OFFER AGENT, output returned. No explanation of HOW yet. Just "this is what it looks like when it works."
- Tool on screen: Claude.ai Projects
- Student action: Watch and take note of one thing they want their squad to do
- Deliverable: Informal note — "My squad will be valuable when it can ___"

**0.3 — Pré-requisitos honestos**
- Format: 4-min video + written checklist
- Content: What you need to already know (Claude.ai basic usage). What you do NOT need (no coding, no platform experience, no prior automation setup). What this course does NOT teach (n8n, ManyChat technical setup, workers, Instagram automation). A checklist: "Are you ready for $QUAD?"
- Student action: Complete checklist — confirm readiness or identify gaps

---

### MODULE 1 — ENTENDENDO AGENTES
**Purpose:** Build correct mental models. A student who misunderstands what an agent is will build one that disappoints.

**1.1 — O que é um agente de IA (de verdade)**
- Format: 12-min video + text
- Content: An agent is not a chatbot. An agent is a role with: a persona, a defined scope, persistent instructions, and a knowledge base. The system prompt is the job description. The knowledge base is the briefing folder. The conversation is the working session. Arthur shows the analogy of hiring a specialist employee vs. asking a generalist assistant to do everything.
- Tool on screen: Claude.ai (simple conversation demonstrating agent vs. non-agent behavior)
- Student action: Write a one-sentence role description for one agent they imagine having

**1.2 — System prompts: o que são e por que importam**
- Format: 15-min video + annotated examples
- Content: Live anatomy of a system prompt. What goes in each section: Persona + Role definition, Scope (what the agent does AND does NOT do), Behavioral rules, Output formats, Tone and voice instructions. Arthur opens two system prompts side by side — a weak one vs. a strong one. Shows the difference in output quality.
- Tool on screen: Claude.ai with two different system prompt configurations
- Student action: Write a first draft system prompt for one imagined agent (no constraints — just try)
- Deliverable: Draft system prompt v1 — will be revised multiple times through the course

**1.3 — Personas: como dar identidade a um agente**
- Format: 10-min video
- Content: Why persona matters for consistent output. How to define: name, communication style, areas of authority, what the agent refuses to do, how it handles ambiguity. The persona prevents "agent drift" — where the agent starts acting generically after long conversations. Live demo: same prompt, different persona definitions, different outputs.
- Tool on screen: Claude.ai
- Student action: Define the persona for one specialist agent in their imagined squad

**1.4 — Conhecimento vs. capacidade: o que você ensina ao agente**
- Format: 12-min video
- Content: The knowledge layer (what the agent knows: your offer, your voice, your business) vs. the capability layer (what the agent can do: web search, artifact generation, code execution). You build knowledge through the system prompt and attached files. You extend capability through skills. This module covers knowledge only — skills come in Module 7. Arthur shows uploading a product document into a Claude.ai Project and how the agent immediately references it.
- Tool on screen: Claude.ai Projects — adding files to project knowledge
- Student action: List 3 documents they would put in each specialist agent's knowledge base
- Deliverable: Knowledge Base Inventory (which docs go where)

**1.5 — O que os agentes não fazem (e por que isso é uma vantagem)**
- Format: 8-min video
- Content: Agents do not execute autonomously. They do not click buttons, post to Instagram, or run workflows. That is a feature, not a bug — at this stage. The agent produces structured output that YOU or a worker acts on. This separation keeps you in control and makes the squad auditable. Framing: "The squad thinks. You decide. Workers execute." Clarity on $QUAD scope vs. CREATOR$ scope vs. RUNA SYSTEMS scope.
- Student action: No exercise — conceptual clarity checkpoint

---

### MODULE 2 — ARQUITETURA DO SEU SQUAD
**Purpose:** Before building anything, design the right squad for THIS business. Avoid building agents they do not need.

**2.1 — O framework dos quatro agentes**
- Format: 14-min video + PDF diagram
- Content: Full explanation of the four-agent architecture. Why these four? OFFER + CONTENT + INTELLIGENCE covers the three primary cognitive demands of a solo business: commercial, creative, strategic. ORCHESTRATOR ties it together. Arthur walks through his own squad — ARES, FREYJA, ALEX, ORION — explaining what each one handles in practice on a real week of work.
- Tool on screen: Claude.ai Projects — Arthur's actual squad configuration visible
- Student action: Write one sentence for each of the four agents: "In my business, this agent handles ___"

**2.2 — Mapeando as demandas cognitivas do seu negócio**
- Format: 16-min video + exercise template
- Content: A structured exercise: list your top 10 cognitive tasks from the past week. Categorize each as: offer/commercial, content/creative, intelligence/research, communication, or operational. Operational tasks go outside the squad scope. The pattern of your categories determines which agents you build first and how deep each one goes. Arthur does this exercise live with his own week.
- Tool on screen: Claude.ai (drafting the categorization), document/spreadsheet for the exercise
- Student action: Complete the cognitive demand map for their own business
- Deliverable: Cognitive Demand Map — inputs the squad design decisions

**2.3 — Quando o quinto agente (Comunicação) faz sentido**
- Format: 10-min video
- Content: The COMMUNICATION AGENT is optional and context-dependent. It makes sense when: you have high volume of similar client questions, you do onboarding in a predictable sequence, you want a consistent "voice" in early-stage client conversations. Arthur explains that in his business, FREYJA partially handles communication logic. For a high-touch consultant with long sales cycles, a dedicated communication agent is more valuable than for a creator. Decision tree walkthrough.
- Student action: Decide: will they build a COMMUNICATION AGENT in this course? Document why or why not.

**2.4 — Desenhando seu squad no papel antes de construir**
- Format: 12-min video + Squad Architecture Template
- Content: Using the Squad Architecture Template to draft: agent name, persona summary, primary use cases (3–5), knowledge base inputs, what the agent refuses to do, delegation triggers (when does ORCHESTRATOR send a request here). Arthur completes his template live on screen.
- Tool on screen: Claude.ai (drafting), Squad Architecture Template (PDF/document)
- Student action: Complete Squad Architecture Template for all four (or five) agents
- Deliverable: Squad Architecture Document v1 — the blueprint for Modules 3–7

**2.5 — O princípio da especialização radical**
- Format: 8-min video
- Content: The most common mistake: trying to make each agent do too much. An agent that "writes content AND researches competitors AND manages the offer" is not an agent — it is a poorly defined chatbot. Radical specialization means each agent has a narrow, deep scope. The breadth comes from the ORCHESTRATOR combining them. Arthur shows examples of over-scoped system prompts and how they fail.
- Student action: Review their Squad Architecture Document — cut any agent responsibility that belongs in another agent

---

### MODULE 3 — O ORQUESTRADOR
**Purpose:** Build the orchestrator first because it sets the architecture for everything that follows.

**3.1 — O papel do orquestrador na arquitetura**
- Format: 10-min video
- Content: The orchestrator is a routing intelligence, not a super-agent. It holds the map of the squad. When a request arrives, it identifies: is this an offer question (OFFER AGENT), a content task (CONTENT AGENT), an intelligence request (INTEL AGENT), or a combination? It routes, receives output, synthesizes if needed, returns to the owner. Arthur explains how ORION works in his own workflow — what it routes, what it handles directly, what it escalates.
- Tool on screen: Claude.ai — showing the ORCHESTRATOR in action with a real prompt

**3.2 — Construindo o system prompt do orquestrador (live)**
- Format: 25-min screen recording
- Content: Arthur builds the ORCHESTRATOR system prompt from scratch on screen. Live narration of decisions: why each section is there, what breaks when it is missing. The system prompt sections built live:
  1. Identity: who the orchestrator is and its authority level
  2. Squad Map: what each specialist agent does (one paragraph each)
  3. Routing Logic: decision rules for which agent handles which type of request
  4. Direct Handle vs. Delegate: what the orchestrator answers without delegating
  5. Output Format: how the orchestrator reports back (structured, consistent)
  6. Escalation Rules: what triggers "I need more information before routing"
- Tool on screen: Claude.ai Projects — building the system prompt in real time
- Student action: Build their own ORCHESTRATOR system prompt using the live build as a template
- Deliverable: ORCHESTRATOR system prompt v1

**3.3 — Testando o orquestrador**
- Format: 18-min video
- Content: A systematic test protocol for the orchestrator. Arthur runs 10 test prompts live — ranging from clear single-agent requests to ambiguous multi-domain requests. For each: does it route correctly? Does it handle directly what it should? Does it ask for clarification when appropriate? Iteration live: when a test fails, Arthur edits the system prompt and runs again.
- Tool on screen: Claude.ai — testing session with live edits
- Student action: Run the same 10-prompt test protocol on their own orchestrator
- Deliverable: Test Results Log (pass/fail + revision notes)

**3.4 — O orquestrador como interface da empresa**
- Format: 10-min video
- Content: Once the squad is complete, the owner's primary interface is the ORCHESTRATOR. You stop talking to individual agents for most tasks. The ORCHESTRATOR becomes the front door. Arthur demonstrates a full week's worth of real prompts he would send — and how the orchestrator routes them. This reframes the student's mental model: you are not building agents, you are building a company interface.
- Student action: Write 5 prompts they would send to their squad in a typical work week

---

### MODULE 4 — O AGENTE DE OFERTA
**Purpose:** Build the OFFER AGENT — the commercial brain of the business.

**4.1 — O que o agente de oferta precisa saber**
- Format: 12-min video
- Content: The OFFER AGENT needs to know: every product/service you sell (name, price, duration, deliverable, ICP, objections, competitive differentiation), your pricing logic (why things cost what they cost), your offer narrative (what transformation you sell, not what you deliver), your upsell chain, your entry-level offers vs. core offers vs. premium. Arthur maps his own offer teia live: RUNA SYSTEMS, MENTORIA, INTERVENÇÃO, $QUAD, CREATOR$, AGENT$, SITE$, POSICIONAMENTO$, lives.
- Tool on screen: Claude.ai (using a document template for the offer mapping exercise)
- Student action: Map their complete offer teia — every product/service, priced and described in 3 sentences each
- Deliverable: Offer Teia Document — goes into OFFER AGENT knowledge base

**4.2 — Construindo o system prompt do agente de oferta (live)**
- Format: 22-min screen recording
- Content: Arthur builds the OFFER AGENT system prompt live. Key sections:
  1. Role: Offer Architect for [business] — knows the complete product teia
  2. Offer Knowledge: structured list of all products with key attributes
  3. Commercial Logic: how to match a client profile to the right offer
  4. Proposal Rules: how to structure a proposal (format, elements, tone)
  5. Objection Map: the 5 most common objections and how this agent frames responses
  6. Scope Limits: this agent does NOT write content (Content Agent does), does NOT research competitors (Intel Agent does)
- Tool on screen: Claude.ai Projects — building OFFER AGENT system prompt
- Student action: Build OFFER AGENT system prompt for their business
- Deliverable: OFFER AGENT system prompt v1

**4.3 — Alimentando o agente com conhecimento de oferta**
- Format: 15-min video
- Content: The system prompt is not enough. The OFFER AGENT needs files: your sales page copy, your proposal templates, past successful proposals (anonymized), your pricing FAQ, your objection handling document. Arthur adds these files to his Claude.ai Project live — shows how the agent immediately starts referencing them in responses. Best practices: keep files focused and current.
- Tool on screen: Claude.ai Projects — file upload and knowledge base configuration
- Student action: Identify and organize 3–5 documents to add to OFFER AGENT knowledge base
- Deliverable: OFFER AGENT knowledge base populated

**4.4 — Testando o agente de oferta**
- Format: 16-min video
- Content: Test battery for the OFFER AGENT. Arthur runs live: "I have a client interested in AI implementation for their consulting firm. Budget is R$5k. They've never worked with AI agents before. What do I propose?" and 5 more scenarios. Tests: Does it propose the right offer? Does it match the price range? Does it sound like Arthur or like a generic sales script? Does it stay in scope? Live iteration.
- Tool on screen: Claude.ai
- Student action: Run same test battery with their own OFFER AGENT
- Deliverable: OFFER AGENT Test Log + final system prompt v2

---

### MODULE 5 — O AGENTE DE CONTEÚDO
**Purpose:** Build the CONTENT AGENT — the brand voice engine.

**5.1 — O que define uma voz de marca**
- Format: 14-min video
- Content: Voice is not tone. Voice is the cumulative set of: vocabulary choices, sentence rhythm, what you never say, what you always say, your recurring frameworks, your narrative patterns, your philosophical positioning. Arthur breaks down the FREYJA voice DNA: dark/architectural/precise. Why vague instructions ("write professionally") produce generic output. How to document voice in a way an agent can operationalize.
- Student action: Write 10 sentences in their natural voice — then extract patterns: what do all of these have in common?
- Deliverable: Voice Pattern Notes — raw material for system prompt

**5.2 — Construindo o system prompt do agente de conteúdo (live)**
- Format: 24-min screen recording
- Content: Arthur builds the CONTENT AGENT system prompt live. Key sections:
  1. Voice DNA: precise language rules (always use X, never use Y), sentence structure patterns, vocabulary list
  2. Content Types: what formats this agent produces (captions, scripts, email sequences, sales letters, hooks)
  3. Offer Knowledge: brief summary of the offer teia so the agent can connect content to offers
  4. Output Rules: structure for each content type (caption format, email format, script sections)
  5. Review Criteria: how the agent self-checks before returning output
  6. Scope Limits: does NOT do competitive research, does NOT write proposals
- Tool on screen: Claude.ai Projects — building CONTENT AGENT system prompt
- Student action: Build CONTENT AGENT system prompt for their business
- Deliverable: CONTENT AGENT system prompt v1

**5.3 — Alimentando o agente com exemplos de voz**
- Format: 14-min video
- Content: The most powerful knowledge you give the CONTENT AGENT is your own writing. Past posts, past emails, past scripts — 20–50 examples of writing you are proud of. Arthur adds annotated examples to his Claude.ai Project: shows how to annotate ("this is a strong hook format I use often") vs. just dumping files. Also adds a brand brief document and a content strategy overview.
- Tool on screen: Claude.ai Projects — knowledge base population
- Student action: Collect 10 pieces of their best past content and add to CONTENT AGENT knowledge base
- Deliverable: CONTENT AGENT knowledge base populated with voice examples

**5.4 — Formatos de output: captions, scripts, sequências**
- Format: 18-min video
- Content: Specific instructions for getting clean, formatted output from the CONTENT AGENT. Arthur tests three content formats live:
  1. Instagram caption: hook + body + CTA + keyword (carousel DM trigger format)
  2. Email sequence: 3-email nurture for a new lead
  3. Short-form video script: 60-second script with scene structure
  For each: what the prompt looks like, what a good output looks like, how to iterate.
- Tool on screen: Claude.ai — live content generation sessions
- Student action: Generate one caption, one email, one script using their CONTENT AGENT
- Deliverable: Three pieces of produced content (real, ready to use or adapt)

**5.5 — Testando e calibrando a voz**
- Format: 14-min video
- Content: The content agent will not be perfect on day one. How to calibrate: side-by-side comparison (AI output vs. your actual writing), identifying drift points, updating system prompt with more precise rules. Arthur runs 5 test prompts, shows two outputs that are off-brand, edits the system prompt on screen, reruns. The calibration loop is a skill, not a one-time task.
- Tool on screen: Claude.ai — calibration session live
- Student action: Run 5 test prompts, identify 2 calibration points, update system prompt
- Deliverable: CONTENT AGENT system prompt v2 (calibrated)

---

### MODULE 6 — O AGENTE DE INTELIGÊNCIA
**Purpose:** Build the INTELLIGENCE AGENT — the research and competitive positioning arm.

**6.1 — O papel da inteligência no negócio solo**
- Format: 10-min video
- Content: Solo operators make expensive decisions with incomplete information. What competitor charges what, what the market is saying, where the positioning gap is — most solopreneurs never know this precisely. The INTELLIGENCE AGENT turns competitive research from a quarterly project into an on-demand capability. Arthur describes how ALEX works for him: competitor teardowns before repositioning, market synthesis before launching a new offer, audience signal analysis before content campaigns.
- Student action: Write 3 intelligence questions they wish they had answers to about their market right now

**6.2 — Construindo o system prompt do agente de inteligência (live)**
- Format: 20-min screen recording
- Content: Arthur builds the INTELLIGENCE AGENT system prompt live. Key sections:
  1. Role: Intelligence Officer for [business] — surfaces competitive and market intelligence
  2. Research Domains: competitor positioning, audience signals, pricing benchmarks, trend identification
  3. Output Formats: competitive brief, market summary, opportunity memo
  4. Synthesis Rules: how to combine multiple sources into an actionable insight
  5. Objectivity Standard: no confirmation bias — this agent challenges assumptions
  6. Scope Limits: does NOT write content, does NOT propose offers
- Tool on screen: Claude.ai Projects
- Student action: Build INTELLIGENCE AGENT system prompt for their business
- Deliverable: INTELLIGENCE AGENT system prompt v1

**6.3 — Web search como superpoder do agente de inteligência**
- Format: 16-min video
- Content: The INTELLIGENCE AGENT becomes dramatically more powerful when connected to web search capability. In Claude.ai, this is the built-in web search tool — available natively in Projects. Arthur enables web search for the INTELLIGENCE AGENT and runs live: a competitor teardown for a player in his market, a pricing benchmark request, a trend research brief. Shows how to prompt for web search explicitly vs. relying on training data.
- Tool on screen: Claude.ai Projects with web search enabled
- Student action: Enable web search for their INTELLIGENCE AGENT, run one competitor research brief
- Deliverable: One competitor research brief produced by their INTELLIGENCE AGENT

**6.4 — Testando o agente de inteligência**
- Format: 14-min video
- Content: Test battery: 1) Competitive brief for a named competitor. 2) Market summary for their niche. 3) Positioning gap analysis: "Where is there underserved demand in my market right now?" 4) Price benchmark: "What are the price ranges for [their service] in the market?" Arthur runs all four live, shows good outputs and one weak output, iterates on system prompt.
- Tool on screen: Claude.ai
- Student action: Run same 4-test battery on their INTELLIGENCE AGENT
- Deliverable: INTELLIGENCE AGENT Test Log + system prompt v2

---

### MODULE 7 — SKILLS E CAPACIDADES
**Purpose:** Understand what agents can do natively vs. what they need to be extended with. Configure the right capabilities for each agent.

**7.1 — O que são skills (e o que não são)**
- Format: 12-min video
- Content: Skills are not plugins or integrations. In the context of $QUAD, skills are: (1) Claude.ai native capabilities — tools Claude already has (web search, code execution, artifact generation), and (2) custom skill workflows defined in `.claude/skills/` for users building in Claude Code. This module covers Claude.ai native skills. Skills extend WHAT the agent can do without changing WHO it is. The system prompt defines identity; skills define capability surface.
- Tool on screen: Claude.ai — showing the tools panel (web search, analysis, artifacts)

**7.2 — Skills nativas do Claude.ai: o que cada uma faz**
- Format: 18-min video
- Content: Full walkthrough of Claude.ai built-in tools and when each is useful for squad agents:
  - **Web Search:** Research, competitor data, current pricing, trends — ideal for INTELLIGENCE AGENT
  - **Artifacts:** Formatted output (documents, structured reports) — ideal for OFFER and INTELLIGENCE agents
  - **Code Execution (Analysis):** Data processing, calculations, CSV analysis — useful for INTELLIGENCE AGENT
  - **File Upload:** Knowledge ingestion mid-conversation — useful for all agents
  Arthur demonstrates each with a practical use case in his squad.
- Tool on screen: Claude.ai — live demo of each tool with real prompts
- Student action: For each of their squad agents, decide: which native tools should be enabled?

**7.3 — Claude Code: quando e por quê**
- Format: 14-min video
- Content: Claude Code is the terminal-based agent orchestration environment. It enables: running agents from the command line, connecting skills from `.claude/skills/`, accessing file systems, running code. This is the power level above Claude.ai Projects. Arthur shows how his own squad operates partly in Claude.ai (daily conversational tasks) and partly in Claude Code (when he needs file system access, when running skills like `obsidian-cli` or `web-search` in batch mode). The course covers Claude Code as optional extension — the core squad runs in Claude.ai.
- Tool on screen: Claude Code terminal — brief demo, not deep dive
- Student action: Identify one use case where Claude Code would add value to their squad (stretch goal)

**7.4 — Calibrando capabilities por agente**
- Format: 12-min video
- Content: Not every agent needs every capability. Over-enabling is a real problem — an OFFER AGENT with web search enabled will start searching the web when it should be consulting its knowledge base. Arthur's calibration table:
  - ORCHESTRATOR: minimal — routes, does not need search
  - OFFER AGENT: artifacts (for proposal formatting), minimal search
  - CONTENT AGENT: artifacts (for formatted content output), possibly search for trend awareness
  - INTELLIGENCE AGENT: full web search, code execution for data, artifacts for reports
  Practical demonstration of capability scope tuning.
- Tool on screen: Claude.ai Projects — configuring tools per project
- Student action: Finalize the capability configuration for each agent in their squad
- Deliverable: Capability Configuration Map (agent → tools enabled)

---

### MODULE 8 — O SQUAD OPERANDO
**Purpose:** Full integration demo. The squad working together on a real business scenario, end to end.

**8.1 — O squad completo: apresentação**
- Format: 10-min video
- Content: Arthur shows all four agents configured in Claude.ai Projects simultaneously. Quick tour: each agent's project, the system prompts (redacted version for privacy where needed), the knowledge bases. The student has now built all four — this is the moment of "you did it."
- Student action: Take a screenshot of their four configured Claude.ai Projects. Post in community.

**8.2 — Caso de uso 1: preparando para um lançamento**
- Format: 28-min screen recording (full live demo)
- Content: Arthur is preparing to launch CREATOR$. Live, unscripted, he runs the squad through the launch preparation:
  1. INTELLIGENCE AGENT: "What are competitors doing in the content creation space right now? Where is the gap we can own?"
  2. OFFER AGENT: "Given this market intelligence, how should we position CREATOR$ against what the competition is doing? Draft the core positioning statement."
  3. CONTENT AGENT: "Write 3 launch captions using this positioning. And the hook for the launch email."
  4. ORCHESTRATOR: "Synthesize what we decided today into a launch brief document."
  Full end-to-end run. Real decision-making, real editing, real iteration.
- Tool on screen: Claude.ai — all four agents used in sequence
- Student action: Run a similar launch preparation exercise for one of their own offers

**8.3 — Caso de uso 2: atendendo um lead de alto ticket**
- Format: 24-min screen recording (full live demo)
- Content: A real scenario: a lead sent a WhatsApp message about RUNA SYSTEMS — "como funciona, quanto custa, vale para minha empresa?" Arthur runs the squad live:
  1. OFFER AGENT: "I have a lead who runs a 3-person consultancy, sold R$15k projects, now wants to scale without hiring. Draft a personalized proposal for RUNA SYSTEMS for this profile."
  2. CONTENT AGENT: "Write a WhatsApp reply that opens the conversation and moves toward a sales call — my voice, not generic."
  3. INTELLIGENCE AGENT: "What is the typical sales cycle for B2B service providers at R$15k+ contract value? What are the 3 most common decision blockers?"
  How the squad turns a single lead message into a complete strategic response in under 30 minutes.
- Tool on screen: Claude.ai — live client scenario run
- Student action: Pick a real or hypothetical lead scenario from their own business and run it through their squad

**8.4 — Delegação em tempo real: como trabalhar com o squad diariamente**
- Format: 16-min video
- Content: The squad is not a one-time tool — it is a daily operating partner. Arthur's real daily workflow: morning briefing to ORCHESTRATOR, delegation log (what went to which agent, what came back), weekly squad review (what needs to be updated in which system prompt). Practical habit formation: batch your squad interactions, not constant context-switching. The squad works best when you treat it like a real team: scheduled sessions, clear briefs, structured feedback.
- Student action: Write a "Squad Operating Protocol" — how they will interact with their squad daily

**8.5 — O agente de comunicação em ação (condicional)**
- Format: 18-min video (students who chose to build this agent)
- Content: For students who built the COMMUNICATION AGENT: full demo of the agent running a client onboarding sequence. Arthur shows the system prompt, the knowledge base (onboarding checklist, FAQ document, follow-up templates), and live tests: "A new client just signed up for a R$5k project. Draft the onboarding message and the first 3 follow-up touchpoints." Note: the agent produces the communication LOGIC and CONTENT. What platform sends it (email, WhatsApp, ManyChat) is the student's choice and is outside this course scope.
- Tool on screen: Claude.ai
- Student action: (If building this agent) Test 3 client scenarios with COMMUNICATION AGENT

---

### MODULE 9 — A EMPRESA QUE SE GOVERNA
**Purpose:** Structure the squad into a formal organizational model using Paperclip. Add governance, budget logic, and visibility.

**9.1 — Por que estrutura importa (mesmo sendo solo)**
- Format: 10-min video
- Content: The difference between a solopreneur with agents and a structured company with an AI squad is governance. Governance means: who reports to whom, what decisions each agent can make autonomously vs. what requires escalation, how budget is tracked against the work the squad does. Without structure, the squad is a collection of useful tools. With structure, it is the operating system of a company you can eventually sell, license, or scale. Arthur explains why he structured Runa Systems Global as a formal org — even though he is the only human.

**9.2 — Introdução ao Paperclip**
- Format: 14-min video
- Content: What Paperclip is — an AI organization management layer. Where it fits: above your squad (it defines the org chart your agents operate within) and alongside Claude Code (it integrates with the agent infrastructure). Key concepts: org chart nodes, reporting relationships, agent roles, budget lines, decision authority levels. Arthur navigates his own Paperclip configuration on screen.
- Tool on screen: Paperclip — UI walkthrough
- Student action: Install/access Paperclip (setup instructions provided)

**9.3 — Criando o org chart do seu squad**
- Format: 20-min screen recording (live build)
- Content: Arthur creates the Runa Systems org chart live in Paperclip:
  1. Top node: Owner (Arthur) — strategy only
  2. Direct report: ORCHESTRATOR (ORION) — squad coordination
  3. Specialist layer: OFFER AGENT (ARES), CONTENT AGENT (FREYJA), INTELLIGENCE AGENT (ALEX)
  4. Optional: COMMUNICATION AGENT (HERMES) reporting to ORCHESTRATOR
  For each node: role definition, reporting line, decision authority (what this agent decides autonomously vs. escalates), budget allocation (how much Claude API usage / subscription cost is attributed to this agent's work)
- Tool on screen: Paperclip — live org chart build
- Student action: Build their squad's org chart in Paperclip
- Deliverable: Squad Org Chart (exported from Paperclip)

**9.4 — Governança: quem decide o quê**
- Format: 14-min video
- Content: A governance model answers: which decisions does the OFFER AGENT make autonomously (draft a proposal) vs. which require owner review (finalize pricing for a client)? Which outputs from the INTELLIGENCE AGENT go straight to a brief vs. which need owner synthesis? Arthur documents his Delegation Matrix live — a simple grid: agent × decision type × authority level (autonomous / propose to owner / always escalate).
- Tool on screen: Paperclip + Claude.ai (drafting the matrix)
- Student action: Complete the Delegation Matrix Template for their squad
- Deliverable: Delegation Matrix Document

**9.5 — O squad como ativo: o que você construiu e o que vale**
- Format: 10-min video + next steps
- Content: What the student has now: a squad with 4 agents, full system prompts, populated knowledge bases, tested outputs, an org chart, governance rules, and daily operating protocols. This is not just a productivity tool — it is a business asset. Arthur explains: this configuration is now something you can export, document, and eventually sell (AGENT$), teach (CREATOR$), or scale into the full ecosystem (RUNA SYSTEMS). Closing: what is the next logical step (RUNA SYSTEMS pitch, preview of what the full 8-agent ecosystem looks like).
- Student action: Export their full squad configuration. Post in community: "My squad is built."
- Final deliverable: Complete Squad Configuration Export

---

## 5. Deliverables Per Student

By completing $QUAD, the student walks away with:

1. **Squad Architecture Document** — designed specifically for their business type (from Module 2)
2. **ORCHESTRATOR** — fully configured in Claude.ai Projects with tested routing logic
3. **OFFER AGENT** — configured with their complete offer teia, pricing logic, and proposal templates
4. **CONTENT AGENT** — calibrated to their brand voice, with examples and output formats tested
5. **INTELLIGENCE AGENT** — configured with web search enabled, tested on their actual market
6. **COMMUNICATION AGENT** (optional) — configured with their client onboarding and conversation logic
7. **Capability Configuration Map** — which Claude.ai tools are enabled for which agent and why
8. **Delegation Matrix** — which agent handles which decisions, at what authority level
9. **Squad Org Chart** — formal structure built in Paperclip
10. **3+ pieces of real content** — produced by their CONTENT AGENT during the course
11. **2 complete end-to-end scenarios tested** — launch prep and lead handling (from Module 8)
12. **Squad Operating Protocol** — their daily workflow for working with the squad

---

## 6. Materials Library (Skool)

Available as downloads in the Materials section. All templates are editable (Google Docs or PDF with fillable fields).

**Template 1: Squad Architecture Template**
One-page canvas with fields for each agent: name, persona summary, primary use cases (3–5), knowledge base inputs, scope limits, delegation triggers. Arthur's completed version included as reference.

**Template 2: System Prompt Framework — Orchestrator**
Annotated template with 6 sections pre-labeled and explained. Includes: common routing logic patterns, escalation rule examples, output format specifications.

**Template 3: Agent Brief Template (× 4 variants)**
One template per specialist role: OFFER, CONTENT, INTELLIGENCE, COMMUNICATION. Each variant has the sections relevant to that role's system prompt pre-structured with guidance notes.

**Template 4: Delegation Matrix Template**
Grid: agents on one axis, decision types on the other. Three columns: Autonomous / Propose to Owner / Always Escalate. Pre-populated with common examples from Arthur's squad.

**Template 5: Squad Configuration Export (YAML)**
A structured YAML schema for exporting a complete squad configuration: all agent names, personas, system prompt summaries, knowledge base file list, capabilities enabled. Machine-readable and human-readable.

**Template 6: Paperclip Setup Guide**
Step-by-step: access, org chart creation, node configuration, agent role setup, budget allocation walkthrough. Screenshots included.

**Template 7: Arthur's Full Squad Config (Annotated)**
Arthur's ORCHESTRATOR, ARES, FREYJA, ALEX system prompts — annotated with explanatory notes ("this section is here because X," "I removed this part after testing because Y"). Reference document, not copy-paste.

**Template 8: Knowledge Base Inventory Template**
Spreadsheet template: agent name, document name, document description, when last updated, priority level (core / supplementary). For planning and maintaining the knowledge bases.

**Template 9: Voice DNA Extraction Worksheet**
10 exercises for extracting your brand voice patterns from existing writing. Output feeds directly into CONTENT AGENT system prompt.

**Template 10: Squad Operating Protocol Template**
Daily/weekly workflow template: morning briefing format, batch delegation structure, weekly system prompt review cadence, output audit log.

---

## 7. Bonus Structure

**Bonus 1 — Squad Audit Session (Live Call)**
Unlocked at: course completion (all modules completed, squad built)
Format: Monthly live call (60 min) where Arthur audits 3–5 squad configurations from students who post theirs in the community. Real feedback on system prompts, delegation logic, voice calibration.
Value: Equivalent to a 1-on-1 consultation. Keeps the community active.

**Bonus 2 — "Seu Primeiro Cliente com IA" — Script de Venda do Squad**
Unlocked at: Module 8 completion
Format: Text lesson + template
Content: How to explain your AI squad to a potential client without sounding like a tech demo. The narrative: "My team includes specialists for X, Y, and Z — they handle [cognitive work]. I focus on [strategic decisions]." How to position the squad as a premium indicator (you charge more because your infrastructure allows higher quality and faster delivery).

**Bonus 3 — O Agente de Comunicação — Módulo Completo**
Unlocked at: Module 6 completion + student has a communication use case
Format: Full bonus module (Module 8.5 extended) — 3 additional lessons covering:
  1. Designing conversational logic for a knowledge-intensive domain (consulting, coaching, service business)
  2. Handling edge cases: ambiguous client requests, sensitive questions, out-of-scope inquiries
  3. Building the agent's FAQ and knowledge base from real client interaction history

**Bonus 4 — RUNA SYSTEMS Preview**
Unlocked at: Module 9 completion
Format: 20-min video
Content: Arthur shows what happens after $QUAD. The full Runa Systems Global configuration — all 8 neural agents, the full infrastructure, the workers, the automation layer. Not a tutorial — a demonstration of scale. The message: $QUAD is the foundation. This is where it goes. Includes early access offer for RUNA SYSTEMS at a student discount.

---

## 8. Production Checklist (for Arthur)

**Pre-production:**
- [ ] Finalize and export all 10 materials library templates
- [ ] Set up $QUAD Skool classroom with section structure
- [ ] Record Module 0 first (sets tone and expectations)
- [ ] Export annotated squad config before recording (Arthur's squad is the demo case throughout)
- [ ] Pin materials library post in Skool
- [ ] Configure Skool community with welcome post and first weekly thread

**Recording sequence (follow this order — each module builds on the previous):**
1. [ ] Module 0 — all 3 lessons (orientation, no dependencies)
2. [ ] Module 1 — all 5 lessons (conceptual foundation)
3. [ ] Module 2 — all 5 lessons (architecture design, no agents built yet)
4. [ ] Module 3 — all 4 lessons (ORCHESTRATOR first — sets the scaffold)
5. [ ] Module 4 — all 4 lessons (OFFER AGENT)
6. [ ] Module 5 — all 5 lessons (CONTENT AGENT)
7. [ ] Module 6 — all 4 lessons (INTELLIGENCE AGENT)
8. [ ] Module 7 — all 4 lessons (skills — requires all 4 agents to exist for demo)
9. [ ] Module 8 — all 5 lessons (FULL SQUAD DEMO — requires squad complete)
10. [ ] Module 9 — all 5 lessons (Paperclip governance — final layer)
11. [ ] Record all bonuses last

**Recording format per lesson:**
- Intro: state lesson title + what the student will learn (15 seconds)
- Main content: screen share throughout where applicable
- Outro: state student action + deliverable (30 seconds)
- No intros, outros, background music, or filler content
- Export at 1080p minimum, 16:9, with cursor highlight enabled

**Post-production:**
- [ ] Upload to Skool in correct module sequence
- [ ] Add text transcript + summary under each video
- [ ] Add student action + deliverable in text below each video
- [ ] Test all template download links
- [ ] Community welcome sequence configured
- [ ] Bonus unlock conditions configured in Skool

**Quality check before launch:**
- [ ] Run through Module 3 live demo personally — verify ORCHESTRATOR build works end-to-end
- [ ] Run through Module 8.2 demo — launch prep scenario works with real squad
- [ ] Verify all template files open correctly and are editable

---

## 9. Pricing and Upsell

### Pricing Tiers

| Tier | Price | What's Included |
|---|---|---|
| **$QUAD Essential** | R$997 | Full course, all 10 modules, materials library |
| **$QUAD + Squad Audit** | R$1.497 | Essential + guaranteed slot in Squad Audit live call |
| Launch price (first 72 hours) | R$597 | R$997 with launch discount — create urgency, cap at 50 units |

### Upsell Logic

**From $QUAD → CREATOR$**
Trigger: Student's CONTENT AGENT is working well and they want it to publish automatically.
Pitch: "Your CONTENT AGENT writes the posts. CREATOR$ makes them ship — automatically, to Instagram, with the right format, at the right time."
Timing: Pitch at Module 5 completion ("you now have a content agent — here's where it goes next").

**From $QUAD → AGENT$**
Trigger: Student wants to productize their squad for their clients or build custom agents for a niche.
Pitch: "You built your squad. Your clients need one too. AGENT$ teaches you how to package this as a service and charge for it."
Timing: Pitch at Module 9 ("your squad is built — now turn it into an offer").

**From $QUAD → RUNA SYSTEMS**
Trigger: Student finishes the course and understands the potential but wants the full stack.
Pitch: "You have 4 agents. Runa Systems gives you 8 — plus the full infrastructure: automation workers, content pipeline, commercial system, financials. It is not a course. It is the operating system."
Timing: Bonus 4 (Runa Systems Preview) — course completion, high intent moment.
Offer: Student discount on RUNA SYSTEMS for $QUAD completers (R$12k instead of R$15k, valid 30 days).

### Revenue Projection

| Scenario | Units | Average Price | Revenue |
|---|---|---|---|
| Conservative (launch) | 50 | R$700 | R$35k |
| Base (first 90 days) | 150 | R$900 | R$135k |
| Strong (with upsell) | 300 | R$1.100 (blended) | R$330k |

Upsell conversion to RUNA SYSTEMS: 5–10% of completers (15–30 students at R$12k–15k = R$180k–450k additional).

**Pricing rationale:**
R$997 is priced below AGENT$ (R$1.997) because $QUAD teaches squad architecture for your own business — not building agents as a product. The premium for AGENT$ is the productization layer. $QUAD is the foundation; the stack is the lifetime value.

---

*Document produced by ARES + ORION | Date: 2026-04-04 | Project: RUNA SYSTEMS | Status: production-ready*
