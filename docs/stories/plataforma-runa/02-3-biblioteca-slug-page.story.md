---
epic: "02"
story: "02-3"
title: "/biblioteca/[slug] resource page — markdown renderer + YouTube embed + copy button"
status: Done
type: feature
estimate: M
assignee: "@dev"
epic_file: "RUNA OS/wiki/analyses/epic-02-content-library.md"
prd: "RUNA OS/📐 Projetos/plataforma-runa-prd.md"
depends_on: "02-1, 02-2"
---

# Story 02-3 — /biblioteca/[slug] Resource Page

## Context

Individual resource page for a content item. Two render modes:
- **Markdown mode** (`skill`, `prompt`, `template`): rendered markdown with syntax highlighting, discrete copy button on hover — identical to Claude chat copy buttons.
- **Video mode** (`lesson`, `live`): YouTube embed (responsive iframe, 16:9).

Access control: if the item's `tier_required === 'mentee'` and the user's Clerk `publicMetadata.tier !== 'mentee'` → server-side redirect to `/planos?upgrade=mentee`. No content is leaked.

In Next.js 16, `params` in Server Components is a `Promise<{slug: string}>` and must be awaited.

## Acceptance Criteria

- [x] `app/(protected)/biblioteca/[slug]/page.tsx` created as Server Component
- [x] `params` awaited correctly per Next.js 16 convention
- [x] Fetches full content item by slug via Supabase service role client
- [x] Item not found → 404 (`notFound()`)
- [x] `tier_required === 'mentee'` + user tier !== mentee → `redirect('/planos?upgrade=mentee')`
- [x] `skill | prompt | template` types → markdown rendered with `react-markdown` + `rehype-highlight`
- [x] Code blocks have discrete copy button: hover-only, icon only, no label, no border (spec below)
- [x] `lesson | live` types → YouTube embed rendered (URL extracted from `youtube_url`)
- [x] `repo` type → external link card with URL
- [x] Page back-link to `/biblioteca`
- [x] Page title = `item.title`, description shown
- [x] `npm run build` passes with no TypeScript errors

## Copy Button UX Spec

Appears on hover of any code block or markdown content block. Behavior:

```
default  → invisible (opacity-0)
on hover → visible (opacity-100), icon-only, no label, no border
icon     → Copy (lucide-react), size 14
colors   → text-textMuted, hover:text-textPrimary, hover:bg-surface2
position → top-right corner of the block, absolute
padding  → p-1, rounded
```

Tailwind pattern:
```tsx
<div className="relative group">
  <pre>...</pre>
  <button
    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 p-1 rounded text-textMuted hover:text-textPrimary hover:bg-surface2 transition-opacity"
    onClick={handleCopy}
  >
    <Copy size={14} />
  </button>
</div>
```

Since this needs `onClick`, the copy button must be extracted into a `'use client'` component. The page itself remains a Server Component.

## Implementation

```typescript
// app/(protected)/biblioteca/[slug]/page.tsx
import { auth } from '@clerk/nextjs/server'
import { notFound, redirect } from 'next/navigation'
import { createClient } from '@supabase/supabase-js'
import { MarkdownContent } from '@/components/biblioteca/markdown-content'
import { YoutubeEmbed } from '@/components/biblioteca/youtube-embed'
import Link from 'next/link'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export default async function ResourcePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const { sessionClaims } = await auth()
  const tier = (sessionClaims?.public_metadata as { tier?: string } | undefined)?.tier

  const { data: item } = await supabase
    .from('content_items')
    .select('*')
    .eq('slug', slug)
    .single()

  if (!item) notFound()

  if (item.tier_required === 'mentee' && tier !== 'mentee') {
    redirect('/planos?upgrade=mentee')
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <Link
        href="/biblioteca"
        className="text-textMuted text-sm hover:text-textPrimary mb-6 inline-block"
      >
        ← Biblioteca
      </Link>
      <h1 className="text-textPrimary text-2xl font-semibold mb-2">{item.title}</h1>
      {item.description && (
        <p className="text-textMuted text-sm mb-8">{item.description}</p>
      )}

      {(item.type === 'skill' || item.type === 'prompt' || item.type === 'template') &&
        item.content_markdown && (
          <MarkdownContent content={item.content_markdown} />
        )}

      {(item.type === 'lesson' || item.type === 'live') && item.youtube_url && (
        <YoutubeEmbed url={item.youtube_url} />
      )}

      {item.type === 'repo' && item.external_url && (
        <a
          href={item.external_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-surface1 border border-border rounded-lg px-5 py-4 text-textPrimary hover:border-border/80 transition-colors"
        >
          Acessar repositório →
        </a>
      )}
    </div>
  )
}
```

### MarkdownContent (client component for copy button)

```typescript
// components/biblioteca/markdown-content.tsx
'use client'
import ReactMarkdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import { CopyBlock } from '@/components/biblioteca/copy-block'

export function MarkdownContent({ content }: { content: string }) {
  return (
    <div className="prose prose-invert max-w-none">
      <ReactMarkdown
        rehypePlugins={[rehypeHighlight]}
        components={{
          pre: ({ children }) => <CopyBlock>{children}</CopyBlock>,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
```

### CopyBlock (handles copy button behavior)

```typescript
// components/biblioteca/copy-block.tsx
'use client'
import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

export function CopyBlock({ children }: { children: React.ReactNode }) {
  const [copied, setCopied] = useState(false)

  function handleCopy() {
    const text = (children as React.ReactElement)?.props?.children?.toString() ?? ''
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative group">
      <pre>{children}</pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 p-1 rounded text-textMuted hover:text-textPrimary hover:bg-surface2 transition-opacity"
        aria-label="Copiar"
      >
        {copied ? <Check size={14} /> : <Copy size={14} />}
      </button>
    </div>
  )
}
```

### YoutubeEmbed

```typescript
// components/biblioteca/youtube-embed.tsx
export function YoutubeEmbed({ url }: { url: string }) {
  const videoId = url.match(/(?:v=|youtu\.be\/)([^&\s]+)/)?.[1]
  if (!videoId) return null

  return (
    <div className="aspect-video w-full rounded-lg overflow-hidden">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      />
    </div>
  )
}
```

## Dependencies to install

```bash
npm install react-markdown rehype-highlight
```

`lucide-react` is already in the project (used by admin-sidebar).

## File List

- `apps/plataforma-runa/app/(protected)/biblioteca/[slug]/page.tsx`
- `apps/plataforma-runa/components/biblioteca/markdown-content.tsx`
- `apps/plataforma-runa/components/biblioteca/copy-block.tsx`
- `apps/plataforma-runa/components/biblioteca/youtube-embed.tsx`
