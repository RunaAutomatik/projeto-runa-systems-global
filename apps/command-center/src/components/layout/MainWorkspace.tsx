'use client'
import { ChatWorkspace } from '@/components/chat/ChatWorkspace'
import { useStore }      from '@/store/useStore'
import type { TabId }    from '@/types'

const TABS: { id: TabId; label: string; available: boolean }[] = [
  { id: 'chat',      label: 'CHAT',       available: true  },
  { id: 'projects',  label: 'PROJETOS',   available: false },
  { id: 'workers',   label: 'WORKERS',    available: false },
  { id: 'knowledge', label: 'KNOWLEDGE',  available: false },
]

function ComingSoon({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-4 opacity-40">
      <div className="font-mono text-4xl" style={{ color: '#1A3A4A' }}>◌</div>
      <div className="font-display text-sm tracking-wider" style={{ color: '#7AA8B8' }}>{label}</div>
      <div className="font-mono text-xs" style={{ color: '#1A3A4A' }}>Disponível em V2</div>
    </div>
  )
}

export function MainWorkspace() {
  const { activeTab, setActiveTab } = useStore()

  return (
    <main className="flex-1 flex flex-col overflow-hidden relative z-10">
      {/* Tab bar */}
      <nav className="flex items-end gap-0 px-4 shrink-0"
        style={{ borderBottom: '1px solid rgba(26,58,74,0.5)', background: 'rgba(5,13,26,0.6)' }}>
        {TABS.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2.5 font-mono text-xs tracking-widest uppercase transition-all relative ${activeTab === tab.id ? 'tab-active' : ''}`}
            style={{
              color: activeTab === tab.id ? '#F59E0B' : tab.available ? '#7AA8B8' : '#1A3A4A',
              cursor: tab.available ? 'pointer' : 'not-allowed',
            }}
          >
            {tab.label}
            {!tab.available && (
              <span className="ml-1.5 font-mono" style={{ fontSize: 8, color: '#1A3A4A' }}>V2</span>
            )}
          </button>
        ))}
      </nav>

      {/* Content */}
      <div className="flex-1 overflow-hidden">
        {activeTab === 'chat'      && <ChatWorkspace />}
        {activeTab === 'projects'  && <ComingSoon label="PROJECT OS" />}
        {activeTab === 'workers'   && <ComingSoon label="WORKERS MONITOR" />}
        {activeTab === 'knowledge' && <ComingSoon label="KNOWLEDGE BASE" />}
      </div>
    </main>
  )
}
