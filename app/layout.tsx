import React from "react"
import type { Metadata, Viewport } from 'next'
import { IBM_Plex_Sans, Instrument_Serif } from 'next/font/google'
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { JsonLd } from "@/components/json-ld"
import { defaultDescription, organizationJsonLd, siteName, siteUrl, websiteJsonLd } from "@/lib/seo"

import './globals.css'

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400'],
  style: ['normal', 'italic'],
  display: 'swap',
})
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: "Quoin | Governed AI Agents for Real Estate Companies",
    template: "%s | Quoin",
  },
  description: defaultDescription,
  keywords: [
    "AI for property management",
    "AI for asset management",
    "AI for REITs",
    "AI agents for real estate companies",
    "organizational intelligence real estate",
    "managed AI operations",
    "AI governance real estate",
    "real estate AI operations",
  ],
  authors: [{ name: "Quoin Buildings, LLC", url: siteUrl }],
  creator: "Quoin Buildings, LLC",
  publisher: "Quoin Buildings, LLC",
  category: "Technology consulting",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Quoin | Governed AI Agents for Real Estate Companies",
    description: defaultDescription,
    url: siteUrl,
    siteName,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Quoin governed AI agents for vertically integrated real estate companies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quoin | Governed AI Agents for Real Estate Companies",
    description: defaultDescription,
    images: ["/hero-bg.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${ibmPlexSans.variable} ${instrumentSerif.variable}`}>
      <body className="font-sans antialiased bg-surface-base text-ink-primary paper-grain">
        <JsonLd data={[organizationJsonLd, websiteJsonLd]} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-surface-raised focus:text-ink-primary focus:px-4 focus:py-2 focus:border focus:border-strong"
        >
          Skip to content
        </a>
        <Navigation />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
