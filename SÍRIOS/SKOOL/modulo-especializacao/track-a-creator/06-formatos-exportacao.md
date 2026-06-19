---
date: 2026-04-02
tags: [creator-dollar, skool, formatos, exportacao, instagram, modulo-3]
project: runa-systems-global
type: course-support
produto: [[creator-dollar-prd]]
modulo: "3.4 — Biblioteca de formatos"
---

# Biblioteca de Formatos — Exportação por Destino

> Módulo 3 · Aula 3.4

O mesmo vídeo gerado no Sora 2 pode ser adaptado para múltiplos formatos. Esta referência define as especificações exatas para cada destino.

---

## Formatos de vídeo

### Reels do Instagram (formato principal)

| Parâmetro | Especificação |
|-----------|--------------|
| **Proporção** | 9:16 (vertical) |
| **Resolução** | 1080 × 1920 px |
| **Duração** | 7 a 90 segundos (ideal: 15–30s) |
| **FPS** | 30 fps |
| **Formato** | MP4 (H.264) |
| **Áudio** | AAC, 44.1 kHz |
| **Tamanho máximo** | 250 MB |

**Nota sobre o Sora 2:** O Sora 2 gera em 16:9 por padrão. Para Reels, você precisará ou:
- Solicitar 9:16 no prompt (se a ferramenta permitir)
- Recortar verticalmente no CapCut (centralizar o rosto)

---

### Stories do Instagram

| Parâmetro | Especificação |
|-----------|--------------|
| **Proporção** | 9:16 (vertical) |
| **Resolução** | 1080 × 1920 px |
| **Duração** | Até 60 segundos por segmento |
| **Formato** | MP4 (H.264) |

**Zona segura:** Mantenha o rosto e elementos principais entre y=250px e y=1670px (evitar corte pelo UI do Instagram).

---

### Feed do Instagram (quadrado)

| Parâmetro | Especificação |
|-----------|--------------|
| **Proporção** | 1:1 |
| **Resolução** | 1080 × 1080 px |
| **Duração** | Até 60 segundos |
| **Formato** | MP4 (H.264) |

---

### YouTube Shorts

| Parâmetro | Especificação |
|-----------|--------------|
| **Proporção** | 9:16 (vertical) |
| **Resolução** | 1080 × 1920 px |
| **Duração** | Até 60 segundos |
| **Formato** | MP4 |

---

## Formatos de imagem

### Post de feed (quadrado)

| Parâmetro | Especificação |
|-----------|--------------|
| **Proporção** | 1:1 |
| **Resolução** | 1080 × 1080 px |
| **Formato** | JPG ou PNG |
| **Qualidade JPG** | 80–90% |

---

### Post de feed (retrato — melhor cobertura no feed)

| Parâmetro | Especificação |
|-----------|--------------|
| **Proporção** | 4:5 |
| **Resolução** | 1080 × 1350 px |
| **Formato** | JPG ou PNG |

---

### Carrossel

| Parâmetro | Especificação |
|-----------|--------------|
| **Proporção** | 1:1 ou 4:5 (manter consistente entre slides) |
| **Resolução** | 1080 × 1080 px ou 1080 × 1350 px |
| **Slides** | 2 a 10 |
| **Formato** | JPG ou PNG por slide |

---

### Thumbnail YouTube

| Parâmetro | Especificação |
|-----------|--------------|
| **Proporção** | 16:9 |
| **Resolução** | 1280 × 720 px (mínimo) |
| **Resolução recomendada** | 1920 × 1080 px |
| **Formato** | JPG ou PNG |
| **Tamanho máximo** | 2 MB |

---

## Recorte e adaptação no CapCut

O CapCut é a ferramenta mais rápida para adaptar o vídeo do Sora 2 para diferentes formatos.

### Recorte 16:9 → 9:16 (para Reels)

1. Importe o vídeo
2. Selecione "Proporção" → 9:16
3. Reposicione manualmente para centralizar o rosto
4. Verifique que o rosto não está cortado em nenhum momento do vídeo
5. Exporte em 1080 × 1920, 30fps

---

## Checklist antes de publicar

- [ ] Proporção correta para o formato
- [ ] Resolução ≥ 1080px na menor dimensão
- [ ] Rosto visível e centralizado (sem corte pelo UI)
- [ ] Marca d'água removida (vmake.ai)
- [ ] Áudio adicionado se necessário (trilha ou voz)
- [ ] Legenda/texto não cobre o rosto

---

*Documento conectado a: [[creator-dollar-prd]] · [[05-hack-sora]] · [[07-storybook-final]]*
