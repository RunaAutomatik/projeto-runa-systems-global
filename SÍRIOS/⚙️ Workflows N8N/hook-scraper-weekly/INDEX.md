---
date: 2026-03-24
tags: [n8n, workflow, instagram, youtube, hooks, scraping, hermes, freyja, atlas]
project: runa-systems-global
status: planning
---

# Hook Scraper Weekly — Workflow Hub

> Central hub for all artifacts related to this n8n workflow.
> **Status:** Planning → Schema pending → Build pending → Live

---

## Artifacts

| Document | Description | Status |
|----------|-------------|--------|
| [[PRD]] | Product Requirements Document | ✅ Done |
| [[ARCHITECTURE]] | Technical architecture & node map | ✅ Done |
| [[workflow]] | n8n JSON export (importable) | ⏳ Pending build |

---

## What This Workflow Does

Runs every Monday at 8am. Scrapes last 10 posts from 13 Instagram accounts and last 10 videos from 9 YouTube channels. Extracts the hook (first line/title), classifies it via Claude API, and stores in Supabase.

**Output feeds:** Atlas (hook analysis) · FREYJA (content positioning) · ARES (engagement benchmarks)

---

## Creator Sources

Reference: [[creator-tracking-list]]

- **Instagram (13 accounts):** @byjoeym, @pedrovaleriolopez, @dougdemarco_, @franklim.gui, @thegrowthceo, @chase.h.ai, @thevibefounder, @godofprompt, @philipisberg, @daniel.avell, @stevearnesonofficial, @noevarner.ai, @nateherkai
- **YouTube (9 channels):** @nateherk, @oalanicolas, @jovensdenegocios, @horadenegocios, @Academia.Lendaria, @Chase-H-AI, @danmartell, @BenAI92, @Itssssss_Jack

---

## Credentials Required

| Key | .env Variable | Status |
|-----|--------------|--------|
| Apify API Token | `APIFY_API_TOKEN` | ✅ Configured |
| YouTube Data API v3 | `YOUTUBE_API_KEY` | ✅ Configured |
| Supabase Service Role | `SUPABASE_SERVICE_ROLE_KEY` | ⚠️ Check |
| Anthropic API | `ANTHROPIC_API_KEY` | ⚠️ Check |

---

## Agent Ownership

| Agent | Role |
|-------|------|
| **HERMES** | Builds and maintains the n8n workflow |
| **Atlas** | Defines classification logic and pattern analysis |
| **FREYJA** | Primary consumer — content generation |
| **@data-engineer** | Supabase schema ownership |
