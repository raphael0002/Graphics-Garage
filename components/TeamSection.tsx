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
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="card-professional rounded-2xl p-6 text-center hover:border-purple-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
                        >
                            <div className="w-20 h-20 bg-gradient-to-br from-purple-primary/20 to-purple-dark/10 rounded-full flex items-center justify-center mx-auto mb-4 ring-2 ring-purple-primary/20 group-hover:ring-purple-primary/40 transition-all duration-300">
                                <span className="text-2xl font-bold text-purple-primary">{member.avatar}</span>
                            </div>

                            <h3 className="text-xl font-bold text-professional mb-1">{member.name}</h3>
                            <p className="text-purple-primary font-medium mb-3">{member.position}</p>
                            <p className="text-sm text-muted-professional leading-relaxed mb-4">{member.bio}</p>

                            <div className="flex flex-wrap gap-1 mb-4">
                                {member.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-2 py-1 bg-purple-primary/10 text-purple-primary text-xs rounded-full border border-purple-primary/20"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-center space-x-3">
                                {member.social.linkedin && (
                                    <a
                                        href={member.social.linkedin}
                                        className="w-8 h-8 bg-purple-primary/10 rounded-lg flex items-center justify-center hover:bg-purple-primary/20 transition-colors duration-300"
                                    >
                                        <Linkedin className="w-4 h-4 text-purple-primary" />
                                    </a>
                                )}
                                {member.social.twitter && (
                                    <a
                                        href={member.social.twitter}
                                        className="w-8 h-8 bg-purple-primary/10 rounded-lg flex items-center justify-center hover:bg-purple-primary/20 transition-colors duration-300"
                                    >
                                        <Twitter className="w-4 h-4 text-purple-primary" />
                                    </a>
                                )}
                                {member.social.github && (
                                    <a
                                        href={member.social.github}
                                        className="w-8 h-8 bg-purple-primary/10 rounded-lg flex items-center justify-center hover:bg-purple-primary/20 transition-colors duration-300"
                                    >
                                        <Github className="w-4 h-4 text-purple-primary" />
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
