---
date: 2026-04-01
tags: [skill, orion, knowledge-base, akasha, rag, extraction]
project: runa-systems-global
status: active
owner: ORION
---

# Skill: knowledge-extraction

> **Skill file:** `~/.claude/skills/knowledge-extraction/SKILL.md`
> **Owner:** ORION (`@aiox-master`)
> **Commands:** `*extract-knowledge`, `*update-kb`

## Purpose

Transforms any content type (PDFs, transcripts, YouTube videos, podcasts, books, Twitter threads) into structured AKASHA-compatible knowledge bases optimized for LLM agent consumption.

## Origin

Based on the "Framework Universal de Extração e Estruturação de Conhecimento" by DOUG DEMARCO / DOMINION SYSTEMS (2025), with significant AIOX-specific additions.

## Gaps resolved vs. original framework

| Gap | Resolution |
|-----|-----------|
| No AKASHA/AIOX integration | Added `AIOX_ROUTING` metadata block (target_agent, vault_path, rag_enabled) |
| Portuguese output | Enforced English-only output per language-policy |
| Single mode for all content | 3 modes: QUICK / STANDARD / DEEP |
| No NotebookLM compatibility | Added DEEP mode section with compatibility checklist |
| Vague chunking (200-500 tokens) | Per-chunk rules: one concept per chunk, 3-5 keywords, self-contained |
| No update protocol | Section 7: incremental update workflow with version bumping |
| No validation | Section 6: 4-question output validation test |
| No AKASHA routing table | Section 5: domain → vault path lookup table |

## Extraction Modes

| Mode | Use Case | Output Size |
|------|----------|-------------|
| QUICK | Social media, single clips | < 300 tokens |
| STANDARD | Books, long-form interviews, podcasts | Full template |
| DEEP | RAG/NotebookLM sources | Full + chunked sections |

## AKASHA Vault Targets

| Content | Path |
|---------|------|
| Alex Hormozi | `AKASHA/📚 Alex Hormozi/` |
| Hormozi frameworks (curated) | `AKASHA/📚 Hormozi Frameworks/` |
| Sales frameworks | `AKASHA/📚 Vendas Alto Ticket/` |
| Agent knowledge | `AKASHA/🧠 Agent Knowledge Maps/` |
| General index | `AKASHA/🔗 Index/` |
| Study base | `AKASHA/📖 Base de Estudo/` |

## Workflow

```
Source content
  → ORION *extract-knowledge (mode selection)
  → AKASHA vault (C:/runa-systems-global/AKASHA/)
  → [optional] ALEX ai-rag-pipeline
  → [optional] notebooklm-mcp
  → Agents consume via memory or RAG query
```

## Related

- [[capability-map]] — skill listed under ORION
- [[akasha-index]] — AKASHA vault structure
- `AKASHA/📚 Alex Hormozi/` — first large corpus organized with this skill (602 files)
