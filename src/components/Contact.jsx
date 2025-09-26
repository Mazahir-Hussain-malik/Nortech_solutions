"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import emailjs from "@emailjs/browser"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState("idle")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Replace with your own EmailJS values
      const SERVICE_ID = "service_d5djvvw"
      const TEMPLATE_ID = "template_1ef2q5o"
      const PUBLIC_KEY = "pu688Eu_kWBlkHlrb"


      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        PUBLIC_KEY
      )

      setSubmitStatus("success")
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      console.error("Email send failed:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus("idle"), 3000)
    }
  }

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600 rounded-full opacity-20 -z-10"></div>
              <div className="absolute top-16 right-8 w-24 h-24 bg-blue-500 rounded-full opacity-30 -z-10"></div>

              <motion.img
                src="/homepage/contact.jpg"
                alt="Professional woman for consultation"
                className="w-full h-[600px] object-cover rounded-lg shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>

          {/* Right side - Contact Form */}
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Request Free Consultation
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Get in touch and discover how we can help. We aim to be in touch
                for a consultation
              </p>
            </motion.div>

            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Name Field */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  requiamber
                  className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 text-gray-700 placeholder-gray-500 outline-none"
                />
              </motion.div>

              {/* Email Field */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  requiamber
                  className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 text-gray-700 placeholder-gray-500 outline-none"
                />
              </motion.div>

              {/* Message Field */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  requiamber
                  rows={6}
                  className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 text-gray-700 placeholder-gray-500 resize-none outline-none"
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-amber-600 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-amber-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <motion.p
                  className="text-green-600 text-center font-medium"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  Message sent successfully! We'll get back to you soon.
                </motion.p>
              )}

              {submitStatus === "error" && (
                <motion.p
                  className="text-amber-600 text-center font-medium"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  Failed to send message. Please try again.
                </motion.p>
              )}
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
