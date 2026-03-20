'use client'
import type { AgentStatus } from '@/types'

interface Props {
  status: AgentStatus
  size?: 'sm' | 'md'
}

const colors: Record<AgentStatus, string> = {
  active:     '#F59E0B',
  idle:       '#1A3A4A',
  processing: '#FFD166',
  error:      '#FF6B00',
}

export function StatusDot({ status, size = 'md' }: Props) {
  const px = size === 'sm' ? 6 : 8
  return (
    <span className={`status-dot ${status}`} style={{ width: px, height: px, minWidth: px }} />
  )
}
