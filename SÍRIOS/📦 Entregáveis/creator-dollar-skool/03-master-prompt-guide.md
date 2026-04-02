---
date: 2026-04-02
tags: [creator-dollar, skool, prompt, master-prompt, modulo-2]
project: runa-systems-global
type: course-support
produto: [[creator-dollar-prd]]
modulo: "2.2 — O Prompt Mestre"
---

# Guia do Prompt Mestre

> Módulo 2 · Aula 2.2

O Prompt Mestre é o bloco que garante que a mesma personagem aparece em todas as gerações. É o documento mais importante do método — sem ele, cada imagem parece uma pessoa diferente.

---

## O problema que o Prompt Mestre resolve

Ferramentas de IA generativa não têm memória entre sessões. Cada vez que você gera uma imagem, é como se a ferramenta nunca tivesse visto o seu avatar antes.

O Prompt Mestre resolve isso descrevendo a personagem em tanto detalhe que a ferramenta não precisa "lembrar" — ela reconstrói a identidade a partir da descrição.

---

## Estrutura do Prompt Mestre

Um prompt eficaz tem 6 blocos:

```
1. CONTEXTO DA CENA
   (o que está acontecendo, de onde a foto está sendo tirada)

2. PERSONAGEM
   (descrição física: tom de pele, cabelo, biótipo, característica marcante)

3. ROUPA
   (peça a peça: tipo, cor exata, tecido, modelagem, caimento no corpo)

4. AMBIENTE
   (onde ela está, o que está ao redor, perspectiva)

5. ILUMINAÇÃO
   (fonte de luz, temperatura, sombras, estilo)

6. ESTILO FOTOGRÁFICO
   (tipo de câmera simulada, composição, saturação, vibe geral)

NEGATIVE:
   (lista do que deve ser excluído)
```

---

## Exemplo completo — Alpha®

```
Casual indoor photo of this woman from the reference photos,
speaking in the middle of a sentence, slightly warmer and
healthier skin tone, with a subtle glow (no retouching),
one hand naturally raised near her chest in a relaxed gesture.

She is wearing:
- a white ribbed sleeveless tank top, cropped at the waist
- high neckline, snug but natural fit
- visible ribbed texture with realistic fabric tension and folds
- light beige / off-white loose pants
- elastic waistband with a visible drawstring tied at the front
- relaxed, casual fit with authentic fabric behavior and movement

Soft ambient lighting in an indoor environment,
warm lights from room decor, soft shadows that
define her cheekbones and jawline.

Neutral wall and casual room elements behind her.
Photo casually taken with an iPhone by a friend,
slightly off-center.

Natural expression, no posing, authentic moment, soft
yet warm color palette.

NEGATIVE:
professional photography, editorial studio lighting,
golden hour, intense bokeh, portrait mode,
HDR, oversaturated colors,
white clothes, pale skin tone, flat lighting, cool tones
```

---

## Regras críticas

### Roupa em detalhes — sempre
A roupa é o elemento de consistência mais importante. Descreva:
- Tipo de peça (regata, camiseta, camisa, etc.)
- Cor exata (não "branca" — "off-white com textura canelada")
- Tecido (linho, algodão canelado, malha, etc.)
- Como a peça cai no corpo (ajustada, larga, cropped, etc.)

> O Sora 2 assume a roupa da imagem-base. Se a roupa for inconsistente nas imagens, o vídeo também será.

### Iluminação Lo-Fi — nunca estúdio
Fotografia de estúdio cria um look artificial que destoa do conteúdo de criadores. Use:
- Luz natural de janela
- Luz ambiente de sala
- Luz difusa ao ar livre

Evite: "studio lighting", "professional photography", "editorial", "golden hour", "HDR".

### Expressão autêntica — nunca posada
Descreva uma ação natural em andamento, não uma pose:
- "speaking in the middle of a sentence"
- "looking down at her phone"
- "laughing at something just heard"
- "one hand naturally raised near her chest"

---

## Como usar o agente LENS

O LENS é um GPT treinado para otimizar prompts no estilo Lo-Fi realista. Use-o antes de gerar qualquer imagem.

**Acesso:** https://chatgpt.com/g/g-69be9c381dcc81919e85d56ace38c9f4-lens-r

**Como usar:**
1. Cole a descrição completa do seu avatar (aparência, roupa, ambiente, tom)
2. Peça: "Gere um prompt otimizado para Nano Banana Pro no estilo Lo-Fi realista"
3. Use o prompt gerado diretamente na ferramenta

**O que o LENS faz que você não faz sozinho:**
- Ordena os elementos na sequência que a ferramenta processa melhor
- Usa vocabulário técnico específico (tokens de estilo, descritores de iluminação)
- Gera automaticamente o bloco NEGATIVE

---

## Checklist antes de gerar

- [ ] Roupa descrita com tipo, cor exata, tecido e modelagem
- [ ] Ambiente definido (interior / exterior, elementos de fundo)
- [ ] Iluminação especificada (não deixar vago)
- [ ] Expressão descrita como ação natural em andamento
- [ ] Bloco NEGATIVE inclui: studio lighting, professional photography, HDR, portrait mode
- [ ] Fundo neutro selecionado (facilita o Passo 2 e o Sora 2)

---

## Iterando o Prompt

Na primeira geração, o resultado nunca é perfeito. Use este processo:

| Problema | Solução no prompt |
|----------|------------------|
| Pele muito clara | Adicione "warm skin tone, healthy glow" no bloco personagem |
| Iluminação muito fria | Substitua por "warm ambient light from room decor" |
| Parece foto de estúdio | Adicione "iPhone photo by a friend, slightly off-center" no bloco estilo |
| Roupa diferente do descrito | Mova a descrição de roupa para mais cedo no prompt; seja mais específico no tecido |
| Fundo muito elaborado | Adicione "simple neutral background, minimal room elements" |

---

## Próximo passo

Com o Prompt Mestre validado:
1. Salve-o no **Bloco 3 do seu Storyboard** → [[02-storyboard-template]]
2. Use-o como base para todas as variações → [[04-biblioteca-visual]]
3. Aplique o hack da pintura antes de ir ao vídeo → [[05-hack-sora]]

---

*Documento conectado a: [[creator-dollar-prd]] · [[02-storyboard-template]] · [[04-biblioteca-visual]]*
