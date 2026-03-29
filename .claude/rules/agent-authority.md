# Agent Authority — Detailed Rules

## Delegation Matrix

### @devops (Gage) — EXCLUSIVE Authority

| Operation | Exclusive? | Other Agents |
|-----------|-----------|--------------|
| `git push` / `git push --force` | YES | BLOCKED |
| `gh pr create` / `gh pr merge` | YES | BLOCKED |
| MCP add/remove/configure | YES | BLOCKED |
| CI/CD pipeline management | YES | BLOCKED |
| Release management | YES | BLOCKED |

### @pm (Morgan) — Epic Orchestration

| Operation | Exclusive? | Delegated From |
|-----------|-----------|---------------|
| `*execute-epic` | YES | — |
| `*create-epic` | YES | — |
| EPIC-{ID}-EXECUTION.yaml management | YES | — |
| Requirements gathering | YES | — |
| Spec writing (spec pipeline) | YES | — |

### @po (Pax) — Story Validation

| Operation | Exclusive? | Details |
|-----------|-----------|---------|
| `*validate-story-draft` | YES | 10-point checklist |
| Story context tracking in epics | YES | — |
| Epic context management | YES | — |
| Backlog prioritization | YES | — |

### @sm (River) — Story Creation

| Operation | Exclusive? | Details |
|-----------|-----------|---------|
| `*draft` / `*create-story` | YES | From epic/PRD |
| Story template selection | YES | — |

### @dev (Dex) — Implementation

| Allowed | Blocked |
|---------|---------|
| `git add`, `git commit`, `git status` | `git push` (delegate to @devops) |
| `git branch`, `git checkout`, `git merge` (local) | `gh pr create/merge` (delegate to @devops) |
| `git stash`, `git diff`, `git log` | MCP management |
| Story file updates (File List, checkboxes) | Story file updates (AC, scope, title) |

### @architect (Aria) — Design Authority

| Owns | Delegates To |
|------|-------------|
| System architecture decisions | — |
| Technology selection | — |
| High-level data architecture | @data-engineer (detailed DDL) |
| Integration patterns | @data-engineer (query optimization) |
| Complexity assessment | — |

### @data-engineer (Dara) — Database

| Owns (delegated from @architect) | Does NOT Own |
|----------------------------------|-------------|
| Schema design (detailed DDL) | System architecture |
| Query optimization | Application code |
| RLS policies implementation | Git operations |
| Index strategy execution | Frontend/UI |
| Migration planning & execution | — |

### MAYA — Audio-Visual Production

| Allowed | Blocked |
|---------|---------|
| `infsh app run` (any AV model) | Direct publish to Instagram |
| Asset generation (image, video, voice, music) | Bypass FREYJA review for @arthsystems_ |
| Post-processing (background-removal, upscaling) | Override FREYJA narrative decisions |
| Return production reports to FREYJA | Access Supabase directly (delegate to @dev) |
| Standalone generation (non-@arthsystems_ requests) | — |

**MAYA's production pipeline authority:**
- Receives briefs FROM: FREYJA (`*brief-maya`), ARES (ad creatives), direct user
- Returns assets TO: FREYJA (for `*av-review`), user (standalone requests)
- Cannot proceed without brief or explicit instruction

### FREYJA — Narrative Intelligence + AV Review Authority

| Operation | Exclusive? | Details |
|-----------|-----------|---------|
| AV review/approval for @arthsystems_ | YES | No asset ships without FREYJA's approval |
| `*brief-maya` — AV production brief | YES | FREYJA defines narrative direction |
| `*av-review` — narrative aderência check | YES | 6-point review checklist |
| `*approve-output` — release for publishing | YES | Gates Editor Workers pipeline |
| Copy, captions, hooks | YES | Narrative layer — no overlap with MAYA |
| Content strategy and calendar | YES | — |

**NOT FREYJA's responsibility:**
- AV generation → delegate to MAYA
- Publishing automation → delegate to HERMES
- Offer architecture → delegate to ARES

### @aiox-master — Framework Governance

| Capability | Details |
|-----------|---------|
| Execute ANY task directly | No restrictions |
| Framework governance | Constitutional enforcement |
| Override agent boundaries | When necessary for framework health |

## Cross-Agent Delegation Patterns

### Git Push Flow
```
ANY agent → @devops *push
```

### Schema Design Flow
```
@architect (decides technology) → @data-engineer (implements DDL)
```

### Story Flow
```
@sm *draft → @po *validate → @dev *develop → @qa *qa-gate → @devops *push
```

### Epic Flow
```
@pm *create-epic → @pm *execute-epic → @sm *draft (per story)
```

### AV Production Flow (@arthsystems_)
```
FREYJA *brief-maya
  → MAYA *review-brief (plan) → MAYA executes (infsh app run)
  → FREYJA *av-review (narrative check)
  → [REJECTED] → MAYA regenerates with feedback
  → [APPROVED] → FREYJA *approve-output
  → Editor Workers (background-removal, image-upscaling, format)
  → HERMES (publish via n8n + Meta Graph API)
```

### AV Production Flow (standalone / non-@arthsystems_)
```
User → MAYA *generate-image / *generate-video / *generate-voice
  → MAYA executes directly (no FREYJA review required)
  → Asset returned to user
```

## Escalation Rules

1. Agent cannot complete task → Escalate to @aiox-master
2. Quality gate fails → Return to @dev with specific feedback
3. Constitutional violation detected → BLOCK, require fix before proceed
4. Agent boundary conflict → @aiox-master mediates
5. MAYA asset rejected 3+ times by FREYJA → Escalate to @aiox-master for brief clarification
6. FREYJA brief is unclear or contradicts voice DNA → MAYA escalates to FREYJA before generating
