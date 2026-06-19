---
date: 2026-05-24
tags: [skills, ares, orion, runa-os, acquisition, onboarding, four-cs, intake]
project: runa-systems-global
type: skill-doc
---

# Skills ARES — Client Acquisition & Onboarding

> Two skills covering the client lifecycle extremes: **pre-sale diagnostic** (ARES) and **Day 1 onboarding** (ORION).
> Installed at: `~/.claude/skills/runa-os-audit/` and `~/.claude/skills/runa-intake/`

---

## Framework: Four Cs (AI Maturity Model)

| C | Measures | Score range |
|---|---------|-------------|
| **Context** | Structured business knowledge available as AI context | 0–25 |
| **Connections** | AI connected to external tools/automations | 0–25 |
| **Capabilities** | Custom agents or automations built | 0–25 |
| **Cadence** | KPIs and recurring AI-driven processes exist | 0–25 |

**Total: 100 points.** Score drives product recommendation.

---

## `/runa-os-audit` — Four Cs Diagnostic (ARES)

### When to use

- Prospect requested more info after aperitivo or Instagram post
- ARES is conducting a sales conversation and needs to qualify AI maturity level
- As standalone deliverable: ORÇAMENTO$ can bundle this audit at R$97
- **Not for:** clients who already purchased → use `/runa-intake` instead

### 7 Questions

| # | C-level | Question |
|---|---------|---------|
| Q1 | Context | Which AI tool do you use most? How often? |
| Q2 | Context | Do you have digital business documents (processes, scripts, personas, offers)? |
| Q3 | Connections | Have you connected Claude (or any AI) to an external tool (CRM, email, WhatsApp)? |
| Q4 | Connections | Do you have any process that runs automatically without your intervention? |
| Q5 | Capabilities | Have you created any custom agent or automation for your business? |
| Q6 | Cadence | Do you have KPIs to measure results from automations/agents? |
| Q7 | Free | What is your biggest operational pain point this week? |

### Scoring per C

| Score | Level |
|-------|-------|
| 0–6 | Non-existent |
| 7–13 | Beginner |
| 14–19 | Intermediate |
| 20–25 | Advanced |

### Score → Product Recommendation

| Total | RUNA Product |
|-------|-------------|
| 0–25 | RUNA SYSTEMS (entry) — needs full base |
| 26–50 | RUNA SYSTEMS + accelerated Module 0 |
| 51–75 | RUNA INTERVENÇÃO — Arthur implements alongside |
| 76–100 | RUNA MENTORIA — stack exists, needs strategy |

### Output format

```
RUNA OS AUDIT — [Prospect Name]
Score: XX/100
Context: XX/25 | Connections: XX/25 | Capabilities: XX/25 | Cadence: XX/25

Top-3 Gaps (by leverage):
1. [Critical gap] → [corrective action]
2. [Second gap] → [corrective action]
3. [Third gap] → [corrective action]

Recommendation: [Product + justification]
[DM-ready copy block for Arthur's closing conversation]
```

---

## `/runa-intake` — Day 1 Onboarding (ORION)

### When to use

- Client just entered RUNA SYSTEMS (any modality: program, mentoria, intervenção)
- ORION is configuring the client's squad of 8 neural agents
- Client context is scattered (notes, recordings, docs) — needs structured capture
- **Not for:** prospects who haven't purchased → use `/runa-os-audit` first

### 7 Questions + Files Created

| # | File | Question |
|---|------|---------|
| Q1 | `identity.md` | Name, main offer, ideal client? |
| Q2 | `references/voice.md` | 2 real writing samples — verbatim, no drafts or paraphrase |
| Q3 | `priorities.md` | Top 3 business priorities in next 90 days? |
| Q4 | `revenue-map.md` | Where does revenue come from? Which product/channel generates most? |
| Q5 | `channels.md` | How do you communicate with clients (Instagram, WhatsApp, email)? |
| Q6 | `storage.md` | Where are your materials (recordings, notes, processes, docs)? |
| Q7 | `pain-ead.md` | Biggest operational pain this week? How do you track tasks today? |

**Q2 critical rule:** Verbatim samples only — no summaries, no paraphrase, no "cleaned up" versions. This is the voice DNA anchor that all 8 agents use to generate copy in the client's voice.

**Q7 auto-identifies:** EAD Gate candidate (Eliminate / Automate / Delegate) → becomes the first project for the client's squad.

### File structure created

```
squads/{client-slug}/
├── context/
│   ├── identity.md
│   ├── priorities.md
│   ├── revenue-map.md
│   ├── channels.md
│   ├── storage.md
│   └── pain-ead.md
└── references/
    └── voice.md
```

---

## Acquisition Funnel (combined flow)

```
Prospect sees post → comments keyword → receives aperitivo (HERMES/Zernio)
  ↓
ARES: /runa-os-audit → Four Cs score → product recommendation → closing copy
  ↓
[Closing] → Client enters RUNA SYSTEMS
  ↓
ORION: /runa-intake → 7 context files → squad configured
  ↓
8 neural agents operate personalized for client's business
```

---

## Agent Assignments

| Agent | Role |
|-------|------|
| **ARES** | Owns `/runa-os-audit` — executes in pre-sale, delivers report for Arthur's closing conversation |
| **ORION** | Owns `/runa-intake` — executes Day 1, creates 7 context files, identifies EAD candidate |
| HERMES | Qualifies prospects before audit (comment → keyword → DM → pre-sale form) |
| FREYJA | Uses `voice.md` (from intake) to calibrate copy for all client agents |
| @dev | Reads `context/` + `references/` to personalize client interfaces and automations |
| @pm | Uses `priorities.md` + `pain-ead.md` to create client squad epic backlog |

---

## `creative-brief` — Agency Client Onboarding (Brand Projects)

**Skill:** `/creative-brief` | **Owner:** ARES / FREYJA
**Trigger:** "criar brief", "onboarding de cliente", "abrir projeto de identidade visual", "brief da marca"
**Part of:** Agency Visual Identity Pipeline (Step 1 — must run first)

Structured intake for branding/design client projects. Distinct from `/runa-intake` (which onboards RUNA SYSTEMS clients). Use `creative-brief` when starting an identity or brand design engagement.

```
/creative-brief
# Asks: client name, sector, brand personality, colors (existing or TBD),
#        target audience, inspiration references, deliverables
# Saves to: outputs/[cliente]/brief/brief.md
# Feeds: all downstream skills (paleta-cores, logomarca, mockups, moodboard)
```

**Key output (`brief.md`) fields:**
- `client_name`, `sector`, `personality` (adjectives), `target_audience`
- `existing_colors` (hex or "none"), `style_references` (URLs or keywords)
- `deliverables` (which mockups/assets are in scope)

**Agent routing after brief:**
- Brand colors → MAYA `/paleta-cores`
- Logo → MAYA `/logomarca`
- Typography → @ux-design-expert `/tipografia`
- Mockups → MAYA (corporativo / produto / ambiente)
- Moodboard → MAYA `/moodboard`

---

## Related

- Rule: `.claude/rules/ead-gate.md` — EAD triage logic (same pattern as Q7 in intake)
- Rule: `.claude/rules/product-radar.md` — RUNA product architecture + Four Cs scoring map
- Connections: `SÍRIOS/📐 Projetos/runa-systems-prd.md` → Client Maturity section
- Rule: `.claude/rules/agent-authority.md` → ARES scope (pre-sale intelligence)
