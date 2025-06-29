"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react"

export const ContactSection = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Form submitted:", formData)
        // Handle form submission here
    }

    return (
        <section id="contact" className="py-16 md:py-20 bg-white dark:bg-black transition-colors duration-300">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-start">
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
                            {"Let's work together"}
                            <span className="text-red-400">.</span>
                        </h2>

                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 md:mb-12 leading-relaxed">
                            {"Ready to start your next project? Get in touch and let's create something amazing."}
                        </p>

                        <div className="space-y-6 md:space-y-8">
                            <motion.div className="flex items-center space-x-4" whileHover={{ x: 10 }} transition={{ duration: 0.3 }}>
                                <Mail className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                                <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg">hello@company.com</p>
                            </motion.div>

                            <motion.div className="flex items-center space-x-4" whileHover={{ x: 10 }} transition={{ duration: 0.3 }}>
                                <Phone className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                                <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg">+1 (555) 000-0000</p>
                            </motion.div>

                            <motion.div className="flex items-center space-x-4" whileHover={{ x: 10 }} transition={{ duration: 0.3 }}>
                                <MapPin className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                                <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg">
                                    123 Design Street, Creative City
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.8 }}
                        className="w-full"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-xl px-4 md:px-6 py-4 md:py-5 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:border-gray-400 dark:focus:border-gray-700 transition-colors text-base md:text-lg"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-xl px-4 md:px-6 py-4 md:py-5 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:border-gray-400 dark:focus:border-gray-700 transition-colors text-base md:text-lg"
                                    required
                                />
                            </div>
                            <div>
                                <textarea
                                    name="message"
                                    placeholder="Your message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows={6}
                                    className="w-full bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-xl px-4 md:px-6 py-4 md:py-5 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:border-gray-400 dark:focus:border-gray-700 transition-colors resize-none text-base md:text-lg"
                                    required
                                />
                            </div>
                            <motion.button
                                type="submit"
                                className="w-full bg-red-500 hover:bg-red-600 text-white px-6 md:px-8 py-4 md:py-5 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-3 group text-base md:text-lg"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Send Message
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
