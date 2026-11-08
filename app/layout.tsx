import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Carlo Jimenez',
  description:
    'Explore the official portfolio (v2) of Carlo Jimenez, a Bayambang, Pangasinan-based full-stack software developer, programmer, and freelancer. Discover expert web development, AI integration, and modern software solutions.',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

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
