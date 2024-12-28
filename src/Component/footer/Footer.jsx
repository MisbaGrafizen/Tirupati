import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Phone, Mail, Instagram, Twitter, Facebook, Linkedin, ChevronRight, Send } from 'lucide-react'

export default function Footer() {
    const [emailFocus, setEmailFocus] = useState(false)

    return (
        <footer className="bg-white border-[1px] text-gray-600 pt-16 pb-8 font-sans relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute md:bottom-0 md:flex hidden  inset-0 z-0">
                <svg className="w-full h-[600px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#22BCAC" fillOpacity="0.3" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>
            <div className="absolute  top-[20px]  md:flex hidden  rotate-1 inset-0 z-0">
                <svg className="w-full h-[600px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#22BCAC" fillOpacity="0.3" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Section */}
                    <motion.div 
                        className="space-y-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-4xl font-bold font-Roboto text-[#22BCAC]">Tirupati</h2>
                        <p className="text-sm leading-relaxed font-Montserrat">
                            Experience divine hospitality at Tirupati. Where tradition meets luxury, creating unforgettable moments for every guest.
                        </p>
                        <div className="flex space-x-4">
                            {[Instagram, Twitter, Facebook, Linkedin].map((Icon, index) => (
                                <motion.a
                                    key={index}
                                    href="#"
                                    className="p-2 bg-[#22BCAC] bg-opacity-10 rounded-full text-[#22BCAC] hover:bg-opacity-20 transition-all duration-200"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Icon className="w-5 h-5" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div 
                        className="space-y-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h3 className="text-xl font-semibold text-[#22BCAC]  font-Roboto">Quick Links</h3>
                        <ul className=" w-full ">
                            {['Home', 'About', 'Services', 'Rooms', 'Contact'].map((item, index) => (
                                <motion.li 
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: 0.1 * index }}
                                >
                                    <a href="#" className="group flex items-center space-x-2 text-gray-600 hover:text-[#22BCAC] transition-colors duration-200">
                                        <span className="w-0 group-hover:w-4 font-Montserrat transition-all duration-200 overflow-hidden">
                                            <ChevronRight className="w-4 h-4 text-[#22BCAC]" />
                                        </span>
                                        <span className="border-b font-Montserrat border-transparent group-hover:border-[#22BCAC] font-[500] transition-colors duration-200">{item}</span>
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Information */}
                    <motion.div 
                        className="space-y-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="text-xl font-semibold font-Roboto text-[#22BCAC]">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 text-[#22BCAC] mt-1 flex-shrink-0" />
                                <span className="text-sm font-Montserrat">123 Serenity Lane, Tirupati, Andhra Pradesh 517501, India</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="w-5 h-5 text-[#22BCAC] flex-shrink-0" />
                                <span className="text-sm font-Montserrat">+91 987 654 3210</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="w-5 h-5 text-[#22BCAC] flex-shrink-0" />
                                <span className="text-sm font-Montserrat">info@tirupati.com</span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Newsletter Subscription */}
                    <motion.div 
                        className="space-y-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <h3 className="text-xl font-semibold text-[#22BCAC]  font-Roboto">Stay Updated</h3>
                        <p className="text-sm font-Montserrat">Subscribe to our newsletter for exclusive offers and updates.</p>
                        <form className="mt-2 relative">
                            <input
                                type="email"
                                placeholder="Your Email Address"
                                className={`w-full px-4 py-3 bg-[#22BCAC] font-Montserrat font-[500] bg-opacity-5 text-gray-600 rounded-lg focus:outline-none transition-all duration-200 ${
                                    emailFocus ? 'ring-2 ring-[#22BCAC] ring-opacity-50' : ''
                                }`}
                                onFocus={() => setEmailFocus(true)}
                                onBlur={() => setEmailFocus(false)}
                            />
                            <button
                                type="submit"
                                className="absolute right-2 top-2 font-Montserrat p-2 bg-[#22BCAC] text-white rounded-md hover:bg-opacity-90 transition-colors duration-200"
                            >
                                <Send className="w-5 h-5" />
                            </button>
                        </form>
                    </motion.div>
                </div>

                {/* Bottom Section */}
                <div className="mt-12 pt-8 border-t-[1px] border-[#000000] border-opacity-20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    {/* Copyright */}
                    <p className="text-[13px] font-Montserrat text-[#373434]">
                    © 2024 All Rights Reserved by tirupati || Designed and Developed
                    with ❤️ by Grafizen International LLC
                    </p>

                    {/* Additional Links */}
                    <div className="flex space-x-6">
                        {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, index) => (
                            <a key={index} href="#" className="text-sm text-gray-500 font-[500] font-Montserrat hover:text-[#22BCAC] transition-colors duration-200">
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

