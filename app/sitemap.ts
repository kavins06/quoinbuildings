import type { MetadataRoute } from "next"
import { absoluteUrl, publicRoutes } from "@/lib/seo"

const lastModified = new Date("2026-05-04")

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
