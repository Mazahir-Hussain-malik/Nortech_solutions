
import { motion } from "framer-motion"

const cls = {
  container: "bg-[#252628]",
  muted: "text-(--footer-muted)",
  border: "border-(--footer-border)",
}

function SectionTitle({ children }) {
  return <h3 className="font-serif text-2xl md:text-[26px] leading-tight tracking-tight mb-6">{children}</h3>
}

function DashItem({ children, href }) {
  const content = (
    <span className="inline-block transition-colors duration-200 hover:text-amber-600">{children}</span>
  )
  return (
    <li className="relative pl-6 leading-8 before:absolute before:left-0 before:top-1.5 before:text-(--footer-muted) before:content-['—']">
      {href ? <a href={href}>{content}</a> : content}
    </li>
  )
}

function SocialIconBox({ children, href }) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex h-10 w-10 items-center justify-center rounded border ${cls.border} transition-colors duration-200 hover:border-amber-600 hover:bg-amber-600`}
      aria-label="Social link"
    >
      <span className="sr-only">Social</span>
      <div className="text-(--footer-fg)">{children}</div>
    </motion.a>
  )
}

function PopularPostItem(props) {
  const { src, alt, title, date, href } = props
  return (
    <motion.a whileHover={{ x: 3 }} href={href} className="group flex gap-4 rounded-lg">
      <img
        src={src || "/placeholder.svg"}
        alt={alt}
        width={84}
        height={84}
        className="h-20 w-20 rounded-md object-cover"
      />
      <div className="min-w-0">
        <h4 className="font-serif text-lg leading-snug transition-colors group-hover:text-(--brand-red)">{title}</h4>
        <p className={`mt-1 text-sm ${cls.muted}`}>{date}</p>
      </div>
    </motion.a>
  )
}

export default function Footer() {
  return (
    <footer className={` bg-[#252628] text-white  relative`} aria-labelledby="footer-heading">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-12 py-14 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Logo, blurb, socials */}
          <div>
            <div className="flex items-center gap-3">
             
              <div className="leading-none">
                <div className="font-serif text-4xl tracking-wide">NORTECH</div>
                <div className={`text-[10px] tracking-[0.5em] ${cls.muted}`}>TECHNOLOGIES</div>
              </div>
            </div>

            <p className={`mt-6 max-w-md leading-7 ${cls.muted}`}>
              We are the best world Information Technology Company. Providing the highest quality.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <SocialIconBox href="#">
                {/* Facebook */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M15 8h-2c-.6 0-1 .4-1 1v2h3l-.5 3H12v8H9v-8H7v-3h2V9.5C9 7.6 10.6 6 12.5 6H15v2z"
                    fill="currentColor"
                  />
                </svg>
              </SocialIconBox>
              <SocialIconBox href="#">
                {/* Instagram */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" />
                  <circle cx="12" cy="12" r="4" stroke="currentColor" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              </SocialIconBox>
              <SocialIconBox href="#">
                {/* Pinterest */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 3a9 9 0 0 0-3 17l1-3c-.2-.6-.4-1.6-.2-2.3.2-.8 1.1-3.6 1.1-3.6s-.3-.6-.3-1.6c0-1.6 1-2.8 2.2-2.8 1.1 0 1.7.8 1.7 1.8 0 1.1-.7 2.7-1.1 4.1-.3 1.2.6 2.1 1.8 2.1 2.2 0 3.8-2.3 3.8-5.6 0-2.9-2.1-5-5.2-5C9.6 4.8 8 7 8 9.4c0 1 .4 2.1 1 2.7.1.1.1.2.1.4l-.4 1.5c-.1.2-.2.2-.4.1C7.2 13.2 6.6 11.5 6.6 10c0-3.7 2.7-7 7.7-7 4.1 0 7.2 2.9 7.2 6.7 0 4.5-2.4 7.8-6 7.8-1.2 0-2.3-.6-2.7-1.3l-.7 2.6c-.2.9-.9 2.1-1.3 2.8"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </SocialIconBox>
              <SocialIconBox href="#">
                {/* LinkedIn */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" />
                  <rect x="6.5" y="10" width="2.5" height="7.5" fill="currentColor" />
                  <circle cx="7.8" cy="6.8" r="1.2" fill="currentColor" />
                  <path
                    d="M14 10.2c-1.7 0-2.8 1.1-2.8 3v4.2h2.5v-3.7c0-1 .5-1.6 1.4-1.6 1 0 1.6.7 1.6 1.9v3.4h2.5v-3.9c0-2.3-1.3-3.8-3.4-3.8-1 0-1.8.4-2.3 1z"
                    fill="currentColor"
                  />
                </svg>
              </SocialIconBox>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <SectionTitle>Quick Links</SectionTitle>
            <ul className="mt-2">
              <DashItem href="#">Customers Services</DashItem>
              <DashItem href="#">IT Department</DashItem>
              <DashItem href="#">About Our Company</DashItem>
              <DashItem href="#">Business Growth</DashItem>
              <DashItem href="#">Contact Us</DashItem>
            </ul>
          </div>

          {/* Column 3: Contacts */}
          <div>
            <SectionTitle>Contacts</SectionTitle>
            <dl className="space-y-4">
              <div>
                <dt className="font-semibold">Adress:</dt>
                <dd className={cls.muted}>
                  Ahmed Plaza, Main Alamdar
                  <br />
                  Chowk Danyore Gilgit
                </dd>
              </div>
              <div>
                <dt className="font-semibold">Phone:</dt>
                <dd className={cls.muted}>
                  +92 3133898836
                  <br />
                  Fax: +92 3133879645
                </dd>
              </div>
              <div>
                <dt className="font-semibold">Email:</dt>
                <dd className={cls.muted}>
                  info@NORTECH.pk
                  <br />
                  Website: www.NORTECH.pk
                </dd>
              </div>
            </dl>
          </div>

          {/* Column 4: Popular Post */}
          <div>
            <SectionTitle>Popular Post</SectionTitle>
            <div className="mt-2 space-y-6">
              <PopularPostItem
                src="/homepage/add1.jpg"
                alt="Plan your project"
                title="Plan Your Project with Your Software"
                date="January 01, 2024"
                href="#"
              />
              <PopularPostItem
                src="/homepage/add2.jpg"
                alt="Business idea"
                title="You have a Great Business Idea?"
                date="January 01, 2024"
                href="#"
              />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className={`border-t ${cls.border} opacity-60`} />

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
          <p className={`${cls.muted} text-sm`}>© 2025 - NORTECH Technologies Pvt. Ltd.</p>
          <nav className="flex items-center gap-8 text-sm">
            <a href="#" className="transition-colors hover:text-(--brand-red)">
              About Us
            </a>
            <a href="#" className="transition-colors hover:text-(--brand-red)">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-(--brand-red)">
              Services
            </a>
          </nav>
        </div>
      </div>

      {/* Back-to-top button */}
      <motion.a
        href="#top"
        className="fixed bottom-6 right-6 grid h-12 w-12 place-items-center rounded bg-(--brand-red) text-white shadow-lg"
        initial={{ y: 0 }}
        whileHover={{ y: -4 }}
        aria-label="Back to top"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="-translate-y-[1px]">
          <path d="M12 8l6 6M12 8l-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </motion.a>
    </footer>
  )
}
