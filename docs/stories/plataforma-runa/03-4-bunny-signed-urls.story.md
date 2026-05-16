---
epic: "03"
story: "03-4"
title: "Bunny.net Signed URL generation — server-side, TTL 1h"
status: Done
type: feature
estimate: M
assignee: "@dev"
epic_file: "RUNA OS/wiki/analyses/epic-03-mentee-dashboard.md"
prd: "RUNA OS/📐 Projetos/plataforma-runa-prd.md"
depends_on: "03-1"
---

# Story 03-4 — Bunny.net Signed URL generation (server-side, TTL 1h)

## Context

SECURITY CRITICAL. Bunny.net videos must NEVER be served via raw stream URLs. Raw URLs bypass DRM entirely and allow anyone with the URL to share the video indefinitely. Signed URLs expire after 1 hour and are tied to the video ID + security key.

This utility function lives in `lib/bunny.ts`. It is a pure server-side function — no `use client`, no import from Client Components. It will be called from Server Components and Server Actions in Stories 03-3 and forward.

The token is generated via SHA-256 HMAC using the Bunny security key, matching the Bunny.net Token Authentication spec exactly.

## Acceptance Criteria

- [x] `lib/bunny.ts` created with `getBunnySignedUrl(videoId: string): Promise<string>`
- [x] Token generated using `crypto.createHash('sha256')` with correct input format
- [x] URL format: `https://iframe.mediadelivery.net/embed/{libraryId}/{videoId}?token={token}&expires={expiry}`
- [x] TTL is exactly 3600 seconds (1 hour) from call time
- [x] Function throws if `BUNNY_LIBRARY_ID` or `BUNNY_SECURITY_KEY` env vars are missing
- [x] `.env.local.example` updated with `BUNNY_LIBRARY_ID`, `BUNNY_API_KEY`, `BUNNY_SECURITY_KEY`
- [x] Function has a unit test verifying token format and expiry calculation
- [x] `npm run build` passes with no TypeScript errors
- [x] `npm test` passes

## Implementation

```typescript
// apps/plataforma-runa/lib/bunny.ts
import crypto from 'crypto'

export async function getBunnySignedUrl(videoId: string): Promise<string> {
  const libraryId = process.env.BUNNY_LIBRARY_ID
  const securityKey = process.env.BUNNY_SECURITY_KEY

  if (!libraryId || !securityKey) {
    throw new Error('Bunny.net env vars missing: BUNNY_LIBRARY_ID, BUNNY_SECURITY_KEY')
  }

  const expiry = Math.floor(Date.now() / 1000) + 3600

  const token = crypto
    .createHash('sha256')
    .update(`${securityKey}${videoId}${expiry}`)
    .digest('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '')

  return `https://iframe.mediadelivery.net/embed/${libraryId}/${videoId}?token=${token}&expires=${expiry}`
}
```

## Environment Variables

Add to `.env.local` (and `.env.local.example` as empty placeholders):

```
BUNNY_LIBRARY_ID=         # Bunny.net library ID (numeric)
BUNNY_API_KEY=            # Bunny.net API key (for future admin operations)
BUNNY_SECURITY_KEY=       # Bunny.net Token Auth security key (for Signed URLs)
```

## Security Rules

- NEVER import `getBunnySignedUrl` from a `use client` component
- NEVER pass `bunny_video_id` as a prop to Client Components — only pass the final signed URL
- NEVER log the `securityKey` or the raw `token` value
- The signed URL itself is safe to pass to Client Components (it expires in 1h)

## File List

- `apps/plataforma-runa/lib/bunny.ts`
- `apps/plataforma-runa/__tests__/lib/bunny.test.ts`
- `apps/plataforma-runa/.env.local.example` (update)

## Change Log

| Date | Agent | Change |
|------|-------|--------|
| 2026-05-16 | @sm | Draft created |
| 2026-05-16 | @dev | Implemented — lib/bunny.ts + 6 passing tests (fake timers, token correctness, env validation) |
