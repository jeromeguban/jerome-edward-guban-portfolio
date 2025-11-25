import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jerome Edward Guban - Portfolio',
  description: 'Backend Developer',
  metadataBase: new URL('https://jerome-edward-guban-portfolio.vercel.app'),
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
  openGraph: {
    title: 'Jerome Edward Guban - Portfolio',
    description: 'Backend Developer',
    url: 'https://jerome-edward-guban-portfolio.vercel.app',
    siteName: 'Jerome Edward Guban - Portfolio',
    images: [
      {
        url: '/images/featured-image.jpg',
        width: 1200,
        height: 1600,
        alt: 'Jerome Edward Guban - Portfolio',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jerome Edward Guban - Portfolio',
    description: 'Backend Developer',
    images: ['/images/featured-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

