---
epic: "02"
story: "02-6"
title: "Post-login redirect flow — /entrar?redirect=/biblioteca/[slug] → resource page"
status: Done
type: feature
estimate: S
assignee: "@dev"
epic_file: "RUNA OS/wiki/analyses/epic-02-content-library.md"
prd: "RUNA OS/📐 Projetos/plataforma-runa-prd.md"
depends_on: "02-2, 02-3"
---

# Story 02-6 — Post-Login Redirect Flow

## Context

The middleware (Story 01-4, now in `proxy.ts`) already sets the `redirect` query param when unauthenticated users hit a protected route:

```typescript
const redirectUrl = new URL("/entrar", req.url);
redirectUrl.searchParams.set("redirect", req.nextUrl.pathname);
return NextResponse.redirect(redirectUrl);
```

So a user clicking a Zernio DM link to `/biblioteca/mapeando-o-negocio` is sent to `/entrar?redirect=/biblioteca/mapeando-o-negocio`.

This story wires the `redirect` param into Clerk's `<SignIn>` component so that after successful sign-in, the user lands on the original resource instead of the default post-login destination.

In Clerk's current API, pass the `redirectUrl` prop (not `afterSignInUrl` which was deprecated). In Next.js 16, `searchParams` is a `Promise` and must be awaited.

## Acceptance Criteria

- [x] `app/(public)/entrar/page.tsx` updated to read `redirect` query param
- [x] If `redirect` param present: Clerk's `<SignIn forceRedirectUrl={redirect} />` is set
- [x] If `redirect` param absent: `<SignIn forceRedirectUrl="/biblioteca" />` (default post-login destination)
- [x] `redirect` param value must start with `/` (sanitized — no open redirect to external URLs)
- [x] New user (signup flow): same redirect behavior applies after account creation
- [ ] Manual test: unauthenticated → `/biblioteca/mapeando-o-negocio` → `/entrar?redirect=...` → sign in → lands on `/biblioteca/mapeando-o-negocio`
- [ ] Manual test: direct `/entrar` with no param → sign in → lands on `/biblioteca`
- [x] `npm run build` passes with no TypeScript errors

## Implementation

```typescript
// app/(public)/entrar/page.tsx
import { SignIn } from "@clerk/nextjs";

export default async function EntrarPage({
  searchParams,
}: {
  searchParams: Promise<{ redirect?: string }>
}) {
  const { redirect } = await searchParams
  
  // Sanitize: only allow internal paths (starts with /)
  const redirectUrl = redirect?.startsWith('/') ? redirect : '/biblioteca'

  return (
    <div className="min-h-screen bg-bg flex items-center justify-center">
      <SignIn
        redirectUrl={redirectUrl}
        appearance={{
          variables: {
            colorBackground: "#111712",
            colorText: "#E8EDE9",
            colorPrimary: "#3D4842",
          },
        }}
      />
    </div>
  );
}
```

## Security Note

The `redirect?.startsWith('/')` check prevents open redirect attacks. Only internal paths (starting with `/`) are accepted. External URLs passed via the `redirect` param fall back to `/biblioteca`.

## File List

- `apps/plataforma-runa/app/(public)/entrar/page.tsx` (updated)
