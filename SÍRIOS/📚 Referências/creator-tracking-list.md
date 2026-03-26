---
date: 2026-03-24
tags: [creators, instagram, youtube, hooks, scraping, knowledge-base, freyja, hermes, atlas]
project: runa-systems-global
related: [analysis-instagram-dougdemarco, instagram-hooks-db-schema, freyja-content-strategy]
---

# Creator Tracking List — Knowledge Base

> Source of truth for all scraping, hook analysis, and content intelligence tasks.
> Used by: **Atlas** (analysis), **FREYJA** (positioning), **HERMES** (n8n automation), **ARES** (metrics).

---

## Instagram Accounts

| Handle | URL | Analysis Done | Niche | Lang |
|--------|-----|:---:|-------|------|
| @byjoeym | https://www.instagram.com/byjoeym/ | — | TBD | EN |
| @pedrovaleriolopez | https://www.instagram.com/pedrovaleriolopez/ | — | TBD | PT |
| @dougdemarco_ | https://www.instagram.com/dougdemarco_/ | ✅ | AI systems, alto ticket, lifestyle | PT/EN |
| @franklim.gui | https://www.instagram.com/franklim.gui/ | — | TBD | PT |
| @thegrowthceo | https://www.instagram.com/thegrowthceo/ | — | Growth, CEOs | EN |
| @chase.h.ai | https://www.instagram.com/chase.h.ai/ | — | AI, business | EN |
| @thevibefounder | https://www.instagram.com/thevibefounder/ | — | Founder lifestyle | EN |
| @godofprompt | https://www.instagram.com/godofprompt/ | — | AI prompts | EN |
| @philipisberg | https://www.instagram.com/philipisberg/ | — | TBD | PT |
| @daniel.avell | https://www.instagram.com/daniel.avell/ | — | TBD | PT |
| @stevearnesonofficial | https://www.instagram.com/stevearnesonofficial/ | — | TBD | EN |
| @noevarner.ai | https://www.instagram.com/noevarner.ai/ | — | AI, business | EN |
| @nateherkai | https://www.instagram.com/nateherkai/ | — | AI, business | EN |

> **Cross-platform:** @nateherkai (IG) = @nateherk (YT) · @chase.h.ai (IG) = @Chase-H-AI (YT)

---

## YouTube Channels

| Handle | URL | Niche | Lang |
|--------|-----|-------|------|
| @nateherk | https://www.youtube.com/@nateherk | AI, business automation | EN |
| @oalanicolas | https://www.youtube.com/@oalanicolas | TBD | PT |
| @jovensdenegocios | https://www.youtube.com/@jovensdenegocios | Business, jovens empreendedores | PT |
| @horadenegocios | https://www.youtube.com/@horadenegocios | Business | PT |
| @Academia.Lendaria | https://www.youtube.com/@Academia.Lendaria | Alto ticket, negócios | PT |
| @Chase-H-AI | https://www.youtube.com/@Chase-H-AI | AI automation | EN |
| @danmartell | https://www.youtube.com/@danmartell | SaaS, founders | EN |
| @BenAI92 | https://www.youtube.com/@BenAI92 | AI business | EN |
| @Itssssss_Jack | https://www.youtube.com/@Itssssss_Jack | TBD | EN |

---

## Previously Analyzed (Deep Profiles)

Full analysis documents available in `📚 Referências/`:

| Creator | File | Key Insight |
|---------|------|-------------|
| @dougdemarco_ | [[analysis-instagram-dougdemarco]] | Instagram = direction channel, not education. Caption = private letter. |
| @sarahseller.br | [[analysis-instagram-sarahseller]] | Persona above person. Philosophy as differentiator. |
| @acaroldutraa | [[analysis-instagram-caroldutra]] | 10 posts, full machine. Selective repulsion as positioning. |
| @arthsystems_ | [[analysis-instagram-arthur-diagnosis]] | Own account — target narrative: post-human business architect. |

---

## Scraping Configuration

### Instagram (via Apify)
- **Actor:** `apify/instagram-scraper`
- **Frequency:** Weekly (Monday 8am)
- **Posts per account:** Last 10
- **Metrics captured:** likes, comments, saves (public only), views
- **Pending:** Apify API key → user to provide

### YouTube (via YouTube Data API v3)
- **Frequency:** Weekly (Monday 8am)
- **Videos per channel:** Last 10
- **Metrics captured:** views, likes, comments, duration
- **Pending:** YouTube Data API key → user to provide

### Orchestration
- **Tool:** n8n (Railway instance)
- **Agent:** HERMES
- **Output:** → Supabase `hooks` + `hook_performances` tables
- **Classification:** Claude API via HTTP node in n8n

---

## Usage By Agent

| Agent | Usage |
|-------|-------|
| **Atlas** | Weekly hook analysis, pattern identification |
| **FREYJA** | Positioning reference, content inspiration, hook generation |
| **HERMES** | n8n scraping automation source of truth |
| **ARES** | Engagement benchmarking for campaign metrics |

---

## Maintenance

- Update `Analysis Done` column when a deep profile is completed
- Update `Niche` column after first scraping run classifies content
- Add new creators by appending rows — do not delete existing entries
- Flag inactive accounts (no posts in 60+ days) with ⚠️
