---
date: 2026-05-15
type: epic
epic_id: "01"
title: Foundation — Auth + Tier Gating + Shell Dashboard
status: ready-for-stories
phase: 1
weeks: "1–2"
project: plataforma-runa
prd: "[[plataforma-runa-prd]]"
---

# Epic 01 — Foundation

> Auth + tier gating + shell dashboard working end-to-end.
> **Gate:** Epic 02 does NOT start until all Stories in Epic 01 are Done.

---

## Goal

Arthur can create a mentee profile in Supabase, that mentee logs in with Clerk, sees their personalized dashboard shell, and is blocked from other mentee routes. All tier gates are functional. Admin route is locked to Arthur.

## Success Criteria

- [ ] `npm run dev` in `apps/plataforma-runa/` serves the app without errors
- [ ] Clerk login works: Google + email magic link
- [ ] A test user with `tier=free` accesses `/biblioteca` and is blocked from `/[mentee]/lucas-pesto`
- [ ] A mentee with `tier=mentee` + `menteeSlug=lucas-pesto` accesses `/lucas-pesto/home`
- [ ] A mentee hitting `/[mentee]/another-mentee` is redirected to `/planos`
- [ ] Arthur's `userId` accesses `/admin` — any other user is redirected to `/entrar`
- [ ] Free user hitting any `/[mentee]/` route sees `/planos?upgrade=mentee`

---

## Stories in this Epic (to be drafted by @sm)

| Story | Title | Estimate |
|-------|-------|----------|
| 01-1 | Scaffold `apps/plataforma-runa/` — Next.js 15 + TS + Tailwind + shadcn | S |
| 01-2 | Supabase schema migration — `profiles` + `subscriptions` tables + RLS | M |
| 01-3 | Clerk auth setup — providers + Clerk→Supabase webhook with signature verification | M |
| 01-4 | Middleware tier-gating — matcher + publicMetadata JWT reads (no DB queries) | M |
| 01-5 | Shell pages — `/entrar`, `/planos`, `/` (placeholder landing) | S |
| 01-6 | `/[mentee]/home` shell — profile card + placeholder sections (mentee-gated) | S |
| 01-7 | Admin gate — `/admin` locked to `ARTHUR_CLERK_USER_ID` env var | S |

---

## Critical Architecture Notes (from Engineering Review)

### Middleware (Story 01-4) — mandatory constraints

```typescript
// Explicit matcher — prevents /[mentee]/ from capturing known routes
export const config = {
  matcher: ['/((?!_next|api|favicon.ico|entrar|planos|biblioteca|admin|\\.).*)',],
}
// Reads from Clerk JWT publicMetadata — ZERO Supabase calls in middleware
// publicMetadata shape: { tier: 'free' | 'mentee' | 'admin', menteeSlug: string }
// Admin: validate userId === process.env.ARTHUR_CLERK_USER_ID
// Mentee: validate params.mentee === publicMetadata.menteeSlug
```

### Clerk Webhook (Story 01-3) — mandatory security

```typescript
// MUST verify svix signature before processing
import { Webhook } from 'svix'
const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET!)
wh.verify(rawBody, svixHeaders) // throws if invalid
// On user.created → upsert profiles with tier='free'
// On user.updated → sync email/name changes
```

### Supabase RLS (Story 01-2) — must be written, not commented

```sql
-- profiles: user sees only own row; service role sees all
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "users_own_profile" ON profiles
  FOR ALL USING (auth.uid()::text = id::text);

-- Admin bypass via service role key (used in webhook routes only)
```

### Supabase Client Pattern (all Stories)

```typescript
// ALWAYS use @supabase/ssr — NOT @supabase/auth-helpers-nextjs
import { createServerClient } from '@supabase/ssr'
```

---

## Dependencies

- **Blocking Epic 02:** Epic 01 Done
- **External:** Clerk account created, project configured
- **External:** Supabase project confirmed (already exists at root)
- **External:** `ARTHUR_CLERK_USER_ID` env var set (Arthur's Clerk userId)
- **External:** `CLERK_WEBHOOK_SECRET` set after configuring webhook in Clerk dashboard
- **No Stripe yet** — Phase 4 only

---

## Out of Scope for Epic 01

- Stripe payments (Epic 04)
- Bunny.net video (Epic 03)
- Content library (Epic 02)
- Admin CRUD (Epic 04)
- Email sequences (Epic 04)
