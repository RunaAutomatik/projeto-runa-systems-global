-- Epic 02 — Content Library
-- Story 02-1: content_items table + RLS + index

CREATE TABLE content_items (
  id               uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  slug             text        UNIQUE NOT NULL,
  title            text        NOT NULL,
  description      text,
  type             text        NOT NULL,
  tier_required    text        NOT NULL DEFAULT 'free',
  content_markdown text,
  youtube_url      text,
  external_url     text,
  published_at     timestamptz,
  created_at       timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT content_type_values
    CHECK (type IN ('lesson', 'repo', 'skill', 'prompt', 'template', 'live')),
  CONSTRAINT tier_values
    CHECK (tier_required IN ('free', 'mentee'))
);

-- Required by engineering review (Epic 02 arch notes)
CREATE INDEX idx_content_items_tier_published
  ON content_items(tier_required, published_at DESC);

ALTER TABLE content_items ENABLE ROW LEVEL SECURITY;

-- Anon users: no access (unauthenticated API calls blocked at DB level)
CREATE POLICY "no_anon_access" ON content_items
  FOR SELECT TO anon USING (false);

-- Authenticated reads handled at application layer via service role.
-- Service role bypasses RLS — tier gate enforced in Next.js server components.
