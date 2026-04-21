---
date: 2026-04-21
tags: [runa-intervencao, artefato, template, claude-md, squad, s04]
project: runa-systems-global
type: template
sessao: S04 — SQUAD$ I Arquitetura
produto: [[runa-intervencao-sessao-04-squad-arquitetura]]
---

# Template — CLAUDE.md do Squad

> **O que é:** O CLAUDE.md do squad governa o time inteiro — hierarquia, regras universais, matriz de delegação. Todos os agentes o lêem. Completa (não substitui) o CLAUDE.md do negócio.
>
> **Como usar:** Salve como `CLAUDE.md` no diretório raiz do squad. Se já existe um CLAUDE.md base (de S03), adicione as seções do squad ao final do arquivo existente.

---

```markdown
# [Nome do Negócio] — CLAUDE.md do Squad

> Seção adicionada em S04. Governa o squad neural completo.
> Lido por todos os agentes do time. Hierarquia aqui é lei.

---

## SQUAD — Hierarquia e Composição

### Orquestrador (1)
- **@[nome-orquestrador]** — [Título] | [Uma linha de escopo]

### Especialistas ([N])
- **@[nome-especialista-1]** — [Título] | [Uma linha de escopo]
- **@[nome-especialista-2]** — [Título] | [Uma linha de escopo]
- **@[nome-especialista-3]** — [Título] | [Uma linha de escopo]

### Suporte ([N] — se houver)
- **@[nome-suporte]** — [Título] | [Uma linha de escopo]

---

## SQUAD — Matriz de Delegação

> Qual tarefa vai para qual agente. Esta matriz é a resposta para "com quem isso fica?"

| Categoria de tarefa | Agente responsável | Escalona para |
|--------------------|--------------------|--------------|
| Estratégia e priorização | @[orquestrador] | Operador humano |
| [Domínio do Especialista 1] | @[especialista-1] | @[orquestrador] |
| [Domínio do Especialista 2] | @[especialista-2] | @[orquestrador] |
| [Domínio do Especialista 3] | @[especialista-3] | @[orquestrador] |
| [Tarefa de apoio] | @[suporte] | @[especialista-que-pediu] |
| Decisão com impacto externo | Operador humano | — |

---

## SQUAD — Regras Universais

> Valem para todos os agentes, sem exceção.

### Hierarquia de autoridade
1. Operador humano ([nome]) — autoridade final
2. @[orquestrador] — autoridade de coordenação
3. Especialistas — autoridade dentro do próprio domínio
4. Suporte — executa o que os especialistas solicitam

### Regras de handoff
- Antes de transferir para outro agente, entregue o resultado atual no formato esperado pelo receptor
- Nunca abandone uma tarefa no meio — complete ou escalone com contexto completo
- Ao escalonar, forneça: o que foi tentado + por que escalona + o que o receptor precisa saber

### Regras de output
- Todo output deve ter um destinatário claro (quem vai usar isso?)
- Output incompleto é output — entregue o parcial com marcação explícita do que falta
- Nunca invente informação ausente — sinalize a ausência e peça o dado

### Regras de conflito entre agentes
- Se dois agentes tiverem escopos sobrepostos em uma tarefa → @[orquestrador] decide
- Se não houver orquestrador disponível → operador decide
- Em caso de ambiguidade de interpretação → pergunte antes de executar

### Regras de segurança
- Nenhum agente envia comunicações externas (e-mail, DM, post) sem aprovação do operador
- Nenhum agente apaga arquivos sem confirmação explícita
- Nenhum agente compartilha informação de clientes com outros sistemas sem autorização

---

## SQUAD — Protocolo de Ativação

### Como acionar um agente
```
@[nome-agente] *[comando] [parâmetros]
```

### Como verificar qual agente usar
```
@[orquestrador] Qual agente devo acionar para [tipo de tarefa]?
```

### Como fazer handoff entre agentes
```
@[agente-receptor] Recebendo de @[agente-origem]:
Contexto: [o que aconteceu]
Tarefa: [o que precisa ser feito]
Critério de sucesso: [como saber se está pronto]
```

---

## SQUAD — Log de Operação

> Atualize esta seção ao final de cada sessão de trabalho com o squad.

| Data | Agente | Tarefa | Resultado | Observação |
|------|-------|-------|-----------|-----------|
| [YYYY-MM-DD] | @[agente] | [tarefa] | [concluído / parcial / escalado] | |
| | | | | |

---

## SQUAD — Evolução

> Registro de mudanças na arquitetura do squad.

| Data | Mudança | Por quê |
|------|---------|---------|
| [YYYY-MM-DD] | Squad criado com [N] agentes | S04 — primeiro deploy |
| | | |
```

---

## Notas de implementação

**Adicionando ao CLAUDE.md existente (de S03):**
- Não substitua o CLAUDE.md base — adicione a seção do squad ao final
- Ordem recomendada: Camadas 1–5 (S03) → Seção SQUAD (S04)
- O CLAUDE.md cresce ao longo do programa — é um documento vivo

**Matriz de delegação:**
- Deve cobrir todas as categorias de tarefa mapeadas no Worksheet 1B
- Se uma categoria não aparecer na matriz → gap de arquitetura → crie um agente ou atribua a um existente
- Revise a matriz após cada semana de uso real — ajuste os escopos com base no que aconteceu

**Log de operação:**
- Preencha ao final de cada sessão
- Não precisa ser exaustivo — capture o que foi diferente ou inesperado
- Esse log alimenta a evolução dos agentes (Memory.md por agente — S08)

---

*Sessão de origem: [[runa-intervencao-sessao-04-squad-arquitetura|S04 — SQUAD$ I · Arquitetura]]*
*Relacionado: [[template-claude-md-base|CLAUDE.md Base]] · [[checklist-squad-design|Checklist de Squad Design]]*
