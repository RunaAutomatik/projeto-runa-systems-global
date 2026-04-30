---
date: 2026-04-28
tags: [runa-systems, apps, modulo, dashboard, visualizacao]
project: runa-systems-global
type: module-index
---

# MODULO APPS

> Aplicações, dashboards e soluções visuais do ecossistema Arthur/RUNA.

---

## O Que Vive Aqui

| Categoria | Conteúdo |
|-----------|---------|
| **Command Center** | Dashboard de operações — `apps/command-center/` (V1+V2) |
| **LP RUNA** | Landing page do produto RUNA SYSTEMS — `apps/lp-runa/` |
| **Dashboards** | Visualizações de performance, funil, hook intelligence |
| **Workers** | carousel-worker, instagram-worker, content-worker — pipelines visuais |
| **Scripts** | `scripts/export-carousel.py`, `scripts/carousel-keywords.json` |

---

## Apps Ativos

| App | Localização | Status | Stack |
|-----|------------|--------|-------|
| **Command Center** | `apps/command-center/` | ✅ Ativo | React / Next.js |
| **LP RUNA** | `apps/lp-runa/` | 🔄 Em configuração | Next.js / Railway |

**Command Center:** `cd apps/command-center && npm run dev`

---

## Workers Visuais

| Worker | Porta | Função |
|--------|-------|--------|
| `instagram-worker` | :3000 | Publicação Meta Graph API |
| `content-worker` | :3001 | Puppeteer HTML→PNG export |
| `carousel-worker` | watcher | Detecta HTML → exporta slides 1080×1080 |

**Watcher:** `npm run watch:carousel` — detecta HTML, exporta slides PNG 1080×1080

---

## Referência SKOOL

O conteúdo de entrega ao cliente vive em:
→ `SÍRIOS/SKOOL/modulo-especializacao/track-c-automacao/`
→ `SÍRIOS/SKOOL/modulo-especializacao/track-c-automacao/artefatos/` (template-mapa-landing-page, template-mapa-expansao)
