-- plataforma-runa foundation schema
-- profiles mirrors Clerk users; id is Clerk userId (text, not UUID)

CREATE TABLE profiles (
  id text PRIMARY KEY,
  email text UNIQUE NOT NULL,
  full_name text,
  tier text NOT NULL DEFAULT 'free',
  mentee_slug text UNIQUE,
  stripe_customer_id text,
  mentee_context jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT tier_values CHECK (tier IN ('free', 'mentee'))
);

CREATE TABLE subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_id text NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  stripe_subscription_id text UNIQUE,
  stripe_payment_intent_id text,
  tier text NOT NULL,
  status text NOT NULL DEFAULT 'active',
  amount_brl integer NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT sub_tier CHECK (tier IN ('mentee')),
  CONSTRAINT sub_status CHECK (status IN ('active', 'canceled', 'past_due'))
);

-- RLS: users can only read/update their own row
-- Service role bypasses RLS automatically when using SUPABASE_SERVICE_ROLE_KEY
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "user_read_own_profile" ON profiles
  FOR SELECT USING (id = current_setting('request.jwt.claims', true)::json->>'sub');

CREATE POLICY "user_update_own_profile" ON profiles
  FOR UPDATE USING (id = current_setting('request.jwt.claims', true)::json->>'sub')
  WITH CHECK (tier = (SELECT tier FROM profiles WHERE id = current_setting('request.jwt.claims', true)::json->>'sub'));

ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "user_read_own_subscriptions" ON subscriptions
  FOR SELECT USING (
    profile_id = current_setting('request.jwt.claims', true)::json->>'sub'
  );

-- updated_at trigger
CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER profiles_updated_at
  BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();
