---
epic: "03"
story: "03-3"
title: "/[mentee]/sessoes/[n] — Detalhe da sessão + player + entregáveis"
status: Done
type: feature
estimate: L
assignee: "@dev"
epic_file: "RUNA OS/wiki/analyses/epic-03-mentee-dashboard.md"
prd: "RUNA OS/📐 Projetos/plataforma-runa-prd.md"
depends_on: "03-2, 03-4"
---

# Story 03-3 — /[mentee]/sessoes/[n] — Detalhe da sessão + player + entregáveis

## Context

The per-session detail page. The URL parameter `[n]` is the `session_number` (1-21), NOT the UUID. This choice makes URLs human-readable and bookmarkable (e.g., `/lucas-pesto/sessoes/3`).

The Bunny.net player requires a Signed URL generated server-side (Story 03-4). This page calls the `getBunnySignedUrl` server action before rendering — it never exposes the raw stream URL to the client.

If `bunny_video_id` is null (session recorded but not yet uploaded to Bunny), a placeholder is shown. If the session doesn't exist in the DB at all (future session), the page shows a "Sessão não realizada ainda" state.

## Acceptance Criteria

- [x] Route `app/[mentee]/sessoes/[n]/page.tsx` exists and renders (path follows codebase pattern — no `(protected)` segment)
- [x] `[n]` resolves to `session_number` — queries sessions table WHERE mentee_id + session_number
- [x] If session not found in DB: renders "Sessão não realizada ainda" state (not 404)
- [x] If session found with `bunny_video_id`: renders Bunny.net embed with Signed URL
- [x] If session found WITHOUT `bunny_video_id`: renders "Gravação em processamento" placeholder
- [x] Signed URL generated server-side via `getBunnySignedUrl()` (never client-exposed)
- [x] Session summary text rendered below player
- [x] Deliverables section lists all deliverables linked to this session
- [x] Prev/Next navigation between sessions (disabled at boundary sessions 1 and 21)
- [x] Access control: redirect if mentee slug !== logged-in user's slug (middleware + notFound defense-in-depth)
- [x] `npm run build` passes with no TypeScript errors

## Page Structure

```
/lucas-pesto/sessoes/3

← Sessão 02    Sessão 03 de 21    Sessão 04 →

[Bunny Player — Signed URL] | [Gravação em processamento]

📅 2026-03-25 · ⏱ 90min

## Resumo
[session.summary text]

## Entregáveis desta sessão
[DeliverableCard × N]
```

## Data Fetching

```typescript
// Server Component
const session = await supabase
  .from('sessions')
  .select('*, deliverables(*)')
  .eq('mentee_id', menteeId)
  .eq('session_number', Number(params.n))
  .single()

// Signed URL — server-side only, never passed raw to client
const playerUrl = session?.bunny_video_id
  ? await getBunnySignedUrl(session.bunny_video_id)
  : null
```

## Components

- `components/sessions/SessionPlayer.tsx` — Bunny.net iframe wrapper (receives signed URL)
- `components/sessions/SessionNav.tsx` — Prev/Next navigation
- `components/deliverables/DeliverableCard.tsx` — reusable card (also used in 03-5)

## File List

- `apps/plataforma-runa/app/[mentee]/sessoes/[n]/page.tsx`
- `apps/plataforma-runa/components/sessions/SessionPlayer.tsx`
- `apps/plataforma-runa/components/sessions/SessionNav.tsx`
- `apps/plataforma-runa/components/deliverables/DeliverableCard.tsx`

## Security Notes

- `SessionPlayer` is a Client Component (iframe needs DOM) — receives `signedUrl` prop, never `bunny_video_id`
- Server Component generates the signed URL and passes only the final URL as prop
- `getBunnySignedUrl` must never be imported from a Client Component

## Change Log

| Date | Agent | Change |
|------|-------|--------|
| 2026-05-16 | @sm | Draft created |
| 2026-05-16 | @dev | Implemented — route at app/[mentee]/sessoes/[n]/ (follows codebase pattern). SessionPlayer (use client, iframe), SessionNav (prev/next), DeliverableCard (reusable, also for 03-5). 3 render states: not-in-DB, has-video, no-video. getBunnySignedUrl server-side only. Build clean. |
