import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jerome Edward Guban - Portfolio',
  description: 'Backend Developer',
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

