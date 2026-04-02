---
date: 2026-04-02
tags: [creator-dollar, skool, sora, higgsfield, video, modulo-3]
project: runa-systems-global
type: course-support
produto: [[creator-dollar-prd]]
modulo: "3.2 — Construindo o primeiro vídeo da Alpha®"
---

# O Hack do Sora 2 — Higgsfield → Vídeo Ultra-Realista

> Módulo 3 · Aula 3.2

Este é o passo que faz a diferença entre um vídeo com rosto inconsistente e um vídeo com movimento fluido e identidade preservada. Não pule.

---

## O problema que o hack resolve

O Sora 2 é excelente em gerar movimento natural — mas quando recebe uma foto realista como input, ele tende a "corrigir" o rosto baseado nos padrões que aprendeu. O resultado: o rosto muda, a personagem perde identidade.

**A solução:** Transformar a foto em uma pintura com traços de tinta visíveis antes de enviar ao Sora 2.

**Por que funciona:** O Sora 2 interpreta a pintura como referência artística — não como foto real. Isso diz ao modelo: "mantenha este estilo e esta personagem, mas dê movimento natural". O resultado é mais fluido, mais consistente e com o rosto preservado.

---

## PASSO 1 — Preparar a imagem-base

Use a imagem aprovada no Módulo 2. Idealmente:
- Fundo neutro (facilita o Sora 2 a focar no movimento da personagem)
- Rosto desobstruído (sem óculos escuros, chapéu na frente do rosto, etc.)
- Roupa completa e visível (o Sora assume a roupa da imagem)

---

## PASSO 2 — Aplicar o hack no Higgsfield

1. Abra o Higgsfield (higgsfield.ai)
2. Carregue a imagem do Passo 1
3. Use exatamente este prompt:

```
transforme essa imagem em uma pintura ultra realista
com todas as características da personagem,
mas traga marcas de tinta visíveis
```

4. Gere e salve o resultado como `pintura-higgsfield.png`

> **Importante:** Não modifique este prompt. As palavras "pintura ultra realista" + "marcas de tinta visíveis" são a combinação específica que ativa o comportamento correto no Sora 2.

---

## PASSO 3 — Gerar o vídeo no Sora 2

### Como acessar o Sora 2 no Brasil

O Sora 2 (sora.com) não está disponível diretamente no Brasil. O método de acesso completo está no Módulo 3 do programa em vídeo.

---

### Usando o agente REEL

Antes de abrir o Sora 2, gere o prompt de vídeo com o agente REEL.

**Acesso:** https://chatgpt.com/g/g-69bebdb35f748191952d6500f350c386-reel-r

**Como usar:**
1. Descreva o que você quer que o avatar faça no vídeo
   (ex: "ela está falando diretamente para a câmera, natural, como numa story")
2. Peça: "Gere um prompt para Sora 2 estilo selfie natural, 15 segundos"
3. Use o prompt gerado no campo de texto do Sora 2

---

### Configuração no Sora 2

| Parâmetro | Valor |
|-----------|-------|
| **Input** | `pintura-higgsfield.png` (não a foto original) |
| **Prompt** | Output do agente REEL |
| **Style** | **Selfie** |
| **Duração** | **15 segundos** |

---

### Gerando os takes

Clique em Gerar e aguarde. **Repita 3 vezes** com o mesmo prompt e a mesma imagem.

Por que 3x:
- O Sora 2 tem variabilidade natural entre gerações
- Alguns takes terão artefatos leves, outros serão mais fluidos
- Selecionar o melhor de 3 é muito mais confiável do que depender de 1 geração

---

## PASSO 4 — Selecionar o melhor take

| Critério | O que verificar |
|----------|----------------|
| **Movimento fluido** | Sem artefatos, sem teleportes, sem deformações |
| **Rosto consistente** | O rosto corresponde às imagens curadas do Módulo 2 |
| **Roupa consistente** | A roupa não mudou no meio do vídeo |
| **Naturalidade** | Parece gravado, não gerado — movimento orgânico |

Descarte takes com:
- Olhos que piscam de forma estranha ou assimétrica
- Boca se movendo sem lógica (se o prompt não era de fala)
- Fundo com elementos que aparecem e desaparecem
- Deformação de mãos ou pescoço

---

## PASSO 5 — Remover marca d'água (se necessário)

1. Acesse vmake.ai
2. Faça upload do vídeo selecionado
3. Processamento automático
4. Baixe o vídeo limpo

Salve como `take-01.mp4` (ou o número do take selecionado) na pasta `avatar-[nome]/videos/curados/`.

---

## Resumo do fluxo completo

```
referencia-base.png (Módulo 2)
        ↓
Higgsfield → "transforme em pintura ultra realista com marcas de tinta"
        ↓
pintura-higgsfield.png
        ↓
Agente REEL → prompt de vídeo
        ↓
Sora 2 (Style: Selfie, 15s, 3x gerações)
        ↓
Selecionar melhor take
        ↓
vmake.ai (remover marca d'água)
        ↓
take-01.mp4 → pronto para publicar
```

---

## Registre no Storyboard

Após selecionar o take final:
1. Salve o prompt do REEL no **Bloco 5 do Storyboard** → [[02-storyboard-template]]
2. Registre as configurações usadas (Style, duração)
3. Anote o que funcionou para futuras gerações

---

*Documento conectado a: [[creator-dollar-prd]] · [[04-biblioteca-visual]] · [[06-formatos-exportacao]]*
