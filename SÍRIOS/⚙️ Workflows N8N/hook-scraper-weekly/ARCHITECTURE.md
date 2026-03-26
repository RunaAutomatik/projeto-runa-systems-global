---
date: 2026-03-24
tags: [architecture, n8n, workflow, hermes, instagram, youtube, supabase, apify]
project: runa-systems-global
hub: [[INDEX]]
---

# Architecture — Hook Scraper Weekly

> Hub: [[INDEX]] | PRD: [[PRD]] | Workflow JSON: [[workflow]]

---

## 1. High-Level Flow

```
┌─────────────────────────────────────────────────────────────┐
│                   MONDAY 08:00 (UTC-3)                      │
│                   Schedule Trigger                          │
└────────────────────────┬────────────────────────────────────┘
                         │
           ┌─────────────┴─────────────┐
           ▼                           ▼
   BRANCH A: Instagram          BRANCH B: YouTube
   (Apify REST API)             (YouTube Data API v3)
           │                           │
   Loop 13 accounts           Loop 9 channels
           │                           │
   GET last 10 posts          GET last 10 videos
           │                           │
   Extract hook_text          Extract hook_text (title)
           └─────────────┬─────────────┘
                         │
                  ▼ Merge Results ▼
                         │
              Claude API (Haiku)
              → hook_type + tone
              → confidence_score
                         │
               Supabase INSERT
               hooks + hook_performances
               ON CONFLICT DO NOTHING
                         │
               ingestion_logs INSERT
               (run summary)
                         │
               ✅ Run Complete
```

---

## 2. Node Map (n8n)

### Node 1 — Schedule Trigger
```
Type: Schedule Trigger
Rule: Every Monday at 08:00
Timezone: America/Sao_Paulo
Output: trigger signal
```

### Node 2A — Instagram Account List
```
Type: Code (Set)
Output: Array of 13 Instagram handles
[
  "byjoeym", "pedrovaleriolopez", "dougdemarco_",
  "franklim.gui", "thegrowthceo", "chase.h.ai",
  "thevibefounder", "godofprompt", "philipisberg",
  "daniel.avell", "stevearnesonofficial",
  "noevarner.ai", "nateherkai"
]
```

### Node 2B — YouTube Channel List
```
Type: Code (Set)
Output: Array of 9 YouTube handles
[
  "nateherk", "oalanicolas", "jovensdenegocios",
  "horadenegocios", "Academia.Lendaria",
  "Chase-H-AI", "danmartell", "BenAI92", "Itssssss_Jack"
]
```

### Node 3A — Loop Instagram Accounts
```
Type: Loop Over Items
Input: Instagram handle array
```

### Node 4A — Apify: Run Instagram Scraper
```
Type: HTTP Request
Method: POST
URL: https://api.apify.com/v2/acts/apify~instagram-scraper/run-sync-get-dataset-items
Auth: Bearer {{ $env.APIFY_API_TOKEN }}
Body (JSON):
{
  "directUrls": ["https://www.instagram.com/{{ $json.handle }}/"],
  "resultsLimit": 10,
  "addParentData": false
}
Timeout: 120s (Apify may take up to 60s to scrape)
On Error: Continue (log, move to next account)
```

### Node 5A — Extract Instagram Hook
```
Type: Code
Logic:
  - Take caption field from Apify response
  - Extract first line (split by \n, take index 0)
  - If first line < 20 chars, take first sentence (split by .)
  - Strip leading/trailing whitespace
  - Map fields: post_id, post_url, hook_text, full_caption,
    format (detect: reel/carousel/feed), likes, comments,
    posted_at, source_account
```

### Node 3B — Loop YouTube Channels
```
Type: Loop Over Items
Input: YouTube handle array
```

### Node 4B — YouTube: Get Channel Upload Playlist
```
Type: HTTP Request
Method: GET
URL: https://www.googleapis.com/youtube/v3/channels
Params:
  part: contentDetails
  forHandle: @{{ $json.handle }}
  key: {{ $env.YOUTUBE_API_KEY }}
Output: uploads playlist ID
```

### Node 5B — YouTube: Get Last 10 Videos
```
Type: HTTP Request
Method: GET
URL: https://www.googleapis.com/youtube/v3/playlistItems
Params:
  part: snippet
  playlistId: {{ $json.uploadsPlaylistId }}
  maxResults: 10
  key: {{ $env.YOUTUBE_API_KEY }}
```

### Node 6B — YouTube: Get Video Stats
```
Type: HTTP Request
Method: GET
URL: https://www.googleapis.com/youtube/v3/videos
Params:
  part: statistics
  id: {{ comma-separated video IDs }}
  key: {{ $env.YOUTUBE_API_KEY }}
Output: views, likes, comments per video
```

### Node 7B — Extract YouTube Hook
```
Type: Code
Logic:
  - hook_text = video title (full)
  - Map fields: video_id, video_url, hook_text,
    description (first 500 chars), views, likes, comments,
    posted_at, source_channel, format: "video"
```

### Node 8 — Merge Branches
```
Type: Merge
Mode: Append (combine Instagram + YouTube results)
```

### Node 9 — Claude API: Classify Hook
```
Type: HTTP Request
Method: POST
URL: https://api.anthropic.com/v1/messages
Headers:
  x-api-key: {{ $env.ANTHROPIC_API_KEY }}
  anthropic-version: 2023-06-01
Body:
{
  "model": "claude-haiku-4-5-20251001",
  "max_tokens": 100,
  "messages": [{
    "role": "user",
    "content": "Classify this social media hook into exactly ONE hook_type and ONE tone. Return JSON only.\n\nhook_type options: attack | contradiction | manifesto | reveal | mirror | question | curiosity_gap | social_proof\ntone options: provocativo | polarizador | filosófico | autoritário | emocional\n\nHook: \"{{ $json.hook_text }}\"\n\nReturn: {\"hook_type\": \"...\", \"tone\": \"...\", \"confidence\": 0.0}"
  }]
}
Output: hook_type, tone, confidence_score
```

### Node 10 — Supabase: Check Duplicate
```
Type: HTTP Request (Supabase REST)
Method: GET
URL: {{ $env.SUPABASE_URL }}/rest/v1/hooks?post_id=eq.{{ $json.post_id }}&select=id
Headers:
  apikey: {{ $env.SUPABASE_SERVICE_ROLE_KEY }}
  Authorization: Bearer {{ $env.SUPABASE_SERVICE_ROLE_KEY }}
Logic: if result.length > 0 → skip, else → proceed to insert
```

### Node 11 — Supabase: Insert Hook
```
Type: HTTP Request (Supabase REST)
Method: POST
URL: {{ $env.SUPABASE_URL }}/rest/v1/hooks
Headers:
  apikey: {{ $env.SUPABASE_SERVICE_ROLE_KEY }}
  Authorization: Bearer {{ $env.SUPABASE_SERVICE_ROLE_KEY }}
  Prefer: resolution=ignore-duplicates
Body: {
  "post_id": ...,
  "hook_text": ...,
  "hook_type": ...,
  "tone": ...,
  "format": ...,
  "source_account": ...,
  "auto_classified": true,
  "classification_confidence": ...,
  "posted_at": ...
}
```

### Node 12 — Supabase: Insert Performance
```
Type: HTTP Request (Supabase REST)
Method: POST
URL: {{ $env.SUPABASE_URL }}/rest/v1/hook_performances
Body: {
  "hook_id": {{ $json.inserted_hook_id }},
  "likes": ...,
  "comments": ...,
  "saves": null (reference accounts — unavailable),
  "views": ...,
  "reach": null
}
```

### Node 13 — Supabase: Insert Run Log
```
Type: HTTP Request (Supabase REST)
Method: POST
URL: {{ $env.SUPABASE_URL }}/rest/v1/ingestion_logs
Body: {
  "posts_fetched": {{ total }},
  "posts_new": {{ new_count }},
  "status": "success",
  "run_at": {{ now }}
}
```

---

## 3. Error Handling Strategy

| Error | Behavior |
|-------|----------|
| Apify timeout (>120s) | Log account as failed, continue to next |
| YouTube quota exceeded | Abort YouTube branch, log, Instagram continues |
| Claude API error | Store hook with `hook_type: null`, `auto_classified: false` |
| Supabase insert fail | Retry once after 5s, then log and skip |
| Full workflow crash | n8n auto-retry after 1 hour (configure in workflow settings) |

---

## 4. Credentials Map

| n8n Variable | .env Key | Service |
|-------------|---------|---------|
| `$env.APIFY_API_TOKEN` | `APIFY_API_TOKEN` | Apify REST API |
| `$env.YOUTUBE_API_KEY` | `YOUTUBE_API_KEY` | YouTube Data API v3 |
| `$env.ANTHROPIC_API_KEY` | `ANTHROPIC_API_KEY` | Claude Haiku classification |
| `$env.SUPABASE_URL` | `SUPABASE_URL` | Supabase REST API |
| `$env.SUPABASE_SERVICE_ROLE_KEY` | `SUPABASE_SERVICE_ROLE_KEY` | Supabase auth |

> All credentials set as n8n environment variables — never hardcoded in nodes.

---

## 5. Estimated Run Metrics

| Metric | Estimate |
|--------|----------|
| Total posts per run | ~220 (22 creators × 10 posts) |
| New posts per run | ~150–180 (first run), ~50–80 (steady state) |
| Apify cost/run | ~$0.30–0.80 (13 accounts × ~$0.05/account) |
| YouTube API units/run | ~500 units (well within 10k free quota) |
| Claude Haiku cost/run | ~$0.02–0.05 (220 classifications) |
| Total estimated cost/week | ~$0.35–0.90/run |
| Run duration | ~5–10 minutes |

---

## 6. Supabase Schema Reference

Full DDL managed by `@data-engineer`. Tables used by this workflow:

```sql
tracked_accounts    -- creator registry
hooks               -- hook text + classification
hook_performances   -- engagement metrics
ingestion_logs      -- run audit trail
```

---

## 7. Future Improvements (v2)

- Add saves scraping for own account (@arthsystems_) via Meta Graph API
- Add comment sentiment analysis (top comments on high-engagement posts)
- Slack/Telegram notification with weekly top 5 hooks
- FREYJA auto-query: before generating a hook, pull top-3 from DB by niche+type
