"use client"

import { useLanguage } from "./language-provider"
import { motion } from "framer-motion"
import Link from "next/link"

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
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
          <Link href="/privacy" className="text-gray-500 hover:text-gray-900 transition-colors duration-300">
            {t("footer.privacy")}
          </Link>
          <Link href="/terms" className="text-gray-500 hover:text-gray-900 transition-colors duration-300">
            {t("footer.terms")}
          </Link>
          <a
            href="mailto:yushin.suzuki@siggaze.com"
            className="text-gray-700 hover:text-gray-900 transition-colors duration-300"
          >
            {t("footer.contact")}
          </a>
        </div>
      </motion.div>
    </footer>
  )
}
