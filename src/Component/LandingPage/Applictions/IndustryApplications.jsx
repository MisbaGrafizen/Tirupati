import React from 'react'
import { motion } from "framer-motion"
import { Truck, Waves, TruckIcon as TowTruck, WashingMachineIcon as Washing, Battery, Building2, Thermometer, Fan, Stethoscope, Wrench } from 'lucide-react'

export default function IndustryApplications() {
  // Feintool Logo
  const applications = [
    {
      icon: Truck,
      title: "Industrial trucks",
      description: "Heavy-duty electric motors for industrial vehicles"
    },
    {
      icon: Waves,
      title: "Water pumps",
      description: "Efficient motors for water circulation systems"
    },
    {
      icon: TowTruck,
      title: "Towing vehicles",
      description: "Powerful components for towing applications"
    },
    {
      icon: Washing,
      title: "Household appliances",
      description: "Reliable motors for home appliances"
    },
    {
      icon: Battery,
      title: "Uninterruptible power supply",
      description: "Consistent power delivery systems"
    },
    {
      icon: Building2,
      title: "Building technology",
      description: "Smart building automation solutions"
    },
    {
      icon: Thermometer,
      title: "Heat pumps, heating pumps",
      description: "Energy-efficient heating solutions"
    },
    {
      icon: Fan,
      title: "Ventilation systems",
      description: "Advanced air circulation components"
    },
    {
      icon: Stethoscope,
      title: "Medical technology",
      description: "Precision motors for medical devices"
    },

  ]
  return (
    <>

      <div className=" bg-white  px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-Roboto font-bold text-gray-900 mb-6">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-600 font-Montserrat max-w-3xl mx-auto">
              Advanced electric motors and components for various industry applications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {applications.map((app, index) => (
              <motion.div
                key={app.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#22BCAC]/10 to-[#22BCAC]/20 rounded-2xl blur-xl transition-all duration-300 group-hover:blur-2xl" />
                <div className="relative px-6 py-[20px] flex flex-col justify-start rounded-2xl bg-white border border-[#22BCAC]/20 shadow-lg hover:shadow-xl h-[150px] transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-[#22BCAC]">
                      <app.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-[600] font-Montserrat text-gray-900">{app.title}</h3>
                  </div>
                  <p className="text-gray-600 overflow-y-auto font-Montserrat">{app.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

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
      </div>
    </>
  )
}
