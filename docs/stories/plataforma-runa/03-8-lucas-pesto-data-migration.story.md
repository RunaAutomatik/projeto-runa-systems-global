---
epic: "03"
story: "03-8"
title: "Migração dos dados do Lucas Pesto — 9 sessões + entregáveis"
status: Draft
type: chore
estimate: M
assignee: "@dev"
epic_file: "RUNA OS/wiki/analyses/epic-03-mentee-dashboard.md"
prd: "RUNA OS/📐 Projetos/plataforma-runa-prd.md"
depends_on: "03-1, epic-04-admin-panel"
---

# Story 03-8 — Migração dos dados do Lucas Pesto (9 sessões)

## Context

⚠️ **BLOCKED — Awaiting Epic 04.** This story depends on the admin panel (Epic 04) for the upload interface. The migration script can be drafted now but must not be run until the admin panel exists to manage the data going forward.

Populates the database with all 9 sessions held with Lucas Pesto (S01–S09) and all associated deliverables. Source data lives in the SÍRIOS Obsidian vault.

The migration is a one-time seed script — similar in pattern to `seeds/seed-content.ts` from Story 02-1. After Epic 04 exists, new sessions will be added via the admin interface, not via seed scripts.

## Acceptance Criteria

⚠️ DO NOT IMPLEMENT until Epic 04 is Done.

- [ ] Epic 04 exists and admin panel can create/edit sessions
- [ ] Source data reviewed: `SÍRIOS/MENTORADOS/Lucas Pesto/📋 escopos-de-aula/` (session scopes)
- [ ] Source data reviewed: `SÍRIOS/MENTORADOS/Lucas Pesto/📦 entregáveis/` (deliverables)
- [ ] Gravações Bunny.net: confirm whether videos are already uploaded to Bunny or need upload
- [ ] Seed script `seeds/seed-lucas-pesto.ts` created
- [ ] Script inserts 9 sessions with: session_number, title, session_date, summary, bunny_video_id (if available)
- [ ] Script inserts all deliverables linked to their respective sessions
- [ ] Script is idempotent (safe to run multiple times — upsert pattern)
- [ ] `npx tsx seeds/seed-lucas-pesto.ts` runs without errors
- [ ] Lucas Pesto login → `/lucas-pesto/sessoes` shows 9 sessions correctly

## Data Sources

```
SÍRIOS/MENTORADOS/Lucas Pesto/
├── _hub.md                           — overview and session index
├── 📋 escopos-de-aula/               — session scope docs (S01–S09)
│   ├── escopo-S01.md
│   ├── escopo-S02.md
│   └── ...
└── 📦 entregáveis/                   — deliverables per session
    ├── S01-*.md
    ├── S02-*.md
    └── ...
```

## Known Unknowns (resolve before implementation)

1. **Bunny.net videos:** Are S01–S09 recordings already uploaded to Bunny.net? If not, need upload workflow before this story.
2. **Session dates:** Verify exact dates for S01–S09 from hub or diary entries.
3. **Deliverable file_url:** Are deliverables served from a URL (Drive/Bunny) or just stored as text in DB?

## Seed Pattern

```typescript
// seeds/seed-lucas-pesto.ts
// Follows same pattern as seed-content.ts from Story 02-1
// Uses supabase service role + upsert
const supabase = createClient(url, serviceRoleKey)

await supabase.from('sessions').upsert([
  {
    mentee_id: LUCAS_PESTO_ID,
    session_number: 1,
    title: 'Diagnóstico e Arquitetura',
    session_date: '2026-03-18',
    bunny_video_id: null, // update after Bunny upload confirmed
    duration_minutes: 90,
    summary: '...',
  },
  // ... S02–S09
], { onConflict: 'mentee_id,session_number' })
```

## File List

- `apps/plataforma-runa/seeds/seed-lucas-pesto.ts`

## Change Log

| Date | Agent | Change |
|------|-------|--------|
| 2026-05-16 | @sm | Draft created — BLOCKED on Epic 04 |
