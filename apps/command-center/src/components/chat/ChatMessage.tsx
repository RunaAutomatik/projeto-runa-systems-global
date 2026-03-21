'use client'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getAgent } from '@/lib/agents'
import { FeedbackButton } from './FeedbackButton'
import type { Message, ToolCall } from '@/types'

// Tool call block rendered inline within an assistant message
function ToolCallBlock({ tc }: { tc: ToolCall }) {
  const statusIcon  = tc.status === 'running' ? '◌' : tc.status === 'done' ? '✓' : '✕'
  const statusColor = tc.status === 'running' ? '#FFD166' : tc.status === 'done' ? '#22C55E' : '#FF6B00'

  return (
    <div className="my-2 rounded font-mono text-xs"
      style={{ background: 'rgba(245,158,11,0.04)', border: '1px solid rgba(245,158,11,0.12)', padding: '6px 10px' }}>
      <div className="flex items-center gap-2">
        <span style={{ color: statusColor, fontSize: 11 }}>{statusIcon}</span>
        <span style={{ color: '#7AA8B8' }}>⚙</span>
        <span style={{ color: '#F59E0B' }}>{tc.name}</span>
        <span style={{ color: '#7AA8B8', fontSize: 10 }}>{tc.label}</span>
      </div>
      {tc.result && tc.status !== 'running' && (
        <div className="mt-1.5 pl-5 text-xs leading-relaxed"
          style={{ color: tc.status === 'done' ? '#7AA8B8' : '#FF6B00', whiteSpace: 'pre-wrap', maxHeight: 120, overflowY: 'auto' }}>
          {tc.result.slice(0, 600)}{tc.result.length > 600 ? '\n...' : ''}
        </div>
      )}
    </div>
  )
}

interface Props { message: Message }

export function ChatMessage({ message }: Props) {
  const isUser = message.role === 'user'
  const agent  = getAgent(message.agentId)
  const time   = new Date(message.timestamp).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })

  if (isUser) {
    return (
      <div className="flex justify-end animate-[fade-slide_0.2s_ease-out_forwards]">
        <div className="max-w-[70%]">
          <div className="rounded-lg px-4 py-2.5 font-body text-sm" style={{
            background: 'rgba(245,158,11,0.08)',
            border: '1px solid rgba(245,158,11,0.2)',
            color: '#E8F4F8',
          }}>
            {message.content}
          </div>
          <div className="text-right mt-1 font-mono" style={{ color: '#7AA8B8', fontSize: 10 }}>{time}</div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-start gap-3 animate-[fade-slide_0.2s_ease-out_forwards] group">
      <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5"
        style={{ background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.25)' }}>
        <span style={{ fontSize: 13 }}>{agent?.icon ?? '🤖'}</span>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="font-display font-bold text-xs tracking-wider" style={{ color: '#F59E0B' }}>
            {agent?.name}
          </span>
          <span className="font-mono" style={{ color: '#7AA8B8', fontSize: 10 }}>{time}</span>
        </div>
        <div className="rounded-lg px-4 py-3 prose-hud text-sm"
          style={{ background: 'rgba(10,31,46,0.9)', border: '1px solid rgba(26,58,74,0.8)', color: '#E8F4F8' }}>
          {/* Tool call blocks rendered above the text response */}
          {message.toolCalls?.map(tc => (
            <ToolCallBlock key={tc.id} tc={tc} />
          ))}
          {message.content ? (
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {message.content}
            </ReactMarkdown>
          ) : !message.toolCalls?.length ? (
            /* WhatsApp-style typing dots — shown while waiting for first token or tool */
            <div className="flex items-center gap-1.5 py-0.5">
              {[0, 1, 2].map(i => (
                <span
                  key={i}
                  className="block w-2 h-2 rounded-full"
                  style={{
                    background: '#F59E0B',
                    opacity: 0.5,
                    animation: 'typing-dot 1.2s ease-in-out infinite',
                    animationDelay: `${i * 0.2}s`,
                  }}
                />
              ))}
            </div>
          ) : null}
        </div>
        {/* Feedback — only shown when message has content */}
        {message.content && (
          <div className="mt-1 pl-1">
            <FeedbackButton agentId={message.agentId} messageContent={message.content} />
          </div>
        )}
      </div>
    </div>
  )
}
