import type { Metadata } from "next"
import { LegalPage } from "@/components/legal-page"
import { privacyContent } from "./content"

export const metadata: Metadata = {
  title: "プライバシーポリシー | siggaze",
  description: "株式会社siggazeのプライバシーポリシーです。",
}

export default function PrivacyPage() {
  return <LegalPage content={privacyContent} />
}
