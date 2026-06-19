---
date: 2026-04-21
tags: [runa-intervencao, mentoria, track-a, creator, sistema-conteudo, especializacao]
project: runa-systems-global
type: lesson-structure
fase: 5 — ESPECIALIZAÇÃO
track: A — Criador / Agência de Conteúdo
codigo: A1
titulo: CREATOR$ I — Sistema de Conteúdo com Agentes
anterior: sessao-08-mind-memoria-evolucao
proximo: track-a2-creator-automacao-publicacao
---

# Runa Intervenção — Track A1: CREATOR$ I — Sistema de Conteúdo com Agentes

> **Purpose:** Construir o pipeline completo de produção de conteúdo com agentes — do briefing à publicação. O cliente passa a ter um sistema que produz conteúdo consistente sem depender de inspiração diária.
> **Output:** Pipeline de conteúdo operacional com pelo menos 3 agentes integrados + 1 semana de conteúdo produzida pelo sistema.
> **Track:** A — Criador / Agência de Conteúdo. Selecionado em S01 para clientes com foco em conteúdo como principal alavanca de negócio.

---

## Session Structure (90–120 min)

### BLOCK 1 — Framing (10 min)

**Key message:**

> "A maioria das pessoas trata conteúdo como criação. Você vai tratar como produção. Uma fábrica não espera inspiração — ela tem um processo. O pipeline que você vai construir hoje funciona como uma fábrica: entrada de insumos (briefing, tendências, sua voz), processamento (agentes especializados), saída de produto (conteúdo pronto para publicar)."

**A diferença entre criação e produção:**

| Criação (antes) | Produção (depois) |
|----------------|-----------------|
| Quando há inspiração | Diário, independe de humor |
| Você faz tudo | Agentes fazem as partes replicáveis |
| 3h por post | 20 min por lote semanal |
| Volume inconsistente | Volume previsível e escalável |
| Qualidade variável | Qualidade dentro de um padrão |

---

### BLOCK 2 — Anatomia do Pipeline de Conteúdo (20 min)

**Os 5 estágios do pipeline:**

```
ESTÁGIO 1 — BRIEFING
   ↓
   Input: tema da semana, objetivos, contexto de negócio
   Agente: CEO Neural (estratégia) ou [agente orquestrador]
   Output: Briefing estruturado com 5–7 pautas

ESTÁGIO 2 — PESQUISA DE REFERÊNCIAS
   ↓
   Input: pautas do briefing
   Agente: [agente de pesquisa] ou orquestrador com web search
   Output: 3 referências por pauta (gancho, formato, ângulo)

ESTÁGIO 3 — ROTEIRO / COPY
   ↓
   Input: pauta + referências
   Agente: Copy Neural
   Output: texto completo do post/legenda/roteiro

ESTÁGIO 4 — REVISÃO E VOZ
   ↓
   Input: draft do copy
   Agente: [agente de voz — persona do criador]
   Output: texto no tom e estilo do criador (ajustes de voz)

ESTÁGIO 5 — PREPARAÇÃO PARA PUBLICAÇÃO
   ↓
   Input: texto revisado
   Agente: [agente de distribuição]
   Output: post formatado por plataforma + hashtags + horário sugerido
```

**Por que 5 estágios e não 1:**

> "Um agente único tentando fazer tudo — briefar, pesquisar, escrever, revisar, formatar — produz resultado mediano em todos. Cinco agentes especializados, cada um excelente no seu estágio, produzem resultado de especialista em cada etapa."

---

### BLOCK 3 — Construção do Pipeline (35 min)

**Objective:** O cliente constrói os 3 agentes core do pipeline ao vivo.

**Agente 1 — Estrategista de Conteúdo:**

```yaml
name: estrategista-conteudo
persona: |
  Você é o estrategista de conteúdo de [Nome do Criador].
  Sua função é transformar o tema da semana em pautas acionáveis.

scope:
  can:
    - Criar briefing semanal com 5–7 pautas
    - Classificar pautas por formato (carrossel/reel/legenda/thread)
    - Priorizar pautas por potencial de engajamento
    - Identificar o gancho de abertura de cada pauta
  cannot:
    - Escrever o copy completo (delegar ao Copy Neural)
    - Definir estratégia de longo prazo sem input do fundador

vault_reference: [vault-do-criador]/wiki/

commands:
  - "*briefing [tema]" → gera briefing semanal completo
  - "*pauta [tema]" → gera 1 pauta detalhada
  - "*priorizar" → ranqueia pautas da semana por impacto
```

**Agente 2 — Copy Neural (especializado em conteúdo):**

```yaml
name: copy-conteudo
persona: |
  Você é o copy neural de [Nome do Criador].
  Você escreve no tom e voz de [Nome] — [descrição da voz: direta, provocativa, com exemplos concretos].
  Você nunca escreve conteúdo genérico. Cada post começa com uma dor real ou insight contraintuitivo.

scope:
  can:
    - Escrever legendas, roteiros de reel, scripts de carrossel
    - Adaptar o mesmo conteúdo para diferentes plataformas
    - Criar variações de gancho para A/B test
  cannot:
    - Definir a pauta (delegar ao estrategista-conteudo)
    - Publicar (delegar ao agente de distribuição)

memory_reference: [vault]/wiki/memory/copy-conteudo-memory.md
vault_reference: [vault]/wiki/

commands:
  - "*legenda [pauta]" → gera legenda completa
  - "*roteiro [pauta]" → gera roteiro de reel (300–500 palavras)
  - "*carrossel [pauta]" → gera copy de todos os slides
  - "*variacoes [hook]" → gera 5 variações de gancho
```

**Agente 3 — Distribuição:**

```yaml
name: agente-distribuicao
persona: |
  Você é o agente de distribuição de conteúdo de [Nome].
  Você formata o conteúdo para cada plataforma e sugere timing de publicação.

scope:
  can:
    - Adaptar texto para formato Instagram (legenda + hashtags)
    - Adaptar para LinkedIn (tom mais profissional, sem hashtags em excesso)
    - Adaptar para Twitter/X (thread ou post único)
    - Sugerir horário de publicação com base no histórico

commands:
  - "*formatar [plataforma] [copy]" → adapta para a plataforma
  - "*hashtags [tema]" → sugere hashtags relevantes
  - "*calendario" → monta calendário visual da semana
```

**Live exercise:** O cliente executa o pipeline completo para 1 pauta — do briefing ao post formatado. Tempo: 15–20 minutos.

---

### BLOCK 4 — Worker de Produção Semanal (20 min)

**Objective:** Automatizar o pipeline em um worker que roda uma vez por semana.

**Worker — Produção Semanal de Conteúdo:**

```markdown
# Worker — Produção Semanal de Conteúdo

> Frequência: Segunda-feira
> Tempo estimado: 30–40 min (incluindo revisão humana)
> Status: Rascunho → validar em A1

## Trigger
Todo início de semana (segunda-feira, antes de começar o trabalho).

## Input Necessário
| Input | Fonte | Obrigatório? |
|-------|-------|-------------|
| Temas da semana (2–3) | Calendário editorial ou decisão do fundador | Sim |
| Contexto atual do negócio | wiki/hot.md | Auto |
| Histórico de posts | [pasta de posts] ou referência | Não |

## Sequência

### Passo 1 — Briefing estratégico
@estrategista-conteudo *briefing [temas da semana]
Output: 5–7 pautas classificadas por formato e prioridade

### Passo 2 — Produção de copy
Para cada pauta prioritária (3–5):
@copy-conteudo *[formato] [pauta]
Output: copy completo por formato

### Passo 3 — Revisão de voz
[Fundador revisa e ajusta manualmente — 10 min máximo]
Foco: está no meu tom? Tem algo que não diria?

### Passo 4 — Formatação e calendário
@agente-distribuicao *calendario
Output: calendário da semana com posts formatados por plataforma

## Critério de Sucesso
- [ ] 5 posts produzidos (mínimo)
- [ ] Pelo menos 1 de cada formato (carrossel, reel, legenda longa)
- [ ] Revisão humana concluída em até 10 min
- [ ] Calendário preenchido com horários

## Log de Execuções
| Data | Duração | Posts produzidos | Revisão necessária | Observação |
|------|---------|-----------------|-------------------|-----------|
| | | | | |
```

---

### BLOCK 5 — Desafio A1 (5 min)

**DESAFIO TRACK A1:**

```
Antes de A2:

1. PIPELINE OPERACIONAL: 3 agentes criados e integrados no workflow

2. 1 SEMANA PRODUZIDA: 5+ posts gerados pelo pipeline (mínimo 2 formatos)

3. WORKER VALIDADO: Rodou 1 vez completo sem intervenção no meio

4. CALIBRAÇÃO DE VOZ: Memory.md do copy-conteudo com 3+ entradas
   de ajustes de voz específicos do criador

5. TEMPO DOCUMENTADO: Quanto tempo levou cada etapa — para
   comparar com o próximo ciclo
```

**O que vem em A2:**
> "Em A2 você vai automatizar a publicação — o conteúdo produzido em A1 vai ao ar sem você precisar fazer upload manual. O pipeline vai de produção para distribuição autônoma."

---

## Facilitator Notes

### Ajuste por tipo de criador

| Perfil | Foco em A1 | Ajuste |
|--------|-----------|--------|
| Criador solo | Velocidade — 5 posts em 30 min | Simplificar pipeline: 2 agentes em vez de 3 |
| Agência de conteúdo | Volume — 20+ posts por semana | Pipeline com agentes paralelos por cliente |
| Consultor criando conteúdo | Posicionamento — autoridade no nicho | Enfatizar Block 2 estágio de pesquisa de referências |

### Problema mais comum em A1

**A voz do criador fica diluída** — o conteúdo parece feito por IA, não pela pessoa.

Solução: o Memory.md do copy-conteudo precisa ter pelo menos 5 exemplos de textos que o criador escreveu e considerou "100% no meu tom". O agente usa esses exemplos como calibrador.

---

## Session Artifacts

| Artefato | Quando usar | Arquivo |
|----------|------------|---------|
| Template Pipeline de Conteúdo | Block 3 — scaffold dos agentes | [[template-pipeline-conteudo]] |
| Worker Semanal | Block 4 — automação | Incluído no doc acima |
| Checklist de Voz do Criador | Calibração do copy-conteudo | [[checklist-voz-criador]] |

---

## Connections

- **Fase anterior:** [[runa-intervencao-sessao-08-mind-memoria-evolucao|S08 — MIND$ II]]
- **Próxima:** [[runa-intervencao-sessao-track-a2-creator-automacao-publicacao|A2 — CREATOR$ II · Automação de Publicação]]
- **Referência produto:** [[runa-mentoria-prd]] — PRD RUNA SYSTEMS
