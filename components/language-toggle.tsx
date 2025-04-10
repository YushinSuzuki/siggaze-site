"use client"

import { useLanguage } from "./language-provider"
import { Button } from "@/components/ui/button"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="fixed top-4 right-4 z-50">
      <Button
        variant="ghost"
        size="sm"
        className="text-gray-700 hover:text-gray-900 hover:bg-gray-100"
        onClick={() => setLanguage(language === "en" ? "ja" : "en")}
      >
        {language === "en" ? "日本語" : "English"}
      </Button>
    </div>
  )
}
