---
date: 2026-04-28
tags: [skool, index, runa-systems, entrega]
project: runa-systems-global
type: skool-index
---

# RUNA SYSTEMS — Índice SKOOL

> Camada de entrega ao cliente. Hiperpersonalizável. Sem dados pessoais do Arthur.
> Todos os artefatos colocalizados dentro do módulo correspondente.

---

## Sequência de Entrega

```
S01 → mapeamento → diagnóstico de trilha (A/B/C) → roadmap personalizado
S02–S03 → modulo-claude-code   (alicerce técnico)
S04–S06 → modulo-squad$        (squad de 8 agentes)
S07–S08 → modulo-mind$         (base de conhecimento)
S09–S21 → modulo-especializacao (trilha A, B ou C)
```

---

## Módulos

| Módulo | Sessões | Status | Artefatos |
|--------|---------|--------|-----------|
| [modulo-claude-code/](modulo-claude-code/_index.md) | S02–S03 | ✅ Conteúdo + artefatos | 3 artefatos |
| [modulo-squad$/](modulo-squad$/_index.md) | S01, S04–S06 | ✅ Conteúdo + artefatos | 21 artefatos |
| [modulo-mind$/](modulo-mind$/_index.md) | S07–S08 | ✅ Conteúdo + artefatos | 5 artefatos |
| [modulo-especializacao/](modulo-especializacao/_index.md) | S09–S21 | ✅ Conteúdo + artefatos | 11 artefatos |

---

## Pré-requisitos por Módulo

| Módulo | Requer |
|--------|--------|
| modulo-claude-code | Conta Claude (Pro ou Team) + terminal |
| modulo-squad$ | modulo-claude-code concluído |
| modulo-mind$ | modulo-squad$ concluído |
| modulo-especializacao | modulo-mind$ concluído + trilha diagnosticada na S01 |

---

## Artefatos por Módulo

### modulo-claude-code/artefatos/
- `cheat-sheet-ferramentas-core.md`
- `guia-permission-modes.md`
- `template-claude-md-base.md`

### modulo-squad$/artefatos/
Worksheets, checklists, templates de agente, CLAUDE.md squad, handoff, hooks, workers (21 arquivos)

### modulo-mind$/artefatos/
Estrutura vault, framework extração, protocolo atualização, 5 prompts consulta, template ingestão wiki (5 arquivos)

### modulo-especializacao/
- **track-a-creator/artefatos/** — checklist voz criador, template pipeline conteúdo (2 arquivos)
- **track-b-conversao/artefatos/** — 7 templates (manifesto, proposta, case, depoimento, serviços, FAQ, rei)
- **track-c-automacao/artefatos/** — 2 templates (mapa landing page, mapa expansão)

---

## Referência MENTORADOS

Para controle por aluno → `SÍRIOS/MENTORADOS/`
Template de onboarding → `SÍRIOS/MENTORADOS/_template-mentorado/`
