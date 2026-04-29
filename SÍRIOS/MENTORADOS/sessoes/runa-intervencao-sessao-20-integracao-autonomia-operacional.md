---
date: 2026-04-21
tags: [runa-intervencao, runa-mentoria, sessao, fase-6, integracao, autonomia, health-check, conselheiro]
project: runa-systems-global
type: session-template
formato: [intervencao-21-dias, mentoria-60-dias]
fase: "6 — INTEGRAÇÃO"
sessao: "S20"
codigo: S20
titulo: "Integração III — Autonomia Operacional"
duracao: "90–120 min"
anterior: "[[runa-intervencao-sessao-19-integracao-monetizacao-neural]]"
proximo: "[[runa-intervencao-sessao-21-soberania-neural]]"
titulo_desbloqueado: "CONSELHEIRO 🎯"
produto: "[[runa-mentoria-prd]]"
aliases: [s20, autonomia-operacional, conselheiro]
---

# S20 — Integração III: Autonomia Operacional

> **Fase 6 — INTEGRAÇÃO** · Sessão 20 de 21
> **Duração:** 90–120 min
> **Formato:** INTERVENÇÃO (dia 20) · MENTORIA (semana 17–18)
>
> S20 é a sessão de prova. O sistema existe, está integrado, tem oferta. A questão agora é: **opera sem você?** Em S20, o cliente instala os protocolos de saúde do ecossistema e inicia o período de 72h de operação autônoma — o teste final antes de S21.

---

## Objetivo da Sessão

Ao final de S20, o cliente tem:

1. **Protocolos de health-check** — rotinas de verificação do ecossistema (diária, semanal, mensal)
2. **Alertas automáticos** — o sistema avisa o operador quando algo precisar de atenção
3. **Plano de evolução trimestral** — o que melhorar nos próximos 3 meses
4. **72h de operação autônoma** — período de teste em que o operador observa, não intervém
5. **🎯 TÍTULO DESBLOQUEADO: CONSELHEIRO** — ao completar o DESAFIO

---

## Progressão de Títulos

| Sessão | Título | Significado |
|--------|--------|-------------|
| S17 | ESPECIALISTA ⚔️ | Domina o nicho de operação neural |
| **S20** | **CONSELHEIRO 🎯** | **Opera sem executar. Orienta o sistema.** |
| S21 | REI 👑 | Soberania neural total. Ensina e expande. |

---

## Estrutura da Sessão

### Block 1 — Framing: Da Execução para a Orientação (15 min)

**A virada de S20:**

Operador → Executor: você faz as coisas acontecerem
Conselheiro → Orientador: você define direção, o sistema executa

A maioria dos empreendedores nunca sai do modo Operador porque o sistema que construíram não opera sem eles. O ecossistema neural resolve isso — se os protocolos de saúde estiverem instalados.

**O que separa um sistema que funciona de um sistema que sobrevive:**

| Sistema sem protocolo de saúde | Sistema com protocolo de saúde |
|-------------------------------|-------------------------------|
| Quebra sem aviso | Alerta antes de quebrar |
| Operador descobre o problema quando o cliente reclama | Sistema avisa antes do problema afetar o cliente |
| KB desatualiza silenciosamente | Protocolo semanal detecta lacunas |
| Automação falha e ninguém sabe | Log de execução + alerta imediato |
| Agente responde com informação errada | Memory.md atualizado semanalmente |

**S20 instala esses protocolos.**

---

### Block 2 — Protocolos de Health-Check (30 min)

**Três níveis de verificação:**

#### Nível 1 — Diário (5 minutos, toda manhã)

```
ROTINA DIÁRIA — [NEGÓCIO]

Verificar:
1. COMMAND-CENTER.md → algum alerta ativo?
2. CRM pipeline → algum prospect ou cliente sem contato há >3 dias?
3. Automações n8n → execuções com erro ontem?
4. Squad → algum agente com tarefa urgente pendente?

Ação se encontrar problema:
  → Resolver imediatamente (≤15 min) ou
  → Delegar ao agente responsável com instrução específica ou
  → Escalar para revisão manual se o sistema não conseguir resolver

Tempo total: 5 minutos.
Se demorar mais, o COMMAND-CENTER.md não está bem configurado → voltar ao S18.
```

**Configuração do lembrete diário:**
```
Opção A: n8n Schedule → todos os dias 08h → mensagem no WhatsApp
  "☀️ Health check: abra o COMMAND-CENTER.md e verifique os 4 pontos."

Opção B: Alarme no celular → abertura manual do COMMAND-CENTER.md

Opção C: Hook no CLAUDE.md → ao iniciar Claude Code, exibir o resumo do estado
```

#### Nível 2 — Semanal (30 minutos, toda segunda)

```
ROTINA SEMANAL — [NEGÓCIO]

1. Relatório automático chegou? (n8n de S18)
   ☐ sim → revisar e identificar ação da semana
   ☐ não → verificar fluxo n8n (debug)

2. KB atualização:
   ☐ Algum cliente fez pergunta que o agente não soube responder?
     → Criar ou atualizar documento em wiki/concepts/
   ☐ Algum serviço mudou de escopo ou preço?
     → Atualizar servicos.md ou precificacao.md
   ☐ Novo caso de sucesso a documentar?
     → Adicionar em wiki/concepts/casos.md

3. Agentes — Memory.md review:
   ☐ Algum agente desenvolveu comportamento inesperado?
     → Revisar e corrigir Memory.md do agente
   ☐ Alguma nova regra de comportamento identificada na semana?
     → Adicionar ao Memory.md correspondente

4. Pipeline review:
   ☐ Prospects em QUALIFICADO há >14 dias sem avanço → retomar ou arquivar
   ☐ Clientes em CLIENTE sem contato há >15 dias → acionar onboarding touch
   ☐ Propostas enviadas há >7 dias sem resposta → follow-up ativo

Tempo total: 30 minutos.
```

#### Nível 3 — Mensal (2 horas, primeiro dia útil do mês)

```
ROTINA MENSAL — [NEGÓCIO]

1. Retrospectiva do mês:
   - Quantos leads entraram → quantos viraram clientes → conversão %
   - Qual automação gerou mais resultado?
   - Qual silo ainda existe?

2. Evolução do squad:
   - Algum agente precisa de nova instrução ou novo contexto?
   - Alguma tarefa que o operador ainda faz manualmente que poderia delegar?
   - Criar novo agente ou comando?

3. KB audit:
   - Documentos não atualizados há >30 dias → revisar ou arquivar
   - Informações que o squad consultou mas não encontrou → criar

4. Plano do próximo mês:
   - 1 melhoria técnica (novo agente, nova automação, nova integração)
   - 1 melhoria comercial (nova oferta, novo nicho, nova abordagem)
   - 1 melhoria de processo (eliminação de 1 tarefa manual)

Tempo total: 2 horas (blocar na agenda como "Revisão Neural Mensal")
```

---

### Block 3 — Alertas Automáticos (20 min)

**Os 5 alertas essenciais para instalar no n8n:**

```
Alerta 1: Proposta sem resposta há 7 dias
  Trigger: Schedule diário → Google Sheets check
  Condição: coluna "Data Envio Proposta" + 7 dias < hoje AND coluna "Status" = "PROPOSTA ENVIADA"
  Ação: WhatsApp → "Alerta: [nome] está há 7 dias sem responder a proposta."

Alerta 2: Lead novo sem contato há 24h
  Trigger: Schedule a cada 6h → Google Sheets check
  Condição: coluna "Data entrada" + 1 dia < agora AND coluna "Primeiro contato" = vazio
  Ação: WhatsApp → "Alerta: [nome] entrou ontem e ainda não recebeu contato."

Alerta 3: Cliente sem contato há 30 dias
  Trigger: Schedule semanal → Google Sheets check
  Condição: coluna "Último contato" + 30 dias < hoje AND coluna "Estágio" = "CLIENTE"
  Ação: WhatsApp → "Alerta: [nome] está há 30 dias sem contato. Risco de churn."

Alerta 4: Automação com erro
  Trigger: n8n Error Workflow (configuração nativa)
  Condição: qualquer execução com status erro
  Ação: WhatsApp → "Erro no workflow [nome] às [hora]. Verificar execuções."

Alerta 5: KB desatualizada
  Trigger: Schedule mensal → verificação de datas
  Condição: qualquer arquivo em wiki/concepts/ sem atualização há >30 dias
  Ação: WhatsApp → "KB review: [lista de arquivos]. Verificar se ainda estão atualizados."
```

**Configurar Error Workflow no n8n:**
```
Settings → Error Workflow → selecionar "Alerta de Erro"
Criar workflow "Alerta de Erro":
  [Error Trigger] → [WhatsApp: "Erro em {{$json.workflow.name}} — {{$json.error.message}}"]
```

---

### Block 4 — Plano de Evolução Trimestral (15 min)

**O sistema não é estático — ele evolui junto com o negócio.**

Definir agora o que melhorar nos próximos 3 meses em 3 dimensões:

```
PLANO DE EVOLUÇÃO — [NEGÓCIO]
Período: [data S20] → [data S20 + 90 dias]

DIMENSÃO TÉCNICA:
  Mês 1: [ ]  (ex: criar agente de FAQ automatizado para clientes novos)
  Mês 2: [ ]  (ex: integrar calendário com o squad para agendamento automático)
  Mês 3: [ ]  (ex: dashboard de analytics no Google Sheets com métricas de conversão)

DIMENSÃO COMERCIAL:
  Mês 1: [ ]  (ex: fazer pitch da oferta para 3 potenciais clientes)
  Mês 2: [ ]  (ex: fechar 1 cliente de implementação do ecossistema)
  Mês 3: [ ]  (ex: criar aperitivo/material gratuito para atrair ICP da oferta)

DIMENSÃO DE PROCESSO:
  Mês 1: [ ]  (ex: eliminar 1 tarefa manual que ainda faz toda semana)
  Mês 2: [ ]  (ex: documentar 2 novos casos de sucesso com número e prazo)
  Mês 3: [ ]  (ex: treinar 1 colaborador para usar o COMMAND-CENTER.md)
```

**Regra do plano trimestral:**
Cada item deve ser específico, com critério de conclusão claro.
"Melhorar o squad" não é um item. "Criar agente de FAQ com 10 perguntas respondidas automaticamente" é.

---

### Block 5 — 72h de Operação Autônoma (5 min de setup + observação)

**O que é o período de 72h:**

O operador define que por 72 horas (3 dias), o ecossistema opera sem intervenção ativa.
Isso não significa ignorar — significa observar sem corrigir manualmente.

**Regras do período de 72h:**
```
✅ PERMITIDO:
  - Ler o COMMAND-CENTER.md
  - Receber e ler relatórios automáticos
  - Observar o comportamento das automações
  - Anotar o que não funcionou para corrigir depois

❌ PROIBIDO:
  - Responder manualmente o que a automação deveria responder
  - Corrigir agente durante uma conversa com cliente
  - Substituir o squad em qualquer tarefa que o squad deveria executar

Se algo falhar durante as 72h:
  → Anotar o que falhou e por que
  → NÃO intervir — deixar o sistema falhar e documentar
  → Corrigir após as 72h com base no que foi observado
```

**O que o operador entrega no início de S21:**
- Relatório de 72h: o que funcionou, o que falhou, o que surpreendeu
- Lista de 3 ajustes a fazer antes de considerar o sistema maduro

**Momento de desbloqueio do título:**
> "Você passou 72h sem precisar executar. O sistema rodou por você. Isso é o que separa quem opera de quem orienta. A partir de agora, você é um **CONSELHEIRO**."

🎯 **TÍTULO DESBLOQUEADO: CONSELHEIRO**

---

### Block 6 — DESAFIO + Próxima Sessão (5 min)

**DESAFIO S20:**

```
ENTREGA 1: Protocolo de health-check instalado (diário + semanal + mensal documentados)
ENTREGA 2: 5 alertas configurados no n8n e testados
ENTREGA 3: Plano de evolução trimestral preenchido (3 dimensões × 3 meses)
ENTREGA 4: 72h de operação autônoma com relatório de observação

PRAZO: até S21

VERIFICAÇÃO: O operador apresenta o relatório de 72h ao vivo em S21
→ se o ecossistema rodou sem intervenção = CONSELHEIRO confirmado
```

**Próxima sessão:**
S21 — Autonomia Total: Soberania Neural
> "A última sessão é sua. Você demonstra o ecossistema ao vivo. E parte como REI."

---

## Artefatos da Sessão

| Artefato | Status | Doc |
|---------|--------|-----|
| Template protocolo health-check | 🔲 A criar | — |
| Template alertas n8n (5 fluxos) | 🔲 A criar | — |
| Template plano de evolução trimestral | 🔲 A criar | — |

---

## Notas para o Facilitador

**Operadores que querem intervir durante as 72h:**
É normal. A resistência de não intervir é a prova de que o sistema ainda não é confiável o suficiente para o operador. Isso é dado — não problema.
Se o sistema falha durante as 72h: é informação valiosa para S21, não sinal de fracasso de S20.

**Operadores que não conseguiram implementar tudo (squad parcial, KB incompleta):**
O período de 72h deve refletir o que existe, não o que deveria existir.
Um sistema parcial que opera sem intervenção por 72h é mais valioso do que um sistema completo que ainda precisa de manutenção manual constante.

**Diferença entre INTERVENÇÃO e MENTORIA aqui:**
- INTERVENÇÃO: 72h acontecem entre dias 20 e 21. Feedback imediato em S21.
- MENTORIA: 72h podem ser a semana inteira — o operador observa durante 7 dias em vez de 3. O DESAFIO continua o mesmo, mas o ritmo é diferente.

**Sinal de que S20 funcionou:**
O operador chega em S21 com um relatório real de 72h — não um relato de "funcionou tudo". Falhas documentadas são prova de que o operador observou e não interveio.

---

## Connections

- **Sessão anterior:** [[runa-intervencao-sessao-19-integracao-monetizacao-neural|S19 — Monetização Neural]]
- **Próxima sessão:** [[runa-intervencao-sessao-21-soberania-neural|S21 — Soberania Neural · REI]]
- **Mapa da trilha:** [[mapa-mental-trilha-21-sessoes]]
- **Trilha detalhada:** [[trilha-runa-21-sessoes]]
- **PRD:** [[runa-mentoria-prd]]
