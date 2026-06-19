---
date: 2026-05-28
tags: [maya, genhq, arthur, color-palette, brand, solarpunk-hibrido]
project: runa-systems-global
type: brain-file
updated: 2026-05-28
canonical-source: apps/lp-runa/src/globals.css
---

# Color Palette — Arthur Runa / @arthsystems_

**Canonical source:** `apps/lp-runa/src/globals.css` — ALL tokens come from this file.
Do not invent, estimate, or use any color from outside globals.css.
Identity: **Solarpunk Híbrido** — Dual theme (Papel light + Forest dark).

---

## Tema Papel — Light (:root)

"carta da avó" · moss-on-paper · warm cream

| Token | CSS Variable | OKLCH | Hex approx. | Role |
|-------|-------------|-------|-------------|------|
| Background | `--background` | `oklch(0.9450 0.0200 90)` | `#F2EEDF` | Main surface — warm cream |
| Foreground | `--foreground` | `oklch(0.2350 0.0120 130)` | `#1F2418` | Text — dark ink |
| Card / Surface-1 | `--card` | `oklch(0.9750 0.0220 90)` | `#FBF8EC` | Elevated surface |
| Primary (Sage) | `--primary` | `oklch(0.4650 0.0450 145)` | `#4A6B4E` | Main accent — sage green |
| Secondary / Surface-2 | `--secondary` | `oklch(0.8950 0.0300 90)` | `#E8E2CC` | Secondary surface |
| Accent (Amber) | `--accent` | `oklch(0.6050 0.1050 65)` | `#B47B3F` | Level-up accent — amber |
| Destructive (Rosso) | `--destructive` | `oklch(0.5050 0.1500 35)` | `#A04030` | Error / danger |
| Border | `--border` | `oklch(0.8150 0.0400 90)` | `#D4CCAE` | Dividers, outlines |
| Muted Foreground | `--muted-foreground` | `oklch(0.5150 0.0200 130)` | `#6B7560` | Subdued text |

---

## Tema Forest — Dark (.dark)

deep forest dark · architectural · biofílico

| Token | CSS Variable | OKLCH | Hex approx. | Role |
|-------|-------------|-------|-------------|------|
| Background | `--background` | `oklch(0.1650 0.0080 145)` | `#0E1410` | Deep forest — main surface |
| Foreground | `--foreground` | `oklch(0.9350 0.0050 145)` | `#E8EDE9` | Text — light |
| Card / Surface-1 | `--card` | `oklch(0.2050 0.0080 145)` | `#161C18` | Elevated surface |
| Primary (Sage) | `--primary` | `oklch(0.6850 0.0450 145)` | `#88A88E` | Sage — lighter in dark |
| Secondary / Surface-2 | `--secondary` | `oklch(0.2550 0.0080 145)` | `#1F2620` | Secondary surface |
| Accent (Amber) | `--accent` | `oklch(0.7450 0.0850 75)` | `#D4A574` | Amber — warm in forest |
| Destructive (Rosso) | `--destructive` | `oklch(0.5550 0.1550 35)` | `#C25646` | Error / danger |
| Border | `--border` | `oklch(0.2950 0.0100 145)` | `#27302A` | Dividers |
| Muted Foreground | `--muted-foreground` | `oklch(0.6050 0.0120 145)` | `#7E8E80` | Subdued text |

---

## Semantic RUNA Tokens

Both themes define these semantic aliases. Values shift per theme — use the token name, not the hex.

### Sage (Primary brand green)

| Token | Papel OKLCH | Forest OKLCH | Use |
|-------|------------|-------------|-----|
| `--sage` | `var(--primary)` → `#4A6B4E` | `var(--primary)` → `#88A88E` | Primary brand color |
| `--sage-deep` | `oklch(0.3050 0.0350 145)` | `oklch(0.4050 0.0250 145)` | Deep contrast sage |
| `--sage-soft` | `oklch(0.4650 0.0450 145 / 0.10)` | `oklch(0.6850 0.0450 145 / 0.10)` | Tinted background |
| `--sage-glow` | `oklch(0.4650 0.0450 145 / 0.22)` | `oklch(0.6850 0.0450 145 / 0.22)` | Stronger tint/glow |

### Amber (Accent — level-up / estado)

| Token | Papel OKLCH | Forest OKLCH | Use |
|-------|------------|-------------|-----|
| `--amber` | `var(--accent)` → `#B47B3F` | `var(--accent)` → `#D4A574` | Primary accent |
| `--amber-deep` | `oklch(0.5050 0.0950 60)` | `oklch(0.5750 0.0850 60)` | Deeper amber |
| `--amber-soft` | `oklch(0.6050 0.1050 65 / 0.14)` | `oklch(0.7450 0.0850 75 / 0.14)` | Tinted background |

### Supporting Colors

| Token | Papel OKLCH | Forest OKLCH | Hex approx. | Use |
|-------|------------|-------------|-------------|-----|
| `--rosso` | `var(--destructive)` | `var(--destructive)` | `#A04030` / `#C25646` | Error, destructive actions |
| `--moss` | `oklch(0.5550 0.0650 130)` | `oklch(0.5850 0.0650 130)` | ~`#7A9068` | Chart-2, supporting green |

### Ink (Text hierarchy)

| Token | Papel | Forest | Use |
|-------|-------|--------|-----|
| `--ink` | `var(--foreground)` → `#1F2418` | `var(--foreground)` → `#E8EDE9` | Primary text |
| `--ink-soft` | `oklch(0.3850 0.0150 130)` | `oklch(0.8150 0.0080 145)` | Softer text |
| `--ink-muted` | `var(--muted-foreground)` → `#6B7560` | `var(--muted-foreground)` → `#7E8E80` | Subdued text |
| `--ink-faint` | `oklch(0.6850 0.0200 130)` | `oklch(0.4050 0.0120 145)` | Very faint text |

### Surfaces (elevation scale)

| Token | Papel | Forest | Notes |
|-------|-------|--------|-------|
| `--surface-1` | `var(--card)` → `#FBF8EC` | `var(--card)` → `#161C18` | First elevation |
| `--surface-2` | `var(--secondary)` → `#E8E2CC` | `var(--secondary)` → `#1F2620` | Second elevation |
| `--surface-3` | `oklch(0.8450 0.0400 90)` | `oklch(0.3150 0.0120 145)` | Third elevation |
| `--border-hi` | `oklch(0.7150 0.0450 90)` | `oklch(0.3850 0.0180 145)` | High-contrast border |

---

## Chart Colors (sage → amber arc)

Both themes use a 5-step arc from sage through amber to rosso:

| Step | Papel | Forest | Approx hue |
|------|-------|--------|-----------|
| chart-1 | sage `oklch(0.4650 0.0450 145)` | `oklch(0.6850 0.0450 145)` | sage green |
| chart-2 | moss `oklch(0.5850 0.0650 130)` | `oklch(0.5850 0.0650 130)` | moss green |
| chart-3 | amber `oklch(0.6050 0.1050 65)` | `oklch(0.7450 0.0850 75)` | warm amber |
| chart-4 | amber-deep `oklch(0.5750 0.0850 60)` | `oklch(0.5750 0.0850 60)` | deep amber |
| chart-5 | rosso `oklch(0.5050 0.1500 35)` | `oklch(0.5550 0.1550 35)` | earth red |

---

## Typography

| Role | Family | Fallback |
|------|--------|---------|
| `--font-sans` | Geist | ui-sans-serif, system-ui, -apple-system, sans-serif |
| `--font-serif` | Fraunces | Georgia, ui-serif, serif |
| `--font-mono` | Geist Mono | ui-monospace, 'Cascadia Code', monospace |
| `--tracking-normal` | `-0.005em` | Geist optical correction — tight but not cramped |

**Tracking scale (derived from --tracking-normal = -0.005em):**
- tighter: `-0.040em`
- tight: `-0.020em`
- normal: `-0.005em`
- wide: `+0.020em`
- wider: `+0.045em`
- widest: `+0.175em` (used in `.kicker` — uppercase mono labels)

---

## Geometry

| Token | Value | Notes |
|-------|-------|-------|
| `--radius` | `0.75rem` (12px) | Base radius — organic, never pill on UI |
| `--radius-sm` | `6px` | Smallest surfaces |
| `--radius-md` | `8px` | Standard cards, inputs |
| `--radius-lg` | `12px` | = base radius |
| `--radius-xl` | `16px` | Large panels |
| `--radius-2xl` | `20px` | Hero cards, modals |

---

## Shadows

### Tema Papel — biophilic, very subtle

Ink base `oklch(0.2350 0.0120 130)` at low opacity:
- `shadow-2xs` — 0px 1px 2px / 4% opacity
- `shadow-xs` — 0px 1px 2px / 6% opacity
- `shadow-sm` — layered 6% + 8% opacity
- `shadow` — 6% + 8% opacity
- `shadow-md` — 8% + 5%
- `shadow-lg` — 8% + 5%
- `shadow-xl` — 10% + 6%
- `shadow-2xl` — 0px 24px 48px / 18%

### Tema Forest — dark, dense, architectural

Black `oklch(0 0 0)` at higher opacity:
- `shadow-2xs` — 10% opacity
- `shadow-xs` — 14% opacity
- `shadow-sm` — 18% + 22%
- `shadow` — 18% + 24%
- `shadow-md` — 26% + 18%
- `shadow-lg` — 32% + 20%
- `shadow-xl` — 36% + 22%
- `shadow-2xl` — 0px 32px 64px / 50%

---

## Color Rules

### Do
- Sage is the dominant brand color — primary in all compositions
- Amber is the accent — max 20% of a composition, used for CTAs, state changes, highlights
- Papel theme for warm/organic/daytime content
- Forest theme for cinematic/architectural/nighttime content
- Allow surface progression (bg → surface-1 → surface-2 → surface-3) for depth

### Do Not
- **No black absolute dominance** — forest bg is `#0E1410`, not `#000000`
- **No electric blue** — this identity has no blue accent. Blue = old SINTROPIA, deprecated.
- **No neon or high-saturation gradients**
- **No purple, violet, or cold teals**
- **No glassmorphism** — shadows are biophilic/subtle, not glass blur
- **No warm orange** — amber is controlled warm, not orange/saffron

---

## Tailwind Utility Classes

Available via `@theme inline` mapping in globals.css:

```
bg-background, bg-foreground, bg-card, bg-primary, bg-secondary
bg-accent, bg-destructive, bg-border, bg-muted
text-foreground, text-primary, text-accent, text-destructive, text-muted-foreground

RUNA semantic:
bg-sage, text-sage, bg-amber, text-amber, text-rosso, text-moss
bg-sage-soft (10% opacity), bg-sage-glow (22% opacity)
bg-amber-soft (14% opacity)
```

Scene utility: `.scene-grain` — subtle radial sage + amber micro-gradients (rare use: hero/card backdrops)

---

## Prompt Vocabulary for Image Generation

When writing prompts for MAYA/Higgsfield, translate the palette to natural language:

### Papel (light scenes — day, warm, organic):
```
warm cream background, sage green accents, amber light, organic warm tones,
biophilic lighting, moss and forest textures, parchment-like warmth,
soft amber highlights, sage architectural details
```

### Forest (dark scenes — night, cinematic, architectural):
```
deep forest dark background (#0E1410), sage green accent lighting,
warm amber rim light, forest green shadows, dark architectural depth,
organic but cinematic, no electric blue, no neon, warm amber glow on surfaces
```

### Forbidden in all contexts:
```
electric blue, neon, cold blue lighting, purple, violet, glassmorphism,
pure black (#000000) dominant, bright warm orange, high saturation
```

---

## Application by Content Type

| Type | Theme | Dominant surface | Accent |
|------|-------|-----------------|--------|
| Editorial portraits (day) | Papel | cream `#F2EEDF` | sage | 
| Editorial portraits (night) | Forest | `#0E1410` deep forest | sage + amber rim |
| Carousel slides | Forest | `#0E1410` + `#161C18` card | amber CTA |
| Instagram Reels | Forest | deep forest | amber + sage |
| Product mockups | Papel or Forest | cream / forest | sage primary |
| Session/coaching content | Papel | warm cream | sage |
