---
date: 2026-04-18
tags: [skill, knowledge-graph, graphify, orion, alex, visualization, obsidian]
project: runa-systems-global
status: active
owner: ORION
---

# Skill: graphify

> **Skill file:** `~/.claude/skills/graphify/SKILL.md`
> **Trigger:** `/graphify`
> **Owner:** ORION (`@aiox-master`) — também ALEX para research corpus
> **Package:** `pip install graphifyy` · `import graphify`

## Purpose

Transforma qualquer entrada — código, documentos, pasta, texto solto, vault Obsidian — em um **knowledge graph interativo** com detecção automática de comunidades, visualização HTML e exportação para múltiplos formatos.

O grafo revela: quais entidades existem, como estão conectadas, quais clusters formam, e quais são os nós de maior influência (hubs).

---

## Pipeline (9 etapas automáticas)

| # | Etapa | O que acontece |
|---|-------|---------------|
| 1 | **Detect** | Identifica tipo de entrada: código, doc, pasta, texto livre |
| 2 | **AST Extract** | Para código: extrai funções, classes, imports via AST |
| 3 | **Semantic Extract** | Para docs/texto: extrai conceitos, entidades, relações (subagentes paralelos) |
| 4 | **Merge** | Consolida extração AST + semântica em grafo unificado |
| 5 | **Build Graph** | Constrói estrutura de nós e arestas com pesos de relação |
| 6 | **Cluster** | Detecção de comunidades (Louvain algorithm) |
| 7 | **Label Communities** | Nomeia cada cluster semanticamente |
| 8 | **Generate Output** | HTML interativo + `GRAPH_REPORT.md` + `graph.json` |
| 9 | **Export (opcional)** | Obsidian vault, Neo4j, SVG, GraphML |

---

## Comandos

| Comando | Uso |
|---------|-----|
| `/graphify <arquivo ou pasta>` | Pipeline completo — gera HTML + report |
| `/graphify <texto livre>` | Constrói grafo a partir de conceitos em prosa |
| `/graphify query <entidade>` | Busca nós relacionados a uma entidade específica |
| `/graphify path <A> <B>` | Encontra caminho mais curto entre dois nós |
| `/graphify explain <nó>` | Explica o papel de um nó no grafo |
| `/graphify add <novos docs>` | Modo incremental — atualiza grafo existente sem reprocessar tudo |
| `/graphify watch <pasta>` | Modo watch — reprocessa automaticamente quando arquivos mudam |

---

## Formatos de saída

| Output | Descrição |
|--------|-----------|
| `graph.html` | Visualização interativa (D3.js) — nós clicáveis, zoom, filtro por cluster |
| `GRAPH_REPORT.md` | Relatório textual: entidades top, comunidades detectadas, hubs, gaps |
| `graph.json` | Dados brutos — integrável com qualquer pipeline externo |
| Obsidian export | Cria/atualiza notas no vault com wikilinks baseados nas relações do grafo |
| Neo4j export | Cypher queries para importar em banco de grafos |
| SVG / GraphML | Formatos estáticos para documentação e ferramentas externas |

---

## Quando usar

**USE graphify quando:**
- Você quer entender a estrutura de um codebase que nunca viu
- Você tem um corpus de documentos e quer descobrir quais conceitos dominam
- Você quer encontrar dependências ocultas entre módulos/agentes/produtos
- Você quer visualizar o vault Obsidian como grafo de conhecimento
- Você está construindo uma base RAG e quer verificar cobertura antes de indexar

**NÃO use graphify quando:**
- Você precisa de busca simples → use `obsidian search` ou `Grep`
- Você quer apenas listar arquivos → use `Glob`
- O input tem menos de ~10 entidades → overhead não compensa

---

## Casos de uso — Ecossistema Runa Systems

### 1. Mapa do vault SÍRIOS
```
/graphify SÍRIOS/
```
Gera grafo de todo o vault: produtos, agentes, projetos, stories — revela lacunas de documentação e clusters temáticos. Útil para ORION auditar cobertura antes de uma sessão intensiva.

### 2. Arquitetura do codebase
```
/graphify c:/runa-systems-global/apps/command-center/src/
```
Mapa de dependências entre componentes React + workers. ALEX usa para onboarding em código não familiar. @architect usa para decisões de refactor.

### 3. Grafo de agentes e responsabilidades
```
/graphify .aiox-core/agents/
```
Visualiza quais agentes existem, suas sobreposições de capacidade, e gaps no time. Útil para ARES/ORION ao desenhar novos squads para clientes RUNA SYSTEMS.

### 4. Base RAG — verificação de cobertura
```
/graphify AKASHA/📚 Alex Hormozi/
```
Antes de indexar a base Hormozi no NotebookLM/Supabase, gera o grafo de conceitos para garantir cobertura completa e identificar áreas subrepresentadas.

### 5. Grafo de produtos — teia Runa
```
/graphify SÍRIOS/📐 Projetos/ --filter "prd"
```
Visualiza relações entre PRDs dos produtos ($QUAD, CREATOR$, SITE$, RUNA SYSTEMS), upsell chains, e dependências de entrega. Útil para @pm/ARES na construção do roadmap.

### 6. Análise de sessão de mentoria/intervenção
```
/graphify "SÍRIOS/🎯 PRODUTOS/RUNA-SYSTEMS/programa/intervencao/"
```
Gera grafo dos temas cobertos por cliente — revela padrões recorrentes, lacunas de ensino, e conexões entre módulos que o cliente ainda não percebeu.

### 7. Modo incremental — atualização contínua do knowledge graph
```
/graphify add SÍRIOS/📅 Diário/2026-04-18.md
```
Adiciona o diário do dia ao grafo existente sem reprocessar todo o vault. ORION pode rodar no `dia:fechar` para manter o grafo sempre atualizado.

---

## Integração com outros agentes

| Agente | Como usa graphify |
|--------|------------------|
| **ORION** | Mapa do vault após `dia:fechar`; auditoria de cobertura de documentação |
| **ALEX** | Research corpus analysis; RAG coverage check antes de indexar |
| **@architect** | Dependency graph de codebase; identificação de circular deps |
| **ARES** | Competitive intelligence graph; produto teia visualização |
| **FREYJA** | Content cluster analysis — quais temas têm cobertura x quais precisam de posts |
| **@dev** | Onboarding em código legado; impacto de refactor |

---

## Instalação

```bash
# Já instalado no .venv do projeto
pip install graphifyy      # PyPI package name
import graphify            # Import name (diferente!)
```

**Verificar:**
```bash
python -c "import graphify; print('OK')"
```

Skill file: `~/.claude/skills/graphify/SKILL.md` (1245 linhas)
CLAUDE.md entry: `graphify — any input to knowledge graph. Trigger: /graphify`

---

## Referências

- Repo original: https://github.com/safishamsi/graphify
- Skill file completo: `~/.claude/skills/graphify/SKILL.md`
- Capability map: `.claude/rules/capability-map.md` → ALEX / ORION rows
