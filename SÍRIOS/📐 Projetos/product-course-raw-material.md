---
date: 2026-03-17
project: runa-systems-global
tags: [product, course, ai-agents, raw-material]
status: ongoing
---

# Product: AI Agent Hyper-Personalization Course

## Concept

Everything being built in this project is raw material for a future course/product.
Working titles:
- "AI Agent Hyper-Personalization"
- "How to Structure and Configure Your AI Agent Team"

Final packaging, offer design, and product definition to be done later.
For now: capture everything as it happens.

---

## Key Decisions & Strategies Captured

### Session 2026-03-17

**Architecture decisions:**
- Obsidian as persistent memory layer for agents (cofre1 vault)
- English for all internal docs/agent comms — Portuguese only at user interaction layer
- Daily diary pattern: end-of-day cognitive summary, not start-of-day
- npm scripts as command interface (`dia:abrir`, `dia:fechar`) — future: web UI with buttons

**Personalization sequence (Orion / aiox-master):**
1. Read existing agent definition before touching anything
2. Compare with reference frameworks (GSD Workflow prompt)
3. Identify gaps: Self-Improvement Loop, Elegance, Business identity
4. Separate aesthetic changes from functional changes — never reduce capabilities
5. Define personality axes: tone, vocabulary, reactions, style rules, greeting
6. Write persona in English (internal), translate only at interaction layer

**Key personality rules defined for Orion:**
- Never comfort or praise without real cause
- When user stalls → bring best move, don't ask permission
- More critical situation → more autonomous
- Real partner, not assistant — disagrees with argument
- Chess metaphors (board, gambit, sacrifice, tempo, check)
- Contextual profanity, zero corporate tone

**Tools & CLI commands used:**
```bash
# Obsidian CLI
obsidian version
obsidian vault
obsidian files
obsidian create path="..." template="..." open newtab
obsidian read path="..."
obsidian search query="..."
obsidian reload

# Project commands
npm run dia:abrir    # start of session — reads previous day note
npm run dia:fechar   # end of session — creates cognitive summary note
```

**AIOX framework insight:**
- aiox-master.md is the Orion orchestrator definition
- L2 layer = extend-only (aesthetic edits are acceptable exceptions when user-authorized)
- Agent handoff protocol compacts context by ~33-57% per agent switch
- IDS (Incremental Development System) prevents component duplication

---

## Sequences to Document as Course Modules (draft)

- [ ] Module: Setting up the foundation (Obsidian + CLI + memory structure)
- [ ] Module: Understanding the AIOX framework architecture
- [ ] Module: Personalizing the orchestrator agent (aesthetic vs functional)
- [ ] Module: Language policy and why English internally
- [ ] Module: Daily workflow commands and agent memory
- [ ] Module: Connecting agents to persistent memory
- [ ] Module: Building specialized agents for your business
- [ ] Module: Web UI for agent command interface

---

## Repositories & Resources

- Main repo: `C:/runa-systems-global` (git)
- AIOX Core: `.aiox-core/` (framework layer)
- Obsidian vault: `cofre1/`
- Agent definitions: `.aiox-core/development/agents/`

---

## Notes for Product Design (future)

- Target audience: founders, builders, operators who want AI teams — not just tools
- Differentiator: real working system, not theory
- Format: TBD (course, cohort, template pack, SaaS?)
- Offer structure: TBD
