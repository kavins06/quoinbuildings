import type { Metadata } from "next"

export const siteUrl = "https://quoinbuildings.com"
export const siteName = "Quoin"
export const companyName = "Quoin Buildings, LLC"
export const defaultDescription =
  "Quoin maps real estate workflows, builds the intelligence layer required for safe AI, then builds, deploys, governs, and manages agents inside operating workflows."

export const publicRoutes = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/method", priority: 0.9, changeFrequency: "monthly" },
  { path: "/platform", priority: 0.9, changeFrequency: "monthly" },
  { path: "/team", priority: 0.7, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
  { path: "/accessibility", priority: 0.3, changeFrequency: "yearly" },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
] as const

type PageMetadataInput = {
  title: string
  description: string
  path: string
  image?: string
  keywords?: string[]
  absoluteTitle?: boolean
}

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString()
}

export function createPageMetadata({
  title,
  description,
  path,
  image = "/hero-bg.jpg",
  keywords = [],
  absoluteTitle = false,
}: PageMetadataInput): Metadata {
  const url = absoluteUrl(path)
  const imageUrl = absoluteUrl(image)

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${siteName} - ${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  }
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": `${siteUrl}/#organization`,
  name: companyName,
  alternateName: siteName,
  url: siteUrl,
  logo: absoluteUrl("/logo.png"),
  email: "kavins@quoinbuildings.com",
  description: defaultDescription,
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  founder: {
    "@type": "Person",
    name: "Kavin Sakthivel",
  },
  sameAs: ["https://linkedin.com/company/quoinbuildings"],
  knowsAbout: [
    "Organizational intelligence",
    "AI agents for real estate companies",
    "AI for property management",
    "AI for asset management",
    "Managed AI operations",
    "AI governance",
    "Real estate operations",
    "Property management workflows",
  ],
}

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: siteName,
  url: siteUrl,
  publisher: {
    "@id": `${siteUrl}/#organization`,
  },
  inLanguage: "en-US",
}

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}
