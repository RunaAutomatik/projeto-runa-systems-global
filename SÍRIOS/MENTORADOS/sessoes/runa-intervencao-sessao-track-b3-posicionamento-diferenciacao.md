---
date: 2026-04-21
tags: [runa-intervencao, mentoria, track-b, consultor, mentor, posicionamento, diferenciacao, especializacao]
project: runa-systems-global
type: lesson-structure
fase: 5 — ESPECIALIZAÇÃO
track: B — Consultor / Mentor
codigo: B3
titulo: "POSICIONAMENTO$ I — Diferenciação Neural"
anterior: track-b2-chat-qualificacao-diagnostico
proximo: track-b4-posicionamento-autoridade
---

# Runa Intervenção — Track B3: POSICIONAMENTO$ I — Diferenciação Neural

> **Purpose:** Criar o sistema de posicionamento do consultor — pitch de 30 segundos, tagline única e manifesto de método. O agente de posicionamento processa o vault do negócio e produz a camada de linguagem que diferencia o consultor de qualquer concorrente no mesmo nicho.
> **Output:** Pitch neural de 30 segundos + tagline única + manifesto de método de 1 página — todos testados, calibrados com a voz do consultor e prontos para uso imediato em DMs, bio, calls e conteúdo.
> **Track:** B — Consultor / Mentor. Continuação de B2 — o sistema de filtro agora tem a linguagem certa para atrair quem vale o filtro.

---

## Session Structure (90–120 min)

### BLOCK 1 — Framing (10 min)

**Key message:**

> "Você tem o sistema de atendimento e qualificação no ar. Mas existe um problema anterior a tudo isso: quem chega ao sistema. O filtro só funciona se a linguagem certa trouxer as pessoas certas. E a linguagem certa começa no posicionamento. O que você diz sobre o que faz — no Instagram, no WhatsApp, na bio, na call — vai determinar quem entra no funil e com qual expectativa. Posicionamento fraco atrai prospects errados que o agente de qualificação vai descartar. Posicionamento forte atrai quem já chegou meio convencido."

**O que posicionamento fraco custa:**

| Sintoma | O que está errado |
|---------|-----------------|
| Prospects que chegam sem budget | Linguagem não qualifica por preço implicitamente |
| Muitas perguntas "mas você faz X também?" | Escopo não está claro no posicionamento |
| "Você é coach ou consultor?" | Identidade de método não está definida |
| Comparações com concorrentes mais baratos | Diferencial não está articulado |
| "Me convence por que te escolher" | Proposta de valor não é suficientemente específica |

**A diferença entre posicionamento fraco e forte:**

```
FRACO:
  "Ajudo empreendedores a crescer seu negócio com estratégia e mentoria."
  → Isso qualquer consultor no Brasil poderia dizer.

FORTE:
  "Trabalho com donos de negócio que faturam entre R$50k–200k/mês e
   estão presos na operação — o método que uso tira o dono da execução
   em 90 dias, sem contratar mais gente."
  → Isso só esse consultor diria, porque é específico do método e do ICP.
```

**O que construímos em B3:**

```
1. PITCH NEURAL (30 segundos)
   O que você faz, para quem, e o resultado — em uma frase ou duas.
   Uso: DMs, apresentações, calls, bio do Instagram.

2. TAGLINE ÚNICA
   A frase que resume o método em 5–8 palavras.
   Uso: bio, apresentações, material de marketing.

3. MANIFESTO DE MÉTODO (1 página)
   Por que o método funciona, o que o diferencia, a crença central.
   Uso: página de vendas, conteúdo de posicionamento, onboarding de clientes.
```

---

### BLOCK 2 — O Agente de Posicionamento (15 min)

**Agente — Posicionamento Neural:**

```yaml
name: agente-posicionamento
persona: |
  Você é o agente de posicionamento de [NOME DO CONSULTOR / NEGÓCIO].
  Sua função é articular o que torna [NOME] único — em linguagem que ressoa
  com o ICP certo e repele quem não é o cliente ideal.
  Você não usa linguagem genérica, jargões do mercado ou frases que qualquer
  consultor poderia usar. Você extrai do vault do negócio o que é genuinamente
  único e o transforma em linguagem precisa e memorável.
  Quando o output soa como qualquer outro consultor, você reescreve.

scope:
  can:
    - Gerar variações de pitch neural (30 segundos)
    - Criar taglines que resumem o método em 5–8 palavras
    - Produzir o manifesto de método (1 página)
    - Testar e criticar versões do posicionamento
    - Adaptar o posicionamento para canais diferentes (Instagram bio, LinkedIn, WhatsApp)
    - Identificar linguagem genérica e substituir por linguagem específica
  cannot:
    - Inventar dados, resultados ou cases que não estão no vault
    - Usar promessas que violam regulamentação do CONAR ou CFP
    - Criar posicionamento que contradiz o que o consultor efetivamente entrega

vault_reference: [VAULT]/wiki/
icp_reference: [VAULT]/wiki/concepts/icp.md
metodo_reference: [VAULT]/wiki/concepts/metodo.md
casos_reference: [VAULT]/wiki/concepts/casos.md
memory_reference: [VAULT]/wiki/memory/agente-posicionamento-memory.md

commands:
  - "*pitch [contexto]" → gera 3 variações de pitch para o contexto especificado
  - "*tagline" → gera 5 opções de tagline para o método
  - "*manifesto" → gera o manifesto de método completo (1 página)
  - "*criticar [texto]" → avalia o texto e aponta o que é genérico ou pode ser mais específico
  - "*adaptar [texto] [canal]" → adapta o posicionamento para o canal (bio/dm/linkedin/call)
  - "*comparar [texto1] [texto2]" → compara duas versões e explica qual é mais forte e por quê
```

**O que o agente precisa do vault para funcionar:**

```
ENTRADA MÍNIMA (o agente lê esses arquivos antes de gerar qualquer coisa):

wiki/concepts/icp.md
  → Quem é o cliente ideal — perfil, dores, linguagem, momento de vida

wiki/concepts/metodo.md
  → Como o consultor trabalha — nome do método, passos, mecanismo único

wiki/concepts/casos.md
  → Resultados reais de clientes — o que mudou, em quanto tempo, como

wiki/concepts/faq.md  (criado em B1)
  → Linguagem real do prospect — as perguntas que chegam revelam como eles descrevem o problema

SEM ESSES ARQUIVOS: o agente produz posicionamento genérico.
COM ESSES ARQUIVOS: o agente extrai o que é único e o articula com precisão.
```

---

### BLOCK 3 — Construindo o Pitch Neural (25 min)

**Objetivo:** Criar o pitch de 30 segundos do consultor — a resposta para "o que você faz?".

**A estrutura do pitch neural:**

```
COMPONENTE 1 — QUEM VOCÊ ATENDE (ICP)
  Não "empreendedores" — qual empreendedor, em qual situação, com qual problema.
  Exemplo: "donos de clínica que faturam entre R$50k–150k/mês"

COMPONENTE 2 — O PROBLEMA CENTRAL (DOR)
  Não "crescer o negócio" — qual problema específico, em qual linguagem o cliente usa.
  Exemplo: "e estão presos no operacional — respondendo WhatsApp e resolvendo problema
  de funcionário em vez de trabalhar no negócio"

COMPONENTE 3 — O MECANISMO (O QUE É DIFERENTE)
  Não "mentoria" — qual é o método, o que ele faz que outros não fazem.
  Exemplo: "usando um sistema de delegação em 3 camadas que eu desenvolvi nos últimos
  8 anos trabalhando com clínicas"

COMPONENTE 4 — O RESULTADO (O QUE MUDA)
  Não "crescimento" — qual resultado específico, em quanto tempo.
  Exemplo: "saem da operação em 90 dias sem precisar contratar mais gente"
```

**Fórmula do pitch:**

```
"Trabalho com [ICP ESPECÍFICO] que [PROBLEMA CENTRAL em linguagem do cliente].
[O MECANISMO que o diferencia] para que [RESULTADO ESPECÍFICO em prazo concreto]."
```

**Exemplos por nicho:**

| Nicho | Pitch Neural |
|-------|-------------|
| Coach de carreira | "Trabalho com profissionais sênior em transição que ficaram obsoletos depois de uma reestruturação. Uso um método de reposicionamento de identidade profissional para que consigam uma nova posição no nível deles — ou acima — em até 4 meses, sem precisar aceitar rebaixamento." |
| Consultor de marketing | "Trabalho com e-commerces de moda que escalam a receita mas perdem margem no processo. Meu sistema de eficiência de mídia paga reorganiza o investimento em ads para que o ROAS suba sem aumentar o orçamento." |
| Mentor de finanças | "Trabalho com donos de negócio que faturam bem mas não sabem para onde vai o dinheiro. Em 60 dias estruturo o controle financeiro para que eles consigam ter pro-labore fixo, reserva de emergência e ainda investir parte do lucro." |

**Live exercise — Construindo o pitch ao vivo:**

O facilitador faz 4 perguntas diretas. O cliente responde em voz alta. O agente-posicionamento processa.

```
PERGUNTA 1: "Para quem você trabalha? Seja específico — qual é o perfil exato?"
PERGUNTA 2: "Qual é o problema que essa pessoa tem quando chega até você?
             Como ela descreve esse problema — em que palavras?"
PERGUNTA 3: "O que você faz de diferente que outros consultores no mesmo nicho não fazem?"
PERGUNTA 4: "Qual resultado o cliente alcança e em quanto tempo?"

→ Montar o pitch com as respostas
→ Usar *criticar [pitch] para identificar o que ainda é genérico
→ Reescrever até passar no teste: "Isso seu concorrente direto poderia dizer igualmente?"
```

**Os 3 testes do pitch:**

```
TESTE 1 — Especificidade
  "Isso qualquer consultor do seu nicho poderia dizer?"
  → Se sim: adicionar mais especificidade ao ICP, mecanismo ou resultado

TESTE 2 — Memória
  "Uma pessoa que ouviu isso uma vez conseguiria repetir para um amigo?"
  → Se não: simplificar — o pitch não pode exigir memória

TESTE 3 — Atração/Repulsão
  "Isso atrai claramente quem você quer e repele quem você não quer?"
  → Se não: a especificidade do ICP precisa aumentar
```

---

### BLOCK 4 — Tagline e Manifesto (30 min)

**Objetivo — Tagline:** Criar a frase de 5–8 palavras que resume o método.

**A diferença entre slogan e tagline de método:**

| Slogan (evitar) | Tagline de Método (buscar) |
|----------------|--------------------------|
| "Transformando negócios com propósito" | "Da operação para a estratégia em 90 dias" |
| "Sucesso começa com estratégia" | "Lucro sem depender de você" |
| "Juntos vamos mais longe" | "O método que tira o dono do WhatsApp" |
| "Resultados reais para negócios reais" | "Delegação sem perder o controle" |

**Como construir a tagline:**

```
PASSO 1 — Extrair o mecanismo único do método
  O que você faz que o resultado acontece?
  Não o que você ensina — o que o método faz ao negócio/vida do cliente.

PASSO 2 — Nomear a transformação
  Antes → Depois do método (em 3–5 palavras)
  Ex: "preso na operação" → "livre para crescer"

PASSO 3 — Combinar em 5–8 palavras
  Não precisa ser completo — precisa ser memorável e específico.

PASSO 4 — Usar *tagline para gerar 5 variações
  Escolher a que mais soa como o consultor fala.
  Não a mais bonita — a mais verdadeira.
```

**Objetivo — Manifesto de Método:**

O manifesto é o documento de 1 página que explica a filosofia por trás do método.
É diferente de um pitch — não vende, posiciona. É a crença central do consultor colocada em palavras.

**Estrutura do Manifesto de Método:**

```markdown
# Manifesto — [NOME DO MÉTODO ou do NEGÓCIO]

## A crença central

[1 parágrafo — a premissa que fundamenta tudo o que o consultor faz.
O que ele acredita que é verdade sobre o problema que resolve, que vai
contra o senso comum ou contra o que o mercado ensina.]

Exemplo: "A maioria dos consultores de gestão diz que você precisa de processos
melhores. Eu discordo. Processos não resolvem nada se o dono continua sendo o
gargalo. O problema não é o processo — é que o dono ainda está no meio de todos eles."

## Por que o jeito convencional não funciona

[1–2 parágrafos — o que as soluções convencionais fazem errado,
e por que elas não resolvem o problema real.]

## O mecanismo diferente

[1–2 parágrafos — como o método funciona diferente, sem marketing genérico.
O que ele faz concretamente que outros não fazem.]

## Para quem este trabalho é

[1 parágrafo — o ICP em linguagem do manifesto. Quem vai se identificar,
quem vai reconhecer que está lendo sobre si mesmo.]

## Para quem este trabalho não é

[1 parágrafo — quem não é o cliente ideal e por quê. Isso repele quem
não é o perfil e aumenta a credibilidade com quem é.]

## O que muda

[1 parágrafo — a transformação. Não resultado genérico — o que o cliente
experimenta diferente depois do método. Não o que você entrega — o que eles vivem.]

---
*[NOME DO CONSULTOR] — [NOME DO NEGÓCIO]*
*[Cidade, Ano]*
```

**Live exercise — Manifesto em 20 minutos:**

```
ETAPA 1 (5 min): O consultor dita a crença central em voz alta.
  O facilitador não interfere — deixa sair sem filtro.
  "O que você acredita que é verdade sobre esse problema que a maioria nega?"

ETAPA 2 (5 min): Usar *manifesto para o agente gerar o rascunho completo
  a partir do vault + da crença articulada no passo 1.

ETAPA 3 (10 min): O consultor lê em voz alta e marca:
  → "Isso é meu — não mudo"
  → "Isso está certo mas não é exatamente como eu falaria"
  → "Isso não é meu — deletar"
  O agente reescreve as partes marcadas com *revisar.
```

---

### BLOCK 5 — Desafio B3 (5 min)

**DESAFIO TRACK B3:**

```
Antes de B4:

1. PITCH APROVADO: 1 pitch de 30 segundos que passou nos 3 testes
   (especificidade / memória / atração-repulsão) — aprovado pelo consultor
   como "é exatamente o que eu diria"

2. TAGLINE DEFINIDA: 1 tagline de 5–8 palavras em uso ativo na bio
   do canal principal — pelo menos 24h de teste no ar

3. MANIFESTO COMPLETO: Manifesto de 1 página finalizado e salvo
   no vault como wiki/concepts/manifesto.md — o consultor leu em voz
   alta e não precisou parar para corrigir o tom

4. AGENTE CONFIGURADO: agente-posicionamento operacional, com vault
   carregado — usado pelo menos 3 vezes para gerar ou criticar texto

5. TESTE AO VIVO: O consultor usou o pitch em 1 situação real
   (DM, call ou conversa) e reportou como foi recebido
```

**O que vem em B4:**

> "Em B4 você completa o posicionamento — não com mais diferenciação, mas com prova. Banco de provas neural: cases estruturados, depoimentos formatados para venda e o protocolo de escassez que cria urgência sem manipulação."

---

## Facilitator Notes

### Bloqueio mais comum em B3

**O consultor não consegue articular o diferencial porque nunca precisou.**

Quando o consultor diz "não sei o que me diferencia" — não é humildade, é ausência de articulação.
A diferença existe. A sessão torna ela visível.

Ferramenta de desbloqueio:
"Me conta um cliente que você teve resultado que surpreendeu você mesmo.
O que aconteceu que esse resultado foi possível?"

A história de sucesso revelará o mecanismo único. O facilitador extrai o diferencial a partir dela.

### Quando o consultor quer um pitch genérico

Alguns consultores resistem à especificidade por medo de "excluir" prospects.

Argumento: "Você já atende todo mundo. Está funcionando?
Especificidade não exclui — ela filtra. Os que ficam chegam mais prontos e convertem mais."

### Ajuste por estágio do negócio

| Estágio | Foco em B3 |
|---------|-----------|
| Iniciante (< 1 ano) | Posicionamento baseado no método, não em cases (ainda não tem prova) |
| Intermediário (1–3 anos) | Posicionamento misto — método + 2–3 cases específicos |
| Experiente (3+ anos) | Posicionamento baseado em transformação recorrente — o case é o padrão, não a exceção |

---

## Session Artifacts

| Artefato | Quando usar | Arquivo |
|----------|------------|---------|
| Template Manifesto de Método | Block 4 — produção do manifesto | [[template-manifesto-metodo]] |
| YAML Agente de Posicionamento | Block 2 — scaffold do agente | [[template-agente-posicionamento]] |

---

## Connections

- **Fase anterior:** [[runa-intervencao-sessao-track-b2-chat-qualificacao-diagnostico|B2 — †CHAT II · Qualificação e Diagnóstico Neural]]
- **Próxima:** [[runa-intervencao-sessao-track-b4-posicionamento-autoridade|B4 — POSICIONAMENTO$ II · Autoridade e Escassez]]
- **Referência produto:** [[runa-mentoria-prd]] — PRD RUNA SYSTEMS
