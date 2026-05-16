# RUNA OS Vault — Documentation Governance

## What it is

A dedicated Obsidian + Karpathy LLM Wiki vault for the RUNA OS platform project.
Path: `c:/runa-systems-global/RUNA OS/`

This vault is project-specific. It does NOT replace SÍRIOS (knowledge/memory) or AKASHA (business frameworks).
It exists exclusively to capture all documentation produced for or by the RUNA OS platform build.

---

## Agent Assignment

| Agent | Role |
|-------|------|
| **ORION** | Primary vault keeper — bootstrap, ingest, wiki-self-heal, graphify |
| Any agent | MAY write to `wiki/` when producing docs for this project |
| **FREYJA** | NOT responsible — SÍRIOS content narrative only |

---

## When to Write Here (vs. SÍRIOS)

| Document | RUNA OS vault | SÍRIOS |
|----------|--------------|--------|
| Architecture decisions for the platform | ✅ `wiki/concepts/` | ❌ |
| Mentee context snapshots (admin reference) | ✅ `wiki/entities/` | ❌ |
| Competitive audits used as platform input | ✅ copy to `raw/` | keep original in place |
| Product strategy docs (PRD, specs) | ✅ `wiki/` | ❌ |
| Agent general knowledge / skills | ❌ | ✅ SÍRIOS |
| @arthsystems_ content strategy | ❌ | ✅ SÍRIOS |
| RUNA methodology documents | ❌ | ✅ SÍRIOS |
| Build session logs for this project | ✅ `wiki/log.md` | ❌ |

**Rule:** If the document is specifically about building or operating the RUNA OS platform → it goes in this vault. If it's broader knowledge, methodology, or agent-level content → it goes in SÍRIOS.

---

## Vault Structure

```
RUNA OS/
├── .obsidian/
├── CLAUDE.md               ← routing map — read before any operation
├── AGENTS.md               ← minimal mirror for non-Claude agents
├── raw/                    ← immutable source docs
└── wiki/
    ├── index.md            ← catalog of all pages — update on every new page
    ├── log.md              ← append-only operation log
    ├── hot.md              ← 500-char rolling buffer (recent active knowledge)
    ├── entities/           ← mentees, people, services
    ├── concepts/           ← frameworks (Four Cs, V1→V2→V3, Template Master, 2-tier access)
    ├── sources/            ← source summaries
    └── analyses/           ← audits, competitive analyses, architectural decisions
```

---

## Mandatory Skills

| Skill | When | Who |
|-------|------|-----|
| `/llm-wiki-setup` | Once — bootstrap `CLAUDE.md` + `wiki/index.md` | ORION |
| `/wiki-self-heal` | After 3+ docs generated in one session | ORION |
| `/graphify RUNA OS/` | After major milestones (end of each build phase) | ORION / ALEX |

---

## Bootstrap Checklist (first session)

- [ ] Run `/llm-wiki-setup` with path `c:/runa-systems-global/RUNA OS`, layout: nested, hot cache: yes
- [ ] Copy reference docs to `raw/`: StartSe AI Journey audit, any relevant analyses
- [ ] Run `/graphify RUNA OS/` after first ingestion batch

---

## Rules

1. **index.md first** — any new wiki page must be added to `wiki/index.md` immediately
2. **raw/ is immutable** — drop files in, never edit them; wiki synthesizes from raw
3. **graphify post-milestone** — run `/graphify RUNA OS/` at end of each build phase (Phases 1→2→3→4)
4. **wiki-self-heal post-session** — run after any session with 3+ new docs
5. **English only** — all vault content in English; language-policy.md applies

---

## Anti-Patterns

❌ Writing RUNA OS platform docs into SÍRIOS — creates cross-vault pollution
❌ Skipping `wiki/index.md` update when creating a new page — breaks routing
❌ Editing files in `raw/` — immutability is the contract; create a new source file instead
❌ Running `/llm-wiki-setup` again after bootstrap — overwrites CLAUDE.md
❌ Using this vault for general RUNA methodology docs — those belong in SÍRIOS

---

## Related

- `llm-wiki-usage.md` — full LLM Wiki system rules
- `obsidian-memory.md` — SÍRIOS vault rules (separate, not this vault)
- `obsidian-document-governance.md` — SÍRIOS anti-duplication protocol
- Skills: `SÍRIOS/RUNA SYSTEMS/Skills/Skills LLM Wiki.md`, `Skills graphify.md`
