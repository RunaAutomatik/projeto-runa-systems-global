---
epic: 2
title: Runa Command Center V3
status: Planned
priority: P1
owner: ORION
date: 2026-03-26
tags: [epic, command-center, dashboard, hud, interface]
project: runa-systems-global
---

# Epic 2 — Runa Command Center V3

## Goal

Build the visual operating system of Runa Systems Global — a local web app (localhost:3000)
where ORION is the entry point, workers are first-class citizens, and the full squad state
is visible and controllable at a glance.

## Why This Matters

Currently the system is powerful but invisible. The operator must memorize commands,
switch between terminal + Obsidian + browser, and has no way to know if a worker
is broken until it causes damage. The Command Center fixes this.

## Current State

- Next.js app exists at `apps/command-center/`
- V1/V2 base structure in place
- PRD complete (`SÍRIOS/📐 Projetos/runa-command-center-prd.md`)
- No V3 panels implemented yet

## Aesthetic

Bioluminescent HUD — deep space dark base, amber/gold organic glow.
Inspired by: AIOS (Alan Nicolas) + Blake Sanchez "Futuristic HUD Sound Design".

## Stories

| Story | Title                                         | Status  | Priority |
|-------|-----------------------------------------------|---------|----------|
| 2.1   | HUD base layout — dark/amber bioluminescent   | Pending | P1       |
| 2.2   | ORION panel — primary entry point             | Pending | P1       |
| 2.3   | Workers panel — status and health display     | Pending | P1       |
| 2.4   | Agent Dossiês — knowledge base per agent      | Pending | P2       |
| 2.5   | System Health Score — always visible          | Pending | P2       |
| 2.6   | Conclave mode — multi-agent decision panel    | Pending | P3       |

## Acceptance Criteria (Epic Done When)

- [ ] Operator can see all squad agents and their current state at localhost:3000
- [ ] Operator can send message to ORION from the interface
- [ ] Workers (content-worker, instagram-worker) show live status
- [ ] System Health Score visible in header at all times
- [ ] No terminal required for basic squad operations

## Architecture Reference

PRD: `SÍRIOS/📐 Projetos/runa-command-center-prd.md`
Squad: `SÍRIOS/📐 Projetos/squad-architecture.md`

## Agents

| Agent          | Role                                      |
|----------------|-------------------------------------------|
| @dev           | Frontend implementation                   |
| @ux-design-expert | HUD design system and component specs  |
| ORION          | Feature definition and orchestration      |
