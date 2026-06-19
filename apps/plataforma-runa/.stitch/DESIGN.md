# Design System: RUNA OS

## 1. Visual Theme & Atmosphere

Deep Forest Operational — A platform built like a precision instrument grown from living materials. The atmosphere is that of a master craftsman's workshop at dusk: structured, intentional, grounded in natural materials, lit only by the glow of the work itself. Not a startup dashboard, not a generic SaaS product — a curated environment where a mentee's transformation is tracked and made visible.

**Density:** 6/10 — Balanced. Dense enough to surface 21-session arcs and deliverable lists without information overload. Not art-gallery airy, not cockpit dense.
**Variance:** 6/10 — Controlled asymmetry. Layouts shift between left-weighted and split compositions. Never centered hero sections. Never chaotic.
**Motion:** 5/10 — Fluid CSS with organic growth metaphors. Expand, bloom, unfold. Never bounce, pop, or slide aggressively.

The design language draws from syntropic agriculture: the system produces more life than it consumes. Every interface decision should feel like it was grown, not assembled. Technology as ally — earthy, precise, alive.

---

## 2. Color Palette & Roles

- **Deep Forest** (`#080C09`) — Primary background. The soil. All page surfaces.
- **Forest Floor** (`#111712`) — Surface 1. Cards, panels, sidebar background. Elevated from canvas.
- **Understory** (`#1A201B`) — Surface 2. Hover states, nested panels, dropdowns, input backgrounds.
- **Bark Border** (`#2A342C`) — Structural lines. Card borders, dividers, table rules, sidebar border.
- **Fog White** (`#E8EDE9`) — Primary text. Headings, body, active labels. Slightly warm off-white.
- **Lichen Muted** (`#7A8C7C`) — Secondary text. Metadata, timestamps, helper labels, inactive nav items.
- **Sage Stone** (`#3D4842`) — Single accent. CTAs, active states, focus rings, progress fill, left-border nav indicator.
- **Sage Whisper** (`rgba(61,72,66,0.15)`) — Accent hover backgrounds, selected states, active nav fill.
- **Moss Shadow** (`rgba(0,0,0,0.4)`) — Modal overlays, card shadow depth. Always tinted to background hue — never neutral gray.

**Banned colors:** Pure black (`#000000`). Purple, neon blue, cyan, electric teal, or any glowing color. Warm whites or warm grays — all neutrals stay forest-cool. Oversaturated accents (saturation > 20% in this dark palette).

---

## 3. Typography Rules

- **Display / Headings:** `Geist Sans` — Track-tight (`letter-spacing: -0.02em`), weight 600–700. Hierarchy through weight and scale, not color shifts. Max display: `clamp(2rem, 5vw, 3.5rem)`.
- **Body / UI Labels:** `Geist Sans` — Weight 400, leading relaxed (`line-height: 1.6`), max 65 characters per line. Secondary labels in Lichen Muted (`#7A8C7C`).
- **Data / Code / Timestamps:** `Geist Mono` — All session numbers, version labels (V1/V2/V3), file sizes, progress counts, timestamps. Tabular figures. Size `0.875rem` for metadata.

**Scale:**
- H1: Geist Sans 700 · `2.25rem` · `#E8EDE9`
- H2: Geist Sans 600 · `1.5rem` · `#E8EDE9`
- H3: Geist Sans 600 · `1.125rem` · `#E8EDE9`
- Section label: Geist Sans 500 · `0.75rem` · uppercase · `letter-spacing: 0.08em` · `#7A8C7C`
- Data/count: Geist Mono 400 · `0.875rem` · `#E8EDE9`

**Banned:** Inter. System fonts (Arial, Helvetica). Any serif font (Times New Roman, Georgia, Garamond). Font mixing beyond Geist Sans + Geist Mono pair.

---

## 4. Component Stylings

**Buttons:**
- Primary: Sage Stone fill (`#3D4842`), Fog White text, `border-radius: 0.375rem` (6px — precise, not pill). No outer glow. Active: `-1px translateY` + background darkened to `rgba(61,72,66,0.7)`. Hover: `rgba(61,72,66,0.85)`.
- Ghost: 1px Bark Border, transparent fill, Fog White text. Hover: Sage Whisper fill.
- Destructive: 1px `#5C2626` border, transparent fill, text `#D4A0A0`. No fill backgrounds.
- No pill buttons (`border-radius: 9999px`) on action buttons. No gradient fills. No glow shadows.

**Cards:**
- Background: Forest Floor (`#111712`). Border: `1px solid #2A342C`. `border-radius: 0.5rem` (8px).
- Shadow: `0 1px 3px rgba(0,0,0,0.4)` — tinted to background hue, never neutral blue-gray.
- Hover elevation: `0 4px 12px rgba(0,0,0,0.5)` + Understory (`#1A201B`) background transition.
- **Rule:** Cards only when elevation communicates hierarchy. In dense list views (session list, deliverables browser, content library): use `border-top: 1px solid #2A342C` dividers instead of card grids.

**Inputs / Forms:**
- Background: Understory (`#1A201B`). Border: `1px solid #2A342C`. `border-radius: 0.375rem`.
- Focus ring: `2px solid #3D4842`, `outline-offset: 2px`. No box shadows on focus.
- Label always above input — never floating or inside. Error text below in `#D4A0A0` at `0.75rem`.
- No animated borders. No glowing focus states.

**Session Arc — Progress Indicators:**
- Linear bar: background Bark Border (`#2A342C`), fill Sage Stone (`#3D4842`). Height `4px`, `border-radius: 2px`.
- Session status indicators: Scheduled = Lichen Muted dot (`#7A8C7C`), Completed = Sage Stone dot (`#3D4842`), Cancelled = `#3D2424` dot, In Progress = Sage Stone dot with 2s pulse.
- No circular progress rings for the 21-session arc — use linear horizontal timeline.
- Session numbers in Geist Mono (`S01`, `S02`, ... `S21`).

**Navigation (sidebar):**
- Background: Deep Forest (`#080C09`) — same as page, differentiated only by `border-right: 1px solid #2A342C`.
- Inactive item: Lichen Muted text (`#7A8C7C`), no background.
- Active item: `border-left: 3px solid #3D4842` + Sage Whisper background (`rgba(61,72,66,0.15)`) + Fog White text.
- No highlighted sidebar backgrounds without left border. No rounded active pills.

**Status Badges:**
- Small pills for status labels only. Background Sage Whisper, text Sage Stone, `border: 1px solid #2A342C`.
- Height `1.25rem`, padding `0.25rem 0.625rem`, `font-size: 0.75rem`, Geist Mono.
- Status variants: "active" = Sage Stone, "completed" = Sage Stone at 70%, "scheduled" = Lichen Muted, "cancelled" = `#5C2626`.

**Loaders:**
- Skeletal shimmer matching exact layout dimensions. Shimmer: Understory (`#1A201B`) animated with gradient sweep in Forest Floor (`#111712`). Animation: 1.5s ease-in-out infinite.
- No circular spinners. No bouncing dots. No CSS loading animations with color.

**Empty States:**
- SVG line art illustration in Bark Border tone (`#2A342C`). Caption in Lichen Muted. Single action button (Ghost style).
- Example: empty deliverables → "Nenhum entregável ainda" + "Ver sessões".
- No stock photo backgrounds. No emoji-based empty states.

---

## 5. Layout Principles

- **Grid system:** CSS Grid exclusively. No Flexbox percentage math. No `calc()` width hacks.
- **Containment:** Max-width `1400px` centered for wide screens. Admin panel: `1200px`. Single content pages: `900px`.
- **Dashboard layout:** Fixed `240px` sidebar + fluid main content: `grid-template-columns: 240px 1fr`.
- **Asymmetric splits:** Left-weighted `2/3 + 1/3` preferred over equal `1/2 + 1/2` splits. Never centered hero.
- **No 3-equal-card grids:** Content library uses 2-column zig-zag or single-column list with border-top dividers.
- **Spacing scale:** 4px base unit. Section vertical gap: `48px` minimum. Card internal padding: `24px`. Sidebar item padding: `10px 16px`.
- **Full-height sections:** Always `min-h-[100dvh]` — never `h-screen` (iOS Safari layout jump).
- **Tables (admin panel):** Full-width, `border-collapse: separate`, `border-spacing: 0`. Row hover: Understory background. No zebra striping.

---

## 6. Motion & Interaction

**Spring physics:** `stiffness: 80, damping: 16` — softer than default for organic, grounded feel. Never linear easing. Never ease-in-out cubic-bezier with symmetric curves.

**Growth metaphors (all expand from 95%, never from 0%):**
- Cards mount: `scale(0.97) opacity(0)` → `scale(1) opacity(1)` over 200ms.
- Session rows unfurl from top: `translateY(-4px) opacity(0)` → `translateY(0) opacity(1)`.
- Staggered cascade: 40ms per item. Never instant list mount.

**Active micro-interactions:**
- Session number counter on dashboard load: Geist Mono typewriter reveal (character by character, 30ms interval).
- Progress bar on mount: fill animates with `ease-out-expo` over 800ms from 0 to target value.
- Active nav indicator: Sage Stone left border slides from `translateX(-3px)` → `translateX(0)` on route change.

**Perpetual micro-loops:**
- "Em progresso" session dot: `opacity 0.5 → 1 → 0.5` over 2s, infinite. Sage Stone color.
- Skeletal loader shimmer: gradient sweep every 1.5s.

**Performance rules:**
- Animate exclusively via `transform` and `opacity`. Never animate `top`, `left`, `width`, `height`, `padding`.
- Grain/texture overlays on `::before` pseudo-elements with `position: fixed`, `pointer-events: none`, `z-index: 0`.
- All animation-heavy components must be Client Components (`'use client'`) — never in Server Components.

---

## 7. Anti-Patterns (Banned)

- No emojis anywhere in the interface
- No `Inter` font — Geist Sans + Geist Mono only
- No serif fonts (Times New Roman, Georgia, Garamond, Palatino) — serif is banned in all dashboard/platform UI
- No pure black (`#000000`) — Deep Forest (`#080C09`) is the darkest surface
- No neon glow shadows or outer glow on any element
- No purple, cyan, electric blue accents — single Sage Stone (`#3D4842`) accent only
- No warm grays or warm whites — all neutrals stay forest-cool
- No centered hero layouts — left-aligned or split-screen only
- No 3-equal-column card grids — use asymmetric layouts or vertical list with dividers
- No AI copywriting clichés: "Seamless", "Unleash", "Next-Gen", "Elevate", "Empower", "Transform your workflow", "Game-changer"
- No filler UI text: "Scroll to explore", "Discover more", bouncing chevrons, scroll arrow icons
- No fabricated metrics: "99.98% uptime", "18.5k deploys", "124ms response" — use `[metric]` placeholders for any data not explicitly provided
- No fake system metric sections ("SYSTEM PERFORMANCE", "BY THE NUMBERS") filled with invented data
- No `LABEL // YEAR` formatting ("SYSTEM // 2026") — lazy AI typographic convention
- No broken Unsplash links — use `picsum.photos` with specific IDs or inline SVG illustrations
- No rounded-full pill buttons on action buttons — `border-radius: 0.375rem` (6px) precision only
- No spatial or cosmic aesthetics — no stars, space gradients, particle effects, or glassmorphism panels
- No generic placeholder names ("João Silva", "Acme Corp", "Usuário #1") — use "Lucas Pesto" as the live design reference
- No `h-screen` — always `min-h-[100dvh]`
- No `calc()` width percentage hacks in layout — CSS Grid only
