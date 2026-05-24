---
date: 2026-05-23
tags: [skills, helios, seo, organico, google, geo, ai-search]
project: runa-systems-global
type: skill-doc
---

# Skills HELIOS — SEO e Tráfego Orgânico

> HELIOS owns all SEO capabilities — 13 sub-skills covering technical audit, content quality, schema, performance, competitive analysis, programmatic SEO, and GEO (Generative Engine Optimization for AI Search like ChatGPT, Perplexity, and Google AI Overviews).

---

## Activation Pattern

All SEO skills use the `/seo` prefix:

```
/seo <subcomando>
```

**Agente:** HELIOS (all 13 sub-skills)
**Scope:** arthsystems.com.br, runasystems.com, RUNA SYSTEMS landing pages, product pages

---

## Complete Audit

### `/seo audit` — Full Site Audit

**Quando usar:** Before launching a paid traffic campaign; quarterly review of organic positioning; before major redesign
**O que faz:** Analyzes up to 500 pages, auto-detects business type (SaaS, info-product, e-commerce), delegates in parallel to all specialist sub-agents
**Output:** Comprehensive audit report with prioritized action list

**Casos de uso:**
- Audit arthsystems.com.br before connecting organic traffic to RUNA SYSTEMS
- Quarterly positioning review — identify what's blocking ranking
- Pre-redesign audit to capture current SEO equity

---

## Technical SEO

### `/seo technical` — Technical Analysis

**Quando usar:** Suspecting crawl/index issues; before launch; after major infrastructure change
**O que faz:** Crawlability, indexability, URL structure, HTTPS security, mobile-first readiness, JavaScript rendering, meta tags, canonicals
**Casos de uso:**
- Verify RUNA SYSTEMS sales site is technically ready to rank
- Post-deploy check after Netlify deployment
- Debug "page not indexing" issues

### `/seo performance` — Core Web Vitals

**Quando usar:** Page feels slow; before Google Page Experience audit; after adding new scripts/images
**O que faz:** Measures LCP, FID, CLS, TTFB, FCP — ranking factors for Google
**Casos de uso:**
- Ensure landing page loads fast enough not to lose organic position
- Verify carousel images (1080×1080px) are not killing mobile performance
- Diagnose performance regressions after adding new tools

### `/seo sitemap` — Sitemap XML

**Quando usar:** New site setup; adding product pages; after major URL restructure
**O que faz:** Validates existing sitemaps, generates new ones with industry templates, quality gates for location pages
**Casos de uso:**
- Create correct sitemap for RUNA SYSTEMS sales site including all product pages ($QUAD, CREATOR$, SITE$, etc.)
- Ensure dynamically generated pages are properly indexed

### `/seo schema` — Structured Data (JSON-LD)

**Quando usar:** Setting up new product pages; wanting rich results (star ratings, prices, FAQs); after site redesign
**O que faz:** Detects, validates, and generates Schema.org JSON-LD for rich results in Google — stars, prices, breadcrumbs, FAQs, events
**Casos de uso:**
- Add Course schema to RUNA SYSTEMS page for rich snippets
- Add FAQ schema to product pages to capture featured snippets
- Add Person schema for Arthur's thought leadership pages

### `/seo hreflang` — International SEO

**Quando usar:** Expanding RUNA SYSTEMS to international market (pt-BR + en-US)
**O que faz:** Audit and implementation of hreflang tags for multi-language/region sites
**Quando NÃO usar:** Single-language sites — unnecessary complexity

---

## Content SEO

### `/seo content` — Content Quality

**Quando usar:** Before publishing any new page; quarterly content review; when pages aren't ranking despite technical health
**O que faz:** Evaluates E-E-A-T (Experience, Expertise, Authority, Trust), readability, content depth, AI citation readiness (ChatGPT, Perplexity)
**Casos de uso:**
- Review RUNA SYSTEMS offer page copy for authority and trust signals
- Ensure Dev Neural module content passes E-E-A-T for technical queries
- Optimize content to be cited by AI Search engines

### `/seo page` — Single Page Deep Analysis

**Quando usar:** Optimizing a specific high-value page before launch or paid traffic campaign
**O que faz:** Deep analysis of one page: on-page SEO, content quality, schema, meta tags, all combined
**Casos de uso:**
- Optimize RUNA SYSTEMS R$15k sales page before running ads
- Optimize individual product pages before driving paid traffic

### `/seo images` — Image Optimization

**Quando usar:** After adding new AI-generated images; when images are hurting page speed
**O que faz:** Verifies alt text, file sizes, formats (WebP), responsive images, performance impact
**Casos de uso:**
- Optimize all inference.sh generated images before publishing to site
- Ensure Higgsfield-generated images have proper alt text for SEO

### `/seo plan` — Strategic SEO Planning

**Quando usar:** Starting organic traffic strategy from scratch; quarterly planning; new product launch
**O que faz:** SEO strategy with industry templates, competitive analysis, content roadmap
**Casos de uso:**
- Create 6-month SEO plan to rank RUNA SYSTEMS for "consultoria IA high-ticket"
- Position arthsystems.com.br for "automação inteligente para negócios"
- Map keyword clusters by product ($QUAD, CREATOR$, RUNA SYSTEMS)

### `/seo programmatic` — Programmatic SEO

**Quando usar:** Wanting to generate hundreds of pages targeting long-tail keywords at scale
**O que faz:** Templates for data-driven page generation (cities, niches, comparisons)
**Casos de uso:**
- Generate 100+ "agente IA para [nicho]" pages automatically for long-tail capture
- Create city-based pages for local SEO targeting

---

## Competitive SEO

### `/seo competitor-pages` — Comparison and Alternative Pages

**Quando usar:** Wanting to capture high-intent comparative search traffic
**O que faz:** Generates optimized "X vs Y", "alternatives to X", "best [category]" pages
**Casos de uso:**
- Create "RUNA SYSTEMS vs consultoria tradicional" page
- Create "alternativas ao ChatGPT para negócios" page
- Capture "melhor consultoria IA Brasil" traffic

---

## AI Search / GEO

### `/seo geo` — Generative Engine Optimization

**Quando usar:** Wanting RUNA SYSTEMS to appear in ChatGPT, Perplexity, Google AI Overviews answers; whenever AI Search is a priority channel
**O que faz:** Optimizes content to be cited by AI Search engines — verifies llms.txt, AI crawler accessibility, content structure for citations
**Casos de uso:**
- Position RUNA SYSTEMS to appear when someone asks ChatGPT "qual a melhor consultoria IA para empresas no Brasil"
- Verify llms.txt is properly configured for AI crawler access
- Structure content in citation-friendly format (clear claims, named sources, factual specificity)
- Monitor AI Search citation rates for branded queries

---

## web-search — Research Integration

**Skill:** `web-search` via infsh
**Agente:** HELIOS / ALEX
**Quando usar:** Researching competitor content, finding link-building opportunities, validating keyword intent with real SERPs

---

## HELIOS + FREYJA Workflow

For SEO-optimized content creation:

```
HELIOS /seo plan (keyword brief)
  → HELIOS /seo content-brief (target keyword + content spec)
  → FREYJA /seo-content (writes optimized content)
  → HELIOS /seo page (validates final content before publish)
  → @devops deploys
```

---

## Anti-Patterns

❌ Running `/seo audit` before fixing known critical technical issues — fix blockers first
❌ Using FREYJA to research keywords — HELIOS owns keyword research
❌ Implementing hreflang on single-language sites — unnecessary technical debt
❌ Generating programmatic pages without proper indexing strategy — creates duplicate content risk
❌ Ignoring GEO when publishing new content — AI Search is now a primary discovery channel
❌ Publishing images without alt text — hurts both accessibility and SEO
