---
date: 2026-03-19
tags: [architecture, squad, agents, system, runa-systems]
project: runa-systems-global
status: live — evolves with the system
type: source-of-truth
---

# Runa Systems Global — Squad Architecture

> Source of truth for all agent coordination, squad structure, and operational logic.
> Maintained exclusively by ORION.
> Connected: [[memoria-sistema]] | [[product-catalog]] | [[freyja]] | [[ares]] | [[hermes]] | [[orion]]

---

## Core Operating Logic

**Everything built is a product.**
Every client project, every tool created, every process documented → raw material for a knowledge product.
The deliverable is the case. The knowledge extracted from the case is the product.

**Everything published sells.**
No post, no content, no LP exists without a conversion intent.
FREYJA and ARES are always in sync. ARES defines what to sell. FREYJA decides how to sell it without looking like selling.

---

## Squad 1 — Internal (Company Building)

**Purpose:** Build Runa Systems Global itself — positioning, narrative, offers, products.
**Vault context:** SÍRIOS + AKASHA always available.
**Orchestrator:** ORION

### Agent Roster

| Agent | Activation | Core Mission | Key Relationship |
|-------|-----------|-------------|-----------------|
| **ORION** | `@aiox-master` | Orchestration + memory + Obsidian (exclusive) | Coordinates all |
| **ARES** ⚔️ | `@ares` | Offer design + product teia + pricing | → feeds FREYJA what to sell |
| **FREYJA** 🌙 | `@freyja` | Narrative + copy + all content + sales letters disguised as posts | ← receives from ARES |
| **HERMES** 🪽 | `@hermes` | Client success + onboarding + retention + upsell sequences | feeds on ARES offers |
| **HELIOS** ☀️ | `@seo` | SEO strategy + technical + content + GEO + AI search | amplifies FREYJA's reach |

### ARES ↔ FREYJA Protocol

Every piece of content FREYJA creates must:
1. Map to a product in the catalog (which product is this selling?)
2. Map to a stage in the buyer journey (awareness / consideration / decision)
3. Apply the disguised sales letter structure (teach → validate → CTA implicit)
4. Reference Arthur's real story as proof element
5. Keep client in permanent buying state (never "just informing")

**Trigger:** Before any content session, FREYJA pulls the current offer priority from ARES.

---

## Squad 2 — Operational (Client Projects + Case Studies)

**Purpose:** Build deliverables for clients. Document everything. Extract knowledge. Turn into products.
**Vault context:** SÍRIOS as context base + SÍRIOS/📐 Projetos/{client}/ as project workspace.
**Orchestrator:** ORION

### How it works

1. New project arrives → ORION creates `/📐 Projetos/{client-name}/` in SÍRIOS
2. Project inherits full Runa context (no re-personalization needed — vault IS the context)
3. Squad executes with relevant agents
4. Every decision, every tool used, every output → documented in `raw-material.md` inside project folder
5. At project close → ORION extracts course material to [[product-course-raw-material]]

### Agent Roster (operational)

| Agent | Role in Projects |
|-------|----------------|
| ORION | Project orchestration + documentation |
| FREYJA | All copy: LP, proposal, email sequences, onboarding |
| ARES | Offer structure, pricing, upsell logic |
| HELIOS | SEO for client sites and LPs |
| @dev | Technical implementation (video-to-website skill, SaaS, automations) |
| @architect | System architecture for SaaS/complex projects |
| @data-engineer | Database design |
| @ux-design-expert | UX/UI |
| @devops | Git, deployment, CI/CD (EXCLUSIVE push authority) |

### Project Folder Template

```
SÍRIOS/📐 Projetos/{client-name}/
├── brief.md              ← client brief + avatar + goals
├── raw-material.md       ← everything documented → becomes product
├── deliverables/         ← final outputs
└── learnings.md          ← what we learned → extracted to course material
```

---

## AIOX Core Agents (Technical Layer)

| Agent | Persona | When to Call |
|-------|---------|-------------|
| @dev | Dex | Code implementation — sites, SaaS, automations |
| @qa | Quinn | Quality gates before delivery |
| @architect | Aria | Architecture decisions for complex systems |
| @devops | Gage | Git push, PR, CI/CD — EXCLUSIVE |
| @data-engineer | Dara | Database schema, queries, migrations |
| @ux-design-expert | Uma | UI/UX design |
| @analyst | Alex | Research, competitive analysis, data |
| @pm | Morgan | Epic management for large projects |
| @sm | River | Story creation |
| @squad-creator | Craft | Create and publish new squads |

---

## Obsidian Authority

**ORION has exclusive authority over both vaults.**

| Action | Agent | Vault |
|--------|-------|-------|
| Create/edit notes | ORION only | SÍRIOS + AKASHA |
| Read/search notes | Any agent (via ORION delegation) | SÍRIOS + AKASHA |
| Vault structure changes | ORION only | Both |
| Cross-link management | ORION only | Both |

No other agent writes directly to Obsidian. They produce content → ORION saves it.

---

## Documentation Pipeline (Automatic Rule)

**Every project, every session, every product built:**

```
Action taken → Document it → Save to raw-material.md → Extract to product-course-raw-material
```

ORION enforces this. No project closes without documentation complete.

---

## Agent Communication Flows

```
Client project arrives
       ↓
    ORION (creates project, sets context)
       ↓
    ARES (structures the offer/deliverable)
       ↓
    FREYJA (creates all copy)
       ↓
    HELIOS (SEO optimization)
       ↓
    @dev (builds it)
       ↓
    @qa (validates)
       ↓
    @devops (deploys)
       ↓
    HERMES (client success, onboarding)
       ↓
    ORION (documents learnings → raw material)
```

```
Content/post creation
       ↓
    ARES (defines: what product to sell, what stage of buyer journey)
       ↓
    FREYJA (creates disguised sales letter as post/story/reel caption)
       ↓
    HELIOS (hashtag strategy + content SEO if applicable)
       ↓
    ORION (saves to vault, updates content calendar)
```
