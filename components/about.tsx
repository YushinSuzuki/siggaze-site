"use client"

import { useLanguage } from "./language-provider"
import { motion } from "framer-motion"

export function About() {
  const { t } = useLanguage()

  return (
    <section className="relative py-24 px-4 md:px-8 max-w-5xl mx-auto">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10"
      >
        <h2 className="text-2xl md:text-3xl font-light text-gray-800 mb-8 inline-block">
          <span className="relative">
            {t("about.title")}
            <span className="absolute -bottom-1 left-0 w-full h-px bg-gray-400"></span>
          </span>
        </h2>
        <p className="text-gray-600 max-w-3xl leading-relaxed">{t("about.description")}</p>
      </motion.div>
      <div className="absolute -bottom-12 right-0 w-64 h-64 bg-gray-100 rounded-full blur-3xl"></div>
    </section>
  )
}
