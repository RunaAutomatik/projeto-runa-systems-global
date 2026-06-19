---
comando: "*adaptar-formato [cliente] [ativo] [formato-destino]"
versao: "3.0"
---

# Task: *adaptar-formato — Adaptar Ativo para Novo Formato

## Trigger

`*adaptar-formato [cliente] [ativo] [formato-destino]`

Executar quando Lucas precisa adaptar um ativo já existente para um canal ou proporção diferente.

Exemplos:
- `*adaptar-formato joana post-hero.png stories`
- `*adaptar-formato carol reel-teaser.mp4 feed-quadrado`
- `*adaptar-formato pedro slide-1.png linkedin`

---

## Pré-verificação (ANTES de qualquer ação)

### Passo 1 — Verificar brand kit do cliente

```
Localizar: pesto/brand-kit/[cliente]/
→ Se não existe → avisar Lucas e oferecer *clonar-identidade antes de continuar
→ Se existe → confirmar regras #NN carregadas
```

### Passo 2 — Carregar regras numeradas (#NN)

Ler as regras do cliente e aplicar silenciosamente durante toda a task.
Não exibir as regras para Lucas — apenas garantir que estão ativas.

### Passo 3 — Confirmar o ativo de origem

```
"Para adaptar o ativo de [cliente], confirme:
1. Qual é o arquivo de origem? (nome ou caminho)
2. Qual o formato de destino?
   → Stories Instagram (9:16 · 1080×1920)
   → Feed quadrado Instagram (1:1 · 1080×1080)
   → Feed vertical Instagram (4:5 · 1080×1350)
   → LinkedIn (1:1 ou 16:9)
   → WhatsApp (livre · máximo 5MB)
3. O ativo de origem está disponível para referência? (URL, caminho, ou descreve o visual)"
```

Se Lucas já forneceu essas informações → pular e ir para Fase 1.

---

## Fase 1 — Analisar o Ativo de Origem

### Passo 1 — Identificar tipo do ativo

| Tipo de ativo | Abordagem de adaptação |
|---------------|----------------------|
| Imagem estática | Adaptar composição e proporção |
| Carrossel (múltiplos slides) | Adaptar cada slide individualmente |
| Vídeo | Adaptar proporção e eventual recorte |
| Brief/texto | Adaptar apenas as especificações técnicas |

### Passo 2 — Mapear o que muda

```
De: [proporção origem] → Para: [proporção destino]

Elementos que mudam:
□ Dimensões do canvas
□ Posicionamento dos elementos visuais
□ Hierarquia tipográfica (tamanho de fonte)
□ Áreas de segurança (safe zones)
□ Duração (se vídeo)
□ Peso do arquivo (limite por canal)
```

### Passo 3 — Definir estratégia de adaptação

| Cenário | Estratégia |
|---------|-----------|
| Recorte simples (cortar bordas) | Gerar nova imagem via Higgsfield CLI com composição ajustada |
| Recomposição (elementos se movem) | Novo brief completo com instruções de layout |
| Conteúdo exclusivo por canal | Criar ativo novo baseado no brief original |
| Vídeo → proporção diferente | Regerar com `--aspect_ratio` correto |

---

## Fase 2 — Executar Adaptação

### Cenário A — Adaptação visual (imagem/carrossel) → Gerar nova imagem via Higgsfield

Construir brief de adaptação:

```markdown
# Brief de Adaptação — [Cliente] — [Formato Destino]

**Data:** [data atual]
**Cliente:** [nome]
**Ativo de origem:** [nome/descrição]
**Formato de destino:** [canal + dimensões]

---

## O que muda nesta adaptação

**Dimensões:** [W]×[H]px
**Proporção:** [ratio]
**Área de segurança:** [margem mínima de segurança]

---

## Instruções de adaptação

**Composição:** [como reposicionar os elementos]
**Tipografia:** [ajustar tamanhos se necessário]
**Elementos visuais:** [o que manter, o que cortar, o que adicionar]

---

## Identidade visual

[Manter identidade do ativo de origem — mesmas cores, fontes, estilo]
Regras ativas: [listar #NN aplicáveis]

---

## Referência do ativo de origem

[Descrição detalhada do visual de origem — referência para regenerar]
```

### Cenário B — Vídeo em nova proporção → Regerar via Higgsfield

**Tier 0 — CLI Higgsfield:**

```bash
higgsfield generate create seedance_2_0 \
  --prompt "[prompt original com ajuste de enquadramento para novo formato]" \
  --aspect_ratio [9:16 | 1:1 | 16:9] \
  --duration [duração em segundos] \
  --wait
```

**Tier 1 — MCP Higgsfield (se CLI indisponível):**

Usar ToolSearch para carregar `mcp__claude_ai_MCP_Higgsfield__generate_video`:

```
generate_video(
  model: "seedance_2_0",
  prompt: "[prompt original adaptado]",
  aspect_ratio: "[ratio]",
  duration: [duração]
)
→ { job_id: "..." }
→ poll job_status a cada 30s até "completed"
→ job_display(job_id) → { video_url: "..." }
```

**Tier 2 — inference.sh (fallback final):**

```bash
infsh app run higgsfield/seedance-2 --input '{
  "prompt": "[prompt]",
  "duration": [duração],
  "aspect_ratio": "[ratio]"
}'
```

---

## Tabela de Especificações por Canal

| Canal | Proporção | Dimensões | Limite de peso |
|-------|-----------|-----------|----------------|
| Stories Instagram | 9:16 | 1080×1920px | 30MB |
| Feed quadrado | 1:1 | 1080×1080px | 30MB |
| Feed vertical | 4:5 | 1080×1350px | 30MB |
| LinkedIn (feed) | 1:1 ou 4:5 | 1080×1080 ou 1080×1350px | 10MB |
| LinkedIn (capa) | 16:9 | 1584×396px | 8MB |
| WhatsApp | Livre | máx 5MB por arquivo | 5MB |

---

## Fase 3 — Review Gate

Antes de entregar a adaptação:

- [ ] As dimensões e proporção estão corretas para o canal de destino?
- [ ] As regras #NN do cliente foram respeitadas no ativo adaptado?
- [ ] A identidade visual está consistente com o ativo de origem?
- [ ] As safe zones estão respeitadas (elementos importantes longe das bordas)?
- [ ] O peso do arquivo está dentro do limite do canal?
- [ ] A adaptação resolve o objetivo original sem distorcer a mensagem?

Se algum item falhar → ajustar antes de apresentar.

---

## Fase 4 — Executar e Entregar

### Cenário A — Adaptação de imagem:

STEP 1: Save adaptation brief
- File: `pesto/briefs/[cliente]/brief-adaptacao-[YYYY-MM-DD].md`
- Content: the adaptation brief from Fase 2 Cenário A

STEP 2: Generate adapted image via Higgsfield CLI

```bash
higgsfield generate create nano_banana_flash \
  --prompt "[visual description adapted for new format and dimensions]" \
  --aspect_ratio [9:16 | 1:1 | 4:5 | 16:9] \
  --wait
```

STEP 3: Confirm to Lucas

```
"✅ Ativo adaptado para [cliente].

URL: [image_url]
Formato: [ratio] | Dimensões: [W]×[H]px

Quer ajustar a composição ou gerar outra variação?"
```

STEP FINAL: Upload to Canva

1. Call `mcp__claude_ai_Canva__upload-asset-from-url` with `asset_url = [image_url]`
2. On success → "Imagem disponível no Canva: [canva_asset_url]. Deseja ajustar antes de continuar?"
3. If MCP unavailable → skip silently, present only: "Imagem gerada: [direct_url]"

---

### Cenário B — Entrega direta (vídeo):

```
"✅ Vídeo adaptado para [cliente].

URL: [video_url]
Formato: [ratio] | Duração: [X]s

Quer uma variação em formato diferente?"
```

---

## Erros Comuns

| Erro | Causa provável | Ação |
|------|---------------|------|
| Ativo com crop errado | Composição pensada para outra proporção | Especificar reposicionamento no brief |
| Texto cortado nas bordas | Safe zone ignorada | Definir margem de segurança mínima 10% |
| Identidade inconsistente entre formatos | Adaptação sem regras #NN | Sempre carregar as regras antes de adaptar |
| Vídeo regera com enquadramento errado | Prompt não ajustado para o novo formato | Adicionar instrução de enquadramento ao prompt |
