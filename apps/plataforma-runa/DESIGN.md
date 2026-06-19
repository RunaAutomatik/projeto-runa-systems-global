# Design System: RUNA OS Platform

> Dual-theme system: **Forest** (authenticated dashboard) + **Papel** (public landing).
> Two distinct cognitive registers, one codebase. CSS custom properties are the bridge.

---

## CSS Custom Properties — The Bridge

Both themes are encoded as class-scoped CSS custom properties on the `html` element.
Tailwind v4 maps these to utility classes via `@theme inline`. Never hardcode hex values in components.

```css
.theme-forest {
  --bg: #080C09;
  --surface-1: #111712;
  --surface-2: #1A201B;
  --border: #2A342C;
  --text: #E8EDE9;
  --muted: #7A8C7C;
  --accent: #3D4842;
  --accent-soft: rgba(61, 72, 66, 0.15);
}

.theme-papel {
  --bg: #F8F5EF;
  --surface-1: #FFFFFF;
  --surface-2: #F0EDE6;
  --border: #D4CFC6;
  --text: #1A2219;
  --muted: #6B7280;
  --accent: #E8A13A;
  --accent-tech: #4ABFCC;
  --accent-soft: rgba(232, 161, 58, 0.12);
}
```

**Tailwind v4 mapping (globals.css `@theme inline` block):**

```css
@theme inline {
  --color-bg: var(--bg);
  --color-surface-1: var(--surface-1);
  --color-surface-2: var(--surface-2);
  --color-border: var(--border);
  --color-text: var(--text);
  --color-muted: var(--muted);
  --color-accent: var(--accent);
  --color-accent-soft: var(--accent-soft);
  --color-accent-tech: var(--accent-tech, transparent);
}
```

**Usage in JSX:** `bg-bg`, `text-text`, `text-muted`, `bg-surface-1`, `border-border`, `bg-accent`, `text-accent`.
**Never:** `bg-[#080C09]`, `text-[#E8EDE9]`, or any hardcoded hex in className.

---

## Theme 1 — Forest (Authenticated Surfaces)

### 1. Visual Theme & Atmosphere

Architectural precision with biophilic restraint. The forest theme is what you see after you log in — a signal that you have entered a workspace. It never entertains; it focuses.

- **Density:** 7/10 — data-dense but not cluttered. Information is accessible, not decorative.
- **Variance:** 5/10 — structured asymmetry. Sidebar anchors the left; content flows right.
- **Motion:** 4/10 — restrained. Transitions exist to communicate state change, not to delight.

Atmosphere: a well-lit architect's studio after midnight. Off-black walls, precise grid lines, muted moss accents. Every element earns its space. No decorative flourish that doesn't carry data.

### 2. Color Palette & Roles

- **Deep Forest Canvas** (`#080C09`) — Primary background. The `html`/`body` base. Absorbs attention.
- **Panel Fill** (`#111712`) — Card backgrounds, sidebar, panels. 1 stop lighter than canvas.
- **Nested Surface** (`#1A201B`) — Input fills, nested cards, code blocks. Creates visual depth.
- **Structural Border** (`#2A342C`) — Dividers, card outlines, table row separators. Barely visible.
- **Primary Text** (`#E8EDE9`) — Headings, labels, interactive text. Near-white with green undertone.
- **Muted Moss** (`#7A8C7C`) — Metadata, timestamps, secondary labels. Mid-forest green.
- **Sage Accent** (`#3D4842`) — Active nav states, focus rings, badges, interactive hover. A barely-there accent — it signals without shouting.
- **Accent Glow** (`rgba(61, 72, 66, 0.15)`) — Hover background overlays, active row tints, focus zone fills.

**Banned in Forest:** Pure white (`#FFFFFF`) backgrounds, neon colors, warm tones, blue-tinted surfaces, any color with saturation > 60%.

### 3. Typography Rules

- **Display / Headings:** Geist Sans — track-tight (`-0.03em`), weight 600–700. Scale via `clamp()`. H1: `clamp(1.75rem, 4vw, 2.5rem)`. H2: `clamp(1.25rem, 2.5vw, 1.75rem)`.
- **Body:** Geist Sans — weight 400, leading `1.65`, max `60ch` per line. Color: `--text`.
- **Labels / Metadata:** Geist Sans — weight 500, size `0.75rem`, uppercase tracking `0.08em`. Color: `--muted`.
- **Numbers / Timestamps / Code:** Geist Mono — all numeric data in dashboard uses monospace. Ensures column alignment.
- **Banned:** Inter, any serif font, system-ui as primary.

High-density override: all numerical values in tables and metrics use Geist Mono at all times.

### 4. Component Stylings

**Buttons:**
- Primary: `bg-accent` fill, `text-text`, border: `1px solid rgba(232,237,233,0.1)`. On active: `-1px` translateY + reduced opacity (0.85). No outer glow.
- Ghost: `bg-transparent`, `border-border`, `text-text`. Hover: `bg-accent-soft`.
- Danger: `bg-transparent`, `border-[#5C3232]`, `text-[#E88A7A]`. Hover: `bg-[rgba(92,50,50,0.2)]`.
- Minimum tap target: 44px height always.

**Cards:**
- Background: `bg-surface-1`. Border: `1px solid var(--border)`. Corner radius: `0.75rem` (12px).
- Shadow: `0 1px 3px rgba(0,0,0,0.4)` — tinted to background hue, never bright.
- Elevation only used when hierarchy demands it. Tables use border-top dividers instead of cards.

**Session Cards (3 states):**
- Future: `bg-surface-1`, `border-border`, muted timestamp. Status badge `bg-surface-2 text-muted`.
- Available: `bg-surface-1`, `border-accent` (1px), accent dot indicator. Status badge `bg-accent-soft text-accent`.
- Completed: `bg-surface-2` (slightly recessed), dimmed text, checkmark icon in `text-muted`.

**Inputs / Forms:**
- Label: above input, `text-muted`, size `0.75rem`, weight 500, uppercase, `0.08em` tracking.
- Input: `bg-surface-2`, `border-border`, `text-text`, corner radius `0.5rem`. Focus: `border-accent` outline `2px solid var(--accent)`.
- Error text: below input, `text-[#E88A7A]`, size `0.75rem`. Icon: inline before text.
- No floating labels. No placeholder-as-label.

**Tables (Admin data-dense variant):**
- Header row: `bg-surface-2`, `text-muted`, uppercase, `0.06em` tracking, `0.75rem`.
- Data rows: `bg-transparent`, `border-t border-border`. Hover: `bg-accent-soft`.
- No card wrap around tables — use the table itself as the container.
- Loading: skeleton rows matching exact column widths, shimmer animation.
- Empty: centered illustration area with instruction text (never "No data found").
- Error: inline error banner above table, `bg-[rgba(92,50,50,0.2)] border-[#5C3232]`.

**Sidebar Navigation:**
- `bg-surface-1`, `border-r border-border`, fixed width `240px` desktop.
- Nav items: `text-muted` default, `text-text bg-accent-soft` active.
- Active left border: `2px solid var(--accent)` as visual anchor.
- Section labels: uppercase, `text-muted`, `0.08em` tracking, `0.6rem`.

**Skeleton Loaders:**
- `bg-surface-2` base, shimmer: `bg-gradient-to-r from-surface-2 via-surface-1 to-surface-2`.
- Match exact layout dimensions — never generic blocks.
- Animation: `animate-pulse` or custom shimmer at 1.5s loop.

**Empty States:**
- Composed composition: icon (SVG, `text-muted`, 32px) + headline (`text-text`, weight 600) + instruction line (`text-muted`) + optional CTA button.
- Never just text. Never placeholder data.

### 5. Layout Principles

- CSS Grid primary. Flexbox only for single-axis alignment.
- Dashboard layout: `grid-cols-[240px_1fr]` desktop, single column mobile.
- Content max-width: `1200px` centered in the content area.
- Section padding: `clamp(1.5rem, 4vw, 3rem)` horizontal, `clamp(1.5rem, 3vw, 2.5rem)` vertical.
- No centered hero sections — Forest theme has no hero. Dashboard surfaces open directly to content.
- All sections use `min-h-[100dvh]` when full-height is needed. Never `h-screen`.
- No overlapping elements — every element in its own clean spatial zone.

### 6. Motion & Interaction

- Spring physics: `stiffness: 120, damping: 22`. Weighty, professional.
- Page transitions: `opacity` + `translateY(4px)` fade-up on mount. Duration: `200ms`.
- State transitions: `150ms ease-out` for color/background changes (hover, active, focus).
- Staggered lists: `delay: index * 40ms` for item cascade reveals.
- Active dashboard components: subtle `opacity` pulse for "live" indicators.
- Animate via `transform` and `opacity` only. Never animate `width`, `height`, `top`, `left`.

---

## Theme 2 — Papel (Public Landing Page)

### 1. Visual Theme & Atmosphere

Warm-cream precision. The Papel theme is what the world sees before logging in — the face of RUNA OS to the outside. It carries the identity of Dear Alice and Chobani Solarpunk: warm organic surfaces, amber light, cyan precision. It is never soft or casual — it is earthy and confident.

- **Density:** 4/10 — generous whitespace. Every section breathes. Conversion requires clarity.
- **Variance:** 7/10 — asymmetric layouts. No centered hero. Split screens, zig-zag, pinned elements.
- **Motion:** 5/10 — fluid but purposeful. Reveals on scroll. Nothing loops decoratively.

Atmosphere: a well-curated print studio. Warm cream paper, amber afternoon light filtering through, precise cyan line work as accent. The space feels artisan but technically exacting. Zero SaaS blue. Zero startup purple. Organic meets precise.

### 2. Color Palette & Roles

- **Warm Cream Canvas** (`#F8F5EF`) — Primary background. The base surface across all public pages.
- **Pure Surface** (`#FFFFFF`) — Card fills, modal backgrounds. Clean against the cream base.
- **Nested Warm** (`#F0EDE6`) — Input fills, code blocks, subtle nested sections.
- **Warm Divider** (`#D4CFC6`) — Section dividers, card borders. Warm-neutral.
- **Forest Ink** (`#1A2219`) — Primary text. Dark forest green — not pure black. Grounded.
- **Warm Mist** (`#6B7280`) — Secondary text, metadata, labels. Neutral gray reads cleanly on cream.
- **Amber Warmth** (`#E8A13A`) — Primary accent. CTAs, highlights, hover states. Saturation: ~65%.
- **Amber Soft** (`rgba(232, 161, 58, 0.12)`) — Hover fills, focus zones, badge backgrounds.
- **Cyan Tech** (`#4ABFCC`) — Secondary accent for technical elements: code, data, metadata, tech callouts. Never used for CTAs.

**Banned in Papel:** Pure black (`#000000`) text, neon colors, cool gray backgrounds, blue SaaS accents, oversaturated colors, purple in any role.

### 3. Typography Rules

- **Display / Headings:** Outfit or Satoshi — weight 700–800. `letter-spacing: -0.04em`. Large, confident, never screaming. Scale: H1 `clamp(2.5rem, 6vw, 4.5rem)`. H2 `clamp(1.75rem, 3.5vw, 2.75rem)`.
- **Body:** Outfit or Satoshi — weight 400, leading `1.7`, max `62ch`. Color: `--text`. Size: `1.0625rem` (17px).
- **Labels / Overlines:** Outfit — size `0.7rem`, uppercase, `0.12em` tracking, weight 600, color `--muted`.
- **Data / Code / Technical:** Geist Mono — technical precision on a warm surface. Color: `--accent-tech` or `--muted`.
- **Banned:** Inter, Times New Roman, Georgia, any serif. No system fonts as primary.

### 4. Component Stylings

**Hero Section:**
- Asymmetric split layout: left-anchored headline, right side: visual or testimonial/stat element.
- No centered hero. No full-width centered text stack.
- Inline image typography technique: embed small contextual images between headline words at type-height, rounded (`0.375rem`), acting as visual punctuation.
- On mobile: inline images stack below the headline text.
- Max 1 primary CTA. No secondary "Learn more" link.
- CTA button: `bg-accent` (`#E8A13A`), `text-[#1A2219]`, font-weight 700, `border-radius: 0.5rem`. Active: `-1px` translateY. Hover: `opacity: 0.88`. Minimum 48px height.

**Feature / Benefits Section:**
- Zig-zag 2-column layout (alternating left/right text + visual). No 3-equal-cards.
- Asymmetric grid alternatives: `grid-cols-[3fr_2fr]` or `grid-cols-[2fr_3fr]` alternating.
- Card radius: `1rem`. Background: `bg-surface-1`. Border: `1px solid var(--border)`.

**Pricing Block:**
- Single product: RUNA at R$ 7.000. No pricing grid — one offer, one price, one CTA.
- Price display: large typographic treatment, Geist Mono for number, Outfit for currency label.
- CTA: amber button — `bg-accent`, `text-[#1A2219]`, weight 700.

**Forms (public context):**
- Label above. Accent border on focus: `2px solid var(--accent)`.
- `bg-surface-2` fill. `border-border` default state. `0.625rem` corner radius.

**Cards:**
- `bg-surface-1`, `border-border`, `border-radius: 1rem`.
- Shadow: `0 2px 8px rgba(26, 34, 25, 0.08)` — warm-tinted shadow.
- Hover: subtle lift `translateY(-2px)`, shadow deepens.

### 5. Layout Principles

- Max-width: `1320px` centered. Horizontal padding: `clamp(1.5rem, 5vw, 4rem)`.
- All section vertical gaps: `clamp(4rem, 10vw, 8rem)`.
- No centered hero sections — asymmetric always when variance > 4.
- Features section: zig-zag grid, never 3 equal columns.
- Full-height sections: `min-h-[100dvh]`. Never `h-screen`.
- Footer: left-aligned links on a `bg-surface-2` base with `border-t border-border`.

### 6. Motion & Interaction

- Scroll-triggered reveals: `opacity: 0 → 1` + `translateY(16px → 0)` on enter. Duration `400ms ease-out`.
- Stagger: 60ms delay per feature item in list reveals.
- CTA button: tactile `-1px` translateY on active, no scale animation.
- No looping decoration. Motion serves understanding, not entertainment.
- Animate via `transform` and `opacity` only.

---

## Shared Rules (Both Themes)

### Responsive Behavior

- Mobile breakpoint: `< 768px` — all multi-column layouts collapse to single column.
- Typography: all headlines scale via `clamp()`. Body text minimum `1rem` / `16px`.
- Touch targets: all interactive elements minimum `44px` height, `44px` tap area.
- Navigation: desktop nav collapses to clean mobile menu below 768px.
- Inline images in Papel hero stack below headline on mobile.
- No horizontal overflow on any viewport.

### Anti-Patterns (Banned Across Both Themes)

- No emojis anywhere in the UI
- No `Inter` font — ever
- No pure black (`#000000`) — use `#1A2219` or `#080C09`
- No neon colors, outer glow shadows, or glowing accent rings
- No oversaturated accents (saturation > 70% except for Amber which sits at ~65%)
- No gradient text on large headings
- No custom mouse cursors
- No overlapping elements — every element in its own spatial zone
- No 3-equal-column card grids for features — zig-zag or asymmetric always
- No centered Hero layouts when variance > 4
- No fabricated metrics, statistics, or data — use `[placeholder]` labels
- No fake system metric dashboards with invented numbers
- No `LABEL // YEAR` typographic formatting
- No AI copywriting clichés: "Elevate", "Seamless", "Unleash", "Next-Gen", "Empower"
- No filler UI text: "Scroll to explore", "Swipe down", bouncing scroll arrows
- No generic placeholder names ("John Doe", "Acme Corp")
- No generic circular spinners — skeleton loaders only
- No floating labels in forms — label always above

### Font Loading

Both font variable classes AND the theme class must be merged on `<html>`:

```tsx
// app/layout.tsx
<html className={`${geistSans.variable} ${geistMono.variable} theme-${theme}`}>
```

Font variables (`--font-geist-sans`, `--font-geist-mono`) are resolved via Next.js font optimization.
Outfit/Satoshi is loaded only on public routes via a scoped font variable.

### FOUC Prevention

```tsx
// app/layout.tsx (server component)
import { cookies } from 'next/headers'
const theme = (await cookies()).get('runa-theme')?.value ?? 'forest'
```

Default: `'forest'` — authenticated users never flash an unstyled dashboard.
The cookie is set client-side by ThemeProvider on toggle.
