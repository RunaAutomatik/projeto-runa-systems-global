---
date: 2026-04-04
tags: [squad-dollar, skool, inteligencia, alex, concorrentes, modulo-6]
project: runa-systems-global
type: course-support
produto: [[squad-dollar-prd]]
modulo: "6.2 e 6.3 — Mapeamento de Concorrentes + Configuração do Agente"
---

# O Agente de Inteligência

> Módulo 6 · Aulas 6.2 e 6.3

O agente de inteligência é o único do squad que faz pesquisa por você. Ele monitora o mercado, mapeia como seus concorrentes se posicionam, e te entrega oportunidades de diferenciação antes que você tenha que descobrir sozinho.

---

## O que o agente de inteligência faz

- **Análise de concorrentes no Instagram:** mapeia narrativa, formatos, hooks, frequência, posicionamento
- **Extração de oportunidades:** identifica gaps no mercado que seus concorrentes não cobrem
- **Monitoramento de tendências:** sinaliza temas emergentes no seu nicho antes que virem saturados
- **Benchmarking de conteúdo:** avalia o desempenho relativo do seu conteúdo vs. referências do nicho

O que ele NÃO faz:
- Não cria conteúdo (isso é o agente de conteúdo)
- Não toma decisões estratégicas por você — ele apresenta os dados e interpreta, você decide
- Não monitora em tempo real — a pesquisa é feita quando você solicita

---

## Worksheet — Mapeando Seus Concorrentes e Referências

### Concorrentes diretos (mesmo produto, mesmo ICP)

| Handle Instagram | O que vende | Para quem | Ponto forte | Ponto fraco |
|-----------------|-------------|-----------|-------------|-------------|
| @________________ | | | | |
| @________________ | | | | |
| @________________ | | | | |

### Referências de conteúdo (não concorrentes, mas influências no formato)

| Handle | Por que você os admira | O que você não imitaria |
|--------|----------------------|------------------------|
| @________________ | | |
| @________________ | | |

### Seu posicionamento atual vs. o mercado

**O que você faz diferente dos concorrentes diretos?**
_________________________________
_________________________________

**Qual é o gap que nenhum deles cobre e que você poderia cobrir?**
_________________________________
_________________________________

---

## Como mapear um concorrente (o método da Aula 6.2)

O vídeo da Aula 6.2 mostra esse processo ao vivo. Para replicar depois:

**1. Coleta de dados (manual — você faz uma vez, o agente processa):**
- Salve os últimos 15-20 posts do perfil do concorrente (print ou copie o texto)
- Anote: qual formato (carrossel / Reel / texto), tema de cada post, engajamento aproximado (curtidas/comentários visíveis)
- Observe: qual é o gancho de cada post, qual CTA ele usa, com que frequência publica

**2. Análise pelo agente:**
Cole os dados coletados no agente de inteligência e peça a análise com o prompt abaixo.

---

## Prompt padrão — Análise de Concorrente

Copie e use com o seu agente de inteligência (ou diretamente no Claude):

```
Analise o perfil do Instagram abaixo como um especialista em posicionamento de mercado.

DADOS DO PERFIL
Handle: {handle}
Nicho: {nicho}
Produto principal: {produto}
ICP aparente: {para quem parece vender}

CONTEÚDO DOS ÚLTIMOS 15 POSTS (você cola o texto de cada post aqui)
{cole os posts}

ENTREGUE:

1. NARRATIVA CENTRAL
   A tese que esse criador repete em diferentes formatos. Em 1-2 frases.

2. PADRÕES DE FORMATO
   Quais formatos usa mais. Qual o comprimento típico dos posts. Usa muito emoji ou pouco.

3. HOOKS MAIS USADOS
   Liste os 3-5 padrões de abertura que ele mais repete.

4. POSICIONAMENTO
   O que ele defende explicitamente. O que ele ataca implicitamente.
   Contra quem ele se posiciona (sem citar nomes — qual "vilão" aparece no conteúdo).

5. GAPS E OPORTUNIDADES
   O que ele NÃO cobre que o ICP provavelmente quer saber.
   Onde o conteúdo dele parece fraco ou genérico.

6. RISCO DE IMITAÇÃO
   O que você NUNCA deve imitar — não porque é ruim, mas porque já é a marca registrada dele.
```

---

## Template — System Prompt do Agente de Inteligência

```
Você é {NOME DO AGENTE}, o especialista em inteligência de mercado de {SEU NOME / EMPRESA}.

MISSÃO
Pesquisar, analisar e interpretar o mercado de {SEU NICHO} para identificar oportunidades
de posicionamento e diferenciação para {SEU NOME}. Você não cria estratégia — você entrega
inteligência para que {SEU NOME} tome decisões melhores.

CONTEXTO DO NEGÓCIO
{SEU NOME} atua em: {nicho}
Produto principal: {produto}
ICP: {ICP}
Diferencial atual: {o que te diferencia hoje}

CONCORRENTES MONITORADOS
- {Handle 1}: {posicionamento resumido}
- {Handle 2}: {posicionamento resumido}
- {Handle 3}: {posicionamento resumido}

REFERÊNCIAS DE CONTEÚDO (não concorrentes — só formato)
- {Handle}: {por que é referência}
- {Handle}: {por que é referência}

TIPOS DE ANÁLISE QUE VOCÊ REALIZA
1. Análise de concorrente (dados coletados manualmente → você interpreta)
2. Análise de tendência (tema + contexto → você mapeia oportunidades)
3. Benchmarking de post (post de {SEU NOME} + post de referência → comparativo)
4. Gap analysis (brief de nicho → onde ninguém está cobrindo mas o ICP quer)

FORMATO DE OUTPUT
Sempre estruturado: seções numeradas, bullets quando listar, conclusão acionável no final.
Cada análise termina com: "Próximo passo recomendado: [ação específica para {SEU NOME}]"
```

---

## Checklist — Testando o Agente de Inteligência

- [ ] **Teste de análise:** Cole os dados de 10 posts de um concorrente e peça análise → deve identificar narrativa, padrões e gaps
- [ ] **Teste de gap analysis:** Descreva o nicho e o ICP → deve sugerir ângulos que ninguém está cobrindo
- [ ] **Fronteira de escopo:** "Escreve um post usando esse gap" → deve redirecionar para o agente de conteúdo
- [ ] **Qualidade da conclusão:** Todo output deve terminar com uma ação específica recomendada

---

## Entregável do Módulo 6

- [ ] 2-3 concorrentes mapeados com o worksheet desta aula
- [ ] Análise de ao menos 1 concorrente feita com o prompt padrão
- [ ] System prompt do agente de inteligência configurado
- [ ] Salvo como Claude Project

---

*Próxima aula: Módulo 7 — O Squad Rodando Ao Vivo*
*Documento: [[07-squad-ao-vivo]]*
