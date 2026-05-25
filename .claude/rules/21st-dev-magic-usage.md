---
paths: **/*
---

# 21st-dev Magic MCP — Usage Rules

## What it is

Natural language React component generator. Describe a UI component in plain text
and Magic MCP generates production-ready React code using shadcn/ui, Tailwind CSS,
and modern React patterns.

Docs: https://21st.dev/docs | Package: `@21st-dev/magic@latest`

## Status

```
✅  API key configured — TWENTY_FIRST_API_KEY in ~/.claude.json
✅  MCP entry added to ~/.claude.json (requires Claude Code restart to activate)
⚠️  Runtime requires Node.js + npx — install Node.js if not present
```

MCP entry key: `@21st-dev/magic` | Transport: stdio | Command: `npx -y @21st-dev/magic@latest`

## Agent Assignment

| Agent | Role |
|-------|------|
| **@dev** | Primary — component generation, DESIGN.md-aware scaffolding, rapid prototyping |
| **@ux-design-expert** | Secondary — describe desired UI, review and iterate on generated components |

Other agents: route component generation requests through @dev.

---

## When to Use

- Generating a new React component from a description: "create a card with header, body, CTA"
- Scaffolding a component family: "create a full data table with pagination, sort, filter"
- Rapid UI prototyping when there is no DESIGN.md yet
- Implementing a DESIGN.md spec — pass the DESIGN.md as context for constrained generation
- Reducing boilerplate for shadcn/ui + Tailwind component patterns

## When NOT to Use

- Editing or refactoring existing components — use Edit tool directly
- Server components / Next.js-specific data fetching logic — Magic generates client components
- Simple text/style changes to existing code — Edit tool is faster
- Non-React frameworks — Magic targets React only
- When the component requires complex business logic — generate the shell, implement logic manually

---

## Decision Tree — Which Tool?

```
Need UI component?
  ├── No DESIGN.md exists yet → @ux-design-expert: /taste-design first → then come back
  │
  ├── DESIGN.md exists
  │     ├── New component from scratch → Magic MCP (@dev)
  │     │     "create [component] following the DESIGN.md constraints: [paste relevant sections]"
  │     ├── Multiple design variations to compare → /design-shotgun (@ux-design-expert)
  │     └── Existing component to audit → /impeccable (@ux-design-expert)
  │
  └── Simple edit or style fix → Edit tool directly
```

**Stack position:**
- `taste-design` generates `DESIGN.md` (design system) — runs BEFORE Magic MCP
- Magic MCP generates component code — uses DESIGN.md as context
- `impeccable` audits what Magic generated — runs AFTER Magic MCP

Magic MCP does NOT replace taste-design or impeccable. It fills the gap between design spec and implementation.

---

## Workflow

### Standard component generation (@dev)

1. Ensure DESIGN.md exists (or note that generation is unconstrained)
2. Invoke Magic MCP via natural language inside Claude Code:
   ```
   @dev: "Create a React button component with:
   - Primary / Secondary / Destructive variants
   - Icon support (left + right)
   - Loading state with spinner
   - Tailwind classes matching DESIGN.md dark theme"
   ```
3. Magic MCP returns: `<ComponentName>.tsx` with full implementation
4. Review generated code — check for: TypeScript types, accessibility attrs, Tailwind consistency
5. If DESIGN.md exists: run `/impeccable audit` after placing the file

### DESIGN.md-aware generation (@dev + @ux-design-expert)

```
@ux-design-expert: /taste-design → DESIGN.md created
  → @dev: Magic MCP (with DESIGN.md relevant sections as context in the prompt)
  → @ux-design-expert: /impeccable audit → approve or iterate
  → Ship
```

### Rapid prototyping (no DESIGN.md)

Use when the goal is speed/exploration, not production quality.
Always add `// TODO: impeccable audit` comment at top of generated file.

---

## Anti-Patterns

❌ **Using Magic MCP without DESIGN.md context when one exists** — generated component will diverge from brand system. Always pass relevant DESIGN.md sections.

❌ **Replacing taste-design with Magic MCP** — Magic generates components, not design systems. taste-design must still define the system.

❌ **Skipping impeccable after Magic generation** — Magic optimizes for functionality, not design consistency. Always audit.

❌ **Generating complex data-fetching logic via Magic** — Magic is a UI generator. Data layer must be implemented separately.

❌ **Using Magic for non-shadcn/Tailwind projects** — output assumes shadcn/ui primitives. Incompatible with vanilla CSS or other component libraries.

---

## Product Application

| Product | Magic MCP role |
|---------|---------------|
| **RUNA SYSTEMS Dev Neural** | Teaching clients to scaffold UI with AI — core of the Dev Neural curriculum |
| **CREATOR$** | Rapid page section prototyping for content creator tools |
| **SITE$** | Component-first landing page generation |
| **$QUAD** | Squad-built UI: @dev agent generates components, @ux reviews, ships fast |