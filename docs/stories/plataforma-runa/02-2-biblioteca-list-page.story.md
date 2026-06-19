---
epic: "02"
story: "02-2"
title: "/biblioteca list page — authenticated resource index with tier indicators"
status: Done
type: feature
estimate: M
assignee: "@dev"
epic_file: "RUNA OS/wiki/analyses/epic-02-content-library.md"
prd: "RUNA OS/📐 Projetos/plataforma-runa-prd.md"
depends_on: "02-1, 01-4"
---

# Story 02-2 — /biblioteca List Page

## Context

`/biblioteca` is the authenticated content index. The middleware (Story 01-4, now in `proxy.ts`) already enforces auth — unauthenticated users are redirected to `/entrar?redirect=/biblioteca`. This story builds the page that renders once the user is authenticated.

The page queries all content items (metadata only — no `content_markdown`). Free items are fully accessible. Mentee items show a locked card with blur overlay (Story 02-4 builds the `<LockedCard>` component; this story renders a stub that will be replaced in 02-4).

## Acceptance Criteria

- [x] `app/(protected)/biblioteca/page.tsx` created as Server Component
- [x] Page queries `content_items` via Supabase service role client (consistent with 01-2 pattern)
- [x] Query returns: `id, slug, title, description, type, tier_required, published_at` (no `content_markdown`)
- [x] Page renders a grid of `<ContentCard>` components — one per item
- [x] Free-tier cards: clickable, link to `/biblioteca/[slug]`
- [x] Mentee-tier cards: locked state — rendered by `<LockedCard>` stub (can be a simple "🔒 Mentoria" badge in this story; Story 02-4 upgrades to blur overlay)
- [x] Page title "Biblioteca" with subtitle "Recursos para a sua jornada"
- [x] Uses theme tokens (`bg-bg`, `text-textPrimary`, `text-textMuted`, `border-border`, `bg-surface1`) — no hardcoded colors
- [x] Empty state if no items returned (placeholder text)
- [x] `npm run build` passes with no TypeScript errors

## Implementation

```typescript
// app/(protected)/biblioteca/page.tsx
import { createClient } from '@supabase/supabase-js'
import { ContentCard } from '@/components/biblioteca/content-card'
import { LockedCard } from '@/components/biblioteca/locked-card'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export default async function BibliotecaPage() {
  const { data: items } = await supabase
    .from('content_items')
    .select('id, slug, title, description, type, tier_required, published_at')
    .not('published_at', 'is', null)
    .order('published_at', { ascending: false })

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-textPrimary text-2xl font-semibold mb-1">Biblioteca</h1>
      <p className="text-textMuted text-sm mb-8">Recursos para a sua jornada</p>

      <div className="grid gap-4">
        {items?.map((item) =>
          item.tier_required === 'free' ? (
            <ContentCard key={item.id} item={item} />
          ) : (
            <LockedCard key={item.id} item={item} />
          )
        )}
      </div>
    </div>
  )
}
```

### ContentCard component

```typescript
// components/biblioteca/content-card.tsx
import Link from 'next/link'

const TYPE_LABELS: Record<string, string> = {
  skill: 'Skill',
  prompt: 'Prompt',
  template: 'Template',
  lesson: 'Aula',
  live: 'Live',
  repo: 'Repositório',
}

export function ContentCard({ item }: { item: ContentItemMeta }) {
  return (
    <Link
      href={`/biblioteca/${item.slug}`}
      className="block bg-surface1 border border-border rounded-lg p-5 hover:border-border/80 hover:bg-surface1/80 transition-colors"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="text-textMuted text-xs uppercase tracking-wide">
            {TYPE_LABELS[item.type] ?? item.type}
          </span>
          <h2 className="text-textPrimary font-medium mt-1">{item.title}</h2>
          {item.description && (
            <p className="text-textMuted text-sm mt-1 line-clamp-2">{item.description}</p>
          )}
        </div>
      </div>
    </Link>
  )
}
```

### LockedCard stub (upgraded in Story 02-4)

```typescript
// components/biblioteca/locked-card.tsx
export function LockedCard({ item }: { item: ContentItemMeta }) {
  return (
    <div className="bg-surface1 border border-border rounded-lg p-5 opacity-60">
      <span className="text-textMuted text-xs uppercase tracking-wide">Mentoria</span>
      <h2 className="text-textPrimary font-medium mt-1">{item.title}</h2>
      {item.description && (
        <p className="text-textMuted text-sm mt-1 line-clamp-2">{item.description}</p>
      )}
    </div>
  )
}
```

### Shared type

```typescript
// lib/types/content.ts
export type ContentItemMeta = {
  id: string
  slug: string
  title: string
  description: string | null
  type: 'lesson' | 'repo' | 'skill' | 'prompt' | 'template' | 'live'
  tier_required: 'free' | 'mentee'
  published_at: string | null
}

export type ContentItemFull = ContentItemMeta & {
  content_markdown: string | null
  youtube_url: string | null
  external_url: string | null
}
```

## File List

- `apps/plataforma-runa/app/(protected)/biblioteca/page.tsx`
- `apps/plataforma-runa/components/biblioteca/content-card.tsx`
- `apps/plataforma-runa/components/biblioteca/locked-card.tsx` (stub — upgraded in 02-4)
- `apps/plataforma-runa/lib/types/content.ts`
