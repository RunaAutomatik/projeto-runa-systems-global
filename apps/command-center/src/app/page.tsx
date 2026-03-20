'use client'
import { useEffect } from 'react'
import { TopBar }         from '@/components/layout/TopBar'
import { Sidebar }        from '@/components/layout/Sidebar'
import { MainWorkspace }  from '@/components/layout/MainWorkspace'
import { MyceliumBackground } from '@/components/ui/MyceliumBackground'
import { useStore }       from '@/store/useStore'
import { getStoredMessages, getStoredAgent, getSessionCount } from '@/lib/storage'

export default function CommandCenter() {
  const { initMessages, setActiveAgent, setSessionCount } = useStore()

  useEffect(() => {
    initMessages(getStoredMessages())
    setActiveAgent(getStoredAgent())
    setSessionCount(getSessionCount())
  }, [initMessages, setActiveAgent, setSessionCount])

  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col bg-void relative scanlines">
      <MyceliumBackground />
      <TopBar />
      <div className="flex flex-1 overflow-hidden relative z-10">
        <Sidebar />
        <MainWorkspace />
      </div>
    </div>
  )
}
