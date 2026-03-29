# Capability Map — Tool & Skill Assignment

## Reference

Full map: `SÍRIOS/📐 Projetos/capability-map.md`

Before executing ANY task, check the capability map to identify the correct tool, skill, or MCP.
Never guess or reinvent — if the capability exists, use it.

## Quick Lookup by Agent

| Agent | Primary Skills | Primary MCPs |
|-------|---------------|-------------|
| FREYJA | ads-dna, seo-content, obsidian-markdown, **content-repurposing**, **linkedin-content**, **technical-blog-writing** | Supabase |
| MAYA | **ai-image-generation**, **flux-image**, **nano-banana**, **ai-video-generation**, **google-veo**, **elevenlabs-tts**, **elevenlabs-dialogue**, **ai-voice-cloning**, **elevenlabs-music**, **background-removal**, **image-upscaling**, **talking-head-production** | — |
| HERMES | ai-automation-workflows, twitter-automation, **ai-content-pipeline**, **ai-social-media-content** | n8n-mcp, Gmail, Google Calendar |
| ARES | ads-*, ads-plan, ads-competitor, ads-meta, ads-google, spec-writing, **competitor-teardown**, **customer-persona**, **pitch-deck-visuals**, **product-hunt-launch** | — |
| HELIOS | seo-* (all 13 sub-skills), seo-content-brief, **web-search** | — |
| ALEX | defuddle, seo-competitor-pages, **ai-rag-pipeline**, **web-search**, **speech-to-text** | notebooklm-mcp |
| ORION | obsidian-cli, obsidian-markdown, json-canvas, obsidian-bases, agent-workflows, **prompt-engineering** | Gmail, Google Calendar, Netlify |
| @dev | ui-ux-pro-max, frontend-design, agent-sdk-dev, video-to-website, **building-inferencesh-apps**, **javascript-sdk**, **python-sdk**, **agent-browser**, **agent-ui**, **chat-ui**, **tools-ui**, **widgets-ui**, **remotion-render** | Figma, Supabase, Neon |
| @qa | code-review, testing-strategy, pr-review-toolkit | — |
| @devops | devops-automation, commit-commands, hookify | Netlify |
| @architect | architecture-design, agent-workflows | — |
| @data-engineer | (code tools) | Supabase, Neon |

## Tool Selection Priority (always follow this order)

1. **Native Claude Code tools** (Read, Write, Edit, Bash, Grep, Glob) — fastest, local
2. **Project skills** (`.claude/skills/`) — workflow-specific
3. **Global skills** (`~/.claude/skills/`) — ads, seo, obsidian, ui-ux
4. **MCPs** — only for external services (n8n, Supabase, Figma, etc.)
5. **Plugins** — for structured workflows (code-review, commit-commands, etc.)

## inference.sh Skills (via `infsh` CLI — ACTIVE ✓)

Token: stored at `~/.infsh-token` | CLI: `infsh` (global, no args needed)
Full usage rules: `.claude/rules/inference-sh-usage.md`

### MAYA — Image Generation
| Category | Skill | App IDs |
|----------|-------|---------|
| **Image (premium)** | flux-image | `falai/flux-dev`, `falai/flux-dev-lora` |
| **Image (fast)** | p-image, nano-banana | `pruna/p-image`, `google/gemini-3-pro-image-preview` |
| **Image (alt)** | qwen-image-2, nano-banana-2 | `qwen/qwen-vl-max`, `google/gemini-3-flash-image` |
| **Image (existing)** | ai-image-generation | `bytedance/seedream-4-5` |
| **Image process** | background-removal, image-upscaling | `falai/birefnet`, `falai/topaz-image-upscaler` |

### MAYA — Video Production
| Category | Skill | App IDs |
|----------|-------|---------|
| **Video (quality)** | google-veo | `google/veo-3-1-fast` |
| **Video (fast)** | p-video, ai-video-generation | `pruna/p-video`, `bytedance/seedance-1` |
| **Video (avatar)** | talking-head-production, ai-avatar-video | via infsh |
| **Image→Video** | image-to-video | `falai/image-to-video` |
| **Marketing video** | ai-marketing-videos | via infsh |

### MAYA — Audio / Voice
| Category | Skill | App IDs |
|----------|-------|---------|
| **TTS** | elevenlabs-tts, elevenlabs-dialogue | `elevenlabs/text-to-speech`, `elevenlabs/dialogue` |
| **Voice processing** | elevenlabs-dubbing, elevenlabs-voice-changer, elevenlabs-voice-isolator | `elevenlabs/*` |
| **STT** | elevenlabs-stt, speech-to-text | `elevenlabs/scribe` |
| **Music** | elevenlabs-music, ai-music-generation | `elevenlabs/music` |
| **Sound FX** | elevenlabs-sound-effects, dialogue-audio | `elevenlabs/sound-effects` |
| **Voice cloning** | ai-voice-cloning | `elevenlabs/voice-design` |

### Other Agents — inference.sh Skills
| Agent | Skills |
|-------|--------|
| FREYJA | content-repurposing, linkedin-content, technical-blog-writing, newsletter-curation, press-release-writing |
| ARES | competitor-teardown, customer-persona, pitch-deck-visuals, product-hunt-launch, product-changelog |
| ALEX | ai-rag-pipeline, web-search, speech-to-text |
| HERMES | ai-automation-workflows, ai-content-pipeline, ai-social-media-content |
| @dev | building-inferencesh-apps, javascript-sdk, python-sdk, python-executor, agent-browser, agent-tools, agent-ui, chat-ui, tools-ui, widgets-ui, remotion-render |
| @architect | prompt-engineering, video-prompting-guide |

### Worker-only (no agent required)
| Skill | Use Case |
|-------|---------|
| background-removal | Auto post-generation pipeline |
| image-upscaling | Auto quality enhancement |
| speech-to-text | Auto transcription |
| remotion-render | Programmatic React video render |

**Usage pattern:**
```bash
infsh app run <app-id> --input '{"prompt":"..."}'
```

## Gaps (all resolved)

All capabilities now covered. No pending gaps.
Last updated: 2026-03-29
