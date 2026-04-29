---
date: 2026-04-21
tags: [runa-systems, runa-intervencao, track-c, crm, follow-up, automacoes, sessao]
project: runa-systems-global
type: session-template
fase: "5 — ESPECIALIZAÇÃO"
track: "C — Agência / Operações"
codigo: C3
titulo: "Automações II — CRM e Follow-up Neural"
subtitulo: "Sequências de onboarding que rodam sozinhas enquanto você trabalha"
duracao: "90–120 min"
anterior: track-c2-automacoes-n8n-basico
proximo: track-c4-orcamento-proposta-neural
produto: [[runa-mentoria-prd]]
aliases: [sessao-c3, track-c3, crm-followup]
---

# Track C3 — Automações II: CRM e Follow-up Neural

> **Fase 5 — Especialização · Track C · Sessão 3 de 4**
> **Pré-requisito:** C2 concluída — 3 automações básicas ativas. B2 ideal — agente-qualificacao configurado.
> **Resultado desta sessão:** Pipeline de CRM neural com sequências automáticas de onboarding, follow-up e reengajamento.

---

## Objetivo da Sessão

A maioria das agências perde clientes não porque entrega mal — mas porque acompanha mal.
O cliente que não recebe nenhum contato nos primeiros 7 dias já está mentalmente saindo.
O prospect que não foi seguido em 48h já está conversando com outro fornecedor.

O CRM neural não é um software de gestão — é uma arquitetura de relacionamento automatizado.

**Ao final desta sessão, o operador terá:**
- ✅ Pipeline de CRM com 4 estágios e transições automáticas
- ✅ Sequência de onboarding para novos clientes (3 toques em 7 dias)
- ✅ Sequência de follow-up para prospects (5 toques em 10 dias)
- ✅ Alerta de clientes inativos (30 dias sem contato)

---

## Arcos da Sessão

```
Block 1 (10 min)  — A diferença entre CRM e planilha (onde as agências perdem dinheiro)
Block 2 (20 min)  — Arquitetura do pipeline neural: 4 estágios + transições automáticas
Block 3 (30 min)  — Sequência de onboarding: novo cliente → 7 dias de encantamento
Block 4 (25 min)  — Sequência de follow-up: prospect frio → reaquecimento
Block 5 (5 min)   — Alerta de inativos + desafio C3
```

---

## Block 1 — A Diferença Entre CRM e Planilha

**Duração:** 10 min | **Formato:** Diagnóstico + framing

### Onde as agências perdem dinheiro

```
PROBLEMA 1 — Follow-up manual
  "Vou ligar para o João amanhã" → nunca acontece → João fecha com outro
  Custo estimado: 1–2 projetos perdidos por mês = R$5k–R$20k/ano

PROBLEMA 2 — Onboarding improvisado
  Cliente fecha → operador lembra dele quando já está atrasado → cliente insatisfeito
  Custo estimado: churning de 30% dos clientes no primeiro mês

PROBLEMA 3 — Sem visibilidade do pipeline
  "Tenho uns 5 prospects em andamento" (sem saber em qual estágio está cada um)
  Custo estimado: previsão de receita impossível → decisões de contratação erradas
```

### O que o CRM neural faz que a planilha não faz

| Função | Planilha | CRM Neural |
|--------|---------|-----------|
| Registrar contatos | ✅ | ✅ |
| Mover lead entre estágios | Manual | Automático (por ação ou critério) |
| Enviar follow-up no prazo | Manual (memória) | Automático (Schedule n8n) |
| Notificar o operador de ação necessária | Manual | Automático |
| Gerar relatório de pipeline | Manual | Automático (semanal) |
| Acionar agentes do vault | Não | Sim (via n8n → vault) |

### O que o CRM neural NÃO é

- Não é Salesforce ou HubSpot
- Não requer software caro
- Não é um projeto de 3 meses

**O CRM neural é:** Google Sheets como banco de dados + n8n como motor de automação + agentes do vault como conteúdo.

---

## Block 2 — Arquitetura do Pipeline Neural

**Duração:** 20 min | **Formato:** Mapeamento ao vivo

### Os 4 estágios do pipeline

```
ESTÁGIO 1 — PROSPECT
  Definição: alguém que demonstrou interesse mas ainda não foi qualificado
  Origem: landing page (C1) / indicação / DM / evento
  Próxima ação: qualificação pelo agente-qualificacao (B2)
  Critério de avanço: responde as 3 perguntas de qualificação

ESTÁGIO 2 — QUALIFICADO
  Definição: prospect classificado como QUENTE pelo agente-qualificacao
  Próxima ação: call com o operador / envio de proposta
  Critério de avanço: call realizada E operador marca como avançar
  Trigger automático: prova social pelo agente-prova-social (B4)

ESTÁGIO 3 — PROPOSTA ENVIADA
  Definição: proposta ou orçamento enviado, aguardando decisão
  Próxima ação: follow-up 48h + follow-up 5 dias + follow-up 10 dias
  Critério de avanço: cliente confirma via mensagem ou e-mail
  Critério de queda: 15 dias sem resposta → volta para QUALIFICADO com tag "cold"

ESTÁGIO 4 — CLIENTE
  Definição: contrato fechado / pagamento recebido
  Próxima ação: onboarding 7 dias (automático)
  Critério de saída: projeto entregue / contrato encerrado → ALUMNI
```

### Estrutura da planilha CRM neural

```
Planilha: [NEGÓCIO]-crm
Abas:
  Pipeline        → todos os contatos e seus estágios
  Interações      → histórico de todos os contatos realizados
  Onboarding      → controle de sequências de onboarding ativas
  Follow-up       → controle de sequências de follow-up ativas
  Alumni          → clientes anteriores (reativação futura)
```

**Aba Pipeline — colunas obrigatórias:**
```
A: ID
B: Nome
C: E-mail
D: WhatsApp
E: Estágio (PROSPECT / QUALIFICADO / PROPOSTA / CLIENTE / ALUMNI)
F: Data de entrada no estágio atual
G: Próxima ação (texto livre)
H: Data da próxima ação (YYYY-MM-DD)
I: Score de qualificação (QUENTE / MORNO / FRIO)
J: Origem (landing-page / indicação / DM / evento)
K: Valor estimado do contrato (R$)
L: Observações
```

### Transições automáticas

```
n8n verifica a planilha a cada hora:

Regra 1: Estágio = PROPOSTA E Data_entrada < hoje - 15 dias E sem resposta
  → Mover para QUALIFICADO + tag "cold"
  → Notificar operador: "Proposta de [NOME] venceu — dar baixa ou reativar"

Regra 2: Estágio = QUALIFICADO E Data_entrada < hoje - 30 dias E sem ação
  → Tag "inativo" + notificar operador
  → Acionar sequência de reengajamento

Regra 3: Estágio = CLIENTE E Onboarding = "não iniciado"
  → Iniciar sequência de onboarding
  → Marcar Onboarding = "em andamento"
```

---

## Block 3 — Sequência de Onboarding

**Duração:** 30 min | **Formato:** Construção ao vivo

### Os 7 dias que determinam a retenção

Pesquisa de comportamento de clientes B2B:
- **60%** das decisões de renovação são tomadas nas primeiras 2 semanas
- **40%** dos cancelamentos acontecem com clientes que nunca receberam onboarding estruturado

A sequência de onboarding não entrega o serviço — prepara o cliente para receber o serviço.

### Sequência de 3 toques em 7 dias

```
DIA 0 (imediato após fechamento):
  Toque 1 — Boas-vindas + próximos passos
  Conteúdo: confirmação do fechamento + o que acontece nas próximas 48h
  Canal: WhatsApp (prioridade) ou e-mail

DIA 2:
  Toque 2 — Primeiro entregável ou check-in
  Conteúdo: algo de valor concreto (diagnóstico inicial / mapa do projeto / acesso ao vault)
  Canal: mesmo canal do toque 1

DIA 7:
  Toque 3 — Check-in de satisfação
  Conteúdo: 2 perguntas abertas sobre expectativas + próximo marco
  Canal: WhatsApp
```

### Construção no n8n: automação de onboarding

**Trigger:**
```
Google Sheets → Watch for Changes
  Sheet: Pipeline
  Column: Estágio
  Detect: mudança de qualquer valor para "CLIENTE"
```

**Fluxo Toque 1 (imediato):**
```
→ Extrair nome, WhatsApp, e-mail do lead
→ Code: montar mensagem personalizada

Mensagem:
"Olá, [NOME]!

Bem-vindo(a) ao [NOME DO NEGÓCIO]. 🎯

Nos próximos [X] dias vamos trabalhar em [OBJETIVO DO PROJETO].

As próximas 48h:
→ [AÇÃO 1 — ex: envio do questionário de briefing]
→ [AÇÃO 2 — ex: acesso à área do cliente]
→ [AÇÃO 3 — ex: call de alinhamento]

Qualquer dúvida, estou aqui.
[NOME DO OPERADOR]"

→ Enviar via WhatsApp / Gmail
→ Atualizar planilha: Onboarding = "em andamento", Onboarding_inicio = hoje
→ Criar entradas no Follow-up aba com datas dos toques 2 e 3
```

**Fluxo Toque 2 (dia 2):**
```
Trigger: Schedule → todo dia 08h
  → Ler aba Follow-up: filtrar Toque=2 AND Data=hoje
  → Para cada linha: buscar dados na aba Pipeline
  → Enviar mensagem personalizada do toque 2
  → Marcar toque 2 como enviado
```

**Fluxo Toque 3 (dia 7 — check-in):**
```
Trigger: Schedule → todo dia 09h
  → Ler aba Follow-up: filtrar Toque=3 AND Data=hoje
  → Para cada linha: enviar mensagem de check-in

Mensagem do check-in:
"[NOME], estamos no 7º dia.

Duas perguntas rápidas:

1. O que está funcionando melhor do que você esperava?
2. O que ainda não ficou claro ou precisa de ajuste?

Sua resposta me ajuda a calibrar o trabalho para os próximos [X] dias.

[NOME DO OPERADOR]"
```

### Critérios de aprovação do onboarding

| Critério | Verificação |
|---------|------------|
| Toque 1 enviado em menos de 1 hora após fechamento | Log do n8n mostra execução no mesmo dia |
| Mensagens são personalizadas com nome do cliente | Sem "[NOME]" genérico |
| Toque 3 inclui pergunta aberta (não pesquisa de satisfação 1–5) | Sim/Não |
| Respostas do check-in são registradas na planilha | Coluna "resposta_check-in" preenchida |

---

## Block 4 — Sequência de Follow-up para Prospects

**Duração:** 25 min | **Formato:** Construção ao vivo

### O problema do silêncio

Prospect recebe proposta → operador espera resposta → 5 dias de silêncio → operador perde confiança → não entra em contato → prospect fecha com outro.

**A realidade:** 80% dos prospects que fecham fazem isso depois do 3º contato.
A maioria dos operadores desiste no 1º contato.

### Sequência de 5 toques em 10 dias

```
DIA 0 — Proposta enviada (manual pelo operador)
  → n8n detecta mudança de estágio para "PROPOSTA"
  → Inicia contagem dos 5 toques

DIA 2 — Toque 1: verificar recebimento
  "Olá [NOME], queria confirmar se recebeu a proposta.
   Se tiver alguma dúvida ou quiser ajustar algo, estou aqui."

DIA 5 — Toque 2: valor adicional
  "Enquanto aguardo seu retorno, pensei em algo que pode ser útil:
   [INSIGHT RELEVANTE PARA O PROBLEMA DO PROSPECT — 2–3 linhas]
   Se quiser, posso incluir isso na proposta sem custo adicional."

DIA 8 — Toque 3: urgência real (se existir)
  "Esta semana estou finalizando o calendário do próximo ciclo.
   Tenho [N] vaga(s) disponível(is) para início em [MÊS].
   Se quiser garantir a sua: [CTA]"

DIA 12 — Toque 4: última tentativa
  "Não quero incomodar, mas também não quero perder o contato.
   Se a proposta não está no momento certo, tudo bem — posso guardar tudo e retomar quando fizer sentido.
   Se quiser conversar mais um pouco: [CTA]"

DIA 15 — Toque 5: encerramento formal
  "Estou encerrando o acompanhamento desta proposta por ora.
   Fico à disposição quando o momento for certo.
   Boa sorte no projeto!"
  → n8n move para QUALIFICADO com tag "cold"
```

### Construção no n8n: automação de follow-up

**Trigger de início:**
```
Google Sheets → Watch for Changes
  Column E: Estágio muda para "PROPOSTA ENVIADA"
  → Criar 5 entradas na aba Follow-up com as datas calculadas
  → Campos: ID_prospect, Toque, Data, Status (pendente)
```

**Fluxo diário de follow-up:**
```
Schedule → todo dia 10h
  → Ler aba Follow-up: Toque pendente AND Data = hoje AND Status = "pendente"
  → Para cada linha:
      → Buscar dados do prospect na aba Pipeline
      → Selecionar template de mensagem pelo número do toque
      → Personalizar com nome e dados do prospect
      → Enviar via WhatsApp ou e-mail
      → Marcar toque como "enviado"
      → Registrar na aba Interações
```

**Detecção de resposta:**
```
Se prospect responder no WhatsApp (Evolution API webhook):
  → Verificar se número está na aba Follow-up com status "pendente"
  → SE SIM: marcar todos os toques restantes como "cancelado — respondeu"
  → Notificar operador: "[NOME] respondeu — ação manual necessária"
  → Operador avalia e move para próximo estágio

Se não há resposta após toque 5:
  → Mover estágio para QUALIFICADO
  → Adicionar tag "cold"
  → Adicionar à sequência de reengajamento (30 dias depois)
```

### Templates dos 5 toques (agente-copy gera versões personalizadas)

```
*dm whatsapp "follow-up toque 1 — verificar recebimento de proposta"
*dm whatsapp "follow-up toque 2 — valor adicional para [ICP]"
*dm whatsapp "follow-up toque 3 — urgência de vaga"
*dm whatsapp "follow-up toque 4 — última tentativa gentil"
*dm whatsapp "follow-up toque 5 — encerramento formal"
```

---

## Block 5 — Alerta de Inativos + Desafio C3

**Duração:** 5 min | **Formato:** Configuração rápida + checklist

### Alerta de clientes inativos

```
Schedule → toda segunda às 09h
  → Ler aba Pipeline: Estágio = CLIENTE
  → Filtrar: ultima_interacao < hoje - 30 dias
  → Para cada cliente inativo:
      → Notificar operador via WhatsApp / Telegram
      → Mensagem: "⚠️ [NOME] está há [X] dias sem contato. Hora de um check-in?"
  → Registrar na aba Interações: "alerta de inatividade gerado"
```

### Desafio C3

**Prazo:** 48h após a sessão

**5 critérios de conclusão:**

```
[ ] Planilha CRM criada com as 5 abas e colunas obrigatórias
[ ] Automação de onboarding: novo cliente → toque 1 enviado automaticamente
[ ] Sequência de follow-up configurada para pelo menos 1 prospect ativo
[ ] Alerta de inativos rodando (testar manualmente: executar o workflow)
[ ] Primeiro prospect ou cliente movido no pipeline com transição automática registrada
```

---

## Artefatos da Sessão

| Tipo | Documento | Status |
|------|-----------|--------|
| Template planilha | [[template-crm-neural-sheets]] | 🔲 A criar |
| Template fluxo | [[template-fluxo-n8n-onboarding]] | 🔲 A criar |
| Template fluxo | [[template-fluxo-n8n-followup]] | 🔲 A criar |

---

## Notas para o Facilitador

### Quando o operador usa outro CRM (Pipedrive, RD Station, etc.)

Se o operador já tem um CRM pago:
1. Não migrar — usar o que existe como fonte de verdade
2. Conectar o n8n ao CRM via API (Pipedrive e RD têm APIs bem documentadas)
3. O fluxo permanece idêntico — apenas a fonte dos dados muda

Vantagem do CRM pago: interface mais visual, relatórios nativos.
Desvantagem: custo mensal + complexidade de configuração de webhooks.

### Quando o operador não tem WhatsApp Business API

Alternativas para comunicação nas sequências:
1. **E-mail (Gmail)** — menos fricção para onboarding formal
2. **Telegram** — se o cliente usa
3. **WhatsApp manual** — n8n notifica o OPERADOR, que envia manualmente

O fluxo de onboarding funciona em qualquer canal — o canal muda, a lógica não.

### Sobre o conteúdo das mensagens

Os templates de mensagem desta sessão são genéricos.
O agente-copy (C1) gera versões específicas para o vault do operador.
Antes de ativar as sequências com clientes reais, o operador deve:
1. Rodar `*dm whatsapp "onboarding toque 1"` no agente-copy
2. Aprovar o texto gerado
3. Substituir o template genérico pelo texto aprovado no n8n

---

## Conexões

- **Track C:** [[runa-intervencao-sessao-track-c2-automacoes-n8n-basico|C2 (automações básicas)]] → C3 (CRM) → [[track-c4-orcamento-proposta-neural|C4 (orçamento)]]
- **Integração com Track B:**
  - `agente-qualificacao` (B2) → classifica prospect → n8n move no pipeline
  - `agente-prova-social` (B4) → ativado quando prospect avança para QUALIFICADO
- **Stack C3:** Google Sheets (CRM) + n8n (automação) + Evolution API / Gmail (canais) + agente-copy (conteúdo)
- **Produto ensinado:** CRM como arquitetura, não como software — qualquer ferramenta implementa a mesma lógica
