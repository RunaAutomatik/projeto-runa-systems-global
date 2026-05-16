-- Epic 03: Mentee Dashboard — sessions, deliverables, infrastructure_snapshots

-- Sessions: one row per coaching session (max 21 per mentee)
-- mentee_id is text to match profiles.id (Clerk user IDs, e.g. "user_abc123")
CREATE TABLE sessions (
  id               uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  mentee_id        text        NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  session_number   integer     NOT NULL,
  title            text        NOT NULL,
  session_date     date        NOT NULL,
  bunny_video_id   text,
  duration_minutes integer,
  summary          text,
  created_at       timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT sessions_mentee_number_unique UNIQUE (mentee_id, session_number)
);

-- Deliverables: prompts, templates, workflows, agents, docs linked to sessions
CREATE TABLE deliverables (
  id          uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  mentee_id   text        NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  session_id  uuid        REFERENCES sessions(id) ON DELETE SET NULL,
  title       text        NOT NULL,
  type        text        NOT NULL,
  file_url    text,
  description text,
  created_at  timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT deliverable_type_values CHECK (
    type IN ('prompt', 'template', 'workflow', 'agent', 'doc')
  )
);

-- Infrastructure snapshots: point-in-time captures of mentee infrastructure state
CREATE TABLE infrastructure_snapshots (
  id                uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  mentee_id         text        NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  captured_at       timestamptz NOT NULL DEFAULT now(),
  v_stage           text        NOT NULL,
  agents            jsonb       NOT NULL DEFAULT '{}',
  tools_count       integer     NOT NULL DEFAULT 0,
  automations_count integer     NOT NULL DEFAULT 0,
  notes             text,
  CONSTRAINT v_stage_values CHECK (v_stage IN ('V1', 'V2', 'V3'))
);

-- Indexes for common query patterns
CREATE INDEX sessions_mentee_id_idx        ON sessions (mentee_id);
CREATE INDEX sessions_mentee_number_idx    ON sessions (mentee_id, session_number);
CREATE INDEX deliverables_mentee_id_idx    ON deliverables (mentee_id);
CREATE INDEX deliverables_session_id_idx   ON deliverables (session_id);
CREATE INDEX snapshots_mentee_captured_idx ON infrastructure_snapshots (mentee_id, captured_at DESC);

-- Enable RLS on all three tables
ALTER TABLE sessions                 ENABLE ROW LEVEL SECURITY;
ALTER TABLE deliverables             ENABLE ROW LEVEL SECURITY;
ALTER TABLE infrastructure_snapshots ENABLE ROW LEVEL SECURITY;

-- RLS policies: mentees can only SELECT their own rows
-- Service role key (server components) bypasses RLS automatically

-- auth.uid() returns uuid; cast to text to match profiles.id (Clerk text IDs)
CREATE POLICY mentee_own_sessions ON sessions
  FOR SELECT
  USING (mentee_id = auth.uid()::text);

CREATE POLICY mentee_own_deliverables ON deliverables
  FOR SELECT
  USING (mentee_id = auth.uid()::text);

CREATE POLICY mentee_own_snapshots ON infrastructure_snapshots
  FOR SELECT
  USING (mentee_id = auth.uid()::text);
