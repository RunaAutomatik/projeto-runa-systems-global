# Product Delivery Standard — $ Product Architecture

## Overview

All $ products in the Runa Systems teia follow a 4-layer delivery architecture.
This architecture ensures every product has a clear acquisition funnel, conversion documents,
and course support materials — all traceable back to a single source-of-truth PRD.

Reference implementation: RUNA SYSTEMS.

---

## The 4 Layers

```
LAYER 1 — PRD (Hub / MOC)
  ↓
LAYER 2 — Aperitivo (DM Deliverable — acquisition trigger)
  ↓
LAYER 3 — Offer Document (.docx — conversion)
  ↓
LAYER 4 — Skool Course Support Docs (delivery — the actual value)
```

---

## Layer 1 — PRD (Product Requirements Document)

**Path:** `SÍRIOS/📐 Projetos/{product-name}-prd.md`
**Format:** Obsidian Markdown with YAML frontmatter
**Role:** Central hub (MOC — Map of Content). Single source of truth for the entire product.

### Required sections in PRD:
- Product overview + tagline
- The Big Idea (what the product teaches)
- Core Promise
- ICP (who it's for + who it's NOT for)
- Transformation Arc (before/after table)
- Module Structure (complete with lessons, formats, deliverables)
- Pricing table
- Upsell logic
- Production Plan (Arthur's recording checklist)
- **Connections** — wikilinks to ALL artifacts generated for this product:
  - Aperitivo DM
  - Offer docs (one per ICP variant)
  - Skool course support doc index
  - Agents included in the product (if any)
  - Sales scripts

### Connections section pattern (copy for new products):
```markdown
## Connections

### Offer & Campaign
- **Offer doc (ICP 1):** [[{product}-offer-{icp1}]] — .docx · R$XX
- **Offer doc (ICP 2):** [[{product}-offer-{icp2}]] — .docx · R$XX
- **Sales script:** [[{product}-sales-script]]

### Aperitivo
- **Aperitivo DM (keyword {KEYWORD}):** [[aperitivo-{product}]] — free/R$XX — sent via Zernio

### Course Support Docs (Skool)
- **Index:** [[{product}-skool-index]] — full list
- **Mod 0:** [[{product}-skool-00]] — antes de começar
- **Mod N:** [[{product}-skool-0N]] — ...

### Agents (included in product)
- **{AGENT NAME}:** [[{agent-doc}]] — deploy: URL

### Chain
- **Requires:** [[{previous-product}-prd]]
- **Feeds into:** [[{next-product}-prd]]
- **Catalog:** [[product-catalog]]
```

---

## Layer 2 — Aperitivo (DM Deliverable)

**Path:** `SÍRIOS/📦 Entregáveis/aperitivo-{product-name}.md`
**Format:** Obsidian Markdown
**Role:** Free or low-cost deliverable sent automatically via Zernio when someone comments
a keyword on an Instagram post or story. It gives a taste of the product's value.

### Requirements:
- Triggered by a specific keyword (e.g., RUNA, SISTEMA, ARQUITETO)
- Delivers ONE powerful, immediately usable tool/prompt/template
- Brief intro explaining what the person has in their hands
- Clear how-to (3-4 steps, no fluff)
- Ends with a CTA pointing to the offer document
- Does NOT teach the full method — teases it enough to create desire

### Frontmatter:
```yaml
---
date: YYYY-MM-DD
tags: [deliverable, dm, aperitivo, {product-name}]
project: runa-systems-global
type: dm-deliverable
produto: [[{product-name}-prd]]
oferta: [[{product-name}-offer-{main-icp}]]
---
```

### Physical delivery:
- Zernio automation sends the .md content as formatted DM (or a Google Drive link to the .docx version)
- Alternatively: the prompt/tool is pasted directly in the DM, no file attachment needed

---

## Layer 3 — Offer Document

**Path:** `SÍRIOS/📦 Entregáveis/{product-name}-offer-{icp-name}.md` (source)
         `SÍRIOS/📦 Entregáveis/{product-name}-offer-{icp-name}.docx` (delivery)
**Format:** .docx generated via python-docx, with H1/H2/H3 native headings (NO ASCII dividers)
**Role:** The sales document that converts. Delivered when someone requests more info after the aperitivo.

### Requirements per ICP:
- Each distinct ICP gets its own offer document
- Common ICPs for $ products: freelancer/empreendedor solo, mentor/consultor/criador
- Structure:
  1. The pain (specific to this ICP, in their words)
  2. Why existing solutions fail
  3. The mechanism (why this works differently)
  4. What's inside (complete deliverables list)
  5. Price anchor + transformation statement
  6. CTA to purchase/enrollment link

### Generation:
Use `py -c "import docx; ..."` with python-docx to generate .docx.
Source .md and generated .docx must both exist and be cross-linked in the PRD.

---

## Layer 4 — Skool Course Support Documents

**Path:** `SÍRIOS/📦 Entregáveis/{product-name}-skool/`
**Format:** Obsidian Markdown, one file per lesson (where support doc adds value)
**Role:** Posted below the video in Skool. The content the student downloads, fills in, and keeps.

### Required files:
| File | Contents |
|------|---------|
| `_index.md` | Index of all docs with status (✅ pronto / 🔄 em produção) + Skool publication notes |
| `00-*.md` | Module 0 — tools list, prerequisites, how to use |
| `01-*.md` through `0N-*.md` | One file per key lesson (not every lesson needs a doc) |

### Per-lesson doc structure:
```markdown
---
date: YYYY-MM-DD
tags: [{product}, skool, {topic}, modulo-N]
project: runa-systems-global
type: course-support
produto: [[{product}-prd]]
modulo: "N.N — Lesson Title"
---

# Lesson Title

> Módulo N · Aula N.N

[1-2 sentence context that frames why this matters]

---

## [Section]

[Content: worksheet fields / guide / template / checklist / examples]

---

*Próxima aula: N.N+1 — ...*
*Documento: [[0N+1-next-doc]]*
```

### What goes in lesson docs:
- **Worksheets** — fill-in fields students complete with their own data
- **Templates** — structured documents with blank sections
- **Guides** — step-by-step instructions with examples from the product's live build case (RUNA SYSTEMS ecosystem)
- **Checklists** — before/after validation lists
- **Reference examples** — the exact outputs from the live build case

### What does NOT go in lesson docs:
- The video content itself (that's in the recording)
- Explanations that work only with the video narration
- Affiliate links or promotional content
- Content from other products

---

## Index File (`_index.md`) Template

```markdown
---
date: YYYY-MM-DD
tags: [{product}, skool, index, curso]
project: runa-systems-global
type: course-index
produto: [[{product}-prd]]
---

# {PRODUCT NAME} — Índice de Materiais de Apoio (Skool)

> Documentos de suporte ao curso publicados no Skool.
> Um documento por módulo/aula. Cole o link do doc abaixo de cada vídeo.

---

## Estrutura de publicação no Skool

...table with module / doc / status...

---

## Notas de publicação

- List which lessons DON'T need a support doc and why
- Any special delivery notes (Google Doc links, template access, etc.)

---

## PRD do produto

→ [[{product}-prd]]
```

---

## File Naming Conventions

| Asset | Naming Pattern |
|-------|---------------|
| PRD | `{product-name}-prd.md` |
| Aperitivo | `aperitivo-{product-name}.md` |
| Offer doc (source) | `{product-name}-offer-{icp}.md` |
| Offer doc (delivery) | `{product-name}-offer-{icp}.docx` |
| Sales script | `{product-name}-sales-script.md` |
| Skool index | `{product-name}-skool/_index.md` |
| Skool lesson doc | `{product-name}-skool/NN-{topic}.md` |

---

## Folder Structure

```
SÍRIOS/
├── 📐 Projetos/
│   ├── {product}-prd.md           ← Layer 1 (hub)
│   ├── {product}-sales-script.md  ← sales layer
│   └── {product}-complete.md      ← optional detailed spec
│
└── 📦 Entregáveis/
    ├── aperitivo-{product}.md          ← Layer 2
    ├── {product}-offer-{icp1}.md       ← Layer 3 (source)
    ├── {product}-offer-{icp1}.docx     ← Layer 3 (delivery)
    ├── {product}-offer-{icp2}.md       ← Layer 3 (source)
    ├── {product}-offer-{icp2}.docx     ← Layer 3 (delivery)
    └── {product}-skool/
        ├── _index.md               ← Layer 4 index
        ├── 00-ferramentas.md
        ├── 01-{topic}.md
        └── ...
```

---

## Products Currently Following This Standard

| Product | PRD | Aperitivo | Offer docs | Skool docs |
|---------|-----|-----------|-----------|-----------|
| RUNA SYSTEMS | ✅ | ✅ (keywords: RUNA, SISTEMA, ARQUITETO) | 🔄 in production | 🔄 in production |

---

## Notes for ARES / FREYJA

- **ARES** owns offer doc structure and pricing logic
- **FREYJA** owns aperitivo copywriting and the narrative arc of offer docs
- **ORION** creates and organizes all files in Obsidian
- Aperitivo keyword → Zernio trigger → managed by **HERMES**

---

## Reference

- RUNA SYSTEMS implementation: `SÍRIOS/📐 Projetos/plataforma-runa-prd.md`
