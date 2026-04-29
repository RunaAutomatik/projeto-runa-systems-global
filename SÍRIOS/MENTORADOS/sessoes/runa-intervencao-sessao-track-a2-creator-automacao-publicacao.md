---
date: 2026-04-21
tags: [runa-intervencao, mentoria, track-a, creator, automacao-publicacao, especializacao]
project: runa-systems-global
type: lesson-structure
fase: 5 — ESPECIALIZAÇÃO
track: A — Criador / Agência de Conteúdo
codigo: A2
titulo: CREATOR$ II — Automação de Publicação
anterior: track-a1-creator-sistema-conteudo
proximo: track-a3-creator-cowork-entregaveis
---

# Runa Intervenção — Track A2: CREATOR$ II — Automação de Publicação

> **Purpose:** Eliminar o trabalho manual de agendamento e repurposing. O conteúdo produzido em A1 vai ao ar sem upload manual, e cada peça de conteúdo gera automaticamente versões para outras plataformas.
> **Output:** Pipeline de publicação automatizado operacional + sistema de repurposing que transforma 1 peça de conteúdo em 3–5 formatos distintos.
> **Track:** A — Criador / Agência de Conteúdo. Continuação de A1.

---

## Session Structure (90–120 min)

### BLOCK 1 — Framing (10 min)

**Key message:**

> "Em A1 você criou a fábrica. O problema é que a fábrica ainda depende de você para fazer a entrega. Você produz o conteúdo, mas ainda precisa abrir o Instagram, fazer o upload, escolher a hora, postar. Isso é distribuição manual num sistema que deveria ser autônomo. Em A2 você fecha esse loop: o conteúdo que saiu da fábrica vai ao ar sozinho."

**A diferença entre produção e distribuição autônoma:**

| Produção (A1) | Distribuição autônoma (A2) |
|--------------|--------------------------|
| Conteúdo gerado pelos agentes | Conteúdo agendado automaticamente |
| Copy pronto para publicar | Copy formatado + publicado via worker |
| 1 formato por plataforma | 1 peça → 3–5 formatos automaticamente |
| Você faz o upload | Upload automático via API |
| Você escolhe a hora | Horário otimizado definido por regra |
| 5 decisões por post | 0 decisões operacionais por post |

**O que muda com repurposing automático:**

> "Você vai gravar 1 reel. Esse reel vai automaticamente se tornar: a legenda no Instagram, a thread no X, o post longo no LinkedIn e o trecho da newsletter. O trabalho feito uma vez distribui em quatro canais sem você tocar em nada."

---

### BLOCK 2 — Arquitetura de Publicação (20 min)

**Os 3 componentes do sistema:**

```
COMPONENTE 1 — AGENDADOR
   Função: decidir QUANDO cada post vai ao ar
   Ferramenta: Calendário editorial (arquivo .md) + regras de horário por plataforma
   Agente responsável: agente-distribuicao (*horario, *calendario)

COMPONENTE 2 — PUBLISHER
   Função: enviar o conteúdo para a plataforma no horário certo
   Ferramenta: API da plataforma (Instagram Graph API / LinkedIn API / Buffer / Zernio)
   Agente responsável: worker de publicação (não é um agente de conversa — é automação)

COMPONENTE 3 — REPURPOSING
   Função: transformar 1 peça em múltiplos formatos
   Ferramenta: agente de repurposing (recebe o conteúdo original e adapta)
   Agente responsável: agente-repurposing (novo — criado em A2)
```

**Decisão de ferramenta de publicação:**

| Ferramenta | Quando escolher | Trade-off |
|-----------|----------------|----------|
| **Zernio API** | Multicanal, já tem integração no stack | Requer configuração de conta + OAuth |
| **Buffer** | Interface visual, menos técnico | Custo mensal, menos automação |
| **Instagram Graph API direto** | Controle total, sem intermediário | Mais complexo de configurar |
| **n8n + Zernio** | Automação completa com triggers | Requer n8n operacional |

> **Recomendação padrão:** Zernio API via n8n para clientes com stack já configurado. Buffer como fallback para clientes menos técnicos.

---

### BLOCK 3 — Agente de Repurposing (25 min)

**Objetivo:** Criar o agente que transforma 1 peça em múltiplas plataformas automaticamente.

**Agente 4 — Repurposing:**

```yaml
name: agente-repurposing
persona: |
  Você é o agente de repurposing de [NOME DO CRIADOR].
  Sua função é transformar uma peça de conteúdo em versões adaptadas para
  cada plataforma — mantendo a essência, ajustando o formato e o tom.
  Você não escreve do zero — você adapta.
  O conteúdo original é a matéria-prima. Você é a máquina de adaptação.

scope:
  can:
    - Transformar reel em legenda de carrossel
    - Transformar legenda em thread de X/Twitter
    - Transformar reel em post longo para LinkedIn
    - Extrair o trecho mais forte para story (15 segundos)
    - Criar versão de newsletter (300–500 palavras) a partir de qualquer formato
    - Adaptar o gancho original para cada plataforma (sem repetir idêntico)
  cannot:
    - Criar conteúdo original — precisa de input do copy-conteudo ou do fundador
    - Publicar — entregar ao agente-distribuicao
    - Alterar o argumento central — adaptar o formato, não a ideia

memory_reference: [VAULT]/wiki/memory/agente-repurposing-memory.md

commands:
  - "*repurpose [plataforma] [conteudo]" → adapta para a plataforma especificada
  - "*atomizar [conteudo]" → gera versões para todas as plataformas ativas de uma vez
  - "*story [conteudo]" → extrai o trecho mais forte em ≤ 15 segundos de leitura
  - "*newsletter [conteudo]" → cria versão newsletter (300–500 palavras)
  - "*thread [conteudo]" → transforma em thread de 6–10 tweets
  - "*linkedin [conteudo]" → adapta para tom profissional do LinkedIn

regras_de_adaptacao:
  por_plataforma:
    instagram:
      - Manter o gancho original ou criar variação próxima
      - Comprimento: 800–1.500 caracteres (legenda longa)
      - Emojis: manter padrão do criador
      - Hashtags: 10–15 ao final
    twitter_x:
      - Primeiro tweet: gancho forte (≤ 280 caracteres)
      - Thread: 6–10 tweets, numerados
      - Último tweet: CTA + link (se houver)
      - Tom: mais conversacional, pode usar humor
    linkedin:
      - Tom: mais profissional, sem gírias
      - Comprimento: 1.200–2.000 caracteres
      - Hashtags: máx 5, relevantes ao nicho
      - Primeiro parágrafo: gancho sem emoji
    newsletter:
      - Introdução contextualizando o tema (2–3 frases)
      - Desenvolvimento do argumento principal (3–4 parágrafos)
      - Conclusão + CTA claro
      - Tom: mais próximo, como carta para um leitor específico
```

**Live exercise:** Pegar o post criado em A1 (o post do exercício ao vivo) e atomizá-lo. O cliente usa `*atomizar [post-a1]` e recebe versões para todas as plataformas em uma única execução.

---

### BLOCK 4 — Worker de Publicação (25 min)

**Objetivo:** Criar o worker que conecta o conteúdo pronto ao sistema de publicação.

**Worker — Publicação Automática:**

```markdown
# Worker — Publicação Automática

> Frequência: Conforme calendário editorial
> Trigger: Conteúdo aprovado na pasta de publicação
> Status: Rascunho → validar em A2

## Pré-requisito

Conteúdo produzido e aprovado pelo fundador (saiu do pipeline de A1).
Arquivo de calendário atualizado com posts agendados.

## Sequência

### Passo 1 — Verificar conteúdo pronto
Ler arquivo: [pasta-publicacao]/pendentes/
Verificar: tem post com status "aprovado" e data de publicação?

### Passo 2 — Repurposing (se não feito na produção)
Se post ainda não tem versões para outras plataformas:
@agente-repurposing *atomizar [post-aprovado]
Output: versões para cada plataforma ativa

### Passo 3 — Formatar e verificar
@agente-distribuicao *verificar [copy] [plataforma]
Confirmar: comprimento correto, hashtags presentes, horário definido

### Passo 4 — Publicar
Via Zernio API (ou Buffer):
- Instagram: POST /posts/create com legenda + mídia + horário
- LinkedIn: POST /posts/create com versão LinkedIn + horário
- X/Twitter: POST /posts/create com thread + horário

### Passo 5 — Registrar
Mover arquivo de pendentes → publicados/
Registrar em wiki/log.md: | DATA | post | TÍTULO | instagram,linkedin,x | publicado |

## Critério de Sucesso
- [ ] Post publicado no horário correto
- [ ] Versões corretas para cada plataforma
- [ ] Log atualizado
- [ ] Nenhuma intervenção manual necessária

## O que requer intervenção manual
- Mídia não encontrada (imagem/vídeo ausente) → notificar fundador
- Erro de API → registrar no log + notificar fundador
- Post com status "revisar" → não publicar até aprovação

## Log de Execuções
| Data | Posts publicados | Plataformas | Erros | Observação |
|------|-----------------|------------|-------|-----------|
| | | | | |
```

**Configuração mínima para ativar o worker:**

```markdown
# Configuração do Worker de Publicação

## Credenciais (armazenar em .env — NUNCA no CLAUDE.md)
INSTAGRAM_TOKEN=[token da Graph API ou Zernio]
LINKEDIN_TOKEN=[token da LinkedIn API]
TWITTER_TOKEN=[token da X/Twitter API]
ZERNIO_API_KEY=[chave da Zernio API]

## Pastas
PASTA_PENDENTES=[caminho]/publicacao/pendentes/
PASTA_PUBLICADOS=[caminho]/publicacao/publicados/

## Plataformas ativas
plataformas: [instagram, linkedin, twitter_x]

## Horários padrão (fallback se não definido no post)
instagram: "19:00"
linkedin: "08:00"
twitter_x: "12:00, 19:00"
```

---

### BLOCK 5 — Desafio A2 (5 min)

**DESAFIO TRACK A2:**

```
Antes de A3:

1. REPURPOSING ATIVO: 1 post produzido em A1 transformado em versões
   para pelo menos 3 plataformas diferentes

2. WORKER DE PUBLICAÇÃO: Configurado e testado com 1 post real
   (publicado ou agendado com sucesso via API)

3. ATOMIZAÇÃO VALIDADA: Usou *atomizar pelo menos 3 vezes — o output
   está no tom certo sem edição manual além de 5 minutos?

4. CALENDÁRIO PREENCHIDO: 2 semanas de conteúdo no calendário editorial
   com posts prontos para publicação automática

5. TEMPO DOCUMENTADO: Quanto tempo levou a publicação manual antes
   vs. quanto leva agora — para quantificar o ganho
```

**O que vem em A3:**

> "Em A3 você vai usar o Claude.ai Projects como co-criador para entregáveis longos — e-books, guias, scripts de cursos. O sistema deixa de produzir só posts e passa a produzir produtos completos."

---

## Facilitator Notes

### Ajuste por nível técnico

| Perfil | Foco em A2 | Ajuste |
|--------|-----------|--------|
| Criador solo (menos técnico) | Buffer para publicação, repurposing manual com agente | Simplificar — só 2 plataformas |
| Criador solo (técnico) | Zernio API + worker completo | Pipeline completo com n8n |
| Agência de conteúdo | Escala — worker gerenciando múltiplos clientes | Workers com namespace por cliente |

### Problema mais comum em A2

**O repurposing soar repetitivo** — o conteúdo adaptado para LinkedIn parece cópia do Instagram apenas levemente modificada.

Solução: o agente de repurposing precisa ter no Memory.md pelo menos 1 exemplo de como o criador se comporta DIFERENTEMENTE em cada plataforma. O criador que é mais informal no Instagram tem um LinkedIn mais estruturado — o agente precisa saber isso.

### Se o cliente não tem API configurada ainda

Opção intermediária: worker de "preparação para publicação" — organiza o conteúdo em pastas nomeadas por plataforma e horário, o fundador usa o Buffer para fazer upload em lote (5 min/semana vs. 30 min/semana individual).

---

## Session Artifacts

| Artefato | Quando usar | Arquivo |
|----------|------------|---------|
| Template Agente Repurposing | Block 3 — scaffold do agente | [[template-pipeline-conteudo]] (seção repurposing) |
| Worker de Publicação | Block 4 — automação | Incluído no doc acima |
| Guia de Configuração de API | Block 4 — credenciais e endpoints | [[guia-configuracao-api-publicacao]] |

---

## Connections

- **Fase anterior:** [[runa-intervencao-sessao-track-a1-creator-sistema-conteudo|A1 — CREATOR$ I]]
- **Próxima:** [[runa-intervencao-sessao-track-a3-creator-cowork-entregaveis|A3 — †COWORK I · Co-criação de Entregáveis Longos]]
- **Referência produto:** [[runa-mentoria-prd]] — PRD RUNA SYSTEMS
