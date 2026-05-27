---
date: 2026-04-18
tags: [plano, infraestrutura, repos, didatico, runa-systems]
project: runa-systems-global
type: plan
status: completed
completed_date: 2026-04-18
---

# Plano de Expansão e Limpeza do Ecossistema
## Versão: para humanos normais entenderem

> Antes de construir o PRD do RUNA SYSTEMS (o documento central do produto),
> precisamos fazer duas coisas: avaliar 13 ferramentas novas e arrumar a casa.
> Este documento explica tudo em linguagem simples.

---

# O QUE ESTAMOS FAZENDO E POR QUÊ

Imagine que você tem uma oficina de trabalho.
Nessa oficina você tem ferramentas, funcionários (agents), processos, e sistemas rodando.

Antes de abrir uma loja maior (o RUNA SYSTEMS PRD), você precisa:
1. **Avaliar 13 ferramentas novas** que aparecerem no mercado — vale a pena comprar? Guardar pra depois? Jogar fora?
2. **Arrumar a oficina atual** — tem coisa quebrada, coisa ocupando espaço à toa, e coisa que estava causando problema sem você saber.

É isso que este plano cobre.

---

# PARTE 1 — AS 13 FERRAMENTAS (REPOS)

> **O que é um "repo"?**
> Um "repositório" (repo) é como uma pasta pública na internet onde alguém compartilhou
> uma ferramenta ou um conjunto de instruções que você pode baixar e usar.
> É como um manual + a ferramenta em si, disponível de graça ou paga no GitHub
> (que é o "Mercado Livre das ferramentas de programação").

---

## 🥇 FERRAMENTAS PARA USAR AGORA (alto valor, baixo esforço)

---

### 🔧 Ferramenta 1 — Princípios Karpathy para o Claude
**Repositório:** andrej-karpathy-skills
**URL:** https://github.com/forrestchang/andrej-karpathy-skills
**Esforço:** 10 minutos | **Custo:** Zero

**O que é:**
Andrej Karpathy é um dos pesquisadores de IA mais respeitados do mundo (ex-Tesla, ex-OpenAI).
Ele observou os erros mais comuns que o Claude (e outros AIs) cometem quando estão programando
e escreveu 4 regras simples para corrigir isso.

**Pensa assim:**
É como se um médico especialista tivesse escrito um manual de boas práticas para um médico júnior.
Você cola essas regras na pasta do projeto e o Claude passa a seguir automaticamente.

**As 4 regras em linguagem simples:**
1. **Pensa antes de agir** — Antes de fazer qualquer coisa, o Claude deve declarar o que entendeu e perguntar se entendeu certo. Não sair fazendo.
2. **Simples é melhor** — Não criar código desnecessariamente complicado. Menos é mais.
3. **Opera como cirurgião** — Só mexe no que foi pedido. Não "aproveita" para mexer em outras coisas.
4. **Define o que é sucesso** — Antes de começar, define como vai saber que terminou.

**Na prática da Runa Systems:**
Hoje o Claude às vezes "aproveita" que está mexendo em um arquivo e muda outras coisas que você não pediu.
Ou interpreta o que você disse de uma forma e vai na frente sem confirmar.
Essas regras corrigem exatamente isso.

**Decisão: ✅ INSTALAR JÁ — essa sessão**
Esforço mínimo, impacto imediato. É copiar texto para um arquivo.

---

### 📚 Ferramenta 2 — Wiki Automática do Conhecimento (AKASHA)
**Repositório:** ai-second-brain-skills
**URL:** https://github.com/NulightJens/ai-second-brain-skills
**Esforço:** 30 minutos | **Custo:** Zero

**O que é:**
Lembra que você tem o AKASHA? Aquela pasta com os ensinamentos do Hormozi, do Brunson, do Ladeira?
Hoje ela é mantida manualmente — alguém precisa ler, organizar e escrever.

Esta ferramenta faz isso automaticamente.

**Pensa assim:**
Imagina que você tem uma pilha de livros, transcrições de cursos e anotações espalhadas.
Esta ferramenta é como ter um assistente que:
1. Lê tudo isso
2. Organiza em páginas interligadas (como uma Wikipedia interna)
3. Percebe quando tem uma contradição ou uma lacuna no conhecimento
4. Se auto-corrige com o tempo

**Na prática da Runa Systems:**
- Você joga a transcrição de uma aula do Hormozi dentro de uma pasta
- O Claude lê, extrai os conceitos importantes, e cria uma página no AKASHA
- Essa página já vem com links para outras páginas relacionadas que já existem
- Quando a FREYJA (agente de conteúdo) precisar de referências, ela consulta essa wiki e já encontra tudo organizado

> **O que é o AKASHA?**
> É o nosso "banco de conhecimento interno". Uma pasta com arquivos de texto
> que contém os frameworks e métodos dos mentores que você estuda.
> Fica em `D:/Runa/runa-systems-global/AKASHA/`.
> É o "cérebro de referência" que os agents consultam quando precisam de estratégia.

**Decisão: ✅ INSTALAR ESSA SEMANA**

---

## 🥈 FERRAMENTAS IMPORTANTES — INSTALAR EM BREVE

---

### 🎙️ Ferramenta 3 — Clone de Voz Local e Gratuito
**Repositório:** voicebox
**URL:** https://github.com/jamiepine/voicebox
**Esforço:** 20 minutos (download + instalação) | **Custo:** Zero (sem custo por uso)

**O que é:**
Hoje você usa o ElevenLabs para gerar voiceovers — a voz do Arthur em vídeos, Reels, aulas.
O ElevenLabs cobra por caracter de texto convertido em voz.
O Voicebox faz a mesma coisa, mas roda no seu computador, sem cobrar nada por uso.

**Pensa assim:**
ElevenLabs = contratar um dublador profissional que cobra por minuto de gravação.
Voicebox = ter um estúdio de dublagem em casa onde você grava quantas vezes quiser sem pagar nada.

**O que ele faz:**
- Clona a voz do Arthur com alguns minutos de áudio de amostra
- Gera voiceovers em qualquer texto que você escrever
- 23 idiomas (português incluído)
- Tem editor de timeline para montar conversas com múltiplas vozes
- Tem efeitos de áudio (reverb, pitch, compressão)
- Tem uma API (uma "tomada" técnica) para conectar com o pipeline automático de conteúdo

**Na prática da Runa Systems:**
- Hoje: MAYA pede ao ElevenLabs → gera voz → cobra R$ X por caracter
- Com Voicebox: MAYA pede ao Voicebox local → gera voz → R$ 0
- Quanto mais conteúdo você produzir, mais você economiza
- Para o programa RUNA SYSTEMS: ensinar clientes a clonar a própria voz é um módulo inteiro de conteúdo com IA

> **O que é uma "API"?**
> É uma "tomada de comunicação" entre dois sistemas.
> Pensa assim: o ElevenLabs tem uma tomada que permite que o nosso sistema
> envie texto e receba áudio de volta automaticamente, sem você apertar nenhum botão.
> O Voicebox também tem essa tomada — então podemos automatizar da mesma forma,
> só que de graça.

**Decisão: ✅ INSTALAR PÓS-PRD (app Windows disponível)**

---

## 📖 ESTUDAR ANTES DE CONSTRUIR O PRD

---

### 🎓 Ferramenta 4 — A Enciclopédia do Claude Code
**Repositório:** claude-code-best-practice
**URL:** https://github.com/shanraisshan/claude-code-best-practice
**Esforço:** 2-3 horas de leitura | **Custo:** Zero

**O que é:**
46 mil pessoas deram estrelas para este repositório (é como 46 mil curtidas no Instagram).
Ele contém 82+ técnicas validadas pelo time da Anthropic (quem faz o Claude) e pela comunidade.

**Por que é importante para você:**
Não é para você ler como programador. É para você entender o que é possível fazer com Claude Code
e usar esse conteúdo como matéria-prima para as aulas do RUNA SYSTEMS.

> **O que é um "repositório com estrelas"?**
> No GitHub, quando alguém acha uma ferramenta útil, dá uma "estrela".
> É o equivalente de curtir uma publicação. 46k estrelas = é muito relevante no mundo tech.

**Tópicos cobertos (traduzidos):**
- Como usar múltiplos agents trabalhando em paralelo (como ter vários funcionários simultaneamente)
- Como criar rotinas automáticas agendadas no Claude Code
- Como fazer o Claude Code controlar o computador (mover o mouse, clicar, preencher formulários)
- Como fazer revisão de código com vários agents ao mesmo tempo
- Como continuar uma sessão de trabalho de outro dispositivo

**Na prática da Runa Systems:**
Este repositório é raw material direto para as aulas pendentes do módulo de Claude Code do programa:
- Aula 1.4 — Skills em profundidade
- Aula 1.5 — MCPs (integrações externas)
- Aula 1.6 — Hooks (automações de eventos)
- Aula 1.7 — Subagents (múltiplos agents simultâneos)

**Decisão: 📚 ESTUDAR PRÉ-PRD** — antes de escrever o PRD do RUNA SYSTEMS

---

## ⏳ FERRAMENTAS PARA O FUTURO (boas, mas não agora)

---

### 🤖 Ferramenta 5 — Agents que Vivem 24/7 (hermes-agent)
**Repositório:** NousResearch/hermes-agent
**URL:** https://github.com/NousResearch/hermes-agent

**O que é:**
Hoje os agents (ORION, HERMES, FREYJA, etc.) só existem quando você abre o Claude Code.
Esta ferramenta permite deployar um agent que fica rodando o tempo todo — como um funcionário
que não dorme e que aprende com cada conversa.

**Pensa assim:**
Hoje o Claude Code é como um consultor que você chama para uma reunião.
O hermes-agent transformaria esses consultores em funcionários fixos 24/7,
atendendo por Telegram, WhatsApp, Discord sem você precisar estar presente.

> **O que é "deploy"?**
> "Deployar" um agent significa colocá-lo em produção num servidor na internet
> para que ele funcione de forma autônoma, mesmo quando seu computador estiver desligado.
> É como "contratar" o agent para trabalhar de forma independente.

**Na prática da Runa Systems:**
- ORION virar um bot no WhatsApp que atende leads de @arthsystems_ automaticamente
- Um "agent de onboarding" para novos alunos do RUNA SYSTEMS rodando 24/7 no Telegram
- Para produtos como $QUAD: o cliente recebe um agent deployado para ele usar no dia a dia

**Por que DEFER (não agora):**
Para deployar um agent 24/7, precisamos de um servidor na internet.
Um servidor é como um computador que fica ligado o tempo todo na nuvem.
Você já tem conta no Railway (onde roda o n8n), então é possível — mas é um passo de infraestrutura que precisa de planejamento.

**⚠️ Pergunta estratégica Q1:** Você quer explorar isso agora ou é infraestrutura futura?

**Decisão: 🔜 DEFER — quando houver servidor dedicado para isso**

---

### 📊 Ferramenta 6 — Análise de Código (GitNexus)
**Repositório:** GitNexus
**URL:** https://github.com/abhigyanpatwari/GitNexus

**O que é:**
Uma ferramenta que lê um projeto de software inteiro e mapeia "quem depende de quem".
É como um organograma do código — você vê o que quebra se mudar uma peça.

**Na prática da Runa Systems:**
Útil quando o Command Center e os workers crescerem em complexidade.
Hoje os projetos ainda são pequenos — não é prioridade.

**Decisão: 🔜 DEFER — quando apps crescerem**

---

### 🎬 Ferramenta 7 — Biblioteca de Animações (gsap-skills)
**Repositório:** greensock/gsap-skills
**URL:** https://github.com/greensock/gsap-skills

**O que é:**
GSAP (GreenSock Animation Platform) é a biblioteca de animações mais usada na web.
É o que faz sites terem aquelas animações suaves e elegantes quando você scrolla ou move o mouse.
Esta ferramenta ensina o Claude a usar GSAP corretamente.

> **O que é uma "biblioteca"?**
> Na programação, uma biblioteca é um conjunto de ferramentas pré-prontas.
> Em vez de criar uma animação do zero, você usa a biblioteca que já tem tudo pronto
> e só personaliza. GSAP é o ElevenLabs das animações — profissional e amplamente usado.

**Na prática da Runa Systems:**
Quando você construir o site do RUNA SYSTEMS ou os produtos SITE$, vai querer animações de qualidade.
GSAP é a ferramenta certa. Mas ainda não chegou essa hora.

**Decisão: 🔜 DEFER — quando SITE$ ou o site do programa for construído**

---

### 📋 Ferramenta 8 — Painel de Controle Multi-Agent (octogent)
**Repositório:** octogent
**URL:** https://github.com/hesamsheikh/octogent

**O que é:**
Um painel visual (tipo dashboard) para gerenciar várias sessões do Claude Code ao mesmo tempo.
Pensa como um gerente de projetos visual onde cada "tentáculo" é um agent diferente trabalhando em paralelo.

**Na prática da Runa Systems:**
Você já tem o Command Center (apps/command-center). Octogent seria uma alternativa ou complemento.
Vale estudar se faz sentido migrar ou integrar — mas não é urgente.

**Decisão: 📚 ESTUDAR PÓS-PRD**

---

### 🛠️ Ferramenta 9 — Coleção de 1.423 Skills
**Repositório:** antigravity-awesome-skills
**URL:** https://github.com/sickn33/antigravity-awesome-skills

**O que é:**
Uma coleção com mais de 1.400 "playbooks" — instruções estruturadas para agents executarem tarefas específicas.
É como uma biblioteca de receitas: em vez de criar do zero, você usa receitas já testadas.

> **O que é um "skill" (ou playbook)?**
> Um skill é um arquivo de instruções que você dá para o agent.
> Ele diz: "quando o usuário pedir X, execute os passos A, B, C na ordem certa."
> É diferente de simplesmente perguntar ao Claude — um skill garante consistência e qualidade.

**Na prática da Runa Systems:**
Não instalar tudo. A estratégia é: navegar o catálogo, selecionar os 15-20 mais relevantes para o nosso contexto, e instalar só esses.

**Decisão: 🎯 SELETIVO — depois do PRD, filtrar os relevantes**

---

# PARTE 2 — LIMPEZA DA CASA (AUDITORIA DE INFRAESTRUTURA)

> Antes de mostrar os problemas, vou explicar como a "casa" funciona.

## Como o Ecossistema Funciona (Explicação Visual)

```
                    ┌─────────────────────────────────┐
                    │         VOCÊ (Arthur)            │
                    │   faz uma pergunta ou pedido     │
                    └──────────────┬──────────────────┘
                                   │
                    ┌──────────────▼──────────────────┐
                    │         CLAUDE CODE              │
                    │  (o "sistema operacional" de IA) │
                    └──────────────┬──────────────────┘
                                   │
           ┌───────────────────────┼───────────────────────┐
           │                       │                       │
     ┌─────▼──────┐        ┌───────▼──────┐        ┌──────▼──────┐
     │   AGENTS   │        │   PLUGINS    │        │    HOOKS    │
     │ (ORION,    │        │ (ferramentas │        │ (automações │
     │  HERMES,   │        │  adicionais) │        │ que disparam│
     │  FREYJA,   │        └──────────────┘        │ sozinhas)   │
     │  ARES...)  │                                └─────────────┘
     └─────┬──────┘
           │
    ┌──────▼─────────────────────────────────┐
    │              MCPs                      │
    │ (conexões com serviços externos)       │
    │ Supabase, Zernio, n8n, Neon...         │
    └────────────────────────────────────────┘
```

**Glossário rápido:**
- **Agent** = funcionário especializado (FREYJA escreve, ARES vende, HERMES automatiza)
- **Plugin** = extensão que adiciona comportamentos ao Claude Code (como extensões do Chrome)
- **Hook** = um gatilho automático. "Quando X acontecer, execute Y automaticamente"
- **MCP** = "tomada de conexão" com serviços externos (como o plugue que conecta na tomada da parede)
- **Skill** = manual de instruções estruturado para um agent executar uma tarefa específica

---

## O QUE ESTÁ QUEBRADO (em ordem de urgência)

---

### 🔴 CRÍTICO 1 — O Hook que Causa o Travamento do Terminal

**O que está acontecendo:**
Existe um "hook" (automação) chamado `gsd-context-monitor.js` que foi configurado para disparar automaticamente toda vez que o Claude usa QUALQUER ferramenta.

**O problema em linguagem simples:**
Imagine que você configurou um alarme para tocar cada vez que alguém abrir qualquer porta da sua casa — a porta da frente, da cozinha, do banheiro, do quarto, do armário, de tudo.
O alarme funciona bem na maioria dos casos. Mas quando você abre o banheiro de madrugada no escuro, o barulho acorda todo mundo e causa caos.

É exatamente isso que está acontecendo:
- O Claude usa ferramentas dezenas de vezes por sessão (ler arquivo, escrever arquivo, buscar código, rodar comando...)
- Esse hook dispara em CADA uma dessas ações
- Dentro do Antigravity (a IDE que você usa), o ambiente técnico é diferente — o hook tenta chamar o Python (uma linguagem de programação) mas não encontra o Python certo
- Isso causa o travamento do terminal (o que você chama de "ptyHost perde heartbeat")

> **O que é ptyHost?**
> É o componente interno do Antigravity que gerencia os terminais integrados.
> Quando ele "perde heartbeat" (batimento cardíaco), é como se o processo de controle
> do terminal ficasse sem sinal e travasse. Resultado: nenhum comando funciona mais.

> **O que é Python aqui?**
> Python é uma linguagem de programação muito usada para scripts de automação.
> Alguns hooks usam Python nos bastidores. O problema é que o Antigravity injeta
> um Python "fantasma" do Microsoft Store no caminho — e esse Python quebrado
> engana o sistema, que fica esperando por algo que nunca vem.

**A solução:**
Adicionar um "filtro" ao hook para que ele só dispare quando realmente necessário — tipo só quando você escreve ou edita arquivos, não quando está apenas lendo ou buscando.

**Duas opções:**
- Opção A: Adicionar o filtro (mantém a funcionalidade, reduz o problema em ~80%)
- Opção B: Desligar o hook temporariamente até resolver o problema do Python

**⚠️ Pergunta estratégica Q3:** Qual das duas opções prefere?

---

### 🔴 CRÍTICO 2 — Conexão com o Zernio Expirada

**O que é o Zernio?**
É o serviço que conecta o Claude às suas redes sociais (Instagram, WhatsApp, etc.) para agendamento de posts e automações de comentários.

**O que está acontecendo:**
A "senha de acesso" (token de autenticação) que o Claude usa para falar com o Zernio expirou.
É como se a sua chave de casa tivesse validade e precisasse ser renovada.

**Consequência:**
Qualquer comando que precise do Zernio (publicar post, verificar comentário, etc.) vai falhar silenciosamente ou dar erro.

**Solução:**
Renovar o token rodando um comando de re-autenticação na próxima sessão.
Precisa ser feito logo — mas é rápido (menos de 2 minutos).

---

### 🟡 ALTO 1 — A Senha do n8n Também Expirou

**O que é o n8n?**
É o sistema de automações que roda no Railway (um servidor na nuvem). O HERMES usa o n8n para criar e executar fluxos de automação — sequências de ações automáticas encadeadas.

> **O que é o Railway?**
> É uma plataforma de nuvem onde você hospeda aplicações.
> Pensa como um "servidor alugado na internet". O n8n da Runa Systems roda lá.

**O que aconteceu:**
A "senha temporária" (JWT token) que o Claude usa para falar com o n8n expirou em 16 de abril (há 2 dias).

**Consequência:**
Qualquer workflow do n8n chamado pelo Claude vai falhar.

**Solução:**
Gerar uma nova chave de API no painel do n8n no Railway e atualizar o arquivo de configuração.
Você precisa fazer esse passo no painel do Railway — eu faço o resto.

---

### 🟡 ALTO 2 — Um Arquivo de Automação Sem Casa

**O que aconteceu:**
Existe um arquivo chamado `precompact-session-digest.cjs` dentro da pasta de automações do projeto.
Ele foi criado mas nunca foi "registrado" — o Claude não sabe que ele existe.

**A analogia:**
É como ter um funcionário contratado que aparece no prédio todo dia mas nunca foi colocado no organograma. Ele está lá mas ninguém sabe o que ele faz nem para quem ele reporta.

**Solução:**
Duas opções: registrar oficialmente para ele ser útil, ou demitir (deletar) se não faz falta.

---

### 🟡 ALTO 3 — Um App Novo Não Está no Controle de Versão

**O que aconteceu:**
O app `lp-runa` (aparentemente uma landing page do RUNA SYSTEMS) foi criado mas não foi "salvo" no Git.

> **O que é o Git?**
> Git é o sistema de controle de versão. É como um histórico de "Ctrl+Z" para o projeto inteiro.
> Cada vez que você faz um commit (salva no Git), uma fotografia do estado atual é tirada.
> Se algo quebrar, você volta para a fotografia anterior.
> O que não está no Git não tem histórico — se perder, perdeu.

**Solução:**
Ou adicionamos ao Git (se é trabalho ativo), ou adicionamos ao .gitignore (se é temporário).

---

## O QUE ESTÁ BOM (não precisa mudar agora)

✅ **Project hooks com filtro:** `code-intel-pretool` e `post-tool-format` — ambos têm filtros corretos e timeouts adequados
✅ **Skills globais (54):** Todos organizados e mapeados para agents corretos
✅ **Skills do projeto (9):** Todos relevantes para o workflow AIOX
✅ **notebooklm-mcp:** Ativo e funcionando (ALEX usa para pesquisa)
✅ **Workers:** content-worker (porta 3001) e instagram-worker (porta 3000) funcionando
✅ **Scripts:** Carousel, dia:abrir/fechar todos funcionando

---

## PLUGINS — O QUE TEMOS E O QUE FAZER

> **O que é um plugin?**
> Um plugin é uma extensão instalada no Claude Code que adiciona comportamentos, estilos
> ou capacidades novas. É como extensões do navegador — cada uma adiciona algo diferente.

**Os 12 plugins ativos:**

| Plugin | O que faz | Status |
|--------|-----------|--------|
| agent-sdk-dev | Verifica apps feitos com SDK de agents | ✅ Manter |
| code-review | Revisão automática de código | ✅ Manter |
| commit-commands | Facilita commits no Git | ✅ Manter |
| explanatory-output-style | Modo explicativo nas respostas | ⚠️ Ver Q4 |
| feature-dev | Framework de desenvolvimento de features | ✅ Manter |
| frontend-design | Auxilia design de interfaces | ✅ Manter |
| hookify | Cria hooks a partir de conversas | ✅ Manter |
| learning-output-style | Modo aprendizado nas respostas | ⚠️ Ver Q4 |
| plugin-dev | Desenvolve novos plugins | ✅ Manter |
| pr-review-toolkit | Revisão de Pull Requests | ✅ Manter |
| ralph-loop | ❓ Não identificado | ⚠️ Q5 |
| security-guidance | Orientação de segurança | ✅ Manter |
| cli-anything | Permite usar CLIs como skills | ✅ Manter |

**⚠️ Pergunta estratégica Q4:** `explanatory-output-style` e `learning-output-style` estão ambos ativos ao mesmo tempo. É isso que você quer (os dois behaviors combinados), ou prefere escolher só um modo padrão?

**⚠️ Pergunta estratégica Q5:** Você conhece e usa ativamente o plugin `ralph-loop`? Não encontrei um caso de uso claro no nosso workflow — pode ser um plugin instalado por curiosidade que não é mais necessário.

---

# RESUMO VISUAL — O QUE FAZER E QUANDO

```
FEITO (sessão 2026-04-18):
──────────────────────────
  ✅ Karpathy principles → merged no CLAUDE.md
  ✅ gsd-context-monitor → filtro aplicado
  ✅ ralph-loop → removido dos plugins
  ✅ lp-runa → já estava correto como submódulo git
  
REQUER SUA AÇÃO (você faz):
────────────────────────────
  🔴 Renovar token Zernio → claude.ai Settings → Integrations → Zernio → Reconnect
  🟡 Renovar token n8n → Railway → Settings → API Keys → Create → me passa a chave
  🟡 Deletar precompact-session-digest.cjs manualmente (arquivo órfão)

ESTA SEMANA:
────────────
  📚 ai-second-brain-skills → instalar no AKASHA (30 min)
  📖 Estudar claude-code-best-practice → material para o PRD

APÓS O PRD RUNA SYSTEMS:
─────────────────────────
  🎙️ Instalar Voicebox desktop (economiza ElevenLabs)
  🎯 Filtrar antigravity-awesome-skills (15-20 skills relevantes)
  📊 Estudar Octogent vs Command Center

FUTURO (quando tiver servidor):
─────────────────────────────
  🤖 Hermes-agent → agents persistentes 24/7
  📊 GitNexus → quando apps crescerem
  🎬 gsap-skills → quando SITE$ começar
```

---

# DECISÕES TOMADAS E PENDENTES

## ✅ Resolvido

**Q2 — Bot de outreach Instagram (setter-bot):** ✅ DESCARTADO
Apenas automação reativa: pessoa comenta → recebe DM → link liberado só se for seguidor da página. Sem outreach proativo.

**Q3 — Fix do travamento do terminal:** ✅ APLICADO
Filtro `"matcher": "Write|Edit|Bash"` adicionado ao hook `gsd-context-monitor.js`.
Hook agora só dispara em escrita/edição de arquivos e comandos bash — reduz ~80% das triggers. Ativo imediatamente.

**Q4 — Modo das respostas:** ✅ MANTER OS DOIS
Explanatory + Learning juntos funcionando bem. Continua como está.

**Q5 — Plugin ralph-loop:** ✅ REMOVIDO
Sem caso de uso no contexto Runa Systems (conteúdo, agents, produtos). Removido de `settings.json`.

**Ferramenta 1 — Karpathy principles:** ✅ INSTALADO
Merged em `.claude/CLAUDE.md` como seção `<!-- KARPATHY-GUIDELINES-START/END -->`. Ativo desde sessão 2026-04-18.

**lp-runa no git:** ✅ JÁ ESTAVA CORRETO
Verificado: `apps/lp-runa` já estava configurado como submódulo git com modo `160000` e `.gitmodules` apontando para `https://github.com/RunaAutomatik/LPRuna.git`. Nenhuma ação necessária.

## ⏳ Pendente

**Q1 — Agents 24/7 (hermes-agent):**
Defer confirmado. Volta ao radar quando houver servidor dedicado no Railway.

**Token Zernio expirado:** ⚠️ REQUER AÇÃO MANUAL
Zernio é integração nativa do claude.ai — não está no `.mcp.json`.
Renovar em: claude.ai → Settings → Integrations → Zernio → Reconnect.

**Token n8n expirado (16/04):** ⚠️ REQUER AÇÃO MANUAL
JWT expirou. Para renovar: acessar `https://primary-production-bae40.up.railway.app` → Settings → API Keys → Create → passar a chave → eu atualizo `.mcp.json`.

**precompact-session-digest.cjs:** ⚠️ ARQUIVO ÓRFÃO — DELETAR MANUALMENTE
Localização: `D:/Runa/runa-systems-global/.claude/hooks/precompact-session-digest.cjs`
O runner que ele dependia (`.aiox-core/hooks/unified/runners/precompact-runner.js`) não existe.
Arquivo inativo e quebrado. Deletar via Explorer ou terminal.
