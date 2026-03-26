---
date: 2026-03-24
tags: [n8n, workflows, index, hermes]
project: runa-systems-global
---

# Workflows N8N — Directory

> Every n8n workflow built for Runa Systems has its own folder here.
> Each folder contains: **INDEX** (hub) + **PRD** + **ARCHITECTURE** + **workflow.json** (exported from n8n).

---

## Active Workflows

| Workflow | Status | Agent | Description |
|----------|--------|-------|-------------|
| [[hook-scraper-weekly/INDEX\|Hook Scraper Weekly]] | Planning | HERMES | Weekly Instagram + YouTube hook intelligence scraper |

---

## Standard Structure (per workflow)

```
workflow-name/
├── INDEX.md        ← Hub (MOC) — links all artifacts
├── PRD.md          ← Product requirements
├── ARCHITECTURE.md ← Node map, technical design
└── workflow.json   ← Exported n8n JSON (importable)
```

## Naming Convention

- Folder: `kebab-case` descriptive name
- Status values: `Planning` | `Building` | `Live` | `Paused` | `Deprecated`

## Agent Ownership

All workflows built and maintained by **HERMES**.
Architecture defined in collaboration with **Atlas** (@analyst).
