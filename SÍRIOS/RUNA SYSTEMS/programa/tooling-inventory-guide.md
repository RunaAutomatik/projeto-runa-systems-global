---
date: 2026-04-17
tags: [runa-systems, mentoria, tooling, agents, squad, onboarding]
project: runa-systems-global
type: mentoria-guide
produto: [[runa-systems-prd]]
modulo: "Infra — Tooling Inventory & Agent Access Rules"
---

# Tooling Inventory — How to Equip Your Squad

> RUNA SYSTEMS Mentoria · Infrastructure Module

An AI squad without documented tooling is a team that can't onboard itself.
This guide explains the concept, gives you the exact prompt to build your own
tooling inventory, and defines the access rules each agent follows.

---

## Why a Tooling Inventory Exists

Every agent in your squad needs tools to operate. Tools fall into three categories:

| Type | What it does | Examples |
|------|-------------|---------|
| **Skills** | Expand what an agent *knows* — structured prompt libraries | ads, seo, ui-ux-pro-max, carousel-workflow |
| **MCPs** | Give agents *access* to external services | n8n, Supabase, Figma, Notebooklm, Neon |
| **Libraries / CLIs** | Tools agents *run* in code or terminal | gws, gh, infsh, python-docx, ffmpeg |

The tooling inventory is a single Markdown file in your vault that:
1. Lists every installed skill, MCP, and CLI
2. Maps each tool to the agent(s) that own or consume it
3. Defines when each tool is used (and when NOT to use it)
4. Serves as the agent's onboarding document — any new agent reads this first

Without it, agents invent tools that don't exist, use the wrong tool for the job,
or duplicate work already available via an installed skill.

**The inventory is the squad's shared memory of its own capabilities.**

---

## The 5-Question Evaluation Framework

Before adding any tool to your squad, answer these:

1. **What does it do?** — one sentence, no jargon
2. **Which agent benefits?** — name the primary owner
3. **What type is it?** — skill / MCP / CLI / library
4. **Is it already covered?** — check the inventory first
5. **What are its external dependencies?** — API key, Docker, auth token, etc.

If you can't answer all 5, the tool is not ready to install.

---

## The Prompt — Build Your Tooling Inventory

Paste this prompt into a Claude Code session to generate and store your
tooling-inventory.md in your SÍRIOS vault. Customize the `[PLACEHOLDERS]` before running.

```
@ORION

Generate a tooling inventory document for this project and save it to the vault.

Save to: SÍRIOS/📐 Projetos/tooling-inventory.md

Document structure (sections in order):

1. **MCP Servers** — table with columns: MCP name | Purpose | Agent owner | Status | Config location
   Include only MCPs actually installed and configured. Do NOT list MCPs that require
   Docker if Docker is not available.

2. **Claude Code Skills** — grouped by category (ads, seo, ui-ux, obsidian, project, inference.sh).
   For each skill: skill name | agent owner | trigger command | what it does

3. **CLIs and External Tools** — table: tool | agent owner | install location | typical command

4. **Plugins** — list all plugins from ~/.claude/skills/plugins/ with purpose and owning agent

5. **Agent → Tool Matrix** — summary table: agent name | skills | MCPs | CLIs
   One row per agent. This is the fast reference for "what can this agent do?"

6. **Pending / Not Installed** — tools evaluated but not yet installed, with reason

Frontmatter:
---
date: [TODAY'S DATE via: date +%Y-%m-%d]
tags: [tooling, squad, inventory, infrastructure]
project: runa-systems-global
type: infrastructure
---

After writing the file, confirm the path and append a one-line entry to:
SÍRIOS/🧠 Orquestrador/memoria-sistema.md
under the "Tools and Infrastructure" section pointing to the new file.
```

---

## Agent Access Rules

These rules define which agent has primary ownership of each tool category.
**Ownership = the agent that executes the tool. Non-owners are consumers only.**

### Governance

| Operation | Agent | Rule |
|-----------|-------|------|
| Add / remove MCP | **@devops (Gage)** | EXCLUSIVE. No other agent installs MCPs. |
| Install skills | **@devops (Gage)** | EXCLUSIVE. Runs `npx skills add` or equivalent. |
| Git push / PR create | **@devops (Gage)** | EXCLUSIVE. All other agents commit, Gage pushes. |
| Obsidian vault writes | **ORION** | EXCLUSIVE. Only ORION creates/edits vault files. |
| Database schema | **@data-engineer (Dara)** | DDL, migrations, RLS — delegated from @architect. |

---

### Tool Access by Agent

#### ORION — Orchestration & Knowledge
| Tool | Type | Access |
|------|------|--------|
| obsidian-cli, obsidian-markdown, json-canvas | Skill | OWNER |
| notebooklm-mcp | MCP | OWNER |
| Gmail MCP, Google Calendar MCP | MCP | PRIMARY CONSUMER |
| gws CLI (Drive, Docs, Sheets, Slides) | CLI | OWNER |
| agent-workflows, prompt-engineering | Skill | OWNER |

#### HERMES — Automation & Communication
| Tool | Type | Access |
|------|------|--------|
| n8n-mcp | MCP | OWNER |
| Gmail MCP, Google Calendar MCP | MCP | CO-OWNER |
| twitter-automation, ai-automation-workflows | Skill | OWNER |
| ai-content-pipeline, ai-social-media-content | Skill | OWNER |

#### ARES — Intelligence & Campaigns
| Tool | Type | Access |
|------|------|--------|
| ads-* (18 skills) | Skill | OWNER |
| competitor-teardown, customer-persona | Skill | OWNER |
| pitch-deck-visuals, product-hunt-launch | Skill | OWNER |

#### HELIOS — SEO & Discovery
| Tool | Type | Access |
|------|------|--------|
| seo-* (13 skills) | Skill | OWNER |
| web-search | Skill | PRIMARY CONSUMER |

#### FREYJA — Narrative & Content
| Tool | Type | Access |
|------|------|--------|
| ads-dna, seo-content | Skill | CONSUMER |
| content-repurposing, linkedin-content | Skill | OWNER |
| technical-blog-writing, newsletter-curation | Skill | OWNER |
| notebooklm-mcp | MCP | CONSUMER |

#### MAYA — Audio-Visual Production
| Tool | Type | Access |
|------|------|--------|
| infsh CLI (image, video, voice, music) | CLI | OWNER |
| flux-image, ai-image-generation | Skill (infsh) | OWNER |
| google-veo, ai-video-generation | Skill (infsh) | OWNER |
| elevenlabs-tts, elevenlabs-music | Skill (infsh) | OWNER |
| background-removal, image-upscaling | Skill (infsh) | OWNER |
| talking-head-production | Skill (infsh) | OWNER |

#### ALEX — Research & Analysis
| Tool | Type | Access |
|------|------|--------|
| ai-rag-pipeline, web-search | Skill (infsh) | OWNER |
| defuddle, seo-competitor-pages | Skill | OWNER |
| notebooklm-mcp | MCP | CONSUMER |
| speech-to-text | Skill (infsh) | OWNER |

#### @dev (Dex) — Implementation
| Tool | Type | Access |
|------|------|--------|
| ui-ux-pro-max, frontend-design | Skill | OWNER |
| Figma MCP | MCP | PRIMARY CONSUMER |
| Supabase MCP, Neon MCP | MCP | CONSUMER |
| stitch-loop, building-inferencesh-apps | Skill | OWNER |
| agent-sdk-dev plugin | Plugin | OWNER |

#### @data-engineer (Dara) — Database
| Tool | Type | Access |
|------|------|--------|
| Supabase MCP | MCP | OWNER |
| Neon MCP | MCP | OWNER |
| SQL generation tools | Native | OWNER |

#### @devops (Gage) — Infrastructure
| Tool | Type | Access |
|------|------|--------|
| All MCP management | Admin | EXCLUSIVE |
| Netlify MCP | MCP | OWNER |
| commit-commands, hookify plugins | Plugin | OWNER |
| devops-automation | Skill | OWNER |
| gh CLI (PRs, releases) | CLI | EXCLUSIVE |
| git push | Native | EXCLUSIVE |

#### @qa (Quinn) — Quality
| Tool | Type | Access |
|------|------|--------|
| code-review, testing-strategy | Skill | OWNER |
| pr-review-toolkit plugin | Plugin | OWNER |
| gstack/review, gstack/qa, gstack/cso | Skill | OWNER |

#### @architect (Aria) — Architecture
| Tool | Type | Access |
|------|------|--------|
| architecture-design, agent-workflows | Skill | OWNER |
| prompt-engineering | Skill | CO-OWNER with ORION |

---

## The Access Rule in Plain Language

> **"Own" means you execute it. "Consume" means you trigger it or read its output.**
> No agent installs, removes, or reconfigures tools they don't own.
> All MCP changes go through @devops — no exceptions.

When an agent needs a tool it doesn't own:
1. Check if the owning agent can execute on its behalf
2. If yes — delegate with a brief
3. If no — escalate to ORION for orchestration

---

## Source of Truth

Once your tooling-inventory.md is created, it becomes the authoritative reference.
Update it every time a tool is added, removed, or reconfigured.

The inventory is always linked from:
- `SÍRIOS/🧠 Orquestrador/memoria-sistema.md` → Section 7 (Tools)
- `.claude/rules/capability-map.md` → Quick lookup table
- `.claude/rules/mcp-usage.md` → MCP section

**A tool not in the inventory does not officially exist for the squad.**

---

*Próximo módulo: Agent Memory — how agents read and write persistent knowledge*
*Documento: [[agent-memory-guide]]*
