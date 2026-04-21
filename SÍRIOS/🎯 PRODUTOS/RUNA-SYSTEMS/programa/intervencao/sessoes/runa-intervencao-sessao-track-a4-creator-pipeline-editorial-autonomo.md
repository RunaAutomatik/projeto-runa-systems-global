---
date: 2026-04-21
tags: [runa-intervencao, mentoria, track-a, creator, pipeline-editorial, autonomo, especializacao]
project: runa-systems-global
type: lesson-structure
fase: 5 — ESPECIALIZAÇÃO
track: A — Criador / Agência de Conteúdo
codigo: A4
titulo: "†COWORK II — Pipeline Editorial Autônomo"
anterior: track-a3-creator-cowork-entregaveis
proximo: sessao-18-integracao-orquestracao-total
---

# Runa Intervenção — Track A4: †COWORK II — Pipeline Editorial Autônomo

> **Purpose:** Integrar Claude Code + Claude.ai Projects em um pipeline editorial onde a produção de conteúdo, a criação de entregáveis e a publicação operam como um sistema contínuo — com mínima intervenção humana. O criador passa a ser o curador, não o operador.
> **Output:** Pipeline editorial completo e documentado, rodando em ciclo semanal — do briefing à publicação, passando por entregáveis longos, sem que o fundador toque em cada etapa.
> **Track:** A — Criador / Agência de Conteúdo. Sessão final do Track A.

---

## Session Structure (90–120 min)

### BLOCK 1 — Framing (10 min)

**Key message:**

> "Em A1 você tinha agentes. Em A2 eles publicavam. Em A3 eles criavam entregáveis longos. O que ainda falta? A integração. Cada sistema funciona — mas você ainda está no meio conectando um ao outro. O pipeline editorial autônomo remove você desse meio. Você define a estratégia uma vez por semana. O sistema executa o restante."

**A evolução do criador com IA:**

```
NÍVEL 0 — Criador manual
  Você faz tudo: ideia → escreve → design → posta
  Tempo: 15–20h/semana em conteúdo

NÍVEL 1 — Criador assistido (A1)
  Agentes ajudam na escrita. Você ainda decide e executa cada etapa.
  Tempo: 5–8h/semana em conteúdo

NÍVEL 2 — Criador automatizado (A1 + A2)
  Pipeline produz e publica. Você revisa e aprova.
  Tempo: 2–3h/semana em conteúdo

NÍVEL 3 — Criador curador (A1 + A2 + A3 + A4)
  Pipeline editorial completo. Você define tema, o sistema executa.
  Tempo: 30–60 min/semana para briefing + curadoria
  (+ 2h/mês para entregáveis longos)
```

> "O objetivo de A4 não é eliminar você do processo. É reduzir sua participação ao que só você pode fazer: decidir a direção. O resto é execução — e execução pode ser delegada."

---

### BLOCK 2 — Arquitetura do Pipeline Integrado (20 min)

**O pipeline completo — visão de cima:**

```
SEGUNDA-FEIRA (30 min — fundador)
   │
   ├── Briefing semanal
   │   Input: temas, contexto de negócio
   │   Tool: Claude Code + @estrategista-conteudo
   │   Output: 5–7 pautas classificadas
   │
   ├── Seleção e aprovação
   │   Fundador seleciona 3–5 pautas do briefing
   │   (única decisão editorial da semana)
   │
   └── Trigger do pipeline
       Worker recebe as pautas aprovadas e inicia o ciclo

SEGUNDA A QUINTA (automático)
   │
   ├── Produção de copy
   │   @copy-conteudo produz cada formato por pauta
   │   Worker executa em batch — todos os posts da semana de uma vez
   │
   ├── Repurposing
   │   @agente-repurposing atomiza cada post para as plataformas ativas
   │
   ├── Revisão de voz (opcional — se configurado)
   │   Worker sinaliza posts para revisão ou publica direto (modo YOLO)
   │
   └── Agendamento
       @agente-distribuicao monta calendário + define horários

SEXTA-FEIRA (15 min — fundador)
   │
   ├── Curadoria semanal
   │   Rever o que vai ao ar — ajustar se necessário
   │
   └── Protocolo de KB (de S08)
       Atualizar Memory.md + hot.md com aprendizados da semana

SÁBADO/DOMINGO (automático)
   │
   └── Worker de publicação
       Posts vão ao ar nos horários definidos

MENSAL (2h — fundador + Project)
   │
   └── Entregável longo
       Usar Project configurado em A3 para produzir
       1 e-book / guia / script de curso
```

**Os dois modos de operação:**

| Modo | Revisão antes da publicação | Quando usar |
|------|---------------------------|-------------|
| **Curado** | Fundador revisa cada post antes de ir ao ar | Início — enquanto o agente ainda está calibrando a voz |
| **Autônomo (YOLO)** | Posts vão ao ar direto após produção | Quando o Memory.md do copy-conteudo tem 10+ entradas calibradas |

> "Você começa no modo Curado. Quando você perceber que está aprovando posts sem editar nada — o agente está calibrado. Aí você migra para o modo Autônomo."

---

### BLOCK 3 — Integração Code + Projects (25 min)

**Objetivo:** Conectar o Claude Code (executor) com o Claude.ai Projects (co-criador de longa duração) em um fluxo contínuo.

**O papel de cada ferramenta:**

| Ferramenta | O que faz no pipeline | Frequência |
|-----------|----------------------|-----------|
| **Claude Code** | Executa workers, roda agentes, processa arquivos, conecta APIs | Diário |
| **Claude.ai Projects** | Co-criação de entregáveis longos, manutenção de contexto editorial de longo prazo | Semanal/mensal |
| **Vault (AKASHA / KB)** | Memória do negócio — ICP, processos, voz, histórico | Consultado por ambos |

**Ponto de integração — como os dois sistemas se comunicam:**

```
Claude Code (executor semanal)
   │
   ├── Produz copy da semana (A1 workflow)
   ├── Executa repurposing (A2 workflow)
   ├── Agenda e publica (A2 workflow)
   │
   └── Gera INPUT para o Project:
       → Salva em arquivo: [vault]/editorial/contexto-semana-YYYY-MM-DD.md
          Conteúdo: temas da semana, posts produzidos, engajamento relevante,
          ideias geradas no processo que não viraram post
       → O Project lê este arquivo na próxima sessão de entregável longo

Claude.ai Project (co-criador mensal)
   │
   ├── Lê contexto-semana acumulado dos últimos 30 dias
   ├── Identifica padrões: quais temas geraram mais engajamento?
   │   Quais ângulos o ICP respondeu melhor?
   │
   └── Usa esses insights para orientar o entregável do mês
       → E-book sobre o tema que mais ressoou
       → Script de aula expandindo o post mais salvo
       → Guia prático do processo mais perguntado nos comentários
```

**Worker — Contexto Editorial Semanal:**

```markdown
# Worker — Registro de Contexto Editorial

> Frequência: Sexta-feira, após o pipeline semanal
> Tempo: 5 min (automático com revisão de 2 min)
> Arquivo de saída: [vault]/editorial/contexto-semana-[DATA].md

## Template de saída

---
data: [DATA]
posts_produzidos: [N]
plataformas: [lista]
---

# Contexto Editorial — Semana de [DATA]

## Posts desta semana

| Pauta | Formato | Plataformas | Destaque |
|-------|---------|------------|---------|
| [pauta 1] | [formato] | [plataformas] | [o que foi diferente/interessante] |

## Ideias geradas mas não usadas

[Ângulos, ganchos ou temas que surgiram no processo mas não viraram post]

## Padrões observados

[O que o agente notou durante a produção — só se relevante]

## Pergunta para o próximo entregável

[Com base no conteúdo desta semana, qual tema merece ser aprofundado num guia?]
```

---

### BLOCK 4 — Documentando o Sistema (15 min)

**Objetivo:** Criar a documentação operacional do pipeline para que o sistema possa ser auditado, ajustado e ensinado.

**Documento operacional — Pipeline Editorial de [NOME]:**

```markdown
# Pipeline Editorial — [NOME DO CRIADOR]

> Versão: 1.0 — A4 — [DATA]
> Última revisão: [DATA]

## Visão do sistema

[1 parágrafo — o que este pipeline faz e quem depende dele]

## Agentes ativos

| Agente | Função | Arquivo | Frequência de uso |
|--------|--------|---------|------------------|
| estrategista-conteudo | Briefing semanal | squad/ | Toda segunda |
| copy-conteudo | Produção de copy | squad/ | Toda semana |
| agente-distribuicao | Formatação e calendário | squad/ | Toda semana |
| agente-repurposing | Adaptação por plataforma | squad/ | Toda semana |

## Workers ativos

| Worker | Quando roda | O que faz |
|--------|------------|----------|
| Worker Produção Semanal | Segunda-feira | Briefing → copy → repurposing |
| Worker Publicação | Conforme calendário | Publicação via API |
| Worker Contexto Editorial | Sexta-feira | Registra contexto para o Project |

## Calendário operacional

Segunda: Briefing + seleção de pautas (30 min — fundador)
Seg–Qui: Produção e repurposing (automático)
Quinta: Revisão curada — se modo Curado (15 min — fundador)
Sexta: Curadoria final + protocolo de KB (15 min — fundador)
Sáb/Dom: Publicação automática
Mensal: Sessão de entregável longo no Project (2h — fundador)

## Modo atual de operação

[ ] Curado — revisão antes de publicar
[ ] Autônomo — publica direto após produção

## Critério para migrar para modo Autônomo

Preencher quando:
- [ ] Memory.md do copy-conteudo tem 10+ entradas calibradas
- [ ] 3 semanas consecutivas sem edição manual de copy
- [ ] Fundador confirma: "está no meu tom"

## Histórico de atualizações

| Data | Mudança | Por quê |
|------|---------|--------|
| [DATA] | v1.0 — pipeline criado | A4 — Runa Intervenção |
```

---

### BLOCK 5 — Desafio Final do Track A + Conquista ESPECIALISTA (10 min)

**DESAFIO FINAL TRACK A:**

```
Para concluir o Track A e desbloquear o título ESPECIALISTA:

CHECKLIST DO PIPELINE COMPLETO:

□ A1 — SISTEMA DE CONTEÚDO
  ✓ 3 agentes criados e operacionais
  ✓ 1 semana de conteúdo produzida pelo pipeline
  ✓ Memory.md do copy-conteudo com 5+ entradas calibradas

□ A2 — AUTOMAÇÃO DE PUBLICAÇÃO
  ✓ Agente de repurposing operacional
  ✓ Worker de publicação configurado e testado
  ✓ 1 post publicado via automação (não manual)

□ A3 — ENTREGÁVEIS LONGOS
  ✓ Project configurado com 4 arquivos de knowledge
  ✓ 1 entregável completo produzido (min. 2.000 palavras)
  ✓ Calendário de entregáveis dos próximos 3 meses

□ A4 — PIPELINE INTEGRADO
  ✓ Documento operacional do pipeline completo e assinado
  ✓ 1 ciclo semanal completo rodou sem intervenção no meio
  ✓ Contexto editorial registrado para alimentar o Project do mês

PROVA FINAL:
  Demo ao vivo — do briefing ao post publicado, mostrando cada etapa
  do pipeline operando. Sem intervenção manual na parte de execução.
```

**⚔️ ESPECIALISTA DESBLOQUEADO** — ao concluir os critérios acima.

> "Você construiu um sistema de conteúdo que funciona enquanto você dorme. A maioria dos criadores vai continuar fazendo tudo manualmente pelos próximos 5 anos. Você não."

**O que vem nas próximas fases:**

> "Na Fase 6 — Integração, você vai conectar o pipeline de conteúdo com o resto do seu ecossistema: a base de conhecimento, o squad neural e as automações de negócio. O conteúdo deixa de ser um silo e passa a alimentar o sistema inteiro."

---

## Facilitator Notes

### Ajuste para criadores com stack diferente

| Situação | Ajuste |
|---------|--------|
| Cliente não tem n8n | Workers como arquivos .md com instruções manuais semi-automatizadas |
| Cliente usa agência | Pipeline configurado para a agência operar — não o criador |
| Cliente já tem sistema próprio | A4 foca em integrar o que existe, não substituir |

### Sinal de pipeline maduro

O pipeline está maduro quando o criador abre o calendário na sexta-feira e os posts estão lá — prontos, no tom certo — e ele não lembra de ter feito nada para que isso acontecesse.

### Problema mais comum em A4

**Complexidade excessiva** — o cliente tenta automatizar tudo de uma vez e o sistema queima.

Solução: começar no modo Curado. Publicação manual ainda é publicação. A automação entra aos poucos — primeiro o repurposing, depois o agendamento, por último a publicação direta.

---

## Session Artifacts

| Artefato | Quando usar | Arquivo |
|----------|------------|---------|
| Template Documento Operacional do Pipeline | Block 4 — documentação | Incluído no doc acima |
| Worker de Contexto Editorial | Block 3 — integração Code + Projects | Incluído no doc acima |

---

## Connections

- **Fase anterior:** [[runa-intervencao-sessao-track-a3-creator-cowork-entregaveis|A3 — †COWORK I · Co-criação de Entregáveis Longos]]
- **Próxima:** [[runa-intervencao-sessao-18-integracao-orquestracao-total|S18 — Integração I · Orquestração Total]]
- **Referência produto:** [[runa-mentoria-prd]] — PRD RUNA SYSTEMS
