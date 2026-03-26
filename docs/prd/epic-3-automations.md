---
epic: 3
title: Automations — ManyChat + HERMES
status: Approved
priority: P1
owner: HERMES
date: 2026-03-26
tags: [epic, manyChat, hermes, dm, onboarding, automations, n8n]
project: runa-systems-global
---

# Epic 3 — Automations: ManyChat + HERMES

## Goal

Activate comment-triggered DM automation on @arthsystems_ via ManyChat,
and build onboarding + upsell sequences via HERMES (N8N), so that
a follower who comments on a post enters a fully automated sales funnel.

## Why This Matters

This is the conversion engine. FREYJA generates the content.
ARES designs the offer. But nothing converts without the automation.
Comment → DM → Offer → Checkout is the core loop of the business.

## Current State

- ManyChat account: exists (Biznomad ManyChat MCP approved, not installed)
- HERMES: operational as agent, no N8N flows built yet
- N8N instance: live on Railway (primary-production-bae40.up.railway.app)
- MCP: n8n-mcp configured in ~/.claude.json
- Meta Graph API: credentials in .env, Live mode active

## Stories

| Story | Title                                               | Status   | Priority |
|-------|-----------------------------------------------------|----------|----------|
| 3.1   | Install and configure Biznomad ManyChat MCP         | Approved | P0       |
| 3.2   | Comment → DM flow: "Comente ARQUITETO"              | Pending  | P0       |
| 3.3   | Lead qualification sequence via DM (HERMES)         | Pending  | P1       |
| 3.4   | Onboarding sequence for new buyers                  | Pending  | P1       |
| 3.5   | Upsell sequence via N8N (HERMES orchestrates)       | Pending  | P2       |

## Acceptance Criteria (Epic Done When)

- [ ] User comments trigger word on @arthsystems_ post → receives DM automatically
- [ ] DM sequence delivers offer document or link
- [ ] New buyer triggers onboarding sequence in < 5 minutes
- [ ] All flows visible and editable in N8N dashboard
- [ ] Zero manual intervention required from operator

## Agents

| Agent   | Role                                              |
|---------|---------------------------------------------------|
| HERMES  | Flow design and N8N sequence implementation       |
| @devops | ManyChat MCP install, N8N configuration           |
| ARES    | Offer structure and funnel logic                  |
| FREYJA  | DM copy and sequence messaging                    |
| ORION   | Orchestration and approval gates                  |
