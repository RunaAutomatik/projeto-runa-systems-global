---
date: 2026-05-09
tags: [prompt-instalacao, designer-v3, lucas-pesto, runa-intervencao]
project: runa-systems-global
type: installation-prompt
programa: RUNA INTERVENÇÃO
instrucao: Cole este prompt diretamente no Claude Code dentro do projeto da Pesto
---

# Prompt de Instalação — Designer Agent V3

> **Como usar:** Cole o texto abaixo (entre os separadores `---INÍCIO---` e `---FIM---`)
> diretamente como mensagem no seu Claude Code, dentro da pasta raiz do projeto da Pesto.
> Não precisa editar nada antes de colar — o agente verifica e pergunta o que precisar.

---INÍCIO---

Preciso que você instale o Designer Agent V3 no meu projeto. Os arquivos estão em `artefatos/`. Siga exatamente os passos abaixo, na ordem, sem pular etapas.

## ETAPA 1 — Verificação de pré-requisitos

Antes de mover qualquer arquivo, verifique:

1. **Higgsfield CLI:** Execute `higgsfield --version` e me informe a versão. Se o comando não for encontrado, pare e me avise — não continue sem o CLI instalado.

2. **Autenticação Higgsfield:** Execute `higgsfield auth status`. Se retornar não autenticado, me avise — precisarei fazer login antes de continuar.

3. **Pastas do projeto:** Verifique se existem as pastas:
   - `pesto/brand-kit/` — se não existir, crie com `mkdir -p pesto/brand-kit`
   - `pesto/grade-editorial/` — se não existir, crie com `mkdir -p pesto/grade-editorial`
   - `pesto/briefs/` — se não existir, crie com `mkdir -p pesto/briefs`

4. **Canva MCP (opcional):** Verifique em Claude.ai → Settings → Connectors se o conector Canva está ativo. Se não estiver, a instalação continua normalmente — o agente simplesmente retornará a URL direta das imagens ao invés de fazer upload automático. Para ativar, conecte em canva.com/integrations/claude.

4. **Localizar o designer atual:** Encontre onde está o system prompt do agente de design atual. Procure por arquivos com "designer" no nome em: `agents/`, `.claude/agents/`, raiz do projeto, ou qualquer pasta de agentes. Me liste o que encontrar.

Aguarde minha confirmação antes de prosseguir para a Etapa 2.

---

## ETAPA 2 — Backup dos arquivos V1

Antes de substituir qualquer coisa, crie backups:

1. Crie a pasta `artefatos/_backup-v1/`
2. Copie para lá todos os arquivos `designer-*.md` que encontrou na Etapa 1 (o system prompt principal e todos os tasks)
3. Me confirme quais arquivos foram incluídos no backup

Se não encontrar nenhum arquivo de designer existente, me avise — pode ser que o projeto ainda não tenha a estrutura de tasks.

Aguarde minha confirmação antes de prosseguir para a Etapa 3.

---

## ETAPA 3 — Instalação do agente principal

Substitua o system prompt do designer atual pelo V3:

1. Leia o arquivo `artefatos/designer-agent-v2-system-prompt.md`
2. Copie para onde está o system prompt do designer que você encontrou na Etapa 1
   - Se o arquivo se chama `designer.md`, mantenha o nome `designer.md`
   - Se se chama de outra forma, mantenha o nome original
   - Se não existia nenhum arquivo, crie em `agents/designer.md`

3. **Verificação de conteúdo:** Depois de copiar, confirme que o arquivo destino contém:
   - Bloco YAML com `persona_profile:`
   - Seção `activation-instructions:` com 5 steps
   - Pelo menos 7 entradas em `workflow_definitions:`
   - Seção `dependencies:` com `tool_hierarchy:` e `brand_kit_schema:`

Me confirme que a verificação passou antes de prosseguir.

---

## ETAPA 4 — Instalação dos task files

Instale os 11 task files na pasta `tasks/` do projeto:

Para cada arquivo abaixo, copie de `artefatos/tasks/` para `tasks/`:

| Arquivo origem | Arquivo destino | Ação |
|---------------|----------------|------|
| `artefatos/tasks/designer-criar-soul.md` | `tasks/designer-criar-soul.md` | NOVO (não existia) |
| `artefatos/tasks/designer-gerar-imagem.md` | `tasks/designer-gerar-imagem.md` | SUBSTITUI V1 |
| `artefatos/tasks/designer-gerar-video-curto.md` | `tasks/designer-gerar-video-curto.md` | SUBSTITUI V1 |
| `artefatos/tasks/designer-criar-brief-design.md` | `tasks/designer-criar-brief-design.md` | SUBSTITUI V1 |
| `artefatos/tasks/designer-gerar-brief-carrossel.md` | `tasks/designer-gerar-brief-carrossel.md` | SUBSTITUI V1 |
| `artefatos/tasks/designer-adaptar-formato.md` | `tasks/designer-adaptar-formato.md` | SUBSTITUI V1 |
| `artefatos/tasks/designer-clonar-identidade-cliente.md` | `tasks/designer-clonar-identidade-cliente.md` | SUBSTITUI V1 |
| `artefatos/tasks/designer-criar-variacao.md` | `tasks/designer-criar-variacao.md` | SUBSTITUI V1 |
| `artefatos/tasks/designer-sugerir-pauta.md` | `tasks/designer-sugerir-pauta.md` | NOVO (não existia) |
| `artefatos/tasks/designer-gerar-grade.md` | `tasks/designer-gerar-grade.md` | NOVO (não existia) |

**Regra crítica para os substitutos:** Se o arquivo destino já existir E contiver linhas com `#NN —` (regras numeradas), copie essas linhas antes de substituir e adicione no final do novo arquivo, na seção de regras. Nunca apague regras `#NN` existentes.

Se a pasta `tasks/` não existir no projeto, crie com `mkdir tasks` antes de copiar.

Me confirme quantos arquivos foram instalados e se havia algum com regras `#NN` a preservar.

---

## ETAPA 5 — Instalação das skills

Instale as 2 novas skills na pasta global de skills:

```bash
mkdir -p ~/.claude/skills/higgsfield-generate
cp artefatos/skills/higgsfield-generate/SKILL.md ~/.claude/skills/higgsfield-generate/

mkdir -p ~/.claude/skills/ensaio-fotografico
cp artefatos/skills/ensaio-fotografico/SKILL.md ~/.claude/skills/ensaio-fotografico/
```

Confirme que os dois arquivos foram criados com `ls ~/.claude/skills/higgsfield-generate/` e `ls ~/.claude/skills/ensaio-fotografico/`.

---

## ETAPA 6 — Personalização do agente principal

Agora vamos personalizar o agente para o contexto da Pesto. Leia o arquivo `agents/designer.md` (ou onde foi instalado na Etapa 3) e me responda:

**Pergunta 1:** Qual nome você quer dar ao agente de design? (ex: "Studio", "Canvas", "Pixel", ou qualquer nome que faça sentido para o ecossistema da Pesto)

**Pergunta 2:** Confirme os paths abaixo ou me diga o path correto se for diferente:
- Brand kit dos clientes: `pesto/brand-kit/[cliente]/` → está correto?
- Grade editorial: `pesto/grade-editorial/semana-[N].md` → está correto?

**Pergunta 3:** Algum dos clientes da Pesto já tem um soul.json criado? Se sim, me diga o nome do cliente e o soul_id — vou registrar na seção de dependencies.

Aguarde suas respostas antes de aplicar as personalizações.

---

## ETAPA 7 — Aplicar personalizações

Com base nas respostas da Etapa 6, faça as seguintes substituições no arquivo `agents/designer.md`:

1. Substituir `[NOME_DO_AGENTE]` pelo nome escolhido em todos os lugares onde aparece (greeting, signature, comandos)
2. Confirmar os paths de brand-kit e grade-editorial estão corretos — se não estiver, corrigir
3. Se houver soul_ids conhecidos, adicionar na seção `known_souls:` das dependencies no formato:
   ```yaml
   known_souls:
     - cliente: "[nome]"
       soul_id: "[uuid]"
       trained_at: "[data]"
   ```

Me mostre um diff das alterações antes de salvar.

---

## ETAPA 8 — Verificação final

Execute os seguintes testes de sanidade:

**Teste 1 — Estrutura de arquivos:**
Liste os arquivos em `tasks/` e confirme que todos os 11 arquivos `designer-*.md` estão presentes.

**Teste 2 — Conteúdo do agente:**
Leia `agents/designer.md` e confirme:
- [ ] Nome do agente personalizado (não contém `[NOME_DO_AGENTE]` literal)
- [ ] Path de brand-kit correto (não contém placeholder genérico)
- [ ] Seção `workflow_definitions:` tem 9 entradas
- [ ] Comando `*criar-soul` está listado

**Teste 3 — Regras preservadas:**
Se havia regras `#NN` no backup (Etapa 2), confirme que foram preservadas no novo arquivo `tasks/designer-clonar-identidade-cliente.md`.

**Teste 4 — Skills:**
Confirme que existem `SKILL.md` em:
- `~/.claude/skills/higgsfield-generate/`
- `~/.claude/skills/ensaio-fotografico/`

Me liste o resultado de cada teste com ✅ (passou) ou ❌ (falhou com descrição do problema).

---

## ETAPA 9 — Relatório de instalação

Após todos os testes passarem, gere um relatório no formato:

```
DESIGNER AGENT V3 — INSTALAÇÃO CONCLUÍDA

Data: [data de hoje]
Projeto: Pesto

Arquivos instalados:
✅ agents/designer.md (agente principal — V3)
✅ tasks/designer-criar-soul.md (novo)
✅ tasks/designer-gerar-imagem.md (substituído)
✅ tasks/designer-gerar-video-curto.md (substituído)
✅ tasks/designer-criar-brief-design.md (substituído)
✅ tasks/designer-gerar-brief-carrossel.md (substituído)
✅ tasks/designer-adaptar-formato.md (substituído)
✅ tasks/designer-clonar-identidade-cliente.md (substituído)
✅ tasks/designer-criar-variacao.md (substituído)
✅ tasks/designer-sugerir-pauta.md (novo)
✅ tasks/designer-gerar-grade.md (novo)
✅ ~/.claude/skills/higgsfield-generate/SKILL.md (nova skill)
✅ ~/.claude/skills/ensaio-fotografico/SKILL.md (nova skill)

Personalizações aplicadas:
- Nome do agente: [nome escolhido]
- Brand kit path: pesto/brand-kit/[cliente]/
- Grade editorial path: pesto/grade-editorial/semana-[N].md
- Regras #NN preservadas: [sim/não — quantas]

Backup em: artefatos/_backup-v1/

Comandos disponíveis após reiniciar o Claude Code:
*gerar-imagem [cliente] [descrição]
*gerar-video-curto [cliente] [descrição]
*gerar-carrossel [cliente]  (ou modo autônomo com grade)
*criar-brief-design [cliente]
*adaptar-formato [cliente] [ativo] [formato]
*clonar-identidade [cliente]
*criar-variacao [cliente] [ativo] [tipo]
*criar-soul [cliente]
*sugerir-pauta [cliente]
*gerar-grade [semana-N] [clientes...]
*calibrar [cliente] [regra]
```

---FIM---

---

## Notas para Arthur (não incluir no prompt do Lucas)

- O prompt para na Etapa 1 e na Etapa 6 para aguardar input do Lucas — isso é intencional para evitar substituições cegas
- A Etapa 2 (backup) é não-negociável: preserva o trabalho anterior do Lucas caso algo saia errado
- A regra de preservação de regras `#NN` na Etapa 4 protege as calibrações já feitas pelo Lucas com seus clientes
- Se Lucas não tiver pasta `tasks/` ainda, o prompt cria — o agente detecta a estrutura do projeto antes de agir
- O MCP Higgsfield não é testado automaticamente neste prompt — Lucas deve testar manualmente após a instalação tentando `*criar-soul` com um cliente de teste
