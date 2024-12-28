import React from 'react'
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import aboutimg from '../../../../Public/aboutUs/about.jpg'

export default function AboutUs() {
  return (
  <>
  <div className="  text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
        {/* Left Column - Content */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          // animate={{ opacity: 1, x: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className=""
        >
          <div className="space-y-6">
            <h1 className="text-5xl text-black font-Roboto font-bold">
              About <span className="text-[#22BCAC] font-Roboto">Us</span>
            </h1>
            <p className="text-[#484646] text-[15px] font-Montserrat leading-[24px]">
              We specialize in stators and rotors for rotating machines. Our Process Automation
              & SAP enabled ERP ensures Operational Excellence. With our Customer Care Framework,
              we ensure On-Time Delivery.
            </p>
          </div>

          {/* History Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group  p-[20px] rounded-[10px] border-[#22BCAC]  mt-[20px] bg-white bg-opacity- border-[1px] border-[#] hover:bg-teal-400 hover:bg-opacity-10 transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-[20px] text-black font-Montserrat font-semibold">Our History</h2>
              <ArrowRight className="w-5 h-5 text-[#22BCAC] transform group-hover:translate-x-1 transition-transform" />
            </div>
            <p className="text-[#908c8c] text-[13px] font-Montserrat">
              For four decades, we've been at the forefront of motor core manufacturing,
              constantly innovating and improving our processes to deliver the highest quality products.
            </p>
          </motion.div>

          {/* Mission Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            // animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="group  p-[20px] rounded-[10px] mt-[13px] border-[#22BCAC]  bg-white bg-opacity- border-[1px] border-[#] hover:bg-teal-400 hover:bg-opacity-10 transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-[20px] text-black  font-Montserrat font-semibold">Our Mission</h2>
              <ArrowRight className="w-5 h-5 text-[#22BCAC] transform group-hover:translate-x-1 transition-transform" />
            </div>
            <p className="text-[#908c8c] text-[13px] font-Montserrat">
              To provide unparalleled precision and reliability in motor core manufacturing,
              driving the efficiency and performance of rotating machines across industries.
            </p>
          </motion.div>

          {/* View More Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            // animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex justify-start mt-8"
          >
            <button 
              className="group relative inline-flex items-center justify-start overflow-hidden rounded-[10px] bg-teal-400 px-8 py-3 font-bold text-white transition-all duration-300 ease-out hover:bg-white"
            >
              <span className="absolute inset-0 flex h-full w-full justify-center items-center bg-teal-600 text-white duration-300 -translate-x-full group-hover:translate-x-0 ease">
                <ArrowRight className="h-6 w-6" />
              </span>
              <span className="absolute font-Roboto flex h-full w-full left-0 justify-center text-[17px] items-center text-white transition-all duration-300 transform group-hover:translate-x-full ease">View More</span>
              <span className="relative invisible">View More</span>
            </button>
          </motion.div>
        </motion.div>
       

        {/* Right Column - Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          // animate={{ opacity: 1, scale: 1 }}

          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative lg:sticky lg:top-16"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#22BCAC] to-teal-600 opacity-20 rounded-[10px] blur-3xl" />
          <div className="relative aspect-square rounded-3xl overflow-hidden">
            <img
              src={aboutimg}
              alt="Manufacturing Facility"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </div>
  </>
  )
}
