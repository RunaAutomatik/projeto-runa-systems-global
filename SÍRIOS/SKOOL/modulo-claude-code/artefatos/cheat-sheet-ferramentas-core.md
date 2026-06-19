---
date: 2026-04-21
tags: [runa-intervencao, artefato, cheat-sheet, ferramentas, claude-code, s02]
project: runa-systems-global
type: reference
sessao: S02 — †CODE I Ambiente
produto: [[runa-intervencao-sessao-02-tcode-ambiente]]
---

# Cheat Sheet — Ferramentas Core do Claude Code

> Referência rápida para as 6 ferramentas fundamentais.
> Cole no painel lateral enquanto trabalha. Atualiza conforme o squad evolui.

---

## As 6 Ferramentas Core

| Ferramenta | Analogia humana | Função principal | Quando usar |
|-----------|----------------|-----------------|------------|
| **Read** | Abrir e ler um documento | Traz o conteúdo de um arquivo para o contexto do agente | Sempre antes de analisar qualquer arquivo |
| **Write** | Criar um documento novo do zero | Gera um novo arquivo | Criar artefato, relatório, rascunho, template |
| **Edit** | Caneta sobre documento existente | Modifica arquivo existente com precisão cirúrgica | Corrigir, adicionar seção, atualizar campo |
| **Bash** | Terminal direto no sistema | Executa qualquer comando do sistema operacional | Scripts, listagem, automações, consultas |
| **Grep** | Ctrl+F em todos os arquivos ao mesmo tempo | Busca conteúdo específico dentro de arquivos | Encontrar informação numa base de conhecimento |
| **Glob** | Busca de arquivos por nome ou tipo | Lista arquivos que combinam com um padrão | "Quais .pdf existem em docs/"? |

---

## Prompts de Ativação por Ferramenta

### Read
```
Leia o arquivo [nome-do-arquivo] e me dê [o que você quer: resumo / análise / lista de pontos].
```
```
Leia todos os arquivos .md desta pasta e me diga qual foi modificado mais recentemente.
```

### Write
```
Crie um arquivo chamado [nome.md] com o seguinte conteúdo: [conteúdo ou instrução].
```
```
Crie um relatório em [nome.md] com base nas informações que você já tem no contexto.
```

### Edit
```
No arquivo [nome.md], adicione uma seção chamada '[título]' com [conteúdo].
```
```
No arquivo [nome.md], substitua o texto '[texto atual]' por '[texto novo]'.
```
```
No arquivo [nome.md], remova a seção '[título]' completamente.
```

### Bash
```
Liste todos os arquivos desta pasta ordenados por data de modificação.
```
```
Crie a pasta [nome-da-pasta] dentro do diretório atual.
```
```
Execute o script [nome.py] e me mostre o resultado.
```

### Grep
```
Encontre em todos os arquivos desta pasta qualquer menção à palavra '[termo]'.
```
```
Nos arquivos .md desta pasta, encontre todas as linhas que contêm '[padrão]'.
```
```
Busque em [pasta/] todos os arquivos que contenham simultaneamente '[termo1]' e '[termo2]'.
```

### Glob
```
Quais arquivos .pdf existem nesta pasta?
```
```
Liste todos os arquivos que começam com 'proposta-' em qualquer subpasta.
```
```
Quais arquivos foram criados na pasta docs/ nos últimos 7 dias?
```

---

## Regras de Ouro

### Read antes de Edit — sempre
Nunca edite sem ler antes. Se você pular o Read, o agente trabalha sem contexto e produz resultado genérico.

```
ERRADO: "Adicione uma conclusão no arquivo relatorio.md"
CERTO: "Leia relatorio.md e depois adicione uma conclusão baseada no conteúdo"
```

### Write cria, Edit modifica — nunca confunda
Write sempre cria um arquivo novo. Se o arquivo já existe, Write sobrescreve tudo. Use Edit para modificar arquivos existentes sem perder o conteúdo anterior.

```
PERIGO: Write em arquivo existente → apaga tudo que estava lá
SEGURO: Edit em arquivo existente → modifica só o que você pediu
```

### Bash — confirme antes de ações destrutivas
Bash tem acesso ao sistema operacional completo. Em mode Ask, o agente sempre pede confirmação. Em mode Auto, ele executa direto. Nunca coloque em Auto comandos como `rm`, `del`, ou qualquer coisa que apague arquivos.

```
SEGURO em Auto: ls, mkdir, python script.py (leitura/geração)
NUNCA em Auto: rm -rf, del /f, qualquer remoção de arquivo
```

---

## Combinações Frequentes

### Analisar e transformar documento
```
1. Leia [documento]
2. Extraia [o que precisa]
3. Crie um novo arquivo [nome] com [formato de saída]
```

### Atualizar base de conhecimento
```
1. Leia [arquivo-kb.md]
2. Leia [novo-documento] com as informações novas
3. Edite [arquivo-kb.md] adicionando a seção [nova seção] com o conteúdo relevante
```

### Auditoria de pasta
```
1. Use Glob para listar todos os arquivos
2. Para cada arquivo relevante, use Grep para encontrar [padrão específico]
3. Crie um relatório com o que encontrou
```

### Pipeline de proposta
```
1. Leia [briefing do cliente]
2. Leia [template de proposta]
3. Crie proposta-[cliente]-[data].md com base nos dois documentos
```

---

## Atalhos de Terminal

| Atalho | Função |
|--------|--------|
| `/permission ask` | Mudar para mode Ask |
| `/permission auto` | Mudar para mode Auto |
| `/permission explore` | Mudar para mode Explore (só leitura) |
| `/settings` | Abrir editor de configurações |
| `@agente-nome` | Ativar agente específico |
| `Ctrl + C` | Interromper execução em andamento |

---

*Sessão de origem: [[runa-intervencao-sessao-02-tcode-ambiente|S02 — †CODE I · Ambiente]]*
*Relacionado: [[guia-permission-modes|Guia de Permission Modes]]*
