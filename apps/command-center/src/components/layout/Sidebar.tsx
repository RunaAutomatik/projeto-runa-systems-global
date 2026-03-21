'use client'
import { AgentCard } from '@/components/agents/AgentCard'
import { AGENTS, TECHNICAL_AGENTS, SKILLS } from '@/lib/agents'
import { useStore } from '@/store/useStore'

// Skill → agent routing + prompt
const SKILL_CONFIG: Record<string, { agentId: string; prompt: string }> = {
  Ads: {
    agentId: 'ares',
    prompt: 'Quero trabalhar com as skills de Ads (18 skills disponíveis: Google Ads, Meta Ads, LinkedIn Ads, TikTok Ads, criativo, budget etc.). Qual campanha ou plataforma vamos analisar/otimizar?',
  },
  SEO: {
    agentId: 'helios',
    prompt: 'Quero usar as skills de SEO (13 skills: técnico, conteúdo, GEO, schema, sitemap, performance, hreflang, programático, imagens, competidor, page-level, content quality). Por onde começamos?',
  },
  'UI/UX': {
    agentId: 'orion',
    prompt: 'Preciso de suporte em UI/UX design (skill ui-ux-pro-max disponível: 67 estilos, 96 paletas, 57 font pairings, 25 charts, 13 stacks). Qual é o projeto ou tela que vamos trabalhar?',
  },
  Frontend: {
    agentId: 'orion',
    prompt: 'Preciso de suporte em Frontend (skill frontend-design disponível: interfaces de produção, alta qualidade visual). Qual é o componente ou página que vamos construir?',
  },
}

const Divider = ({ label }: { label: string }) => (
  <div className="flex items-center gap-2 px-2 py-2 mt-1">
    <div className="flex-1 h-px" style={{ background: 'rgba(26,58,74,0.6)' }} />
    <span className="font-mono text-xs shrink-0 tracking-widest uppercase" style={{ color: '#1A3A4A', fontSize: 9 }}>{label}</span>
    <div className="flex-1 h-px" style={{ background: 'rgba(26,58,74,0.6)' }} />
  </div>
)

export function Sidebar() {
  const { setActiveAgent } = useStore()
  const orion = AGENTS.find(a => a.isPrimary)!
  const technicalIds = new Set(TECHNICAL_AGENTS.map(a => a.id))
  const squad = AGENTS.filter(a => !a.isPrimary && !technicalIds.has(a.id))

  // Skills dispatch: route to agent + trigger command via custom event
  const handleSkillClick = (skillName: string) => {
    const config = SKILL_CONFIG[skillName]
    if (!config) return
    setActiveAgent(config.agentId)
    // Small delay so agent switches before dispatching the message
    setTimeout(() => {
      window.dispatchEvent(new CustomEvent('skill:execute', { detail: { prompt: config.prompt } }))
    }, 100)
  }

  return (
    <aside className="w-56 shrink-0 flex flex-col overflow-hidden relative z-10"
      style={{ background: 'rgba(5,13,26,0.85)', borderRight: '1px solid rgba(26,58,74,0.5)', backdropFilter: 'blur(8px)' }}>
      <div className="flex-1 overflow-y-auto px-2 py-3 space-y-0.5">

        {/* ORION — primary */}
        <AgentCard agent={orion} />

        {/* Operational squad */}
        <Divider label="Squad Operacional" />
        {squad.map(a => <AgentCard key={a.id} agent={a} />)}

        {/* Technical squad */}
        <Divider label="Squad Técnico" />
        <div className="flex flex-wrap gap-1 px-2 py-1">
          {TECHNICAL_AGENTS.map(a => (
            <button key={a.id}
              onClick={() => setActiveAgent(a.id)}
              className="font-mono text-xs px-2 py-0.5 rounded transition-all cursor-pointer"
              style={{ fontSize: 10, background: 'rgba(26,58,74,0.3)', border: '1px solid rgba(26,58,74,0.6)', color: '#7AA8B8' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,212,200,0.4)'; e.currentTarget.style.color = '#00D4C8' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(26,58,74,0.6)'; e.currentTarget.style.color = '#7AA8B8' }}
            >
              {a.name}
            </button>
          ))}
        </div>

        {/* Skills */}
        <Divider label="Skills" />
        <div className="px-2 space-y-1">
          {SKILLS.map(s => (
            <button
              key={s.name}
              onClick={() => handleSkillClick(s.name)}
              className="w-full flex items-center justify-between px-2 py-1.5 rounded transition-all text-left group"
              style={{ border: '1px solid rgba(26,58,74,0.3)', background: 'transparent' }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(245,158,11,0.04)'
                e.currentTarget.style.borderColor = 'rgba(245,158,11,0.2)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.borderColor = 'rgba(26,58,74,0.3)'
              }}
            >
              <div className="flex items-center gap-2">
                <span style={{ fontSize: 11 }}>{s.icon}</span>
                <span className="font-body text-xs" style={{ color: '#7AA8B8' }}>{s.name}</span>
              </div>
              <span className="font-mono text-xs px-1.5 rounded"
                style={{ background: 'rgba(245,158,11,0.08)', color: '#F59E0B', fontSize: 9 }}>
                {s.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Ingest button */}
      <div className="shrink-0 px-2 py-3" style={{ borderTop: '1px solid rgba(26,58,74,0.5)' }}>
        <button className="w-full py-2 rounded font-mono text-xs tracking-widest uppercase transition-all hover:border-amber-DEFAULT"
          style={{ border: '1px solid rgba(26,58,74,0.6)', color: '#7AA8B8', fontSize: 10 }}>
          📥 Ingest Knowledge
        </button>
      </div>
    </aside>
  )
}
