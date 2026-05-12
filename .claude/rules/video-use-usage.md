---
paths: **/*
---

# video-use — Usage Rules

## What it is

Claude Code skill that edits raw recorded footage using AI + FFmpeg. Solves the
ecosystem gap: the stack had everything for AI-generated video (Higgsfield, muapi, HeyGen)
but nothing for editing real footage Arthur or clients record. video-use operates entirely
inside Claude Code — no separate UI, no subscription tool.

Repo: https://github.com/browser-use/video-use
SÍRIOS doc: `SÍRIOS/RUNA SYSTEMS/Skills/Skills video-use + Remotion.md`

## Status

```
⚠️  Not yet installed — audit approved 2026-05-12
✅  ELEVENLABS_API_KEY configured in .env
✅  ffmpeg v8.0.1 full build (CUDA, NVENC, d3d12va)
✅  Python 3.14 available
⚠️  uv not installed — use pip install -e .
```

**Installation (when ready):**
```bash
git clone https://github.com/browser-use/video-use ~/Developer/video-use
ln -sfn ~/Developer/video-use ~/.claude/skills/video-use
cd ~/Developer/video-use
pip install -e .
# Copy ELEVENLABS_API_KEY from project .env to ~/Developer/video-use/.env
```

---

## Agent Assignment

| Agent | Role |
|-------|------|
| **MAYA** | Primary owner — executes video-use skill, returns final.mp4 |
| Arthur (direct) | Can run directly: `cd /footage && claude` |
| FREYJA | Provides narrative brief (tone, style, rhythm) → MAYA executes |
| @dev | Pipeline integration — content-worker reads outputs from /edit/ |

---

## When to Use

**USE video-use when:**
- Arthur records a talking head, class, or VSL and needs it edited
- Footage needs fillers/silences removed
- Color grade or subtitles need to be applied automatically
- Multiple takes exist and the best segments need to be selected
- A recording-to-final pipeline is needed without manual editing in Premiere/CapCut

**Do NOT use video-use when:**
- Creating AI-generated video from scratch → Higgsfield MCP (Seedance)
- Animating an avatar/lip sync → muapi (`infinitetalk-image-to-video`)
- Generating a talking head from script → HeyGen REST API
- Creating programmatic animated overlays → Remotion
- Source is AI-generated, not real footage (video-use edits footage, not AI output)

---

## Decision Tree

```
Have real recorded footage?
  └── YES → video-use
        ├── talking head / class / VSL → standard pipeline
        └── multi-take recording → multi-take selection mode

No footage — need to CREATE video:
  ├── AI cinematic (scene, character, dark aesthetic) → Higgsfield MCP (MAYA)
  ├── Talking head / avatar (script → video) → HeyGen REST API (MAYA)
  ├── Lip sync (face + audio → animation) → muapi infinitetalk (MAYA)
  ├── Animated data overlay / diagram → Remotion (@dev / MAYA)
  ├── Simple animation (logo, text) → PIL (MAYA)
  └── VIP product ad 1080p (avatar + refs) → muapi Marketing VIP (MAYA)
```

---

## Standard Workflow

```
Arthur records raw footage
  → cd /path/to/footage && claude
  → video-use activates as Claude Code skill
      1. ElevenLabs Scribe transcribes (word-level timestamps, auto-cached)
      2. Proposes strategy — WAITS FOR USER APPROVAL before cutting
      3. Executes: filler removal → silence removal → color grade → subtitles
      4. Self-evaluates output (3 automatic passes)
  → final.mp4 in /edit/
  → MAYA distributes (Higgsfield/muapi if overlay needed)
  → HERMES publishes via n8n + Meta Graph API
```

---

## Hard Production Rules

1. **Subtitles always last** — before overlays causes silent failure
2. **Word-boundary cuts only** — never split a word mid-pronunciation
3. **30ms padding per cut** — absorbs Scribe timestamp drift
4. **30ms audio fades per segment** — eliminates audible pops
5. **Strategy confirmed before execution** — agent proposes, Arthur approves
6. **Transcription cache** — never re-transcribes same source file
7. **Output in /edit/** — never writes inside the project directory
8. **ELEVENLABS_API_KEY required** — transcription fails silently without it

---

## Capabilities

| Capability | Mechanism | When to use |
|------------|-----------|-------------|
| Filler removal | Word-level Scribe timestamps | Every talking head / class |
| Silence removal | Waveform gap analysis | Interviews, multi-take, long footage |
| Color grade | FFmpeg ASC CDL filter chains | Consistent dark/cinematic aesthetic |
| Subtitle burn | SRT synced, word-boundary, 2 words uppercase | Reels, accessibility |
| Multi-take selection | Sub-agent selects best segment per concept | Multi-take recordings |
| Animation overlays | Backends: HyperFrames, Remotion, Manim, PIL | Course diagrams, data overlays |
| Session memory | `project.md` persists strategy between sessions | Long multi-session projects |

---

## Cost

| Item | Cost |
|------|------|
| ElevenLabs Scribe | ~$0.40/hour of audio (~$0.06 for 10 min) |
| Claude tokens | Minimal — reads transcript text, not frames |
| FFmpeg | Free, local |

Vs. Descript ($24/month) or manual editing: negligible cost, fully integrated into Claude Code.

---

## Anti-Patterns

❌ **Installing without having real recorded footage** — only install when there are active footage editing use cases. If the workflow is 100% AI-generative, there is no input for video-use.

❌ **Using for AI-generated video** — video-use edits real footage. For AI video: Higgsfield MCP or muapi.

❌ **Skipping strategy confirmation** — the agent always proposes before cutting. Never proceed without reading the strategy.

❌ **Using for lip sync or avatar animation** — that is muapi (`infinitetalk-image-to-video`). video-use edits footage, does not animate avatars.

❌ **Running without ELEVENLABS_API_KEY in the skill's local .env** — transcription fails silently. Always verify the key exists at `~/Developer/video-use/.env` after installation.

❌ **Confusing video-use with Remotion** — video-use edits existing footage via FFmpeg; Remotion creates video from zero via React components. They are complementary, not competing: Remotion is one of video-use's animation overlay backends.

---

## Product Application

| Product | video-use Role |
|---------|---------------|
| **CREATOR$** | Primary Reels pipeline — edit Arthur talking head footage |
| **RUNA SYSTEMS** | Edit recorded class modules for Skool upload |
| **$QUAD** | Edit recorded squad demonstrations |
| **AGENT$** | Edit footage of agents being configured live |
| **Lives de construção** | Highlight cuts from 2h raw livestream → 45min deliverable (R$97 product) |
