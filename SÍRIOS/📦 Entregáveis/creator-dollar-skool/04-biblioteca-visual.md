---
date: 2026-04-02
tags: [creator-dollar, skool, biblioteca, imagens, curadoria, modulo-2]
project: runa-systems-global
type: course-support
produto: [[creator-dollar-prd]]
modulo: "2.3 a 2.5 — Travando o estilo, gerando variações e curando"
---

# Biblioteca Visual — Geração e Curadoria

> Módulo 2 · Aulas 2.3, 2.4 e 2.5

A biblioteca visual é o acervo de imagens aprovadas do seu avatar. Ela é a base de todo o conteúdo futuro — posts, thumbnails, carrosséis, vídeos.

**Meta ao final do Módulo 2:** 30+ imagens curadas e organizadas.

---

## Travando o estilo visual

Antes de gerar variações, você precisa de uma imagem-base aprovada — a "referência mestra" que define o padrão para todas as outras.

### Processo

1. Gere 5 imagens com o Prompt Mestre (aula 2.2)
2. Selecione a melhor pelo critério abaixo
3. Essa imagem é sua **referência-base** — salve como `referencia-base.png`
4. Use essa imagem como referência visual no Nano Banana Pro / Higgsfield para gerar as próximas

### Critério de seleção da referência-base

| Critério | O que verificar |
|----------|----------------|
| **Consistência facial** | O rosto corresponde à descrição da personagem? |
| **Iluminação** | A luz é natural, não de estúdio? |
| **Roupa** | A roupa está exatamente como descrita no prompt? |
| **Expressão** | Parece natural, não posada? |
| **Fundo** | É neutro o suficiente para não distrair? |

---

## Gerando variações

Com a referência-base aprovada, gere variações modificando um elemento por vez:

### Variações de expressão

```
[Prompt Mestre base] +

"laughing softly at something just said"
"looking directly at camera with a slight smirk"
"looking down, distracted, caught off guard"
"talking, mid-sentence, animated"
```

### Variações de postura

```
[Prompt Mestre base] +

"both hands holding a coffee mug"
"one hand running through hair"
"arms crossed lightly, relaxed"
"leaning slightly against the wall"
```

### Variações de look

Para cada look alternativo definido no Storyboard, substitua o bloco de roupa do Prompt Mestre:

```
[Mantenha: contexto + personagem + ambiente + iluminação + estilo]
[Substitua: bloco de roupa pelo look alternativo]
```

### Variações de ambiente

```
[Mantenha: personagem + roupa + estilo]
[Substitua: ambiente + iluminação por:]

"seated at a wooden desk with warm light from a lamp"
"standing near a window with natural daylight, soft curtain diffusion"
"in a coffee shop, brick walls, warm ambient light"
```

---

## Seeds e referência de imagem

### O que é seed
O seed é um número que fixa o "ponto de partida" da geração. Usar o mesmo seed com pequenas variações no prompt tende a manter consistência facial maior.

**Como usar:**
- Anote o seed da referência-base (a ferramenta exibe após geração)
- Use o mesmo seed para variações de expressão e postura
- Para variações de look ou ambiente, o seed é menos crítico

### Referência de imagem (Image-to-Image)
No Nano Banana Pro e Higgsfield, você pode anexar uma imagem como referência além do prompt. Use a `referencia-base.png` como referência visual.

**Resultado:** A ferramenta mantém os traços faciais da referência enquanto aplica as variações descritas no prompt.

---

## Selecionando e curando

### Quantas imagens gerar por sessão

Gere em lotes de 5 para cada variação. De 5 imagens, espere aprovar 2 a 3.

| Variação | Lotes | Meta de aprovadas |
|----------|-------|------------------|
| Expressões | 3 lotes | 6–8 imagens |
| Posturas | 2 lotes | 4–5 imagens |
| Looks alternativos | 2 lotes por look | 4–5 por look |
| Ambientes | 2 lotes | 4–5 imagens |

**Total esperado:** 30–40 imagens geradas → 20–30 aprovadas

---

## Organizando a biblioteca

```
avatar-[nome]/
├── imagens/
│   ├── referencia-base.png          ← a imagem fundacional (aprovada)
│   ├── pintura-higgsfield.png       ← input para o Sora 2
│   └── curadas/
│       ├── look-01-casual/
│       │   ├── expressao-sorrindo.png
│       │   ├── expressao-falando.png
│       │   └── postura-braco-cruzado.png
│       ├── look-02-[nome]/
│       └── ambiente-externo/
└── videos/
    └── curados/
```

---

## Checklist de curadoria por imagem

Antes de mover para a pasta `curadas/`, verifique:

- [ ] Rosto consistente com a referência-base
- [ ] Roupa corresponde ao look descrito
- [ ] Iluminação natural (não de estúdio)
- [ ] Expressão parece espontânea, não posada
- [ ] Resolução e nitidez adequadas para post no Instagram
- [ ] Fundo não distrai da personagem

---

## O que descartar imediatamente

- Artefatos visíveis (mãos deformadas, objetos multiplicados)
- Texto ou letras geradas pela IA (sempre saem erradas)
- Expressão que parece rendering 3D ou boneco
- Roupa diferente do descrito no prompt
- Rosto com traços que contradizem a definição da personagem

---

## Próximo passo

Com a biblioteca visual montada, você tem o input para o Módulo 3.

A imagem que vai para o Sora 2 não é a `referencia-base.png` — é a versão processada no Higgsfield (o hack da pintura). Esse passo é obrigatório.

→ [[05-hack-sora]]

---

*Documento conectado a: [[creator-dollar-prd]] · [[03-master-prompt-guide]] · [[05-hack-sora]]*
