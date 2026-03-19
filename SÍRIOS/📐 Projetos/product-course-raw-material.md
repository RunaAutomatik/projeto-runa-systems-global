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

---

## Session 2026-03-19 — Squad Architecture + Product Clarity

**Key decisions captured:**

**Two-squad architecture defined:**
- Squad Interno: builds the company (ORION + ARES + FREYJA + HERMES + HELIOS)
- Squad Operacional: builds for clients — same squad, contextualized per project via SÍRIOS vault
- No re-personalization per client: vault IS the context. Every project lives in SÍRIOS/📐 Projetos/{client}/

**The core business logic crystallized:**
> "Everything built is a product. The case is the entry. The knowledge is the product."
> Client budget → ORÇAMENTO$ product
> This squad setup → $QUAD product
> Instagram results → POSICIONAMENTO$ product
> Avatar Alpha → CREATOR$ product

**FREYJA mandate expanded:**
- Not just Instagram copy — ALL copy across all channels and client projects
- Every post is an invisible sales letter mapped to a specific product
- Always syncs with ARES before any content session
- Keeps audience in permanent buying state

**HELIOS created (SEO agent):**
- 8 SEO skills integrated in one agent
- Primary role: amplify FREYJA's output with SEO layer
- FREYJA writes → HELIOS amplifies → content is both magnetic AND findable
- Covers: technical, content, GEO (AI search), Instagram SEO, schema, sitemaps

**Product catalog documented (in SÍRIOS):**
Low ticket: ORÇAMENTO$, $QUAD, POSICIONAMENTO$, CREATOR$, AGENTE$ + Lives + Agentes específicos
Mid ticket: ALPHA®, MAYA®, ICARUS®
High ticket: RUNA SYSTEMS R$15k, RUNA MENTORIA R$30k, RUNA INTERVENÇÃO R$50k

**Module added to course outline:**
- [ ] Module: Why FREYJA + ARES always communicate (the disguised sales letter system)
- [ ] Module: The two-squad model — internal vs operational
- [ ] Module: How every client project becomes a knowledge product
- [ ] Module: The permanent buying state — content strategy that sells without selling
- [ ] Module: Building HELIOS — SEO as the compound interest of content
- [ ] Module: Documenting as you go — the raw material pipeline

**ORION exclusivity over Obsidian:**
- Only ORION reads/writes to SÍRIOS and AKASHA
- Other agents produce → ORION saves
- Vaults = the shared context available to all squads without re-personalization

---

## Session 2026-03-19 — Tooling: Equipping the Squad

### The repository mapping process

9 GitHub repositories evaluated in a single session. The evaluation framework:

1. **What does this tool actually do?** (not what the README promises)
2. **Which agent benefits?** (map to specific squad member, not "everyone")
3. **What type of tool is it?** (skill, MCP, library — each installs differently)
4. **Is it already installed?** (always check before installing — 3 of 9 were redundant)
5. **Does it require an external dependency?** (Docker, Python, running instance)

**Practical insight:** Of 9 repos evaluated, only 2 needed actual installation. 3 were already present, 2 were covered by something else, 1 needed Docker (unavailable), 1 was deferred.

---

### The 3 types of tools in an AI squad

Understanding the difference prevents confusion and bad installation decisions:

**Type 1 — Skills** (expand what the agent KNOWS)
- Live in `~/.claude/skills/` or `.claude/skills/` (project level)
- Loaded at session start, always available
- Examples: `ui-ux-pro-max`, `ads-*`, `seo-*`
- Install via: `claude plugin install`, npm CLI (`npx uipro-cli init`), or copy to skills dir

**Type 2 — MCPs** (give the agent ACCESS to external services)
- Live in `~/.claude.json` as server config
- Connect Claude to live platforms: n8n, NotebookLM, databases, Gmail, etc.
- Types: `stdio` (spawns a process) or `http` (calls an API)
- Install by: adding entry to `~/.claude.json` mcpServers object
- ⚠️ Require session restart to activate

**Type 3 — Libraries/Frameworks** (used in code, not in Claude itself)
- Example: `remotion` for video creation
- Not installed in Claude — used by @dev when writing code
- Install in the project: `npm install remotion`

---

### How to install a stdio MCP (the n8n pattern)

The `n8n-mcp` installation walkthrough — replicable for any stdio MCP:

```json
// ~/.claude.json — mcpServers section
"n8n-mcp": {
  "type": "stdio",
  "command": "npx",
  "args": ["-y", "n8n-mcp"],
  "env": {
    "N8N_BASE_URL": "https://your-n8n-instance.railway.app",
    "N8N_API_KEY": "your-api-key"
  }
}
```

Key decisions in this pattern:
- Use `npx` as command (not the package name directly) — avoids "command not found" failures
- Pass credentials via `env` object (not hardcoded in args)
- `"-y"` flag auto-confirms npx installation without prompting
- Session restart required — docker-gateway caches tools at startup

**Two modes for n8n-mcp:**
- Documentation mode (no credentials) → Claude designs n8n workflows
- Instance mode (with N8N_BASE_URL + N8N_API_KEY) → Claude executes real workflows

For HERMES automations (Instagram DM responses, Skool onboarding), instance mode is required.

---

### The tooling inventory as infrastructure document

Every squad needs a single source of truth for tooling. Not in someone's head. Not scattered across configs. One document.

`tooling-inventory.md` structure:
1. MCPs (active native + configured via claude.json)
2. Skills (grouped by agent: ads for ARES, seo for HELIOS, etc.)
3. Plugins (Claude Code plugins)
4. External CLIs (gws, gh, git)
5. Repository disposition (what was evaluated, what decision was made)
6. Pending decisions (Docker? claude-mem?)

This document prevents two failure modes:
- Installing something already installed
- Not knowing what's available when you need it

---

### Agent-tool mapping (the assignment table)

Every tool has an owner. The assignment table:

| Tool | Primary Agent | Use Case |
|------|--------------|---------|
| ads-* (18 skills) | ARES | Ad audits, campaign creation, competitor analysis |
| seo-* (13 skills) | HELIOS | Technical SEO, content optimization, GEO |
| ui-ux-pro-max | @ux-design-expert / @dev | LP design, client sites, design systems |
| n8n-mcp | HERMES | Automations: DMs, onboarding, upsell sequences |
| notebooklm-mcp | FREYJA / ARES | Podcast generation, course module creation |
| Gmail MCP | HERMES / ORION | Client communication, onboarding emails |
| Figma MCP | @ux-design-expert | Design assets, component inspection |
| Neon / Supabase | @data-engineer | Database for SaaS client projects |

Assignment is not permanent — context overrides. ORION can use any tool when orchestrating.

---

### Module additions for $QUAD course

- [ ] Module: How to evaluate and map GitHub repos to your squad (the 5-question framework)
- [ ] Module: The 3 types of tools — skills vs MCPs vs libraries
- [ ] Module: Installing an stdio MCP step by step (n8n walkthrough)
- [ ] Module: The tooling inventory document — your squad's infrastructure source of truth
- [ ] Module: Agent-tool assignment table — who uses what and why
- [ ] Module: What's already installed vs what to build — the audit before the install

