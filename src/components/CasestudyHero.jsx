"use client"

import { motion } from "framer-motion"

const container = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

export function CaseStudyHero() {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={container}
      className="w-full bg-amber-600 text-white text-brand-red-foreground border-b border-brand-red-foreground"
      aria-labelledby="case-study-title"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-4">
            <motion.p
              variants={container}
              className="text-sm font-semibold tracking-wider uppercase/relaxed text-brand-red-foreground/80"
            >
              {"// OUR CASE STUDY"}
            </motion.p>
            <motion.h1
              id="case-study-title"
              variants={container}
              className="text-pretty text-4xl font-bold leading-tight md:text-5xl"
            >
              {"Introduce Our Projects"}
            </motion.h1>
          </div>

          <motion.p variants={container} className="text-lg leading-7 lg:leading-8 text-brand-red-foreground/95">
            {
              "Software development outsourcing serves as a valuable tool to achieve your business goals. However, meaningful results can only be attained through strong cooperation and trust between the client and our team. Here are some of our most successful projects and products."
            }
          </motion.p>
        </div>
      </div>
    </motion.section>
  )
}

export default CaseStudyHero ;
