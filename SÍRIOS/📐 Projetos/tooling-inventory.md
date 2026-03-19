---
date: 2026-03-19
tags: [tools, mcp, skills, infrastructure, inventory]
project: runa-systems-global
status: live — update when tools are added or removed
type: source-of-truth
---

# Runa Systems Global — Tooling Inventory

> Single source of truth for all installed tools, MCPs, skills, and plugins.
> Maintained exclusively by ORION.
> Connected: [[memoria-sistema]] | [[squad-architecture]] | [[mcp-usage]]

---

## 1. MCP Servers (Model Context Protocol)

MCPs give agents access to external services and platforms.

### Active in current session (claude.ai native)

| MCP | Provider | Status | Agent |
|-----|----------|--------|-------|
| `claude_ai_Figma` | claude.ai | ✅ Active | @ux-design-expert / @dev |
| `claude_ai_Gmail` | claude.ai | ✅ Active | HERMES / ORION |
| `claude_ai_Google_Calendar` | claude.ai | ✅ Active | ORION / HERMES |
| `claude_ai_Netlify` | claude.ai | ✅ Active | @devops |
| `claude_ai_Supabase` | claude.ai | ✅ Active | @data-engineer |

### Configured in ~/.claude.json (require session restart to activate)

| MCP | Type | Status | Agent | Purpose |
|-----|------|--------|-------|---------|
| `Neon` | HTTP | ✅ Active | @data-engineer | PostgreSQL database |
| `notebooklm-mcp` | stdio | ✅ Binary exists | FREYJA / ARES | NotebookLM — podcast, content generation |
| `n8n-mcp` | stdio | ⏳ Needs restart | HERMES / ORION | n8n workflow automation |

### n8n Instance
- **URL:** `https://primary-production-bae40.up.railway.app`
- **Platform:** Railway (cloud-hosted)
- **API Key:** configured in ~/.claude.json env

### Known Issues
- `notebooklm-mcp` — configured but not exposing tools in session. Verify after restart.
- Docker MCP (EXA, Context7, Apify) — referenced in legacy docs but **Docker is not installed**. These tools are NOT available. References in mcp-usage.md are stale.

---

## 2. Claude Code Skills

Skills expand what agents know how to do directly within Claude Code.

### Ads & Marketing

| Skill | Status | Agent |
|-------|--------|-------|
| `ads` | ✅ Active | ARES |
| `ads-meta` | ✅ Active | ARES |
| `ads-google` | ✅ Active | ARES |
| `ads-tiktok` | ✅ Active | ARES |
| `ads-linkedin` | ✅ Active | ARES |
| `ads-youtube` | ✅ Active | ARES |
| `ads-microsoft` | ✅ Active | ARES |
| `ads-apple` | ✅ Active | ARES |
| `ads-audit` | ✅ Active | ARES |
| `ads-budget` | ✅ Active | ARES |
| `ads-competitor` | ✅ Active | ARES |
| `ads-create` | ✅ Active | ARES / FREYJA |
| `ads-creative` | ✅ Active | ARES / FREYJA |
| `ads-dna` | ✅ Active | ARES |
| `ads-generate` | ✅ Active | ARES / FREYJA |
| `ads-landing` | ✅ Active | FREYJA / @dev |
| `ads-photoshoot` | ✅ Active | FREYJA |
| `ads-plan` | ✅ Active | ARES |

> Source: `AgriciDaniel/claude-ads` — **already installed before this session**

### SEO (HELIOS skills)

| Skill | Status | Agent |
|-------|--------|-------|
| `seo` | ✅ Active | HELIOS |
| `seo-technical` | ✅ Active | HELIOS |
| `seo-content` | ✅ Active | HELIOS |
| `seo-geo` | ✅ Active | HELIOS |
| `seo-schema` | ✅ Active | HELIOS |
| `seo-sitemap` | ✅ Active | HELIOS |
| `seo-audit` | ✅ Active | HELIOS |
| `seo-page` | ✅ Active | HELIOS |
| `seo-images` | ✅ Active | HELIOS |
| `seo-hreflang` | ✅ Active | HELIOS |
| `seo-plan` | ✅ Active | HELIOS |
| `seo-programmatic` | ✅ Active | HELIOS |
| `seo-competitor-pages` | ✅ Active | HELIOS |

### UI/UX & Design

| Skill | Status | Agent |
|-------|--------|-------|
| `ui-ux-pro-max` | ✅ Installed 2026-03-19 | @ux-design-expert / @dev |
| `frontend-design` | ✅ Active | @ux-design-expert / @dev |

> `ui-ux-pro-max`: 67 UI styles, 96 palettes, 57 font pairings, 25 chart types, 13 stacks.
> Source: `nextlevelbuilder/ui-ux-pro-max-skill` — installed via `npx uipro-cli init --ai claude`

### Obsidian & Knowledge

| Skill | Status | Agent |
|-------|--------|-------|
| `obsidian-cli` | ✅ Active | ORION |
| `obsidian-markdown` | ✅ Active | ORION |
| `obsidian-bases` | ✅ Active | ORION |
| `defuddle` | ✅ Active | ORION / FREYJA |
| `json-canvas` | ✅ Active | ORION |

---

## 3. Installed Plugins

| Plugin | Status | Purpose |
|--------|--------|---------|
| `frontend-design` | ✅ Enabled | Production-grade UI interfaces |
| `agent-sdk-dev` | ✅ Enabled | Claude Agent SDK development |
| `feature-dev` | ✅ Enabled | Feature development workflows |
| `code-review` | ✅ Enabled | PR code review |
| `commit-commands` | ✅ Enabled | Git commit/push/PR shortcuts |
| `pr-review-toolkit` | ✅ Enabled | Comprehensive PR review |
| `hookify` | ✅ Enabled | Claude behavior hooks |
| `plugin-dev` | ✅ Enabled | Plugin development |
| `ralph-loop` | ✅ Enabled | Recurring task loops |
| `explanatory-output-style` | ✅ Enabled | Learning-focused output |
| `learning-output-style` | ✅ Enabled | Interactive learning mode |
| `security-guidance` | ✅ Enabled | Security vulnerability guidance |
| `claude-mem` | ⚠️ Installed, DISABLED | Auto-session memory capture — decision pending |

---

## 4. External CLIs

| Tool | Status | Purpose | Agent |
|------|--------|---------|-------|
| `gws` (Google Workspace CLI) | ✅ Configured | Gmail, Drive, Calendar, Sheets | ORION / HERMES |
| `gh` (GitHub CLI) | ✅ Available | PRs, issues, releases | @devops (exclusive) |
| `git` | ✅ Available | Version control | @devops (push exclusive) |
| `node` / `npx` | ✅ v24.14.0 | Runtime for MCP servers | All |
| `Antigravity CLI` | ✅ Installed | Obsidian interaction | ORION |
| `Obsidian Local REST API` | ✅ Active | HTTPS on localhost:27124 | ORION |

---

## 5. Repositories Mapped — Final Status

Evaluated 2026-03-19. Source: ORION mapping session.

| Repo | Disposition | Status |
|------|------------|--------|
| `googleworkspace/cli` | Already installed as `gws` | ✅ Done |
| `upstash/context7` | Requires Docker — not available | ⚠️ Blocked |
| `czlonkowski/n8n-mcp` | Installed in ~/.claude.json | ✅ Done |
| `jacob-bd/notebooklm-mcp-cli` | Installed — verify on restart | ✅ Done |
| `teng-lin/notebooklm-py` | Covered by notebooklm-mcp | ✅ Not needed |
| `nextlevelbuilder/ui-ux-pro-max-skill` | Installed via uipro-cli | ✅ Done |
| `AgriciDaniel/claude-ads` | Already installed (18 skills) | ✅ Done |
| `thedotmack/claude-mem` | Installed, disabled — decision pending | ⚠️ Pending |
| `remotion-dev/remotion` | Deferred to Phase 2 | ⏳ Later |

---

## 6. Pending Decisions

| Decision | Context | Owner |
|----------|---------|-------|
| Enable `claude-mem`? | Auto-captures session context. May complement current file-based memory. | Arthur |
| Install Docker? | Would unlock Context7, EXA, Apify MCPs | Arthur / @devops |
| `remotion` — when? | Video creation for Reels/CREATOR$ content | When content pipeline active |

---

*Updated: 2026-03-19 | Maintained by ORION*
