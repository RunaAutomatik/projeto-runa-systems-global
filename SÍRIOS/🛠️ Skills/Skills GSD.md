---
date: 2026-03-29
tags: [skills, gsd, projeto, planejamento, execucao]
project: runa-systems-global
---

# Skills GSD — Get Stuff Done (Sistema de Execução de Projetos)

> Ativação: `/gsd:<comando>`
> Framework estruturado para planejamento, execução e verificação de projetos complexos
> Usa agentes especializados em pesquisa, planejamento, execução e verificação

---

## INÍCIO DE PROJETO

### /gsd:new-project — Iniciar novo projeto do zero
- **Comando:** `/gsd:new-project`
- **Para que serve:** Cria PROJECT.md com contexto profundo, gera roadmap completo com fases, pesquisa o domínio/ecossistema antes de planejar
- **Caso de uso RUNA:** Iniciar o projeto Command Center V3 ou o sistema de automação de onboarding de clientes RUNA SYSTEMS com roadmap estruturado

### /gsd:new-milestone — Novo marco/milestone
- **Comando:** `/gsd:new-milestone`
- **Para que serve:** Atualiza PROJECT.md e cria roadmap para o próximo ciclo de desenvolvimento
- **Caso de uso RUNA:** Iniciar o milestone "Sistema de Publicação Automática V2" com todas as fases mapeadas

---

## PLANEJAMENTO DE FASE

### /gsd:plan-phase — Planejar uma fase
- **Comando:** `/gsd:plan-phase`
- **Para que serve:** Cria PLAN.md detalhado para uma fase específica — pesquisa como implementar, cria plano passo a passo, verifica se o plano vai atingir o objetivo
- **Caso de uso RUNA:** Planejar a implementação do FFmpeg compositor antes de codar, criar plano para integração do inference.sh no pipeline de conteúdo

### /gsd:discuss-phase — Alinhar antes de planejar
- **Comando:** `/gsd:discuss-phase`
- **Para que serve:** Coleta contexto através de perguntas adaptativas antes de criar o plano — evita assumir coisas erradas
- **Caso de uso RUNA:** Alinhar requisitos do Command Center V3 antes de entrar em planejamento, discussão sobre integração com clientes antes de implementar onboarding

### /gsd:list-phase-assumptions — Ver suposições do plano
- **Comando:** `/gsd:list-phase-assumptions`
- **Para que serve:** Exibe todas as suposições que o agente está fazendo sobre a abordagem — permite corrigir antes de executar
- **Caso de uso RUNA:** Antes de executar a fase de integração Meta API, verificar se as suposições sobre permissões e tokens estão corretas

---

## EXECUÇÃO

### /gsd:execute-phase — Executar uma fase
- **Comando:** `/gsd:execute-phase`
- **Para que serve:** Executa todos os planos de uma fase com commits atômicos, tracking de estado, detecção de desvios e protocolo de checkpoint
- **Caso de uso RUNA:** Executar a implementação do FFmpeg compositor (Story 1.1) com commits documentados a cada passo

### /gsd:quick — Execução rápida sem plano formal
- **Comando:** `/gsd:quick`
- **Para que serve:** Task rápida com garantias GSD (commits atômicos, tracking) mas sem pesquisa e planejamento completo
- **Caso de uso RUNA:** Fazer um fix urgente no instagram-worker, adicionar um endpoint novo ao Command Center rapidamente

---

## VERIFICAÇÃO E QUALIDADE

### /gsd:verify-work — Verificar o que foi construído
- **Comando:** `/gsd:verify-work`
- **Para que serve:** Valida se as features construídas realmente entregam o que a fase prometia — análise goal-backward, não apenas "os testes passam"
- **Caso de uso RUNA:** Verificar se o sistema de publicação automática realmente funciona end-to-end antes de ativar para o @arthsystems_

### /gsd:add-tests — Gerar testes para uma fase
- **Comando:** `/gsd:add-tests`
- **Para que serve:** Gera testes de qualidade e cobertura baseados nos critérios UAT da fase
- **Caso de uso RUNA:** Gerar testes para o carousel-watcher e export-carousel.py após implementação

### /gsd:health — Saúde do diretório de planejamento
- **Comando:** `/gsd:health`
- **Para que serve:** Diagnostica o `.planning/` directory e repara problemas — planos corrompidos, fases sem contexto, inconsistências
- **Caso de uso RUNA:** Rodar quando algo no fluxo GSD parecer desalinhado ou incompleto

---

## NAVEGAÇÃO DE PROJETO

### /gsd:progress — Ver progresso atual
- **Comando:** `/gsd:progress`
- **Para que serve:** Mostra contexto completo do projeto, progresso por fase, e recomenda próxima ação (executar ou planejar)
- **Caso de uso RUNA:** Ver onde estamos no epic de Sistema de Publicação, qual a próxima fase a executar

### /gsd:map-codebase — Mapear codebase
- **Comando:** `/gsd:map-codebase`
- **Para que serve:** Analisa toda a codebase com agentes paralelos e produz documentos em `.planning/codebase/` — arquitetura, tecnologia, qualidade, preocupações
- **Caso de uso RUNA:** Mapear o runa-systems-global antes de começar um refactor grande, entender como os workers estão interconectados

### /gsd:resume-work — Retomar trabalho
- **Comando:** `/gsd:resume-work`
- **Para que serve:** Restaura contexto completo de uma sessão anterior — o que foi feito, o que falta, qual o próximo passo exato
- **Caso de uso RUNA:** Retomar o desenvolvimento do Command Center V3 após uma pausa de dias

### /gsd:pause-work — Pausar trabalho
- **Comando:** `/gsd:pause-work`
- **Para que serve:** Cria handoff completo de contexto antes de pausar — garante que a retomada seja perfeita
- **Caso de uso RUNA:** Pausar o desenvolvimento do FFmpeg compositor para focar em conteúdo

---

## GESTÃO DE ROADMAP

### /gsd:add-phase — Adicionar fase ao roadmap
- **Comando:** `/gsd:add-phase`
- **Para que serve:** Adiciona nova fase ao final do milestone atual
- **Caso de uso RUNA:** Adicionar fase de "Integração inference.sh no pipeline de conteúdo" ao Epic 1

### /gsd:insert-phase — Inserir fase urgente
- **Comando:** `/gsd:insert-phase`
- **Para que serve:** Insere fase urgente como decimal entre fases existentes (ex: fase 2.1 entre fase 2 e 3)
- **Caso de uso RUNA:** Inserir fase de "hotfix no instagram-worker" sem quebrar a numeração do roadmap

### /gsd:remove-phase — Remover fase
- **Comando:** `/gsd:remove-phase`
- **Para que serve:** Remove fase futura e renumera as subsequentes automaticamente
- **Caso de uso RUNA:** Remover fase que se tornou desnecessária após uma decisão de produto

### /gsd:complete-milestone — Fechar milestone
- **Comando:** `/gsd:complete-milestone`
- **Para que serve:** Arquiva o milestone completado e prepara para o próximo ciclo
- **Caso de uso RUNA:** Fechar o Epic 1 após publicar o sistema de automação de conteúdo completo

---

## DEBUG

### /gsd:debug — Debug sistemático
- **Comando:** `/gsd:debug`
- **Para que serve:** Método científico para investigação de bugs — mantém estado entre resets de contexto, checkpoints, hipóteses documentadas
- **Caso de uso RUNA:** Debugar o carousel-watcher quando não detecta downloads automaticamente, investigar falha na publicação do instagram-worker
