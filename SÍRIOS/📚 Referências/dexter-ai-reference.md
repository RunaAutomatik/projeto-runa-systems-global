---
date: 2026-04-10
tags: [reference, ai-tools, streaming, automation, competitor-adjacent]
project: runa-systems-global
type: tool-reference
status: monitoring
---

# Dexter AI — Tool Reference

> AI Copilot for live streamers. Beta / waitlist phase as of 2026-04-10.
> Site: https://www.dexterai.org/

---

## What It Is

Dexter is an AI assistant that operates in real time during live streams, automating OBS control, chat moderation, overlays, commands, and post-stream performance analysis. Positions itself as a "set it and forget it" copilot for solo streamers.

**Status:** Early Access / waitlist. No public pricing. Founding Streamer program: 3 months free + 30% lifetime discount.

---

## Core Capabilities

| Phase | Capabilities |
|-------|-------------|
| **Pre-stream** | OBS setup, scene configuration, overlay installation, alert setup |
| **Live** | Chat moderation (bans, spam filters, keyword rules), OBS scene switching, command execution (giveaways, polls, timers), real-time research + voice Q&A |
| **Post-stream** | Performance analysis, trend tracking, viewer engagement stats, recommendations |

---

## Integrations Confirmed

- **Twitch** — required platform integration (channel-level)
- **OBS** — full control (scenes, audio, cameras)
- **Telegram** — notifications
- **Monetization events** — Bits, subscriptions, hype trains, donations/tips

---

## Technical Stack (surface-level)

- Frontend: Astro framework (visible in page source)
- AI architecture: undisclosed — no model or API details public
- Voice Q&A: mentioned but not technically specified

---

## Relevance to RUNA SYSTEMS

### Direct use
- If Arthur adds Twitch/YouTube Live as an acquisition channel (e.g., "Lives de Construção" product at R$97 each), Dexter reduces solo-operation overhead
- Chat moderation + command automation aligns with what HERMES does for DM flows — same pattern, different channel

### As course material
- Dexter is a real-world AI agent operating across pre/during/post phases of an event — identical pattern to what RUNA SYSTEMS teaches for business operations
- Strong example for **AGENT$** module: "an agent that knows what phase it's in and acts accordingly"
- Validates the "agentic lifecycle" concept Arthur teaches

### As positioning reference
- Product model (waitlist → founding member discount → subscription) is the same model RUNA uses
- The "founding streamers get equity" angle is a community activation tactic worth studying for RUNA launches

---

## Verdict

| Criterion | Score |
|-----------|-------|
| Immediate operational value | ⚠️ Only if streaming is active channel |
| Teaching/course material value | ✅ Strong use case for AGENT$ |
| Infrastructure fit (replaces something) | ❌ No overlap with current stack |
| Monitor priority | ✅ Enter waitlist, check when out of beta |

---

## Research Method

Researched 2026-04-10 via WebFetch (HTML content extraction). Site uses minimal JS — full content readable.
Full Chrome DevTools access (claude --chrome) would add: DOM inspection, network tab, console errors — useful if revisiting an auth-gated dashboard version.

---

## Related

- [[capability-map]] — agent/tool assignment reference
- [[product-course-raw-material]] — raw material captures for RUNA SYSTEMS course
- [[runa-systems-prd]] — main product hub
