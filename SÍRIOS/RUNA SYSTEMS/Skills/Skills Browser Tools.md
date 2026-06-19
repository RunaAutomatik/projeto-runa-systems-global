---
date: 2026-05-23
tags: [skill, browser, gstack, agent-browser, playwright, automation]
project: runa-systems-global
type: skill-doc
---

# Browser Tools — Comparison Guide

Three browser tools exist in the AIOX stack. Each targets a distinct use case.
Choosing the wrong one wastes tokens, breaks anti-bot flows, or fails on dynamic content.

---

## Tool Overview

| Tool | Skill | Agent owner | Visibility | Speed | Best for |
|------|-------|-------------|-----------|-------|---------|
| `browse` | gstack `/browse` | HERMES / @dev | Headless (no window) | ~100ms | Automated QA, fast DOM checks, CI |
| `open-gstack-browser` | gstack `/open-gstack-browser` | @dev / HERMES | Visible Chromium + sidebar | Moderate | Anti-bot sites, live debugging, stealth sessions |
| `agent-browser` | `~/.claude/skills/agent-browser` | HERMES / ALEX | Headless Playwright | Moderate | AI-driven multi-step flows, Instagram scraping, form fills |

---

## 1. `browse` — gstack Headless Daemon

**Skill:** `~/.claude/skills/gstack/browse`
**Invoke:** `/browse`
**Agent owners:** HERMES (automation tasks), @dev (frontend testing)

### What it is
Headless Playwright browser with persistent state and ~100ms navigation. Launched as a
background daemon; multiple agents can share the same session via `/pair-agent`.

### When to use
- Checking if a page renders correctly (no auth needed)
- Scraping public structured data (JSON-LD, meta tags, structured HTML)
- Running Playwright selectors on a known DOM structure
- CI-style URL-to-content extraction
- Fast internal tooling checks (localhost:3000 verification)

### When NOT to use
- Sites with Cloudflare or similar anti-bot detection — headless signature is detectable
- Instagram, TikTok, YouTube (logged-in sessions, dynamic video feeds) — will be blocked
- When you need to visually verify UI layout — headless gives no rendering preview
- When session persistence across days is needed — daemon state resets

### Invocation pattern
```
/browse navigate to https://example.com
/browse get text from .main-content
/browse click button[data-action="load-more"]
```

---

## 2. `open-gstack-browser` — Visible Chromium with Sidebar

**Skill:** `~/.claude/skills/gstack/open-gstack-browser`
**Invoke:** `/open-gstack-browser`
**Agent owners:** @dev (live debugging), HERMES (stealth social media sessions)

### What it is
Opens a real, visible Chromium window with a Claude Code sidebar extension. The extension
creates a live activity feed — Claude sees what's on screen and can interact while you
watch. Anti-bot stealth mode is active (mimics genuine user fingerprint).

### When to use
- Sessions where you are already logged into Instagram, LinkedIn, or TikTok in Chromium
- Debugging layout issues where visual confirmation matters
- Capturing screenshots of logged-in states
- Navigating multi-step flows on sites that detect Playwright headless
- Extracting content from dynamic SPA pages (React, Vue apps)

### When NOT to use
- Automated pipelines (requires a visible window — incompatible with server/CI)
- Quick DOM reads on public pages (`browse` is faster)
- When the user is not present (open-gstack-browser requires an active desktop session)

### Invocation pattern
```
/open-gstack-browser
→ Chromium opens with sidebar
→ Navigate manually or instruct Claude via sidebar
→ Claude reads screen, suggests actions, executes selectors
```

---

## 3. `agent-browser` — inference.sh Playwright Agent

**Skill:** `~/.claude/skills/agent-browser` → `~/.agents/skills/agent-browser`
**Invoke:** `/agent-browser` or `infsh app run agent-browser`
**Agent owners:** HERMES (complex automation), ALEX (research)

### What it is
A full Playwright agent running on inference.sh infrastructure. Uses a `@e` reference
system — every DOM element gets a short `@e1`, `@e2`... label for reliable selection.
Designed for multi-step autonomous browser tasks with AI decision-making at each step.

### When to use
- Extracting structured data from dynamic, JavaScript-heavy pages
- Multi-step form fills or account interactions
- Research flows that require navigating 3+ pages in sequence
- When you need Claude to *reason* about the page content, not just select elements
- Instagram content analysis when you have an authenticated session to pass

### When NOT to use
- Simple single-page reads (`browse` is faster and cheaper)
- Local development testing — latency to inference.sh adds overhead
- Binary file downloads (agent-browser is text/DOM-oriented)

### Invocation pattern
```bash
infsh app run agent-browser --input '{
  "task": "Go to https://www.instagram.com/arthsystems_/reels/ and list the last 5 Reels titles and their like counts",
  "session_cookies": "..."
}'
```

The `@e` ref system makes interaction reliable:
```
Agent sees: @e1=<div class="reel-title">...</div>
Agent acts: click @e1, read @e2, extract @e3
```

---

## Decision Tree

```
Need to interact with a browser?
│
├── Public page, no auth, fast read?
│     └── /browse  (100ms, headless, no tokens wasted on setup)
│
├── Site has anti-bot / Cloudflare / requires login?
│   ├── You are present at the desktop?
│   │     └── /open-gstack-browser  (stealth Chromium, sidebar, you watch)
│   └── Automated, unattended?
│         └── agent-browser  (with session cookies injected)
│
└── Multi-step AI reasoning flow (Instagram analysis, research, forms)?
      └── agent-browser  (Playwright + @e refs + inference.sh AI steps)
```

---

## Instagram / Reels Analysis — Which Tool?

**Correct tool: `open-gstack-browser` (first choice) → `agent-browser` (automation)**

### Why not `/browse`:
Instagram returns a minimal or blocked response to headless Playwright. Reels data is
loaded via client-side JavaScript after auth — a headless browser without cookies gets
empty DOM or an auth redirect. Even with cookies injected, headless fingerprint triggers
extra auth challenges.

### Why `open-gstack-browser` is first choice:
- You are already logged into Instagram in Chromium
- Anti-bot stealth is active — Instagram cannot distinguish from a real user
- Claude's sidebar can read the page as it renders, see video thumbnails, captions, view counts
- No session cookie extraction required — uses your live browser session

**Workflow for Instagram Reel analysis:**
```
1. /open-gstack-browser
2. Navigate to https://www.instagram.com/[account]/reels/
3. Claude reads DOM via sidebar: title, views, likes, caption, hashtags
4. Scroll to load more → Claude continues reading
5. Compile results into structured list
```

### When to use `agent-browser` instead (automated pipeline):
When you want FREYJA or HERMES to run competitor analysis on a schedule (not live):
```bash
infsh app run agent-browser --input '{
  "task": "Navigate to instagram.com/[account]/reels/, extract last 10 reels: caption, views, likes, date. Return as JSON.",
  "session_cookies": "[exported cookies JSON]"
}'
```
Export cookies from Chromium using EditThisCookie or similar extension, inject via
`session_cookies` param. This allows authenticated sessions without the visible window.

---

## Summary Table for AIOX Agents

| Use case | Tool | Command |
|----------|------|---------|
| Check if a landing page renders | browse | `/browse` |
| Verify localhost:3000 UI | browse | `/browse` |
| Quick public site scrape (no auth) | browse | `/browse` |
| Instagram Reels analysis (live session) | open-gstack-browser | `/open-gstack-browser` |
| LinkedIn competitor post analysis | open-gstack-browser | `/open-gstack-browser` |
| Automated Instagram research (unattended) | agent-browser | `infsh app run agent-browser` |
| Multi-step form submission | agent-browser | `infsh app run agent-browser` |
| Cloudflare-protected pages (live) | open-gstack-browser | `/open-gstack-browser` |
| QA testing in CI | browse | `/browse` |

---

## Agent Authority

| Agent | Primary browser tool | Why |
|-------|---------------------|-----|
| HERMES | browse / open-gstack-browser | Automation + social media management |
| ALEX | agent-browser | Research — multi-step data extraction |
| @dev | browse / open-gstack-browser | Local dev testing + UI debugging |
| FREYJA | open-gstack-browser (via HERMES) | Content analysis — does not execute directly |
| ARES | agent-browser | Competitor intelligence — automated |

---

## Related Skills

- `/browse` — `SÍRIOS/RUNA SYSTEMS/Skills/Skills gstack.md`
- `/open-gstack-browser` — `SÍRIOS/RUNA SYSTEMS/Skills/Skills gstack.md`
- `agent-browser` — installed at `~/.claude/skills/agent-browser` (symlink to `~/.agents/skills/agent-browser`)
- Zernio API — `~/.claude/rules/mcp-usage.md` (for Instagram automation via API, not browser)
