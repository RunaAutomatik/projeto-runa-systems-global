---
date: 2026-04-21
tags: [runa-intervencao, artefato, guia, permission-modes, claude-code, s02]
project: runa-systems-global
type: guide
sessao: S02 — †CODE I Ambiente
produto: [[runa-intervencao-sessao-02-tcode-ambiente]]
---

# Guia — Permission Modes do Claude Code

> Referência rápida para decisão sobre qual mode usar em cada situação.
> A escolha do mode define o grau de autonomia do agente.

---

## Os 3 Modes

### Ask (Padrão inicial — S02 a S06)

O agente pede confirmação antes de cada ação que afeta arquivos ou executa comandos.

```
Permission mode: Ask
```

**O que acontece:**
- Antes de ler um arquivo → pergunta se pode
- Antes de criar um arquivo → mostra o que vai criar e pede aprovação
- Antes de editar → mostra o diff e pede confirmação
- Antes de executar Bash → mostra o comando e aguarda

**Quando usar:**
- Aprendizado inicial (S02–S06)
- Qualquer processo novo que ainda não foi validado
- Tarefas com impacto irreversível (envio de e-mail, publicação, deleção)
- Quando você ainda está calibrando as instruções do agente

**Vantagem:** Você aprende o que o agente faz antes de confiar. Cada aprovação é uma oportunidade de corrigir ou confirmar.

**Desvantagem:** Interrompe o fluxo. Para tarefas rotineiras já validadas, se torna fricção desnecessária.

---

### Auto (Produção — a partir de S06)

O agente executa todas as ações sem pedir confirmação.

```
Permission mode: Auto
```

**O que acontece:**
- Lê, cria, edita e executa sem pausa para aprovação
- O resultado aparece ao final da execução completa
- Você vê o log do que foi feito, não aprova antes

**Quando usar:**
- Processos já validados em Ask por pelo menos 5 execuções sem erro
- Tarefas rotineiras de baixo risco (gerar relatório, formatar documento, categorizar)
- Pipelines automatizados que rodam sem supervisão ativa

**Nunca migre para Auto:**
- Processos que envolvem comunicação externa (e-mail, DM, publicação)
- Qualquer tarefa que não foi testada em Ask primeiro
- Tarefas que tocam dados financeiros ou contratos

**Migração progressiva:** Mude processo a processo. Nunca coloque todo o squad em Auto de uma vez.

---

### Explore (Auditoria — sempre disponível)

O agente lê e analisa arquivos, mas nunca escreve, edita ou executa.

```
Permission mode: Explore
```

**O que acontece:**
- Read → permitido
- Grep, Glob → permitido
- Write, Edit, Bash → bloqueado automaticamente

**Quando usar:**
- Auditar um projeto novo ou existente sem risco de alterar nada
- Analisar documentos, bases de código, estruturas de pasta
- Quando você quer entender antes de agir
- Primeira exploração de um diretório desconhecido

**Uso tático:** Se tiver medo de "quebrar algo", use Explore para entender primeiro. Só depois mude para Ask para executar.

---

## Tabela de Decisão Rápida

| Situação | Mode recomendado |
|---------|-----------------|
| Primeira semana de uso | Ask |
| Processo novo, nunca testado | Ask |
| Processo validado 5+ vezes sem erro | Auto |
| Tarefa envolve envio ou publicação | Ask (sempre) |
| Quero entender sem alterar nada | Explore |
| Auditoria de segurança ou compliance | Explore |
| Pipeline automatizado noturno | Auto (após validação extensa) |
| Agente novo criado hoje | Ask |

---

## Como mudar o mode

### Durante uma sessão ativa no terminal
```
/permission ask
/permission auto
/permission explore
```

### No settings.json (modo padrão permanente)
```json
{
  "permissions": {
    "defaultMode": "ask"
  }
}
```

Abrir o editor de settings: `/settings` no terminal do Claude Code.

---

## Evolução por fase do programa

| Fase | Sessões | Mode sugerido | Justificativa |
|------|---------|--------------|---------------|
| Fundação | S01 | — | Sem agente ativo ainda |
| †CODE | S02–S03 | Ask | Aprendendo as ferramentas |
| SQUAD$ | S04–S06 | Ask | Construindo e testando o squad |
| MIND$ | S07–S08 | Ask → Auto (parcial) | KB validada, primeiros processos em Auto |
| Especialização | S09–S17 | Auto (processos validados) | Squad maduro, processos conhecidos |
| Integração | S18–S20 | Auto | Orquestração plena — squad opera sozinho |
| Soberania | S21 | Auto | Operação autônoma documentada e auditada |

---

*Sessão de origem: [[runa-intervencao-sessao-02-tcode-ambiente|S02 — †CODE I · Ambiente]]*
*Relacionado: [[cheat-sheet-ferramentas-core|Cheat Sheet de Ferramentas Core]]*
