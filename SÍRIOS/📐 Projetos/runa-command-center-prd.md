---
date: 2026-03-20
tags: [prd, product, command-center, interface, aiox, squads]
project: runa-systems-global
status: v2-revised
type: prd
---

# PRD — Runa Command Center (v2)

> Command & control interface for Runa Systems Global squad operations.
> Local-first. Bioluminescent HUD aesthetic. Built on Claude API + AIOS architecture.
> Revised after AIOS/JARVIS video analysis via NotebookLM.
> Connected: [[squad-architecture]] | [[tooling-inventory]] | [[product-catalog]]

---

## 1. Vision

A local web application (`localhost:3000`) that is the **visual operating system** of Runa Systems Global. Everything that happens in the business — agents thinking, workers executing, knowledge being processed, crises being analyzed — is visible and controllable here.

**What it replaces:** Terminal-only interaction, mental load of memorizing commands, switching between Obsidian + browser + terminal.

**What it is:**
- ORION is the `>` — the entry point for everything
- Independent agent access is available but secondary
- Workers are first-class citizens — not an afterthought
- Knowledge (Dossiês) is visible per agent
- The Conclave can be activated for complex decisions
- System Health Score is always visible

**Inspired by:**
- AIOS (Alan Nicolas + Thiago Finch + Pedro Valério) — Conclave, Dossiês, Health Score, deterministic workers architecture, network visualization
- Blake Sanchez "Futuristic HUD Sound Design" — deep space dark base, HUD panel aesthetic
- User direction — organic + biotechnological + futuristic + cosmic + bioluminescent amber/gold

**What it is NOT:**
- A SaaS product (yet)
- A replacement for Claude Code terminal — terminal stays the engine
- A generic dashboard — deeply personalized to Runa squad

---

## 2. Problem Statement

| Friction | Impact |
|---------|--------|
| No visual overview of squad states | Operator doesn't know what's active, broken, or idle |
| Commands require memory | 95% of available skills/MCPs invisible to operator |
| Context doesn't flow between agents | Output of ARES doesn't automatically become input for FREYJA |
| Projects live in Obsidian, not interactive | No progress tracking, no pipeline view |
| Workers have no visibility | A broken DM automation is invisible until it causes damage |
| Knowledge base is opaque | Agents' Dossiês are files on disk — not visible or queryable |

**The gap:** Powerful system, invisible to its operator.

---

## 3. Target User

**Primary:** Arthur — operator of Runa Systems Global.
**Future:** Businesses purchasing the "build your AI squad" product.

The interface IS the product demo. Every session Arthur has is case study material.

---

## 4. Core Philosophy (AIOS Architecture)

```
80% of daily tasks → deterministic → Workers (n8n flows, scripts, ManyChat)
20% of tasks → require judgment → Agents (Claude API with personas + Dossiês)
```

**Workers ARE the framework.** The differentiator of this system is the ability to:
1. Map and break down any business process
2. Identify which steps are deterministic (no creativity, no improvisation needed)
3. Turn those deterministic steps into workers commanded by tasks
4. Reserve agents only for what requires reasoning and creativity

The interface must make this distinction viscerally visible.

### Entity Types

| Type | Description | Examples |
|------|-------------|---------|
| **Worker** | Deterministic script — no judgment needed | Post scheduler, DM trigger, token renewal, metric digest |
| **Agent** | AI with persona + Dossiês — judgment required | FREYJA, ARES, ORION, HELIOS, HERMES |
| **Clone** | Agent trained on specific expert methodology | ARES (Hormozi clone), FREYJA (Arthur's voice clone) |
| **Human** | Reserved for critical decisions | Finance, legal, strategy above threshold |

---

## 5. Design Language — Bioluminescent Amber HUD

### Color Palette

| Role | Description | Hex |
|------|-------------|-----|
| Background | Deep space — near-black navy | `#050D1A` |
| Panel surface | Dark void | `#0A1F2E` |
| Border / grid | Dim structural lines | `#1A3A4A` |
| **Primary accent** | **Bioluminescent amber** | `#F59E0B` |
| **Secondary accent** | **Cosmic gold** | `#FFD166` |
| Alert / critical | Deep solar orange | `#FF6B00` |
| Success / live | Organic green pulse | `#22C55E` |
| Text primary | Off-white mist | `#E8F4F8` |
| Text secondary | Muted gray-teal | `#7AA8B8` |

> Note: Teal (`#00D4C8`) and cyan (`#00A8FF`) removed per user direction. Orange-amber-gold palette replaces them throughout.

### Organic + Biotechnological Layer

- **No hard geometric grids** — structural lines breathe and pulse subtly
- **Mycelium network motif** — connecting lines between panels mimic fungal/neural networks
- **Bioluminescent glow** — panels have soft outer amber glow (`0 0 20px rgba(245, 158, 11, 0.25)`)
- **Living agents** — status indicators breathe with CSS animation (`3.5s ease-in-out infinite alternate opacity 0.6→1.0`)
- **Cosmic depth** — background has subtle radial gradient with near-black core and very dark navy edges
- **Organic noise texture** — panels have `0.03 opacity` SVG noise layer (not flat surfaces)
- **Typography** — `Space Grotesk` or `DM Mono` for data readouts; `Inter` for prose

### CSS Design Tokens (implementation reference)

```css
:root {
  /* Colors */
  --bg-void:       #050D1A;
  --bg-panel:      #0A1F2E;
  --bg-border:     #1A3A4A;
  --accent-1:      #F59E0B;  /* amber primary */
  --accent-2:      #FFD166;  /* gold secondary */
  --alert:         #FF6B00;  /* deep orange */
  --success:       #22C55E;
  --text-1:        #E8F4F8;
  --text-2:        #7AA8B8;

  /* Glow */
  --glow-amber:    0 0 20px rgba(245, 158, 11, 0.25);
  --glow-amber-lg: 0 0 40px rgba(245, 158, 11, 0.4);
  --glow-alert:    0 0 20px rgba(255, 107, 0, 0.4);

  /* Breathing animation */
  --breath-duration: 3.5s;
  --breath-min-opacity: 0.6;
  --breath-max-opacity: 1.0;

  /* Panels */
  --panel-radius:  8px;
  --panel-border:  1px solid var(--bg-border);
  --panel-glow:    var(--glow-amber);

  /* Transitions */
  --transition-fast: 150ms ease-in-out;
  --transition-med:  250ms ease-in-out;
  --transition-slow: 400ms ease-in-out;
}

@keyframes breathe {
  from { opacity: var(--breath-min-opacity); }
  to   { opacity: var(--breath-max-opacity); }
}

@keyframes mycelium-grow {
  from { stroke-dashoffset: 100%; }
  to   { stroke-dashoffset: 0%; }
}
```

### Motion Design

| Element | Animation |
|---------|-----------|
| Agent activation | Amber ripple pulse from center outward (400ms) |
| Chat message in | Fade + slide up 8px (200ms) |
| Worker status change | Color breath transition (not instant blink) |
| Loading / thinking | Mycelium-line SVG growing animation |
| Conclave activation | Sequential amber pulses across agent cards (cascade) |
| Health Score | Animated number count-up on first load |
| Panel hover | Subtle border glow intensification (150ms) |

---

## 6. Information Architecture

```
Runa Command Center
│
├── [TOP BAR] — System HUD (always visible)
│   ├── ORION status indicator (primary position)
│   ├── Health Score (%) — pulsing amber if < 80%
│   ├── Worker alert badge — red dot if any ERROR state
│   ├── MCP status: n8n ● Supabase ● Neon ●
│   └── Date + Session #
│
├── [SIDEBAR LEFT] — Squad & Tools
│   ├── ORION 🌌 [ENTRY POINT — always at top, larger]
│   ├── [divider: Internal Squad]
│   │   ├── ARES ⚔️     + knowledge indicator
│   │   ├── FREYJA 🌙  + knowledge indicator
│   │   ├── HELIOS ☀️  + knowledge indicator
│   │   └── HERMES 🪽  + knowledge indicator
│   ├── [divider: Technical Layer]
│   │   ├── @dev · @qa · @architect
│   │   └── @devops · @data-engineer
│   ├── [divider: Skills]
│   │   ├── Ads (18) · SEO (13) · UI/UX · Frontend
│   │   └── [collapsible — full list on expand]
│   └── [bottom] Ingest + Knowledge Base shortcut
│
├── [MAIN WORKSPACE] — 4 tabs
│   ├── CHAT — Conversation with active agent
│   ├── PROJECTS — Project OS + AIOX Stories
│   ├── WORKERS — Automations status + new worker
│   └── KNOWLEDGE — Dossiês browser
│
└── [ARTIFACT PANEL RIGHT] — Output viewer (slides in when output generated)
    ├── Generated content (copy, analysis, reports)
    ├── Conclave verdict (structured: evidências + riscos + recomendação)
    └── [Save to Obsidian] button
```

---

## 7. Feature Specifications

### 7.1 ORION — Master Orchestrator Entry Point

ORION occupies a **privileged position** at the top of the sidebar — visually larger, always glowing amber. He is the `>` of the system.

**Default behavior:**
- App opens → ORION active by default
- ORION's chat starts with a system briefing: Health Score, pending missions, active workers status
- ORION can route to other agents: "Passando para FREYJA para criar o copy..." → chat context transfers + sidebar highlights FREYJA

**Routing flow (visible in UI):**
```
User: "Cria copy para o lançamento do CREATOR$"
ORION: "Contexto do projeto identificado. Acionando FREYJA com briefing..."
  → FREYJA card pulses in sidebar
  → Chat switches to FREYJA with project context pre-loaded
  → ORION remains visible as "orchestrating" indicator in top bar
```

**Independent access:**
Any agent can be activated directly by clicking in the sidebar — independent mode. When in independent mode, a small indicator shows "Modo Independente — sem contexto de orquestração".

### 7.2 Conclave Mode — War Room

Activated when a complex multi-perspective problem requires simultaneous analysis.

**Activation:** Button "Acionar Conclave" in ORION chat, or `/conclave [description of problem]`

**UI behavior:**
- Main workspace transforms into **split-panel view**
- Each relevant C-Level agent appears in a column: ARES / HERMES / HELIOS (+ others as relevant)
- Each panel shows that agent's analysis streaming simultaneously
- Visual: cascade of amber pulses across agent cards as they "wake up"
- Header shows: "CONCLAVE ATIVO — [problem description]"

**Verdict output:**
- Structured artifact appears in Artifact Panel:
```
VEREDITO DO CONCLAVE
━━━━━━━━━━━━━━━━━━━
📊 Evidências: [each agent's key finding]
⚠️  Riscos:    [identified risks]
✅ Recomendação: [final strategic decision]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### 7.3 Chat Workspace

**Architecture:**
- System prompt = agent's full persona from `.aiox-core/development/agents/{name}.md`
- Claude API (claude-sonnet-4-6) processes messages
- Chat history persisted in Supabase (agent + session + project context)
- `project_context` block: shared context across all agents on the same project

**Context injection pattern:**
```
When activating FREYJA on "CREATOR$ project":
  → Load FREYJA persona as system_prompt
  → Append project_context: { brief, ARES outputs, prior sessions }
  → Append FREYJA Dossiê summary (top 3 relevant knowledge chunks)
  → Initialize chat with context-aware greeting
```

**Thinking animation:** SVG mycelium lines growing outward from a center point during processing.

**Quick Actions (per agent):**
| Agent | Quick Actions |
|-------|--------------|
| ORION | `Briefing Diário` `Acionar Conclave` `Novo Projeto` `Status Workers` |
| ARES | `Nova Oferta` `Precificar Oferta` `Teia de Produtos` `Análise Hormozi` |
| FREYJA | `Copy Post` `Carta de Vendas` `Sequência Email` `Bio` `Caption Reel` |
| HELIOS | `Auditoria SEO` `Plano de Conteúdo` `Pesquisa Keywords` `GEO Check` |
| HERMES | `Onboarding` `Sequência Upsell` `Check-in Cliente` `Flow n8n` |

**Command Palette:** `/` triggers palette with fuzzy search across:
- Agent commands
- Skills (ads, seo, ui-ux-pro-max, etc.)
- Worker actions (pause, restart, status)

### 7.4 Artifact Panel (right side)

Slides in from the right when an agent produces a substantial output (> 200 words or structured content).

**Content types:**
- Long-form copy (sales letters, email sequences)
- Analysis reports
- Conclave verdicts
- Task outputs (SEO audit, offer analysis)

**Actions:**
- `[ Copiar ]` — copy to clipboard
- `[ Salvar no Obsidian ]` — ORION routes to vault, saves as `.md` in appropriate folder
- `[ Enviar para próximo agente ]` — transfers as context to another agent

### 7.5 Projects View + AIOX Stories

**Projects:** Visual board showing client and internal projects.

```
[ CREATOR$ Skool ]          [ Runa Systems ]
Status: In Progress          Status: Ongoing
─────────────────            ─────────────────
ARES      ✅ Brief           ORION     ✅ Squad
FREYJA    🔄 Copy LP         ARES      ✅ Offers
HELIOS    ⏳ SEO             FREYJA    🔄 Content
@dev      ⏳ Build           HERMES    ⏳ Onboard
```

**AIOX Stories sub-view:**
- Reads `docs/stories/` directory
- Shows active stories with checkbox progress
- Clicking a story opens it in read mode with task list
- Stories link back to the agent responsible for each task

### 7.6 Workers View

Workers occupy a **prominent position** — they ARE the framework.

**Status badges always visible in top bar:** If any worker is in ERROR → red alert dot appears next to the worker count.

**Worker Card:**
```
[ DM Trigger ]          platform: ManyChat      [● LIVE]
Comment → Receive DM    Last triggered: 4m ago  [47 today]
[Pause] [Log] [Configure]
```

**Status states:**
- `● LIVE` — green pulse (breathing animation)
- `◌ PAUSED` — amber dim
- `✕ ERROR` — orange alert glow
- `○ PENDING` — gray (not yet built in n8n)

**V1 workers (pre-configured):**
| Worker | Platform | Description |
|--------|----------|-------------|
| DM Trigger | ManyChat | Comment keyword → DM delivery |
| Post Scheduler | n8n | Queue posts for Instagram |
| Token Renewal Alert | n8n | Alert 7 days before META token expires |
| Metrics Daily Digest | n8n | Morning briefing with IG metrics |

### 7.7 Knowledge Base — Dossiês

Visible per agent via expandable indicator in sidebar.

**Agent knowledge indicator:**
```
ARES ⚔️  [📚 Hormozi · 152 docs]
FREYJA 🌙 [📚 Voice · 34 docs]
HELIOS ☀️  [📚 SEO · 13 skills]
```

**Knowledge view (tab):**
- Browse by Agent or by Theme
- Each Dossiê shows: title, source type (YouTube / PDF / call), date ingested, word count
- **Ingest** button: drag files to inbox zone OR paste URL
- Categories mirror AKASHA vault: `Alex Hormozi` / `Vendas Alto Ticket` / `Arthur's Voice` / `Runa Context`

**Knowledge access for agents:** Automatic — the system injects top-K relevant Dossiê chunks as context when activating an agent on a project. Not visible to user but shown in a "Context loaded: 3 Dossiês" indicator near chat input.

### 7.8 Top Bar — System Health HUD

```
🌌 ORION ▸  [⚡ 87%]  [Workers: 4 ● 0✕]  [n8n ● Supabase ● Neon ●]  Thu 20 Mar · Session #7
```

**Health Score (⚡ 87%):**
- Animated on first load (count-up)
- Pulses amber when < 80%
- Expands on click to show: API keys status / Flash state / Pending missions / DNA files volume
- Derived from: MCPs connected + workers live + agents loaded

---

## 8. Technical Architecture

### Stack
| Layer | Technology | Reason |
|-------|-----------|--------|
| Frontend | Next.js 14 (App Router) | API routes built-in, Netlify-ready for V3+ |
| Styling | Tailwind CSS + CSS custom properties | Design token system above |
| Animations | Framer Motion | Breathing, Conclave cascade, mycelium SVG |
| AI Engine | Claude API (`claude-sonnet-4-6`) | Agent personas via system prompts |
| Database | Supabase | Chat history, projects, sessions, workers |
| State | Zustand | Active agent, project context, tab, conclave mode |
| Local cache | localStorage | Preferences, last active agent, session counter |
| Runtime | `npm run dev` → `localhost:3000` | Local only for V1-V3 |

### Agent Activation Pattern
```
User clicks FREYJA (or ORION routes to FREYJA):
  1. Load freyja.md persona → system_prompt
  2. Load project_context (if project active)
  3. Load top-3 relevant Dossiê chunks → append to context
  4. Initialize Supabase chat_session
  5. Display FREYJA quick actions in input bar
  6. Amber ripple pulse on FREYJA card
  7. Chat renders with FREYJA persona active
```

### Context Flow (agent handoff)
```
ARES finishes offer structure:
  → Artifact saved to Supabase: { project_id, agent: "ares", type: "offer_brief", content }
  → project_context updated: { ...previous, ares_output: [artifact] }

User activates FREYJA on same project:
  → project_context injected into system_prompt
  → FREYJA receives ARES's output automatically
  → "Contexto carregado: Oferta de ARES disponível" indicator shown
```

### Data Model (Supabase)
```sql
agents          — id, name, persona_name, icon, system_prompt_path, quick_actions[], knowledge_sources[]
projects        — id, name, client, type, status, pipeline_state jsonb, created_at
project_context — id, project_id, key, value, updated_at, updated_by_agent
chat_sessions   — id, agent_id, project_id, started_at, mode (direct|orchestrated|conclave)
messages        — id, session_id, role, content, artifact_id, timestamp
artifacts       — id, session_id, project_id, agent_id, type, content, saved_to_obsidian bool
workers         — id, name, platform, description, status, last_triggered, trigger_count_7d
dossiers        — id, agent_id, title, source_type, source_url, content_summary, indexed_at
health_metrics  — id, checked_at, score, mcp_status jsonb, workers_live int, pending_missions int
```

---

## 9. Versioned Build Plan

### V1 — Foundation Shell (1 session, deploy & use)
**Goal:** Working HUD with ORION chat. Can talk to agents. Looks right.
- Layout shell (top bar, sidebar, main workspace)
- Full HUD design system (colors, tokens, panels, typography)
- Sidebar: all agents listed with breathing indicators (static data)
- Chat: ORION active with Claude API integration
- localStorage state (no Supabase yet)
- Health Score: static placeholder (always 87% in V1)

### V2 — All Agents + Artifacts (1 session)
**Goal:** Full squad accessible. Outputs have a home.
- All 5 Runa agents activatable with full personas
- Quick actions per agent
- Artifact panel (slides in for long outputs)
- Command palette (`/` trigger)
- AIOX Technical agents (@dev, @qa, @architect, etc.)

### V3 — Memory + Projects (1 session)
**Goal:** Context persists. Projects tracked.
- Supabase integration (chat history, sessions)
- Context flow between agents (project_context)
- Projects view (cards + pipeline)
- AIOX Stories sub-view (reads docs/stories/)

### V4 — Workers + Knowledge (1 session)
**Goal:** Workers visible. Knowledge browseable.
- Workers view with status + animations
- Knowledge base / Dossiês browser
- Health Score real metrics (MCP pings)
- Ingest UI (drag + drop)

### V5 — Conclave + Polish (1 session)
**Goal:** War room mode. Full animation system.
- Conclave mode (split panel + verdict)
- Full Framer Motion animation system
- Network visualization (agent graph view)
- V2 prep: auth, mobile, deploy

---

## 10. Problem 8 — Design Spec Input Methods

For future iterations, user can provide visual direction via:

| Method | How |
|--------|-----|
| Screenshots | Take a photo/screenshot of a specific video moment → share in chat |
| Pinterest board | Create a board with HUD/UI references → share URL |
| Color hex codes | Paste directly (like you did above) |
| Figma URL | If design is mocked in Figma → MCP handles it |
| Text description | "Quero que o painel X pareça com Y do video Z" |
| Creative freedom | Default for V1 — build, iterate after use |

For V1: **creative freedom** is granted. Arthur iterates based on actual usage.

---

## 11. Success Criteria

- Opens `localhost:3000` → ORION active → briefing renders in < 2s
- Can activate any squad agent in 1 click
- Typing `/` shows all available commands
- A project has context that persists between agent switches
- A worker ERROR is visible without navigating away from chat
- The interface would be compelling as a product demo screenshot
- "Would you pay for this?" — yes, before V2 begins

---

## References

- AIOS video analysis: NotebookLM session `ae105219`
- [AIOS Blog — Squad Architecture](https://agenciacafeonline.com.br/blog/aios-sistema-operacional-ia-squads-agentes-2026/)
- [Blake Sanchez — Futuristic HUD](http://blakesanchez.com/store/hud)
- Squad Architecture: [[squad-architecture]]
- Tooling: [[tooling-inventory]]
- Product Raw Material: [[product-course-raw-material]]
