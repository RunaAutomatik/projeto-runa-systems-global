---
date: 2026-04-28
tags: [skool, mind, akasha, conhecimento, karpathy, s07]
project: runa-systems-global
type: course-support
modulo: "02 — AKASHA: Base de Conhecimento (S07)"
---

# AKASHA — Base de Conhecimento dos Agentes

> MIND$ · Sessão S07

O AKASHA é onde o conhecimento bruto se transforma em inteligência consultável. Baseado no padrão Karpathy, ele separa fontes imutáveis de conhecimento compilado — e mantém um buffer de conhecimento ativo para os agentes consultarem sem reler tudo.

---

## O Padrão Karpathy

```
raw/   → fontes primárias imutáveis (livros, artigos, transcrições)
wiki/  → conhecimento compilado (index.md + páginas por conceito)
hot.md → buffer 500-char de conhecimento ativo recente
log.md → log de operações append-only
```

**Regra fundamental:** Arquivos em `raw/` nunca são modificados. O conhecimento é **extraído** de lá para `wiki/`, não editado na fonte.

---

## Por Que Dois Sistemas (Vault + AKASHA)

| Vault (Obsidian) | AKASHA |
|-----------------|--------|
| Documentos do projeto | Conhecimento sobre o mercado/nicho |
| Specs, decisões, entregáveis | Frameworks, referências, pesquisas |
| Você é o autor | Fontes externas são ingeridas |
| Estrutura por projeto | Estrutura por conceito |

O vault é a **memória operacional** do negócio. O AKASHA é a **base de inteligência** dos agentes.

---

## Construindo o Seu AKASHA

→ Template de ingestão: [`artefatos/template-ingestao-wiki.md`](artefatos/template-ingestao-wiki.md)
→ Framework de extração: [`artefatos/framework-extracao-conhecimento.md`](artefatos/framework-extracao-conhecimento.md)

**Passo 1 — Estrutura:**
```
{SEU_AKASHA}/
├── CLAUDE.md   ← mapa + workflows + guardrails para os agentes
├── raw/        ← fontes primárias (drop arquivos aqui)
└── wiki/
    ├── index.md     ← catálogo de tudo (leia primeiro)
    ├── log.md       ← log de operações
    ├── hot.md       ← buffer de conhecimento ativo
    ├── entities/    ← pessoas, organizações, produtos
    ├── concepts/    ← frameworks, técnicas, padrões
    └── sources/     ← resumos de fontes
```

**Passo 2 — Primeira ingestão:**
Escolha 3 referências essenciais do seu nicho e coloque em `raw/`. Peça ao agente:
_"Ingira os documentos em raw/ e atualize o wiki com o que for relevante para meu negócio."_

**Passo 3 — Indexação:**
O agente cria/atualiza `wiki/index.md` com um catálogo de todas as páginas criadas.

---

## 5 Prompts para Consultar o AKASHA

→ [`artefatos/cinco-prompts-consulta-vault.md`](artefatos/cinco-prompts-consulta-vault.md)

Os prompts cobrem:
- Consulta por conceito específico
- Síntese de múltiplas páginas
- Identificação de gaps
- Comparação entre frameworks
- Extração de insights acionáveis

---

*Próxima aula: S08 — GitHub como Memória*
*Documento: [03-github-conexao.md](03-github-conexao.md)*
