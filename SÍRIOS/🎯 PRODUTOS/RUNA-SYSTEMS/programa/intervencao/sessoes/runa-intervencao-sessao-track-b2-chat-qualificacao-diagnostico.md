---
date: 2026-04-21
tags: [runa-intervencao, mentoria, track-b, consultor, mentor, chat-neural, qualificacao, diagnostico, especializacao]
project: runa-systems-global
type: lesson-structure
fase: 5 — ESPECIALIZAÇÃO
track: B — Consultor / Mentor
codigo: B2
titulo: "†CHAT II — Qualificação e Diagnóstico Neural de Prospects"
anterior: track-b1-chat-atendimento-neural
proximo: track-b3-posicionamento-diferenciacao
---

# Runa Intervenção — Track B2: †CHAT II — Qualificação e Diagnóstico Neural de Prospects

> **Purpose:** Criar o sistema de qualificação neural que filtra prospects automaticamente antes de qualquer contato humano do consultor. O agente conduz um fluxo de descoberta estruturado, coleta dados de diagnóstico e entrega ao consultor apenas quem está pronto para comprar — com contexto completo.
> **Output:** Fluxo de qualificação operacional com 5 perguntas de diagnóstico + agente de qualificação configurado + template de entrega ao consultor com diagnóstico estruturado.
> **Track:** B — Consultor / Mentor. Continuação de B1 — o agente de atendimento agora qualifica, não apenas responde.

---

## Session Structure (90–120 min)

### BLOCK 1 — Framing (10 min)

**Key message:**

> "Em B1 você criou o filtro de nível 1 — o agente responde o que pode responder. Mas ainda existe um problema: quem passa pela triagem inicial ainda pode ser um prospect completamente fora do perfil. Você está tendo calls com pessoas que não têm o budget, não têm o timing, não têm o problema que você resolve. O agente de qualificação resolve isso. Ele faz as perguntas difíceis antes de você. Você só entra quando o prospect já provou que vale seu tempo."

**O custo de prospects desqualificados:**

| Situação | Impacto real |
|---------|------------|
| Call de 60 min com prospect fora do budget | 1h perdida — mais o preparo e o contexto mental |
| Prospect sem clareza do problema | Call vira consultoria gratuita — sem conversão |
| Timing errado ("vou pensar e volto") | Você investe energia em alguém que não está pronto |
| Prospect esperando solução mágica | Insatisfação garantida — mesmo comprando |
| Ausência de qualificação | Você filtra na call — o lugar mais caro para filtrar |

**O que a qualificação neural faz:**

```
PROSPECT ENTRA
   ↓
[ATENDIMENTO B1]
   Pergunta frequente? → Responde (FAQ)
   Precisa de mais informação? → Inicia qualificação
   ↓
[QUALIFICAÇÃO B2]
   Conduz fluxo de descoberta (5 perguntas)
   Coleta: problema, momento, recurso, comprometimento, expectativa
   Classifica: QUENTE / MORNO / FRIO
   ↓
[ENTREGA AO CONSULTOR]
   QUENTE → Contexto completo + recomendação de próximo passo
   MORNO → Nurture (conteúdo + follow-up agendado)
   FRIO  → Educação (indica recurso gratuito, não prioriza call)
```

---

### BLOCK 2 — As 5 Perguntas de Diagnóstico (20 min)

**Objetivo:** Definir o fluxo de descoberta específico do negócio do consultor — as 5 perguntas que revelam se um prospect é o cliente ideal.

**O framework das 5 dimensões de qualificação:**

```
DIMENSÃO 1 — PROBLEMA
"O que está acontecendo no seu negócio / vida que te trouxe até aqui?"
→ Revela: se o problema que o prospect tem é o problema que o consultor resolve
→ Sinal QUENTE: problema específico, na linguagem do método do consultor
→ Sinal FRIO: problema vago, genérico, ou completamente fora do escopo

DIMENSÃO 2 — MOMENTO
"Há quanto tempo você está com isso? O que já tentou?"
→ Revela: urgência e sofisticação do prospect
→ Sinal QUENTE: problema crônico, já tentou soluções, está disposto a investir
→ Sinal FRIO: problema recente ou nenhuma tentativa anterior (não está pronto)

DIMENSÃO 3 — RECURSO
"Já investiu em mentoria / consultoria antes? Está disposto a investir nisso agora?"
→ Revela: capacidade financeira e mentalidade de investimento
→ Sinal QUENTE: já investiu antes, sabe o valor, está alocando recurso
→ Sinal FRIO: nunca investiu, espera solução gratuita, hesita ao ouvir "investimento"

DIMENSÃO 4 — COMPROMETIMENTO
"Como está a sua disponibilidade para trabalhar isso com dedicação?"
→ Revela: se o prospect tem tempo, foco e comprometimento para aplicar
→ Sinal QUENTE: tem tempo definido, sabe o que precisa pausar, está decidido
→ Sinal FRIO: "depende", "estou muito ocupado", "vou ver como fica"

DIMENSÃO 5 — EXPECTATIVA
"Qual é o resultado que você precisa alcançar nos próximos 90 dias?"
→ Revela: se a expectativa é compatível com o que o método entrega
→ Sinal QUENTE: resultado específico, factível, dentro do escopo do programa
→ Sinal FRIO: expectativa inflada, prazo irreal, ou resultado que o consultor não entrega
```

**Personalização por perfil do consultor:**

| Nicho | Adaptação das perguntas |
|-------|------------------------|
| Coach de carreira | Dimensão 3 = histórico de investimento em desenvolvimento profissional |
| Consultor de finanças | Dimensão 5 = meta financeira específica com prazo e número |
| Mentor de negócios | Dimensão 1 = ponto de inflexão do negócio (o que mudou para vir buscar ajuda) |
| Terapeuta / psicólogo | Dimensão 4 = disponibilidade emocional e comprometimento com o processo |
| Consultor de marketing | Dimensão 2 = o que já foi testado + qual foi o resultado de cada tentativa |

**Live exercise — Calibrando as 5 perguntas:**

O facilitador guia o consultor nas 5 dimensões, adaptando cada pergunta para o nicho:

1. "Qual é a Pergunta 1 que você faria em uma call de diagnóstico real? Em suas palavras."
2. "Como você saberia que a resposta é um sinal QUENTE? O que você ouve nos clientes ideais?"
3. "Como você saberia que é um sinal FRIO? O que te faz pensar 'esse não vai comprar'?"
4. Registrar no agente-qualificacao.yaml as versões personalizadas
5. Testar: "Se eu fosse seu prospect e respondesse X, qual seria a classificação?"

---

### BLOCK 3 — Construindo o Agente de Qualificação (25 min)

**Agente — Qualificação e Diagnóstico Neural:**

```yaml
name: agente-qualificacao
persona: |
  Você é o agente de qualificação de [NOME DO CONSULTOR / NEGÓCIO].
  Sua função é conduzir uma conversa de descoberta estruturada com prospects
  que demonstraram interesse no trabalho de [NOME].
  Você não vende — você diagnostica. Você faz perguntas, ouve as respostas,
  e determina se esse prospect é o cliente certo para [NOME] neste momento.
  Você é direto, empático e não perde tempo com prospects fora do perfil.
  Ao final do fluxo, você produz um diagnóstico estruturado para [NOME].

identidade:
  negocio: [NOME DO NEGÓCIO]
  consultor: [NOME DO CONSULTOR]
  tom: [ex: "direto e acolhedor — faz perguntas difíceis com leveza"]
  metodo: [breve descrição do método ou programa principal]

fluxo_de_qualificacao:
  abertura: |
    "Olá [NOME]! Fico feliz que você entrou em contato.
    Antes de falarmos sobre como posso ajudar, preciso entender melhor
    sua situação — assim consigo te dizer se o meu trabalho faz sentido
    para o que você está vivendo. Pode me contar um pouco sobre você?"

  perguntas:
    p1_problema:
      texto: "[PERGUNTA PERSONALIZADA — DIMENSÃO 1]"
      sinais_quentes: [lista de padrões de resposta = prospect qualificado]
      sinais_frios: [lista de padrões de resposta = prospect fora do perfil]

    p2_momento:
      texto: "[PERGUNTA PERSONALIZADA — DIMENSÃO 2]"
      sinais_quentes: [lista]
      sinais_frios: [lista]

    p3_recurso:
      texto: "[PERGUNTA PERSONALIZADA — DIMENSÃO 3]"
      sinais_quentes: [lista]
      sinais_frios: [lista]

    p4_comprometimento:
      texto: "[PERGUNTA PERSONALIZADA — DIMENSÃO 4]"
      sinais_quentes: [lista]
      sinais_frios: [lista]

    p5_expectativa:
      texto: "[PERGUNTA PERSONALIZADA — DIMENSÃO 5]"
      sinais_quentes: [lista]
      sinais_frios: [lista]

classificacao:
  QUENTE:
    criterio: "3+ dimensões com sinal QUENTE, incluindo obrigatoriamente Recurso e Comprometimento"
    acao: "Escalar imediatamente para [NOME] com diagnóstico completo"
    mensagem_para_prospect: |
      "Com base no que você me contou, parece que existe um fit real entre
      o que você precisa e o que [NOME] entrega. Vou passar seu diagnóstico
      para [NOME] — ele retorna em [PRAZO] para vocês conversarem."
  MORNO:
    criterio: "2 dimensões com sinal QUENTE, Recurso ou Comprometimento ambíguo"
    acao: "Nurture — enviar conteúdo específico + follow-up em [PRAZO DEFINIDO]"
    mensagem_para_prospect: |
      "Entendi sua situação. Vejo que você ainda está no processo de decidir
      se este é o momento certo. Vou te enviar [CONTEÚDO ESPECÍFICO] que pode
      ajudar a clarear isso. Posso te retornar em [PRAZO] para ver como você está?"
  FRIO:
    criterio: "1 ou nenhuma dimensão com sinal QUENTE, ou Recurso claramente abaixo"
    acao: "Educação — indicar recurso gratuito, não priorizar call"
    mensagem_para_prospect: |
      "Obrigado por compartilhar sua situação. Pelo que entendi, talvez o melhor
      ponto de partida para você agora seja [RECURSO GRATUITO]. Quando você tiver
      avançado nisso, pode voltar para a gente — estaremos aqui."

scope:
  can:
    - Conduzir o fluxo de 5 perguntas em ordem
    - Adaptar o tom da conversa sem alterar as perguntas core
    - Classificar o prospect com base nos sinais definidos
    - Produzir o diagnóstico estruturado para o consultor
    - Enviar conteúdo de nurture para prospects MORNO
    - Recomendar recursos gratuitos para prospects FRIO
    - Registrar o diagnóstico no wiki/log.md do vault
  cannot:
    - Fazer promessa de resultado ou garantia de vaga
    - Alterar o fluxo de perguntas por pressão do prospect
    - Classificar como QUENTE alguém sem os critérios mínimos atendidos
    - Fechar qualquer compromisso antes da consulta com [NOME]

vault_reference: [VAULT]/wiki/
memory_reference: [VAULT]/wiki/memory/agente-qualificacao-memory.md

commands:
  - "*qualificar [prospect]" → inicia o fluxo de descoberta para um prospect específico
  - "*diagnostico [respostas]" → gera o diagnóstico estruturado a partir das respostas coletadas
  - "*classificar [respostas]" → classifica o prospect (QUENTE/MORNO/FRIO) com justificativa
  - "*nurture [prospect] [tema]" → gera mensagem de nurture personalizada para o tema
  - "*historico [prospect]" → recupera qualificações anteriores do mesmo prospect
```

**A diferença entre atendimento (B1) e qualificação (B2):**

```
ATENDIMENTO (B1):
  → Pergunta chegou → responde com FAQ
  → Não sabe a resposta → escala
  → Urgência/preço especial → escala
  Modo: REATIVO

QUALIFICAÇÃO (B2):
  → Interesse demonstrado → inicia fluxo estruturado
  → Faz as 5 perguntas em sequência
  → Classifica e age conforme a classificação
  → Só escala quem está QUENTE
  Modo: PROATIVO
```

---

### BLOCK 4 — Template de Diagnóstico para o Consultor (20 min)

**Objetivo:** Criar o documento estruturado que o consultor recebe após cada qualificação — para que ele chegue na call sabendo tudo que precisa saber.

**Formato de diagnóstico — o que o consultor recebe:**

```markdown
# Diagnóstico de Prospect — Agente de Qualificação

📅 [DATA E HORA]
📱 Canal: [Instagram DM / WhatsApp / E-mail]
👤 Prospect: [nome/perfil]
🎯 Classificação: **QUENTE** / **MORNO** / **FRIO**

---

## Resumo executivo

[3–5 linhas: quem é a pessoa, qual o problema principal, por que está aqui agora,
nível de urgência percebido]

## Diagnóstico por dimensão

| Dimensão | Resposta | Sinal |
|----------|---------|-------|
| Problema | [o que o prospect disse] | 🟢 QUENTE / 🟡 MORNO / 🔴 FRIO |
| Momento | [o que o prospect disse] | 🟢 / 🟡 / 🔴 |
| Recurso | [o que o prospect disse] | 🟢 / 🟡 / 🔴 |
| Comprometimento | [o que o prospect disse] | 🟢 / 🟡 / 🔴 |
| Expectativa | [o que o prospect disse] | 🟢 / 🟡 / 🔴 |

## Justificativa da classificação

[Por que foi classificado como QUENTE/MORNO/FRIO — sinais específicos que
determinaram a classificação, incluindo o que foi dito e o que não foi dito]

## Pontos de atenção para a call

[O que o consultor deve explorar na conversa — onde existem ambiguidades ou
onde o prospect pode ter dado respostas que merecem aprofundamento]

## Expectativa do prospect para a call

[O que o prospect está esperando da conversa com o consultor — para que o
consultor possa calibrar o tom e o foco antes de entrar]

## Recomendação de próximo passo

[ ] Agendar call de 30 min — prospect QUENTE, prioridade alta
[ ] Call de diagnóstico mais longa (60 min) — caso complexo
[ ] Enviar proposta antes da call — prospect já viu o formato, quer os números
[ ] Follow-up em [PRAZO] — prospect MORNO, nurture em andamento

## Transcrição resumida (se necessário)

[Principais trechos da conversa — não a transcrição completa, mas as respostas
mais reveladoras para cada dimensão]
```

**Onde o consultor acessa o diagnóstico:**

```
OPÇÃO 1 — WhatsApp pessoal
  Agente envia o diagnóstico formatado via WhatsApp direto do consultor

OPÇÃO 2 — E-mail
  Agente envia e-mail de diagnóstico para o e-mail do consultor

OPÇÃO 3 — Vault (wiki/log.md)
  Agente registra no log + notifica por WhatsApp que o diagnóstico está no vault

OPÇÃO 4 — Pasta de diagnósticos
  Agente cria arquivo markdown em wiki/diagnósticos/[DATA]-[PROSPECT].md
  Consultor acessa via vault ou busca por nome
```

**Quando o consultor recebe o diagnóstico:**

```
QUENTE → Imediatamente após a qualificação (urgência: consultor responde em até 4h)
MORNO  → Resumo consolidado ao final do dia (sem urgência)
FRIO   → Registrado no log, sem notificação ativa (não precisa de ação imediata)
```

---

### BLOCK 5 — Desafio B2 (5 min)

**DESAFIO TRACK B2:**

```
Antes de B3:

1. FLUXO DEFINIDO: 5 perguntas de qualificação específicas para o negócio
   — com sinais QUENTE/MORNO/FRIO definidos para cada dimensão

2. AGENTE CONFIGURADO: agente-qualificacao.yaml completo com personas,
   fluxo, classificação e comandos operacionais

3. QUALIFICAÇÃO TESTADA: 3 simulações ao vivo —
   um prospect QUENTE, um MORNO, um FRIO —
   o agente produziu diagnóstico correto para os 3 sem inventar

4. DIAGNÓSTICO ENTREGUE: O consultor recebeu 1 diagnóstico real formatado
   (pode ser de uma qualificação simulada) e confirmou:
   "Com isso eu saberia o que fazer antes de entrar na call"

5. INTEGRAÇÃO B1+B2: O agente de atendimento (B1) agora encaminha
   para o fluxo de qualificação (B2) quando o prospect demonstra interesse —
   sem intervenção do consultor entre as duas etapas
```

**O que vem em B3:**

> "Com o sistema de atendimento e qualificação no ar, você tem o filtro. Mas filtro não vende — posicionamento vende. Em B3 você vai criar o pitch neural, a tagline e o manifesto do negócio. O que você diz sobre o que faz vai determinar quem entra nesse funil e com qual expectativa."

---

## Facilitator Notes

### Adaptação por volume de prospects

| Volume mensal | Ajuste em B2 |
|--------------|-------------|
| < 20 prospects | Qualificação semi-automatizada — agente coleta, consultor valida antes de classificar |
| 20–100 prospects | Qualificação totalmente automatizada com revisão semanal do consultor |
| 100+ prospects | Qualificação em camadas — B1 filtra, B2 aprofunda os que passaram |

### O erro mais comum em B2

**Perguntas genéricas demais** — o agente faz perguntas que não revelam informação útil.

Exemplo de pergunta ruim: "Por que você quer trabalhar comigo?"
Exemplo de pergunta boa: "O que aconteceu no seu negócio nos últimos 3 meses que te fez chegar até aqui agora?"

A diferença: a segunda tem contexto temporal, é específica e revela urgência.

Solução: para cada pergunta, o facilitador deve perguntar:
"O que você aprende de diferente com essa pergunta comparada com não perguntar nada?"
Se a resposta for vaga, reformular.

### Sinal de qualificação bem calibrada

O consultor abre os diagnósticos QUENTE e pensa: "Essa pessoa eu preciso falar logo."
Abre os diagnósticos MORNO e pensa: "Interessante — vou mandar o [conteúdo X] para ela."
Olha para os diagnósticos FRIO e pensa: "Correto — não era a hora certa."

Se o consultor discordar da classificação regularmente → revisitar os sinais QUENTE/MORNO/FRIO.

### Integração com B1

O agente de atendimento (B1) e o agente de qualificação (B2) operam em sequência:

```
B1 [agente-atendimento]:
  → Prospect pergunta algo que não é FAQ → "Quer saber mais sobre como posso te ajudar?"
  → Prospect aceita → transfere para o fluxo B2

B2 [agente-qualificacao]:
  → Recebe o prospect com o contexto do que foi dito em B1
  → Conduz o fluxo de 5 perguntas
  → Classifica e age

Regra: B2 NUNCA inicia do zero — sempre recebe o contexto do histórico de B1
```

---

## Session Artifacts

| Artefato | Quando usar | Arquivo |
|----------|------------|---------|
| Template de Diagnóstico de Prospect | Block 4 — formato de entrega | Incluído no doc acima |
| YAML Agente de Qualificação | Block 3 — scaffold do agente | [[template-agente-qualificacao]] |

---

## Connections

- **Fase anterior:** [[runa-intervencao-sessao-track-b1-chat-atendimento-neural|B1 — †CHAT I · Atendimento Neural de Primeiro Nível]]
- **Próxima:** [[runa-intervencao-sessao-track-b3-posicionamento-diferenciacao|B3 — POSICIONAMENTO$ I · Diferenciação Neural]]
- **Referência produto:** [[runa-mentoria-prd]] — PRD RUNA SYSTEMS
