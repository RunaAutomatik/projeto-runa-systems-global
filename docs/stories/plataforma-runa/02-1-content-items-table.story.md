---
epic: "02"
story: "02-1"
title: "content_items table + RLS + seed migration — 5 initial resources"
status: Done
type: feature
estimate: S
assignee: "@dev"
epic_file: "RUNA OS/wiki/analyses/epic-02-content-library.md"
prd: "RUNA OS/📐 Projetos/plataforma-runa-prd.md"
depends_on: "01-2"
---

# Story 02-1 — content_items Table + Seed

## Context

Adds the `content_items` table to the existing Supabase project (same project used in Story 01-2). Server Components access the table via the service role key — consistent with the pattern established for `profiles`. No Clerk↔Supabase JWT bridge needed. Auth tier checking happens at the Next.js layer before querying.

Five seed items are prepared and ready. Three items have markdown files in `apps/plataforma-runa/seeds/content/`. Two reference SÍRIOS vault docs (source files listed below).

## Acceptance Criteria

- [x] Migration file created at `supabase/migrations/20260515000002_content_items.sql`
- [x] `content_items` table matches schema below
- [x] Composite index on `(tier_required, published_at DESC)` created
- [x] RLS enabled — anon cannot SELECT any row; service role bypasses
- [x] `supabase db push` applies without errors
- [x] Seed script populates exactly 5 items (slugs listed below)
- [x] Free items queryable without auth via service role in server context
- [x] `npm run build` passes with no TypeScript errors

## Schema

```sql
CREATE TABLE content_items (
  id           uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  slug         text        UNIQUE NOT NULL,
  title        text        NOT NULL,
  description  text,
  type         text        NOT NULL,
  tier_required text       NOT NULL DEFAULT 'free',
  content_markdown text,
  youtube_url  text,
  external_url text,
  published_at timestamptz,
  created_at   timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT content_type_values
    CHECK (type IN ('lesson', 'repo', 'skill', 'prompt', 'template', 'live')),
  CONSTRAINT tier_values
    CHECK (tier_required IN ('free', 'mentee'))
);

CREATE INDEX idx_content_items_tier_published
  ON content_items(tier_required, published_at DESC);

ALTER TABLE content_items ENABLE ROW LEVEL SECURITY;

-- Anon: no access
CREATE POLICY "no_anon_access" ON content_items
  FOR SELECT TO anon USING (false);

-- Authenticated via service role: full access (service role bypasses RLS)
```

## Seed Items

| slug | title | type | tier | content source |
|------|-------|------|------|----------------|
| `claude-code-guia-completo` | Claude Code — Guia Completo | `skill` | `free` | `SÍRIOS/RUNA SYSTEMS/Skills/Skills Claude Code.md` — use intro + section headers as condensed guide |
| `mapeando-o-negocio` | Mapeando o Negócio | `prompt` | `free` | `apps/plataforma-runa/seeds/content/mapeando-o-negocio.md` — use full content |
| `prompt-transferencia-de-memoria` | Prompt Transferência de Memória | `prompt` | `free` | `apps/plataforma-runa/seeds/content/prompt-transferencia-de-memoria.md` — use full content |
| `aiox-orquestracao-de-agentes` | AIOX — Orquestração de Agentes | `skill` | `mentee` | `SÍRIOS/RUNA SYSTEMS/Skills/Skills AIOX.md` — use full content |
| `worker-deployment-protocol` | Worker Deployment Protocol | `template` | `mentee` | `SÍRIOS/RUNA SYSTEMS/worker-deployment-protocol.md` — use full content |

### Seed approach

Use a TypeScript seed script at `apps/plataforma-runa/seeds/seed-content.ts` that:
1. Reads markdown files from disk with `fs.readFileSync`
2. Upserts rows via Supabase service role client
3. Run with: `npx tsx seeds/seed-content.ts`

The script is one-off tooling — not part of the app build. Use `@supabase/supabase-js` with `SUPABASE_SERVICE_ROLE_KEY` from `.env.local`.

## File List

- `supabase/migrations/20260515000002_content_items.sql`
- `apps/plataforma-runa/seeds/seed-content.ts`
- `apps/plataforma-runa/seeds/content/mapeando-o-negocio.md` (already exists)
- `apps/plataforma-runa/seeds/content/prompt-transferencia-de-memoria.md` (already exists)
