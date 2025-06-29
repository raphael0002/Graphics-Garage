"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Calendar, Award, Quote } from "lucide-react"

const testimonials = [
    {
        quote:
            "Graphics Garage transformed our digital presence with their innovative design approach. Our website traffic increased by 300% within the first month.",
        name: "Sarah Johnson",
        title: "Digital Strategy Lead",
        company: "TechFlow Inc",
        avatar: "SJ",
        category: "Digital Strategy",
        rating: 5,
        location: "San Francisco, CA",
        date: "March 2024",
        projectType: "Website Redesign & Digital Strategy",
        fullTestimonial:
            "Working with Graphics Garage was an absolute game-changer for our company. Their team didn't just deliver a beautiful website - they completely transformed how we think about our digital presence. The strategic approach they took to understanding our business goals and translating them into a cohesive digital experience was remarkable. Our website traffic increased by 300% within the first month, and our conversion rates have doubled. The attention to detail and the innovative design solutions they provided exceeded all our expectations.",
        results: [
            "300% increase in website traffic",
            "2x conversion rate improvement",
            "50% reduction in bounce rate",
            "40% increase in lead generation",
        ],
    },
    {
        quote:
            "Creating intuitive and engaging user experiences that delight your customers and boost conversion rates through thoughtful design.",
        name: "Michael Chen",
        title: "Lead Designer",
        company: "Creative Studios",
        avatar: "MC",
        category: "UI/UX Design",
        rating: 5,
        location: "New York, NY",
        date: "February 2024",
        projectType: "Mobile App Design",
        fullTestimonial:
            "The UI/UX design work delivered by Graphics Garage was phenomenal. They took our complex mobile app concept and turned it into an intuitive, beautiful experience that our users absolutely love. The design process was collaborative and thorough - they really took the time to understand our users' needs and pain points. The final product not only looks stunning but also functions seamlessly across all devices.",
        results: [
            "95% user satisfaction rate",
            "40% increase in app engagement",
            "60% reduction in support tickets",
            "4.8 star app store rating",
        ],
    },
    {
        quote:
            "Building scalable, high-performance applications using cutting-edge technologies and best practices for optimal results.",
        name: "Emily Davis",
        title: "Senior Developer",
        company: "DevCorp",
        avatar: "ED",
        category: "Development",
        rating: 5,
        location: "Austin, TX",
        date: "January 2024",
        projectType: "Full-Stack Web Application",
        fullTestimonial:
            "Graphics Garage's development team is top-notch. They built us a complex web application that handles thousands of users daily without any performance issues. Their code quality is exceptional, and they follow all the best practices for scalability and security. The project was delivered on time and within budget, which is rare in this industry. Their ongoing support has been fantastic as well.",
        results: [
            "99.9% uptime achieved",
            "50% faster load times",
            "Zero security vulnerabilities",
            "Handles 10k+ concurrent users",
        ],
    },
    {
        quote:
            "Optimizing your website for search engines to improve visibility and drive more organic traffic to your business.",
        name: "David Rodriguez",
        title: "SEO Specialist",
        company: "MarketPro",
        avatar: "DR",
        category: "SEO",
        rating: 5,
        location: "Miami, FL",
        date: "December 2023",
        projectType: "SEO Optimization & Content Strategy",
        fullTestimonial:
            "The SEO work done by Graphics Garage completely transformed our online visibility. Within 6 months, we went from page 3 to ranking #1 for our main keywords. Their approach is data-driven and transparent - they provided detailed reports and explanations for every strategy they implemented. The organic traffic growth has been incredible, and the quality of leads has improved significantly.",
        results: [
            "400% increase in organic traffic",
            "First page rankings for 50+ keywords",
            "200% increase in qualified leads",
            "85% improvement in local search visibility",
        ],
    },
    {
        quote:
            "Developing effective marketing strategies and campaigns that reach your target audience and drive engagement.",
        name: "Jessica Thompson",
        title: "Marketing Manager",
        company: "BrandForward",
        avatar: "JT",
        category: "Marketing",
        rating: 5,
        location: "Los Angeles, CA",
        date: "November 2023",
        projectType: "Digital Marketing Campaign",
        fullTestimonial:
            "Graphics Garage created and executed a comprehensive digital marketing campaign that exceeded all our expectations. Their creative approach to our brand messaging and their strategic use of multiple channels resulted in our most successful campaign to date. The ROI was incredible, and we've continued working with them on all our major campaigns since then.",
        results: [
            "500% ROI on ad spend",
            "300% increase in brand awareness",
            "250% growth in social media following",
            "150% increase in email subscribers",
        ],
    },
    {
        quote: "Outstanding web development services that delivered exactly what we needed for our e-commerce platform.",
        name: "Robert Kim",
        title: "CTO",
        company: "ShopTech",
        avatar: "RK",
        category: "E-commerce",
        rating: 5,
        location: "Seattle, WA",
        date: "October 2023",
        projectType: "E-commerce Platform Development",
        fullTestimonial:
            "The e-commerce platform built by Graphics Garage has revolutionized our online business. The custom features they developed specifically for our needs have given us a significant competitive advantage. The platform handles high traffic volumes seamlessly and the admin interface is incredibly user-friendly.",
        results: [
            "250% increase in online sales",
            "99.8% platform uptime",
            "45% faster checkout process",
            "30% reduction in cart abandonment",
        ],
    },
]

export const TestimonialsSection = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    const [selectedTestimonial, setSelectedTestimonial] = useState<(typeof testimonials)[0] | null>(null)

    const handleTestimonialClick = (testimonial: (typeof testimonials)[0]) => {
        setSelectedTestimonial(testimonial)
    }

    const closeModal = () => {
        setSelectedTestimonial(null)
    }

    // Duplicate testimonials for seamless loop
    const duplicatedTestimonials = [...testimonials, ...testimonials]

    return (
        <section
            id="testimonials"
            className="py-16 md:py-20 section-light relative overflow-hidden transition-colors duration-300"
        >
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 md:mb-20"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-professional mb-4 md:mb-6">
                        More than 1k+ happy customers<span className="text-purple-primary">.</span>
                    </h2>
                    <p className="text-lg md:text-xl text-muted-professional max-w-4xl mx-auto">
                        We combine strategic thinking with cutting-edge technology to deliver solutions that set you apart from the
                        competition.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="relative"
                >
                    {/* Enhanced fading masks */}
                    <div className="absolute left-0 top-0 w-24 md:w-32 lg:w-40 h-full bg-gradient-to-r from-background via-background/70 to-transparent z-20 pointer-events-none" />
                    <div className="absolute right-0 top-0 w-24 md:w-32 lg:w-40 h-full bg-gradient-to-l from-background via-background/70 to-transparent z-20 pointer-events-none" />

                    {/* Scrolling container */}
                    <div className="overflow-hidden">
                        <div className="flex animate-scroll-left hover:pause-animation">
                            {duplicatedTestimonials.map((testimonial, index) => (
                                <Card
                                    key={`${testimonial.name}-${index}`}
                                    className="flex-shrink-0 w-80 md:w-96 mx-3 md:mx-4 glass-purple hover:enhanced-glass transition-all duration-300 cursor-pointer group shadow-lg hover:shadow-xl"
                                    onClick={() => handleTestimonialClick(testimonial)}
                                >
                                    <CardContent className="p-6 md:p-8">
                                        <div className="flex items-center mb-6">
                                            <div className="w-12 md:w-14 h-12 md:h-14 bg-gradient-to-br from-purple-primary/20 to-purple-dark/10 rounded-full flex items-center justify-center mr-4 ring-1 ring-purple-primary/20 backdrop-blur-sm">
                                                <span className="text-professional font-semibold text-sm md:text-base">
                                                    {testimonial.avatar}
                                                </span>
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="text-professional font-semibold text-base">{testimonial.name}</h4>
                                                <p className="text-muted-professional text-sm">{testimonial.title}</p>
                                                <p className="text-muted-professional text-sm opacity-75">{testimonial.company}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center mb-4">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                                            ))}
                                        </div>

                                        <div className="relative mb-6">
                                            <Quote className="w-6 md:w-8 h-6 md:h-8 text-purple-primary/25 absolute -top-2 md:-top-3 -left-1 md:-left-2" />
                                            <p className="text-muted-professional text-sm leading-relaxed pl-4 md:pl-6 min-h-[4rem]">
                                                {testimonial.quote}
                                            </p>
                                        </div>

                                        <Badge
                                            variant="secondary"
                                            className="bg-purple-primary/15 text-purple-primary hover:bg-purple-primary/25 text-xs px-3 py-1 border border-purple-primary/20"
                                        >
                                            {testimonial.category}
                                        </Badge>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>

            <Dialog open={!!selectedTestimonial} onOpenChange={closeModal}>
                <DialogContent className="modal-glass text-professional w-full max-w-full md:max-w-[95vw] lg:max-w-[90vw] xl:max-w-[85vw] h-[90vh] overflow-y-auto shadow-2xl p-4 md:p-6">
                    {selectedTestimonial && (
                        <>
                            <DialogHeader className="border-b border-border/50 pb-4 md:pb-6">
                                <DialogTitle className="text-2xl md:text-3xl font-bold text-professional flex items-center">
                                    <Quote className="w-6 md:w-8 h-6 md:h-8 text-purple-primary/60 mr-2 md:mr-3" />
                                    Client Testimonial
                                </DialogTitle>
                            </DialogHeader>

                            <div className="space-y-6 pt-4 md:pt-6">
                                <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
                                    <div className="w-16 md:w-20 h-16 md:h-20 bg-gradient-to-br from-purple-primary/25 to-purple-dark/15 rounded-full flex items-center justify-center ring-2 ring-purple-primary/30 backdrop-blur-sm shadow-lg">
                                        <span className="text-professional font-semibold text-lg md:text-xl">
                                            {selectedTestimonial.avatar}
                                        </span>
                                    </div>

                                    <div className="flex-1">
                                        <h3 className="text-2xl md:text-3xl font-bold text-professional mb-1 md:mb-2">
                                            {selectedTestimonial.name}
                                        </h3>
                                        <p className="text-muted-professional text-base md:text-lg mb-1 md:mb-2">
                                            {selectedTestimonial.title}
                                        </p>
                                        <p className="text-muted-professional text-sm md:text-base mb-2 md:mb-4 opacity-75">
                                            {selectedTestimonial.company}
                                        </p>

                                        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 text-sm md:text-base text-muted-professional">
                                            <div className="flex items-center bg-purple-primary/15 backdrop-blur-sm rounded-full px-2 md:px-3 py-1 border border-purple-primary/20">
                                                <MapPin className="w-3 md:w-4 h-3 md:h-4 mr-1 md:mr-2" />
                                                {selectedTestimonial.location}
                                            </div>
                                            <div className="flex items-center bg-purple-primary/15 backdrop-blur-sm rounded-full px-2 md:px-3 py-1 border border-purple-primary/20">
                                                <Calendar className="w-3 md:w-4 h-3 md:h-4 mr-1 md:mr-2" />
                                                {selectedTestimonial.date}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-right">
                                        <div className="flex items-center justify-end mb-2 md:mb-3">
                                            {[...Array(selectedTestimonial.rating)].map((_, i) => (
                                                <Star key={i} className="w-4 md:w-6 h-4 md:h-6 text-yellow-400 fill-current mr-1" />
                                            ))}
                                        </div>
                                        <Badge
                                            variant="secondary"
                                            className="bg-purple-primary/20 text-purple-primary hover:bg-purple-primary/30 text-sm md:text-base px-3 md:px-4 py-1 md:py-2 border border-purple-primary/25"
                                        >
                                            {selectedTestimonial.category}
                                        </Badge>
                                    </div>
                                </div>

                                <div className="content-glass rounded-2xl p-4 md:p-6">
                                    <div className="flex items-center mb-4 md:mb-6">
                                        <Award className="w-5 md:w-6 h-5 md:h-6 text-purple-primary mr-2 md:mr-3" />
                                        <h4 className="text-lg md:text-xl font-semibold text-professional">
                                            Project: {selectedTestimonial.projectType}
                                        </h4>
                                    </div>
                                    <div className="relative">
                                        <Quote className="w-8 md:w-12 h-8 md:h-12 text-purple-primary/25 absolute -top-3 md:-top-4 -left-3 md:-left-4" />
                                        <p className="text-muted-professional leading-relaxed text-sm md:text-lg pl-6 md:pl-8 italic">
                                            {selectedTestimonial.fullTestimonial}
                                        </p>
                                    </div>
                                </div>

                                <div className="content-glass rounded-2xl p-4 md:p-6">
                                    <h4 className="text-lg md:text-xl font-semibold text-professional mb-4 md:mb-6 flex items-center">
                                        <div className="w-2 md:w-3 h-2 md:h-3 bg-purple-primary rounded-full mr-2 md:mr-4"></div>
                                        Key Results & Impact
                                    </h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                                        {selectedTestimonial.results.map((result, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center text-muted-professional result-glass rounded-xl p-2 md:p-4 hover:border-purple-primary/40 transition-all duration-300"
                                            >
                                                <div className="w-2 md:w-3 h-2 md:h-3 bg-purple-primary rounded-full mr-2 md:mr-4 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base">{result}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </DialogContent>
            </Dialog>

            <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-left {
          animation: scroll-left 60s linear infinite;
        }
        .pause-animation:hover {
          animation-play-state: paused;
        }
        
        /* Subtle glass effects */
        .subtle-glass {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .dark .subtle-glass {
          background: rgba(53, 27, 89, 0.1);
          border: 1px solid rgba(141, 105, 191, 0.15);
        }
        
        .enhanced-glass {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(141, 105, 191, 0.25);
          transform: translateY(-2px);
        }
        
        .dark .enhanced-glass {
          background: rgba(53, 27, 89, 0.15);
          border: 1px solid rgba(141, 105, 191, 0.3);
        }
        
        .modal-glass {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.15);
        }
        
        .dark .modal-glass {
          background: rgba(53, 27, 89, 0.15);
          border: 1px solid rgba(141, 105, 191, 0.2);
        }
        
        .content-glass {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        
        .dark .content-glass {
          background: rgba(53, 27, 89, 0.08);
          border: 1px solid rgba(141, 105, 191, 0.12);
        }
        
        .result-glass {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .dark .result-glass {
          background: rgba(53, 27, 89, 0.05);
          border: 1px solid rgba(141, 105, 191, 0.08);
        }
      `}</style>
        </section>
    )
}
