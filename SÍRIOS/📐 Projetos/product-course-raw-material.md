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

## [2026-04-02] — LP RUNA SYSTEMS: Build Completo com Squad de IA

**What was built/decided:**
LP de alta conversão para RUNA SYSTEMS reconstruída do zero em React + TypeScript + Vite + Tailwind + Framer Motion. Design system Nordic/cosmic dark com squad completo: FREYJA (copy), ARES (oferta), ui-ux-pro-max (design intelligence), @dev (implementação). 3 planos de preço com checkout Herospark. Deploy Netlify com `netlify.toml`.

**Product module this feeds:**
SITE$ — construção de LP de alto ticket com IA + squad de agentes. Processo completo documentado de ponta a ponta.

**Raw material value:**
Este processo mostra como construir uma LP de R$15k+ de valor usando IA do zero em uma sessão — design system, copy, arquitetura de oferta, implementação e deploy. Isso que agências cobram R$8k–20k para fazer.

**Key artifacts:**
- `apps/lp-runa/` — código completo da LP (React + TS + Vite + Tailwind + Framer Motion)
- Design system: paleta Nordic/cosmic (teal #0FFCF7, violet #7C3AED, space black #020818)
- Tipografia: Space Grotesk (heading) + Inter (body)
- Estrutura de 10 seções: Hero, Dor, Solução, Como Funciona, Planos, Prova Social, Para Quem, Garantia, FAQ, CTA
- 3 planos: RUNA SYSTEMS R$5k (destaque) / INTERVENÇÃO R$8k / MENTORIA R$15k
- `netlify.toml` — build config + SPA redirect automático

**Squad decision log:**
- FREYJA: narrativa "não é curso, é infraestrutura do negócio pós-humano" — sem hype, sem recovery story
- ARES: Value Equation aplicada — R$5k como âncora principal (menor barreira + maior escala)
- ui-ux-pro-max: Dark Mode OLED + Liquid Glass para premium SaaS high-ticket
- Framer Motion: staggered reveals com useInView (IntersectionObserver — performance nativa)
- Garantia 30 dias incondicional como alavanca de conversão principal (Hormozi)

---

## [2026-04-04] — ORÇAMENTO$: Primeiro Orçamento como LP Animada (Pilot — Supermercado Maísa)

**What was built/decided:**
Descoberta do diferencial central do produto ORÇAMENTO$: orçamentos entregues como mini-sites animados (LP) em vez de PDF/slides/docs. Piloto construído para Supermercado Maísa — agente neural de atendimento WhatsApp com Avatar Digital. LP completa em HTML autocontido com 11 seções (Hero, Dor, Transformação, Entregáveis, Bônus, Autoridade, Investimento, Garantia, Prazo, Sobre, CTA), scroll animations via IntersectionObserver, counter animation, design system dark com accent verde. Estrutura de oferta revisada por ARES usando framework Hormozi: DOR → TRANSFORMAÇÃO → ENTREGÁVEIS → PREÇO (sem Stack técnico).

**Product module this feeds:**
ORÇAMENTO$ — Sistema de geração de orçamentos/propostas como LP animada. Também alimenta $QUAD e RUNA SYSTEMS (módulo Projetos & Produtos Neural).

**Raw material value:**
O processo inteiro — do briefing à LP animada — mostra como transformar um orçamento comum num entregável de alta conversão com estrutura de oferta correta. Isso que assessorias cobram R$3k–5k para criar, o squad faz em uma sessão a partir de um briefing simples.

**Key artifacts:**
- `SÍRIOS/📐 Projetos/RAS/orcamentos/orcamento-maisa.html` — LP animada piloto (HTML autocontido)
- Pricing model: Base R$3k-4k impl + R$1.800/mês; cada plus +R$1.000 impl +R$700-800/mês
- 3 clientes reais: Supermercado Maísa, Praça de Esportes de Sacramento, Gabriel Eventos
- n8n base: Isis SDR/Closer (124 nodes — Supabase RAG + Redis buffer + áudio + imagem)
- Estrutura LP 11 seções validada por ARES (Hormozi framework)

**Squad decision log:**
- ARES: removeu "Stack Técnico" — cliente compra resultado, não tecnologia
- ARES: âncora vs funcionário humano (R$2.500/mês encargos vs R$1.800/mês 24h)
- HTML autocontido: máxima portabilidade, zero setup para o cliente

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


---

## Session 2026-03-19 (evening) — Meta Graph API + Instagram Automation Architecture

### Debugging a broken MCP (the notebooklm-mcp case)

**Symptom:** `claude mcp list` shows `✗ Failed to connect`

**Diagnosis sequence:**
```bash
claude mcp list               # see status of all MCPs
claude mcp get notebooklm-mcp # see exact command configured
npx --yes notebooklm-mcp      # test if it runs via npx
```

**Root cause found:** Configured as bare name `notebooklm-mcp` — binary not in PATH.
**Fix:**
```bash
claude mcp remove "notebooklm-mcp" -s user
claude mcp add notebooklm-mcp -s user -- npx -y notebooklm-mcp
```

**Pattern rule for all npm stdio MCPs:** Always `npx -y {package}`, never bare name.

---

### Meta Graph API — Token types and which one to use

| Token Type | Expires | Use Case |
|-----------|---------|---------|
| Short-Lived User Token | ~1–2 hours | Testing only |
| Long-Lived User Token | 60 days | Development, renewals |
| Page Token (from Long-Lived) | Never* | Automation — agents use this |
| System User Token | Never | Production without re-auth |

*Page Token derived from Long-Lived User Token is permanent.

**Token exchange flow:**
```bash
# Short-Lived → Long-Lived
curl "https://graph.facebook.com/oauth/access_token?grant_type=fb_exchange_token&client_id=APP_ID&client_secret=APP_SECRET&fb_exchange_token=SHORT_TOKEN"

# Get permanent Page Token
curl "https://graph.facebook.com/me/accounts?fields=id,name,access_token&access_token=LONG_LIVED_TOKEN"

# Debug any token
curl "https://graph.facebook.com/debug_token?input_token=TOKEN&access_token=TOKEN"
```

**Non-obvious:** Instagram must be linked to a Facebook Page — verify with:
```bash
curl "https://graph.facebook.com/{PAGE_ID}?fields=instagram_business_account&access_token=TOKEN"
```

---

### Instagram automation — API vs ManyChat decision tree

```
Need comment trigger + DM?
  → ManyChat (already approved by Meta, handles follower check, fuzzy keywords)

Need post-conversion automation (onboarding, upsell)?
  → N8N via HERMES

Need programmatic subscriber/tag/field management?
  → ManyChat MCP (Biznomad — self-hosted, 14 tools)
```

**Why not API directly for DMs:** `instagram_manage_messages` requires Meta App Review.
Takes weeks, may be denied. ManyChat sidesteps this entirely.

**The fuzzy matching insight:** "RUNA" / "RUNNA" / "RUNA!" — ManyChat handles natively.
Via API this requires Levenshtein distance implementation server-side.

---

### Module additions for $QUAD course (Meta/Instagram block)

- [ ] Module: Meta Graph API token types — which one to use and why
- [ ] Module: Debugging a broken MCP — the diagnosis → fix loop
- [ ] Module: Instagram API vs ManyChat — authorization limits and the right architecture
- [ ] Module: Comment automation with fuzzy keyword matching (the RUNA → RUNNA problem)
- [ ] Module: Token lifecycle management — renewal flow for 60-day tokens
- [ ] Module: Environment variables as credential source of truth

---

## [2026-03-30] — Paperclip: Empresarizando o Squad

**What was built/decided:**
Designed the complete integration of Paperclip AI (open-source agent orchestration) as the final module of $QUAD. Created a 16-section minicurso with full YAML configurations for all 8 Runa Systems agents, and the PRD for Module 8. Key insight: the AIOX agent `.md` files become `promptTemplate` directly — zero rewrite needed.

**Product module this feeds:**
$QUAD — Module 8 (final) | RUNA SYSTEMS — Squad Architecture + Tooling Stack

**Raw material value:**
Paperclip is the architectural leap from "having agents" to "running a company." This took 30 minutes to architect because we already had all agents defined. A student building from scratch would need days to understand how to connect all the pieces. This session IS the module content.

**Key artifacts:**
- `SÍRIOS/📐 Projetos/paperclip-minicurso.md` — Complete 16-section guide with agent configs
- `SÍRIOS/📐 Projetos/squad-dollar-paperclip-module.md` — PRD for Module 8
- `SÍRIOS/📐 Projetos/squad-dollar-prd.md` — Updated with Module 8 added
- Paperclip: `npx paperclipai onboard --yes` → localhost:3100
- Adapter: `claude_local` with `promptTemplate` + `{{variable}}` interpolation
- AGENTS.md pattern: shared context injected on every heartbeat
- Squad cost estimate: ~$160/mês for 8 agents with auto-pause controls
- Upsell moment: Module 8 end → RUNA SYSTEMS R$15k/ano (3-5% conversion expected)
