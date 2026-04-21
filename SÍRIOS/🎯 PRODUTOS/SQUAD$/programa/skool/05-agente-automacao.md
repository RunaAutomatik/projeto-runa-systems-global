---
date: 2026-04-04
tags: [squad-dollar, skool, automacao, instagram, manychat, modulo-5]
project: runa-systems-global
type: course-support
produto: [[squad-dollar-prd]]
modulo: "5.1 e 5.3 — Arquitetura Instagram + Sequências de Onboarding"
---

# O Agente de Automação

> Módulo 5 · Aulas 5.1 e 5.3

O agente de automação é onde o conteúdo que o agente de conteúdo cria começa a gerar receita de forma previsível. Ele gerencia os fluxos de DM, onboarding de novos clientes, e follow-up — as sequências que a maioria dos criadores sabe que precisa construir mas nunca faz por falta de tempo.

---

## O que o agente de automação faz vs. o que Claude faz

Importante entender a separação antes de construir:

| Camada | Ferramenta | Função |
|--------|-----------|--------|
| **Lógica de negócio** (o que dizer, quando, para quem) | Claude (seu Agente de Automação) | Escreve as mensagens, define os critérios de gatilho, estrutura os fluxos |
| **Execução automática** (disparar as mensagens de fato) | ManyChat, N8N | Detecta o comentário, envia o DM, executa a sequência no horário certo |

O agente no Claude pensa e escreve. O ManyChat/N8N executa. São camadas diferentes.

---

## Arquitetura do funil Instagram (fluxo padrão)

```
POST com keyword no caption ou stories
    ↓
Usuário comenta a keyword (ex: "SQUAD")
    ↓
ManyChat detecta o comentário → envia DM automático com o entregável
    ↓
Entregável cria desejo → usuário pede mais informação
    ↓
Agente de automação responde com oferta (o documento de oferta)
    ↓
Link para checkout ou calendário
    ↓
Compra realizada → sequência de onboarding automática (3 mensagens)
    ↓
Cliente ativo → follow-up de 30 dias (check-ins periódicos)
```

---

## Worksheet — Mapeando os Fluxos do Seu Negócio

### Fluxo 1 — Entregável de Captura (Aperitivo)

**Keyword que você vai usar no post:** _________________________________

**O que você vai entregar em troca do comentário:** _________________________________

**Mensagem de DM ao receber o comentário** (escreva o texto da primeira mensagem):
_________________________________
_________________________________
_________________________________

**Próximo passo que você quer que o lead tome:** _________________________________

---

### Fluxo 2 — Onboarding de Novo Cliente

Quando alguém compra, o que acontece nas primeiras 72h?

**Mensagem 1 (logo após a compra — tom de boas-vindas):**
_________________________________
_________________________________

**Mensagem 2 (24h depois — ponto de acesso e primeiros passos):**
_________________________________
_________________________________

**Mensagem 3 (72h depois — check-in de engajamento):**
_________________________________
_________________________________

---

### Fluxo 3 — Follow-up de Lead Não Convertido

Para quem recebeu o entregável mas não comprou em 7 dias:

**Condição de gatilho** (ex: "não clicou no link da oferta em 7 dias"):
_________________________________

**Mensagem de follow-up (1 mensagem, não mais):**
_________________________________
_________________________________

---

## Template — System Prompt do Agente de Automação

```
Você é {NOME DO AGENTE}, responsável pelo client success e automação de {SEU NOME / EMPRESA}.

MISSÃO
Criar e gerenciar as sequências de DM, onboarding e follow-up que mantêm os leads aquecidos
e os clientes engajados. Você não publica posts — você gerencia o que acontece depois que
alguém interage com o conteúdo.

CONTEXTO DO NEGÓCIO
{Cole aqui: produtos, ICPs, preços, plataforma de vendas (Hotmart, Kiwify, Skool, etc.)}

FLUXOS QUE VOCÊ GERENCIA

Fluxo 1 — Captura via keyword:
- Keyword: {sua keyword}
- Mensagem imediata: {texto da mensagem 1}
- Follow-up 48h: {texto da mensagem 2}
- Condição de avanço: {critério para avançar para oferta}

Fluxo 2 — Onboarding de novo cliente:
- Mensagem 0h: {texto boas-vindas}
- Mensagem 24h: {texto acesso e primeiros passos}
- Mensagem 72h: {texto check-in}
- Mensagem 7d: {texto de reengajamento se não acessou}

Fluxo 3 — Follow-up de lead frio (7+ dias sem conversão):
- Condição: {gatilho}
- Mensagem única: {texto}
- Após envio: não fazer mais follow-up automático, escalar para {SEU NOME}

QUANDO ESCALAR PARA {SEU NOME}
- Lead com objeção específica que os fluxos não cobrem
- Cliente insatisfeito (qualquer indicação de problema)
- Pedido fora do escopo dos fluxos configurados

TOM DAS MENSAGENS
{descreva: mais formal ou informal, distância ou proximidade, urgente ou tranquilo}
As mensagens devem soar como se fossem de {SEU NOME}, não de um bot.
Nunca mencionar que é automatizado.
```

---

## Configuração no ManyChat (Módulo 5.2 — o build ao vivo mostra isso na tela)

Checklist de setup para replicar depois de assistir o vídeo:

- [ ] Conectar conta Instagram Business ao ManyChat
- [ ] Criar fluxo "Keyword → DM" com o keyword do seu aperitivo
- [ ] Configurar mensagem 1 com o conteúdo do aperitivo
- [ ] Adicionar botão "Quero saber mais" que dispara a mensagem de oferta
- [ ] Configurar fluxo de onboarding (3 mensagens com delay)
- [ ] Testar o fluxo completo do ponto de vista do cliente

---

## Checklist — Testando os Fluxos

- [ ] Comente a keyword no seu próprio post e verifique se o DM chega em menos de 60 segundos
- [ ] Simule uma compra e verifique se as 3 mensagens de onboarding chegam nos tempos corretos
- [ ] Verifique que as mensagens soam como você, não como um template genérico
- [ ] Confirme que o ManyChat não está enviando mensagens fora do horário configurado

---

## Entregável do Módulo 5

- [ ] Fluxos 1, 2 e 3 mapeados (worksheets desta aula)
- [ ] System prompt do agente de automação configurado
- [ ] ManyChat configurado para o Fluxo 1 (keyword → DM)
- [ ] Teste completo realizado
- [ ] Arquivo `agents/agente-automacao.md` criado no seu projeto AIOX Lite com o system prompt final
- [ ] Testado com `@automacao` no Claude Code — o agente produz mensagens de DM e sequências no seu tom

> **Checkpoint:** Digite `@automacao` no Claude Code e peça: *"Escreve a mensagem de DM para quem comentou [keyword] no meu post."* O agente deve gerar uma mensagem no seu tom, personalizada para o contexto do seu negócio, sem precisar de explicações adicionais. Se isso acontecer, o Módulo 5 está concluído.

---

*Próxima aula: Módulo 6 — O Agente de Inteligência*
*Documento: [[06-agente-inteligencia]]*
