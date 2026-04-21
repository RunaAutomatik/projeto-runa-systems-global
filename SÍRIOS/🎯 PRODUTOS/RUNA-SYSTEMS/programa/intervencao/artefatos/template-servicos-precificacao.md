---
date: 2026-04-21
tags: [runa-intervencao, artefato, servicos, precificacao, vault, template, track-c]
project: runa-systems-global
type: artifact
sessao: track-c4-orcamento-proposta-neural
---

# Artefato — Template Serviços e Precificação

> **Usado em:** Track C4 — Block 2 (mapeamento de serviços) + Block 4 (ancoragem de preço)
> **Onde salvar:**
> - `[negocio]-kb/wiki/concepts/servicos.md`
> - `[negocio]-kb/wiki/concepts/precificacao.md`
> **Como usar:** Preencher os dois arquivos ao vivo durante a sessão. São pré-requisitos do `agente-orcamento`.

---

## Por que esses dois arquivos existem

O `agente-orcamento` precisa de dois tipos de informação distintos:

| Arquivo | O que contém | Para qual seção da proposta |
|---------|-------------|----------------------------|
| `servicos.md` | O QUE você entrega, COMO, em QUANTO tempo | Escopo, Abordagem, Próximos Passos |
| `precificacao.md` | QUANTO custa, POR QUÊ e COMO defender | Investimento, Ancoragem |

Preencher apenas um dos dois gera propostas incompletas.

---

## Parte 1 — `wiki/concepts/servicos.md`

> Copiar para `[negocio]-kb/wiki/concepts/servicos.md`
> Preencher para cada serviço que o operador oferece (mínimo 1, ideal 3)

```markdown
---
date: [YYYY-MM-DD]
tags: [vault, servicos, escopo, entregaveis]
negocio: [NOME DO NEGÓCIO]
---

# Catálogo de Serviços — [NOME DO NEGÓCIO]

> Este arquivo define o escopo, os entregáveis e os prazos de cada serviço.
> O agente-orcamento lê este arquivo para construir as seções Escopo e Abordagem da proposta.

---

## Serviço 1 — [NOME DO SERVIÇO]

**Para quem é:** [perfil do ICP — 1 frase]
*(Ex: agências digitais com 3–10 clientes / consultores que faturam entre R$8k–25k/mês)*

**O problema que resolve:** [descrição em 1-2 frases, na voz do cliente]
*(Ex: "Perco horas respondendo mensagens que poderiam ser automáticas, e meu time não tem processo padrão de atendimento")*

**Como entregamos:** [mecanismo — não processo técnico, mas o que muda na operação do cliente]
*(Ex: "Instalamos um squad neural de atendimento com 3 agentes especializados, integrado ao WhatsApp da empresa")*

**O que inclui (escopo completo):**

| Entregável | Formato | Prazo |
|-----------|---------|-------|
| [item 1] | [doc/arquivo/sistema/treinamento] | [X dias úteis] |
| [item 2] | [doc/arquivo/sistema/treinamento] | [X dias úteis] |
| [item 3] | [doc/arquivo/sistema/treinamento] | [X dias úteis] |

**O que NÃO inclui (limites explícitos):**
- [limitação 1] *(Ex: integração com CRMs pagos além do Google Sheets)*
- [limitação 2] *(Ex: criação de conteúdo para os agentes — cliente fornece o material bruto)*
- [limitação 3] *(Ex: suporte técnico após 30 dias da entrega — cobrado à parte)*

**Prazo total de entrega:** [X semanas ou X dias úteis a partir do kickoff]

**Marcos do projeto:**
1. [Marco 1] — até [X dias úteis]
2. [Marco 2] — até [X dias úteis]
3. [Marco 3 = entrega final] — até [X dias úteis]

**Resultado típico:** [o que o cliente experimenta após a entrega]
*(Ex: "Redução de 60–80% no tempo de atendimento manual. Primeiras respostas automáticas em até 48h após o kickoff.")*

**Suporte pós-entrega:** [o que acontece depois]
*(Ex: 15 dias de suporte por WhatsApp inclusos / nenhum suporte — cliente opera de forma autônoma / manutenção mensal à parte)*

---

## Serviço 2 — [NOME DO SERVIÇO]

**Para quem é:** [perfil do ICP]
**O problema que resolve:** [descrição em 1-2 frases]
**Como entregamos:** [mecanismo]

**O que inclui (escopo completo):**

| Entregável | Formato | Prazo |
|-----------|---------|-------|
| [item 1] | | |
| [item 2] | | |

**O que NÃO inclui:**
- [limitação 1]
- [limitação 2]

**Prazo total:** [X semanas]
**Marcos:** 1. [ ] 2. [ ] 3. [ ]
**Resultado típico:** [resultado esperado]
**Suporte pós-entrega:** [condições]

---

## Serviço 3 — [NOME DO SERVIÇO]

*(repetir estrutura do Serviço 1)*

---

## Notas para o agente

- Quando o cliente pedir um serviço não listado aqui: sinalizar que o escopo precisa ser mapeado antes de gerar a proposta
- Quando o serviço for combinação de 2 ou mais desta lista: criar uma seção de Escopo composta
- Prazos são em dias úteis a menos que especificado como "corridos"
- "Resultado típico" é a âncora qualitativa — nunca garantia contratual
```

---

## Parte 2 — `wiki/concepts/precificacao.md`

> Copiar para `[negocio]-kb/wiki/concepts/precificacao.md`
> Preencher antes de gerar a primeira proposta real com o agente

```markdown
---
date: [YYYY-MM-DD]
tags: [vault, precificacao, preco, ancora, objecoes]
negocio: [NOME DO NEGÓCIO]
---

# Precificação Neural — [NOME DO NEGÓCIO]

> Este arquivo define os preços, as âncoras de custo e os scripts de argumentação.
> O agente-orcamento usa este arquivo para construir a seção Investimento e calcular as 3 opções.

---

## Tabela de Preços

| Serviço | Essencial | Completo ⭐ | Premium |
|---------|-----------|-----------|---------|
| [Serviço 1] | R$[base] | R$[base × 1,4] | R$[base × 2] |
| [Serviço 2] | R$[base] | R$[base × 1,4] | R$[base × 2] |
| [Serviço 3] | R$[base] | R$[base × 1,4] | R$[base × 2] |

**Regras de diferenciação entre opções:**
- Essencial: escopo mínimo funcional — entrega o resultado principal sem extras
- Completo: escopo recomendado — adiciona suporte, ajustes ou entregáveis bônus
- Premium: escopo ampliado — inclui suporte estendido, formação da equipe ou serviço adicional

*(Exemplo: Essencial = squad instalado / Completo = squad + 30d de suporte / Premium = squad + 30d suporte + formação de 1 colaborador)*

---

## Âncoras de Custo por Serviço

> Âncora de custo = o que o problema custa por mês ao cliente.
> Usar sempre na frase introdutória da seção Investimento da proposta.

| Serviço | Custo mensal do problema | Cálculo da âncora |
|---------|------------------------|------------------|
| [Serviço 1] | R$[X]/mês | [como foi calculado] |
| [Serviço 2] | R$[X]/mês | [como foi calculado] |
| [Serviço 3] | R$[X]/mês | [como foi calculado] |

**Como calcular:**
1. Quantas horas/semana o problema consome? × salário hora do responsável = custo de tempo
2. Quantas oportunidades perdidas por mês por falta de processo? × ticket médio = custo de oportunidade
3. Qual o custo de erro recorrente? (retrabalho, multa, churn) = custo de erro
4. Soma dos 3 = custo total do problema por mês

**Frase de âncora padrão:**
"O problema que vamos resolver custa R$[X] por mês à sua operação.
O investimento no [nome do serviço] é R$[Completo] — retorno a partir de [X semanas/meses]."

---

## Condições de Pagamento

| Condição | Formato | Quando oferecer |
|----------|---------|----------------|
| À vista | 100% antes do kickoff | Desconto implícito: pagamento imediato |
| 50/50 | 50% no aceite + 50% na entrega | Default para projetos acima de R$5k |
| Parcelado | [N]× sem juros no cartão | Para serviços abaixo de R$3k |
| Mensalidade | R$[X]/mês recorrente | Para serviços com suporte contínuo |

**Política de desconto:**
- Nunca reduzir preço sem reduzir escopo
- Se o cliente pedir desconto: oferecer versão Essencial ao preço do Completo solicitado
- Máximo de desconto por volume (>2 serviços): [N]%

**Condições de início:**
- Proposta assinada + [50% ou 100%] do valor = kickoff em até [N dias úteis]
- Sem sinal: kickoff não garantido (agenda pode fechar)

---

## Scripts de Argumentação

### Objeção: "Está caro"

**Errado:** "Posso dar um desconto..."
**Certo:** "Entendo. O investimento é R$[X]. O custo atual do problema é R$[âncora]/mês. Em [N meses], você teria gasto R$[âncora × N] sem resolver. O que faz mais sentido economicamente?"

Variação: "Posso oferecer o pacote Essencial por R$[Essencial] — você tem o resultado principal, sem os bônus do Completo. Quer que eu ajuste a proposta?"

---

### Objeção: "Preciso de tempo para pensar"

**Errado:** "Claro, sem problema. Me avisa quando decidir."
**Certo:** "Faz sentido. O que está em aberto para você neste momento? Alguma parte da proposta que não ficou clara ou que precisa de ajuste?"

*(Identificar a objeção real antes de ceder prazo)*

Variação se não houver objeção específica: "Deixa eu só confirmar: a proposta fica válida por [N] dias. Se precisar de algum ajuste antes de decidir, pode me acionar."

---

### Objeção: "Preciso consultar um sócio/diretor"

**Errado:** "Claro! Pode me apresentar a ele?"
**Certo:** "Com certeza. Para facilitar, posso preparar uma versão resumida de 1 página com o problema, a solução e o ROI esperado — para ele avaliar sem precisar ler a proposta completa. Faz sentido?"

---

### Objeção: "Consigo mais barato"

**Errado:** "A qualidade é diferente..."
**Certo:** "Ótimo que está pesquisando. O que diferencia esta proposta não é o preço, é o escopo: [descrever o que NOT está no concorrente mais barato]. Se o objetivo é apenas o resultado básico, o pacote Essencial pode atender. Se precisar de [diferencial], esse é o único caminho."

---

## Múltiplo de ROI

> Para reforçar ancoragem no pitch verbal (não na proposta escrita)

| Serviço | Custo do problema/mês | Investimento (Completo) | Retorno em | ROI múltiplo |
|---------|----------------------|------------------------|-----------|-------------|
| [Serviço 1] | R$[X] | R$[Y] | [N meses] | [X×N ÷ Y]× |
| [Serviço 2] | R$[X] | R$[Y] | [N meses] | [X×N ÷ Y]× |
| [Serviço 3] | R$[X] | R$[Y] | [N meses] | [X×N ÷ Y]× |

**Frase de ROI:**
"Em [N meses], o investimento de R$[Y] gera R$[X×N] de retorno — isso é [múltiplo]× o que você investiu."
```

---

## Fluxo de preenchimento durante C4

```
Block 2 (ao vivo):
  1. Preencher servicos.md → 3 serviços com escopo, prazo e resultado típico
  2. Calcular âncora de custo para cada serviço (4 passos)
  3. Preencher precificacao.md → tabela + âncoras + condições

Block 3 (ao vivo):
  4. Ativar agente-orcamento
  5. *proposta [cliente 1] [serviço principal] [contexto]
  6. *ajustar se necessário
  7. *exportar docx

Block 4 (ao vivo):
  8. Treinar frase de âncora para cada serviço
  9. Simular objeção "está caro" com script
```

---

## Connections

- **Sessão que usa estes artefatos:** [[runa-intervencao-sessao-track-c4-orcamento-proposta-neural|C4 — ORÇAMENTO$]]
- **Agente que lê estes arquivos:** [[template-agente-orcamento]] — `agente-orcamento`
- **Vault paths:**
  - `[negocio]-kb/wiki/concepts/servicos.md`
  - `[negocio]-kb/wiki/concepts/precificacao.md`
