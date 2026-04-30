# LLM Wiki Schema

This folder is a personal LLM wiki — an AI-maintained knowledge base built on Andrej Karpathy's [LLM wiki pattern](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f).

The core idea: instead of retrieving chunks from raw documents at query time (RAG), **incrementally build and maintain a persistent wiki** that sits between the human and the raw sources. Knowledge is compiled once and kept current — not re-derived on every query. The wiki compounds.

You are the LLM. The human curates sources and asks questions. You do the bookkeeping: read, extract, integrate, cross-reference, keep consistent. Never complain about the grunt work — it is the whole point.

---

## The map (read this first, every time)

This file is the map for the vault. Think of it as the floor plan posted at the entrance of a building. Before doing anything in this folder, read this file all the way through. The map tells you:

1. Where the rooms are (the folder structure)
2. What lives in each room (`raw/`, `wiki/`, etc.)
3. What workflow to follow for each task (ingest, query, lint)
4. What you must never do (the guardrails)

**Layout for this vault: `nested`.** Flat means `wiki/` is a single directory of markdown files. Nested means `wiki/entities/`, `wiki/concepts/`, `wiki/sources/`, `wiki/analyses/`.

## Routing table

For each task, read these files first. Skip the rest. This is the main tool for avoiding wasted context.

| Task                      | Read first                                               | Then                                |
|---------------------------|----------------------------------------------------------|-------------------------------------|
| Ingest a new source       | this file, `wiki/index.md`                               | the source in `raw/`                |
| Answer a query            | this file, `wiki/index.md`                               | the specific wiki pages you need    |
| Lint / self-heal          | this file, `wiki/index.md`, last 10 of `wiki/log.md`     | the audit procedures                |
| Add a cross-reference     | `wiki/index.md`                                          | the two pages being linked          |
| Check the timeline        | last entries of `wiki/log.md`                            | —                                   |
| Diagnose a contradiction  | both affected pages, their `sources:` frontmatter        | the original sources in `raw/`      |

When in doubt, read `wiki/index.md` before reading anything else. It is the routing table — short on purpose, read it every time.

## The three layers

1. **`raw/`** — immutable source documents (articles, PDFs, transcripts, notes). You read from this layer but **never modify it**. This is the source of truth. If you would change anything in `raw/`, stop and ask the human.
2. **`wiki/`** — LLM-owned markdown files. Summaries, entity pages, concept pages, analyses, audits. You create, update, and maintain everything here.
3. **This file + `AGENTS.md`** — the schema. Workflows, conventions, guardrails. Update only when the human asks.

## Naming conventions

Claude navigates this wiki by name. There is no database, no vector store — naming *is* the index. Stay strict about these rules and `"pull my karpathy source"` just works.

- **Wiki pages**: `kebab-case.md` matching the page title. Example: `wiki/concepts/mechanical-tension.md`, `wiki/entities/andrej-karpathy.md`.
- **Source files in `raw/`**: `YYYY-MM-DD-source-title.<ext>`. Example: `raw/2026-04-11-karpathy-llm-wiki.md`. The date prefix makes recent sources easy to find with `ls raw/ | sort -r | head`.
- **Audit files**: `wiki/analyses/audit-YYYY-MM-DD.md`.
- **Index categories**: use the exact headers in `wiki/index.md` — `Entities`, `Concepts`, `Sources`, `Analyses`, `Audits`. Don't invent new categories without updating this schema file.
- **Nested layout**: place pages in the correct subfolder (`entities/`, `concepts/`, `sources/`, `analyses/`). Use relative wikilinks: `[[../concepts/hormozi-offer-equation]]`.

A missing or inconsistent name is worse than a missing page — it breaks routing.

## Page format

Every wiki page starts with this frontmatter:

```yaml
---
title: <page title>
tags: [tag1, tag2]
sources:
  - raw/source-file.md
  - https://external-url (accessed YYYY-MM-DD)
related: [[other-page]], [[another-page]]
last_updated: YYYY-MM-DD
---
```

Rules:

- Use `[[wikilinks]]` for cross-references between pages. No markdown links for internal navigation.
- One concept or entity per page. If a page is answering three questions, split it.
- Page title and filename match (`Hormozi Offer Equation` → `wiki/concepts/hormozi-offer-equation.md`).
- `sources:` must not be empty. If you can't cite a source, do not write the page.

## `wiki/index.md` — the catalog

Content-oriented catalog. Organized by category (Entities, Concepts, Sources, Analyses, Audits). Each entry is one line:

```
- [[page-name]] — one-line summary
```

**Always read `wiki/index.md` first** on any query. It replaces the need for embedding-based RAG at small-to-moderate scale (up to hundreds of pages).

Update the index on every ingest. A page that exists in `wiki/` but not in `index.md` is invisible — it might as well not exist.

## `wiki/hot.md` — fast recent context

A 500-character rolling buffer for the most recent, high-frequency knowledge. Read this when you need the fastest possible context on what has been active lately. Overwrite its content on each update — it is not append-only.

## `wiki/log.md` — the timeline

Chronological, append-only. Every operation appends exactly one entry with this grep-friendly prefix:

```
## [YYYY-MM-DD] <op> | <title>
```

Operations: `ingest`, `query`, `lint`, `update`, `init`.

The entry body says what happened, which pages were touched, and any decisions or flags. Example:

```
## [2026-04-11] ingest | Karpathy LLM Wiki Gist

Read raw/2026-04-11-karpathy-llm-wiki.md. Created [[llm-wiki-pattern]],
[[andrej-karpathy]], [[second-brain]]. Updated [[rag]] to note contrast
with wiki approach. Added wikilink from [[obsidian]] to [[llm-wiki-pattern]].
```

Utility: `grep "^## \[" wiki/log.md | tail -5` returns the last 5 operations.

---

## Workflow: Ingest

When the human drops a source into `raw/` and asks to ingest it:

1. **Read the source completely.** If it's long, note the structure first, then read section by section.
2. **Report 3–5 key takeaways** and ask what to emphasize. Skip this if the human said "just ingest it."
3. **Read `wiki/index.md`** to find pages this source affects — every entity mentioned, every concept referenced.
4. **For each new entity or concept** without a page: create one, following the page format above.
5. **For each existing page the source affects**: update it with the new information. When the new source disagrees with existing content, **note the disagreement explicitly** — do not silently overwrite.
6. **Add bidirectional `[[wikilinks]]`** between new and updated pages.
7. **Update `wiki/index.md`** with any new pages.
8. **Append one entry to `wiki/log.md`.**
9. **Report** to the human: `Created: [...]. Updated: [...].`

A single substantive source typically touches 10–15 pages. That is normal. Do not cut corners to touch fewer.

## Workflow: Query

When the human asks a question about the wiki:

1. **Read `wiki/index.md` first.** Always.
2. **Identify relevant pages** from the index. Read them. Follow `[[wikilinks]]` as needed.
3. **Synthesize an answer.** Cite the specific wiki pages you drew from, with `[[wikilinks]]`.
4. **If the answer is novel** (a comparison, a synthesis, a connection not already captured), **offer to file it back into the wiki** as a new analysis page. Good answers compound — they should not disappear into chat history.
5. **If the wiki doesn't have the knowledge needed**, say so explicitly. Do not hallucinate. Suggest what source to add to fill the gap.

## Workflow: Lint

When the human asks to lint or health-check the wiki, scan for:

- **Contradictions** between pages
- **Stale claims** superseded by newer sources
- **Orphan pages** with no inbound `[[wikilinks]]`
- **Missing pages** — concepts referenced ≥ 2 times without their own page
- **Missing cross-references** — pages that should link to each other but don't
- **Data gaps** — concepts mentioned but lacking depth (research candidates)

Output a severity-ranked list. For each finding, propose a fix: update page, create page, research, add cross-reference, skip. Do not make changes without confirmation unless the human said "fix everything."

For autonomous auditing plus quality-gated web research to fill gaps, use the `wiki-self-heal` skill.

---

## Guardrails

- **Never modify `raw/`.** It is immutable. Read only.
- **Never delete wiki pages** without explicit human confirmation. Flag orphans, do not remove them.
- **Never add factual claims without sources.** Every claim traces back to `sources:` frontmatter or a cited URL.
- **Never fabricate citations.** If you can't find a source, say so and skip the claim.
- **Never silently resolve contradictions.** Note the disagreement in both affected pages and let the human decide.
- **Never bypass `wiki/index.md`.** It is not decorative — it is the routing table.

## Navigation quick reference

```bash
# Last 5 operations
grep "^## \[" wiki/log.md | tail -5

# All lint passes
grep "^## \[.*lint" wiki/log.md

# Page count
ls wiki/**/*.md | wc -l

# Find pages referencing a concept
grep -rl "\[\[concept-name\]\]" wiki/

# Recent sources (date-prefixed filenames)
ls raw/ | sort -r | head
```

---

## Ingest Cache (SHA256 deduplication)

Every source file in `raw/` is tracked by content hash in `.ingest-cache.json`.
Before ingesting any file, check the cache to avoid re-processing.

Cache file: `.ingest-cache.json` (gitignored, auto-created on first use)

### Cache format
```json
{
  "<sha256-of-content>": {
    "file": "2026-04-30-source-title.md",
    "url": "https://original-url-if-web-clip",
    "date": "2026-04-30"
  }
}
```

### Cache workflow (add to Ingest workflow — step 0)

**Step 0 — Cache check.** Before reading any source:
1. Compute SHA256 of the file content
2. Check `.ingest-cache.json` for that hash
3. If found → skip ingest, report `"Already ingested: {file}"` to the human
4. If not found → proceed with ingest normally
5. After ingest is complete → add the hash entry to `.ingest-cache.json`

```bash
# Compute SHA256 of a file (bash)
sha256sum raw/YYYY-MM-DD-source.md

# Check if hash exists in cache
python -c "import json,hashlib; h=hashlib.sha256(open('raw/FILE','rb').read()).hexdigest(); c=json.load(open('.ingest-cache.json')); print('CACHED' if h in c else 'NEW')"
```

**Cache is append-only.** Never remove entries — removing a hash means a file could be re-ingested.
To force re-ingest a source (e.g., it was updated), delete its hash entry manually and re-run ingest.

---

## Cross-Reference Quality — 4-Signal Relevance

When creating `[[wikilinks]]` between pages, prioritize connections using these 4 signals in order:

| Signal | Weight | How to apply |
|--------|--------|-------------|
| **Direct link** | ×3.0 | Page A explicitly names or cites Page B |
| **Source overlap** | ×4.0 | Both pages trace back to the same raw source(s) |
| **Co-mention** | ×1.5 | Both pages mention a third common entity/concept |
| **Type affinity** | ×1.0 | Same category (entity↔entity, concept↔concept) is weak signal only |

### Application rules

1. **Always link** when direct link OR source overlap signal is present (score ≥ 3.0)
2. **Consider linking** when co-mention applies (score 1.5) — only if the connection adds insight
3. **Do not link** on type affinity alone (score 1.0) — too noisy, creates meaningless connections
4. **Bidirectional** — if A links to B, B must link back to A

### Practical example (AKASHA context)
- `hormozi-offer-equation` ↔ `reca-framework`: both sourced from same Hormozi transcript → **Source overlap ×4.0** → always link
- `alex-hormozi` ↔ `russell-brunson`: both are entities, both mention "offer" → **Co-mention ×1.5** → link with context
- `hormozi-offer-equation` ↔ `ladeira-vtsd`: same category (concepts) → **Type affinity ×1.0 only** → do NOT link unless another signal also present

### During lint / self-heal
Flag as "missing cross-reference" any pair of pages where combined signal score ≥ 3.0 but no wikilink exists.
