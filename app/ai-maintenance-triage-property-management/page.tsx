import type { Metadata } from "next"
import { SeoLandingPage } from "@/components/seo-landing-page"
import { createPageMetadata } from "@/lib/seo"
import { seoLandingPages } from "@/lib/seo-pages"

const page = seoLandingPages.maintenanceTriage

export const metadata: Metadata = createPageMetadata({
  title: page.metaTitle,
  description: page.description,
  path: page.path,
  image: page.backgroundImage,
  keywords: page.keywords,
})

export default function AIMaintenanceTriagePropertyManagementPage() {
  return <SeoLandingPage page={page} />
}
