'use client'
interface Props { agentIcon?: string }

export function ThinkingAnimation({ agentIcon = '🤖' }: Props) {
  return (
    <div className="flex items-start gap-3 animate-[fade-slide_0.2s_ease-out_forwards]">
      <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5"
        style={{ background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.3)' }}>
        <span style={{ fontSize: 13 }}>{agentIcon}</span>
      </div>
      <div className="rounded-lg px-4 py-3" style={{
        background: 'rgba(10,31,46,0.9)',
        border: '1px solid rgba(26,58,74,0.8)',
      }}>
        {/* Mycelium growing dots */}
        <div className="flex items-center gap-3">
          <svg width="60" height="20" viewBox="0 0 60 20">
            {[0, 1, 2].map(i => (
              <circle key={i} cx={10 + i * 20} cy="10" r="3" fill="#F59E0B" opacity="0.3">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="1.2s"
                  begin={`${i * 0.3}s`} repeatCount="indefinite" />
                <animate attributeName="r" values="3;4;3" dur="1.2s"
                  begin={`${i * 0.3}s`} repeatCount="indefinite" />
              </circle>
            ))}
            <line x1="13" y1="10" x2="17" y2="10" stroke="#F59E0B" strokeWidth="0.8" opacity="0.3">
              <animate attributeName="opacity" values="0.2;0.6;0.2" dur="1.2s" repeatCount="indefinite" />
            </line>
            <line x1="33" y1="10" x2="37" y2="10" stroke="#F59E0B" strokeWidth="0.8" opacity="0.3">
              <animate attributeName="opacity" values="0.2;0.6;0.2" dur="1.2s" begin="0.3s" repeatCount="indefinite" />
            </line>
          </svg>
          <span className="font-mono text-xs" style={{ color: '#7AA8B8', fontSize: 10 }}>processando</span>
        </div>
      </div>
    </div>
  )
}
