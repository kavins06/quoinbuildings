import type { Metadata } from "next"
import { TermsContent } from "./content"

export const metadata: Metadata = {
  title: "Terms of Service | Quoin",
  description: "Terms governing use of the Quoin Buildings website.",
}

export default function TermsPage() {
  return <TermsContent />
}
