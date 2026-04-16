import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Spectral, Open_Sans } from 'next/font/google'
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SpeedInsights } from '@vercel/speed-insights/next'

import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-open-sans' })
const spectral = Spectral({
  subsets: ['latin'],
  variable: '--font-spectral',
  weight: ['200', '300', '400', '500'],
  style: 'normal',
})

export const metadata: Metadata = {
  title: 'Quoin | AI Operating Partner for Property Management',
  description: 'Quoin is an AI operating partner for property management firms. We build, deploy, and manage AI agents that integrate with your existing systems and workflows.',
}

export const viewport: Viewport = {
  themeColor: '#0F0F0F',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spectral.variable} ${openSans.variable}`}>
      <body className="font-sans antialiased">
        <Navigation />
        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  )
}
