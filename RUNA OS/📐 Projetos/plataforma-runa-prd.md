---
date: 2026-05-15
type: prd
tags: [prd, plataforma-runa, runa-os, mvp-1]
project: runa-os
status: approved
---

# Plataforma RUNA — PRD (Hub)

> Este documento é o hub central do projeto. Todos os artefatos (Epics, Stories, decisões arquiteturais, analyses) referenciam este PRD.

---

## Context

Arthur runs RUNA — a high-ticket AI-first business restructuring methodology (R$7.000 / 21 sessions / 7 weeks / 3×week + 1 monthly 2h call for 1 year). Today, delivery happens across 3 disconnected surfaces: Obsidian vault (agent ecosystem docs), Google Drive (deliverables), and Skool (session recordings + community). This creates friction for the mentee and limits Arthur's ability to personalize at scale.

The platform replaces all three with a single surface engineered specifically for RUNA's methodology: 2-tier content access (Free + Mentoria), a personalized mentee dashboard, an acquisition funnel from Instagram → DM → free resource → locked content → R$7.000 conversion, and AIOX agent integration.

**Live client reference:** Lucas Pesto — `SÍRIOS/MENTORADOS/Lucas Pesto/_hub.md`
**Agent ecosystem:** `SÍRIOS/RUNA SYSTEMS/agentes/agent-reference.md`

---

## Problem Statement

**Delivery is fragmented** — Today the Mentoria delivery happens across: Google Drive (deliverables: agent .md files, task files, guides), WhatsApp (async support, session scope delivery), and Arthur's own manual tracking in Obsidian (mentee progress, tool curation, session planning). There is no unified surface.

**No session recordings exist yet** — Sessions are transcribed and Arthur uses the transcript manually to design the next session (audit what was delivered → evaluate mentee's current project stage → curate tools/repos/skills/workers/hooks for that specific moment → write next session). The platform solves this: it becomes the infrastructure where recordings ARE created and stored, not just where they're replayed.

**Neither Arthur nor the mentee knows where they are** — There is no real-time view of where a mentee stands in the 21-session arc. The admin panel solves this for Arthur; the mentee dashboard solves it for the mentee.

**Free → paid conversion has no "moment of desire"** — The person gets a DM, reads a resource, and has no digital experience of what they're missing inside the Mentoria.

**No email capture on free content** — Acquisition content must require a Clerk signup (even if free), capturing the email for email marketing and follow-up sequences from day one.

---

## Recommended Approach

Build `apps/plataforma-runa/` as a new Next.js 15+ app inside the existing monorepo (`D:/Runa/runa-systems-global/`). Supabase is already configured at the project root — use the same instance. Deploy to Netlify (already in stack, Netlify MCP active).

### Decisions Confirmed

| Decision | Choice |
|----------|--------|
| **Platform name** | **RUNA OS** — URL: `os.runa.ai` or `runaos.com.br` |
| **MVP 1 scope** | Free + Mentoria R$7.000 only. R$197/month tier → MVP 2. |
| **Mentoria recordings** | **Bunny.net** — uploaded by Arthur per mentee, only that mentee sees their sessions. |
| **Free content videos** | **YouTube embed** — grows YouTube channel + organizes inside platform. No DRM needed. |
| **Community MVP 1** | **Discord** (external link from dashboard). Built-in → MVP 3+. |

### Tech Stack

| Layer | Choice | Rationale |
|-------|--------|-----------|
| Framework | Next.js 15 App Router + Turbopack | Same as epic.new — proven at scale |
| Language | TypeScript | Full project standard |
| Styling | Tailwind CSS + shadcn/ui | Matches lp-runa aesthetic, fast iteration |
| Auth | Clerk (Google + GitHub + Email magic link) | Drop-in, handles sessions, webhooks to Supabase |
| Database | Supabase (already at root) | Auth sync, RLS tier-gating, storage for deliverables |
| Payments | Stripe | R$7.000 one-time Mentoria (MVP 1). R$197/month → MVP 2. |
| Video (Mentoria) | Bunny.net | Per-mentee DRM streams, Arthur uploads via admin panel |
| Video (Free) | YouTube embed | Grows channel, no DRM, organized inside platform |
| Deployment | Netlify | Already in stack, Netlify MCP active |
| Email | Resend + React Email | Session reminders, onboarding sequence |

---

## Route Architecture

### Public (unauthenticated)
```
/                     → landing page (mirrors lp-runa content, but inside platform)
/entrar               → sign in / sign up (Clerk)
/planos               → pricing page (Free / R$7.000)
```

### Authenticated — Free (any Clerk account)
```
/biblioteca           → free content library — Clerk login REQUIRED for email capture
/biblioteca/[slug]    → individual resource (skill / prompt / template / recorded live)
                        Clerk login REQUIRED even for free content — email capture from day one
```

### Authenticated — Mentee (R$7.000 Mentoria)
```
/[mentee]/            → redirect to /[mentee]/home
/[mentee]/home        → personalized dashboard (name, progress arc, next session, recent deliverable)
/[mentee]/sessoes     → sessions list (21-session arc, each with status + recording + scope + notes)
/[mentee]/sessoes/[n] → individual session page (recording, scope doc, deliverables from that session)
/[mentee]/materiais   → materials (repos, skills, prompts filtered to this mentee's context)
/[mentee]/progresso   → progress tracker (V1→V2→V3 infrastructure arc, squad completion, milestones)
/[mentee]/entregaveis → deliverables (all artifacts: agent .md files, task files, installation guides)
/[mentee]/squad       → squad architecture (agents deployed, phase, health)
```

### Admin (Arthur only)
```
/admin                → redirect to /admin/dashboard
/admin/dashboard      → overview (active mentees, upcoming sessions, revenue)
/admin/mentorados     → mentee list + status table
/admin/mentorados/[id]→ individual mentee management (upload deliverable, mark session complete)
/admin/conteudo       → content library management (add/edit/tier-assign items)
/admin/sessoes        → session scheduler (links to recording upload)
/admin/financeiro     → Stripe dashboard embed (subscriptions, MRR, churn)
```

---

## Database Schema (Supabase)

### Core tables

```sql
-- Users mirror from Clerk webhooks
profiles (
  id uuid PRIMARY KEY,          -- clerk user_id
  email text UNIQUE NOT NULL,
  full_name text,
  tier text DEFAULT 'free',     -- 'free' | 'mentee'
  mentee_slug text UNIQUE,      -- URL slug for /[mentee]/ routes (mentees only)
  stripe_customer_id text,
  mentee_context jsonb,         -- intake form output: Four Cs score + diagnostic, filled via /admin scripted form
  created_at timestamptz DEFAULT now()
)

-- Stripe subscriptions
subscriptions (
  id uuid PRIMARY KEY,
  profile_id uuid REFERENCES profiles,
  stripe_subscription_id text UNIQUE,
  tier text NOT NULL,           -- 'mentee'
  status text,                  -- 'active' | 'canceled' | 'past_due'
  current_period_end timestamptz,
  created_at timestamptz DEFAULT now()
)

-- 21-session arc per mentee
sessions (
  id uuid PRIMARY KEY,
  mentee_id uuid REFERENCES profiles,
  session_number int NOT NULL,   -- 1–21
  title text,
  status text DEFAULT 'scheduled', -- 'scheduled' | 'completed' | 'cancelled'
  scheduled_at timestamptz,
  completed_at timestamptz,
  bunny_video_id text,           -- Bunny.net Library+Video ID (Signed URL generated server-side)
  scope_doc_url text,            -- Google Drive or Supabase storage link
  notes text,                    -- Arthur's session notes (markdown)
  created_at timestamptz DEFAULT now()
)

-- Files/artifacts delivered per mentee
deliverables (
  id uuid PRIMARY KEY,
  mentee_id uuid REFERENCES profiles,
  session_id uuid REFERENCES sessions,
  title text NOT NULL,
  type text,                     -- 'agent-md' | 'task-file' | 'skill' | 'guide' | 'prompt'
  file_url text,
  content text,                  -- inline markdown (for prompts/skills)
  version text,                  -- 'V1' | 'V2' | 'V3'
  created_at timestamptz DEFAULT now()
)

-- Infrastructure tracking (V1/V2/V3 arc)
infrastructure_snapshots (
  id uuid PRIMARY KEY,
  mentee_id uuid REFERENCES profiles,
  version text NOT NULL,         -- 'V1' | 'V2' | 'V3'
  label text,
  agents jsonb,                  -- { "copy": "active", "design": "active", ... }
  squads jsonb,
  snapshot_at timestamptz DEFAULT now()
)

-- Public + tiered content library
content_items (
  id uuid PRIMARY KEY,
  slug text UNIQUE NOT NULL,
  title text NOT NULL,
  type text,                     -- 'lesson' | 'repo' | 'skill' | 'prompt' | 'template' | 'live'
  tier_required text DEFAULT 'free', -- 'free' | 'mentee'
  description text,
  content_url text,              -- video URL or storage path
  body text,                     -- markdown body for prompts/templates
  tags text[],
  published_at timestamptz,
  created_at timestamptz DEFAULT now()
)
```

### RLS Policies (Supabase Row Level Security)

```sql
-- Mentee data: only own profile + Arthur (admin)
-- Sessions: mentee sees only their sessions
-- Deliverables: mentee sees only their deliverables
-- Content: filtered by tier_required <= user.tier
```

---

## 2-Tier Access — Middleware Architecture

```typescript
// middleware.ts (Next.js)
// Runs on every request before page render

// CRITICAL: explicit exclusions prevent /[mentee]/ from capturing known routes
export const config = {
  matcher: ['/((?!_next|api|favicon.ico|entrar|planos|biblioteca|admin|\\.).*)',],
}

// Tier + menteeSlug stored in Clerk publicMetadata (zero DB queries in middleware)
// publicMetadata shape: { tier: 'free' | 'mentee' | 'admin', menteeSlug: string }

const TIER_GATES = {
  '/biblioteca': 'free',          // any Clerk account — email capture gate
  '/[mentee]': 'mentee',          // R$7.000 Mentoria only — validates slug matches JWT
  '/admin': 'admin',              // Arthur only — validates userId === ARTHUR_CLERK_USER_ID
}

// Flow:
// 1. Clerk validates session token → reads publicMetadata from JWT (no network call)
// 2. Compare required tier vs publicMetadata.tier
// 3. For /[mentee]/: also verify params.mentee === publicMetadata.menteeSlug
// 4. For /admin/: verify userId === process.env.ARTHUR_CLERK_USER_ID
// 5. Redirect to /planos with ?upgrade=mentee if tier insufficient
// 6. "Upgrade to Mentoria" overlay shown IN PAGE for content_items where tier_required = 'mentee'

// Tier update flow (after Stripe payment):
// Stripe webhook → Supabase profiles.tier = 'mentee'
//               → Clerk API: updateUserMetadata(userId, { publicMetadata: { tier: 'mentee', menteeSlug } })
// Session auto-refreshes with new claims on next request
```

---

## Acquisition Funnel Integration

```
Instagram post keyword → Zernio DM → link to /biblioteca/[slug]
→ Middleware redirects to /entrar if not authenticated (Clerk signup required)
→ Person creates free Clerk account → email captured for marketing sequences from day one
→ Lands on /biblioteca/[slug] — sees the free tool in full
→ Sees sidebar: "Você está vendo a ferramenta crua. Veja o que os mentorados recebem →"
→ /planos page with demo mentee dashboard preview
→ CTA: R$7.000 Mentoria → Stripe payment → tier upgraded → /[mentee]/home
```

**Every free resource requires Clerk login** — this is non-negotiable. Email capture is the first conversion event. No anonymous access to any resource page.

**DM resource pages** (`/biblioteca/[slug]`) are designed to:
- Gate behind Clerk signup (the friction is intentional — captures email)
- Deliver real value immediately once logged in (the free tool)
- Show a "blur preview" of the locked Mentoria content beneath
- Include Arthur's voice: "Essa é a ferramenta. O que falta é a arquitetura."

---

## Mentee Dashboard — Lucas Pesto as Design Reference

What Lucas Pesto gets today (fragmented):
- Obsidian docs → hub, deliverables, session scopes
- Google Drive → agent .md files, task files, installation guides
- Skool → session recordings
- WhatsApp → Arthur's async support

What the platform consolidates:
- `/[mentee]/home` — everything above in one view
- `/[mentee]/sessoes/[n]` — recording + scope + deliverables from that session
- `/[mentee]/squad` — squad status (Phase 1 Training Wheels → Phase 4 Autonomous)
- `/[mentee]/progresso` — V1→V2→V3 infrastructure arc, milestone checklist

---

## Scripted Intake Form — mentee_context Population

A pure-script, one-question-at-a-time intake form (no LLM, no ARES agent) runs inside `/admin/mentorados/[id]` before or during Session 1. Arthur completes it manually based on the mentee conversation.

**Three sources feeding the form:**
1. ORION `*runa-intake` — 7-question structured intake
2. Four Cs complementary questions (Capacidade, Capital, Comprometimento, Clareza)
3. Reference document: Google Doc `1JLx7rIKqnRh9GV-62s_aeAHSEBepjB3QlpEHq0j1lEA` — Arthur's intake methodology

**Flow:**
1. Arthur opens `/admin/mentorados/[id]` and launches the intake form
2. Form presents one question at a time (scripted sequence — no AI generation)
3. Arthur answers based on his intake conversation with the mentee
4. On completion, output saved to `mentee_context jsonb` on `profiles`
5. Platform reads `mentee_context` to personalize: welcome message on `/[mentee]/home`, prioritized materials, recommended next steps

**Admin surface:** `/admin/mentorados/[id]` displays the intake snapshot + allows Arthur to update context at V1→V2→V3 transition points.

---

## Identidade Visual — Dear Alice / Solarpunk

Complete identity rooted in the Dear Alice / Solarpunk philosophical direction: technology as ally, not threat. Syntropia. Humanity + machine harmony. Earthy, organic, biophilic — NOT spatial, NOT cosmic, NOT Epic.new-derived.

### Color System

| Token | Value | Application |
|-------|-------|-------------|
| **Primary background** | `#080C09` (deep forest dark) | All pages, dashboards |
| **Surface 1** | `#111712` | Cards, panels |
| **Surface 2** | `#1A201B` | Hover states, nested surfaces |
| **Border** | `#2A342C` | Card borders, dividers |
| **Text primary** | `#E8EDE9` | Headings, body |
| **Text muted** | `#7A8C7C` | Meta, labels |
| **Accent** | `#3D4842` (dark muted sage — earthy solarpunk) | CTAs, highlights, active states |
| **Accent soft** | `rgba(61,72,66,0.15)` | Hover backgrounds |

Typography: **Geist Sans** (headings) + **Geist Mono** (code/data). No Inter.

### Visual Direction

- Organic geometry alongside precision lines (arc motifs, flowing paths, growth curves)
- Earthy, muted, grounded — never neon, never glowing, never spatial or cosmic
- Growth metaphors in micro-interactions (expand, bloom, unfold — not bounce/pop)
- Biophilic signals: moss, stone, wood texture references in gradient and texture choices
- Imagery aesthetic: builders at work, infrastructure as living thing, light filtering through organic forms

### Agent Ownership

| Agent | Role |
|-------|------|
| **ARES** | All platform copy — LP, page headers, CTAs, email subject lines. Primary reference: StartSe AI Journey competitive audit at `SÍRIOS/📚 Referências/audit-startse-ai-journey-copy-2026-05-15.md` — 8 mechanisms mapped to Hormozi/RECA/Brunson frameworks. |
| **@ux-design-expert (Uma)** | Design system implementation — taste-design → stitch-design → impeccable audit |
| **@dev (Dex)** | Tailwind config, shadcn theme override, component implementation |

FREYJA does NOT own copy for this platform — ARES owns it. FREYJA owns @arthsystems_ content narrative only.

---

## Build Phases

### Phase 1 — Foundation (Week 1–2)
**Goal:** Auth + tier gating + shell dashboard working end-to-end

- [ ] `apps/plataforma-runa/` scaffolded (Next.js 15 + TS + Tailwind + shadcn)
- [ ] Clerk auth configured (Google + email magic link)
- [ ] Supabase schema applied (profiles, subscriptions tables)
- [ ] Clerk webhook → Supabase profiles sync
- [ ] Middleware tier-gating (Free / Mentee / Admin)
- [ ] `/entrar`, `/planos`, basic landing `/` pages
- [ ] `/[mentee]/home` shell (profile card + placeholder sections)
- [ ] Manual mentee creation by Arthur (no self-serve yet)

**Success criteria:** Arthur can create a mentee profile in Supabase, that mentee logs in with Clerk, sees their dashboard, and is blocked from other mentee routes.

### Phase 2 — Content Library (Week 3–4)
**Goal:** Free resources + subscriber library with conversion UX

- [ ] `content_items` table populated (import from current Skills docs)
- [ ] `/biblioteca` and `/biblioteca/[slug]` pages (free content library — Clerk login required)
- [ ] "Upgrade to Mentoria" blur overlay on premium content items (tier_required = 'mentee')
- [ ] Zernio DM link → `/entrar` (Clerk signup) → `/biblioteca/[slug]` — login REQUIRED; email captured from day one
- [ ] `/planos` pricing page with mentee dashboard preview

**Success criteria:** A person coming from Instagram DM signs up with Clerk, lands on a resource page, sees free content, sees locked content below, and is one click away from the pricing page.

### Phase 3 — Mentee Dashboard (Week 5–7)
**Goal:** Complete mentee experience — sessions, deliverables, progress, squad

- [ ] `sessions`, `deliverables`, `infrastructure_snapshots` tables
- [ ] `/[mentee]/sessoes` — 21-session arc with status indicators
- [ ] `/[mentee]/sessoes/[n]` — individual session (recording embed, scope, deliverables)
- [ ] `/[mentee]/entregaveis` — deliverables file browser
- [ ] `/[mentee]/progresso` — V1/V2/V3 infrastructure arc tracker
- [ ] `/[mentee]/squad` — squad architecture status
- [ ] Video embedding (Bunny.net stream or TBD — see Strategic Questions)
- [ ] Migrate Lucas Pesto's data as first live mentee

**Success criteria:** Lucas Pesto can log into the platform and find every session recording, every deliverable, and his full infrastructure progression — replacing Skool + Google Drive + Obsidian.

### Phase 4 — Admin + Stripe (Week 8–10)
**Goal:** Arthur can manage everything from within the platform; payments automated

- [ ] `/admin` panel (mentee list, upcoming sessions, content CMS)
- [ ] `/admin/mentorados/[id]` — session management, deliverable upload, notes
- [ ] Stripe: R$7.000 one-time Mentoria payment (launch price: R$4.000 via Stripe coupon)
- [ ] Stripe webhook → Supabase subscriptions sync → tier upgrade
- [ ] Onboarding email sequence (Resend + React Email)
- [ ] Scripted intake form in `/admin/mentorados/[id]` — one-question-at-a-time, saves to `mentee_context jsonb`; Arthur updates at V1→V2→V3 transitions
- [ ] Analytics dashboard (active mentees, MRR, sessions completed)

**Success criteria:** A person pays R$7.000 via Stripe → automatically gets mentee access → Arthur sees them in the admin panel → can upload their first deliverable without touching Supabase directly.

---

## Files to Create

| File | Purpose |
|------|---------|
| `apps/plataforma-runa/package.json` | App dependencies |
| `apps/plataforma-runa/next.config.ts` | Next.js config (Turbopack) |
| `apps/plataforma-runa/middleware.ts` | Tier-gating logic |
| `apps/plataforma-runa/app/layout.tsx` | Root layout (Clerk provider, Supabase) |
| `apps/plataforma-runa/app/(public)/page.tsx` | Landing page |
| `apps/plataforma-runa/app/(public)/planos/page.tsx` | Pricing page |
| `apps/plataforma-runa/app/(app)/biblioteca/[slug]/page.tsx` | Free content resource page (Clerk required) |
| `apps/plataforma-runa/app/(app)/[mentee]/home/page.tsx` | Mentee dashboard |
| `apps/plataforma-runa/app/(app)/[mentee]/sessoes/page.tsx` | Session list |
| `apps/plataforma-runa/app/(app)/[mentee]/sessoes/[n]/page.tsx` | Individual session |
| `apps/plataforma-runa/app/(app)/[mentee]/entregaveis/page.tsx` | Deliverables browser |
| `apps/plataforma-runa/app/admin/layout.tsx` | Admin layout (Arthur-only gate) |
| `apps/plataforma-runa/app/admin/mentorados/[id]/page.tsx` | Mentee management |
| `supabase/migrations/YYYYMMDD_plataforma_runa.sql` | Schema migration |
| `apps/plataforma-runa/lib/supabase/server.ts` | Supabase server client |
| `apps/plataforma-runa/lib/supabase/client.ts` | Supabase browser client |
| `apps/plataforma-runa/lib/stripe.ts` | Stripe client |
| `apps/plataforma-runa/app/api/webhooks/clerk/route.ts` | Clerk → Supabase sync |
| `apps/plataforma-runa/app/api/webhooks/stripe/route.ts` | Stripe → Supabase sync |

---

## Monorepo Integration

```json
// root package.json — add to workspaces
"workspaces": [
  "apps/*",          // already exists (content-worker, instagram-worker, lp-runa)
  "packages/*"       // shared packages if needed
]

// turbo.json — add plataforma-runa pipeline
```

---

## Existing Infrastructure Reused

| Asset | How used |
|-------|---------|
| `supabase/` at root | Same Supabase project — new migrations added |
| `apps/lp-runa/` | Landing page submodule kept; `/planos` page inside platform replaces it long-term |
| AIOX agent ecosystem | ORION reads `mentee_context` from Supabase; agents session-prep via Supabase queries |
| `scripts/carousel-keywords.json` | Zernio DM links point to `/biblioteca/[slug]` (update keyword → URL mapping) |

---

## Admin Panel — Video Upload Flow (Bunny.net)

Arthur's workflow for delivering session recordings:

```
Arthur completes a session via Google Meet / Zoom
  → Records locally or via platform
  → Goes to /admin/mentorados/[id]/sessoes/[n]
  → Uploads video → Bunny.net CDN (via Bunny.net API from admin panel)
  → Optionally uploads deliverables (agent .md files, task files, prompts)
  → Marks session as "completed"
  → Mentee's dashboard updates: session unlocks, recording available
```

Free content admin flow:
```
Arthur publishes video to YouTube
  → Goes to /admin/conteudo → "Adicionar conteúdo"
  → Pastes YouTube URL + metadata + tier = "free"
  → Appears in /biblioteca with YouTube embed
```

---

## Verification

**Phase 1 done when:**
- `npm run dev` in `apps/plataforma-runa` serves the app
- Clerk login works (Google + email)
- A test mentee with `tier=mentee` can access `/[mentee]/home`
- A free user hitting `/[mentee]/lucas-pesto` is redirected to `/planos`
- Arthur's email is gated to `/admin`

**Phase 3 done when:**
- Lucas Pesto logs in and sees all 9 completed sessions with recordings
- Deliverables from each session are accessible as files
- V1→V2→V3 infrastructure arc is visualized on `/[mentee]/progresso`

**Full platform done when:**
- A person coming from a Zernio DM link arrives at `/biblioteca/[slug]`, converts via Stripe to Mentoria, receives automated welcome email, and has access to their personalized dashboard — with zero manual intervention from Arthur.

---

## RUNA OS Documentation Vault

**Vault path:** `D:/Runa/runa-systems-global/RUNA OS/` — Obsidian vault, already initialized (`.obsidian/` present).

All documentation produced specifically for this project lives here. Existing docs in SÍRIOS remain where they are; reference files used as input for this project get a copy in `RUNA OS/raw/`.

### Vault Structure (Karpathy LLM Wiki — nested layout)

```
RUNA OS/
├── .obsidian/
├── CLAUDE.md               ← routing map, schema, guardrails — READ FIRST on any query
├── AGENTS.md               ← minimal mirror for non-Claude agents
├── raw/                    ← immutable source docs (drop references here to ingest)
│   ├── audit-startse-ai-journey-copy-2026-05-15.md   ← ARES copy reference
│   └── ...                 ← any reference doc used for this project
└── wiki/
    ├── index.md            ← catalog of all pages — READ THIS FIRST on any search
    ├── log.md              ← append-only operation log
    ├── hot.md              ← 500-char rolling buffer of recent knowledge
    ├── entities/           ← mentees, products, services, people
    ├── concepts/           ← frameworks, methodologies (Four Cs, V1→V2→V3, Template Master)
    ├── sources/            ← source summaries (audit reports, reference docs)
    └── analyses/           ← audits, architectural decisions, competitive analyses
```

### Skills governing this vault

| Skill | When to use |
|-------|-------------|
| `/llm-wiki-setup` | Bootstrap the vault structure (first time only — `CLAUDE.md` + `wiki/index.md`) |
| `/wiki-self-heal` | After any high-volume documentation session — audit orphan pages, fill gaps, update cross-references |
| `/graphify RUNA OS/` | After major milestones — visualize knowledge clusters, reveal coverage gaps |

---

## Connections

### Execution Plan
- **Epic 01 — Foundation:** `wiki/analyses/epic-01-foundation.md` (to create)
- **Epic 02 — Content Library:** `wiki/analyses/epic-02-content-library.md` (to create)
- **Epic 03 — Mentee Dashboard:** `wiki/analyses/epic-03-mentee-dashboard.md` (to create)
- **Epic 04 — Admin + Stripe:** `wiki/analyses/epic-04-admin-stripe.md` (to create)

### References Used
- **StartSe AI Journey Audit:** `SÍRIOS/📚 Referências/audit-startse-ai-journey-copy-2026-05-15.md` — ARES copy reference
- **Live Mentee:** `SÍRIOS/MENTORADOS/Lucas Pesto/_hub.md` — design reference for dashboard UX
- **Agent Reference:** `SÍRIOS/RUNA SYSTEMS/agentes/agent-reference.md`

### Vault Skills
- `/llm-wiki-setup` — bootstrap `CLAUDE.md` + `wiki/index.md` (run once)
- `/wiki-self-heal` — after sessions generating 3+ docs
- `/graphify RUNA OS/` — after each build phase completion (Phases 1→2→3→4)

---

## GSTACK REVIEW REPORT

**Date:** 2026-05-15 | **Verdict:** APPROVED WITH NOTES

### Architecture Decisions Confirmed

| Decision | Implementation |
|----------|---------------|
| Middleware: no DB queries | Tier + menteeSlug stored in Clerk `publicMetadata` (JWT, zero network) |
| Admin gate | `userId === process.env.ARTHUR_CLERK_USER_ID` (not email string) |
| Route collision fix | Explicit `matcher` excludes `/entrar`, `/planos`, `/biblioteca`, `/admin` |
| Bunny.net security | Store `bunny_video_id` (not URL) — generate Signed URL server-side TTL=1h |
| Monorepo workspaces | Do NOT add workspaces to root `package.json` — `lp-runa` submodule conflict |
| Supabase client | Use `@supabase/ssr` (not deprecated `auth-helpers-nextjs`) |

### Stripe → Clerk Sync (Critical Flow)

```
Stripe webhook → Supabase profiles.tier = 'mentee'
              → Clerk API: updateUserMetadata(userId, { publicMetadata: { tier: 'mentee', menteeSlug } })
```
Self-healing pattern: if `publicMetadata.tier !== 'mentee'` but Supabase confirms mentee status → update Clerk + allow access.

### Webhook Security (Required)
Both webhook routes must verify signatures:
- Clerk: `svix` library (`Webhook.verify`)
- Stripe: `stripe.webhooks.constructEvent`

### Schema Corrections Applied
- `sessions.recording_url` → `sessions.bunny_video_id` (security fix)
- `content_items`: add index on `(tier_required, published_at DESC)` in migration

### Test Coverage Required
| Layer | Framework | Min Cases |
|-------|-----------|----------|
| Middleware | Vitest | 9 tier-routing scenarios |
| Webhooks | Vitest | Signature valid/invalid + idempotency |
| RLS | Supabase local | Cross-mentee isolation |
| E2E funnel | Playwright | DM → signup → resource → Stripe test → dashboard |

### RLS Policies
Must be written explicitly in `supabase/migrations/YYYYMMDD_plataforma_runa.sql` — not left as SQL comments.
