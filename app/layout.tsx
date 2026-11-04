import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Carlo Jimenez - Portfolio v2',
  description: 'Explore the official portfolio (v2) of Carlo Jimenez, a Bayambang, Pangasinan-based full-stack software developer, programmer, and freelancer. Discover expert web development, AI integration, and modern software solutions.',
  generator: '',
  // description: 'Created with v0',
  // generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
