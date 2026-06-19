---
comando: "*gerar-imagem [cliente] [brief do cenário]"
versao: "3.0"
stack: Higgsfield CLI (Tier 0) + MCP (Tier 1) + infsh (Tier 2)
---

# Task: *gerar-imagem — Gerar Imagem para Cliente

## Trigger

`*gerar-imagem [cliente] [brief do cenário]`

Executar quando Lucas pede geração de imagem para um cliente da Pesto.

---

## Pré-verificação (ANTES de qualquer ação)

1. Verificar se `pesto/brand-kit/[cliente]/` existe.
   - Se não existe → informar Lucas: "Cliente [X] não tem brand kit. Posso criar agora ou prosseguir sem identidade visual definida?"
2. Verificar se há regras numeradas (#NN) salvas para esse cliente no brand kit.
   - Se existem → carregar e listar internamente. Não exibir para Lucas a menos que seja relevante.
3. Verificar se o cliente tem `soul.json` (para cenas com o personagem).
   - Se o brief menciona o cliente como personagem E soul.json não existe → informar: "Não há Soul Character para [cliente]. Devo criar um antes? (use *criar-soul) Ou geramos sem o personagem?"

---

## Seleção de Modelo (ANTES da Fase 1)

Apresentar menu para Lucas antes de qualquer geração:

```
"Qual modelo usar para gerar a imagem?

1) nano_banana_flash — padrão (rápido, sem personagem)
2) nano_banana_flash com soul — com personagem do cliente
3) gpt_image_2 — editorial premium (mais lento, mais detalhado)

Digite 1, 2 ou 3:"
```

- Se opção 2: verificar se `pesto/brand-kit/[cliente]/soul.json` existe.
  - Se não existe → "Não há Soul Character para [cliente]. Crie primeiro com *criar-soul, ou escolha a opção 1."
- Se opção 3: confirmar que Lucas quer qualidade premium (geração mais lenta).
- Salvar escolha internamente — usada na Fase 4 para definir o comando CLI.

---

## Fase 1 — Carregar Contexto do Cliente

### Passo 1 — Ler brand kit (se existir)

Verificar `pesto/brand-kit/[cliente]/`:
- `soul.json` — soul_id para geração com personagem
- Qualquer `.md` de regras ou identidade visual

### Passo 2 — Aplicar regras numeradas

Se existem regras #NN para o cliente:
```
Aplicar silenciosamente:
#01 — [regra] → ajustar prompt conforme indicado
#02 — [regra] → ajustar prompt conforme indicado
...
```

Não listar as regras para Lucas. Apenas aplicar.

---

## Fase 2 — Definir Tipo de Geração

### Cenário A — Imagem com personagem do cliente (tem soul.json)

Usar soul no CLI:

```bash
higgsfield generate create nano_banana_flash \
  --prompt "[descrição da cena — ambiente, iluminação, composição, estilo]" \
  --soul-id "[soul_id do cliente]" \
  --aspect_ratio [1:1 | 9:16 | 16:9] \
  --wait
```

### Cenário B — Imagem sem personagem (produto, ambiente, conceitual)

Usar nano_banana_flash sem soul:

```bash
higgsfield generate create nano_banana_flash \
  --prompt "[descrição detalhada — estética, paleta, composição, referências visuais]" \
  --aspect_ratio [1:1 | 9:16 | 16:9] \
  --wait
```

### Cenário C — Imagem com alta fidelidade estética (editorial, campanha)

Usar gpt_image_2:

```bash
higgsfield generate create gpt_image_2 \
  --prompt "[prompt cinemático detalhado]" \
  --quality high \
  --resolution 2k \
  --aspect_ratio [aspect_ratio] \
  --wait
```

**Regra de seleção:**
- Personagem do cliente em cena → Cenário A (soul)
- Produto / ambiente / conceitual / marca → Cenário B (nano_banana_flash)
- Campanha, editorial, alta entrega → Cenário C (gpt_image_2)

---

## Fase 3 — Construir Prompt de Geração

### Estrutura do prompt

```
[Tipo de shot: portrait / medium shot / wide shot / product shot]
[Sujeito: o que está no centro da imagem]
[Ambiente: onde acontece]
[Iluminação: studio / natural / dramatic / soft]
[Estética: [identidade visual do cliente se existir] / clean / dark / vibrant]
[Composição: rule of thirds / centered / diagonal / minimal]
[Técnico: --aspect_ratio X:X --wait]
```

### Exemplos de prompts bem construídos

Para cliente com identidade minimalista:
```
product shot, [produto do cliente], white studio background, 
soft natural light, minimal composition, clean aesthetic, 
high definition, professional photography
```

Para personagem do cliente (soul ativo):
```
portrait of person, [ambiente específico], [ação ou postura], 
[iluminação], sharp focus, editorial quality
```

---

## Fase 4 — Executar Geração

### Tier 0 — CLI (padrão)

```bash
higgsfield generate create [modelo] \
  --prompt "[prompt construído]" \
  [--soul-id "[soul_id]"] \
  --aspect_ratio [ratio] \
  --wait
```

O `--wait` bloqueia até a imagem estar pronta e retorna a URL diretamente.

### Tier 1 — MCP (se CLI indisponível)

```
mcp__claude_ai_MCP_Higgsfield__generate_image(
  model: "[modelo]",
  prompt: "[prompt]",
  aspect_ratio: "[ratio]"
)
→ { job_id: "..." }

mcp__claude_ai_MCP_Higgsfield__job_status(job_id)
→ poll a cada 20s até status = "completed"

mcp__claude_ai_MCP_Higgsfield__job_display(job_id)
→ { image_url: "..." }
```

### Tier 2 — inference.sh (último fallback)

```bash
infsh app run google/gemini-3-flash-image --input '{"prompt": "[prompt]"}'
```

---

## Fase 5 — Review Gate

Antes de entregar para Lucas, verificar:

- [ ] A imagem respeita as regras #NN do cliente (se existiam)?
- [ ] O personagem é reconhecível como o cliente (se soul foi usado)?
- [ ] A estética está alinhada com a identidade visual do brand kit?
- [ ] O formato/aspecto está correto para o canal de destino?

Se algum item falhar → gerar nova variação antes de apresentar.

---

## Fase 6 — Apresentar Resultado

```
"✅ Imagem gerada para [cliente].

URL: [image_url]

Regras aplicadas: [#NN lista se existiam]
Modelo usado: [modelo]
Prompt: [prompt resumido]

Quer uma variação? Posso:
1. Mudar o ambiente ([sugestão contextual])
2. Ajustar a iluminação ([sugestão)
3. Testar outro estilo ([sugestão])"
```

Se Lucas aprovar → perguntar se deve adaptar formato:
```
"Precisa em outro formato? Posso adaptar para [1:1 Instagram / 9:16 Stories / 16:9 YouTube]."
```

---

## STEP FINAL: Upload to Canva

After presenting the image result to Lucas:

1. Call `mcp__claude_ai_Canva__upload-asset-from-url` with `asset_url = [image_url]`
2. On success → present to Lucas:
   ```
   "Imagem disponível no Canva: [canva_asset_url]. Deseja ajustar antes de continuar?"
   ```
3. If MCP unavailable or call fails → skip silently, present only:
   ```
   "Imagem gerada: [direct_url]"
   ```

---

## Erros Comuns

| Erro | Causa provável | Ação |
|------|---------------|------|
| `--soul-id` não reconhecido no modelo | Modelo não suporta soul | Usar nano_banana_flash específico |
| CLI trava sem retornar URL | `--wait` timeout | Trocar para Tier 1 MCP manual |
| Imagem não respeita prompt | Prompt muito vago | Detalhar ambiente, iluminação, composição |
| Personagem não identificável | Soul mal treinado | Sugerir re-treino via *criar-soul |
