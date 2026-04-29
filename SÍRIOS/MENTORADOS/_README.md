---
date: 2026-04-28
tags: [mentorados, onboarding, protocolo, runa-systems]
project: runa-systems-global
type: protocol
---

# MENTORADOS — Onboarding Protocol

> This folder tracks every client who goes through RUNA INTERVENÇÃO.
> One subfolder per client, cloned from `_template-mentorado/`.

---

## What Lives Here

```
MENTORADOS/
├── _README.md                    ← This file — read before onboarding any client
├── _template-mentorado/          ← Clone this for each new client
│   ├── 00-perfil-negocio.md      ← Client fills before S01
│   ├── 01-mapeamento-s01.md      ← Output of S01 (departments, tasks, delegation)
│   ├── 02-diagnostico-trilha.md  ← Track selected (A/B/C) + justification
│   ├── 03-roadmap-personalizado.md ← Personalized 21-session roadmap
│   ├── 04-progresso.md           ← Session-by-session progress tracker
│   └── 05-entregaveis-mentorado.md ← What the client delivers between sessions
└── sessoes/                      ← Base session docs (S01–S21 + Tracks A/B/C)
    ├── S01-mapeamento.md
    ├── S02-S03-claude-code.md
    └── ...
```

---

## Onboarding a New Client — Checklist

### Before S01

- [ ] Clone `_template-mentorado/` → rename to `{nome-cliente}/` (lowercase, no spaces: e.g., `joao-silva/`)
- [ ] Send `00-perfil-negocio.md` to the client — they fill it before S01
- [ ] Review the client's answers before the session
- [ ] Prepare S01 agenda based on their business type

### After S01

- [ ] Fill `01-mapeamento-s01.md` with session output
- [ ] Complete `02-diagnostico-trilha.md` — select A, B, or C
- [ ] Build `03-roadmap-personalizado.md` — 21 sessions with actual dates
- [ ] Share the roadmap with the client

### Ongoing (every session)

- [ ] Update `04-progresso.md` immediately after each session
- [ ] Record what was built, what was decided, what is pending
- [ ] Send any homework via `05-entregaveis-mentorado.md` reference

---

## Naming Convention

| What | Pattern | Example |
|------|---------|---------|
| Client folder | `{nome}-{sobrenome}/` | `joao-silva/` |
| Files inside | Unchanged from template | `00-perfil-negocio.md` |

**Never modify files in `_template-mentorado/` for a specific client.** Always clone first.

---

## Session Docs (Reference)

The `sessoes/` folder contains the canonical session documents for all 21 sessions.
These are the Arthur-side session guides — not the Skool delivery docs.

| File | Sessions covered |
|------|-----------------|
| `S01-mapeamento.md` | S01 — Business mapping |
| `S02-S03-claude-code.md` | S02–S03 — Claude Code setup |
| `S04-S06-squad.md` | S04–S06 — Squad configuration |
| `S07-S08-mind.md` | S07–S08 — Knowledge base |
| `track-a-*.md` | S09–S21 Track A (Creator) |
| `track-b-*.md` | S09–S21 Track B (Conversão) |
| `track-c-*.md` | S09–S21 Track C (Automação) |

---

## How to Use the Roadmap

The roadmap in `03-roadmap-personalizado.md` is the master reference for each client.
It maps:
- Which sessions they will have and in what order
- Which Skool docs to share after each session
- Which artefatos to deliver and when
- Any track-specific adjustments

The SKOOL docs are in `SÍRIOS/SKOOL/` — never modify them for a client.
Instead, deliver them with client variables filled (`{NOME}`, `{NEGOCIO}`, etc.).

---

## Hiperpersonalization Flow

```
00-perfil-negocio (client fills)
  ↓
S01 session runs → 01-mapeamento-s01 (Arthur fills)
  ↓
02-diagnostico-trilha (Arthur diagnoses → Track A/B/C)
  ↓
03-roadmap-personalizado (Arthur builds → 21 sessions with dates)
  ↓
Sessions run → 04-progresso updated after each one
  ↓
Between sessions → 05-entregaveis-mentorado tracks homework
```

---

*MENTORADOS is operational data — not delivered to Skool, not public.*
*SKOOL docs are the delivery layer. This folder is the orchestration layer.*
