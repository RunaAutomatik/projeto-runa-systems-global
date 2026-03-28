---
date: 2026-03-27
tags: [ecosystem, capabilities, agents, tools, skills]
project: runa-systems-global
---

# Capability Map — Runa Systems Global

> Source of truth for which tool, skill, plugin, or MCP to use for each agent, product, and workflow.
> Every agent reads this before deciding how to execute a task.

---

## 1. Quick Reference — By Agent

### FREYJA (Content Agent)
| Task | Tool/Skill | How |
|------|-----------|-----|
| Write copy, captions, hooks | Claude native | Direct generation |
| Research competitor content | `seo-content`, `seo-competitor-pages` | `/seo-content` |
| Generate carousel images | `ads-generate`, `ads-photoshoot` | `/ads-generate` |
| Build brand visual identity | `ui-ux-pro-max` | `/ui-ux-pro-max` |
| Extract brand DNA from URL | `ads-dna` | `/ads-dna` |
| Publish to Instagram | `claude.ai Supabase` + n8n-mcp | Via HERMES handoff |
| Save content to vault | `obsidian-cli`, `obsidian-markdown` | `/obsidian-cli` |
| Build Obsidian canvas (content calendar) | `json-canvas` | `/json-canvas` |

### HERMES (Automation Agent)
| Task | Tool/Skill | How |
|------|-----------|-----|
| Design n8n workflow | n8n-mcp | `mcp__n8n-mcp__*` |
| Search n8n nodes | n8n-mcp | `mcp__n8n-mcp__search_nodes` |
| Get n8n templates | n8n-mcp | `mcp__n8n-mcp__get_template` |
| Validate workflow | n8n-mcp | `mcp__n8n-mcp__validate_workflow` |
| Instagram DM automation | n8n-mcp + Meta Graph API | Via HERMES automation |
| Email automation | `claude.ai Gmail` | `mcp__claude_ai_Gmail__*` |
| Calendar scheduling | `claude.ai Google Calendar` | `mcp__claude_ai_Google_Calendar__*` |
| Client onboarding sequence | n8n-mcp + Supabase | Pipeline design |

### ARES (Offer/Business Agent)
| Task | Tool/Skill | How |
|------|-----------|-----|
| Structure product offer | Claude native + `spec-writing` | `/spec-writing` |
| Analyze competitor ads | `ads-competitor`, `ads-audit` | `/ads-competitor` |
| Plan ad campaign | `ads-plan`, `ads-create` | `/ads-plan` |
| Audit Meta/Instagram ads | `ads-meta` | `/ads-meta` |
| Audit Google ads | `ads-google` | `/ads-google` |
| Build landing page brief | `ads-landing` | `/ads-landing` |
| Budget allocation | `ads-budget` | `/ads-budget` |

### HELIOS (SEO Agent)
| Task | Tool/Skill | How |
|------|-----------|-----|
| Full site SEO audit | `seo-audit` | `/seo-audit` |
| Single page SEO analysis | `seo-page` | `/seo-page` |
| Technical SEO | `seo-technical` | `/seo-technical` |
| Schema markup | `seo-schema` | `/seo-schema` |
| AI Overviews / GEO | `seo-geo` | `/seo-geo` |
| Sitemap | `seo-sitemap` | `/seo-sitemap` |
| Hreflang (i18n) | `seo-hreflang` | `/seo-hreflang` |
| Programmatic SEO | `seo-programmatic` | `/seo-programmatic` |
| Content E-E-A-T | `seo-content` | `/seo-content` |

### ALEX (Intelligence/Research Agent)
| Task | Tool/Skill | How |
|------|-----------|-----|
| Market research | Claude WebSearch + `defuddle` | `/defuddle` + WebSearch |
| Extract web content clean | `defuddle` | `/defuddle` |
| Competitor SEO analysis | `seo-competitor-pages` | `/seo-competitor-pages` |
| Generate NotebookLM podcast | notebooklm-mcp | `mcp__notebooklm-mcp__*` |
| Add source to notebook | notebooklm-mcp | `mcp__notebooklm-mcp__add_notebook` |
| Ask notebook question | notebooklm-mcp | `mcp__notebooklm-mcp__ask_question` |

### ORION (Orchestrator)
| Task | Tool/Skill | How |
|------|-----------|-----|
| Write to Obsidian vault | `obsidian-cli` | `/obsidian-cli` |
| Create Obsidian note | `obsidian-markdown` | `/obsidian-markdown` |
| Open/close work diary | `obsidian-cli` | `npm run dia:abrir/fechar` |
| Read email | `claude.ai Gmail` | `mcp__claude_ai_Gmail__gmail_read_message` |
| Create calendar event | `claude.ai Google Calendar` | `mcp__claude_ai_Google_Calendar__gcal_create_event` |
| Deploy to Netlify | `claude.ai Netlify` | `mcp__claude_ai_Netlify__*` |
| Orchestrate multi-agent workflow | `agent-workflows` | `/agent-workflows` |

### @dev (Dex — Implementation)
| Task | Tool/Skill | How |
|------|-----------|-----|
| Design UI/UX | `ui-ux-pro-max`, `frontend-design` | `/ui-ux-pro-max` |
| Build frontend | `frontend-design` plugin | Via plugin agents |
| Read Figma design | `claude.ai Figma` | `mcp__claude_ai_Figma__get_design_context` |
| Database schema | `claude.ai Supabase` | `mcp__claude_ai_Supabase__*` |
| PostgreSQL (Neon) | Neon MCP | `mcp__Neon__*` |
| Build Agent SDK app | `agent-sdk-dev` plugin | `/agent-sdk-dev:new-sdk-app` |
| Video → website | `video-to-website` | `/video-to-website` |
| Code review (self) | `code-review` plugin | `/code-review` |

### @devops (Gage — EXCLUSIVE)
| Task | Tool/Skill | How |
|------|-----------|-----|
| Git push / PR | `commit-commands` | `/commit-commands:commit-push-pr` |
| Deploy | `claude.ai Netlify` | `mcp__claude_ai_Netlify__netlify-deploy-services-updater` |
| Manage hooks | `hookify` plugin | `/hookify` |

### @architect (Aria)
| Task | Tool/Skill | How |
|------|-----------|-----|
| System architecture | `architecture-design` | `/architecture-design` |
| Map codebase | `gsd:map-codebase` | `/gsd:map-codebase` |
| Design system | `ui-ux-pro-max` | `/ui-ux-pro-max` |

---

## 2. Quick Reference — By Product

### RUNA SYSTEMS (High Ticket — R$15k/ano)
| Module | Tools/Skills |
|--------|-------------|
| Claude.ai chat module | Claude native — no extra skills |
| Claude.ai co-work module | Claude native — no extra skills |
| Claude Code module | All project skills + AIOX agents |
| Anti-gravity module | `plugin-dev` + `hookify` + `.claude/` config |
| 8 Neural Agents delivery | `agent-workflows` + AIOX + `spec-writing` |
| Community/Skool | n8n-mcp (onboarding automation) + HERMES |
| Raw material capture | `product-radar` rule → `obsidian-cli` |

### CREATOR$ (Mid — ~R$2.997)
| Need | Tools/Skills |
|------|-------------|
| Content system design | FREYJA + `ui-ux-pro-max` + `obsidian-markdown` |
| Carousel generation | `ads-generate`, `ads-photoshoot` |
| Copy framework | FREYJA + `seo-content` |
| Brand DNA | `ads-dna` |
| Instagram automation | HERMES + n8n-mcp |

### $QUAD (Mid — ~R$2.997–3.997)
| Need | Tools/Skills |
|------|-------------|
| Squad architecture doc | `architecture-design` + `spec-writing` |
| Agent persona design | `spec-writing` + `agent-workflows` |
| Agent SDK implementation | `agent-sdk-dev` plugin |
| AIOX framework | All AIOX agents + `.aiox-core/` |
| Story/epic management | `story-management` + GSD commands |

### AGENT$ (Mid — ~R$1.997–2.997)
| Need | Tools/Skills |
|------|-------------|
| Neural agent design | `spec-writing` + `agent-workflows` |
| System message engineering | `agent-sdk-dev` plugin |
| Monetization structure | ARES + `ads-plan` |

### SITE$ (Mid-Low — ~R$1.997)
| Need | Tools/Skills |
|------|-------------|
| UI/UX design | `ui-ux-pro-max`, `frontend-design` plugin |
| Figma → code | `claude.ai Figma` |
| SEO on-page | `seo-page`, `seo-schema` |
| Deploy | `claude.ai Netlify` via @devops |
| Landing page analysis | `ads-landing` |

### POSICIONAMENTO$ (Mid — ~R$1.997)
| Need | Tools/Skills |
|------|-------------|
| Market research | ALEX + `defuddle` + WebSearch |
| Competitor analysis | `ads-competitor`, `seo-competitor-pages` |
| Brand DNA extraction | `ads-dna` |
| SEO content strategy | `seo-content`, `seo-plan` |

### ORÇAMENTO$ (Low — ~R$97–297)
| Need | Tools/Skills |
|------|-------------|
| Budget/proposal generation | Claude native + `spec-writing` |
| Template system | `obsidian-markdown` + templates |

---

## 3. Quick Reference — By Workflow

### Content Pipeline (FREYJA → Vault → Instagram)
```
Research       → ALEX: defuddle + WebSearch
Copy           → FREYJA: Claude native
Image assets   → FREYJA: ads-generate / ads-photoshoot
Save to vault  → ORION: obsidian-cli + obsidian-markdown
Schedule post  → HERMES: n8n-mcp
Publish        → HERMES: Meta Graph API via n8n
Analyze        → HELIOS: seo-content + ads-meta
```

### Product Development Pipeline (SDC — Story Driven)
```
Epic/Story     → @sm: story-management + /gsd:plan-phase
Spec           → @pm: spec-writing + /spec-writing
Architecture   → @architect: architecture-design
Implementation → @dev: frontend-design + agent-sdk-dev
Review         → @qa: code-review plugin + pr-review-toolkit
Deploy         → @devops: commit-commands + claude.ai Netlify
```

### SEO Pipeline (HELIOS)
```
Audit          → seo-audit (full) or seo-page (single)
Technical      → seo-technical
Content        → seo-content
Schema         → seo-schema
AI Search      → seo-geo
Sitemap        → seo-sitemap
Report         → ALEX: obsidian-markdown → vault
```

### Ads Campaign Pipeline (ARES)
```
Brand DNA      → ads-dna (from URL)
Plan           → ads-plan
Creative brief → ads-create
Generate image → ads-generate
Platform audit → ads-meta / ads-google / ads-tiktok
Landing page   → ads-landing
Budget         → ads-budget
```

### Knowledge Capture Pipeline (Product Radar)
```
Trigger        → product-radar rule (automatic, all agents)
Capture        → obsidian-cli → product-course-raw-material.md
Notebook       → notebooklm-mcp (synthesize insights)
Structure      → spec-writing (turn raw → structured module)
```

---

## 4. Full Inventory

### Skills (Global — 37)
| Skill | Category | Primary Agent |
|-------|----------|--------------|
| ads | Ads orchestrator | ARES |
| ads-apple | Apple Search Ads | ARES |
| ads-audit | Multi-platform audit | ARES |
| ads-budget | Budget strategy | ARES |
| ads-competitor | Competitor intelligence | ARES / ALEX |
| ads-create | Campaign copy brief | ARES / FREYJA |
| ads-creative | Creative quality | FREYJA |
| ads-dna | Brand DNA extractor | FREYJA / ARES |
| ads-generate | AI image generation | FREYJA |
| ads-google | Google Ads analysis | ARES |
| ads-landing | Landing page assessment | ARES / @dev |
| ads-linkedin | LinkedIn Ads analysis | ARES |
| ads-meta | Meta/Instagram Ads | ARES / FREYJA |
| ads-microsoft | Microsoft/Bing Ads | ARES |
| ads-photoshoot | Product photography AI | FREYJA |
| ads-plan | Strategic ad planning | ARES |
| ads-tiktok | TikTok Ads analysis | ARES |
| ads-youtube | YouTube Ads analysis | ARES / FREYJA |
| seo | SEO orchestrator | HELIOS |
| seo-audit | Full site audit | HELIOS |
| seo-competitor-pages | Competitor pages | HELIOS / ALEX |
| seo-content | Content + E-E-A-T | HELIOS / FREYJA |
| seo-geo | AI Overviews/GEO | HELIOS |
| seo-hreflang | i18n SEO | HELIOS |
| seo-images | Image SEO | HELIOS |
| seo-page | Single page analysis | HELIOS |
| seo-plan | SEO strategy | HELIOS |
| seo-programmatic | Programmatic SEO | HELIOS |
| seo-schema | Schema markup | HELIOS |
| seo-sitemap | Sitemap | HELIOS |
| seo-technical | Technical SEO | HELIOS |
| defuddle | Clean web extraction | ALEX |
| json-canvas | Obsidian canvas | ORION / FREYJA |
| obsidian-bases | Obsidian bases | ORION |
| obsidian-cli | Vault CLI | ORION |
| obsidian-markdown | Obsidian markdown | ORION / all |
| ui-ux-pro-max | UI/UX design | @dev / UMA |

### Skills (Project — 9)
| Skill | Primary Agent |
|-------|--------------|
| agent-workflows | ORION / @architect |
| architecture-design | @architect |
| code-review | @qa |
| devops-automation | @devops |
| spec-writing | @pm / @sm |
| story-management | @sm |
| testing-strategy | @qa |
| ui-ux-pro-max | @dev / UMA |
| video-to-website | @dev / FREYJA |

### Plugins (12 official + 1 custom)
| Plugin | Primary Use | Primary Agent |
|--------|------------|--------------|
| agent-sdk-dev | Build Claude Agent SDK apps | @dev |
| code-review | CodeRabbit PR review | @qa |
| commit-commands | Git commit/push/PR | @devops |
| feature-dev | Feature development workflow | @dev |
| frontend-design | Frontend UI components | @dev |
| hookify | Hook creation/management | @devops / ORION |
| plugin-dev | Plugin/skill/hook development | @dev |
| pr-review-toolkit | PR review suite | @qa |
| ralph-loop | Continuous improvement loop | @qa |
| security-guidance | Security best practices | @dev / @qa |
| ui-ux-pro-max-skill | Advanced UI/UX | @dev / UMA |
| explanatory-output-style | Educational output | All (mode) |
| learning-output-style | Learning mode output | All (mode) |

### MCPs (8 total)
| MCP | Primary Agent | Key Operations |
|-----|--------------|---------------|
| n8n-mcp | HERMES / ORION | Workflow design, node search, templates |
| notebooklm-mcp | ALEX / FREYJA | Podcast gen, knowledge synthesis |
| Neon | @data-engineer | PostgreSQL DB, branches, migrations |
| claude.ai Figma | @dev / UMA | Design → code, diagrams, Code Connect |
| claude.ai Gmail | HERMES / ORION | Email read/send/draft/search |
| claude.ai Google Calendar | ORION / HERMES | Events, availability, scheduling |
| claude.ai Netlify | @devops | Deploy, hosting, project management |
| claude.ai Supabase | @data-engineer | DB, auth, edge functions, RLS |

### Commands
| Command | Scope | Purpose |
|---------|-------|---------|
| /gsd:* | Global | Full GSD project management suite |
| /AIOX:agents:* | Project | Activate AIOX agents |
| /commit-commands:commit | Global plugin | Git commit |
| /commit-commands:commit-push-pr | Global plugin | Commit + push + PR |

---

## 5. Gaps Identified (capabilities NOT yet covered)

| Gap | Current workaround | Potential solution |
|-----|-------------------|-------------------|
| Video generation (Veo, Seedance) | Manual / external | inference.sh (pending account) |
| Voice/TTS for content | Manual | ElevenLabs direct API or inference.sh |
| Voice cloning | Not available | inference.sh elevenlabs-tts |
| Twitter/X automation | Not available | inference.sh twitter-automation or n8n |
| Image upscaling (AI) | Manual | inference.sh image-upscaling |
| RAG over SÍRIOS vault | Partial (obsidian-cli search) | inference.sh ai-rag-pipeline |

---

*Last updated: 2026-03-27 | Source: `.claude/skills/`, `.claude/plugins/`, `~/.claude.json`*
*Update this file when new capabilities are installed or agents are reassigned.*
