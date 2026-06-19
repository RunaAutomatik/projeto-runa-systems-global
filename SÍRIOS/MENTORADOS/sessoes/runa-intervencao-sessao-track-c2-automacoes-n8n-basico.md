---
date: 2026-04-21
tags: [runa-systems, runa-intervencao, track-c, n8n, automacoes, sessao]
project: runa-systems-global
type: session-template
fase: "5 — ESPECIALIZAÇÃO"
track: "C — Agência / Operações"
codigo: C2
titulo: "Automações I — n8n: Triggers e Fluxos Básicos"
subtitulo: "3 automações no ar: do gatilho ao entregável em uma sessão"
duracao: "90–120 min"
anterior: track-c1-site-landing-page
proximo: track-c3-automacoes-crm-followup
produto: [[runa-mentoria-prd]]
aliases: [sessao-c2, track-c2, automacoes-n8n]
---

# Track C2 — Automações I: n8n Triggers e Fluxos Básicos

> **Fase 5 — Especialização · Track C · Sessão 2 de 4**
> **Pré-requisito:** C1 concluída — landing page no ar. Idealmente B1/B2 concluídas — agentes de atendimento e qualificação ativos.
> **Resultado desta sessão:** 3 automações funcionando — do gatilho ao entregável — sem escrever uma linha de código.

---

## Objetivo da Sessão

A maioria das agências opera com processos manuais disfarçados de sistemas.
O dono ou a equipe repete as mesmas ações toda semana porque "funciona assim".
O problema não é falta de ferramenta — é falta de arquitetura de automação.

Nesta sessão o operador constrói:
- **Automação 1:** Notificação de novo lead (landing page → WhatsApp / Telegram do operador)
- **Automação 2:** Resposta automática de boas-vindas (formulário / WhatsApp → e-mail ou DM)
- **Automação 3:** Alerta de tarefa pendente (gatilho de tempo → notificação do operador)

**Ao final desta sessão, o operador terá:**
- ✅ Conta n8n configurada (Cloud ou self-hosted via Railway)
- ✅ 3 fluxos funcionando com triggers reais
- ✅ Entendimento da lógica gatilho → condição → ação
- ✅ Base para construir o CRM neural em C3

---

## Arcos da Sessão

```
Block 1 (10 min)  — Por que automação antes de ferramenta (a armadilha do Zapier eterno)
Block 2 (20 min)  — Anatomia do n8n: nós, triggers, credenciais, execuções
Block 3 (25 min)  — Automação 1: notificação de novo lead
Block 4 (25 min)  — Automação 2: resposta automática de boas-vindas
Block 5 (20 min)  — Automação 3: alerta de tarefa pendente + desafio C2
Block 6 (10 min)  — Visão do stack completo (C3: CRM) + próximos fluxos
```

---

## Block 1 — Por que Automação Antes de Ferramenta

**Duração:** 10 min | **Formato:** Diagnóstico + framing

### A armadilha mais comum

A maioria das pessoas que "quer automatizar" começa pela ferramenta:
"Vou usar Zapier / Make / n8n / ActiveCampaign..."
E termina com 30 automações parcialmente configuradas que não executam de forma confiável.

O problema não é a ferramenta — é a ausência de um mapa de automação.

### O mapa antes da ferramenta

```
ANTES de abrir o n8n, responder:

1. Qual é o processo manual que mais consome tempo repetitivo?
2. Qual é o GATILHO exato que inicia esse processo?
   (Não "quando alguém compra" — "quando o campo 'status' muda para 'pago' no formulário X")
3. Qual é a CONDIÇÃO que determina o que acontece?
   (Não "se for lead qualificado" — "se a resposta P3 contiver 'acima de R$5k/mês'")
4. Qual é a AÇÃO final esperada?
   (Não "notificar o time" — "enviar mensagem no WhatsApp para +55XXXXXXXXXX com os dados do formulário")
```

Quando as 3 respostas são precisas, a automação leva 15 minutos.
Quando são vagas, leva 3 horas e ainda não funciona.

### Por que n8n e não Zapier / Make

| Critério | Zapier / Make | n8n |
|---------|--------------|-----|
| Custo por automação | Por "zap" ou operação | Por instância (fixo) |
| Dados que saem da empresa | Passam pelos servidores deles | Opcional: self-hosted |
| Personalização | Limitada ao que os blocos permitem | Código JavaScript quando necessário |
| Integração com agentes do vault | Via HTTP Request | Via HTTP Request + execução de scripts |
| Curva de aprendizado | Menor | Moderada — compensa em 30 dias |

**Recomendação para C2:** n8n Cloud (teste gratuito) ou n8n self-hosted via Railway.
Para a maioria das agências com 3–5 automações ativas: Railway custa ~R$25/mês.

---

## Block 2 — Anatomia do n8n

**Duração:** 20 min | **Formato:** Demonstração guiada ao vivo

### Os 4 conceitos que precisam ser sólidos

```
CONCEITO 1 — NÓ (Node)
  Cada bloco no fluxo é um nó. Nós fazem 3 coisas:
  - Trigger: inicia o fluxo (webhook, timer, evento de app)
  - Ação: executa algo (envia mensagem, cria registro, chama API)
  - Lógica: decide o caminho (IF, Switch, Loop, Merge)

CONCEITO 2 — TRIGGER
  O gatilho que acorda o fluxo. Sem trigger, o fluxo dorme.
  Tipos de trigger:
  - Webhook: recebe uma chamada HTTP de outro sistema
  - Schedule: executa em horário definido (cron)
  - Evento de app: Gmail recebeu e-mail, Airtable criou registro, etc.
  - Manual: você clica "executar" (só para testes)

CONCEITO 3 — CREDENCIAL
  A conexão autenticada com um serviço externo.
  Configurada uma vez — usada em todos os fluxos.
  Exemplos: Gmail OAuth, WhatsApp Business API, Google Sheets API.

CONCEITO 4 — EXECUÇÃO
  Cada vez que o fluxo roda, é uma execução.
  O painel de execuções mostra: ✅ sucesso | ❌ erro | ⚠️ parcial.
  Todo debug começa aqui — clique na execução com erro para ver qual nó falhou.
```

### Interface ao vivo: o que mostrar

```
1. Canvas → onde os nós vivem. Arrastar para organizar.
2. Panel lateral → configuração do nó selecionado.
3. Output do nó → o que cada nó produziu (JSON).
4. Executions → histórico de todas as execuções.
5. Credentials → configurar autenticação dos serviços.
6. Settings do workflow → ativar / desativar o fluxo inteiro.
```

### A lógica de dados no n8n

```
Cada nó recebe dados → processa → passa adiante.

Formato: array de itens, cada item é um objeto JSON.

Exemplo: um webhook recebe {
  "nome": "Maria Silva",
  "email": "maria@empresa.com",
  "whatsapp": "5511999999999",
  "interesse": "automacoes"
}

O próximo nó acessa com: {{ $json.nome }}, {{ $json.email }}, etc.
```

---

## Block 3 — Automação 1: Notificação de Novo Lead

**Duração:** 25 min | **Formato:** Construção ao vivo

### O problema que resolve

Quando um lead preenche a landing page (C1), o operador só sabe se checar manualmente.
Com esta automação: mensagem no WhatsApp do operador em segundos, com os dados do lead.

### Arquitetura do fluxo

```
[Webhook Trigger]
    ↓ Recebe dados do formulário / landing page
[IF — Condicional]
    ↓ Verificar se campos obrigatórios estão preenchidos
[Formatar mensagem]
    ↓ Montar texto com dados do lead
[WhatsApp / Telegram]
    → Notificar operador instantaneamente
```

### Construção passo a passo

**Passo 1 — Criar o webhook:**
```
1. Novo workflow → Add Node → Webhook
2. Authentication: None (para formulários próprios)
3. HTTP Method: POST
4. Path: /novo-lead (ou /lead-landing-page)
5. Copiar a URL de teste: https://[seu-n8n].app.n8n.cloud/webhook-test/novo-lead
```

**Passo 2 — Conectar o formulário/landing:**
```
Se landing page tem formulário HTML:
  action="{{ URL_DO_WEBHOOK }}" method="POST"

Se usa Google Forms:
  Não tem webhook nativo — usar n8n Google Sheets trigger
  (formulário responde → sheet → n8n lê a planilha)

Se usa Typeform / Tally / Fillout:
  Settings → Webhooks → colar URL do n8n
```

**Passo 3 — Adicionar IF de validação:**
```
Add Node → IF
Condition: {{ $json.email }} is not empty
AND {{ $json.nome }} is not empty

True → continua o fluxo
False → Add Node → No Operation (ignora leads sem dados)
```

**Passo 4 — Formatar a mensagem:**
```
Add Node → Code (JavaScript simples)
Código:
return [{
  json: {
    mensagem: `🔔 *NOVO LEAD*\n\n👤 ${$input.item.json.nome}\n📧 ${$input.item.json.email}\n📱 ${$input.item.json.whatsapp || 'não informado'}\n💬 Interesse: ${$input.item.json.interesse || 'não especificado'}\n\n⏰ ${new Date().toLocaleString('pt-BR')}`
  }
}]
```

**Passo 5 — Enviar notificação:**

| Canal | Nó n8n | Configuração |
|-------|--------|-------------|
| WhatsApp (Evolution API) | HTTP Request | POST para API + body com mensagem |
| Telegram | Telegram → Send Message | Bot Token + Chat ID do operador |
| E-mail | Gmail → Send Email | Para: e-mail do operador |
| Slack | Slack → Send Message | Canal: #novos-leads |

**Para WhatsApp via Evolution API (self-hosted):**
```
HTTP Request:
  Method: POST
  URL: https://[sua-evolution-api]/message/sendText/[instancia]
  Body (JSON):
  {
    "number": "55XXXXXXXXXX",
    "text": "{{ $json.mensagem }}"
  }
  Headers:
    apikey: [sua-chave-da-evolution-api]
```

**Passo 6 — Ativar o webhook:**
```
Salvar → ativar o fluxo (toggle no topo)
Mudar de "webhook-test" para "webhook" na URL final
Testar: enviar dados de teste pelo formulário
Verificar em Executions: ✅ ou ❌
```

---

## Block 4 — Automação 2: Resposta Automática de Boas-Vindas

**Duração:** 25 min | **Formato:** Construção ao vivo

### O problema que resolve

Quando o lead envia a primeira mensagem (via formulário, WhatsApp ou e-mail), espera resposta.
Cada hora sem resposta reduz a taxa de fechamento em ~10%.
Com esta automação: resposta automática em segundos com contexto personalizado.

### Arquitetura do fluxo

```
[Trigger — Webhook / Gmail / WhatsApp]
    ↓ Recebe primeira mensagem do lead
[Identificar canal de origem]
    ↓ Formulário? WhatsApp? E-mail?
[Buscar template de resposta]
    ↓ Agente-copy fornece o texto da DM de boas-vindas
[Enviar resposta no mesmo canal]
    ↓ WhatsApp → WhatsApp | E-mail → E-mail | Formulário → E-mail
[Registrar no log]
    → Google Sheets / Airtable / Notion — lead recebeu resposta
```

### Template de resposta automática

O texto de boas-vindas é gerado pelo agente-copy em C1:
```
*dm whatsapp
```

Para esta automação, o texto é fixo no fluxo (não dinâmico):

```
Olá, [NOME DO LEAD]!

Recebi sua mensagem sobre [INTERESSE/PRODUTO].

Nos próximos [X minutos / até [HORA]], você receberá [O QUÊ]:
- [Diagnóstico de X / Link para agendar / Formulário com 3 perguntas]

Se quiser agilizar: [CTA alternativo — link ou número]

Até logo,
[NOME DO OPERADOR / NEGÓCIO]
```

### Construção passo a passo

**Para trigger via Formulário (Google Forms → Sheets → n8n):**
```
Trigger: Google Sheets → On Row Added
  Spreadsheet: ID da planilha do formulário
  Sheet: "Respostas do formulário 1"
  Poll Every: 1 minute (n8n verifica a cada minuto)

→ IF: linha nova detectada
→ Extrair nome (coluna A), e-mail (coluna B), interesse (coluna C)
→ Enviar e-mail de boas-vindas via Gmail
→ Marcar coluna D como "respondido"
```

**Para trigger via WhatsApp (Evolution API webhook):**
```
Trigger: Webhook (recebe mensagem da Evolution API)
  → IF: $json.event === "messages.upsert" AND $json.data.key.fromMe === false
  → Extrair: número, nome, texto da mensagem
  → Enviar resposta automática de boas-vindas
  → Adicionar ao Google Sheets como novo lead
```

**Para trigger via E-mail (Gmail):**
```
Trigger: Gmail → On Email Received
  Filter: label:inbox NOT label:respondido
  → Extrair: remetente, assunto, corpo
  → Enviar resposta automática
  → Aplicar label "respondido" no e-mail original
```

### Personalização com dados do lead

```javascript
// Nó Code — personalizar mensagem
const nome = $input.item.json.nome || "Olá"
const interesse = $input.item.json.interesse || "nosso trabalho"

return [{
  json: {
    mensagem: `Olá, ${nome}!\n\nRecebi sua mensagem sobre ${interesse}.\n\nEm breve entro em contato. Se quiser agilizar, clique aqui: [LINK_CTA]`
  }
}]
```

---

## Block 5 — Automação 3: Alerta de Tarefa Pendente

**Duração:** 20 min | **Formato:** Construção ao vivo

### O problema que resolve

Tarefas com prazo caem no esquecimento quando não existe sistema de alerta.
O operador acorda segunda-feira sem saber o que está pendente.
Com esta automação: relatório automático de pendências toda manhã.

### Arquitetura do fluxo

```
[Schedule Trigger — toda segunda, 08h]
    ↓
[Google Sheets / Airtable — ler tarefas]
    ↓ Filtrar: status = "pendente" AND prazo <= hoje + 3 dias
[Formatar relatório]
    ↓ Lista de tarefas com cliente, prazo e prioridade
[Enviar relatório]
    → WhatsApp / Telegram / E-mail do operador
```

### Construção passo a passo

**Passo 1 — Estrutura mínima da planilha de tarefas:**
```
Planilha: [NEGÓCIO]-tarefas
Colunas:
  A: ID da tarefa
  B: Cliente
  C: Descrição
  D: Prazo (YYYY-MM-DD)
  E: Status (pendente / em andamento / concluído)
  F: Prioridade (alta / média / baixa)
```

**Passo 2 — Schedule trigger:**
```
Add Node → Schedule Trigger
  Mode: Every Week
  Day of Week: Monday
  Hour: 8
  Minute: 0
```

**Passo 3 — Ler planilha:**
```
Add Node → Google Sheets → Get Many Rows
  Spreadsheet: ID da planilha de tarefas
  Sheet: "Tarefas"
  Filters:
    Status = "pendente"
```

**Passo 4 — Filtrar por prazo:**
```javascript
// Nó Code — filtrar tarefas com prazo nos próximos 3 dias
const hoje = new Date()
const limite = new Date(hoje)
limite.setDate(hoje.getDate() + 3)

const tarefas = $input.all()
const urgentes = tarefas.filter(item => {
  const prazo = new Date(item.json.Prazo)
  return prazo <= limite && item.json.Status === 'pendente'
})

return urgentes
```

**Passo 5 — Formatar relatório:**
```javascript
// Nó Code — montar mensagem do relatório
const tarefas = $input.all()

if (tarefas.length === 0) {
  return [{ json: { mensagem: "✅ Nenhuma tarefa urgente esta semana." } }]
}

const lista = tarefas.map(t =>
  `📌 ${t.json.Cliente}\n   ${t.json.Descrição}\n   Prazo: ${t.json.Prazo} | ${t.json.Prioridade.toUpperCase()}`
).join('\n\n')

return [{
  json: {
    mensagem: `📋 *TAREFAS URGENTES — ${new Date().toLocaleDateString('pt-BR')}*\n\n${lista}\n\n_${tarefas.length} tarefa(s) com prazo em até 3 dias._`
  }
}]
```

**Passo 6 — Enviar relatório:**
```
Mesmo nó de notificação usado em Automação 1
(WhatsApp / Telegram / Gmail)
```

### Desafio C2

**Prazo:** 48h após a sessão

**5 critérios de conclusão:**

```
[ ] n8n configurado (Cloud ou Railway) e acessível
[ ] Automação 1 ativa: novo lead → notificação no WhatsApp do operador
[ ] Automação 2 ativa: formulário preenchido → resposta automática enviada
[ ] Automação 3 ativa: relatório de segunda-feira testado manualmente
[ ] Execuções visíveis no painel n8n (histórico de teste e ativação)
```

---

## Block 6 — Stack Completo e Próximos Fluxos

**Duração:** 10 min | **Formato:** Visão + próxima sessão

### O que foi construído até aqui (Track C)

```
C1 — Landing page com copy neural → no ar com URL pública
C2 — 3 automações ativas:
  1. Novo lead → notificação imediata
  2. Formulário → resposta automática
  3. Schedule → relatório semanal
```

### O que C3 vai adicionar

C3 (Automações II — CRM) constrói em cima do que foi criado aqui:

```
C2 (triggers e notificações)
     ↓
C3 — sequências de onboarding:
  - Lead qualificado → sequência de 5 mensagens em 7 dias
  - Cliente novo → sequência de boas-vindas (3 toques)
  - Cliente inativo → sequência de reengajamento
  - Pipeline de CRM: Prospect → Qualificado → Proposta → Cliente
```

### Próximos fluxos que o operador pode construir sozinho

```
Fluxo 4 — Qualificação automática:
  Lead preenche formulário → IF interesse > R$5k → notifica imediato
                           → IF interesse < R$5k → envia material gratuito

Fluxo 5 — Proposta enviada:
  Operador marca "proposta enviada" → 2 dias → lembrete para follow-up

Fluxo 6 — Cliente fechado:
  Status muda para "cliente" → inicia onboarding automático (C3)
```

---

## Artefatos da Sessão

| Tipo | Documento | Status |
|------|-----------|--------|
| Template fluxo | [[template-fluxo-n8n-novo-lead]] | 🔲 A criar |
| Template fluxo | [[template-fluxo-n8n-boas-vindas]] | 🔲 A criar |
| Template planilha | [[template-planilha-tarefas]] | 🔲 A criar |

---

## Notas para o Facilitador

### Quando o operador não tem acesso à Evolution API / WhatsApp Business

Alternativas para notificação (em ordem de facilidade de configuração):

1. **Telegram** — Mais fácil: criar bot no @BotFather, pegar token, usar nó nativo do n8n
2. **Gmail** — Enviar e-mail para si mesmo: nó Gmail nativo, sem configuração extra
3. **Slack** — Se o operador já usa: workspace + webhook + nó nativo do n8n
4. **WhatsApp pessoal via Z-API** — Alternativa ao Evolution API: configurar em ~10 minutos

### Quando o formulário da landing page não suporta webhook

Opções:
1. **Tally.so** — formulários com webhook nativo grátis (recomendado para C1 + C2)
2. **Google Forms → Sheets → n8n** — funciona mas tem delay de 1–5 minutos
3. **Formulário HTML custom** — action aponta diretamente para o webhook do n8n

### Quando o operador já tem automações em Zapier / Make

1. Não migrar tudo de uma vez — construir os 3 novos fluxos em n8n
2. Rodar em paralelo por 1 semana para validar funcionamento
3. Desativar Zapier / Make depois de validado
4. Custo de migração: geralmente uma tarde de trabalho

### A prioridade é funcionar, não ser perfeito

Os 3 fluxos desta sessão têm tratamento de erro mínimo.
O operador vai aprender com as primeiras falhas reais.
Cada execução com erro é um ensinamento sobre o comportamento dos dados.
Não tentar cobrir todos os edge cases na primeira versão.

---

## Conexões

- **Track C:** [[runa-intervencao-sessao-track-c1-site-landing-page|C1 (site)]] → C2 (automações) → [[track-c3-automacoes-crm-followup|C3 (CRM)]] → [[track-c4-orcamento-proposta-neural|C4 (orçamento)]]
- **Integração com Track B:** Automações de boas-vindas alimentam `agente-atendimento` (B1) — lead notificado → atendimento automático
- **Stack C2:** n8n (Cloud ou Railway) + Evolution API (WhatsApp) + Google Sheets (dados) + Gmail (fallback)
- **Produto ensinado:** Automações como infraestrutura do squad — os agentes do vault precisam de gatilhos para operar
