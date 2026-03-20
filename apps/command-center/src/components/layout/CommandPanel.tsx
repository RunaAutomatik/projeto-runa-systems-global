'use client'
import { useState } from 'react'
import { AGENT_COMMANDS, getAgent } from '@/lib/agents'
import { useStore } from '@/store/useStore'
import type { AgentCommand } from '@/types'

interface CommandGroupProps {
  category: string
  commands: AgentCommand[]
  onExecute: (prompt: string) => void
}

function CommandGroup({ category, commands, onExecute }: CommandGroupProps) {
  return (
    <div className="mb-3">
      <div className="font-mono text-xs tracking-widest uppercase px-3 py-1 mb-1"
        style={{ color: '#1A3A4A', fontSize: 9 }}>
        {category}
      </div>
      {commands.map(cmd => (
        <button
          key={cmd.cmd}
          onClick={() => onExecute(cmd.prompt)}
          className="w-full text-left px-3 py-2 transition-all group hover:bg-surface"
          style={{ borderBottom: '1px solid rgba(26,58,74,0.2)' }}
        >
          <div className="flex items-baseline gap-1.5 mb-0.5">
            <span className="font-mono text-xs shrink-0" style={{ color: '#F59E0B', fontSize: 10 }}>
              {cmd.cmd}
            </span>
            {cmd.args && (
              <span className="font-mono text-xs shrink-0" style={{ color: '#1A3A4A', fontSize: 9 }}>
                {cmd.args}
              </span>
            )}
          </div>
          <div className="font-body text-xs leading-tight" style={{ color: '#7AA8B8', fontSize: 10 }}>
            {cmd.description}
          </div>
        </button>
      ))}
    </div>
  )
}

interface Props {
  onExecuteCommand: (prompt: string) => void
}

export function CommandPanel({ onExecuteCommand }: Props) {
  const { activeAgentId } = useStore()
  const [collapsed, setCollapsed] = useState(false)
  const agent = getAgent(activeAgentId)
  const commands = AGENT_COMMANDS[activeAgentId] ?? []

  // Group commands by category
  const grouped = commands.reduce<Record<string, AgentCommand[]>>((acc, cmd) => {
    if (!acc[cmd.category]) acc[cmd.category] = []
    acc[cmd.category].push(cmd)
    return acc
  }, {})

  if (collapsed) {
    return (
      <aside className="shrink-0 flex flex-col items-center py-3 relative z-10"
        style={{ width: 28, background: 'rgba(5,13,26,0.85)', borderLeft: '1px solid rgba(26,58,74,0.5)' }}>
        <button
          onClick={() => setCollapsed(false)}
          className="font-mono text-xs"
          style={{ color: '#1A3A4A', writingMode: 'vertical-rl', transform: 'rotate(180deg)', letterSpacing: '0.15em', fontSize: 9 }}
          title="Expandir comandos"
        >
          CMDS
        </button>
      </aside>
    )
  }

  return (
    <aside className="w-52 shrink-0 flex flex-col overflow-hidden relative z-10"
      style={{ background: 'rgba(5,13,26,0.85)', borderLeft: '1px solid rgba(26,58,74,0.5)', backdropFilter: 'blur(8px)' }}>

      {/* Header */}
      <div className="shrink-0 flex items-center justify-between px-3 py-2.5"
        style={{ borderBottom: '1px solid rgba(26,58,74,0.5)' }}>
        <div className="flex items-center gap-2">
          <span style={{ fontSize: 12 }}>{agent?.icon}</span>
          <div>
            <div className="font-mono text-xs tracking-widest uppercase" style={{ color: '#F59E0B', fontSize: 9 }}>
              Comandos
            </div>
            <div className="font-display font-bold text-xs" style={{ color: '#E8F4F8', fontSize: 10 }}>
              {agent?.name}
            </div>
          </div>
        </div>
        <button
          onClick={() => setCollapsed(true)}
          className="font-mono text-xs transition-all hover:opacity-100"
          style={{ color: '#1A3A4A', fontSize: 16, lineHeight: 1 }}
          title="Recolher"
        >
          ›
        </button>
      </div>

      {/* Hint */}
      <div className="px-3 py-1.5 shrink-0" style={{ borderBottom: '1px solid rgba(26,58,74,0.3)' }}>
        <div className="font-mono text-xs" style={{ color: '#1A3A4A', fontSize: 9 }}>
          Clique para executar
        </div>
      </div>

      {/* Commands list */}
      <div className="flex-1 overflow-y-auto py-2">
        {Object.entries(grouped).map(([category, cmds]) => (
          <CommandGroup
            key={category}
            category={category}
            commands={cmds}
            onExecute={onExecuteCommand}
          />
        ))}
        {commands.length === 0 && (
          <div className="px-3 py-4 text-center">
            <div className="font-mono text-xs" style={{ color: '#1A3A4A', fontSize: 10 }}>
              Sem comandos disponíveis
            </div>
          </div>
        )}
      </div>

      {/* Footer count */}
      <div className="shrink-0 px-3 py-2" style={{ borderTop: '1px solid rgba(26,58,74,0.5)' }}>
        <div className="font-mono text-xs" style={{ color: '#1A3A4A', fontSize: 9 }}>
          {commands.length} comandos disponíveis
        </div>
      </div>
    </aside>
  )
}
