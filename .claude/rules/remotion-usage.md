# Remotion — Usage Rules

## What it is

React-based programmatic video creation framework. Creates videos from zero via
React components and browser-native composition. NOT for editing real footage —
that is video-use's job.

Docs: https://www.remotion.dev

## Status

```
⚠️  No confirmed infsh app-id — "remotion-render via infsh" in capability-map is aspirational
✅  Available via npm — @remotion/core + @remotion/cloudrun or @remotion/lambda
✅  Planned for Stage 2 — content-worker pipeline (deferred per content-pipeline-architecture.md)
⚠️  Commercial license required for enterprise use
```

Access paths:
- **@dev local development:** `npm install @remotion/core` in the target package
- **Content-worker (Stage 2):** `@remotion/cloudrun` pointing to GCP linked to automatikruna@gmail.com
- **Alt (Stage 2):** `@remotion/lambda renderMediaOnLambda()` on AWS

> ⚠️ Do NOT call `infsh app run remotion/*` — no app-id is registered. Use npm packages directly.

## Agent Assignment

| Agent | Role |
|-------|------|
| @dev | Primary — programmatic video templates, component authoring |
| MAYA | Secondary — animation overlay within the video-use pipeline (parallel sub-agent) |

Other agents: route through @dev or MAYA.

## When to Use

- Animated data overlays with dynamic content
- Templated programmatic video generation (batch, personalized)
- Course diagrams and visualizations for RUNA SYSTEMS modules
- Branded intro/outro sequences built from React components
- Animation overlays requested via video-use (runs as parallel sub-agent)

## When NOT to Use

| Instead → use |
|---|
| Editing real footage → **video-use** |
| Simple static images → **nano-banana-2** (infsh) |
| AI-generated cinematic video → **Higgsfield MCP** |
| Lip sync / avatar animation → **muapi infinitetalk** |
| Quick AI video → **Higgsfield seedance_2_0** |

## Usage Pattern (local development — @dev)

```bash
# Install in target package
npm install @remotion/core @remotion/renderer @remotion/cli

# Render a composition
npx remotion render src/index.ts MyComposition out/video.mp4 \
  --props='{"data": [...], "title": "..."}' \
  --codec=h264
```

## Usage Pattern (Cloud Run — Stage 2)

```typescript
import { renderMediaOnCloudRun } from '@remotion/cloudrun';

const result = await renderMediaOnCloudRun({
  serveUrl,
  composition: 'MyComposition',
  inputProps: { data: [...] },
  codec: 'h264',
  region: 'us-east1',
});
```

## Integration with video-use

Remotion is one of 4 animation overlay backends in the video-use pipeline
(alongside HyperFrames, Manim, PIL). When video-use receives a brief that
requests animated overlays, it spawns Remotion as a parallel sub-agent.
video-use then composites the Remotion `.mp4` into footage via FFmpeg.

**Never run Remotion sequentially inside video-use** — always parallel sub-agent.

Full integration docs: `.claude/rules/video-use-usage.md`

## Architecture Decision

Architecture docs (`content-pipeline-architecture.md`, `content-automation-architecture.md`)
confirmed that Remotion is **Stage 2** in the content-worker pipeline. Stage 1 uses FFmpeg
as compositor stub. Stage 2 wires up Remotion Cloud Run for Reels and video content.

4–5 day setup overhead makes Stage 1 use impractical — use FFmpeg stubs in the meantime.

## Product Application

| Product | Use Case |
|---------|---------|
| RUNA SYSTEMS | Module intro animations, course diagrams for the 4 technical modules |