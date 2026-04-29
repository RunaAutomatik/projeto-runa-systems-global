---
date: 2026-04-21
tags: [runa-intervencao, artefato, template, ingestao, wiki, mind, s07]
project: runa-systems-global
type: template
sessao: S07 — MIND$ I · Base de Conhecimento
produto: [[runa-intervencao-sessao-07-mind-base-conhecimento]]
---

# Template — Ingestão de Wiki Page

> **O que é:** Estrutura padrão para criar uma wiki page a partir de um documento fonte ou de uma sessão de extração de conhecimento.
> **Quando usar:** Toda vez que um novo documento for ingerido no vault — Block 4 de S07 em diante.
> **Regra:** Máximo 500 palavras por página. Síntese, não transcrição.

---

## Template Completo

Copie o bloco abaixo e salve em `wiki/[categoria]/[nome-do-tema].md`:

```markdown
---
date: YYYY-MM-DD
fonte: raw/YYYY-MM-DD-[arquivo-original]
tipo: [entities | concepts | sources | analyses]
tags: [[nome-do-negocio]-kb, [tema], [subtema]]
---

# [Título do Conhecimento]

> **Fonte:** [[../raw/YYYY-MM-DD-[arquivo]]]
> **Última atualização:** YYYY-MM-DD

---

## Síntese

[3–5 frases que capturam o essencial. Quem é o sujeito? O que é verdade? Qual é a implicação para o negócio?]

---

## Pontos-chave

- [Ponto 1 — específico o suficiente para gerar ação]
- [Ponto 2 — inclui número, prazo ou condição concreta quando relevante]
- [Ponto 3 — não óbvio, precisa estar documentado]
- [Ponto 4 — opcional]
- [Ponto 5 — opcional]

---

## Quando usar

[Situações específicas onde esse conhecimento deve ser consultado pelo agente]

Exemplos:
- Ao redigir qualquer proposta comercial
- Antes de responder objeção de preço
- Ao qualificar um novo lead no diagnóstico inicial

---

## Exceções

[Quando este conhecimento NÃO se aplica — contextos onde a regra quebra]

Exemplos:
- Não se aplica a clientes do segmento X (regra diferente vigora)
- Não se aplica quando o cliente já passou pelo onboarding avançado
- Não se aplica em negociações acima de R$50k (escalonamento diferente)

---

## Relacionados

- [[[tema relacionado 1]]] — [por que é relacionado]
- [[[tema relacionado 2]]] — [por que é relacionado]
```

---

## Guia de Preenchimento

### Síntese — o que escrever

A síntese é o bloco mais importante. O agente vai ler isso primeiro. Ela precisa ser:

| ✅ Síntese boa | ❌ Síntese ruim |
|--------------|----------------|
| "Nosso ICP é dono de negócio de serviços entre 30–50 anos, faturando R$20k–100k/mês. Tem 2–5 funcionários. O gargalo é operacional, não comercial." | "Trabalhamos com diferentes tipos de clientes que possuem variadas características e necessidades." |
| "O processo de venda tem 4 etapas com prazo total de 12 dias. A proposta é enviada em 48h. Dois follow-ups definidos: dia 5 e dia 12." | "Temos um processo de venda estruturado que funciona bem para nosso perfil de cliente." |

**Teste:** Se a síntese poderia se aplicar a qualquer negócio, está genérica demais.

---

### Pontos-chave — o que incluir

- Fatos específicos (números, prazos, condições, exemplos)
- Regras de decisão (se X, então Y)
- Padrões observados (clientes que X geralmente Y)
- Exceções já conhecidas (a não ser quando Z)

**Não incluir:** opiniões genéricas, objetivos aspiracionais, afirmações óbvias.

---

### Quando usar — como escrever

Descreva situações em que o agente deve ativamente consultar esta página.

**Bom formato:**
```
- Ao receber uma pergunta sobre [tema] de qualquer lead
- Antes de enviar qualquer proposta de serviço
- Quando o cliente mencionar [palavra/objeção específica]
```

**Mau formato:**
```
- Quando for relevante
- Sempre que necessário
- Em situações comerciais
```

---

### Exceções — quando escrever

Escreva exceções apenas quando existirem. Se não há exceção conhecida, apague a seção.

Formato correto: **condição específica** que desativa a regra principal.

---

## Categorias do Vault

Escolha a categoria correta ao salvar:

| Categoria | Para que serve | Exemplos |
|-----------|---------------|---------|
| `entities/` | Pessoas, empresas, produtos, perfis | ICP, concorrente, produto principal, case de cliente |
| `concepts/` | Frameworks, métodos, processos, regras | Processo de venda, protocolo de onboarding, estratégia de precificação |
| `sources/` | Resumos de documentos fonte | Proposta aprovada X, e-mail de sucesso Y, roteiro de vendas Z |
| `analyses/` | Comparações, sínteses, diagnósticos | Padrões de clientes que fecham rápido, análise de objeções por segmento |

---

## Processo de Ingestão (passo a passo)

```
1. Colocar o documento original em:
   [vault]/raw/YYYY-MM-DD-[tema].md

2. Criar a wiki page usando este template em:
   [vault]/wiki/[categoria]/[tema].md

3. Adicionar ao índice:
   [vault]/wiki/index.md — nova linha com formato:
   | [tema] | [categoria] | [date] | [[wiki/[categoria]/[tema]]] |

4. Registrar no log:
   [vault]/wiki/log.md — append:
   | YYYY-MM-DD | ingest | [tema] | [categoria] | [notas] |
```

---

## Exemplos Preenchidos

### Exemplo 1 — entities/icp.md

```markdown
---
date: 2026-04-21
fonte: raw/2026-04-21-diagnostico-icp.md
tipo: entities
---

# ICP — Perfil do Cliente Ideal

> **Fonte:** [[../raw/2026-04-21-diagnostico-icp]]
> **Última atualização:** 2026-04-21

## Síntese

Nosso ICP é dono de negócio de serviços B2B, entre 32 e 48 anos, faturando R$25k–90k/mês.
Opera com equipe de 2 a 6 pessoas. Não tem sócio. O principal gargalo é operacional:
entrega consome tempo que deveria ir para vendas. Está buscando escala sem contratar mais.

## Pontos-chave

- Faturamento entre R$25k e R$90k/mês — abaixo disso não tem margem para investir
- Equipe de 2 a 6 pessoas — acima de 6, o problema muda de natureza
- Sem sócio — decisão de compra unilateral, ciclo de venda mais curto
- Gargalo operacional — não procura mais clientes, procura mais capacidade
- Já tentou delegar antes e não funcionou — crença de que "ninguém faz tão bem"

## Quando usar

- Ao qualificar qualquer novo lead no diagnóstico
- Ao escrever qualquer copy ou proposta
- Ao definir o tom de qualquer comunicação comercial

## Exceções

- Não se aplica ao segmento de e-commerce (lógica diferente — problema é escala de produto, não serviço)
- Não se aplica a profissionais liberais solo sem equipe (motivação de compra diferente)

## Relacionados

- [[concepts/processo-venda]] — o ICP define o timing de cada etapa
- [[concepts/objecoes]] — as objeções do ICP estão mapeadas aqui
```

---

### Exemplo 2 — concepts/objecoes.md

```markdown
---
date: 2026-04-21
fonte: raw/2026-04-21-objecoes-frequentes.md
tipo: concepts
---

# Objeções Frequentes — Respostas que Funcionaram

> **Fonte:** [[../raw/2026-04-21-objecoes-frequentes]]
> **Última atualização:** 2026-04-21

## Síntese

5 objeções aparecem em 80% das negociações. As respostas documentadas aqui
foram testadas em pelo menos 3 casos com fechamento positivo. Nenhuma resposta
é um script — é um princípio de enquadramento que o agente deve adaptar ao contexto.

## Pontos-chave

- "Está caro" → Não é objeção de preço, é objeção de valor. Perguntar: "Em relação a quê?"
- "Preciso pensar" → Geralmente falta de clareza, não hesitação. Perguntar: "O que ainda não ficou claro?"
- "Deixa eu falar com meu sócio" → Normalmente escudo. Se mencionar sócio pela primeira vez aqui, é sinal
- "Não é o momento" → Validar. Se for real, agendar retorno em 30 dias com compromisso de data
- "Já tentei algo parecido e não funcionou" → Escutar o que falhou, diferenciar mecanismo, não prometer resultado

## Quando usar

- Antes de qualquer reunião comercial
- Ao redigir follow-up após proposta enviada
- Quando o prospect silencia após a proposta

## Relacionados

- [[entities/icp]] — as objeções variam por perfil de ICP
- [[analyses/casos-fechamento-rapido]] — clientes que não objetaram e fecharam em 7 dias
```

---

*Sessão de origem: [[runa-intervencao-sessao-07-mind-base-conhecimento|S07 — MIND$ I · Base de Conhecimento]]*
*Relacionado: [[🎯 PRODUTOS/RUNA-SYSTEMS/programa/intervencao/artefatos/framework-extracao-conhecimento|Framework de Extração]] · [[estrutura-vault-conhecimento|Estrutura do Vault]]*
