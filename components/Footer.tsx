"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useTheme } from "next-themes"

const footerLinks = {
    Company: ["About", "Careers", "Contact", "Blog"],
    Services: ["Digital Strategy", "UI/UX Design", "Development", "Marketing"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
}

export const Footer = () => {
    const { theme } = useTheme()

    return (
        <footer className="section-light border-t border-border py-12 md:py-16 transition-colors duration-300">
            <div className="container mx-auto px-4 md:px-6 sm:mb-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-1 sm:col-span-3"
                    >
                        <div className="flex items-center mb-6">
                            <Image
                                src={theme === "dark" ? "/logo-1.svg" : "/logo-light-2.svg"}
                                alt="Logo"
                                width={320}
                                height={320}
                                className="mr-2 block"
                            />
                            {/* <Image
                                src="/logo-2.svg"
                                alt="Logo"
                                width={80}
                                height={80}
                                className="mr-2 md:hidden block"
                            /> */}
                        </div>
                        <p className="text-muted-professional leading-relaxed mb-6">
                            We craft digital experiences that inspire, engage, and deliver exceptional results for forward-thinking
                            brands.
                        </p>
                    </motion.div>

                    {Object.entries(footerLinks).map(([category, links], index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <h4 className="text-professional font-semibold mb-4">{category}</h4>
                            <ul className="space-y-3">
                                {links.map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            className="text-muted-professional hover:text-purple-primary transition-colors duration-200"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="border-t border-border pt-8 flex flex-col md:flex-row justify-center items-center"
                >
                    <p className="text-muted-professional text-md mb-4 md:mb-0">© 2024 Studio. All rights reserved.</p>
                </motion.div>
            </div>
        </footer>
    )
}