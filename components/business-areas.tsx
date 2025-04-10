"use client"

import { useLanguage } from "./language-provider"
import { motion } from "framer-motion"
import { Code, Palette, Film, Brain } from "lucide-react"

const businessAreas = [
  {
    id: "it",
    icon: Code,
    color: "#555555",
  },
  {
    id: "design",
    icon: Palette,
    color: "#777777",
  },
  {
    id: "content",
    icon: Film,
    color: "#666666",
  },
  {
    id: "ai",
    icon: Brain,
    color: "#888888",
  },
]

export function BusinessAreas() {
  const { t } = useLanguage()

  return (
    <section className="relative py-24 px-4 md:px-8 max-w-5xl mx-auto">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-16"
      >
        <h2 className="text-2xl md:text-3xl font-light text-gray-800 mb-8 inline-block">
          <span className="relative">
            {t("business.title")}
            <span className="absolute -bottom-1 left-0 w-full h-px bg-gray-400"></span>
          </span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {businessAreas.map((area, index) => (
          <motion.div
            key={area.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative bg-gray-50 backdrop-blur-sm rounded-lg p-6 border border-gray-200 overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: area.color }}></div>
            <div className="flex items-start">
              <div className="p-3 rounded-md mr-4" style={{ backgroundColor: `${area.color}20` }}>
                <area.icon className="w-6 h-6" style={{ color: area.color }} />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">{t(`business.${area.id}.title`)}</h3>
                <p className="text-gray-600 text-sm">{t(`business.${area.id}.description`)}</p>
              </div>
            </div>
            <div
              className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-700"
              style={{ backgroundColor: area.color }}
            ></div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
