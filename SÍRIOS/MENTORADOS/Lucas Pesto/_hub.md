---
date: 2026-05-04
tags: [mentorado, lucas-pesto, runa-intervencao, hub]
project: runa-systems-global
type: mentee-hub
cliente: Lucas — Pesto (agência criativa)
programa: RUNA INTERVENÇÃO
inicio: 2026-04
---

# Lucas Pesto — Hub do Mentorado

## Perfil

- **Empresa:** Pesto (agência de comunicação/marketing)
- **Programa:** RUNA INTERVENÇÃO
- **Período:** 6 meses (fundadores)
- **Carga operacional:** ~246h/semana (equipe)
- **Maior gargalo:** Criação (130h/semana: copy, design, vídeo, imagens)
- **Perfil ICP:** Comandante — quer decidir, não executar. Alta maturidade técnica.
- **Squad ativo:** Criação (Copy + Design + Video + Planner + Atendimento)
- **Calendário atual:** Terça + Quarta (noite) + Quinta 14:30

---

## Estado Atual do Sistema (2026-05-04)

### Infraestrutura V1 (ativa até S08)
- ✅ Claude Code instalado e operacional
- ✅ Obsidian vault (operacional + base de conhecimento separados)
- ✅ inference.sh configurado (nano-banana = modelo padrão de imagens)
- ✅ GWS (Google Workspace CLI) autenticado
- ✅ Squad criado: Copy, Design, Video Editor (Remotion), Planner, Atendimento, Brand

### Infraestrutura V2 (migração S09)

| Componente | V1 | V2 | V3 |
|-----------|----|----|-----|
| Geração de imagem padrão | `infsh google/gemini-3-flash-image` | Higgsfield CLI `higgsfield generate create nano_banana_flash --wait` | ← mesmo |
| Geração de vídeo padrão | `infsh higgsfield/seedance-2` | Higgsfield CLI `higgsfield generate create seedance_2_0 --wait` | ← mesmo |
| Ensaios fotográficos | — (não existia) | Higgsfield Soul Characters (treino via MCP, geração via CLI `--wait`) | ← mesmo |
| Capas com texto/marca | — | ⚠️ KIE.AI GPT Image 2 FORA DO AR (403/404 desde 2026-05-04) → usar Higgsfield CLI | ← mesmo |
| inference.sh | Tier 0 | Tier 2 (último fallback) | ← mesmo |
| Higgsfield MCP | — | Tier 1 (fallback de geração) + primário para soul management | ← mesmo |
| Designer System Prompt | V1 | V2.1 | **V3** ✅ (arquivo: `artefatos/designer-agent-v2-system-prompt.md`) |
| Persona YAML | — | — | **V3** ✅ Persona estruturada (archetype, comunicação, vocabulary, greetings) |
| Activation Protocol | — | — | **V3** ✅ 5 steps com HALT explícito |
| Workflow Definitions | — | — | **V3** ✅ 7 workflows por comando (briefing, soul, ensaio, imagem, vídeo, brief, calibrar) |
| Review Gate | — | — | **V3** ✅ Auto-review antes de handoff para Cleiton |
| Dependencies Section | — | — | **V3** ✅ Tool hierarchy + brand-kit schema + grade editorial path |
| *criar-soul | — | — | **V3** ✅ Comando adicionado (era ausente no V2.1) |
| Handoff target | Humano | Humano | **V3** ✅ Cleiton (Claude Chat) — destinatário correto |

**Hierarquia de acesso Higgsfield:**
```
Tier 0 → CLI --wait (higgsfield generate create <model> --wait)   — 1 comando, bloqueia até terminar
Tier 1 → MCP async (generate → job_status × N → job_display)      — 3+ chamadas, fallback
Tier 2 → inference.sh (infsh app run)                              — último recurso
```

**Skills novas (instalar em `~/.claude/skills/`):**
- `higgsfield-generate` — imagem, soul character, vídeo via Higgsfield CLI + MCP
- `ensaio-fotografico` — ensaio fotográfico sintético com Soul Characters

**Pré-requisitos:**
1. Instalar CLI: `~/.local/bin/higgsfield.exe` (v0.1.26+)
2. Autenticar: `higgsfield auth login` (browser flow, uma única vez)
3. Conectar MCP no Claude.ai (para soul management):
   `Claude.ai → Settings → Connectors → Higgsfield → URL: https://mcp.higgsfield.ai/mcp`

### Sistema de Conteúdo
- ✅ Análise do Instagram @pestocomunicacao concluída
- ✅ Grade de conteúdo (agente sugerir-pautas + criar-grade) operacional
- ✅ Primeiro post publicado
- ✅ Designer agent calibrado com regras numeradas (#01, #02...)
- ✅ Skill `extract-content` instalada
- ✅ Skill `create-skill` instalada
- ✅ Arquitetura dual: Claude Code (neural) + Claude Chat/Cleiton (operacional)
- ✅ System Messenger do Cleiton criado (parcialmente personalizado)
- 🔄 **Pendente:** Extração de referências de carrossel (homework Lucas)
- 🔄 **Pendente:** Documentação de formatos (Capa + Slides) no System Messenger
- 🔄 **Pendente:** Pipeline Designer (CC) → Cleiton (Chat) conectado

### Próxima Vitória da Semana
> "Se eu chegar até esse ponto aí do briefing é a Vitória da semana"
> — primeiro carrossel completo gerado pelo pipeline Designer → Cleiton

---

## Histórico de Sessões

| Sessão | Tema | Data | Duração | Status | Escopo |
|--------|------|------|---------|--------|--------|
| Sessão 01 | Mapeamento + Business Mapping | 2026-04-11 | ~90min | ✅ Realizada | [[📋 escopos-de-aula/runa-intervencao-sessao-01-lucas-pesto]] |
| Sessão 02 | Ambiente: Claude Code + Obsidian + Squad + GWS + inference.sh | 2026-04-21 | 146min | ✅ Realizada | [[📋 escopos-de-aula/runa-intervencao-sessao-02-lucas-pesto]] |
| Sessão 03 | Review Obsidian + Graph View (curta) | 2026-04-22 | 11min | ✅ Realizada | [[📋 escopos-de-aula/runa-intervencao-sessao-03-lucas-pesto]] |
| Sessão 04 | Análise Instagram + Grade de Conteúdo | 2026-04-22 | 63min | ✅ Realizada | [[📋 escopos-de-aula/runa-intervencao-sessao-04-lucas-pesto]] |
| Sessão 05 | Calibração Designer + create-skill + Gestão de Contexto | 2026-04-27 | 81min | ✅ Realizada | [[📋 escopos-de-aula/runa-intervencao-sessao-05-lucas-pesto]] |
| Sessão 06 | Pivot de Workflow: Claude Code (neural) + Cleiton (operacional) | 2026-04-29 | 96min | ✅ Realizada | [[📋 escopos-de-aula/runa-intervencao-sessao-06-lucas-pesto]] |
| Sessão 07 | Cleiton: Referências + Formatos + System Messenger completo | 2026-05-06 | TBD | 🔄 Planejando | [[📋 escopos-de-aula/runa-intervencao-sessao-07-lucas-pesto]] |
| Sessão 08 | Primeiro Carrossel Completo: Designer → Cleiton Pipeline | 2026-05-07 | TBD | 🔄 Planejando | [[📋 escopos-de-aula/runa-intervencao-sessao-08-lucas-pesto]] |
| Sessão 09 | Upgrade Infraestrutura: Designer V3 + Higgsfield CLI + Soul Characters | ~2026-05-12 | TBD | ✅ Entregável V3 pronto | [[📋 escopos-de-aula/runa-intervencao-sessao-09-lucas-pesto]] |

---

## Entregáveis

| Item | Tipo | Status | Arquivo |
|------|------|--------|---------|
| Squad de Criação | Squad agents | ✅ Operacional | Obsidian vault Lucas |
| Grade de Conteúdo | Agent output | ✅ Gerada | Obsidian vault Lucas |
| Sistema de Regras Designer | Rules doc | ✅ Em evolução | vault/designer-rules.md |
| Designer Agent V3 | System prompt | ✅ Entregue | `artefatos/designer-agent-v2-system-prompt.md` |
| Task Files V3 (9 arquivos) | Task workflows | ✅ Entregue | `artefatos/tasks/designer-*.md` |
| Skill: higgsfield-generate | Claude Code skill | ✅ Entregue | `artefatos/skills/higgsfield-generate/SKILL.md` |
| Skill: ensaio-fotografico | Claude Code skill | ✅ Entregue | `artefatos/skills/ensaio-fotografico/SKILL.md` |
| Guia de instalação | Installation map | ✅ Entregue | `artefatos/INSTALACAO.md` |
| Prompt de instalação | Ready-to-paste prompt | ✅ Entregue | `artefatos/PROMPT-INSTALACAO.md` |
| System Messenger Cleiton | Claude Chat project | 🔄 Em construção | Claude Chat |
| Formatos de Carrossel | Docs de estilo | 🔄 Pendente extração | — |
| Pipeline Designer→Cleiton | Workflow | 🔄 Pendente | — |

→ [[📦 entregáveis/_index]]

---

## Repositórios

| Repo | Descrição | Entregue em |
|------|-----------|-------------|
| inference.sh | Geração de imagens (nano-banana) | Sessão 02 |
| Remotion | Edição de vídeo programática | Sessão 02 |
| GWS CLI | Google Workspace (Drive/Docs) | Sessão 02 |

→ [[📁 repositórios/_index]]

---

## Materiais

| Material | Descrição | Relevante para |
|----------|-----------|---------------|
| Instagram export | HTML export dados @pestocomunicacao | Sessão 04 |
| Referências carrossel | Screenshots styles Lucas (pendente) | Sessão 07 |

→ [[📚 materiais/_index]]

---

## Próxima Sessão

→ **Sessão 07** (Terça ou Quarta, semana de 05/05): Personalização completa do Cleiton
→ **Sessão 08** (Quinta 14:30, 07/05): Primeiro carrossel gerado pelo pipeline
→ **Sessão 09** (~12–13/05): Entrega + instalação do Designer V3 — Higgsfield CLI + Soul Characters (entregável pronto)

---

## Conexões

- **Programa base:** [[intervencao-hub]]
- **Track aplicável:** Track A — Creator (Sistema de Conteúdo)
- **Sessão 01 (escopo):** [[📋 escopos-de-aula/runa-intervencao-sessao-01-lucas-pesto]]
- **Sessão mais recente:** [[📋 escopos-de-aula/runa-intervencao-sessao-06-lucas-pesto]]
