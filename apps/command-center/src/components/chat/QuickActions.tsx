'use client'
import type { QuickAction } from '@/types'

interface Props { actions: QuickAction[]; onAction: (prompt: string) => void; disabled?: boolean }

export function QuickActions({ actions, onAction, disabled }: Props) {
  return (
    <div className="flex flex-wrap gap-1.5 px-1">
      {actions.map(action => (
        <button
          key={action.label}
          onClick={() => onAction(action.prompt)}
          disabled={disabled}
          className="font-mono text-xs px-2.5 py-1 rounded transition-all hover:border-amber-DEFAULT"
          style={{
            fontSize: 10, background: 'rgba(245,158,11,0.05)',
            border: '1px solid rgba(245,158,11,0.2)', color: '#7AA8B8',
          }}
        >
          {action.label}
        </button>
      ))}
    </div>
  )
}
