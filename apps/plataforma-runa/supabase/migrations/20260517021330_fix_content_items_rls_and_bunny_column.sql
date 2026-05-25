-- Switches content_items RLS from service-role tier gate to Clerk JWT inline policies.
-- Adds bunny_video_id for Bunny.net video delivery.

ALTER TABLE content_items ADD COLUMN IF NOT EXISTS bunny_video_id text;

DROP POLICY IF EXISTS "no_anon_access" ON content_items;
DROP POLICY IF EXISTS "content_items_select_free" ON content_items;
DROP POLICY IF EXISTS "content_items_select_mentee" ON content_items;

CREATE POLICY "content_items_select_free" ON content_items
  FOR SELECT USING (
    (current_setting('request.jwt.claims', true)::json->>'sub') IS NOT NULL
    AND tier_required = 'free'
  );

CREATE POLICY "content_items_select_mentee" ON content_items
  FOR SELECT USING (
    (current_setting('request.jwt.claims', true)::json->>'sub') IS NOT NULL
    AND tier_required = 'mentee'
    AND EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = current_setting('request.jwt.claims', true)::json->>'sub'
      AND profiles.tier = 'mentee'
    )
  );
