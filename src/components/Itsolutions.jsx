
import { motion } from "framer-motion"


export default function Itsolution() {
  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <div className=" itsolutions relative min-h-screen overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
          <div className="absolute bottom-32 left-32 w-16 h-16 border border-white/20 rounded-full"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left side - Image with Experience Badge */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="relative rounded-lg overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/homepage/ch1.png"
                  alt="Professional business meeting"
                  className="w-full object-cover"
                />

              
              </motion.div>
            </motion.div>

            {/* Right side - Content */}
            <motion.div
              className="text-white space-y-8"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <p className="text-amber-300 font-semibold text-sm tracking-wider uppercase mb-4">WHY CHOOSE US</p>
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                  Some Of Reason For Choose Our <span className="text-amber-600">IT Solutions</span>
                </h1>
                <motion.div
                  className="w-16 h-1 bg-amber-400"
                  initial={{ width: 0 }}
                  animate={{ width: 64 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                />
              </motion.div>

              {/* Description */}
              <motion.p
                className="text-gray-200 text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                We provide immigration service in all over country and universities. orem semper sede tellus in
                ultrices. Nam hendrerit elit vel urna.
              </motion.p>

              {/* Features */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                {/* Product Designs */}
                <motion.div className="flex items-start gap-4" whileHover={{ x: 10 }} transition={{ duration: 0.3 }}>
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Product Designs</h3>
                    <p className="text-gray-200">
                      Skilled professionals are always ready to provide reliable services to our clients!
                    </p>
                  </div>
                </motion.div>

                {/* 24/7 Support */}
                <motion.div className="flex items-start gap-4" whileHover={{ x: 10 }} transition={{ duration: 0.3 }}>
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">24/7 Support at Your Service</h3>
                    <p className="text-gray-200">
                      Available for you around the clock, ensuring you receive timely support and expert assistance
                      whenever you need it!
                    </p>
                  </div>
                </motion.div>

                {/* Maintain App Data */}
                <motion.div className="flex items-start gap-4" whileHover={{ x: 10 }} transition={{ duration: 0.3 }}>
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,3C7.58,3 4,4.79 4,7C4,9.21 7.58,11 12,11C16.42,11 20,9.21 20,7C20,4.79 16.42,3 12,3M4,9V12C4,14.21 7.58,16 12,16C16.42,16 20,14.21 20,12V9C20,11.21 16.42,13 12,13C7.58,13 4,11.21 4,9M4,14V17C4,19.21 7.58,21 12,21C16.42,21 20,19.21 20,17V14C20,16.21 16.42,18 12,18C7.58,18 4,16.21 4,14Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Maintain App Data</h3>
                    <p className="text-gray-200">
                      Skilled professionals are always ready to provide reliable services to our clients!
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

    </div>
  )
}
