---
comando: "*criar-variacao [cliente] [ativo-original] [tipo]"
versao: "3.0"
---

# Task: *criar-variacao — Criar Variação de Ativo Existente

## Trigger

`*criar-variacao [cliente] [ativo-original] [tipo]`

Executar quando Lucas precisa criar variações de um ativo já aprovado.

Tipos suportados:
- `estilo` — mesma mensagem, estética visual diferente
- `texto` — mesmo visual, copy ou headline alterado
- `cor` — mesma composição, paleta alternativa
- `ab` — duas versões para teste A/B
- `serie` — múltiplos posts com coesão visual

---

## Pré-verificação (ANTES de qualquer ação)

### Passo 1 — Verificar brand kit do cliente

```
Localizar: pesto/brand-kit/[cliente]/
→ Se não existe → avisar Lucas e oferecer *clonar-identidade antes de continuar
→ Se existe → carregar identity.md e rules.md
```

### Passo 2 — Carregar regras numeradas (#NN)

Ler `pesto/brand-kit/[cliente]/rules.md` e manter ativas durante toda a task.
Aplicar silenciosamente — não exibir a lista para Lucas.

### Passo 3 — Confirmar ativo de origem e tipo de variação

```
"Para criar a variação de [cliente], confirme:
1. Qual é o ativo de origem? (descreva o visual ou forneça o caminho/URL)
2. Tipo de variação:
   → estilo (mesma mensagem, visual diferente)
   → texto (mesmo visual, copy alterado)
   → cor (mesma composição, paleta alternativa)
   → ab (duas versões para teste)
   → serie (múltiplos posts coesos)
3. Quantas variações? (default: 2)
4. Tem alguma direção específica? (ex: 'uma mais escura, uma mais minimalista')"
```

Se Lucas já forneceu essas informações → ir direto para Fase 1.

---

## Fase 1 — Analisar o Ativo de Origem

### Passo 1 — Mapear elementos do ativo original

```
Identificar:
□ Headline / copy principal
□ Identidade visual aplicada (cores, tipografia, estilo)
□ Composição / layout (posição dos elementos)
□ Tipo de ativo (imagem, carrossel, vídeo, stories)
□ Formato e dimensões
□ Regras #NN que foram aplicadas
```

### Passo 2 — Definir o delta de cada variação

O que muda e o que permanece fixo em cada tipo:

| Tipo | O que muda | O que permanece |
|------|-----------|----------------|
| `estilo` | Estética visual, tons, texturas | Headline, copy, dimensões, regras #NN |
| `texto` | Headline, copy, CTA | Composição visual, cores, fontes, regras #NN |
| `cor` | Paleta de cores | Layout, copy, estrutura, regras #NN |
| `ab` | Uma variável específica | Tudo mais fixo (controle vs. variante) |
| `serie` | Conteúdo de cada post | Estilo visual unificado, regras #NN |

---

## Fase 2 — Construir as Variações

### Estratégia de construção por tipo

#### Tipo `estilo` — Variar estética

```
Variação [N]:
- Estética: [descrição da nova direção visual — ex: mais minimalista, mais editorial, mais escuro]
- Manter: headline "[texto original]", copy "[texto original]"
- Aplicar regras: [lista das #NN ativas]
- Geração: nova imagem via Higgsfield CLI (reconstrução visual completa)
```

#### Tipo `texto` — Variar copy

```
Versão A (original):
- Headline: "[headline original]"
- Copy: "[copy original]"

Versão B:
- Headline: "[novo headline — variação da mensagem principal]"
- Copy: "[nova copy — mesmo argumento, angulação diferente]"
- Manter: visual idêntico ao ativo de origem
- Geração: ajuste de copy apenas (sem recomposição visual)
```

#### Tipo `cor` — Variar paleta

```
Versão A (paleta primária da marca):
- Fundo: [cor primária HEX]
- Texto: [cor de contraste HEX]

Versão B (paleta alternativa):
- Fundo: [cor secundária ou alternativa HEX]
- Texto: [cor de contraste ajustada HEX]
- Preservar: tipografia, layout, copy, regras #NN
```

#### Tipo `ab` — Teste controlado

```
Variável sendo testada: [definir claramente o que muda — ex: CTA, imagem de fundo, headline]

Controle (A): [ativo original]
Variante (B): [ativo com a única mudança definida]

Tudo mais permanece idêntico — um teste A/B tem exatamente UMA variável.
```

#### Tipo `serie` — Série coesa

```
Identidade da série:
- Elemento unificador: [cor dominante / ícone / pattern / fonte]
- Número de posts: [N]
- Sequência de conteúdo: [tema de cada post]

Post 1: [headline + visual]
Post 2: [headline + visual]
...
Post N: [headline + visual + CTA de série]

Cada post deve funcionar standalone E fazer sentido na série.
```

---

## Fase 3 — Geração (quando envolve novo ativo visual)

### Para variações de imagem — Gerar via Higgsfield CLI

For each variation, build a prompt that captures the delta from the original and execute:

```bash
higgsfield generate create nano_banana_flash \
  --prompt "[scene description adapted for this variation — english, include what changes and what stays]" \
  --aspect_ratio [ratio] \
  --wait
```

If soul ID exists for the client (`pesto/brand-kit/[cliente]/soul.json`):
```bash
higgsfield generate create nano_banana_flash \
  --soul-id [uuid] \
  --prompt "[scene description for this variation]" \
  --aspect_ratio [ratio] \
  --wait
```

STEP FINAL (per variation): Upload to Canva

1. Call `mcp__claude_ai_Canva__upload-asset-from-url` with `asset_url = [variation_image_url]`
2. On success → "Variação [N] disponível no Canva: [canva_asset_url]."
3. If MCP unavailable or call fails → skip silently, return: "Variação [N] gerada: [direct_url]"

### Para variações de vídeo — Regerar via Higgsfield

**Tier 0 — CLI Higgsfield:**

```bash
higgsfield generate create seedance_2_0 \
  --prompt "[prompt original com ajuste para esta variação]" \
  --aspect_ratio [ratio] \
  --duration [duração] \
  --wait
```

**Tier 1 — MCP Higgsfield (se CLI indisponível):**

Usar ToolSearch para carregar `mcp__claude_ai_MCP_Higgsfield__generate_video`:

```
generate_video(
  model: "seedance_2_0",
  prompt: "[prompt da variação]",
  aspect_ratio: "[ratio]",
  duration: [duração]
)
→ poll job_status a cada 30s até "completed"
→ job_display(job_id) → { video_url: "..." }
```

---

## Fase 4 — Review Gate

Antes de apresentar as variações para Lucas:

- [ ] Cada variação tem exatamente um delta claro em relação ao original?
- [ ] As regras #NN do cliente estão aplicadas em TODAS as variações?
- [ ] A identidade visual da marca está preservada em todas as versões?
- [ ] O objetivo da variação está sendo atendido (teste A/B tem variável única, série tem coesão, etc.)?
- [ ] Os prompts de geração capuram com clareza o delta de cada variação?
- [ ] Número de variações entregues bate com o que Lucas solicitou?

Se algum item falhar → ajustar antes de apresentar.

---

## Fase 5 — Apresentação e Entrega

```
"✅ [N] variação(ões) de [tipo] para [cliente] prontas.

---

VARIAÇÃO 1:
[descrever delta + URL da imagem ou vídeo gerado]

VARIAÇÃO 2:
[descrever delta + URL da imagem ou vídeo gerado]

---

Próximos passos:
→ Para teste A/B: publique com intervalo de 48-72h para resultado confiável
→ Para série: publique na sequência definida com 1-2 dias entre posts

Quer ajustar alguma variação ou gerar mais uma versão?"
```

---

## Erros Comuns

| Erro | Causa provável | Ação |
|------|---------------|------|
| Variações sem diferença perceptível | Delta não foi definido com clareza | Especificar exatamente o que muda antes de construir |
| Teste A/B com múltiplas variáveis | Confusão entre "variação" e "teste" | A/B tem UMA variável — todo o resto idêntico |
| Série sem coesão visual | Cada post foi briefado independente | Definir elemento unificador antes de criar os posts |
| Regras #NN ignoradas em uma das versões | Copy/paste parcial de briefs | Sempre checar todas as versões antes do review gate |
