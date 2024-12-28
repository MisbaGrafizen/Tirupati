import React from 'react'
import { ArrowRight, PenToolIcon, Cog, Zap, Thermometer } from 'lucide-react'
import image11 from '../../../../Public/service/image1.webp'
import image22 from '../../../../Public/service/image2.webp'
import image33 from '../../../../Public/service/image3.webp'
import image44 from '../../../../Public/service/image1.webp'
import { motion } from 'framer-motion'

const services = [
  {
    title: "In House Tool Development",
    description: "Custom tooling solutions engineered for precision and efficiency",
    icon: PenToolIcon,
    image: image11,
  },
  {
    title: "Rotor Diecasting",
    description: "High-precision metal casting with advanced technology",
    icon: Cog,
    image: image22
  },
  {
    title: "Welding",
    description: "Expert welding services with superior quality control",
    icon: Zap,
    image: image33
  },
  {
    title: "Annealing",
    description: "Thermal treatment processes for enhanced material properties",
    icon: Thermometer,
    image: image44
  }
]

export default function ServiceSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#22BCAC]/10 to-white">
      <div className="max-w-[1150px] mx-auto">
        <div className="mb-[30px]">
          <h2 className="text-[#22BCAC] font-semibold text-lg mb-2 uppercase tracking-wider font-Roboto">Services</h2>
          <h3 className="text-4xl md:text-5xl font-Roboto font-bold mb-[15px] text-gray-800">
            Our Comprehensive <span className="text-[#22BCAC] font-Roboto">Services</span>
          </h3>
          <p className="max-w-3xl text-gray-600  font-Montserrat leading-[20px] text-lg">
            Explore our array of specialized services that cater to every facet of precision engineering, 
            from cutting-edge design and manufacturing to meticulous quality assurance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform transition-transform duration-300 group-hover:translate-y-0 translate-y-4">
                <div className="flex items-center mb-3">
                  <div className="bg-[#22BCAC] p-2 rounded-full mr-3">
                    <service.icon className="text-white w-6 h-6" />
                  </div>
                  <h4 className="text-2xl font-bold text-white font-Montserrat">{service.title}</h4>
                </div>
                <p className="text-white/80 mb-4 opacity-0 group-hover:opacity-100 font-Montserrat font-[500] transition-opacity duration-300">{service.description}</p>
                <a href="#" className="inline-flex text-[13px] font-[600] items-center text-[#22BCAC] font-Montserrat bg-white px-[10px] py-[5px] rounded-full hover:bg-[#22BCAC] hover:text-white transition-colors duration-300">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="text-center">
          <a 
            href="#" 
            className="inline-block bg-[#22BCAC] text-white font-semibold py-3 px-8 rounded-full hover:bg-[#1a8d82] transition-colors duration-300 shadow-lg hover:shadow-xl text-lg"
          >
            View All Services
          </a>
        </div> */}
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center mt-12"
          >
            <button className="group relative inline-flex items-center justify-start overflow-hidden  border-[1.5px] border-[#22BCAC] rounded-[10px]  bg-[#22BCAC] px-8 py-3 font-bold text-white transition-all duration-300 ease-out hover:bg-white hover:text-[#22BCAC]">
              <span className="absolute inset-0 flex h-full w-full justify-center items-center bg-white text-[#22BCAC] duration-300 -translate-x-full group-hover:translate-x-0 ease">
                <span className="mr-2 font-Roboto">Explore More</span> 
              </span>
              <span className="absolute  font-Roboto left-0 flex h-full w-full justify-center items-center text-white transition-all duration-300 transform group-hover:translate-x-full ease group-hover:text-[#22BCAC]">
                Read More
              </span>
              <span className="relative font-Roboto invisible">Read More</span>
            </button>
          </motion.div>
      </div>
    </section>
  )
}

