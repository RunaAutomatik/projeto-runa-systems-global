---
date: 2026-04-21
tags: [runa-intervencao, runa-mentoria, sessao, fase-6, integracao, orquestracao, command-center]
project: runa-systems-global
type: session-template
formato: [intervencao-21-dias, mentoria-60-dias]
fase: "6 — INTEGRAÇÃO"
sessao: "S18"
codigo: S18
titulo: "Integração I — Orquestração Total"
duracao: "90–120 min"
anterior: "[[runa-intervencao-sessao-track-c4-orcamento-proposta-neural]]"
proximo: "[[runa-intervencao-sessao-19-integracao-monetizacao-neural]]"
titulo_desbloqueado: null
produto: "[[runa-mentoria-prd]]"
aliases: [s18, integracao-orquestracao, command-center]
---

# S18 — Integração I: Orquestração Total

> **Fase 6 — INTEGRAÇÃO** · Sessão 18 de 21
> **Duração:** 90–120 min
> **Formato:** INTERVENÇÃO (dia 18) · MENTORIA (semana 15–16)
>
> Até aqui o cliente construiu em camadas: squad, base de conhecimento, automações, site, proposta. Cada camada funcionou isolada. S18 é a primeira sessão em que **tudo opera junto** — sem silos, sem handoff manual entre sistemas.

---

## Objetivo da Sessão

Ao final de S18, o cliente tem:

1. **Diagnóstico de integração** — sabe exatamente o que está conectado e o que ainda opera em silos
2. **Command Center funcional** — ponto único de orquestração de todo o ecossistema
3. **Relatório semanal automático** — gerado pelo próprio squad, não pelo operador
4. **DESAFIO:** Todos os sistemas sem silos + relatório semanal gerado pelo ecossistema

---

## Pré-requisitos (verificar antes de iniciar)

| Sistema | O que verificar | Status |
|---------|----------------|--------|
| Squad (S04–S06) | Agentes ativos e com .yaml completo | ☐ |
| Base de conhecimento (S07–S08) | KB com pelo menos 5 documentos estruturados | ☐ |
| Automações (Track C2/C3 ou A/B equivalentes) | Pelo menos 1 automação n8n ativa | ☐ |
| Especialização (S09–S17) | Track concluído com artefatos gerados | ☐ |
| CLAUDE.md do negócio | Atualizado com todos os agentes do squad | ☐ |

Se algum pré-requisito estiver incompleto: identificar o gap + dedicar 30 min no início de S18 para fechar.

---

## Estrutura da Sessão

### Block 1 — Framing: O Problema da Fragmentação (15 min)

**Pergunta de abertura:**
> "Se você precisar delegar uma tarefa agora — quem no seu squad faz isso? E onde está o resultado documentado? E qual automação é acionada depois?"

Deixar o cliente responder. A maioria vai hesitar em pelo menos 1 das 3 perguntas.

**O problema da fragmentação:**

Sistemas construídos em fases distintas tendem a operar em silos — não por falha técnica, mas porque cada sessão focou em um sistema específico. O squad existe. A KB existe. As automações existem. Mas não há um orquestrador.

**Consequência do silo:**
```
Cenário sem integração:
  Cliente chega → operador responde manualmente → abre KB manualmente → 
  aciona agente → copia resultado → cola no CRM → envia no WhatsApp → 
  atualiza a planilha → cria tarefa de follow-up

Cenário com integração:
  Cliente chega → automação detecta → agente qualifica → KB alimenta contexto → 
  CRM atualiza → follow-up agendado → operador aprova ou ignora
```

**O que S18 resolve:**
Não é instalar mais um sistema — é conectar o que já existe em uma cadeia sem ruptura.

---

### Block 2 — Diagnóstico de Integração (20 min)

**Exercício: Mapa de Silos**

Fazer ao vivo com o cliente. Para cada sistema construído, mapear:

| Sistema | Existe? | Conectado a quê? | Silo (manual)? |
|---------|---------|-----------------|---------------|
| Squad (agentes ativos) | ☐ sim ☐ não | `[ ]` | ☐ sim ☐ não |
| KB (wiki/concepts/) | ☐ sim ☐ não | `[ ]` | ☐ sim ☐ não |
| Automação de leads | ☐ sim ☐ não | `[ ]` | ☐ sim ☐ não |
| Onboarding de clientes | ☐ sim ☐ não | `[ ]` | ☐ sim ☐ não |
| Follow-up de prospects | ☐ sim ☐ não | `[ ]` | ☐ sim ☐ não |
| CRM / pipeline | ☐ sim ☐ não | `[ ]` | ☐ sim ☐ não |
| Proposta (agente-orcamento) | ☐ sim ☐ não | `[ ]` | ☐ sim ☐ não |
| Site / landing page | ☐ sim ☐ não | `[ ]` | ☐ sim ☐ não |

**Identificar os 2–3 silos mais custosos** (onde o operador ainda faz handoff manual).

**Priorização:**
```
Critério: alto impacto × baixo esforço de integração

Silo prioritário 1: [ ]
  → Por que é custoso: [ ]
  → Conexão que resolve: [ ]

Silo prioritário 2: [ ]
  → Por que é custoso: [ ]
  → Conexão que resolve: [ ]
```

---

### Block 3 — Command Center: O Ponto de Orquestração (25 min)

**O que é o Command Center:**

Não é uma nova ferramenta. É um arquivo `.md` no vault do negócio — o `COMMAND-CENTER.md` — que funciona como painel de controle do ecossistema. O operador abre este arquivo e sabe o estado de tudo em 60 segundos.

**Estrutura do `COMMAND-CENTER.md`:**

```markdown
# Command Center — [NOME DO NEGÓCIO]
> Última atualização: [data automática via hook]

## Estado do Squad

| Agente | Status | Última execução | Tarefa atual |
|--------|--------|----------------|-------------|
| [agente-1] | ativo | [data] | [tarefa] |
| [agente-2] | ativo | [data] | [tarefa] |
| [agente-3] | ativo | [data] | [tarefa] |

## Pipeline de Clientes (do CRM neural)

| Estágio | Quantidade | Mais antigo |
|---------|-----------|-------------|
| PROSPECT | [N] | [nome] · [N dias] |
| QUALIFICADO | [N] | [nome] · [N dias] |
| PROPOSTA ENVIADA | [N] | [nome] · [N dias] |
| CLIENTE | [N] | [nome] · [N dias] |

## Tarefas Pendentes (do squad)

- [ ] [tarefa] — responsável: [agente] — prazo: [data]
- [ ] [tarefa] — responsável: [agente] — prazo: [data]

## Alertas Ativos

- [alerta de automação n8n ou manual]

## Relatório Semanal

→ Gerado toda segunda-feira pelo squad (ver Automação de Relatório abaixo)
```

**Construção ao vivo:**

```
1. Criar COMMAND-CENTER.md na raiz do [negocio]-kb/
2. Preencher a seção Estado do Squad com os agentes existentes
3. Integrar o Pipeline do CRM neural (Google Sheets → exportar snapshot)
4. Listar as tarefas pendentes do squad (consolidar de todos os agentes)
```

**CLAUDE.md atualizado para incluir Command Center:**

Adicionar ao topo do CLAUDE.md do negócio:
```markdown
## Command Center

- Arquivo de orquestração: [negocio]-kb/COMMAND-CENTER.md
- Atualizar ao final de cada sessão de trabalho
- Agentes devem reportar ao Command Center ao completar tarefas com impacto no pipeline
```

---

### Block 4 — Automação do Relatório Semanal (25 min)

**O relatório que o squad gera:**

Toda segunda-feira às 08h, o n8n executa uma sequência que:
1. Lê o Google Sheets do CRM (pipeline por estágio)
2. Lê o Google Sheets de tarefas (pendentes + concluídas da semana)
3. Consulta o squad (opcional: agent via Claude API ou via vault context)
4. Formata o relatório
5. Envia para o operador (WhatsApp ou e-mail)
6. Atualiza o COMMAND-CENTER.md com o snapshot da semana

**Fluxo n8n — Relatório Semanal:**

```
[Schedule Trigger] → toda segunda 08h
  ↓
[Google Sheets — Pipeline Read]
  → ler abas: Pipeline, Onboarding, Follow-up
  → filtrar: todos os registros ativos
  ↓
[Google Sheets — Tarefas Read]
  → filtrar: Prazo desta semana + Status = pendente
  ↓
[Code Node — Formatar Relatório]
  → gerar markdown estruturado com:
     - Resumo do pipeline (N por estágio)
     - Tarefas pendentes urgentes (prazo ≤ 3 dias)
     - Alertas (proposals >7 dias sem resposta, clients sem contato >15 dias)
     - Ações recomendadas pelo squad (texto fixo baseado em regras)
  ↓
[HTTP Request — Claude API] (opcional, se operador tem acesso)
  → prompt: "Com base neste snapshot do pipeline, quais são as 3 ações mais importantes desta semana?"
  → retorna síntese em 3 bullets
  ↓
[WhatsApp / Email — Enviar Relatório]
  → para o operador
  ↓
[Google Sheets — Log] (opcional)
  → registrar data de envio do relatório
```

**Code Node — Formatador do relatório:**

```javascript
const pipeline = $('Google Sheets - Pipeline').all();
const tarefas = $('Google Sheets - Tarefas').all();

// Contar por estágio
const estagios = { PROSPECT: 0, QUALIFICADO: 0, PROPOSTA: 0, CLIENTE: 0 };
pipeline.forEach(row => {
  const estagio = row.json['Estágio'];
  if (estagios[estagio] !== undefined) estagios[estagio]++;
});

// Tarefas urgentes (prazo nos próximos 3 dias)
const hoje = new Date();
const limite = new Date();
limite.setDate(hoje.getDate() + 3);

const urgentes = tarefas.filter(row => {
  const prazo = new Date(row.json['Prazo']);
  const status = row.json['Status'];
  return prazo <= limite && status !== 'Concluída';
});

// Montar relatório
const relatorio = `
📊 *RELATÓRIO SEMANAL* — ${hoje.toLocaleDateString('pt-BR')}

*Pipeline:*
• PROSPECT: ${estagios.PROSPECT}
• QUALIFICADO: ${estagios.QUALIFICADO}
• PROPOSTA ENVIADA: ${estagios.PROPOSTA}
• CLIENTES ATIVOS: ${estagios.CLIENTE}

*Tarefas urgentes (≤3 dias):*
${urgentes.length === 0 ? '• Nenhuma' : urgentes.map(t => `• ${t.json['Tarefa']} — ${t.json['Prazo']}`).join('\n')}

*Ações recomendadas:*
• [inserido pelo Claude API ou regra fixa]
`;

return [{ json: { relatorio } }];
```

**Configuração no n8n:**

```
1. Abrir n8n → New Workflow → "Relatório Semanal"
2. Schedule Trigger: Every Week, Monday, 08:00
3. Google Sheets Read (Pipeline) → conectar planilha existente do CRM
4. Google Sheets Read (Tarefas) → conectar planilha de tarefas
5. Code Node → colar o código acima
6. WhatsApp / Gmail → conectar credencial existente
7. Ativar → testar com "Execute Once"
```

---

### Block 5 — Fechar Silos Prioritários (10 min)

Com os 2–3 silos identificados no Block 2, definir a conexão específica para cada um.

**Padrão de conexão de silo:**

```
Silo: [operador faz X manualmente entre sistema A e sistema B]
Conexão: [trigger no sistema A → ação automática no sistema B]
Ferramenta: [n8n webhook / planilha / CLAUDE.md / hook de agente]
Prazo de implementação: [dentro de S18 ou como DESAFIO]
```

**Exemplos de silos comuns e suas conexões:**

| Silo | Causa | Conexão | Ferramenta |
|------|-------|---------|-----------|
| Lead entra, operador precisa copiar para planilha | Formulário não conectado ao CRM | Webhook n8n → Google Sheets | n8n |
| Proposta enviada, follow-up feito manualmente | agente-orcamento não conectado ao CRM | Export do agente dispara stage change | CLAUDE.md + n8n |
| Relatório semanal feito manualmente | Squad não reporta estado | Schedule trigger → relatório automático | n8n (Block 4) |
| KB desatualizada quando negócio muda | Nenhum protocolo de atualização | Memory.md semanal + agente revisor | S08 protocol |
| Conteúdo criado mas não publicado | FREYJA/agente-copy não conectado à publicação | Aprovação → ação de publicação | n8n / manual |

---

### Block 6 — DESAFIO + Próxima Sessão (5 min)

**DESAFIO S18:**

```
ENTREGA 1: COMMAND-CENTER.md criado e preenchido com estado real do ecossistema
ENTREGA 2: Automação de relatório semanal ativa no n8n (testar ao vivo)
ENTREGA 3: 2–3 silos documentados + pelo menos 1 fechado

PRAZO: até S19 (próxima sessão)

VERIFICAÇÃO: O facilitador pede o link do relatório gerado automaticamente
→ se chegou no WhatsApp/e-mail do operador = DESAFIO concluído
```

**Próxima sessão:**
S19 — Integração II: Monetização Neural
> "Você tem um ecossistema funcionando. Em S19, você aprende a transformar esse ecossistema em oferta — e a cobrar por replicar o que construiu."

---

## Artefatos da Sessão

| Artefato | Status | Doc |
|---------|--------|-----|
| Template COMMAND-CENTER.md | 🔲 A criar | — |
| Template fluxo n8n relatório semanal | 🔲 A criar | — |
| Checklist de integração (silos × conexões) | 🔲 A criar | — |

---

## Notas para o Facilitador

**Perfis que chegam em S18 com sistemas mais fracos:**

| Perfil | Situação comum | Ajuste |
|--------|--------------|--------|
| Track A (criador solo) | Tem squad + conteúdo, mas sem CRM | Criar planilha básica de pipeline durante S18 |
| Track B (consultor) | Tem atendimento automatizado, mas sem proposta | Conectar Track C4 antes de S18 ou criar proposta básica em Block 2 |
| Track C (agência) | Tem tudo, mas não integrado | Focar nos silos entre CRM → proposta → follow-up |

**Operadores que não completaram todos os tracks:**
S18 é sobre integrar o que existe — não sobre cobrir o que faltou.
Se o cliente não tem automações (nunca fez C2/C3), usar a integração via CLAUDE.md e handoffs manuais de agentes como substituto temporário.
O COMMAND-CENTER.md funciona sem n8n — apenas como doc de estado.

**Sinal de que S18 funcionou:**
O operador consegue responder em 30 segundos: "Onde está cada cliente no pipeline? Qual agente está com tarefa pendente? Quando chega o próximo relatório?"

Se não conseguir responder as 3 perguntas → voltar ao Block 3 e completar o Command Center.

---

## Connections

- **Fase anterior:** [[runa-intervencao-sessao-track-c4-orcamento-proposta-neural|C4 — ORÇAMENTO$]] (Track C fechado → ESPECIALISTA desbloqueado)
- **Próxima sessão:** [[runa-intervencao-sessao-19-integracao-monetizacao-neural|S19 — Monetização Neural]]
- **Mapa da trilha:** [[mapa-mental-trilha-21-sessoes]]
- **Trilha detalhada:** [[trilha-runa-21-sessoes]]
- **PRD:** [[runa-mentoria-prd]]
