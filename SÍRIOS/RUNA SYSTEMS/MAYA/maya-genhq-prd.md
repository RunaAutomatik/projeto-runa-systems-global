---
date: 2026-05-26
tags: [prd, maya, genhq, producao-av, framework, runa-systems]
project: runa-systems-global
type: prd
status: approved
epic: "[[epic-01-maya-genhq]]"
---

# PRD — MAYA GenHQ Framework v3

> Sistema de produção criativa AI-native para o @arthsystems_ e futuros mentees.
> Framework de gerenciamento de referências, brain files, e feedback loops de geração.

---

## The Big Idea

A MAYA produz assets visuais de alta qualidade mas sem um sistema de memória estruturada. Cada sessão começa do zero — sem memória de referências, prompts que funcionaram, ou regras de estilo consolidadas. O resultado é inconsistência e retrabalho.

O **GenHQ Framework** é o sistema operacional da MAYA: uma estrutura de pastas, arquivos de "cérebro", e loops de feedback que transformam cada sessão de geração em conhecimento acumulado e reutilizável.

---

## Problema Central

| Sintoma | Causa Raiz |
|---------|-----------|
| Geração inconsistente entre sessões | Sem memória de UUIDs ativos e regras de estilo |
| Prompts repetidos sem refinamento | Sem failure-log ou prompt-log estruturado |
| Arthur avalia assets sem contexto | Sem sistema de feedback loop (Google Sheets) |
| Referências misturadas | Sem taxonomia clara (humano / estilo / arte / marca / produto) |
| Wikilink quebrado no Skills Index | Arquivo Skills MAYA Framework GenHQ.md nunca criado no lugar certo |

---

## Solução — GenHQ Framework

### 1. Taxonomia de Referências (4 tipos + paletas)

Cada referência tem dois componentes:
- **UUID** — ID do arquivo na media library do Higgsfield (Higgsfield-specific)
- **Inverse Prompt** — descrição textual que encoda o que a referência visual representa (model-agnostic)

| Tipo | Pasta | Conteúdo | UUID? |
|------|-------|---------|-------|
| **Human** | `references/human/` | Character Sheets — fundo neutro, multi-ângulo | Sim |
| **Style** | `references/style/` | Referências estéticas — iluminação, mood, ambiente | Sim |
| **Art** | `references/art/` | Obras finalizadas que encodam regras de design | Sim |
| **Brand** | `references/brand/` | Logos, texturas, marks da marca | Sim |
| **Product** | `references/product/` | Produto físico em fundo neutro, 360° | Sim |
| **Paletas** | `color-palette.md` | Hex codes, nomes, contextos de uso | Não (texto) |

### 2. Estrutura de Pasta por Projeto

```
{projeto}/
├── references/
│   ├── human/          ← Character Sheets (pessoas para clonagem)
│   ├── style/          ← Referências estéticas (iluminação, mood)
│   ├── art/            ← Obras finalizadas (regras de design)
│   ├── brand/          ← Logos, texturas, efeitos de marca
│   └── product/        ← Produto em si (360°, variantes)
├── outputs/            ← arquivos gerados
├── reference-ids.md    ← MASTER: todos os UUIDs por tipo
├── model-descriptions.md  ← descritores físicos + notas de figurino
├── color-palette.md    ← hex codes, nomes, contextos de uso
├── prompt-log.md       ← todo prompt executado (append)
├── failure-log.md      ← gerações rejeitadas (evitar repetição)
├── style-bible.md      ← o que funciona/falha + template atual
├── environment-descriptors.md  ← descrições de cada ambiente
└── handoff.md          ← contexto de sessão: UUIDs ativos, regras, jobs
```

### 3. Feedback Loop MAYA ↔ Arthur

```
Arthur cria brief → FREYJA *brief-maya
  → MAYA lê handoff.md + style-bible.md (contexto acumulado)
  → MAYA executa geração (batch ≤ 10 jobs)
  → MAYA escreve no Google Sheet (status: Pending)
  → Arthur avalia: Approved / Rejected + notas
  → MAYA lê sheet na próxima sessão (adapta)
  → MAYA atualiza failure-log.md (rejeitados)
  → MAYA atualiza style-bible.md (padrões emergentes)
```

### 4. Hierarquia de Modelos

| Prioridade | Modelo | Uso |
|-----------|--------|-----|
| 1 — PRIMÁRIO | GPT Image 2 (Higgsfield CLI) | Humanos, cenas, props, tipografia, tudo |
| 2 — BACKUP | nano-banana-2 (infsh) | Rascunhos conceituais rápidos — sem tipografia |
| 3 — VÍDEO | Seedance 2.0 (Higgsfield) | Reels Virais |
| 4 — AVATAR | HeyGen API | Reels Avatar + VSL (talking head) |

### 5. Escopo por Tipo de Conteúdo

| Tipo | Pipeline | FREYJA Review? |
|------|---------|---------------|
| Post | FREYJA brief → MAYA imagem → FREYJA copy | Sim |
| Carousel | FREYJA brief → MAYA imagens/slide → carousel-worker | Sim |
| Reel Viral | FREYJA brief → MAYA Seedance 2.0 → FREYJA review | Sim |
| Reel Avatar | Script → HeyGen → FREYJA review | Sim |
| VSL | Script → HeyGen (Arthur falando) + Remotion (composição) | Sim |

---

## Premissas Técnicas

- UUIDs são Higgsfield-specific — só funcionam em chamadas Higgsfield
- nano-banana-2 não tem media library — usa URL pública ou Inverse Prompt
- Soul ID = modelo treinado nas fotos de UMA pessoa (Arthur: `a4f9c61c-e105-4bb8-833d-c40158ef6224`)
- Character Sheet Rule: fotos em fundo neutro forçam o modelo a extrair SOMENTE identidade, não contexto de cena
- Batch Rule: máximo 10 jobs simultâneos → fallback 5+5 → fallback individual
- HeyGen usa sistema próprio (Avatar ID + Voice ID), separado dos UUIDs Higgsfield

---

## Success Criteria

| Critério | Como Verificar |
|---------|---------------|
| Skills MAYA Framework GenHQ.md criado no caminho correto | Abrir `RUNA SYSTEMS/Skills/Skills MAYA Framework GenHQ.md` — tem conteúdo completo |
| Wikilink em Skills Index.md resolve corretamente | Clicar no link em Skills Index.md → navega para o arquivo |
| arthur-content/_base/ criada com todos os brain files | 7 arquivos na pasta + 5 subpastas de referências |
| reference-ids.md pré-preenchido | 10 UUIDs do Arthur + Soul ID visíveis |
| Google Sheet criado | Spreadsheet ID registrado em handoff.md |
| Kanban criado | kanban-producao.md com 6 colunas |
| Orphan vazio deletado | `SÍRIOS/Skills MAYA Framework GenHQ.md` não existe mais |

---

## ICP

**Primário:** Arthur Runa (@arthsystems_) — toda a produção visual do canal  
**Secundário:** Mentees da RUNA SYSTEMS — cada mentee pode ter sua própria pasta `{nome}-content/_base/`

---

## Connections

### Epic & Stories
- **Epic:** [[epic-01-maya-genhq]] — 5 stories
- **Story 01:** [[story-01-1-skills-framework]] — Skills file + delete orphan
- **Story 02:** [[story-01-2-arthur-content-base]] — Pasta base + brain files
- **Story 03:** [[story-01-3-google-sheet]] — Google Sheet feedback loop
- **Story 04:** [[story-01-4-kanban]] — Kanban board Obsidian
- **Story 05:** [[story-01-5-skills-av-update]] — Atualizar Skills MAYA Produção AV

### Skills
- **Framework Guide:** [[Skills MAYA Framework GenHQ]] — criado pela Story 01
- **Produção AV:** [[Skills MAYA Produção AV]] — atualizado pela Story 05
- **Skills Index:** [[Skills Index]] — wikilink já existe, resolve após Story 01

### Base de Referências
- **Base do Arthur:** [[reference-ids]] — criado pela Story 02
- **Kanban:** [[kanban-producao]] — criado pela Story 04

---

*PRD owner: MAYA + FREYJA | Implementação: Orion | Data: 2026-05-26*
