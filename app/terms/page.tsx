import type { Metadata } from "next"
import { LegalPage } from "@/components/legal-page"
import { termsContent } from "./content"

export const metadata: Metadata = {
  title: "利用規約 | siggaze",
  description: "株式会社siggazeのウェブサイト利用規約です。",
}

export default function TermsPage() {
  return <LegalPage content={termsContent} />
}
