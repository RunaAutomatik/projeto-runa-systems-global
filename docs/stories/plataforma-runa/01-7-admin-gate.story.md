---
epic: "01"
story: "01-7"
title: "Admin gate — /admin layout locked to ARTHUR_CLERK_USER_ID + dashboard shell"
status: Done
type: feature
estimate: S
assignee: "@dev"
epic_file: "RUNA OS/wiki/analyses/epic-01-foundation.md"
prd: "RUNA OS/📐 Projetos/plataforma-runa-prd.md"
depends_on: "01-1, 01-3, 01-4"
---

# Story 01-7 — Admin Gate + Dashboard Shell

## Context

The admin gate is enforced at two levels: middleware (01-4, rejects non-Arthur users before the page renders) and the layout server component (defense-in-depth — verifies auth even if middleware is somehow bypassed). The dashboard shell is a placeholder; full admin functionality is built in Epic 04.

The `ARTHUR_CLERK_USER_ID` is an environment variable — never hardcoded — so it can be rotated without a code deploy.

## Acceptance Criteria

- [ ] `app/admin/layout.tsx` created as a Server Component with redundant auth check
- [ ] Layout reads `auth()` from `@clerk/nextjs/server` and compares `userId` to `ARTHUR_CLERK_USER_ID`
- [ ] If userId does not match → `redirect('/entrar')` (redundant check on top of middleware)
- [ ] `app/admin/page.tsx` renders dashboard shell with 3 stat placeholders (Mentorados, Sessões, Receita)
- [ ] Admin nav sidebar renders with links: Dashboard, Mentorados, Conteúdo (all placeholder routes)
- [ ] `ARTHUR_CLERK_USER_ID` env var documented in `.env.local.example`
- [ ] Admin routes are NOT accessible to any other authenticated user (tested manually)
- [ ] `npm run build` completes without TypeScript errors

## Implementation

```typescript
// app/admin/layout.tsx
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { AdminSidebar } from '@/components/admin/admin-sidebar'

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { userId } = await auth()

  // Redundant check — middleware already enforces this.
  // Guards against any future middleware misconfiguration.
  if (userId !== process.env.ARTHUR_CLERK_USER_ID) {
    redirect('/entrar')
  }

  return (
    <div className="min-h-screen bg-bg flex">
      <AdminSidebar />
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  )
}
```

```typescript
// app/admin/page.tsx
export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-textPrimary text-2xl font-semibold">Dashboard</h1>
        <p className="text-textMuted text-sm mt-1">Visão geral da plataforma</p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <StatCard label="Mentorados ativos" value="—" />
        <StatCard label="Sessões este mês" value="—" />
        <StatCard label="Receita total" value="—" />
      </div>

      <div className="bg-surface1 border border-border rounded-lg p-8 text-center">
        <p className="text-textMuted text-sm">
          Funcionalidades do admin serão construídas no Epic 04.
        </p>
      </div>
    </div>
  )
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-surface1 border border-border rounded-lg p-6">
      <p className="text-textMuted text-xs uppercase tracking-wide mb-2">{label}</p>
      <p className="text-textPrimary text-3xl font-semibold">{value}</p>
    </div>
  )
}
```

```typescript
// components/admin/admin-sidebar.tsx
import Link from 'next/link'

const NAV_ITEMS = [
  { href: '/admin', label: 'Dashboard' },
  { href: '/admin/mentorados', label: 'Mentorados' },
  { href: '/admin/conteudo', label: 'Conteúdo' },
]

export function AdminSidebar() {
  return (
    <aside className="w-56 bg-surface1 border-r border-border min-h-screen p-6 flex flex-col gap-1">
      <div className="mb-8">
        <p className="text-textPrimary font-semibold text-sm">RUNA OS</p>
        <p className="text-textMuted text-xs">Admin</p>
      </div>
      {NAV_ITEMS.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-textMuted hover:text-textPrimary text-sm px-3 py-2 rounded transition-colors hover:bg-surface2"
        >
          {item.label}
        </Link>
      ))}
    </aside>
  )
}
```

## Environment Variables

```bash
# .env.local.example (add this line)
ARTHUR_CLERK_USER_ID=user_xxxxxxxxxxxxxxxxxxxxxxxx
```

Find your Clerk userId in the Clerk dashboard → Users → click your account → copy User ID.

## File List

- `apps/plataforma-runa/app/admin/layout.tsx`
- `apps/plataforma-runa/app/admin/page.tsx`
- `apps/plataforma-runa/components/admin/admin-sidebar.tsx`
- `apps/plataforma-runa/.env.local.example` (updated — add `ARTHUR_CLERK_USER_ID`)

## Verification

```bash
cd apps/plataforma-runa && npm run dev

# 1. Sign in as Arthur (Clerk account whose ID matches ARTHUR_CLERK_USER_ID)
#    → navigate to /admin → dashboard shell renders with sidebar
# 2. Sign in as a non-Arthur user
#    → navigate to /admin → redirected to /entrar (middleware fires first)
# 3. Unauthenticated → navigate to /admin → redirected to /entrar?redirect=/admin
# 4. npm run build → no errors
```
