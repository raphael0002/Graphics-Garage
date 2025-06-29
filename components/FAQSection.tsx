"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
    {
        question: "What services do you offer?",
        answer:
            "We offer comprehensive digital marketing services including website design & development, graphics design, social media management, mobile app development, digital marketing strategies, and brand development.",
    },
    {
        question: "How long does a typical project take?",
        answer:
            "Project timelines vary depending on scope and complexity. A typical website project takes 4-8 weeks, while comprehensive branding projects may take 8-12 weeks. We'll provide detailed timelines during our initial consultation.",
    },
    {
        question: "Do you offer ongoing support?",
        answer:
            "Yes, we provide ongoing support and maintenance packages to ensure your digital assets continue to perform optimally. Our support includes updates, security monitoring, and performance optimization.",
    },
    {
        question: "What is your design process?",
        answer:
            "Our design process involves discovery, strategy, design, development, and launch phases. We work closely with you throughout each stage to ensure the final product exceeds your expectations and achieves your business goals.",
    },
    {
        question: "How do you handle project communication?",
        answer:
            "We maintain transparent communication through regular updates, scheduled check-ins, and dedicated project management tools. You'll have direct access to your project team and real-time progress updates.",
    },
    {
        question: "What makes your agency different?",
        answer:
            "We combine creative excellence with strategic thinking and cutting-edge technology. Our team focuses on delivering measurable results while creating exceptional user experiences that drive business growth.",
    },
]

export const FAQSection = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section id="faq" className="py-16 md:py-20 bg-gray-50 dark:bg-black transition-colors duration-300">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
                        Frequently Asked Questions<span className="text-red-400">.</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
                        Everything you need to know about our services and process.
                    </p>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index
                                ? "bg-white dark:bg-gray-900/50 border border-red-400/50"
                                : "bg-white dark:bg-gray-900/30 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700"
                                }`}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 md:px-8 py-6 md:py-8 text-left flex items-center justify-between transition-colors"
                            >
                                <span
                                    className={`text-base md:text-lg font-semibold ${openIndex === index ? "text-red-400" : "text-gray-900 dark:text-white"
                                        }`}
                                >
                                    {String(index).padStart(2, "0")}. {faq.question}
                                </span>

                                <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                                    <ChevronDown
                                        className={`w-5 h-5 md:w-6 md:h-6 ${openIndex === index ? "text-red-400" : "text-gray-400 dark:text-gray-400"}`}
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
                                <div className="px-6 md:px-8 pb-6 md:pb-8">
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{faq.answer}</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
