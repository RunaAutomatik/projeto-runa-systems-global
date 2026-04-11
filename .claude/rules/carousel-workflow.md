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
- Locate the corresponding pin file in the product criativos folder:
  - Pin 01–03 (RUNA-SYSTEMS): `SÍRIOS/🎯 PRODUTOS/RUNA-SYSTEMS/criativos/pin-0X-*.md`
  - Pin 04 AVATAR (CREATOR$): `SÍRIOS/🎯 PRODUTOS/CREATOR$/criativos/pin-04-creator-teaser.md`
  - Pin 04 SQUAD (SQUAD$): `SÍRIOS/🎯 PRODUTOS/SQUAD$/criativos/pin-04-squad.md`
  - Pin 05 AGENTE (AGENT$): `SÍRIOS/🎯 PRODUTOS/AGENT$/criativos/pin-05-nemoclaw.md`
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
- If the pin is new (not yet in the keyword map), add the DM keyword with full vault-relative path:
  ```json
  "KEYWORD": "🎯 PRODUTOS/{PRODUCT}/criativos/pin-0X-assets"
  ```
  File: `scripts/carousel-keywords.json`
- The watcher resolves paths from `SÍRIOS/` — the JSON value must be the path relative to `SÍRIOS/`

### STEP 5 — Instruct the user
After completing all steps, always display this exact instruction block:

```
PRÓXIMOS PASSOS:

1. Cole o brief acima no Claude Chat (agente carousel)
2. Faça o download do HTML gerado
3. O watcher detecta automaticamente:
   - Move o HTML para a pasta criativos do produto
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
1. Verify files exist in the product's `criativos/pin-0X-assets/` (slide_1.png through slide_7.png)
2. Update pin .md status: `brief-ready` → `ready-to-publish`
3. Update hub entry: mark as `✅ ready-to-publish`
4. Commit the status update

## Keyword Map Reference

Current keyword → folder assignments (paths relative to `SÍRIOS/`):

| Keyword   | Product     | Path                                                          | Pin |
|-----------|-------------|---------------------------------------------------------------|-----|
| ARQUITETO | RUNA-SYSTEMS | `🎯 PRODUTOS/RUNA-SYSTEMS/criativos/pin-01-assets`           | 01  |
| RUNA      | RUNA-SYSTEMS | `🎯 PRODUTOS/RUNA-SYSTEMS/criativos/pin-02-assets`           | 02  |
| SISTEMA   | RUNA-SYSTEMS | `🎯 PRODUTOS/RUNA-SYSTEMS/criativos/pin-03-assets`           | 03  |
| AVATAR    | CREATOR$    | `🎯 PRODUTOS/CREATOR$/criativos/pin-04-creator-assets`       | 04  |
| SQUAD     | SQUAD$      | `🎯 PRODUTOS/SQUAD$/criativos/pin-04-squad-assets`           | 04  |
| AGENTE    | AGENT$      | `🎯 PRODUTOS/AGENT$/criativos/pin-05-assets`                 | 05  |

When adding new pins, always update `scripts/carousel-keywords.json` in STEP 4.

## Notes

- The watcher (`npm run watch:carousel`) must be running to auto-process downloads
- If watcher is not running, user can manually run:
  `python -X utf8 scripts/export-carousel.py --html PATH --out DIR`
- Slide screenshots are taken at 1080×1080px (Instagram square format)
- The caption lives in the pin .md file — instagram-worker reads it from there
- Pin .md files are now colocated with their assets inside the product's `criativos/` folder
