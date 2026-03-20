'use client'
import { AgentCard } from '@/components/agents/AgentCard'
import { AGENTS, TECHNICAL_AGENTS, SKILLS } from '@/lib/agents'

const Divider = ({ label }: { label: string }) => (
  <div className="flex items-center gap-2 px-2 py-2 mt-1">
    <div className="flex-1 h-px" style={{ background: 'rgba(26,58,74,0.6)' }} />
    <span className="font-mono text-xs shrink-0 tracking-widest uppercase" style={{ color: '#1A3A4A', fontSize: 9 }}>{label}</span>
    <div className="flex-1 h-px" style={{ background: 'rgba(26,58,74,0.6)' }} />
  </div>
)

export function Sidebar() {
  const orion = AGENTS.find(a => a.isPrimary)!
  const squad = AGENTS.filter(a => !a.isPrimary)

  return (
    <aside className="w-56 shrink-0 flex flex-col overflow-hidden relative z-10"
      style={{ background: 'rgba(5,13,26,0.85)', borderRight: '1px solid rgba(26,58,74,0.5)', backdropFilter: 'blur(8px)' }}>
      <div className="flex-1 overflow-y-auto px-2 py-3 space-y-0.5">

        {/* ORION — primary */}
        <AgentCard agent={orion} />

        {/* Internal squad */}
        <Divider label="Squad" />
        {squad.map(a => <AgentCard key={a.id} agent={a} />)}

        {/* Technical layer */}
        <Divider label="Technical" />
        <div className="flex flex-wrap gap-1 px-2 py-1">
          {TECHNICAL_AGENTS.map(a => (
            <span key={a.id} className="font-mono text-xs px-2 py-0.5 rounded transition-all hover:border-amber-DEFAULT cursor-pointer"
              style={{ fontSize: 10, background: 'rgba(26,58,74,0.3)', border: '1px solid rgba(26,58,74,0.6)', color: '#7AA8B8' }}>
              {a.label}
            </span>
          ))}
        </div>

        {/* Skills */}
        <Divider label="Skills" />
        <div className="px-2 space-y-1">
          {SKILLS.map(s => (
            <div key={s.name} className="flex items-center justify-between px-2 py-1 rounded hover:bg-surface transition-all cursor-pointer"
              style={{ border: '1px solid transparent' }}>
              <div className="flex items-center gap-2">
                <span style={{ fontSize: 11 }}>{s.icon}</span>
                <span className="font-body text-xs" style={{ color: '#7AA8B8' }}>{s.name}</span>
              </div>
              <span className="font-mono text-xs px-1.5 rounded"
                style={{ background: 'rgba(245,158,11,0.08)', color: '#F59E0B', fontSize: 9 }}>
                {s.count}
              </span>
            </div>
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
