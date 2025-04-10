"use client"

import { useEffect, useState } from "react"
import { AnimatedBackground } from "@/components/animated-background"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { BusinessAreas } from "@/components/business-areas"
import { Footer } from "@/components/footer"
import { LanguageToggle } from "@/components/language-toggle"
import { LanguageProvider } from "@/components/language-provider"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <LanguageProvider>
      <main className="relative min-h-screen overflow-hidden bg-[#121212]">
        <AnimatedBackground />
        <div className="relative z-10">
          <LanguageToggle />
          <Hero />
          <About />
          <BusinessAreas />
          <Footer />
        </div>
      </main>
    </LanguageProvider>
  )
}
