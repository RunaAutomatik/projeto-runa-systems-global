---
date: 2026-05-15
type: epic
epic_id: "02"
title: Content Library — Free Resources + Conversion UX
status: active
phase: 2
weeks: "3–4"
project: plataforma-runa
prd: "[[plataforma-runa-prd]]"
---

# Epic 02 — Content Library

> Free resources + subscriber library with conversion UX.
> **Gate:** Epic 01 Done before starting any Story here.

---

## Goal

A person coming from an Instagram Zernio DM link arrives at `/biblioteca/[slug]`, signs up with Clerk (email captured), sees free content in full, sees a blur preview of locked Mentoria content below, and is one click away from the pricing page.

## Success Criteria

- [ ] `content_items` table seeded with first 5 resources (manual import from Skills docs)
- [ ] `/biblioteca` page lists free content — requires Clerk login
- [ ] `/biblioteca/[slug]` individual resource page renders YouTube embed (for videos) or markdown (for prompts/templates)
- [ ] Locked content items show blur overlay with "Upgrade to Mentoria" CTA
- [ ] Zernio DM link → `/entrar` redirect (Clerk signup) → `/biblioteca/[slug]` post-login
- [ ] `/planos` pricing page with mentee dashboard preview section

---

## Stories in this Epic

| Story | Title | Estimate | Status |
|-------|-------|----------|--------|
| 02-1 | `content_items` table + index + RLS + seed migration | S | Ready |
| 02-2 | `/biblioteca` page — authenticated list view (free items) | M | Ready |
| 02-3 | `/biblioteca/[slug]` — resource page with YouTube embed + markdown | M | Ready |
| 02-4 | "Upgrade to Mentoria" blur overlay component | S | Ready |
| 02-5 | `/planos` pricing page with dashboard preview | M | Ready |
| 02-6 | Post-login redirect flow: `/entrar?redirect=/biblioteca/[slug]` | S | Ready |

---

## Critical Architecture Notes

### Email capture gate (non-negotiable)
`/biblioteca` and `/biblioteca/[slug]` require Clerk auth. No anonymous access. The friction (signup) is intentional — email captured from day one.

### Content seeding (Story 02-1)
First content items to seed (manual entry, no auto-import tooling in MVP):
- 1 prompt template (ex: "Prompt CEO Neural")
- 1 skill guide (ex: "Como instalar Claude Code")
- 1 recorded live (YouTube embed)
- 2 premium items (tier_required = 'mentee') for blur overlay demo

### Content types in `/biblioteca/[slug]`
```typescript
type ContentType = 'lesson' | 'repo' | 'skill' | 'prompt' | 'template' | 'live'
// lesson/live → YouTube embed
// skill/prompt/template → markdown rendered with syntax highlighting
// repo → external link card
```

### Database (Story 02-1)
```sql
-- Index required (from engineering review)
CREATE INDEX idx_content_items_tier_published 
  ON content_items(tier_required, published_at DESC);

-- RLS
ALTER TABLE content_items ENABLE ROW LEVEL SECURITY;
CREATE POLICY "public_free_content" ON content_items
  FOR SELECT USING (tier_required = 'free' AND published_at IS NOT NULL);
CREATE POLICY "mentee_content" ON content_items
  FOR SELECT USING (
    tier_required = 'mentee' 
    AND EXISTS (
      SELECT 1 FROM profiles WHERE id = auth.uid()::uuid AND tier = 'mentee'
    )
  );
```

---

## Dependencies

- **Blocking:** Epic 01 Done
- **Content source:** Arthur provides 5 initial resources as markdown (no tooling built)
- **No Stripe yet:** Upgrade CTA links to `/planos` — actual payment in Epic 04

---

## Out of Scope for Epic 02

- Admin content CMS (Epic 04)
- Stripe payment flow (Epic 04)
- Mentee dashboard (Epic 03)
