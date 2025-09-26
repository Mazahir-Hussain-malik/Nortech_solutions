"use client"

import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div   className={`sticky top-0 z-50 shadow-md transition-colors duration-300 ${
        scroll < 100 ? " bg-white text-black " : "bg-amber-600 text-white"
      }`}>
      {/* Top Red Bar */}

      {/* Main Navigation */}
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className=" py-6 max-w-7xl mx-auto"
      >
        <div className="  flex justify-between items-center">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center">
            <img src="/logo.png" className=" w-[70px] " />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden  md:flex items-center space-x-8">
            <motion.a
              whileHover={{ color: "#fde68a" }}
              href="#"
              className=" hover:text-amber-200 font-medium transition-colors"
            >
              Home
            </motion.a>
            <motion.a
              whileHover={{ color: "#fde68a" }}
              href="#"
              className=" hover:text-amber-200 font-medium transition-colors"
            >
              Services
            </motion.a>
            <motion.a
              whileHover={{ color: "#fde68a" }}
              href="#"
              className=" hover:text-amber-200 font-medium transition-colors"
            >
              Team
            </motion.a>
            <motion.a
              whileHover={{ color: "#fde68a" }}
              href="#"
              className=" hover:text-amber-200 font-medium transition-colors"
            >
              Projects
            </motion.a>
            <motion.a
              whileHover={{ color: "#fde68a" }}
              href="#"
              className=" hover:text-amber-200 font-medium transition-colors"
            >
              Blogs
            </motion.a>
            <motion.a
              whileHover={{ color: "#fde68a" }}
              href="#"
              className=" hover:text-amber-200 font-medium transition-colors"
            >
              Contact Us
            </motion.a>
            <motion.a
              whileHover={{ color: "#fde68a" }}
              href="#"
              className=" hover:text-amber-200 font-medium transition-colors"
            >
              Opportunities
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`${ scroll < 100 ? "bg-amber-600 text-white" : " text-amber-700 bg-white "} "bg-white  px-6 py-2 rounded font-medium hover:bg-amber-100 transition-colors"`}
            >
              Login
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-amber-600 border-t border-amber-500"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              <a href="#" className="block text-white hover:text-amber-200 font-medium">
                Home
              </a>
              <a href="#" className="block text-white hover:text-amber-200 font-medium">
                Services
              </a>
              <a href="#" className="block text-white hover:text-amber-200 font-medium">
                Team
              </a>
              <a href="#" className="block text-white hover:text-amber-200 font-medium">
                Projects
              </a>
              <a href="#" className="block text-white hover:text-amber-200 font-medium">
                Blogs
              </a>
              <a href="#" className="block text-white hover:text-amber-200 font-medium">
                Contact Us
              </a>
              <a href="#" className="block text-white hover:text-amber-200 font-medium">
                Opportunities
              </a>
              <button className="bg-white text-amber-700 px-6 py-2 rounded font-medium hover:bg-amber-100 transition-colors">
                Login
              </button>
            </div>
          </motion.div>
        )}
      </motion.nav>
    </div>
  )
}
