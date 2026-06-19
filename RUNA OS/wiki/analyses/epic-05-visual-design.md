---
date: 2026-05-18
type: epic
epic_id: "05"
title: Visual Design — Dual-theme system, landing page, mentee + admin UI polish
status: in-progress
phase: 5
project: plataforma-runa
prd: "[[plataforma-runa-prd]]"
---

# Epic 05 — Visual Design

> The platform stops looking like a scaffold and becomes a product.
> Every screen has intentional identity. Forest for authenticated users; Papel for the public world.

---

## Goal

All platform screens implement the dual-theme design system. Zero generic AI aesthetics.
The public landing page converts to R$7.000 RUNA checkout. Admin + mentee dashboards communicate
role and hierarchy clearly. `/impeccable audit` passes with zero HIGH severity issues.

## Success Criteria

- [ ] `DESIGN.md` encodes both themes (forest + papel) as single source of truth
- [ ] CSS custom properties + Tailwind semantic colors wired — zero hardcoded hex values in components
- [ ] ThemeProvider with FOUC prevention via server-side cookie
- [ ] ClerkProvider renders with forest dark appearance — no white flash on sign-in
- [ ] Landing page (`/planos`, RUNA OS public) uses tema papel — asymmetric layout, R$7.000 CTA
- [ ] Mentee dashboard uses tema forest — session cards with 3 states, skeleton loaders, empty states
- [ ] Admin panel uses tema forest (data-dense variant) — tables with loading/empty/error, sidebar
- [ ] Biblioteca: asymmetric content grid, video player with loading skeleton, functional filter
- [ ] Auth pages: Clerk appearance matching forest (`#080C09` bg, `#3D4842` primary)
- [ ] `npx impeccable detect apps/plataforma-runa/app --json` → zero HIGH severity
- [ ] All layouts work at 390px — no horizontal overflow, 44px touch targets

---

## Dual-Theme Rationale

### Why two themes?

The platform serves two distinct contexts that require different cognitive registers:

| Context | Theme | Audience | Goal |
|---------|-------|----------|------|
| Public landing page | **Papel** (light/cream) | Prospects, visitors | Trust, warmth, conversion |
| Authenticated dashboard | **Forest** (dark) | Active mentees, Arthur | Focus, precision, work |

Switching themes between public and authenticated surfaces is a deliberate signal:
"You've entered a different space." Forest tells the mentee: this is where work happens.
Papel tells the prospect: this is a human place, not a sterile SaaS.

### Forest Theme — Authenticated Surfaces

Identity: architectural precision, biophilic signals, growth metaphors. Never warm, never casual.

```css
.theme-forest {
  --bg: #080C09;          /* deep forest dark — primary canvas */
  --surface-1: #111712;   /* card backgrounds, panel fills */
  --surface-2: #1A201B;   /* nested surfaces, input fills */
  --border: #2A342C;      /* dividers, card borders */
  --text: #E8EDE9;        /* primary text */
  --muted: #7A8C7C;       /* secondary text, metadata */
  --accent: #3D4842;      /* interactive elements, focus rings */
}
```

Typography: Geist Sans (headings) + Geist Mono (data, timestamps, code).

### Papel Theme — Public Landing

Identity: Dear Alice / Chobani Solarpunk. Warm cream, amber warmth, cyan tech precision.
Earthy and organic without being soft or casual.

```css
.theme-papel {
  --bg: #F8F5EF;          /* warm cream canvas */
  --surface-1: #FFFFFF;   /* card backgrounds */
  --surface-2: #F0EDE6;   /* nested surfaces */
  --border: #D4CFC6;      /* dividers */
  --text: #1A2219;        /* primary text — dark forest green, not pure black */
  --muted: #6B7280;       /* secondary text */
  --accent: #E8A13A;      /* amber warm — CTAs, highlights */
  --accent-tech: #4ABFCC; /* cyan tech — secondary accent, code, data */
}
```

Typography: Outfit/Satoshi (headings) + Geist Mono (data). Inter BANNED in both themes.

---

## Components to Create / Modify

### New components (05-3)
- `components/theme-provider.tsx` — `ThemeContext`, `useTheme` hook, toggle logic
- `components/theme-toggle.tsx` — client toggle button (localStorage + cookie)

### Modified files (05-2)
- `app/globals.css` — add `.theme-forest` and `.theme-papel` CSS custom property blocks
- `tailwind.config.ts` — extend `colors` with semantic vars (`bg`, `surface-1`, `text`, `muted`, `accent`)
- `app/layout.tsx` — read `runa-theme` cookie server-side, inject `className` on `<html>`

### New / updated UI — public routes (05-4)
- `app/(public)/page.tsx` — landing page hero, features, pricing, footer
- `app/(public)/planos/page.tsx` — pricing page (currently exists — update with tema papel)
- `app/(public)/planos/_components/` — pricing card components

### New / updated UI — protected routes (05-5)
- `app/(protected)/` — sidebar nav, layout wrapper with forest theme
- `app/(protected)/sessoes/` — session list, session cards, empty/skeleton states

### Admin UI pass (05-6)
- `app/admin/` — all existing admin pages — add proper table states, form label-above, sidebar polish
- `components/admin/admin-sidebar.tsx` — already exists; apply forest tokens

### Biblioteca UI (05-7)
- `app/(protected)/biblioteca/page.tsx` — asymmetric grid, filter/search
- `app/(protected)/biblioteca/[slug]/page.tsx` — video player with skeleton

### Auth pages (05-8)
- Clerk sign-in/sign-up appearance — `colorBackground: '#080C09'`, `colorPrimary: '#3D4842'`
- `app/(protected)/bem-vindo/page.tsx` — post-signup welcome
- `app/(public)/sem-acesso/page.tsx` — paywall/access denied with RUNA CTA

---

## Recommended Implementation Sequence

```
05-1 — DESIGN.md (taste-design skill — @ux-design-expert)
  ↓
05-2 — CSS tokens + Tailwind config (@dev)
  ↓
05-3 — ThemeProvider + FOUC prevention (@dev)
  ↓ (parallel after 05-3)
05-4  05-5  05-6  05-8
  ↓ (after 05-5)
05-7
  ↓ (after all UI stories)
05-9  05-10 (parallel)
```

The foundation (05-1 → 05-2 → 05-3) must be sequential — every UI story depends on the token
system and ThemeProvider being in place before implementing screen-level UI.

05-4, 05-5, 05-6, and 05-8 can be implemented in parallel once 05-3 is Done.

---

## Risks

### FOUC (Flash of Unstyled Content)

**Risk:** User sees wrong theme for 1-2 frames on load.
**Cause:** `ThemeProvider` uses `useEffect` to read localStorage — this runs client-side after hydration.
**Mitigation:** Read `runa-theme` cookie in `app/layout.tsx` server-side via `cookies()` from `'next/headers'`.
Inject `className={`theme-${theme}`}` directly on `<html>` before any JS runs.

```tsx
// app/layout.tsx — server component
import { cookies } from 'next/headers'
const theme = cookies().get('runa-theme')?.value ?? 'forest'
<html className={`theme-${theme}`}>
```

Default: `'forest'` — authenticated users never see an unstyled dashboard.

### Clerk Dark Mode

**Risk:** Clerk modals (sign-in, sign-up) render with white background against `#080C09` canvas.
**Mitigation:** Import `dark` from `'@clerk/themes'` and pass to `ClerkProvider`.

```tsx
import { dark } from '@clerk/themes'
<ClerkProvider appearance={{ baseTheme: dark, variables: { colorBackground: '#080C09', colorPrimary: '#3D4842' } }}>
```

Note: `@clerk/themes` package must be installed (`npm install @clerk/themes`). Verify it exists in
`package.json` before implementing 05-3 — add it if missing.

### Tailwind Purge / CSS Var Safety

**Risk:** Tailwind's JIT purge removes classes that reference CSS vars if the class name is constructed
dynamically (e.g., `text-${color}` interpolation).
**Mitigation:** Never interpolate Tailwind class names. Use full class strings in JSX.

```tsx
// CORRECT — Tailwind sees the full class at build time
<div className="bg-bg text-text border-border">
// WRONG — purged at build time
<div className={`bg-${theme}-bg`}>
```

### Geist Font Loading

**Risk:** `next/font` with multiple fonts adds complexity to layout.tsx.
**Mitigation:** Define all fonts at the top of `app/layout.tsx` as `const` before the component.
Pass to `<html className>` via CSS variables, NOT via injecting classes that conflict with theme class.

```tsx
const geistSans = GeistSans({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = GeistMono({ variable: '--font-geist-mono', subsets: ['latin'] })
// Merge both font variables AND theme class
<html className={`${geistSans.variable} ${geistMono.variable} theme-${theme}`}>
```

---

## Dependencies

- **Blocks:** Epic 05 stories 05-2 through 05-10 (all depend on 05-1's DESIGN.md)
- **Does NOT block:** Epic 04 QA (runs in separate session, no visual dependency)
- **External blockers:** None — this epic is self-contained UI work
- **Supabase migration** (`subscriptions` table) — NOT a dependency for UI stories; required only for
  payments flow testing (Epic 04 scope)
