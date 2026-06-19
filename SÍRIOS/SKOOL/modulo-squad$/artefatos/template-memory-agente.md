---
date: 2026-04-21
tags: [runa-intervencao, artefato, template, memory, agente, mind, s08]
project: runa-systems-global
type: template
sessao: S08 — MIND$ II · Memória e Evolução
produto: [[runa-intervencao-sessao-08-mind-memoria-evolucao]]
---

# Template — Memory.md do Agente

> **O que é:** Arquivo de memória individual de cada agente do squad. Armazena o que o agente aprendeu sobre o negócio específico do cliente a partir da operação real.
> **Quando usar:** Block 2 de S08 — criar 1 por agente. Atualizar após cada interação relevante.
> **Regra:** Máximo 30 entradas ativas por seção. Entradas sempre com data. Sempre específicas.

---

## Template Completo

Salve como `wiki/memory/[nome-agente]-memory.md` no vault:

```markdown
---
date: YYYY-MM-DD
agente: [nome-do-agente]
squad: [nome-do-negocio]-kb
atualizado: YYYY-MM-DD
---

# Memory — [Nome do Agente]

> **Última atualização:** YYYY-MM-DD
> **Atualizar após:** toda interação onde um padrão novo emerge ou uma instrução específica é dada
> **Limite:** 30 entradas por seção — arquivar as mais antigas quando atingir o limite

---

## O que aprendi sobre este negócio

[O que o agente sabe sobre o negócio que não está documentado no vault — padrões emergentes, observações de uso]

| Data | Aprendizado |
|------|------------|
| YYYY-MM-DD | [Padrão específico e acionável observado na operação] |

---

## O que funciona neste contexto

[Abordagens, formatos, estruturas que geraram bom resultado para este negócio específico]

| Data | O que funcionou | Contexto |
|------|----------------|---------|
| YYYY-MM-DD | [Abordagem/formato/estrutura] | [Situação onde foi usado] |

---

## O que não funciona aqui

[O que falhou — para não repetir. Cada entrada previne um erro futuro.]

| Data | O que não funcionou | Por que falhou |
|------|---------------------|---------------|
| YYYY-MM-DD | [Abordagem que falhou] | [Causa identificada] |

---

## Instruções permanentes do fundador

[Instruções específicas dadas pelo cliente que devem sempre ser seguidas neste negócio]

| Data | Instrução | Contexto de origem |
|------|-----------|------------------|
| YYYY-MM-DD | [Instrução específica e acionável] | [Por que foi dada] |
```

---

## Guia de Preenchimento

### O que é uma entrada boa vs. ruim

| Seção | Entrada boa ✅ | Entrada ruim ❌ |
|-------|--------------|----------------|
| Aprendi | "2026-04-21 — Clientes de consultoria deste negócio respondem melhor a exemplos com números reais. Sempre incluir pelo menos 1 dado de mercado concreto em qualquer proposta." | "2026-04-21 — Usar exemplos específicos." |
| Funcionou | "2026-04-21 — Estrutura PROBLEMA → PROVA → SOLUÇÃO gerou 2x mais resposta em DMs do que estrutura narrativa. Usar para copies de topo." | "2026-04-21 — Essa abordagem funcionou bem." |
| Não funcionou | "2026-04-21 — Listar benefícios antes de identificar a dor do cliente gerou objeção imediata. Prospect disse 'parece propaganda'. Começar sempre pelo diagnóstico." | "2026-04-21 — Não funcionou listar benefícios primeiro." |
| Instrução | "2026-04-21 — Nunca mencionar prazo de entrega sem antes perguntar sobre a urgência do cliente. Fundador: 'promessa de prazo sem contexto cria expectativa errada'." | "2026-04-21 — Cuidado com prazos." |

---

### Quando atualizar

Atualize o Memory.md do agente quando:

- O output do agente foi **melhor ou pior** do que o esperado
- Você deu uma **instrução específica** que quer que persista
- O agente fez algo que você **não quer que repita**
- Você descobriu um **padrão** no comportamento de clientes que este agente usa

**Não atualizar quando:**
- O agente funcionou normalmente (sem novidade)
- A instrução foi pontual e não deve persistir
- A informação já está documentada no vault principal

---

## Exemplos Preenchidos

### Memory — Agente Comercial (CEO Neural)

```markdown
# Memory — CEO Neural

> Última atualização: 2026-04-21

## O que aprendi sobre este negócio

| Data | Aprendizado |
|------|------------|
| 2026-04-21 | Clientes deste negócio têm ciclo de decisão médio de 14 dias. Acima de 21 dias raramente fecham. Depois de 21 dias sem resposta, lead está frio. |
| 2026-04-21 | O diferencial que mais converte neste negócio é a velocidade de implementação — clientes querem resultado em 30 dias, não 90. Mencionar isso cedo. |
| 2026-04-15 | Segmento de e-commerce tem ticket médio menor mas fecha mais rápido. Consultorias B2B têm ticket maior mas demoram 2x mais. Tratar diferente. |

## O que funciona neste contexto

| Data | O que funcionou | Contexto |
|------|----------------|---------|
| 2026-04-21 | Diagnóstico aberto antes de qualquer proposta — "me fale mais sobre o que está acontecendo" gerou rapport imediato e mais informação qualificadora | Reunião inicial com cliente frio |
| 2026-04-15 | Mencionar case de cliente do mesmo segmento antes de apresentar solução — especificidade aumenta credibilidade | Proposta para consultor independente |

## O que não funciona aqui

| Data | O que não funcionou | Por que falhou |
|------|---------------------|---------------|
| 2026-04-21 | Enviar proposta sem follow-up imediato — lead esfria em 48h | Proposta ficou 72h sem resposta, cliente disse que "já estava olhando outra opção" |

## Instruções permanentes do fundador

| Data | Instrução | Contexto de origem |
|------|-----------|------------------|
| 2026-04-21 | Sempre incluir o prazo de implementação na abertura da proposta — não no final | Fundador: "cliente decide se lê o resto com base no prazo" |
| 2026-04-10 | Nunca mencionar concorrentes pelo nome em proposta — comparar por categoria apenas | Cliente ficou desconfortável quando concorrente foi mencionado diretamente |
```

---

### Memory — Agente de Conteúdo (Copy Neural)

```markdown
# Memory — Copy Neural

> Última atualização: 2026-04-21

## O que aprendi sobre este negócio

| Data | Aprendizado |
|------|------------|
| 2026-04-21 | A dor mais ativadora neste nicho é "tempo perdido em operação que poderia ir para crescimento" — não "falta de clientes". Usar como gancho de topo de funil. |
| 2026-04-18 | Audiência deste negócio rejeita promessas de resultado em prazo curto. "Resultados em 7 dias" reduz credibilidade. Usar "primeiros resultados visíveis em 30 dias". |

## O que funciona neste contexto

| Data | O que funcionou | Contexto |
|------|----------------|---------|
| 2026-04-21 | Tom direto e sem floreio — audiência é empreendedor pragmático. Evitar adjetivos superlativo | Carossel com 3.2x mais engajamento que os anteriores |
| 2026-04-15 | Perguntas retóricas no hook — "você passou a última semana apagando incêndio?" — gerou 40% mais saves | Legenda de reel |

## Instruções permanentes do fundador

| Data | Instrução | Contexto de origem |
|------|-----------|------------------|
| 2026-04-21 | Nunca usar a palavra "automação" sem qualificador — substituir por "processo que funciona sem você" | Fundador: "automação assusta meu público — parece técnico demais" |
| 2026-04-18 | Sempre terminar copy com pergunta de engajamento — nunca CTA direto em post orgânico | Decisão de estratégia de conteúdo de longo prazo |
```

---

## Protocolo de Arquivo

Quando uma seção atingir 30 entradas:

1. Criar `wiki/memory/arquivo/[nome-agente]-memory-[YYYY].md`
2. Mover as entradas mais antigas (primeiras 20) para o arquivo
3. Manter as 10 mais recentes no Memory.md ativo
4. Registrar em `wiki/log.md`: `| YYYY-MM-DD | archive | [nome-agente]-memory | — | Arquivado [N] entradas — limite atingido |`

---

*Sessão de origem: [[runa-intervencao-sessao-08-mind-memoria-evolucao|S08 — MIND$ II · Memória e Evolução]]*
*Relacionado: [[protocolo-atualizacao-semanal-kb|Protocolo Semanal]] · [[cinco-prompts-consulta-vault|5 Prompts Core]]*
