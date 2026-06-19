---
epic: "01"
story: "01-5"
title: "Shell pages — /entrar (Clerk SignIn), /planos (pricing placeholder), / (root placeholder)"
status: Done
type: feature
estimate: S
assignee: "@dev"
epic_file: "RUNA OS/wiki/analyses/epic-01-foundation.md"
prd: "RUNA OS/📐 Projetos/plataforma-runa-prd.md"
depends_on: "01-1, 01-3, 01-4"
---

# Story 01-5 — Shell Pages: /entrar, /planos, /

## Context

Three public routes must exist before any mentee work begins. `/entrar` is the auth entry point (Clerk `<SignIn />`). `/planos` is the upgrade wall — every tier-gated redirect lands here. `/` is the root placeholder (will become the marketing landing or redirect). None of these routes are gated by the middleware because they are in the public matcher exclusion list.

## Acceptance Criteria

- [ ] `/entrar` page renders Clerk `<SignIn />` (Google + email magic link)
- [ ] After successful login, Clerk redirects to `/biblioteca` (free tier default)
- [ ] `/planos` page renders pricing placeholder with `?upgrade=mentee` query param awareness
- [ ] `/planos?upgrade=mentee` shows a highlighted "Mentee" plan card (static, no Stripe yet)
- [ ] `/` root renders a placeholder page with custom dark background (`#080C09`)
- [ ] All three pages use the custom theme tokens (no default Tailwind colors)
- [ ] All three pages are excluded from middleware tier-gating (public routes)
- [ ] `npm run build` succeeds with no TypeScript errors

## Implementation

```typescript
// app/(public)/entrar/page.tsx
import { SignIn } from '@clerk/nextjs'

export default function EntrarPage() {
  return (
    <div className="min-h-screen bg-bg flex items-center justify-center">
      <SignIn
        afterSignInUrl="/biblioteca"
        afterSignUpUrl="/biblioteca"
        appearance={{
          variables: {
            colorBackground: '#111712',
            colorText: '#E8EDE9',
            colorPrimary: '#3D4842',
          },
        }}
      />
    </div>
  )
}
```

```typescript
// app/(public)/planos/page.tsx
import { PlanosPageClient } from '@/components/planos/planos-page-client'

export default function PlanosPage() {
  return <PlanosPageClient />
}

// components/planos/planos-page-client.tsx
'use client'
import { useSearchParams } from 'next/navigation'

export function PlanosPageClient() {
  const params = useSearchParams()
  const upgrade = params.get('upgrade') // 'mentee' or null

  return (
    <div className="min-h-screen bg-bg text-textPrimary flex flex-col items-center justify-center gap-8 p-8">
      {upgrade === 'mentee' && (
        <div className="text-sm text-accent border border-border rounded px-4 py-2">
          Acesso restrito — faça o upgrade para continuar
        </div>
      )}

      {/* Static placeholder — Stripe integration comes in Epic 04 */}
      <div className="border border-border rounded-lg p-8 max-w-sm w-full bg-surface1">
        <h2 className="text-textPrimary font-semibold text-lg mb-2">Mentoria RUNA</h2>
        <p className="text-textMuted text-sm mb-4">21 sessões · 7 semanas · 3×/sem</p>
        <p className="text-textPrimary text-2xl font-bold mb-6">R$ 7.000</p>
        <button
          disabled
          className="w-full bg-accent text-textPrimary rounded px-4 py-2 opacity-50 cursor-not-allowed text-sm"
        >
          Em breve
        </button>
      </div>
    </div>
  )
}
```

```typescript
// app/page.tsx (root — placeholder)
export default function RootPage() {
  return (
    <div className="min-h-screen bg-bg text-textPrimary flex items-center justify-center">
      <div className="text-center space-y-2">
        <h1 className="text-textPrimary text-2xl font-semibold tracking-tight">RUNA OS</h1>
        <p className="text-textMuted text-sm">Plataforma em construção</p>
      </div>
    </div>
  )
}
```

## Clerk afterSignIn Configuration

The redirect URLs must also be configured in the Clerk dashboard:
- Allowed redirect URLs: `http://localhost:3001/biblioteca`, `https://{production-domain}/biblioteca`
- Or set via env: `NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/biblioteca`

## File List

- `apps/plataforma-runa/app/(public)/entrar/page.tsx`
- `apps/plataforma-runa/app/(public)/planos/page.tsx`
- `apps/plataforma-runa/components/planos/planos-page-client.tsx`
- `apps/plataforma-runa/app/page.tsx` (update placeholder)

## Verification

```bash
cd apps/plataforma-runa && npm run dev
# 1. Navigate to http://localhost:3001/entrar → Clerk SignIn component renders
# 2. Navigate to http://localhost:3001/planos → pricing placeholder renders
# 3. Navigate to http://localhost:3001/planos?upgrade=mentee → upgrade notice visible
# 4. Navigate to http://localhost:3001/ → RUNA OS placeholder renders
# 5. npm run build → no errors
```
