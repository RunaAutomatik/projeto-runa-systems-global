---
date: 2026-03-21
tags: [product, squad, prd, ai-first-business, low-ticket, framework]
project: runa-systems-global
status: draft — ready for execution
type: product-prd
---

# $QUAD — Product Requirements Document

> **Tagline:** Your squad works. You orchestrate. You charge premium.
> **Position in teia:** Low ticket (flagship) → upsell to RUNA SYSTEMS / RUNA MENTORIA

---

## The Big Idea

$QUAD teaches how to build a hyperpersonalized AI agent squad for a solo entrepreneur, mentor, or consultant — and run a real business on it. The squad handles operations: offer creation, content, Instagram automation, client onboarding, sales narratives. The expert orchestrates and charges premium.

**This project (Runa Systems Global setup) IS the raw material for this product.** Everything built here — the agents, the workflows, the architecture decisions, the failures and fixes — becomes the content.

**The protagonist:** Alpha® — the avatar created in CREATOR$ with the brain built in MIND$. Her fictional business (mentorship) is the case study. The squad is built to run that business, live, on screen, documented as it happens.

---

## Core Promise

> "By the end of $QUAD, you'll have a configured agent squad running your business logic — and you'll understand the architecture well enough to adapt it as you grow."

---

## Who It's For (ICP)

**Primary:** Solo entrepreneurs, mentors, consultants, and creators who want to scale delivery and presence without hiring a team or spending more hours.

**The transformation:** From "I do everything myself" → "My squad does the operations, I do the decisions."

**This is NOT for:** Someone looking for a magic-bullet tool tutorial. $QUAD teaches logic and architecture — specific tools will change, the thinking won't.

---

## The Framework — SQUAD Architecture

```
ORCHESTRATOR (Orion-equivalent)
└── Coordinates the squad, receives requests, delegates tasks

OFFER AGENT (ARES-equivalent)
└── Structures products, prices, upsells, offer narratives

CONTENT AGENT (FREYJA-equivalent)
└── Writes copy, captions, sales letters, Instagram content in brand voice

AUTOMATION AGENT (HERMES-equivalent)
└── Handles Instagram DMs, comment triggers, onboarding sequences, follow-ups

INTELLIGENCE AGENT (ALEX-equivalent)
└── Researches competitors, extracts positioning, surfaces market intelligence

[OPTIONAL — depending on business type]
VISUAL AGENT (MAYA-equivalent)
└── Briefs image generation, manages visual consistency, coordinates storybook
```

Each agent is built from the knowledge bases created in MIND$. The orchestrator runs on AIOX (or Claude directly, depending on student's setup).

---

## Module Structure

### MODULE 0 — COMECE AQUI
**Objective:** Understand what a squad is, why it works, and what we're building

| Lesson | Format | Content |
|--------|--------|---------|
| 0.1 — Welcome | Video (3min) + Text | What $QUAD produces; what you need to have ready (CREATOR$ + MIND$ outputs) |
| 0.2 — What is a squad | Video (8min) + Text | Agent architecture logic; orchestrator + specialists model; how it differs from single-agent |
| 0.3 — The business case | Video (6min) + Text | Alpha®'s business: what she needs the squad to do; how to map your own |

---

### MODULE 1 — MAPPING YOUR BUSINESS
**Objective:** Student has a clear map of what their squad needs to handle before building anything

| Lesson | Format | Content |
|--------|--------|---------|
| 1.1 — Business function mapping | Video (8min) + Template | What operations consume your time? What decisions only you can make? |
| 1.2 — The delegation matrix | Video (8min) + Text | What goes to squad vs. stays with you; authority levels; escalation logic |
| 1.3 — Squad design for your model | Video (10min) + Text | Which agents you need; which are optional; starting with 3 vs. building to 8 |

**Deliverable:** Student's squad architecture map — names, functions, authority scope.

---

### MODULE 2 — BUILDING THE ORCHESTRATOR
**Objective:** Set up the orchestrator that coordinates the entire squad

| Lesson | Format | Content |
|--------|--------|---------|
| 2.1 — The orchestrator's job | Video (6min) + Text | Routing logic; when to delegate vs. handle directly; context management |
| 2.2 — System prompt architecture | Video (10min) + Text | How to write an orchestrator that coordinates specialists without hallucinating |
| 2.3 — Build in public: Alpha®'s Orion | Video (12min) + Text | Screen recording: building Alpha®'s orchestrator live from scratch |
| 2.4 — Testing and calibration | Video (8min) + Text | Real test scenarios; how to identify and fix routing failures |

---

### MODULE 3 — THE OFFER AGENT
**Objective:** Agent that structures products, prices, and offer narratives

| Lesson | Format | Content |
|--------|--------|---------|
| 3.1 — What the offer agent knows | Video (6min) + Text | Knowledge base from MIND$; Hormozi-style offer logic; price anchoring |
| 3.2 — Build in public: Alpha®'s ARES | Video (10min) + Text | Screen recording: configuring ARES for Alpha®'s product teia |
| 3.3 — Generating an offer live | Video (8min) + Text | Real prompt → offer structure output; iteration and calibration |

---

### MODULE 4 — THE CONTENT AGENT
**Objective:** Agent that writes in brand voice across all formats

| Lesson | Format | Content |
|--------|--------|---------|
| 4.1 — Brand voice as system prompt | Video (8min) + Text | How the storyboard from CREATOR$ + tone from MIND$ become the content agent's DNA |
| 4.2 — Build in public: Alpha®'s FREYJA | Video (10min) + Text | Screen recording: configuring FREYJA with Alpha®'s voice and content formats |
| 4.3 — Content formats and outputs | Video (8min) + Text | Instagram captions, Reels scripts, sales letters, email sequences — one agent, all formats |

---

### MODULE 5 — THE AUTOMATION AGENT
**Objective:** Agent that handles Instagram flows, DMs, and client sequences

| Lesson | Format | Content |
|--------|--------|---------|
| 5.1 — Instagram automation architecture | Video (8min) + Text | Comment triggers → DM → onboarding; tools (ManyChat, N8N); what Claude handles vs. what automation handles |
| 5.2 — Build in public: Alpha®'s HERMES | Video (10min) + Text | Screen recording: building the comment → DM flow for Alpha®'s Instagram |
| 5.3 — Onboarding and follow-up sequences | Video (8min) + Text | What happens after someone enters the funnel; 3-touch automation architecture |

---

### MODULE 6 — THE INTELLIGENCE AGENT
**Objective:** Agent that researches, monitors, and surfaces actionable intelligence

| Lesson | Format | Content |
|--------|--------|---------|
| 6.1 — What intelligence means in business | Video (6min) + Text | Competitor monitoring, market gaps, content performance signals |
| 6.2 — Instagram competitor mapping | Video (10min) + Text | Build in public: mapping a competitor's full Instagram to extract positioning, narrative, format patterns |
| 6.3 — Build in public: Alpha®'s ALEX | Video (8min) + Text | Configuring the intelligence agent with Alpha®'s competitive context |

---

### MODULE 7 — THE SQUAD RUNNING LIVE
**Objective:** Show the full squad operating as a system on a real use case

| Lesson | Format | Content |
|--------|--------|---------|
| 7.1 — Alpha®'s business, end-to-end | Video (15min) + Text | Full screen recording: Arthur runs through Alpha®'s full workflow — from "I need to launch a product" to the squad producing: offer structure, sales copy, Instagram content, DM sequence |
| 7.2 — Adapting the framework | Video (8min) + Text | How to map this to your business type: consultant, SaaS founder, coach, content creator |
| 7.3 — Maintenance and evolution | Text | How squads break; how to fix them; when to add agents; version control |

---

### BONUS
- **Squad Framework Document (PDF):** The complete framework — architecture diagram, delegation matrix template, agent brief template, orchestrator design checklist
- **Alpha®'s Full Squad Config:** The actual system prompts and configuration used to build Alpha®'s squad — annotated and ready to adapt
- **Micro-product map:** How the byproduct processes (Instagram mapping, extraction workflow) can be packaged as separate low-ticket products

---

## Pricing

| Tier | Price | What's included |
|------|-------|-----------------|
| Base | R$297 | All modules + bonus |
| Full Bundle (CREATOR$ + MIND$ + $QUAD) | R$597 | Complete system |
| Upsell | → RUNA SYSTEMS (R$15k) | "You've built the system. Now let's scale it." |
| Upsell | → RUNA MENTORIA (R$30k) | Hands-on with Arthur |

---

## Upsell Logic

```
$QUAD output: a functioning agent squad running business operations
    ↓
Desire created: "I want this built FOR me, not just shown to me"
    ↓
RUNA MENTORIA: Arthur guides the implementation (R$30k)
    ↓
RUNA INTERVENÇÃO: Arthur implements directly (R$50k)
```

---

## The Build-in-Public Strategy

**Every module is a screen recording of Arthur building Alpha®'s squad live.**

This means:
1. The content is created by doing the work — not scripting lectures
2. The imperfections (wrong prompts, iterations, fixes) are the teaching moments
3. Alpha® getting a real squad = proof of concept = marketing asset
4. The same recordings become Instagram content (30s clips) and YouTube content

**Content harvest from $QUAD production:**
- Each build session → 1 module + 3–5 Instagram clips + 1 YouTube video
- Alpha®'s squad going live → launch event + case study
- The "my avatar runs my business" narrative → RUNA SYSTEMS marketing anchor

---

## Production Plan

### What Arthur needs to record (in sequence):
- [ ] Alpha®'s business mapping session (Module 1)
- [ ] Building Alpha®'s orchestrator live (Module 2.3)
- [ ] Configuring ARES for Alpha®'s offers (Module 3.2)
- [ ] Configuring FREYJA with Alpha®'s voice (Module 4.2)
- [ ] Building Alpha®'s Instagram automation flow (Module 5.2)
- [ ] Building Alpha®'s intelligence agent (Module 6.3)
- [ ] Full squad live run — end-to-end demo (Module 7.1)

### Note on production order:
CREATOR$ images + storyboard must be complete before recording $QUAD, since Alpha® appears in all materials and her storybook is the input for the content agent configuration.

---

## Connections

- **Requires:** [[creator-dollar-prd]] (Alpha®'s visual identity + storybook)
- **Requires:** [[mind-dollar-prd]] (Alpha®'s knowledge base + extraction methodology)
- **Feeds into:** [[runa-systems-prd]] (CREATOR$ + MIND$ + $QUAD = 3 modules of RUNA)
- **Built from:** This project (Runa Systems Global) is the raw material
- **Catalog entry:** [[product-catalog]]
