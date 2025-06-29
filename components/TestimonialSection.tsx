'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Calendar, Award, Quote } from 'lucide-react';

const testimonials = [
    {
        quote:
            'Graphics Garage transformed our digital presence with their innovative design approach. Our website traffic increased by 300% within the first month.',
        name: 'Sarah Johnson',
        title: 'Digital Strategy Lead',
        company: 'TechFlow Inc',
        avatar: 'SJ',
        category: 'Digital Strategy',
        rating: 5,
        location: 'San Francisco, CA',
        date: 'March 2024',
        projectType: 'Website Redesign & Digital Strategy',
        fullTestimonial:
            'Working with Graphics Garage was an absolute game-changer for our company. Their team didn\'t just deliver a beautiful website - they completely transformed how we think about our digital presence. The strategic approach they took to understanding our business goals and translating them into a cohesive digital experience was remarkable. Our website traffic increased by 300% within the first month, and our conversion rates have doubled. The attention to detail and the innovative design solutions they provided exceeded all our expectations.',
        results: [
            '300% increase in website traffic',
            '2x conversion rate improvement',
            '50% reduction in bounce rate',
            '40% increase in lead generation',
        ],
    },
    // ... (other testimonials remain unchanged for brevity)
    {
        quote: 'Outstanding web development services that delivered exactly what we needed for our e-commerce platform.',
        name: 'Robert Kim',
        title: 'CTO',
        company: 'ShopTech',
        avatar: 'RK',
        category: 'E-commerce',
        rating: 5,
        location: 'Seattle, WA',
        date: 'October 2023',
        projectType: 'E-commerce Platform Development',
        fullTestimonial:
            'The e-commerce platform built by Graphics Garage has revolutionized our online business. The custom features they developed specifically for our needs have given us a significant competitive advantage. The platform handles high traffic volumes seamlessly and the admin interface is incredibly user-friendly.',
        results: [
            '250% increase in online sales',
            '99.8% platform uptime',
            '45% faster checkout process',
            '30% reduction in cart abandonment',
        ],
    },
];

export const TestimonialsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [selectedTestimonial, setSelectedTestimonial] = useState<(typeof testimonials)[0] | null>(null);

    const handleTestimonialClick = (testimonial: (typeof testimonials)[0]) => {
        setSelectedTestimonial(testimonial);
    };

    const closeModal = () => {
        setSelectedTestimonial(null);
    };

    // Duplicate testimonials for seamless loop
    const duplicatedTestimonials = [...testimonials, ...testimonials];

    return (
        <section id="testimonials" className="py-16 md:py-20 bg-black relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 md:mb-20"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
                        More than 1k+ happy customers<span className="text-red-400">.</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto">
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
                    {/* Gradient masks for smooth edges */}
                    <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

                    {/* Scrolling container */}
                    <div className="overflow-hidden">
                        <div className="flex animate-scroll-left hover:pause-animation">
                            {duplicatedTestimonials.map((testimonial, index) => (
                                <Card
                                    key={`${testimonial.name}-${index}`}
                                    className="flex-shrink-0 w-96 mx-4 bg-gray-900/30 backdrop-blur-sm border-gray-700/50 hover:border-gray-600/70 transition-all duration-300 cursor-pointer hover:bg-gray-900/50 hover:shadow-xl hover:shadow-red-400/5"
                                    onClick={() => handleTestimonialClick(testimonial)}
                                >
                                    <CardContent className="p-8">
                                        <div className="flex items-center mb-6">
                                            <div className="w-14 h-14 bg-gradient-to-br from-red-500/20 to-red-600/10 rounded-full flex items-center justify-center mr-4 ring-2 ring-red-400/20">
                                                <span className="text-white font-semibold text-base">{testimonial.avatar}</span>
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="text-white font-semibold text-base">{testimonial.name}</h4>
                                                <p className="text-gray-400 text-sm">{testimonial.title}</p>
                                                <p className="text-gray-500 text-sm">{testimonial.company}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center mb-4">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                                            ))}
                                        </div>

                                        <div className="relative mb-6">
                                            <Quote className="w-8 h-8 text-red-400/20 absolute -top-3 -left-2" />
                                            <p className="text-gray-300 text-sm leading-relaxed pl-6 min-h-[4rem]">{testimonial.quote}</p>
                                        </div>

                                        <Badge
                                            variant="secondary"
                                            className="bg-red-400/10 text-red-400 hover:bg-red-400/20 text-xs px-3 py-1"
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
                <DialogContent className="bg-gray-900/20 backdrop-blur-xl border border-gray-700/30 text-white w-full max-w-full md:max-w-[95vw] lg:max-w-[90vw] xl:max-w-[85vw] h-[90vh] overflow-y-auto shadow-2xl shadow-black/50 p-4 md:p-6">
                    {selectedTestimonial && (
                        <>
                            <DialogHeader className="border-b border-gray-700/30 pb-4 md:pb-6">
                                <DialogTitle className="text-2xl md:text-3xl font-bold text-white flex items-center">
                                    <Quote className="w-6 md:w-8 h-6 md:h-8 text-red-400/60 mr-2 md:mr-3" />
                                    Client Testimonial
                                </DialogTitle>
                            </DialogHeader>

                            <div className="space-y-6 pt-4 md:pt-6">
                                <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
                                    <div className="w-16 md:w-20 h-16 md:h-20 bg-gradient-to-br from-red-500/20 to-red-600/10 rounded-full flex items-center justify-center ring-2 ring-red-400/30 backdrop-blur-sm">
                                        <span className="text-white font-semibold text-lg md:text-xl">{selectedTestimonial.avatar}</span>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 md:mb-2">{selectedTestimonial.name}</h3>
                                        <p className="text-gray-300 text-base md:text-lg mb-1 md:mb-2">{selectedTestimonial.title}</p>
                                        <p className="text-gray-400 text-sm md:text-base mb-2 md:mb-4">{selectedTestimonial.company}</p>
                                        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 text-sm md:text-base text-gray-400">
                                            <div className="flex items-center bg-gray-800/30 backdrop-blur-sm rounded-full px-2 md:px-3 py-1">
                                                <MapPin className="w-3 md:w-4 h-3 md:h-4 mr-1 md:mr-2" />
                                                {selectedTestimonial.location}
                                            </div>
                                            <div className="flex items-center bg-gray-800/30 backdrop-blur-sm rounded-full px-2 md:px-3 py-1">
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
                                            className="bg-red-400/20 text-red-400 hover:bg-red-400/30 text-sm md:text-base px-3 md:px-4 py-1 md:py-2 backdrop-blur-sm"
                                        >
                                            {selectedTestimonial.category}
                                        </Badge>
                                    </div>
                                </div>

                                <div className="bg-gray-800/20 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-gray-700/30">
                                    <div className="flex items-center mb-4 md:mb-6">
                                        <Award className="w-5 md:w-6 h-5 md:h-6 text-red-400 mr-2 md:mr-3" />
                                        <h4 className="text-lg md:text-xl font-semibold text-white">Project: {selectedTestimonial.projectType}</h4>
                                    </div>
                                    <div className="relative">
                                        <Quote className="w-8 md:w-12 h-8 md:h-12 text-red-400/20 absolute -top-3 md:-top-4 -left-3 md:-left-4" />
                                        <p className="text-gray-200 leading-relaxed text-sm md:text-lg pl-6 md:pl-8 italic">
                                            {selectedTestimonial.fullTestimonial}
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-gray-800/20 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-gray-700/30">
                                    <h4 className="text-lg md:text-xl font-semibold text-white mb-4 md:mb-6 flex items-center">
                                        <div className="w-2 md:w-3 h-2 md:h-3 bg-red-400 rounded-full mr-2 md:mr-4"></div>
                                        Key Results & Impact
                                    </h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                                        {selectedTestimonial.results.map((result, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center text-gray-200 bg-gray-700/20 backdrop-blur-sm rounded-xl p-2 md:p-4 border border-gray-600/20 hover:border-gray-500/30 transition-colors"
                                            >
                                                <div className="w-2 md:w-3 h-2 md:h-3 bg-red-400 rounded-full mr-2 md:mr-4 flex-shrink-0"></div>
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
          animation: scroll-left 80s linear infinite;
        }

        .pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
        </section>
    );
};