---
date: 2026-04-06
tags: [skills, stitch, google-stitch, ui-design, ux-design-expert, dev, stitch-design, stitch-loop, taste-design]
project: runa-systems-global
type: skill-documentation
tier: T3
status: installed
mcp-status: pending-setup
---

# Google Stitch — Skill Trio Documentation

> T3 onboarding doc — 3 skills forming a unified UI generation pipeline.
> Rule file: [[stitch-usage]] | Capability map: [[capability-map]]

---

## Overview

Google Stitch is a Google Labs AI tool that generates high-fidelity UI screens (HTML/CSS) from natural language prompts. The AIOX stack installs **3 complementary skills** that form a complete design pipeline.

**Access:** https://labs.google.com/stitch
**MCP requirement:** StitchMCP must be configured in `~/.claude.json` (see Setup below)

---

## The 3 Skills

### 1. `taste-design`
**Location:** `~/.claude/skills/taste-design/`
**Owner:** `@ux-design-expert` (Uma)
**MCP required:** Optional (can generate DESIGN.md without MCP)

Generates opinionated, anti-generic `DESIGN.md` files. The single source of truth for any Stitch project. Enforces premium UI standards through 4 configurable dials:

| Dial | Default | Range | Effect |
|------|---------|-------|--------|
| Creativity | 9 | 1–10 | 1=Swiss minimal → 10=editorial bold |
| Density | 5 | 1–10 | 1=airy whitespace → 10=cockpit dense |
| Variance | 8 | 1–10 | 1=symmetric grids → 10=asymmetric chaos |
| Motion Intent | 6 | 1–10 | 1=static → 10=cinematic orchestration |

**Output:** `.stitch/DESIGN.md`
**Enforces:**
- Inter font BANNED in premium contexts (use Geist, Satoshi, Cabinet Grotesk, Outfit)
- Purple/neon gradients BANNED
- Pure black (#000000) BANNED — use Zinc-950
- Centered hero with high variance BANNED — use split-screen or asymmetric

---

### 2. `stitch-design`
**Location:** `~/.agents/skills/stitch-design/` (symlinked at `~/.claude/skills/stitch-design`)
**Owner:** `@ux-design-expert` (Uma)
**MCP required:** YES — `StitchMCP`

Unified entry point for individual screen generation and editing. Routes to 3 workflows:

| User Intent | Workflow | Primary Tool |
|------------|----------|-------------|
| "Design a [page]..." | `text-to-design` | `generate_screen_from_text` |
| "Edit this [screen]..." | `edit-design` | `edit_screens` |
| "Create/Update DESIGN.md" | `generate-design-md` | `get_screen` + Write |

**Output:** `.stitch/designs/{page}.html` + screenshot `.stitch/designs/{page}.png`

**Prompt enhancement pipeline (runs before every Stitch call):**
1. Analyze existing DESIGN.md if present
2. Add atmosphere keywords (vibe, mood, density)
3. Add component-specific terminology from `references/prompt-keywords.md`
4. Inject DESIGN SYSTEM block from DESIGN.md
5. Call Stitch MCP with enhanced prompt

---

### 3. `stitch-loop`
**Location:** `~/.agents/skills/stitch-loop/` (symlinked at `~/.claude/skills/stitch-loop`)
**Owner:** `@dev` (Dex) — autonomous multi-page builder
**MCP required:** YES — `StitchMCP` + optionally Chrome DevTools MCP for visual verification

Autonomous iterative site builder using a **baton system**. Each iteration:
1. Reads current task from `.stitch/next-prompt.md`
2. Generates page via Stitch MCP
3. Integrates page into site structure
4. Writes next task to `.stitch/next-prompt.md` for the next agent

**Baton file format (`.stitch/next-prompt.md`):**
```yaml
---
page: <filename-without-extension>
---
A [vibe] [page-type] with [atmosphere keywords].

**DESIGN SYSTEM (REQUIRED):**
[copy Section 6 from DESIGN.md]

**Page Structure:**
1. [Section 1]
2. [Section 2]
...
```

---

## Pipeline — How They Work Together

```
STEP 1 — taste-design (Uma)
  Generates .stitch/DESIGN.md (DNA of the project)
  → No MCP required for this step

STEP 2 — stitch-design (Uma)
  Generates individual screens using DESIGN.md as context
  → Requires StitchMCP
  → Output: .stitch/designs/{page}.html + screenshot

STEP 3 (optional) — stitch-loop (Dex)
  Autonomous multi-page build via baton
  → Requires StitchMCP
  → Reads/writes .stitch/next-prompt.md between iterations

STEP 4 — @dev integration
  Converts .stitch/designs/ HTML/CSS → React/Tailwind components
  → Uses existing codebase component library where possible
  → ui-ux-pro-max skill for component integration
```

---

## Decision Tree

```
User asks for UI work
  ├── "Design / mockup / show me"
  │     ├── First time on project → taste-design → stitch-design
  │     └── Multi-page site → stitch-loop
  └── "Code / implement / build"
        └── ui-ux-pro-max + @dev (no Stitch needed)
```

---

## File Structure Created

```
.stitch/
├── DESIGN.md        ← Source of truth (taste-design output)
├── SITE.md          ← Site vision + roadmap (for stitch-loop)
├── next-prompt.md   ← Baton file (stitch-loop iteration tasks)
└── designs/
    ├── home.html    ← Generated screens
    ├── home.png     ← Screenshots
    └── ...
```

---

## StitchMCP Setup (Required for stitch-design + stitch-loop)

> ⚠️ **Currently: NOT configured.** Listed in onboarding debt register.

**One-time setup:**
1. Go to https://labs.google.com/stitch
2. Create or access a project
3. Follow MCP setup instructions to get server config
4. Add to `~/.claude.json` under `mcpServers`:
   ```json
   "StitchMCP": {
     "command": "...",
     "args": [...]
   }
   ```
5. Restart Claude Code

**Until MCP is configured:** Only `taste-design` works (generates DESIGN.md without MCP).

---

## Stitch MCP Tool Reference

Key tools exposed by StitchMCP:

| Tool | Purpose |
|------|---------|
| `list_projects` | List all Stitch projects |
| `get_project` | Get project details |
| `create_project` | Create new project |
| `generate_screen_from_text` | Text-to-UI generation |
| `edit_screens` | Edit existing screen |
| `get_screen` | Retrieve screen HTML |

Full schema: `~/.agents/skills/stitch-design/references/tool-schemas.md`

---

## Anti-Patterns

❌ **Using stitch-design without DESIGN.md** — generates generic, inconsistent screens.
❌ **Using stitch-loop without SITE.md** — loop has no roadmap, will stall.
❌ **Skipping taste-design** on new projects — leads to Inter + purple gradient output.
❌ **Calling @dev to "design" screens** — Uma owns design, Dex owns implementation.
❌ **Generating code directly** when design approval is needed — use Stitch first.
❌ **Using stitch-design for icons/logos with text** — hallucination risk, use MAYA instead.

---

## Product Application

| Product | Stitch Role |
|---------|------------|
| **SITE$** | Primary: design mockup phase before coding |
| **$QUAD** | Dashboard and agent interface mockups |
| **CREATOR$** | Content creation UI screens |
| **RUNA SYSTEMS** | Teaching clients Stitch as part of Dev Neural module |

---

## Related Skills & Rules

- `ui-ux-pro-max` — component implementation (after Stitch design phase)
- `react-components` — convert Stitch HTML to React
- `frontend-design` — full frontend design system without Stitch
- Rule: [[stitch-usage]] — agent assignment + workflow + anti-patterns
- Capability map: [[capability-map]] → `@ux-design-expert` and `@dev` rows

---

## Onboarding Status

| Item | Status |
|------|--------|
| `taste-design` installed | ✅ `~/.claude/skills/taste-design/` |
| `stitch-design` installed | ✅ `~/.agents/skills/stitch-design/` + symlink |
| `stitch-loop` installed | ✅ `~/.agents/skills/stitch-loop/` + symlink |
| `stitch-usage.md` rule file | ✅ `.claude/rules/stitch-usage.md` |
| `CLAUDE.md` entry | ✅ Rules System table |
| `capability-map.md` entry | ✅ `@ux-design-expert` + `@dev` rows |
| Obsidian documentation | ✅ This file |
| StitchMCP configured | ⚠️ Pending — setup at labs.google.com/stitch |
