---
date: 2026-04-18
tags: [audit, akasha, sirios, knowledge-management]
project: runa-systems-global
type: audit
---

# SÍRIOS → AKASHA Audit — 2026-04-18

## Resumo executivo

- **Total arquivos analisados:** 158 .md
- **AKASHA candidates:** 9
- **Wrong place (within SÍRIOS):** 4
- **Broken wikilinks:** 8 links distintos
- **Conflitos:** 3
- **OK:** ~138

---

## AKASHA Candidates

Conhecimento de negócio reutilizável — pertence ao AKASHA, não ao SÍRIOS (project memory).

| Arquivo | Pasta atual | Razão | Ação recomendada |
|---------|------------|-------|-----------------|
| `analysis-instagram-dougdemarco.md` | `📚 Referências/` | Análise profunda de concorrente com frameworks de copywriting reutilizáveis (estrutura 4 elementos de Doug, narrative architecture) | Migrar → `AKASHA/raw/2026-04-18-analysis-dougdemarco.md` |
| `analysis-instagram-sarahseller.md` | `📚 Referências/` | Análise profunda de concorrente com padrões de posicionamento reutilizáveis | Migrar → `AKASHA/raw/` |
| `analysis-instagram-caroldutra.md` | `📚 Referências/` | Análise profunda de concorrente com padrões de funil reutilizáveis | Migrar → `AKASHA/raw/` |
| `instagram-market-references.md` | `📚 Referências/` | Hub de inteligência de mercado — referenciado por FREYJA como knowledge base | Migrar → `AKASHA/raw/` |
| `analysis-instagram-arthur-diagnosis.md` | `📚 Referências/` | Diagnóstico do perfil Arthur com status `historical` — análise de mercado, não doc de projeto ativo | Migrar → `AKASHA/raw/` |
| `creator-tracking-list.md` | `📚 Referências/` | Lista de criadores para scraping semanal — dado de inteligência de mercado | Migrar → `AKASHA/raw/` |
| `extraction-whatsapp-references-2026-03-24.md` | `📚 Referências/` | Extração cognitiva de referências WhatsApp (Doug, deni.next, pergunte-format) — frameworks de conteúdo reutilizáveis | Migrar → `AKASHA/raw/` |
| `conversion-framework-cta.md` | `📚 Referências/` | Framework de conversão comentário→checkout — padrão reutilizável por agentes | Migrar → `AKASHA/raw/` |
| `youtube-transcription.md` | `📚 Referências/` | Transcrição YouTube "IA É COISA DE POBRE" — material de referência sem vínculo com projeto específico | Migrar → `AKASHA/raw/` |

**Pasta de destino sugerida no AKASHA:**
- Análises de concorrentes → `AKASHA/raw/` (prefixo `YYYY-MM-DD-analysis-*`)
- Frameworks reutilizáveis → `AKASHA/raw/` (prefixo `YYYY-MM-DD-framework-*`)

---

## Wrong Place (within SÍRIOS)

| Arquivo | Situação | Ação recomendada |
|---------|----------|-----------------|
| `runa-systems-prd.md` (raiz) | **ARQUIVO VAZIO** — 1 linha em branco. Referenciado por 5 docs com `produto: [[runa-systems-prd]]` | Criar PRD real em `🎯 PRODUTOS/RUNA-SYSTEMS/` OU redirecionar referências para `RUNA-SYSTEMS/_hub.md` |
| `JARVIS/Setup e Onboarding.md` | Guia de setup WSL2/Ollama com **senha sudo `Runa1620,` em texto plano** | ⚠️ URGENTE: Remover senha. Mover para `🛠️ Skills/` como guia técnico |
| `🛠️ Skills/Untitled.md` | Arquivo residual com título "Untitled" — conteúdo: "tokens de API movidos para .env" | Deletar |
| `🎯 PRODUTOS/POSICIONAMENTO$/` | Pasta existe mas **VAZIA** — sem nenhum .md. Referenciada em `teia-de-produtos.md` como `[[POSICIONAMENTO$/_hub]]` | Criar `_hub.md` ou deletar pasta e remover o link |

---

## Broken Wikilinks

| Arquivo(s) que referenciam | Wikilink quebrado | Status |
|---------------------------|------------------|--------|
| `⚙️ AUTOMACOES/hook-scraper-weekly/INDEX.md`, `ARCHITECTURE.md`, `PRD.md` | `[[workflow]]` | Existe como `workflow.json` — Obsidian não resolve `.json` como wikilink |
| `🧠 SISTEMA/temporadas/q2-2026/temporada-q2-2026.md`, `orquestrador/README.md` | `[[temporada-q2-2026-produtos]]` | Arquivo NÃO existe |
| `🧠 SISTEMA/temporadas/q2-2026/temporada-q2-2026.md`, `orquestrador/README.md` | `[[temporada-q2-2026-funil]]` | Arquivo NÃO existe |
| `🎯 PRODUTOS/AGENT$/aperitivo/aperitivo-agent-dollar.md`, `criativos/pin-05-nemoclaw.md` | `[[agent-dollar-prd]]` | NÃO existe — AGENT$ está "em desenvolvimento" |
| `🎯 PRODUTOS/RUNA-SYSTEMS/programa/intervencao/tooling-inventory-guide.md` | `[[agent-memory-guide]]` | Arquivo NÃO existe |
| `🎯 PRODUTOS/RUNA-SYSTEMS/programa/skool/core-01-claude-access-modes.md` | `[[core-02-instalacao-claude-code]]` | Arquivo NÃO existe |
| `modulo-claude-code/claude-code-03-skills-plugins-mcps-clis.md` | `[[claude-code-04-skills-deep-dive]]` | NÃO existe — marcado "em produção" |
| `🧠 SISTEMA/teia-de-produtos.md` | `[[POSICIONAMENTO$/_hub]]` | Pasta existe mas sem `_hub.md` |

> **Nota sobre links cross-vault:** Links como `[[100M Offers]]`, `[[offer-building-framework]]`, `[[sales-frameworks-reca-raloca]]`, `[[VTSD Method]]` etc. nos agentes referenciam o AKASHA. São links válidos por design — não são broken wikilinks, mas não resolvem em Obsidian sem vault linkado configurado.

---

## Conflitos

### 1. ALPHA®/MAYA®/ICARUS® como produtos ativos
- **`📚 Referências/runa-brand-identity-system.md`** — seção "Layer 3 Products" ainda lista ALPHA®, MAYA®, ICARUS® como ativos com pricing (R$5.000–30.000)
- **Conflita com:** `🧠 SISTEMA/product-catalog.md` (2026-04-08) — declara esses produtos como deprecated e superseded pelo stack atual
- **Resolução:** Atualizar `runa-brand-identity-system.md` — remover ou marcar essa seção como deprecada

### 2. Path errado do AKASHA em `memoria-sistema.md`
- **`🧠 SISTEMA/orquestrador/memoria-sistema.md`** — documenta AKASHA como `C:/runa-systems-global/bases/` e referencia `📋 Agentes/` (pasta inexistente)
- **Conflita com:** Path real `C:/runa-systems-global/AKASHA/` e pasta real `🤖 AGENTES/`
- **Resolução:** Atualizar `memoria-sistema.md` com path e nome de pasta corretos

### 3. `runa-systems-business-context.md` nunca atualizado
- **`📚 Referências/runa-systems-business-context.md`** — `status: embryonic — to be refined` desde a criação; desatualizado
- **Conflita com:** `positioning-audit-2026-04-08.md` que listava como ação P1 "marcar como superseded" (não executada); `product-catalog.md` tem o estado atual correto
- **Resolução:** Adicionar no frontmatter `status: superseded` e `see: [[product-catalog]]`

---

## Total OK

~138 arquivos bem posicionados sem ações necessárias.

---

## Ações prioritárias (ordem de execução)

| P | Ação | Target |
|---|------|--------|
| **P0** | ⚠️ Remover senha `Runa1620,` de `JARVIS/Setup e Onboarding.md` | `JARVIS/Setup e Onboarding.md` |
| **P0** | Corrigir `runa-brand-identity-system.md` — remover ALPHA/MAYA/ICARUS da seção Layer 3 | `📚 Referências/runa-brand-identity-system.md` |
| **P0** | Corrigir `memoria-sistema.md` — `📋 Agentes/` → `🤖 AGENTES/`, path AKASHA correto | `🧠 SISTEMA/orquestrador/memoria-sistema.md` |
| **P0** | Marcar `runa-systems-business-context.md` como superseded | `📚 Referências/runa-systems-business-context.md` |
| **P1** | Criar `🎯 PRODUTOS/POSICIONAMENTO$/_hub.md` ou remover link de `teia-de-produtos.md` | `🧠 SISTEMA/teia-de-produtos.md` |
| **P1** | Criar `temporada-q2-2026-produtos.md` e `temporada-q2-2026-funil.md` ou remover links | `🧠 SISTEMA/temporadas/q2-2026/` |
| **P1** | Resolver `runa-systems-prd.md` vazio — criar PRD real ou redirecionar 5 referências | raiz do vault |
| **P1** | Adicionar `workflow.md` wrapper no hook-scraper OU anotar limitação Obsidian/.json | `⚙️ AUTOMACOES/hook-scraper-weekly/` |
| **P2** | Migrar 9 AKASHA_CANDIDATES para `AKASHA/raw/` com prefixo de data | `📚 Referências/` |
| **P2** | Deletar `🛠️ Skills/Untitled.md` | `🛠️ Skills/Untitled.md` |
| **P3** | Criar `agent-dollar-prd.md` em `🎯 PRODUTOS/AGENT$/` | `🎯 PRODUTOS/AGENT$/` |
| **P3** | Criar módulos faltantes do curso RUNA SYSTEMS (`core-02`, `claude-code-04`, `agent-memory-guide`) | `programa/skool/` |
