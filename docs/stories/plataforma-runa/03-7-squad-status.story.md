---
epic: "03"
story: "03-7"
title: "/[mentee]/squad — Status visual dos 8 agentes neurais"
status: Done
type: feature
estimate: S
assignee: "@dev"
epic_file: "RUNA OS/wiki/analyses/epic-03-mentee-dashboard.md"
prd: "RUNA OS/📐 Projetos/plataforma-runa-prd.md"
depends_on: "03-6"
---

# Story 03-7 — /[mentee]/squad — Status visual dos 8 agentes neurais

## Context

Shows the status of the mentee's 8 neural agents (the RUNA squad). The data comes from the latest `infrastructure_snapshots.agents` JSONB field. Each of the 8 agents has one of 4 possible statuses: `not-started`, `training-wheels`, `assisted`, `autonomous`.

This is the simplest page in Epic 03 — no complex data fetching, no filtering, no forms. Just read the latest snapshot, render 8 cards. Story estimate is S accordingly.

If no snapshot exists: all 8 agents default to `not-started`.

## Acceptance Criteria

- [x] Route `app/(protected)/[mentee]/squad/page.tsx` exists and renders
- [x] Fetches latest `infrastructure_snapshots` row for the mentee
- [x] If no snapshot: all agents render as `not-started`
- [x] 8 agent cards rendered: ceo, designer, copy, ofertas, comercial, financeiro, projetos, dev
- [x] Each card shows: agent name (PT), status badge, status label (PT)
- [x] Status colors per DESIGN.md Solarpunk palette:
  - `not-started` → muted (#6B7280 or stone)
  - `training-wheels` → amber (#F59E0B)
  - `assisted` → sage (#4B5563 with green tint)
  - `autonomous` → accent (#3D4842 + ring glow)
- [x] Access control: redirect if mentee slug !== logged-in user's slug
- [x] `npm run build` passes with no TypeScript errors

## Types

```typescript
// apps/plataforma-runa/lib/types.ts (add to existing or create)

export type AgentStatus = 'not-started' | 'training-wheels' | 'assisted' | 'autonomous'

export type AgentsSnapshot = {
  ceo:        AgentStatus
  designer:   AgentStatus
  copy:       AgentStatus
  ofertas:    AgentStatus
  comercial:  AgentStatus
  financeiro: AgentStatus
  projetos:   AgentStatus
  dev:        AgentStatus
}

export const AGENT_LABELS: Record<keyof AgentsSnapshot, string> = {
  ceo:        'CEO Neural',
  designer:   'Designer Neural',
  copy:       'Copy Neural',
  ofertas:    'Ofertas Neural',
  comercial:  'Comercial & Vendas Neural',
  financeiro: 'Financeiro Neural',
  projetos:   'Projetos & Produtos Neural',
  dev:        'Dev Neural',
}

export const DEFAULT_AGENTS_SNAPSHOT: AgentsSnapshot = {
  ceo: 'not-started', designer: 'not-started', copy: 'not-started',
  ofertas: 'not-started', comercial: 'not-started', financeiro: 'not-started',
  projetos: 'not-started', dev: 'not-started',
}
```

## Components

- `components/squad/AgentCard.tsx` — single agent card with status badge
- `components/squad/SquadGrid.tsx` — 8-card grid layout (2×4 or 4×2 responsive)

## File List

- `apps/plataforma-runa/app/[mentee]/squad/page.tsx`
- `apps/plataforma-runa/lib/types/mentee.ts` (types already existed — no changes needed)
- `apps/plataforma-runa/components/squad/AgentCard.tsx`
- `apps/plataforma-runa/components/squad/SquadGrid.tsx`

## Change Log

| Date | Agent | Change |
|------|-------|--------|
| 2026-05-16 | @sm | Draft created |
| 2026-05-16 | @dev | Implemented — AgentCard (4 status configs: muted/amber/emerald/accent+glow), SquadGrid (2-col responsive, AGENT_KEYS from AGENT_LABELS), page.tsx (latest snapshot via maybeSingle, default {} → not-started). Types reused from lib/types/mentee.ts. Route at app/[mentee]/squad. Build clean. |
