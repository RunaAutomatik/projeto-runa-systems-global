---
date: 2026-05-26
tags: [maya, genhq, arthur, environment-descriptors]
project: runa-systems-global
type: brain-file
updated: 2026-05-28
---

# Environment Descriptors — Arthur Runa (_base)

Text descriptions of recurring environments for use in prompts.
Build this catalog as new environments are tested and validated.

**Rule (GenHQ):** Entries are POST-generation only. Never add an environment that has not been
tested and validated through at least one generation session. Descriptions must reflect what
the model actually rendered, not what was imagined beforehand.

Format:
```
## [Environment Name]
**Visual:** [what it looks like]
**Prompt text:** [copy-paste ready text for prompts]
**Mood:** [the feeling/atmosphere]
**Used in:** [which content types / campaigns]
**Model notes:** [how different models render this environment]
---
```

---

## Environments

### Warm Architectural Home Office

**Visual:** Panoramic home office with floor-to-ceiling windows framing a mountain landscape.
Natural wood desk (oak or walnut tone), Eames-style lounge chair in cognac leather, layered
biophilic elements — trailing pothos, sculptural fiddle-leaf fig, ceramic pots. Dual monitors.
Warm golden hour light floods the space at an angle, casting long amber-sage shadows across
the desk surface. Bookshelves with curated objects. The space reads as lived-in and intentional,
never sterile.

**Prompt text:**
```
warm architectural home office, floor-to-ceiling windows with mountain landscape view, natural
oak desk, Eames-style cognac leather chair, biophilic plants (pothos, fiddle-leaf fig),
dual monitors, warm golden hour light flooding through glass, amber and sage color palette,
long shadows across desk surface, curated bookshelf with objects, lived-in and intentional,
architectural warmth, solarpunk hybrid aesthetic
```

**Mood:** Focused warmth — biofílico-arquitetônico. Concentrated presence. The environment says
"this person builds from here." Warm without being casual, architectural without being cold.
Primary tone: amber-sage. Dominant temperature: warm.

**Used in:** Content posts, reel backgrounds (Method 1 — GPT Image 2 + refs), editorial images,
campaign anchors where Arthur is positioned as an architect of systems. Works for RUNA SYSTEMS
narrative ("reestruturação universal"), mentor/operator framing.

**Model notes:**
- **gpt_image_2 (Method 1 — + Arthur refs):** Renders the wood and leather with high fidelity.
  Mountain landscape through glass tends to be painterly rather than photorealistic — desirable.
  Golden hour light is convincingly volumetric. Biophilic elements are lush and specific.
  Use `--quality high --resolution 2k --aspect_ratio 9:16` for Reels.
- **text2image_soul_v2 (Method 2):** Background environment becomes secondary when soul is dominant.
  Good for portrait contexts where the office is framing, not subject. Recommend Method 2 only
  when Arthur is close-up and environment is supporting mood, not co-subject.
- **nano-banana-2 (infsh):** Warm tones render consistently. Mountain view tends to simplify.
  Good for fast-draft iteration before committing to Method 1 generation.

---

### Urban Street — Night

> **⚠️ BLOCKED — awaiting generation session**
>
> No validated generation exists for this environment. Per GenHQ rule, environment-descriptors
> entries must be POST-generation. Do not populate this stub until at least one generation
> session produces a tested and approved result.
>
> **Unblock criteria:** Arthur + night street environment generated and approved via FREYJA
> `*av-review`. Palette must align with Solarpunk Híbrido Forest dark (`#0E1410`, sage `#88A88E`,
> amber `#D4A574`) — NOT cold blue or electric neon.

**Visual:** *(blocked — post-generation only)*
**Prompt text:** *(blocked — post-generation only)*
**Mood:** *(blocked — post-generation only)*
**Used in:** *(blocked — post-generation only)*
**Model notes:** *(blocked — post-generation only)*

---

<!-- APPEND NEW ENVIRONMENTS BELOW THIS LINE -->
