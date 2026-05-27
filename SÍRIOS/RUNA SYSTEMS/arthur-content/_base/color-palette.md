---
date: 2026-05-26
tags: [maya, genhq, arthur, color-palette, brand]
project: runa-systems-global
type: brain-file
updated: 2026-05-26
---

# Color Palette — Arthur Runa / @arthsystems_

Brand color system for all generated content. Reference before writing any image prompt.
These are not Higgsfield UUIDs — hex codes go here, UUIDs go in reference-ids.md.

---

## Primary Brand Colors

| Name | Hex | RGB | Use |
|------|-----|-----|-----|
| Brand Black | `#000000` | 0, 0, 0 | Backgrounds, dominant dark, base of all compositions |
| Brand White | `#FFFFFF` | 255, 255, 255 | Text, high-contrast elements, negative space |
| Silver | `#AAAAAA` | 170, 170, 170 | Secondary text, dividers, subtle highlights |
| Deep Charcoal | `#1A1A1A` | 26, 26, 26 | Secondary backgrounds, card surfaces, depth layers |

## Accent Color (rare use — max 5% of frame)

| Name | Hex | RGB | Use |
|------|-----|-----|-----|
| Electric Blue | `#0040FF` | 0, 64, 255 | CTA buttons, single highlight element, digital UI accents |

---

## Color Rules

### Do
- Use Brand Black as the dominant background (60–80% of frame)
- Use Silver for secondary text and graphic dividers
- Reserve Electric Blue for ONE accent element per composition maximum
- Allow near-black tones (#0D0D0D, #111111, #141414) as subtle surface variation
- Desaturated grays for depth and layering

### Don't
- No warm tones — no orange, amber, brown, gold, cream, beige
- No high-saturation colors — if using any non-black color, desaturate heavily
- No neon greens, purples, or pinks — these break the cold/precise aesthetic
- No gradients with warm temperature
- Never use Electric Blue as background — accent only

---

## Prompt Color Vocabulary

When writing image generation prompts, use these terms to communicate the palette:

```
dark color palette, black and silver, cold temperature, no warm tones,
deep shadows, silver highlights, minimal color, monochromatic with silver accents
```

For electric blue accent contexts:
```
electric blue accent light, cold blue rim lighting, blue LED display reflection,
#0040FF highlight on [element]
```

---

## Aesthetic Reference

The palette is inspired by:
- Dark brutalist architecture (raw concrete, angular steel)
- Professional photography studio (clean, controlled, no noise)
- High-end tech product photography (Apple dark mode aesthetic)
- Cinematic noir with cold, not warm, shadows

**Feeling the palette should evoke:** precision, architecture, systems thinking, cold intelligence, professionalism.
**Feeling it should NOT evoke:** warmth, spontaneity, casual lifestyle, nature, creativity for its own sake.

---

## Application by Content Type

| Type | Dominant | Secondary | Accent |
|------|---------|-----------|--------|
| Editorial portraits | #000000 | #1A1A1A, #AAAAAA | none |
| Carousel slides | #000000 | #FFFFFF (text), #AAAAAA (subtext) | #0040FF (CTA only) |
| Reels / video | #000000–#1A1A1A | silver, white text | blue light (environment) |
| Product mockups | #000000 or #1A1A1A | #FFFFFF | #0040FF |
