# inference.sh Usage Rules

## Global Rules

**CLI:** `infsh` (global, no args required)
**Token:** `~/.infsh-token`
**Docs:** `.claude/rules/capability-map.md` → inference.sh section

### Standard Execution Pattern
```bash
infsh app run <app-id> --input '{"prompt": "...", "param": "value"}'
```

### When to Use inference.sh
- Media generation: images, video, voice, music — always via infsh
- Asset post-processing: background removal, upscaling
- Transcription: speech-to-text
- AI app execution: any capability listed in this file

### When NOT to Use inference.sh
- Text generation (copy, hooks, captions) → Claude native is faster and cheaper
- Code generation → Claude native
- Database operations → Supabase/Neon MCPs
- Web search for research → `web-search` skill or `defuddle` first
- File operations → native Claude Code tools (Read/Write/Edit)

### Agent Assignment (summary)
| Agent | inference.sh Scope |
|-------|-------------------|
| MAYA | All AV production (image, video, voice, music) |
| FREYJA | Narrative content skills only (repurposing, blog, newsletter) |
| ARES | Business intelligence (competitor-teardown, customer-persona) |
| ALEX | Research (ai-rag-pipeline, web-search, speech-to-text) |
| HERMES | Automation workflows (ai-automation-workflows, ai-content-pipeline) |
| @dev | Dev SDKs and UI components |

---

## CRITICAL SKILLS — Full Format (B)

Skills marked critical = high frequency, complex usage, integration with FREYJA↔MAYA pipeline.

---

### `ai-image-generation` / `flux-image`
**Owner:** MAYA
**When to use:** Generate any image asset for @arthsystems_ content, product shots, marketing creatives.
**When NOT to use:** Logos with text (hallucination risk), charts/data (use data-visualization).
**Model selection:**
- Final assets → `falai/flux-dev` (premium quality)
- Drafts/iteration → `pruna/p-image` (fast + cheap)
- Multimodal context → `google/gemini-3-pro-image-preview`
**App IDs:** `falai/flux-dev`, `falai/flux-dev-lora`, `pruna/p-image`, `bytedance/seedream-4-5`
**Example:**
```bash
infsh app run falai/flux-dev --input '{"prompt": "dark architect standing in front of digital blueprint, cinematic, architectural lighting", "width": 1080, "height": 1080}'
```
**Workflow integration:** FREYJA writes `*brief-maya` → MAYA executes → FREYJA `*av-review` → approve/reject.
**Style constraint:** Always apply Arthur's brand styles: dark, architectural, precise. No warm/soft aesthetics.

---

### `flux-image` (LoRA variant)
**Owner:** MAYA
**When to use:** When style consistency is critical across multiple assets (e.g., campaign series).
**App ID:** `falai/flux-dev-lora`
**Note:** Requires LoRA ID in input. Use for trained brand styles only.

---

### `elevenlabs-tts`
**Owner:** MAYA
**When to use:** Any narration, voiceover, audio content for Reels, marketing videos, podcasts.
**When NOT to use:** Don't use for transcription (use `elevenlabs-stt`). Don't use for music (use `elevenlabs-music`).
**App ID:** `elevenlabs/text-to-speech`
**Key params:** `voice_id`, `model_id`, `stability`, `similarity_boost`, `style`
**Example:**
```bash
infsh app run elevenlabs/text-to-speech --input '{"text": "Você não está faltando tempo. Está faltando arquitetura.", "voice_id": "...", "model_id": "eleven_multilingual_v2"}'
```
**Workflow integration:** MAYA executes on voice brief from FREYJA. Returns audio URL for video assembly.
**Language:** Use `eleven_multilingual_v2` for Portuguese.

---

### `google-veo` / `ai-video-generation`
**Owner:** MAYA
**When to use:** Generate Reels (9:16), marketing videos, animated content from text prompts.
**When NOT to use:** Don't use for simple slideshows (use FFmpeg compositor in content-worker). Don't use for avatar/talking-head (use `talking-head-production`).
**Model selection:**
- Quality Reels → `google/veo-3-1-fast`
- Fast iteration → `pruna/p-video`
- General → `bytedance/seedance-1`
**App IDs:** `google/veo-3-1-fast`, `pruna/p-video`, `bytedance/seedance-1`
**Example:**
```bash
infsh app run google/veo-3-1-fast --input '{"prompt": "architect building digital infrastructure, dark cinematic, 9:16 vertical", "duration": 6, "aspect_ratio": "9:16"}'
```
**Workflow integration:** FREYJA brief → MAYA generates → FREYJA reviews → HERMES publishes.
**Style constraint:** 9:16 for Reels, architectural/dark aesthetic, no warm filters.

---

### `background-removal`
**Owner:** MAYA / Worker pipeline
**When to use:** Post-processing any image that needs transparent/clean background. Product shots, portraits, assets for compositing.
**When NOT to use:** Complex scenes (quality degrades). Landscape/nature images where background is part of the composition.
**App ID:** `falai/birefnet`
**Example:**
```bash
infsh app run falai/birefnet --input '{"image_url": "https://..."}'
```
**Workflow integration:** Auto-runs as Worker after `generate-image` when `process: background_removal: true` is set in brief.
**Can run without agent:** Yes — this is a pipeline Worker step, no MAYA reasoning required.

---

### `talking-head-production` / `ai-avatar-video`
**Owner:** MAYA
**When to use:** Create Arthur's talking-head video with lip sync for educational or promotional content. AI avatar for scalable video content.
**When NOT to use:** Don't use for abstract/cinematic video (use `google-veo`). Don't use for product demos without avatar.
**Skills:** `talking-head-production`, `ai-avatar-video`
**Example:**
```bash
infsh app run omni-human/talking-head --input '{"script": "...", "avatar_id": "...", "background": "dark-architect"}'
```
**Workflow integration:** FREYJA writes script + brief → MAYA generates → FREYJA reviews narrative accuracy.
**Output format:** MP4, typically 9:16 for Reels or 16:9 for YouTube/LinkedIn.

---

### `ai-rag-pipeline`
**Owner:** ALEX
**When to use:** Build or query a RAG system over SÍRIOS vault, client documents, or research corpus. Useful for ALEX when researching complex topics that require synthesis of internal knowledge.
**When NOT to use:** Simple lookups (use `obsidian-cli` search). Single-document queries (use Read tool).
**Skill:** `ai-rag-pipeline`
**Workflow integration:** ALEX creates pipeline → ingests vault docs → query with WebSearch for hybrid retrieval.

---

## STANDARD SKILLS — Quick Format (A)

### Image Generation

| Skill | When to use | Agent | App ID |
|-------|------------|-------|--------|
| `p-image` | Fast draft images, iteration | MAYA | `pruna/p-image` |
| `nano-banana` | Gemini-native generation, multimodal | MAYA | `google/gemini-3-pro-image-preview` |
| `nano-banana-2` | Fast Gemini image | MAYA | `google/gemini-3-flash-image` |
| `qwen-image-2` | Alibaba model, different aesthetic | MAYA | `qwen/qwen-vl-max` |
| `qwen-image-2-pro` | Higher quality Qwen | MAYA | `qwen/qwen-vl-plus` |
| `ai-product-photography` | Product shots with studio lighting | MAYA | via infsh |
| `image-upscaling` | Enhance resolution for final output | MAYA / Worker | `falai/topaz-image-upscaler` |
| `image-to-video` | Animate a still image | MAYA | `falai/image-to-video` |

### Video Production

| Skill | When to use | Agent | App ID |
|-------|------------|-------|--------|
| `p-video` | Fast video drafts | MAYA | `pruna/p-video` |
| `ai-marketing-videos` | Structured promo videos | MAYA | via infsh |
| `remotion-render` | Programmatic React/Remotion video | @dev / Worker | via infsh |
| `video-ad-specs` | Video ad format compliance check | ARES / MAYA | via infsh |
| `storyboard-creation` | Shot list + visual direction | MAYA / FREYJA | via infsh |
| `explainer-video-guide` | Explainer video production guide | MAYA | via infsh |

### Audio / Voice

| Skill | When to use | Agent | App ID |
|-------|------------|-------|--------|
| `elevenlabs-dialogue` | Multi-speaker podcast/dialogue | MAYA | `elevenlabs/dialogue` |
| `elevenlabs-dubbing` | Translate + dub audio/video | MAYA | `elevenlabs/dubbing` |
| `elevenlabs-voice-changer` | Transform voice style | MAYA | `elevenlabs/voice-changer` |
| `elevenlabs-voice-isolator` | Remove background noise | MAYA / Worker | `elevenlabs/voice-isolator` |
| `elevenlabs-stt` | Transcribe audio (ElevenLabs) | MAYA / Worker | `elevenlabs/scribe` |
| `speech-to-text` | General transcription | ALEX / Worker | via infsh |
| `ai-voice-cloning` | Custom voice from samples | MAYA | `elevenlabs/voice-design` |
| `dialogue-audio` | Multi-character audio scenes | MAYA | via infsh |
| `elevenlabs-sound-effects` | Sound FX from text description | MAYA | `elevenlabs/sound-effects` |
| `elevenlabs-music` | Background music generation | MAYA | `elevenlabs/music` |
| `ai-music-generation` | Music tracks (alternative) | MAYA | via infsh |

### Content / Marketing

| Skill | When to use | Agent | Command |
|-------|------------|-------|---------|
| `content-repurposing` | Atomize one piece → multiple formats | FREYJA | `/content-repurposing` |
| `linkedin-content` | LinkedIn post writing with hooks | FREYJA | `/linkedin-content` |
| `technical-blog-writing` | Technical blog posts with code examples | FREYJA | `/technical-blog-writing` |
| `newsletter-curation` | Newsletter content sourcing + editorial | FREYJA | `/newsletter-curation` |
| `press-release-writing` | AP-style press releases | FREYJA | `/press-release-writing` |
| `ai-content-pipeline` | Multi-step AI content creation | HERMES | `/ai-content-pipeline` |
| `ai-social-media-content` | Social media content for TikTok, IG, X | HERMES / FREYJA | `/ai-social-media-content` |
| `ai-automation-workflows` | Combined AI + automation workflows | HERMES | `/ai-automation-workflows` |
| `social-media-carousel` | Multi-slide carousel design | FREYJA / MAYA | `/social-media-carousel` |
| `twitter-automation` | X/Twitter posting + engagement | HERMES | `/twitter-automation` |

### Business / Strategy

| Skill | When to use | Agent | Command |
|-------|------------|-------|---------|
| `competitor-teardown` | Deep competitor analysis | ARES / ALEX | `/competitor-teardown` |
| `customer-persona` | Research-backed persona creation | ARES | `/customer-persona` |
| `pitch-deck-visuals` | Investor pitch deck structure + visuals | ARES / MAYA | `/pitch-deck-visuals` |
| `product-hunt-launch` | PH launch strategy + assets | ARES | `/product-hunt-launch` |
| `product-changelog` | Changelog/release notes | ARES / @dev | `/product-changelog` |
| `data-visualization` | Charts, graphs, data stories | ALEX / @dev | `/data-visualization` |

### Design (MAYA)

| Skill | When to use | Agent | Command |
|-------|------------|-------|---------|
| `book-cover-design` | Book cover with genre conventions | MAYA | `/book-cover-design` |
| `character-design-sheet` | Character consistency across images | MAYA | `/character-design-sheet` |
| `email-design` | Email marketing layout + design | FREYJA / MAYA | `/email-design` |
| `logo-design-guide` | Logo design principles + AI generation | MAYA | `/logo-design-guide` |
| `og-image-design` | Open Graph / social sharing images | MAYA / @dev | `/og-image-design` |
| `youtube-thumbnail-design` | YouTube thumbnail (1280×720) | MAYA | `/youtube-thumbnail-design` |

### Dev / SDK (@dev)

| Skill | When to use | Agent | Command |
|-------|------------|-------|---------|
| `building-inferencesh-apps` | Build + deploy apps on inference.sh | @dev | `/building-inferencesh-apps` |
| `javascript-sdk` | infsh JS/TS SDK usage | @dev | `/javascript-sdk` |
| `python-sdk` | infsh Python SDK usage | @dev | `/python-sdk` |
| `python-executor` | Execute Python in sandbox | @dev | `/python-executor` |
| `agent-browser` | Browser automation for AI agents | @dev | `/agent-browser` |
| `agent-tools` | Run 150+ AI apps via infsh CLI | @dev | `/agent-tools` |
| `agent-ui` | Agent UI components for React/Next | @dev | `/agent-ui` |
| `chat-ui` | Chat UI building blocks | @dev | `/chat-ui` |
| `tools-ui` | Tool lifecycle UI components | @dev | `/tools-ui` |
| `widgets-ui` | Declarative UI widgets from JSON | @dev | `/widgets-ui` |

### Utilities

| Skill | When to use | Agent | Command |
|-------|------------|-------|---------|
| `prompt-engineering` | Master prompt optimization for any model | ORION | `/prompt-engineering` |
| `video-prompting-guide` | Best practices for video prompts | MAYA | `/video-prompting-guide` |
| `web-search` | Web search + content extraction | ALEX / HELIOS | `/web-search` |
| `llm-models` | Access Claude, Gemini, GPT via infsh | Any | `/llm-models` |

---

## Anti-Patterns

❌ **Using inference.sh for text generation** — Claude native is faster, cheaper, context-aware.

❌ **Skipping FREYJA's `*brief-maya`** — MAYA without a narrative brief produces off-brand assets.

❌ **Publishing MAYA output without `*av-review`** — All @arthsystems_ assets require FREYJA review.

❌ **Using premium models for drafts** — Use `pruna/p-image` or `p-video` for iteration, reserve `flux-dev` / `veo-3-1-fast` for finals.

❌ **Running inference.sh for code/file operations** — Use Claude Code native tools (Read/Write/Edit/Bash).

❌ **Using `elevenlabs-tts` for music** — Use `elevenlabs-music` instead. Different endpoint, different quality.