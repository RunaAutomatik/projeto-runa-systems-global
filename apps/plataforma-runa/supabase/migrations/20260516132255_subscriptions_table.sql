-- subscriptions tracks Stripe recurring subscriptions linked to a profile
-- Auth: Clerk JWT — profile_id matches Clerk userId

CREATE TABLE IF NOT EXISTS subscriptions (
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

ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "mentees view own subscription" ON subscriptions;
DROP POLICY IF EXISTS "user_read_own_subscriptions" ON subscriptions;
CREATE POLICY "user_read_own_subscriptions" ON subscriptions
  FOR SELECT USING (
    profile_id = current_setting('request.jwt.claims', true)::json->>'sub'
  );
