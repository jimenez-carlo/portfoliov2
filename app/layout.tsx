
import type { Metadata } from 'next'
import './globals.css'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  mainEntity: {
    '@type': 'Person',
    '@id': 'https://jimenez-carlo.github.io/portfolio/#person',
    name: 'Carlo Jimenez',
    url: 'https://jimenez-carlo.github.io/portfolio/',
    jobTitle: 'Full-Stack Software Developer',
    description:
      'Full-stack software developer based in Bayambang, Pangasinan, Philippines, specializing in web development, software engineering, and AI integration.',
    sameAs: [
      'https://www.linkedin.com/in/carlo-jimenez-28318520',
      'https://github.com/jimenez-carlo',
    ],
  },
}

export const metadata: Metadata = {
  title: 'Carlo Jimenez | Full-Stack Software Developer',
  description:
    'Explore the official portfolio of Carlo Jimenez, a full-stack software developer based in Bayambang, Pangasinan, Philippines. Discover his experience in web development, software engineering, AI integration, and building modern digital solutions.',
  alternates: {
    canonical: 'https://jimenez-carlo.github.io/portfolio/',
  },
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
