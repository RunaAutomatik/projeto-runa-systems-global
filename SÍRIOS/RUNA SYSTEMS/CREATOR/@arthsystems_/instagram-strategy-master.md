---
date: 2026-04-08
tags: [instagram, arthsystems, strategy, automation, freyja, pipeline, content-calendar, runa-systems]
project: runa-systems-global
type: master-strategy
status: v1-active
---

# @arthsystems_ — Master Instagram Strategy 2026

> Single source of truth for all Instagram operations.
> Owner: FREYJA (narrative + production) · HERMES (automation) · Arthur (approval + recording)
> Connected: [[runa-systems-business-context]] · [[RUNA SYSTEMS/CREATOR/@arthsystems_/_hub]] · [[product-catalog]]

---

## 1. ACCOUNT STATUS (2026-04-08)

| Metric | Value | Signal |
|--------|-------|--------|
| Followers | 69 | Early stage — growth phase |
| Posts | 10 | Low volume, intentional |
| Views (30d) | 1,501 | Strong for size |
| Non-follower reach | 45.7% | Organic distribution working |
| Top content | Reels w/ face (216 views) | Face > graphics |
| Profile visits (30d) | 166 (+1,283%) | Curiosity is high |
| Link taps | 12 | Conversion gap = offer doc missing |

**Diagnosis:** The algorithm is responding. Content reaches non-followers. The bottleneck is not content quality — it is production volume and conversion infrastructure (offer docs, aperitivos, ManyChat keywords).

---

## 2. STRATEGIC NORTH STAR

> Every post is an invisible sales letter. Every caption creates a question, not an answer.
> The feed is a territory of conversion, not education.
> — Framework: Doug D'Marco + Arthur's AI-first positioning

### The 3 Objectives (non-negotiable)

| # | Objective | Mechanism | Priority |
|---|-----------|-----------|----------|
| 1 | **Acquire new qualified leads** | Reels + carousels reaching non-followers | HIGH |
| 2 | **Convert existing base** | Invisible sales letters → keyword CTAs → DM pipeline | HIGH |
| 3 | **Nurture migrated base** | Engagement posts — friends/ex-colleagues | MEDIUM |

### Audience Segmentation

| Segment | Origin | Size | Approach |
|---------|--------|------|----------|
| **Friends/ex-colleagues (chef era)** | Migrated from personal account | ~50 of 69 | Nurture — familiar tone, lifestyle, bridge posts |
| **Organic leads** | Found via content | ~19 | Conversion first — they came for the content |
| **New leads (target)** | Reels discovery | Growing | Pure acquisition — hooks, CTAs, DM pipeline |

---

## 3. CONTENT PILLARS + SERIES

### Pillar 1 — SISTEMA EM FUNCIONAMENTO (Proof)
*Shows the system operating in real time. No explanation — just evidence.*
- Type: Carousel (ARCHITECT style), text posts
- Product: $QUAD → RUNA SYSTEMS
- Keyword: RUNA, SQUAD
- Cadence: 1x/week
- Hook formula: "Enquanto você [faz manualmente], o [sistema] [está fazendo automaticamente]"

### Pillar 2 — ESPELHO DO AVATAR (Identification)
*Mirrors the avatar's exact pain. They read it and think "he's talking about me".*
- Type: Text post (long-form), carousel (MANIFESTO style)
- Product: POSICIONAMENTO$ → RUNA SYSTEMS
- Keyword: SISTEMA
- Cadence: 1x/week
- Hook formula: "Você não tem um problema de [X]. Você tem um problema de [real underlying issue]"

### Pillar 3 — CLAUDE CODE NA PRÁTICA (Education → CTA)
*Teach something in 60 seconds. Leave a gap. CTA = comment keyword to get the complete guide.*
- Type: Reel (Arthur recording), carousel (TERMINAL style)
- Product: AGENT$ → RUNA SYSTEMS
- Keyword: AGENTE, CÓDIGO
- Cadence: 2x/week
- Hook formula: "Como [fazer X específico] com Claude Code em [tempo rápido]"

### Pillar 4 — SÉRIE AVATAR IA (Visual Creation)
*Arthur's avatar doing real tasks. Cinematic, dark, architectural.*
- Type: Reel (CREATOR$ method — Sora 2), carousel
- Product: CREATOR$ → RUNA SYSTEMS
- Keyword: AVATAR
- Cadence: 1x/week (15% of Reels = avatar)
- Hook formula: "Seu avatar de IA [fez algo impossível/impressionante]"

### Pillar 5 — ARQUITETO (Identity + Authority)
*Posts that build the Arthur persona. Lifestyle + conviction. Bio link bait.*
- Type: Text post (Doug-style: full black background, white text)
- Product: All (indirect) → RUNA SYSTEMS aura
- No keyword CTA — builds desejo latente
- Cadence: 2x/week
- Hook formula: Direct provocative statement — "Você é o gargalo do seu negócio."

---

## 4. POST FORMAT MATRIX

| Format | Frequency | Production | Approval | Publish |
|--------|-----------|-----------|---------|---------|
| **Carousel (7 slides)** | 3x/week | FREYJA brief → Claude Chat HTML → watcher PNGs | Arthur reviews slides | instagram-worker |
| **Text post (black bg)** | 2x/week | FREYJA writes | Arthur reads caption | Meta Graph API direct |
| **Reel - Arthur face** | 2x/week | FREYJA script → Arthur records | Arthur approves edit | HERMES (n8n) |
| **Reel - Avatar (Sora)** | ~1x/2weeks | FREYJA brief → REEL agent prompt → Arthur creates Sora | Arthur approves | HERMES (n8n) |
| **Story** | Daily | FREYJA templates | Auto (pre-approved series) | n8n scheduled |

**Weekly target: 7-10 posts** (mix of above formats)

---

## 5. PRODUCTION PIPELINE — PER CONTENT TYPE

### 5A. CAROUSEL PIPELINE
```
FREYJA *carousel-brief (tema + 7 slides + caption + keyword)
  ↓
Arthur: cola brief no Claude Chat → gera HTML
  ↓
npm run watch:carousel (watcher detecta download)
  ↓
Auto-export: slide_1.png → slide_7.png (1080x1080)
  ↓
[GATE] Arthur revisa slides (WhatsApp ou Obsidian)
  ↓
HERMES: upload Supabase Storage → instagram-worker POST /publish/carousel
  ↓
FREYJA: update pin .md status → published
  ↓
HERMES: update hub + commit
```

**Automation level:** 70% automated (Arthur does: briefs approval + Claude Chat HTML generation)
**Time per carousel:** ~15 min Arthur + ~5 min production

### 5B. TEXT POST PIPELINE
```
FREYJA writes caption (Doug-style: cena real → desenvolvimento → virada → CTA velado)
  ↓
[GATE] Arthur reads and approves (Telegram/WhatsApp notification)
  ↓
MAYA (optional): generates cover image if needed
  ↓
HERMES: Meta Graph API POST /media → publish
  ↓
Log to Supabase content_posts table
```

**Automation level:** 85% automated
**Time per text post:** ~5 min Arthur (review only)

### 5C. REEL PIPELINE (Arthur face)
```
FREYJA: writes full script (hook 0-3s → desenvolvimento → CTA)
  ↓
[GATE] Arthur reviews script
  ↓
Arthur records (phone/camera, vertical 9:16)
  ↓
MAYA: generates thumbnail (falai/flux-dev) + cover image
  ↓
[GATE] Arthur approves final edit
  ↓
HERMES: publish via Meta Graph API /reels endpoint
  ↓
Log metrics
```

**Automation level:** 40% automated (recording + review is human)
**Time per Reel:** ~30 min Arthur (script review + recording)

### 5D. REEL PIPELINE (Avatar - Sora)
```
FREYJA: writes visual direction + voiceover script
  ↓
REEL agent: generates structured Sora prompt (style: selfie, 15s, 3x)
  ↓
[GATE] Arthur creates in Sora 2 (Opera VPS) → downloads
  ↓
MAYA: post-processing (background if needed, thumbnail)
  ↓
elevenlabs-tts: voiceover if needed
  ↓
[GATE] Arthur final approval
  ↓
HERMES: publish
```

**Automation level:** 50% automated (Sora requires Arthur's VPS session)
**Time per Avatar Reel:** ~45 min Arthur

---

## 6. CONTENT CALENDAR SKELETON — 2026

### Quarterly Product Focus

| Quarter | Main Product Push | Supporting Products | Campaign Theme |
|---------|------------------|--------------------|----|
| **Q2 (Apr–Jun)** | $QUAD + CREATOR$ | POSICIONAMENTO$ | "O sistema trabalha por você" |
| **Q3 (Jul–Sep)** | AGENT$ + SITE$ | MIND$ | "Construa o agente do seu negócio" |
| **Q4 (Oct–Dec)** | RUNA SYSTEMS (main push) | All | "O protocolo completo" |

### W15 (07-13 Apr) — PRIORITY: Clear backlog + establish cadence
| Day | Date | Format | Pillar | Product | Status |
|-----|------|--------|--------|---------|--------|
| Seg | 07/04 | Carousel | Sistema em Funcionamento | $QUAD | Pin-02 (ready to publish) |
| Ter | 08/04 | Text Post | Arquiteto | RUNA | Write today |
| Qua | 09/04 | Carousel | Espelho do Avatar | POSICIONAMENTO$ | Pin-03 (generate slides) |
| Qui | 10/04 | Reel script | Claude Code na Prática | AGENT$ | Script needed |
| Sex | 11/04 | Carousel | Avatar IA / Creator Teaser | CREATOR$ | Pin-04 (brief ready) |
| Sab | 12/04 | Text Post | Arquiteto | RUNA | Write today |

### W16–W18 — $QUAD Push (week of 14-30 Apr)
- 2 carousels/week → $QUAD proof posts
- 2 Reels/week → Claude Code practical tutorials
- 1 text post/week → Avatar identity

### W19–W22 — CREATOR$ Launch Window (May)
- Increase Avatar series cadence
- 3 carousels/week (CREATOR$ theme)
- Aperitivo AVATAR keyword → CREATOR$ offer doc
- Launch post: "Lançamento CREATOR$"

### W23–W26 — AGENT$ Intro (Jun)
- New series: "Construindo seu primeiro agente neural"
- Keyword: AGENTE → AGENT$ offer doc

### W27–W35 — SITE$ + POSICIONAMENTO$ (Jul-Aug)
- Site builds live
- Mapeamento de processos series

### W36–W52 — RUNA SYSTEMS Main Push (Sep-Dec)
- All pillars converge to RUNA
- High-ticket positioning ramp-up
- Story ads (R$50-150/day) → feed conversion

---

## 7. CONVERSION INFRASTRUCTURE — STATUS BY PRODUCT

| Product | Checkout | ManyChat Keyword | Aperitivo | Offer Doc | Skool Docs |
|---------|---------|-----------------|-----------|-----------|-----------|
| **$QUAD** | ✅ Active | ✅ SQUAD, RUNA | ❌ Missing | ❌ Missing | 🔄 In Obsidian (needs Skool upload) |
| **CREATOR$** | ❌ Needs link | ✅ AVATAR | ❌ Missing | ❌ Missing | ✅ In Obsidian (needs Skool upload) |
| **AGENT$** | ❌ | ❌ AGENTE (planned) | ❌ | ❌ | ❌ |
| **SITE$** | ❌ | ❌ SITE (planned) | ❌ | ❌ | ❌ |
| **POSICIONAMENTO$** | ❌ | ❌ SISTEMA (planned) | ❌ | ❌ | ❌ |
| **MIND$** | ❌ | ❌ | ❌ | ❌ | ❌ |
| **RUNA SYSTEMS** | ✅ runaecoia.run | Manual (bio link) | ❌ | ❌ | 🔄 Dense — in progress |

**CRITICAL PATH:** $QUAD and CREATOR$ are already being marketed. Missing aperitivos = leaking conversions every day.

### Immediate Deliverables Needed (Priority Order)
1. **Aperitivo $QUAD** → keyword SQUAD → "Squad Starter Kit" (template de escopo + roles para 3 agentes)
2. **Offer doc $QUAD** → ARES + FREYJA → python-docx → Drive + Obsidian
3. **Aperitivo CREATOR$** → keyword AVATAR → "Storybook do Avatar" (método completo)
4. **Offer doc CREATOR$** → ARES + FREYJA → python-docx
5. **$QUAD checkout link** → Arthur creates on Skool
6. **CREATOR$ checkout link** → Arthur creates on Skool

---

## 8. INTELLIGENCE LAYER — COMPETITIVE SCRAPING

### Competitors Monitored

| Handle | Platform | Priority | Current Status |
|--------|---------|---------|----------------|
| @dougdemarco_ | Instagram | HIGH | Analysis complete (2026-03-18) |
| @acaroldutraa | Instagram | HIGH | Analysis complete |
| @sarahseller.br | Instagram | HIGH | Analysis complete |
| (others from memory list) | Instagram + YouTube | MEDIUM | Pending Atlas automation |

### Scraping Stack

| Tool | Access | Use Case | Status |
|------|--------|---------|--------|
| **Apify** | `APIFY_API_TOKEN` in .env | Instagram posts, Reels, hooks | ✅ Active |
| **YouTube Data API v3** | `YOUTUBE_API_KEY` in .env | YouTube hooks + transcriptions | ✅ Active |
| **ElevenLabs STT** | via infsh CLI | Transcribe competitor Reels | ✅ Available |
| **Meta Graph API** | credentials in .env | Own analytics + insights | ✅ Active |

### Hook Intelligence Workflow
```
Apify Actor → scrape top posts (last 30d, sort by engagement)
  ↓
ElevenLabs STT → transcribe Reels captions/scripts
  ↓
FREYJA analysis → extract hook patterns, structures, formulas
  ↓
Supabase → store in hook_intelligence table
  ↓
Atlas weekly report → surfaced to FREYJA before content creation
```

### Weekly Scraping Cadence (HERMES automation)
- **Monday 07:00:** Apify pulls top 5 posts from each competitor (past 7 days)
- **Monday 08:00:** Atlas analyzes hooks, updates Supabase
- **Monday 09:00:** FREYJA receives hook brief for the week

---

## 9. AUTOMATION TOOLS MAP

### What Is Fully Automated (no Arthur needed)
- Story posting (pre-approved series) → n8n scheduled
- Keyword comment detection → ManyChat (when configured)
- DM delivery (aperitivo docs) → ManyChat
- Hook scraping + analysis → Apify + Atlas → Supabase
- Analytics pull (Meta Graph API) → n8n weekly report

### What Requires Arthur Approval
- Every carousel (review slides before publish)
- Every text post (read caption)
- Every Reel (review script before recording, approve final)
- Avatar Reels (create in Sora VPS)

### What Only Arthur Can Do
- Record Reels (face camera)
- Create Avatar in Sora 2 (VPS Opera session)
- Strategic decisions (product launches, pricing, pivot)

### Tools by Function

| Function | Tool | Agent Owner |
|----------|------|------------|
| Content writing | Claude native | FREYJA |
| Carousel image generation | MAYA (flux-dev) | MAYA |
| Image post creation | MAYA (flux-dev / gemini) | MAYA |
| Reel thumbnail | MAYA | MAYA |
| Voiceover | ElevenLabs TTS (infsh) | MAYA |
| Avatar video | Sora 2 (Arthur VPS) | Arthur |
| Avatar post-processing | MAYA (background-removal) | MAYA |
| Carousel HTML → PNG | watcher + Puppeteer | Worker |
| Carousel publish | instagram-worker (Railway) | HERMES |
| Image/text post publish | Meta Graph API direct | HERMES |
| Reel publish | Meta Graph API /reels | HERMES |
| DM automation | ManyChat | HERMES |
| Scheduling | n8n (Railway) + Google Calendar | HERMES/ORION |
| Analytics | Meta Graph API + Supabase | ARES |
| Scraping | Apify + YouTube API | Atlas/HERMES |
| Transcription | ElevenLabs STT | Atlas |

---

## 10. APPROVAL GATEWAY — ARTHUR INTERACTION PATTERN

### Current (manual) — TO IMPROVE
Arthur must actively open Obsidian or Claude Code to approve.

### Target (automated) — HERMES workflow
```
Content ready for approval
  ↓
HERMES: generate approval message (caption + slide preview link)
  ↓
Telegram/WhatsApp notification to Arthur
  ↓
Arthur: replies "✅" or "🔄 [feedback]"
  ↓
If ✅: HERMES auto-publishes at scheduled time
If 🔄: FREYJA adjusts, re-sends for approval
```

**n8n workflow needed:** approval-gateway.json (HERMES builds this)

---

## 11. GOOGLE CALENDAR INTEGRATION

All content is scheduled in Google Calendar (`automatikruna@gmail.com`) with:
- Event title: `[FORMAT] [PILLAR] — [Keyword]`
- Description: Supabase post ID + status
- Reminder: 2h before publish time

**Publish times (BR time):**
- Weekday: 07:00 (catch morning scroll) or 19:00 (evening peak)
- Wednesday: 12:00 (lunch peak for B2B)
- Avoid: Sunday morning, Monday 08:00

---

## 12. RUNA SYSTEMS MENTORIA — CONTENT AS PRODUCT

> Everything documented here IS the product being sold.

**Rule:** Every pipeline, workflow, automation, prompt, and decision we build here:
1. Gets documented in Obsidian (English, internal)
2. Gets translated into a lesson/module for RUNA SYSTEMS
3. Gets referenced in the Skool course support docs

**Mentoria delivery (first client — starts 2026-04-09):**
The Instagram pipeline we are building NOW = Module 7 of RUNA SYSTEMS ("Sistema de Conteúdo Neural").
Arthur can deliver the framework map this week as the first deliverable.

---

## 13. POSICIONAMENTO ALIGNMENT RULES (for ORION to enforce)

These must be consistent across ALL documents, posts, and agent outputs:

| Element | Canonical version |
|---------|------------------|
| **What RUNA sells** | Tempo, dinheiro e otimização de processos — elimina gaps operacionais via IA |
| **Who it's for** | Pequenos empreendedores, gestores solos, donos de negócio que faturam ou querem faturar 20-100k |
| **The transformation** | De 250h/semana com 5 freelancers → 20h/semana com squad de agentes, mesma eficiência |
| **Arthur's identity** | Arquiteto de sistemas. Pai. Marido. Não atendo quem ainda precisa se provar. |
| **Tech stack (public)** | Claude AI + Claude Code + ecossistema Google + Anti-gravity |
| **DO NOT MENTION** | Blair Modelagem, ALPHA®, MAYA®, ICARUS® (superseded) |
| **Tone** | Direto, quase brutal. Sem floreios. Confiante. Não precisa agradar. |

---

## 14. GAPS / PENDING ACTIONS

### Critical (blocks conversions today)
- [ ] **FREYJA: Create aperitivo $QUAD** → Squad Starter Kit → .docx → Drive
- [ ] **FREYJA: Create offer doc $QUAD** (2 ICPs: freelancer + consultor) → .docx → Drive
- [ ] **FREYJA: Create aperitivo CREATOR$** → Storybook do Avatar → .docx → Drive
- [ ] **FREYJA: Create offer doc CREATOR$** → .docx → Drive
- [ ] **Arthur: Create $QUAD checkout on Skool** → send link to FREYJA
- [ ] **Arthur: Create CREATOR$ checkout on Skool** → send link to FREYJA

### High Priority (blocks automation)
- [ ] **HERMES: Build approval gateway n8n workflow** (Telegram notifications)
- [ ] **HERMES: Build weekly scraping workflow** (Apify → Atlas → Supabase)
- [ ] **ORION: Reconcile all positioning documents** (flag incongruences RUNA vs arthsystems_)
- [ ] **Publish Pin-02** (slides in Supabase — ready NOW)

### Medium Priority
- [ ] **HERMES: Configure ManyChat keywords** RUNA, SQUAD, AVATAR, SISTEMA, AGENTE
- [ ] **Set up Story Ads** (R$50-150/day — StoryAds to profile) — when budget available
- [ ] **Build n8n analytics report** (weekly Meta insights → Supabase → ARES summary)

---

## Connected Notes

- [[RUNA SYSTEMS/CREATOR/@arthsystems_/_hub]] — Content hub and CTA keyword map
- [[runa-systems-business-context]] — Business context and product teia
- [[product-catalog]] — Full product catalog with pricing
- [[freyja]] — FREYJA agent card
- [[analysis-instagram-dougdemarco]] — Doug D'Marco strategy reference
- [[instagram-market-references]] — All competitor analyses
- [[runa-command-center-prd]] — Command center product spec

---

*Last updated: 2026-04-08 | Owner: FREYJA (strategy) + ORION (documentation)*
