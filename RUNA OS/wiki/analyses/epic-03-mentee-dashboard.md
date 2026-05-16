---
date: 2026-05-15
type: epic
epic_id: "03"
title: Mentee Dashboard — Sessions, Deliverables, Progress, Squad
status: blocked-by-epic-01
phase: 3
weeks: "5–7"
project: plataforma-runa
prd: "[[plataforma-runa-prd]]"
---

# Epic 03 — Mentee Dashboard

> Complete mentee experience: sessions, deliverables, progress, squad.
> **Gate:** Epic 01 Done before starting any Story here (Epic 02 can run in parallel).

---

## Goal

Lucas Pesto logs into the platform and finds every session recording, every deliverable, and his full infrastructure progression — replacing Skool + Google Drive + Obsidian simultaneously.

## Success Criteria

- [ ] `sessions`, `deliverables`, `infrastructure_snapshots` tables with RLS
- [ ] `/[mentee]/sessoes` — 21-session arc with status indicators (scheduled/completed/cancelled)
- [ ] `/[mentee]/sessoes/[n]` — individual session: Bunny.net player, scope doc, deliverables list
- [ ] `/[mentee]/entregaveis` — deliverables browser, filterable by session + type
- [ ] `/[mentee]/progresso` — V1/V2/V3 infrastructure arc visualized (milestone checklist)
- [ ] `/[mentee]/squad` — squad architecture status (8 agents, phase per agent)
- [ ] Lucas Pesto's data migrated: 9 sessions + deliverables imported via admin panel

---

## Stories in this Epic (to be drafted by @sm — only after Epic 01 Done)

| Story | Title | Estimate |
|-------|-------|----------|
| 03-1 | Database: `sessions` + `deliverables` + `infrastructure_snapshots` + RLS | M |
| 03-2 | `/[mentee]/sessoes` — session list with arc visualization (1–21) | M |
| 03-3 | `/[mentee]/sessoes/[n]` — session detail: Bunny.net player + deliverables | L |
| 03-4 | Bunny.net server-side Signed URL generation (TTL 1h) | M |
| 03-5 | `/[mentee]/entregaveis` — deliverables browser with filters | M |
| 03-6 | `/[mentee]/progresso` — V1/V2/V3 arc tracker + milestone checklist | M |
| 03-7 | `/[mentee]/squad` — squad architecture status per agent | S |
| 03-8 | Lucas Pesto data migration — 9 sessions + deliverables via admin panel | M |

---

## Critical Architecture Notes

### Bunny.net Integration (Story 03-3 + 03-4) — CRITICAL SECURITY

**DO NOT** store raw Bunny.net stream URLs in the database. Engineering review identified this as a security risk.

```typescript
// Schema: sessions.bunny_video_id (Library ID + Video ID)
// NOT sessions.recording_url

// Server component generates Signed URL on-demand
async function getBunnySignedUrl(videoId: string): Promise<string> {
  const expiry = Math.floor(Date.now() / 1000) + 3600 // 1 hour TTL
  const token = generateHmacToken(videoId, expiry, process.env.BUNNY_SECURITY_KEY!)
  return `https://iframe.mediadelivery.net/embed/${process.env.BUNNY_LIBRARY_ID}/${videoId}?token=${token}&expires=${expiry}`
}
```

Required env vars:
- `BUNNY_LIBRARY_ID` — Bunny.net Stream library ID
- `BUNNY_API_KEY` — for admin upload routes
- `BUNNY_SECURITY_KEY` — for Signed URL generation

### RLS for Sessions/Deliverables (Story 03-1)

```sql
-- Sessions: mentee sees only own sessions
ALTER TABLE sessions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "mentee_own_sessions" ON sessions
  FOR SELECT USING (
    mentee_id = (SELECT id FROM profiles WHERE id = auth.uid()::uuid)
  );

-- Same pattern for deliverables, infrastructure_snapshots
```

### Lucas Pesto Migration (Story 03-8)

Data exists in:
- `SÍRIOS/MENTORADOS/Lucas Pesto/_hub.md` — session list + scope
- `SÍRIOS/MENTORADOS/Lucas Pesto/📋 escopos-de-aula/` — 9 session scope docs
- `SÍRIOS/MENTORADOS/Lucas Pesto/📦 entregáveis/` — agent files + task files

Migration approach: Arthur enters data via `/admin/mentorados/[id]` panel (built in Epic 04). Story 03-8 validates data integrity after import, not the import tooling itself.

**Dependency:** Story 03-8 requires Epic 04 admin panel to exist. May need to be moved to Epic 04 if sequencing is tight.

### Squad Status Data Model

```typescript
// infrastructure_snapshots.agents jsonb shape
type AgentStatus = 'not-started' | 'training-wheels' | 'assisted' | 'autonomous'
type AgentsSnapshot = {
  ceo: AgentStatus
  designer: AgentStatus
  copy: AgentStatus
  ofertas: AgentStatus
  comercial: AgentStatus
  financeiro: AgentStatus
  projetos: AgentStatus
  dev: AgentStatus
}
```

---

## Dependencies

- **Blocking Epic 03-8:** Epic 04 admin panel (or defer migration to Epic 04)
- **External:** Bunny.net account, Library ID, API key, Security key
- **External:** Lucas Pesto's files available in SÍRIOS vault (confirmed ✅)

---

## Out of Scope for Epic 03

- Admin upload flow (Epic 04)
- Stripe payment (Epic 04)
- Email sequences (Epic 04)
