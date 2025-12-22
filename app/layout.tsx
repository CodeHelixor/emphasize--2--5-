import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Clikkle Pricing',
  description: 'Pricing plans for Clikkle Worksuite',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="light">
      <body className="antialiased">{children}</body>
    </html>
  )
}

