Sistema completo para transformação de identidade, narrativa e estratégia de marca em bases de conhecimento otimizadas para agentes LLM atuando em Instagram e redes sociais. Documento-base para construção de agentes de conteúdo, branding e posicionamento digital.

---

## 🎯 Propósito e Aplicação

Transforma qualquer tipo de material de marca (briefings, moodboards, guidelines, transcrições de posicionamento, portfólios, capturas de tela, copies, estratégias editoriais) em bases de conhecimento estruturadas e otimizadas para agentes LLM. Use sempre que precisar:

- Criar base de conhecimento para um agente especializado em conteúdo de marca
- Estruturar identidade visual e narrativa para recuperação eficiente
- Transformar diretrizes de marca não estruturadas em conhecimento acionável
- Preparar dados de posicionamento para fine-tuning ou RAG systems
- Treinar um agente para gerar conteúdo consistente com a voz e estética de uma marca

---

## 📋 Instruções de Uso

### PASSO 1: Análise Inicial do Material de Marca

Avalie o material fonte usando esta matriz:

```
TIPO_MATERIAL:
  - [ ] Brand guide ou manual de identidade visual
  - [ ] Portfólio de conteúdo existente (prints, carousels, reels)
  - [ ] Transcrição de briefing ou entrevista com fundador/criador
  - [ ] Documento de posicionamento ou estratégia editorial
  - [ ] Referências visuais e moodboard
  - [ ] Copy de captions e legendas publicadas
  - [ ] Material misto (combinação dos acima)

DENSIDADE_DE_MARCA:
  Alta: Cada elemento carrega decisão intencional de identidade
  Média: Diretrizes gerais com espaço para interpretação
  Baixa: Intuição não documentada, marca em construção

MATURIDADE_DA_MARCA:
  Consolidada: Identidade definida, voz consistente, histórico de conteúdo
  Em desenvolvimento: Elementos definidos, aplicação inconsistente
  Emergente: Identidade ainda sendo descoberta e testada
```

### PASSO 2: Aplicar Template de Extração

Use o Template Master abaixo para cada extração de marca.

---

## 🏗️ Template Master de Estruturação de Marca

```markdown
# BASE DE CONHECIMENTO DE MARCA: [NOME DA MARCA / HANDLE]
## [Tagline ou Posicionamento Central — máx 15 palavras]

---

## METADADOS CONTEXTUAIS
```

```yaml
BRAND_CONTEXT:
  handle_principal: [@handle]
  plataformas_ativas: [Instagram/TikTok/LinkedIn/YouTube/etc]
  fundador_criador: [Nome(s)]
  nicho_primario: [Ex: AI automation / Personal finance / Fitness]
  tipo_conta: [Pessoal/Empresa/Creator/Híbrido]
  data_lancamento: [YYYY-MM-DD]
  versao_brand_guide: [1.0]
  ultima_atualizacao: [YYYY-MM-DD]

ESCOPO:
  mercado_principal: [Segmento primário de audiência]
  mercados_adjacentes: [Segmentos secundários]
  nivel_sofisticacao_audiencia: [Iniciante/Intermediário/Avançado/Misto]
  contexto_geografico: [Global/Regional/Local — idioma principal]

CONFIABILIDADE_DOS_DADOS:
  identidade_visual: [% de definição — quanto está documentado]
  voz_narrativa: [% de definição]
  posicionamento: [% de definição]
  heuristicas_conteudo: [% de definição]

DEPENDENCIAS:
  ferramentas_design: [Figma/Canva/Adobe/etc]
  ferramentas_publicacao: [Later/Buffer/nativo/etc]
  agentes_envolvidos: [Lista de agentes LLM que usarão este KB]
  integrações_workflow: [N8N/Zapier/Make/etc]
```

---

## 🎨 Identidade Visual

### SISTEMA DE CORES

**Paleta Principal**

```yaml
CORES_PRIMARIAS:
  - nome: [Nome semântico da cor]
    hex: [#XXXXXX]
    rgb: [R, G, B]
    uso: [Fundos principais / Headlines / CTAs]
    emoção_associada: [Confiança / Energia / Sofisticação / etc]

  - nome: [Nome semântico]
    hex: [#XXXXXX]
    uso: [Elementos de destaque / Ícones / Bordas]

CORES_SECUNDARIAS:
  - nome: [Nome semântico]
    hex: [#XXXXXX]
    uso: [Backgrounds alternativos / Elementos neutros]

CORES_ACENTO:
  - nome: [Nome semântico]
    hex: [#XXXXXX]
    uso: [CTAs / Highlights / Glifos / Separadores]

COR_PROIBIDA: [Hex ou descrição de cor que jamais deve aparecer]
```

**Princípios de Aplicação de Cor**

- Proporção dominante: [Ex: 70% escuro / 20% teal / 10% gold]
- Contraste mínimo: [Ex: AA ou AAA WCAG]
- Contexto de inversão: [Quando usar fundo claro vs escuro]
- Gradientes permitidos: [Sim/Não — se sim, descreva direção e cores]

**Contexto de Aplicação**

- Quando usar paleta completa: [Posts âncora, carousels de alto valor]
- Quando usar paleta reduzida: [Stories, reels rápidos]
- Quando NÃO usar: [Contextos onde a paleta dilui a identidade]

---

### SISTEMA TIPOGRÁFICO

**Hierarquia de Fontes**

```yaml
TIPOGRAFIA:
  display_headline:
    familia: [Nome da fonte]
    peso: [900 / Black / Ultra]
    uso: [Títulos de slides, headlines de capa]
    tamanho_referencia: [px em 1080x1080]
    tracking: [letter-spacing em em]
    caracteristica: [O que essa fonte comunica sobre a marca]

  body_principal:
    familia: [Nome da fonte]
    peso: [300 / Light / Regular]
    uso: [Parágrafos, descrições, bullets]
    tamanho_referencia: [px]
    line_height: [valor]

  accent_label:
    familia: [Nome da fonte — pode ser a mesma]
    peso: [700 / Bold]
    uso: [Tags, labels, numeração, metadados visuais]
    tamanho_referencia: [px]
    tracking: [Geralmente wide — 0.15em a 0.25em]
    transform: [uppercase obrigatório / capitalize / none]

CONTRASTE_TIPOGRAFICO:
  principio: [Ex: Peso 900 vs 300 no mesmo slide — contraste extremo]
  ratio_minimo: [Ex: headline 3x maior que body]
  proibido: [Ex: Nunca usar Medium 500 como peso principal]
```

**Pares Tipográficos por Contexto**

|Contexto|Display|Body|Acento|
|---|---|---|---|
|Carousel educativo|[Fonte + peso]|[Fonte + peso]|[Fonte + peso]|
|Citação / Quote slide|[Fonte + peso]|[Fonte + peso]|—|
|Slide de dados/stats|[Fonte + peso]|[Fonte + peso]|[Fonte + peso]|
|CTA final|[Fonte + peso]|[Fonte + peso]|[Fonte + peso]|

---

### SISTEMA DE ELEMENTOS GRÁFICOS

**Glifo Signature / Símbolo de Marca**

```yaml
GLIFO_PRINCIPAL:
  simbolo: [Unicode ou descrição — ex: ᚨ Ansuz, ◈, ∆]
  origem: [Referência semiótica — ex: rúnico, geométrico, custom]
  uso_obrigatorio: [Em qual posição de cada peça aparece]
  uso_opcional: [Quando pode ser omitido]
  escala: [Proporção em relação ao texto ao redor]
  cor: [Cor padrão do glifo]
  variações: [Versão light / ghost / full]
  proibido: [Contextos onde o glifo não deve aparecer]
```

**Elementos Estruturais Recorrentes**

```yaml
ELEMENTOS_VISUAIS:
  grid_overlay:
    tipo: [Ex: Grade de 60px com opacidade 0.3]
    uso: [Sempre / Apenas em posts âncora / Nunca em Stories]
    cor: [Hex]
    opacidade: [valor]

  separadores:
    horizontal: [Ex: linha gradiente teal → transparente]
    vertical: [Ex: barra de 3px, height 340px, gradiente]
    uso: [Separação de seções dentro do slide]

  radial_glows:
    uso: [Profundidade e atmosfera — não como elemento principal]
    cores_permitidas: [Teal dim / Gold dim — nunca cores saturadas]
    posicao: [Centro / Canto / Off-center intencional]

  numeracao_slides:
    formato: [Ex: 01 / 06]
    posicao: [Canto superior direito]
    tipografia: [Fonte + peso + tracking]
    cor: [Muted — nunca destaque]

  handle_watermark:
    texto: [@handle]
    posicao: [Canto inferior esquerdo — sempre]
    tipografia: [Fonte + peso + size]
    cor: [Muted — opacidade 0.7]
```

**Quando usar / Quando NÃO usar elementos**

- Usar grid overlay: Posts institucionais, carousels técnicos, conteúdo âncora
- Não usar grid overlay: Reels, Stories, conteúdo emocional / pessoal
- Usar radial glows: Slides de capa, slides de CTA, slides de impacto
- Não usar radial glows: Slides densos em texto — competem com legibilidade

---

## 🗣️ Narrativa e Voz de Marca

### IDENTIDADE VERBAL

**Tom de Voz**

```yaml
TOM_PRIMARIO:
  adjetivos: [Ex: Direto, técnico, visionário, sem rodeios]
  anti_adjetivos: [Ex: Nunca corporativo, nunca infantil, nunca ansioso]
  registro: [Formal / Semiformal / Casual / Técnico]
  pessoa_gramatical: [1ª pessoa / 2ª pessoa / Imperativo]
  idioma_principal: [PT-BR / EN / Misto]

VOZ_EM_ACAO:
  exemplo_correto: "[Frase real que soa como a marca]"
  exemplo_errado: "[Frase que jamais seria publicada]"
  explicacao: [Por que o correto funciona e o errado falha]
```

**Princípios de Escrita**

```yaml
REGRAS_DE_COPY:
  headlines:
    - [Princípio 1: ex — começar com verbo no imperativo ou com número]
    - [Princípio 2: ex — máx 7 palavras, nenhuma palavra desnecessária]
    - [Princípio 3: ex — criar tensão ou curiosidade sem clickbait]

  body_text:
    - [Princípio 1: ex — frases curtas. Uma ideia por frase.]
    - [Princípio 2: ex — sem jargão desnecessário — se usar, definir]
    - [Princípio 3: ex — dados sempre que possível — números ancoram]

  captions:
    estrutura: [Ex: Hook (1 linha) → Desenvolvimento (3-5 linhas) → CTA]
    comprimento_ideal: [Ex: 150-300 palavras para carousels educativos]
    hashtags: [Política de uso — quantidade, posição, relevância]
    emojis: [Política de uso — sim/não/contexto específico]
    cta_padrao: [Ex: "Salva esse post." / "Compartilha com quem precisa."]
```

---

### POSICIONAMENTO ESTRATÉGICO

**Declaração de Posicionamento**

```yaml
POSICIONAMENTO:
  categoria: [Em qual categoria mental a marca quer ser líder]
  diferenciador_principal: [O que nenhum concorrente entrega igual]
  para_quem: [ICP — Ideal Customer Profile em 1 frase]
  problema_resolvido: [Dor central que a marca endereça]
  promessa_central: [O que a audiência ganha ao seguir/consumir]

ARQUETIPO_DE_MARCA:
  arquetipo_primario: [Ex: Sábio / Herói / Criador / Governante]
  arquetipo_secundario: [Ex: Explorador]
  manifestacao: [Como esse arquétipo aparece no conteúdo]

POSICIONAMENTO_EM_UMA_FRASE:
  template: "Para [ICP], [MARCA] é o [CATEGORIA] que [DIFERENCIADOR] porque [PROVA]."
  preenchido: "[Declaração real da marca]"
```

**Mapa de Concorrentes e Diferenciação**

```yaml
PANORAMA_COMPETITIVO:
  concorrentes_diretos:
    - handle: [@handle]
      ponto_forte: [O que fazem bem]
      nosso_diferencial: [Por que somos melhores nesse ângulo]

  concorrentes_indiretos:
    - handle: [@handle]
      sobreposicao: [Onde competimos por atenção]
      nossa_vantagem: [Por que a audiência nos escolhe]

  espaco_em_branco: [Ângulo que ninguém no nicho está cobrindo]
```

---

## ⚙️ Sistema de Produção de Conteúdo

### PILARES EDITORIAIS

```yaml
PILARES:
  pilar_1:
    nome: [Ex: Educação Técnica]
    proporcao: [Ex: 40% do conteúdo]
    objetivo: [Ex: Autoridade e confiança]
    formatos: [Carousel / Thread / Reel educativo]
    frequencia: [Ex: 2x por semana]
    gatilho_emocional: [Ex: Curiosidade + Competência]
    exemplo_tema: [Tema concreto que se encaixa neste pilar]

  pilar_2:
    nome: [Ex: Posicionamento / POV]
    proporcao: [Ex: 30%]
    objetivo: [Ex: Diferenciação e atração do ICP certo]
    formatos: [Single post / Caption longa / Carrossel de opinião]
    frequencia: [Ex: 1-2x por semana]
    gatilho_emocional: [Ex: Pertencimento + Contrarianism]
    exemplo_tema: [Tema concreto]

  pilar_3:
    nome: [Ex: Bastidores / Processo]
    proporcao: [Ex: 20%]
    objetivo: [Ex: Conexão humana e confiança]
    formatos: [Stories / Reels de processo / BTS]
    frequencia: [Ex: 3-4x por semana em Stories]
    gatilho_emocional: [Ex: Transparência + Identificação]

  pilar_4:
    nome: [Ex: Social Proof / Resultados]
    proporcao: [Ex: 10%]
    objetivo: [Ex: Conversão e credibilidade]
    formatos: [Carousel de caso / Depoimento / Stats]
    frequencia: [Ex: 2x por mês]
    gatilho_emocional: [Ex: FOMO + Validação]
```

---

### PROCEDIMENTO: CRIAÇÃO DE CAROUSEL

**Pré-condições**

```yaml
Estado_Inicial:
  - Pilar editorial definido para este post
  - Tema específico aprovado
  - Assets visuais base disponíveis (template no Figma/Canva)
  - Copy da caption rascunhada ou aprovada

Recursos_Necessarios:
  - template_figma: [Link ou path]
  - guia_tipografico: [Referência]
  - paleta_hex: [Lista de cores aprovadas]
  - glifo_signature: [Unicode ou arquivo]

Validacoes:
  - [ ] Tema se encaixa em pilar editorial definido
  - [ ] Número de slides adequado ao formato (mín 3, máx 10)
  - [ ] Hook do slide 1 testado como standalone
```

**Steps Detalhados**

```
STEP 1: ESTRUTURA NARRATIVA
Input: Tema + Pilar editorial

├─ Processamento:
│  1. Definir o problema / tensão que o carousel resolve
│  2. Mapear os 3-5 pontos centrais da narrativa
│  3. Sequenciar: Slide 1 (Hook) → Slides 2-N (Desenvolvimento) → Slide Final (CTA)
│  4. Escrever headline de cada slide (máx 7 palavras)
│
├─ Validação:
│  - O slide 1 funciona como post único (standalone hook)?
│  - Cada slide avança a narrativa sem repetição?
│  - O último slide tem CTA claro e único?
│
└─ Output: Outline de slides com headline + 1 linha de copy por slide

STEP 2: DESIGN DO SLIDE 1 (CAPA)
Input: Headline principal + Identidade visual

├─ Processamento:
│  1. Aplicar background [cor definida no sistema]
│  2. Grid overlay [opacidade definida]
│  3. Posicionar headline com [fonte display + peso 900]
│  4. Adicionar eyebrow/tag com [fonte acento + tracking wide]
│  5. Inserir glifo signature em [posição definida]
│  6. Watermark @handle em [posição definida]
│  7. Numeração 01/XX em [posição definida]
│
├─ Validação:
│  - Hierarquia visual clara em 2 segundos de leitura?
│  - Paleta 100% consistente com brand guide?
│  - Glifo presente e proporcional?
│
└─ Output: Slide 1 finalizado

STEP 3: DESIGN DOS SLIDES INTERNOS (2 a N-1)
Input: Copy de cada slide + template base

├─ Processamento:
│  1. Manter estrutura de grid e proporções do Slide 1
│  2. Variar layout interno mantendo identidade (não clonar)
│  3. Tipografia: headline [peso X] + body [peso Y]
│  4. Elementos gráficos: separadores, numeração, glifo (se aplicável)
│  5. Checar contraste de legibilidade
│
└─ Output: Slides internos finalizados

STEP 4: SLIDE FINAL (CTA)
Input: Objetivo de conversão + CTA definido

├─ Processamento:
│  1. Aumentar impacto visual — este slide recebe mais atenção
│  2. CTA único, verbo no imperativo, sem ambiguidade
│  3. Handle visível e clicável visualmente
│  4. Elemento de identidade forte (glifo, cor acento)
│
└─ Output: Slide CTA finalizado

STEP 5: REVISÃO FINAL E CAPTION
Input: Carousel completo + template de caption

├─ Processamento:
│  1. Revisar consistência visual entre todos os slides
│  2. Redigir caption: Hook → Desenvolvimento → CTA
│  3. Adicionar hashtags conforme política definida
│  4. Agendar ou publicar conforme calendário editorial
│
└─ Output: Post pronto para publicação
```

**Pós-condições**

- Estado Final Garantido: Post publicado ou agendado com caption completa
- Side Effects Possíveis: Necessidade de ajuste após primeiras métricas (salvar, compartilhar, comentário)
- Métricas de Sucesso: Taxa de salvamento, alcance, cliques no link, comentários qualitativos

**Edge Cases e Tratamento**

|Situação|Probabilidade|Impacto|Handling|
|---|---|---|---|
|Copy muito longa para o slide|Alta|Médio|Quebrar em 2 slides ou reduzir para headline + 2 bullets|
|Imagem/gráfico externo no slide|Média|Alto|Verificar direitos autorais + adaptar paleta ao redor|
|Tendência viral que conflita com identidade|Média|Alto|Adaptar o formato, nunca abandonar a identidade|
|Feedback negativo no conteúdo|Baixa|Alto|Não deletar — responder com posicionamento claro|
|Conteúdo evergreen vs. trending|Alta|Médio|Evergreen: 70% / Trending: 30% — nunca inverter|

---

### PROCEDIMENTO: CRIAÇÃO DE REEL

**Pré-condições**

```yaml
Estado_Inicial:
  - Gancho (hook) de 1-3 segundos definido
  - Duração alvo: [Ex: 30-60s / 60-90s]
  - Tipo: [Educativo / POV / BTS / Trending]

Validacoes:
  - [ ] Hook funciona sem som (texto na tela)?
  - [ ] Identidade visual presente desde o frame 0?
  - [ ] CTA claro nos últimos 3 segundos?
```

**Steps Detalhados**

```
STEP 1: ROTEIRO (Hook → Corpo → CTA)
STEP 2: GRAVAÇÃO / MONTAGEM com elementos de identidade visual
STEP 3: EDIÇÃO — ritmo, cortes, texto na tela conforme tipografia da marca
STEP 4: THUMBNAIL — frame de capa alinhado ao sistema visual
STEP 5: CAPTION + HASHTAGS conforme política editorial
```

---

## 📊 Frameworks de Decisão

### ÁRVORE DE DECISÃO: FORMATO DE CONTEÚDO

```
[TENHO UMA IDEIA DE CONTEÚDO]
│
├─ [É um conceito com múltiplas camadas?]
│  ├─ SIM → [Requer mais de 3 pontos para explicar?]
│  │  ├─ SIM → CAROUSEL EDUCATIVO
│  │  └─ NÃO → SINGLE POST + CAPTION LONGA
│  └─ NÃO → [É uma opinião ou POV forte?]
│     ├─ SIM → [Dá para mostrar visualmente?]
│     │  ├─ SIM → REEL (fala para câmera ou B-roll + texto)
│     │  └─ NÃO → SINGLE POST (tipografia + caption)
│     └─ NÃO → [É um processo ou bastidor?]
│        ├─ SIM → STORY ou REEL BTS
│        └─ NÃO → Reavaliar relevância do conteúdo
```

### ÁRVORE DE DECISÃO: IDENTIDADE VISUAL EM DÚVIDA

```
[TENHO DÚVIDA SOBRE ELEMENTO VISUAL]
│
├─ [Está na paleta aprovada?]
│  └─ NÃO → Não usar. Consultar brand guide.
│
├─ [A tipografia usa os pesos corretos?]
│  └─ NÃO → Ajustar. Peso é parte da identidade.
│
├─ [O glifo signature está presente?]
│  └─ [É post de feed principal?]
│     ├─ SIM → Glifo obrigatório
│     └─ NÃO (Story, Reel) → Opcional
│
└─ [Em 2 segundos, parece da marca?]
   ├─ SIM → Pode publicar
   └─ NÃO → Revisar hierarquia visual antes de publicar
```

### MATRIZ DE PRIORIZAÇÃO DE CONTEÚDO

|Critério|Peso|Educativo|POV/Opinião|BTS|Social Proof|
|---|---|---|---|---|---|
|Potencial de salvamento|35%|9|7|4|6|
|Construção de autoridade|30%|9|8|5|8|
|Alcance orgânico|20%|7|8|7|5|
|Conversão direta|15%|6|7|4|9|
|**TOTAL PONDERADO**|100%|**8.0**|**7.5**|**5.0**|**6.8**|

> **Insight:** Conteúdo educativo tem o maior ROI de construção de marca. Priorizar 40% da produção nesse formato.

---

## 💼 Casos de Uso Exemplificados

### CASO 1: ONBOARDING DE AGENTE DE CONTEÚDO

**Contexto**

- Tipo de conta: Creator B2B / Fundador
- Problema: Agente gera conteúdo tecnicamente correto mas sem voz de marca
- Constraints: Agente sem acesso ao histórico de posts publicados

**Implementação**

```
FASE 1 — INGESTÃO DE IDENTIDADE (Dia 0)
  ├─ Alimentar agente com: KB de identidade visual (seção 🎨)
  ├─ Alimentar agente com: KB de voz e narrativa (seção 🗣️)
  └─ Teste: Pedir ao agente para gerar 3 headlines de carousel

FASE 2 — CALIBRAÇÃO (Dia 1-3)
  ├─ Comparar outputs com posts históricos publicados
  ├─ Identificar desvios de tom, vocabulário, estrutura
  └─ Refinar KB com exemplos negativos ("nunca diga X, diga Y")

FASE 3 — PRODUÇÃO SUPERVISIONADA (Dia 4-14)
  ├─ Agente gera draft completo (outline + copy + sugestão visual)
  ├─ Humano revisa e aprova com feedback estruturado
  └─ Feedback alimenta iterações do KB
```

**Resultados Esperados**

- Antes: 100% do conteúdo criado manualmente, 3-4h por carousel
- Depois: Draft em 15 min, revisão em 30 min, publicação em 1h
- ROI: 70-80% de redução de tempo de produção
- Tempo para Resultado: 2-3 semanas de calibração

**Lições Aprendidas**

- ✅ O que funciona: Exemplos negativos ("nunca diga X") são mais eficientes que exemplos positivos sozinhos
- ⚠️ Desafio: Agente tende a formalizar demais o tom — incluir exemplos coloquiais no KB
- 💡 Insight inesperado: Fornecer prints de posts com alto engajamento como referência visual melhora drasticamente o output

---

### CASO 2: CRIAÇÃO DE KB PARA NOVA VERTICAL DE CONTEÚDO

**Contexto**

- Marca existente expandindo para novo pilar temático
- Problema: Manter consistência de identidade em território novo
- Constraints: Poucos exemplos históricos no novo tema

**Implementação**

```
DIA 0: Definir posicionamento no novo pilar
  ├─ Aplicar Template Master desta seção completamente
  ├─ Mapear 5-10 referências externas que ressoam com a estética
  └─ Criar 3 posts piloto antes de publicar série

DIA 7: Revisão de primeiros resultados
  ├─ Analisar métricas vs. média histórica da conta
  ├─ Coletar feedback qualitativo (comentários, DMs)
  └─ Atualizar KB com aprendizados
```

---

## 📈 Métricas e Benchmarks

### KPIs Primários de Conteúdo

```yaml
ENGAJAMENTO:
  taxa_salvamento:
    formula: (saves / alcance) * 100
    excelente: "> 3%"
    bom: "1-3%"
    aceitavel: "0.5-1%"
    alerta: "< 0.5%"
    significado: Indicador #1 de valor percebido pelo algoritmo

  taxa_compartilhamento:
    formula: (shares / alcance) * 100
    excelente: "> 2%"
    bom: "0.5-2%"
    alerta: "< 0.5%"
    significado: Indicador de identificação e desejo de disseminação

  taxa_comentario:
    formula: (comentarios / alcance) * 100
    excelente: "> 1%"
    bom: "0.3-1%"
    significado: Indicador de conexão emocional e debate

CRESCIMENTO:
  taxa_crescimento_seguidores:
    formula: (novos_seguidores / seguidores_totais) * 100
    excelente: "> 2% por semana"
    bom: "0.5-2%"
    alerta: "< 0.1%"

  qualidade_seguidores:
    metrica: ratio_seguidores_ICP / total_seguidores
    como_medir: "Pesquisa periódica ou análise manual de amostra de perfis"

CONSISTENCIA_DE_MARCA:
  aderencia_visual:
    como_medir: "Auditoria mensal — % de posts 100% alinhados ao brand guide"
    target: "> 95%"

  consistencia_de_voz:
    como_medir: "Review de caption por amostragem — aderência ao tom de voz"
    target: "> 90%"
```

### Dashboard de Monitoramento

|Métrica|Atual|Target|Status|Trend|Ação|
|---|---|---|---|---|---|
|Taxa de Salvamento|[%]|> 3%|🟢/🟡/🔴|↑/→/↓|[Se necessário]|
|Taxa de Compartilhamento|[%]|> 2%|🟢/🟡/🔴|↑/→/↓|[Se necessário]|
|Crescimento Semanal|[%]|> 1%|🟢/🟡/🔴|↑/→/↓|[Se necessário]|
|Aderência ao Brand Guide|[%]|> 95%|🟢/🟡/🔴|↑/→/↓|[Se necessário]|
|Posts no Pilar #1 (Edu)|[n]|40% do mix|🟢/🟡/🔴|↑/→/↓|[Se necessário]|

---

## 🛠️ Ferramentas e Recursos

### Stack Tecnológico Recomendado

```yaml
DESIGN:
  essencial:
    - Figma: Templates de carousel, sistema de componentes de marca
    - Canva Pro: Alternativa para operação rápida com brand kit

  avancado:
    - Adobe Illustrator: Criação e refinamento do glifo signature
    - Framer: Prototipagem de identidade animada

PRODUCAO_E_PUBLICACAO:
  essencial:
    - Later ou Buffer: Agendamento com preview de grid
    - CapCut ou Premiere: Edição de Reels com templates de marca

  avancado:
    - N8N: Automação de fluxo de publicação via agente
    - Make/Zapier: Integração entre ferramentas de produção

ANALISE:
  essencial:
    - Meta Business Suite: Métricas nativas do Instagram
    - Notion ou Airtable: Calendário editorial + tracking de KPIs

  avancado:
    - Iconosquare ou Sprout Social: Analytics avançado e benchmark competitivo
```

### Templates Prontos

**Template de Caption (Carousel Educativo)**

```
[HOOK — 1 linha que para o scroll]

[Linha em branco]

[DESENVOLVIMENTO — 3-5 linhas, uma ideia por linha]
[Bullets opcionais com ›› ou — como marcador]

[Linha em branco]

[CTA — verbo imperativo, único, sem ambiguidade]

[Linha em branco]
#hashtag1 #hashtag2 #hashtag3
```

**Template de Hook para Carousel**

```
Opção A (Número): "X [coisas/erros/passos] que [resultado surpreendente]"
Opção B (Contrário): "[Crença comum] está errado. [Nova perspectiva]."
Opção C (Promessa): "Como [resultado desejado] sem [objeção principal]."
Opção D (Tensão): "[Situação que a audiência vive] — isso precisa parar."
```

---

## 🎯 Prompts Otimizados para Interação com Agente

### Consulta de Identidade Visual

```
Com base no brand guide de [MARCA], avalie este elemento visual:
1. [Descrever ou anexar o elemento]
2. Considerando a paleta [listar cores] e tipografia [listar fontes]
3. Com foco em consistência e impacto no feed
Aponte desvios e sugira correções específicas.
```

### Geração de Copy de Carousel

```
Crie o outline e copy completo de um carousel para [MARCA]:
- Pilar: [Educativo/POV/BTS/Social Proof]
- Tema: [Tema específico]
- ICP: [Descrição do público]
- Tom: [Referência ao tom de voz definido no brand guide]
- Número de slides: [N]
- CTA desejado: [Salvar / Comentar / Seguir / Clicar no link]
Seguir rigorosamente o sistema tipográfico e as regras de copy definidas.
```

### Análise de Aderência de Marca

```
Analise este post/caption de [MARCA] usando o framework de identidade:
- Conteúdo: [Post ou caption]
- Verificar: Tom de voz, estrutura de copy, pilares editoriais, CTA
- Contexto: [Pilar pretendido, objetivo do post]
Pontue aderência (0-10) em cada dimensão e sugira melhorias.
```

### Criação de Novo Pilar Editorial

```
Desenvolva o pilar editorial "[NOME]" para [MARCA]:
1. Baseado no posicionamento: [Declaração de posicionamento]
2. Para o ICP: [Descrição]
3. Com proporção de [X%] no mix de conteúdo
4. Incluindo: 5 temas iniciais, formato recomendado por tema, métricas de sucesso
```

---

## ⚠️ Avisos e Considerações Críticas

### Armadilhas Comuns

**Inconsistência visual por agilidade**

- Sintoma: Posts com paletas ligeiramente diferentes, pesos tipográficos variando sem intenção
- Causa: Templates não centralizados, produção sob pressão de tempo
- Solução: Sistema de componentes no Figma com lock em elementos de identidade; nenhum post sem checklist visual

**Tom de voz genérico no conteúdo gerado por agente**

- Sintoma: Copy tecnicamente correto mas que "poderia ser de qualquer marca"
- Causa: KB sem exemplos negativos, sem âncoras de voz específicas da marca
- Solução: Incluir seção de "nunca diga X, diga Y" e 10+ exemplos de copy real aprovada

**Pilar único dominando o feed**

- Sintoma: Feed monótono, queda de alcance, público saturado
- Causa: Produzir apenas o formato mais fácil ou de maior engajamento histórico
- Solução: Calendário editorial com proporção de pilares forçada — o sistema deve impor variedade

**Tendências que corroem identidade**

- Sintoma: Posts "virais" que não parecem da marca — pico de alcance, queda de seguidores qualificados
- Causa: Copiar formato/trend sem adaptar à identidade
- Solução: Toda tendência passa pelo filtro da árvore de decisão de identidade visual antes de ser produzida

**KB desatualizada após pivô de posicionamento**

- Sintoma: Agente gera conteúdo alinhado com identidade antiga após mudança estratégica
- Causa: Framework não versionado, atualização não propagada para o agente
- Solução: Versionamento obrigatório (v1.0, v1.1, v2.0) + data de última atualização em todo KB

### Considerações Éticas

- Transparência sobre conteúdo gerado por IA quando relevante para a audiência
- Não fabricar resultados, depoimentos ou métricas em social proof
- Respeitar direitos autorais de referências visuais e conteúdo de terceiros
- Manter autenticidade da voz do fundador/criador mesmo com produção automatizada

### Limitações Conhecidas

- LLMs não "veem" imagens por padrão — descrever elementos visuais em texto para o KB ou usar modelos multimodais
- Consistência de voz degrada com KBs muito longos sem chunking adequado — manter seções entre 200-500 tokens
- Métricas do Instagram mudam com atualizações de algoritmo — revisar benchmarks a cada trimestre

---

## 📚 Referências e Aprofundamento

### Leitura Essencial

- Brand guidelines de referência do nicho — análise de como marcas líderes documentam identidade
- "Building a StoryBrand" (Donald Miller) — arquitetura narrativa aplicável a conteúdo de feed
- Documentação oficial do Meta Business Suite — benchmarks atualizados de métricas
- [[framework-extracao-conhecimento]] — framework base do qual este documento deriva

### Atualizações e Versioning

- Versão atual: 1.0
- Criado em: 2026-04-21
- Próxima revisão: Trimestral ou após pivô de posicionamento
- Changelog: v1.0 — Documento inicial baseado no Framework Universal de Extração de Conhecimento

---

## ✅ Checklist de Qualidade

Antes de considerar o KB de marca completo, verifique:

- [ ] **Identidade Visual:** Paleta, tipografia, glifo e elementos gráficos completamente documentados?
- [ ] **Voz de Marca:** Tom de voz com exemplos corretos E incorretos?
- [ ] **Posicionamento:** Declaração de posicionamento preenchida e validada?
- [ ] **Pilares Editoriais:** Todos os pilares com proporção, formato e frequência definidos?
- [ ] **Procedimentos:** Steps de carousel e reel documentados com pré e pós-condições?
- [ ] **Métricas:** KPIs com fórmulas e benchmarks preenchidos?
- [ ] **Prompts:** Prompts prontos para cada caso de uso principal?
- [ ] **Armadilhas:** Equipe/agente consciente das armadilhas mais comuns?
- [ ] **Versionamento:** Data de criação, versão e responsável registrados?

---

## 💡 Dicas de Otimização para LLMs

### 1. Chunking por Dimensão de Marca

- Separe identidade visual, voz e estratégia em arquivos distintos para RAG
- Cada arquivo entre 200-500 tokens por seção
- Use separadores `---` entre blocos semânticos

### 2. Âncoras de Identidade

- Repita as cores exatas (hex) e pesos tipográficos (números) sempre que relevante — LLMs precisam de precisão, não de descrição poética
- Inclua exemplos de copy real: "este post foi publicado e funcionou" > "este post exemplifica o tom"

### 3. Exemplos Negativos São Ouro

- Para cada regra de voz, adicione o anti-exemplo: "nunca escreva [X]"
- Para cada elemento visual, documente o que está banido
- LLMs aprendem fronteiras tão bem quanto possibilidades

### 4. Metadados Ricos de Contexto

- Sempre inclua para qual plataforma, formato e pilar o conteúdo está sendo gerado
- Versione o KB — marca evolui, o documento deve evoluir com ela
- Indique nível de confiança por seção (o que está consolidado vs. o que está em teste)

---

_Framework derivado do Framework Universal de Extração e Estruturação de Conhecimento_ _Adaptado para o domínio de Identidade de Marca Digital e Produção de Conteúdo para Instagram/Redes Sociais_ _Referência: [[framework-extracao-conhecimento]] | Projeto: [[runa-systems-global]] | Módulo: [[mind-dollar-prd]]_