# LLM Wiki Skills — Usage Rules

## What it is

Two skills implementing the [Karpathy LLM wiki pattern](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f):
an AI-maintained persistent knowledge base that sits between the human and raw sources.
Instead of re-deriving knowledge from raw documents on every query (RAG), knowledge is compiled
once into interconnected wiki pages and kept current incrementally.

Skills installed at: `~/.claude/skills/llm-wiki-setup` and `~/.claude/skills/wiki-self-heal`
(symlinks → `~/ai-second-brain-skills/`)

---

## Current Status

| Skill | Status | Vault |
|-------|--------|-------|
| `llm-wiki-setup` | ✅ Installed + scaffolded | AKASHA (nested + hot cache) |
| `wiki-self-heal` | ✅ Installed | AKASHA (not yet run) |

AKASHA scaffold path: `D:/Runa/runa-systems-global/AKASHA/`
SÍRIOS: intentionally NOT scaffolded — Obsidian vault has its own structure; no overlap.

---

## Agent Assignment

| Agent | Skill | When |
|-------|-------|------|
| ORION | `llm-wiki-setup` | Bootstrap a new knowledge vault from scratch |
| ORION | `wiki-self-heal` | Periodic health-check + gap-fill on existing wiki |
| FREYJA | Read from `AKASHA/wiki/` | Content strategy knowledge queries |
| ARES | Read from `AKASHA/wiki/` | Offer and sales framework queries |
| HERMES | Read from `AKASHA/wiki/` | Automation workflow knowledge queries |

---

## When to Use

### `llm-wiki-setup`
- Bootstrapping a new knowledge vault from zero
- Setting up the Karpathy 3-layer architecture in a new directory
- **Trigger:** `/llm-wiki-setup`

### `wiki-self-heal`
- Periodic health-check of an existing wiki (orphan pages, contradictions, gaps)
- After a burst of ingestion to ensure cross-references are complete
- **Trigger:** `/wiki-self-heal`

### When NOT to use
- Do NOT run `llm-wiki-setup` on SÍRIOS — it has its own Obsidian structure
- Do NOT use for code documentation → use standard AIOX docs in `docs/`
- Do NOT use for session-scoped notes → use `wiki/log.md` + `wiki/hot.md` only for persistent knowledge

---

## Decision tree

```
Need to store knowledge persistently?
  ├── It's business/marketing/sales knowledge → AKASHA/raw/ → /wiki-self-heal ingest
  ├── It's a project doc, spec, or decision → SÍRIOS/ (Obsidian)
  └── It's code architecture → docs/ (AIOX standard)
```

---

## AKASHA Vault Structure

```
AKASHA/
├── CLAUDE.md              # map — routing table, schema, workflows, guardrails
├── AGENTS.md              # minimal mirror for non-Claude agents
├── .gitignore
├── raw/                   # immutable source documents (drop files here to ingest)
└── wiki/
    ├── index.md           # catalog of every page — READ THIS FIRST on any query
    ├── log.md             # append-only operation log
    ├── hot.md             # 500-char rolling buffer for recent active knowledge
    ├── entities/          # people, orgs, products
    ├── concepts/          # frameworks, techniques, patterns
    ├── sources/           # source summary pages
    └── analyses/          # comparisons, syntheses, audits
```

## Ingest workflow (quick reference)

1. Drop source into `AKASHA/raw/YYYY-MM-DD-source-title.md`
2. Open Claude Code in AKASHA: `cd AKASHA && claude`
3. Say: "Ingest the new source I just added to raw/"
4. Claude reads `CLAUDE.md` + `wiki/index.md`, creates/updates pages, appends log

A substantive source typically touches 10–15 pages.

## Anti-patterns

- Ingesting directly without reading `AKASHA/CLAUDE.md` first → pages created with wrong format
- Adding pages without updating `wiki/index.md` → invisible pages (routing breaks)
- Modifying files in `raw/` → violates immutability contract
- Running `llm-wiki-setup` on an existing vault without safety check → overwrites CLAUDE.md
- Using the wiki for ephemeral/session notes → wiki/log.md is for operations, not drafts

---

## Product Application

| Product | How AKASHA feeds it |
|---------|-------------------|
| RUNA SYSTEMS | Teaching clients the Karpathy wiki pattern as a knowledge management module; FREYJA and ARES query AKASHA for content strategy and offer-building frameworks |
