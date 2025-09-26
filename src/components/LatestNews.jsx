
import { motion } from "framer-motion"



const cards = [
  {
    image: "/homepage/hac.png",
    badges: [{ label: "DATA LEAK" }, { label: "TECHNOLOGY" }],
    metaDate: "July 07, 2023",
    title: "redReddit Faces Threat of Data Leak as Hackers Demand Ransom and API Pressure",
    excerpt: "In a concerning development, Reddit, the popular online community platform, is...",
    href: "#",
  },
  {
    image: "/homepage/gpt.png",
    badges: [{ label: "AI" }],
    metaDate: "Jun 28, 2023",
    title: "Canada to Investigate OpenAI’s ChatGPT App for Privacy Concerns",
    excerpt: "The Canadian government's probe into OpenAI's ChatGPT app is a sign that...",
    href: "#",
  },
  {
    image: "/homepage/google.png",
    badges: [{ label: "DEVELOPMENT" }],
    metaDate: "May 06, 2023",
    title: "Microsoft’s Aggressive Push for Edge is Making Windows Worse",
    excerpt: "Microsoft’s Edge browser is undoubtedly a good browser, and Microsoft has invested a...",
    href: "#",
    showBottomBar: true,
  },
]

function Badges({ list }) {
  return (
    <div className="absolute left-6 top-6 flex items-center gap-2">
      {list.map((b, i) => (
        <motion.span
          key={i}
          whileHover={{ y: -2 }}
          className="px-3 py-1 rounded-md bg-amber-600 text-white text-primary-foreground text-[12px] font-semibold tracking-wide"
        >
          {b.label}
        </motion.span>
      ))}
    </div>
  )
}

function NewsCard({ c }) {
  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.003 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className="overflow-hidden rounded-xl border border-border bg-card shadow-news"
    >
      <div className="relative">
        <img
          src={c.image || "/placeholder.svg?height=230&width=400&query=article image"}
          alt={c.title}
          width={1200}
          height={720}
          className="h-[230px] w-full object-cover"
          priority
        />
        <Badges list={c.badges} />
        {c.showBottomBar ? (
          <div
            className="absolute bottom-0 left-0 h-[6px] w-full"
            style={{ background: "#FFBF00" }}
            aria-hidden
          />
        ) : null}
      </div>

      <div className="px-6 pt-5 pb-6">
        <p className="text-sm mb-3">
          <a href="#" className="font-semibold text-blue-400 hover:underline">
            Nortech
          </a>
          <span className="text-muted-foreground">
            {" - "}
            {c.metaDate}
          </span>
        </p>

        <h3 className="font-serif text-[18px] font-bold leading-[1.2] text-foreground  hover:text-amber-600 cursor-pointer mb-3">{c.title}</h3>

        <p className="text-base leading-relaxed text-muted-foreground mb-5">{c.excerpt}</p>

        <a
          href={c.href}
          className="inline-flex text-amber-600 items-center gap-1 text-[14px]   hover:opacity-90"
        >
          Read More <span aria-hidden>›</span>
        </a>
      </div>
    </motion.article>
  )
}

export default function LatestNews() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <header className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground text-balance">
            {"Resources & Latest "}
            <span className="text-amber-600 font-bold">News</span>
          </h2>
          <div className=" bg-amber-600 w-[50px] mx-auto h-[3px] mt-[1rem]" aria-hidden />
        </header>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, idx) => (
            <NewsCard key={idx} c={card} />
          ))}
        </div>
      </div>
    </section>
  )
}
