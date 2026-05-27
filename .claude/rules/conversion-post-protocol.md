# Conversion Post Protocol — Mandatory 4-Element Rule

## Rule

Every Instagram post that goes to production MUST have all 4 elements created simultaneously before the post ships. No exceptions.

| Element | What it is | Owner |
|---------|-----------|-------|
| **Keyword** | DM trigger word (e.g., RUNA, SISTEMA, ARQUITETO) | FREYJA |
| **Zernio automation** | Configured trigger in Zernio API — keyword → DM response | HERMES |
| **Entregável** | The deliverable sent via DM (PDF, doc, prompt, template) | FREYJA |
| **Checkout link** | Active payment link for RUNA (R$ 7.000) | @devops confirms active |

## Enforcement

- **FREYJA** — defines keyword + entregável when writing the post brief
- **HERMES** — configures Zernio automation before post goes live
- **@devops** — gates the final publish: verifies all 4 elements are present and functional

A post without all 4 elements = **incomplete post**. Do not publish.

## Product Context

- Single product: **RUNA SYSTEMS** — R$ 7.000 / 21 sessions / 7 weeks / 3×week
- Primary automation: **Zernio API** (ManyChat is deprecated — do not use)
- DM path: keyword trigger → entregável delivery → WhatsApp automated message → discovery call OR direct checkout

## Anti-patterns

❌ Creating a post brief without assigning a keyword
❌ Using ManyChat for any automation — Zernio API is the active platform
❌ Publishing before the entregável file exists and is ready to send
❌ Publishing before the checkout link is tested and active
❌ Creating the keyword but not configuring the Zernio trigger

## Application

This rule applies to all @arthsystems_ posts: carousels, reels, stories with CTA.
Does NOT apply to: brand posts, awareness content with no CTA.
