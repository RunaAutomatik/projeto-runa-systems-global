---
epic: "03"
story: "03-1"
title: "Database: sessions + deliverables + infrastructure_snapshots + RLS"
status: Done
type: feature
estimate: M
assignee: "@dev"
epic_file: "RUNA OS/wiki/analyses/epic-03-mentee-dashboard.md"
prd: "RUNA OS/📐 Projetos/plataforma-runa-prd.md"
depends_on: "01-2"
---

# Story 03-1 — Database: sessions + deliverables + infrastructure_snapshots + RLS

## Context

Adds the 3 tables that power the entire Epic 03 Mentee Dashboard. All tables reference `profiles(id)` as the mentee anchor — consistent with the existing pattern from Story 01-2. RLS is enabled on all 3 tables with the same policy pattern used for `profiles` and `subscriptions`: `mentee_id = (SELECT id FROM profiles WHERE id = auth.uid()::uuid)`.

Server Components access these tables via the service role key (bypasses RLS). Client-side code never touches these tables directly.

Story 03-8 (data migration for Lucas Pesto) depends on this story being Done.

## Acceptance Criteria

- [x] Migration file created at `supabase/migrations/20260516123934_epic03_tables.sql`
- [x] `sessions` table matches schema below
- [x] `deliverables` table matches schema below
- [x] `infrastructure_snapshots` table matches schema below
- [x] RLS enabled on all 3 tables
- [x] Policy `mentee_own_sessions` on sessions: SELECT only own rows
- [x] Policy `mentee_own_deliverables` on deliverables: SELECT only own rows
- [x] Policy `mentee_own_snapshots` on infrastructure_snapshots: SELECT only own rows
- [x] `supabase db push` applies without errors on clean DB
- [x] `npm run build` passes with no TypeScript errors

## Schema

```sql
-- sessions
CREATE TABLE sessions (
  id               uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  mentee_id        uuid        NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  session_number   integer     NOT NULL,
  title            text        NOT NULL,
  session_date     date        NOT NULL,
  bunny_video_id   text,
  duration_minutes integer,
  summary          text,
  created_at       timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT sessions_mentee_number_unique UNIQUE (mentee_id, session_number)
);

CREATE INDEX idx_sessions_mentee_id ON sessions(mentee_id);
CREATE INDEX idx_sessions_number    ON sessions(mentee_id, session_number);

-- deliverables
CREATE TABLE deliverables (
  id          uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  mentee_id   uuid        NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  session_id  uuid        REFERENCES sessions(id) ON DELETE SET NULL,
  title       text        NOT NULL,
  type        text        NOT NULL,
  file_url    text,
  description text,
  created_at  timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT deliverable_type_values
    CHECK (type IN ('prompt', 'template', 'workflow', 'agent', 'doc'))
);

CREATE INDEX idx_deliverables_mentee_id  ON deliverables(mentee_id);
CREATE INDEX idx_deliverables_session_id ON deliverables(session_id);
CREATE INDEX idx_deliverables_type       ON deliverables(mentee_id, type);

-- infrastructure_snapshots
CREATE TABLE infrastructure_snapshots (
  id                  uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  mentee_id           uuid        NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  captured_at         timestamptz NOT NULL DEFAULT now(),
  v_stage             text        NOT NULL,
  agents              jsonb       NOT NULL DEFAULT '{}',
  tools_count         integer     NOT NULL DEFAULT 0,
  automations_count   integer     NOT NULL DEFAULT 0,
  notes               text,
  CONSTRAINT v_stage_values CHECK (v_stage IN ('V1', 'V2', 'V3'))
);

CREATE INDEX idx_snapshots_mentee_id   ON infrastructure_snapshots(mentee_id);
CREATE INDEX idx_snapshots_captured_at ON infrastructure_snapshots(mentee_id, captured_at DESC);

-- RLS
ALTER TABLE sessions                ENABLE ROW LEVEL SECURITY;
ALTER TABLE deliverables            ENABLE ROW LEVEL SECURITY;
ALTER TABLE infrastructure_snapshots ENABLE ROW LEVEL SECURITY;

CREATE POLICY "mentee_own_sessions" ON sessions
  FOR SELECT USING (
    mentee_id = (SELECT id FROM profiles WHERE id = auth.uid()::uuid)
  );

CREATE POLICY "mentee_own_deliverables" ON deliverables
  FOR SELECT USING (
    mentee_id = (SELECT id FROM profiles WHERE id = auth.uid()::uuid)
  );

CREATE POLICY "mentee_own_snapshots" ON infrastructure_snapshots
  FOR SELECT USING (
    mentee_id = (SELECT id FROM profiles WHERE id = auth.uid()::uuid)
  );
```

## File List

- `supabase/migrations/20260516123934_epic03_tables.sql`

## Dev Notes

- Use `supabase migration new epic03_tables` to generate the timestamp-prefixed filename.
- The `ON DELETE CASCADE` on `mentee_id` ensures cleanup when a profile is deleted.
- `ON DELETE SET NULL` on `session_id` in deliverables allows deliverables to survive if a session is deleted.
- Do NOT create admin INSERT/UPDATE policies here — that is Epic 04 territory.
- Service role bypasses RLS — server-side queries in app will always use service role.

## Change Log

| Date | Agent | Change |
|------|-------|--------|
| 2026-05-16 | @sm | Draft created |
| 2026-05-16 | @dev | Migration applied — mentee_id type fixed to text (profiles.id is Clerk text ID, not uuid) |
