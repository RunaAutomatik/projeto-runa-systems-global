---
date: 2026-04-27
tags: [runa-intervencao, mentoria, sessao-05, lucas, pesto, designer, calibracao, create-skill]
project: runa-systems-global
type: session-record
cliente: Lucas — Pesto (agência criativa)
status: realizada
duracao: 81min
---

# Runa Intervenção — Sessão 05: Calibração Designer + Gestão de Contexto

> **Data:** 2026-04-27 | **Duração:** 81 min

---

## O Que Foi Construído

### Primeiro post publicado
- Primeiro post real para a marca Pesto gerado e publicado
- Validação end-to-end do pipeline Designer → geração → publicação

### Sistema de calibração do Designer agent
- Processo de refinamento iterativo com múltiplas gerações de imagem
- Sistema de regras numeradas: `#01`, `#02`... (substituíveis, não acumuláveis)
- Pasta de referência de marca: aprovados servem como base para próximas gerações
- Lógica: feedback → regra → aplicar → aprovar/rejeitar → atualizar regra

### Gestão de contexto (problema resolvido)
- **Problema:** Agente "esquecia" regras no meio da sessão por overflow de contexto
- **Solução:** Trabalhar em batches por "semana", abrir novo chat por batch
- Regras numeradas facilitam: `#03 substitui #02` sem acumular tokens

### Exploração de ferramentas alternativas
- **Claude.ai Canva integration** testada: funciona, mas usa templates genéricos
- **Claude Design** explorado: boa para arquitetura vetorial, limitada para fotos reais
- **Decisão:** Claude Code + inference.sh permanece como pipeline principal de imagens

### Skill create-skill instalada
- Lucas tem capacidade de criar skills próprias dentro do sistema
- Documentação de como criar, testar e instalar novas skills

---

## Conceitos Ensinados

| Conceito | Descrição |
|---------|-----------|
| Regras numeradas | Sistema de calibração progressivo — sem acúmulo infinito |
| Batch por semana | Limitar janela de contexto para evitar drift |
| Pasta de referência | Outputs aprovados = contexto visual futuro para o agente |
| Claude Design vs CC | Diferença de capacidades: vetores/SVG vs fotos/mídia real |
| create-skill | Meta-skill para criar novas skills no sistema |

---

## Conexões

- **Sessão anterior:** [[runa-intervencao-sessao-04-lucas-pesto]]
- **Próxima:** [[runa-intervencao-sessao-06-lucas-pesto]]
