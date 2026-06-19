---
epic: "01"
story: "01-1"
title: "Scaffold apps/plataforma-runa/ — Next.js 15 + TS + Tailwind + shadcn"
status: Done
type: feature
estimate: S
assignee: "@dev"
epic_file: "RUNA OS/wiki/analyses/epic-01-foundation.md"
prd: "RUNA OS/📐 Projetos/plataforma-runa-prd.md"
---

# Story 01-1 — Scaffold apps/plataforma-runa/

## Context

`apps/plataforma-runa/` does not exist. This story creates the app skeleton with all required tooling configured. Every subsequent story builds on this scaffold.

## Acceptance Criteria

- [ ] `apps/plataforma-runa/` created as a standalone Next.js 15 app (NOT added to root workspaces — see note)
- [ ] TypeScript strict mode enabled
- [ ] Tailwind CSS v4 configured with custom theme (Dear Alice/Solarpunk palette)
- [ ] shadcn/ui initialized with `slate` base but theme overridden to custom palette
- [ ] Geist Sans + Geist Mono fonts configured (via `next/font/google`)
- [ ] `npm run dev` starts without errors on port 3001 (3000 used by instagram-worker)
- [ ] `npm run build` completes without TypeScript errors
- [ ] ESLint + Prettier configured and passing
- [ ] `.env.local.example` with all required env var names (no values)
- [ ] `next.config.ts` with Turbopack enabled

## Custom Theme Tokens (Tailwind)

```typescript
// tailwind.config.ts
colors: {
  bg: '#080C09',
  surface1: '#111712',
  surface2: '#1A201B',
  border: '#2A342C',
  textPrimary: '#E8EDE9',
  textMuted: '#7A8C7C',
  accent: '#3D4842',
  accentSoft: 'rgba(61,72,66,0.15)',
}
```

## Note: Monorepo Workspaces

Do NOT add `"workspaces"` to root `package.json`. `lp-runa` is a git submodule and workspace hoisting would break it. `apps/plataforma-runa/` operates as a standalone app with its own `node_modules`.

## File List

- `apps/plataforma-runa/package.json`
- `apps/plataforma-runa/next.config.ts`
- `apps/plataforma-runa/tsconfig.json`
- `apps/plataforma-runa/tailwind.config.ts`
- `apps/plataforma-runa/postcss.config.js`
- `apps/plataforma-runa/.eslintrc.json`
- `apps/plataforma-runa/.env.local.example`
- `apps/plataforma-runa/app/layout.tsx`
- `apps/plataforma-runa/app/page.tsx` (placeholder)
- `apps/plataforma-runa/app/globals.css`
- `apps/plataforma-runa/components/ui/` (shadcn components)

## Verification

```bash
cd apps/plataforma-runa && npm run dev
# → Server running on http://localhost:3001
# → No TypeScript errors
# → Custom dark background (#080C09) visible on root page
```
