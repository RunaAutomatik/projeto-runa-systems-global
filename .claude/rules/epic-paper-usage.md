---
paths: **/*
---

# epic-paper — Usage Rules

## What it is

Claude Code skill that uses the Paper MCP to create visual designs inside Paper Desktop.
Writes real HTML/CSS into Paper artboards and exports finished assets — no separate design tool needed.
The Paper MCP is a local HTTP endpoint exposed by the Paper Desktop app.

Skill path: `~/.claude/skills/epic-paper/SKILL.md`
Paper Desktop: https://paper.design

## Status

```
✅  Skill installed — ~/.claude/skills/epic-paper/SKILL.md
⚠️  Paper Desktop required — must be open with a file loaded before invoking
⚠️  Paper MCP registration — run install command below (one-time, external terminal)
```

**MCP install command (run once in external terminal after opening Paper Desktop):**
```bash
claude mcp add paper --transport http http://127.0.0.1:29979/mcp --scope user
```

**Runtime requirement:** Paper Desktop app must be open with a file loaded.
The MCP endpoint only exists while the app is running.

---

## Agent Assignment

| Agent | Role |
|-------|------|
| **MAYA** | Primary owner — executes all Paper MCP tools, renders HTML/CSS, screenshots, exports |
| **FREYJA** | Brief writer — defines content, copy, brand tokens; does NOT execute Paper MCP directly |
| @dev | Pipeline integration only — never executes visual design |

Other agents: route through MAYA for any Paper design request.

---

## When to Use

**USE epic-paper when:**
- Creating Instagram carousels (1080×1080 per slide)
- Creating single-image posts (1080×1080)
- Creating mockups or landing pages (1440×900)
- Creating pitch decks (1920×1080)
- Any designed visual asset requiring HTML/CSS rendering inside Paper artboards

**Do NOT use epic-paper when:**
- Paper Desktop is not open — MCP will fail silently
- Editing real recorded footage → video-use
- Generating AI cinematic video → Higgsfield MCP (seedance_2_0)
- Simple AI image without design structure → nano-banana-2 (infsh)
- Programmatic React video animation → Remotion

---

## FREYJA → MAYA Brief Format

**Language rule:** All inter-agent communication MUST be in English (language-policy.md).

Brief format varies by output type. The Paper MCP Orchestration block is consistent across all formats.

### Output Type Table

| Output Type | Canvas | Brief Structure |
|-------------|--------|----------------|
| **Carousel** | 1080×1080 per slide | Brand tokens → slide-by-slide content (hook/body/CTA) → Paper tool orchestration |
| **Post (single)** | 1080×1080 | Brand tokens → single artboard content → text hierarchy → Paper tool orchestration |
| **Mockup / Landing** | 1440×900 (or specified) | Color system → typography → component breakdown → layout → Paper tool orchestration |
| **Pitch Deck** | 1920×1080 | Narrative arc → slide sequence → visual identity → Paper tool orchestration |

### Paper MCP Orchestration Block (mandatory in all briefs)

```
Paper MCP Orchestration:
1. create_artboard(name, width, height)
2. write_html(artboard_id, html_content) — full HTML/CSS with brand tokens as :root vars
3. get_screenshot(artboard_id) — verify visual before next artboard
4. update_styles(artboard_id, css) — if screenshot reveals adjustment needed
5. Repeat for each artboard/slide
```

### Brief Template — Carousel

```
[FREYJA → MAYA]
Task: Instagram carousel — [topic]
Canvas: 1080×1080px per slide

Brand tokens:
  --bg: #1A1209
  --surface: #231810
  --accent: #D4A853
  --text: #F5ECD7
  --muted: rgba(245,236,215,0.6)

Typography:
  headings: Lora (serif, weight 600)
  body: Geist (sans, weight 400/500)

Slides:
  slide_1 — HOOK: "[hook text]" (large, centered, accent color)
  slide_2 — [content block, 3 points max]
  ...
  slide_N — CTA: "[keyword]" + entregável reference

Paper MCP Orchestration:
  create_artboard("slide_1", 1080, 1080)
  write_html(id, full_html_css)
  get_screenshot(id) — verify before slide_2
  [repeat for each slide]
```

### Brief Template — Mockup / Landing Page

```
[FREYJA → MAYA]
Task: [page type] mockup for [product]
Canvas: 1440×900px

Brand tokens:
  --bg: #1A1209
  --surface: #231810
  --accent: #D4A853
  --text: #F5ECD7
  --muted: rgba(245,236,215,0.6)

Typography:
  headings: Lora (serif, weight 600)
  body/UI: Geist (sans, weight 400/500)

Layout: [two-column 60/40 | single-column | grid]
  left — [content description]
  right — [component description]

Components (all rendered via write_html):
  1. [component name] — [description]
  2. [component name] — [description]

Paper MCP Orchestration:
  create_artboard("page-name", 1440, 900)
  write_html(id, full_html_css)
  get_screenshot(id) — verify layout
  update_styles(id, css) if adjustments needed
```

### Brief Template — Pitch Deck

```
[FREYJA → MAYA]
Task: Pitch deck — [title]
Canvas: 1920×1080px per slide

Brand tokens: [as above]
Typography: [as above]

Narrative arc:
  slide_1 — [hook/problem]
  slide_2 — [market / pain]
  ...
  slide_N — [CTA / close]

Paper MCP Orchestration:
  [one create_artboard + write_html + get_screenshot per slide]
```

---

## Available Paper Shaders (applied in Paper Desktop UI)

GPU shaders available after `write_html` renders the artboard:
- mesh gradient
- grain gradient
- liquid metal
- halftone

Shaders are applied in the Paper Desktop UI by the user — they are NOT available via `write_html`.

---

## Anti-Patterns

❌ **Invoking epic-paper without Paper Desktop open** — MCP endpoint doesn't exist; all calls fail silently

❌ **FREYJA executing Paper MCP tools directly** — FREYJA writes briefs only; MAYA executes

❌ **Skipping `get_screenshot` after `write_html`** — visual verification before next slide is mandatory per SKILL.md

❌ **Applying shaders via write_html** — shaders are GPU-only, applied in Paper Desktop UI after HTML render

❌ **Using epic-paper for AI-generated cinematic video** — use Higgsfield MCP (seedance_2_0)

❌ **Using epic-paper when Paper MCP is not registered** — run `claude mcp add paper` first

❌ **Running without FREYJA brief for @arthsystems_ content** — narrative direction required before design execution

❌ **Writing brief in Portuguese** — all inter-agent communication in English (language-policy.md)

---

## Product Application

| Product | epic-paper Role |
|---------|----------------|
| **RUNA SYSTEMS** | Instagram carousel creation for @arthsystems_ pipeline (replaces carousel-worker HTML→PNG); mockups for landing pages and sales offers; pitch deck visuals for client presentations; teaching clients the Paper MCP design workflow |
