# Setup e Onboarding Perfeito do J.A.R.V.I.S. (Windows + WSL 2)

Este documento foi construído iterativamente com base em debugar falhas comuns de rede da Microsoft (timeout da máquina virtual com firewall hospedeiro) para criar a arquitetura perfeita sem gastar dinheiro com tokens.

## 1. A Estratégia Principal
Para contornar os bloqueios de firewall do Windows ao adaptador do WSL e as alterações dinâmicas de IP toda vez que reinicia o computador, nós vamos **fugir** da versão Windows de mesa da Inteligência Artificial.
A solução é: Instalar o servidor LLM (Ollama) inteiro fisicamente **dentro** do ambiente Linux onde o Jarvis já rola, de forma que o Jarvis se conecte via `localhost` (mesma máquina), superando barreiras de rede.

---

## 2. Instalação e Preparo do Cérebro Local (no terminal do WSL)
Abra uma janela inicial de powershell e digite `wsl` para entrar no mundo Linux (`runa@...`). Tudo daqui pra frente será neste terminal.

**Passo 2.1:** Distribuições WSL geralmente vêm enxutas e faltam dependências de descompactação. Instale-a primeiro:
```bash
sudo apt-get update && sudo apt-get install zstd -y
```
*(Caso ele peça senha secreta do superusuário, use a senha configurada durante o setup do WSL.)*

**Passo 2.2:** Execute o instalador global do Ollama específico para ambientes Linux:
```bash
curl -fsSL https://ollama.com/install.sh | sh
```
> **Nota de Ouro:** O próprio script não só instala mas já engatilha e INICIA o servidor como um serviço invisível de fundo (`Enabling and starting ollama service...`). O motor da IA já está ligado!

**Passo 2.3:** Baixe o dicionário de inteligência para dentro da máquina.
O Jarvis exige o uso da capacidade interna de "Tool Use". Modelos simples (como 0.5b) vão reportar o erro `"does not support tools"`. Se a máquina não aguentar o Llama 3.1 8B, recomendo o incrivelmente otimizado "3.2":
```bash
ollama run llama3.2:1b
```
Quando terminar do download com "success", dê `Ctrl+D` para sair do prompt `>>>`. A parte pesada técnica acabou.

---

## 3. Ligar e Configurar a Central do JARVIS

**Passo 3.1:** Com o terminal no Linux ainda ativo, acorde o Agente:
```bash
jarvis start -d
```
*(Ele lançará os logs e te avisará que a UI está disponível na porta 3142. Você pode deixar esse terminal minimizado enquanto trabalha).*

**Passo 3.2:** Vá pro seu navegador Chrome no seu ambiente Windows natural e acesse: `http://localhost:3142/#/settings/llm`

**Passo 3.3:** Parametrize o roteamento principal da IA no campo **LLM Configuration**:
- Logo no topo da tela, mude para: **PRIMARY PROVIDER > Ollama**
- Desça até a aba verde expandida do **Ollama**
- **Base URL:** Certifique-se que o atalho cego seja: `http://localhost:11434`
- **Model:** Digite literalmente `llama3.2:1b` (ou o nome estrito do modelo escolhido).
- Clique em **Save Configuration**, e verifique confirmando com o **Test Connection**.

---

## 4. O Sistema Sensorial (Voz e Contratos de Segurança)

Aqui configuramos o Onboarding que tornará o assistente humano e capaz. Pela barra lateral ultra fina do canto esquerdo da tela (engrenagem sub-menu de textos). 

### Voice (Audição e Fala do Robô)
Vá para: `Settings -> Voice`
- **Transcription (STT - Microfone):** Você pode usar seu OpenAI Whisper informando sua API Key do projeto (isto custará microcentavos na plataforma oficial). Se quiser grátis 100%, procure usar provedores como o Groq caso suportado. 
- **Text-to-Speech (TTS - O que ele fala):** Em "Provider", selecione a opção `Edge TTS (Free)`.
- **IMPORTANTE:** Habilite o checkbox "**Enabled ✔**" vazio.
- **Voice (Idioma):** Mude as vozes enlatadas de US (ex: "Guy US Male") para português do brasil, como **`Francisca (BR)`** ou **`Antonio (v2 BR)`**. Não falhar nesse passo poupará sotaques estressantes de americanos sofrendo no nosso idioma.
- Salve com o botão grande roxo.

### Authority (Contratos de Perigo)
Vá para: `Settings -> Authority`
- A linha de segurança varia de 1 a 10. Assuma do **Level 1 a 3** na inicialização. Isso garante independência de pensamento do robô, mas se ele ameaçar um script, destruir pastas locais, ler segredos bancários, ou mexer no email, um Popup saltará na sua tela Windows exigindo o `Approve` ou `Deny` (Recusar) obrigatório.

### Sidecars (Controle do Teclado e Mouse do Windows Hospedeiro)
A IA está fisicamente presa em um espaço digital do Linux. E seus Códigos, Vscode e Google Chrome estão no Seu Local Disk `C:` do Windows! Para a IA atuar nos seus apps como um fantasma na máquina:
1. Vá para: `Settings -> Sidecar`
2. Escreva o nome do seu PC (Ex: "Arthur Windows Principal") e preste atenção no botão `Enroll`.
3. Ele vai cuspir um comando enorme de terminal com um `token=` embutido.
4. Pelo amor de deus, abra o Windows **PowerShell Clássico e Limpo (e não o Ubuntu WSL)**.
5. Cole esse `string` magnético. E pronto! A magia do controle cruzado está autorizada por esse console, deixe-o no canto.

### Persona e Idiomas Impecáveis
A aba `Settings -> Persona & Profile` rege o subconsciente das sessões. Como o "1b" é levinho, ele pode ter "Brancos cerebrais" e tentar te responder em Inglês quando utilizar Ferramentas de sistema em lote. 
Insira obrigatoriamente essa regra Magna no quadro de texto da sua persona: 
> *"Aja sempre ativamente e focado em automações para me auxiliar no meu framework AIOX CLI. Nunca retorne um output em inglês; interaja, entenda e comande o shell se estritamente, permanentemente usando Português Nativo do Brasil (PT-BR) com perfeição gramatical."*

---

## 5. A Regra do Cérebro Quente (Reload do Daemon)
Sempre que você alterar um checkbox das definições vitais no Front-end (Chrome), a "memória antiga pesada" do robô Linux teimosamente falhará no chat até você dar um balanço de reinicialização no Cérebro. 

**Ao final da configuração inteira e salvamento, volte lá no terminal de fundo do WSL, e rode com glória:**
```bash
jarvis stop
# Espere dar sucesso e religue:
jarvis start -d
```

O ambiente está permanentemente dominado!
