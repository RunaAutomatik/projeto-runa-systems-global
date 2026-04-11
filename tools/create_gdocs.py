#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import json, subprocess, sys

APERITIVO_SQUAD = "1JVTkFyvxaJHV9ym9fIiWWOp94xP6G108PmphI_x5SF8"
OFERTA_SQUAD    = "1r_V_y3LQ-HFpqF30lMqUqNp51ED2jYm2THlnb5QWVs8"
RUNA_APRES      = "1LDpmt6eQgGlvO6dcTy8m6nweFzY5rD507njn9iCl-2E"
CLAUDE_INTRO    = "19cV5PSiGNUOgaML1m_G7iacrrXxvi6oJsJIln8Tm3O0"
RUNA_V2         = "1LdSek2hmfUN1E9mEinTPkRS6wlM4BfkzwMGSwDNeSDQ"

GWS_JS = r'C:\Users\user\AppData\Roaming\npm\node_modules\@googleworkspace\cli\run-gws.js'

def gws_call(service, resource, method, params=None, body=None):
    cmd = ['node', GWS_JS, service, resource, method]
    if params:
        cmd += ['--params', json.dumps(params, ensure_ascii=False)]
    if body:
        cmd += ['--json', json.dumps(body, ensure_ascii=False)]
    result = subprocess.run(cmd, capture_output=True, text=True, encoding='utf-8', errors='replace')
    if result.returncode != 0:
        err = result.stderr or ''
        print(f"  ERR: {err[:400]}", file=sys.stderr)
        return None
    try:
        return json.loads(result.stdout)
    except:
        return result.stdout

def make_public(file_id):
    r = gws_call('drive', 'permissions', 'create',
                 params={'fileId': file_id},
                 body={'role': 'reader', 'type': 'anyone'})
    return r is not None

def build_requests(sections):
    """sections: list of (style, text). style=None means NORMAL_TEXT."""
    full_text = "".join(text + "\n" for _, text in sections)
    requests = [{"insertText": {"location": {"index": 1}, "text": full_text}}]
    idx = 1
    for style, text in sections:
        end = idx + len(text) + 1
        if style and style != 'NORMAL_TEXT':
            requests.append({
                "updateParagraphStyle": {
                    "range": {"startIndex": idx, "endIndex": end},
                    "paragraphStyle": {"namedStyleType": style},
                    "fields": "namedStyleType"
                }
            })
        idx = end
    return requests

def populate_doc(doc_id, sections):
    requests = build_requests(sections)
    r = gws_call('docs', 'documents', 'batchUpdate',
                 params={'documentId': doc_id},
                 body={'requests': requests})
    return r is not None


# ─────────────────────────────────────────────────────────────
# DOC 1 — Aperitivo $QUAD (Mapeador de Squad)
# ─────────────────────────────────────────────────────────────
doc1 = [
    ("TITLE", "Mapeador de Squad"),
    (None, "Seu presente gratuito. Você comentou SQUAD."),
    ("HEADING_2", "O que você tem em mãos"),
    (None, "Um prompt que transforma qualquer IA no arquiteto do seu squad. Ele mapeia as funções do seu negócio e te diz exatamente quais agentes montar, em qual ordem, e o que cada um vai fazer por você.\n\nEm menos de 10 minutos, você vai ter o blueprint do seu squad."),
    ("HEADING_2", "Como usar"),
    (None, "1. Copie o bloco abaixo na íntegra\n2. Cole no Claude (claude.ai) ou ChatGPT\n3. Responda as 6 perguntas que a IA vai fazer\n4. Receba o mapa completo do seu squad — pronto para construir"),
    ("HEADING_2", "O Prompt — copie tudo abaixo"),
    (None, "Você é um arquiteto de squads de agentes de IA para empreendedores solos, mentores e consultores.\n\nSua tarefa é mapear o negócio dessa pessoa e gerar o blueprint do squad ideal para ela — quais agentes montar, em qual ordem, e o que cada um vai fazer.\n\nVou te fazer 6 perguntas. Responda uma por vez, com o máximo de detalhe possível.\n\n1. O que você vende?\n(produto, serviço, mentoria, consultoria — seja específico sobre formato e preço)\n\n2. Como você gera clientes hoje?\n(Instagram, indicação, LinkedIn, tráfego pago, WhatsApp, live, etc.)\n\n3. Quais são as 3 atividades que mais tomam o seu tempo operacional?\n(ex: criar conteúdo, responder DMs, montar propostas, fazer follow-up, produzir aulas)\n\n4. Quais tarefas você mais adia ou deixa acumular?\n(ex: postagens atrasadas, textos de venda nunca finalizados, propostas demoradas)\n\n5. Onde você sente que perde mais dinheiro por falta de tempo?\n(ex: clientes sem follow-up, conteúdo inconsistente, proposta que demorou e perdeu o lead)\n\n6. Você tem algum freela ou funcionário hoje? Se sim, qual é o papel dele?\n\n---\n\nCom base nas respostas acima, gere:\n\nBLUEPRINT DO SQUAD — para cada agente recomendado:\n- Nome sugerido (ex: ORION, ARES, FREYJA, HERMES)\n- Função central (1 frase)\n- O que esse agente substitui no negócio (específico para a situação relatada)\n- Prioridade: CRÍTICO / IMPORTANTE / OPCIONAL\n\nORDEM DE MONTAGEM — os agentes em ordem de impacto imediato.\n\nDIAGNÓSTICO — 2-3 linhas: o padrão identificado e por que um squad resolve.\n\n1 ALERTA CRÍTICO — o erro mais comum de quem tenta montar um squad sem método. Uma frase."),
    ("HEADING_2", "O próximo passo"),
    (None, "Você agora tem o mapa. Sabe quais agentes montar, em qual ordem, e o que cada um faz.\n\nO que ainda falta: os system prompts reais, a lógica de orquestração entre os agentes, e o método para fazer cada um deles trabalhar junto — sem quebrar, sem repetir, sem se perder.\n\nIsso está no $QUAD."),
    ("HEADING_2", "Conheça o $QUAD"),
    (None, "$QUAD é o método completo para construir um squad de agentes hiperpersonalizado para o seu negócio — e rodar uma empresa real em cima disso.\n\nConstruído ao vivo. Com case real. Entregue em Skool.\n\nO squad não substitui você. Ele lida com o que te impede de crescer.\n\nPreço de lançamento: R$1.497 (de R$2.997)\n\n→ Quero o método completo: [LINK — em breve]\n\nDúvidas? Responda esta mensagem diretamente."),
]

# ─────────────────────────────────────────────────────────────
# DOC 2 — Oferta $QUAD
# ─────────────────────────────────────────────────────────────
doc2 = [
    ("TITLE", "$QUAD — Seu squad trabalha. Você orquestra. Você cobra premium."),
    (None, "Para empreendedores solos, mentores e consultores que querem escalar sem contratar."),
    ("HEADING_2", "O problema"),
    (None, "Você faz tudo. Produz conteúdo, responde DMs, monta proposta, faz follow-up, cria aula, fecha venda. Cada parte isolada é gerenciável. Juntas, são insustentáveis.\n\nO resultado é sempre o mesmo: o que é urgente devora o que é importante. Clientes sem resposta, conteúdo inconsistente, propostas que atrasam e perdem o lead.\n\nNão é falta de disciplina. É falta de arquitetura."),
    ("HEADING_2", "A solução"),
    (None, "$QUAD é o método para construir um squad de agentes de IA hiperpersonalizado para o seu negócio — cada agente com uma função específica, treinado com a sua voz e o seu contexto, operando em conjunto sob a sua orquestração.\n\nVocê não vai terceirizar decisões. Vai terceirizar operação.\n\nO squad lida com o que te impede de crescer. Você lida com o que só você pode fazer."),
    ("HEADING_2", "O que está dentro"),
    (None, "Módulo 0 — Comece aqui: o que é um squad e o que vamos construir\nMódulo 1 — Mapeamento do negócio: quais funções delegar, quais manter\nMódulo 2 — O Orquestrador: o agente que coordena todos os outros\nMódulo 3 — O Agente de Oferta: estrutura produtos, preços e narrativas\nMódulo 4 — O Agente de Conteúdo: escreve na sua voz em todos os formatos\nMódulo 5 — O Agente de Automação: DMs, onboarding, follow-up automático\nMódulo 6 — O Agente de Inteligência: pesquisa, posicionamento, dados\nMódulo 7 — Orquestração avançada: os agentes trabalhando juntos\n\nTodo módulo é construído ao vivo com case real — o squad da Runa Systems, rodando um negócio real em tempo real."),
    ("HEADING_2", "Formato"),
    (None, "Videoaulas curtas (screen recordings ao vivo)\nDocumentos de apoio por módulo\nTemplates de system prompt prontos para customizar\nComunidade no Skool\nAcesso vitalício"),
    ("HEADING_2", "Investimento"),
    (None, "Preço padrão: R$2.997\nPreço de lançamento: R$1.497\n\n→ Garantir minha vaga: [LINK — em breve]\n\nDúvidas? Responda esta mensagem diretamente."),
]

# ─────────────────────────────────────────────────────────────
# DOC 3 — RUNA SYSTEMS Apresentação
# ─────────────────────────────────────────────────────────────
doc3 = [
    ("TITLE", "RUNA SYSTEMS"),
    (None, "O ecossistema completo de inteligência artificial para o seu negócio."),
    ("HEADING_2", "O que é o RUNA SYSTEMS"),
    (None, "RUNA SYSTEMS é um ecossistema de IA construído para empreendedores solos que querem operar com a eficiência de uma equipe — sem contratar uma.\n\nNão é um curso sobre IA. É a infraestrutura que você instala no seu negócio e passa a operar com ela.\n\nOito agentes neurais. Quatro módulos técnicos. Uma comunidade de quem está construindo junto."),
    ("HEADING_2", "Os 8 Agentes Neurais"),
    (None, "CEO Neural — visão estratégica e tomada de decisão\nDesigner Neural — identidade visual e conteúdo\nCopy Neural — textos que convertem\nOfertas Neural — estruturação de produtos irresistíveis\nComercial & Vendas Neural — fechamento e gestão de objeções\nFinanceiro Neural — fluxo de caixa e precificação\nProjetos & Produtos Neural — execução e roadmap\nDev Neural — automações e integrações técnicas\n\nVocê não precisa saber programar. Você precisa saber orquestrar."),
    ("HEADING_2", "Os 4 Módulos Técnicos"),
    (None, "1. Claude.ai — modo chat: usando a IA como parceiro de pensamento\n2. Claude.ai — modo co-criação: produção colaborativa em tempo real\n3. Claude Code — orquestração de agentes via terminal\n4. Anti-gravity — instalando e operando Claude Code no seu ambiente"),
    ("HEADING_2", "3 formas de entrar"),
    (None, "COMUNIDADE — R$15.000/ano\nEcossistema completo + comunidade + 8 módulos. Você executa sozinho.\n\nMENTORIA — R$30.000\nTudo da Comunidade + 8 calls com Arthur (2x/mês por 90 dias) + WhatsApp direto.\n\nINTERVENÇÃO — R$50.000\nTudo da Comunidade + 21 dias de imersão. Arthur implementa. Você aprende fazendo junto."),
    ("HEADING_2", "Acesse a oferta completa"),
    (None, "runaecoai.com\n\nDúvidas? Responda esta mensagem diretamente."),
]

# ─────────────────────────────────────────────────────────────
# DOC 4 — Claude Code Intro (módulo gratuito)
# ─────────────────────────────────────────────────────────────
doc4 = [
    ("TITLE", "Introdução ao Claude Code"),
    (None, "Módulo gratuito — parte do ecossistema RUNA SYSTEMS"),
    ("HEADING_2", "O que é Claude Code"),
    (None, "Claude Code é a interface de terminal da Anthropic para o Claude. Em vez de conversar com a IA em uma janela de chat, você a opera diretamente do seu computador — com acesso aos seus arquivos, pastas, projetos e ferramentas.\n\nA diferença prática: no chat, você descreve o que quer. No Claude Code, o agente executa — lê arquivos, escreve código, navega pastas, roda comandos, faz deploys.\n\nÉ a diferença entre falar com um assistente e ter um colaborador que age."),
    ("HEADING_2", "Por que isso importa para o seu negócio"),
    (None, "Com Claude Code, você pode:\n\n- Construir agentes que operam no seu computador\n- Automatizar processos que hoje dependem de você\n- Criar, editar e organizar documentos em escala\n- Integrar com APIs, bancos de dados e ferramentas externas\n- Orquestrar múltiplos agentes trabalhando em paralelo\n\nNão é para programadores. É para quem quer operar com a capacidade de uma equipe de desenvolvimento — sem precisar ser um."),
    ("HEADING_2", "Como instalar"),
    (None, "1. Acesse: claude.ai/download\n2. Baixe o Claude Desktop para o seu sistema\n3. Abra o terminal do seu computador (Prompt de Comando no Windows, Terminal no Mac)\n4. Digite: claude\n5. Autentique com sua conta Anthropic\n\nPronto. Você está dentro."),
    ("HEADING_2", "Primeiro comando — teste agora"),
    (None, "Abra o terminal e digite:\n\nclaude \"Olá. Leia os arquivos desta pasta e me diz o que tem aqui.\"\n\nO Claude vai listar e descrever o que encontrar. Isso é Claude Code funcionando — não respondendo, mas operando."),
    ("HEADING_2", "O que vem depois"),
    (None, "Isso que você acabou de ver é só a entrada.\n\nO módulo completo do Claude Code dentro do RUNA SYSTEMS ensina:\n- Como configurar agentes especializados para cada função do negócio\n- Como construir um squad de agentes que operam juntos\n- Como conectar Claude Code a ferramentas externas (n8n, Supabase, APIs)\n- Como automatizar fluxos que hoje dependem de você\n\nQuando você entra no RUNA SYSTEMS, você vê esse módulo — e todos os outros."),
    ("HEADING_2", "Acesse o ecossistema completo"),
    (None, "runaecoai.com\n\nDúvidas? Responda esta mensagem diretamente."),
]

# ─────────────────────────────────────────────────────────────
# DOC 5 — RUNA SYSTEMS v2 (A/B — copy problema-primeiro)
# ─────────────────────────────────────────────────────────────
doc5 = [
    ("TITLE", "Você não está faltando esforço. Está faltando arquitetura."),
    (None, "Para empreendedores solos que operam no limite — e sabem que IA é a saída, mas ainda não encontraram o método."),
    ("HEADING_2", "O diagnóstico"),
    (None, "Você usa IA. Provavelmente usa bem. Produz mais rápido, pensa com mais clareza, resolve mais.\n\nMas ainda é você. Ainda é você que precisa estar presente para cada tarefa acontecer. A IA amplifica — mas não substitui a sua presença.\n\nA pergunta que ninguém responde: como passar de usar IA para ter IA trabalhando por você?"),
    ("HEADING_2", "A resposta é arquitetura"),
    (None, "Não é uma ferramenta diferente. Não é um prompt melhor. É como você estrutura os agentes, como define as funções de cada um, como eles se comunicam entre si, como você orquestra sem precisar estar em todo lugar.\n\nIsso tem método. E o método tem nome: RUNA SYSTEMS."),
    ("HEADING_2", "O que é RUNA SYSTEMS"),
    (None, "Um ecossistema completo de IA construído especificamente para empreendedores solos.\n\nOito agentes neurais treinados com o contexto do seu negócio. Quatro módulos técnicos que ensinam como operar essa infraestrutura. Uma comunidade de quem está construindo junto.\n\nVocê orquestra. Eles executam. Você cresce."),
    ("HEADING_2", "Como funciona na prática"),
    (None, "Semana 1: você configura os agentes com o contexto do seu negócio\nSemana 2: os agentes começam a operar nas tarefas que mais consomem seu tempo\nSemana 3: você ajusta, calibra, expande\nMês 2 em diante: você para de fazer coisas que uma máquina pode fazer melhor\n\nNão é automação genérica. É o seu negócio, com sua voz, operando em escala."),
    ("HEADING_2", "3 formas de entrar"),
    (None, "COMUNIDADE — R$15.000/ano\nSistema completo + comunidade. Você executa sozinho com o método.\n\nMENTORIA — R$30.000\nSistema completo + acompanhamento direto. Arthur guia, você executa.\n\nINTERVENÇÃO — R$50.000\nImersão de 21 dias. Arthur implementa junto com você."),
    ("HEADING_2", "Próximo passo"),
    (None, "Se você chegou até aqui é porque sente que está operando aquém do que poderia.\n\nEssa sensação é o diagnóstico. O RUNA SYSTEMS é o tratamento.\n\nrunaecoai.com\n\nDúvidas? Responda esta mensagem diretamente."),
]

# ─────────────────────────────────────────────────────────────
# Executar
# ─────────────────────────────────────────────────────────────
docs = [
    (RUNA_APRES,      doc3, "RUNA SYSTEMS Apresentação"),
    (CLAUDE_INTRO,    doc4, "Claude Code Intro"),
    (RUNA_V2,         doc5, "RUNA SYSTEMS v2"),
]

for doc_id, sections, name in docs:
    print(f"\n→ {name} ({doc_id})")
    ok = populate_doc(doc_id, sections)
    print(f"  Conteúdo: {'✅' if ok else '❌'}")
    ok2 = make_public(doc_id)
    print(f"  Público:  {'✅' if ok2 else '❌'}")
    print(f"  URL: https://docs.google.com/document/d/{doc_id}/edit")
