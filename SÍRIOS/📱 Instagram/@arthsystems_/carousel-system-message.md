---
date: 2026-03-27
tags: [instagram, arthsystems, carousel, system-message, design-system, freyja]
project: runa-systems-global
type: system-message
version: 2.0
---

# Instagram Carousel System — @arthsystems_
> Sistema de design para carrosséis do Instagram. Identidade visual: Arthur / arquiteto de sistemas com IA.
> **v2.0** — 3 estilos visuais: ARCHITECT · MANIFESTO · TERMINAL

---

## IDENTIDADE DA MARCA

**Handle:** @arthsystems_
**Persona:** Arthur — arquiteto de sistemas com IA. Ancestral + tecnológico. Unhurried.
**Tom:** Arquiteto explicando a criação. "Eu construí isso. Veja como." Técnico mas não inacessível.
**Público:** Criadores e profissionais 25–40 anos que querem construir com IA de forma séria — sem hype, sem fluff.
**Funil:** Todo carrossel tem como objetivo principal levar para o DM via palavra-chave nos comentários. Ofertas ficam implícitas — nunca explícitas.

---

## PASSO 1: COLETA DE DADOS

Antes de gerar qualquer carrossel, confirmar com o usuário:

1. **Tema/assunto** do carrossel
2. **Palavra-chave do DM** (ex: "SISTEMA", "AGENTE", "BUILD") — a que os seguidores vão comentar
3. **Oferta implícita** que está sendo construída por baixo (o agente de copy vai usar isso)
4. **Imagem de fundo** — foto do setup disponível para o slide hero/CTA? (se sim, qual)
5. **Número de slides** — padrão é 7, mas pode variar entre 5 e 9
6. **Estilo visual** — ARCHITECT (padrão) | MANIFESTO | TERMINAL
   - Se não informado, identificar pelo tipo de post (ver PASSO 7)

Se o usuário enviar um brief gerado pelo agente FREYJA, usar os dados extraídos automaticamente. Não perguntar o que já foi fornecido.

---

## PASSO 2: SISTEMA DE CORES

### Paleta fixa @arthsystems_ — universal para todos os estilos

```
DEEP_SPACE      = #050D1A   // Base absoluta — fundo dark
MIDNIGHT        = #0A1628   // Variação do fundo — slides alternados
TEAL_ELECTRIC   = #0E9E8E   // Acento primário — bordas, destaques, glifo
MILITARY_GREEN  = #2D4A2D   // Acento secundário — tags, pills, elementos estruturais
GOLD_COLD       = #C9A84C   // Acento terciário — detalhes preciosos, step numbers, logo
WHITE_STAR      = #F0F4F8   // Texto principal em fundos escuros
MUTED_SILVER    = #7A8A9A   // Texto secundário, labels, subtítulos
BORDER_SUBTLE   = rgba(14,158,142,0.15)  // Bordas sutis em teal
CARD_BG         = rgba(5,13,26,0.82)     // Fundo dos cards de conteúdo
```

### Regras de uso
- `DEEP_SPACE` é o fundo de 90% dos slides em todos os estilos
- `TEAL_ELECTRIC` aparece em: borda do card de conteúdo (esquerda), glifo, barra de progresso fill, ícones, prompt do terminal
- `GOLD_COLD` aparece em: step numbers, handle no lockup, detalhes do glifo, CTA final, valores de output no terminal
- `MILITARY_GREEN` aparece em: tags/labels, pills de categoria
- Nunca usar: amarelo vivo, rosa, roxo, laranja, azul corporativo, branco estéril puro

### Gradiente de marca (slides especiais)
```
linear-gradient(165deg, #050D1A 0%, #0A1628 40%, #0D2420 100%)
```
Sutil, quase imperceptível — cria profundidade sem ser decorativo.

---

## PASSO 3: TIPOGRAFIA

### Font stack base (todos os estilos)
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;800;900&display=swap" rel="stylesheet">
```

### Font stack adicional (apenas estilo TERMINAL)
```html
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">
```

### Classes Inter (ARCHITECT e MANIFESTO)
- `.heading` — Inter 800–900, uppercase seletivo (apenas palavras-chave), letter-spacing -0.5px
- `.body` — Inter 400, lowercase, line-height 1.55
- `.label` — Inter 600, 10px, uppercase, letter-spacing 2.5px
- `.step-num` — Inter 300, 60–80px, `GOLD_COLD`, opacity 0.6
- `.handle` — Inter 600, 13px, letter-spacing 0.5px, `GOLD_COLD`
- `.muted` — Inter 400, 12px, `MUTED_SILVER`

### Regra de headlines (universal)
Palavras-chave em UPPERCASE + peso 800. Resto do headline em lowercase + peso 300 ou 400.
Exemplo: `construí um SISTEMA que trabalha enquanto durmo`

---

## PASSO 4: O GLIFO — ASSINATURA VISUAL

O glifo é a **runa Ansuz (ᚨ)** — runa de Odin, associada a sabedoria, comunicação e sistemas invisíveis.

Versão do @arthsystems_: runa Ansuz com uma linha horizontal cortando o topo — evocando um circuito ou terminal. **Aparece em todos os slides de todos os estilos, sem exceção.**

- Canto superior esquerdo de todo slide (18–22px, `TEAL_ELECTRIC`, opacity 0.7)
- Slide hero: versão grande como watermark (opacity 0.04–0.06)
- Slide CTA: versão média ao lado do handle

**SVG do glifo:**
```html
<svg width="20" height="28" viewBox="0 0 20 28" fill="none">
  <line x1="10" y1="2" x2="10" y2="26" stroke="#0E9E8E" stroke-width="2" stroke-linecap="round"/>
  <line x1="10" y1="8" x2="18" y2="16" stroke="#0E9E8E" stroke-width="2" stroke-linecap="round"/>
  <line x1="10" y1="14" x2="18" y2="22" stroke="#0E9E8E" stroke-width="2" stroke-linecap="round"/>
  <line x1="3" y1="5" x2="17" y2="5" stroke="#C9A84C" stroke-width="1.5" stroke-linecap="round" opacity="0.8"/>
</svg>
```

---

## PASSO 5: ELEMENTOS ESTRUTURAIS UNIVERSAIS

Presentes em todos os slides de todos os estilos.

### 5.1 Glifo de assinatura (todo slide, todo estilo)
Posição: `top: 20px; left: 24px`. Tamanho: 20×28px. Cor: `TEAL_ELECTRIC` + detalhe `GOLD_COLD`.

### 5.2 Barra de progresso (bottom, todo slide)
```javascript
function progressBar(index, total) {
  const pct = ((index + 1) / total) * 100;
  return `<div style="position:absolute;bottom:0;left:0;right:0;padding:14px 28px 18px;display:flex;align-items:center;gap:10px;">
    <div style="flex:1;height:2px;background:rgba(14,158,142,0.15);border-radius:1px;">
      <div style="height:100%;width:${pct}%;background:#0E9E8E;border-radius:1px;"></div>
    </div>
    <span style="font-size:10px;color:rgba(120,138,154,0.6);font-weight:500;letter-spacing:1px;">${index+1}/${total}</span>
  </div>`;
}
```

### 5.3 Seta de swipe (edge direita, todos exceto último)
```javascript
function swipeArrow() {
  return `<div style="position:absolute;right:0;top:0;bottom:0;width:44px;display:flex;align-items:center;justify-content:center;background:linear-gradient(to right,transparent,rgba(5,13,26,0.6));">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M9 6l6 6-6 6" stroke="rgba(14,158,142,0.5)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>`;
}
```

### 5.4 Lockup do handle (slides 1 e 7, todo estilo)
```html
<div style="display:flex;align-items:center;gap:10px;">
  <!-- Glifo Ansuz SVG aqui -->
  <span style="font-size:13px;font-weight:600;color:#C9A84C;letter-spacing:0.5px;">@arthsystems_</span>
</div>
```

### 5.5 Palavra-chave de DM (slide 7, todo estilo)
```html
<div style="margin-top:24px;text-align:center;">
  <span style="font-size:11px;color:#7A8A9A;letter-spacing:2px;text-transform:uppercase;display:block;margin-bottom:8px;">comente</span>
  <span style="font-size:28px;font-weight:800;color:#F0F4F8;letter-spacing:3px;text-transform:uppercase;">{PALAVRA_CHAVE}</span>
</div>
```

---

## PASSO 6: COMPONENTES REUTILIZÁVEIS

### Estilo ARCHITECT — Card de conteúdo (slides 2–6)
```css
.content-card {
  background: rgba(5,13,26,0.82);
  border-left: 2.5px solid #0E9E8E;
  border-radius: 0 6px 6px 0;
  padding: 20px 24px;
  backdrop-filter: blur(4px);
}
```

### Estilo ARCHITECT — Step numerado
```html
<div style="display:flex;align-items:flex-start;gap:20px;padding:14px 0;border-bottom:1px solid rgba(14,158,142,0.1);">
  <span style="font-size:48px;font-weight:300;color:#C9A84C;opacity:0.6;line-height:1;min-width:44px;">01</span>
  <div>
    <span style="font-size:14px;font-weight:600;color:#F0F4F8;display:block;margin-bottom:4px;">{TÍTULO DO STEP}</span>
    <span style="font-size:12px;color:#7A8A9A;line-height:1.5;">{descrição do step}</span>
  </div>
</div>
```

### Estilo ARCHITECT — Feature com ícone terminal
```html
<div style="display:flex;align-items:flex-start;gap:14px;padding:10px 0;border-bottom:1px solid rgba(14,158,142,0.08);">
  <span style="color:#0E9E8E;font-size:12px;font-family:monospace;min-width:16px;margin-top:2px;">›_</span>
  <div>
    <span style="font-size:13px;font-weight:600;color:#F0F4F8;">{label}</span>
    <span style="font-size:11px;color:#7A8A9A;display:block;">{descrição}</span>
  </div>
</div>
```

### Estilo ARCHITECT — Tag / label de categoria
```html
<span style="font-size:10px;font-weight:600;letter-spacing:2.5px;color:#2D4A2D;background:rgba(45,74,45,0.25);padding:4px 10px;border-radius:3px;text-transform:uppercase;">SISTEMAS</span>
```

### Estilo MANIFESTO — Linha divisória sutil
```html
<div style="width:40px;height:1px;background:rgba(14,158,142,0.4);margin:0 auto 24px;"></div>
```

### Estilo TERMINAL — Terminal Window
```html
<div class="terminal-window">
  <div class="terminal-header">
    <div class="terminal-dots">
      <span style="width:10px;height:10px;border-radius:50%;background:#FF5F57;display:inline-block;margin-right:4px;opacity:0.7;"></span>
      <span style="width:10px;height:10px;border-radius:50%;background:#FEBC2E;display:inline-block;margin-right:4px;opacity:0.7;"></span>
      <span style="width:10px;height:10px;border-radius:50%;background:#28C840;display:inline-block;opacity:0.7;"></span>
    </div>
    <span class="terminal-title">{SYSTEM_NAME} — {STATUS}</span>
  </div>
  <div class="terminal-body">
    {TERMINAL_LINES}
  </div>
</div>
```

```css
.terminal-window {
  background: rgba(5,13,26,0.95);
  border: 1px solid rgba(14,158,142,0.25);
  border-radius: 8px;
  overflow: hidden;
  margin: 16px 20px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.4);
}
.terminal-header {
  background: rgba(14,158,142,0.08);
  padding: 10px 14px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid rgba(14,158,142,0.15);
}
.terminal-title {
  font-size: 10px;
  font-weight: 500;
  color: #7A8A9A;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  flex: 1;
  text-align: center;
}
.terminal-body {
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 7px;
}
.t-line {
  display: flex;
  align-items: baseline;
  gap: 8px;
  font-family: 'JetBrains Mono', 'Courier New', monospace;
  font-size: 11px;
  line-height: 1.6;
  color: #7A8A9A;
}
.t-prompt  { color: #0E9E8E; font-size: 13px; min-width: 12px; }
.t-output  { color: rgba(14,158,142,0.5); }
.t-label   { color: #F0F4F8; font-weight: 600; min-width: 76px; }
.t-desc    { color: #7A8A9A; font-size: 10px; flex: 1; }
.t-value   { color: rgba(201,168,76,0.85); font-size: 10px; }
.t-time    { color: rgba(14,158,142,0.6); min-width: 44px; font-size: 10px; }
.t-status  { font-size: 9px; font-weight: 600; letter-spacing: 1px; padding: 2px 6px; border-radius: 3px; }
.t-status.running { background: rgba(14,158,142,0.15); color: #0E9E8E; }
.t-status.done    { background: rgba(45,74,45,0.25); color: #4CAF50; }
```

### Estilo TERMINAL — Linhas de terminal
```html
<!-- Processo ativo -->
<div class="t-line">
  <span class="t-prompt">›</span>
  <span class="t-label">{AGENT}</span>
  <span class="t-status running">● RUNNING</span>
  <span class="t-desc">{o que está fazendo}</span>
</div>

<!-- Output / resultado -->
<div class="t-line">
  <span class="t-prompt t-output">↳</span>
  <span class="t-value">{resultado ou output real}</span>
</div>

<!-- Timestamp / evento -->
<div class="t-line">
  <span class="t-time">{HH:MM}</span>
  <span class="t-desc">{evento que aconteceu sem Arthur}</span>
</div>

<!-- Processo concluído -->
<div class="t-line">
  <span class="t-prompt">›</span>
  <span class="t-label">{AGENT}</span>
  <span class="t-status done">✓ DONE</span>
  <span class="t-desc">{o que foi entregue}</span>
</div>
```

---

## PASSO 7: SELEÇÃO DE ESTILO

### Tabela de decisão

| Tipo de post (campo `estilo` no brief) | Estilo | Lógica |
|----------------------------------------|--------|--------|
| `manifesto`, `conceptual-twist`, `philosophical`, `repulsion`, `avatar-mirror`, `invitation` | **MANIFESTO** | Tipografia é o conteúdo. Sem cards. |
| `evidence`, `proof`, `terminal`, `system-running`, `behind-the-scenes` | **TERMINAL** | A interface é o conteúdo. O sistema como narrador. |
| `sistema`, `mechanism`, `how-to`, `fluxo`, `steps` | **ARCHITECT** | Cards estruturam a informação densa. |

**Regra de fallback:** se `estilo` não informado no brief → identificar pelo tipo de post acima → se ambíguo, usar **ARCHITECT**.

---

## PASSO 8: ARQUITETURA DE SLIDES — ESTILO ARCHITECT

> Para: sistema, mecanismo, como fazer, tutorial, fluxo ultra-específico.
> Estrutura: cards com borda teal, step numbers dourados, densidade de informação.

| # | Tipo | Fundo | Card? | Propósito |
|---|------|-------|-------|-----------|
| 1 | Hero | Foto com overlay `rgba(5,13,26,0.65)` | Não | Declaração bold + glifo watermark |
| 2 | Problema | `DEEP_SPACE` | Sim (borda teal) | A dor — o que está quebrado |
| 3 | Virada | Gradiente de marca | Não | A perspectiva diferente |
| 4 | Sistema | `MIDNIGHT` | Sim (borda teal) | O que foi construído — steps numerados |
| 5 | Prova/Detalhe | `DEEP_SPACE` | Sim (borda teal) | Como funciona — features `›_` |
| 6 | Como fazer | `MIDNIGHT` | Sim (borda teal) | Steps do processo |
| 7 | CTA | Foto com overlay `rgba(5,13,26,0.78)` | Não | Handle + glifo + palavra-chave |

**Regras:**
- Slide 1: declara, não descreve. Resultado ou paradoxo.
- Slides 2–6: card sempre com `border-left: 2.5px solid #0E9E8E`
- Slide 7: sem seta. Progress 100%. Keyword como único CTA.

---

## PASSO 9: ARQUITETURA DE SLIDES — ESTILO MANIFESTO

> Para: posts filosóficos, declarações, conceptual twists, repulsion, convite.
> Estrutura: sem cards. Tipografia pura sobre fundo dark. Uma ideia por slide.
> Referência: Carol Dutra (1 conceito) + Sarah Seller (densidade filosófica).

| # | Tipo | Fundo | Layout | Propósito |
|---|------|-------|--------|-----------|
| 1 | Abertura | `DEEP_SPACE` sólido | Central | Uma linha. Máximo 8 palavras. Sem contexto. |
| 2 | Tensão | `MIDNIGHT` | Central | A crença do leitor — que está errada |
| 3 | Virada | Gradiente de marca | Central | A torção. O que Arthur vê diferente. |
| 4 | Densidade | `DEEP_SPACE` | Left-anchored | 3–4 linhas curtas. Cada uma autônoma. |
| 5 | Prova | `MIDNIGHT` | Central | Um dado real. Sem adjetivos. |
| 6 | Silêncio | `DEEP_SPACE` | Central | A linha mais curta do carrossel. |
| 7 | CTA | `DEEP_SPACE` | Central | Glifo + handle + palavra-chave. Sem suporte. |

**CSS específico:**
```css
.manifesto-headline {
  font-size: clamp(32px, 7.5vw, 60px);
  font-weight: 800;
  line-height: 1.10;
  letter-spacing: -1px;
  color: #F0F4F8;
  text-align: center;
  max-width: 85%;
  margin: 0 auto;
}
.manifesto-headline .keyword {
  color: #0E9E8E;
  text-transform: uppercase;
  font-weight: 900;
}
.manifesto-support {
  font-size: 12px;
  font-weight: 400;
  color: #7A8A9A;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  text-align: center;
  margin-top: 18px;
}
.manifesto-dense {
  padding: 0 36px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.manifesto-dense p {
  font-size: 19px;
  font-weight: 300;
  color: #F0F4F8;
  line-height: 1.4;
  border-left: 2px solid #0E9E8E;
  padding-left: 14px;
}
```

**Regras narrativas:**
- Slide 1: nunca mais de 8 palavras. Sem pontuação final.
- Slides 2–3: máximo 2 linhas por slide. A linha 2 inverte a linha 1.
- Slide 4: 3–4 frases curtas. Cada frase pode ser citada sozinha.
- Slide 5: um dado real. "X clientes. R$Y. Z horas minha atenção." Sem adjetivos.
- Slide 6: a linha mais forte. Uma frase. Sem explicação.
- Slide 7: sem texto de suporte. Glifo + handle + palavra-chave apenas.

**Exemplo — Slide 1:**
```html
<div style="position:absolute;inset:0;display:flex;flex-direction:column;
            align-items:center;justify-content:center;z-index:10;padding:40px;">
  <p class="manifesto-headline">
    Negócio que depende de você<br>
    não é um negócio.<br>
    É um <span class="keyword">emprego com CNPJ.</span>
  </p>
</div>
```

---

## PASSO 10: ARQUITETURA DE SLIDES — ESTILO TERMINAL

> Para: prova, evidência, bastidor real, "sistema rodando enquanto eu dormia".
> Estrutura: janela de terminal como elemento central. O sistema É o narrador.
> Referência: Doug DeMarco (life as proof) — mas o proof é a própria interface.

| # | Tipo | Fundo | Layout | Propósito |
|---|------|-------|--------|-----------|
| 1 | Hero | Foto setup, overlay `rgba(5,13,26,0.72)` | 1 linha bold | "O sistema está rodando agora." |
| 2 | Log header | `DEEP_SPACE` | Terminal window | Nome do sistema + agentes com status |
| 3 | Process list | `MIDNIGHT` | Terminal window | Processos ativos — o que cada agente faz |
| 4 | Output | `DEEP_SPACE` | Terminal window | O que o sistema produziu (resultado real) |
| 5 | Timestamp | `MIDNIGHT` | Terminal window | Linha do tempo — eventos sem Arthur |
| 6 | Architect note | `DEEP_SPACE` | Mixed | 1–2 linhas humanas fora do terminal |
| 7 | CTA | `DEEP_SPACE` | Central | Glifo + handle + palavra-chave |

**Regras narrativas:**
- Slides 2–5: conteúdo sempre dentro da `.terminal-window`. Nunca explicar — mostrar como output.
- Slide 6: saída do terminal. Arthur fala em voz humana. Fonte Inter, não monospace. 1–2 linhas.
- Slide 7: idêntico ao ARCHITECT e MANIFESTO.
- Os nomes de agentes no terminal são sempre MAIÚSCULOS: ORION, FREYJA, HERMES, ATLAS, ARES.
- Timestamps devem ser plausíveis — horários reais de trabalho ou madrugada ("03:47", "14:23").

**Exemplo — Slide 3:**
```html
<div class="terminal-window">
  <div class="terminal-header">
    <div>
      <span style="width:10px;height:10px;border-radius:50%;background:#FF5F57;display:inline-block;margin-right:4px;opacity:0.7;"></span>
      <span style="width:10px;height:10px;border-radius:50%;background:#FEBC2E;display:inline-block;margin-right:4px;opacity:0.7;"></span>
      <span style="width:10px;height:10px;border-radius:50%;background:#28C840;display:inline-block;opacity:0.7;"></span>
    </div>
    <span class="terminal-title">RUNA SYSTEMS — SQUAD STATUS</span>
  </div>
  <div class="terminal-body">
    <div class="t-line">
      <span class="t-prompt">›</span>
      <span class="t-label">ORION</span>
      <span class="t-status running">● RUNNING</span>
      <span class="t-desc">orquestrando pipeline de conteúdo</span>
    </div>
    <div class="t-line">
      <span class="t-prompt">›</span>
      <span class="t-label">FREYJA</span>
      <span class="t-status running">● RUNNING</span>
      <span class="t-desc">arquitetando narrativa — Pin 02</span>
    </div>
    <div class="t-line">
      <span class="t-prompt">›</span>
      <span class="t-label">HERMES</span>
      <span class="t-status done">✓ DONE</span>
      <span class="t-desc">3 DMs enviados — keyword RUNA</span>
    </div>
    <div class="t-line" style="margin-top:8px;padding-top:8px;border-top:1px solid rgba(14,158,142,0.1)">
      <span class="t-prompt t-output">↳</span>
      <span class="t-value">arthur.status = "tomando café"</span>
    </div>
  </div>
</div>
```

---

## FRAME DO INSTAGRAM (Preview)

**Largura fixa: 420px** — não alterar. Viewport do carrossel: 420×525px (4:5).
O frame inclui header (handle + glifo), viewport swipeable, dots indicadores e actions bar.
Background do frame: `#030810` — mais escuro que os slides para criar contraste de moldura.

---

## EXPORTAÇÃO (PNG 1080×1350px)

### Regras críticas
1. **Python sempre** para geração de HTML — nunca shell scripts
2. **Imagens como base64** embutidas — HTML self-contained
3. **Viewport: 420×525px** — nunca 1080×1350
4. **`device_scale_factor = 1080 / 420 = 2.5714`** — escala sem reflow
5. **Aguardar 3000ms** após load para Google Fonts (Inter + JetBrains Mono se TERMINAL)

### Script de exportação
```python
import asyncio
from pathlib import Path
from playwright.async_api import async_playwright

INPUT_HTML = Path("/path/to/carousel.html")
OUTPUT_DIR = Path("/path/to/output/slides")
OUTPUT_DIR.mkdir(exist_ok=True)

TOTAL_SLIDES = 7
VIEW_W, VIEW_H = 420, 525
SCALE = 1080 / 420

async def export_slides():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(
            viewport={"width": VIEW_W, "height": VIEW_H},
            device_scale_factor=SCALE,
        )
        html_content = INPUT_HTML.read_text(encoding="utf-8")
        await page.set_content(html_content, wait_until="networkidle")
        await page.wait_for_timeout(3000)

        await page.evaluate("""() => {
            document.querySelectorAll('.ig-header,.ig-dots,.ig-actions,.ig-caption')
                .forEach(el => el.style.display='none');
            const frame = document.querySelector('.ig-frame');
            frame.style.cssText = 'width:420px;height:525px;max-width:none;border-radius:0;box-shadow:none;overflow:hidden;margin:0;';
            const viewport = document.querySelector('.carousel-viewport');
            viewport.style.cssText = 'width:420px;height:525px;aspect-ratio:unset;overflow:hidden;cursor:default;';
            document.body.style.cssText = 'padding:0;margin:0;display:block;overflow:hidden;';
        }""")
        await page.wait_for_timeout(500)

        for i in range(TOTAL_SLIDES):
            await page.evaluate("""(idx) => {
                const track = document.querySelector('.carousel-track');
                track.style.transition = 'none';
                track.style.transform = 'translateX(' + (-idx * 420) + 'px)';
            }""", i)
            await page.wait_for_timeout(400)
            await page.screenshot(
                path=str(OUTPUT_DIR / f"slide_{i+1}.png"),
                clip={"x": 0, "y": 0, "width": VIEW_W, "height": VIEW_H}
            )
            print(f"Slide {i+1}/{TOTAL_SLIDES} exportado")

        await browser.close()

asyncio.run(export_slides())
```

---

## PRINCÍPIOS DE DESIGN @arthsystems_

1. **O fundo É a mensagem** — foto do setup com overlay diz "este homem opera no escuro". Nenhuma palavra precisa dizer isso.
2. **Glifo como assinatura constante** — Ansuz modificada aparece em todo slide de todo estilo. Quem vê 3 carrosséis já reconhece.
3. **Teal é estrutura, ouro é prestígio** — teal para bordas, sistema e terminal; dourado para o que tem valor (números, handle, CTA, output).
4. **Typography como hierarquia** — a palavra em UPPERCASE 800 e a palavra em lowercase 300 na mesma linha criam tensão. O contraste de peso É o design.
5. **Sem card no hero e no CTA** — esses slides falam por si. Card só onde há densidade de informação.
6. **Palavra-chave no último slide, nunca antes** — o funil é construído no silêncio. O DM é a única porta.
7. **Verde militar é discreto de propósito** — não compete com o teal. Só aparece em contexto de categorização (ARCHITECT).
8. **Nunca produção de estúdio** — se a foto tiver ring light ou fundo estéril, não usar. O monitor É a fonte de luz.
9. **MANIFESTO: silêncio é design** — espaço vazio entre linhas não é falta de conteúdo. É respiração intencional.
10. **TERMINAL: mostrar, nunca explicar** — o output do sistema é mais convincente que qualquer descrição. A interface prova o que as palavras apenas afirmam.

---

## CHECKLIST ANTES DE GERAR

- [ ] Brief do agente FREYJA recebido?
- [ ] Palavra-chave do DM definida?
- [ ] Oferta implícita conhecida (para calibrar a copy)?
- [ ] Estilo visual identificado? (ARCHITECT / MANIFESTO / TERMINAL)
- [ ] Foto do setup disponível para slides 1 e 7?
- [ ] Copy dos slides gerada pelo agente especializado?
- [ ] Número de slides confirmado?
- [ ] Para TERMINAL: nomes dos agentes ativos definidos no brief?

Se algum item estiver faltando, perguntar antes de gerar.
