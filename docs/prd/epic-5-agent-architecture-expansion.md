---
epic: 5
title: Agent Architecture Expansion + inference.sh Integration
status: In Progress
priority: P1
owner: ORION
date: 2026-03-29
tags: [epic, agents, inference-sh, maya, freyja, capability-map, architecture]
project: runa-systems-global
---

# Epic 5 — Agent Architecture Expansion + inference.sh Integration

## Goal

Expand the Runa Systems agent ecosystem to support all newly installed inference.sh
capabilities, introduce the MAYA agent for Audio-Visual Production, refactor FREYJA's
scope to Narrative Intelligence only, and create formal capability-map and usage rules
that govern all 50+ new skills.

## Why This Matters

The inference.sh platform now provides 50+ skills (image generation, video, voice, music,
automation, dev SDKs, business tools) that are currently unmapped and unassigned.
Without formal mapping:
- Agents will guess which tool to use or ignore tools entirely
- No clear authority boundaries for AV production
- FREYJA's scope is overloaded (narrative + media generation = two different concerns)
- Workers cannot be built without knowing which tools back them

## Architectural Decision: FREYJA ↔ MAYA Split

### Problem
FREYJA was responsible for both narrative intelligence AND media generation. These are
fundamentally different concerns: one is strategic/creative, the other is production/technical.

### Decision
Split into two specialized agents:

| Agent | Scope | Authority |
|-------|-------|-----------|
| FREYJA | Narrative Intelligence — brand DNA, positioning, copy, hooks, content strategy, AV review/approval | APPROVES or REJECTS MAYA output |
| MAYA | Audio-Visual Production — all inference.sh media generation (images, video, voice, music) | EXECUTES briefs from FREYJA |

### Collaboration Flow
```
FREYJA (brief + narrative direction)
  → MAYA (generates assets via inference.sh)
  → FREYJA (reviews aderência à narrativa — approves/rejects)
  → Editor Workers (format, export, adapt dimensions — no agent required)
  → HERMES (publishes)
```

### Workers (no agent required)
These tools run as autonomous pipeline steps:
- `background-removal` — automatic post-generation
- `image-upscaling` — automatic quality enhancement
- `speech-to-text` — automatic transcription
- `remotion-render` — programmatic React video render

## Current State

| Capability | Status |
|------------|--------|
| FREYJA (narrative) | ✅ Active — scope refactor needed |
| MAYA (AV production) | ❌ Does not exist — must create |
| Capability map (inference.sh) | ⚠️ Partial — 10 skills mapped, 50+ unmapped |
| inference-sh-usage rules | ❌ Does not exist |
| Agent authority (MAYA/FREYJA) | ❌ Not defined |

## Stories

| Story | Title | Status | Priority |
|-------|-------|--------|----------|
| 5.1 | Create MAYA Agent — Audio-Visual Production | Done | P0 |
| 5.2 | Refactor FREYJA — Narrative Intelligence + AV Review | Done | P0 |
| 5.3 | Capability Map Full Update (50+ new skills) | Done | P1 |
| 5.4 | Create inference-sh-usage.md Rule File | Done | P1 |
| 5.5 | Agent Authority Update + MAYA/FREYJA Collaboration Protocol | Done | P1 |

## Acceptance Criteria (Epic Done When)

- [ ] MAYA agent is activatable via `@maya` or `/AIOX:agents:maya` with full persona and commands
- [ ] FREYJA no longer handles AV generation — only narrative + review/approval
- [ ] All 50+ new inference.sh skills are mapped to agents in capability-map
- [ ] `.claude/rules/inference-sh-usage.md` exists with usage rules per skill category
- [ ] `agent-authority.md` includes MAYA authority and FREYJA↔MAYA collaboration protocol
- [ ] Both capability-map files (rules + Obsidian) are in sync

## Skills Added (50+ new)

### Image Generation
`flux-image`, `nano-banana`, `nano-banana-2`, `qwen-image-2`, `qwen-image-2-pro`,
`background-removal`, `character-design-sheet`, `book-cover-design`, `logo-design-guide`,
`og-image-design`, `youtube-thumbnail-design`

### Video Production
`p-video`, `remotion-render`, `talking-head-production`, `ai-avatar-video`,
`ai-marketing-videos`, `video-ad-specs`, `video-prompting-guide`, `storyboard-creation`,
`explainer-video-guide`

### Audio / Voice
`elevenlabs-dubbing`, `elevenlabs-stt`, `elevenlabs-sound-effects`,
`elevenlabs-voice-changer`, `elevenlabs-voice-isolator`, `dialogue-audio`, `speech-to-text`

### Content / Marketing
`ai-content-pipeline`, `ai-social-media-content`, `content-repurposing`, `linkedin-content`,
`newsletter-curation`, `technical-blog-writing`, `press-release-writing`, `email-design`,
`pitch-deck-visuals`, `product-hunt-launch`, `product-changelog`

### Dev / SDK
`agent-browser`, `agent-tools`, `agent-ui`, `chat-ui`, `tools-ui`, `widgets-ui`,
`javascript-sdk`, `python-sdk`, `python-executor`, `building-inferencesh-apps`

### Business / Research
`competitor-teardown`, `customer-persona`, `data-visualization`, `web-search`, `prompt-engineering`

## Architecture Reference

See: `SÍRIOS/📐 Projetos/capability-map.md` (full inventory — updated by Story 5.3)
