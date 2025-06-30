"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Clock, ArrowRight } from "lucide-react"
import type { ProcessStep } from "@/data/services"

interface ServiceProcessSectionProps {
    process: ProcessStep[]
}

export const ServiceProcessSection = ({ process }: ServiceProcessSectionProps) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section className="py-16 md:py-20 section-light transition-colors duration-300">
            <div className="container mx-auto px-4 md:px-6">
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
                        Our Process
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl font-bold text-professional mb-4">
                        How We Work<span className="text-purple-primary">.</span>
                    </h2>
                    <p className="text-lg md:text-xl text-muted-professional max-w-3xl mx-auto">
                        Our proven process ensures that every project is delivered on time, within budget, and exceeds your
                        expectations.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {process.map((step, index) => (
                        <motion.div
                            key={step.step}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="relative"
                        >
                            {/* Connector Line */}
                            {index < process.length - 1 && (
                                <div className="absolute left-8 top-20 w-0.5 h-16 bg-purple-primary/20 hidden md:block" />
                            )}

                            <div className="flex items-start space-x-6 mb-8 md:mb-12">
                                <div className="w-16 h-16 bg-purple-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 border-2 border-purple-primary/20">
                                    <span className="text-xl font-bold text-purple-primary">{step.step}</span>
                                </div>

                                <div className="flex-1 card-professional rounded-2xl p-6 md:p-8 hover:border-purple-primary transition-all duration-300">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                        <h3 className="text-xl md:text-2xl font-bold text-professional mb-2 md:mb-0">{step.title}</h3>
                                        <div className="flex items-center text-purple-primary text-sm font-medium bg-purple-primary/10 px-3 py-1 rounded-full border border-purple-primary/20 w-fit">
                                            <Clock className="w-4 h-4 mr-2" />
                                            {step.duration}
                                        </div>
                                    </div>
                                    <p className="text-muted-professional leading-relaxed">{step.description}</p>
                                </div>
                            </div>

                            {/* Arrow for mobile */}
                            {index < process.length - 1 && (
                                <div className="flex justify-center mb-8 md:hidden">
                                    <ArrowRight className="w-6 h-6 text-purple-primary/50 rotate-90" />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
