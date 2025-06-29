"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export const HeroSection = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white dark:bg-black transition-colors duration-300"
        >
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6 md:space-y-8"
                    >
                        <motion.h1
                            className="text-5xl md:text-6xl lg:text-8xl font-bold text-gray-900 dark:text-white leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            Create<span className="text-red-400">.</span>
                            <br />
                            Design<span className="text-red-400">.</span>
                            <br />
                            Build<span className="text-red-400">.</span>
                        </motion.h1>

                        <motion.p
                            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            We craft digital experiences that inspire, engage, and deliver exceptional results for forward-thinking
                            brands.
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            <button className="bg-red-500 hover:bg-red-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 group">
                                View Our Work
                                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 text-gray-900 dark:text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-medium transition-all duration-300">
                                Get in Touch
                            </button>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        <div className="relative flex items-center justify-center">
                            {/* Floating geometric shapes */}
                            <motion.div
                                className="absolute -top-10 -left-10 w-8 h-4 bg-gray-800 dark:bg-white rounded-sm"
                                animate={{ y: [-10, 10, -10] }}
                                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                            />
                            <motion.div
                                className="absolute -top-5 right-20 w-6 h-6 bg-gray-800 dark:bg-white rounded-sm"
                                animate={{ y: [10, -10, 10] }}
                                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                            />
                            <motion.div
                                className="absolute top-10 -right-10 w-4 h-8 bg-gray-800 dark:bg-white rounded-sm"
                                animate={{ y: [-5, 15, -5] }}
                                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                            />
                            <motion.div
                                className="absolute bottom-20 -left-5 w-10 h-3 bg-gray-800 dark:bg-white rounded-sm"
                                animate={{ y: [5, -15, 5] }}
                                transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                            />
                            <motion.div
                                className="absolute bottom-10 right-10 w-3 h-6 bg-gray-800 dark:bg-white rounded-sm"
                                animate={{ y: [-8, 12, -8] }}
                                transition={{ duration: 4.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                            />

                            {/* Main illustration */}
                            <div className="relative">
                                {/* Desk */}
                                <div className="w-80 h-32 bg-gray-300 dark:bg-gray-300 rounded-t-lg relative">
                                    {/* Person */}
                                    <div className="absolute -top-20 left-1/2 transform -translate-x-1/2">
                                        {/* Head with headphones */}
                                        <div className="relative">
                                            <div className="w-16 h-16 bg-gray-400 rounded-full"></div>
                                            <div className="absolute -top-2 -left-2 w-20 h-20 border-4 border-red-400 rounded-full"></div>
                                            {/* Sunglasses */}
                                            <div className="absolute top-4 left-3 w-10 h-4 bg-black rounded-full"></div>
                                        </div>
                                        {/* Body */}
                                        <div className="w-20 h-24 bg-red-400 rounded-t-3xl mx-auto -mt-2"></div>
                                    </div>
                                    {/* Laptop */}
                                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                                        <div className="w-24 h-16 bg-black rounded-lg relative">
                                            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    className="mt-16 md:mt-20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                >
                    <p className="text-gray-500 dark:text-gray-500 text-sm mb-6">Trusted by world-class companies</p>
                    <div className="flex items-center space-x-8 opacity-50">
                        <div className="flex items-center space-x-3">
                            <div
                                className="w-4 h-4 bg-gray-400 dark:bg-gray-400"
                                style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
                            />
                            <span className="text-gray-400 dark:text-gray-400 text-sm">Company 1</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="w-4 h-4 bg-gray-400 dark:bg-gray-400 rounded-sm" />
                            <span className="text-gray-400 dark:text-gray-400 text-sm">Company 2</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="w-4 h-4 bg-gray-400 dark:bg-gray-400 rounded-full" />
                            <span className="text-gray-400 dark:text-gray-400 text-sm">Company 3</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
