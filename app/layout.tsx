import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Source_Serif_4 } from 'next/font/google'
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '500'],
  style: 'normal',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Quoin | AI Operating Partner for Property Management',
  description: 'Quoin is an AI operating partner for property management firms. We build, deploy, and manage AI agents that integrate with your existing systems and workflows.',
}

export const viewport: Viewport = {
  themeColor: '#F7F4EE',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sourceSerif.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-surface-raised focus:text-ink-primary focus:px-4 focus:py-2 focus:border focus:border-strong"
        >
          Skip to content
        </a>
        <Navigation />
        <main id="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
