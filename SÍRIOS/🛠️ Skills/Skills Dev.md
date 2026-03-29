---
date: 2026-03-29
tags: [skills, dev, codigo, arquitetura, design, frontend]
project: runa-systems-global
---

# Skills Dev — Desenvolvimento, Design e Arquitetura

> Skills do projeto AIOX para desenvolvimento, design de interface, vídeo e arquitetura
> Localização: `c:/runa-systems-global/.claude/skills/`

---

## ui-ux-pro-max — Design de Interface Inteligente

### Ativação
- **Comando:** A skill ativa automaticamente quando @dev trabalha em interfaces
- **Argumentos:** `plan | build | create | design | implement | review | fix | improve | optimize`
- **Para que serve:** Design intelligence com 67 estilos visuais, 96 paletas, 57 combinações tipográficas, 25 tipos de gráficos, suporte a 13 stacks (React, Next.js, Vue, Svelte, SwiftUI, Flutter, Tailwind, shadcn/ui)
- **Caso de uso RUNA:** Projetar todas as interfaces do ecossistema — Command Center, landing pages RUNA SYSTEMS, dashboard de clientes, app mobile

### Estilos disponíveis
`glassmorphism` | `claymorphism` | `minimalism` | `brutalism` | `neumorphism` | `bento grid` | `dark mode` | `skeuomorphism` | `flat design` | `3D elements` | `gradient mesh` | e mais 56

### Paletas
96 paletas organizadas por emoção, indústria e tendência — desde "Corporate Blue" até "Cyberpunk Neon" e "Earth Tones"

### Como usar
```
@dev build landing page para RUNA SYSTEMS no estilo glassmorphism dark com bento grid
@dev create dashboard para Command Center com paleta neon blue cyberpunk
@dev review o design do carousel do @arthsystems_, está visualmente alinhado com a marca?
```

---

## frontend-design — Interfaces Premium de Produção

### Ativação
- **Comando:** `/frontend-design`
- **Para que serve:** Criar interfaces frontend de alta qualidade e design diferenciado — produção-ready com qualidade de agência. Combina ui-ux-pro-max com implementação real
- **Caso de uso RUNA:** Criar a landing page de vendas do RUNA SYSTEMS (R$15k), páginas de produto para $QUAD e CREATOR$, interfaces do Command Center V3

### Quando usar vs ui-ux-pro-max
- `ui-ux-pro-max` → para decisões de design, guidelines, revisões, estilo
- `frontend-design` → quando quer a implementação HTML/CSS/TSX completa pronta para uso

---

## video-to-website — Vídeo → Site Animado

### Ativação
- **Comando:** `/video-to-website`
- **Para que serve:** Transforma qualquer vídeo em um site premium com scroll-driven animation — GSAP, canvas frame rendering, animações em camadas, efeito de "vídeo que acompanha o scroll"
- **Caso de uso RUNA:** Criar landing page de lançamento do RUNA SYSTEMS onde o vídeo de apresentação se anima conforme o usuário scrolla — impacto visual de agência top tier por um custo zero

### Como funciona
1. Você fornece um vídeo (URL ou arquivo)
2. A skill extrai os frames
3. Gera HTML/JS com GSAP choreography e canvas rendering
4. Output: site completo pronto para deploy no Netlify

---

## agent-workflows — Criação de Workflows de Agentes

### Ativação
- **Comando:** A skill ativa automaticamente para @architect quando planejando sistemas de agentes
- **Para que serve:** Definir workflows multi-agente, handoffs, dependências, trigger conditions e fluxos de execução
- **Caso de uso RUNA:** Projetar o workflow completo do squad RUNA SYSTEMS — como CEO Neural, Designer Neural, Copy Neural e os outros 5 agentes colaboram entre si

---

## architecture-design — Design de Arquitetura

### Ativação
- **Comando:** A skill ativa automaticamente para @architect
- **Para que serve:** Decisões arquiteturais de sistema — seleção de tecnologia, padrões de integração, design de API, estrutura de dados, trade-offs
- **Caso de uso RUNA:** Projetar a arquitetura do Command Center V3, decidir o stack de persistência para o histórico de clientes, arquitetar o sistema de triggers do N8N

---

## code-review — Revisão de Código

### Ativação
- **Comando:** A skill ativa automaticamente para @qa
- **Para que serve:** Revisão profunda de código — bugs, vulnerabilidades de segurança, qualidade, aderência a padrões do projeto, convenções AIOX
- **Caso de uso RUNA:** Revisar os workers (instagram-worker, content-worker) antes de fazer deploy, validar o código do Command Center antes de mostrar para clientes

---

## devops-automation — Automação de Deploy

### Ativação
- **Comando:** A skill ativa automaticamente para @devops (Gage)
- **Para que serve:** CI/CD, pipeline de deploy, gerenciamento de branches, configuração de infraestrutura, Netlify deploys
- **Caso de uso RUNA:** Configurar deploy automático do Command Center via Netlify, gerenciar branches de feature para os workers do ecossistema

---

## spec-writing — Escrita de Especificações

### Ativação
- **Comando:** A skill ativa automaticamente para @pm (Morgan) no Spec Pipeline
- **Para que serve:** Transformar requisitos informais em especificações executáveis com critérios de aceitação, requisitos funcionais e não-funcionais, constraints
- **Caso de uso RUNA:** Escrever spec formal para o FFmpeg compositor (Story 1.1), para o sistema de publicação automática de carousels, para o Command Center V3

---

## story-management — Gestão de Stories

### Ativação
- **Comando:** A skill ativa automaticamente para @sm (River) e @po (Pax)
- **Para que serve:** Criar, validar e atualizar stories de desenvolvimento no formato AIOX — checkboxes, critérios de aceite, File List, status
- **Caso de uso RUNA:** Criar stories para cada feature do ecossistema runa-systems-global no diretório `docs/stories/`

---

## testing-strategy — Estratégia de Testes

### Ativação
- **Comando:** A skill ativa automaticamente para @qa (Quinn)
- **Para que serve:** Definir estratégia de testes, criar casos de teste, planejar cobertura de edge cases, QA gate
- **Caso de uso RUNA:** Definir cobertura de testes para o instagram-worker antes de publicar automaticamente para 17k+ seguidores do @arthsystems_
