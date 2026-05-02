---
date: 2026-05-02
tags: [skills, runa-os, diagnostico, onboarding, ares, orion, four-cs, ead]
project: runa-systems-global
type: skill-doc
---

# Skills RUNA OS — Diagnóstico e Onboarding de Clientes

> Duas skills que cobrem os dois extremos da jornada do cliente no ecossistema RUNA SYSTEMS:
> **antes da venda** (diagnóstico AI de prospect) e **dia 1** (onboarding e contexto).
>
> Instaladas em: `~/.claude/skills/runa-os-audit/` e `~/.claude/skills/runa-intake/`
> Agentes responsáveis: **ARES** (`/runa-os-audit`) e **ORION** (`/runa-intake`)

---

## Por que existe

O maior gargalo do RUNA SYSTEMS não é produto — é diagnóstico e setup.

Um prospect que não entende onde está no espectro AI (Context → Connections → Capabilities → Cadence) compra o produto errado, abandona, e vira detrator. Um cliente que começa sem contexto capturado recebe agentes genéricos sem voice DNA, sem prioridades, sem mapeamento de dor real.

Essas duas skills resolvem os dois problemas com um protocolo estruturado:

- **`/runa-os-audit`** — 7 perguntas de diagnóstico, score 0-100 baseado nos Four Cs, produto RUNA recomendado pelo gap identificado. Usado por ARES em pré-venda.
- **`/runa-intake`** — 7 perguntas de onboarding, cria 7 arquivos de contexto no squad do cliente. Usado por ORION no dia 1 de qualquer cliente que entrou no RUNA SYSTEMS.

**Framework base:** Four Cs (modelo de maturidade AI de 4 andares — Context, Connections, Capabilities, Cadence). Cada andar tem score 0-25. Total possível: 100 pontos.

---

## `/runa-os-audit` — Diagnóstico Four Cs de Prospect

### Quando usar

- Um prospect pediu mais informação após ver um post ou aperitivo
- ARES está conduzindo uma conversa de vendas e precisa qualificar o nível AI do prospect
- O usuário quer entender onde um cliente potencial está antes de recomendar qual produto RUNA comprar
- Como produto standalone: `ORÇAMENTO$` pode incluir essa auditoria como deliverable de R$97

**Não usar para:** clientes que já compraram e estão em onboarding — use `/runa-intake` nesse caso.

### Como usar

```
/runa-os-audit
```

A skill conduz 7 perguntas em sequência, uma por vez. O usuário responde cada pergunta com informações do prospect (colhidas em conversa ou formulário).

**Estrutura das perguntas:**

| # | Andar | Pergunta |
|---|-------|---------|
| Q1 | Context | Qual ferramenta AI você mais usa hoje? Com que frequência? |
| Q2 | Context | Você tem documentos digitais do seu negócio (processos, scripts, personas, ofertas)? |
| Q3 | Connections | Já conectou Claude (ou qualquer IA) a alguma ferramenta externa (CRM, email, WhatsApp)? |
| Q4 | Connections | Você tem algum processo que roda automaticamente sem sua intervenção hoje? |
| Q5 | Capabilities | Já criou algum agente ou automação personalizada para o seu negócio? |
| Q6 | Cadence | Você tem KPIs para medir resultado das automações/agentes que usa? |
| Q7 | Livre | Qual é a maior dor operacional da sua semana agora mesmo? |

**Scoring por andar (0-25 cada):**

| Pontuação | Significado |
|-----------|-------------|
| 0-6 | Inexistente — não usa ou não sabe que existe |
| 7-13 | Iniciante — usa mas não estruturou |
| 14-19 | Intermediário — estruturou mas não automatizou |
| 20-25 | Avançado — sistematizado e mensurado |

**Output gerado:**

```
RUNA OS AUDIT — [Nome do Prospect]
====================================

SCORE TOTAL: XX/100

Context:     XX/25 — [diagnóstico em 1 linha]
Connections: XX/25 — [diagnóstico em 1 linha]
Capabilities:XX/25 — [diagnóstico em 1 linha]
Cadence:     XX/25 — [diagnóstico em 1 linha]

TOP-3 GAPS (por alavancagem):
1. [Gap mais crítico] → [ação corretiva]
2. [Segundo gap]      → [ação corretiva]
3. [Terceiro gap]     → [ação corretiva]

RECOMENDAÇÃO RUNA:
[Produto recomendado + justificativa baseada no gap principal]

[Bloco copypronto para enviar ao prospect via DM ou WhatsApp]
```

**Mapa Score → Produto recomendado:**

| Score | Produto RUNA |
|-------|-------------|
| 0-25 | RUNA SYSTEMS (entrada) — precisa de base completa |
| 26-50 | RUNA SYSTEMS + Módulo 0 acelerado |
| 51-75 | RUNA INTERVENÇÃO — Arthur implementa junto |
| 76-100 | RUNA MENTORIA — já tem stack, precisa de estratégia |

### Caso de uso prático na infraestrutura

Cenário: um empreendedor comentou "ARQUITETO" em um post do @arthsystems_, recebeu o aperitivo via Zernio, e pediu mais informações no DM.

**Fluxo com `/runa-os-audit`:**

```
1. ARES recebe o prospect via HERMES (DM qualificado)

2. ARES roda /runa-os-audit com as respostas do formulário pré-venda
   (ou conduz as 7 perguntas diretamente no DM)

3. Score gerado: Context 18/25, Connections 5/25, Capabilities 2/25, Cadence 0/25
   → Total: 25/100

4. Output: gap principal é Connections (não tem integrações)
   → Produto recomendado: RUNA SYSTEMS (entrada)

5. ARES envia o bloco copypronto para Arthur para usar na conversa de fechamento:
   "Você já tem o mindset certo — Claude todo dia é um bom sinal.
    Mas você está operando solo, sem integrações e sem métricas.
    O RUNA SYSTEMS resolve exatamente esse gap em 90 dias."
```

**Valor:** Substitui o feeling de vendas por diagnóstico estruturado. Cada prospect recebe uma recomendação rastreável, não genérica.

---

## `/runa-intake` — Onboarding Dia 1 do Cliente

### Quando usar

- Um cliente acabou de entrar no RUNA SYSTEMS (qualquer modalidade: programa, mentoria, intervenção)
- ORION está configurando o squad de 8 agentes neurais do cliente
- O usuário precisa capturar contexto fundacional antes de qualquer agente ser personalizado
- Quando o cliente tem contexto disperso (notas, gravações, docs) e precisa de estrutura

**Não usar para:** prospects que ainda não compraram — use `/runa-os-audit` primeiro.

### Como usar

```
/runa-intake
```

A skill faz 7 perguntas em sequência. Cada resposta alimenta um arquivo de contexto que os 8 agentes neurais do cliente vão ler.

**Estrutura das perguntas:**

| # | Arquivo gerado | Pergunta |
|---|---------------|---------|
| Q1 | `identity.md` | Qual é o seu nome, sua oferta principal e quem é o seu cliente ideal? |
| Q2 | `voice.md` | Me manda 2 amostras reais da sua escrita — posts, emails, pitches. Não rascunho. |
| Q3 | `priorities.md` | Quais são suas 3 prioridades de negócio nos próximos 90 dias? |
| Q4 | `revenue-map.md` | Onde o seu revenue cai hoje? Qual produto/serviço/canal gera mais? |
| Q5 | `channels.md` | Por onde você se comunica com seus clientes hoje (Instagram, WhatsApp, email, etc.)? |
| Q6 | `storage.md` | Onde você guarda seus materiais: gravações, notas, processos, documentos? |
| Q7 | `pain-ead.md` | Qual é a sua maior dor operacional desta semana? Como você rastreia tarefas hoje? |

**Estrutura de arquivos criados:**

```
squads/{client-slug}/
├── context/
│   ├── identity.md      ← Q1: quem é, o que vende, para quem
│   ├── priorities.md    ← Q3: objetivos 90 dias
│   ├── revenue-map.md   ← Q4: produtos ativos + canais de receita
│   ├── channels.md      ← Q5: canais de comunicação com clientes
│   ├── storage.md       ← Q6: onde ficam os materiais do negócio
│   └── pain-ead.md      ← Q7: dor principal + candidato EAD #1
└── references/
    └── voice.md         ← Q2: amostras verbatim de escrita (nunca editadas)
```

**Regra crítica do Q2 (voice.md):** A skill não aceita rascunho, paráfrase ou resumo. Exige as amostras exatamente como foram escritas ou faladas. É a âncora do voice DNA — qualquer agente que gera copy vai ler esse arquivo primeiro.

**O que a skill identifica automaticamente no Q7:**
- Qual processo tem maior potencial de ser Eliminado, Automatizado ou Delegado (EAD Gate)
- Esse candidato vira o `pain-ead.md` — primeiro projeto do squad do cliente

### Caso de uso prático na infraestrutura

Cenário: um cliente entrou no RUNA SYSTEMS Intervenção (R$50k). Arthur vai implementar o squad de 8 agentes nos próximos 21 dias. ORION precisa capturar o contexto antes da primeira sessão de implementação.

**Fluxo com `/runa-intake`:**

```
1. ORION roda /runa-intake no primeiro dia (antes de qualquer sessão técnica)

2. Cliente responde as 7 perguntas em ~30 minutos:
   Q1: "Gustavo Ferreira. Vendo consultoria financeira para médicos.
        ICP: médico 30-45 anos com clínica própria, faturando R$30k+/mês."
   Q2: [2 posts reais do Instagram — copiados verbatim]
   Q3: "1. Fechar 3 clientes novos, 2. Automatizar onboarding, 3. Lançar curso"
   Q4: "Consultoria recorrente (R$4k/mês) — 70% da receita. Vem por indicação."
   Q5: "WhatsApp e Instagram DM. Email só para contratos."
   Q6: "Tudo no Google Drive. Gravações das consultas no Drive também."
   Q7: "Fazer proposta toda semana — leva 3h cada. Rastreio no Whatsapp."

3. ORION cria automaticamente os 7 arquivos em squads/gustavo-ferreira/

4. Identifica candidato EAD #1 (pain-ead.md):
   "Proposta semanal — 3h por proposta — AUTOMATIZAR"
   → Agente Comercial & Vendas Neural vai resolver isso primeiro

5. Arthur tem o contexto completo antes da sessão 1:
   - Voice DNA do Gustavo para todos os agentes gerarem copy na voz dele
   - Prioridades para sequenciar quais agentes implementar primeiro
   - Revenue map para entender onde focar o squad
   - Primeiro projeto já mapeado (automatização de proposta)
```

**Valor:** Elimina a sessão de briefing improvisada. O squad de 8 agentes já nasce personalizado para o negócio específico do cliente, não genérico.

---

## Conexão entre as duas skills

As skills foram projetadas para funcionar em sequência no funil:

```
Prospect vê post → comenta keyword → recebe aperitivo (HERMES/Zernio)
  ↓
ARES roda /runa-os-audit → diagnóstico Four Cs → produto recomendado
  ↓
[Fechamento] → Cliente entra no RUNA SYSTEMS
  ↓
ORION roda /runa-intake → 7 arquivos de contexto → squad configurado
  ↓
8 agentes neurais personalizados operam no negócio do cliente
```

O `/runa-os-audit` qualifica o prospect. O `/runa-intake` arma o squad.

---

## Relação com os agentes do ecossistema

| Agente | Papel com essas skills |
|--------|----------------------|
| **ARES** | Dono do `/runa-os-audit` — executa em pré-venda, entrega relatório para Arthur usar no fechamento |
| **ORION** | Dono do `/runa-intake` — executa no dia 1, cria arquivos, identifica candidato EAD |
| **HERMES** | Qualifica prospects antes do audit (comentário → keyword → DM → formulário pré-venda) |
| **FREYJA** | Usa `voice.md` (gerado pelo intake) para calibrar copy de todos os agentes do cliente |
| **@dev** | Pode ler `context/` e `references/` para personalizar interfaces e automações do cliente |
| **@pm (Morgan)** | Usa `priorities.md` e `pain-ead.md` para criar o backlog de epics do squad do cliente |

---

## Setup e Verificação

**Verificar instalação:**
```bash
ls ~/.claude/skills/runa-os-audit/
ls ~/.claude/skills/runa-intake/
```

**Ativar:**
```
/runa-os-audit    # diagnóstico de prospect
/runa-intake      # onboarding de cliente
```

As skills são globais (`~/.claude/skills/`) — disponíveis em qualquer projeto Claude Code.

---

## Conexões no Ecossistema

- **Diagnóstico usa o framework Four Cs** → `SÍRIOS/📐 Projetos/runa-systems-prd.md` → seção Maturidade do Cliente
- **Intake usa o protocolo EAD Gate** → `.claude/rules/ead-gate.md` — mesma lógica para identificar candidatos EAD
- **Squad de clientes** → `squads/{client-slug}/` (estrutura criada pelo `/runa-intake`)
- **Agente de referência** → `SÍRIOS/RUNA SYSTEMS/agentes/agent-reference.md`

---

*Instaladas em: 2026-05-02*
*ARES (/runa-os-audit) + ORION (/runa-intake)*
