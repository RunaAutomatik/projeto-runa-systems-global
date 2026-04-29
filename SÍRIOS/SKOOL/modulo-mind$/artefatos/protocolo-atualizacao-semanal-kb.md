---
date: 2026-04-21
tags: [runa-intervencao, artefato, protocolo, atualizacao, kb, semanal, mind, s08]
project: runa-systems-global
type: protocol
sessao: S08 — MIND$ II · Memória e Evolução
produto: [[runa-intervencao-sessao-08-mind-memoria-evolucao]]
---

# Protocolo — Atualização Semanal da Base de Conhecimento

> **O que é:** Rotina semanal de 15 minutos para manter o vault vivo — atualizar wiki pages, Memory.md dos agentes e hot.md com base nas interações da semana.
> **Quando fazer:** Toda sexta-feira (ou qualquer dia fixo escolhido) antes de encerrar o trabalho.
> **Regra:** A janela de atualização é 24–48h após a interação. Depois disso, o aprendizado se perde.

---

## Os 15 Minutos — Passo a Passo

### Passo 1 — Revisar o log (3 min)

Abrir `wiki/log.md` e ler as entradas da semana.

Identificar:
- Consultas que o vault respondeu bem → confirmar que a wiki page está completa
- Consultas que o vault não respondeu → identificar a lacuna
- Interações onde algo novo foi descoberto → anotar para atualizar

### Passo 2 — Atualizar wiki pages (5 min)

Para cada lacuna ou informação nova identificada no Passo 1:

```
a. Se a informação é nova → criar nova wiki page (template-ingestao-wiki.md)
b. Se é uma atualização de algo existente → editar a wiki page
c. Atualizar wiki/index.md com qualquer página nova
d. Registrar em wiki/log.md
```

**Limite:** Máximo 2 páginas novas por semana em ritmo de manutenção. Se houver mais, agendar uma sessão separada.

### Passo 3 — Atualizar Memory.md dos agentes (5 min)

Para cada agente que teve interação relevante na semana:

```
a. Abrir o Memory.md do agente
b. Adicionar entradas nas seções relevantes:
   - Novo padrão descoberto → "O que aprendi"
   - Output melhor que o esperado → "O que funciona"
   - Output pior que o esperado → "O que não funciona"
   - Instrução nova do fundador → "Instruções permanentes"
c. Verificar se alguma seção está próxima de 30 entradas → arquivar se necessário
```

### Passo 4 — Atualizar hot.md (2 min)

Atualizar `wiki/hot.md` com o contexto da próxima semana:

```markdown
[DATA]: [Uma frase com o que é mais relevante para o negócio na próxima semana.
O que os agentes precisam saber agora que não estará em nenhuma outra página.]

Exemplos:
- Reunião de proposta na quinta com cliente X do setor Y — prioridade máxima
- Lançamento do produto Z começa segunda — toda copy deve mencionar early access
- Semana de follow-up: 5 propostas enviadas, aguardando resposta de todas
```

---

## Worksheet da Revisão Semanal

Use este documento durante os 15 minutos:

```markdown
# Revisão Semanal — Semana de [YYYY-MM-DD]

## 1. Interações da semana

Liste as interações relevantes com o squad:

| Agente | Tarefa | Resultado | O que descobriu |
|--------|--------|-----------|----------------|
| | | ✅ / ⚠️ / ❌ | |
| | | | |

## 2. Lacunas identificadas

Perguntas que o vault não soube responder:

- [ ] [Pergunta sem resposta] → criar wiki page em [categoria]
- [ ] [Outra lacuna]

## 3. wiki pages para atualizar

- [ ] [Nome da página] — [o que muda]
- [ ] [Nome da página] — [o que muda]

## 4. Memory.md para atualizar

| Agente | Seção | Entrada a adicionar |
|--------|-------|---------------------|
| | | |
| | | |

## 5. hot.md — contexto da próxima semana

[Uma frase — o que é urgente ou diferente na próxima semana]

## 6. Registros no log.md

Entradas a adicionar ao wiki/log.md desta revisão:

| Data | Tipo | Tema | Categoria | Notas |
|------|------|------|-----------|-------|
| | update | | | |
| | update | | | |
```

---

## Gatilhos de Atualização — Referência Rápida

| O que aconteceu | Onde atualizar |
|-----------------|----------------|
| Agente produziu output melhor que esperado | Memory.md — "o que funciona" |
| Agente produziu output pior que esperado | Memory.md — "o que não funciona" |
| Você deu instrução específica ao agente | Memory.md — "instruções permanentes" |
| Vault não respondeu uma consulta | wiki/index.md + criar nova wiki page |
| Padrão de cliente novo descoberto | wiki/analyses/ ou wiki/entities/icp.md |
| Objeção nova recebida | wiki/concepts/objecoes.md |
| Processo do negócio mudou | wiki/concepts/[processo] |
| Novo case de sucesso fechou | wiki/analyses/ + wiki/entities/ |
| Contexto urgente esta semana | wiki/hot.md |

---

## Frequências por Tipo de Atualização

| Tipo | Frequência ideal | Sinal de atraso |
|------|-----------------|-----------------|
| wiki/hot.md | Toda semana | hot.md com data > 7 dias |
| Memory.md dos agentes ativos | Toda semana | Agente usado mas sem entrada nova há 2 semanas |
| wiki/concepts/ (atualização) | Quando há nova informação | — |
| wiki/entities/ (atualização) | Quando há novo cliente/produto | — |
| wiki/analyses/ (nova página) | Quando padrão novo emerge | — |
| wiki/sources/ (nova página) | Quando novo documento é ingerido | — |

---

## Anti-Padrões

| Anti-padrão | Por que é problemático | Correção |
|-------------|----------------------|---------|
| "Vou atualizar depois" | Aprendizado se perde em 48h | Atualizar na hora ou no máximo no dia seguinte |
| Atualizar em blocos mensais | Vault fica defasado — agentes operam com informação velha | Manter a rotina semanal de 15 min |
| Só atualizar quando o agente errou | Perde os padrões de sucesso | Registrar bons resultados também — são tão valiosos quanto os erros |
| Entradas genéricas | "Funciona bem" não gera ação futura | Sempre específico: o quê, quando, em que contexto |
| Vault com muitas páginas sem curadoria | Agente fica confuso com informação contraditória | Revisar e desativar páginas desatualizadas trimestralmente |

---

## Revisão Trimestral (30 min — a cada 3 meses)

Além da revisão semanal de 15 minutos, fazer a cada 3 meses:

1. **Auditoria de wiki/index.md** — todas as páginas ainda são relevantes?
2. **Auditoria de Memory.md** — entradas com mais de 90 dias ainda são válidas?
3. **Lacunas sistêmicas** — há temas recorrentes nas consultas sem resposta?
4. **Arquivamento** — Memory.md com mais de 30 entradas por seção → arquivar
5. **Atualização de CLAUDE.md do vault** — o roteamento ainda reflete as páginas que existem?

---

*Sessão de origem: [[runa-intervencao-sessao-08-mind-memoria-evolucao|S08 — MIND$ II · Memória e Evolução]]*
*Relacionado: [[template-memory-agente|Template Memory.md]] · [[cinco-prompts-consulta-vault|5 Prompts Core]]*
