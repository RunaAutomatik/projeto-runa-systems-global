'use client'
import { StatusDot } from '@/components/ui/StatusDot'
import { useStore } from '@/store/useStore'
import type { Agent } from '@/types'

interface Props { agent: Agent }

export function AgentCard({ agent }: Props) {
  const { activeAgentId, setActiveAgent } = useStore()
  const isActive = activeAgentId === agent.id

  if (agent.isPrimary) {
    return (
      <button
        onClick={() => setActiveAgent(agent.id)}
        className="w-full text-left px-3 py-3 rounded-lg mb-3 transition-all group relative corner-cut"
        style={{
          background: isActive ? 'rgba(245,158,11,0.12)' : 'rgba(10,31,46,0.8)',
          border: `1px solid ${isActive ? 'rgba(245,158,11,0.5)' : 'rgba(26,58,74,0.6)'}`,
          animation: isActive ? 'orion-glow 4s ease-in-out infinite alternate' : undefined,
          boxShadow: isActive ? '0 0 30px rgba(245,158,11,0.3)' : undefined,
        }}
      >
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-2">
            <span className="text-lg">{agent.icon}</span>
            <span className="font-display font-bold text-sm tracking-widest" style={{ color: '#F59E0B' }}>
              {agent.name}
            </span>
          </div>
          <StatusDot status={agent.status} />
        </div>
        <div className="font-mono text-xs" style={{ color: '#7AA8B8', fontSize: 10 }}>
          {agent.role}
        </div>
        {isActive && (
          <div className="absolute top-0 left-0 right-0 h-px rounded-t-lg"
            style={{ background: 'linear-gradient(90deg, transparent, #F59E0B, #FFD166, transparent)' }} />
        )}
      </button>
    )
  }

  return (
    <button
      onClick={() => setActiveAgent(agent.id)}
      className="w-full text-left px-2.5 py-2 rounded transition-all hover:bg-surface flex items-center gap-2.5 group"
      style={{
        background: isActive ? 'rgba(245,158,11,0.08)' : 'transparent',
        border: `1px solid ${isActive ? 'rgba(245,158,11,0.3)' : 'transparent'}`,
      }}
    >
      <StatusDot status={isActive ? 'active' : agent.status} size="sm" />
      <span className="text-sm">{agent.icon}</span>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <span className="font-display font-semibold text-xs tracking-wider"
            style={{ color: isActive ? '#F59E0B' : '#E8F4F8' }}>
            {agent.name}
          </span>
          {agent.knowledge && (
            <span className="font-mono text-xs opacity-60" style={{ color: '#7AA8B8', fontSize: 9 }}>
              📚{agent.knowledge.count}
            </span>
          )}
        </div>
        <div className="font-body text-xs truncate" style={{ color: '#7AA8B8', fontSize: 10 }}>
          {agent.persona}
        </div>
      </div>
    </button>
  )
}
