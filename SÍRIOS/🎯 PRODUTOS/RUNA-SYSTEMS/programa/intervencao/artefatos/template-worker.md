---
date: 2026-04-21
tags: [runa-intervencao, artefato, template, worker, automacao, s06]
project: runa-systems-global
type: template
sessao: S06 — SQUAD$ III · Deploy
produto: [[runa-intervencao-sessao-06-squad-deploy]]
---

# Template — Worker

> **O que é:** Um worker é um processo que roda sem você estar na conversa. Define o trigger, a sequência de comandos por agente e o output esperado. Um worker bom roda do início ao fim sem intervenção.
> **Como usar:** Salve como `workers/[nome-worker].md` no diretório do squad. Execute manualmente na primeira vez para validar. Depois de validado, configure o trigger.

---

```markdown
# Worker — [Nome do Worker]

> **Frequência:** [Diário / Semanal / Por evento / Manual]
> **Tempo estimado de execução:** [5 min / 15 min / etc.]
> **Status:** [Rascunho / Validado / Ativo]

---

## Trigger

**Quando este worker deve rodar:**
[Descreva o evento ou horário que dispara o worker]

Ex:
- Todo domingo às 20h (revisão semanal)
- Ao receber novo cadastro de cliente
- Toda segunda-feira antes de começar o trabalho
- Manualmente, quando [situação específica]

---

## Input Necessário

O que o worker precisa para começar:

| Input | Fonte | Obrigatório? |
|-------|-------|-------------|
| [Ex: lista de projetos ativos] | [Ex: Google Sheets ID: XXX] | Sim |
| [Ex: data da semana] | [Ex: data automática] | Sim |
| [Ex: nome do cliente] | [Ex: fornecido manualmente] | Não |

---

## Sequência de Execução

Execute na ordem abaixo. Não pule etapas.

### Passo 1 — [Nome do passo]

```
@[agente] *[comando] [parâmetros]
```

**Input:** [O que esse passo recebe]
**Output:** [O que esse passo produz]
**Salvar em:** [Onde salvar se o output precisa persistir]

---

### Passo 2 — [Nome do passo]

```
@[agente] Recebendo de Passo 1:
[Output do passo anterior]
[Instrução para este passo]
```

**Input:** Output do Passo 1
**Output:** [O que esse passo produz]
**Salvar em:** [Onde salvar]

---

### Passo 3 — [Nome do passo]

[Continuar o padrão]

---

## Output Final

**O que fica disponível quando o worker termina:**

| Entregável | Formato | Onde fica |
|------------|---------|-----------|
| [Ex: Plano da semana] | [Ex: .md] | [Ex: /squad/planos/semana-YYYY-MM-DD.md] |
| [Ex: Relatório de status] | [Ex: Google Doc] | [Ex: Drive/Relatórios/] |

---

## Critério de Sucesso

O worker está completo quando:

- [ ] [Condição 1 — ex: Plano gerado com pelo menos 5 itens priorizados]
- [ ] [Condição 2 — ex: Output salvo sem erro]
- [ ] [Condição 3 — ex: Nenhuma intervenção manual necessária]

---

## Log de Execuções

| Data | Duração | Resultado | Intervenção necessária | Observação |
|------|---------|-----------|----------------------|-----------|
| | | | | |

---

## Histórico de Ajustes

| Data | Ajuste | Por quê |
|------|--------|---------|
| [YYYY-MM-DD] | Worker criado | S06 — primeiro deploy |
| | | |
```

---

## Exemplos Preenchidos

### Worker 1 — Brief Semanal de Conteúdo

```markdown
# Worker — Brief Semanal de Conteúdo

> **Frequência:** Toda segunda-feira · **Tempo:** ~10 min · **Status:** Validado

## Trigger
Toda segunda-feira antes de começar o dia de trabalho.

## Input Necessário
| Input | Fonte | Obrigatório? |
|-------|-------|-------------|
| Temas da semana | CLAUDE.md Camada 3 — Calendário Editorial | Sim |
| Últimas publicações | Pasta /posts/ | Não |

## Sequência

### Passo 1 — Briefing estratégico
@ceo-neural *plano
Output: lista de 3 temas prioritários da semana com contexto

### Passo 2 — Geração de brief de conteúdo
@copy-neural Recebendo de @ceo-neural:
[output do passo 1]
Gerar brief para 5 posts da semana — 1 por tema prioritário + 2 evergreen.
Formato: tema | ângulo | gancho | CTA | formato (carrossel/reel/legenda)

### Passo 3 — Salvar
Salvar output em /squad/briefs/brief-conteudo-[YYYY-MM-DD].md

## Critério de Sucesso
- [ ] 5 briefs gerados
- [ ] Pelo menos 1 carrossel, 1 reel, 3 legendas
- [ ] Salvo sem precisar de reescrita
```

### Worker 2 — Diagnóstico Semanal do Negócio

```markdown
# Worker — Diagnóstico Semanal

> **Frequência:** Todo domingo · **Tempo:** ~15 min · **Status:** Validado

## Trigger
Todo domingo às 18h (ou manualmente com *diagnostico semanal).

## Input Necessário
| Input | Fonte | Obrigatório? |
|-------|-------|-------------|
| Entradas do log da semana | CLAUDE.md do squad — Log de Operação | Sim |
| Resultados reais | Fornecido pelo operador ao iniciar | Sim |

## Sequência

### Passo 1 — Diagnóstico
@ceo-neural *diagnostico
Com base no log da semana: [cole as entradas do log] e nos resultados: [descreva brevemente]
Identificar: 1 vitória, 1 gargalo, 3 prioridades para a próxima semana.

### Passo 2 — Plano da semana
@ceo-neural *plano
Com base no diagnóstico acima, criar plano de ataque para os próximos 7 dias.

## Critério de Sucesso
- [ ] 1 vitória identificada
- [ ] 1 gargalo com sugestão de ação
- [ ] 3 prioridades rankeadas por impacto
- [ ] Plano salvo em /squad/planos/
```

---

## Quando um worker está pronto para modo automático

Um worker está pronto para rodar sem supervisão quando:
- Rodou pelo menos 3 vezes consecutivas sem intervenção
- O output foi usado diretamente sem revisão manual
- Nenhuma etapa da sequência precisou ser refeita

Marque o status como `Ativo` no frontmatter quando atingir esses critérios.

---

*Sessão de origem: [[runa-intervencao-sessao-06-squad-deploy|S06 — SQUAD$ III · Deploy]]*
*Relacionado: [[guia-hooks-squad|Guia de Hooks]] · [[checklist-deploy-squad|Checklist de Deploy]]*
