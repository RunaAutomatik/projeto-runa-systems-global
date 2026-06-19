---
date: 2026-04-28
tags: [skool, automacao, escala, workers, track-c]
project: runa-systems-global
type: course-support
modulo: "C4 — Escala de Automação (Track C)"
---

# Escala de Automação

> Track C — Automação · Sessão C4

A última sessão da Track C conecta tudo: os workflows estão rodando, a LP está convertendo, o squad está operando. Agora você escala sem adicionar horas.

---

## A Arquitetura de Escala

```
VOCÊ (estratégia + aprovação)
    ↓
SQUAD (agentes especializados)
    ↓
WORKERS (processos autônomos)
    ↓
INTEGRAÇÕES (n8n conectando tudo)
    ↓
DADOS (Supabase armazenando e monitorando)
```

Cada camada opera de forma semi-autônoma. Você intervém apenas quando há exceções ou decisões estratégicas.

---

## Workers Prioritários para Agências Técnicas

| Worker | O que faz | Impacto |
|--------|-----------|---------|
| **onboarding-worker** | Onboarding automático de novo cliente | Economiza 3–5h por cliente |
| **report-worker** | Relatório semanal de resultados por cliente | Economiza 1–2h/cliente/semana |
| **upsell-worker** | Identifica momento certo de upsell | Aumenta LTV |
| **monitor-worker** | Alerta quando KPI de cliente cai | Retém clientes proativamente |
| **proposal-worker** | Gera proposta personalizada | Reduz ciclo de venda |

---

## Monitoramento com Supabase

O Supabase é o centro de dados do ecossistema:
- Todos os workers registram outputs
- Todos os eventos de cliente são rastreados
- Alertas disparam quando thresholds são ultrapassados
- O agente de inteligência consulta para relatórios

**Tabelas essenciais:**
```sql
clients          -- perfil + status por cliente
workflows        -- log de execução por workflow
events           -- eventos rastreados (lead, compra, upsell)
alerts           -- alertas gerados + status de resolução
```

---

## Escalando para Múltiplos Clientes

Com 1 cliente, o squad é suficiente. Com 5+, você precisa de isolamento:

**Padrão de isolamento:**
- 1 repositório por cliente (configurações isoladas)
- 1 conjunto de agentes com CLAUDE.md específico por cliente
- Shared workers (todos clientes usam o mesmo, com parâmetros de cliente)
- Supabase: tabelas com `client_id` para separar dados

---

## O Que Você Monitora Semanalmente

Com a escala funcionando, sua atenção semanal vai para:

| Item | Tempo | Ferramenta |
|------|-------|-----------|
| KPIs por cliente | 15 min | Relatório automático do report-worker |
| Alertas pendentes | 10 min | Dashboard Supabase |
| Novos leads | 5 min | Pipeline no CRM |
| Aprovações de conteúdo | 20 min | Fila do publish-worker |

**Total: ~50 minutos por semana** para monitorar múltiplos clientes.

---

## Track C — Concluída

Ao terminar esta trilha, você tem:
- Mapa de automação completo do negócio
- 3+ workflows n8n em produção
- Landing page publicada e convertendo
- Workers autônomos cobrindo onboarding, relatório e monitoramento
- Arquitetura pronta para escalar para múltiplos clientes

---

*Track C concluída. Consulte seu mentor para avaliação final.*
*Todos os artefatos: [artefatos/](artefatos/)*
