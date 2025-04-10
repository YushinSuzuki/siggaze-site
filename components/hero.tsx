"use client"

import { useLanguage } from "./language-provider"
import Image from "next/image"
import { motion } from "framer-motion"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-4 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center text-center z-10"
      >
        <div className="w-[200px] h-[100px] relative mb-8">
          <Image src="/images/logo.png" alt="siggaze" fill style={{ objectFit: "contain" }} priority />
        </div>
        <h1 className="sr-only">siggaze</h1>
        <p className="max-w-md text-xl font-light text-gray-700 mt-4">{t("hero.tagline")}</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 0.5, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent to-gray-400"></div>
        </div>
      </motion.div>
    </section>
  )
}
