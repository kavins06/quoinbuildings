import type { Metadata } from "next"
import { GovernanceContent } from "./content"

export const metadata: Metadata = {
  title: "Governance — Quoin",
  description: "Our AI governance framework for property management: fair housing, data privacy, audit trails, bias monitoring, and access control.",
}

export default function GovernancePage() {
  return <GovernanceContent />
}
