---
epic: "03"
story: "03-5"
title: "/[mentee]/entregaveis — Browser de entregáveis com filtros"
status: Done
type: feature
estimate: M
assignee: "@dev"
epic_file: "RUNA OS/wiki/analyses/epic-03-mentee-dashboard.md"
prd: "RUNA OS/📐 Projetos/plataforma-runa-prd.md"
depends_on: "03-3"
---

# Story 03-5 — /[mentee]/entregaveis — Browser de entregáveis com filtros

## Context

A standalone view of all deliverables for a mentee, independent of the session detail page. The mentee can browse all prompts, templates, workflows, agents, and docs generated across the entire program. Filters are client-side (all deliverables loaded at once — manageable given 9 sessions × ~3 deliverables per session = ~27 items max for Lucas).

`DeliverableCard` is reused from Story 03-3. The filter UI uses existing shadcn/ui components (Tabs or Select).

## Acceptance Criteria

- [x] Route `app/[mentee]/entregaveis/page.tsx` exists and renders (follows codebase pattern — no `(protected)`)
- [x] Page fetches all deliverables for the logged-in mentee from Supabase
- [x] Fetches with related session title (for display in card)
- [x] Filter by type: all | prompt | template | workflow | agent | doc
- [x] Filter by session: all | Sessão 01 | Sessão 02 | ... (only sessions that have deliverables)
- [x] Text search by title (client-side, no DB round-trip)
- [x] Each card shows: title, type badge, session ref, description snippet, download/view link
- [x] `file_url` null: card still renders, link disabled ("Em breve" implicit — no href, no pointer)
- [x] Access control: redirect if mentee slug !== logged-in user's slug (middleware + notFound)
- [x] `npm run build` passes with no TypeScript errors

## Page Structure

```
/lucas-pesto/entregaveis

[Search input]  [Type filter: All | Prompt | Template | Workflow | Agent | Doc]
[Session filter: All | Sessão 01 | ... | Sessão 09]

[DeliverableCard] × N — filtrada
```

## Data Fetching

```typescript
// Server Component — fetches all at once (small dataset)
const { data: deliverables } = await supabase
  .from('deliverables')
  .select('*, sessions(session_number, title)')
  .eq('mentee_id', menteeId)
  .order('created_at', { ascending: false })
```

Client-side filtering via `useState` + `useMemo` — no additional DB calls.

## Components

- `components/deliverables/DeliverableCard.tsx` — reused from 03-3
- `components/deliverables/DeliverableFilters.tsx` — type + session filter UI (Client Component)
- `components/deliverables/DeliverableSearch.tsx` — search input (Client Component)

## File List

- `apps/plataforma-runa/app/[mentee]/entregaveis/page.tsx`
- `apps/plataforma-runa/components/deliverables/DeliverableBrowser.tsx`
- `apps/plataforma-runa/components/deliverables/DeliverableFilters.tsx`
- `apps/plataforma-runa/components/deliverables/DeliverableSearch.tsx`

## Change Log

| Date | Agent | Change |
|------|-------|--------|
| 2026-05-16 | @sm | Draft created |
| 2026-05-16 | @dev | Implemented — DeliverableBrowser (Client Component manages all state), DeliverableSearch, DeliverableFilters. DeliverableCard extended with optional sessionLabel. useMemo for filtered list. Build clean. |
