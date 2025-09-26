
import { useState } from "react"
import { motion } from "framer-motion"



const cards = [
  {
    id: 1,
    title: "AGGB Web Portal",
    description: "Manage pay slips, funds & master data efficiently",
    src: "/courses/1.jpg",
    alt: "People working in a modern office",
  },
  {
    id: 2,
    title: "Analytics Suite",
    description: "Visualize KPIs and automate insights",
    src: "/courses/2.jpg",
    alt: "Team collaborating around computers",
  },
  {
    id: 3,
    title: "Onboarding Flow",
    description: "Streamlined steps with SSO",
    src: "/courses/3.jpg",
    alt: "Team presenting in an office",
  },
  {
    id: 4,
    title: "Server Console",
    description: "Realtime monitoring and alerts",
    src: "/courses/4.webp",
    alt: "Engineer near server rack",
  },
  {
    id: 5,
    title: "Security Dashboard",
    description: "Threat detection and response",
    src: "/courses/1.jpg",
    alt: "Cybersecurity interface on screen",
  },
   {
    id: 6,
    title: "Security Dashboard",
    description: "Threat detection and response",
    src: "/courses/1.jpg",
    alt: "Cybersecurity interface on screen",
  },
]

export default function ProjectCards() {
  const [active, setActive] = useState(0)

  return (
    <section aria-label="Project gallery" className="relative">
      <div className=" px-6">
        {/* Card row */}
        <div className="flex items-stretch gap-8 md:gap-10 lg:gap-12 overflow-x-auto pb-6 pt-4">
          {cards.map((card, idx) => (
            <motion.article
              key={card.id}
              className="group relative hover:opacity-50 h-[520px] w-[280px] md:w-[320px] lg:w-[340px] shrink-0 rounded-sm overflow-hidden bg-muted"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              onMouseEnter={() => setActive(idx)}
              onFocus={() => setActive(idx)}
              tabIndex={0}
            >
              <motion.img
                src={card.src}
                alt={card.alt}
                className="h-full w-full object-cover"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              />
              {/* Bottom hover overlay */}
              <motion.div
                className="absolute inset-x-0 bottom-0"
                initial={false}
                animate={active === idx ? { y: 0 } : { y: "100%" }}
                transition={{ type: "tween", duration: 0.25, ease: [0.2, 0, 0.2, 1] }}
              >
                <div className="bg-amber-600 text-white  px-6 py-6">
                  <h3 className="text-xl font-extrabold tracking-tight">{card.title}</h3>
                  <p className="mt-2 text-sm/relaxed opacity-95">{card.description}</p>
                </div>
              </motion.div>
            </motion.article>
          ))}
        </div>

        {/* Pagination dots (reflect hoveamber/active card) */}
        <div className="mt-2 mb-14 flex w-full items-center justify-center gap-4">
          {cards.map((_, idx) => (
            <motion.span
              key={idx}
              aria-label={`Slide ${idx + 1}`}
              className="h-1.5 rounded-full"
              initial={false}
              animate={{
                width: active === idx ? 28 : 20,
                backgroundColor: active === idx ? "#FFBF00" : "oklch(0.8 0 0)",
                opacity: active === idx ? 1 : 0.8,
              }}
              transition={{ duration: 0.2 }}
            />
          ))}
        </div>
      </div>

      {/* Back to top button (bottom-right) */}
      <a
        href="#top"
        className="fixed bottom-6 right-6 grid h-10 w-10 place-items-center rounded-sm bg-brand-amber text-brand-amber-foreground shadow-sm"
        aria-label="Back to top"
      >
        {"▲"}
        <span className="sr-only">Back to top</span>
      </a>
    </section>
  )
}
