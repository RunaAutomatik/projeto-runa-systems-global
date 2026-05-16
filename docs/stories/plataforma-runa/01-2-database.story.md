---
epic: "01"
story: "01-2"
title: "Supabase schema migration — profiles + subscriptions tables + RLS"
status: Done
type: feature
estimate: M
assignee: "@data-engineer"
epic_file: "RUNA OS/wiki/analyses/epic-01-foundation.md"
prd: "RUNA OS/📐 Projetos/plataforma-runa-prd.md"
depends_on: "01-1"
---

# Story 01-2 — Supabase Schema: profiles + subscriptions + RLS

## Context

The existing Supabase project at root has one migration (`20260324000001_hook_intelligence_schema.sql`) for an unrelated feature. This story adds the `plataforma-runa` tables in a new migration file. The Supabase project is shared — existing tables are not touched.

## Acceptance Criteria

- [ ] Migration file created at `supabase/migrations/20260515000001_plataforma_runa_foundation.sql`
- [ ] `profiles` table created with correct schema (id as Clerk userId text, not UUID)
- [ ] `subscriptions` table created
- [ ] RLS enabled on both tables with explicit policies (not comments)
- [ ] Service role bypass documented in migration
- [ ] `supabase db push` applies without errors
- [ ] Supabase local: a free user cannot read another user's profile row
- [ ] Supabase local: service role can read all rows (for webhook routes)

## Schema

```sql
-- profiles: mirrors Clerk users
CREATE TABLE profiles (
  id text PRIMARY KEY,              -- Clerk user_id (e.g. "user_2abc123")
  email text UNIQUE NOT NULL,
  full_name text,
  tier text NOT NULL DEFAULT 'free',  -- 'free' | 'mentee'
  mentee_slug text UNIQUE,
  stripe_customer_id text,
  mentee_context jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT tier_values CHECK (tier IN ('free', 'mentee'))
);

-- subscriptions
CREATE TABLE subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_id text NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  stripe_subscription_id text UNIQUE,
  stripe_payment_intent_id text,
  tier text NOT NULL,
  status text NOT NULL DEFAULT 'active',
  amount_brl integer NOT NULL,        -- in centavos (700000 = R$7.000)
  created_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT sub_tier CHECK (tier IN ('mentee')),
  CONSTRAINT sub_status CHECK (status IN ('active', 'canceled', 'past_due'))
);
```

## RLS Policies (must be written, not commented)

```sql
-- profiles
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "user_read_own_profile" ON profiles
  FOR SELECT USING (id = current_setting('request.jwt.claims', true)::json->>'sub');

CREATE POLICY "user_update_own_profile" ON profiles
  FOR UPDATE USING (id = current_setting('request.jwt.claims', true)::json->>'sub')
  WITH CHECK (tier = (SELECT tier FROM profiles WHERE id = current_setting('request.jwt.claims', true)::json->>'sub'));
-- Note: tier updates ONLY via service role (webhook) — users cannot self-upgrade

-- Service role bypass (automatic in Supabase when using service role key)

-- subscriptions
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "user_read_own_subscriptions" ON subscriptions
  FOR SELECT USING (
    profile_id = current_setting('request.jwt.claims', true)::json->>'sub'
  );
```

## Note on Clerk JWT Integration

Supabase RLS policies use `request.jwt.claims` to read the Clerk JWT sub (= Clerk userId). This requires Supabase JWT configuration to trust Clerk's JWKS. Configure in Supabase dashboard → Authentication → JWT Secret → add Clerk JWKS URL.

## File List

- `supabase/migrations/20260515000001_plataforma_runa_foundation.sql`

## Verification

```bash
supabase db push
# → Applied 1 migration

# Test RLS isolation:
supabase start
# User A reads User B's profile → should return empty result (RLS blocks)
# Service role reads all → returns all rows
```
