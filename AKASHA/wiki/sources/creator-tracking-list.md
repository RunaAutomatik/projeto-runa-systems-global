---
title: Creator Tracking List
tags: [source, creators, instagram, youtube, scraping, atlas, freyja]
sources:
  - raw/2026-03-24-creator-tracking-list.md
related: [[doug-demarco]], [[instagram-market-analysis-2026-03]]
last_updated: 2026-04-18
---

# Creator Tracking List

Master list of Instagram accounts and YouTube channels monitored for hook intelligence, positioning benchmarks, and content patterns. Source of truth for scraping automation.

## Instagram Accounts (13 tracked)

| Handle | Analysis | Niche | Lang |
|--------|:--------:|-------|------|
| @dougdemarco_ | ✅ | AI systems, high-ticket, lifestyle | PT/EN |
| @byjoeym | — | TBD | EN |
| @pedrovaleriolopez | — | TBD | PT |
| @franklim.gui | — | TBD | PT |
| @thegrowthceo | — | Growth, CEOs | EN |
| @chase.h.ai | — | AI, business | EN |
| @thevibefounder | — | Founder lifestyle | EN |
| @godofprompt | — | AI prompts | EN |
| @philipisberg | — | TBD | PT |
| @daniel.avell | — | TBD | PT |
| @stevearnesonofficial | — | TBD | EN |
| @noevarner.ai | — | AI, business | EN |
| @nateherkai | — | AI, business | EN |

Cross-platform: @nateherkai (IG) = @nateherk (YT) · @chase.h.ai (IG) = @Chase-H-AI (YT)

## YouTube Channels (9 tracked)

| Handle | Niche | Lang |
|--------|-------|------|
| @nateherk | AI, business automation | EN |
| @oalanicolas | TBD | PT |
| @jovensdenegocios | Business, jovens empreendedores | PT |
| @horadenegocios | Business | PT |
| @Academia.Lendaria | Alto ticket, negócios | PT |
| @Chase-H-AI | AI automation | EN |
| @danmartell | SaaS, founders | EN |
| @BenAI92 | AI business | EN |
| @Itssssss_Jack | TBD | EN |

## Scraping Configuration

| Platform | Tool | Frequency | Pending |
|---------|------|-----------|---------|
| Instagram | Apify (`apify/instagram-scraper`) | Weekly Mon 8am | Apify API key |
| YouTube | YouTube Data API v3 | Weekly Mon 8am | YouTube API key |
| Orchestration | n8n (Railway) / HERMES | — | Keys above |
| Output | Supabase `hooks` + `hook_performances` | — | Active |

## Agent Usage

| Agent | Usage |
|-------|-------|
| Atlas | Weekly hook analysis, pattern identification |
| FREYJA | Positioning reference, hook generation |
| HERMES | n8n automation source of truth |
| ARES | Engagement benchmarking |
