---
date: 2026-05-24
tags: [skills, dev, claude-code, stitch, platform, feature-dev, agent-sdk]
project: runa-systems-global
type: skill-doc
---

# Skills Dev Platform

> Claude Code native skills and the Stitch design system — tools for @dev (Dex) and any agent building UI, automations, or new capabilities in this ecosystem.
> Global skills path: `~/.claude/skills/`

---

## Claude Code Native Skills

| Skill | Trigger | Purpose |
|-------|---------|---------|
| `update-config` | `/update-config` | Modify Claude Code settings interactively |
| `keybindings-help` | `/keybindings-help` | Show all keyboard shortcuts |
| `simplify` | `/simplify` | Refactor code for conciseness |
| `loop` | `/loop` | Execute prompt in repeating loop |
| `schedule` | `/schedule` | Schedule recurring Claude Code tasks |
| `claude-api` | `/claude-api` | Direct Anthropic API calls |
| `defuddle` | `/defuddle` | Extract clean content from URLs (no JS execution) |
| `knowledge-extraction` | `/knowledge-extraction` | Structure raw content into AKASHA knowledge base |
| `para-memory-files` | `/para-memory-files` | Manage PARA-structured memory files |
| `agent-sdk-dev` | `/agent-sdk-dev:new-sdk-app` | Setup Claude Agent SDK application (TypeScript or Python) |
| `feature-dev` | `/feature-dev:feature-dev` | Codebase-first guided feature development |

---

## Web Research Priority Chain

```
defuddle (single page, no JS)  — fastest, token-efficient
  → web-search (general search, multiple results)
  → Playwright (interactive JS-heavy pages only)
```

Never use Playwright when defuddle or web-search suffice.

---

## Stitch Skills — Design System Generation

Stitch is a 3-skill design workflow owned by `@ux-design-expert` (Uma). Produces DESIGN.md as the single source of truth for all UI implementation.

| Skill | Trigger | Role |
|-------|---------|------|
| `taste-design` | `/taste-design` | Generate DESIGN.md from brand brief |
| `stitch-design` | `/stitch-design` | Generate React components from DESIGN.md |
| `stitch-loop` | `/stitch-loop` | Iterative refinement loop (baton system) |
| `design-md` | `/design-md` | Update or query DESIGN.md |
| `enhance-prompt` | `/enhance-prompt` | Improve AI generation prompts |
| `react-components` | `/react-components` | React component library scaffold |
| `remotion` | `/remotion` | Remotion programmatic video composition |
| `shadcn-ui` | `/shadcn-ui` | shadcn/ui component installation |

### Stitch Pipeline

```
/taste-design (DESIGN.md)
  → @dev: /stitch-design (components from DESIGN.md)
  → /stitch-loop (refinement until approved)
  → /impeccable audit (anti-pattern check — see Skills Design UI.md)
  → Ship
```

### StitchMCP (pending)

```
Status: ⚠️ Not configured — requires setup at labs.google.com/stitch
Purpose: MCP adapter to connect Stitch skills directly to React codebase
```

---

## Plugin-Dev Skills — Creating New Capabilities

| Command | Purpose |
|---------|---------|
| `/plugin-dev:create-plugin` | End-to-end guided plugin creation workflow |
| `/plugin-dev:skill-development` | Create new SKILL.md with description, tools, examples, triggers |
| `/plugin-dev:hook-development` | Create PreToolUse/PostToolUse/Stop hooks |
| `/plugin-dev:agent-development` | Create specialized subagent with persona and workflow |
| `/agent-sdk-dev:new-sdk-app` | Full Claude Agent SDK application scaffold (TS or Python) |

---

## RUNA Systems Use Cases

| Skill | RUNA Application |
|-------|----------------|
| `defuddle` | ALEX research on competitive sites without Playwright overhead |
| `knowledge-extraction` | Ingest client documents into AKASHA before squad configuration |
| `taste-design` | Generate DESIGN.md for client Command Center portals |
| `stitch-design` | Build neural agent UI components for $QUAD product |
| `agent-sdk-dev` | Build AGENT$ product — each client's custom neural agent as SDK application |
| `remotion` | Animated overlays for CREATOR$ video pipeline (video-use animation backend) |
| `plugin-dev:skill-development` | Create `runa-carousel` skill encapsulating full carousel workflow |
| `hookify` | After agent deviation, lock behavior with PreToolUse hook |

---

## Related

- Skill: `Skills Design UI.md` — impeccable + taste-design quality pipeline, @ux-design-expert scope
- Skill: `stitch-skills.md` — deep Stitch baton system, file structure, StitchMCP tool reference
- Skill: `knowledge-extraction.md` — origin story + AIOX-specific additions
- Skill: `Skills DevOps QA.md` — git/commit workflow, code-review plugins
