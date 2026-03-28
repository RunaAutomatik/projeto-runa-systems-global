# Carousel Creation Workflow — Mandatory Protocol

## Trigger

This rule activates whenever a carousel brief is generated (via *carousel-brief or any
carousel content creation task for @arthsystems_).

## Mandatory Steps — Execute in Order

### STEP 1 — Generate the Brief
- Run *carousel-brief workflow (FREYJA)
- Output the complete structured brief in the standard format
- Include: Tema, Estilo, Palavra-chave DM, Oferta implícita, caption, 7 slides

### STEP 2 — Update the Pin .md file
- Locate the corresponding pin file: `SÍRIOS/📱 Instagram/@arthsystems_/📌 pins/pin-0X-*.md`
- Update frontmatter:
  - `type: carousel — 7 slides`
  - `estilo: [ARCHITECT | MANIFESTO | TERMINAL]`
  - `status: brief-ready`
- Append the full brief block under `## Brief FREYJA → Agente Carousel`
- Append or update `## Histórico de Publicação` table with current date + status "brief-ready"

### STEP 3 — Update the Hub
- Open `SÍRIOS/📱 Instagram/@arthsystems_/_hub.md`
- Mark the pin entry as `brief-ready` in the Carrosseis section

### STEP 4 — Update carousel-keywords.json
- If the pin is new (not yet in the keyword map), add the DM keyword:
  ```json
  "KEYWORD": "pin-0X-assets"
  ```
  File: `scripts/carousel-keywords.json`

### STEP 5 — Instruct the user
After completing all steps, always display this exact instruction block:

```
PRÓXIMOS PASSOS:

1. Cole o brief acima no Claude Chat (agente carousel)
2. Faça o download do HTML gerado
3. O watcher detecta automaticamente:
   - Move o HTML para pin-0X-assets/
   - Exporta slide_1.png ... slide_7.png (1080×1080)
   - Assets prontos para o instagram-worker publicar

Se o watcher não estiver rodando: npm run watch:carousel
```

### STEP 6 — Commit
Commit all changes with message format:
```
feat(carousel): pin-0X brief — [tema] [estilo]
```

## After Assets Return (when user confirms slides are ready)

When the user says slides were generated and downloaded:
1. Verify files exist in `pin-0X-assets/` (slide_1.png through slide_7.png)
2. Update pin .md status: `brief-ready` → `ready-to-publish`
3. Update hub entry: mark as `✅ ready-to-publish`
4. Commit the status update

## Keyword Map Reference

Current keyword → folder assignments:
| Keyword    | Folder         | Pin |
|------------|----------------|-----|
| ARQUITETO  | pin-01-assets  | 01  |
| RUNA       | pin-02-assets  | 02  |
| SISTEMA    | pin-03-assets  | 03  |

When adding new pins, always update `scripts/carousel-keywords.json` in STEP 4.

## Notes

- The watcher (`npm run watch:carousel`) must be running to auto-process downloads
- If watcher is not running, user can manually run:
  `python -X utf8 scripts/export-carousel.py --html PATH --out DIR`
- Slide screenshots are taken at 1080×1080px (Instagram square format)
- The caption lives in the pin .md file — instagram-worker reads it from there
