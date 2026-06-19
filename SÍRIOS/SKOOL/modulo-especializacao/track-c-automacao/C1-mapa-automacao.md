---
date: 2026-04-28
tags: [skool, automacao, mapa, processos, track-c]
project: runa-systems-global
type: course-support
modulo: "C1 — Mapa de Automação (Track C)"
---

# Mapa de Automação

> Track C — Automação · Sessão C1

Antes de automatizar, você precisa saber o que automatizar. A maioria das agências técnicas automatiza o que é fácil, não o que gera mais impacto. Esta sessão resolve isso.

---

## O Inventário de Processos

Liste todos os processos operacionais do seu negócio. Para cada um, avalie:

| Processo | Frequência | Tempo/execução | Pode ser automatizado? |
|---------|-----------|----------------|------------------------|
| {PROCESSO_1} | {FREQ} | {TEMPO} | Sim / Parcialmente / Não |
| {PROCESSO_2} | | | |
| ... | | | |

**Processos com alto potencial de automação:**
- Repetitivos (feitos > 3×/semana)
- Baseados em dados e regras (não em julgamento)
- Sequenciais (passo A → passo B → passo C)
- Com alta variação de volume

---

## Priorização por Impacto

Depois do inventário, priorize usando a matriz:

```
                    FÁCIL DE AUTOMATIZAR
                    ↑
Alta alavanca  |  FAÇA AGORA   |  FAÇA DEPOIS
               |               |
               |───────────────|───────────────
               |               |
Baixa alavanca |   IGNORE      |   IGNORE TAMBÉM
                    ↓
                    DIFÍCIL DE AUTOMATIZAR
```

**Foco:** Quadrante "FAÇA AGORA" — alto impacto + viável tecnicamente.

---

## Os 5 Tipos de Automação

| Tipo | Exemplos | Ferramenta padrão |
|------|---------|------------------|
| **Trigger → Ação** | Formulário preenchido → email enviado | n8n, Zapier |
| **Agendamento** | Post publicado todo dia às 9h | n8n, cron |
| **Processamento de dados** | Planilha → relatório formatado | n8n, Python |
| **Comunicação** | DM automático, follow-up por email | n8n, Zernio |
| **Monitoramento** | Alerta quando métrica cai abaixo de X | n8n, Supabase |

---

## Template de Mapa

→ [`artefatos/template-mapa-expansao.md`](artefatos/template-mapa-expansao.md)

O mapa de expansão documenta:
- Estado atual de cada processo
- Estado automatizado alvo
- Ferramenta escolhida
- Estimativa de tempo de implementação
- Impacto esperado

---

## Resultado Desta Sessão

- [ ] Inventário de processos completo (mínimo 15 processos)
- [ ] Matriz de priorização preenchida
- [ ] Top 3 automações identificadas para implementar
- [ ] Mapa de expansão do negócio esboçado

---

*Próxima aula: C2 — n8n Workflows*
*Documento: [C2-n8n-workflows.md](C2-n8n-workflows.md)*
