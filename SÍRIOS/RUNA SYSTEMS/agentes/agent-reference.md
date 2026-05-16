---
date: 2026-05-02
tags: [agentes, reference, aiox, squad, runa-systems, capability]
project: runa-systems-global
type: agent-reference
produto: [[runa-systems-hub]]
---

# Agent Reference — RUNA SYSTEMS Ecosystem

> Documento central de referência para todos os agentes ativos no ecossistema RUNA SYSTEMS.
> Inclui: papel, tasks, skills, ferramentas, relações de handoff e regras de autoridade.
> Fonte de verdade operacional — atualizar sempre que um agente for modificado ou adicionado.

---

## Mapa de Agentes

```
NEGÓCIO (Neural Agents)
  FREYJA   — Narrativa, copy, conteúdo
  MAYA     — Produção audiovisual
  ARES     — Ofertas, produto, estratégia
  HERMES   — Automação, clientes, canais
  HELIOS   — SEO e visibilidade digital
  ODIN     — Pesquisa e análise

CONHECIMENTO & ORQUESTRAÇÃO
  ORION    — Vault, conhecimento, onboarding

DESENVOLVIMENTO (AIOX Functional Agents)
  @dev     — Implementação de código
  @qa      — Qualidade e testes
  @architect — Arquitetura de sistema
  @pm      — Product Management
  @po      — Product Owner, stories
  @sm      — Scrum Master
  @devops  — Deploy, git push (EXCLUSIVO)
  @aiox-master — Governança do framework
```

---

## FREYJA — Narrative Architect & Voice Strategist

**Ativação:** `FREYJA` | **Ícone:** 🌙

### Papel
Responsável por toda camada narrativa e de copy do ecossistema. Toda palavra que sai do projeto passa por FREYJA — posts, captions, landing pages, propostas, emails, sales letters.

Para o @arthsystems_: transformar o posicionamento de "sobrevivente de burnout" para "arquiteto de negócios pós-humanos". Todo post é uma carta de vendas disfarçada.

### Tasks e Commands
| Command | O que faz |
|---------|-----------|
| `*carousel-brief` | Gera brief estruturado de 7 slides para o content-worker |
| `*brief-maya` | Passa brief narrativo para MAYA executar assets AV |
| `*av-review` | Revisa narrativa dos assets que MAYA produziu (6 pontos) |
| `*approve-output` | Gate final — libera asset para publicação via HERMES |
| `*content-calendar` | Planeja calendário de conteúdo com arco narrativo |
| `*copy` | Escreve copy para qualquer formato (LP, email, DM, bio) |

### Skills
- `content-repurposing` — atomiza uma peça em múltiplos formatos
- `linkedin-content` — posts LinkedIn com hooks de alta conversão
- `technical-blog-writing` — artigos técnicos com exemplos de código
- `newsletter-curation` — curadoria editorial de newsletters
- `press-release-writing` — press releases estilo AP

### Ferramentas e MCPs
| Ferramenta | Acesso | Uso |
|-----------|--------|-----|
| Supabase MCP | Direto | Consultar hook intelligence, histórico de posts |
| inference.sh | Via `infsh` | Skills de conteúdo (content-repurposing, etc.) |
| obsidian-markdown | Via CLI | Salvar conteúdo no vault SÍRIOS |
| instagram-worker (:3000) | Indireta via HERMES | Publicação final |

### Relações de Handoff
```
FREYJA → MAYA       : *brief-maya (define narrativa antes de MAYA gerar)
MAYA   → FREYJA     : assets para *av-review
FREYJA → HERMES     : *approve-output (libera para publicação)
FREYJA → content-worker : brief de carousel → watcher processa
```

### Autoridade Exclusiva
- Aprovação de todo asset AV para @arthsystems_ — nenhum asset vai ao ar sem FREYJA
- Decisões de narrativa e posicionamento — ARES não sobrescreve narrativa
- Copy de landing pages e emails — ARES define oferta, FREYJA define as palavras

### Quando NÃO usar FREYJA
- Geração de imagem/vídeo → MAYA
- Automações e canais → HERMES
- Arquitetura de oferta → ARES

---

## MAYA — Audio-Visual Production Specialist

**Ativação:** `MAYA` | **Ícone:** 🎬

### Papel
Especialista em produção de mídia audiovisual. Executa geração de imagem, vídeo, voz, música e pós-processamento. Recebe briefs de FREYJA e entrega assets para revisão.

### Tasks e Commands
| Command | O que faz |
|---------|-----------|
| `*generate-image` | Gera imagem a partir de brief (escolhe tier automaticamente) |
| `*generate-video` | Produz vídeo/Reel via cadeia MCP → infsh → KIE.AI |
| `*generate-voice` | TTS ou clonagem de voz via ElevenLabs |
| `*review-brief` | Analisa brief de FREYJA antes de executar — planeja shots |
| `*post-process` | Roda background-removal ou upscaling nos assets gerados |

### Cadeia de Geração (Prioridade Obrigatória)
**Vídeo:**
```
Tier 0 → Higgsfield MCP (generate_video)
Tier 1 → infsh higgsfield/seedance-2
Tier 2 → KIE.AI kie-client.py --model seedance-2
Tier 3 → infsh bytedance/seedance-1
```

**Imagem:**
```
Tier 0 → KIE.AI gpt-image-2 (assets premium finais)
Tier 1 → infsh google/gemini-3-flash-image (nano-banana-2)
Tier 2 → Higgsfield MCP generate_image (estética cinemática)
```

### Skills Primárias
| Skill | App ID / Provider |
|-------|------------------|
| `gpt-image-2` | KIE.AI — `kie-client.py --model gpt-image-2` |
| `nano-banana-2` | `google/gemini-3-flash-image` (infsh) |
| `seedance-2` | Higgsfield MCP (primary), infsh (fallback) |
| `elevenlabs-tts` | `elevenlabs/text-to-speech` |
| `elevenlabs-music` | `elevenlabs/music` |
| `background-removal` | `falai/birefnet` |
| `image-upscaling` | `falai/topaz-image-upscaler` |

### Ferramentas e MCPs
| Ferramenta | Acesso | Uso |
|-----------|--------|-----|
| Higgsfield MCP | `mcp__claude_ai_MCP_Higgsfield__*` | Geração de vídeo (Tier 0) |
| KIE.AI | `kie-client.py` (REST API) | GPT Image 2 + Seedance 2 fallback |
| inference.sh | `infsh app run` | Todos os modelos de fallback |
| HeyGen REST API | `POST api.heygen.com/v2/video/generate` | Avatar talking-head (Reels modo A) |

### Regra de Review
- Assets para @arthsystems_: **sempre via FREYJA** (`*av-review` → `*approve-output`)
- Assets standalone (não @arthsystems_): entrega direta ao usuário, sem FREYJA
- Rejeição por FREYJA ≥ 3x: escalar para @aiox-master para clarificação de brief

### Quando NÃO usar MAYA
- Copy e narrativa → FREYJA
- Publicação → HERMES
- Código ou UI → @dev

---

## ARES — Offer Architect & Product Strategist

**Ativação:** `ARES` | **Ícone:** ⚔️

### Papel
Arquiteto de ofertas e estratégia de produto. Aplica os frameworks Hormozi (Value Equation, Grand Slam Offer), RECA/RALOCA e Russell Brunson para desenhar produtos, precificação e posicionamento. Toda oferta nova do ecossistema passa por ARES.

### Tasks e Commands
| Command | O que faz |
|---------|-----------|
| `*consult` | Sessão socrática — ARES faz perguntas para entender mercado e avatar |
| `*draft-offer` | Gera rascunho estruturado de oferta a partir de briefing |
| `*value-equation` | Aplica Value Equation a uma oferta existente |
| `*price-strategy` | Arquitetura de precificação (âncoras, tiers, condições) |
| `*avatar-map` | Mapeia avatar: Dream Outcome, medos, problemas E/I/F |
| `*audit-offer` | Audita oferta contra framework Grand Slam |
| `*runa-product-web` | Desenha ou revisa a teia de produtos RUNA SYSTEMS |
| `*runa-os-audit` | Diagnóstico Four Cs do ambiente AI de um prospect |

### Skills
| Skill | Quando usar |
|-------|-------------|
| `runa-os-audit` | Diagnóstico pré-venda — score 0-100 nas 4 camadas Four Cs |
| `competitor-teardown` | Análise profunda de concorrente |
| `customer-persona` | Criação de persona com base em pesquisa |
| `pitch-deck-visuals` | Estrutura + visuais de pitch deck |
| `product-hunt-launch` | Estratégia de lançamento no Product Hunt |
| `gstack/office-hours` | Validação de produto método YC antes de codar |

### Ferramentas e MCPs
| Ferramenta | Acesso | Uso |
|-----------|--------|-----|
| AKASHA Knowledge Base | Read direto | Hormozi, RECA/RALOCA, Russell Brunson, Everton Pieri |
| inference.sh | Via `infsh` | competitor-teardown, customer-persona, pitch-deck-visuals |

### Base de Conhecimento (AKASHA)
ARES carrega esses arquivos quando ativado para análise de oferta:
- `AKASHA/📚 Alex Hormozi/Frameworks/offer-building-framework.md`
- `AKASHA/📚 Alex Hormozi/Books/100M Offers.md`
- `AKASHA/📚 Everton Pieri/sales-frameworks-reca-raloca.md`
- `AKASHA/📚 Everton Pieri/Metodo-Anjos.md`
- `AKASHA/📚 Russell Brunson/Dotcom Secrets.md`

### Relações com Outros Agentes
```
ARES → FREYJA   : entrega arquitetura de oferta → FREYJA escreve o copy
ARES → @pm      : specs de produto → @pm cria épicos e stories
ARES → ORION    : salva decisões de produto no vault SÍRIOS
ARES + ALEX     : pesquisa de mercado antes de desenhar oferta
```

---

## HERMES — Client Success & Automation Architect

**Ativação:** `HERMES` | **Ícone:** 🪽

### Papel
Responsável pelo relacionamento com clientes e pela camada de automação do ecossistema. Gerencia onboarding, retenção, upsell e os canais de comunicação automatizados (WhatsApp, Instagram DM, email).

### Tasks e Commands
| Command | O que faz |
|---------|-----------|
| `*onboard-client` | Fluxo completo de onboarding para novo cliente |
| `*dm-sequence` | Cria sequência de DMs automatizados (Zernio API) |
| `*upsell-sequence` | Desenha trilha de upsell baseada no Four Cs do cliente |
| `*retention-audit` | Audita risco de churn de um cliente |
| `*channel-setup` | Configura canal de comunicação (WhatsApp, email, DM) |

### Skills
- `ai-automation-workflows` — workflows N8N multi-step
- `ai-content-pipeline` — pipeline de conteúdo automatizado
- `ai-social-media-content` — conteúdo para TikTok, IG, X
- `twitter-automation` — postagem e engajamento no X

### Ferramentas e MCPs
| Ferramenta | Acesso | Uso |
|-----------|--------|-----|
| Zernio API MCP | `mcp__zernio__*` | DMs, broadcasts, sequences, posts sociais |
| n8n-mcp | `mcp__n8n-mcp__*` | ⚠️ Desabilitado — reativar via @devops |
| Gmail MCP | `mcp__claude_ai_Gmail__*` | Email automation |
| Google Calendar | `mcp__claude_ai_Google_Calendar__*` | Agendamentos de clientes |
| Meta Graph API | REST via `.env` | Instagram publish, comment triggers |

### Relações com Outros Agentes
```
FREYJA → HERMES : *approve-output → HERMES publica via instagram-worker
ORION  → HERMES : *channel-setup → HERMES configura canais do cliente
ARES   → HERMES : design de trilha de upsell → HERMES executa sequências
```

---

## HELIOS — SEO Strategist & Digital Visibility Architect

**Ativação:** `HELIOS` | **Ícone:** ☀️

### Papel
Especialista em SEO e visibilidade digital. Gerencia os 13 sub-skills de SEO que cobrem desde análise técnica até otimização para AI search (GEO).

### Skills (13 sub-skills)
| Skill | Foco |
|-------|------|
| `seo-technical` | Crawlability, indexabilidade, Core Web Vitals |
| `seo-content` | E-E-A-T, profundidade, detecção de conteúdo thin |
| `seo-schema` | JSON-LD, Schema.org, dados estruturados |
| `seo-sitemap` | Sitemaps XML, quality gates |
| `seo-performance` | Core Web Vitals, métricas de carga |
| `seo-geo` | AI search (ChatGPT, Perplexity, Google AIO) |
| `seo-visual` | Screenshots, mobile rendering |
| `seo-content-brief` | Brief de conteúdo SEO |
| `web-search` | Busca e extração de conteúdo web |

### Ferramentas
- inference.sh para web-search
- Playwright (via seo-visual) para screenshots

---

## ODIN — Business Analyst & Research Specialist

**Ativação:** `ODIN` (persona: Atlas) | **Ícone:** 🔍

### Papel
Pesquisa de mercado, análise competitiva, facilita sessões de ideação, estuda tendências e produz relatórios de pesquisa. Alimenta ARES com inteligência de mercado antes de ARES desenhar ofertas.

### Tasks e Commands
| Command | O que faz |
|---------|-----------|
| `*research` | Pesquisa profunda sobre tema, mercado ou concorrente |
| `*competitive-analysis` | Análise comparativa de concorrentes |
| `*trend-report` | Relatório de tendências com fontes primárias |
| `*brownfield-discovery` | Auditoria de codebase legado (10 fases) |

### Skills
| Skill | Quando usar |
|-------|-------------|
| `ai-rag-pipeline` | Build/query de sistema RAG sobre vault SÍRIOS ou docs de cliente |
| `web-search` | Pesquisa com extração de conteúdo web |
| `speech-to-text` | Transcrição automática de áudio |
| `defuddle` | Extração limpa de conteúdo de páginas web |

### MCPs
- `notebooklm-mcp` — pesquisa via Google NotebookLM com fontes carregadas

### Relações com Outros Agentes
```
ODIN → ARES      : inteligência de mercado → ARES usa para desenhar oferta
ODIN → @architect : descoberta de codebase (Brownfield Discovery)
ODIN → ORION     : salva pesquisas no vault SÍRIOS/AKASHA
```

---

## ORION — Knowledge Orchestrator & Client Onboarding

**Ativação:** `ORION`

### Papel
Guardião do conhecimento do ecossistema. Gerencia o vault Obsidian SÍRIOS, executa o ritual de onboarding de clientes dia-1 (runa-intake), e orquestra o fluxo de informação entre agentes. É o agente que registra, organiza e conecta tudo.

### Tasks e Commands
| Command              | O que faz                                                                   |
| -------------------- | --------------------------------------------------------------------------- |
| `*runa-intake`       | Ritual de onboarding dia-1: 7 perguntas → 7 arquivos de contexto de cliente |
| `*knowledge-extract` | Extrai conhecimento de PDF/transcrição para vault                           |
| `*graphify`          | Gera knowledge graph de docs ou vault (HTML interativo)                     |

### Skills
| Skill | Função |
|-------|--------|
| `runa-intake` | Ritual dia-1 do cliente — 7 perguntas, 7 arquivos contexto |
| `obsidian-cli` | Criar, ler, buscar notas no vault SÍRIOS |
| `obsidian-markdown` | Markdown otimizado para Obsidian com wikilinks |
| `json-canvas` | Mapas visuais de conceitos no Obsidian |
| `obsidian-bases` | Bancos de dados visuais no vault |
| `llm-wiki-setup` | Bootstrap novo knowledge vault (padrão Karpathy) |
| `wiki-self-heal` | Health-check + gap-fill em wiki existente |
| `knowledge-extraction` | Extração de PDF/transcrição para base de conhecimento |
| `prompt-engineering` | Otimização de prompts para qualquer modelo |

### MCPs
- Gmail, Google Calendar — agenda e emails de clientes
- notebooklm-mcp — pesquisa contextual em notebooks
- Netlify — deploy de documentação

### Vaults Gerenciados
| Vault | Path | Uso |
|-------|------|-----|
| SÍRIOS | `C:/runa-systems-global/SÍRIOS/` | Vault principal — docs, specs, memoria de projeto |
| AKASHA | `C:/runa-systems-global/AKASHA/` | Knowledge base (Karpathy pattern) — frameworks, conceitos |

### Relações com Outros Agentes
```
ORION → todos    : alimenta vault SÍRIOS com artefatos de todas as sessões
ORION → HERMES   : contexto de cliente (runa-intake) → HERMES configura canais
ORION → ARES     : contexto de negócio do cliente → ARES desenha oferta
ORION → FREYJA   : voice.md do cliente → FREYJA usa como referência de voz
```

---

## @dev — Full Stack Developer (Dex)

**Ativação:** `@dev` | **Ícone:** 💻

### Papel
Implementação de código, debugging, refatoração. Único agente que escreve código além do @data-engineer (schemas/DDL). Opera no ciclo SDC (Story Development Cycle) — Phase 3 Implement.

### Operações Permitidas
| Permitido | Bloqueado |
|-----------|----------|
| `git add`, `git commit` | `git push` → delegar para @devops |
| `git branch`, `git checkout` | `gh pr create/merge` → @devops |
| Atualizar story (checkboxes, File List) | Alterar AC ou escopo da story |
| Escrever código e testes | MCP management → @devops |

### Skills
- `ui-ux-pro-max`, `frontend-design` — UI e componentes
- `stitch-loop` — site multi-página autônomo via Stitch
- `building-inferencesh-apps`, `javascript-sdk`, `python-sdk` — apps inference.sh
- `agent-ui`, `chat-ui`, `tools-ui`, `widgets-ui` — componentes de agent interface
- `remotion-render` — vídeo programático com React

### MCPs
- Figma MCP — acesso ao design
- Supabase MCP — operações de banco

---

## @qa — Test Architect & Quality Advisor (Quinn)

**Ativação:** `@qa` | **Ícone:** ✅

### Papel
Gates de qualidade, arquitetura de testes, code review antes de PRs. Opera no QA Loop (até 5 iterações de review-fix) e no QA Gate (Phase 4 do SDC). Advisory — não bloqueia unilateralmente.

### Verdicts no QA Gate
| Verdict | Significado |
|---------|-------------|
| PASS | Tudo OK — story pode ir para Done |
| CONCERNS | Issues menores — @dev decide se corrige antes de merge |
| FAIL | Issues críticos — story volta para @dev |
| WAIVED | Gate dispensado com justificativa documentada |

### Skills e Tools
- `gstack/review` — code review com 2 modelos em paralelo
- `gstack/qa` — QA com Chromium real (Playwright)
- `gstack/cso` — security audit (OWASP Top 10 + STRIDE)
- `pr-review-toolkit` — análise multi-especialista de PRs
- CodeRabbit (auto) — CRITICAL auto-fix, HIGH auto-fix (< 2 iterações)

---

## @architect — System Architect (Aria)

**Ativação:** `@architect` | **Ícone:** 🏛️

### Papel
Decisões de arquitetura de sistema, seleção de tecnologia, design de integrações. Delega DDL e otimização de queries para @data-engineer.

### Autoridade
- Tecnologia → @architect decide → @dev implementa
- Schema alto nível → @architect define → @data-engineer executa DDL
- Complexidade de story → @architect avalia no Spec Pipeline (Phase 2)

### Skills
- `architecture-design` — design de sistema
- `agent-workflows` — design de fluxos multi-agente
- `prompt-engineering` — otimização de system prompts
- `gstack/autoplan` — pipeline de 4 reviews automático

---

## @pm — Product Manager (Morgan)

**Ativação:** `@pm` | **Ícone:** 📋

### Papel
Orchestração de épicos, levantamento de requisitos (Spec Pipeline), criação de stories a partir de PRDs. Aplica o EAD Gate antes de qualquer spec.

### Autoridade Exclusiva
- `*execute-epic`, `*create-epic` — apenas @pm
- Spec Pipeline (Phases 1-6) — @pm lidera
- EAD Gate (Phase 0) — @pm aplica antes de qualquer spec

### EAD Gate — Obrigatório antes de toda spec
```
Q1: Este processo DEVE existir? → Se não: ELIMINAR
Q2: É repetível e mensurável? → Se sim: AUTOMATIZAR
Q3: Requer julgamento humano? → Se sim: DELEGAR
```
Output: `eadDecision` em requirements.json

---

## @po — Product Owner (Pax)

**Ativação:** `@po` | **Ícone:** 🎯

### Papel
Backlog, refinamento de stories, critérios de aceite, priorização de sprint. Valida cada story com checklist de 10 pontos antes de ir para @dev.

### Checklist de Validação (10 pontos)
Story recebe GO se score ≥ 7. Abaixo → NO-GO com lista de fixes.

---

## @sm — Scrum Master (River)

**Ativação:** `@sm` | **Ícone:** 🌊

### Papel
Criação de stories a partir de épicos e PRDs. Seleciona template correto, garante que stories tenham escopo executável.

---

## @devops — DevOps & Repository Manager (Gage)

**Ativação:** `@devops` | **Ícone:** ⚡

### Papel
**ÚNICO agente autorizado a fazer git push e abrir PRs.** Gerencia CI/CD, releases, configuração de MCPs e infraestrutura.

### Operações Exclusivas
| Operação | Outros Agentes |
|----------|---------------|
| `git push` / `git push --force` | BLOQUEADO |
| `gh pr create` / `gh pr merge` | BLOQUEADO |
| Adicionar/remover/configurar MCP | BLOQUEADO |
| CI/CD pipeline management | BLOQUEADO |

### Skills
- `devops-automation` — automações de deploy
- `commit-commands` — padrão de commits e PRs
- `hookify` — configuração de Claude Code hooks
- `stop-notification` — notificação quando Claude termina

### MCPs
- Netlify MCP — deploy e hosting

---

## @aiox-master — Framework Governance

**Ativação:** `@aiox-master`

### Papel
Governança do framework AIOX. Pode executar qualquer task, sobrescrever limites de agentes quando necessário, e é a única entidade que pode cancelar uma decisão EAD `eliminate` com justificativa documentada.

### Autoridade
- Executa QUALQUER task sem restrições de agente
- Resolve conflitos entre agentes
- Pode cancelar decisão EAD `eliminate` com justificativa
- Enforcement constitucional — bloqueia violações dos Artigos I-VI

---

## Fluxos de Handoff Canônicos

### Story Development Cycle (SDC)
```
@sm *draft-story
  → @po *validate-story (checklist 10 pontos)
  → @dev *develop (Phase 3 — implementação)
  → @qa *qa-gate (Phase 4 — review)
  → @devops *push (push para remote + PR)
```

### Produção de Conteúdo (@arthsystems_)
```
FREYJA *carousel-brief
  → content-worker (watcher processa HTML → slides)
  → FREYJA *approve-output
  → instagram-worker (publica via Meta API)
```

### Produção AV (Reels)
```
FREYJA *brief-maya
  → MAYA executa (Higgsfield MCP → infsh → KIE.AI)
  → FREYJA *av-review
  → [APROVADO] → FREYJA *approve-output
  → HERMES publica (Meta Graph API)
```

### Onboarding de Cliente
```
ORION *runa-intake (7 perguntas → 7 arquivos)
  → ARES lê revenue-map.md → desenha estratégia de oferta
  → FREYJA lê voice.md → calibra copy
  → HERMES lê channels.md → configura automações
```

### Pré-venda (Diagnóstico)
```
ARES *runa-os-audit (7 perguntas → score Four Cs 0-100)
  → Relatório com top-3 gaps + produto RUNA recomendado
  → HERMES envia relatório ao prospect via canal principal
```

### Spec Pipeline (Features Novas)
```
@pm *EAD Gate (Phase 0 — obrigatório)
  → [eliminate] STOP — documentar como CON-0
  → [automate/delegate] continuar
@pm *gather-requirements (Phase 1)
  → @architect *assess-complexity (Phase 2)
  → @analyst *research (Phase 3)
  → @pm *write-spec (Phase 4)
  → @qa *critique (Phase 5)
  → @architect *plan (Phase 6)
```

---

## Regras de Escalação

| Situação | Escalação |
|----------|-----------|
| Agente não consegue concluir task | → @aiox-master |
| QA Gate falha 3+ vezes | → @aiox-master para clarificação de escopo |
| MAYA rejeitado por FREYJA ≥ 3x | → @aiox-master para revisão de brief |
| Violação constitucional detectada | BLOCK — corrigir antes de prosseguir |
| Conflito entre agentes | → @aiox-master media |
| EAD Gate deve ser cancelado | `--override-ead --override-reason "..."` → @aiox-master valida |

---

## Workers — Agentes de Execução Autônoma

Workers são processos, não agentes. Executam tasks repetíveis sem precisar de raciocínio — seguem o [[worker-deployment-protocol]] (Bike Method).

| Worker | Porta | Fase Atual | Avanço |
|--------|-------|-----------|--------|
| instagram-worker | :3000 | Phase 1 — Training Wheels | 10 publicações aprovadas consecutivas |
| content-worker | :3001 | Phase 1 — Training Wheels | 10 exports de carousel aprovados consecutivos |

Kill Switch: ver [[deprecation-protocol]]

---

## Referências Cruzadas

- Autoridade detalhada: [[agent-authority]] — `.claude/rules/agent-authority.md`
- Handoff compactado entre sessões: `.claude/rules/agent-handoff.md`
- Skills completas por agente: [[Skills Index]] + [[capability-map]]
- Protocolo de workers: [[worker-deployment-protocol]]
- Kill Switch: [[deprecation-protocol]]
- EAD Gate: `.claude/rules/ead-gate.md`
