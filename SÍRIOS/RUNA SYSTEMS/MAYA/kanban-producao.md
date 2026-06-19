---
kanban-plugin: board
date: 2026-05-26
tags: [maya, producao, kanban, arthsystems]
project: runa-systems-global
type: production-board
---

# MAYA Production Board — @arthsystems_

> Board de acompanhamento de produção AV. Mover cards conforme progresso.
> **Plugin:** obsidian-community/obsidian-kanban (instalar em Community Plugins para visualização em board)
> **Google Sheet (MAYA log):** https://docs.google.com/spreadsheets/d/1Mow1w7FSKmYvl2tWyrWVi0aGFGyy3LMa2-LLDZV9JGc/edit

---

## 📋 Backlog

- [ ] **[Exemplo] Post Manifesto — Arthur arquiteto digital**
  Tipo: Post
  Formato: 1080×1350
  Modelo: GPT Image 2 (primário)
  Data alvo: 2026-06-01
  Semana: Semana 01
  Refs: [[_base/reference-ids]]
  Job ID: —

---

## 🎬 Em Produção

<!-- Cards aqui = MAYA executando agora. Status no Sheet: Pending -->

---

## ✅ Gerado

<!-- Cards aqui = arquivo existe, aguardando revisão. Status no Sheet: Pending -->

---

## 👁️ Revisão FREYJA

<!-- Cards aqui = com FREYJA para *av-review -->

---

## 🚀 Aprovado

<!-- Cards aqui = aprovado, pronto para publicar via HERMES. Status no Sheet: Approved -->

---

## ⚠️ Erro

<!-- Cards aqui = falhou na geração ou rejeitado — precisa retry com ajuste. Status no Sheet: Rejected -->

---

## Formato de Card

```
[Título descritivo]
Tipo: Post / Carousel / Reel Viral / Reel Avatar / VSL
Formato: 1080×1350 (Post/Carousel) | 9:16 (Reel Viral/Avatar) | 16:9 (VSL)
Modelo: GPT Image 2 (primário) / nano-banana-2 (backup) / Seedance 2.0 / HeyGen
Data alvo: YYYY-MM-DD
Semana: Semana 01 / Semana 02 / ...
Refs: [[pin-01-assets]] / [[campanha-x]]
Job ID: [se já gerado]
```

---

## Mapeamento Kanban ↔ Google Sheet

| Coluna Kanban | Status no Sheet (coluna D) |
|---------------|---------------------------|
| Em Produção | Pending |
| Gerado | Pending (até revisão) |
| Aprovado | Approved |
| Erro | Rejected |

---

## Pipeline completo

```
FREYJA *brief-maya
  → card: 📋 Backlog → 🎬 Em Produção
  → MAYA executa (GPT Image 2 / Seedance 2.0 / HeyGen)
  → Sheet: Job ID + status Pending
  → card: ✅ Gerado
  → FREYJA *av-review
    → [APROVADO]  → card: 🚀 Aprovado → Sheet: Approved → HERMES publica
    → [REJEITADO] → card: ⚠️ Erro    → Sheet: Rejected → MAYA regenera com feedback
```

---

## Referências

- Brain files: [[_base/reference-ids]] · [[_base/handoff]] · [[_base/style-bible]]
- Skills: [[Skills MAYA Framework GenHQ]] · [[Skills MAYA Produção AV]]
- Google Sheet: https://docs.google.com/spreadsheets/d/1Mow1w7FSKmYvl2tWyrWVi0aGFGyy3LMa2-LLDZV9JGc/edit

%% kanban:settings
```
{"kanban-plugin":"board","list-collapse":[false,false,false,false,false,false]}
```
%%
