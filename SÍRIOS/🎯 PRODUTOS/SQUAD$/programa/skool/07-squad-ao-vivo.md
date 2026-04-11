---
date: 2026-04-04
tags: [squad-dollar, skool, squad, manutencao, adaptacao, modulo-7]
project: runa-systems-global
type: course-support
produto: [[squad-dollar-prd]]
modulo: "7.2 e 7.3 — Adaptando o Framework + Manutenção do Squad"
---

# O Squad Rodando Ao Vivo

> Módulo 7 · Aulas 7.2 e 7.3

No Módulo 7, você viu o squad de Alpha® funcionando de ponta a ponta. Agora é hora de adaptar o framework para o seu modelo de negócio e entender como manter o squad funcionando bem no longo prazo.

---

## Como o mesmo framework se adapta para diferentes modelos

O squad que você construiu nos módulos anteriores foi desenhado em torno de 5 funções universais:
**orquestração → oferta → conteúdo → automação → inteligência**

Essas funções existem em qualquer negócio digital. O que muda é como cada agente é configurado. Use a tabela abaixo para mapear seu modelo:

| Modelo de negócio | Agente de oferta foca em... | Agente de conteúdo foca em... | Agente de automação foca em... |
|------------------|-----------------------------|-------------------------------|--------------------------------|
| **Mentoria individual** | Empacotamento de sessões, ancoragem de hora vs. resultado | Autoridade pessoal, resultados de clientes, narrativa de transformação | Onboarding 1:1, sequência pré-sessão, follow-up pós-sessão |
| **Produto digital / curso** | Lançamentos, downsells, bundles | Conteúdo educativo que cria desejo pelo curso | Funil de keyword → oferta → checkout |
| **Consultoria B2B** | Proposta de valor ROI, cases de resultado, precificação por projeto | LinkedIn, estudos de caso, conteúdo de autoridade técnica | Follow-up de prospects, onboarding de novos clientes |
| **Agência / serviços** | Pacotes de serviço, upsell de retainer | Cases, portfólio, conteúdo de metodologia | Onboarding de projeto, relatórios automáticos |
| **SaaS / infoproduto** | Planos e pricing, trial → pago, anualizações | Produto educativo, features, comparações | Trial onboarding, churn prevention, upgrade sequence |

---

## Worksheet — Adaptando para o Seu Modelo

**Qual é o seu modelo principal hoje?** _________________________________

**Qual é o ciclo de compra típico do seu cliente?** (da descoberta até a compra)
_________________________________
_________________________________

**O que o agente de oferta precisa saber de específico para o seu modelo?**
_________________________________
_________________________________

**O que o agente de conteúdo precisa saber de específico para o seu modelo?**
_________________________________
_________________________________

**O que o agente de automação precisa gerenciar de específico para o seu modelo?**
_________________________________
_________________________________

---

## Como os squads quebram (e como consertar)

Squads não quebram de uma vez. Eles degradam. Os sintomas aparecem antes do problema ficar óbvio.

### Sinais de degradação

| Sintoma | Causa mais comum | Solução |
|---------|-----------------|---------|
| Agente responde "fora do tom" | System prompt não foi atualizado com mudanças de posicionamento | Revisão do DNA de voz no system prompt |
| Agente sugere coisas fora do escopo | Contexto do negócio desatualizado (produto mudou, ICP mudou) | Atualizar seção "Contexto do negócio" no system prompt |
| Orquestrador roteia errado | Novo agente adicionado sem atualizar o Bloco 3 do orquestrador | Adicionar novo agente ao roster do orquestrador |
| Agente gera output muito genérico | Base de conhecimento rasa (faltam exemplos reais e resultados) | Adicionar mais casos reais, mais resultados específicos, mais vocabulário pessoal |
| Fluxo de DM para de funcionar | ManyChat desconectado do Instagram, ou limite de DMs gratuito atingido | Verificar conexão ManyChat + status da conta |

---

## Calendário de manutenção recomendado

| Frequência | O que revisar |
|-----------|--------------|
| **Semanal** | Output dos agentes que foram usados — alguma resposta soou errada? |
| **Mensal** | System prompts de todos os agentes — algo mudou no negócio ou no posicionamento? |
| **A cada lançamento/mudança de produto** | Agente de oferta + orquestrador (novo produto no roster) |
| **A cada mudança de ICP** | Todos os agentes (ICP permeia todos os system prompts) |
| **A cada 3 meses** | Análise de concorrentes via agente de inteligência |

---

## Quando adicionar um novo agente

Regra: só adicione um novo agente quando tiver uma função clara que o squad atual não cobre — e quando essa função aparecer frequentemente o suficiente para justificar um especialista dedicado.

**Sinais de que você precisa de um novo agente:**
- Você se pega fazendo a mesma solicitação manual repetidamente (3x+ por semana)
- Uma área do negócio está crescendo mas nenhum agente atual atende
- O orquestrador está recebendo solicitações que ele não consegue rotear adequadamente

**Sinais de que você NÃO precisa de um novo agente:**
- Você simplesmente quer mais agentes (agente-collecting)
- A função nova é similar a um agente que já existe — ajuste o system prompt existente
- Você usa a função nova menos de 1x por semana

---

## Versionamento dos system prompts

Sugestão de controle de versão simples:

```
Sistema de versão: AGENTE-vX.Y
X = mudança de escopo (novo produto, novo ICP, reestruturação completa)
Y = ajuste fino (correção de tom, adição de exemplo, correção de erro)

Exemplo:
FREYJA-v1.0 → primeira configuração
FREYJA-v1.1 → adicionado novo formato (email)
FREYJA-v2.0 → reposicionamento completo do negócio → refez o DNA de voz
```

Guarde o histórico dos system prompts em um Google Doc ou Notion. Quando algo degrada, você consegue comparar a versão atual com a que funcionava.

---

## Entregável do Módulo 7

- [ ] Tabela de adaptação preenchida para o seu modelo
- [ ] Calendário de manutenção definido (com datas ou frequência)
- [ ] Sistema de versionamento escolhido e documentado
- [ ] Todos os system prompts revisados e salvos com versão

---

*Próxima aula: Módulo 8 — A Empresa Que Se Governa (Paperclip)*
*Documento: [[08-empresa-paperclip]]*
