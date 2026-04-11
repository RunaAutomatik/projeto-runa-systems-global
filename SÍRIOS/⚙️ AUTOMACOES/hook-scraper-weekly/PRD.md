---
date: 2026-03-24
tags: [prd, n8n, scraping, hooks, instagram, youtube, hermes, freyja]
project: runa-systems-global
hub: [[INDEX]]
---

# PRD — Hook Scraper Weekly

> Hub: [[INDEX]] | Architecture: [[ARCHITECTURE]] | Workflow: [[workflow]]

---

## 1. Overview

### Problem Statement
Manually identifying which hooks generate engagement across competitor/reference creators is time-consuming, inconsistent, and doesn't scale. Without systematic collection, FREYJA generates hooks from intuition rather than proven market data.

### Solution
An automated weekly pipeline that collects posts and videos from 22 tracked creators (13 Instagram + 9 YouTube), extracts hooks, classifies them by type and tone, and stores them in Supabase — creating a compounding intelligence database.

### Primary Goal
Build a self-growing library of proven hooks with real engagement data, accessible to FREYJA for content generation and Atlas for pattern analysis.

---

## 2. Stakeholders

| Role | Name | Responsibility |
|------|------|---------------|
| Product Owner | Arthur (@arthsystems_) | Curates hook_patterns weekly |
| Build Agent | HERMES | n8n workflow construction and maintenance |
| Analysis Agent | Atlas | Pattern identification, taxonomy maintenance |
| Content Agent | FREYJA | Hook consumption for content generation |
| Data Agent | @data-engineer | Supabase schema |

---

## 3. Functional Requirements

### FR-01 — Scheduled Execution
- Workflow runs automatically every Monday at 08:00 (Brazil timezone, UTC-3)
- Runs without manual trigger after initial setup

### FR-02 — Instagram Scraping
- Scrape last 10 posts per account for all 13 tracked Instagram accounts
- Capture: post URL, caption (full), likes count, comments count, post date, format (reel/carousel/feed)
- Source: Apify `apify/instagram-scraper` actor via REST API
- Skip posts already in database (deduplication by `post_id`)

### FR-03 — YouTube Scraping
- Scrape last 10 videos per channel for all 9 tracked YouTube channels
- Capture: video URL, title, description (first 500 chars), view count, like count, comment count, publish date
- Source: YouTube Data API v3
- Skip videos already in database (deduplication by `video_id`)

### FR-04 — Hook Extraction
- Instagram: extract first sentence of caption (up to first line break or period)
- YouTube: use full video title as hook
- Strip emojis from hook_text for classification (keep in storage)

### FR-05 — LLM Classification
- For each extracted hook, call Claude API (model: `claude-haiku-4-5-20251001`)
- Classify: `hook_type` (attack/contradiction/manifesto/reveal/mirror/question/curiosity_gap/social_proof)
- Classify: `tone` (provocativo/polarizador/filosófico/autoritário/emocional)
- Return: `confidence_score` (0.0–1.0)
- Store `auto_classified: true` for all LLM-classified hooks

### FR-06 — Supabase Storage
- Insert into `hooks` table (skip if `post_id` already exists)
- Insert into `hook_performances` table with engagement metrics
- Log run into `ingestion_logs` table (posts fetched, new, status)

### FR-07 — Weekly Summary
- After run completes, generate summary:
  - Total posts scraped
  - New hooks added
  - Top 3 hooks by engagement rate this week
  - Any errors or skipped accounts
- Deliver summary via: n8n execution log (phase 1), later via ORION notification

---

## 4. Non-Functional Requirements

### NFR-01 — Reliability
- On Apify API failure for one account: log error, continue to next account (do not abort full run)
- On YouTube API failure: same behavior
- On Supabase insert failure: retry once, then log and continue

### NFR-02 — Cost Control
- Apify: use `resultsLimit: 10` per account to minimize unit consumption
- Claude API: use Haiku model (cheapest) for classification — estimated $0.01–0.05/run
- YouTube API: stays within free quota (10k units/day)

### NFR-03 — Deduplication
- Never insert duplicate `post_id` or `video_id`
- Use Supabase `ON CONFLICT DO NOTHING` on insert

### NFR-04 — Auditability
- Every run logged in `ingestion_logs` with timestamp, account, posts_fetched, posts_new, status

---

## 5. Data Model (Reference)

Full schema: managed by `@data-engineer` in Supabase

```
tracked_accounts → hooks → hook_performances
                        → hook_patterns (manual curation)
ingestion_logs (per run)
```

Hook taxonomy (Atlas-defined):
- **hook_type:** attack | contradiction | manifesto | reveal | mirror | question | curiosity_gap | social_proof
- **tone:** provocativo | polarizador | filosófico | autoritário | emocional

---

## 6. Out of Scope (v1)

- Stories scraping (ephemeral — not worth storing)
- Sentiment analysis of comments
- Own account (@arthsystems_) performance comparison — phase 2
- Real-time triggers (weekly batch is sufficient for v1)
- Dashboard UI — data lives in Supabase, accessed via SQL or future Command Center view

---

## 7. Success Criteria

| Metric | Target |
|--------|--------|
| Weekly hook collection | ≥ 150 new hooks/week (22 creators × ~10 posts) |
| Classification accuracy | ≥ 85% (spot-check by Arthur monthly) |
| Run reliability | ≥ 95% successful runs (max 1 failure/month) |
| FREYJA adoption | FREYJA queries hooks table before generating new hooks |

---

## 8. Milestones

| Milestone | Owner | Dependency |
|-----------|-------|-----------|
| Schema created in Supabase | @data-engineer | This PRD approved |
| n8n workflow built | HERMES | Schema + credentials |
| First successful run | HERMES | Workflow live |
| FREYJA integration | FREYJA | First 50+ hooks in DB |
| Weekly curation habit | Arthur | First run complete |
