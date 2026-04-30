---
date: 2026-04-29
tags: [referência, creator-tracking, hook-scraper, instagram, youtube, hermes, freyja, ares]
project: runa-systems-global
type: reference
---

# Creator Tracking List — Hook Scraper Weekly

> Lista canônica de 22 contas monitoradas pelo workflow `hook-scraper-weekly`.
> Scraping toda segunda às 8h — extrai hooks para análise via Supabase.
> Consumidores: Atlas (análise) · FREYJA (posicionamento) · HERMES (automação) · ARES (benchmarks)

---

## Instagram — 13 Contas

| Handle | Nicho |
|--------|-------|
| @byjoeym | Marketing / growth |
| @pedrovaleriolopez | Negócios / empreendedorismo |
| @dougdemarco_ | IA / automação |
| @franklim.gui | IA / produtividade |
| @thegrowthceo | Escala de negócios |
| @chase.h.ai | IA aplicada a negócios |
| @thevibefounder | Founders / startups |
| @godofprompt | Prompting / IA |
| @philipisberg | Marketing / conteúdo |
| @daniel.avell | IA / automação BR |
| @stevearnesonofficial | Vendas / persuasão |
| @noevarner.ai | IA / automação |
| @nateherkai | IA / produtividade |

---

## YouTube — 9 Canais

| Handle | Nicho |
|--------|-------|
| @nateherk | IA / produtividade |
| @oalanicolas | Negócios / marketing BR |
| @jovensdenegocios | Empreendedorismo BR |
| @horadenegocios | Negócios / finanças BR |
| @Academia.Lendaria | Negócios / mindset BR |
| @Chase-H-AI | IA aplicada a negócios |
| @danmartell | SaaS / escala |
| @BenAI92 | IA / automação |
| @Itssssss_Jack | IA / produtividade |

---

## Cross-platform

| Instagram | YouTube |
|-----------|---------|
| @nateherkai | @nateherk |
| @chase.h.ai | @Chase-H-AI |

---

## Integração Técnica

- **Workflow:** [[INDEX]]
- **Arquitetura:** [[ARCHITECTURE]]
- **n8n:** HERMES implementa via `mcp__n8n-mcp__*`
- **Supabase:** Tabela `hooks` — `handle`, `platform`, `hook_text`, `engagement_score`, `classified_at`
- **Pendente:** Apify API key + YouTube Data API v3 key para ativar o scraping

---

*Atualizar esta lista sempre que adicionar ou remover contas do workflow.*
