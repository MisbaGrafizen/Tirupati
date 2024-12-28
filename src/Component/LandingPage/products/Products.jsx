// import { motion } from "framer-motion";

// const products = [
//   {
//     title: "Rotor and Stator Assemblies",
//     image: "/service/image1.webp", // Use paths relative to the public folder
//     alt: "Various metal rotor and stator components arranged on display",
//   },
//   {
//     title: "Compound Punched Laminations",
//     image: "/service/image2.webp",
//     alt: "Factory workers inspecting compound punched laminations",
//   },
//   {
//     title: "Notched Laminations",
//     image: "/service/image3.webp",
//     alt: "Worker examining notched lamination components",
//   },
// ];

// export default function MotorCores() {
//   return (
//     <div className="min-h-screen bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <div className="space-y-12">
//           {/* Products & Applications Label */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-[#22BCAC] font-semibold text-lg"
//           >
//             Products & Applications
//           </motion.div>

//           {/* Hero Section */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="space-y-6"
//           >
//             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 max-w-4xl">
//               Motor Cores which act as the Catalyst to Skyrocket Your Motors Efficiency, Guaranteeing Longevity and Reliability
//             </h1>
//             <p className="text-lg text-gray-600 max-w-4xl">
//               We procure electrical steel from leading mills in India and import from Russia, China, and Europe to address industry scarcity. Our Motor OEMs targeting high efficiency rely on steel grades ranging from CRCA to high-efficiency CRNO steel with watt losses between 2.5 to 12 at 1.5 Tesla. Our cutting-edge tools ensure precision within 2-5 microns per lamination. With steel thickness ranging from 0.3 mm to 1 mm and coatings like C3, C5, and C6, we guarantee problem-free motor operation with standardized quality at every level.
//             </p>
//           </motion.div>

//           {/* Product Grid */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4 }}
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//           >
//             {products.map((product, index) => (
//               <motion.div
//                 key={product.title}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.2 + index * 0.1 }}
//                 className="group"
//               >
//                 <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">
//                   <img
//                     src={product.image}
//                     alt={product.alt}
//                     className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
//                   />
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-900">{product.title}</h3>
//               </motion.div>
//             ))}
//           </motion.div>

//           {/* CTA Button */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.8 }}
//             className="flex justify-center"
//           >
//             <button className="bg-[#22BCAC] text-white px-8 py-3 rounded-md hover:bg-[#1ca799] transition-colors duration-300">
//               View All Products & Applications
//             </button>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }



import React from 'react';
import { motion } from 'framer-motion';

const products = [
  {
    title: "Rotor and Stator Assemblies",
    description: "High-precision assemblies engineered for optimal performance in various motor applications.",
    image: "/service/image1.webp",
    features: ["Precision-engineered", "High efficiency", "Customizable designs"]
  },
  {
    title: "Compound Punched Laminations",
    description: "Advanced punching technology for superior accuracy and consistent quality in motor core production.",
    image: "/service/image2.webp",
    features: ["Tight tolerances", "Reduced material waste", "Improved magnetic properties"]
  },
  {
    title: "Notched Laminations",
    description: "Precision-engineered notches for perfect fit and enhanced motor performance across various applications.",
    image: "/service/image3.webp",
    features: ["Optimized slot design", "Improved heat dissipation", "Enhanced torque characteristics"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

export default function ProductShowcase() {
  return (
    <div className=" bg-gradient-to-br text-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className=" mb-16"
        >
          <h1 className="text-[40px] font-Roboto font-bold tracking-tight text-[#22BCAC] 600">
            Advanced Motor Core Solutions
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl font-Montserrat  text-[14px]">
            Discover our range of high-performance motor cores designed to elevate efficiency and reliability in your applications.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-blue-100 hover:-translate-y-1"
            >
              <motion.img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover object-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold font-Montserrat  text-[#22BCAC] 600 mb-2">{product.title}</h3>
                <p className="text-gray-600 font-Montserrat mb-4">{product.description}</p>
                <ul className="space-y-2">
                  {product.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: featureIndex * 0.1 }}
                      className="flex items-center font-Montserrat text-gray-700"
                    >
                      <svg className="h-4 w-4 mr-2 text-[#22BCAC] 500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="px-6 pb-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-[#22BCAC] hover:bg-[#145750] font-Montserrat text-white font-semibold py-2 px-4 rounded transition duration-300"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-16 "
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#22BCAC] text-white  font-Montserrat hover:hover:bg-[#145750] font-bold py-3 px-8 rounded-lg text-lg transition duration-300 inline-flex items-center"
          >
            View All Products
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

