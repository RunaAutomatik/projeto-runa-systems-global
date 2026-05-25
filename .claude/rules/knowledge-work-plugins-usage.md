---
paths: **/*
---

# anthropics/knowledge-work-plugins — Usage Rules

## What it is

Official Anthropic plugin marketplace with 11 core professional plugins and 20+ partner-built
plugins. Each plugin connects Claude to external tools (Slack, Notion, HubSpot, Snowflake, etc.)
and provides specialized workflows for business domains: marketing, sales, finance, data, legal,
product management, enterprise search, and more.

Repo: https://github.com/anthropics/knowledge-work-plugins
Marketplace manifest: `https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/.claude-plugin/marketplace.json`

## Status

```
⚠️  Marketplace NOT yet added — must be done manually in Claude Code terminal or GUI
⚠️  Plugins NOT yet installed — requires marketplace add first

Installation (run in your terminal or Claude Code GUI):
  claude plugin marketplace add anthropics/knowledge-work-plugins
  claude plugin install <plugin-name>@knowledge-work-plugins

Verify:
  claude plugin list
```

> **Why not automated:** The `claude` CLI is embedded in the Claude Code desktop/VS Code app
> and is not exposed as a standalone executable reachable from Bash within Claude Code sessions.
> Run the install commands above in an external terminal.

---

## Agent Assignment

| Plugin | Primary Agent | Secondary Agent | Key Connectors |
|--------|-------------|----------------|---------------|
| `marketing` | ARES | FREYJA | Slack, Canva, Figma, HubSpot, Ahrefs, Klaviyo |
| `sales` | ARES | HERMES | HubSpot, Close, Clay, ZoomInfo, Fireflies |
| `finance` | ARES | @data-engineer | Snowflake, Databricks, BigQuery, Slack |
| `product-management` | @pm | FREYJA | Linear, Jira, Notion, Figma, Amplitude, Pendo |
| `data` | @analyst | @data-engineer | Snowflake, Databricks, BigQuery, Amplitude, Hex |
| `enterprise-search` | ORION | @analyst | Slack, Notion, Guru, Jira, Asana |
| `legal` | @pm | — | Slack, Box, Egnyte, Jira |
| `bio-research` | @analyst | — | PubMed, bioRxiv, ClinicalTrials.gov, ChEMBL |
| `productivity` | ORION | — | Slack, Notion, Asana, Linear, Jira, ClickUp |
| `customer-support` | HERMES | ORION | Intercom, HubSpot, Guru, Jira, Notion |
| `cowork-plugin-management` | @devops | — | Internal plugin orchestration |

Agents NOT listed: @dev, @qa, @architect, @ux-design-expert, MAYA — route through the agents above.

---

## When to Use

**USE knowledge-work-plugins when:**
- Cross-tool queries require structured retrieval across Slack, Notion, Jira simultaneously (`enterprise-search`)
- Drafting marketing copy or campaign plans that pull live data from HubSpot or Klaviyo (`marketing`)
- Analyzing pipeline data or writing outreach that integrates ZoomInfo/Clay leads (`sales`)
- Generating journal entries, reconciliation reports, or budget analysis from Snowflake/BigQuery (`finance`)
- Writing PRDs, roadmap specs, or feature prioritization using Figma + Linear context (`product-management`)
- Running SQL analysis, building dashboards, or interpreting Amplitude events (`data`)
- Searching scientific literature across PubMed/bioRxiv for R&D context (`bio-research`)
- Managing tasks across Asana, Linear, or ClickUp from natural language (`productivity`)

**Do NOT use when:**
- External connectors are not configured — plugins require active workspace connections to function
- The task needs only Claude's native capabilities — no connector integration required
- Task is code generation, file editing, or local operations → use Claude Code native tools

---

## Decision Tree

```
Need cross-tool business workflow?
  ├── Content + brand + campaigns → marketing
  ├── Sales prospecting + pipeline → sales
  ├── Financial reporting + reconciliation → finance
  ├── PRDs + roadmap + feature specs → product-management
  ├── SQL + dashboards + event analysis → data
  ├── Search across Slack + Notion + Jira → enterprise-search
  ├── Literature review + life sciences → bio-research
  ├── Task management (Asana/Linear/ClickUp) → productivity
  ├── Support tickets + KB → customer-support
  └── Just Claude reasoning on context → no plugin needed
```

---

## Plugin Catalog — Core (Anthropic-built)

| Plugin name | Domain | Trigger when |
|------------|--------|-------------|
| `productivity` | Task/calendar management | Managing work across connected PM tools |
| `enterprise-search` | Cross-tool structured retrieval | Searching knowledge across ≥2 connected tools |
| `cowork-plugin-management` | Plugin customization | Creating or adjusting team plugins |
| `sales` | Prospect research, outreach, CRM | Sales workflow touching HubSpot/Close/Clay |
| `finance` | Journal entries, reconciliation, GL | Finance workflows on Snowflake/BigQuery data |
| `data` | SQL, BI dashboards, event analysis | Data analysis on Snowflake/Databricks/BigQuery |
| `legal` | Contract review, compliance checks | Legal document workflows |
| `marketing` | Content, campaigns, brand voice | Marketing workflows with live HubSpot/Ahrefs data |
| `customer-support` | Ticket triage, KB authoring | Customer support via Intercom/HubSpot |
| `product-management` | Specs, roadmaps, feature prioritization | PM workflows across Linear/Figma/Amplitude |
| `bio-research` | Life sciences R&D literature | Research tasks touching PubMed/ClinicalTrials |

## Plugin Catalog — Partner-built (selected)

| Plugin | Partner | Domain |
|--------|---------|--------|
| `slack-salesforce` | Slack | CRM + Slack integration |
| `apollo` | Apollo | Lead enrichment and outreach |
| `miro` | Miro | Collaborative whiteboards + diagramming |
| `figma` | Figma | Design assets integration |
| `zoom` | Zoom | Meeting transcripts + scheduling |
| `zapier` | Zapier | Cross-app automation triggers |
| `intercom` | Intercom | Customer messaging integration |
| `vanta-mcp-plugin` | Vanta | Compliance and security posture |
| `prisma` | Prisma | Database ORM integration |
| `adobe` | Adobe | Creative assets access |

Full catalog: `https://raw.githubusercontent.com/anthropics/knowledge-work-plugins/main/.claude-plugin/marketplace.json`

---

## Installation Workflow

```
1. Add marketplace (once):
   claude plugin marketplace add anthropics/knowledge-work-plugins

2. Install individual plugins as needed:
   claude plugin install marketing@knowledge-work-plugins
   claude plugin install data@knowledge-work-plugins
   claude plugin install enterprise-search@knowledge-work-plugins
   ...

3. Verify:
   claude plugin list

4. Connect external accounts via each plugin's setup prompt
   (each plugin will prompt for connector credentials on first use)
```

Recommended priority install order for RUNA SYSTEMS:
1. `marketing` (ARES/FREYJA — campaign + content workflows)
2. `data` (ORION/@analyst — Snowflake/BigQuery analysis)
3. `enterprise-search` (ORION — cross-tool knowledge retrieval)
4. `product-management` (@pm — PRDs + roadmap)
5. `sales` (ARES — outreach + pipeline)

---

## Anti-Patterns

❌ **Installing all 35+ plugins at once** — install by priority. Unused plugins add noise with no benefit.

❌ **Using `enterprise-search` without configured connectors** — the plugin needs active Slack/Notion/Jira connections; without them it searches nothing.

❌ **Confusing knowledge-work-plugins with MCPs** — these are Claude Code plugins (`.claude/plugins/`), not MCP servers. Different install mechanism, different runtime.

❌ **Routing @dev tasks through knowledge-work-plugins** — `data` plugin is for business analytics (Snowflake/BigQuery SQL), not application code generation.

❌ **Using `bio-research` for general web research** — it's specialized for life sciences databases (PubMed, ClinicalTrials). For general research use ALEX + `web-search` skill.

❌ **Attempting `claude plugin` commands from Bash tool within Claude Code** — the `claude` CLI is not available from within Claude Code's Bash context. Run from an external terminal.

---

## Product Application

| Product | knowledge-work-plugins Role |
|---------|---------------------------|
| **RUNA SYSTEMS** | `marketing` for campaign briefs; `data` for student analytics; `product-management` for session PRDs; `enterprise-search` for knowledge retrieval across system docs |