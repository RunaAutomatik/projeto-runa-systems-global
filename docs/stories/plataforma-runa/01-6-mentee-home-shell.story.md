---
epic: "01"
story: "01-6"
title: "Mentee home shell — /[mentee]/home with profile card + placeholder sections"
status: Done
type: feature
estimate: M
assignee: "@dev"
epic_file: "RUNA OS/wiki/analyses/epic-01-foundation.md"
prd: "RUNA OS/📐 Projetos/plataforma-runa-prd.md"
depends_on: "01-1, 01-2, 01-3, 01-4"
---

# Story 01-6 — Mentee Home Shell

## Context

This is the first page a mentee sees after paying. The middleware (01-4) already enforces that only the correct mentee can access their own slug. This story creates the shell layout with a working profile card (data from Supabase `profiles`) and placeholder sections for sessions, deliverables, and squad — which are built in Epic 03.

The page must confirm that the tier-gating end-to-end works: auth → middleware → page render → Supabase query.

## Acceptance Criteria

- [ ] Route `app/[mentee]/home/page.tsx` created as a Server Component
- [ ] Profile card renders: `full_name`, `email`, mentor name (static "Arthur Runa"), `mentee_slug`
- [ ] Profile card data sourced from Supabase `profiles` table using service role client
- [ ] Page verifies `params.mentee === profile.mentee_slug` — returns 404 if mismatch (defense-in-depth on top of middleware)
- [ ] Three placeholder sections with correct headings: "Sessões", "Entregáveis", "Seu Squad"
- [ ] Each placeholder shows a coming-soon message (not empty — avoids blank-page confusion)
- [ ] Page uses custom theme tokens (bg, surface1, textPrimary, textMuted, border)
- [ ] `loading.tsx` added for the route (Suspense skeleton)
- [ ] Free user accessing this route → middleware redirects to `/planos?upgrade=mentee` (verified, not tested here)
- [ ] Wrong mentee slug → middleware redirects to `/planos?upgrade=mentee` (verified, not tested here)

## Implementation

```typescript
// app/[mentee]/home/page.tsx
import { notFound } from 'next/navigation'
import { createAdminClient } from '@/lib/supabase/admin'
import { ProfileCard } from '@/components/mentee/profile-card'

interface Props {
  params: { mentee: string }
}

export default async function MenteeHomePage({ params }: Props) {
  const supabase = createAdminClient()

  const { data: profile } = await supabase
    .from('profiles')
    .select('id, full_name, email, tier, mentee_slug')
    .eq('mentee_slug', params.mentee)
    .single()

  // Defense-in-depth: middleware already blocked wrong slugs,
  // but we double-check in case of misconfiguration
  if (!profile || profile.mentee_slug !== params.mentee) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-bg text-textPrimary">
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">

        <ProfileCard profile={profile} />

        <Section title="Sessões">
          <Placeholder text="Suas sessões aparecerão aqui após a primeira semana." />
        </Section>

        <Section title="Entregáveis">
          <Placeholder text="Os entregáveis das sessões ficarão disponíveis aqui." />
        </Section>

        <Section title="Seu Squad">
          <Placeholder text="Os 8 Agentes Neurais do seu squad serão configurados aqui." />
        </Section>

      </div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-4">
      <h2 className="text-textPrimary text-lg font-semibold border-b border-border pb-2">{title}</h2>
      {children}
    </section>
  )
}

function Placeholder({ text }: { text: string }) {
  return (
    <div className="bg-surface1 border border-border rounded-lg p-8 text-center">
      <p className="text-textMuted text-sm">{text}</p>
    </div>
  )
}
```

```typescript
// components/mentee/profile-card.tsx
interface ProfileCardProps {
  profile: {
    full_name: string | null
    email: string
    mentee_slug: string | null
  }
}

export function ProfileCard({ profile }: ProfileCardProps) {
  return (
    <div className="bg-surface1 border border-border rounded-lg p-6 flex items-start gap-4">
      <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-textPrimary font-semibold text-lg flex-shrink-0">
        {profile.full_name?.[0]?.toUpperCase() ?? '?'}
      </div>
      <div className="space-y-1">
        <h1 className="text-textPrimary font-semibold text-xl">
          {profile.full_name ?? 'Mentorado'}
        </h1>
        <p className="text-textMuted text-sm">{profile.email}</p>
        <p className="text-textMuted text-xs">
          Mentor: <span className="text-textPrimary">Arthur Runa</span>
        </p>
      </div>
    </div>
  )
}
```

```typescript
// app/[mentee]/home/loading.tsx
export default function Loading() {
  return (
    <div className="min-h-screen bg-bg">
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-12 animate-pulse">
        <div className="h-24 bg-surface1 border border-border rounded-lg" />
        <div className="h-32 bg-surface1 border border-border rounded-lg" />
        <div className="h-32 bg-surface1 border border-border rounded-lg" />
        <div className="h-32 bg-surface1 border border-border rounded-lg" />
      </div>
    </div>
  )
}
```

## Supabase Client (service role)

This page uses the service role client (bypasses RLS) because the auth check is already done by Clerk middleware — we're querying by `mentee_slug`, not by userId, and the slug is a public identifier.

```typescript
// lib/supabase/admin.ts
import { createClient } from '@supabase/supabase-js'

export function createAdminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
}
```

## File List

- `apps/plataforma-runa/app/[mentee]/home/page.tsx`
- `apps/plataforma-runa/app/[mentee]/home/loading.tsx`
- `apps/plataforma-runa/components/mentee/profile-card.tsx`
- `apps/plataforma-runa/lib/supabase/admin.ts`

## Verification

```bash
# Requires: Story 01-2 (Supabase schema) + Story 01-3 (webhook) + Story 01-4 (middleware)
# 1. Create a test mentee profile directly in Supabase:
#    INSERT INTO profiles (id, email, full_name, tier, mentee_slug)
#    VALUES ('user_test001', 'lucas@test.com', 'Lucas Pesto', 'mentee', 'lucas-pesto')
#    And set Clerk publicMetadata: { tier: 'mentee', menteeSlug: 'lucas-pesto' }
# 2. Sign in as that user → navigate to /lucas-pesto/home
# 3. Profile card renders full_name + email
# 4. Three placeholder sections visible
# 5. Navigate to /outro-slug/home → redirected to /planos?upgrade=mentee (middleware)
```
