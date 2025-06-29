"use client"

import { motion } from "framer-motion"

const footerLinks = {
    Company: ["About", "Careers", "Contact", "Blog"],
    Services: ["Digital Strategy", "UI/UX Design", "Development", "Marketing"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
}

export const Footer = () => {
    return (
        <footer className="bg-gray-50 dark:bg-black border-t border-gray-200 dark:border-gray-800 py-12 md:py-16 transition-colors duration-300">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="lg:col-span-1"
                    >
                        <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
                            Studio<span className="text-red-400">.</span>
                        </h3>
                    </motion.div>

                    <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                        {Object.entries(footerLinks).map(([category, links], index) => (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="col-span-1"
                            >
                                <h4 className="text-gray-900 dark:text-white font-semibold mb-6 text-base md:text-lg">{category}</h4>
                                <ul className="space-y-4">
                                    {links.map((link) => (
                                        <li key={link}>
                                            <a
                                                href="#"
                                                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 text-sm md:text-base"
                                            >
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div
                    className="border-t border-gray-200 dark:border-gray-800 pt-8 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">© 2025 Studio. All rights reserved.</p>
                </motion.div>
            </div>
        </footer>
    )
}
