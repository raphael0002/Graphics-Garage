"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ChevronDown } from "lucide-react"
import { faqData } from "@/data/faq"

export const FAQSection = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section id="faq" className="py-16 md:py-20 section-light transition-colors duration-300">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="inline-flex items-center px-4 py-2 bg-purple-primary/10 border border-purple-primary/20 rounded-full text-purple-primary text-sm font-medium backdrop-blur-sm mb-6"
                    >
                        Frequently Asked Questions
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-professional mb-4 md:mb-6">
                        Got Questions? We Have Answers<span className="text-purple-primary">.</span>
                    </h2>
                    <p className="text-lg md:text-xl text-muted-professional">
                        Everything you need to know about our services and process.
                    </p>
                </motion.div>

                <div className="space-y-4">
                    {faqData.map((faq, index) => (
                        <motion.div
                            key={faq.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index
                                ? "card-professional border border-purple-primary/50 shadow-lg"
                                : "card-professional hover:border-purple-primary/30 hover:shadow-md"
                                }`}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 md:px-8 py-6 md:py-8 text-left flex items-center justify-between transition-colors hover:bg-purple-primary/5"
                            >
                                <span
                                    className={`text-base md:text-lg font-semibold transition-colors duration-300 ${openIndex === index ? "text-purple-primary" : "text-professional"
                                        }`}
                                >
                                    {String(index + 1).padStart(2, "0")}. {faq.question}
                                </span>
                                <motion.div
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex-shrink-0 ml-4"
                                >
                                    <ChevronDown
                                        className={`w-5 h-5 md:w-6 md:h-6 transition-colors duration-300 ${openIndex === index ? "text-purple-primary" : "text-muted-professional"
                                            }`}
                                    />
                                </motion.div>
                            </button>

                            <motion.div
                                initial={false}
                                animate={{
                                    height: openIndex === index ? "auto" : 0,
                                    opacity: openIndex === index ? 1 : 0,
                                }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden"
                            >
                                <div className="px-6 md:px-8 pb-6 md:pb-8 border-t border-border/30">
                                    <p className="text-muted-professional leading-relaxed pt-4">{faq.answer}</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
