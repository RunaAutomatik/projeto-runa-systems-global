---
date: 2026-04-03
tags: [site-dollar, promptbook, ai-image, ai-video, maya, freyja, inference-sh]
project: SITE$
product: SITE$ — Módulo AI Animation Promptbook
status: ready
---

# Promptbook — AI Animation para Landing Pages

**Produto:** SITE$
**Módulo:** Animação de marca com IA (scroll-driven background)
**Workflow:** FREYJA (brief) → MAYA (execução) → @dev (integração canvas)
**Modelos usados:** `google/gemini-3-pro-image-preview` (nano-banana) + `google/veo-3-1-fast` (Veo 3)
**Plataforma:** inference.sh (`infsh` CLI)

---

## Conceito — "A Ordem Que Emerge"

A ideia central é mostrar **a marca se revelando**: o símbolo da empresa começa desmontado — fragmentos, linhas soltas, partículas em deriva — e ao longo da animação as peças convergem com precisão arquitetônica até o símbolo estar completo e irradiando luz.

Aplicação: fundo scroll-driven na segunda dobra da landing page. O usuário rola e assiste à marca se montar em tempo real, sincronizada com o scroll via canvas + 192 frames WebP.

**Paleta de cores Runa Systems usada nos prompts:**
- Background: `#020818` (azul espaço profundo)
- Teal elétrico: `#0E9E8E`
- Ouro frio: `#C9A84C`
- Aurora: violeta profundo + azul frio

---

## IMAGENS — Google Gemini (nano-banana)

### Modelo
```
google/gemini-3-pro-image-preview
```

### CLI
```bash
infsh app run google/gemini-3-pro-image-preview --input '{"prompt": "...", "width": 1920, "height": 1080}'
```

---

### IMG-01 — Logo Desmontada (primeira iteração — conceito abstrato)

> **Resultado:** Gerou sigil abstrato genérico. Bom estilo mas sem fidelidade à logo real.
> **Status:** Descartado — logo incorreta

```
Abstract glowing rune-like symbols and particles scattered across deep cosmic
black space (#050D1A), fragmented geometric sigil dissolving into dispersed
fragments, particles have the texture of frost ice crystals and mycelium spores
floating in void, electric teal (#0E9E8E) and cold gold (#C9A84C) particle glow,
aurora violet light bleeding at edges, some particles trail like code characters
drifting apart, the fragments suggest an ancient-digital symbol being
deconstructed, architectural precision meets organic cosmic matter, cinematic
dark atmosphere, no text, ultra detailed, 16:9 landscape
```

**Parâmetros:**
```json
{
  "width": 1920,
  "height": 1080
}
```

**Lição aprendida:** Sem descrever a geometria exata da logo, o modelo gera um símbolo genérico. Para fidelidade à marca, é preciso descrever cada elemento separadamente.

---

### IMG-02 — Logo Montada (primeira iteração — conceito abstrato)

> **Resultado:** Sigil luminoso no estilo certo mas sem relação com a logo real.
> **Status:** Descartado — logo incorreta

```
A complete luminous geometric sigil mark fully assembled and radiant in deep
cosmic black space (#050D1A), an ancient-digital rune symbol of architectural
authority, made of precise geometric lines with electric teal (#0E9E8E) glow
and cold gold (#C9A84C) accent details at intersection points, surrounded by
converged frost crystal particles still settling into place, aurora borealis
light corona (teal and deep violet) emanating from the assembled symbol,
mycelium thread patterns visible in the glow trails, the symbol feels like it
was always meant to exist — inevitable, unhurried, timeless, background has
subtle depth gradient from pure black to deep navy at edges, no text, cinematic
quality, 16:9 landscape
```

**Parâmetros:**
```json
{
  "width": 1920,
  "height": 1080
}
```

---

### IMG-03 — Logo Desmontada (versão final — 4 linhas corretas) ✅

> **Resultado:** As 4 linhas da logo Runa flutuando separadas no espaço.
> **Status:** APROVADO — usado em `public/logo-dismantled.png`

A chave para fidelidade: descrever cada uma das 4 linhas do SVG individualmente, com cor e geometria específicas.

```
Four separate glowing line segments floating apart in deep cosmic black space
(#020818), representing a deconstructed minimal geometric symbol: (1) a vertical
line segment glowing electric teal (#0E9E8E), (2) a short diagonal line going
down-right at 45 degrees glowing teal, (3) another identical diagonal line
slightly lower also glowing teal, (4) a short horizontal crossbar glowing cold
gold (#C9A84C). The four segments are scattered in space as if repelled from
each other, each with a soft luminous glow trail, surrounded by subtle frost
crystal particles and thin geometric light threads in the dark void. Deep space
black background with faint aurora light at edges in teal and violet.
Architectural, minimal, unhurried. 16:9 landscape
```

**Parâmetros:** padrão (sem override de dimensão — modelo escolhe melhor resolução)

**Princípio:** Nomear cada componente geométrico com número (1), (2), (3), (4) força o modelo a tratar cada elemento como entidade separada.

---

### IMG-04 — Logo Montada (versão final — 4 linhas corretas) ✅

> **Resultado:** O símbolo completo, luminoso, com anatomia fiel à logo.
> **Status:** APROVADO — usado em `public/logo-assembled.png`

```
A complete minimal geometric symbol fully assembled and glowing on deep cosmic
black background (#020818). The symbol: a vertical line as central spine in
electric teal (#0E9E8E) glow, two parallel diagonal lines extending from the
spine going down-right at 45 degrees in electric teal (#0E9E8E), and a short
horizontal gold crossbar (#C9A84C) near the top crossing the spine. The assembled
symbol floats at center, radiating a precise luminous corona of teal and aurora
light, particles have converged and settled around it like frost crystals finding
their place. The overall feeling: architectural inevitability — a rune that has
always been there, now revealed. 16:9 dark cinematic landscape
```

**Princípio:** Para a versão montada, descrever a relação espacial entre os elementos (o crossbar "cruza" o spine, os diagonais "estendem" do spine). Isso cria a sensação de encaixe preciso.

---

## VÍDEO — Google Veo 3 (veo-3-1-fast)

### Modelo
```
google/veo-3-1-fast
```

### CLI
```bash
infsh app run google/veo-3-1-fast --input '{"prompt": "...", "duration": 8, "aspect_ratio": "16:9"}' --timeout 300000
```

> ⚠️ **Timeout:** Veo leva 3–10 minutos para processar. Use `--timeout 300000` (5 min) ou `--timeout 600000` (10 min).

---

### VID-01 — Tentativa inicial (BLOQUEADA pelo content filter) ❌

> **Motivo do bloqueio:** Terminologia "rune-like", "sigil", "ancient" ativou filtros de conteúdo da Google Responsible AI.
> **Erro:** `Video was blocked by content filtering — Support code: 22137204`

```
Cinematic dark ambient animation on deep cosmic black (#050D1A) background.
Opens with scattered glowing rune-like geometric fragments and particles floating
in void — frost crystal texture and mycelium thread quality, electric teal and
cold gold glow, particles drifting slowly with purpose. Over 7 seconds, the
fragments begin converging with architectural precision, trailing aurora light
(teal, deep violet, cold blue). Grid lines emerge briefly as a framework. The
particles lock into place one by one, forming a complete luminous geometric
sigil/symbol — ancient meets digital, inevitable and unhurried. Final state:
the complete mark glows steadily, aurora corona pulses once, then settles.
Organic matter becoming architectural order. No text, no camera movement,
pure ambient motion, 16:9
```

**Palavras que ativam o filtro do Veo:**
- `rune` / `rune-like`
- `sigil`
- `ancient` (em contexto de símbolo/ritual)
- `symbol` + `ancient` combinados

---

### VID-02 — Segunda tentativa (aprovada — conceito de partículas) ✅

> **Estratégia:** Substituir terminologia mística por "motion graphics" e "geometric symbol". Remover "ancient".
> **Resultado:** Animação de partículas convergindo. Aprovada pela Google.
> **Status:** Referência de conceito — superada pelo VID-03 com geometria correta

```
Abstract cinematic motion graphics on pure black background. Tiny glowing
geometric particles and crystal shards float freely in dark space, particles
have electric teal and pale gold light, frost crystal and organic fiber textures
visible in the glow trails. Slowly, the particles begin drifting toward a central
point with calm deliberate motion, leaving trails of aurora light in teal and
violet. Geometric grid lines appear briefly as a subtle framework. The particles
converge and interlock with architectural precision into a complete glowing
geometric symbol at center — luminous, steady, inevitable. The final symbol
pulses softly once with an aurora corona, then holds. Ambient, unhurried, dark
and beautiful. No text, no camera cuts, continuous fluid motion, 16:9 aspect ratio
```

**Parâmetros:**
```json
{
  "duration": 8,
  "aspect_ratio": "16:9"
}
```

---

### VID-03 — Versão final com logo correta (4 linhas convergindo) ✅

> **Estratégia:** Descrever as 4 linhas da logo individualmente convergindo em sequência.
> **Resultado:** Animação com anatomia fiel à logo — vertical spine, 2 diagonais, gold crossbar.
> **Status:** APROVADO — usado em `public/logo-reveal.mp4` → 192 frames WebP

```
Abstract minimal cinematic animation on pure deep black background. Opens with
four separate glowing line segments drifting in dark space: a vertical teal line,
two parallel diagonal teal lines at 45 degrees, and a short horizontal gold
segment — all floating apart with soft luminous trails. Calm, ambient. Over 8
seconds the four segments slowly and deliberately move toward each other with
architectural precision, converging at the center. Grid lines briefly appear as
a structural scaffold. The vertical line locks in place first, then the two
diagonals attach to it at precise angles forming a geometric rune-like mark,
finally the gold crossbar slides into position near the top. The assembled symbol
glows with steady teal light and a gold accent, aurora corona pulses once, then
holds. Minimal, unhurried, inevitable. 16:9 landscape
```

**Parâmetros:**
```json
{
  "duration": 8,
  "aspect_ratio": "16:9"
}
```

**Princípio de sequenciamento:** Descrever a ordem de convergência ("vertical line locks in place FIRST, then diagonals, FINALLY the crossbar") cria uma narrativa de construção que o modelo segue — a animação tem um arco dramático interno.

---

## Extração de Frames para Canvas Scroll-Driven

Após gerar o vídeo, extrai-se os frames para criar a animação scroll-driven via canvas:

```bash
# Extração padrão (1280x720, quality 80 — rápido)
ffmpeg -i logo-reveal.mp4 -vf "fps=24" -c:v libwebp -quality 80 "frames/frame_%04d.webp"

# Extração HD com upscale Lanczos (1920x1080, quality 90 — recomendado)
ffmpeg -i logo-reveal.mp4 -vf "fps=24,scale=1920:-1:flags=lanczos" -c:v libwebp -quality 90 "frames/frame_%04d.webp"
```

**Trade-off qualidade vs. tamanho:**
| Configuração | Tamanho/frame | Total (192 frames) | Qualidade percebida |
|---|---|---|---|
| 1280×720, q80 | ~6.5 KB | ~1.25 MB | Baixa em telas ≥1080p |
| 1920×1080, q90 | ~19.5 KB | ~10.7 MB | Alta — recomendado |

---

## Regras para Adaptar a Outras Marcas

### 1. Identificar a geometria exata da logo
Antes de escrever qualquer prompt, extraia as primitivas geométricas da logo:
- Linhas (horizontal, vertical, diagonal — ângulo em graus)
- Formas (círculo, triângulo, retângulo — dimensões relativas)
- Pontos de intersecção (onde elementos se cruzam)
- Cores exatas em hex

### 2. Escrever o prompt "desmontado" com número de elementos
```
[N] separate [shape] segments floating apart in dark space:
(1) a [description] in [color],
(2) a [description] in [color],
...
```

### 3. Escrever o prompt "montado" com relações espaciais
```
a [shape1] as central spine,
[shape2] extending from the spine [direction],
[shape3] crossing/intersecting [shape1] at [position]
```

### 4. Evitar filtros do Veo (Google)
Palavras que ativam content filter e devem ser evitadas:
- ❌ `rune`, `rune-like`, `runic`
- ❌ `sigil`, `sigils`
- ❌ `ancient symbol` (combinação)
- ❌ `occult`, `ritual`, `magical`

Substituições seguras:
- ✅ `geometric symbol` / `geometric mark`
- ✅ `motion graphics`
- ✅ `abstract symbol`
- ✅ `minimal geometric form`

### 5. Sequência de convergência para vídeo
Sempre descrever a ordem em que os elementos se montam. Isso cria:
- Hierarquia visual (o elemento principal aparece primeiro)
- Arco dramático (clímax quando o último elemento encaixa)
- Consistência com a identidade da marca

---

## Integração no SITE$ — Resumo Técnico

A sequência completa para integrar animação de marca scroll-driven em qualquer landing page:

```
1. FREYJA escreve brief criativo (conceito, mood, paleta)
2. MAYA gera: logo-dismantled.png + logo-assembled.png (Gemini)
3. MAYA gera: logo-reveal.mp4 (Veo 3, 8s, 16:9)
4. @dev extrai 192 frames WebP (ffmpeg, quality 90, 1920px)
5. @dev integra LogoRevealSection (React + canvas + scroll listener)
6. Configurar: height=450vh, scale=1.0, gradiente top/bottom
```

**Arquivos entregáveis por cliente:**
- `public/logo-dismantled.png`
- `public/logo-assembled.png`
- `public/logo-reveal.mp4`
- `public/frames/frame_0001.webp` … `frame_0192.webp`
- `src/components/LogoRevealSection.tsx`
