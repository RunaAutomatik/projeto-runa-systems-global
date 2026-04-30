---
date: 2026-04-12
title: ORION — Orchestrator Hub
tags: [orquestrador, orion, sistema, hub]
project: runa-systems-global
type: system-hub
---

# 🧠 ORION — Orchestrator Hub

This is the cognitive center of `runa-systems-global`. ORION (aiox-master) reads this folder to restore context at the start of any session.

## Start Here

**→ [[memoria-sistema]]** — Full system state, agent map, current work, vault structure.
**→ [[🏠 _hub|SÍRIOS Master Hub]]** — Central vault index (all products, systems, operations).

## Vault Structure (SÍRIOS) — TRINDADE — updated 2026-04-29

| Folder | Purpose |
|--------|---------|
| [[RUNA SYSTEMS/_INDEX\|RUNA SYSTEMS/]] | Arthur's operational ecosystem — modules, skills, sistema, diário |
| [[RUNA SYSTEMS/_INDEX\|SKOOL/]] | Student-facing educational content |
| [[RUNA SYSTEMS/_INDEX\|MENTORADOS/]] | Client hyper-personalization tracks |
| [[freyja\|_deprecated/agentes-pre-aiox/]] | Pre-AIOX agent definitions (archived — rebuild via AIOX) |

### RUNA SYSTEMS Internal

| Folder | Purpose |
|--------|---------|
| [[runa-systems-hub\|RUNA SYSTEMS/]] | Hub canônico — programa e módulos |
| [[product-catalog\|sistema/]] | Product catalog, season plans, architecture |
| [[MENTORADOS/Lucas Pesto/_hub\|MODULO CREATOR/@arthsystems_/]] | Instagram strategy, posts, carousels, campaigns |
| [[runa-systems-business-context\|RUNA SYSTEMS/]] | Business context, brand, tools inventory |
| [[Skills Index\|Skills/]] | Installed skills documentation |
| [[INDEX\|MODULO FLOW/hook-scraper-weekly/]] | Automations and workflows |
| [[2026-04-29\|Diário/]] | Session diary — cognitive memory |

## Product Hub Navigation

Each product has its own folder with standardized subfolders:
```
🎯 PRODUTOS/{PRODUCT}/
  _hub.md         ← entry point for that product
  criativos/      ← pin files and carousel assets
  oferta/         ← offer documents
  aperitivo/      ← DM deliverables
  programa/skool/ ← course support docs
```

## Knowledge Vault (AKASHA — bases/)

Agent knowledge bases live in a separate vault: `C:/runa-systems-global/bases/`

| Base | Agent |
|------|-------|
| Alex Hormozi frameworks | ARES |
| Vendas Alto Ticket (RECA/RALOCA) | ARES + HERMES |
| freyja-content-strategy | FREYJA |

## Session Ritual

```bash
npm run dia:abrir    # start of session — reads previous diary
npm run dia:fechar   # end of session — creates diary entry
```

## Recent Diary

```dataview
LIST
FROM "RUNA SYSTEMS/Diário"
SORT file.name DESC
LIMIT 5
```
