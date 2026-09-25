"use client"

import Link from "next/link"
import Image from "next/image"
import { Footer } from "@/components/footer"
import { LanguageToggle } from "@/components/language-toggle"
import { LanguageProvider, useLanguage } from "@/components/language-provider"

// 文字列は段落、文字列の配列は箇条書き
export type LegalBlock = string | string[]

export interface LegalSection {
  heading: string
  blocks: LegalBlock[]
}

export interface LegalDocument {
  title: string
  intro?: string
  note?: string
  sections: LegalSection[]
  closing: string[]
}

function LegalBody({ content }: { content: Record<"ja" | "en", LegalDocument> }) {
  const { language } = useLanguage()
  const doc = content[language]

  return (
    <main className="relative min-h-screen bg-white">
      <LanguageToggle />
      <header className="px-4 md:px-8 pt-8 max-w-3xl mx-auto">
        <Link href="/" className="inline-block w-[120px] h-[60px] relative" aria-label="siggaze">
          <Image src="/images/logo.png" alt="siggaze" fill style={{ objectFit: "contain", objectPosition: "left" }} />
        </Link>
      </header>
      <article className="px-4 md:px-8 pt-12 pb-24 max-w-3xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-light text-gray-800 mb-10">{doc.title}</h1>
        {doc.note && <p className="text-sm text-gray-500 mb-8">{doc.note}</p>}
        {doc.intro && <p className="text-gray-600 leading-relaxed mb-12">{doc.intro}</p>}
        {doc.sections.map((section) => (
          <section key={section.heading} className="mb-10">
            <h2 className="text-lg font-normal text-gray-800 mb-4">{section.heading}</h2>
            {section.blocks.map((block, i) =>
              Array.isArray(block) ? (
                <ul key={i} className="list-disc pl-6 mb-4 space-y-1 text-gray-600 leading-relaxed">
                  {block.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p key={i} className="text-gray-600 leading-relaxed mb-4 whitespace-pre-line">
                  {block}
                </p>
              ),
            )}
          </section>
        ))}
        <div className="mt-16 text-sm text-gray-500 space-y-1">
          {doc.closing.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </article>
      <Footer />
    </main>
  )
}

export function LegalPage({ content }: { content: Record<"ja" | "en", LegalDocument> }) {
  return (
    <LanguageProvider>
      <LegalBody content={content} />
    </LanguageProvider>
  )
}
