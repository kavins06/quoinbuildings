import type { Metadata } from "next"

export const siteUrl = "https://quoinbuildings.com"
export const siteName = "Quoin"
export const companyName = "Quoin Buildings, LLC"
export const defaultDescription =
  "Quoin is an AI operating partner for property and asset management firms. We build, deploy, govern, and manage AI agents inside real estate operations."

export const publicRoutes = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/who-we-help", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/approach", priority: 0.8, changeFrequency: "monthly" },
  { path: "/governance", priority: 0.8, changeFrequency: "monthly" },
  { path: "/ai-for-property-management", priority: 0.95, changeFrequency: "monthly" },
  { path: "/ai-for-asset-management", priority: 0.95, changeFrequency: "monthly" },
  { path: "/managed-ai-operations", priority: 0.9, changeFrequency: "monthly" },
  { path: "/ai-readiness-property-management", priority: 0.9, changeFrequency: "monthly" },
  { path: "/ai-governance-property-management", priority: 0.9, changeFrequency: "monthly" },
  { path: "/team", priority: 0.7, changeFrequency: "monthly" },
  { path: "/perspectives", priority: 0.8, changeFrequency: "weekly" },
  { path: "/perspectives/why-ai-pilots-are-failing", priority: 0.85, changeFrequency: "monthly" },
  {
    path: "/perspectives/the-governance-gap-why-property-management-firms-cant-scale-ai",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/perspectives/what-property-management-needs-from-an-ai-partner",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/perspectives/property-management-ai-vs-asset-management-ai",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
  { path: "/responsible-ai", priority: 0.6, changeFrequency: "monthly" },
  { path: "/data-security", priority: 0.6, changeFrequency: "monthly" },
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

export function serviceJsonLd(input: {
  name: string
  description: string
  path: string
  serviceType: string
  audience?: string
}) {
  const serviceId = input.serviceType
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(input.path)}#${serviceId}`,
    name: input.name,
    description: input.description,
    serviceType: input.serviceType,
    url: absoluteUrl(input.path),
    provider: {
      "@id": `${siteUrl}/#organization`,
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    audience: {
      "@type": "BusinessAudience",
      audienceType:
        input.audience ?? "Executives at property management and asset management firms",
    },
  }
}

export function articleJsonLd(input: {
  title: string
  description: string
  path: string
  datePublished: string
  dateModified?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    mainEntityOfPage: absoluteUrl(input.path),
    author: {
      "@type": "Person",
      name: "Kavin Sakthivel",
      jobTitle: "CEO & Chief Engineer",
      worksFor: {
        "@id": `${siteUrl}/#organization`,
      },
    },
    publisher: {
      "@id": `${siteUrl}/#organization`,
    },
  }
}
