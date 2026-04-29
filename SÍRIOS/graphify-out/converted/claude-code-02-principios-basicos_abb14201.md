<!-- converted from claude-code-02-principios-basicos.docx -->

# Princípios Básicos do Claude Code — 20 Conceitos Essenciais
Módulo Claude Code · Aula 1.2
Esta aula mapeia os 20 conceitos fundamentais que você precisa conhecer para operar o Claude Code com fluência — dos mais básicos aos mais avançados. Cada conceito está explicado no nível certo: sem simplificar demais, sem complicar desnecessariamente.
## Por que aprender esses conceitos?
A maioria das pessoas usa o Claude Code como um chatbot glorificado. Quem conhece esses 20 conceitos usa como um sistema de orquestração de agentes que opera o computador por completo.
A diferença de resultado entre os dois grupos é enorme.
## Nível 1 — Básico (Conceitos 1–8)
### 1. Terminal
O terminal é uma interface de texto para o seu computador. Em vez de clicar em pastas e arquivos com o mouse, você digita comandos.
Os primeiros computadores da história só tinham terminal — a interface gráfica (com cliques) foi inventada depois. O terminal continua sendo a forma mais direta e poderosa de interagir com um computador.
Exemplos de comandos básicos:
cd pasta-do-projeto    # entrar em uma pasta
ls                     # listar arquivos da pasta atual
pwd                    # mostrar em qual pasta você está agora
O Claude Code opera pelo terminal. Ele usa o terminal para criar arquivos, rodar scripts, interagir com APIs e executar qualquer ação no seu computador.
### 2. Agente
Um chatbot normal responde texto. Um agente executa ações.
O Claude Code é um agente: ele não só te diz "crie uma pasta assim" — ele abre o terminal, roda o comando, cria a pasta e confirma que funcionou.
A diferença está nas ferramentas (próximo conceito). Agentes têm ferramentas que permitem agir no mundo real — ler arquivos, escrever código, acessar APIs, navegar na web.
### 3. Prompt
O prompt é o comando que você envia para o Claude Code responder ou agir.
Pode ser uma pergunta, uma instrução ou uma solicitação de ação:
- "Explique como funciona essa função" — prompt de análise
- "Crie um componente de botão em React" — prompt de criação
- "Encontre todos os arquivos .ts que usam useEffect" — prompt de busca
A qualidade do prompt determina a qualidade do resultado. Prompts vagos geram resultados vagos.
### 4. Tools (Ferramentas)
Tools são os instrumentos que o Claude Code usa para agir. Quando você envia um prompt, o Claude decide qual ferramenta usar para completar a tarefa.

Exemplo prático: você pede "crie a pasta teste e dentro dela o arquivo teste.ts". O Claude usa a tool Bash para rodar mkdir teste && touch teste/teste.ts. Você não escreveu nenhum comando — ele decidiu e executou.
### 5. Context Window (Janela de Contexto)
A context window é a memória de curto prazo do Claude. Ela mede a quantidade de informação que o modelo consegue processar de uma vez.
Quanto maior a janela de contexto, mais coisas o Claude consegue "lembrar" dentro de uma mesma sessão — código que você mostrou, decisões que foram tomadas, arquivos que foram lidos.
Quando a janela de contexto enche, o desempenho cai. O modelo começa a "esquecer" coisas do início da conversa.
Gestão prática: use /clear para começar uma sessão nova e /compact para resumir a conversa quando sentir que está pesada.
### 6. Tokens
Tokens são a unidade de medida da IA. Tudo que existe dentro da janela de contexto é medido em tokens — suas perguntas, as respostas do Claude, os arquivos que ele leu, as ferramentas que ele usou.
Referência de proporção: 1 token ≈ 4 caracteres de texto.
Tokens têm dois usos práticos:
- Capacidade: a janela de contexto tem um limite em tokens (ex: 200k tokens no Sonnet)
- Custo: você paga por tokens usados — tanto os de entrada (input) quanto os de saída (output)
Gerenciar tokens bem = sessões mais eficientes e contas menores.
### 7. Models (Modelos)
O Claude Code dá acesso a diferentes modelos da Anthropic, cada um com tradeoffs de inteligência, velocidade e custo:

Para ver os modelos disponíveis: claude models
### 8. Permissions (Permissões)
Permissões controlam o quanto o Claude age de forma autônoma versus o quanto ele pede sua aprovação antes de agir.
Para alternar entre os modos, pressione Shift + Tab dentro de uma sessão:

Use Auto quando você está confortável com a tarefa e quer velocidade. Use Ask quando está explorando algo novo ou uma operação arriscada (deletar arquivos, fazer commits, etc.).
## Nível 2 — Intermediário (Conceitos 9–15)
### 9. /clear
O comando /clear zera completamente a janela de contexto e começa uma sessão nova do zero.
Quando usar: ao terminar uma tarefa e começar outra diferente. Não carregar contexto desnecessário da tarefa anterior melhora a performance na tarefa nova.
/clear
### 10. /compact
O comando /compact faz o Claude resumir toda a conversa atual em poucos tokens e continuar a sessão com esse resumo como contexto.
Quando usar: quando a conversa ficou longa e você quer continuar sem perder o fio — mas também sem desperdiçar tokens com tudo que já foi resolvido.
/compact
Diferença do /clear: o clear descarta tudo. O compact preserva o essencial de forma comprimida.
### 11. CLAUDE.md
O CLAUDE.md é o arquivo de memória permanente do seu projeto. Ele é lido automaticamente toda vez que você inicia uma sessão do Claude Code na pasta do projeto.
Serve para comunicar ao Claude:
- Como o projeto está organizado
- Quais tecnologias e padrões você usa
- O que ele pode e não pode fazer sem permissão
- Regras e preferências específicas do projeto
Como criar: claude init na pasta do projeto.
Regra crítica: mantenha o CLAUDE.md curto e preciso. Cada linha que você adiciona consome tokens do contexto antes da conversa começar. Informações detalhadas e específicas vão melhor em skills (carregadas sob demanda).
### 12. Thinking Effort (Esforço de Raciocínio)
O thinking effort controla a quantidade de tokens que o Claude investe em raciocínio interno antes de responder.

Como setar:
claude --effort max "Analise a arquitetura desse sistema e identifique vulnerabilidades"
O padrão é auto — o Claude decide sozinho o quanto pensar dependendo da complexidade do que foi pedido.
### 13. Ultra Think
O "ultra think" é uma instrução especial que você inclui diretamente no prompt para dizer ao Claude que aquela tarefa específica exige o máximo de raciocínio possível.
Como usar: escreva ultra think em algum lugar do prompt:
ultra think — analise esse código e me diga se existe algum race condition
O Claude vai dedicar muito mais processamento antes de responder. Use para problemas difíceis onde a qualidade da análise importa mais que a velocidade.
### 14. Slash Commands (Comandos de Barra)
Slash commands são atalhos de prompt salvos. Em vez de redigitar um prompt longo toda vez, você salva ele como um comando com / e reutiliza com uma palavra.
Como funciona:
- Você cria um arquivo .md dentro de .claude/commands/ (ou ~/.claude/commands/ para uso global)
- O conteúdo desse arquivo é o prompt que será executado
- Para usar: /nome-do-comando
Exemplo: um comando /revisar que sempre executa "Revise esse código buscando bugs, violações de boas práticas e oportunidades de refatoração simples. Seja direto."
Slash commands podem ter argumentos (variáveis que você passa na hora de chamar), tornando-os ainda mais flexíveis.
### 15. Skills (Playbooks)
Skills são conjuntos de instruções que ficam armazenadas em arquivos e são carregadas sob demanda — apenas quando você precisa delas.
A diferença crucial com o CLAUDE.md:

Exemplo: uma skill de frontend-design com 200 linhas de instruções sobre como construir UI só é carregada quando você vai trabalhar no frontend. Se estiver mexendo no banco de dados, ela não existe no contexto.
Skills são a forma correta de expandir o Claude sem lotar a janela de contexto com tudo ao mesmo tempo.
## Nível 3 — Avançado (Conceitos 16–20)
### 16. Hooks
Hooks são automações que rodam automaticamente em resposta a eventos dentro do Claude Code.
Analogia: é como o Zapier ou o n8n, mas dentro do Claude Code. "Toda vez que acontece X, faça Y."
Eventos disponíveis para hooks:

Exemplos de uso:
- Executar um linter automaticamente depois de cada edição de arquivo
- Enviar uma notificação no Windows quando o Claude terminar uma tarefa longa
- Registrar em log cada comando Bash executado pelo Claude
Para ver todos os hooks disponíveis: /hook
### 17. MCPs (Model Context Protocol)
MCPs são a forma padronizada de conectar o Claude Code a ferramentas externas — serviços fora do seu computador.
As tools nativas (Read, Write, Bash, etc.) operam localmente. MCPs adicionam acesso a serviços externos:

Para ver os MCPs instalados: /mcp
MCPs são configurados no arquivo ~/.claude.json (globais) ou .claude/settings.json (por projeto) e ficam disponíveis em todas as sessões.
### 18. Subagents
Subagents são instâncias filhas do Claude Code que o agente principal cria para executar tarefas específicas em contextos isolados.
Por que usar?
Quando uma tarefa é longa e complexa, fazer tudo no mesmo contexto enche a janela e degrada a qualidade. Subagents resolvem isso:
- O agente pai recebe a tarefa grande
- Cria um subagent para a parte de pesquisa
- O subagent faz a pesquisa em contexto isolado
- Retorna apenas o resultado para o pai
- O pai cria outro subagent para a parte de implementação
- E assim por diante
Regra fundamental dos subagents: eles só conversam com o pai. Subagent A não fala com subagent B diretamente — tudo passa pelo agente principal.
Isso garante controle e rastreabilidade de cada parte do trabalho.
### 19. Agent Teams (Times de Agentes)
Agent teams é a evolução dos subagents: agentes que se comunicam entre si, não só com o pai.
Diferença:

Com agent teams, dois agentes podem trabalhar em paralelo — um pesquisando e outro já implementando com base no que o primeiro encontrou, sem precisar esperar que tudo passe pelo agente pai.
Resultado: trabalho mais rápido em tarefas que têm partes independentes que podem rodar ao mesmo tempo.
### 20. Worktrees
Worktrees é um recurso do Git (integrado ao Claude Code) que permite rodar múltiplas instâncias do Claude Code no mesmo projeto simultaneamente — cada uma em um branch isolado.
Caso de uso: você quer que um Claude Code trabalhe na feature A enquanto outro trabalha na feature B, sem que um interfira no código do outro. Com worktrees, cada instância tem sua própria cópia de trabalho do repositório.
Pré-requisito importante: você precisa entender conceitos básicos de Git (branches, commits, merges) antes de usar worktrees. Usar sem entender Git pode gerar conflitos difíceis de resolver.
## Resumo — Os 20 Conceitos

Próxima aula: Claude Code · 1.3 — Skills, Plugins, MCPs e CLIs
Documento: claude-code-03-skills-plugins-mcps-clis
| Ferramenta | Para que serve |
| --- | --- |
| Read | Ler o conteúdo de arquivos |
| Write | Criar novos arquivos |
| Edit | Modificar partes de arquivos existentes |
| Bash | Executar qualquer comando no terminal |
| Glob | Encontrar arquivos por padrão de nome (ex: */.ts) |
| Grep | Buscar texto dentro de arquivos |
| WebSearch | Buscar na internet |
| WebFetch | Acessar e ler o conteúdo de uma URL |
| Modelo | Característica | Melhor para |
| --- | --- | --- |
| Claude Opus 4.6 | Mais inteligente, mais lento, mais caro | Tarefas complexas, arquitetura, raciocínio |
| Claude Sonnet 4.6 | Equilíbrio inteligência/velocidade | Uso geral, desenvolvimento do dia a dia |
| Claude Sonnet 4.6 (1M) | Sonnet com janela de 1 milhão de tokens | Projetos grandes com muito contexto |
| Claude Haiku 4.5 | Mais rápido, mais barato | Tarefas simples, automações de alto volume |
| Modo | Comportamento |
| --- | --- |
| Auto | Executa tudo sem pedir permissão |
| Ask | Pede confirmação antes de cada ação |
| Nível | Tokens de raciocínio | Melhor para |
| --- | --- | --- |
| low | Mínimo | Tarefas simples, repetitivas |
| medium | Moderado | Uso geral |
| high | Alto | Desenvolvimento, debugging |
| max | Máximo | Problemas complexos, arquitetura |
| auto | Claude decide | Deixa o modelo julgar (padrão) |
|  | CLAUDE.md | Skill |
| --- | --- | --- |
| Carregamento | Sempre, no início de cada sessão | Sob demanda, só quando chamada |
| Uso de tokens | Consome contexto desde o início | Consome contexto só quando ativa |
| Para que serve | Regras permanentes do projeto | Instruções especializadas por tarefa |
| Evento | Quando dispara |
| --- | --- |
| PreToolUse | Antes de usar qualquer ferramenta |
| PostToolUse | Depois de usar uma ferramenta |
| Stop | Quando o Claude termina de responder |
| UserPromptSubmit | Quando você envia um prompt |
| Notification | Quando Claude envia uma notificação |
| MCP | O que acessa |
| --- | --- |
| Figma | Lê e modifica designs |
| Supabase | Banco de dados e autenticação |
| Gmail | Lê e envia emails |
| Google Calendar | Cria e consulta eventos |
| n8n | Cria e executa workflows de automação |
| Netlify | Deploy e hosting |
|  | Subagents | Agent Teams |
| --- | --- | --- |
| Comunicação | Só com o pai | Entre si + com o pai |
| Paralelismo | Sequential | Paralelo possível |
| Complexidade | Menor | Maior |
| # | Conceito | Nível | Em uma linha |
| --- | --- | --- | --- |
| 1 | Terminal | Básico | Interface de texto para o computador |
| 2 | Agente | Básico | IA que executa ações, não só responde |
| 3 | Prompt | Básico | Comando enviado para o Claude agir |
| 4 | Tools | Básico | Ferramentas que o Claude usa (Read, Write, Bash...) |
| 5 | Context Window | Básico | Memória de curto prazo do modelo |
| 6 | Tokens | Básico | Unidade de medida de tudo na IA |
| 7 | Models | Básico | Diferentes versões de Claude com tradeoffs |
| 8 | Permissions | Básico | Controle de autonomia do agente |
| 9 | /clear | Intermediário | Zera o contexto e começa do zero |
| 10 | /compact | Intermediário | Resume a conversa e continua |
| 11 | CLAUDE.md | Intermediário | Memória permanente do projeto |
| 12 | Thinking Effort | Intermediário | Quanto o Claude pensa antes de agir |
| 13 | Ultra Think | Intermediário | Máximo raciocínio para aquele prompt |
| 14 | Slash Commands | Intermediário | Atalhos de prompts reutilizáveis |
| 15 | Skills | Intermediário | Playbooks carregados sob demanda |
| 16 | Hooks | Avançado | Automações disparadas por eventos |
| 17 | MCPs | Avançado | Conexão com ferramentas externas |
| 18 | Subagents | Avançado | Instâncias filhas com contexto isolado |
| 19 | Agent Teams | Avançado | Agentes que se comunicam entre si |
| 20 | Worktrees | Avançado | Múltiplas instâncias no mesmo projeto |