---
date: 2026-04-29
tags: [runa-intervencao, mentoria, sessao-06, lucas, pesto, cleiton, workflow, carrossel]
project: runa-systems-global
type: session-record
cliente: Lucas — Pesto (agência criativa)
status: realizada
duracao: 96min
---

# Runa Intervenção — Sessão 06: Pivot de Workflow — Claude Code + Cleiton

> **Data:** 2026-04-29 | **Duração:** 96 min
> **Sessão crítica — decisão arquitetural definitiva**

---

## Diagnóstico que motivou a sessão

Lucas testou o agente copywriter entre sessões. Qualidade textual inconsistente — "faltou o molho". Diagnóstico identificado:

1. Falta de padronização de output (sem template fixo)
2. Context window overflow causando drift nas regras
3. Confusão de responsabilidades: Claude Code tentando executar design E pensar estratégia ao mesmo tempo

---

## A Decisão Arquitetural

### Pivot: dual-Claude model

| Camada | Ferramenta | Papel | Exemplos |
|--------|-----------|-------|---------|
| **Neural (estratégica)** | Claude Code | Orquestra, pensa, gera briefs, produz imagens | Designer, Copywriter, Planner |
| **Operacional (execução)** | Claude Chat — projeto "Cleiton" | Executa design de carrossel, monta HTML | Carrossel HTML |

**Regra central:** Cleiton não pensa. Cleiton executa.

---

## O Que Foi Construído

### "Cleiton" — persona no Claude Chat
- Projeto criado no Claude Chat com nome "Cleiton"
- System Messenger configurado com documentação de marca
- **Cleiton = agente ferramenta** (não neural): recebe brief + imagens → monta carrossel HTML
- Sem deliberação, sem estratégia, sem contexto histórico de projeto

### Arquitetura do carrossel
```
Capa (slide 1)     → Mais importante. Foco máximo. Brand-consistent.
Slides 2+          → Podem variar de estilo. Cada card = template próprio.
Combinação         → N templates de capa × N templates de slide = variação infinita
```

### Workflow finalizado
```
Designer (Claude Code)
  → gera brief do carrossel
  → gera imagens via inference.sh (nano-banana)
  → salva tudo numa pasta

Cleiton (Claude Chat)
  → recebe brief + pasta de imagens
  → gera HTML do carrossel
  → entrega arquivo pronto

[Opcional] Canva/Figma → ajustes finais antes de publicar
```

### Conceito crítico ensinado
> "Cleiton não pensa. Claude Code pensa, Cleiton executa. É a mesma lógica do Squad — você decide, eles fazem."

- Claude Code = Sistema Nervoso Central (reflexivo, contextual, estratégico)
- Claude Chat/Cleiton = Braço Executor (puro executor, sem memória de projeto)

### Geração de imagens no Cleiton
- **Cleiton usa apenas código** para elementos gráficos: SVG, vetores, ícones CSS
- **Fotos e imagens reais** → geradas pelo Designer (Claude Code) via inference.sh
- Separação limpa: imagens reais = Claude Code; elementos gráficos = Cleiton

---

## Homework do Lucas (antes da Sessão 07)

1. **Bater prints** das referências de carrosséis que admira (Instagram, referências externas)
2. **Classificar** o que gosta / não gosta / "quero beber da arquitetura, não da identidade"
3. **Identificar** N formatos distintos de Capa (estimativa: 3-4 formatos)
4. **Identificar** N formatos distintos de Slides internos

> Esta etapa é o insumo para a Sessão 07 (extração com Skill)

---

## O Que Está Pendente

| Item | Próxima sessão |
|------|---------------|
| Extração de estilos das referências via `extract-content` skill | Sessão 07 |
| Documentação de formatos no System Messenger do Cleiton | Sessão 07 |
| Instalação da Skill de Carrossel no Designer (Claude Code) | Sessão 07 |
| Primeiro carrossel gerado pelo pipeline completo | Sessão 08 |

---

## Calendário a partir de agora

- **Terça + Quarta** (noite, mesmo horário)
- **Quinta 14:30** (primeiro quinta = 07/05/2026)

---

## Conexões

- **Sessão anterior:** [[runa-intervencao-sessao-05-lucas-pesto]]
- **Próxima:** [[runa-intervencao-sessao-07-lucas-pesto]]
