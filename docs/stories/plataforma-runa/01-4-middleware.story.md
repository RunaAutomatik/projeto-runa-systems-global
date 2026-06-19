---
epic: "01"
story: "01-4"
title: "Middleware tier-gating — JWT publicMetadata reads, zero DB queries"
status: Done
type: feature
estimate: M
assignee: "@dev"
epic_file: "RUNA OS/wiki/analyses/epic-01-foundation.md"
prd: "RUNA OS/📐 Projetos/plataforma-runa-prd.md"
depends_on: "01-1, 01-3"
---

# Story 01-4 — Middleware: Tier Gating

## Context

This is the security core of the platform. The middleware runs before every page render and enforces tier access by reading Clerk's JWT `publicMetadata` — no Supabase calls, no latency. The `publicMetadata` is set by: Clerk webhook (on signup, tier='free') and Stripe webhook (on payment, tier='mentee').

## Acceptance Criteria

- [ ] `middleware.ts` created at `apps/plataforma-runa/middleware.ts`
- [ ] Explicit `matcher` — excludes `/entrar`, `/planos`, `/biblioteca`, `/admin`, `/_next`, `/api`, `/favicon.ico`
- [ ] **Zero Supabase calls in middleware** — reads only from Clerk JWT `publicMetadata`
- [ ] Free user (`tier=free`) accessing `/[mentee]/any-slug` → redirected to `/planos?upgrade=mentee`
- [ ] Mentee user accessing their own slug → allowed
- [ ] Mentee user accessing ANOTHER mentee's slug → redirected to `/planos?upgrade=mentee`
- [ ] Admin route: `userId !== ARTHUR_CLERK_USER_ID` → redirect to `/entrar`
- [ ] Unauthenticated user hitting any protected route → redirect to `/entrar?redirect=<original_path>`
- [ ] 9 middleware unit tests with Vitest (see test cases below)

## Implementation

```typescript
// apps/plataforma-runa/middleware.ts
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

const isPublicRoute = createRouteMatcher(['/', '/entrar(.*)', '/planos(.*)'])
const isBibliotecaRoute = createRouteMatcher(['/biblioteca(.*)'])
const isMenteeRoute = createRouteMatcher(['/:menteeSlug(.*)'])
const isAdminRoute = createRouteMatcher(['/admin(.*)'])

export default clerkMiddleware(async (auth, req) => {
  const { userId, sessionClaims } = await auth()
  const publicMetadata = sessionClaims?.public_metadata as {
    tier?: 'free' | 'mentee'
    menteeSlug?: string
  } | undefined

  // Public routes — allow all
  if (isPublicRoute(req)) return NextResponse.next()

  // Not authenticated → /entrar with redirect
  if (!userId) {
    const redirectUrl = new URL('/entrar', req.url)
    redirectUrl.searchParams.set('redirect', req.nextUrl.pathname)
    return NextResponse.redirect(redirectUrl)
  }

  // Admin gate
  if (isAdminRoute(req)) {
    if (userId !== process.env.ARTHUR_CLERK_USER_ID) {
      return NextResponse.redirect(new URL('/entrar', req.url))
    }
    return NextResponse.next()
  }

  // Biblioteca: requires any auth (for email capture)
  if (isBibliotecaRoute(req)) {
    return NextResponse.next() // userId already confirmed above
  }

  // Mentee routes: validate tier + slug match
  if (isMenteeRoute(req)) {
    const slugInUrl = req.nextUrl.pathname.split('/')[1]

    if (publicMetadata?.tier !== 'mentee') {
      return NextResponse.redirect(new URL('/planos?upgrade=mentee', req.url))
    }

    if (publicMetadata?.menteeSlug !== slugInUrl) {
      return NextResponse.redirect(new URL('/planos?upgrade=mentee', req.url))
    }

    return NextResponse.next()
  }

  return NextResponse.next()
})

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|api/).*)',
  ],
}
```

## Vitest Unit Tests (9 cases required)

```typescript
// __tests__/middleware.test.ts
describe('middleware tier-gating', () => {
  test('unauthenticated → /entrar with redirect param')
  test('free tier → /biblioteca allowed')
  test('free tier → /lucas-pesto/home → /planos?upgrade=mentee')
  test('mentee (own slug) → /lucas-pesto/home allowed')
  test('mentee (wrong slug) → /[other]/home → /planos?upgrade=mentee')
  test('admin user → /admin/dashboard allowed')
  test('non-admin user → /admin/dashboard → /entrar')
  test('public route / → allowed without auth')
  test('public route /planos → allowed without auth')
})
```

## Self-Healing Fallback (for Stripe webhook delay)

```typescript
// In any /[mentee]/ server component — NOT in middleware
// If Clerk publicMetadata.tier !== 'mentee' but user is authenticated,
// double-check Supabase before denying access:
const { data: profile } = await supabase.from('profiles')
  .select('tier, mentee_slug').eq('id', userId).single()

if (profile?.tier === 'mentee' && profile?.mentee_slug === params.mentee) {
  // Stripe webhook fired, Clerk not yet updated → update Clerk now
  await clerkClient.users.updateUserMetadata(userId, {
    publicMetadata: { tier: 'mentee', menteeSlug: profile.mentee_slug }
  })
  // Continue rendering
}
```

## File List

- `apps/plataforma-runa/middleware.ts`
- `apps/plataforma-runa/__tests__/middleware.test.ts`
- `apps/plataforma-runa/vitest.config.ts`

## Verification

```bash
npm run test  # all 9 middleware tests pass
# Manual:
# 1. Free user hits /lucas-pesto/home → lands on /planos?upgrade=mentee
# 2. Lucas Pesto (mentee) hits /lucas-pesto/home → allowed
# 3. Lucas Pesto hits /maria-silv/home → lands on /planos?upgrade=mentee
# 4. Non-Arthur hits /admin → lands on /entrar
```
