---
date: 2026-04-04
tags: [squad-dollar, skool, paperclip, governanca, orgchart, modulo-8]
project: runa-systems-global
type: course-support
produto: [[squad-dollar-prd]]
modulo: "8.1 a 8.5 — Setup Completo do Paperclip"
---

# A Empresa Que Se Governa

> Módulo 8 · Aulas 8.1 a 8.5

Nos módulos anteriores você construiu os agentes. Agora você vai montar a estrutura que os governa: organograma, heartbeats automáticos, controle de orçamento, e metas. É a diferença entre "tenho agentes no Claude" e "tenho uma empresa com uma estrutura operacional".

---

## O que é o Paperclip e por que ele muda tudo

O Paperclip é uma ferramenta open-source que transforma o seu squad em uma organização com estrutura formal. Com ele você define:

- **Organograma:** quem reporta para quem, quais papéis existem
- **Heartbeats:** tarefas que rodam automaticamente em horários definidos (ex: "toda segunda às 8h, gere o briefing de conteúdo da semana")
- **Budget control:** limites de tokens/custo por agente por período
- **Goals:** objetivos do trimestre que os agentes conhecem e perseguem
- **AGENTS.md:** o documento que cada agente lê antes de responder — equivalente ao manual do colaborador

---

## Pré-requisitos do Módulo 8

Antes de começar, você precisa ter:
- [ ] Todos os system prompts dos módulos 2-6 finalizados e testados
- [ ] Node.js instalado no seu computador (versão 18+)
- [ ] 2 horas de tempo contínuo (o setup inicial exige atenção)

---

## Passo 1 — Instalação

Abra o terminal e execute:

```bash
npx paperclipai onboard --yes
```

O comando instala e configura o Paperclip com as configurações padrão. O vídeo da Aula 8.1 mostra esse processo ao vivo com todos os prompts e respostas que você vai encontrar.

**O que acontece durante o onboard:**
- Cria a estrutura de pastas `.paperclip/`
- Gera o `paperclip.config.yaml` inicial
- Cria o `AGENTS.md` em branco
- Configura o orquestrador padrão

---

## Passo 2 — Montando o Organograma (Aula 8.2)

O organograma define os papéis da sua empresa de agentes. Use como base o mapeamento que você fez no Módulo 1 e os agentes que você construiu nos Módulos 2-6.

### Template de organograma para preencher:

```yaml
# paperclip.config.yaml — seção de organograma

organization:
  name: "{NOME DA SUA EMPRESA / MARCA}"
  mission: "{missão em 1 frase}"

roles:
  - id: orchestrator
    name: "{NOME DO SEU ORQUESTRADOR}"
    type: orchestrator
    reports_to: founder
    description: "{função em 1 frase}"

  - id: offer-agent
    name: "{NOME DO SEU AGENTE DE OFERTA}"
    type: specialist
    reports_to: orchestrator
    description: "{função em 1 frase}"

  - id: content-agent
    name: "{NOME DO SEU AGENTE DE CONTEÚDO}"
    type: specialist
    reports_to: orchestrator
    description: "{função em 1 frase}"

  - id: automation-agent
    name: "{NOME DO SEU AGENTE DE AUTOMAÇÃO}"
    type: specialist
    reports_to: orchestrator
    description: "{função em 1 frase}"

  - id: intelligence-agent
    name: "{NOME DO SEU AGENTE DE INTELIGÊNCIA}"
    type: specialist
    reports_to: orchestrator
    description: "{função em 1 frase}"
```

---

## Passo 3 — Importando os Agentes (Aula 8.3)

Este é o passo mais longo — você vai importar cada system prompt dos módulos anteriores para o Paperclip.

### Para cada agente:
1. Abra o Claude Project do agente
2. Copie o system prompt completo
3. Cole no campo `promptTemplate` do arquivo de configuração do agente em `.paperclip/agents/`
4. Adicione ao `AGENTS.md` central uma entrada resumindo o papel desse agente

### AGENTS.md — template:

```markdown
# AGENTS.md — {NOME DA SUA EMPRESA}

Este documento é lido por todos os agentes antes de responder.
Define a missão, os valores e as regras de convivência do squad.

## Missão da empresa
{missão em 1-2 frases}

## Quem somos
{breve descrição do negócio e do que fazemos}

## Valores e princípios operacionais
- {valor 1: ex: clareza acima de completude}
- {valor 2: ex: sempre específico, nunca genérico}
- {valor 3: ex: o cliente final em mente em cada output}

## Regras de convivência do squad
- Nunca prometa o que não é do seu escopo
- Quando não souber, diga que não sabe — não invente
- Sempre entregue com uma próxima ação recomendada
- Escale para o orquestrador quando a solicitação for ambígua

## O squad
| Agente | Papel | Acionar quando |
|--------|-------|----------------|
| {ORQUESTRADOR} | Coordenação central | Qualquer solicitação que envolva mais de um especialista |
| {OFERTA} | Ofertas e precificação | Estruturar produto, definir preço, criar ancoragem |
| {CONTEÚDO} | Copy e conteúdo | Posts, scripts, emails, captions |
| {AUTOMAÇÃO} | Client success e automação | DMs, onboarding, follow-up |
| {INTELIGÊNCIA} | Pesquisa de mercado | Análise de concorrentes, gaps, tendências |
```

---

## Passo 4 — Heartbeats e Orçamento (Aula 8.4)

### Heartbeats recomendados para começar

| Heartbeat | Frequência | O que faz |
|-----------|-----------|-----------|
| Briefing de conteúdo | Segunda, 8h | Orquestrador gera plano de conteúdo da semana |
| Check de leads | Diário, 9h | Agente de automação verifica leads sem resposta |
| Análise de mercado | Quinzenal | Agente de inteligência gera relatório de movimentos do nicho |

### Template de heartbeat:

```yaml
heartbeats:
  - id: weekly-content-brief
    name: "Briefing semanal de conteúdo"
    schedule: "0 8 * * 1"  # toda segunda às 8h (cron format)
    agent: orchestrator
    prompt: "Gere o briefing de conteúdo para a semana. Considere: eventos relevantes da semana, progresso das metas do trimestre, conteúdo que melhor performou na semana anterior."
    output: "file:.paperclip/outputs/content-brief-{date}.md"

  - id: lead-check
    name: "Check diário de leads"
    schedule: "0 9 * * *"  # todo dia às 9h
    agent: automation-agent
    prompt: "Verifique leads que receberam o entregável nos últimos 3 dias mas não responderam. Liste-os com o tempo sem resposta e sugestão de próximo passo."
    output: "file:.paperclip/outputs/lead-check-{date}.md"
```

### Controle de orçamento:

```yaml
budget:
  period: monthly
  total_tokens: 500000  # ajuste para o seu plano
  per_agent:
    orchestrator: 150000
    content-agent: 200000
    offer-agent: 100000
    automation-agent: 30000
    intelligence-agent: 20000
  alerts:
    - at: 80%
      notify: founder
    - at: 95%
      pause: non-critical-heartbeats
```

---

## Entregável do Módulo 8

- [ ] Paperclip instalado e configurado
- [ ] Organograma definido no `paperclip.config.yaml`
- [ ] Todos os system prompts importados para `.paperclip/agents/`
- [ ] `AGENTS.md` criado e preenchido
- [ ] 2-3 heartbeats configurados
- [ ] Orçamento definido com alertas
- [ ] Teste: um heartbeat rodou e gerou output corretamente

---

## Bônus — Template YAML completo para importação rápida

O Bonus 8A inclui um arquivo YAML completo com a estrutura do squad de referência pronto para importar. Você só precisa substituir os system prompts pelos seus — o organograma, os heartbeats e o orçamento já vêm configurados.

→ Ver: [[09-templates-bundle]]

---

*Próxima aula: Bônus — Templates Bundle*
*Documento: [[09-templates-bundle]]*
