---
epic: 4
title: Infrastructure & DevOps
status: In Progress
priority: P0
owner: ORION
date: 2026-03-26
tags: [epic, railway, deploy, infra, devops, environment]
project: runa-systems-global
---

# Epic 4 — Infrastructure & DevOps

## Goal

Deploy all workers and services to Railway so the pipeline runs in production,
independent of the local machine, with proper environment variables,
health checks, and basic error visibility.

## Why This Matters

Everything built in Epic 1 runs locally. The moment the laptop closes, nothing works.
Production deploy is the bridge between "it works on my machine" and
"the business runs while I sleep."

## Current State

| Service           | Local | Railway | Notes                          |
|-------------------|-------|---------|--------------------------------|
| content-worker    | ✅    | ❌      | railway.json exists in app dir |
| instagram-worker  | ✅    | ❌      | No railway config yet          |
| N8N               | ✅    | ✅      | primary-production-bae40       |
| Command Center    | ✅    | ❌      | Next.js, not yet deployed      |

## Stories

| Story | Title                                              | Status    | Priority |
|-------|----------------------------------------------------|-----------|----------|
| 4.1   | Deploy content-worker to Railway                   | Draft     | P0       |
| 4.2   | Deploy instagram-worker to Railway                 | Pending   | P0       |
| 4.3   | Environment variables and secrets in Railway       | Pending   | P0       |
| 4.4   | Basic error alerting (Railway logs + notifications)| Pending   | P1       |
| 4.5   | Deploy Command Center to Railway (or Vercel)       | Pending   | P2       |

## Acceptance Criteria (Epic Done When)

- [ ] content-worker accessible at public Railway URL
- [ ] instagram-worker accessible at public Railway URL
- [ ] All META_* and SUPABASE_* env vars configured in Railway dashboard
- [ ] End-to-end pipeline works from Railway (no localhost dependency)
- [ ] Basic health check endpoint responds on both workers

## Agents

| Agent   | Role                                              |
|---------|---------------------------------------------------|
| @devops | All Railway deployments (exclusive authority)     |
| @dev    | Health check endpoints, env var validation code   |
| ORION   | Orchestration, approval, documentation            |
