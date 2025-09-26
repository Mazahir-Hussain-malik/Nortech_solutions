"use client"

import { motion } from "framer-motion"

export default function Proffesional() {
  return (
    <div className="min-h-screen  py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Left side - Images */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
           
          

            {/* Bottom image - Presentation */}
            <motion.div className="col-span-2" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
              <img
                src="/homepage/ab1.jpg"
                alt="Business presentation"
                className="w-full  object-cover rounded-lg "
              />
            </motion.div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <p className="text-amber-600 font-semibold text-sm tracking-wider uppercase mb-4">// ABOUT COMPANY</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                We Deal With The Aspects Of Professional <span className="text-amber-600">IT Services</span>
              </h2>
              <motion.div
                className="w-16 h-1 bg-amber-600 mt-4"
                initial={{ width: 0 }}
                animate={{ width: 64 }}
                transition={{ duration: 0.8, delay: 1 }}
              />
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-gray-600 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              NORTECH Technologies Private limited is a full-service solution provider. Our head office is located in
              Gilgit and strive to deliver more efficient, effective and relevant quality services and solutions
              tailored to the increasingly complex demands of organisations, in order to boost productivity of
              operations and to maximise value for our customers.
            </motion.p>

            {/* Features */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              {/* User Experience */}
              <motion.div className="flex items-start gap-4" whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">User Experience</h3>
                  <p className="text-gray-600">
                    Skilled professionals are always ready to provide reliable services to our clients!
                  </p>
                </div>
              </motion.div>

              {/* Quick Support */}
              <motion.div className="flex items-start gap-4" whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
                <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Quick Support</h3>
                  <p className="text-gray-600">
                    We are just a call away to provide expert solutions for your IT challenges!
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
