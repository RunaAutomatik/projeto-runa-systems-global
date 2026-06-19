---
date: 2026-04-21
tags: [runa-intervencao, artefato, worksheet, delegacao, squad, s01, s04]
project: runa-systems-global
type: worksheet
sessao: S01 — Mapeamento Neural (preenchido / revisado em S04)
produto: [[runa-intervencao-sessao-01-mapeamento]]
---

# Worksheet 2 — Matriz de Delegação do Squad

> **Sessão:** S01 (rascunho) · S04 (finalizado com escopos e personas)
> **Tempo estimado:** 20–30 min
> **Objetivo:** Definir qual agente é responsável por cada categoria de tarefa — e onde está a linha de autoridade de cada um.

---

## Instruções de uso

1. **S01:** Preencha a coluna "Categoria" com D/C/B/A do Worksheet 1B. Deixe as colunas de agente em branco — serão preenchidas em S04.
2. **S04:** Atribua cada categoria de tarefa a um agente do squad. Defina o escopo exato.
3. **Regra:** Nenhuma tarefa pode aparecer em dois agentes diferentes. Overlap = problema de arquitetura.

---

## Matriz Principal

| Tarefa / Categoria | Agente Responsável | Autoridade | Mode | Escalona para |
|------------------|-------------------|-----------|------|--------------|
| | | Executa sozinho | Ask / Auto | |
| | | Executa sozinho | Ask / Auto | |
| | | Executa sozinho | Ask / Auto | |
| | | Executa sozinho | Ask / Auto | |
| | | Executa sozinho | Ask / Auto | |
| | | Executa sozinho | Ask / Auto | |
| | | Executa sozinho | Ask / Auto | |
| | | Executa sozinho | Ask / Auto | |
| | | Executa sozinho | Ask / Auto | |
| | | Executa sozinho | Ask / Auto | |

**Colunas:**
- **Tarefa / Categoria:** Nome da tarefa + letra da categoria (D/C/B/A)
- **Agente Responsável:** Qual agente do squad é o dono
- **Autoridade:** O que exatamente esse agente pode decidir e fazer nessa tarefa
- **Mode:** Ask (pede confirmação) ou Auto (executa direto)
- **Escalona para:** Quando escalona — para qual agente ou para o humano

---

## Mapa de Escopos por Agente

Use este mapa para garantir que cada agente tem domínio claro e sem sobreposição.

### Agente 1 — Orquestrador

**Nome do agente:** ________________________________
**Persona:** ________________________________

| Campo | Definição |
|-------|-----------|
| **Pode fazer** | |
| | |
| | |
| **Nunca faz** | |
| | |
| | |
| **Critério de escalona** | Quando delega para Especialista 1 |
| | Quando delega para Especialista 2 |
| | Quando sobe para humano |

---

### Agente 2 — Especialista #1

**Nome do agente:** ________________________________
**Domínio:** ________________________________

| Campo | Definição |
|-------|-----------|
| **Pode fazer** | |
| | |
| | |
| **Nunca faz** | |
| | |
| **Entrega para** | Quem recebe o resultado desse agente |
| **Recebe de** | Quem aciona esse agente |

---

### Agente 3 — Especialista #2

**Nome do agente:** ________________________________
**Domínio:** ________________________________

| Campo | Definição |
|-------|-----------|
| **Pode fazer** | |
| | |
| | |
| **Nunca faz** | |
| | |
| **Entrega para** | |
| **Recebe de** | |

---

### Agente 4 — Especialista #3 (se necessário)

**Nome do agente:** ________________________________
**Domínio:** ________________________________

| Campo | Definição |
|-------|-----------|
| **Pode fazer** | |
| | |
| **Nunca faz** | |
| | |
| **Entrega para** | |
| **Recebe de** | |

---

### Agente 5 — Suporte (se necessário)

**Nome do agente:** ________________________________
**Domínio:** ________________________________

| Campo | Definição |
|-------|-----------|
| **Pode fazer** | |
| | |
| **Nunca faz** | |
| | |
| **Serve quem** | Quais agentes esse agente suporta |

---

## Teste Anti-Overlap

Antes de criar os agentes no S04, teste cada par:

| Par de agentes | Existe tarefa que os dois poderiam reivindicar? | Resolução |
|---------------|------------------------------------------------|-----------|
| Orquestrador + Especialista 1 | Sim / Não | |
| Orquestrador + Especialista 2 | Sim / Não | |
| Especialista 1 + Especialista 2 | Sim / Não | |
| Especialista 1 + Especialista 3 | Sim / Não | |
| Especialista 2 + Especialista 3 | Sim / Não | |
| Qualquer Especialista + Suporte | Sim / Não | |

> **Regra:** Se "Sim" em qualquer linha, revise os escopos antes de criar os arquivos .yaml.

---

## Checklist de Completude

Antes de avançar para S05 (ativação):

- [ ] Todos os agentes têm nome e persona definidos
- [ ] Nenhuma tarefa está sem agente responsável
- [ ] Nenhum agente tem escopo vazio
- [ ] Teste anti-overlap concluído sem conflitos
- [ ] CLAUDE.md do squad escrito com a hierarquia (feito em S04)
- [ ] Cada agente tem .yaml criado e testado (feito em S04)

---

*Sessão de origem: [[runa-intervencao-sessao-01-mapeamento|S01 — Mapeamento Neural · EXPLORADOR]]*
*Próximo: S04 — SQUAD$ I · Arquitetura (criar os .yaml com base nesta matriz)*
*Doc: [[runa-intervencao-sessao-04-squad-arquitetura]]*
