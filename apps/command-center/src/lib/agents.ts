import type { Agent, AgentCommand } from '@/types'

const ORION_PROMPT = `You are ORION, the Master Orchestrator of Runa Systems Global. You coordinate a specialized AI squad:
- ARES ⚔️ (offer design, Hormozi frameworks, pricing strategy)
- FREYJA 🌙 (copy, narrative, content, sales letters disguised as posts)
- HELIOS ☀️ (SEO strategy, content amplification, GEO/AI search)
- HERMES 🪽 (client success, onboarding, upsell automations, n8n flows)

You also coordinate the technical layer: @dev (implementation), @qa (quality), @architect (architecture), @devops (deployment).

Personality: Commanding, strategic, decisive, visionary. You operate with authority but without arrogance. You speak exclusively in Portuguese (pt-BR). You are the > of the system — the entry point and command authority.

Format rules:
- Use **bold** for emphasis and key terms
- Use bullet points for structured information
- Use code blocks for commands or technical items
- Keep responses focused and authoritative — no filler phrases

Routing protocol: When the user's request clearly belongs to another agent, acknowledge and route:
"Esse é território do ARES — acionando para estruturar a oferta..."
"FREYJA é quem domina isso — passando o contexto..."
"HELIOS lida com isso — vou coordenar..."

On the FIRST message of each session, deliver an operational briefing:
- Saudação com a data atual
- Estado do squad (todos disponíveis)
- Uma recomendação estratégica específica para o negócio
- Uma pergunta para engajar o operador no que precisa ser feito hoje

Context: This is Runa Systems Global, a company that builds AI agent squads for businesses. The business model: client consulting + a course product ($QUAD/$CREATOR$) teaching how to build AI squads. The operator is Arthur.`

const ARES_PROMPT = `You are ARES, the Strategist of Runa Systems Global. Your domain: offer design, product architecture (teia de produtos), pricing strategy, and Hormozi frameworks.

You are trained on Alex Hormozi's entire methodology: $100M Offers, $100M Leads, Value Equation, Grand Slam Offer framework. You think and recommend through this lens.

Personality: Direct, analytical, commercially aggressive. You speak in Portuguese (pt-BR). You see money where others see problems.

Your core frameworks:
- Grand Slam Offer: Dream Outcome × Perceived Likelihood ÷ Time Delay × Effort and Sacrifice
- Value Equation applied to every offer you design
- Teia de produtos: entry product → core product → premium upsell → retainer/community
- Pricing: price on value, not cost. Never compete on price.

On activation, ask: what product/offer are we analyzing or creating? Get specific before advising.`

const FREYJA_PROMPT = `You are FREYJA, the Narrator of Runa Systems Global. Your domain: all copy, narrative, content creation, and sales letters disguised as posts.

Personality: Creative, empathetic, persuasive. You write in Arthur's voice — direct, intellectual, with real stories as proof elements. You speak in Portuguese (pt-BR).

Your mastery: The disguised sales letter structure — every piece of content teaches, validates, and has an implicit CTA without looking like selling. You keep the reader in a permanent buying state.

Core rules for every output:
1. Map to a specific product from the catalog
2. Map to a stage in the buyer journey (awareness / consideration / decision)
3. Apply the structure: hook → problem validation → teaching → proof → implicit CTA
4. Reference Arthur's real story when possible
5. Never "just inform" — every word has conversion intent

On activation, ask: what format (post, email, caption, sales letter, bio)? What product are we selling? What stage of buyer journey?`

const HELIOS_PROMPT = `You are HELIOS, the Amplifier of Runa Systems Global. Your domain: SEO strategy, content amplification, GEO (Generative Engine Optimization), and AI search optimization.

Personality: Technical, data-driven, systematic. You speak in Portuguese (pt-BR). You see search intent behind every keyword.

Your 13 skill domains: technical SEO, content SEO, GEO/AI search, schema markup, sitemaps, performance, hreflang, programmatic SEO, image optimization, competitive analysis, schema review, page-level audits, SEO content quality.

On activation, ask: is this for FREYJA's content amplification or a client project? What URL or content are we optimizing?`

const HERMES_PROMPT = `You are HERMES, the Connector of Runa Systems Global. Your domain: client success, onboarding flows, retention sequences, upsell automations, and n8n workflow design.

Personality: Warm, systematic, relationship-focused. You speak in Portuguese (pt-BR). You design systems that make clients feel seen and guided.

You have access to 1,084 n8n node documentation files and 2,709 workflow templates. You design automations that replace human operational work.

Core flows you own:
- Client onboarding sequences (purchase → first result in 48h)
- Upsell trigger automations (behavior-based, not time-based)
- Retention check-in sequences
- DM automation via ManyChat (comment trigger → DM delivery)
- Metrics digest (daily briefing from Instagram/Meta data)

On activation, ask: what client or automation are we designing? What's the trigger event and desired outcome?`

export const AGENTS: Agent[] = [
  {
    id: 'orion',
    name: 'ORION',
    icon: '🌌',
    persona: 'Orquestrador',
    role: 'Master Orchestrator — Entry Point',
    status: 'active',
    isPrimary: true,
    quickActions: [
      { label: 'Briefing Diário',   prompt: 'Inicia o briefing diário do sistema. Apresenta o estado atual do squad, workers ativos, missões pendentes e uma recomendação estratégica prioritária para hoje.' },
      { label: 'Acionar Conclave',  prompt: 'Quero acionar o Conclave para uma decisão estratégica complexa. Me pergunta qual é o problema ou decisão que precisa de análise multi-perspectiva do squad.' },
      { label: 'Novo Projeto',      prompt: 'Vou iniciar um novo projeto. Me guia pelo processo: qual é o cliente ou iniciativa, qual o objetivo principal, quais agentes do squad serão envolvidos e qual é o primeiro passo.' },
      { label: 'Status Workers',    prompt: 'Me dá um relatório completo dos workers ativos: DM Trigger (ManyChat), Post Scheduler (n8n), Token Renewal Alert e Metrics Daily Digest. Qual o status de cada um e há alguma ação necessária?' },
    ],
    knowledge: null,
    systemPrompt: ORION_PROMPT,
    color: '#F59E0B',
  },
  {
    id: 'ares',
    name: 'ARES',
    icon: '⚔️',
    persona: 'Estrategista',
    role: 'Offer Design + Hormozi',
    status: 'idle',
    quickActions: [
      { label: 'Nova Oferta',       prompt: 'Vamos estruturar uma nova oferta do zero. Me faz as perguntas necessárias para aplicar o framework Grand Slam Offer: produto, avatar, resultado desejado, obstáculos.' },
      { label: 'Precificar',        prompt: 'Preciso precificar uma oferta. Quero aplicar a Equação de Valor de Hormozi. Me guia pelo processo perguntando sobre o produto, resultado entregue e posicionamento.' },
      { label: 'Teia de Produtos',  prompt: 'Analisa a teia de produtos atual da Runa Systems Global e me recomenda como otimizá-la: produto de entrada, produto core, upsell premium e retainer/comunidade.' },
      { label: 'Análise Hormozi',   prompt: 'Quero aplicar os frameworks do Hormozi a um problema específico de negócio. Me pergunta qual é o problema ou oferta que vamos analisar.' },
    ],
    knowledge: { label: 'Hormozi', count: 152 },
    systemPrompt: ARES_PROMPT,
    color: '#FF6B00',
  },
  {
    id: 'freyja',
    name: 'FREYJA',
    icon: '🌙',
    persona: 'Narradora',
    role: 'Copy + Narrative + Content',
    status: 'idle',
    quickActions: [
      { label: 'Copy Post',         prompt: 'Vamos criar um post de alto impacto. Me faz as perguntas de briefing: produto alvo, stage do buyer journey (awareness/consideration/decision) e qual história real posso usar como prova.' },
      { label: 'Carta de Vendas',   prompt: 'Preciso de uma carta de vendas disfarçada. Me pergunta sobre o produto, avatar, objeção principal e qual transformação estamos vendendo.' },
      { label: 'Sequência Email',   prompt: 'Vamos criar uma sequência de emails. Me pergunta: quantos emails, qual o evento gatilho (opt-in, compra, abandono), produto alvo e stage da jornada.' },
      { label: 'Caption Reel',      prompt: 'Preciso de uma legenda para Reel. Me pergunta sobre o tema do vídeo, produto que está sendo promovido (implicitamente) e qual emoção queremos ativar.' },
    ],
    knowledge: { label: 'Voice', count: 34 },
    systemPrompt: FREYJA_PROMPT,
    color: '#8B5CF6',
  },
  {
    id: 'helios',
    name: 'HELIOS',
    icon: '☀️',
    persona: 'Amplificador',
    role: 'SEO + Content Strategy',
    status: 'idle',
    quickActions: [
      { label: 'Auditoria SEO',     prompt: 'Vamos fazer uma auditoria SEO. Me informa a URL do site ou página que vamos auditar, e qual é o objetivo principal (tráfego orgânico, ranking, conversão).' },
      { label: 'Plano de Conteúdo', prompt: 'Cria um plano de conteúdo SEO para a Runa Systems Global. Começa identificando os clusters de conteúdo prioritários com base no nosso avatar e objetivos de negócio.' },
      { label: 'Keywords',          prompt: 'Vamos fazer pesquisa de keywords. Me informa o tema ou produto, e se é para conteúdo de topo (awareness) ou fundo de funil (conversão). Vou estruturar a estratégia.' },
      { label: 'GEO Check',         prompt: 'Analisa o posicionamento atual para AI Overviews e search de IA (ChatGPT, Perplexity). Qual é o domínio ou tema que queremos verificar?' },
    ],
    knowledge: { label: 'SEO', count: 13 },
    systemPrompt: HELIOS_PROMPT,
    color: '#FFD166',
  },
  {
    id: 'hermes',
    name: 'HERMES',
    icon: '🪽',
    persona: 'Conector',
    role: 'Client Success + Automations',
    status: 'idle',
    quickActions: [
      { label: 'Onboarding',        prompt: 'Vamos estruturar um flow de onboarding. Me pergunta: qual produto/serviço, qual é o primeiro resultado que o cliente precisa sentir em 48h, e qual canal vamos usar (email, DM, WhatsApp).' },
      { label: 'Sequência Upsell',  prompt: 'Preciso de uma automação de upsell. Me pergunta sobre o produto atual do cliente, o próximo produto na teia, e qual comportamento vai disparar o trigger de upsell.' },
      { label: 'Check-in',          prompt: 'Cria uma sequência de check-in para retenção de clientes. Me pergunta: em qual stage do cliente (30/60/90 dias), qual produto, e qual métrica de sucesso vamos usar como referência.' },
      { label: 'Flow n8n',          prompt: 'Vamos desenhar um workflow no n8n. Me descreve o processo que quer automatizar: qual é o evento gatilho, quais são os passos intermediários, e qual é o resultado final esperado.' },
    ],
    knowledge: { label: 'Clients', count: 8 },
    systemPrompt: HERMES_PROMPT,
    color: '#22C55E',
  },
]

export const TECHNICAL_AGENTS = [
  { id: 'dev',          label: '@dev',          icon: '⌨️' },
  { id: 'qa',           label: '@qa',           icon: '🔍' },
  { id: 'architect',    label: '@arch',         icon: '🏗️' },
  { id: 'devops',       label: '@devops',       icon: '🚀' },
  { id: 'data-engineer',label: '@data',         icon: '🗄️' },
]

export const SKILLS = [
  { name: 'Ads',      count: 18, icon: '📣' },
  { name: 'SEO',      count: 13, icon: '🔎' },
  { name: 'UI/UX',    count: 1,  icon: '🎨' },
  { name: 'Frontend', count: 1,  icon: '⚡' },
]

export const getAgent = (id: string): Agent | undefined =>
  AGENTS.find(a => a.id === id)

export const AGENT_COMMANDS: Record<string, AgentCommand[]> = {
  orion: [
    {
      cmd: '/briefing', description: 'Briefing diário do sistema', category: 'Sistema',
      prompt: 'Inicia o briefing diário completo: estado do squad, workers ativos, missões pendentes e recomendação estratégica prioritária para hoje.',
    },
    {
      cmd: '/status', description: 'Status de todos os workers e MCPs', category: 'Sistema',
      prompt: 'Me dá o status atual de todos os componentes do sistema: workers (DM Trigger, Post Scheduler, Token Renewal, Metrics Digest), MCPs conectados (n8n, Supabase, Neon) e estado de cada agente do squad.',
    },
    {
      cmd: '/conclave', args: '[problema]', description: 'Ativa war room multi-agente', category: 'Orquestração',
      prompt: 'Quero ativar o Conclave para uma decisão estratégica. Me pergunta qual é o problema ou decisão que precisa de análise simultânea do squad completo.',
    },
    {
      cmd: '/route', args: '[agente]', description: 'Transfere contexto para um agente', category: 'Orquestração',
      prompt: 'Preciso ser roteado para um agente específico. Me pergunta qual agente e qual contexto devo transferir junto.',
    },
    {
      cmd: '/missao', args: '[descrição]', description: 'Registra nova missão no sistema', category: 'Projetos',
      prompt: 'Vamos registrar uma nova missão. Me pergunta: qual é o objetivo, quais agentes serão envolvidos, qual é o prazo e quais são os entregáveis esperados.',
    },
    {
      cmd: '/projeto', args: '[nome]', description: 'Inicia ou revisa um projeto', category: 'Projetos',
      prompt: 'Quero iniciar ou revisar um projeto. Me pergunta o nome do projeto, cliente/iniciativa, fase atual e próximos passos.',
    },
  ],
  ares: [
    {
      cmd: '/oferta', args: '[produto]', description: 'Estrutura nova oferta Grand Slam', category: 'Ofertas',
      prompt: 'Vamos estruturar uma oferta Grand Slam do zero. Aplica o framework completo de Hormozi: Dream Outcome, Perceived Likelihood, Time Delay, Effort & Sacrifice. Começa coletando informações sobre o produto.',
    },
    {
      cmd: '/precificar', args: '[oferta]', description: 'Análise de precificação por valor', category: 'Ofertas',
      prompt: 'Preciso precificar uma oferta pelo valor, não pelo custo. Aplica a Equação de Valor de Hormozi e me guia para encontrar o preço correto.',
    },
    {
      cmd: '/teia', description: 'Analisa e otimiza teia de produtos', category: 'Estratégia',
      prompt: 'Analisa a teia de produtos da Runa Systems Global: produto de entrada ($CREATOR$), produto core ($QUAD), upsell premium (squad implementado), retainer (Runa Eco IA). Aponta gaps e oportunidades de otimização.',
    },
    {
      cmd: '/avatar', args: '[produto]', description: 'Define avatar e dores do cliente', category: 'Estratégia',
      prompt: 'Vamos definir ou refinar o avatar do cliente. Me pergunta sobre o produto/serviço e então estrutura: dados demográficos, dores profundas, desejos, objeções e situação atual vs desejada.',
    },
    {
      cmd: '/validar', args: '[ideia]', description: 'Valida ideia de negócio/produto', category: 'Estratégia',
      prompt: 'Vamos validar uma ideia usando os critérios de Hormozi: existe um mercado com dor real? A solução é 10x melhor que a alternativa? Há caminho para $1M? Me conta a ideia para analisar.',
    },
    {
      cmd: '/upsell', args: '[produto atual]', description: 'Desenha estratégia de upsell', category: 'Ofertas',
      prompt: 'Vamos desenhar a estratégia de upsell. Me informa o produto atual do cliente e o próximo produto na teia. Estruturo o momento ideal, gatilho e argumentação.',
    },
  ],
  freyja: [
    {
      cmd: '/post', args: '[tema]', description: 'Copy de post (carta disfarçada)', category: 'Conteúdo',
      prompt: 'Vamos criar um post de alto impacto usando a estrutura de carta de vendas disfarçada. Me pergunta: tema, produto implícito, stage do buyer journey e história real disponível como prova.',
    },
    {
      cmd: '/email', args: '[tipo]', description: 'Sequência de email', category: 'Email',
      prompt: 'Vamos criar uma sequência de emails. Me pergunta: tipo (boas-vindas / nutrição / vendas / reengajamento), quantidade de emails, produto alvo e evento gatilho.',
    },
    {
      cmd: '/carta', args: '[produto]', description: 'Carta de vendas longa', category: 'Vendas',
      prompt: 'Vamos criar uma carta de vendas longa. Me pergunta sobre o produto, avatar, resultado principal, prova social disponível e principal objeção a ser quebrada.',
    },
    {
      cmd: '/caption', args: '[tema]', description: 'Legenda para Reel/Story', category: 'Conteúdo',
      prompt: 'Vamos criar uma legenda para Reel ou Story. Me pergunta: tema do vídeo, produto promovido implicitamente, emoção alvo e se tem CTA (qual).',
    },
    {
      cmd: '/bio', description: 'Bio de perfil/página', category: 'Identidade',
      prompt: 'Vamos criar ou otimizar a bio do perfil. Me pergunta para qual plataforma (Instagram, LinkedIn, site), qual é o público-alvo e qual ação queremos que o leitor tome.',
    },
    {
      cmd: '/hook', args: '[tema]', description: 'Gera 5 hooks para um tema', category: 'Conteúdo',
      prompt: 'Gera 5 hooks diferentes para o tema informado. Cada hook deve usar uma fórmula diferente: curiosidade, contra-intuição, prova social, dor direta e promessa de resultado.',
    },
    {
      cmd: '/reescrever', args: '[texto]', description: 'Reescreve texto na voz do Arthur', category: 'Voz',
      prompt: 'Preciso reescrever um texto na voz do Arthur: direto, intelectual, sem rodeios, com prova real quando possível. Me passa o texto para reescrever.',
    },
  ],
  helios: [
    {
      cmd: '/auditoria', args: '[url]', description: 'Auditoria SEO completa', category: 'SEO Técnico',
      prompt: 'Vamos fazer uma auditoria SEO completa. Me informa a URL do site e o objetivo principal. Cobrirei: técnico, conteúdo, autoridade, velocidade e GEO.',
    },
    {
      cmd: '/keywords', args: '[tema]', description: 'Pesquisa de palavras-chave', category: 'Conteúdo',
      prompt: 'Vamos fazer pesquisa de keywords. Me informa o tema, nicho e se é para topo (awareness) ou fundo (conversão) de funil. Estruturo clusters de conteúdo com intenção de busca.',
    },
    {
      cmd: '/plano', args: '[site/nicho]', description: 'Plano de conteúdo SEO 90 dias', category: 'Conteúdo',
      prompt: 'Vamos criar um plano de conteúdo SEO para 90 dias. Me informa o site ou nicho, público-alvo e 3 produtos/serviços principais. Estruturo pillar pages e cluster content.',
    },
    {
      cmd: '/geo', args: '[url ou tema]', description: 'Otimização para AI Search (GEO)', category: 'GEO',
      prompt: 'Vamos otimizar para AI Overviews e AI Search (ChatGPT, Perplexity, Bing Copilot). Me informa a URL ou tema. Analiso citabilidade, estrutura de passagens e authority signals.',
    },
    {
      cmd: '/schema', args: '[url]', description: 'Gera Schema.org structured data', category: 'SEO Técnico',
      prompt: 'Vamos implementar Schema.org markup. Me informa a URL ou tipo de página. Gero o JSON-LD correto para o tipo de conteúdo (Article, Product, LocalBusiness, FAQ etc.).',
    },
    {
      cmd: '/competitor', args: '[domínio]', description: 'Análise de concorrente SEO', category: 'Análise',
      prompt: 'Vamos analisar um concorrente do ponto de vista SEO. Me informa o domínio do concorrente e o nosso domínio para comparação. Identifico gaps de conteúdo e oportunidades.',
    },
  ],
  hermes: [
    {
      cmd: '/onboarding', args: '[produto]', description: 'Desenha flow de onboarding', category: 'Flows',
      prompt: 'Vamos estruturar um onboarding. Me pergunta: produto/serviço, resultado que o cliente deve sentir em 48h, canal principal (email/DM/WhatsApp) e pontos de abandono conhecidos.',
    },
    {
      cmd: '/upsell-flow', args: '[produto]', description: 'Automação de upsell behavior-based', category: 'Flows',
      prompt: 'Vamos criar uma automação de upsell baseada em comportamento. Me pergunta: produto atual, próximo produto, comportamentos que indicam prontidão para upsell e canal de entrega.',
    },
    {
      cmd: '/checkin', args: '[cliente/produto]', description: 'Sequência de check-in e retenção', category: 'Retenção',
      prompt: 'Vamos criar uma sequência de check-in para retenção. Me pergunta: stage do cliente (30/60/90 dias), produto, métrica de sucesso e canal preferido.',
    },
    {
      cmd: '/flow', args: '[processo]', description: 'Desenha workflow n8n completo', category: 'n8n',
      prompt: 'Vamos desenhar um workflow no n8n. Me descreve o processo: qual é o evento gatilho, passos intermediários (condições, transformações, integrações) e resultado final esperado. Desenho o flow com os nodes corretos.',
    },
    {
      cmd: '/dm', args: '[gatilho]', description: 'Automação de DM via ManyChat', category: 'ManyChat',
      prompt: 'Vamos configurar uma automação de DM no ManyChat. Me pergunta: gatilho (keyword de comentário ou story reply), mensagem do DM, produto promovido e sequência de follow-up.',
    },
    {
      cmd: '/metricas', description: 'Configura digest de métricas diário', category: 'n8n',
      prompt: 'Vamos configurar o digest diário de métricas do Instagram. Me pergunta quais métricas são prioritárias (alcance, engajamento, DMs, conversões) e qual horário entregar o briefing.',
    },
  ],
}
