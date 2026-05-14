---
date: 2026-05-12
tags: [mentorado, lucas-pesto, notebooklm, troubleshooting, entregavel]
project: runa-systems-global
type: session-deliverable
cliente: Lucas — Pesto
sessao: pré-sessao-10
status: pronto-para-entregar
---

# Entregável — Corrigir NotebookLM MCP

> Passo a passo para Lucas executar **antes da próxima sessão**.
> Problema identificado em 2026-05-08: autenticação Google expirada.

---

## O que está acontecendo

O NotebookLM MCP usa cookies de sessão do Google para funcionar. Esses cookies expiram periodicamente (a cada 1–2 semanas). Quando isso acontece, **todas as ferramentas do NotebookLM param de funcionar** — mesmo que o Claude Code diga que a autenticação foi renovada.

Isso é normal. Acontecerá de novo no futuro. O processo de correção leva menos de 2 minutos.

---

## Passo a passo — Execute em ordem

### 1. Feche o Claude Code

Feche completamente antes de começar.

---

### 2. Abra o terminal (PowerShell ou CMD)

Não o terminal dentro do Claude Code — o terminal do Windows normal.

---

### 3. Navegue até a pasta do projeto

```powershell
cd "c:\CLAUDE TESTE"
```

---

### 4. Faça login novamente

```powershell
.\venv\Scripts\nlm login
```

O Chrome vai abrir automaticamente. Faça login na conta Google normalmente. Após confirmar, volte ao terminal.

> ℹ️ **Nota:** Não existe comando `nlm logout` nesta versão. O login direto já substitui os cookies expirados — não é necessário fazer logout antes.

---

### 5. Verifique se funcionou

```powershell
.\venv\Scripts\nlm login --check
```

Deve aparecer:
```
✓ Authentication valid for [seu-email@gmail.com]
```

Se aparecer erro, feche o Chrome e repita o passo 4.

---

### 6. Atualize o pacote para a versão mais recente

```powershell
uv tool upgrade notebooklm-mcp-cli
```

> ℹ️ O próprio terminal indicou que há uma versão mais recente disponível. Este comando instala a versão mais atual.

---

### 7. Registre o MCP globalmente

```powershell
.\venv\Scripts\nlm setup add claude-code
```

Isso garante que o NotebookLM funcione em **qualquer projeto**, não só no `c:\CLAUDE TESTE`.

---

### 8. Verifique o diagnóstico final

```powershell
.\venv\Scripts\nlm doctor
```

Deve aparecer sem erros. O campo `Account` deve mostrar seu email.

---

### 9. Abra o Claude Code e teste

Abra o Claude Code normalmente. Digite:

> "liste meus notebooks do NotebookLM"

O Claude vai usar a ferramenta `notebook_list` e mostrar seus notebooks.

---

## Se travar em algum passo

| Problema | O que fazer |
|----------|------------|
| Chrome não abre no passo 4 | Tente rodar `.\venv\Scripts\nlm login --no-sandbox` |
| Passo 5 continua com erro | Feche o Chrome manualmente e repita o passo 4 |
| Passo 8 mostra `Account: unknown` | Repita os passos 4 e 5 |
| Claude Code ainda falha após tudo | Reinicie o Claude Code e tente novamente |
| `No such command 'logout'` | Normal — este comando não existe. Ignore e siga direto para o passo 4. |

---

## Nota importante para o futuro

Isso vai acontecer de novo. Quando o NotebookLM parar de funcionar, o processo é sempre o mesmo:

```
nlm login → nlm login --check
```

Não precisa fazer tudo do zero — só esses 2 comandos resolvem na maioria das vezes:

```powershell
cd "c:\CLAUDE TESTE"
.\venv\Scripts\nlm login
.\venv\Scripts\nlm login --check
```

---

## Próximos passos na sessão

Depois que isso estiver funcionando, vamos:

1. Testar o NotebookLM integrado ao seu Claude Code
2. Criar o primeiro notebook com materiais da Pesto
3. Conectar ao pipeline de pesquisa/referências do squad

---

*Gerado em 2026-05-11 — Arthur Runa*
