---
date: 2026-05-23
tags: [skills, hermes, automacao, n8n, zernio, instagram, whatsapp, social-media]
project: runa-systems-global
type: skill-doc
---

# Skills HERMES — Automação e Distribuição

> HERMES owns all automation, distribution, and social publishing in the ecosystem. Primary tools: n8n workflows (Railway), Zernio API (MCP-connected), Meta Graph API, Twitter/X automation via infsh.

---

## n8n-mcp — Workflow Automation

**Instance:** `https://primary-production-bae40.up.railway.app` (Railway)
**Status:** Configured in `.mcp.json` — listed in `disabledMcpjsonServers` (disabled by default, re-enable by removing from array + restart)
**Tools prefix:** `mcp__n8n-mcp__*` (available after re-enabling + session restart)

**Agente:** HERMES (primary), ORION (orchestration), ARES (campaign triggers)
**Quando usar:** Designing and executing n8n workflows from Claude — DM automation, onboarding sequences, upsell/retention automations
**Como usar:**
```
# Re-enable in .claude/settings.local.json — remove "n8n-mcp" from disabledMcpjsonServers
# Restart Claude Code
# Then use mcp__n8n-mcp__* tools
```

**Capabilities when active:**
- Access 1,084 node docs
- Access 2,709 workflow templates
- Design workflows from natural language
- Execute and monitor workflows

**Casos de uso:**
- Instagram DM automation: "comment RUNA → receive entregável via DM"
- Client onboarding sequence: trigger on Clerk webhook → sequence 7-day onboarding
- Upsell automation: 30-day post-purchase → upsell to RUNA MENTORIA
- Sales call transcription → auto-generate follow-up email

---

## Zernio API — Social Media Scheduling and DM Automation

**Status:** ACTIVE — MCP connected (`mcp__zernio__*` tools)
**Note:** Replaced ManyChat — do NOT use ManyChat for any automation

**Tool prefixes available:**
- `mcp__zernio__posts_*` — create, schedule, publish posts
- `mcp__zernio__comments_*` — manage Instagram/Facebook comments
- `mcp__zernio__comment_automations_*` — keyword comment triggers
- `mcp__zernio__broadcasts_*` — bulk messaging
- `mcp__zernio__sequences_*` — automated message sequences
- `mcp__zernio__messages_*` — inbox conversation management
- `mcp__zernio__analytics_*` — post and account analytics
- `mcp__zernio__whatsapp_*` — WhatsApp channel management

**Agente:** HERMES (automation config), @devops (gates final publish)
**Quando usar:** Any Instagram DM automation, post scheduling, or comment keyword trigger

**Instagram DM automation setup:**
```
1. mcp__zernio__comment_automations_create_comment_automation({
     keyword: "RUNA",
     action: "send_dm",
     message: "[entregável link or text]"
   })
2. mcp__zernio__comment_automations_list_comment_automations() — verify active
```

**Post scheduling:**
```
mcp__zernio__posts_create_post({
  platforms: ["instagram"],
  content: "[caption]",
  scheduled_at: "2026-05-25T10:00:00Z",
  media_urls: ["https://..."]
})
```

**Casos de uso:**
- Configure ARQUITETO/RUNA/SISTEMA/AVATAR/SQUAD/AGENTE keyword automations
- Schedule carousel posts for @arthsystems_
- Broadcast messages to subscriber lists
- WhatsApp automation for new RUNA clients

---

## ai-automation-workflows — Complex Automation Design

**Skill:** `ai-automation-workflows` via infsh
**Comando:** `/ai-automation-workflows`
**Agente:** HERMES
**Quando usar:** Designing multi-step automation workflows combining AI + n8n + Zernio + Meta Graph API
**Como usar:** Provide the automation goal; HERMES maps the tool chain and produces a workflow specification

**Casos de uso:**
- Full Instagram → DM → WhatsApp → CRM automation chain
- Content pipeline: n8n triggers MAYA image generation → FREYJA review → Zernio publish
- Onboarding: new client enters RUNA → intake form → squad setup → first 7-day sequence

---

## ai-content-pipeline — Multi-Step AI Content Creation

**Skill:** `ai-content-pipeline` via infsh
**Comando:** `/ai-content-pipeline`
**Agente:** HERMES
**Quando usar:** Orchestrating content creation workflows that involve multiple AI steps (brief → generate → review → schedule)

**Casos de uso:**
- Daily content pipeline: FREYJA brief → MAYA generates → FREYJA reviews → Zernio schedules
- Batch carousel production for the week
- Podcast episode → transcription → repurposing → multi-platform distribution

---

## ai-social-media-content — Social Platform-Specific Content

**Skill:** `ai-social-media-content` via infsh
**Comando:** `/ai-social-media-content`
**Agente:** HERMES
**Quando usar:** Creating content optimized for specific platform formats — Instagram, TikTok, X/Twitter — with correct character limits, hashtag strategy, and timing

**Casos de uso:**
- TikTok cross-posting strategy for @arthsystems_ content
- Twitter/X thread automation for thought leadership

---

## twitter-automation — X/Twitter Publishing

**Skill:** `twitter-automation` via infsh
**Comando:** `/twitter-automation`
**Agente:** HERMES
**Quando usar:** Automating X/Twitter activity for @arthsystems_ — posting, engagement, DMs

**infsh commands:**
```bash
infsh app run x/post-tweet --input '{"text": "Tweet text"}'
infsh app run x/post-create --input '{"text": "Caption", "media_url": "https://image.jpg"}'
infsh app run x/post-like --input '{"tweet_id": "..."}'
infsh app run x/post-retweet --input '{"tweet_id": "..."}'
infsh app run x/dm-send --input '{"user_id": "...", "text": "message"}'
infsh app run x/user-follow --input '{"username": "username"}'
```

---

## Meta Graph API — Direct Integration

**App:** Humus IA | ID: `2144558136010050` | Mode: Live
**Credentials:** Stored in `.env` — never hardcode in code

| Variable | Value |
|----------|-------|
| `META_APP_ID` | `2144558136010050` |
| `META_PAGE_ID` | `679507035249065` (Runa Eco IA Facebook Page) |
| `META_INSTAGRAM_ACCOUNT_ID` | `17841472834166826` (@arthsystems_) |
| `META_INSTAGRAM_USERNAME` | `arthsystems_` |

**Token renewal:** META_USER_TOKEN expires ~60 days. User provides new short-lived token → exchange:
```
GET https://graph.facebook.com/oauth/access_token?grant_type=fb_exchange_token&client_id={APP_ID}&client_secret={APP_SECRET}&fb_exchange_token={NEW_TOKEN}
```

**HERMES operations on Meta:**
- Comment automation triggers (via Zernio — not Graph API directly, avoids App Review)
- DM delivery of entregáveis
- Follower engagement check

**FREYJA operations (via HERMES execute):**
- `instagram_content_publish` — final publish after FREYJA approval

---

## gmail-mcp — Email Operations

**MCP:** `claude_ai_Gmail` (native claude.ai integration — active every session)
**Tools:** `mcp__claude_ai_Gmail__*`

**Agente:** HERMES
**Quando usar:** Sending automated follow-up emails, reading DM-to-email conversion, managing outreach sequences

**Key tools:**
```
mcp__claude_ai_Gmail__create_draft — draft email for review
mcp__claude_ai_Gmail__search_threads — find threads by query
mcp__claude_ai_Gmail__get_thread — read full email thread
mcp__claude_ai_Gmail__list_labels — organize by label
```

---

## Google Calendar — Scheduling

**MCP:** `claude_ai_Google_Calendar` (native — active every session)
**Tools:** `mcp__claude_ai_Google_Calendar__*`

**Agente:** HERMES / ORION
**Quando usar:** Scheduling discovery calls, onboarding sessions, live events, content publishing calendar

**Key tools:**
```
mcp__claude_ai_Google_Calendar__create_event
mcp__claude_ai_Google_Calendar__list_events
mcp__claude_ai_Google_Calendar__suggest_time
```

---

## Publishing Flow — @arthsystems_ Instagram

```
FREYJA *approve-output (asset approved)
  → HERMES receives final asset path + caption + keyword
  → HERMES configures Zernio automation (keyword trigger → DM response)
  → HERMES verifies entregável exists and checkout link is active
  → HERMES schedules or publishes via mcp__zernio__posts_create_post
  → @devops gates final publish: verify all 4 conversion elements present
```

---

## Anti-Patterns

❌ Using ManyChat for any automation — deprecated, Zernio is the active platform
❌ Publishing directly to Instagram without the 4-element conversion post protocol
❌ HERMES accessing Supabase directly — delegate to @dev or @data-engineer
❌ HERMES deciding content narrative — that belongs to FREYJA
❌ Configuring n8n-mcp without restarting Claude Code after enabling
❌ Using Meta Graph API directly for comment automation — use Zernio to avoid App Review
