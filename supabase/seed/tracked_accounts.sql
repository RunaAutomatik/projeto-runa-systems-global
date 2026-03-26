-- =============================================================
-- Seed: tracked_accounts
-- Source: SÍRIOS/📚 Referências/creator-tracking-list.md
-- Date:   2026-03-24
-- Safe to re-run: ON CONFLICT DO NOTHING
-- =============================================================

INSERT INTO tracked_accounts (handle, platform, source_type, profile_url, niche, language)
VALUES

  -- =========================================================
  -- OWN ACCOUNT
  -- =========================================================
  ('arthsystems_', 'instagram', 'own',
   'https://www.instagram.com/arthsystems_/', 'ai_systems_alto_ticket', 'pt'),

  -- =========================================================
  -- INSTAGRAM REFERENCE ACCOUNTS
  -- =========================================================
  ('byjoeym', 'instagram', 'reference',
   'https://www.instagram.com/byjoeym/', NULL, 'en'),

  ('pedrovaleriolopez', 'instagram', 'reference',
   'https://www.instagram.com/pedrovaleriolopez/', NULL, 'pt'),

  ('dougdemarco_', 'instagram', 'reference',
   'https://www.instagram.com/dougdemarco_/', 'ai_systems_alto_ticket', 'pt'),

  ('franklim.gui', 'instagram', 'reference',
   'https://www.instagram.com/franklim.gui/', NULL, 'pt'),

  ('thegrowthceo', 'instagram', 'reference',
   'https://www.instagram.com/thegrowthceo/', 'growth_founders', 'en'),

  ('chase.h.ai', 'instagram', 'reference',
   'https://www.instagram.com/chase.h.ai/', 'ai_business', 'en'),

  ('thevibefounder', 'instagram', 'reference',
   'https://www.instagram.com/thevibefounder/', 'founder_lifestyle', 'en'),

  ('godofprompt', 'instagram', 'reference',
   'https://www.instagram.com/godofprompt/', 'ai_prompts', 'en'),

  ('philipisberg', 'instagram', 'reference',
   'https://www.instagram.com/philipisberg/', NULL, 'pt'),

  ('daniel.avell', 'instagram', 'reference',
   'https://www.instagram.com/daniel.avell/', NULL, 'pt'),

  ('stevearnesonofficial', 'instagram', 'reference',
   'https://www.instagram.com/stevearnesonofficial/', NULL, 'en'),

  ('noevarner.ai', 'instagram', 'reference',
   'https://www.instagram.com/noevarner.ai/', 'ai_business', 'en'),

  ('nateherkai', 'instagram', 'reference',
   'https://www.instagram.com/nateherkai/', 'ai_business', 'en'),

  -- =========================================================
  -- YOUTUBE CHANNELS
  -- =========================================================
  ('nateherk', 'youtube', 'reference',
   'https://www.youtube.com/@nateherk', 'ai_business_automation', 'en'),

  ('oalanicolas', 'youtube', 'reference',
   'https://www.youtube.com/@oalanicolas', NULL, 'pt'),

  ('jovensdenegocios', 'youtube', 'reference',
   'https://www.youtube.com/@jovensdenegocios', 'business_jovens', 'pt'),

  ('horadenegocios', 'youtube', 'reference',
   'https://www.youtube.com/@horadenegocios', 'business', 'pt'),

  ('Academia.Lendaria', 'youtube', 'reference',
   'https://www.youtube.com/@Academia.Lendaria', 'alto_ticket', 'pt'),

  ('Chase-H-AI', 'youtube', 'reference',
   'https://www.youtube.com/@Chase-H-AI', 'ai_automation', 'en'),

  ('danmartell', 'youtube', 'reference',
   'https://www.youtube.com/@danmartell', 'saas_founders', 'en'),

  ('BenAI92', 'youtube', 'reference',
   'https://www.youtube.com/@BenAI92', 'ai_business', 'en'),

  ('Itssssss_Jack', 'youtube', 'reference',
   'https://www.youtube.com/@Itssssss_Jack', NULL, 'en')

ON CONFLICT (handle, platform) DO NOTHING;
