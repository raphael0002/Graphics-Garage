"use client";

import { motion, useInView } from "framer-motion";
import { JSX, useRef } from "react";
import { Megaphone, PenTool, Sparkles, Globe, Layout } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Service {
    title: string;
    description: string;
    icon: LucideIcon;
    stats: {
        number: string;
        label: string;
        secondary?: string;
        secondaryLabel?: string;
    };
    illustration: JSX.Element;
}

const services: Service[] = [
    {
        title: "Social Media Marketing",
        description: "Boost your brand’s presence with targeted social media campaigns that drive engagement and growth.",
        icon: Megaphone,
        stats: { number: "200+", label: "Campaigns", secondary: "1M+", secondaryLabel: "Impressions" },
        illustration: (
            <div className="relative w-20 h-16">
                <div className="absolute top-2 right-0 w-12 h-8 bg-purple-primary/80 rounded-lg transform rotate-3"></div>
                <div className="absolute top-4 right-2 w-8 h-6 bg-purple-primary/60 rounded-md transform -rotate-6"></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 bg-purple-dark rounded-full"></div>
            </div>
        ),
    },
    {
        title: "Graphic Design",
        description: "Create stunning visuals for digital and print media, from logos to marketing collateral.",
        icon: PenTool,
        stats: { number: "300+", label: "Designs" },
        illustration: (
            <div className="relative w-20 h-16">
                <div className="absolute top-1 right-2 w-10 h-10 bg-gray-dark rounded-lg"></div>
                <div className="absolute top-3 right-4 w-6 h-6 bg-purple-primary rounded-full"></div>
                <div className="absolute bottom-2 right-0 w-4 h-4 bg-purple-dark rounded transform rotate-45"></div>
            </div>
        ),
    },
    {
        title: "Branding",
        description: "Develop a cohesive brand identity that resonates with your audience and stands out.",
        icon: Sparkles,
        stats: { number: "80+", label: "Brand Identities" },
        illustration: (
            <div className="relative w-20 h-16">
                <div className="absolute top-0 right-2 w-8 h-12 bg-gray-dark rounded-lg"></div>
                <div className="absolute top-2 right-3 w-6 h-8 bg-navy-dark rounded-md"></div>
                <div className="absolute bottom-2 left-0 w-6 h-6 bg-purple-primary rounded transform rotate-12"></div>
            </div>
        ),
    },
    {
        title: "Web Development",
        description: "Build fast, responsive, and SEO-optimized websites tailored to your business needs.",
        icon: Globe,
        stats: { number: "120+", label: "Websites" },
        illustration: (
            <div className="relative w-20 h-16">
                <div className="absolute top-0 right-2 w-8 h-12 bg-gray-dark rounded-lg"></div>
                <div className="absolute top-2 right-3 w-6 h-8 bg-navy-dark rounded-md"></div>
                <div className="absolute bottom-2 left-0 w-6 h-6 bg-purple-primary rounded transform rotate-12"></div>
            </div>
        ),
    },
    {
        title: "UI/UX Design",
        description: "Design intuitive and user-friendly interfaces for web and mobile applications.",
        icon: Layout,
        stats: { number: "150+", label: "Projects" },
        illustration: (
            <div className="relative w-20 h-16">
                <div className="absolute top-1 right-1 w-10 h-10 bg-gray-dark rounded-lg"></div>
                <div className="absolute top-3 right-3 w-6 h-6 bg-purple-primary rounded-full"></div>
                <div className="absolute bottom-1 right-5 w-4 h-4 bg-purple-dark rounded transform rotate-45"></div>
            </div>
        ),
    },
];

export const ServicesSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="services" className="py-12 md:py-20 section-light transition-colors duration-300">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-professional mb-4 md:mb-6">
                        Our Expertise<span className="text-purple-primary">.</span>
                    </h2>
                    <p className="text-lg md:text-xl text-muted-professional max-w-4xl mx-auto px-4">
                        We combine strategic thinking with cutting-edge technology to deliver solutions that set you apart from the
                        competition.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8 mb-12">
                    {/* Social Media Marketing - spans 2 columns */}
                    {/* <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 0.6, delay: 0 * 0.1 }}
                        className="group h-full md:col-span-2 lg:col-span-2"
                    >
                        <div className="card-professional rounded-2xl p-6 md:p-8 h-full hover:border-purple-primary transition-all duration-300">
                            <div className="flex items-start justify-between mb-6">
                                <div className="flex-1">
                                    <h3 className="text-xl md:text-2xl font-bold text-professional mb-3">{services[0].title}</h3>
                                    <p className="text-sm md:text-base text-muted-professional leading-relaxed mb-6">
                                        {services[0].description}
                                    </p>
                                </div>
                                <div className="ml-4">
                                    <services[0].icon className="w-8 h-8 text-purple-primary" />
                                </div>
                            </div>
                            <div className="flex items-baseline space-x-6">
                                <div>
                                    <div className="text-2xl md:text-3xl font-bold text-purple-primary">{services[0].stats.number}</div>
                                    <div className="text-xs md:text-sm text-muted-professional">{services[0].stats.label}</div>
                                </div>
                                {services[0].stats.secondary && (
                                    <div>
                                        <div className="text-2xl md:text-3xl font-bold text-purple-primary">{services[0].stats.secondary}</div>
                                        <div className="text-xs md:text-sm text-muted-professional">{services[0].stats.secondaryLabel}</div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div> */}

                    {/* Other services */}
                    {services.slice(0).map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
                            className="group h-full md:col-span-2 lg:col-span-2"
                        >
                            <div className="card-professional rounded-2xl p-6 md:p-8 h-full hover:border-purple-primary transition-all duration-300">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="flex-1">
                                        <h3 className="text-xl md:text-2xl font-bold text-professional mb-3">{service.title}</h3>
                                        <p className="text-sm md:text-base text-muted-professional leading-relaxed mb-6">
                                            {service.description}
                                        </p>
                                    </div>
                                    <div className="ml-4">
                                        <service.icon className="w-8 h-8 text-purple-primary" />
                                    </div>
                                </div>
                                <div className="flex items-baseline space-x-6">
                                    <div>
                                        <div className="text-2xl md:text-3xl font-bold text-purple-primary">{service.stats.number}</div>
                                        <div className="text-xs md:text-sm text-muted-professional">{service.stats.label}</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {/* Contact us - spans remaining space */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="md:col-span-2 lg:col-span-2 flex items-center justify-center"
                    >
                        <div className="inline-flex items-center justify-center space-x-4 text-professional cursor-pointer hover:text-purple-primary transition-colors duration-300 group">
                            <span className="font-semibold text-2xl md:text-3xl">Contact us</span>
                            <div className="flex items-center mt-2">
                                <div className="w-12 h-0.5 bg-purple-primary rounded-full"></div>
                                <div className="w-0 h-0 border-l-8 border-l-purple-primary border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};