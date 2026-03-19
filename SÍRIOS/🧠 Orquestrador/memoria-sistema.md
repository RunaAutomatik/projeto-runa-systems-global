---
date: 2026-03-19
tags: [orquestrador, sistema, memoria, estado, agentes]
project: runa-systems-global
status: live — update each session
---

# Sistema Runa Systems Global — Memória Central

> This document is the cognitive backbone of the ORION orchestrator.
> Read this at the start of any session to restore full system context.

---

## 1. System Identity

| Element | Value |
|---------|-------|
| **Project** | Runa Systems Global |
| **Owner** | Arthur (@arthsystems_) |
| **Orchestrator** | ORION (aiox-master) |
| **Framework** | Synkra AIOX |
| **Primary vault** | SÍRIOS (`C:/runa-systems-global/SÍRIOS/`) |
| **Knowledge vault** | AKASHA (`C:/runa-systems-global/AKASHA/`) |

---

## 2. Business Context

**Core philosophy:**
> "I don't teach tools. I teach logic, fluidity, and naturalness."
> Tools have no value alone. The value is in what they enable.

**Two business pillars:**
1. **Knowledge Sales** (PRIMARY) — courses, mentorships, productized programs
2. **Done-For-You Services** — websites, software, AI squad implementation

**Product teia:**
`ALPHA® → MAYA® → ICARUS® → RUNA SYSTEMS → RUNA MENTORIA`
Each product leads naturally to the next. ALPHA is the entry door.

---

## 3. Agent Ecosystem

### Custom Agents (Runa-specific)
| Agent | Icon | Note | Purpose |
|-------|------|------|---------|
| ORION | 🌌 | [[orion]] | Master orchestrator + Obsidian exclusive authority |
| ARES | ⚔️ | [[ares]] | Offer design + product teia (Hormozi frameworks) |
| FREYJA | 🌙 | [[freyja]] | ALL copy + narrative + Instagram + LP + sales letters in disguise |
| HERMES | 🪽 | [[hermes]] | Client success + onboarding + upsell sequences |
| HELIOS | ☀️ | [[helios]] | SEO strategy + technical + GEO + AI search (8 skills) |

### AIOX Core Agents
| Agent | Persona | Role |
|-------|---------|------|
| @dev | Dex | Code implementation |
| @qa | Quinn | Quality and testing |
| @architect | Aria | Architecture decisions |
| @devops | Gage | Git push, PR, CI/CD (EXCLUSIVE) |
| @pm | Morgan | Product management, epics |
| @po | Pax | Story validation |
| @sm | River | Story creation |
| @analyst | Alex | Research and analysis |
| @data-engineer | Dara | Database design |

---

## 4. Current Work State (update each session)

### Arthur's Instagram (@arthsystems_)
- **Status:** 21 followers, 5 posts — recovery narrative (WRONG positioning)
- **Mission:** Shift to architect narrative ("I build post-human businesses")
- **Agent:** [[freyja]] handles this
- **References:** [[instagram-market-references]] — hub com Doug, Sarah, Carol
- **Diagnosis:** [[analysis-instagram-arthur-diagnosis]]
- **Next action:** `@freyja *content-plan` — design first 10 posts

### Knowledge Bases (AKASHA)
- ✅ Alex Hormozi: [[growth-levers]], [[offer-building-framework]], [[hormozi-mental-models]]
- ✅ Vendas Alto Ticket: [[sales-frameworks-reca-raloca]]
- ✅ FREYJA strategy: [[freyja-content-strategy]]

### Business Context & Architecture
- [[runa-systems-business-context]] — full business briefing + Arthur's voice + tone
- [[product-catalog]] — all products, status, upsell paths, priority order
- [[squad-architecture]] — squad roles, communication flows, Obsidian authority
- [[product-course-raw-material]] — raw material accumulated for course product

### Git State
- All files untracked — commit pending (@devops)

---

## 5. Vault Structure

```
SÍRIOS/                         ← primary knowledge vault
├── 📅 Diário/                  ← session notes (pt-BR)
│   └── 2026-03-18.md ✅
│   └── 2026-03-19.md (today)
├── 📐 Projetos/                ← specs, PRDs, roadmaps
│   ├── runa-systems-business-context.md ✅
│   └── product-course-raw-material.md ✅
├── 📚 Referências/             ← analyses and research
│   ├── analysis-instagram-dougdemarco.md ✅
│   ├── analysis-instagram-sarahseller.md ✅
│   ├── analysis-instagram-caroldutra.md ✅
│   └── analysis-instagram-arthur-diagnosis.md ✅
├── 📋 Agentes/                 ← agent cards
│   ├── orion.md ✅
│   ├── ares.md ✅
│   ├── hermes.md ✅
│   └── freyja.md ✅
├── 🔗 Templates/               ← reusable templates
├── 🛠️ Skills/                  ← skills documentation
└── 🧠 Orquestrador/            ← this folder
    ├── README.md
    └── memoria-sistema.md ✅ (this file)

bases/ (AKASHA)                 ← agent knowledge vault
├── 📚 Alex Hormozi/
├── 📚 Vendas Alto Ticket/
├── 🔗 Index/
└── 🧠 Agent Knowledge Maps/
    └── freyja-content-strategy.md ✅
```

---

## 6. Rules and Configuration

| Rule | Location |
|------|----------|
| Language policy | `.claude/rules/language-policy.md` |
| Obsidian memory | `.claude/rules/obsidian-memory.md` |
| Agent authority | `.claude/rules/agent-authority.md` |
| MCP usage | `.claude/rules/mcp-usage.md` |
| AIOX Constitution | `.aiox-core/constitution.md` |

---

## 7. Tools and Infrastructure

> Full inventory: [[tooling-inventory]] — source of truth for all tools.

### MCPs Active (claude.ai native)
Figma, Gmail, Google Calendar, Netlify, Supabase — all active every session.

### MCPs via ~/.claude.json (need session restart)
| MCP | Agent | Status |
|-----|-------|--------|
| Neon | @data-engineer | ✅ Active |
| notebooklm-mcp | FREYJA / ARES | ✅ Configured |
| n8n-mcp | HERMES / ORION | ✅ Configured (Railway: primary-production-bae40.up.railway.app) |

### Key Skills Installed
- **ARES:** 18 ads-* skills (ads-meta, ads-google, ads-tiktok...)
- **HELIOS:** 13 seo-* skills (seo-technical, seo-content, seo-geo...)
- **@ux-design-expert / @dev:** ui-ux-pro-max (67 styles, 96 palettes), frontend-design

### CLIs
| Tool | Status | Purpose |
|------|--------|---------|
| Antigravity CLI | ✅ Installed | Obsidian interaction |
| Obsidian Local REST API | ✅ Active | HTTPS on localhost:27124 |
| Google Workspace CLI (gws) | ✅ Configured | automatikruna@gmail.com |
| AIOX Framework | ✅ Active | Agent orchestration |
| Husky | ✅ Configured | Git hooks |
| GitHub CLI (gh) | ✅ Available | PRs, releases (@devops exclusive) |

---

*Updated: 2026-03-19 | Next update: at start of next session*
