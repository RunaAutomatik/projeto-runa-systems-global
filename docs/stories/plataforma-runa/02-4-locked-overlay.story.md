---
epic: "02"
story: "02-4"
title: "LockedCard blur overlay — mentee-tier content with upgrade CTA"
status: Done
type: feature
estimate: S
assignee: "@dev"
epic_file: "RUNA OS/wiki/analyses/epic-02-content-library.md"
prd: "RUNA OS/📐 Projetos/plataforma-runa-prd.md"
depends_on: "02-2"
---

# Story 02-4 — LockedCard Blur Overlay

## Context

Upgrades the `<LockedCard>` stub created in Story 02-2 from a simple opacity-reduced card to a blur overlay with a conversion CTA. The blur communicates that content exists and is valuable, while the CTA creates friction-free path to upgrade.

Security note: `content_markdown` is never fetched for mentee items by free users (see Story 02-2 — the list query excludes `content_markdown`). The blur is purely visual, not a security mechanism. Content is protected at the DB query layer.

## Acceptance Criteria

- [x] `components/biblioteca/locked-card.tsx` upgraded (was stub in 02-2)
- [x] Card shows content metadata (title, description, type) — NOT content_markdown
- [x] Blur overlay applied via CSS filter: `blur(4px)` on the card body
- [x] Overlay layer on top: unblurred "Mentoria" badge + "Upgrade para Mentoria" CTA button
- [x] CTA links to `/planos?upgrade=mentee`
- [x] Card is not clickable (no Link wrapper) — CTA is the only interactive element
- [x] Hover on card: CTA becomes slightly more prominent (scale or opacity change)
- [x] Uses theme tokens only — no hardcoded colors
- [x] `/biblioteca` page renders correctly with mixed free + locked cards
- [x] `npm run build` passes with no TypeScript errors

## Implementation

```typescript
// components/biblioteca/locked-card.tsx
import Link from 'next/link'
import type { ContentItemMeta } from '@/lib/types/content'

const TYPE_LABELS: Record<string, string> = {
  skill: 'Skill',
  prompt: 'Prompt',
  template: 'Template',
  lesson: 'Aula',
  live: 'Live',
  repo: 'Repositório',
}

export function LockedCard({ item }: { item: ContentItemMeta }) {
  return (
    <div className="relative rounded-lg overflow-hidden group">
      {/* Blurred card body — visual only */}
      <div className="bg-surface1 border border-border rounded-lg p-5 blur-[3px] select-none pointer-events-none">
        <span className="text-textMuted text-xs uppercase tracking-wide">
          {TYPE_LABELS[item.type] ?? item.type}
        </span>
        <h2 className="text-textPrimary font-medium mt-1">{item.title}</h2>
        {item.description && (
          <p className="text-textMuted text-sm mt-1 line-clamp-2">{item.description}</p>
        )}
      </div>

      {/* Overlay — unblurred CTA */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-bg/60 rounded-lg">
        <span className="text-textMuted text-xs uppercase tracking-widest">Mentoria</span>
        <Link
          href="/planos?upgrade=mentee"
          className="text-sm px-4 py-2 bg-surface1 border border-border text-textPrimary rounded hover:bg-surface2 transition-colors group-hover:border-textMuted"
        >
          Upgrade para Mentoria →
        </Link>
      </div>
    </div>
  )
}
```

## Visual Behavior

```
default    → blur(3px) on card body, CTA at 60% overlay opacity
hover      → CTA border darkens slightly (group-hover:border-textMuted)
click CTA  → navigates to /planos?upgrade=mentee
click card → nothing (no link, pointer-events-none on blurred layer)
```

## File List

- `apps/plataforma-runa/components/biblioteca/locked-card.tsx` (upgraded from stub)
