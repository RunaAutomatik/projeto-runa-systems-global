---
date: 2026-05-15
tags: [analysis, reference, platform-architecture, epic-new, mentorados, product-reference]
project: runa-systems-global
type: platform-dna-extraction
source: https://epic.new/pt-BR
---

# Epic.new — Platform DNA Extraction

> Architecture, engineering, product logic, and internal structure of https://epic.new
> Purpose: reference for building a similar platform to deliver to mentorados.
> Extracted via WebFetch + browser audit on 2026-05-15.

---

## 1. Platform Overview

Epic is a **two-product platform under a single subscription**:

| Product | Core Function |
|---------|--------------|
| **Epic Learn** | Education platform for AI builders (classes + resources + community + live mentoring) |
| **Epic Builder** | AI app builder that executes tasks in isolation to avoid regressions |

**Tagline:** "The only AI development method approved by developers."

**Positioning:** "Built for non-engineers. Engineer-approved." — 60% non-technical users (PMs, designers, marketers, founders), remainder developers.

**Scale:** 5,000+ active builders. Supported companies: Itaú, Mercado Livre, Brex, G4 Educação, Gupy, Clicksign, Braskem.

---

## 2. Tech Stack

### Frontend
| Layer | Technology |
|-------|-----------|
| Framework | **Next.js ~16.2.3** with **App Router** (`appDir: true`) |
| Bundler | **Turbopack** (`turbopack: true` in window.next) |
| Rendering | **React Server Components** (RSC) — evidenced by `?_rsc=` query params |
| Styling | **Tailwind CSS** + **shadcn/ui** — semantic tokens: `bg-background`, `text-foreground`, 307 unique utility classes |
| Fonts | **Geist Sans** + **Geist Mono** + **Lora** (serif accent) — loaded via CSS modules with font-variable pattern |
| Language | **TypeScript** (implied by Next.js 16 + App Router conventions) |

### Infrastructure
| Layer | Technology |
|-------|-----------|
| Hosting | **Vercel** (deployment ID pattern: `dpl_*` visible in headers) |
| CDN / Images | `_next/image` with Vercel Image Optimization |
| Analytics | **Vercel Speed Insights** |
| Monitoring | Vercel built-in (no external APM visible) |

### Authentication
| Provider | Type |
|----------|------|
| **Google OAuth** | "Continuar com Google" |
| **GitHub OAuth** | "Continuar com GitHub" |
| **Email + Password** | Native auth form |

Auth routes: `/auth/signin`, `/auth/signup` — accessible pre-login.
Password recovery: "Esqueceu a senha?" flow exists.
Remember-me: checkbox option on signin.

### Third-Party Integrations (per Privacy Policy)
- **GitHub**: repository access for Epic Builder (code execution/commits)
- **Vercel**: deployment pipeline integration

---

## 3. Route Architecture

### Route Map (confirmed via robots.txt + direct probing)

```
/                          → redirects to /pt-BR (i18n default)
/[locale]/(site)/page      → homepage (Next.js App Router route segment)
/[locale]/(site)/education → Epic Learn landing page (public)
/auth/signin               → login form (public)
/auth/signup               → registration form (public)
/terms                     → terms of service (public)
/privacy                   → privacy policy (public)
/robots.txt                → crawl rules (public)
/sitemap.xml               → (returns 404 — not implemented or protected)

— PROTECTED (require auth) —
/home/*                    → authenticated app root
/learning/*                → all education content (classes, resources, community, mentoring)
  /learning/classes         → video classes catalog
  /learning/courses         → course organization
  /learning/modules         → module-level navigation
  /learning/progress        → learning progress tracking
  /learning/certificates    → completion certificates
  /learning/videos          → individual video player
/builder/*                 → Epic Builder application
  /builder/new              → start new project
  /builder/projects         → projects list
  /builder/settings         → project/account settings
  /builder/history          → build history / task execution log
  /builder/templates        → project templates
/admin/*                   → admin panel (staff only)
/api/*                     → API routes (blocked)
/device/*                  → device setup (CLI pairing, implied by "Epic CLI" mentioned in FAQ)
```

### i18n Pattern
Next.js App Router dynamic locale segment: `/[locale]/(site)/page`
- Supported locales: `pt-BR` (default), `en`
- Route group `(site)` isolates public marketing pages from authenticated app
- Footer shows language selector

### Auth Redirect Pattern
All protected routes redirect to: `/auth/signin?redirectTo=/original/path`
Standard Next.js middleware pattern with JWT/session validation.

---

## 4. Product Architecture — Epic Learn

### Content Model (4 types)

#### 4.1 Classes (video learning)
- Format: recorded videos, 10–60 minutes each
- Cadence: new classes released **weekly**
- Self-paced, no fixed schedule
- Organized into **Courses** → **Modules** → individual **Classes**

**Course categories confirmed:**
- Building from Zero (Construindo do Zero)
- Design & Positioning

**Sample courses:**
1. Creating a PRD: Defining What to Build
2. Making Your Product Stand Out in Market
3. Writing Specs: Translating Ideas to Technical
4. Building a Design System for Your Brand
5. Executing Specs: Building First Version
6. Generative UI: AI-Generated Interfaces

**Instructors:**
- **Deborah Folloni**: product strategy, methodology, content — founded/sold Chiligum SaaS to Vidmob/Adobe; 300k YouTube views/month; 15k newsletter subscribers
- **Edmar Ferreira**: technical depth — founded Rock Content (~$100M valuation); 20+ years tech; 3 years Silicon Valley; positioned as "one of Brazil's best AI engineers"

#### 4.2 Resources (downloadable/copyable assets)
Resource types available:
- **Templates** — project/document templates
- **Prompts** — validated AI prompts
- **Skills** — Claude Code skills
- **Agents** — pre-built agent configurations
- **MCPs** — Model Context Protocol configurations
- **Code Snippets** — reusable code fragments

**Sample resources:**
- AI Chatbot template
- Frontend Design best practices
- CRM Sales Pipeline template
- Code Review analysis
- Security Audit skill
- Waitlist Page template

#### 4.3 Community
- Name: **Epic Builders Community**
- Use cases: founder networking, client/vendor connections, partnerships, first customer acquisition, project feedback
- Sample activities: landing page reviews, developer hiring, freelance services, design collaboration
- Platform: (not specified in public pages — likely proprietary or Circle/Discord behind auth)

#### 4.4 Live Mentoring
- Format: real-time project reviews with instructors
- Review areas: Design, Architecture, Code quality, Copy/messaging, Positioning, Landing pages
- Presenters: Deborah Folloni primary
- Attendee-style: community members can watch/participate

### Learning Path Logic (inferred)
```
Idea → PRD → Spec → Design System → First Build → Iteration → Deploy → Scale
```
Maps directly to curriculum: Idea validation → Spec writing → Design → Building → Deploy.

---

## 5. Product Architecture — Epic Builder

### Core Differentiator
> "The only AI app builder that doesn't break what was working."
> "Epic converts your project into clear tasks and executes them in isolation — so you continue evolving your product without fear of undoing previous progress."

### Architecture Pattern: **Task Isolation**
1. User describes feature or change
2. Platform decomposes into **isolated tasks** (not monolithic execution)
3. Each task executes independently — contained scope, no side effects on unrelated code
4. Progressive: each successful task builds on last confirmed state

This is the technical moat: prevents regression-on-refactor, the #1 pain point in AI-assisted development.

### Integrations
- **GitHub**: connects to user's repo for commits/branches
- **Vercel**: deployment pipeline (push → deploy loop)
- **Epic CLI**: a CLI tool (device route: `/device`) for local setup — users can pair their machine with Epic Builder

### Routes (all authenticated)
| Route | Function |
|-------|---------|
| `/builder/new` | Create new project (likely wizard: repo selection → template → config) |
| `/builder/projects` | Project dashboard — all active/archived projects |
| `/builder/settings` | Account settings, integrations, API keys |
| `/builder/history` | Execution log — all tasks run, with status + diff |
| `/builder/templates` | Starter templates for new projects |

### Builder Workflow (inferred from public copy + routes)
```
1. Connect GitHub repo
2. Describe the change/feature in natural language
3. Epic decomposes → task list generated
4. Execute tasks one-by-one in isolation
5. Review + confirm each task result
6. Auto-deploy to Vercel on approval
```

---

## 6. Business Model

### Pricing
- **12 installments of R$197** (~R$2,364/year total)
- Cancel anytime (subscriber-controlled)
- **7-day unconditional guarantee** (full refund)
- No free tier (trial converts to paid)
- Trial: limited, non-renewable, auto-converts on expiry

### Subscription Mechanics (from Terms)
- Trial auto-converts to paid unless cancelled before expiry
- Termination: 30-day notice period after cancellation request
- Contact: hello@epic.new | legal@epic.new
- Platform: email-based cancellation OR in-app controls

### Access Model
- **One subscription = both products** (Epic Learn + Epic Builder)
- No tiered plans visible — single SKU
- EU-specific: 14-day withdrawal right for European consumers

---

## 7. Content Strategy & Positioning

### Dual Audience Design
The platform explicitly bridges two audiences with ONE product:
- **Non-technical** (60%): "Made for non-technical people" — PMs, designers, marketers, founders
- **Technical** (40%): "Approved by technical people" — developers validate the methodology

This is the core marketing mechanism: testimonials from both groups appear side-by-side.

### Key Testimonial Themes
- "The ONLY person talking about vibecoding so lucidly" → methodology clarity
- "Technical content communicated so efficiently" → accessibility
- "Solid methodology from a non-developer" → credibility for the paradox
- "Good development method" → technical validation

### Competitive Differentiation Claimed
| Claim | vs. Competitors |
|-------|----------------|
| "Doesn't break what was working" | vs. Cursor/Copilot/generic AI coding |
| "Clearest methodology on the market" | vs. YouTube/Udemy courses |
| "Resources we use ourselves" | vs. theoretical courses |
| "Most serious AI builders community in Brazil" | vs. generic Discord communities |

### SEO/Brand Signals
- Primary keyword claim: "best AI app builder on the market"
- Geographic positioning: "Brazil" mentioned 3× in above-the-fold copy
- Meta title pattern: "Epic — The only AI development method approved by developers"
- Vercel Speed Insights for Core Web Vitals tracking

---

## 8. User Flow Architecture

### Acquisition Flow
```
Instagram/YouTube/Referral
  → epic.new/pt-BR (homepage)
  → Section anchor: #builder or /education
  → CTA: "Teste grátis sem cartão de crédito"
  → /auth/signup (Google/GitHub/Email)
  → Trial starts → /home (authenticated app)
  → Trial expires → paid subscription OR cancel
```

### Onboarding Flow (inferred)
```
/auth/signup
  → OAuth provider OR email form
  → Account created
  → /home (dashboard entry point)
    → Epic Learn: /learning/classes (first class)
    → Epic Builder: /builder/new (connect GitHub)
    → Community: /home/community
```

### Learning Flow
```
/learning/classes → select course → /learning/modules → /learning/videos/:id
  → Progress tracked → /learning/progress
  → Completion → /learning/certificates
```

### Builder Flow
```
/builder/new → project setup (GitHub connect + template select)
  → describe change in chat/form
  → task list generated → isolated execution
  → review diffs → approve/reject
  → /builder/history (log)
  → auto-deploy via Vercel integration
```

---

## 9. Data Architecture (inferred from Privacy Policy)

### Data Collected
- Email, name, password
- Usage data (pages, time, interactions)
- Browser/device information
- GitHub account data (repos, commits — for Builder)
- Vercel account data (deployments — for Builder)

### Processing Purposes
- Service delivery (classes, builder, community)
- Legal compliance
- User contact
- Analytics (Vercel Speed Insights)
- Fraud detection
- **"AI-powered development assistance"** — explicit reference in privacy policy

### Storage
- Vercel infrastructure (implied by deployment pattern)
- International transfers possible
- Retained while user is active + legal obligations period after

---

## 10. What to Replicate (Architecture Blueprint)

Based on full DNA extraction, here's the replication blueprint for the mentorados platform:

### Must-Have — Core Architecture
| Component | Implementation |
|-----------|---------------|
| Auth | NextAuth.js or Clerk — Google + GitHub + Email |
| Framework | Next.js App Router + Turbopack |
| Styling | Tailwind CSS + shadcn/ui |
| Deployment | Vercel |
| Route groups | `(site)` for public, `(app)` for authenticated |
| i18n | Next.js built-in with `[locale]` segment (if needed) |
| Middleware | Auth guard for all `/home/*`, `/learning/*` routes |

### Must-Have — Product Features
| Feature | Priority | Notes |
|---------|---------|-------|
| Video classes (catalog + player) | P0 | Self-hosted or Mux/Bunny CDN |
| Resources library (templates/prompts/agents) | P0 | Download/copy functionality |
| Progress tracking per user | P0 | Database: courses completed, modules done |
| Community | P1 | Discord embed OR native Circle-style forum |
| Live sessions | P1 | Zoom embed OR native livestream |
| Certificates | P2 | PDF generation on module completion |

### Must-Have — Business Logic
| Feature | Implementation |
|---------|---------------|
| Subscription gating | Middleware checks subscription status before rendering |
| Trial → Paid conversion | Stripe Subscriptions with trial period |
| Cancellation flow | Stripe portal or in-app flow |
| 7-day refund | Manual or Stripe refund policy |
| Webhook handling | Stripe → update user subscription status in DB |

### Nice-to-Have (Epic Builder equivalent)
| Feature | Notes |
|---------|-------|
| AI builder / project assistant | The hardest part — requires GitHub API + task decomposition engine |
| CLI tool for device pairing | OAuth device flow, token stored locally |
| Build history / execution log | Append-only task log per project |

### Tech Stack Recommendation for Replication
```
Next.js 15+ (App Router)
TypeScript
Tailwind CSS + shadcn/ui
Clerk (auth — simpler than NextAuth for OAuth + email)
Supabase (database + storage — already in our stack)
Stripe (payments + subscriptions)
Mux or Bunny.net (video hosting + streaming)
Vercel (deployment)
```

### Route Structure for Mentorados Platform
```
/                           → landing page (public)
/auth/signin                → sign in
/auth/signup                → sign up
/terms + /privacy           → legal pages
/[mentee]/                  → authenticated app root per mentee
  /[mentee]/home            → dashboard
  /[mentee]/sessoes         → sessions (replaces /learning/classes)
  /[mentee]/materiais       → materials (replaces /learning/resources)
  /[mentee]/progresso       → progress tracker
  /[mentee]/entregaveis     → deliverables (Arthur-specific: plans, templates)
  /[mentee]/comunidade      → community (optional)
/admin/                     → Arthur's admin panel
```

---

## 11. What Epic Does NOT Reveal (Gaps)

These remain unknown without authenticated access:

- Exact database schema for courses/progress/users
- How the community is implemented (Circle? native? Discord?)
- Exact video player (Mux? Bunny? Vimeo? YouTube?)
- How Builder task decomposition works internally (LLM prompt chains? custom parser?)
- How Builder handles GitHub auth scope + commit creation
- Payment processor details (likely Stripe but unconfirmed)
- Email service provider (not visible)
- Actual LLM powering the Builder (Claude? GPT-4? custom?)

---

## Source Notes

- Extracted: 2026-05-15
- Method: WebFetch systematic crawl of all public routes
- Browse audit: headless Chromium (gstack/browse) for JS-rendered content
- Robots.txt: full route discovery
- Terms + Privacy: full legal text for business model understanding
- Auth page: form structure analysis
- Education page: full curriculum + instructor data

**Links analyzed:**
- https://epic.new/pt-BR
- https://epic.new/en
- https://epic.new/education
- https://epic.new/auth/signin
- https://epic.new/auth/signup
- https://epic.new/terms
- https://epic.new/privacy
- https://epic.new/robots.txt
