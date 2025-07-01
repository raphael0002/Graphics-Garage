"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Linkedin, Twitter, Github } from "lucide-react"
import { teamData } from "@/data/team"

export const TeamSection = () => {
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
                        Meet Our Team
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl font-bold text-professional mb-4">
                        The Creative Minds Behind Our Success<span className="text-purple-primary">.</span>
                    </h2>
                    <p className="text-lg md:text-xl text-muted-professional max-w-3xl mx-auto">
                        Our diverse team of experts brings together creativity, technical expertise, and strategic thinking to
                        deliver exceptional results.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {teamData.map((member, index) => (
                        <motion.div
                            key={member.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{
                                duration: 0.4,
                                delay: Math.min(index * 0.1, 0.3),
                                ease: "easeOut"
                            }}
                            layout={false} // Prevent layout recalculation
                            className="card-professional rounded-2xl p-8 text-center group relative overflow-hidden backdrop-blur-sm border-2 border-border hover:border-purple-primary/50"
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-purple-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="relative z-10">
                                <div className="w-24 h-24 bg-gradient-to-br from-purple-primary to-purple-dark rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl ring-4 ring-purple-primary/20 group-hover:ring-purple-primary/30 transition-all duration-300 transform group-hover:rotate-6">
                                    <span className="text-3xl font-bold text-white">{member.avatar}</span>
                                </div>

                                <h3 className="text-2xl font-bold text-professional mb-2 group-hover:text-purple-primary transition-colors duration-300">
                                    {member.name}
                                </h3>
                                <p className="text-purple-primary font-medium mb-4">{member.position}</p>
                                <p className="text-sm text-muted-professional leading-relaxed mb-6">{member.bio}</p>

                                <div className="flex flex-wrap gap-2 justify-center mb-6">
                                    {member.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1.5 bg-purple-primary/10 text-purple-primary text-xs font-medium rounded-xl border border-purple-primary/20 hover:bg-purple-primary/20 transition-colors duration-300"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex justify-center space-x-4">
                                    {member.social.linkedin && (
                                        <a
                                            href={member.social.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 bg-card rounded-xl flex items-center justify-center hover:bg-purple-primary hover:text-white transition-all duration-300 group/icon"
                                        >
                                            <Linkedin className="w-5 h-5 text-purple-primary group-hover/icon:text-white" />
                                        </a>
                                    )}
                                    {member.social.twitter && (
                                        <a
                                            href={member.social.twitter}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 bg-card rounded-xl flex items-center justify-center hover:bg-purple-primary hover:text-white transition-all duration-300 group/icon"
                                        >
                                            <Twitter className="w-5 h-5 text-purple-primary group-hover/icon:text-white" />
                                        </a>
                                    )}
                                    {member.social.github && (
                                        <a
                                            href={member.social.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 bg-card rounded-xl flex items-center justify-center hover:bg-purple-primary hover:text-white transition-all duration-300 group/icon"
                                        >
                                            <Github className="w-5 h-5 text-purple-primary group-hover/icon:text-white" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
