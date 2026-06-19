---
date: 2026-04-21
tags: [runa-intervencao, artefato, checklist, calibracao, squad, s05]
project: runa-systems-global
type: checklist
sessao: S05 — SQUAD$ II · Agentes
produto: [[runa-intervencao-sessao-05-squad-agentes]]
---

# Checklist — Calibração do Squad

> **Quando usar:** Após ativar cada agente em tarefa real pela primeira vez (S05).
> **Regra:** Use para diagnosticar o tipo de problema antes de sair editando o .yaml. Cada tipo de problema tem uma correção específica — a correção errada não resolve e ainda obscurece o diagnóstico.

---

## Como usar este checklist

Para cada agente, execute 2 tarefas reais. Após cada execução, marque o que observou. Ao final, consulte a seção de correções.

---

## FASE 1 — Ativação por Agente

### Orquestrador

**Tarefa de ativação padrão:**
```
@[nome-orquestrador] *diagnostico
```

- [ ] O orquestrador fez diagnóstico sem executar nenhuma tarefa operacional
- [ ] O orquestrador delegou pelo menos 1 item para um especialista
- [ ] O orquestrador usou critério explícito para priorizar (não apenas listou)
- [ ] O orquestrador NÃO escreveu copy, NÃO criou proposta, NÃO executou tarefas dos especialistas

**Se marcou ✗ em algum item:**
→ Vá para Seção de Correções — Tipo 1 (Problema de Escopo)

---

### Especialista 1

**Tarefas de ativação:**
1. Acionar com comando principal
2. Acionar com uma tarefa descrita em linguagem natural (sem comando)

- [ ] O especialista ficou dentro do seu domínio em ambas as tarefas
- [ ] O especialista recusou OU redirecionou quando a tarefa era de outro agente
- [ ] O output foi no formato especificado em `tone.output_format`
- [ ] O especialista não tomou decisão estratégica sem escalonar

**Se marcou ✗ em algum item:**
→ Identifique qual problema abaixo:

| Sintoma | Tipo |
|---------|------|
| Fez tarefa de outro agente | Tipo 1 — Escopo |
| Output no formato errado | Tipo 2 — Contexto / Formato |
| Tomou decisão estratégica | Tipo 1 — Escopo |
| Pediu informação básica do negócio | Tipo 3 — Contexto |

---

### Especialista 2

- [ ] Ativação com comando principal funcionou
- [ ] Ativação com tarefa em linguagem natural funcionou
- [ ] Não invadiu escopo do Especialista 1
- [ ] Não invadiu escopo do Orquestrador
- [ ] Output entregue no formato correto

---

### Especialista 3 (se houver)

- [ ] Ativação funcionou
- [ ] Escopo respeitado em ambas as tarefas
- [ ] Formato de output correto

---

### Suporte (se houver)

- [ ] O suporte entregou para o especialista correto (não para o operador)
- [ ] O suporte não tomou decisão que é do especialista
- [ ] O output do suporte foi usável pelo especialista sem reformatação

---

## FASE 2 — Primeiro Handoff

- [ ] O emissor entregou contexto suficiente (receptor não precisou perguntar mais de 1 vez)
- [ ] O receptor começou imediatamente com o que recebeu
- [ ] O resultado final era o esperado pelo operador
- [ ] O handoff foi documentado no Log de Operação

**Se o receptor fez mais de 1 pergunta:**
→ Identifique o que faltou no handoff:

| O que o receptor perguntou | O que estava faltando |
|---------------------------|----------------------|
| "Qual é o contexto?" | Campo Contexto ausente ou vago |
| "O que exatamente você precisa?" | Campo Tarefa vago |
| "Como eu sei quando está pronto?" | Critério de sucesso ausente |
| "Quem é o cliente/ICP?" | Contexto do negócio ausente no CLAUDE.md |

---

## FASE 3 — Diagnóstico Final

### Tipos de Problema e Correções

**Tipo 1 — Problema de Escopo**

Sintoma: Agente faz o que não devia OU recusa o que devia fazer.

Correção:
```yaml
# No .yaml do agente com problema:
scope:
  cannot:
    - [Tarefa específica que ele não deve fazer] → vai para @[agente-correto]
```

Não edite `scope.can` para resolver comportamento errado. Adicione ao `scope.cannot` com indicação explícita para quem vai.

---

**Tipo 2 — Problema de Formato**

Sintoma: Agente entrega resultado correto mas no formato errado (lista quando deveria ser tabela, longo quando deveria ser curto, etc.)

Correção:
```yaml
# No .yaml do agente:
tone:
  output_format: |
    [Descreva o formato com um exemplo concreto — não apenas palavras]
    Ex: "Sempre em markdown. Máximo 3 parágrafos. Conclusão na primeira linha."
```

---

**Tipo 3 — Problema de Contexto**

Sintoma: Agente pede informações básicas do negócio que ele deveria saber (quem é o ICP, qual é o produto, qual é o tom).

Correção: Adicionar ao CLAUDE.md, Camada 3 — Contexto do Negócio:
```markdown
## Contexto do Negócio

### ICP Principal
[Descrição do cliente ideal]

### Produto / Serviço Principal
[O que o negócio vende + como funciona]

### Tom e Valores
[Como o negócio se comunica]
```

---

**Tipo 4 — Problema de Escalação**

Sintoma: Agente toma decisão que deveria escalonar para o operador.

Correção:
```yaml
# No .yaml do agente:
handoff:
  escalate_to_orchestrator: |
    Escalone quando:
    - [Situação específica que aconteceu] ← adicione aqui o caso real
    - [Outras situações já mapeadas]
```

---

## FASE 4 — Gate para S06

Só avance para S06 com todos os itens abaixo:

- [ ] Cada agente executou pelo menos 2 tarefas reais (não testes)
- [ ] Pelo menos 3 ajustes nos .yaml realizados com base no comportamento real
- [ ] 1 handoff completo documentado no Log de Operação
- [ ] Log de Operação com mínimo de 3 entradas
- [ ] Todos os agentes ainda em modo Ask (Auto entra em S06 após validação)

---

## Registro de Ajustes (preencha durante S05)

| Data | Agente | Problema observado | Tipo | Correção aplicada |
|------|--------|-------------------|------|------------------|
| | | | | |
| | | | | |
| | | | | |

---

*Sessão de origem: [[runa-intervencao-sessao-05-squad-agentes|S05 — SQUAD$ II · Agentes]]*
*Relacionado: [[protocolo-handoff-agentes|Protocolo de Handoff]] · [[template-claude-md-squad|CLAUDE.md do Squad]]*
