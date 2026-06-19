---
comando: "*gerar-video [cliente] [brief do vídeo]"
versao: "3.0"
stack: Higgsfield CLI (Tier 0) + MCP (Tier 1) + infsh (Tier 2)
---

# Task: *gerar-video — Gerar Vídeo Curto para Cliente

## Trigger

`*gerar-video [cliente] [brief do vídeo]`

Executar quando Lucas pede geração de vídeo curto para um cliente da Pesto.

---

## Pré-verificação (ANTES de qualquer ação)

1. Verificar se `pesto/brand-kit/[cliente]/` existe.
   - Se não existe → informar e perguntar se prossegue sem identidade visual definida.
2. Carregar regras numeradas (#NN) do cliente se existirem.
3. Confirmar destino do vídeo (qual formato/canal):
   - Stories/Reels → 9:16
   - Feed → 1:1
   - YouTube/apresentação → 16:9

---

## Seleção de Modelo (ANTES da Fase 1)

Apresentar menu para Lucas antes de qualquer geração:

```
"Qual modelo usar para o vídeo?

1) seedance_2_0 — cinematográfico padrão
2) cinematic_studio_2_5 — qualidade máxima (mais lento)
3) kling3_0 — alternativa expressiva

Digite 1, 2 ou 3:"
```

- Salvar escolha internamente — usada na Fase 3 para definir o comando CLI.
- Se opção 2: confirmar que Lucas aceita geração mais lenta.

---

## Fase 1 — Definir Parâmetros do Vídeo

### Passo 1 — Solicitar informações essenciais (se não fornecidas no brief)

```
"Para gerar o vídeo de [cliente], preciso confirmar:
1. Destino: Stories/Reels (9:16), Feed (1:1), YouTube (16:9)?
2. Duração desejada: 6s / 8s / 10s?
3. Tem imagem de referência para partir? (image-to-video) Ou criar do zero (text-to-video)?
4. Há alguma estética específica? (ex: movimento lento, câmera dinâmica, estático com zoom)"
```

Se Lucas já forneceu essas informações no brief → pular esta etapa.

### Passo 2 — Carregar regras do cliente

Se existem regras #NN para o cliente:
```
Aplicar silenciosamente antes de construir o prompt de vídeo:
#01 — [regra] → ajustar prompt/parâmetros
...
```

---

## Fase 2 — Construir Prompt de Vídeo

### Estrutura do prompt para vídeo

```
[Tipo de movimento: slow pan / dolly in / static / tracking / aerial]
[Sujeito principal: o que está no centro]
[Ambiente: onde acontece]
[Iluminação e hora: golden hour / studio / night / dramatic]
[Estética visual: cinematic / editorial / documentary / product]
[Qualidade técnica: 4K, shallow depth of field, sharp focus]
```

### Exemplos por tipo

**Produto (sem personagem):**
```
product showcase, [produto do cliente], rotating on clean surface,
studio lighting with subtle shadows, 4K, minimal aesthetic,
slow 360 rotation, sharp focus
```

**Ambiental/institucional:**
```
[ambiente do negócio do cliente], establishing shot, 
[hora do dia], cinematic look, smooth camera movement,
professional quality, high definition
```

**Com personagem (se soul disponível):**
```
portrait of person, [ambiente], [ação], 
cinematic lighting, slow motion, editorial quality
```

---

## Fase 3 — Executar Geração

### Tier 0 — CLI Higgsfield (padrão)

**Text-to-video:**
```bash
higgsfield generate create seedance_2_0 \
  --prompt "[prompt construído]" \
  --aspect_ratio [9:16 | 1:1 | 16:9] \
  --duration [6 | 8 | 10] \
  --wait
```

**Image-to-video (se Lucas forneceu imagem de referência):**
```bash
higgsfield generate create seedance_2_0 \
  --prompt "[prompt de movimento/ação]" \
  --image "[caminho ou URL da imagem]" \
  --aspect_ratio [ratio] \
  --duration [duração] \
  --wait
```

O `--wait` bloqueia até o vídeo estar pronto e retorna URL diretamente.

### Tier 1 — MCP Higgsfield (se CLI indisponível)

```
mcp__claude_ai_MCP_Higgsfield__generate_video(
  model: "seedance_2_0",
  prompt: "[prompt]",
  aspect_ratio: "[ratio]",
  duration: [duração]
)
→ { job_id: "..." }

mcp__claude_ai_MCP_Higgsfield__job_status(job_id)
→ poll a cada 30s até status = "completed"

mcp__claude_ai_MCP_Higgsfield__job_display(job_id)
→ { video_url: "..." }
```

### Tier 2 — inference.sh (último fallback)

```bash
infsh app run higgsfield/seedance-2 --input '{
  "prompt": "[prompt]",
  "duration": [duração],
  "aspect_ratio": "[ratio]"
}'
```

---

## Fase 4 — Review Gate

Antes de entregar para Lucas:

- [ ] O vídeo respeita as regras #NN do cliente (se existiam)?
- [ ] O formato está correto para o canal de destino?
- [ ] A estética está alinhada com a identidade visual do cliente?
- [ ] A duração é adequada para o uso previsto?

---

## Fase 5 — Apresentar Resultado

```
"✅ Vídeo gerado para [cliente].

URL: [video_url]
Duração: [X]s | Formato: [ratio] | Modelo: seedance_2_0

Quer uma variação? Posso:
1. Testar outro movimento de câmera
2. Ajustar a iluminação/hora do dia
3. Gerar versão em formato diferente ([ratio alternativo])"
```

Se aprovado → perguntar se precisa de adaptação de formato ou variação.

---

## Erros Comuns

| Erro | Causa provável | Ação |
|------|---------------|------|
| Vídeo não inicia (CLI trava) | Timeout da conexão | Trocar para Tier 1 MCP manual |
| Movimento não corresponde ao prompt | Prompt muito genérico | Detalhar tipo de câmera e velocidade |
| Qualidade baixa em movimentos rápidos | Duração muito curta para o movimento | Aumentar duração ou simplificar o movimento |
| Formato incorreto gerado | Parâmetro de ratio não aceito | Verificar modelos suportados via `higgsfield models` |

---

## Modelos Disponíveis (referência)

| Modelo | Uso | Características |
|--------|-----|----------------|
| `seedance_2_0` | Padrão para todos os casos | Melhor equilíbrio qualidade/velocidade |
| `cinematic_studio_2_5` | Quando Lucas pede qualidade máxima | Mais lento, resultado cinemático |
| `kling3_0` | Alternativa se seedance falhar | Diferente aesthetic |

Para ver lista completa: `higgsfield models` no terminal.
