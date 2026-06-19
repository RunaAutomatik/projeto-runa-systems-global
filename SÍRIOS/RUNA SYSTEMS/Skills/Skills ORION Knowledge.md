---
date: 2026-05-23
tags: [skills, orion, knowledge, obsidian, llm-wiki, graphify, notebooklm, knowledge-extraction]
project: runa-systems-global
type: skill-doc
---

# Skills ORION — Knowledge Management

> ORION is the primary vault keeper and knowledge orchestrator. Skills covered: Obsidian CLI/markdown/bases/json-canvas, LLM Wiki (llm-wiki-setup + wiki-self-heal), graphify, knowledge-extraction, prompt-engineering, notebooklm-mcp, and runa-intake.

---

## Obsidian CLI — Vault Operations

**Agente:** ORION
**Vault:** `D:/Runa/runa-systems-global/SÍRIOS/` (primary project memory)
**Local API:** `https://localhost:27124`
**Quando usar:** Any time a document needs to be created, read, or searched in the vault

**Commands:**
```bash
obsidian create path="📐 Projetos/my-doc.md" content="---\ndate: 2026-05-23\n---\n# Title\n..."
obsidian read path="📅 Diário/2026-05-23.md"
obsidian search query="pending"
```

**Date injection rule — MANDATORY:** Never hardcode dates. Always:
```bash
obsidian create path="..." content="---\ndate: $(date +%Y-%m-%d)\n..."
```

**Work diary workflow:**
```bash
npm run dia:abrir   # Start session — reads previous notes, surfaces pending items
npm run dia:fechar  # End session — creates today's note with cognitive summary
```

---

## obsidian-markdown — Document Authoring

**Skill:** `obsidian-markdown` (global)
**Agente:** ORION
**Quando usar:** Creating any structured document in the vault — specs, PRDs, skill docs, decision records

**Key patterns:**

**Frontmatter (required on all new docs):**
```yaml
---
date: 2026-05-23
tags: [project, topic, agent]
project: runa-systems-global
type: skill-doc | spec | analysis | session-deliverable
---
```

**Wikilinks:** `[[document-name]]` — connects docs in Obsidian graph
**Callouts:** `> [!note]`, `> [!warning]`, `> [!tip]` — structured highlighted blocks
**Language policy:** All vault content in English (except 📅 Diário — user-authored, pt-BR allowed)

---

## obsidian-bases — Database Views

**Skill:** `obsidian-bases` (global)
**Agente:** ORION
**Quando usar:** Creating table, board, or gallery views over vault documents using YAML frontmatter as structured data
**Quando NÃO usar:** Simple document reads — use `obsidian read` or `Grep`

**View types:**
- **Table:** Renders frontmatter fields as columns — useful for project status tracking
- **Board:** Kanban-style by status field
- **Gallery:** Card view with cover images

**Casos de uso:**
- Track story status across all active epics (table view)
- Skill inventory board by agent (board view)
- Product PRD gallery with cover images (gallery view)

---

## json-canvas — Visual Node Graphs

**Skill:** `json-canvas` (global)
**Agente:** ORION
**Quando usar:** Creating visual diagrams of system architecture, agent relationships, or product flows in Obsidian
**Format:** `.canvas` files in vault, render as interactive node graphs

**Node types:**
- `text` — text content node
- `file` — links to vault document
- `link` — URL external link
- `group` — visual grouping of nodes

**Casos de uso:**
- RUNA SYSTEMS ecosystem map — products, agents, upsell chain
- $QUAD architecture diagram — 8 agents + relationships
- Client onboarding flow visualization

---

## LLM Wiki — Karpathy Knowledge Base Pattern

### llm-wiki-setup — Bootstrap New Knowledge Vault

**Skill:** `~/.claude/skills/llm-wiki-setup/` (symlink → `~/ai-second-brain-skills/`)
**Comando:** `/llm-wiki-setup`
**Agente:** ORION
**Quando usar:** Bootstrapping a new knowledge vault from zero — sets up CLAUDE.md, wiki/index.md, and directory structure

**AKASHA vault:** `D:/Runa/runa-systems-global/AKASHA/` — layout nested, hot cache active
**RUNA OS vault:** `D:/Runa/runa-systems-global/RUNA OS/` — platform-specific docs

**Setup command example:**
```
/llm-wiki-setup
# → Specify: path, layout (nested), hot cache (yes)
```

**Vault structure created:**
```
VAULT/
├── CLAUDE.md          ← routing map (read before any operation)
├── AGENTS.md          ← minimal mirror for non-Claude agents
├── raw/               ← immutable source docs
└── wiki/
    ├── index.md       ← catalog — UPDATE on every new page
    ├── log.md         ← append-only operation log
    ├── hot.md         ← 500-char rolling buffer
    ├── entities/      ← people, orgs, products
    ├── concepts/      ← frameworks, techniques, patterns
    ├── sources/       ← source summaries
    └── analyses/      ← comparisons, syntheses
```

**Ingest workflow:**
```
1. Drop source → VAULT/raw/YYYY-MM-DD-source-title.md
2. cd VAULT && claude
3. "Ingest the new source I just added to raw/"
4. Claude reads CLAUDE.md + wiki/index.md → creates/updates pages → appends log
```

**Do NOT run** `/llm-wiki-setup` on an existing vault — it overwrites CLAUDE.md.
**Do NOT run** on SÍRIOS — it has its own Obsidian structure.

### wiki-self-heal — Health Check and Gap Fill

**Skill:** `~/.claude/skills/wiki-self-heal/`
**Comando:** `/wiki-self-heal`
**Agente:** ORION
**Quando usar:** Periodic health-check of existing wiki; after session with 3+ new documents; after large ingestion batch
**O que faz:** Finds orphan pages, contradictions, missing cross-references, stale hot.md entries; fills gaps

**Schedule:**
- After any session with 3+ new wiki docs
- After RUNA OS major build phase milestones
- Weekly on AKASHA vault

---

## graphify — Knowledge Graph Visualization

**Skill:** `~/.claude/skills/graphify/SKILL.md`
**Comando:** `/graphify`
**Agente:** ORION (primary), ALEX (research corpus)
**Package:** `pip install graphifyy` | `import graphify`
**Quando usar:** Understanding codebase structure, discovering knowledge patterns, visualizing vault coverage, RAG coverage checks

**9-step pipeline:** Detect → AST Extract → Semantic Extract → Merge → Build Graph → Cluster → Label → Generate Output → Export (optional)

**Commands:**
```
/graphify <file or folder>        # Full pipeline — HTML + GRAPH_REPORT.md + graph.json
/graphify <free text>             # Graph from concepts in prose
/graphify query <entity>          # Find nodes related to an entity
/graphify path <A> <B>            # Shortest path between two nodes
/graphify explain <node>          # Explain a node's role in the graph
/graphify add <new docs>          # Incremental mode — update without reprocessing
/graphify watch <folder>          # Watch mode — auto-reprocess on file changes
```

**Outputs:**
- `graph.html` — Interactive D3.js visualization (clickable nodes, zoom, cluster filter)
- `GRAPH_REPORT.md` — Text report: top entities, communities, hubs, gaps
- `graph.json` — Raw data for external pipelines
- Obsidian export — Creates/updates vault notes with wikilinks based on graph relations
- Neo4j export — Cypher queries for graph database import

**Casos de uso:**
```bash
/graphify SÍRIOS/                                    # Full vault map — coverage audit
/graphify .aiox-core/agents/                         # Agent relationships + gaps
/graphify AKASHA/📚 Alex Hormozi/                    # RAG coverage check before indexing
/graphify SÍRIOS/📐 Projetos/ --filter "prd"         # Product teia visualization
/graphify add SÍRIOS/📅 Diário/2026-05-23.md         # Incremental daily update
```

**Schedule for RUNA OS:** Run `/graphify RUNA OS/` at end of each build phase (Phases 1→2→3→4)

**Verification:**
```bash
python -c "import graphify; print('OK')"
```

---

## knowledge-extraction — Structured Knowledge Base Creation

**Skill:** `~/.claude/skills/knowledge-extraction/SKILL.md`
**Commands:** `*extract-knowledge`, `*update-kb`
**Agente:** ORION
**Quando usar:** Transforming any content (PDFs, transcripts, YouTube videos, podcasts, books, Twitter threads) into structured AKASHA-compatible knowledge

**3 extraction modes:**

| Mode | Use Case | Output Size |
|------|----------|-------------|
| QUICK | Social media, single clips | < 300 tokens |
| STANDARD | Books, long-form interviews, podcasts | Full template |
| DEEP | RAG/NotebookLM sources | Full + chunked sections |

**AKASHA vault targets:**

| Content domain | Path |
|----------------|------|
| Alex Hormozi | `AKASHA/📚 Alex Hormozi/` |
| Hormozi frameworks | `AKASHA/📚 Hormozi Frameworks/` |
| Sales frameworks | `AKASHA/📚 Vendas Alto Ticket/` |
| Agent knowledge | `AKASHA/🧠 Agent Knowledge Maps/` |
| General index | `AKASHA/🔗 Index/` |

**Chunking rules:** One concept per chunk, 3-5 keywords, self-contained meaning
**Routing metadata** (AIOX extension): `target_agent`, `vault_path`, `rag_enabled`

**Workflow:**
```
Source content
  → ORION *extract-knowledge (mode selection)
  → AKASHA vault
  → [optional] ALEX ai-rag-pipeline
  → [optional] notebooklm-mcp
  → Agents consume via memory or RAG query
```

---

## notebooklm-mcp — Google NotebookLM

**Status:** ACTIVE — configured in `.mcp.json` | **Tools prefix:** `mcp__notebooklm-mcp__*`
**Agents with access:** ORION (orchestration), ALEX (research), FREYJA (content strategy)

**7 MCP tools:**

| Tool | Purpose |
|------|---------|
| `mcp__notebooklm-mcp__notebook_list` | List all notebooks |
| `mcp__notebooklm-mcp__notebook_create` | Create new notebook |
| `mcp__notebooklm-mcp__notebook_get` | Get notebook details |
| `mcp__notebooklm-mcp__source_add` | Add source to notebook |
| `mcp__notebooklm-mcp__notebook_query` | Query notebook with question |
| `mcp__notebooklm-mcp__studio_create` | Create audio overview (podcast) |
| `mcp__notebooklm-mcp__refresh_auth` | Reload auth from disk (⚠️ false positive — see Troubleshooting) |

**Installation fix:** Command MUST be `npx -y notebooklm-mcp`, NOT bare `notebooklm-mcp`
**Auth:** Cookie-based — expires periodically (days to weeks). `refresh_auth` only reads disk cache — it does NOT validate against Google and reports success even when expired. Use CLI to actually renew (see below).
**PT-BR:** Add `"NOTEBOOKLM_HL": "pt-BR"` to `.mcp.json` env for audio generation in Portuguese.

**Casos de uso:**
- Create podcast-style audio overview of RUNA SYSTEMS methodology
- Query the Alex Hormozi corpus for sales frameworks
- Add session transcripts as sources for RAG queries

### Prerequisites

| Requirement | Check |
|-------------|-------|
| Python 3.10+ | `python --version` |
| Claude Code installed | `claude --version` |
| Google account with NotebookLM | notebooklm.google.com |

### Installation

```bash
# 1. Install uv (isolated environment manager — recommended)
python -m pip install uv --user

# 2. Install the package (creates nlm + notebooklm-mcp)
python -m uv tool install notebooklm-mcp-cli

# 3. Add to PATH (Windows — current session)
export PATH="$PATH:/c/Users/{user}/.local/bin"
# Permanent: echo 'export PATH=...' >> ~/.bashrc

# 4. Register in Claude Code (global scope)
export PYTHONUTF8=1
nlm setup add claude-code

# 5. Authenticate (opens real Chrome via CDP — not headless)
export PYTHONUTF8=1
nlm login

# 6. Restart Claude Code then verify
nlm doctor
```

> ⚠️ `PYTHONUTF8=1` is mandatory on Windows — prevents `UnicodeEncodeError` with characters →, ✓ etc.

### CLI Commands

```bash
# Auth
nlm login              # Login via browser (opens Chrome CDP)
nlm login --check      # Verify auth is still valid
nlm logout             # End session

# Diagnostics
nlm doctor             # Full diagnostics

# Notebooks
nlm notebook list
nlm notebook create "Name"
nlm query <notebook-id> "question"

# MCP registration
nlm setup list         # Show registration status in Claude Code
nlm setup add claude-code   # Register globally
```

### Multi-account (optional)

```bash
nlm login --profile work
nlm login --profile personal
nlm login profile list
```

### Troubleshooting

#### ❌ `refresh_auth` returns success but tools still fail (FALSE POSITIVE)

**Symptom:**
```
refresh_auth → {"status":"success","message":"Auth tokens reloaded from disk cache."}
notebook_get → {"status":"error","error":"Failed to get notebook: Authentication expired."}
```

**Root cause:** `refresh_auth` reads `auth.json` from disk and reports success if the file is parseable. It does NOT validate against Google. If the cookie in the file has expired, this is a false positive.

**Fix — 3 commands in the terminal (outside Claude Code):**
```bash
nlm logout
nlm login
nlm login --check
# Must return: ✓ Authentication valid for [email]
```

Only open Claude Code after seeing `Authentication valid`.

---

#### ❌ `nlm doctor` shows `Account: unknown`

`metadata.json` has no registered email — indicates login was never completed or profile was corrupted.

**Fix:** `nlm logout && nlm login`

---

#### ❌ MCP shows `-` in `nlm setup list`

MCP was configured via manual `.mcp.json`, not through the official channel.

**Fix:**
```bash
nlm setup add claude-code
```

Registers globally. The manual `.mcp.json` entry can be removed afterward.

---

#### ❌ Hardcoded path in `.mcp.json`

```json
"command": "c:\\CLAUDE TESTE\\venv\\Scripts\\notebooklm-mcp.exe"
```

Breaks if the folder is moved. Replace with:
```json
{
  "mcpServers": {
    "notebooklm-mcp": {
      "command": "notebooklm-mcp",
      "env": { "NOTEBOOKLM_HL": "pt-BR" }
    }
  }
}
```

Works if `~/.local/bin` is on PATH.

### Why auth expires

NotebookLM MCP uses **Google session cookies** — NOT OAuth refresh tokens. Cookies have variable TTL (days to weeks). There is no automatic background renewal — each session depends on cookies captured at the last `nlm login`.

**Practical consequence:** Mentees must run `nlm login` periodically. Typical frequency: every 1–2 weeks depending on activity.

### Mentees with NotebookLM installed

| Mentee | Status | Last auth | Version |
|--------|--------|-----------|---------|
| Lucas Pesto | 🔄 Fix pending (deliverable sent pre-S10) | Expired 2026-05-08 | 0.6.5 → update to 0.6.6 |

---

## prompt-engineering — Prompt Optimization

**Skill:** `prompt-engineering` via infsh
**Comando:** `/prompt-engineering`
**Agente:** ORION
**Quando usar:** Optimizing prompts for any model — system messages for neural agents, generation prompts for MAYA, automation prompts for HERMES
**Como usar:** Provide current prompt + target model + desired output quality; skill returns optimized version with explanation

**Casos de uso:**
- Optimize the 8 neural agent system messages before delivering to RUNA SYSTEMS client
- Improve MAYA's video generation prompts for consistent cinematic output
- Refine FREYJA's carousel brief prompts for better adherence

---

## runa-intake — Client Onboarding Day 1

**Skill:** `~/.claude/skills/runa-intake/`
**Comando:** `/runa-intake`
**Agente:** ORION
**Quando usar:** Day 1 of any new RUNA SYSTEMS client — any modality (programa, mentoria, intervenção)

**7 questions → 7 context files:**

| Q# | File generated | Data captured |
|----|---------------|---------------|
| Q1 | `identity.md` | Name, primary offer, ideal client |
| Q2 | `voice.md` | 2 verbatim writing samples (never edited) |
| Q3 | `priorities.md` | 3 business priorities for next 90 days |
| Q4 | `revenue-map.md` | Active products, revenue channels, percentages |
| Q5 | `channels.md` | Communication channels with clients |
| Q6 | `storage.md` | Where materials, recordings, docs are stored |
| Q7 | `pain-ead.md` | Primary operational pain + EAD candidate #1 |

**Output structure:**
```
squads/{client-slug}/
├── context/
│   ├── identity.md
│   ├── priorities.md
│   ├── revenue-map.md
│   ├── channels.md
│   ├── storage.md
│   └── pain-ead.md
└── references/
    └── voice.md      ← verbatim samples — never edited
```

**Critical:** Q2 (voice.md) requires verbatim samples — no paraphrase or draft. This is the anchor for all neural agent copy generation.

**Integrations:** `voice.md` → FREYJA calibrates all client copy; `pain-ead.md` → first project for squad; `priorities.md` → @pm creates epic backlog

---

## Anti-Patterns

❌ Hardcoding dates in vault documents — always use `$(date +%Y-%m-%d)` or system context
❌ Creating RUNA OS platform docs in SÍRIOS — use `RUNA OS/` vault instead
❌ Running `/llm-wiki-setup` on an existing vault — overwrites CLAUDE.md
❌ Editing files in `raw/` directory — immutability contract; create a new source file
❌ Adding a new wiki page without updating `wiki/index.md` — creates invisible pages
❌ Using graphify for simple file searches — use `Grep` instead
❌ Skipping `/wiki-self-heal` after sessions with 3+ new docs
❌ ORION writing Portuguese content in Skills/ — language policy requires English
