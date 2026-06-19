---
date: 2026-05-23
tags: [skills, design, ui, ux, taste-design, impeccable, ui-ux-pro-max]
project: runa-systems-global
type: skill-doc
---

# Skills Design UI — Design System e Qualidade Visual

> Uma (@ux-design-expert) owns the design layer. Pipeline: taste-design generates DESIGN.md → @dev implements → impeccable audits → ship. Figma MCP is NOT part of this stack.

---

## taste-design — Design System Generation

**Skill:** `~/.claude/skills/taste-design/`
**Agente:** `@ux-design-expert` (Uma) — primary | `@dev` — consumes output
**Quando usar:** Before starting ANY UI implementation — generates the opinionated DESIGN.md that serves as single source of truth for @dev

**Status:** ACTIVE ✅ — StitchMCP PENDING ⚠️ (stitch-design and stitch-loop installed but MCP not yet configured at labs.google.com/stitch)

**4 configurable dials:**

| Dial | Options | Effect |
|------|---------|--------|
| Visual weight | minimal → expressive | Spacing density, element size |
| Color temperature | cool → warm | Palette direction |
| Motion character | static → kinetic | Animation presence |
| Surface texture | flat → dimensional | Shadow and depth approach |

**Output:** `.stitch/DESIGN.md` — complete design system encoding:
- Visual identity (color palette, typography, spacing scale)
- Component behavior rules
- Anti-patterns to avoid
- Brand constraints

**Usage:**
```
/taste-design
# → @ux-design-expert configures the 4 dials
# → DESIGN.md generated in project root (.stitch/)
# → @dev implements Next.js/Tailwind from DESIGN.md as spec
```

**Pipeline:**
```
taste-design (DESIGN.md) → @dev implements → impeccable audit → Ship
```

**Skills installed (status):**
- `taste-design` — ✅ ACTIVE (generates DESIGN.md, no MCP required)
- `stitch-design` — ⚠️ PENDING (StitchMCP not yet configured)
- `stitch-loop` — ⚠️ PENDING (StitchMCP not yet configured)

**Casos de uso:**
- Design system for plataforma-runa before implementing new module
- Visual identity for RUNA SYSTEMS client-facing pages
- CREATOR$ carousel visual consistency baseline

---

## impeccable — Design Quality Auditor

**Skill:** `~/.agents/skills/impeccable/` (symlink: `~/.claude/skills/impeccable`)
**Comando:** `/impeccable <subcommand>`
**Agente:** `@ux-design-expert` (Uma) — primary | `@devops` — CLI/pre-commit
**Repo:** https://github.com/pbakaus/impeccable | License: Apache 2.0

**Quando usar:** Any UI screen implemented by @dev before PR/merge; post-implementation quality gate; browser-based iteration on specific elements

**Relação com taste-design:**
- `taste-design` = *creator* → generates DESIGN.md with visual identity
- `impeccable` = *auditor/refiner* → detects anti-patterns in already-generated UI
- Complementary, never conflicting. Always run taste-design first.

**23 Commands:**

| Command | When to Use |
|---------|-------------|
| `/impeccable audit` | First pass — detect all 27 anti-pattern categories |
| `/impeccable polish` | Full surface refinement (radius, shadows, spacing) |
| `/impeccable typeset` | Typography hierarchy fix |
| `/impeccable colorize` | Color system refinement |
| `/impeccable animate` | Motion + micro-interactions |
| `/impeccable layout` | Grid, spacing, visual hierarchy |
| `/impeccable critique` | Narrative critique — WHY it feels wrong |
| `/impeccable teach` | Explain design concepts interactively |
| `/impeccable live` | Browser HMR iteration — 3 variants per element |
| `/impeccable pin` | Pin decision to DESIGN.md |
| `/impeccable clarify` | Clarify design intent |
| `/impeccable distill` | Distill visual essence |
| `/impeccable harden` | Harden accessibility + contrast |
| `/impeccable optimize` | Performance-focused design pass |
| `/impeccable adapt` | Adapt design to different context |
| `/impeccable extract` | Extract patterns from existing UI |

**CLI — Pre-commit / CI:**
```bash
# Directory scan (JSX/TSX/HTML/CSS)
npx impeccable detect src/ --json

# URL scan (staging)
npx impeccable detect https://staging.example.com --json

# Output: {"antiPatterns": [{"rule": "...", "location": "...", "severity": "high|medium|low"}]}
```

**27 Anti-Pattern Categories (key groups):**

| Group | Examples |
|-------|---------|
| AI Aesthetic | Generic gradients, glassmorphism overuse, purple glow shadows |
| Typography | Inter in premium contexts, wrong hierarchy, line-height issues |
| Color | Neon accents, no clear primary, saturation > 80% |
| Layout | 3-equal-cards, centered hero on complex pages, no spatial zones |
| Animation | Bounce keyframes, excessive transitions, no motion purpose |
| Quality | Missing hover states, no empty states, no loading states |

**File inputs:**
- `DESIGN.md` (taste-design output) — makes audit brand-aware — strongly recommended
- `PRODUCT.md` (product context) — optional

**Casos de uso:**
- Gate every plataforma-runa screen before merge
- RUNA SYSTEMS teaching module: Dev Neural content on design quality pipeline
- Bundleable Apache 2.0 deliverable inside RUNA SYSTEMS ecosystem

---

## ui-ux-pro-max — Design System Generator

**Skill:** `ui-ux-pro-max` (global)
**Agente:** `@dev` — primary implementation | `@ux-design-expert` — oversight
**Quando usar:** Generating wireframes, component libraries, full design systems, before implementing new UI screens

**Scale:**
- 67 visual styles (minimalism, brutalism, neumorphism, glassmorphism, etc.)
- 96 color palettes
- 57 typography combinations
- 13 tech stacks supported (Next.js, React Native, Svelte, Vue, etc.)

**Quando usar:** When a design system needs to be created from component level — generates wireframes, interactive prototypes, component libraries

**Quando NÃO usar:** When DESIGN.md already exists from taste-design — ui-ux-pro-max generates FROM ZERO; impeccable audits EXISTING code

**Casos de uso:**
- Generate component library for plataforma-runa screens
- Create style variants for @arthsystems_ campaign landing pages
- Prototype new RUNA SYSTEMS product pages

---

## frontend-design — Implementation Skill

**Skill:** `frontend-design` (global)
**Agente:** `@dev`
**Quando usar:** Implementing pixel-perfect UI from design specs (Figma specs, DESIGN.md, mockups) in React/Next.js/Tailwind

**Casos de uso:**
- Implement DESIGN.md output from taste-design into Next.js components
- Convert ui-ux-pro-max wireframes into production code
- Responsive layout implementation for plataforma-runa

---

## tipografia — Brand Typography System

**Skill:** `/tipografia` | **Owner:** @ux-design-expert
**Trigger:** "tipografia da marca", "font pairing", "specimen de fonte", "identidade tipográfica"
**Requires:** `creative-brief` completed (brand personality guides font selection)
**Part of:** Agency Visual Identity Pipeline (Step 3b)

Selects font pairings via Google Fonts, generates an interactive HTML specimen that displays all typographic scales, weights, and use cases for the brand.

```
/tipografia
# Analyzes brief for brand personality → font pairing selection
# Generates: outputs/[cliente]/tipografia/specimen.html (self-contained)
# HTML loads fonts via Google Fonts CDN — no install needed
```

**Output:** Full typographic specimen with H1–H6 scales, body text, captions, and code styles applied to the brand context.

---

## moodboard-to-motion — Moodboard → Animated Presentation

**Skill:** `/moodboard-to-motion` | **Owner:** FREYJA (narrative) + MAYA (visual execution)
**Trigger:** "transformar moodboard em apresentação", "deck animado da marca", "animar o moodboard"
**Requires:** `moodboard` completed (moodboard.png as input)
**Part of:** Agency Visual Identity Pipeline (Step 6)

Converts the static moodboard into a structured prompt for Claude Design (claude.ai/design), which generates the animated brand presentation. This skill does NOT generate the animation directly — it produces the brief.

```
/moodboard-to-motion
# Reads: moodboard.png + paleta.json + brief
# Outputs: outputs/[cliente]/apresentacao/prompt_claude_design.md
# User takes the .md prompt → pastes into claude.ai/design → downloads animated deck
```

**Why this pattern:** Claude Design (claude.ai/design) is the right tool for HTML/CSS animated presentations. moodboard-to-motion bridges the gap between static brand assets and the animated deck without duplicating that capability inside Claude Code.

---

## Design Pipeline — Full Flow

```
1. taste-design → DESIGN.md (brand system)
2. @dev implements using frontend-design skill
3. ui-ux-pro-max (if new components needed)
4. impeccable audit (npx impeccable detect src/ --json)
5. [ISSUES] → @ux-design-expert runs /impeccable polish|typeset|colorize
6. [CLEAN] → @devops pre-commit hook passes → Ship
```

---

## Anti-Patterns

❌ Implementing UI without running taste-design first — generates generic, off-brand components
❌ Using /impeccable live in CI — interactive browser mode, breaks non-interactive pipelines
❌ Running impeccable on backend-only code — only processes JSX/TSX/HTML/CSS
❌ Skipping taste-design before /impeccable pin — DESIGN.md must exist before pinning decisions
❌ Using ui-ux-pro-max AND taste-design in the same project without reconciling outputs — pick one as source of truth
❌ @devops configuring pre-commit hook before @ux-design-expert runs first manual audit
❌ Treating Figma as a required tool — it is NOT part of this stack
