---
date: 2026-04-30
tags: [skills, llm-wiki, akasha, knowledge-base, karpathy, web-clipper]
project: runa-systems-global
type: skill-doc
---

# Skills LLM Wiki — Knowledge Base System

> Sistema completo de base de conhecimento AI-mantida (padrão Karpathy).
> Vault ativo: `AKASHA/` em `D:/Runa/runa-systems-global/AKASHA/`

---

## Visão geral do ecossistema

O sistema LLM Wiki neste projeto é composto por **4 componentes** que trabalham juntos:

| Componente | Onde vive | O que faz |
|-----------|-----------|-----------|
| `llm-wiki-setup` | `~/.claude/skills/llm-wiki-setup/` | Inicializa um vault do zero |
| `wiki-self-heal` | `~/.claude/skills/wiki-self-heal/` | Audita e preenche lacunas automaticamente |
| Chrome Web Clipper | `tools/llm-wiki-clipper/` | Captura páginas web para o AKASHA/raw/ |
| AKASHA Clip Server | `tools/llm-wiki-clipper/akasha-clip-server.py` | Servidor local que recebe os clips da extensão |

**Vault ativo:** `AKASHA/` — layout nested, conteúdo: Hormozi, Brunson, Ladeira, Everton Pieri, Leandro Ladeira VTSD.
**Vault Obsidian:** `SÍRIOS/` — não usar llm-wiki-setup aqui, tem estrutura própria.

---

## Skill 1 — `llm-wiki-setup`

### O que faz
Inicializa um vault Karpathy do zero: cria `raw/`, `wiki/`, `CLAUDE.md` (o mapa), `AGENTS.md`, `wiki/index.md` e `wiki/log.md` em uma única passagem.

### Como usar
```
/llm-wiki-setup
```
O skill faz 3 perguntas em sequência:
1. **Caminho do vault** — absoluto. Ex: `D:/Runa/runa-systems-global/AKASHA`
2. **Layout flat ou nested** — nested adiciona subpastas `entities/`, `concepts/`, `sources/`, `analyses/`
3. **Hot cache?** — `wiki/hot.md`, buffer de 500 chars para contexto recente. Default: não

### Quando usar
- Criar uma nova base de conhecimento para um nicho, produto ou cliente
- Ensinar clientes do RUNA SYSTEMS a montar o próprio segundo cérebro
- Bootstrap de vault para um novo agente especializado ($QUAD, AGENT$)

### Quando NÃO usar
- Em `SÍRIOS/` — já tem estrutura Obsidian própria
- Em vault que já tem `CLAUDE.md` ou `wiki/` — vai perguntar antes de sobrescrever

### O que é criado
```
<vault>/
├── CLAUDE.md           ← o mapa completo (roteamento, convenções, guardrails)
├── AGENTS.md           ← espelho mínimo para agentes não-Claude
├── .gitignore
├── raw/                ← fontes imutáveis (você joga, o LLM lê)
└── wiki/
    ├── index.md        ← catálogo de todas as páginas
    └── log.md          ← log cronológico de operações
```

### Caso de uso prático — RUNA SYSTEMS
**Cenário:** Cliente novo no RUNA SYSTEMS, quer montar base de conhecimento sobre vendas high-ticket.

```
Arthur: "/llm-wiki-setup"
Vault path: C:/clientes/joao-silva/knowledge
Layout: nested
Hot cache: sim

→ Resultado: vault pronto em segundos.
→ Próximo passo: cliente joga PDF do $100M Offers no raw/ e diz "ingira isso"
```

**Produto:** Este fluxo É um módulo do RUNA SYSTEMS — "Construindo seu Segundo Cérebro Neural".

---

## Skill 2 — `wiki-self-heal`

### O que faz
Audita um vault Karpathy existente: encontra lacunas, contradições, páginas órfãs e referências quebradas. Em modo full, pesquisa na web e preenche as lacunas automaticamente, sempre em uma branch separada para revisão humana.

### Como usar
```
/wiki-self-heal
```

Dois modos:
- **Full mode** (padrão) — audita + pesquisa + aplica + faz commit
- **Audit-only** — audita e reporta sem fazer alterações. Ativar dizendo: "só auditoria", "dry run", "não faça mudanças"

### Fluxo completo (Full mode)
1. Lê `CLAUDE.md` + `wiki/index.md` + últimas 10 entradas do `wiki/log.md`
2. Cria branch: `wiki-heal/YYYY-MM-DD`
3. Audita 6 tipos de gap (contradições, páginas órfãs, referências faltando, dados desatualizados, lacunas de conhecimento, links quebrados)
4. Escolhe top 3 gaps de alta severidade
5. Pesquisa cada gap (WebSearch → WebFetch, ou Exa/Firecrawl se disponíveis)
6. Cria/atualiza páginas wiki com fontes citadas
7. Commit na branch (NÃO faz merge — aguarda revisão humana)
8. Reporta resumo: N gaps resolvidos, S ignorados

### Quando usar
- Após uma série de ingestões (verificar se tudo está bem conectado)
- Periodicamente (semanal ou quinzenal) para manter o AKASHA atualizado
- Antes de usar o AKASHA para responder perguntas críticas de produto ou vendas

### Pré-condições
- Vault precisa ter: `raw/`, `wiki/`, `CLAUDE.md`, `wiki/index.md`, `wiki/log.md`
- Deve ser um repositório git com working tree limpo
- Se vault tem < 5 páginas wiki, skip — ingira fontes primeiro

### Caso de uso prático — AKASHA Runa
**Cenário:** FREYJA precisa de frameworks de conversão para construir o aperitivo do $QUAD. O AKASHA tem conteúdo do Hormozi e Brunson, mas talvez desatualizado.

```
Arthur: "/wiki-self-heal — só auditoria primeiro"

→ FREYJA roda audit-only
→ Relatório: "conceito RECA citado em 3 páginas mas não tem página própria"
→ Arthur: "ok, preenche os gaps"
→ FREYJA roda full mode
→ Commit em wiki-heal/2026-04-30
→ Arthur revisa e faz merge
→ FREYJA agora tem [[reca-framework]] completo para usar
```

**Produto:** Candidato a módulo "Auto-atualização da base de conhecimento" no RUNA SYSTEMS.

---

## Skill 3 — Chrome Web Clipper (LLM Wiki Extension)

### O que faz
Extensão Chrome que captura o conteúdo de qualquer página web e envia para o `AKASHA/raw/` com um clique. Usa Readability.js para extrair o texto limpo e Turndown.js para converter para Markdown.

### Instalação (uma vez)
**A extensão já está baixada em:** `D:/Runa/runa-systems-global/tools/llm-wiki-clipper/`

Para instalar no Chrome:
1. Abrir `chrome://extensions/`
2. Ativar **Modo de desenvolvedor** (toggle no canto superior direito)
3. Clicar **"Carregar sem compactação"**
4. Selecionar a pasta: `D:/Runa/runa-systems-global/tools/llm-wiki-clipper/`
5. A extensão aparece na barra com ícone de livro

### Como usar
**Antes de usar:** iniciar o servidor receptor:
```bash
cd D:/Runa/runa-systems-global
python tools/llm-wiki-clipper/akasha-clip-server.py
```
O servidor roda na porta 19827 e salva clips em `AKASHA/raw/`.

**Para clipar uma página:**
1. Navegar até a página que quer capturar
2. Clicar no ícone da extensão na barra do Chrome
3. Confirmar ou editar o título
4. Clicar **"Clip"**
5. O clip é salvo automaticamente em `AKASHA/raw/YYYY-MM-DD-titulo.md`

### Nomeação automática dos arquivos
```
AKASHA/raw/2026-04-30-como-criar-oferta-irresistivel.md
AKASHA/raw/2026-04-30-russell-brunson-value-ladder.md
```

### Após clipar
Abrir Claude Code no vault e dizer:
```
"Ingira a nova fonte que acabei de adicionar ao raw/"
```
Claude lê `CLAUDE.md` + `wiki/index.md`, cria/atualiza páginas, adiciona wikilinks, atualiza index.

### Quando usar
- Capturar artigos de referência sobre vendas, marketing, IA
- Salvar transcrições de vídeos do YouTube coladas em uma página
- Capturar posts de blog de referência (Hormozi, Brunson, etc.)
- Salvar pesquisas do ARES sobre concorrentes direto no AKASHA

### Quando NÃO usar
- Para fontes em PDF/DOCX — jogá-los diretamente em `raw/` e ingerir manualmente
- Para conteúdo que não deve ser permanente (rascunhos, ideias temporárias)

### Caso de uso prático — FREYJA + ARES
**Cenário:** ARES encontra um artigo excelente sobre posicionamento de alto ticket e quer preservar o conhecimento.

```
1. ARES navega até o artigo
2. Clica no ícone Web Clipper
3. Título auto-preenchido: "High Ticket Positioning Framework — Dan Kennedy"
4. Clica Clip → salvo em raw/2026-04-30-high-ticket-positioning-dan-kennedy.md
5. Claude Code: "Ingira a nova fonte"
6. AKASHA cria [[dan-kennedy]], [[high-ticket-positioning]], atualiza [[posicionamento$]]
7. FREYJA agora tem acesso a esse framework nas queries do AKASHA
```

**Produto:** Candidato a "Como alimentar seu segundo cérebro com um clique" no RUNA SYSTEMS.

---

## Sistema 4 — AKASHA Clip Server

### O que faz
Servidor HTTP local (Python, porta 19827) que faz a ponte entre a extensão Chrome e o vault AKASHA. Implementa 4 endpoints que a extensão espera, com:
- **Deduplicação SHA256** — nunca salva o mesmo conteúdo duas vezes
- **Nomeação automática** — `YYYY-MM-DD-slug.md`
- **Cache persistente** — `.ingest-cache.json` rastreia o que já foi ingerido
- **Frontmatter automático** — todo clip vira markdown com metadados

### Como iniciar
```bash
python D:/Runa/runa-systems-global/tools/llm-wiki-clipper/akasha-clip-server.py
```

Com vault customizado:
```bash
python tools/llm-wiki-clipper/akasha-clip-server.py --vault C:/outro/vault
```

### Endpoints (internos — a extensão chama automaticamente)
| Endpoint | Método | O que faz |
|----------|--------|-----------|
| `/status` | GET | Health check — retorna `{"status": "ok"}` |
| `/projects` | GET | Retorna o vault ativo |
| `/project` | GET | Caminho do vault atual |
| `/clip` | POST | Recebe título + URL + conteúdo, salva em `raw/` |

### Cache SHA256
O servidor mantém `.ingest-cache.json` no vault. Se você tentar clipar a mesma página duas vezes (mesmo que a URL seja diferente), o servidor detecta pelo hash do conteúdo e retorna `"Already ingested"` sem criar duplicata.

```json
{
  "a3f8c2...": {
    "file": "2026-04-30-hormozi-offer.md",
    "url": "https://hormozi.com/offer",
    "date": "2026-04-30"
  }
}
```

### Quando usar
- Sempre que for usar a extensão Chrome
- Pode ficar rodando em background durante sessões de pesquisa

---

## Fluxo completo integrado

```
VOCÊ PESQUISA
     │
     ▼
[Chrome] → Web Clipper Extension
     │ POST /clip
     ▼
[AKASHA Clip Server :19827]
     │ SHA256 check → salva raw/YYYY-MM-DD-slug.md
     ▼
AKASHA/raw/
     │
     ▼
[Claude Code no vault]
"Ingira a nova fonte"
     │
     ▼
/llm-wiki-setup (se vault novo) ou ingestão direta
     │ cria/atualiza páginas wiki com 4-signal cross-refs
     ▼
AKASHA/wiki/ → pages compoundando
     │
     ▼
[wiki-self-heal semanal]
     │ audita gaps, pesquisa, preenche, commit na branch
     ▼
FREYJA / ARES / HERMES consultam AKASHA
para copy, ofertas, frameworks de vendas
```

---

## Referências rápidas

| O que fazer | Comando |
|------------|---------|
| Criar vault novo | `/llm-wiki-setup` |
| Auditar e curar vault | `/wiki-self-heal` |
| Iniciar servidor de clips | `python tools/llm-wiki-clipper/akasha-clip-server.py` |
| Verificar últimas operações | `grep "^## \[" AKASHA/wiki/log.md \| tail -5` |
| Contar páginas no vault | `ls AKASHA/wiki/**/*.md \| wc -l` |
| Buscar conceito no vault | `grep -rl "[[conceito]]" AKASHA/wiki/` |
| Verificar cache de ingestão | `cat AKASHA/.ingest-cache.json` |
| Fontes recentes | `ls AKASHA/raw/ \| sort -r \| head -10` |

---

## Regras do vault AKASHA

- `raw/` é **imutável** — só joga, nunca edita
- Toda página wiki tem frontmatter com `sources:` obrigatório
- `wiki/index.md` é o roteador — página sem entrada lá é invisível
- Nomes de arquivo em `kebab-case.md` — é o índice, não é decoração
- Log em `wiki/log.md` é **append-only** — nunca apagar entradas
- Contradições entre páginas: **anotar as duas**, não resolver silenciosamente

---

*Vault AKASHA inicializado em 2026-04-18 | Skills instaladas em 2026-04-18 | Clipper instalado em 2026-04-30*
*Owner: ORION (escrita), FREYJA + ARES + HERMES (leitura e query)*
