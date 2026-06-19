---
date: 2026-04-21
tags: [runa-intervencao, artefato, prompts, consulta, vault, mind, s08]
project: runa-systems-global
type: reference
sessao: S08 — MIND$ II · Memória e Evolução
produto: [[runa-intervencao-sessao-08-mind-memoria-evolucao]]
---

# 5 Prompts Core de Consulta ao Vault

> **O que é:** Os 5 prompts mais úteis para extrair valor do vault de conhecimento — os que o cliente vai usar toda semana a partir de S08.
> **Quando usar:** Block 4 de S08 — executar ao vivo. Depois, referência semanal recorrente.
> **Resultado esperado:** Todo prompt deve gerar resposta específica do negócio, com citação de fonte do vault.

---

## Prompt 1 — Síntese Semanal do Vault

**Objetivo:** Briefing semanal — o que o squad precisa saber antes de começar a semana.

**Frequência:** Toda segunda-feira (ou início de semana de trabalho)

```
@[orquestrador] Com base no vault e no hot.md desta semana, me dê uma
síntese do que o squad precisa ter em mente para operar bem nos próximos
7 dias. Inclua: contexto atual do negócio, prioridade operacional, e
qualquer dado de ICP ou processo que seja relevante agora.
```

**O que o agente deve fazer:**
1. Ler `wiki/hot.md`
2. Ler `wiki/index.md` para identificar páginas relevantes ao contexto
3. Sintetizar em 3–5 pontos acionáveis

**Resposta esperada:**
```
Com base no vault:

1. [Contexto atual do negócio — do hot.md]
2. [Prioridade operacional da semana]
3. [Dado de ICP relevante — com citação]
4. [Dado de processo relevante — com citação]
5. [Alerta ou lacuna identificada]

Fontes: [[wiki/hot]], [[wiki/entities/icp]], [[wiki/concepts/processo-venda]]
```

**Sinal de problema:** Agente responde sem citar fontes → não está consultando o vault.

---

## Prompt 2 — Padrão de Cliente que Fecha Rápido

**Objetivo:** Decisão estratégica — identificar e priorizar o perfil de maior probabilidade de fechamento.

**Frequência:** Quinzenal — ou sempre que houver pipeline de leads para qualificar

```
@[orquestrador] Com base no vault, qual é o padrão de cliente que fecha
mais rápido neste negócio? O que eles têm em comum — perfil, setor, comportamento,
objeções que apresentam, como chegaram até aqui?
Quero usar isso para qualificar os leads atuais.
```

**O que o agente deve fazer:**
1. Ler `wiki/entities/icp.md`
2. Ler `wiki/analyses/` (se existir análise de clientes)
3. Cruzar com Memory.md do agente comercial
4. Identificar padrão comum

**Resposta esperada:**
```
Padrão identificado no vault:

- Perfil: [características do ICP que fecha rápido — do vault]
- Comportamento na primeira interação: [o que costuma perguntar/dizer]
- Objeção típica: [qual objeção costuma apresentar — e o que isso indica]
- Tempo médio de ciclo: [se documentado]
- O que acelera o fechamento: [dado de Memory.md ou analyses/]

Para qualificar os leads atuais, verificar: [checklist de 3–4 perguntas qualificadoras]

Fontes: [[wiki/entities/icp]], [[wiki/analyses/padrao-clientes-que-fecham]]
```

---

## Prompt 3 — Simulação de Objeção

**Objetivo:** Preparação comercial — resposta baseada no que funcionou, não em improviso.

**Frequência:** Antes de qualquer reunião comercial ou ao receber objeção em DM/WhatsApp

```
@[especialista-comercial] Um prospect acabou de me dizer: "[objeção exata]"

Com base no vault e no seu Memory.md, como eu respondo?
Me dê: o enquadramento correto desta objeção, a resposta recomendada
(com a lógica por trás), e o que não dizer.
```

**Exemplos de objeção para preencher:**
- "Está caro para mim agora"
- "Preciso pensar um pouco mais"
- "Já tentei algo parecido e não funcionou"
- "Não é o momento certo"
- "Vou falar com minha sócia"

**O que o agente deve fazer:**
1. Ler `wiki/concepts/objecoes.md`
2. Verificar Memory.md — seção "o que funciona" e "instruções permanentes"
3. Identificar a resposta que funcionou em casos anteriores

**Resposta esperada:**
```
Objeção: "[objeção do prospect]"

Diagnóstico: [O que esta objeção geralmente significa neste negócio — do vault]

Resposta recomendada:
"[resposta testada que funcionou — do vault]"

Lógica: [por que esta resposta funciona — enquadramento]

O que NÃO dizer: [o que tende a piorar a situação]

Próximo passo: [o que fazer depois de dar a resposta]

Fontes: [[wiki/concepts/objecoes]], Memory.md do agente
```

---

## Prompt 4 — Lacuna de Conhecimento do Vault

**Objetivo:** Manutenção — identificar o que o vault ainda não sabe e deveria saber.

**Frequência:** Mensal — ou após um período intenso de uso

```
@[orquestrador] Revisando o wiki/log.md das últimas 4 semanas:
quais foram as perguntas que você não soube responder porque a informação
não estava no vault? Me dê uma lista priorizada — do gap mais crítico
para o menos crítico — com sugestão de onde e como preencher cada lacuna.
```

**O que o agente deve fazer:**
1. Ler `wiki/log.md` — procurar entradas com resultado "não encontrou"
2. Identificar temas recorrentes sem cobertura
3. Priorizar por frequência e impacto na operação

**Resposta esperada:**
```
Lacunas identificadas no log das últimas 4 semanas:

| Prioridade | Gap | Frequência | Como preencher |
|-----------|-----|------------|---------------|
| CRÍTICO | [tema ausente] | [N perguntas] | Criar wiki page em [categoria] |
| ALTO | [tema ausente] | [N perguntas] | Extrair com as 5 perguntas do framework |
| MÉDIO | [tema ausente] | [N perguntas] | Ingerir documento [X] |

Recomendação para a próxima sessão de ingestão: começar pelo gap de prioridade CRÍTICO.

Fonte: [[wiki/log]]
```

---

## Prompt 5 — Diagnóstico Semanal via Vault

**Objetivo:** Governança operacional — identificar riscos e prioridades com base no que o vault sabe sobre o negócio.

**Frequência:** Toda sexta-feira (encerramento da semana)

```
@[orquestrador] Com base no vault, no log desta semana e no Memory.md
dos agentes ativos, me dê:

1. O maior risco operacional agora (o que pode dar errado se não agir)
2. A oportunidade não aproveitada desta semana (o que ficou na mesa)
3. As 3 prioridades para a próxima semana — rankeadas por impacto

Não quero análise genérica. Quero baseado no que está documentado sobre
este negócio específico.
```

**O que o agente deve fazer:**
1. Ler `wiki/hot.md`
2. Ler `wiki/log.md` (entradas da semana)
3. Ler Memory.md dos agentes usados na semana
4. Cruzar com `wiki/entities/icp.md` e `wiki/concepts/processo-venda.md`

**Resposta esperada:**
```
Diagnóstico semanal — [data]

RISCO OPERACIONAL:
[Risco específico identificado com base no vault + log da semana]
Ação recomendada: [ação específica]

OPORTUNIDADE NÃO APROVEITADA:
[O que ficou na mesa — com base nos dados do vault]
Como aproveitar: [ação específica]

PRIORIDADES DA PRÓXIMA SEMANA:
1. [Prioridade 1 — impacto: alto] → [ação]
2. [Prioridade 2 — impacto: médio] → [ação]
3. [Prioridade 3 — impacto: médio] → [ação]

Fontes: [[wiki/hot]], [[wiki/log]], Memory.md dos agentes
```

---

## Tabela de Referência Rápida

| Prompt | Quando usar | Agente | Fontes no vault |
|--------|-----------|--------|----------------|
| 1 — Síntese semanal | Início de semana | orquestrador | hot.md + index.md |
| 2 — Padrão de fechamento | Qualificação de leads | orquestrador | entities/icp + analyses/ |
| 3 — Simulação de objeção | Pré-reunião / objeção recebida | especialista-comercial | concepts/objecoes + Memory.md |
| 4 — Lacuna do vault | Manutenção mensal | orquestrador | log.md |
| 5 — Diagnóstico semanal | Encerramento de semana | orquestrador | hot.md + log.md + Memory.md |

---

## Como Verificar se o Vault Está Sendo Consultado

Após cada prompt, verificar:

- [ ] O agente citou pelo menos 1 fonte do vault (`Fonte: [[wiki/...]]`)
- [ ] A resposta inclui informação específica do negócio (não genérica)
- [ ] O agente sinalizou quando não encontrou algo ("não está no vault")
- [ ] Nenhum número ou data na resposta parece inventado

Se o agente não citou fontes → rever se o CLAUDE.md do vault está sendo incluído no contexto.

---

*Sessão de origem: [[runa-intervencao-sessao-08-mind-memoria-evolucao|S08 — MIND$ II · Memória e Evolução]]*
*Relacionado: [[template-memory-agente|Template Memory.md]] · [[protocolo-atualizacao-semanal-kb|Protocolo Semanal]]*
