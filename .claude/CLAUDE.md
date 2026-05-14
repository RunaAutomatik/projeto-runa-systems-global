# Synkra AIOX Development Rules for Claude Code

You are working with Synkra AIOX, an AI-Orchestrated System for Full Stack Development.

<!-- AIOX-MANAGED-START: core-framework -->
## Core Framework Understanding

Synkra AIOX is a meta-framework that orchestrates AI agents to handle complex development workflows. Always recognize and work within this architecture.
<!-- AIOX-MANAGED-END: core-framework -->

<!-- AIOX-MANAGED-START: constitution -->
## Constitution

O AIOX possui uma **Constitution formal** com princípios inegociáveis e gates automáticos.

**Documento completo:** `.aiox-core/constitution.md`

**Princípios fundamentais:**

| Artigo | Princípio | Severidade |
|--------|-----------|------------|
| I | CLI First | NON-NEGOTIABLE |
| II | Agent Authority | NON-NEGOTIABLE |
| III | Story-Driven Development | MUST |
| IV | No Invention | MUST |
| V | Quality First | MUST |
| VI | Absolute Imports | SHOULD |

**Gates automáticos bloqueiam violações.** Consulte a Constitution para detalhes completos.
<!-- AIOX-MANAGED-END: constitution -->

<!-- AIOX-MANAGED-START: sistema-de-agentes -->
## Sistema de Agentes

### Ativação de Agentes
Use `@agent-name` ou `/AIOX:agents:agent-name`:

| Agente | Persona | Escopo Principal |
|--------|---------|------------------|
| `@dev` | Dex | Implementação de código |
| `@qa` | Quinn | Testes e qualidade |
| `@architect` | Aria | Arquitetura e design técnico |
| `@pm` | Morgan | Product Management |
| `@po` | Pax | Product Owner, stories/epics |
| `@sm` | River | Scrum Master |
| `@analyst` | Alex | Pesquisa e análise |
| `@data-engineer` | Dara | Database design |
| `@ux-design-expert` | Uma | UX/UI design |
| `@devops` | Gage | CI/CD, git push (EXCLUSIVO) |

### Comandos de Agentes
Use prefixo `*` para comandos:
- `*help` - Mostrar comandos disponíveis
- `*create-story` - Criar story de desenvolvimento
- `*task {name}` - Executar task específica
- `*exit` - Sair do modo agente
<!-- AIOX-MANAGED-END: sistema-de-agentes -->

<!-- AIOX-MANAGED-START: agent-system -->
## Agent System

### Agent Activation
- Agents are activated with @agent-name syntax: @dev, @qa, @architect, @pm, @po, @sm, @analyst
- The master agent is activated with @aiox-master
- Agent commands use the * prefix: *help, *create-story, *task, *exit

### Agent Context
When an agent is active:
- Follow that agent's specific persona and expertise
- Use the agent's designated workflow patterns
- Maintain the agent's perspective throughout the interaction
<!-- AIOX-MANAGED-END: agent-system -->

## Development Methodology

### Story-Driven Development
1. **Work from stories** - All development starts with a story in `docs/stories/`
2. **Update progress** - Mark checkboxes as tasks complete: [ ] → [x]
3. **Track changes** - Maintain the File List section in the story
4. **Follow criteria** - Implement exactly what the acceptance criteria specify

### Code Standards
- Write clean, self-documenting code
- Follow existing patterns in the codebase
- Include comprehensive error handling
- Add unit tests for all new functionality
- Use TypeScript/JavaScript best practices

### Testing Requirements
- Run all tests before marking tasks complete
- Ensure linting passes: `npm run lint`
- Verify type checking: `npm run typecheck`
- Add tests for new features
- Test edge cases and error scenarios

<!-- AIOX-MANAGED-START: framework-structure -->
## AIOX Framework Structure

```
aiox-core/
├── agents/         # Agent persona definitions (YAML/Markdown)
├── tasks/          # Executable task workflows
├── workflows/      # Multi-step workflow definitions
├── templates/      # Document and code templates
├── checklists/     # Validation and review checklists
└── rules/          # Framework rules and patterns

docs/
├── stories/        # Development stories (numbered)
├── prd/            # Product requirement documents
├── architecture/   # System architecture documentation
└── guides/         # User and developer guides
```
<!-- AIOX-MANAGED-END: framework-structure -->

<!-- AIOX-MANAGED-START: framework-boundary -->
## Framework vs Project Boundary

O AIOX usa um modelo de 4 camadas (L1-L4) para separar artefatos do framework e do projeto. Deny rules em `.claude/settings.json` reforçam isso deterministicamente.

| Camada | Mutabilidade | Paths | Notas |
|--------|-------------|-------|-------|
| **L1** Framework Core | NEVER modify | `.aiox-core/core/`, `.aiox-core/constitution.md`, `bin/aiox.js`, `bin/aiox-init.js` | Protegido por deny rules |
| **L2** Framework Templates | NEVER modify | `.aiox-core/development/tasks/`, `.aiox-core/development/templates/`, `.aiox-core/development/checklists/`, `.aiox-core/development/workflows/`, `.aiox-core/infrastructure/` | Extend-only |
| **L3** Project Config | Mutable (exceptions) | `.aiox-core/data/`, `agents/*/MEMORY.md`, `core-config.yaml` | Allow rules permitem |
| **L4** Project Runtime | ALWAYS modify | `docs/stories/`, `packages/`, `squads/`, `tests/` | Trabalho do projeto |

**Toggle:** `core-config.yaml` → `boundary.frameworkProtection: true/false` controla se deny rules são ativas (default: true para projetos, false para contribuidores do framework).

> **Referência formal:** `.claude/settings.json` (deny/allow rules), `.claude/rules/agent-authority.md`
<!-- AIOX-MANAGED-END: framework-boundary -->

<!-- AIOX-MANAGED-START: rules-system -->
## Rules System

O AIOX carrega regras contextuais de `.claude/rules/` automaticamente. Regras com frontmatter `paths:` só carregam quando arquivos correspondentes são editados.

| Rule File | Description |
|-----------|-------------|
| `agent-authority.md` | Agent delegation matrix and exclusive operations |
| `agent-handoff.md` | Agent switch compaction protocol for context optimization |
| `agent-memory-imports.md` | Agent memory lifecycle and CLAUDE.md ownership |
| `coderabbit-integration.md` | Automated code review integration rules |
| `ids-principles.md` | Incremental Development System principles |
| `mcp-usage.md` | MCP server usage rules and tool selection priority |
| `story-lifecycle.md` | Story status transitions and quality gates |
| `workflow-execution.md` | 4 primary workflows (SDC, QA Loop, Spec Pipeline, Brownfield) |
| `product-radar.md` | Continuous product opportunity capture — everything built feeds RUNA SYSTEMS |
| `capability-map.md` | Tool/skill/MCP assignment per agent and product — check before executing any task |
| `stitch-usage.md` | Google Stitch design generation — when/how/who uses stitch-design, stitch-loop, taste-design |
| `impeccable-usage.md` | Impeccable design quality — 23 commands, 27 anti-pattern detection, Stitch DESIGN.md compatible, pre-commit CLI (@devops), @ux-design-expert primary |
| `carousel-workflow.md` | Mandatory 6-step protocol for all carousel creation (FREYJA brief → pin.md → hub → keywords → instructions → commit) |
| `inference-sh-usage.md` | inference.sh skills (MAYA image/video/audio, FREYJA content, ARES intel) — app IDs, patterns, anti-patterns |
| `language-policy.md` | English for all internal docs/inter-agent communication; Portuguese only for direct user interaction |
| `obsidian-memory.md` | All project docs → save to Obsidian vault SÍRIOS/; date injection rules; dia:abrir/dia:fechar workflow |
| `tool-examples.md` | Concrete input examples for tool selection (context7, git, coderabbit, Supabase, GitHub CLI) |
| `tool-onboarding.md` | T1/T2/T3 protocol — every new tool/skill/MCP/CLI/worker MUST be documented before use |
| `product-delivery-standard.md` | 4-layer product delivery architecture (PRD → aperitivo → offer .docx → Skool docs) — standard for all products |
| `tool-response-filtering.md` | Dynamic token reduction — filter MCP/WebFetch responses using tool-registry.yaml config |
| `pulse-token-efficiency.md` | PULSE protocol — code compaction, lazy loading, context budget, memory file 200-line limit |
| `llm-wiki-usage.md` | Karpathy LLM wiki pattern — llm-wiki-setup + wiki-self-heal skills, AKASHA vault, ingest/query/lint workflows |
| `higgsfield-mcp-usage.md` | Higgsfield access — CLI + Skills (Tier 0/1 generation), MCP (soul/media mgmt), GPT Image 2 + refs workflow, dual-method Arthur config (MAYA primary) |
| `muapi-direct-usage.md` | muapi.ai direct API — Lip Sync Studio (9 models), Extended Video (Veo 3.1/Sora 2/Wan 2.6), GPT-4o image edit, Marketing Studio VIP 1080p (MAYA primary) |
| `ead-gate.md` | EAD Gate — mandatory Phase 0 before spec pipeline (Eliminate→Automate→Delegate triage, @pm applies, @po validates) |
| `obsidian-document-governance.md` | Anti-duplication protocol — check-before-create, document taxonomy (Skills/Templates/MENTORADOS), naming conventions |
| `video-use-usage.md` | video-use skill — raw footage editing (filler removal, color grade, subtitles via FFmpeg + ElevenLabs Scribe); MAYA primary; when/not to use vs Higgsfield/muapi/Remotion |
| `conversion-post-protocol.md` | Mandatory 4-element rule — every Instagram post must have keyword + Zernio automation + entregável + checkout link before publishing. FREYJA + HERMES + @devops. Single product: RUNA R$ 7.000 |

> **Diretório:** `.claude/rules/` — rules são carregadas automaticamente pelo Claude Code quando relevantes.
<!-- AIOX-MANAGED-END: rules-system -->

<!-- AIOX-MANAGED-START: code-intelligence -->
## Code Intelligence

O AIOX possui um sistema de code intelligence opcional que enriquece operações com dados de análise de código.

| Status | Descrição | Comportamento |
|--------|-----------|---------------|
| **Configured** | Provider ativo e funcional | Enrichment completo disponível |
| **Fallback** | Provider indisponível | Sistema opera normalmente sem enrichment — graceful degradation |
| **Disabled** | Nenhum provider configurado | Funcionalidade de code-intel ignorada silenciosamente |

**Graceful Fallback:** Code intelligence é sempre opcional. `isCodeIntelAvailable()` verifica disponibilidade antes de qualquer operação. Se indisponível, o sistema retorna o resultado base sem modificação — nunca falha.

**Diagnóstico:** `aiox doctor` inclui check de code-intel provider status.

> **Referência:** `.aiox-core/core/code-intel/` — provider interface, enricher, client
<!-- AIOX-MANAGED-END: code-intelligence -->

<!-- AIOX-MANAGED-START: graph-dashboard -->
## Graph Dashboard

O CLI `aiox graph` visualiza dependências, estatísticas de entidades e status de providers.

### Comandos

```bash
aiox graph --deps                        # Dependency tree (ASCII)
aiox graph --deps --format=json          # Output como JSON
aiox graph --deps --format=html          # Interactive HTML (abre browser)
aiox graph --deps --format=mermaid       # Mermaid diagram
aiox graph --deps --format=dot           # DOT format (Graphviz)
aiox graph --deps --watch                # Live mode com auto-refresh
aiox graph --deps --watch --interval=10  # Refresh a cada 10 segundos
aiox graph --stats                       # Entity stats e cache metrics
```

**Formatos de saída:** ascii (default), json, dot, mermaid, html

> **Referência:** `.aiox-core/core/graph-dashboard/` — CLI, renderers, data sources
<!-- AIOX-MANAGED-END: graph-dashboard -->

## Workflow Execution

### Task Execution Pattern
1. Read the complete task/workflow definition
2. Understand all elicitation points
3. Execute steps sequentially
4. Handle errors gracefully
5. Provide clear feedback

### Interactive Workflows
- Workflows with `elicit: true` require user input
- Present options clearly
- Validate user responses
- Provide helpful defaults

## Best Practices

### When implementing features:
- Check existing patterns first
- Reuse components and utilities
- Follow naming conventions
- Keep functions focused and testable
- Document complex logic

### When working with agents:
- Respect agent boundaries
- Use appropriate agent for each task
- Follow agent communication patterns
- Maintain agent context

### When handling errors:
```javascript
try {
  // Operation
} catch (error) {
  console.error(`Error in ${operation}:`, error);
  // Provide helpful error message
  throw new Error(`Failed to ${operation}: ${error.message}`);
}
```

## Git & GitHub Integration

### Commit Conventions
- Use conventional commits: `feat:`, `fix:`, `docs:`, `chore:`, etc.
- Reference story ID: `feat: implement IDE detection [Story 2.1]`
- Keep commits atomic and focused

### GitHub CLI Usage
- Ensure authenticated: `gh auth status`
- Use for PR creation: `gh pr create`
- Check org access: `gh api user/memberships`

<!-- AIOX-MANAGED-START: aiox-patterns -->
## AIOX-Specific Patterns

### Working with Templates
```javascript
const template = await loadTemplate('template-name');
const rendered = await renderTemplate(template, context);
```

### Agent Command Handling
```javascript
if (command.startsWith('*')) {
  const agentCommand = command.substring(1);
  await executeAgentCommand(agentCommand, args);
}
```

### Story Updates
```javascript
// Update story progress
const story = await loadStory(storyId);
story.updateTask(taskId, { status: 'completed' });
await story.save();
```
<!-- AIOX-MANAGED-END: aiox-patterns -->

## Environment Setup

### Required Tools
- Node.js 18+
- GitHub CLI
- Git
- Your preferred package manager (npm/yarn/pnpm)

### Configuration Files
- `.aiox/config.yaml` - Framework configuration
- `.env` - Environment variables
- `aiox.config.js` - Project-specific settings

<!-- AIOX-MANAGED-START: common-commands -->
## Common Commands

### AIOX Master Commands
- `*help` - Show available commands
- `*create-story` - Create new story
- `*task {name}` - Execute specific task
- `*workflow {name}` - Run workflow

### Development Commands
- `npm run dev` - Start development
- `npm test` - Run tests
- `npm run lint` - Check code style
- `npm run build` - Build project
<!-- AIOX-MANAGED-END: common-commands -->

## Debugging

### Enable Debug Mode
```bash
export AIOX_DEBUG=true
```

### View Agent Logs
```bash
tail -f .aiox/logs/agent.log
```

### Trace Workflow Execution
```bash
npm run trace -- workflow-name
```

## Claude Code Specific Configuration

### Performance Optimization
- Prefer batched tool calls when possible for better performance
- Use parallel execution for independent operations
- Cache frequently accessed data in memory during sessions

### Tool Usage Guidelines
- Always use the Grep tool for searching, never `grep` or `rg` in bash
- Use the Task tool for complex multi-step operations
- Batch file reads/writes when processing multiple files
- Prefer editing existing files over creating new ones

### Session Management
- Track story progress throughout the session
- Update checkboxes immediately after completing tasks
- Maintain context of the current story being worked on
- Save important state before long-running operations

### Error Recovery
- Always provide recovery suggestions for failures
- Include error context in messages to user
- Suggest rollback procedures when appropriate
- Document any manual fixes required

### Testing Strategy
- Run tests incrementally during development
- Always verify lint and typecheck before marking complete
- Test edge cases for each new feature
- Document test scenarios in story files

### Documentation
- Update relevant docs when changing functionality
- Include code examples in documentation
- Keep README synchronized with actual behavior
- Document breaking changes prominently

---
*Synkra AIOX Claude Code Configuration v2.0*

<!-- KARPATHY-GUIDELINES-START -->
## Karpathy Coding Guidelines

Behavioral guidelines to reduce common LLM coding mistakes. These complement AIOX rules.

**Tradeoff:** These guidelines bias toward caution over speed. For trivial tasks, use judgment.

### 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them — don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

### 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

### 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it — don't delete it.

When your changes create orphans:
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

Every changed line should trace directly to the user's request.

### 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:
- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.
<!-- KARPATHY-GUIDELINES-END -->
