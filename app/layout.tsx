import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jerome Edward Guban - Portfolio',
  description: 'Backend Developer | 6+ years of experience building robust backend architectures. Expert in APIs, databases, and scalable server-side systems.',
  metadataBase: new URL('https://jerome-edward-guban-portfolio.vercel.app'),
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
  openGraph: {
    title: 'Jerome Edward Guban - Portfolio',
    description: 'Backend Developer | 6+ years of experience building robust backend architectures. Expert in APIs, databases, and scalable server-side systems.',
    url: 'https://jerome-edward-guban-portfolio.vercel.app',
    siteName: 'Jerome Edward Guban - Portfolio',
    images: [
      {
        url: 'https://jerome-edward-guban-portfolio.vercel.app/images/featured-image.jpg',
        width: 1200,
        height: 1600,
        alt: 'Jerome Edward Guban - Backend Developer Portfolio',
        type: 'image/jpeg',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jerome Edward Guban - Portfolio',
    description: 'Backend Developer | 6+ years of experience building robust backend architectures. Expert in APIs, databases, and scalable server-side systems.',
    images: ['https://jerome-edward-guban-portfolio.vercel.app/images/featured-image.jpg'],
    creator: '@jeromeedward',
  },
  alternates: {
    canonical: 'https://jerome-edward-guban-portfolio.vercel.app',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Additional meta tags for better link preview compatibility */}
        <meta property="og:image:secure_url" content="https://jerome-edward-guban-portfolio.vercel.app/images/featured-image.jpg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="1600" />
        <meta property="og:image:alt" content="Jerome Edward Guban - Backend Developer Portfolio" />
        
        {/* Telegram specific */}
        <meta name="telegram:image" content="https://jerome-edward-guban-portfolio.vercel.app/images/featured-image.jpg" />
        
        {/* Additional tags for email clients (Gmail, Outlook, etc.) */}
        <meta name="image" content="https://jerome-edward-guban-portfolio.vercel.app/images/featured-image.jpg" />
        <link rel="image_src" href="https://jerome-edward-guban-portfolio.vercel.app/images/featured-image.jpg" />
      </head>
      <body>{children}</body>
    </html>
  )
}

