---
date: 2026-05-26
tags: [epic, maya, genhq, producao-av, framework]
project: runa-systems-global
type: epic
id: E-MAYA-01
status: Ready
prd: "[[maya-genhq-prd]]"
---

# Epic E-MAYA-01 — MAYA GenHQ Framework v3

> Implementar o sistema operacional completo da MAYA: taxonomia de referências,
> pasta _base do Arthur, feedback loops, e documentação Skills consolidada.

**Status:** Ready → Em execução
**Estimativa:** 5 stories | M total
**Assignee principal:** Orion (@aiox-master)

---

## Goal

Eliminar o zero-state da MAYA em cada sessão. Após este epic:
1. A MAYA tem memória estruturada (brain files) com contexto acumulado
2. Arthur tem visibilidade (Kanban + Google Sheet) de tudo em produção
3. O Skills file correto existe e o wikilink quebrado está resolvido
4. O sistema é extensível para novos mentees (mesma estrutura de pasta)

---

## Context

Este epic vem do plano revisado Framework MAYA GenHQ v3 (2026-05-26), que consolidou:
- Audit completo do estado atual (PARTE 1)
- Respostas às 15 observações do Arthur (PARTE 2)
- Design dos novos sistemas — taxonomia 4 tipos, templates, kanban (PARTE 3)
- Escopo expandido para todos os tipos de conteúdo (PARTE 4)
- Lista exata de implementação (PARTE 5)

---

## Stories

| # | Story | Estimativa | Assignee | Status |
|---|-------|-----------|---------|--------|
| 01-1 | [[story-01-1-skills-framework]] — Criar Skills MAYA Framework GenHQ.md | M | Orion | Ready |
| 01-2 | [[story-01-2-arthur-content-base]] — Criar arthur-content/_base/ com brain files | M | Orion | Ready |
| 01-3 | [[story-01-3-google-sheet]] — Criar Google Sheet MAYA Production Log | S | Orion | Ready |
| 01-4 | [[story-01-4-kanban]] — Criar Kanban Obsidian kanban-producao.md | S | Orion | Ready |
| 01-5 | [[story-01-5-skills-av-update]] — Verificar e atualizar Skills MAYA Produção AV.md | S | Orion | Ready |

---

## Dependency Order

```
01-1 (Skills file) → pré-requisito para 01-2 (referencia o guia)
01-2 (Base) → pré-requisito para 01-3 (Sheet ID vai para handoff.md)
01-3 (Sheet) → independente de 01-4
01-4 (Kanban) → independente
01-5 (AV update) → independente, pode rodar em paralelo com 01-1
```

**Execução recomendada:**
1. 01-1 + 01-5 em paralelo
2. 01-2 (após 01-1)
3. 01-3 + 01-4 em paralelo (após 01-2)

---

## Definition of Done

- [ ] `SÍRIOS/Skills MAYA Framework GenHQ.md` (orphan vazio) deletado
- [ ] `SÍRIOS/RUNA SYSTEMS/Skills/Skills MAYA Framework GenHQ.md` criado com conteúdo completo
- [ ] Wikilink em Skills Index.md resolve para o arquivo correto
- [ ] `SÍRIOS/RUNA SYSTEMS/arthur-content/_base/` existe com 7 brain files + 5 subpastas
- [ ] `reference-ids.md` pré-preenchido com 10 UUIDs + Soul ID do Arthur
- [ ] `handoff.md` pré-preenchido com dados permanentes do Arthur
- [ ] Google Sheet "MAYA Production Log — Arthur" criado com cabeçalhos A–H
- [ ] Spreadsheet ID registrado em `reference-ids.md` e `handoff.md`
- [ ] `kanban-producao.md` com 6 colunas e cards template
- [ ] `Skills MAYA Produção AV.md` tem referência à taxonomia de 4 tipos com link para guia
- [ ] Nenhum arquivo duplicado (anti-duplication protocol respeitado)

---

## Anti-patterns Deste Epic

❌ Criar conteúdo em `SÍRIOS/` raiz — tudo vai em `RUNA SYSTEMS/` subpastas
❌ Editar o arquivo orphan em vez de deletar — deletar e criar no lugar certo
❌ Usar KIE.AI para GPT Image 2 — endpoint quebrado; usar Higgsfield CLI
❌ Misturar tipos de referência nas pastas (foto editorial na pasta human/) — Character Sheets apenas em human/

---

*Epic owner: Orion | PRD: [[maya-genhq-prd]] | Criado: 2026-05-26*
