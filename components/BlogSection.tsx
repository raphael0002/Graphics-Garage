"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { TrendingUp, Users, BookOpen } from "lucide-react"

export const BlogSection = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
        <section className="pt-32 pb-16 md:pb-20 section-light transition-colors duration-300 relative overflow-hidden">

            <div className="container mx-auto px-4 md:px-6 relative">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="inline-flex items-center px-4 py-2 bg-purple-primary/10 rounded-full text-purple-primary text-sm font-medium mb-6"
                    >
                        <BookOpen className="w-4 h-4 mr-2" />
                        Latest Insights & Tutorials
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-professional leading-tight mb-6"
                    >
                        Our Creative
                        <span className="text-purple-primary"> Blog</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-xl text-muted-professional leading-relaxed mb-8 max-w-3xl mx-auto"
                    >
                        Discover the latest trends in web design, development tips, digital marketing strategies, and creative
                        insights from our expert team.
                    </motion.p>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="grid grid-cols-2 sm:grid-cols-3 gap-8 max-w-2xl mx-auto"
                    >
                        <div className="text-center">
                            <div className="w-12 h-12 bg-purple-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                                <BookOpen className="w-6 h-6 text-purple-primary" />
                            </div>
                            <div className="text-2xl font-bold text-professional mb-1">50+</div>
                            <div className="text-sm text-muted-professional">Articles Published</div>
                        </div>

                        <div className="text-center">
                            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                                <TrendingUp className="w-6 h-6 text-blue-600" />
                            </div>
                            <div className="text-2xl font-bold text-professional mb-1">10K+</div>
                            <div className="text-sm text-muted-professional">Monthly Readers</div>
                        </div>

                        <div className="text-center">
                            <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                                <Users className="w-6 h-6 text-green-600" />
                            </div>
                            <div className="text-2xl font-bold text-professional mb-1">5</div>
                            <div className="text-sm text-muted-professional">Expert Writers</div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
