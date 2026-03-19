---
paths: **/*
---

# MCP Server Usage Rules - AIOX Architecture

## MCP Governance

**IMPORTANT:** All MCP infrastructure management is handled EXCLUSIVELY by the **DevOps Agent (@devops / Gage)**.

| Operation | Agent | Command |
|-----------|-------|---------|
| Search MCP catalog | DevOps | `*search-mcp` |
| Add MCP server | DevOps | `*add-mcp` |
| List enabled MCPs | DevOps | `*list-mcps` |
| Remove MCP server | DevOps | `*remove-mcp` |
| Setup Docker MCP | DevOps | `*setup-mcp-docker` |

Other agents (Dev, Architect, etc.) are MCP **consumers**, not administrators. If MCP management is needed, delegate to @devops.

---

## MCP Configuration Architecture

> Full inventory: `SÍRIOS/📐 Projetos/tooling-inventory.md`

### Active every session (claude.ai native integrations)
| MCP | Purpose | Agent |
|-----|---------|-------|
| **claude_ai_Figma** | Design tool access | @ux-design-expert / @dev |
| **claude_ai_Gmail** | Email read/send | HERMES / ORION |
| **claude_ai_Google_Calendar** | Calendar management | ORION / HERMES |
| **claude_ai_Netlify** | Deploy and hosting | @devops |
| **claude_ai_Supabase** | Database and auth | @data-engineer |

### Configured in ~/.claude.json (require session restart)
| MCP | Purpose | Agent | Command |
|-----|---------|-------|---------|
| **Neon** | PostgreSQL database | @data-engineer | HTTP |
| **n8n-mcp** | n8n workflow automation — 1,084 nodes, HERMES automations | HERMES / ORION | `npx -y n8n-mcp` |
| **notebooklm-mcp** | Google NotebookLM — podcast/content generation | FREYJA / ARES | `npx -y notebooklm-mcp` |

> ⚠️ **notebooklm-mcp fix (2026-03-19):** Command must be `npx -y notebooklm-mcp`, NOT bare `notebooklm-mcp`. Bare command fails silently — always use npx pattern for stdio MCPs.

### NOT available (Docker not installed)
> ⚠️ Docker is NOT installed in this environment.
> EXA, Context7, and Apify referenced in legacy docs are NOT available.
> Do NOT attempt to use `mcp__docker-gateway__*` tools — they will fail.

## CRITICAL: Tool Selection Priority

ALWAYS prefer native Claude Code tools over MCP servers:

| Task | USE THIS | NOT THIS |
|------|----------|----------|
| Read files | `Read` tool | any MCP |
| Write files | `Write` / `Edit` tools | any MCP |
| Run commands | `Bash` tool | any MCP |
| Search files | `Glob` tool | any MCP |
| Search content | `Grep` tool | any MCP |
| List directories | `Bash(ls)` or `Glob` | any MCP |

## playwright MCP Usage

### ONLY use playwright when:
1. User explicitly asks for browser automation
2. User wants to take screenshots of web pages
3. User needs to interact with a website
4. Task requires web scraping or testing
5. Filling forms or clicking elements on web pages

### NEVER use playwright for:
- General file operations
- Running commands
- Anything not related to web browsers

## EXA MCP Usage (via Docker)

### Use EXA (mcp__docker-gateway__web_search_exa) for:
1. Web searches for current information
2. Research and documentation lookup
3. Company and competitor research
4. Finding code examples online

### Access pattern:
```
mcp__docker-gateway__web_search_exa
```

## Context7 MCP Usage (via Docker)

### Use Context7 for:
1. Library documentation lookup
2. API reference for packages/frameworks
3. Getting up-to-date docs for dependencies

### Access pattern:
```
mcp__docker-gateway__resolve-library-id
mcp__docker-gateway__get-library-docs
```

## Apify MCP Usage (via Docker)

### Use Apify for:
1. Searching Actors in Apify Store (web scrapers, automation tools)
2. Running web scrapers for social media (Instagram, TikTok, LinkedIn, etc.)
3. Extracting data from e-commerce sites
4. Automated data collection from any website
5. RAG-enabled web browsing for AI context

### Access pattern (7 tools available):

```text
mcp__docker-gateway__apify-slash-rag-web-browser  # RAG-enabled web browsing
mcp__docker-gateway__search-actors                 # Search for Actors
mcp__docker-gateway__call-actor                    # Run an Actor
mcp__docker-gateway__fetch-actor-details           # Get Actor info/schema
mcp__docker-gateway__get-actor-output              # Get results from Actor run
mcp__docker-gateway__search-apify-docs             # Search Apify documentation
mcp__docker-gateway__fetch-apify-docs              # Fetch documentation page
```

### When to use Apify vs other tools:
| Task | Tool |
|------|------|
| General web search | EXA (`web_search_exa`) |
| Scrape specific website | Apify (`call-actor`) |
| Social media data extraction | Apify (use specialized Actors) |
| Library documentation | Context7 |

---

## Rationale

- **Native tools** execute on the LOCAL system (Windows/Mac/Linux)
- **docker-gateway** executes inside Docker containers (Linux)
- Using docker-gateway for local operations causes path mismatches and failures
- Native tools are faster and more reliable for local file operations
- EXA, Context7, and Apify run inside Docker for isolation and consistent environment
- playwright runs directly for better browser integration with host system

---

## Known Issues

### Docker MCP Secrets Bug (Dec 2025)

**Issue:** Docker MCP Toolkit's secrets store and template interpolation do not work properly. Credentials set via `docker mcp secret set` are NOT passed to containers.

**Symptoms:**
- `docker mcp tools ls` shows "(N prompts)" instead of "(N tools)"
- MCP server starts but fails authentication
- Verbose output shows `-e ENV_VAR` without values

**Workaround:** Edit `~/.docker/mcp/catalogs/docker-mcp.yaml` directly with hardcoded env values:
```yaml
{mcp-name}:
  env:
    - name: API_TOKEN
      value: 'actual-token-value'
```

**Affected MCPs:** Any MCP requiring authentication (Apify, Notion, Slack, etc.)

**Working MCPs:** EXA works because its key is in `~/.docker/mcp/config.yaml` under `apiKeys`

For detailed instructions, see `*add-mcp` task or ask @devops for assistance.

---

## n8n-mcp Usage (direct stdio — ~/.claude.json)

**Instance:** `https://primary-production-bae40.up.railway.app` (Railway)
**Agent owner:** HERMES (automations) + ORION (orchestration)

### Use n8n-mcp for:
1. Designing and executing n8n workflows from Claude
2. Instagram DM automation ("comment X → receive Y in DM")
3. Client onboarding sequences
4. Upsell and retention automations (HERMES)
5. Accessing 1,084 node docs + 2,709 workflow templates

### Access pattern:
```
mcp__n8n-mcp__*  (tools available after session restart)
```

### Agents with access:
- **HERMES** — primary consumer (DMs, onboarding, upsell)
- **ORION** — orchestration and workflow design
- **ARES** — campaign automation triggers

---

## Meta Graph API Access

**App:** Humus IA | ID: `2144558136010050` | Type: Business | Mode: Live
**Credentials:** Stored in `.env` — never hardcode in code

| Variable | Description |
|----------|-------------|
| `META_APP_ID` | Humus IA App ID |
| `META_APP_SECRET` | App secret (for token exchange) |
| `META_USER_TOKEN` | Long-Lived User Token (~60 days) |
| `META_PAGE_ID` | Runa Eco IA Facebook Page (679507035249065) |
| `META_PAGE_ACCESS_TOKEN` | Permanent Page Token (derived from Long-Lived User Token) |
| `META_INSTAGRAM_ACCOUNT_ID` | @arthsystems_ Instagram Business Account (17841472834166826) |
| `META_INSTAGRAM_USERNAME` | arthsystems_ |

**Token renewal:** When META_USER_TOKEN expires (~60 days), user provides new short-lived token.
Exchange via: `GET https://graph.facebook.com/oauth/access_token?grant_type=fb_exchange_token&client_id={APP_ID}&client_secret={APP_SECRET}&fb_exchange_token={NEW_TOKEN}`

**Agent access:**
- **HERMES** — comment automation, DMs, follower check
- **ARES** — post insights, campaign metrics
- **FREYJA** — content publishing (`instagram_content_publish`)
- **ORION** — orchestration of all Meta operations

**Instagram automation strategy:**
- Comment triggers + DM delivery → **ManyChat** (not Graph API directly — avoids App Review)
- Post-conversion automation → **N8N via HERMES**
- Biznomad ManyChat MCP → pending install (see project_pending_tasks.md)
