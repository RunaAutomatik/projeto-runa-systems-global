---
title: ORION — Orchestrator Hub
tags: [orquestrador, orion, sistema, hub]
created: 2026-03-16
updated: 2026-03-19
---

# 🧠 ORION — Orchestrator Hub

This is the cognitive center of `runa-systems-global`. ORION (aiox-master) reads this folder to restore context at the start of any session.

## Start Here

**→ [[memoria-sistema]]** — Full system state, agent map, current work, vault structure.

Read that file first. Everything is there.

## Vault Structure (SÍRIOS)

| Folder | Purpose |
|--------|---------|
| [[📋 Agentes/orion\|📋 Agentes/]] | Agent cards + capability-map |
| [[📐 Projetos/product-catalog\|📐 Projetos/]] | Product PRDs only — CREATOR$, MIND$, $QUAD, etc. |
| [[📐 Arquitetura/_index\|📐 Arquitetura/]] | Technical blueprints — pipelines, workers, squad architecture |
| [[💰 Ofertas/creator-dollar-offer\|💰 Ofertas/]] | Offer docs per product (Google Doc style) |
| [[📱 Instagram/📅 Campanhas/creator-dollar-campaign-W14\|📱 Instagram/📅 Campanhas/]] | Campaign and marketing action docs |
| [[📦 Entregáveis/deliverable-alpha-system-prompt\|📦 Entregáveis/]] | Deliverables sent via DM/comment automations |
| [[📚 Referências/runa-systems-business-context\|📚 Referências/]] | Business context, analyses, brand, tools inventory |
| [[🛠️ Skills/\|🛠️ Skills/]] | Installed skills documentation |
| [[🔗 Templates/README\|🔗 Templates/]] | Reusable document templates |
| [[📅 Diário/\|📅 Diário/]] | Session diary — cognitive memory |

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
