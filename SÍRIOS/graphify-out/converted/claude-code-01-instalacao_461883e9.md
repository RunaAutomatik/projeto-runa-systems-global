<!-- converted from claude-code-01-instalacao.docx -->

# Instalação e Configuração do Claude Code
Módulo Claude Code · Aula 1.1
Esta aula cobre a instalação do Claude Code no Windows, a configuração inicial do ambiente e a estrutura de pastas que você vai usar no dia a dia. É o ponto de partida técnico antes de qualquer outra coisa.
## Pré-requisitos
Antes de instalar o Claude Code, você precisa de:

Plano Free não é suficiente. O Claude Code exige uma assinatura paga (Pro R$~120/mês ou superior).
## Instalação
### Passo 1 — Instalar via npm
Abra o terminal (PowerShell ou WSL) e rode:
npm install -g @anthropic/claude-code
Isso instala o comando claude globalmente no seu sistema.
### Passo 2 — Verificar a instalação
claude --version
Deve aparecer o número da versão instalada (ex: 2.0.73).
### Passo 3 — Autenticar com sua conta Anthropic
claude
Na primeira vez que você rodar claude, ele vai abrir o browser para autenticação com sua conta Anthropic. Faça login e autorize.
Após autenticar, o terminal exibe o prompt do Claude Code — você está dentro.
## Iniciando o Claude Code no seu projeto
Sempre inicie o Claude Code dentro da pasta do projeto que você quer trabalhar:
cd C:\meu-projeto
claude
O Claude Code vai enxergar todos os arquivos dessa pasta e subpastas. Ele usa esse diretório como ponto de partida para todas as operações de leitura e escrita de arquivos.
## Comandos iniciais essenciais
Dentro da sessão do Claude Code, você tem acesso a esses comandos com a tecla /:

## Criando o CLAUDE.md — Memória do Projeto
O CLAUDE.md é o arquivo mais importante do seu projeto dentro do Claude Code. Ele é lido automaticamente no início de cada sessão e diz ao Claude:
- Como o projeto está organizado
- Quais tecnologias você usa
- O que ele pode e não pode fazer
- Preferências e padrões que você quer manter
### Como criar
Na pasta do seu projeto, dentro do Claude Code:
claude init
O Claude vai analisar todo o projeto e criar um CLAUDE.md automaticamente com base no que ele encontrou. Depois, você edita e personaliza.
### O que colocar no CLAUDE.md
# Meu Projeto

## Estrutura
- /src — código fonte
- /docs — documentação

## Tecnologias
- Next.js 14, TypeScript, Tailwind CSS
- Supabase para banco de dados

## Regras
- Sempre use TypeScript, nunca JavaScript puro
- Commits em português, mensagens no formato convencional
- Não apagar arquivos sem confirmar comigo
### O que NÃO colocar
- Detalhes que mudam com frequência (versões de pacotes, configurações de ambiente)
- Instruções longas que pertencem a uma skill específica
- Senhas ou tokens de API
Regra de ouro: Quanto menor e mais preciso o CLAUDE.md, melhor. Cada linha que você coloca aqui consume espaço da janela de contexto antes mesmo da conversa começar.
## Estrutura de Pastas
Ao trabalhar com Claude Code, dois sistemas de pastas são importantes:
### Pasta global — ~/.claude/
~/.claude/
├── settings.json       ← configurações globais (modelos, permissões padrão)
├── CLAUDE.md           ← instruções que valem para TODOS os seus projetos
└── skills/             ← skills (playbooks) disponíveis em qualquer projeto
    ├── ads-meta/
    ├── seo-content/
    └── ...
Tudo aqui é acessível independente da pasta em que você estiver.
### Pasta do projeto — .claude/
meu-projeto/
├── .claude/
│   ├── settings.json       ← configurações específicas deste projeto
│   ├── settings.local.json ← configurações locais (não commitar)
│   ├── skills/             ← skills exclusivas deste projeto
│   └── rules/              ← regras contextuais do projeto
├── CLAUDE.md               ← memória deste projeto
└── ...
A pasta .claude/ fica na raiz do projeto e deve ser commitada junto com o código (exceto settings.local.json, que tem dados sensíveis).
## Níveis de Permissão
O Claude Code tem três modos de permissão que você controla com Shift + Tab dentro da sessão:

Use Auto quando você está em fluxo de trabalho e confia no que pediu. Use Ask quando está explorando algo novo ou delicado.
## Configurando Modelos
Por padrão, o Claude Code usa o Sonnet (modelo atual). Para ver todos os modelos disponíveis:
claude models
Para mudar o modelo padrão nas suas configurações:
# No arquivo ~/.claude/settings.json
{
  "model": "claude-opus-4-6"
}
## Troubleshooting — Problemas comuns
### "claude: command not found"
O npm instalou o binário mas não está no PATH. Solução:
# No PowerShell
$env:PATH += ";$env:APPDATA\npm"

# Ou reinstale com
npm install -g @anthropic/claude-code --prefix $HOME
### Sessão não autentica
- Feche o Claude Desktop App (competem pelo mesmo socket)
- Delete ~/.claude/auth.json
- Rode claude novamente para reautenticar
### Contexto estourando rápido
- Revise o CLAUDE.md — remova o que não é essencial
- Use /compact para resumir a conversa antes de continuar
- Use /clear para começar sessão nova numa tarefa diferente
### Claude não encontra arquivos do projeto
Verifique se você rodou claude dentro da pasta correta do projeto. O Claude Code usa o diretório de trabalho como raiz.
## Checklist — Instalação completa
Use este checklist para confirmar que está tudo configurado:
- [ ] Node.js 18+ instalado (node --version)
- [ ] Claude Code instalado (claude --version)
- [ ] Autenticado com conta Anthropic (rode claude uma vez)
- [ ] Testou iniciar na pasta do seu projeto (cd projeto && claude)
- [ ] CLAUDE.md criado na raiz do projeto (claude init)
- [ ] Verificou os comandos /help e /mcp funcionando dentro da sessão
Próxima aula: Claude Code · 1.2 — Princípios Básicos (20 conceitos essenciais)
Documento: claude-code-02-principios-basicos
| Requisito | Versão mínima | Como verificar |
| --- | --- | --- |
| Node.js | 18+ | node --version |
| npm | 8+ | npm --version |
| Conta Anthropic | Pro, Max, Team ou Enterprise | claude.ai |
| Terminal | PowerShell, Bash, WSL | já incluído no Windows |
| Comando | O que faz |
| --- | --- |
| /help | Lista todos os comandos disponíveis |
| /clear | Zera a janela de contexto (começa sessão nova) |
| /compact | Resume a conversa em poucos tokens e continua |
| /mcp | Lista os MCPs (ferramentas externas) disponíveis |
| /cost | Mostra o custo de tokens da sessão atual |
| /exit | Sai do Claude Code |
| Modo | O que significa |
| --- | --- |
| Ask (padrão) | Claude pede confirmação antes de cada ação |
| Auto | Claude executa sem perguntar — confia no que você pediu |
| Manual | Você aprova ação por ação |