"use client"

import { motion } from "framer-motion"


const steps = [
  {
    id: 1,
    title: "Choose a Service",
    desc: "Explore our tailored solutions designed to elevate your business and meet your unique needs.",
    image: "/workprocess/1.jpg",
    imageAlt: "Two colleagues reviewing a tablet",
  },
  {
    id: 2,
    title: "Request a Meeting",
    desc: "Let us know your availability to discuss how we can assist you in achieving your goals.",
    image: "/workprocess/2.jpg",
    imageAlt: "Business woman on phone",
  },
  {
    id: 3,
    title: "Receive Custom Plan",
    desc: "Get a personalized strategy tailored to your business needs and objectives.",
    image: "/workprocess/3.jpg",
    imageAlt: "Team collaborating at laptop",
  },
  {
    id: 4,
    title: "Let’s Make it Happen",
    desc: "Together, we can turn your vision into reality and achieve your business goals.",
    image: "/workprocess/4.jpg",
    imageAlt: "Smiling man gives thumbs up",
  },
]

function NumberBadge({ n }) {
  return (
    <motion.div
      variants={{ rest: { y: 0 }, hover: { y: -10 } }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className="pointer-events-none absolute -left-8 top-1/2 -translate-y-1/2"
      aria-hidden
    >
      {/* Three offset layers to match the concentric badge look */}
      <div className="relative text-white">
        {/* outer soft disk */}
        <div className="size-20 rounded-full bg-amber-600/70 opacity-80" />
        {/* mid disk slightly inset */}
        <div className="absolute left-2 top-2 size-16 rounded-full bg-amber-600/90 opacity-70" />
        {/* inner core */}
        <div className="absolute left-4 top-4 size-12 rounded-full bg-amber-600 shadow-[0_4px_14px_rgba(0,0,0,0.12)] flex items-center justify-center text-(--color-primary-foreground) text-sm font-semibold">
          {String(n).padStart(2, "0")}
        </div>
      </div>
    </motion.div>
  )
}

function StepCard({ step }) {
  return (
    <motion.div
      initial="rest"
      animate="rest"
      whileHover="hover"
      className="group relative  flex flex-col items-center text-center"
    >
      <div className="relative group transition-all ease-linear delay-150  ">
        {/* double-ring photo with soft elevation like the design */}
        <div className="relative rounded-full p-2 group-hover:bg-amber-600/40 shadow-[0_18px_40px_rgba(0,0,0,0.10)]">
          <div className=" relative rounded-full overflow-hidden group-hover:ring-4 group-hover:ring-amber-600">
            <img
              src={step.image || "/placeholder.svg?height=240&width=240&query=work%20step"}
              alt={step.imageAlt}
              className="size-full object-cover"
            />
          <div className=" h-[100vh] rounded-full absolute w-full mx-auto  bg-[#FF3C00D9] group-hover:block hidden top-0 left-0 "></div>

          </div>
        </div>

        <NumberBadge n={step.id} />
      </div>

      {/* Headline under image */}
      <h3 className="mt-8 font-serif text-2xl md:text-2xl font-semibold tracking-tight text-foreground">
        {step.title}
      </h3>
      <p className="mt-3 max-w-[20rem] text-muted-foreground leading-relaxed">{step.desc}</p>
    </motion.div>
  )
}

export default function WorkProcess() {
  return (
    <section className="py-20 md:py-24">
      <div className=" max-w-7xl  mx-auto px-8">
        {/* Heading */}
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.25em] text-amber-600">{"// HOW IT WORKS"}</p>

          <h2 className="mt-3 font-serif text-5xl md:text-6xl font-semibold text-pretty">
            Check Out Our <span className="text-amber-600">Work Process</span>
          </h2>

          {/* small centered underline */}
          <div className="mt-4 h-[3px] w-16 rounded-full bg-amber-600 mx-auto" />
        </div>

        {/* Steps */}
        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <StepCard key={s.id} step={s} />
          ))}
        </div>
      </div>
    </section>
  )
}
