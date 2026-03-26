---
epic: 1
title: Content Automation Pipeline
status: In Progress
priority: P0
owner: ORION
date: 2026-03-26
tags: [epic, content-pipeline, freyja, workers, instagram, reels]
project: runa-systems-global
---

# Epic 1 — Content Automation Pipeline

## Goal

Complete the automated content creation and publishing pipeline for @arthsystems_,
enabling FREYJA to generate and publish all content types (carousel, image, story, reel)
without manual intervention.

## Why This Matters

This is the operational backbone of Runa Systems. Without a fully operational pipeline:
- FREYJA cannot publish Reels (highest organic reach format)
- Content production is manual and bottlenecked
- POSICIONAMENTO$ product has no live demo
- Railway deploy is blocked — pipeline only runs locally

## Current State

| Content Type  | Status            | Location                              |
|---------------|-------------------|---------------------------------------|
| Carousel      | ✅ Operational    | content-worker/src/carousel/          |
| Image (single)| ✅ Operational    | content-worker/src/image/             |
| Story (9:16)  | ✅ Operational    | Same pipeline, 1080×1920 viewport     |
| Reel / Video  | ❌ Stub           | video/compositor.js returns pending   |
| AI Image Gen  | ⚠️ Schema only    | mood/visual_direction fields exist    |
| Publish image | ✅ Operational    | instagram-worker/src/publish.js       |
| Publish reel  | ❌ Not built      | publish-reel.js does not exist        |

## Stories

| Story | Title                                      | Status  | Priority |
|-------|--------------------------------------------|---------|----------|
| 1.1   | FFmpeg compositor for slide-based reels    | Draft   | P0       |
| 1.2   | Replicate AI Image Gen (use_ai_gen flag)   | Pending | P1       |
| 1.3   | Reel publishing via Meta Graph API         | Pending | P1       |
| 1.4   | Deploy content-worker to Railway           | Draft   | P0       |
| 1.5   | Deploy instagram-worker to Railway         | Pending | P0       |

## Acceptance Criteria (Epic Done When)

- [ ] Given a FREYJA brief with `type: reel`, system generates and publishes MP4 9:16 to @arthsystems_
- [ ] Given a brief with `use_ai_gen: true`, Replicate API is called and image is returned
- [ ] Both workers are live on Railway and accessible via public URL
- [ ] End-to-end test: brief → render → publish → post visible on Instagram
- [ ] No manual steps required from operator

## Architecture Reference

See: `SÍRIOS/📐 Projetos/content-automation-architecture.md`

## Agents

| Agent   | Role                                      |
|---------|-------------------------------------------|
| @dev    | Implementation of all stories             |
| FREYJA  | Content brief generation (consumer)       |
| @devops | Railway deploy, environment variables     |
| ORION   | Orchestration, documentation              |
