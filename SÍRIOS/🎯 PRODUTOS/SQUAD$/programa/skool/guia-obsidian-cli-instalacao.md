---
date: 2026-04-15
tags: [runa-systems, squad-dollar, obsidian, cli, instalacao, windows, claude-code, curso]
project: runa-systems-global
type: course-material
produto: [[runa-systems-prd]]
curso: [[squad-dollar-prd]]
---

# Obsidian CLI — Instalação e Conexão com Claude Code

> **Módulo:** Ferramentas Fundamentais — RUNA SYSTEMS
> **Nível:** Iniciante
> **Pré-requisito:** Claude Code instalado e rodando no seu terminal

---

## O que é o Obsidian CLI?

O Obsidian tem dois executáveis: um que abre a interface gráfica, e um que permite que agentes de IA leiam, criem e busquem notas de forma programática — sem abrir a janela.

Isso é o que transforma o Obsidian em memória persistente para os seus agentes.

Sem o CLI, o Claude Code não consegue salvar nada no seu vault entre sessões. Cada conversa começa do zero — você re-explica contexto, re-define projetos, re-toma decisões que já tomou. Com o CLI, qualquer coisa construída em uma sessão fica registrada, recuperável e disponível na próxima.

---

## Como este guia funciona

Você não vai rodar um único comando manualmente.

Cada etapa tem um prompt pronto para copiar e colar no Claude Code. Ele detecta onde o Obsidian está instalado, configura o PATH, resolve erros e verifica se tudo está funcionando.

**Seu trabalho:** copiar o prompt → colar no Claude Code → ler o resultado.

---

## Pré-requisitos

Antes de começar:

1. **Obsidian instalado** — versão 1.8.4 ou superior (recomendado: 1.12.4+)
   Download em: obsidian.md

2. **Claude Code rodando** — você está lendo isso, então já tem

3. **Git Bash como terminal (Windows)** — se estiver no Windows, use o Git Bash dentro do Claude Code, não o PowerShell

> **Por que Git Bash e não PowerShell?**
> O PowerShell no modo administrador tem um comportamento silencioso: comandos falham sem mostrar erro nenhum. Você configura o PATH, testa, aparentemente funciona — e na hora que o agente usa, não encontra nada. O Git Bash é mais previsível para esse tipo de configuração.

---

## ETAPA 1 — Verificar e Localizar o Obsidian

### O que vai acontecer

O Claude Code vai procurar onde o Obsidian está instalado no seu computador. No Windows, o caminho mais comum é `C:/Program Files/Obsidian/` — mas isso varia dependendo de como foi instalado. No Mac, fica em `/Applications/Obsidian.app/Contents/MacOS/`.

### Prompt — copie e cole no seu Claude Code

```
Quero configurar o Obsidian CLI. Preciso que você encontre onde o Obsidian
está instalado no meu computador.

No Windows, verifique estes caminhos nesta ordem:
1. C:/Program Files/Obsidian/
2. C:/Users/$USERNAME/AppData/Local/Programs/Obsidian/
3. C:/Users/$USERNAME/AppData/Local/Obsidian/

No Mac, verifique:
1. /Applications/Obsidian.app/Contents/MacOS/

Para cada caminho que existir, liste os arquivos dentro da pasta.
Estou especialmente interessado em saber se existe um arquivo chamado
"Obsidian.com" ou "Obsidian.exe" (Windows) ou "Obsidian" (Mac).

Me diga qual caminho encontrou e o que tem lá dentro.
```

### O que o Claude Code vai retornar

Algo parecido com:

```
Encontrei o Obsidian em: C:/Program Files/Obsidian/
Arquivos na pasta:
- Obsidian.com   ← este é o CLI
- Obsidian.exe   ← este abre a interface gráfica
- resources/
- locales/
- ...
```

### Por que existe um arquivo com extensão `.com`?

No Windows, quando você digita `obsidian` no terminal, o sistema verifica as extensões em uma ordem específica: `.com` vem antes de `.exe`. A equipe do Obsidian usou isso intencionalmente — `Obsidian.com` é o executável do CLI, e `Obsidian.exe` é a interface gráfica. Quando você (ou o agente) digita apenas `obsidian`, o sistema executa automaticamente o CLI.

Isso é não-intuitivo, mas funciona exatamente da maneira que precisamos.

---

## ETAPA 2 — Configurar o PATH

### O que vai acontecer

Para que o comando `obsidian` funcione em qualquer pasta do terminal — e para que o Claude Code consiga usá-lo automaticamente — precisamos adicionar a pasta do Obsidian ao PATH do sistema.

### Prompt — copie e cole no seu Claude Code

> **Antes de colar:** substitua `[CAMINHO ENCONTRADO NA ETAPA 1]` pelo caminho real.

```
Preciso adicionar o Obsidian ao PATH do meu terminal Git Bash
para poder usar o comando "obsidian" de qualquer lugar.

O Obsidian está instalado em: [CAMINHO ENCONTRADO NA ETAPA 1]

Por favor:
1. Abra o arquivo ~/.bashrc (crie se não existir)
2. Verifique se já tem alguma linha de export PATH com o caminho do Obsidian
3. Se não tiver, adicione no final do arquivo:
   export PATH="$PATH:/caminho/do/obsidian"
   (use o caminho correto, com aspas se tiver espaços)
4. Aplique a mudança rodando: source ~/.bashrc
5. Teste com: obsidian version

Se "obsidian version" retornar um número de versão, está funcionando.
Se retornar "command not found", me mostre o erro exato.
```

### Erros comuns que o Claude Code vai resolver

| Erro | O que significa | O que o Claude Code faz |
|------|----------------|------------------------|
| `command not found` | PATH não foi aplicado ainda | Roda `source ~/.bashrc` e testa novamente |
| `Permission denied` | Arquivo sem permissão de escrita | Verifica permissões e sugere alternativa |
| `No such file or directory` | Caminho digitado errado | Busca o caminho correto automaticamente |
| Nenhuma saída / silêncio | Possível modo administrador no terminal | Solicita reiniciar o terminal fora do modo admin |

---

## ETAPA 3 — Habilitar o CLI dentro do Obsidian

**Esta é a única etapa manual** — é uma configuração de segurança que precisa ser ativada por você na interface do Obsidian:

1. Abra o **Obsidian**
2. Vá em **Settings** (ícone de engrenagem no canto inferior esquerdo)
3. Clique em **General**
4. Role a página até encontrar a opção **"Register CLI"** ou **"Obsidian URI"**
5. Ative o toggle

Sem isso, os comandos do CLI funcionam no terminal mas não conseguem comunicar com o vault que está aberto no app.

---

## ETAPA 4 — Verificar a Instalação Completa

### Prompt — copie e cole no seu Claude Code

```
Vamos verificar se o Obsidian CLI está completamente instalado e funcionando.

Execute os comandos abaixo em sequência e me mostre o resultado de cada um:

1. obsidian version
   (deve retornar um número como "1.12.4")

2. obsidian vault
   (deve listar os vaults que você tem registrados no Obsidian)

3. obsidian files folder="/"
   (deve listar os arquivos e pastas do vault que estiver aberto)

Se algum comando falhar, me mostre o erro exato que apareceu.
Não tente resolver sozinho — me mostre o erro primeiro.
```

### Resultados esperados quando tudo está certo

```
obsidian version
→ 1.12.4

obsidian vault
→ meu-vault   /Users/seu-nome/meu-vault

obsidian files folder="/"
→ 📅 Diário/
→ 📐 Projetos/
→ README.md
→ ...
```

Se os três comandos retornarem resultado, o CLI está instalado e conectado.

---

## ETAPA 5 — Conectar o CLI ao Seu Projeto

Com o CLI funcionando, vamos registrar os caminhos do vault no contexto do projeto para que os agentes saibam onde salvar documentos.

### Prompt — copie e cole no seu Claude Code

```
O Obsidian CLI está instalado. Agora preciso que você:

1. Liste os vaults registrados rodando: obsidian vault
2. Me mostre o caminho completo de cada vault encontrado
3. Crie um arquivo chamado .obsidian-config no diretório raiz do meu projeto
   com o seguinte conteúdo:

   VAULT_PRINCIPAL=<caminho do vault principal encontrado>
   VAULT_BASES=<caminho do vault de bases, se existir — deixe vazio se não tiver>

4. Teste que consegue ler um arquivo do vault principal com:
   obsidian read path="<qualquer arquivo .md que existir no vault>"

Confirme ao final que o arquivo .obsidian-config foi criado e que a leitura funcionou.
```

---

## Prompt de Diagnóstico — Use Quando Algo Quebrar

Guarde este prompt. Se em qualquer momento o CLI parar de funcionar:

```
O Obsidian CLI parou de funcionar. Preciso que você diagnostique o problema.

Verifique na seguinte ordem:

1. O Obsidian ainda está no mesmo caminho de antes?
   (liste os arquivos em: C:/Program Files/Obsidian/ ou onde estava instalado)

2. O PATH ainda tem o caminho do Obsidian?
   (rode: echo $PATH e verifique se o caminho aparece)

3. O arquivo ~/.bashrc ainda tem a linha de export?
   (leia o arquivo ~/.bashrc e me mostre o conteúdo)

4. O Obsidian está aberto no momento?
   (o CLI precisa que o app esteja rodando em segundo plano)

5. O comando funciona?
   (rode: obsidian version)

Me mostre o resultado de cada verificação. Não pule nenhuma etapa.
```

---

## Como os Agentes Usam o CLI no Dia a Dia

Com o CLI configurado, o Claude Code tem quatro operações principais no vault:

| Operação | Comando | Para que serve |
|----------|---------|----------------|
| Criar nota | `obsidian create path="..." content="..."` | Salvar documentos, specs, decisões |
| Ler nota | `obsidian read path="..."` | Recuperar contexto de sessões anteriores |
| Buscar | `obsidian search query="..."` | Encontrar informações espalhadas pelo vault |
| Listar | `obsidian files folder="..."` | Ver o que existe em uma pasta |

O agente usa esses comandos em background — você não vê os comandos rodando, apenas o resultado. O vault funciona como memória externa: o agente salva ao final da sessão e recupera no início da próxima.

---

## Resumo — Sequência de Instalação

| Etapa | O que fazer | Quem executa |
|-------|-------------|--------------|
| 1 | Localizar o Obsidian | Claude Code (via prompt) |
| 2 | Configurar o PATH | Claude Code (via prompt) |
| 3 | Habilitar CLI no Settings | **Você** (único passo manual) |
| 4 | Verificar instalação | Claude Code (via prompt) |
| 5 | Conectar ao projeto | Claude Code (via prompt) |

Se algo der errado em qualquer etapa, use o Prompt de Diagnóstico — não tente resolver na mão.
