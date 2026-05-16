---
epic: "01"
story: "01-3"
title: "Clerk auth + Clerk→Supabase webhook with signature verification"
status: Done
type: feature
estimate: M
assignee: "@dev"
epic_file: "RUNA OS/wiki/analyses/epic-01-foundation.md"
prd: "RUNA OS/📐 Projetos/plataforma-runa-prd.md"
depends_on: "01-1, 01-2"
---

# Story 01-3 — Clerk Auth + Webhook

## Context

Clerk is the auth provider. When a user signs up or updates their profile, a Clerk webhook fires to `/api/webhooks/clerk`. The webhook creates or updates the `profiles` row in Supabase. This is the source-of-truth sync between Clerk and Supabase.

## Acceptance Criteria

- [ ] Clerk SDK installed: `@clerk/nextjs`
- [ ] `ClerkProvider` wrapping the root layout
- [ ] `/entrar` page using Clerk's `<SignIn />` component (Google + email magic link)
- [ ] Webhook route at `app/api/webhooks/clerk/route.ts`
- [ ] **Signature verification with `svix` — mandatory, no bypass**
- [ ] `user.created` event → upsert `profiles` row (tier='free')
- [ ] `user.updated` event → sync email + full_name changes
- [ ] Webhook handles duplicate events idempotently (upsert, not insert)
- [ ] `CLERK_WEBHOOK_SECRET` env var documented in `.env.local.example`
- [ ] After Google login: user redirected to `/biblioteca` (free tier)

## Implementation

```typescript
// app/api/webhooks/clerk/route.ts
import { Webhook } from 'svix'
import { createClient } from '@supabase/ssr'

export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET
  if (!WEBHOOK_SECRET) throw new Error('CLERK_WEBHOOK_SECRET not set')

  const svix_id = req.headers.get('svix-id')
  const svix_timestamp = req.headers.get('svix-timestamp')
  const svix_signature = req.headers.get('svix-signature')
  const body = await req.text()

  const wh = new Webhook(WEBHOOK_SECRET)
  let evt: WebhookEvent
  try {
    evt = wh.verify(body, {
      'svix-id': svix_id!,
      'svix-timestamp': svix_timestamp!,
      'svix-signature': svix_signature!,
    }) as WebhookEvent
  } catch {
    return new Response('Invalid signature', { status: 400 })
  }

  const supabase = createAdminClient() // service role

  if (evt.type === 'user.created' || evt.type === 'user.updated') {
    const { id, email_addresses, first_name, last_name } = evt.data
    const email = email_addresses[0]?.email_address
    const full_name = [first_name, last_name].filter(Boolean).join(' ')

    await supabase.from('profiles').upsert({
      id,
      email,
      full_name,
      tier: 'free', // always 'free' on create; Stripe webhook upgrades to 'mentee'
    }, { onConflict: 'id', ignoreDuplicates: false })
  }

  return new Response('OK', { status: 200 })
}
```

## Env Vars Added

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_live_...
CLERK_SECRET_KEY=sk_live_...
CLERK_WEBHOOK_SECRET=whsec_...
```

## Testing (local webhook forwarding)

```bash
# Forward Clerk webhooks to localhost during development
npx clerk-dev-server  # or use ngrok / Stripe CLI equivalent for Clerk
# Or use Clerk dashboard → Webhooks → test events
```

## File List

- `apps/plataforma-runa/app/layout.tsx` (updated — add ClerkProvider)
- `apps/plataforma-runa/app/(public)/entrar/page.tsx`
- `apps/plataforma-runa/app/api/webhooks/clerk/route.ts`
- `apps/plataforma-runa/lib/supabase/admin.ts` (service role client)
- `apps/plataforma-runa/lib/supabase/server.ts` (@supabase/ssr pattern)
- `apps/plataforma-runa/lib/supabase/client.ts` (browser client)

## Verification

```bash
# 1. Sign up with Google
# 2. Check Supabase → profiles table has new row with tier='free'
# 3. Check webhook logs in Clerk dashboard → status 200
# 4. Test signature rejection: send POST with wrong svix-signature → 400
```
