---
date: 2026-05-15
type: epic
epic_id: "04"
title: Admin Panel + Stripe — Arthur manages everything; payments automated
status: blocked-by-epic-01
phase: 4
weeks: "8–10"
project: plataforma-runa
prd: "[[plataforma-runa-prd]]"
---

# Epic 04 — Admin + Stripe

> Arthur can manage everything from within the platform; new mentee payments fully automated.
> **Gate:** Epic 01 Done. Epic 02 + 03 ideally Done (admin CMS depends on content_items; Lucas migration depends on admin panel).

---

## Goal

A person pays R$7.000 via Stripe → automatically gets mentee access → Arthur sees them in the admin panel → can upload their first deliverable without touching Supabase directly.

## Success Criteria

- [ ] `/admin/dashboard` — overview: active mentees, upcoming sessions, revenue
- [ ] `/admin/mentorados` — mentee list + status table
- [ ] `/admin/mentorados/[id]` — mentee management: upload deliverable, mark session complete, notes
- [ ] `/admin/conteudo` — content CMS: add/edit YouTube URLs + metadata + tier assignment
- [ ] Stripe: R$7.000 one-time payment (Checkout Session) — launch price: R$4.000 via coupon code
- [ ] Stripe webhook → Supabase `profiles.tier = 'mentee'` + Clerk `publicMetadata.tier = 'mentee'`
- [ ] Onboarding email (Resend) sent automatically after tier upgrade
- [ ] Scripted intake form in `/admin/mentorados/[id]` — saves to `mentee_context jsonb`
- [ ] Analytics: MRR display (Stripe data), sessions completed count

---

## Stories in this Epic (to be drafted by @sm — only after Epic 01 Done)

| Story | Title | Estimate |
|-------|-------|----------|
| 04-1 | `/admin` layout + auth gate (`ARTHUR_CLERK_USER_ID`) + dashboard shell | S |
| 04-2 | `/admin/mentorados` — mentee list table with status | M |
| 04-3 | `/admin/mentorados/[id]` — mentee detail: session management + deliverable upload | L |
| 04-4 | Bunny.net video upload from admin (direct upload via Bunny.net API) | M |
| 04-5 | Scripted intake form — one-question-at-a-time, saves to `mentee_context jsonb` | M |
| 04-6 | `/admin/conteudo` — content CMS (add/edit/publish content_items) | M |
| 04-7 | Stripe integration — Checkout Session + R$7.000 product + R$4.000 coupon | M |
| 04-8 | Stripe webhook — signature verification + profiles sync + Clerk metadata update | M |
| 04-9 | Resend onboarding email — triggered by Stripe webhook on tier upgrade | S |
| 04-10 | Lucas Pesto data migration — 9 sessions + deliverables (if deferred from Epic 03) | M |

---

## Critical Architecture Notes

### Stripe Checkout Flow (Story 04-7)

```typescript
// /api/checkout/route.ts
const session = await stripe.checkout.sessions.create({
  mode: 'payment',
  line_items: [{ price: process.env.STRIPE_PRICE_ID_MENTORIA, quantity: 1 }],
  // R$4.000 launch price via coupon: LANCA2026
  allow_promotion_codes: true,
  success_url: `${origin}/pagamento/sucesso?session_id={CHECKOUT_SESSION_ID}`,
  cancel_url: `${origin}/planos`,
  metadata: { clerk_user_id: userId },
})
```

### Stripe Webhook (Story 04-8) — CRITICAL: 3-way sync

```typescript
// /api/webhooks/stripe/route.ts
// 1. Verify signature (REQUIRED)
const event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!)

// 2. On checkout.session.completed:
const userId = event.data.object.metadata.clerk_user_id
const menteeSlug = generateSlug(userEmail) // deterministic

// 3. Update Supabase
await supabase.from('profiles').update({ tier: 'mentee', mentee_slug: menteeSlug })
  .eq('id', userId)

// 4. Update Clerk publicMetadata (so middleware works without DB queries)
await clerkClient.users.updateUserMetadata(userId, {
  publicMetadata: { tier: 'mentee', menteeSlug }
})

// 5. Trigger onboarding email via Resend
// 6. Insert into subscriptions table
```

Self-healing on protected routes: if `publicMetadata.tier !== 'mentee'` but Supabase confirms `tier=mentee` → update Clerk + allow access. Handles webhook delivery delays.

### Scripted Intake Form (Story 04-5)

One-question-at-a-time UI (no LLM). Questions sourced from:
1. ORION `*runa-intake` 7 questions
2. Four Cs: Capacidade, Capital, Comprometimento, Clareza

Form state: React `useState` stepping through questions array. On completion: `PATCH /api/mentee/[id]/intake` → saves to `profiles.mentee_context jsonb`.

### Bunny.net Video Upload (Story 04-4)

Arthur uploads from `/admin/mentorados/[id]/sessoes/[n]`:
```
Admin UI → POST /api/admin/upload-video → creates Bunny.net video via API
         → returns bunny_video_id → stored in sessions.bunny_video_id
         → (direct browser→Bunny upload via TUS protocol, no server proxying for large files)
```

### Resend Email (Story 04-9)

```typescript
// Triggered from Stripe webhook after tier upgrade
await resend.emails.send({
  from: 'arthur@runa.ai',
  to: menteeEmail,
  subject: 'Bem-vindo ao RUNA OS',
  react: OnboardingEmail({ menteeSlug, firstName }),
})
```

---

## Environment Variables Required (all phases)

```bash
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
CLERK_WEBHOOK_SECRET=
ARTHUR_CLERK_USER_ID=

# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
STRIPE_PRICE_ID_MENTORIA=

# Bunny.net
BUNNY_LIBRARY_ID=
BUNNY_API_KEY=
BUNNY_SECURITY_KEY=

# Resend
RESEND_API_KEY=

# App
NEXT_PUBLIC_APP_URL=
```

---

## Dependencies

- **Blocking:** Epic 01 Done
- **External:** Stripe account, product created (R$7.000 price), webhook configured
- **External:** Resend account + domain verified
- **External:** Bunny.net Stream library created
- **Depends on Epic 02:** `/admin/conteudo` manages content_items from Epic 02
- **Depends on Epic 03:** Lucas migration uses admin panel from this Epic
