'use client'
import { HealthScore } from '@/components/ui/HealthScore'
import { useStore } from '@/store/useStore'
import { getAgent } from '@/lib/agents'

const MCP_STATUS = [
  { label: 'n8n',      ok: true  },
  { label: 'Supabase', ok: true  },
  { label: 'Neon',     ok: false },
]

export function TopBar() {
  const { activeAgentId, sessionCount } = useStore()
  const agent = getAgent(activeAgentId)
  const now = new Date().toLocaleDateString('pt-BR', { weekday: 'short', day: '2-digit', month: 'short' })

  return (
    <header className="hud-border-bottom relative z-20 flex items-center justify-between px-4 h-11 shrink-0"
      style={{ background: 'rgba(5,13,26,0.95)', backdropFilter: 'blur(12px)' }}>

      {/* Left — active agent */}
      <div className="flex items-center gap-3">
        <span className="font-display text-xs tracking-[0.2em] uppercase" style={{ color: '#7AA8B8' }}>
          RUNA
        </span>
        <span style={{ color: '#1A3A4A' }}>│</span>
        <div className="flex items-center gap-2">
          <span className="text-sm">{agent?.icon}</span>
          <span className="font-display font-bold text-sm tracking-wider" style={{ color: '#F59E0B' }}>
            {agent?.name}
          </span>
          <span className="font-mono text-xs" style={{ color: '#7AA8B8' }}>▸</span>
          <span className="font-body text-xs" style={{ color: '#7AA8B8' }}>{agent?.persona}</span>
        </div>
      </div>

      {/* Center — system name */}
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
        <span className="font-display font-semibold text-xs tracking-[0.3em] uppercase" style={{ color: '#E8F4F8', opacity: 0.6 }}>
          Command Center
        </span>
      </div>

      {/* Right — system status */}
      <div className="flex items-center gap-3">
        <HealthScore score={87} />

        {/* Workers badge */}
        <div className="flex items-center gap-1.5 px-2 py-1 rounded text-xs font-mono"
          style={{ border: '1px solid rgba(34,197,94,0.25)', color: '#7AA8B8' }}>
          <span style={{ color: '#22C55E', fontSize: 8 }}>●</span>
          <span>4 workers</span>
        </div>

        {/* MCP dots */}
        <div className="flex items-center gap-1.5">
          {MCP_STATUS.map(m => (
            <div key={m.label} className="flex items-center gap-1" title={m.label}>
              <span style={{ fontSize: 7, color: m.ok ? '#22C55E' : '#FF6B00' }}>●</span>
              <span className="font-mono text-xs" style={{ color: '#7AA8B8', fontSize: 10 }}>{m.label}</span>
            </div>
          ))}
        </div>

        <span style={{ color: '#1A3A4A' }}>│</span>
        <span className="font-mono text-xs" style={{ color: '#7AA8B8', fontSize: 10 }}>
          {now} · <span style={{ color: '#F59E0B' }}>#{sessionCount}</span>
        </span>
      </div>
    </header>
  )
}
