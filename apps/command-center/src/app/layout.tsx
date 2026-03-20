import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Runa Command Center',
  description: 'AI Squad Operating System — Runa Systems Global',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="h-screen w-screen overflow-hidden bg-void text-mist">
        {children}
      </body>
    </html>
  )
}
