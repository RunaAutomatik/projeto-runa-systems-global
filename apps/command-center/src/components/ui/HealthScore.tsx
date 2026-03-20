'use client'
import { useState, useEffect } from 'react'

interface Props { score?: number }

export function HealthScore({ score = 87 }: Props) {
  const [displayed, setDisplayed] = useState(0)
  const isLow = score < 80

  useEffect(() => {
    let frame = 0
    const total = 40
    const interval = setInterval(() => {
      frame++
      setDisplayed(Math.round((score * frame) / total))
      if (frame >= total) clearInterval(interval)
    }, 20)
    return () => clearInterval(interval)
  }, [score])

  return (
    <button
      className="flex items-center gap-1.5 px-2.5 py-1 rounded font-mono text-xs transition-all hover:bg-surface"
      style={{ border: '1px solid rgba(245,158,11,0.2)' }}
      title="System Health Score"
    >
      <span style={{ color: isLow ? '#FF6B00' : '#F59E0B', animation: isLow ? 'breathe 1s ease-in-out infinite alternate' : undefined }}>
        ⚡
      </span>
      <span style={{ color: isLow ? '#FF6B00' : '#FFD166' }} className="font-mono">
        {displayed}%
      </span>
    </button>
  )
}
