---
date: 2026-04-21
tags: [runa-intervencao, artefato, handoff, squad, protocolo, s05]
project: runa-systems-global
type: protocol
sessao: S05 — SQUAD$ II · Agentes
produto: [[runa-intervencao-sessao-05-squad-agentes]]
---

# Protocolo — Handoff entre Agentes

> **Quando usar:** Sempre que uma tarefa começa em um agente e precisa ser continuada por outro.
> **Regra de ouro:** O receptor deve conseguir começar imediatamente com o que recebeu — sem perguntar mais de 1 coisa.

---

## Formato Padrão de Handoff

```
@[agente-receptor] Recebendo de @[agente-origem]:
Contexto: [o que aconteceu que gerou essa tarefa]
Tarefa: [o que precisa ser entregue agora]
Critério de sucesso: [como saber se o resultado está pronto para uso]
```

---

## Handoff Completo vs Incompleto

### ✅ Handoff completo
O receptor tem tudo que precisa para começar:
- Sabe POR QUE a tarefa existe (contexto)
- Sabe O QUE precisa entregar (tarefa)
- Sabe QUANDO está pronto (critério)

### ✗ Handoff incompleto
O receptor faz mais de 1 pergunta antes de começar:
- Contexto ausente → o receptor não sabe o que aconteceu antes
- Tarefa vaga → "me ajuda com isso" em vez de entregável específico
- Critério ausente → o receptor não sabe quando parar

**Diagnóstico rápido:**

> Se o receptor respondeu com uma pergunta antes de entregar: o handoff estava incompleto. Identifique qual das 3 partes faltou e adicione ao `.yaml` do agente emissor no campo `handoff.delivers_to`.

---

## Exemplos Preenchidos

### Exemplo 1 — CEO Neural → Copy Neural

```
@copy-neural Recebendo de @ceo-neural:
Contexto: O CEO Neural diagnosticou que nossa taxa de resposta nos DMs está abaixo de 10%.
O problema é o script atual — muito formal, parece automático.
Tarefa: Criar 3 variações de script de DM para qualificação de prospect.
ICP: Consultores independentes, R$5k–15k/mês faturamento, querem automatizar atendimento.
Objeção principal: "não tenho tempo para aprender mais ferramentas".
Critério de sucesso: 3 scripts de até 4 mensagens cada, tom conversacional, com pergunta de qualificação na 3ª mensagem.
```

### Exemplo 2 — CEO Neural → Operações Neural

```
@operacoes-neural Recebendo de @ceo-neural:
Contexto: Diagnóstico da semana identificou 3 gargalos no processo de onboarding de clientes.
O principal: o cliente espera 3 dias para receber o acesso ao portal.
Tarefa: Criar SOP (procedimento operacional) para onboarding com prazo máximo de 4h.
Critério de sucesso: SOP com no máximo 7 etapas, responsável definido por etapa, checklist de verificação ao final.
```

### Exemplo 3 — Orquestrador → Especialista (com informação incompleta)

```
@copy-neural Recebendo de @ceo-neural:
Contexto: Precisamos de copy para o lançamento de segunda-feira.
Tarefa: Criar copy da landing page.
Critério de sucesso: Landing page com copy convincente.

→ HANDOFF INCOMPLETO. O receptor vai perguntar: qual produto? qual ICP? qual oferta?
→ CORREÇÃO: adicionar ao handoff dados do produto, ICP e oferta antes de enviar.
```

---

## Quando NÃO fazer handoff

Não use handoff quando:
- A tarefa toda está dentro do escopo de um único agente
- O resultado do primeiro agente é o produto final (vai direto para o operador)
- A tarefa é simples demais para dividir — overhead do handoff supera o benefício

**Regra prática:**

> Handoff vale a pena quando o receptor precisa de uma especialização que o emissor não tem. Se o emissor pode continuar e entregar, deixa ele continuar.

---

## Handoff com Escalação para Humano

Quando o orquestrador não consegue completar a delegação porque precisa de uma decisão humana:

```
[Operador], preciso de sua decisão antes de continuar:
Situação: [o que está acontecendo]
Opção A: [primeira alternativa] → consequência
Opção B: [segunda alternativa] → consequência
Preciso de: [decisão específica que você precisa tomar]
```

Este não é um handoff entre agentes — é uma escalação. Use quando:
- A decisão envolve mudança de direção estratégica
- Duas opções igualmente válidas dependem de preferência pessoal
- Qualquer ação que afeta terceiros de forma irreversível

---

## Registro de Handoffs no Log de Operação

Quando um handoff funcionar bem, registre como padrão no CLAUDE.md do squad:

```markdown
| Data | Agente origem | Agente destino | Tarefa | Resultado | Observação |
|------|-------------|----------------|--------|-----------|-----------|
| 2026-[MM-DD] | @ceo-neural | @copy-neural | brief-copy campanha maio | concluído | script de DM aprovado sem revisão |
```

Handoffs que funcionam sem retrabalho são o KPI mais importante do squad em S05.

---

*Sessão de origem: [[runa-intervencao-sessao-05-squad-agentes|S05 — SQUAD$ II · Agentes]]*
*Relacionado: [[template-claude-md-squad|CLAUDE.md do Squad]] · [[checklist-calibracao-squad|Checklist de Calibração]]*
