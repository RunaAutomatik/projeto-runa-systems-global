---
date: 2026-04-28
tags: [skool, automacao, n8n, workflows, track-c]
project: runa-systems-global
type: course-support
modulo: "C2 — n8n Workflows (Track C)"
---

# n8n Workflows

> Track C — Automação · Sessão C2

O n8n é a espinha dorsal de automação do ecossistema. Com mais de 1.000 integrações e execução self-hosted ou em cloud, ele conecta qualquer ferramenta sem depender de serviços intermediários.

---

## Por Que n8n e Não Zapier/Make

| Critério | n8n | Zapier | Make |
|---------|-----|--------|------|
| Preço por operação | Grátis (self-hosted) | Caro na escala | Moderado |
| Flexibilidade | Máxima (código nos nós) | Baixa | Média |
| Self-hosted | ✅ | ❌ | ❌ |
| Nós personalizados | ✅ | ❌ | Limitado |
| Integração com IA | ✅ Nativo | Limitado | Limitado |

Para negócios com volume alto ou necessidade de customização, n8n é superior.

---

## Os 3 Workflows Essenciais

### 1. Workflow de Publicação de Conteúdo

```
Trigger (agenda/webhook)
    ↓
Ler post do Obsidian/Airtable
    ↓
Processar mídia (resize, format)
    ↓
Publicar via Meta Graph API
    ↓
Registrar no Supabase
    ↓
Notificar Slack/Discord
```

### 2. Workflow de Lead via DM

```
Webhook (comentário com keyword)
    ↓
Validar keyword
    ↓
Buscar template de DM
    ↓
Enviar DM via Zernio/Instagram API
    ↓
Registrar lead no CRM
    ↓
Agendar follow-up D+1
```

### 3. Workflow de Relatório Semanal

```
Trigger (todo domingo às 8h)
    ↓
Coletar métricas (Instagram, vendas, etc.)
    ↓
Processar com AI (resumir, identificar tendências)
    ↓
Gerar relatório Markdown
    ↓
Salvar no Obsidian
    ↓
Enviar para email ou WhatsApp
```

---

## Deploy do n8n

**Opções de infraestrutura:**

| Opção | Custo | Esforço | Melhor para |
|-------|-------|---------|------------|
| **Railway** | ~$5–20/mês | Baixo | Maioria dos casos |
| **VPS próprio** | ~$10–30/mês | Alto | Controle total |
| **n8n Cloud** | $20–50/mês | Zero | Início rápido |

**Case:** Railway é o padrão do ecossistema Runa — fácil deploy, preço acessível, escala automática.

---

## Resultado Desta Sessão

- [ ] n8n instalado e funcionando (Railway ou local)
- [ ] Workflow de publicação configurado
- [ ] Workflow de lead/DM configurado
- [ ] Credenciais de APIs conectadas (Instagram, email, etc.)

---

*Próxima aula: C3 — Landing Pages*
*Documento: [C3-landing-pages.md](C3-landing-pages.md)*
