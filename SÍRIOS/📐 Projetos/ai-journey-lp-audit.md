---
date: 2026-05-15
tags: [audit, lp-runa, ai-journey, design-system, motions, reference]
project: runa-systems-global
type: design-audit
---

# AI Journey LP — Full Design & Engineering Audit

> Source: `https://pages.startse.com/inteligencia-artificial/ai-journey`
> Extracted: 2026-05-15
> Purpose: Blueprint for restructuring the RUNA LP

---

## Stack

| Layer | Technology |
|-------|-----------|
| CMS | HubSpot (server-side rendered) |
| CSS | Pure CSS — BEM naming convention |
| Animation | CSS keyframes only (no JS animation library) |
| JS | Vanilla JS — IntersectionObserver + class toggling |
| Fonts | Google Fonts — Archivo Black, Archivo, JetBrains Mono |
| Icons | SVG inline |
| No React | No Next.js, no framer-motion |

> RUNA adaptation: framer-motion already installed — prefer CSS keyframes for entrance
> animations (same performance, zero bundle cost) and use framer-motion only for
> complex scroll-driven sequences (scroll-linked scrubbing, parallax).

---

## Design System

### Color Palette

| Token | Hex | Use |
|-------|-----|-----|
| `--color-ink-950` | `#050505` | Page background |
| `--color-ink-700` | `#1a1a1a` | Card backgrounds |
| `--color-cream-200` | `#EFE5D4` | Primary body text |
| `--color-cream-100` | `#F5EFE6` | Lighter text, labels |
| `--color-orange-500` | `#FF4E00` | Primary accent (→ RUNA teal `#00A3C4`) |
| `--color-orange-300` | `#FF7A3D` | Hover / lighter accent |
| `--color-blue-500` | `#1F3FFF` | Secondary accent |
| `--color-blue-400` | `#3B82F6` | Blue highlights |
| `--color-gold-500` | `#C99A2C` | Premium / guarantee |
| `--color-electric-500` | `#1F6FEB` | Electric blue glow |
| `--color-white` | `#FFFFFF` | Pure white |

### RUNA Color Substitution Map

| AI Journey | RUNA | Notes |
|-----------|------|-------|
| `#FF4E00` (orange) | `#00A3C4` (teal) | Primary accent everywhere |
| `#FF7A3D` (orange light) | `#33BADA` (teal light) | Hover states |
| `#1F3FFF` (blue) | Keep or use `#00A3C4` | Arthur's brand is monochromatic |
| `#C99A2C` (gold) | Keep `#C99A2C` | Premium signal for guarantee/price sections |

### Typography

```css
/* Display / Headlines */
font-family: 'Archivo Black', sans-serif;
font-weight: 900;
font-size: clamp(3.5rem, 7vw, 5.5rem);  /* --ai-headline-size */
line-height: 1.0;
letter-spacing: -0.04em;

/* Body */
font-family: 'Archivo', sans-serif;
font-weight: 400;
font-size: 1.125rem; /* 18px */
line-height: 1.65;

/* Technical / Mono */
font-family: 'JetBrains Mono', monospace;
font-size: 0.75rem;
letter-spacing: 0.12em;
text-transform: uppercase;
```

> RUNA adaptation: Geist Mono already in use — keep. For display, consider Archivo Black
> as an upgrade over the current generic sans. Matches dark-architect aesthetic.

### Spacing System

```css
/* Section spacing */
padding: 60px 0;          /* all sections */

/* Container */
max-width: 80rem;         /* 1280px */
padding: 0 1.5rem;        /* 24px gutters */
margin: 0 auto;

/* Grid gaps */
gap: 1.5rem;              /* cards */
gap: 3rem;                /* major sections */
```

### Orb Decoration Pattern

Ambient color blobs used as section backgrounds:

```css
.section__orb {
  position: absolute;
  border-radius: 9999px;
  filter: blur(80px);
  opacity: 0.15;           /* 0.10 – 0.20 range */
  pointer-events: none;
  z-index: -1;
}

/* Example: hero left orb */
.ai-hero__orb-left {
  width: 400px;
  height: 400px;
  background: #FF4E00;     /* → #00A3C4 for RUNA */
  top: -100px;
  left: -150px;
}
```

---

## Section Architecture (15 Sections)

### Section 1 — Hero (`ai-hero`)

**Purpose:** Hook + qualifier + CTA above fold

**Layout:** 2-column grid on desktop (copy left, media/badge right), single column mobile

```html
<section class="ai-hero">
  <div class="ai-hero__badge">           <!-- Live dot + "MENTORIA ABERTA" -->
    <span class="ai-hero__badge-dot">
      <span class="ai-hero__badge-dot-ping"></span>  <!-- ping animation -->
    </span>
    <span>MENTORIA ABERTA</span>
  </div>
  <h1 class="ai-hero__headline">         <!-- Archivo Black, clamp 3.5→5.5rem -->
    [HEADLINE LINE 1]<br>
    <em>[HEADLINE LINE 2]</em>           <!-- italic accent color -->
  </h1>
  <p class="ai-hero__subtitle">          <!-- 18px Archivo, cream-200 -->
  <ul class="ai-hero__trust">            <!-- 3 trust signals with check icons -->
  <div class="ai-hero__cta">             <!-- Primary + secondary CTA -->
    <a class="ai-hero__btn-primary">     <!-- accent color bg, 18px, bold -->
    <a class="ai-hero__btn-secondary">   <!-- ghost / underline -->
  </div>
  <p class="ai-hero__roi">               <!-- Social proof metric below CTA -->
</section>
```

**Animations:** `.animate-fade-in` class toggled by IntersectionObserver:

```css
@keyframes ai-hero-fade-in {
  0%   { opacity: 0; transform: translateY(8px); }
  100% { opacity: 1; transform: translateY(0); }
}
.ai-hero__badge    { animation: ai-hero-fade-in 0.6s cubic-bezier(.2,.8,.2,1) 0.1s both; }
.ai-hero__headline { animation: ai-hero-fade-in 0.6s cubic-bezier(.2,.8,.2,1) 0.25s both; }
.ai-hero__subtitle { animation: ai-hero-fade-in 0.6s cubic-bezier(.2,.8,.2,1) 0.4s both; }
.ai-hero__trust    { animation: ai-hero-fade-in 0.6s cubic-bezier(.2,.8,.2,1) 0.5s both; }
.ai-hero__cta      { animation: ai-hero-fade-in 0.6s cubic-bezier(.2,.8,.2,1) 0.65s both; }
```

**Live badge ping:**

```css
@keyframes ai-hero-ping {
  75%, 100% { opacity: 0; transform: scale(2); }
}
.ai-hero__badge-dot-ping {
  animation: ai-hero-ping 1.4s cubic-bezier(0,0,.2,1) infinite;
  position: absolute; inset: 0;
  background: var(--color-orange-500);  /* → teal */
  border-radius: 9999px;
}
```

---

### Section 2 — Social Proof Marquee (`ai-marquee`)

**Purpose:** Continuous horizontal ticker of company logos or testimonial names

**Layout:** Full-width, overflow hidden, two duplicated tracks for seamless loop

```css
@keyframes ai-marquee-scroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
.ai-marquee__track {
  display: flex;
  width: max-content;
  animation: ai-marquee-scroll 30s linear infinite;
}
/* Duplicate content twice in HTML for seamless loop */
```

---

### Section 3 — Qualifier (`ai-pqe`)

**Purpose:** "ANTES DE CONTINUAR LENDO" — filter the right audience

**Layout:** Single centered column, minimal styling

**Copy pattern:**
> "Esta mentoria NÃO é para todos. Antes de continuar, verifique se você se encaixa:"
> — negative filter first, then positive confirmation

---

### Section 4 — Problem Statement (`ai-prob`)

**Purpose:** Pain amplification + SVG animated line chart

**Key animation — SVG line draw:**

```css
@keyframes ai-prob-draw {
  to { stroke-dashoffset: 0; }
}
@keyframes ai-prob-pulse {
  0%, 100% { opacity: 1; }
  50%       { opacity: .6; }
}

.ai-prob__line {
  stroke-dasharray: 1200;
  stroke-dashoffset: 1200;
  animation: ai-prob-draw 1.6s cubic-bezier(.6,.05,.3,1) forwards,
             ai-prob-pulse 3.2s ease-in-out 1.6s infinite;
}
```

> Trigger: `.animate-fade-in` class added by IntersectionObserver at threshold 0.3

---

### Section 5 — Pain Marquee (`ai-lmq`)

**Purpose:** Scrolling cards with pain-point statements

**Layout:** Same marquee pattern as Section 2, vertical or horizontal scroll

---

### Section 6 — Transition Copy

**Purpose:** Bridge from problem to solution — single impactful sentence

**Example:** "Você não precisa de mais ferramentas. Você precisa de um sistema."

---

### Section 7 — Journey Overview (`ai-six`)

**Purpose:** 6-layer breakdown of what the student gets

**Layout:** 3×2 grid, each card has: number, title, 1-line description

**Style:** Dark cards (`#1a1a1a`), number in accent color, minimal

---

### Section 8 — Curriculum Tracks (`ai-trilhas`)

**Purpose:** Detailed curriculum with accordion-style expansion

**Layout:** Vertical list with expandable rows

---

### Section 9 — Diagnostic Method (`ai-diag`)

**Purpose:** Explain the proprietary method/diagnosis framework

**Copy pattern:** "How we do it differently" — mechanism unique

---

### Section 10 — Mentors/Expert (`ai-mint`)

**Purpose:** Expert credibility — who delivers

**Layout:** 2-column: photo left, credentials right. Interactive canvas on hover.

---

### Section 11 — Methodology Cards (`ai-met`)

**Purpose:** Detail the delivery method — cards with hover interactions

**Layout:** 3-column grid (desktop), 1-column (mobile)

**Critical hover system:**

```css
/* Card base */
.ai-met__card {
  border: 1px solid rgba(255,255,255,0.08);
  transition: border-color 0.4s cubic-bezier(.2,.8,.2,1),
              box-shadow 0.4s cubic-bezier(.2,.8,.2,1);
  position: relative;
  overflow: hidden;
}

/* Hover state */
.ai-met__card:hover {
  border-color: rgba(255,78,0,0.4);     /* → rgba(0,163,196,0.4) for RUNA */
  box-shadow: 0 0 24px rgba(255,78,0,0.15);  /* → teal glow */
}

/* Beam — 1px gradient line at top */
.ai-met__card-beam {
  position: absolute; top: 0; left: 0; right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--accent), transparent);
  opacity: 0;
  transition: opacity 0.4s cubic-bezier(.2,.8,.2,1);
}
.ai-met__card:hover .ai-met__card-beam { opacity: 1; }

/* Shine — radial gradient overlay */
.ai-met__card-shine {
  position: absolute; inset: 0;
  background: radial-gradient(circle at 50% 0%, rgba(255,78,0,0.06) 0%, transparent 60%);
  opacity: 0;
  transition: opacity 0.4s cubic-bezier(.2,.8,.2,1);
}
.ai-met__card:hover .ai-met__card-shine { opacity: 1; }

/* Icon rotate on hover */
.ai-met__card-icon-box {
  transition: transform 0.4s cubic-bezier(.2,.8,.2,1);
}
.ai-met__card:hover .ai-met__card-icon-box {
  transform: scale(1.14) rotate(6deg);
}

/* Feed dot pulse */
@keyframes ai-met-pulse {
  0%, 100% { opacity: 1; }
  50%       { opacity: .35; }
}
.ai-met__feed-dot {
  animation: ai-met-pulse 2.4s ease-in-out infinite;
}
```

---

### Section 12 — Deliverables (`ai-ent`)

**Purpose:** Concrete list of what the student receives

**Layout:** Icon + title + description list, 2 columns on desktop

---

### Section 13 — Social Proof (`ai-ps`)

**Purpose:** Testimonials marquee (infinite scroll)

**Layout:** Same marquee pattern, cards with avatar + quote + result metric

---

### Section 14 — Pricing (`ai-inv`)

**Purpose:** Investment section — price anchoring + urgency

**Key animation — auto-scrolling card columns:**

```css
@keyframes ai-inv-up {
  from { transform: translateY(0); }
  to   { transform: translateY(-33.333%); }
}
@keyframes ai-inv-down {
  from { transform: translateY(-33.333%); }
  to   { transform: translateY(0); }
}

.ai-inv__col-a { animation: ai-inv-up   60s linear infinite; }
.ai-inv__col-b { animation: ai-inv-down 70s linear infinite; }
/* Content triplicated in HTML for seamless 3-pane loop */
```

**Layout:** 2-column left (scrolling cards showing what they'd buy separately) + right (anchor price + single offer)

---

### Section 15 — Guarantee (`ai-gar`)

**Purpose:** Risk reversal — unconditional guarantee

**Key animation — shield ping:**

```css
@keyframes ai-gar-ping {
  75%, 100% { opacity: 0; transform: scale(1.6); }
}
.ai-gar__shield-ring {
  animation: ai-gar-ping 1.4s cubic-bezier(0,0,.2,1) infinite;
  position: absolute; inset: 0;
  background: var(--color-gold-500);
  border-radius: 9999px;
  opacity: 0.4;
}
```

---

## Animation Trigger System

```javascript
// IntersectionObserver — add .animate-fade-in class when section enters viewport
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
      }
    });
  },
  { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
);
document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
```

> RUNA's App.tsx already has this exact pattern — uses `.aos` class + `.animate` class.
> Rename to match the new system or keep `.aos` + `.animate` and map to the keyframes.

**Stagger pattern:**

```css
/* Children stagger via nth-child delays */
.section__item:nth-child(1) { animation-delay: 0.1s; }
.section__item:nth-child(2) { animation-delay: 0.25s; }
.section__item:nth-child(3) { animation-delay: 0.4s; }
.section__item:nth-child(4) { animation-delay: 0.55s; }
```

---

## Complete Keyframe Library (Copy-Paste Ready)

```css
/* ── Entrance ─────────────────────────────────── */
@keyframes ai-fade-in {
  0%   { opacity: 0; transform: translateY(8px); }
  100% { opacity: 1; transform: translateY(0); }
}
/* Usage: animation: ai-fade-in 0.6s cubic-bezier(.2,.8,.2,1) [delay]s both; */

/* ── Live badge ping ──────────────────────────── */
@keyframes ai-ping {
  75%, 100% { opacity: 0; transform: scale(2); }
}
/* Usage: animation: ai-ping 1.4s cubic-bezier(0,0,.2,1) infinite; */

/* ── Guarantee shield ping ────────────────────── */
@keyframes ai-ping-shield {
  75%, 100% { opacity: 0; transform: scale(1.6); }
}
/* Usage: animation: ai-ping-shield 1.4s cubic-bezier(0,0,.2,1) infinite; */

/* ── Horizontal marquee ───────────────────────── */
@keyframes ai-marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
/* Usage: animation: ai-marquee 30s linear infinite; (content duplicated 2x) */

/* ── SVG line draw ────────────────────────────── */
@keyframes ai-line-draw {
  to { stroke-dashoffset: 0; }
}
/* Usage: stroke-dasharray: 1200; stroke-dashoffset: 1200;
          animation: ai-line-draw 1.6s cubic-bezier(.6,.05,.3,1) forwards; */

/* ── Sustained pulse (after line draw) ───────── */
@keyframes ai-pulse {
  0%, 100% { opacity: 1; }
  50%       { opacity: .6; }
}
/* Usage: animation: ai-pulse 3.2s ease-in-out infinite; */

/* ── Feed activity dot ────────────────────────── */
@keyframes ai-dot-pulse {
  0%, 100% { opacity: 1; }
  50%       { opacity: .35; }
}
/* Usage: animation: ai-dot-pulse 2.4s ease-in-out infinite; */

/* ── Vertical column up ───────────────────────── */
@keyframes ai-col-up {
  from { transform: translateY(0); }
  to   { transform: translateY(-33.333%); }
}
/* Usage: animation: ai-col-up 60s linear infinite; (content triplicated) */

/* ── Vertical column down ─────────────────────── */
@keyframes ai-col-down {
  from { transform: translateY(-33.333%); }
  to   { transform: translateY(0); }
}
/* Usage: animation: ai-col-down 70s linear infinite; */
```

---

## Implementation Guide for RUNA

### Step 1 — Global CSS Variables

Add to `apps/lp-runa/src/index.css`:

```css
:root {
  --runa-bg: #050505;
  --runa-bg-card: #111111;
  --runa-cream: #EFE5D4;
  --runa-cream-light: #F5EFE6;
  --runa-teal: #00A3C4;
  --runa-teal-light: #33BADA;
  --runa-teal-glow: rgba(0, 163, 196, 0.15);
  --runa-gold: #C99A2C;
  --runa-border: rgba(255, 255, 255, 0.08);
  --runa-border-hover: rgba(0, 163, 196, 0.4);
  --runa-headline-size: clamp(3rem, 6vw, 5rem);

  /* Animation easing */
  --ease-smooth: cubic-bezier(.2,.8,.2,1);
  --ease-snap: cubic-bezier(.6,.05,.3,1);
  --ease-ping: cubic-bezier(0,0,.2,1);
}
```

### Step 2 — Section Container Pattern

Apply to every section:

```css
.section {
  padding: 60px 0;
  position: relative;
  isolation: isolate;
  overflow: hidden;
}
.section__container {
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1.5rem;
}
```

Or in Tailwind: `py-16 relative isolate overflow-hidden` + container `max-w-7xl mx-auto px-6`

### Step 3 — Entrance Animation Pattern

```css
/* In index.css or global styles */
[data-animate] {
  opacity: 0;
  transform: translateY(8px);
}
[data-animate].animate {
  animation: ai-fade-in 0.6s var(--ease-smooth) both;
}

/* Stagger for children */
[data-animate-group] > *:nth-child(1) { --delay: 0.1s; }
[data-animate-group] > *:nth-child(2) { --delay: 0.25s; }
[data-animate-group] > *:nth-child(3) { --delay: 0.4s; }
[data-animate-group] > *:nth-child(4) { --delay: 0.55s; }
[data-animate-group] > *.animate      { animation-delay: var(--delay); }
```

### Step 4 — Card Hover System

```css
.runa-card {
  border: 1px solid var(--runa-border);
  border-radius: 12px;
  background: var(--runa-bg-card);
  position: relative;
  overflow: hidden;
  transition: border-color 0.4s var(--ease-smooth),
              box-shadow 0.4s var(--ease-smooth);
}
.runa-card:hover {
  border-color: var(--runa-border-hover);
  box-shadow: 0 0 24px var(--runa-teal-glow);
}
.runa-card__beam {
  position: absolute; top: 0; left: 0; right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--runa-teal), transparent);
  opacity: 0;
  transition: opacity 0.4s var(--ease-smooth);
}
.runa-card:hover .runa-card__beam { opacity: 1; }
```

### Step 5 — RUNA Section Mapping (15 AI Journey sections → RUNA)

| AI Journey | RUNA Equivalent | Notes |
|-----------|----------------|-------|
| `ai-hero` | `HeroSection` | Adapt badge, headline, CTA |
| `ai-marquee` | New `TrustMarqueeSection` | Company logos / media mentions |
| `ai-pqe` | `ParaQuemSection` (reposition) | Move before DorSection |
| `ai-prob` | `DorSection` | Add SVG chart animation |
| `ai-lmq` | New `DorMarqueeSection` | Scrolling pain cards |
| transition | Add to DorSection bottom | Single impact sentence |
| `ai-six` | `SolucaoSection` | 6-pillar RUNA overview |
| `ai-trilhas` | `ComoFuncionaSection` | 7-week journey accordion |
| `ai-diag` | New `MetodoSection` | Template Master mechanism |
| `ai-mint` | Add to HeroSection | Arthur credibility block |
| `ai-met` | New `AgentesSection` | 15 agents with hover cards |
| `ai-ent` | New `EntregaveisSection` | What they receive |
| `ai-ps` | `ProvaSocialSection` | Testimonials marquee |
| `ai-inv` | `PlanosSection` | Pricing with scroll columns |
| `ai-gar` | `GarantiaSection` | Shield ping animation |

---

## Priority Order for Implementation

1. **Global CSS variables + keyframe library** — index.css (30 min)
2. **HeroSection overhaul** — badge, stagger animations, trust signals (1h)
3. **Card hover system** — apply to `ComoFuncionaSection`, `PlanosSection` (45 min)
4. **PlanosSection pricing columns** — `ai-col-up`/`ai-col-down` scroll (1h)
5. **GarantiaSection** — shield ping, gold accent (30 min)
6. **DorSection** — SVG line draw animation (45 min)
7. **Social proof marquee** — `ProvaSocialSection` (30 min)
8. **New sections** — TrustMarquee, AgentesSection, EntregaveisSection (2h each)

---

## Anti-Patterns to Avoid (From AI Journey)

- ❌ HubSpot-specific class naming (`.hs-*`) — irrelevant for React
- ❌ Server-side rendering concerns — LP is SPA, handle with React initial render
- ❌ Google Fonts `@import` via CSS — use `<link>` in `index.html` for performance
- ❌ `isolation: isolate` on every element — only on sections with orbs/pseudo-elements

---

## Reference Files

- Raw HTML: `/tmp/ai-journey-full.html` (session cache — regenerate if needed)
- CSS files: `/tmp/css-hero.css`, `css-problema.css`, `css-investimento.css`, `css-garantia.css`, `css-metodologia.css`
- This audit: `SÍRIOS/📐 Projetos/ai-journey-lp-audit.md`
