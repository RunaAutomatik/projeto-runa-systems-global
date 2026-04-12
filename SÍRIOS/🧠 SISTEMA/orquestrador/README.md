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

## Vault Structure (SÍRIOS) — updated 2026-04-12

| Folder | Purpose |
|--------|---------|
| [[🎯 PRODUTOS/RUNA-SYSTEMS/_hub\|🎯 PRODUTOS/]] | Product hubs — each product owns its own folder |
| [[🤖 AGENTES/orion\|🤖 AGENTES/]] | Agent cards: FREYJA, ARES, HERMES, HELIOS, ORION |
| [[🧠 SISTEMA/product-catalog\|🧠 SISTEMA/]] | System docs: product catalog, season plans, architecture |
| [[📱 Instagram/@arthsystems_/_hub\|📱 Instagram/]] | Instagram strategy, posts, carousels, campaigns |
| [[📚 Referências/runa-systems-business-context\|📚 Referências/]] | Business context, analyses, brand, tools inventory |
| [[🛠️ Skills/Skills Index\|🛠️ Skills/]] | Installed skills documentation |
| [[⚙️ AUTOMACOES/hook-scraper-weekly/INDEX\|⚙️ AUTOMACOES/]] | Automations and workflows |
| [[📅 Diário/\|📅 Diário/]] | Session diary — cognitive memory |

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
FROM "📅 Diário"
SORT file.name DESC
LIMIT 5
```
