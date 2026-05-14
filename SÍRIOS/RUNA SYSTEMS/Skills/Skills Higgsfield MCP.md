---
date: 2026-05-02
tags: [skills, higgsfield, mcp, maya, video, image, cinematic, reels]
project: runa-systems-global
type: skill-doc
---

# Skills Higgsfield MCP — Geração Cinematográfica Direta

> **Higgsfield** é uma plataforma de geração de vídeo e imagem com estética cinematográfica, especializada nos modelos Seedance.
> O MCP é a rota direta à API Higgsfield via conector nativo claude.ai — sem intermediários, menor latência, acesso a features que a camada infsh não expõe (biblioteca de mídia, marketing studio, job tracking).
> Status: **✅ Conectado** — `claude.ai MCP Higgsfield` ativo em `~/.claude.json`
> Rule file: `.claude/rules/higgsfield-mcp-usage.md`

---

## Por que existe

O Higgsfield MCP resolve um problema específico: toda geração de vídeo cintemático para o @arthsystems_ passava pelo `infsh app run higgsfield/seedance-2` — uma chamada de API indireta que adicionava latência e não expunha o job tracking nativo, a biblioteca de mídia, nem o marketing studio da plataforma.

Com o MCP conectado, MAYA chama a API Higgsfield diretamente. O resultado é:
- **Menos overhead** — sem camada de abstração infsh para vídeo
- **Job tracking real** — `job_status` + `job_display` permitem polling preciso (não estimativa de tempo)
- **Biblioteca de mídia** — `show_medias` + `media_upload` habilitam image-to-video com assets do próprio vault
- **Marketing studio** — templates de campanha nativos da plataforma acessíveis via `show_marketing_studio`

**Cadeia de prioridade para vídeo (sempre nesta ordem):**
```
Tier 0 → Higgsfield MCP (generate_video)       ← primário
Tier 1 → infsh higgsfield/seedance-2           ← fallback se MCP indisponível
Tier 2 → KIE.AI kie-client.py --model seedance-2
Tier 3 → infsh bytedance/seedance-1            ← último recurso
```

---

## As 14 Tools por Categoria

### Geração de Conteúdo

| Tool | Comando MCP | O que faz |
|------|------------|-----------|
| **generate_video** | `mcp__claude_ai_MCP_Higgsfield__generate_video` | Gera vídeo a partir de prompt de texto — rota primária para todos os Reels |
| **generate_image** | `mcp__claude_ai_MCP_Higgsfield__generate_image` | Gera imagem com estética cinematográfica nativa Higgsfield |

### Job Tracking (obrigatório após geração)

| Tool | Comando MCP | O que faz |
|------|------------|-----------|
| **job_status** | `mcp__claude_ai_MCP_Higgsfield__job_status` | Retorna status do job assíncrono (`in_progress` / `completed` / `failed`) |
| **job_display** | `mcp__claude_ai_MCP_Higgsfield__job_display` | Recupera URL do asset gerado — só chamar após `job_status = completed` |

### Biblioteca de Mídia

| Tool | Comando MCP | O que faz |
|------|------------|-----------|
| **show_medias** | `mcp__claude_ai_MCP_Higgsfield__show_medias` | Lista assets enviados à biblioteca Higgsfield |
| **media_upload** | `mcp__claude_ai_MCP_Higgsfield__media_upload` | Envia imagem de referência para uso em image-to-video |
| **media_confirm** | `mcp__claude_ai_MCP_Higgsfield__media_confirm` | Confirma e finaliza o upload antes de usar como referência |
| **show_generations** | `mcp__claude_ai_MCP_Higgsfield__show_generations` | Histórico de gerações anteriores — útil para recuperar job IDs |

### Studio e Workspace

| Tool | Comando MCP | O que faz |
|------|------------|-----------|
| **show_marketing_studio** | `mcp__claude_ai_MCP_Higgsfield__show_marketing_studio` | Templates de campanha nativos da plataforma |
| **models_explore** | `mcp__claude_ai_MCP_Higgsfield__models_explore` | Lista modelos disponíveis no Higgsfield — verificar antes de erros de geração |
| **list_workspaces** | `mcp__claude_ai_MCP_Higgsfield__list_workspaces` | Lista workspaces disponíveis na conta |
| **select_workspace** | `mcp__claude_ai_MCP_Higgsfield__select_workspace` | Troca de workspace ativo |

### Conta e Billing

| Tool | Comando MCP | O que faz |
|------|------------|-----------|
| **balance** | `mcp__claude_ai_MCP_Higgsfield__balance` | Verifica saldo de créditos |
| **transactions** | `mcp__claude_ai_MCP_Higgsfield__transactions` | Histórico de uso e débitos |

---

## Tools Prioritárias para o AIOX

### `generate_video` + `job_status` + `job_display` — O Trio Obrigatório

**Quando usar:** Toda geração de vídeo cinematic — Reels 9:16, clips para stories, vídeos de produto.

**⚠️ Async pattern obrigatório — nunca pular:**
```
1. generate_video(prompt, aspect_ratio="9:16", duration=6)
   → retorna imediatamente: { job_id: "abc123" }

2. job_status(job_id)
   → { status: "in_progress" }
   ... aguardar 15–30s, repetir ...

3. job_status(job_id)
   → { status: "completed" }

4. job_display(job_id)
   → { video_url: "https://..." }
```

**Como carregar as tools (deferred — sempre via ToolSearch):**
```
ToolSearch: "select:mcp__claude_ai_MCP_Higgsfield__generate_video,mcp__claude_ai_MCP_Higgsfield__job_status,mcp__claude_ai_MCP_Higgsfield__job_display"
```

**Parâmetros principais do `generate_video`:**

| Param | Valores | Padrão |
|-------|---------|--------|
| `prompt` | string — descrição cinematográfica | — |
| `aspect_ratio` | `"9:16"` / `"16:9"` / `"1:1"` | `"9:16"` para Reels |
| `duration` | 4–8 segundos | 6s |
| `model` | verificar via `models_explore` | Seedance 2 |

**Padrão de prompt @arthsystems_:**
```
"[subject], dark cinematic, architectural lighting, 9:16 vertical"
```
Sempre: escuro, arquitetural, preciso. Nunca warm/soft.

**Caso de uso prático — Reel CREATOR$:**
```
FREYJA emite *brief-maya com narrative + prompt
→ MAYA carrega ToolSearch: generate_video + job_status + job_display
→ generate_video("arquiteto digital construindo sistema, dark cinematic, 9:16")
→ poll job_status a cada 20s
→ job_display → video_url
→ FREYJA *av-review (checa aderência narrativa)
→ [APROVADO] HERMES publica via Meta Graph API
```

**Agente que mais se beneficia: MAYA**
MAYA é a dona primária de todas as chamadas Higgsfield. Nenhum outro agente deve chamar diretamente — roteiam via MAYA.

---

### `generate_image` — Imagem Cinematográfica Nativa

**Quando usar:** Quando o brief pede estética cinematográfica específica do Higgsfield — não para imagens genéricas de marca (essas vão para `nano-banana-2` via infsh).

**Cadeia de prioridade para imagem:**
```
Tier 0 → KIE.AI gpt-image-2       (assets premium finais — inalterado)
Tier 1 → nano-banana-2 (infsh)    (padrão/rápido — inalterado)
Tier 2 → generate_image (MCP)     (estética cinematográfica Higgsfield — quando o estilo cabe)
```

**Quando NÃO usar:**
- Criativos com muito texto → risco de alucinação. Use KIE.AI gpt-image-2.
- Imagens de produto genéricas → nano-banana-2 é mais rápido e barato.

**Caso de uso prático — Frame de cena para Reel:**
```
Brief exige um frame de abertura estático antes de animar
→ generate_image("arquiteto em frente a blueprint digital, dark, cinematic, 1:1")
→ [poll job_status → job_display → image_url]
→ media_upload(image_url) → media_confirm
→ generate_video(prompt, reference_media_id=upload_id)
→ image-to-video com consistência visual de personagem
```

**Agente que mais se beneficia: MAYA**

---

### `media_upload` + `media_confirm` — Image-to-Video

**Quando usar:** Toda vez que o brief exige consistência visual entre frame inicial e o vídeo gerado — personalidade de personagem, paleta, elementos de cena.

**Fluxo completo:**
```
1. media_upload(reference_image_path ou URL)
   → { upload_id: "..." }

2. media_confirm(upload_id)
   → confirmação na biblioteca Higgsfield

3. generate_video(prompt, reference_media_id: upload_id)
   → vídeo animado a partir da imagem de referência
```

**Caso de uso prático — Série de Reels com personagem consistente:**
```
MAYA gera imagem do "arquiteto" via generate_image (estética Higgsfield)
→ media_upload + media_confirm → salva na biblioteca
→ Para cada Reel da série: generate_video com reference_media_id
→ Todos os clips mantêm o mesmo personagem visual
→ Consistência de série sem re-gerar o personagem a cada Reel
```

**Agente que mais se beneficia: MAYA**
Secundariamente: **@dev (Dex)** — pode usar `show_medias` para listar assets disponíveis e integrar ao pipeline content-worker.

---

### `show_generations` — Recuperar Histórico

**Quando usar:** Recuperar job IDs de gerações anteriores, revisar outputs do passado, auditar créditos usados.

**Caso de uso prático:**
```
MAYA gerou um Reel ontem, o job_id foi perdido
→ show_generations → lista últimas gerações com job_id + status
→ job_display(job_id) → recupera a URL do vídeo
→ Sem precisar gerar novamente (economiza créditos)
```

**Agente que mais se beneficia: MAYA**
Acesso secundário (read-only): **@dev (Dex)** — para integração de pipeline.

---

### `models_explore` — Diagnóstico de Disponibilidade

**Quando usar:** Quando `generate_video` ou `generate_image` retorna erro de modelo. Nunca debugar prompt antes de verificar se o modelo está disponível.

**Como usar:**
```
models_explore()
→ Lista modelos disponíveis + status
→ Se Seedance 2 indisponível → acionar Tier 1 (infsh) imediatamente
```

**Agente que mais se beneficia: MAYA**

---

### `balance` + `transactions` — Gestão de Créditos

**Quando usar:**
- `balance` — antes de batches grandes de geração (verificar se há créditos suficientes)
- `transactions` — quando o saldo parece inconsistente, para identificar onde os créditos foram usados

**Caso de uso prático:**
```
Arthur solicita 10 Reels em sequência
→ MAYA verifica balance antes de iniciar o batch
→ Se saldo < estimativa, avisa Arthur antes de gerar
→ Após o batch, transactions confirma uso real vs estimativa
```

**Agente que mais se beneficia: MAYA**

---

### `show_marketing_studio` — Templates de Campanha

**Quando usar:** Campanhas que precisam de formatos padronizados da plataforma (banners, thumbnails em templates Higgsfield).

**Caso de uso prático:**
```
ARES precisa de criativos para campanha de ads do CREATOR$
→ show_marketing_studio → lista templates disponíveis
→ Seleciona template → gera variações com prompt de campanha
→ Assets entregues a ARES para revisão
```

**Agente que mais se beneficia: MAYA** (execução) + **ARES** (brief de campanha)

---

## Mapeamento de Agentes

| Agente | Access Level | Tools que usa |
|--------|-------------|---------------|
| **MAYA** | Primário — owner total | Todas as 14 tools |
| **@dev (Dex)** | Leitura — integração pipeline | `show_generations`, `show_medias` |
| **FREYJA** | Nenhum direto | Emite briefs → MAYA executa |
| **ARES** | Nenhum direto | Solicita campanha criativos → MAYA executa |
| **HERMES** | Nenhum direto | Recebe assets finais para publicação |

> **Regra:** Nenhum agente além de MAYA e @dev chama Higgsfield MCP diretamente.
> Se outro agente precisar de um vídeo ou imagem, ele rota o brief para MAYA.

---

## Quando NÃO usar o Higgsfield MCP

| Situação | Use isso em vez |
|----------|----------------|
| Vídeo de talking-head / avatar Arthur | HeyGen REST API via `create-reel` |
| Imagem com muito texto | KIE.AI gpt-image-2 |
| Imagem genérica de marca | `nano-banana-2` via infsh |
| MCP indisponível (erro na chamada) | `infsh app run higgsfield/seedance-2` (Tier 1) |
| Slideshow de imagens estáticas | FFmpeg compositor no content-worker |
| Texto, copy, hooks | Claude nativo |

---

## Anti-Patterns

❌ **Chamar `job_display` logo após `generate_video`** — o job ainda está processando. Sempre poll `job_status` primeiro.

❌ **Usar Higgsfield MCP para talking-head** — modelos Seedance não são otimizados para lip sync. Use HeyGen.

❌ **Debugar prompt quando `generate_video` falha** — primeiro rode `models_explore` para confirmar que o modelo está disponível.

❌ **Usar infsh como primário quando MCP está ativo** — MCP é Tier 0. Só cair para infsh se a chamada MCP retornar erro.

❌ **Publicar asset sem FREYJA *av-review** (para conteúdo @arthsystems_) — nenhum ativo sai sem revisão narrativa da FREYJA.

---

## Aplicação nos Produtos

| Produto | Papel do Higgsfield MCP |
|---------|------------------------|
| **CREATOR$** | Pipeline de Reels do @arthsystems_ — gerador de vídeo primário |
| **$QUAD** | Demonstrações de vídeo do squad para clientes |
| **RUNA SYSTEMS** | Ensinar clientes o pipeline completo de produção audiovisual com IA |
| **AGENT$** | Exemplos de conteúdo gerado por agentes |

---

## Conexões no Ecossistema

- **FREYJA** emite `*brief-maya` com direção narrativa → **MAYA** executa via MCP
- **MAYA** retorna `video_url` → **FREYJA** faz `*av-review`
- **FREYJA** aprova → **Editor Workers** (background-removal, format) → **HERMES** publica
- **@dev (Dex)** pode usar `show_generations` + `show_medias` para integrar ao content-worker

---

*MCP conectado em: 2026-05-02*
*Rule file: `.claude/rules/higgsfield-mcp-usage.md`*
*Capacidade: 14 tools via `mcp__claude_ai_MCP_Higgsfield__*`*
