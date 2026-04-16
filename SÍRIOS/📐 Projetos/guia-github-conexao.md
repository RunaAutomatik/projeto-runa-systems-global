---
date: 2026-04-15
tags: [squad-dollar, pre-fase, github, git, claude-code, curso]
project: runa-systems-global
type: course-material
produto: [[squad-dollar-prd]]
---

# GitHub — Conectando seu Projeto com Controle de Versão

> **Módulo:** Pré-Fase — $QUAD
> **Nível:** Iniciante
> **Pré-requisito:** Claude Code instalado e rodando no seu terminal

---

## O que é o GitHub e por que você precisa dele

Imagine que você está construindo algo importante — e de repente um agente faz uma mudança que quebrou tudo. Ou você quer voltar para como o sistema estava na semana passada. Ou quer trabalhar de dois computadores diferentes.

O GitHub resolve esses três problemas de uma vez.

Ele funciona como um **sistema de pontos de salvamento** para todos os arquivos do seu projeto:

- Cada vez que algo importante é construído ou configurado → é criado um ponto de salvamento
- Se algo der errado → você volta para o estado anterior em segundos
- Se mudar de máquina → tudo sincroniza automaticamente
- Você tem um histórico completo de tudo que mudou e quando

No $QUAD, o GitHub guarda a definição dos seus agentes, as configurações do sistema e os documentos do seu vault. **Seus agentes vivem no GitHub** — perder o computador não significa perder o squad.

---

## Como este guia funciona

Você não vai rodar nenhum comando manualmente.

Cada etapa tem um prompt pronto para copiar e colar no Claude Code. Ele verifica o que você já tem instalado, configura o que falta e testa se tudo funcionou.

**Seu trabalho:** copiar o prompt → colar no Claude Code → ler o resultado.

---

## Pré-requisitos

Antes de começar:

1. **Claude Code rodando** — você está lendo isso, então já tem
2. **Conta no GitHub** — crie gratuitamente em github.com se ainda não tiver
3. **Git Bash como terminal (Windows)** — use o Git Bash dentro do Claude Code, não o PowerShell

> Se não tiver conta no GitHub ainda: acesse github.com, clique em "Sign up" e crie com seu email. É grátis para uso pessoal.

---

## ETAPA 1 — Verificar se o Git está instalado

### O que vai acontecer

O Claude Code vai verificar se o Git está instalado no seu computador. O Git é a ferramenta que fica por baixo do GitHub — sem ele, nada funciona.

### Prompt — copie e cole no seu Claude Code

```
Preciso verificar se o Git está instalado no meu computador.

Por favor:
1. Rode: git --version
2. Se retornar um número de versão (ex: "git version 2.43.0"), está instalado. Me diga a versão.
3. Se retornar "command not found" ou erro, me avise — vou precisar instalar.

Só me mostre o resultado, não faça mais nada ainda.
```

### O que o Claude Code vai retornar

**Git instalado:**
```
git version 2.43.0.windows.1
```

**Git não instalado:**
```
command not found: git
```

### Se o Git não estiver instalado

Baixe e instale em git-scm.com/download. Durante a instalação, deixe todas as opções no padrão. Após instalar, feche e reabra o Claude Code e repita esta etapa.

---

## ETAPA 2 — Configurar seu nome e email no Git

### O que vai acontecer

O Git precisa saber quem está fazendo as mudanças. Cada ponto de salvamento vai ter seu nome marcado — isso é importante para saber o que foi feito por você e o que foi feito pelos agentes.

### Prompt — copie e cole no seu Claude Code

> **Antes de colar:** substitua `[SEU NOME COMPLETO]` e `[SEU EMAIL DO GITHUB]` pelos seus dados reais.

```
Preciso configurar meu nome e email no Git.

Por favor:
1. Verifique se já tem alguma configuração rodando:
   git config --global user.name
   git config --global user.email

2. Se estiver vazio, configure com:
   git config --global user.name "[SEU NOME COMPLETO]"
   git config --global user.email "[SEU EMAIL DO GITHUB]"

3. Confirme a configuração rodando novamente:
   git config --global user.name
   git config --global user.email

Me mostre o resultado final.
```

### Resultado esperado

```
Seu Nome
seu@email.com
```

---

## ETAPA 3 — Criar o repositório no GitHub

**Esta é a única etapa manual** — precisa ser feita por você no site do GitHub:

1. Acesse **github.com** e faça login
2. Clique no botão **"New"** (ou no ícone `+` no canto superior direito → "New repository")
3. Preencha:
   - **Repository name:** `meu-squad` (ou o nome que preferir, sem espaços)
   - **Description:** `Meu squad de agentes de IA` (opcional)
   - **Visibility:** Private (recomendado — seus agentes são seus)
4. **NÃO marque** "Add a README file"
5. Clique em **"Create repository"**
6. **Copie a URL** que aparecer — vai ser algo como: `https://github.com/seu-usuario/meu-squad.git`

Guarde essa URL. Você vai precisar dela na próxima etapa.

---

## ETAPA 4 — Conectar o projeto local ao GitHub

### O que vai acontecer

O Claude Code vai inicializar o sistema de controle de versão na pasta do seu projeto e conectar essa pasta ao repositório que você criou no GitHub.

### Prompt — copie e cole no seu Claude Code

> **Antes de colar:** substitua `[URL DO SEU REPOSITÓRIO]` pela URL que você copiou na etapa anterior.

```
Preciso conectar meu projeto ao GitHub.

O repositório que criei está em: [URL DO SEU REPOSITÓRIO]

Por favor, faça o seguinte na pasta atual do projeto:

1. Verifique se já existe um repositório Git aqui:
   git status

2. Se não existir (erro "not a git repository"), inicialize:
   git init

3. Configure o repositório remoto:
   git remote add origin [URL DO SEU REPOSITÓRIO]

4. Verifique se o remote foi configurado corretamente:
   git remote -v

5. Crie o primeiro commit com os arquivos existentes:
   git add .
   git commit -m "feat: projeto conectado ao GitHub"

6. Envie para o GitHub:
   git push -u origin main

   (Se pedir autenticação, me avise — vou orientar o próximo passo)

Me mostre o resultado de cada etapa.
```

### Erros comuns que o Claude Code vai resolver

| Erro                                     | O que significa                  | O que fazer                            |
| ---------------------------------------- | -------------------------------- | -------------------------------------- |
| `fatal: not a git repository`            | Pasta ainda sem Git inicializado | Normal — o prompt cuida disso          |
| `remote origin already exists`           | Remote já configurado            | Rode `git remote set-url origin [URL]` |
| `error: failed to push — authentication` | Precisa configurar token         | Siga a Etapa 5 abaixo                  |
| `error: src refspec main does not match` | Branch local com nome diferente  | Tente `git push -u origin master`      |

---

## ETAPA 5 — Configurar autenticação (se pediu login)

Se o GitHub pediu autenticação na Etapa 4, você precisa criar um token de acesso. Isso acontece porque o GitHub não aceita mais senha simples — usa tokens por segurança.

### Criar o token no GitHub (manual)

1. Acesse **github.com** → clique na sua foto → **Settings**
2. Role até o final → **Developer settings**
3. **Personal access tokens** → **Tokens (classic)**
4. Clique em **"Generate new token (classic)"**
5. Preencha:
   - **Note:** `claude-code-squad`
   - **Expiration:** 90 days (ou "No expiration" se preferir não renovar)
   - **Scopes:** marque `repo` (dá acesso completo aos repositórios)
6. Clique em **"Generate token"**
7. **Copie o token imediatamente** — ele não aparece novamente

### Prompt — configure o token no Claude Code

> **Antes de colar:** substitua `[SEU TOKEN]` pelo token que você copiou.

```
Preciso configurar a autenticação do GitHub usando um Personal Access Token.

Meu token é: [SEU TOKEN]
Meu usuário do GitHub é: [SEU USUÁRIO]

Por favor:
1. Configure o Git para usar o token:
   git config --global credential.helper store

2. Faça um push para salvar as credenciais:
   git push -u origin main

   (Quando pedir username: coloque seu usuário do GitHub)
   (Quando pedir password: coloque o TOKEN, não a senha da conta)

3. Confirme que funcionou listando os commits remotos:
   git log --oneline -3

Me mostre o resultado.
```

---

## ETAPA 6 — Verificar a instalação completa

### Prompt — copie e cole no seu Claude Code

```
Vamos verificar se o GitHub está completamente configurado e funcionando.

Execute em sequência e me mostre o resultado de cada um:

1. git status
   (deve mostrar "nothing to commit, working tree clean" ou listar arquivos pendentes)

2. git remote -v
   (deve mostrar a URL do seu repositório GitHub duas vezes — fetch e push)

3. git log --oneline -3
   (deve mostrar os últimos commits com mensagens)

4. git config --global user.name && git config --global user.email
   (deve mostrar seu nome e email configurados)

Se algum comando retornar erro, me mostre exatamente o que apareceu.
```

### Resultados esperados quando tudo está certo

```
git status
→ On branch main
→ nothing to commit, working tree clean

git remote -v
→ origin  https://github.com/seu-usuario/meu-squad.git (fetch)
→ origin  https://github.com/seu-usuario/meu-squad.git (push)

git log --oneline -3
→ a3f8c2d feat: projeto conectado ao GitHub

git config
→ Seu Nome
→ seu@email.com
```

---

## Como os agentes usam o GitHub no dia a dia

Com o GitHub configurado, o sistema funciona em segundo plano:

| Situação | O que acontece |
|----------|---------------|
| Agente cria ou modifica um arquivo | Claude Code pode criar um commit automaticamente |
| Você pede "salva o que foi feito hoje" | Agente cria commit com resumo das mudanças |
| Algo quebrou | Você recupera a versão anterior com `git checkout` |
| Mudou de computador | Clone o repositório com `git clone [URL]` |
| Quer ver o histórico | `git log --oneline` mostra cada ponto de salvamento |

O squad inteiro — configurações dos agentes, vault do Obsidian, memória, instruções — fica registrado no GitHub. Você nunca perde trabalho.

---

## Prompt de Diagnóstico — Use Quando Algo Quebrar

```
O GitHub parou de funcionar. Preciso que você diagnostique o problema.

Verifique na seguinte ordem:

1. O Git ainda está instalado?
   git --version

2. O remote está configurado?
   git remote -v

3. As credenciais estão salvas?
   git config --global credential.helper

4. Consigo fazer um push simples?
   git push

5. O que o git status mostra?
   git status

Me mostre o resultado de cada verificação. Não pule nenhuma etapa.
```

---

## Resumo — Sequência de Instalação

| Etapa | O que fazer                   | Quem executa                                |
| ----- | ----------------------------- | ------------------------------------------- |
| 1     | Verificar Git instalado       | Claude Code (via prompt)                    |
| 2     | Configurar nome e email       | Claude Code (via prompt)                    |
| 3     | Criar repositório no GitHub   | **Você** (único passo manual)               |
| 4     | Conectar projeto ao GitHub    | Claude Code (via prompt)                    |
| 5     | Configurar token (se pediu)   | **Você** cria token + Claude Code configura |
| 6     | Verificar instalação completa | Claude Code (via prompt)                    |
