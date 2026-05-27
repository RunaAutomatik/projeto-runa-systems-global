---
date: 2026-05-26
tags: [maya, genhq, arthur, model-descriptions]
project: runa-systems-global
type: brain-file
updated: 2026-05-26
---

# Model Descriptions — Arthur Runa (_base)

Physical descriptors and wardrobe notes for use in image/video generation prompts.
Use these descriptors when the model lacks UUID support (nano-banana-2, HeyGen, etc.)
or as supplementary prompt text alongside UUID references.

---

## Physical Description (Core — always include)

```
Arthur Runa, Brazilian male, late 20s, sharp jaw, dark brown eyes,
dark brown short hair, athletic but lean build, approximately 1.80m tall,
neutral to confident expression, upright posture
```

## Extended Physical Details

| Feature | Description |
|---------|-------------|
| Face shape | Sharp jaw, defined cheekbones, angular features |
| Eyes | Dark brown, direct gaze, focused expression |
| Hair | Dark brown, short, clean cut — no curls, no volume |
| Build | Athletic but lean — not bulky. Tall (~1.80m) |
| Skin tone | Medium-light Brazilian/Mediterranean |
| Age appearance | Late 20s — young but not boyish |
| Default expression | Neutral or confident — never smiling wide |
| Posture | Upright, controlled, minimal movement |

---

## Wardrobe Notes

### Aesthetic DNA
Dark, minimal, architectural. Never casual or colorful.

### Go-To Combinations

| Outfit | When to use |
|--------|-------------|
| Black fitted turtleneck + dark trousers | Editorial, formal, brand posts |
| Black crewneck sweatshirt + dark joggers | Content creation, casual brand |
| White fitted shirt + black trousers | Contrast compositions, clean product shots |
| Dark technical jacket + black tee | Urban environments, architectural locations |
| All black — tee + trousers | Most brand content — default fallback |

### Forbidden
- Casual graphic tees with brand logos
- Bright or warm colors (orange, red, yellow, brown)
- Distressed or oversized items
- Sneakers in formal editorial contexts

---

## Prompt Modifiers by Content Type

### Editorial / Brand Posts
```
confident posture, direct gaze at camera, controlled expression,
dark minimal clothing, architectural lighting
```

### Urban / Location
```
walking through urban environment, purposeful stride,
dark fitted clothing, natural confident movement
```

### Tech / Digital Aesthetic
```
standing near digital interface or dark workspace,
sharp focus on face, dark background, ambient blue light accent
```

### Talking Head / Avatar (HeyGen)
```
Arthur Runa, Brazilian male late 20s, sharp jaw, dark brown eyes,
dark brown short hair, athletic lean ~1.80m, neutral expression,
direct eye contact, dark turtleneck or crewneck, clean background
```

---

## Notes on Consistency

- Always use character sheet UUIDs (from reference-ids.md) alongside text descriptors
- If generation drifts from Arthur's appearance, add: "maintain exact facial features from reference"
- For Seedance video: include physical description in opening prompt, not just refs
- Soul ID (`a4f9c61c-e105-4bb8-833d-c40158ef6224`) — use for formal portraits only, not scenes with props
