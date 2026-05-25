-- Epic 02 — Content Library
-- Initial content_items schema. Superseded by 20260517021330 (adds bunny_video_id + Clerk JWT policies).

CREATE TABLE IF NOT EXISTS content_items (
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

CREATE INDEX IF NOT EXISTS idx_content_items_tier_published
  ON content_items(tier_required, published_at DESC);

ALTER TABLE content_items ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "content_items_select_free" ON content_items;
DROP POLICY IF EXISTS "content_items_select_mentee" ON content_items;
DROP POLICY IF EXISTS "no_anon_access" ON content_items;

-- Anon users blocked at DB level; authenticated tier gate in Next.js server components via service role.
-- Superseded by Clerk JWT inline policies in 20260517021330.
CREATE POLICY "no_anon_access" ON content_items
  FOR SELECT TO anon USING (false);
