
import { motion } from 'framer-motion'
import { Calendar, User, ArrowRight } from 'lucide-react'
import image11 from '../../../../Public/service/image1.webp'
import image22 from '../../../../Public/service/image2.webp'
import image33 from '../../../..//Public/service/image3.webp'
// import image44 from '../../../../Public/testimonials/test4.jpeg'



export default function Blog() {






    const posts = [
        {
            title: "Top 5 Local Delicacies You Must Try in Tirupati",
            image: image11,
            date: "May 10, 2024",
            author: "Rahul Kapoor",
            category: "Food & Culture"
        },
        {
            title: "A Guide to the Ancient Temples Around Tirupati",
            image:image22,
            date: "May 5, 2024",
            author: "Ananya Reddy",
            category: "Travel"
        },
        {
            title: "Luxury Meets Tradition: Inside Our New Suite Collection",
            image: image33,
            date: "April 30, 2024",
            author: "Vikram Patel",
            category: "Hotel"
        }
    ]
    return (
        <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-5xl font-bold mb-12 text-gray-800 font-Roboto"
                >
                    Recent Posts
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {posts.map((post, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative border-[1px] h-[450px]  shadow-xl transform border-[#22BCAC] transition-transform  duration-700 ease-out rounded-[10px] bg-white overflow-hidden"
                        >
                            {/* Image Container with Clip Path */}
                            <div className="relative h-[200px]  rounded-[10px] overflow-hidden">
                                <div className="absolute inset-0 bg-[#22BCAC]  mix-blend-multiply opacity-30 z-10"></div>
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                 className="object-cover transform group-hover:scale-110 transition-transform h-[100%]  w-[100%] duration-700 ease-out"
                                    // style={{
                                    //     clipPath: "polygon(0 0, 100% 0, 100% 85%, 0% 100%)"
                                    // }}
                                />
                                {/* Category Tag */}
                                {/* <div className="absolute top-4 left-4 z-20 transform -rotate-90 origin-top-left">
                                    <span className="px-6 py-2 bg-white text-[#22BCAC] text-sm font-bold uppercase tracking-wider">
                                        {post.category}
                                    </span>
                                </div> */}
                            </div>

                            {/* Content */}
                            <div className="p-6 relative">
                                {/* Title */}
                                <h3 className="text-2xl font-bold font-Roboto text-gray-800 mb-4 group-hover:text-[#22BCAC] transition-colors duration-300">
                                    {post.title}
                                </h3>


<div>


                                {/* Metadata */}
                                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                    <div className="flex items-center gap-1.5">
                                        <Calendar className="w-4 h-4 text-[#22BCAC]" />
                                        <span className=' font-Montserrat'>{post.date}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <User className="w-4 h-4 text-[#22BCAC]" />
                                        <span className=' font-Montserrat'>{post.author}</span>
                                    </div>
                                </div>

                                {/* Read More Link */}
                                <motion.div
                                    className="inline-flex items-center gap-2 text-[#22BCAC]  font-bold text-lg group/link"
                                    whileHover={{ x: 5 }}
                                >
                                    <span className="relative font-Montserrat">
                                        Read More
                                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#22BCAC] transform scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left"></span>
                                    </span>
                                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/link:translate-x-2" />
                                </motion.div>
                                </div>
                            </div>

                            {/* Decorative Element */}
                            <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#22BCAC] opacity-10 transform rotate-45 translate-x-12 translate-y-12"></div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    )
}

