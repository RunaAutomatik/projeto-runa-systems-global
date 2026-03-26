-- =============================================================
-- Migration: 20260324000001_hook_intelligence_schema.sql
-- Project:   Runa Systems Global — Hook Intelligence Database
-- Author:    Dara (@data-engineer)
-- Date:      2026-03-24
-- PRD:       SÍRIOS/⚙️ Workflows N8N/hook-scraper-weekly/PRD.md
-- =============================================================

-- =============================================================
-- ENUMS
-- =============================================================

CREATE TYPE hook_format AS ENUM (
  'reel',
  'carousel',
  'feed',
  'video',     -- YouTube
  'stories'
);

CREATE TYPE hook_type AS ENUM (
  'attack',          -- Attacks a belief/market behavior
  'contradiction',   -- Counter-intuitive paradox
  'manifesto',       -- Declaration of worldview
  'reveal',          -- Insider knowledge the market hides
  'mirror',          -- Reflects audience exact pain/desire
  'question',        -- Direct provocative question
  'curiosity_gap',   -- Open loop demanding resolution
  'social_proof'     -- Result used as hook
);

CREATE TYPE hook_tone AS ENUM (
  'provocativo',     -- Polarizes, triggers amygdala
  'polarizador',     -- Creates explicit in-group / out-group
  'filosofico',      -- Educational with density (Sarah Seller style)
  'autoritario',     -- Power statement, no explanation
  'emocional'        -- Activates pain/desire directly
);

CREATE TYPE account_source AS ENUM (
  'own',        -- @arthsystems_ — full Meta API metrics
  'reference'   -- Tracked creators — public metrics only
);

CREATE TYPE ingestion_status AS ENUM (
  'success',
  'partial',
  'failed'
);

-- =============================================================
-- TABLE: tracked_accounts
-- Registry of all Instagram/YouTube accounts being scraped
-- =============================================================

CREATE TABLE tracked_accounts (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  handle          TEXT NOT NULL,
  platform        TEXT NOT NULL CHECK (platform IN ('instagram', 'youtube')),
  source_type     account_source NOT NULL DEFAULT 'reference',
  profile_url     TEXT,
  niche           TEXT,
  language        TEXT DEFAULT 'pt',
  follower_count  INT,
  is_active       BOOLEAN NOT NULL DEFAULT true,
  last_synced_at  TIMESTAMPTZ,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT now(),

  CONSTRAINT tracked_accounts_handle_platform_unique UNIQUE (handle, platform)
);

COMMENT ON TABLE tracked_accounts IS 'Registry of Instagram and YouTube creators tracked for hook intelligence.';
COMMENT ON COLUMN tracked_accounts.source_type IS 'own = full metrics via Meta API; reference = public metrics only';
COMMENT ON COLUMN tracked_accounts.is_active IS 'Set to false for inactive accounts (no posts in 60+ days)';

-- =============================================================
-- TABLE: hooks
-- Core table — extracted hooks with LLM classification
-- =============================================================

CREATE TABLE hooks (
  id                       UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  account_id               UUID NOT NULL REFERENCES tracked_accounts(id) ON DELETE RESTRICT,

  -- Source identification (deduplication key)
  post_id                  TEXT NOT NULL,                 -- Instagram post ID or YouTube video ID
  post_url                 TEXT,
  platform                 TEXT NOT NULL CHECK (platform IN ('instagram', 'youtube')),

  -- Hook content
  hook_text                TEXT NOT NULL,                 -- Extracted first line / title
  full_caption             TEXT,                          -- Full caption or description (first 500 chars)
  format                   hook_format,

  -- Classification (LLM via Claude Haiku)
  hook_type                hook_type,
  tone                     hook_tone,
  auto_classified          BOOLEAN NOT NULL DEFAULT false,
  classification_confidence FLOAT CHECK (classification_confidence BETWEEN 0.0 AND 1.0),

  -- Metadata
  niche                    TEXT,
  posted_at                TIMESTAMPTZ,
  created_at               TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at               TIMESTAMPTZ NOT NULL DEFAULT now(),

  CONSTRAINT hooks_post_id_platform_unique UNIQUE (post_id, platform)
);

COMMENT ON TABLE hooks IS 'Extracted hooks from Instagram posts and YouTube videos, classified by type and tone.';
COMMENT ON COLUMN hooks.hook_text IS 'First line of caption (Instagram) or full video title (YouTube).';
COMMENT ON COLUMN hooks.auto_classified IS 'true = classified by Claude Haiku; false = manually classified by Arthur.';
COMMENT ON COLUMN hooks.classification_confidence IS '0.0–1.0 confidence score from LLM classification.';

-- =============================================================
-- TABLE: hook_performances
-- Engagement metrics per hook (one-to-one with hooks)
-- =============================================================

CREATE TABLE hook_performances (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  hook_id         UUID NOT NULL UNIQUE REFERENCES hooks(id) ON DELETE CASCADE,

  -- Engagement metrics
  likes           INT NOT NULL DEFAULT 0,
  comments        INT NOT NULL DEFAULT 0,
  saves           INT,          -- NULL for reference accounts (not accessible via public API)
  shares          INT,          -- NULL for reference accounts
  views           INT,          -- Available for reels and YouTube
  reach           INT,          -- NULL for reference accounts (Meta API own account only)

  -- Computed ratios (GENERATED — always accurate, zero application cost)
  engagement_rate FLOAT GENERATED ALWAYS AS (
    CASE
      WHEN COALESCE(reach, 0) > 0
      THEN (COALESCE(likes, 0) + COALESCE(comments, 0) + COALESCE(saves, 0))::float / reach
      ELSE NULL
    END
  ) STORED,

  save_rate       FLOAT GENERATED ALWAYS AS (
    CASE
      WHEN COALESCE(reach, 0) > 0 AND saves IS NOT NULL
      THEN saves::float / reach
      ELSE NULL
    END
  ) STORED,

  comment_rate    FLOAT GENERATED ALWAYS AS (
    CASE
      WHEN COALESCE(views, likes, 0) > 0
      THEN comments::float / GREATEST(COALESCE(views, 0), COALESCE(likes, 0))
      ELSE NULL
    END
  ) STORED,

  fetched_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

COMMENT ON TABLE hook_performances IS 'Engagement metrics for each hook. One-to-one with hooks table.';
COMMENT ON COLUMN hook_performances.saves IS 'NULL for reference accounts — only available via Meta Graph API for own account.';
COMMENT ON COLUMN hook_performances.engagement_rate IS 'GENERATED: (likes+comments+saves)/reach. NULL when reach unavailable.';
COMMENT ON COLUMN hook_performances.save_rate IS 'GENERATED: saves/reach. Primary quality signal for evergreen content.';
COMMENT ON COLUMN hook_performances.comment_rate IS 'GENERATED: comments/views (YouTube) or comments/likes (Instagram reference).';

-- =============================================================
-- TABLE: hook_patterns
-- Manually curated templates promoted from high-performing hooks
-- =============================================================

CREATE TABLE hook_patterns (
  id                    UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name                  TEXT NOT NULL,

  -- Template (abstract formula extracted from hooks)
  pattern_template      TEXT NOT NULL,   -- e.g., "Você [faz X] mas ainda [sofre Y]?"
  description           TEXT,

  -- Classification (same taxonomy as hooks)
  hook_type             hook_type,
  tone                  hook_tone,

  -- Aggregated performance (updated when new examples added)
  avg_engagement_rate   FLOAT,
  total_examples        INT NOT NULL DEFAULT 1,

  -- Origin
  source_hook_id        UUID REFERENCES hooks(id) ON DELETE SET NULL,

  -- Status
  is_active             BOOLEAN NOT NULL DEFAULT true,

  created_at            TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at            TIMESTAMPTZ NOT NULL DEFAULT now()
);

COMMENT ON TABLE hook_patterns IS 'Manually curated hook patterns promoted by Arthur from high-performing hooks. Used by FREYJA for content generation.';
COMMENT ON COLUMN hook_patterns.pattern_template IS 'Abstract formula with placeholders, e.g. "Você [faz X] mas ainda [sofre Y]?"';
COMMENT ON COLUMN hook_patterns.source_hook_id IS 'The original hook that inspired this pattern.';

-- =============================================================
-- TABLE: hook_pattern_examples
-- N:N — hooks that match a pattern (evidence collection)
-- =============================================================

CREATE TABLE hook_pattern_examples (
  pattern_id  UUID NOT NULL REFERENCES hook_patterns(id) ON DELETE CASCADE,
  hook_id     UUID NOT NULL REFERENCES hooks(id) ON DELETE CASCADE,
  added_at    TIMESTAMPTZ NOT NULL DEFAULT now(),

  PRIMARY KEY (pattern_id, hook_id)
);

COMMENT ON TABLE hook_pattern_examples IS 'Links hooks to patterns they exemplify. Multiple hooks can match one pattern.';

-- =============================================================
-- TABLE: ingestion_logs
-- Audit trail for every scraping run
-- =============================================================

CREATE TABLE ingestion_logs (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  account_id      UUID REFERENCES tracked_accounts(id) ON DELETE SET NULL,
  platform        TEXT CHECK (platform IN ('instagram', 'youtube', 'all')),
  posts_fetched   INT NOT NULL DEFAULT 0,
  posts_new       INT NOT NULL DEFAULT 0,
  posts_skipped   INT NOT NULL DEFAULT 0,   -- duplicates
  status          ingestion_status NOT NULL DEFAULT 'success',
  error_message   TEXT,
  run_at          TIMESTAMPTZ NOT NULL DEFAULT now()
);

COMMENT ON TABLE ingestion_logs IS 'Audit log for every n8n scraping run. One row per account per run.';

-- =============================================================
-- INDEXES — Access pattern driven
-- =============================================================

-- hooks: primary query patterns
CREATE INDEX idx_hooks_account_id       ON hooks (account_id);
CREATE INDEX idx_hooks_hook_type        ON hooks (hook_type);
CREATE INDEX idx_hooks_tone             ON hooks (tone);
CREATE INDEX idx_hooks_platform         ON hooks (platform);
CREATE INDEX idx_hooks_posted_at        ON hooks (posted_at DESC);
CREATE INDEX idx_hooks_auto_classified  ON hooks (auto_classified) WHERE auto_classified = false;

-- hook_performances: ranking queries
CREATE INDEX idx_performances_hook_id   ON hook_performances (hook_id);
CREATE INDEX idx_performances_comments  ON hook_performances (comments DESC);
CREATE INDEX idx_performances_likes     ON hook_performances (likes DESC);

-- hook_patterns: FREYJA lookups
CREATE INDEX idx_patterns_hook_type     ON hook_patterns (hook_type);
CREATE INDEX idx_patterns_tone          ON hook_patterns (tone);
CREATE INDEX idx_patterns_is_active     ON hook_patterns (is_active) WHERE is_active = true;

-- ingestion_logs: monitoring
CREATE INDEX idx_ingestion_logs_run_at  ON ingestion_logs (run_at DESC);
CREATE INDEX idx_ingestion_logs_status  ON ingestion_logs (status);

-- tracked_accounts: lookup
CREATE INDEX idx_tracked_accounts_platform ON tracked_accounts (platform);
CREATE INDEX idx_tracked_accounts_active   ON tracked_accounts (is_active) WHERE is_active = true;

-- =============================================================
-- UPDATED_AT TRIGGER
-- =============================================================

CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_tracked_accounts_updated_at
  BEFORE UPDATE ON tracked_accounts
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER trg_hooks_updated_at
  BEFORE UPDATE ON hooks
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER trg_hook_patterns_updated_at
  BEFORE UPDATE ON hook_patterns
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- =============================================================
-- ROW LEVEL SECURITY
-- =============================================================

ALTER TABLE tracked_accounts        ENABLE ROW LEVEL SECURITY;
ALTER TABLE hooks                   ENABLE ROW LEVEL SECURITY;
ALTER TABLE hook_performances       ENABLE ROW LEVEL SECURITY;
ALTER TABLE hook_patterns           ENABLE ROW LEVEL SECURITY;
ALTER TABLE hook_pattern_examples   ENABLE ROW LEVEL SECURITY;
ALTER TABLE ingestion_logs          ENABLE ROW LEVEL SECURITY;

-- Authenticated users (Arthur, agents with anon key) → SELECT only
CREATE POLICY "authenticated_select_tracked_accounts"
  ON tracked_accounts FOR SELECT TO authenticated USING (true);

CREATE POLICY "authenticated_select_hooks"
  ON hooks FOR SELECT TO authenticated USING (true);

CREATE POLICY "authenticated_select_hook_performances"
  ON hook_performances FOR SELECT TO authenticated USING (true);

CREATE POLICY "authenticated_select_hook_patterns"
  ON hook_patterns FOR SELECT TO authenticated USING (true);

CREATE POLICY "authenticated_select_hook_pattern_examples"
  ON hook_pattern_examples FOR SELECT TO authenticated USING (true);

CREATE POLICY "authenticated_select_ingestion_logs"
  ON ingestion_logs FOR SELECT TO authenticated USING (true);

-- Note: service_role bypasses RLS — n8n uses service_role for all writes
-- No explicit service_role policies needed (bypassed by default in Supabase)
