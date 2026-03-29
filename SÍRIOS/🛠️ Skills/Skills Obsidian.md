---
date: 2026-03-29
tags: [skills, obsidian, conhecimento, vault, documentacao]
project: runa-systems-global
---

# Skills Obsidian — Gestão do Conhecimento

> Agente exclusivo de escrita: ORION
> Vault: `C:/runa-systems-global/SÍRIOS/` | API: `https://localhost:27124`
> Todos os documentos do projeto vivem aqui — Obsidian é a fonte de verdade

---

## obsidian-cli — Interface de linha de comando

### Criar nota
- **Comando:** `/obsidian-cli` → `obsidian create path="📐 Projetos/nome.md" content="..."`
- **Para que serve:** Criar novas notas diretamente no vault sem abrir o app
- **Caso de uso RUNA:** Criar automaticamente o documento de entrega ao fechar uma venda do RUNA SYSTEMS, salvar briefings de clientes imediatamente após a call

### Ler nota
- **Comando:** `obsidian read path="📅 Diário/2026-03-29.md"`
- **Para que serve:** Recuperar conteúdo de qualquer nota do vault
- **Caso de uso RUNA:** ORION retoma contexto da sessão anterior lendo o diário antes de começar o trabalho

### Buscar no vault
- **Comando:** `obsidian search query="RUNA SYSTEMS lançamento"`
- **Para que serve:** Busca semântica em todo o vault
- **Caso de uso RUNA:** Encontrar todos os documentos relacionados a um cliente, produto ou decisão passada

### Abrir e fechar diário
- **Comando:** `npm run dia:abrir` | `npm run dia:fechar`
- **Para que serve:** `dia:abrir` — lê sessão anterior e surface pendências. `dia:fechar` — cria nota do dia com resumo, conclusões e próximas ações
- **Caso de uso RUNA:** Ritual de início e fim de cada sessão de trabalho — ORION mantém continuidade cognitiva entre sessões

---

## obsidian-markdown — Markdown avançado do Obsidian

### Criar nota com frontmatter
- **Ativação:** `/obsidian-markdown`
- **Para que serve:** Criar documentos com YAML frontmatter, wikilinks (`[[nome]]`), embeds (`![[imagem]]`), callouts, propriedades
- **Caso de uso RUNA:** Criar PRDs de produto com frontmatter padronizado (date, tags, project, status) e wikilinks para specs relacionadas

### Wikilinks e embeds
- **Sintaxe:** `[[Nome da Nota]]` para linkar | `![[arquivo.png]]` para embedar
- **Para que serve:** Criar rede de conhecimento conectada — não apenas documentos isolados
- **Caso de uso RUNA:** PRD do RUNA SYSTEMS linkando para `[[capability-map]]`, `[[product-catalog]]`, `[[teia-de-produtos]]`

### Callouts (blocos de destaque)
- **Sintaxe:** `> [!NOTE]`, `> [!WARNING]`, `> [!TIP]`, `> [!IMPORTANT]`
- **Para que serve:** Destacar informações críticas dentro de documentos longos
- **Caso de uso RUNA:** Marcar decisões arquiteturais importantes, alertas de prazo, lembretes de ação nos documentos de projeto

---

## obsidian-bases — Bases de dados visuais

### Criar Base (banco de dados visual)
- **Ativação:** `/obsidian-bases`
- **Para que serve:** Criar `.base` files — tabelas dinâmicas que agregam notas do vault por propriedades, com filtros, fórmulas e views
- **Caso de uso RUNA:** Criar base de clientes RUNA SYSTEMS com colunas: nome, produto comprado, MRR, status de onboarding, próxima ação

### Views disponíveis
- **Table view:** Grade com colunas e filtros
- **Board view (Kanban):** Cards por status
- **Gallery view:** Visualização em grade de thumbnails
- **Caso de uso RUNA:** Kanban de clientes (Prospect → Call → Proposta → Cliente → Upsell), galeria de carousels publicados

---

## json-canvas — Diagramas visuais

### Criar canvas
- **Ativação:** `/json-canvas`
- **Para que serve:** Criar arquivos `.canvas` com nodes (notas, textos, grupos, imagens), edges (conexões) e layouts visuais
- **Caso de uso RUNA:** Mapear visualmente a teia de produtos RUNA SYSTEMS, criar fluxos de automação N8N antes de implementar, diagramar arquitetura de agentes

### Tipos de node
- **Note node:** Conecta a uma nota existente do vault
- **Text node:** Texto livre no canvas
- **Group:** Agrupa nodes relacionados
- **Image/URL node:** Embed de imagem ou URL externa

---

## defuddle — Extração de conteúdo limpo da web

### Extrair artigo
- **Ativação:** `/defuddle`
- **Para que serve:** Extrai conteúdo limpo de qualquer URL — remove navegação, banners, rodapés, deixa apenas o texto principal em Markdown
- **Caso de uso RUNA:** ALEX extrair artigos completos para alimentar o NotebookLM, criar bases de conhecimento (AKASHA) sem ruído de layout

### Salvar no vault
- **Fluxo:** `/defuddle <url>` → conteúdo limpo → salvar em `SÍRIOS/📚 Referências/`
- **Caso de uso RUNA:** Raspar artigos sobre IA, automação e marketing de alto desempenho para alimentar as bases de conhecimento dos agentes FREYJA, ARES, HELIOS
