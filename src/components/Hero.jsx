import {motion} from "framer-motion";
const Hero = () => {
  return (
      <section className="glass-wrapper glass min-h-screen relative">
        <div className="  relative px-4 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              {/* Admissions Badge */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="inline-block"
              >
                <span className=" border border-amber-400 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
                  Admissions Now Open
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
              >
                Become a Part of the Leading <span className=" text-amber-500"> IT Education </span> Hub in Gilgit-Baltistan
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-gray-600 text-lg leading-relaxed"
              >
                We offer specialized courses designed to equip you with the skills and knowledge needed to excel in the
                rapidly evolving IT industry. Whether you're looking to enhance your career in software development,
                cybersecurity, infrastructure, or other tech domains, our programs provide hands-on learning and
                industry-relevant experience. Apply now to start your journey with us!
              </motion.p>

            
            </div>

            {/* Right Image */}
            <div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className=" w-full h-full "
            >
              <div className=" w-full h-full ">
                <img
                  src="/proffesional.png"
                  alt="Professional IT student"
                  className=" md:block hidden  w-[500px] h-[800px]  "
                />
             

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1.5 }}
                  className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-xl">GB</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Hero