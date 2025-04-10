"use client"

import { useLanguage } from "./language-provider"
import { motion } from "framer-motion"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="relative py-12 px-4 md:px-8 max-w-5xl mx-auto">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row justify-between items-center"
      >
        <div className="mb-4 md:mb-0">
          <p className="text-gray-500 text-sm">{t("footer.copyright")}</p>
        </div>
        <div>
          <a
            href="mailto:contact@siggaze.com"
            className="text-gray-700 hover:text-gray-900 transition-colors duration-300"
          >
            {t("footer.contact")}
          </a>
        </div>
      </motion.div>
    </footer>
  )
}
