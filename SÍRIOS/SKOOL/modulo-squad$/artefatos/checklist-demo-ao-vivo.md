---
date: 2026-04-21
tags: [runa-intervencao, artefato, s21, demo, checklist, rei]
project: runa-systems-global
type: artifact-checklist
sessao: S21
produto: "[[runa-mentoria-prd]]"
aliases: [checklist-demo, s21-demo-checklist]
---

# Checklist — Demo ao Vivo (S21)

> Usado pelo facilitador durante o Block 1 de S21.
> Mínimo 4/5 critérios para demo aprovada.
> Critério não atingido = gap identificado → plano de correção em 7 dias.

---

## Pré-Demo: Verificação Rápida (5 min antes)

Antes de iniciar o Block 1, confirmar:

| Item | ✅/❌ |
|------|-------|
| Relatório de 72h apresentado pelo operador | — |
| COMMAND-CENTER.md aberto no computador do operador | — |
| n8n dashboard acessível | — |
| Google Sheets do CRM visível | — |
| Claude Code ativo no terminal do operador | — |

---

## Cena 1 — Chegada do Lead (5 min)

**O que simular:** Lead entra via formulário / WhatsApp / Instagram

| Critério | ✅/❌ | Observação |
|---------|-------|------------|
| Automação detectou o lead (webhook n8n disparou) | — | — |
| Notificação chegou ao operador sem intervenção manual | — | — |
| CRM (Google Sheets) atualizou pipeline automaticamente | — | — |
| Operador não precisou abrir o CRM manualmente para verificar | — | — |

**Nota do facilitador:** Se a automação falhou, documentar a causa e passar para a próxima cena.

---

## Cena 2 — Qualificação Neural (10 min)

**O que simular:** Operador ativa o agente de atendimento/qualificação

| Critério | ✅/❌ | Observação |
|---------|-------|------------|
| Agente leu a KB (consultou wiki/concepts/icp.md ou equivalente) | — | — |
| Resposta citou especificidade real do negócio (não resposta genérica) | — | — |
| Diagnóstico do prospect foi gerado com contexto real | — | — |

**Como verificar se não é genérico:** Perguntar ao operador — "se eu apagar o nome do negócio dessa resposta, ela ainda faria sentido para qualquer empresa?" Se sim → genérico.

---

## Cena 3 — Proposta Neural (10 min)

**O que simular:** Operador gera proposta para lead qualificado

Comando de teste:
```
*proposta "[lead simulado]" "[serviço]" "[contexto breve]"
```

| Critério | ✅/❌ | Observação |
|---------|-------|------------|
| agente-orcamento leu vault (servicos.md + precificacao.md) | — | — |
| Proposta gerada em menos de 5 minutos | — | — |
| 3 opções apresentadas com âncora de custo | — | — |
| Proposta exibe nome real do lead e contexto específico | — | — |

**Tempo registrado:** _______ minutos

---

## Cena 4 — Relatório do Squad (5 min)

**O que simular:** Segunda-feira 08h — relatório automático

| Critério | ✅/❌ | Observação |
|---------|-------|------------|
| Relatório chegou automaticamente (ou foi simulado ao vivo) | — | — |
| Pipeline por estágio visível no relatório | — | — |
| Tarefas pendentes listadas no relatório | — | — |
| Operador não precisou gerar o relatório manualmente | — | — |

---

## Cena 5 — Command Center (5 min)

**Teste de 30 segundos:** Operador abre COMMAND-CENTER.md e responde:

| Pergunta | Respondida em <30 seg? | Resposta |
|---------|----------------------|---------|
| 1. Onde está cada cliente no pipeline? | ✅/❌ | — |
| 2. Qual agente tem tarefa pendente? | ✅/❌ | — |
| 3. Quando chega o próximo relatório automático? | ✅/❌ | — |

**Critério:** As 3 perguntas respondidas sem abrir nenhum outro arquivo além do COMMAND-CENTER.md.

---

## Placar Final da Demo

| # | Critério | ✅/❌ |
|---|---------|-------|
| 1 | Squad respondeu com contexto específico do negócio (não genérico) | — |
| 2 | KB foi consultada e citou fonte real | — |
| 3 | Pelo menos 1 automação executou sem intervenção do operador | — |
| 4 | Proposta gerada em menos de 5 minutos | — |
| 5 | COMMAND-CENTER.md: 3 perguntas respondidas em menos de 30 segundos | — |

**Total:** ___/5

---

## Resultado

| Placar | Resultado | Próximo passo |
|--------|-----------|--------------|
| 5/5 | ✅ Demo completa — REI aprovado | Prosseguir para Manifesto do REI |
| 4/5 | ✅ Demo aprovada | Documentar gap e plano de correção em 7 dias |
| 3/5 ou menos | ❌ Demo parcial | Identificar os 2 gaps críticos e agendar revisão antes de coroação |

---

## Gaps Identificados

*(Preencher quando critério não atingido)*

| Gap | Causa identificada | Plano de correção | Prazo |
|-----|-------------------|-------------------|-------|
| [ ] | [ ] | [ ] | [ ] |
| [ ] | [ ] | [ ] | [ ] |

---

## Notas do Facilitador

**Demo com falhas é válida:**
O ecossistema de um operador real tem partes mais maduras e partes menos maduras.
Um critério não atingido = dado concreto para o plano de evolução, não sinal de fracasso.

**O que NÃO fazer:**
- Não simular uma automação que não existe para passar no critério
- Não contar o tempo de forma generosa — 6 minutos não é "menos de 5 minutos"
- Não aprovar uma resposta genérica como contexto específico

**O que FAZER:**
- Registrar o placar real, não o ideal
- Usar os gaps como ponto de partida concreto para o plano de expansão
- Celebrar o que funcionou — um sistema parcial funcionando é extraordinário

---

## Connections

- **Sessão:** [[runa-intervencao-sessao-21-soberania-neural|S21 — Soberania Neural]]
- **Template manifesto:** [[template-manifesto-rei]]
- **Template mapa de expansão:** [[template-mapa-expansao]]
