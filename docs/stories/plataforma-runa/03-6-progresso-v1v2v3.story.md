---
epic: "03"
story: "03-6"
title: "/[mentee]/progresso — V1/V2/V3 arc tracker + milestones"
status: Done
type: feature
estimate: M
assignee: "@dev"
epic_file: "RUNA OS/wiki/analyses/epic-03-mentee-dashboard.md"
prd: "RUNA OS/📐 Projetos/plataforma-runa-prd.md"
depends_on: "03-1"
---

# Story 03-6 — /[mentee]/progresso — V1/V2/V3 arc tracker

## Context

Visualizes the mentee's journey through the RUNA method's three infrastructure stages: V1 (manual infra), V2 (basic automations), V3 (autonomous system). The data source is `infrastructure_snapshots` ordered chronologically — each snapshot is a point-in-time capture of the mentee's infrastructure state.

The V stage is explicit in each snapshot (`v_stage: 'V1' | 'V2' | 'V3'`). The current state is always the latest snapshot. Milestone checklists are hard-coded constants derived from the RUNA method — they don't live in the DB.

If no snapshots exist yet (e.g., early in the program), the page shows a "V1 — Início" default state.

## Acceptance Criteria

- [x] Route `app/(protected)/[mentee]/progresso/page.tsx` exists and renders
- [x] Fetches all `infrastructure_snapshots` for mentee, ordered by `captured_at ASC`
- [x] Current V stage = latest snapshot's `v_stage` (default V1 if no snapshots)
- [x] Timeline displays all snapshots as chronological milestones
- [x] Each V stage section shows milestone checklist (constants — not from DB)
- [x] Completed milestones derived from snapshot data (tools_count, automations_count, agents jsonb)
- [x] V stage badges: V1 = muted/stone, V2 = amber, V3 = accent (#3D4842 + glow)
- [x] Tools count and automations count displayed from latest snapshot
- [x] Access control: redirect if mentee slug !== logged-in user's slug
- [x] `npm run build` passes with no TypeScript errors

## Milestone Constants

```typescript
// apps/plataforma-runa/lib/milestones.ts
export const MILESTONES = {
  V1: [
    { id: 'claude-ai-configured',  label: 'Claude AI configurado' },
    { id: 'first-agent-created',   label: 'Primeiro agente criado' },
    { id: 'first-workflow',        label: 'Primeiro workflow documentado' },
    { id: 'claude-code-installed', label: 'Claude Code instalado' },
  ],
  V2: [
    { id: 'squad-training-wheels', label: 'Squad em Training Wheels' },
    { id: 'n8n-connected',         label: 'n8n conectado' },
    { id: 'first-automation',      label: 'Primeira automação ativa' },
    { id: 'content-pipeline',      label: 'Pipeline de conteúdo configurado' },
  ],
  V3: [
    { id: 'squad-autonomous',      label: 'Squad operando autonomamente' },
    { id: 'full-automation',       label: 'Automações cobrindo 80%+ das operações' },
    { id: 'client-revenue',        label: 'Primeira receita gerada com o sistema' },
    { id: 'runa-method-applied',   label: 'Método RUNA aplicado integralmente' },
  ],
} as const
```

## Milestone Completion Logic

Milestones are derived from the latest snapshot fields (not stored separately):
- `tools_count > 0` → V1 milestones 1-2 checked
- `automations_count > 0` → V2 milestones 1-2 checked
- `agents jsonb` keys with non-`not-started` status → progress indicators

Exact mapping is left for @dev to define — the business logic of which milestone maps to which snapshot field is a meaningful design decision.

## Components

- `components/progresso/VStageCard.tsx` — V1/V2/V3 stage card with milestones
- `components/progresso/SnapshotTimeline.tsx` — chronological timeline of snapshots
- `components/progresso/MilestoneChecklist.tsx` — checklist for a single V stage

## File List

- `apps/plataforma-runa/app/[mentee]/progresso/page.tsx`
- `apps/plataforma-runa/lib/milestones.ts`
- `apps/plataforma-runa/components/progresso/VStageCard.tsx`
- `apps/plataforma-runa/components/progresso/SnapshotTimeline.tsx`
- `apps/plataforma-runa/components/progresso/MilestoneChecklist.tsx`

## Change Log

| Date | Agent | Change |
|------|-------|--------|
| 2026-05-16 | @sm | Draft created |
| 2026-05-16 | @dev | Implemented — MilestoneChecklist, VStageCard (V1/V2/V3 badges with amber+glow), SnapshotTimeline (chronological ol with stage-colored dots), page.tsx (Server Component, getCompletedMilestones from latest snapshot, default V1). Route at app/[mentee]/progresso (follows codebase pattern, no (protected)). Build clean. |
