-- profiles mirrors Clerk users; id is Clerk userId (text, not UUID)
-- Auth: Clerk JWT — policies use current_setting('request.jwt.claims') not auth.uid()

CREATE TABLE IF NOT EXISTS profiles (
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

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "profiles_select_own" ON profiles;
DROP POLICY IF EXISTS "user_read_own_profile" ON profiles;
CREATE POLICY "user_read_own_profile" ON profiles
  FOR SELECT USING (id = current_setting('request.jwt.claims', true)::json->>'sub');

DROP POLICY IF EXISTS "profiles_update_own" ON profiles;
DROP POLICY IF EXISTS "user_update_own_profile" ON profiles;
CREATE POLICY "user_update_own_profile" ON profiles
  FOR UPDATE USING (id = current_setting('request.jwt.claims', true)::json->>'sub')
  WITH CHECK (tier = (SELECT tier FROM profiles WHERE id = current_setting('request.jwt.claims', true)::json->>'sub'));

CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS profiles_updated_at ON profiles;
CREATE TRIGGER profiles_updated_at
  BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();
