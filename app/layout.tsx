import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Carlo Jimenez',
  description:
    'Explore the official portfolio of Carlo Jimenez, a full-stack software developer based in Bayambang, Pangasinan, Philippines. Discover his experience in web development, software engineering, AI integration, and building modern digital solutions.',
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
