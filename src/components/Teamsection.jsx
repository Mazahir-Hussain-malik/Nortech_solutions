"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const teamMembers = [
  {
    id: 1,
    name: "Salar Hussain",
    role: "FOUNDER AND TEAM LEAD",
    image: "/homepage/salar.jpg",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    id: 2,
    name: "Afaq Ali",
    role: "CO FOUNDER AND CEO",
    image: "/homepage/afaq.jpg",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    id: 3,
    name: "Ikhlas Hussain",
    role: "WEB DEVELOPER",
    image: "/homepage/ikhlaq.jpg",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
]

export default function TeamSection() {
  const [hoveredMember, setHoveredMember] = useState(null)

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-amber-600 font-semibold text-sm tracking-wider uppercase mb-4">// PROFESSIONAL TEAM</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">Our Dedicated Team</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-600 text-lg leading-relaxed">
              Our dedicated team is committed to delivering exceptional service and solutions tailored to your needs. We
              bring together expertise and innovation to ensure that your projects are executed with precision and care.
              With a focus on collaboration and customer satisfaction, we strive to exceed your expectations and help
              you achieve your goals.
            </p>
          </motion.div>
        </div>

        {/* Team Members */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className="group relative bg-white rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
              whileHover={{ y: -10 }}
            >
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Hover Overlay with Social Icons */}
                <motion.div
                  className="absolute inset-0 bg-amber-600/40 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredMember === member.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex flex-col gap-4">
                    {/* Facebook */}
                    <motion.a
                      href={member.social.facebook}
                      className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-amber-600 hover:bg-red-100 transition-colors"
                      initial={{ x: -50, opacity: 0 }}
                      animate={{
                        x: hoveredMember === member.id ? 0 : -50,
                        opacity: hoveredMember === member.id ? 1 : 0,
                      }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <span className="text-xl font-bold">f</span>
                    </motion.a>

                    {/* Twitter */}
                    <motion.a
                      href={member.social.twitter}
                      className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-amber-600 hover:bg-red-100 transition-colors"
                      initial={{ x: -50, opacity: 0 }}
                      animate={{
                        x: hoveredMember === member.id ? 0 : -50,
                        opacity: hoveredMember === member.id ? 1 : 0,
                      }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </motion.a>

                    {/* LinkedIn */}
                    <motion.a
                      href={member.social.linkedin}
                      className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-amber-600 hover:bg-red-100 transition-colors"
                      initial={{ x: -50, opacity: 0 }}
                      animate={{
                        x: hoveredMember === member.id ? 0 : -50,
                        opacity: hoveredMember === member.id ? 1 : 0,
                      }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <span className="text-xl font-bold">in</span>
                    </motion.a>
                  </div>
                </motion.div>
              </div>

              {/* Member Info */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-gray-500 text-sm font-medium tracking-wider uppercase">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
