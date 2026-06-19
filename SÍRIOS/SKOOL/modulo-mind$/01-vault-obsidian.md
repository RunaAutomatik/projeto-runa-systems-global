---
date: 2026-04-28
tags: [skool, mind, vault, obsidian, s07]
project: runa-systems-global
type: course-support
modulo: "01 — Vault Obsidian (S07)"
---

# Vault Obsidian

> MIND$ · Sessão S07

O vault é o sistema operacional do seu conhecimento. Todo documento, decisão, spec, referência e template do seu negócio vive aqui — acessível por você e pelos seus agentes.

---

## Por Que Obsidian

O Obsidian é a ferramenta ideal para este ecossistema porque:
- Arquivos são Markdown puro (agentes leem nativamente)
- Links bidirecionais criam um grafo de conhecimento
- Plugins estendem para bases de dados, gráficos, tarefas
- Funciona offline, sem dependência de nuvem

---

## Estrutura do Vault

Use o template para criar a sua estrutura:
→ [`artefatos/estrutura-vault-conhecimento.md`](artefatos/estrutura-vault-conhecimento.md)

**Estrutura canônica (adaptável ao seu negócio):**

```
{SEU_VAULT}/
├── 📅 Diário/           ← notas de sessão, decisões diárias
├── 📐 Projetos/         ← specs, PRDs, roadmaps
├── 📚 Referências/      ← pesquisas, artigos, inputs externos
├── 📦 Entregáveis/      ← documentos para clientes
├── 🛠️ Ferramentas/      ← guias de ferramentas e configurações
└── 🧠 Agentes/          ← personas, system prompts, memórias
```

**Regras de nomenclatura:**
- Arquivos: `kebab-case.md`
- Frontmatter obrigatório: `date`, `tags`, `type`
- Nunca criar arquivo sem tag — impossível de encontrar depois

---

## Convenções de Frontmatter

Copie este padrão para todos os documentos do seu vault:

```yaml
---
date: YYYY-MM-DD
tags: [projeto, tipo, contexto]
project: {nome-do-seu-projeto}
type: spec | decision | reference | deliverable | template
---
```

---

## Primeiro Documento a Criar

Antes de qualquer outra coisa, crie o seu `_HUB.md` — o índice central do vault.

O hub lista:
- Os projetos ativos
- Os documentos mais importantes
- Links para as principais seções

**Por que o hub primeiro?** Sem um ponto de entrada, o vault vira uma gaveta bagunçada.

---

## Obsidian como Memória dos Agentes

Os seus agentes no Claude Code podem ler os arquivos do vault diretamente. Isso significa que você pode:

- Escrever uma spec no Obsidian → o agente a lê antes de implementar
- Registrar uma decisão no vault → o agente consulta antes de recomendar
- Criar templates → o agente usa como base para novos documentos

Configure o path do vault no CLAUDE.md do seu squad para que todos os agentes saibam onde procurar.

---

*Próxima aula: S07 — AKASHA*
*Documento: [02-akasha-base-conhecimento.md](02-akasha-base-conhecimento.md)*
