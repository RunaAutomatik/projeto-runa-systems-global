---
date: 2026-03-29
tags: [ecosystem, capabilities, agents, tools, skills]
project: runa-systems-global
---

# Capability Map — Runa Systems Global

> Source of truth for which tool, skill, plugin, or MCP to use for each agent, product, and workflow.
> Every agent reads this before deciding how to execute a task.

---

## 1. Quick Reference — By Agent

### FREYJA (Narrative Intelligence Agent)
| Task | Tool/Skill | How |
|------|-----------|-----|
| Write copy, captions, hooks | Claude native | Direct generation |
| Research competitor content | `seo-content`, `seo-competitor-pages` | `/seo-content` |
| Extract brand DNA from URL | `ads-dna` | `/ads-dna` |
| Write blog posts / LinkedIn content | `technical-blog-writing`, `linkedin-content` | `/technical-blog-writing` |
| Repurpose existing content | `content-repurposing` | `/content-repurposing` |
| Write newsletter copy | `newsletter-curation` | `/newsletter-curation` |
| Write press releases | `press-release-writing` | `/press-release-writing` |
| Brief MAYA for image/video | `*brief-maya` command | FREYJA → MAYA handoff |
| Review MAYA output (narrative check) | `*av-review` command | FREYJA exclusive authority |
| Approve AV assets for publishing | `*approve-output` command | FREYJA → Editor Workers |
| Save content to vault | `obsidian-cli`, `obsidian-markdown` | `/obsidian-cli` |
| Build Obsidian canvas (content calendar) | `json-canvas` | `/json-canvas` |

### MAYA (Audio-Visual Production Agent)
| Task | Tool/Skill | How |
|------|-----------|-----|
| Generate Instagram image (premium) | `flux-image` | `infsh app run falai/flux-dev` |
| Generate Instagram image (fast) | `p-image`, `nano-banana` | `infsh app run pruna/p-image` |
| Generate Instagram image (Gemini) | `nano-banana-2` | `infsh app run google/gemini-3-flash-image` |
| Generate Instagram image (Qwen) | `qwen-image-2` | `infsh app run qwen/qwen-vl-max` |
| Generate product image | `ai-product-photography`, `flux-image` | `infsh app run falai/flux-dev` |
| Remove background from image | `background-removal` | `infsh app run falai/birefnet` |
| Upscale/enhance image | `image-upscaling` | `infsh app run falai/topaz-image-upscaler` |
| Generate reel video (quality) | `google-veo` | `infsh app run google/veo-3-1-fast` |
| Generate reel video (fast) | `p-video`, `ai-video-generation` | `infsh app run pruna/p-video` |
| Create talking-head video | `talking-head-production`, `ai-avatar-video` | `/talking-head-production` |
| Create marketing video | `ai-marketing-videos` | `/ai-marketing-videos` |
| Animate still image | `image-to-video` | `infsh app run falai/image-to-video` |
| Generate TTS narration | `elevenlabs-tts` | `infsh app run elevenlabs/text-to-speech` |
| Generate multi-speaker dialogue | `elevenlabs-dialogue` | `infsh app run elevenlabs/dialogue` |
| Dub audio to another language | `elevenlabs-dubbing` | `infsh app run elevenlabs/dubbing` |
| Change voice style | `elevenlabs-voice-changer` | `infsh app run elevenlabs/voice-changer` |
| Isolate clean voice track | `elevenlabs-voice-isolator` | `infsh app run elevenlabs/voice-isolator` |
| Transcribe audio to text | `elevenlabs-stt`, `speech-to-text` | `infsh app run elevenlabs/scribe` |
| Clone or design custom voice | `ai-voice-cloning` | `infsh app run elevenlabs/voice-design` |
| Generate background music | `elevenlabs-music`, `ai-music-generation` | `infsh app run elevenlabs/music` |
| Generate sound effects | `elevenlabs-sound-effects` | `infsh app run elevenlabs/sound-effects` |
| Multi-character audio scene | `dialogue-audio` | `/dialogue-audio` |
| Review brief, propose production plan | `*review-brief` command | MAYA planning mode |
| Generate storyboard | `storyboard-creation` | `/storyboard-creation` |

### HERMES (Automation Agent)
| Task | Tool/Skill | How |
|------|-----------|-----|
| Design n8n workflow | n8n-mcp | `mcp__n8n-mcp__*` |
| Search n8n nodes | n8n-mcp | `mcp__n8n-mcp__search_nodes` |
| Get n8n templates | n8n-mcp | `mcp__n8n-mcp__get_template` |
| Validate workflow | n8n-mcp | `mcp__n8n-mcp__validate_workflow` |
| Instagram DM automation | n8n-mcp + Meta Graph API | Via HERMES automation |
| Email automation | `claude.ai Gmail` | `mcp__claude_ai_Gmail__*` |
| Calendar scheduling | `claude.ai Google Calendar` | `mcp__claude_ai_Google_Calendar__*` |
| Client onboarding sequence | n8n-mcp + Supabase | Pipeline design |
| Design multi-platform AI automation | `ai-automation-workflows` | `/ai-automation-workflows` |
| Build multi-step content pipeline | `ai-content-pipeline` | `/ai-content-pipeline` |
| Automate social media content | `ai-social-media-content` | `/ai-social-media-content` |
| Twitter/X automation | `twitter-automation` | `/twitter-automation` |

### ARES (Offer/Business Agent)
| Task | Tool/Skill | How |
|------|-----------|-----|
| Structure product offer | Claude native + `spec-writing` | `/spec-writing` |
| Analyze competitor ads | `ads-competitor`, `ads-audit` | `/ads-competitor` |
| Tear down competitor strategy | `competitor-teardown` | `/competitor-teardown` |
| Map customer persona | `customer-persona` | `/customer-persona` |
| Plan ad campaign | `ads-plan`, `ads-create` | `/ads-plan` |
| Audit Meta/Instagram ads | `ads-meta` | `/ads-meta` |
| Audit Google ads | `ads-google` | `/ads-google` |
| Build landing page brief | `ads-landing` | `/ads-landing` |
| Budget allocation | `ads-budget` | `/ads-budget` |
| Design investor pitch deck | `pitch-deck-visuals` | `/pitch-deck-visuals` |
| Plan Product Hunt launch | `product-hunt-launch` | `/product-hunt-launch` |
| Write product changelog | `product-changelog` | `/product-changelog` |

### HELIOS (SEO Agent)
| Task | Tool/Skill | How |
|------|-----------|-----|
| Full site SEO audit | `seo-audit` | `/seo-audit` |
| Single page SEO analysis | `seo-page` | `/seo-page` |
| Technical SEO | `seo-technical` | `/seo-technical` |
| Schema markup | `seo-schema` | `/seo-schema` |
| AI Overviews / GEO | `seo-geo` | `/seo-geo` |
| Sitemap | `seo-sitemap` | `/seo-sitemap` |
| Hreflang (i18n) | `seo-hreflang` | `/seo-hreflang` |
| Programmatic SEO | `seo-programmatic` | `/seo-programmatic` |
| Content E-E-A-T | `seo-content` | `/seo-content` |

### ALEX (Intelligence/Research Agent)
| Task | Tool/Skill | How |
|------|-----------|-----|
| Market research | Claude WebSearch + `defuddle` | `/defuddle` + WebSearch |
| Extract web content clean | `defuddle` | `/defuddle` |
| Web search (structured) | `web-search` | `/web-search` |
| Competitor SEO analysis | `seo-competitor-pages` | `/seo-competitor-pages` |
| Build RAG pipeline over vault | `ai-rag-pipeline` | `/ai-rag-pipeline` |
| Transcribe audio research | `speech-to-text` | `/speech-to-text` |
| Generate NotebookLM podcast | notebooklm-mcp | `mcp__notebooklm-mcp__*` |
| Add source to notebook | notebooklm-mcp | `mcp__notebooklm-mcp__add_notebook` |
| Ask notebook question | notebooklm-mcp | `mcp__notebooklm-mcp__ask_question` |

### ORION (Orchestrator)
| Task | Tool/Skill | How |
|------|-----------|-----|
| Write to Obsidian vault | `obsidian-cli` | `/obsidian-cli` |
| Create Obsidian note | `obsidian-markdown` | `/obsidian-markdown` |
| Open/close work diary | `obsidian-cli` | `npm run dia:abrir/fechar` |
| Read email | `claude.ai Gmail` | `mcp__claude_ai_Gmail__gmail_read_message` |
| Create calendar event | `claude.ai Google Calendar` | `mcp__claude_ai_Google_Calendar__gcal_create_event` |
| Deploy to Netlify | `claude.ai Netlify` | `mcp__claude_ai_Netlify__*` |
| Orchestrate multi-agent workflow | `agent-workflows` | `/agent-workflows` |

### @dev (Dex — Implementation)
| Task | Tool/Skill | How |
|------|-----------|-----|
| Design UI/UX | `ui-ux-pro-max`, `frontend-design` | `/ui-ux-pro-max` |
| Build frontend | `frontend-design` plugin | Via plugin agents |
| Read Figma design | `claude.ai Figma` | `mcp__claude_ai_Figma__get_design_context` |
| Database schema | `claude.ai Supabase` | `mcp__claude_ai_Supabase__*` |
| PostgreSQL (Neon) | Neon MCP | `mcp__Neon__*` |
| Build Agent SDK app | `agent-sdk-dev` plugin | `/agent-sdk-dev:new-sdk-app` |
| Build inference.sh app | `building-inferencesh-apps` | `/building-inferencesh-apps` |
| Video → website | `video-to-website` | `/video-to-website` |
| Build agent UI components (React) | `agent-ui`, `chat-ui`, `tools-ui`, `widgets-ui` | `/agent-ui` |
| Browser automation for agents | `agent-browser` | `/agent-browser` |
| Use inference.sh JS SDK | `javascript-sdk` | `/javascript-sdk` |
| Use inference.sh Python SDK | `python-sdk` | `/python-sdk` |
| Execute Python in sandbox | `python-executor` | `/python-executor` |
| Render React/Remotion video | `remotion-render` | `/remotion-render` |
| Code review (self) | `code-review` plugin | `/code-review` |

### @devops (Gage — EXCLUSIVE)
| Task | Tool/Skill | How |
|------|-----------|-----|
| Git push / PR | `commit-commands` | `/commit-commands:commit-push-pr` |
| Deploy | `claude.ai Netlify` | `mcp__claude_ai_Netlify__netlify-deploy-services-updater` |
| Manage hooks | `hookify` plugin | `/hookify` |

### @architect (Aria)
| Task | Tool/Skill | How |
|------|-----------|-----|
| System architecture | `architecture-design` | `/architecture-design` |
| Map codebase | `gsd:map-codebase` | `/gsd:map-codebase` |
| Design system | `ui-ux-pro-max` | `/ui-ux-pro-max` |

---

## 2. Quick Reference — By Product

### RUNA SYSTEMS (High Ticket — R$15k/ano)
| Module | Tools/Skills |
|--------|-------------|
| Claude.ai chat module | Claude native — no extra skills |
| Claude.ai co-work module | Claude native — no extra skills |
| Claude Code module | All project skills + AIOX agents |
| Anti-gravity module | `plugin-dev` + `hookify` + `.claude/` config |
| 8 Neural Agents delivery | `agent-workflows` + AIOX + `spec-writing` |
| Community/Skool | n8n-mcp (onboarding automation) + HERMES |
| Raw material capture | `product-radar` rule → `obsidian-cli` |

### CREATOR$ (Mid — ~R$2.997)
| Need | Tools/Skills |
|------|-------------|
| Content system design | FREYJA + `ui-ux-pro-max` + `obsidian-markdown` |
| Carousel generation | `ads-generate`, `ads-photoshoot` |
| Copy framework | FREYJA + `seo-content` |
| Brand DNA | `ads-dna` |
| Instagram automation | HERMES + n8n-mcp |

### $QUAD (Mid — ~R$2.997–3.997)
| Need | Tools/Skills |
|------|-------------|
| Squad architecture doc | `architecture-design` + `spec-writing` |
| Agent persona design | `spec-writing` + `agent-workflows` |
| Agent SDK implementation | `agent-sdk-dev` plugin |
| AIOX framework | All AIOX agents + `.aiox-core/` |
| Story/epic management | `story-management` + GSD commands |

### AGENT$ (Mid — ~R$1.997–2.997)
| Need | Tools/Skills |
|------|-------------|
| Neural agent design | `spec-writing` + `agent-workflows` |
| System message engineering | `agent-sdk-dev` plugin |
| Monetization structure | ARES + `ads-plan` |

### SITE$ (Mid-Low — ~R$1.997)
| Need | Tools/Skills |
|------|-------------|
| UI/UX design | `ui-ux-pro-max`, `frontend-design` plugin |
| Figma → code | `claude.ai Figma` |
| SEO on-page | `seo-page`, `seo-schema` |
| Deploy | `claude.ai Netlify` via @devops |
| Landing page analysis | `ads-landing` |

### POSICIONAMENTO$ (Mid — ~R$1.997)
| Need | Tools/Skills |
|------|-------------|
| Market research | ALEX + `defuddle` + WebSearch |
| Competitor analysis | `ads-competitor`, `seo-competitor-pages` |
| Brand DNA extraction | `ads-dna` |
| SEO content strategy | `seo-content`, `seo-plan` |

### ORÇAMENTO$ (Low — ~R$97–297)
| Need | Tools/Skills |
|------|-------------|
| Budget/proposal generation | Claude native + `spec-writing` |
| Template system | `obsidian-markdown` + templates |

---

## 3. Quick Reference — By Workflow

### Content Pipeline (FREYJA → MAYA → Editor Workers → Instagram)
```
Research       → ALEX: defuddle + web-search
Copy/hooks     → FREYJA: Claude native (*post-draft, *hook-generator)
AV Brief       → FREYJA: *brief-maya → structured brief
Image/Video    → MAYA: infsh app run (flux-image / google-veo / elevenlabs-tts)
AV Review      → FREYJA: *av-review → APPROVE or REJECT with feedback
[if rejected]  → MAYA: regenerate with FREYJA feedback
Format/Export  → Editor Workers: background-removal / image-upscaling (auto)
Save to vault  → ORION: obsidian-cli + obsidian-markdown
Schedule post  → HERMES: n8n-mcp
Publish        → HERMES: Meta Graph API via n8n
Analyze        → HELIOS: seo-content + ads-meta
```

### Product Development Pipeline (SDC — Story Driven)
```
Epic/Story     → @sm: story-management + /gsd:plan-phase
Spec           → @pm: spec-writing + /spec-writing
Architecture   → @architect: architecture-design
Implementation → @dev: frontend-design + agent-sdk-dev
Review         → @qa: code-review plugin + pr-review-toolkit
Deploy         → @devops: commit-commands + claude.ai Netlify
```

### SEO Pipeline (HELIOS)
```
Audit          → seo-audit (full) or seo-page (single)
Technical      → seo-technical
Content        → seo-content
Schema         → seo-schema
AI Search      → seo-geo
Sitemap        → seo-sitemap
Report         → ALEX: obsidian-markdown → vault
```

### Ads Campaign Pipeline (ARES)
```
Brand DNA      → ads-dna (from URL)
Plan           → ads-plan
Creative brief → ads-create
Generate image → ads-generate
Platform audit → ads-meta / ads-google / ads-tiktok
Landing page   → ads-landing
Budget         → ads-budget
```

### Knowledge Capture Pipeline (Product Radar)
```
Trigger        → product-radar rule (automatic, all agents)
Capture        → obsidian-cli → product-course-raw-material.md
Notebook       → notebooklm-mcp (synthesize insights)
Structure      → spec-writing (turn raw → structured module)
```

---

## 4. Full Inventory

### Skills (Global — 87+)

#### Ads Skills (17)
| Skill | Category | Primary Agent |
|-------|----------|--------------|
| ads | Ads orchestrator | ARES |
| ads-apple | Apple Search Ads | ARES |
| ads-audit | Multi-platform audit | ARES |
| ads-budget | Budget strategy | ARES |
| ads-competitor | Competitor intelligence | ARES / ALEX |
| ads-create | Campaign copy brief | ARES / FREYJA |
| ads-creative | Creative quality | MAYA / ARES |
| ads-dna | Brand DNA extractor | FREYJA / ARES |
| ads-generate | AI image generation | MAYA |
| ads-google | Google Ads analysis | ARES |
| ads-landing | Landing page assessment | ARES / @dev |
| ads-linkedin | LinkedIn Ads analysis | ARES |
| ads-meta | Meta/Instagram Ads | ARES / FREYJA |
| ads-microsoft | Microsoft/Bing Ads | ARES |
| ads-photoshoot | Product photography AI | MAYA |
| ads-plan | Strategic ad planning | ARES |
| ads-tiktok | TikTok Ads analysis | ARES |
| ads-youtube | YouTube Ads analysis | ARES / MAYA |

#### SEO Skills (13)
| Skill | Category | Primary Agent |
|-------|----------|--------------|
| seo | SEO orchestrator | HELIOS |
| seo-audit | Full site audit | HELIOS |
| seo-competitor-pages | Competitor pages | HELIOS / ALEX |
| seo-content | Content + E-E-A-T | HELIOS / FREYJA |
| seo-geo | AI Overviews/GEO | HELIOS |
| seo-hreflang | i18n SEO | HELIOS |
| seo-images | Image SEO | HELIOS |
| seo-page | Single page analysis | HELIOS |
| seo-plan | SEO strategy | HELIOS |
| seo-programmatic | Programmatic SEO | HELIOS |
| seo-schema | Schema markup | HELIOS |
| seo-sitemap | Sitemap | HELIOS |
| seo-technical | Technical SEO | HELIOS |

#### inference.sh — MAYA Image (9)
| Skill | Category | Primary Agent |
|-------|----------|--------------|
| ai-image-generation | Image generation | MAYA |
| flux-image | Premium image (Flux) | MAYA |
| p-image | Fast image | MAYA |
| nano-banana | Gemini image | MAYA |
| nano-banana-2 | Gemini image fast | MAYA |
| qwen-image-2 | Qwen image | MAYA |
| qwen-image-2-pro | Qwen image pro | MAYA |
| background-removal | Image processing | MAYA / Worker |
| image-upscaling | Image enhancement | MAYA / Worker |

#### inference.sh — MAYA Video (9)
| Skill | Category | Primary Agent |
|-------|----------|--------------|
| ai-video-generation | General video | MAYA |
| google-veo | Premium video (Google) | MAYA |
| p-video | Fast video | MAYA |
| ai-marketing-videos | Marketing video | MAYA |
| ai-avatar-video | AI avatar video | MAYA |
| talking-head-production | Talking-head video | MAYA |
| image-to-video | Still → video | MAYA |
| remotion-render | React video render | @dev / Worker |
| storyboard-creation | Visual storyboard | MAYA / FREYJA |

#### inference.sh — MAYA Audio/Voice (11)
| Skill | Category | Primary Agent |
|-------|----------|--------------|
| elevenlabs-tts | TTS primary | MAYA |
| elevenlabs-dialogue | Multi-speaker TTS | MAYA |
| elevenlabs-dubbing | Audio dubbing | MAYA |
| elevenlabs-voice-changer | Voice transformation | MAYA |
| elevenlabs-voice-isolator | Voice isolation | MAYA / Worker |
| elevenlabs-stt | Speech-to-text | MAYA / Worker |
| elevenlabs-music | Music generation | MAYA |
| elevenlabs-sound-effects | Sound effects | MAYA |
| ai-voice-cloning | Voice cloning | MAYA |
| ai-music-generation | Music (alt) | MAYA |
| dialogue-audio | Multi-char audio | MAYA |
| speech-to-text | General STT | MAYA / ALEX / Worker |

#### inference.sh — Content/Marketing (10)
| Skill | Category | Primary Agent |
|-------|----------|--------------|
| ai-content-pipeline | Multi-step content | HERMES |
| ai-social-media-content | Social content | HERMES / FREYJA |
| ai-automation-workflows | AI workflow design | HERMES |
| content-repurposing | Content atomization | FREYJA |
| linkedin-content | LinkedIn posts | FREYJA |
| technical-blog-writing | Technical blog | FREYJA |
| newsletter-curation | Newsletter | FREYJA |
| press-release-writing | Press releases | FREYJA |
| twitter-automation | X/Twitter automation | HERMES |
| social-media-carousel | Carousel generation | FREYJA / MAYA |

#### inference.sh — Business/Strategy (6)
| Skill | Category | Primary Agent |
|-------|----------|--------------|
| competitor-teardown | Competitor analysis | ARES / ALEX |
| customer-persona | Persona research | ARES |
| pitch-deck-visuals | Pitch deck design | ARES / MAYA |
| product-hunt-launch | PH launch strategy | ARES |
| product-changelog | Changelog writing | ARES / @dev |
| data-visualization | Data viz | ALEX / @dev |

#### inference.sh — Dev/SDK (11)
| Skill | Category | Primary Agent |
|-------|----------|--------------|
| building-inferencesh-apps | Build infsh apps | @dev |
| javascript-sdk | infsh JS SDK | @dev |
| python-sdk | infsh Python SDK | @dev |
| python-executor | Python sandbox | @dev |
| agent-browser | Browser automation | @dev |
| agent-tools | 150+ AI app runner | @dev |
| agent-ui | Agent UI components | @dev |
| chat-ui | Chat UI components | @dev |
| tools-ui | Tool lifecycle UI | @dev |
| widgets-ui | Declarative UI widgets | @dev |
| agent-sdk-dev | Claude Agent SDK | @dev |

#### inference.sh — Design (7)
| Skill | Category | Primary Agent |
|-------|----------|--------------|
| ai-product-photography | Product photography | MAYA |
| book-cover-design | Book cover | MAYA / FREYJA |
| character-design-sheet | Character consistency | MAYA |
| email-design | Email marketing design | FREYJA / MAYA |
| logo-design-guide | Logo design | MAYA |
| og-image-design | OG/social sharing image | MAYA / @dev |
| youtube-thumbnail-design | YouTube thumbnail | MAYA |

#### inference.sh — Utilities (4)
| Skill | Category | Primary Agent |
|-------|----------|--------------|
| prompt-engineering | Prompt optimization | ORION |
| video-prompting-guide | Video prompt guide | MAYA |
| video-ad-specs | Video ad specs | ARES / MAYA |
| web-search | Web search + extract | ALEX / HELIOS |

#### Knowledge / Obsidian (5)
| Skill | Category | Primary Agent |
|-------|----------|--------------|
| defuddle | Clean web extraction | ALEX |
| json-canvas | Obsidian canvas | ORION / FREYJA |
| obsidian-bases | Obsidian bases | ORION |
| obsidian-cli | Vault CLI | ORION |
| obsidian-markdown | Obsidian markdown | ORION / all |

#### UI/Design (1)
| Skill | Category | Primary Agent |
|-------|----------|--------------|
| ui-ux-pro-max | UI/UX design intelligence | @dev / UMA |

### Skills (Project — 9)
| Skill | Primary Agent |
|-------|--------------|
| agent-workflows | ORION / @architect |
| architecture-design | @architect |
| code-review | @qa |
| devops-automation | @devops |
| spec-writing | @pm / @sm |
| story-management | @sm |
| testing-strategy | @qa |
| ui-ux-pro-max | @dev / UMA |
| video-to-website | @dev / FREYJA |

### Plugins (12 official + 1 custom)
| Plugin | Primary Use | Primary Agent |
|--------|------------|--------------|
| agent-sdk-dev | Build Claude Agent SDK apps | @dev |
| code-review | CodeRabbit PR review | @qa |
| commit-commands | Git commit/push/PR | @devops |
| feature-dev | Feature development workflow | @dev |
| frontend-design | Frontend UI components | @dev |
| hookify | Hook creation/management | @devops / ORION |
| plugin-dev | Plugin/skill/hook development | @dev |
| pr-review-toolkit | PR review suite | @qa |
| ralph-loop | Continuous improvement loop | @qa |
| security-guidance | Security best practices | @dev / @qa |
| ui-ux-pro-max-skill | Advanced UI/UX | @dev / UMA |
| explanatory-output-style | Educational output | All (mode) |
| learning-output-style | Learning mode output | All (mode) |

### MCPs (8 total)
| MCP | Primary Agent | Key Operations |
|-----|--------------|---------------|
| n8n-mcp | HERMES / ORION | Workflow design, node search, templates |
| notebooklm-mcp | ALEX / FREYJA | Podcast gen, knowledge synthesis |
| Neon | @data-engineer | PostgreSQL DB, branches, migrations |
| claude.ai Figma | @dev / UMA | Design → code, diagrams, Code Connect |
| claude.ai Gmail | HERMES / ORION | Email read/send/draft/search |
| claude.ai Google Calendar | ORION / HERMES | Events, availability, scheduling |
| claude.ai Netlify | @devops | Deploy, hosting, project management |
| claude.ai Supabase | @data-engineer | DB, auth, edge functions, RLS |

### Commands
| Command | Scope | Purpose |
|---------|-------|---------|
| /gsd:* | Global | Full GSD project management suite |
| /AIOX:agents:* | Project | Activate AIOX agents |
| /commit-commands:commit | Global plugin | Git commit |
| /commit-commands:commit-push-pr | Global plugin | Commit + push + PR |

---

## 5. Gaps & Status

All previous gaps are now resolved. No pending capability gaps.

| Previous Gap | Status | Resolution |
|-------------|--------|-----------|
| Video generation (Veo, Seedance) | ✅ Resolved | MAYA: `google-veo`, `ai-video-generation` |
| Voice/TTS for content | ✅ Resolved | MAYA: `elevenlabs-tts`, `elevenlabs-dialogue` |
| Voice cloning | ✅ Resolved | MAYA: `ai-voice-cloning` |
| Twitter/X automation | ✅ Resolved | HERMES: `twitter-automation` |
| Image upscaling (AI) | ✅ Resolved | MAYA: `image-upscaling` |
| RAG over SÍRIOS vault | ✅ Resolved | ALEX: `ai-rag-pipeline` |
| AV production agent | ✅ Resolved | MAYA agent created (2026-03-29) |
| FREYJA scope overloaded | ✅ Resolved | FREYJA = Narrative only, MAYA = AV production |

## 6. FREYJA↔MAYA Collaboration Protocol

```
FREYJA (Narrative Brief)
    ↓ *brief-maya
MAYA (Asset Generation)
    ↓ Production Report (asset URLs + params)
FREYJA (AV Review *av-review)
    ↓ APPROVED ✅ or REJECTED ❌ (with feedback → back to MAYA)
Editor Workers (background-removal, image-upscaling, format adaptation)
    ↓
HERMES (Publish via n8n + Meta Graph API)
```

**Authority rules:**
- FREYJA has EXCLUSIVE review authority over AV assets for @arthsystems_
- MAYA cannot publish directly — must route through FREYJA review
- MAYA can generate standalone assets for user requests outside @arthsystems_ pipeline

---

*Last updated: 2026-03-29 | Epic 5 — Agent Architecture Expansion*
*Source: `.claude/skills/`, `.claude/plugins/`, `~/.claude.json`, `.aiox-core/development/agents/`*
*Update this file when new capabilities are installed or agents are reassigned.*
