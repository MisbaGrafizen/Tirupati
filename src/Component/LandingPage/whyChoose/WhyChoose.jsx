import React from 'react'

import { motion } from 'framer-motion'
import { ArrowUpRight, ChevronRight } from 'lucide-react'
import service11 from '../../../../Public/why/why1.webp'
import service22 from '../../../../Public/why/why2.webp'
import service33 from '../../../../Public/why/why3.webp'


const caseStudies = [
  {
    title: "Resolving Higher Watt Losses in Pump OEM's ",
    description: "This case study highlights the successful collaboration between a Pump OEM (Original Equipment Manufacturer) and TirupatiEngineering to optimize component performance.",
    image: service11 ,
    category: "Pump Solutions"
  },
  {
    title: "Reviving a Traction Motor Assembly Line",
    description: "This case study highlights how TirupatiEngineering Company successfully resolved a significant challenge faced by a locomotive manufacturer through innovative solutions.",
    image: service22,
    category: "Motor Assembly"
  },
  {
    title: "Solving Rust and Packaging Challenges",
    description: "TirupatiEngineering Company effectively addressed rust and packaging issues for an induction motor manufacturer. Through rust prevention techniques and packaging innovations.",
    image: service33,
    category: "Quality Control"
  }
]

export default function WhyChoose() {
  return (
    <section className="pt-[20px] pb-[20px] px-4 ">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* <h2 className="text-[#22BCAC] font-medium mb-4   ">Why Us?</h2> */}
            <h2 className="text-[#22BCAC] font-semibold text-lg mb-2 uppercase tracking-wider font-Roboto">Why Us?</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 font-Roboto leading-tight">
              Experience the Power of Our Expertise
            </h3>
            <p className="text-gray-600 font-Montserrat text-lg leading-relaxed">
              TirupatiGroup delivers exceptional solutions for the electrical motors, alternators, 
              ceiling fans, and pumps industries, with global experience and proven results. 
              See our case studies and customer success stories to witness our expertise in action.
            </p>
          </motion.div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 z-10" />
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full font-Montserrat h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium  font-Roboto text-gray-800">
                      {study.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-3  font-Roboto group-hover:text-[#22BCAC] transition-colors duration-300">
                    {study.title}
                  </h4>
                  <p className="text-gray-600  font-Montserrat mb-4 line-clamp-2">
                    {study.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <motion.a
                      href="#"
                      className="inline-flex items-center text-[#22BCAC] font-Montserrat font-medium hover:text-[#1a8d82] transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      Learn More <ChevronRight className="ml-1 w-4 h-4" />
                    </motion.a>
                    <motion.div
                      className="w-8 h-8 rounded-full bg-[#22BCAC]/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ rotate: 45 }}
                    >
                      <ArrowUpRight className="w-4 h-4 text-[#22BCAC]" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

