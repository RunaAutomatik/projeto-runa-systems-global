---
comando: "*criar-soul [nome-do-cliente]"
versao: "3.0"
stack: Higgsfield MCP (soul management) + CLI (geração)
---

# Task: *criar-soul — Criar Soul Character de Cliente

## Trigger

`*criar-soul [nome-do-cliente]`

Executar quando o cliente ainda não tem `soul_id` registrado em `pesto/brand-kit/[cliente]/soul.json`.

---

## Pré-verificação (ANTES de qualquer ação)

1. Verificar se `pesto/brand-kit/[cliente]/soul.json` existe.
   - Se existe → soul já criado. Informar Lucas e encerrar. Não recriar.
   - Se não existe → seguir para Fase 1.

---

## Fase 1 — Treinar o Soul (uma única vez por cliente)

### Passo 1 — Solicitar fotos

```
"Para criar o personagem do [cliente], preciso de 3 a 5 fotos:
- Rosto visível, bem iluminado
- Ângulos diferentes (frente, 3/4, perfil)
- Sem óculos escuros ou ângulo muito fechado
Pode enviar aqui ou confirmar o caminho das fotos no projeto."
```

### Passo 2 — Carregar ferramentas MCP

```
ToolSearch: "select:mcp__claude_ai_MCP_Higgsfield__soul_train_wizard,mcp__claude_ai_MCP_Higgsfield__soul_status,mcp__claude_ai_MCP_Higgsfield__soul_list"
```

### Passo 3 — Treinar via wizard (preferido)

```
soul_train_wizard()
```

Se o wizard não estiver disponível, usar:

```
soul_train(
  name: "pesto-[cliente]",
  photos: [url_1, url_2, url_3]
)
→ { soul_id: "..." }
```

### Passo 4 — Aguardar treino

```
soul_status(soul_id) — a cada 30s até training_status = "ready"
Treino típico: 2–10 minutos.
```

Informar Lucas durante a espera: "Treinando... geralmente leva de 2 a 10 minutos."

### Passo 5 — Registrar permanentemente

Criar arquivo `pesto/brand-kit/[cliente]/soul.json`:

```json
{
  "client": "[nome-do-cliente]",
  "soul_name": "pesto-[cliente]",
  "soul_id": "[soul_id_retornado]",
  "trained_at": "[YYYY-MM-DD]",
  "notes": "Fotos: [descrição das fotos usadas — ex: 3 fotos de perfil + 2 de frente]"
}
```

### Passo 6 — Confirmar para Lucas

```
"✅ Soul de [cliente] criado e registrado.
ID: [soul_id]
Arquivo: pesto/brand-kit/[cliente]/soul.json

A partir de agora, gerar fotos desse cliente não requer novo upload.
Use: *gerar-imagem [cliente] [brief do cenário]
Ou: /ensaio-fotografico [cliente]"
```

---

## Fase 2 — Gerar teste de validação

Gerar 1 foto de validação via CLI para confirmar que o soul está funcional:

```bash
higgsfield generate create nano_banana_flash \
  --prompt "portrait, neutral background, professional lighting, sharp focus" \
  --soul-id "[soul_id]" \
  --aspect_ratio 1:1 \
  --wait
```

Apresentar resultado ao Lucas. Se aprovado, encerrar. Se rejeitado, verificar soul_status e re-treinar se necessário.

---

## Erros comuns

| Erro | Causa provável | Ação |
|------|---------------|------|
| Treino falha imediatamente | Fotos com baixa resolução ou rosto não detectado | Pedir novas fotos |
| soul_status travado em "training" por mais de 15 min | Problema no servidor | Esperar mais 10 min ou reenviar o treino |
| Geração de teste ignora o rosto | soul_id incorreto ou soul não finalizado | Verificar soul_status antes de gerar |
