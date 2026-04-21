---
date: 2026-04-21
tags: [runa-intervencao, mentoria, sessao-06, squad, deploy, hooks, worker, construtor, rpg-card]
project: runa-systems-global
type: lesson-structure
fase: 3 — SQUAD$
titulo-rpg: CONSTRUTOR 🏗️ — desbloqueado em S06
anterior: sessao-05-squad-agentes
proximo: sessao-07-mind-base-conhecimento
---

# Runa Intervenção — Session 06: SQUAD$ III — Deploy

> **Purpose:** Lançar o squad em operação real contínua. O cliente configura hooks que automatizam comportamentos do ambiente, cria o primeiro worker e integra o squad com 1–2 ferramentas externas. Ao final, o squad opera 48h sem intervenção manual e o cliente desbloqueia o título CONSTRUTOR.
> **Output:** Hooks pre/post-tool ativos + 1 worker funcional + integração com ferramenta externa + 48h de log de operação.
> **Template:** This structure serves ALL future Runa Intervenção clients — S06 is always SQUAD$ III.

---

## Session Structure (90–120 min)

### BLOCK 1 — Framing (10 min)

**Objective:** Fazer o cliente entender a diferença entre um squad que precisa ser acionado e um squad que age.

**Key message to deliver:**

> "Em S05 você treinou o squad. Mas ainda está no centro de tudo — você aciona, você decide, você move a tarefa de um agente para o outro. Deploy significa que parte disso acontece sem você. Hooks fazem o ambiente reagir automaticamente. Workers fazem processos rodarem sem você estar na conversa. Essa é a diferença entre ter um assistente que obedece e ter um sistema que opera."

**The critical principle:**

Deploy não é uma configuração técnica. É uma mudança de papel:

```
S04–S05: Operador ↔ Agente (conversa direta)
S06+: Operador → Sistema → Agente → Resultado
```

O operador passa a definir regras, não executar passos.

**Framing de RPG:** "O FERREIRO forjou as ferramentas. O CONSTRUTOR coloca a estrutura de pé. Depois de S06, o sistema não depende de você para operar — depende das regras que você definiu."

---

### BLOCK 2 — Hooks: O Ambiente que Reage (25 min)

**Objective:** O cliente configura hooks para automatizar comportamentos recorrentes do ambiente Claude Code.

**What hooks are:**

Hooks são comandos shell que o Claude Code executa automaticamente em resposta a eventos — antes ou depois de uma ferramenta ser usada. Eles transformam o ambiente de passivo para reativo.

```
Sem hook:  Você executa → resultado aparece → você age
Com hook:  Você executa → hook age → resultado contextualizado aparece → você age com mais informação
```

**4 hook events:**

| Evento | Quando dispara | Uso típico no squad |
|--------|---------------|---------------------|
| `PreToolUse` | Antes de qualquer ferramenta | Validar, enriquecer contexto, bloquear ação |
| `PostToolUse` | Após execução de ferramenta | Notificar, registrar, disparar próximo passo |
| `UserPromptSubmit` | Ao enviar qualquer mensagem | Injetar contexto do negócio automaticamente |
| `Stop` | Ao terminar uma resposta | Notificar operador, salvar log |

**Hook configuration (settings.local.json):**

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Write|Edit",
        "hooks": [
          {
            "type": "command",
            "command": "echo '[PRE-WRITE] Verificando escopo antes de editar arquivo...' >&2"
          }
        ]
      }
    ],
    "PostToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "echo '[POST-BASH] Comando executado — verificar log' >&2"
          }
        ]
      }
    ],
    "Stop": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "[caminho-para-script-notificacao]"
          }
        ]
      }
    ]
  }
}
```

**3 hooks obrigatórios para o squad (implementar ao vivo):**

**Hook 1 — Stop notification**

Notifica o operador quando o squad termina de responder.

```json
"Stop": [{"hooks": [{"type": "command", "command": "node ~/.claude/hooks/stop-notify.js"}]}]
```

Prático para operação em background: o cliente não precisa ficar olhando o terminal.

**Hook 2 — UserPromptSubmit enrichment**

Injeta automaticamente o contexto do negócio em cada mensagem enviada.

```json
"UserPromptSubmit": [{"hooks": [{"type": "command", "command": "node ~/.claude/hooks/inject-context.js"}]}]
```

Útil quando o cliente abre uma nova sessão e não quer repetir o contexto a cada vez.

**Hook 3 — Log de operação automático**

Registra cada interação no Log de Operação do CLAUDE.md sem precisar fazer manualmente.

```json
"PostToolUse": [{"matcher": "Write|Edit", "hooks": [{"type": "command", "command": "node ~/.claude/hooks/log-operation.js"}]}]
```

**Live exercise:** O cliente escolhe 1 dos 3 hooks, implementa ao vivo e verifica funcionamento.

---

### BLOCK 3 — Primeiro Worker (25 min)

**Objective:** O cliente cria o primeiro processo que roda sem ele estar na conversa.

**O que é "deploy" no AIOX:**

No contexto do AIOX, o squad está "deployed" assim que os arquivos existem na estrutura `squads/[nome-do-squad]/` e os agentes respondem a `@[nome-do-agente]`. Não há um servidor para ligar nem uma configuração especial. O "deploy" aqui tem dois significados práticos:

1. **Local:** Os arquivos estão no projeto → o squad opera neste ambiente
2. **Compartilhado:** `@devops *push` envia o squad para o repositório remoto → qualquer membro da equipe que clonar o projeto tem acesso ao mesmo squad

O que construímos hoje (hooks + worker + integração) são as peças que transformam o squad de "funcional" para "autônomo".

---

**What a worker is:**

Um worker é um processo automatizado que executa uma tarefa repetida sem intervenção manual. No contexto do squad, um worker é uma sequência de comandos e instruções pré-definidas que produz um resultado esperado.

```
Conversa com agente:  Você → Agente → Você avalia → Agente refina → ...
Worker:               Trigger → Agente executa sequência → Resultado salvo → Você revisa
```

**Worker anatomy:**

```markdown
# Worker — [Nome]

## Trigger
Quando este worker deve rodar (cron, evento, solicitação manual).

## Input
O que o worker precisa para começar (dados, parâmetros, arquivos).

## Sequência
1. @[agente] [comando] — [o que produz]
2. @[agente] [comando] — [o que usa do passo anterior]
3. Salvar output em [local]

## Output
O que fica disponível quando o worker termina.

## Frequência
Diário / Semanal / Por evento
```

**Workers mais comuns por perfil:**

| Perfil | Worker | Trigger | Output |
|--------|--------|---------|--------|
| Consultor | Diagnóstico semanal | Todo domingo | Prioridades da semana |
| Criador de conteúdo | Brief de conteúdo | Toda segunda | 5 ideias de post + captions |
| Agência | Relatório de status | Sexta-feira | Status de todos os projetos ativos |
| Produto digital | Onboarding de novo cliente | Novo cadastro | Sequência de e-mails + acesso |

**Live exercise — criar o primeiro worker ao vivo:**

1. Identificar processo repetido que o cliente faz toda semana (mínimo 30 min, pelo menos 2 passos)
2. Mapear os passos exatos (quais comandos, em qual agente, em qual ordem)
3. Criar o arquivo de worker em `squads/[nome-do-squad]/workers/[nome-worker].md`
4. Executar o worker manualmente uma vez para validar
5. Verificar se o output é usável sem revisão

**Key rule:**

> "Um worker é bom quando você consegue não olhar para ele no meio. Se você precisa intervir para corrigir ou completar algum passo, o worker não está pronto — volte e defina melhor a sequência ou o contexto do agente."

---

### BLOCK 4 — Integração com Ferramenta Externa (15 min)

**Objective:** O squad passa a trabalhar com dados do ambiente real do cliente, não apenas com o que o cliente digita na conversa.

**What external integration means at this stage:**

Integração em S06 é intencional e simples: uma ferramenta que já existe no negócio do cliente começa a fornecer input ou receber output do squad.

**Não é:**
- Construir uma API
- Configurar um webhook complexo
- Implementar n8n (isso vem em S15–S16 — Automações I/II)

**É:**
- Conectar um arquivo Google Sheets como fonte de dados para um agente
- Salvar output de agente direto em pasta Google Drive
- Usar dados de uma planilha existente como input de diagnóstico
- Criar um doc Google com o output de um worker

**Integration pattern (Tier 1 — simples, sem código):**

```bash
# Ler dados de spreadsheet e passar para agente
gws sheets spreadsheets values get \
  --params '{"spreadsheetId":"[ID]","range":"A:Z"}' \
  | @ceo-neural *diagnostico

# Salvar output de agente no Drive
@ceo-neural *plano > /tmp/plano-semana.md
gws drive files create --json '{"name":"Plano Semana [DATA]","parents":["[FOLDER-ID]"]}' \
  --upload /tmp/plano-semana.md
```

**Integration pattern (Tier 2 — via arquivo local):**

```
1. Exportar dado da ferramenta → arquivo .csv ou .md local
2. Agente lê o arquivo com Read tool
3. Agente processa e entrega resultado
4. Worker salva resultado onde o cliente usa
```

**Recommended first integration by profile:**

| Perfil | Ferramenta | O que integra |
|--------|-----------|---------------|
| Consultor | Google Drive | Worker salva relatório semanal em pasta do cliente |
| Criador | Google Sheets | Lista de pautas/temas como input do Brief de Conteúdo |
| Agência | Google Sheets | Status de projetos como input do Diagnóstico Semanal |
| Produto | Google Drive | Output de onboarding salvo em pasta do aluno |

**Live exercise:** Identificar 1 ferramenta que o cliente já usa + 1 ponto de integração simples. Implementar ao vivo.

---

### BLOCK 5 — 48h de Operação e Log (10 min)

**Objective:** O cliente entende como monitorar o squad em operação real e como o log alimenta a evolução futura dos agentes.

**What 48h operation means:**

Não é deixar o squad rodar sem olhar por 48h. É:
- O squad opera com o mínimo de intervenção manual possível
- Pelo menos 1 worker roda com sucesso sem intervenção
- O operador monitora o log, não o chat
- Problemas encontrados são registrados, não apenas corrigidos

**Log structure review:**

```markdown
## SQUAD — Log de Operação

| Data | Agente | Tarefa | Resultado | Observação |
|------|-------|-------|-----------|-----------|
| 2026-MM-DD | @ceo-neural | diagnostico semanal | concluído | priorizou X sem ser pedido — ajustar critério |
| 2026-MM-DD | @copy-neural | legenda post semana | parcial | precisou de revisão no CTA — revisar output_format |
| 2026-MM-DD | Worker-brief | brief semanal conteúdo | concluído | rodou sem intervenção ✅ |
```

**Monitoring rules:**

```
O que você monitora:      O log de operação (não o chat)
O que você registra:      Desvios do esperado — não todo output
O que você corrige:       Erros que se repetem (não erros únicos)
O que você ignora:        Output perfeito — não precisa de registro
```

**Permission mode upgrade:**

Agentes que executaram a mesma tarefa corretamente 3+ vezes consecutivas em S05 podem ser movidos para modo Auto em S06.

O modo de permissão no Claude Code funciona no nível da **sessão**, não por agente. Para alternar:

```
Opção 1 — Sessão específica: no início da conversa com o agente, use o comando /auto
Opção 2 — Padrão global: editar settings.json com "defaultPermissionMode": "auto"
```

A distinção prática para o squad:
- **Ask** para agentes novos ou tarefas não validadas ainda
- **Auto** para agentes já calibrados executando tarefas repetidas
- **Explore** para auditorias (revisar CLAUDE.md, verificar arquivos, sem executar ações)

Documente no CLAUDE.md do squad quais agentes já foram validados para Auto — assim qualquer operador do squad sabe onde pode acelerar.

**Key message:**

> "O log não é burocracia. É a memória do squad. Em S08 você vai usar esse log para atualizar os prompts de cada agente com base no que funcionou e no que não funcionou. Sem log, você tem um squad que nunca aprende."

---

### BLOCK 6 — Desbloqueio do Título + Próxima Fase (10 min)

**DESAFIO S06:**

```
Antes de concluir S06:

1. HOOKS: Pelo menos 2 hooks ativos e funcionando
   (Stop notification obrigatório + 1 livre)

2. WORKER: Pelo menos 1 worker executado sem intervenção manual
   (arquivo worker criado + rodou 1 vez completo)

3. INTEGRAÇÃO: 1 ferramenta externa conectada
   (recebendo input OU enviando output do squad)

4. 48H DE OPERAÇÃO: Squad operou 48h com log
   (mínimo de 5 entradas no log, pelo menos 1 worker incluído)

5. MODO AUTO: Pelo menos 1 agente validado em modo Auto
   (com critério documentado no CLAUDE.md do squad)
```

**🏗️ TÍTULO DESBLOQUEADO: CONSTRUTOR**

> "Você construiu o squad. As ferramentas existem. O time opera. A estrutura está de pé. Isso separa os 5% que realmente implementam dos 95% que ficam no plano."

**O que muda a partir de agora:**

```
Antes de S06: Você é o executor que usa agentes
Depois de S06: Você é o arquiteto que define o que o sistema faz
```

**Próxima fase — MIND$:**

> "Em S07 você dá memória ao squad. Hoje ele sabe fazer. Em S07 ele vai saber *o que funcionou* — para o seu negócio, com o seu ICP, nos seus processos. A diferença entre um agente que executa e um agente que aprende é a base de conhecimento."

---

## Facilitator Notes

### Sessão mais técnica do programa

S06 envolve configuração de hooks e integração com ferramentas externas. O facilitador precisa:
- Ter testado os 3 hooks antes da sessão com um squad próprio
- Conhecer os erros comuns na configuração do `settings.local.json`
- Ter o padrão `gws` de integração Google testado e pronto

**Most common errors in S06:**

| Erro | Causa | Correção |
|------|-------|----------|
| Hook não dispara | Path do script errado no settings.json | Usar caminho absoluto, não relativo |
| Hook dispara mas não faz nada | Script sem permissão de execução | `chmod +x [script]` |
| Worker para no meio | Agente não tem contexto para continuar | Adicionar contexto do negócio como input do worker |
| Integração com Google falha | gws não autenticado na sessão | `gws auth status` antes da sessão |

**Timing adjustments:**

| Client profile | Block 2 | Block 3 | Block 4 |
|----------------|---------|---------|---------|
| Técnico | 20 min | 30 min | 20 min |
| Não técnico | 30 min | 20 min | 10 min |
| Agência (squad complexo) | 25 min | 25 min | 20 min |

### Red flags

- Cliente não tem tarefa repetida para virar worker → Voltar ao Worksheet 1B, identificar processos D/C
- Hooks não funcionam após 15 min de tentativa → Usar versão simplificada (stop notification apenas) e avançar; resolver assíncrono
- Cliente não completou desafio de S05 (sem log, sem handoff) → Não avançar para BLOCK 3. Completar S05 primeiro.

---

## Session Artifacts

| Artefato | Quando usar | Arquivo |
|----------|------------|---------|
| Template de Worker | Block 3 — criar primeiro worker | [[template-worker]] |
| Guia de Hooks | Block 2 — referência de configuração | [[guia-hooks-squad]] |
| Checklist de Deploy | Antes de concluir S06 | [[checklist-deploy-squad]] |

---

## Connections

- **Anterior:** [[runa-intervencao-sessao-05-squad-agentes|S05 — SQUAD$ II · Agentes]]
- **Próxima:** [[runa-intervencao-sessao-07-mind-base-conhecimento|S07 — MIND$ I · Base de Conhecimento]]
- **Título desbloqueado:** 🏗️ CONSTRUTOR
- **Artefatos:** [[]] — pasta com todos os entregáveis desta fase
