---
date: 2026-04-21
tags: [runa-intervencao, artefato, worksheet, mapeamento, tarefas, s01]
project: runa-systems-global
type: worksheet
sessao: S01 — Mapeamento Neural
produto: [[runa-intervencao-sessao-01-mapeamento]]
---

# Worksheet 1B — Tarefas vs Microtarefas: As 3 Perguntas Estratégicas

> **Sessão:** S01 — Mapeamento Neural
> **Tempo estimado:** 15–20 min
> **Objetivo:** Para cada tarefa mapeada no Worksheet 1A, aplicar as 3 perguntas que revelam se ela é delegável a um agente, exige colaboração humano+IA, ou deve permanecer humana.

---

## As 3 Perguntas

Para cada tarefa L2 do Worksheet 1A, responda:

### Pergunta 1 — Repetibilidade
> "Se eu fizer essa tarefa 10 vezes seguidas, o processo é exatamente igual cada vez?"
- **Sim** → candidata forte para agente
- **Às vezes** → pode virar agente com boas instruções
- **Não** → requer humano ou colaboração

### Pergunta 2 — Dependência de Julgamento
> "Para executar essa tarefa, preciso de contexto que nenhum sistema escrito teria acesso?"
- **Não** → candidata forte para agente
- **Em parte** → híbrido: agente executa, humano revisa
- **Sim** → permanece humana

### Pergunta 3 — Consequência do Erro
> "Se o agente errar nessa tarefa, qual é o impacto?"
- **Baixo** → agente pode executar autonomamente (mode Auto)
- **Médio** → agente executa, humano aprova (mode Ask)
- **Alto** → humano executa, agente apoia com dados

---

## Matriz de Avaliação

Use a tabela abaixo para suas 10 tarefas principais. Complete uma linha por tarefa.

| Tarefa (L2) | P1: Repetível? | P2: Julgamento? | P3: Risco do erro? | Categoria |
|------------|---------------|----------------|-------------------|-----------|
| | Sim / Às vezes / Não | Não / Em parte / Sim | Baixo / Médio / Alto | Ver abaixo |
| | Sim / Às vezes / Não | Não / Em parte / Sim | Baixo / Médio / Alto | |
| | Sim / Às vezes / Não | Não / Em parte / Sim | Baixo / Médio / Alto | |
| | Sim / Às vezes / Não | Não / Em parte / Sim | Baixo / Médio / Alto | |
| | Sim / Às vezes / Não | Não / Em parte / Sim | Baixo / Médio / Alto | |
| | Sim / Às vezes / Não | Não / Em parte / Sim | Baixo / Médio / Alto | |
| | Sim / Às vezes / Não | Não / Em parte / Sim | Baixo / Médio / Alto | |
| | Sim / Às vezes / Não | Não / Em parte / Sim | Baixo / Médio / Alto | |
| | Sim / Às vezes / Não | Não / Em parte / Sim | Baixo / Médio / Alto | |
| | Sim / Às vezes / Não | Não / Em parte / Sim | Baixo / Médio / Alto | |

---

## As 4 Categorias de Execução

### Categoria D — Agente Completo
> Sim + Não + Baixo/Médio → delegação total

O agente executa do início ao fim. Sem supervisão ativa do humano. Resultado enviado ou arquivado automaticamente.

**Exemplos típicos:** Formatar relatório, gerar resumo de documento, criar rascunho de e-mail padrão, categorizar itens por critério pré-definido.

**Mode sugerido:** Auto (após validação inicial em Ask)

```
Minhas tarefas Categoria D:
1.
2.
3.
```

### Categoria C — Híbrido (Humano + IA)
> Às vezes + Em parte + Médio → colaboração

O agente executa a parte mecânica. O humano revisa, ajusta e aprova antes de usar o resultado.

**Exemplos típicos:** Proposta comercial (agente estrutura, humano personaliza), análise de oportunidade (agente coleta dados, humano decide), resposta a cliente importante (agente rascunha, humano envia).

**Mode sugerido:** Ask — agente pede aprovação antes de cada ação crítica

```
Minhas tarefas Categoria C:
1.
2.
3.
```

### Categoria B — Worker / Script
> Tarefas puramente mecânicas sem necessidade de linguagem natural

Execução automatizada via script ou n8n, sem necessidade de agente de linguagem. O agente pode acionar, mas não precisa raciocinar sobre o resultado.

**Exemplos típicos:** Mover arquivo para pasta, enviar notificação, fazer backup, executar consulta no banco de dados.

**Mode sugerido:** Automação direta (worker, n8n, cron)

```
Minhas tarefas Categoria B:
1.
2.
3.
```

### Categoria A — Humano Insubstituível
> Não + Sim + Alto → permanece humana

Requer julgamento baseado em relacionamento, ética, intuição ou contexto irreproduzível em instrução.

**Exemplos típicos:** Reunião estratégica com cliente, decisão de sócio, conversa difícil com colaborador, negociação de parceria importante.

**Regra:** O agente pode PREPARAR o humano para essa tarefa. Nunca substituí-lo.

```
Minhas tarefas Categoria A:
1.
2.
3.
```

---

## Plano de Ataque — Prioridades para o Programa

Com base na categorização acima, defina:

### Quick wins (Categoria D — automatizar primeiro)

```
1.
2.
3.
```

### Colaborações de alto impacto (Categoria C — construir com cuidado)

```
1.
2.
3.
```

### Setor de especialização (para S09–S17)

> _Qual das áreas mapeadas representa maior oportunidade estratégica para especialização neural?_

```
Setor escolhido:

Justificativa:

Resultado esperado após a especialização:
```

---

*Sessão de origem: [[runa-intervencao-sessao-01-mapeamento|S01 — Mapeamento Neural · EXPLORADOR]]*
*Próximo: Worksheet 2 — Matriz de Delegação*
*Doc: [[worksheet-2-matriz-delegacao]]*
