---
epic: "03"
story: "03-2"
title: "/[mentee]/sessoes — Lista de sessões com arco 1-21"
status: Done
type: feature
estimate: M
assignee: "@dev"
epic_file: "RUNA OS/wiki/analyses/epic-03-mentee-dashboard.md"
prd: "RUNA OS/📐 Projetos/plataforma-runa-prd.md"
depends_on: "03-1"
---

# Story 03-2 — /[mentee]/sessoes — Lista de sessões com arco 1-21

## Context

The primary entry point for a mentee's session history. Lucas Pesto (and future mentees) land here to find all their recorded sessions. The page renders as a Server Component, querying Supabase directly with the service role key. The mentee slug in the URL maps to a `profiles.slug` lookup to get the `mentee_id` — the same pattern established in Story 01-6 for the mentee home shell.

The arc visualization (1-21) is intentional: RUNA runs for 21 sessions across 7 weeks. Sessions completed are shown as cards. Sessions 10-21 (not yet held) show an "awaiting" placeholder so the mentee sees the full program scope.

## Acceptance Criteria

- [x] Route `app/[mentee]/sessoes/page.tsx` exists and renders (follows existing [mentee]/home pattern)
- [x] Page fetches sessions from Supabase WHERE mentee_id matches logged-in user
- [x] Access denied (redirect to /entrar) if logged-in user's slug !== URL param (middleware + notFound defense-in-depth)
- [x] Progress bar shows completed sessions / 21 total
- [x] Completed sessions rendered as cards with: number, date, title, duration, deliverables count badge
- [x] Sessions 1-21 always shown — future sessions (no DB row) show "Sessão aguardando" placeholder
- [x] Cards link to `/[mentee]/sessoes/[n]`
- [x] Page is a Server Component (no `use client`)
- [x] `npm run build` passes with no TypeScript errors

## Page Structure

```
/lucas-pesto/sessoes

[Progress Bar] — Sessão 9 de 21 concluídas

[Card: Sessão 01] — 2026-03-18 — "Diagnóstico e Arquitetura" — 90min — 3 entregáveis
[Card: Sessão 02] — 2026-03-19 — "Primeiro Agente" — 90min — 2 entregáveis
...
[Card: Sessão 09] — 2026-04-29 — "..." — 90min — 1 entregável
[Card: Sessão 10] — Sessão aguardando
...
[Card: Sessão 21] — Sessão aguardando
```

## Data Fetching Pattern

```typescript
// Server Component — uses service role, RLS bypassed
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

const { data: sessions } = await supabase
  .from('sessions')
  .select('*, deliverables(count)')
  .eq('mentee_id', menteeId)
  .order('session_number', { ascending: true })
```

## Components

- `components/sessions/SessionCard.tsx` — card for a completed session
- `components/sessions/SessionPlaceholder.tsx` — card for future session
- `components/sessions/SessionArcProgress.tsx` — progress bar (completed/21)

## File List

- `apps/plataforma-runa/app/[mentee]/sessoes/page.tsx`
- `apps/plataforma-runa/components/sessions/SessionCard.tsx`
- `apps/plataforma-runa/components/sessions/SessionPlaceholder.tsx`
- `apps/plataforma-runa/components/sessions/SessionArcProgress.tsx`

## Design Notes

- Background: #080C09 (Dear Alice / Solarpunk — from DESIGN.md)
- Cards: subtle border, no heavy shadows
- Progress bar accent: #3D4842
- "Sessão aguardando" cards: muted/dimmed, no link

## Change Log

| Date | Agent | Change |
|------|-------|--------|
| 2026-05-16 | @sm | Draft created |
| 2026-05-16 | @dev | Implemented — route placed at app/[mentee]/sessoes/ (follows existing home pattern, not (protected)). SessionCard, SessionPlaceholder, SessionArcProgress created. Build clean. |
