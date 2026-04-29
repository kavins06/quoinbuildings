import { JsonLd } from "@/components/json-ld"
import { breadcrumbJsonLd } from "@/lib/seo"

export function PageStructuredData({ name, path }: { name: string; path: string }) {
  return (
    <JsonLd
      data={breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name, path },
      ])}
    />
  )
}
