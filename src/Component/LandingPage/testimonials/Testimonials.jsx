import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import test1 from '../../../../Public/testimonials/test1.jpeg'
import test2 from '../../../../Public/testimonials/test2.jpeg'
import test3 from '../../../../Public/testimonials/test3.jpeg'
import test4 from '../../../../Public/testimonials/test4.jpeg'
import test5 from '../../../../Public/testimonials/test1.jpeg'

export default function Testimonials() {
    const controls = useAnimation();

    const testimonials = [
        {
            text: "Their cloud solutions transformed our infrastructure. The team's expertise and dedication to quality is outstanding.",
            author: "Sarah Chen",
            role: "CTO, TechVision Inc.",
            rating: 5,
            company: "Leading Cloud Provider",
            image: test1 ,
        },
        {
            text: "Exceptional service and innovative solutions. They've been instrumental in our digital transformation journey.",
            author: "Marcus Rodriguez",
            role: "Head of Engineering",
            rating: 5,
            company: "Global Tech Solutions",
            image: test2 ,
        },
        {
            text: "Outstanding technical expertise and reliable support. They consistently deliver beyond expectations.",
            author: "Emily Watson",
            role: "Director of Operations",
            rating: 5,
            company: "Digital Innovations Ltd",
            image:  test3, 
        },
        {
            text: "A game-changer in our development process. Their solutions have significantly improved our efficiency.",
            author: "David Kim",
            role: "Lead Developer",
            rating: 5,
            company: "Tech Innovators",
            image:  test4,
        }
    ];

    const slideAnimation = async () => {
        await controls.start({
            x: [0, -100 * testimonials.length],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear",
                    duration: testimonials.length * 2 // Adjust speed here; lower value = faster slide
                }
            }
        });
    };

    useEffect(() => {
        slideAnimation();
    }, []);

    return (
        <div className="  bg-gradient-to-br from-[#22BCAC]/10 to-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="md:max-w-[76%] w-[90%] 2xl:w-[1200px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-left mb-10"
                >
                    <span className="text-[#22BCAC] font-semibold text-lg mb-2 uppercase tracking-wider font-Roboto ">Testimonials</span>
                    <h2 className="mt-2 text-3xl font-bold text-gray-900  font-Roboto sm:text-5xl">
                        Trusted by Industry Leaders
                    </h2>
                </motion.div>

                <div className="relative pt-[20px] overflow-hidden" style={{ width: '100%', height: '350px' }}>
                       {/* Left Blur
                       <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none z-10 blur-lg" />
                    {/* Right Blur */}
                    {/* <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none z-10 blur-lg" /> */} 

                    <motion.div
                        animate={controls}
                        className="flex gap-6 absolute"
                        style={{ width: `${testimonials.length * 200}%` }}
                    >
                        {[...testimonials, ...testimonials].map((testimonial, index) => (
                            <motion.div
                                key={index}
                                className="relative bg-white p-6 rounded-2xl shadow-xl w-[340px] flex-shrink-0"
                                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                            >
                                <div className="absolute -top-3 -right-3">
                                    <Quote className="w-8 h-8 text-[#22BCAC] transform rotate-180" />
                                </div>

                                <div className="flex mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                    ))}
                                </div>

                                <p className="text-gray-700 mb-4 font-Montserrat text-sm leading-relaxed line-clamp-3">
                                    "{testimonial.text}"
                                </p>

                                <div className="flex items-center gap-4 border-t border-gray-100 pt-4 mt-4">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.author}
                                        className="w-12 h-12 rounded-full object-cover border-2 border-violet-100"
                                    />
                                    <div>
                                        <p className="font-semibold font-Roboto text-gray-900">{testimonial.author}</p>
                                        <p className="text-sm font-[600] font-Montserrat text-[#22BCAC]">{testimonial.role}</p>
                                        <p className="text-xs font-Montserrat text-gray-500">{testimonial.company}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
