"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "ja"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  "hero.tagline.en": "Bridging signals and perspectives in the digital realm",
  "hero.tagline.ja": "デジタル領域における信号と視点の架け橋",

  "about.title.en": "About Us",
  "about.title.ja": "会社概要",
  "about.description.en":
    'siggaze is a creative-tech design firm based in Tokyo, established in 2024. Our name combines "signal" and "gaze", reflecting our mission to observe, interpret, and transform digital signals into meaningful experiences.',
  "about.description.ja":
    "siggaze（サイゲイズ）は2024年に設立された東京を拠点とするクリエイティブテックデザイン会社です。社名は「signal（信号）」と「gaze（視線）」を組み合わせたもので、デジタル信号を観察、解釈し、意味のある体験に変換するという私たちのミッションを反映しています。",

  "business.title.en": "Business Areas",
  "business.title.ja": "事業領域",

  "business.it.title.en": "IT Solutions",
  "business.it.title.ja": "ITソリューション",
  "business.it.description.en":
    "Custom software development, system integration, and cloud solutions tailored to your business needs.",
  "business.it.description.ja":
    "ビジネスニーズに合わせたカスタムソフトウェア開発、システム統合、クラウドソリューションを提供します。",

  "business.design.title.en": "Creative Design",
  "business.design.title.ja": "クリエイティブデザイン",
  "business.design.description.en":
    "UI/UX design, branding, and visual identity creation that resonates with your audience.",
  "business.design.description.ja":
    "ユーザーに響くUI/UXデザイン、ブランディング、ビジュアルアイデンティティの制作を行います。",

  "business.content.title.en": "Digital Content",
  "business.content.title.ja": "デジタルコンテンツ",
  "business.content.description.en":
    "Immersive digital experiences, interactive installations, and multimedia content production.",
  "business.content.description.ja":
    "没入型デジタル体験、インタラクティブなインスタレーション、マルチメディアコンテンツの制作を行います。",

  "business.ai.title.en": "AI Integration",
  "business.ai.title.ja": "AI統合",
  "business.ai.description.en":
    "Leveraging artificial intelligence to enhance products, services, and user experiences.",
  "business.ai.description.ja": "製品、サービス、ユーザー体験を向上させるための人工知能の活用を行います。",

  "footer.contact.en": "Contact",
  "footer.contact.ja": "お問い合わせ",
  "footer.copyright.en": "© 2024 siggaze. All rights reserved.",
  "footer.copyright.ja": "© 2024 siggaze. All rights reserved.",
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("ja")

  const t = (key: string) => {
    return translations[`${key}.${language}`] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
