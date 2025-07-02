"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  MapPin,
  Calendar,
  Award,
  Quote,
  X,
} from "lucide-react";
import { testimonialsData } from "@/data/testimonials";

export const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });
  const [selectedTestimonial, setSelectedTestimonial] =
    useState<(typeof testimonialsData)[0] | null>(null);

  const handleTestimonialClick = (
    testimonial: (typeof testimonialsData)[0]
  ) => {
    setSelectedTestimonial(testimonial);
  };

  const closeModal = () => {
    setSelectedTestimonial(null);
  };

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [
    ...testimonialsData,
    ...testimonialsData,
  ];

  return (
    <section
      id="testimonials"
      className="py-16 md:py-20 section-light relative overflow-hidden transition-colors duration-300"
    >
      {/* Testimonials Container - Medium Layout (87vw) */}
      <div className="w-full max-w-[95vw] sm:max-w-[92vw] md:max-w-[90vw] lg:max-w-[88vw] xl:max-w-[85vw] 2xl:max-w-[80vw] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={
            isInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 50 }
          }
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-3 sm:px-4 py-2 bg-purple-primary/10 border border-purple-primary/20 rounded-full text-purple-primary text-xs sm:text-sm font-medium backdrop-blur-sm mb-6"
          >
            Client Success Stories
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-professional mb-4 md:mb-6">
            More than 1k+ happy customers
            <span className="text-purple-primary">.</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-muted-professional max-w-4xl mx-auto">
            We combine strategic thinking with cutting-edge
            technology to deliver solutions that set you
            apart from the competition.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={
            isInView ? { opacity: 1 } : { opacity: 0 }
          }
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          {/* Enhanced fading masks */}
          <div className="absolute left-0 top-0 w-16 sm:w-24 md:w-32 lg:w-40 h-full bg-gradient-to-r from-background via-background/70 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 w-16 sm:w-24 md:w-32 lg:w-40 h-full bg-gradient-to-l from-background via-background/70 to-transparent z-20 pointer-events-none" />

          {/* Scrolling container */}
          <div className="overflow-hidden">
            <div className="flex animate-scroll-left hover:pause-animation">
              {duplicatedTestimonials.map(
                (testimonial, index) => (
                  <Card
                    key={`${testimonial.name}-${index}`}
                    className="flex-shrink-0 w-72 sm:w-80 md:w-96 mx-2 sm:mx-3 md:mx-4 glass-purple hover:enhanced-glass transition-all duration-300 cursor-pointer group shadow-lg hover:shadow-xl"
                    onClick={() =>
                      handleTestimonialClick(testimonial)
                    }
                  >
                    <CardContent className="p-4 sm:p-6 md:p-8">
                      <div className="flex items-center mb-6">
                        <div className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 bg-gradient-to-br from-purple-primary/20 to-purple-dark/10 rounded-full flex items-center justify-center mr-3 sm:mr-4 ring-1 ring-purple-primary/20 backdrop-blur-sm">
                          <span className="text-professional font-semibold text-xs sm:text-sm md:text-base">
                            {testimonial.avatar}
                          </span>
                        </div>

                        <div className="flex-1">
                          <h4 className="text-professional font-semibold text-sm sm:text-base">
                            {testimonial.name}
                          </h4>
                          <p className="text-muted-professional text-xs sm:text-sm">
                            {testimonial.title}
                          </p>
                          <p className="text-muted-professional text-xs sm:text-sm opacity-75">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center mb-4">
                        {[...Array(testimonial.rating)].map(
                          (_, i) => (
                            <Star
                              key={i}
                              className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current mr-1"
                            />
                          )
                        )}
                      </div>

                      <div className="relative mb-6">
                        <Quote className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 text-purple-primary/25 absolute -top-1.5 sm:-top-2 md:-top-3 -left-1 md:-left-2" />
                        <p className="text-muted-professional text-xs sm:text-sm leading-relaxed pl-3 sm:pl-4 md:pl-6 min-h-[3rem] sm:min-h-[4rem]">
                          {testimonial.quote}
                        </p>
                      </div>

                      <Badge
                        variant="secondary"
                        className="bg-purple-primary/15 text-purple-primary hover:bg-purple-primary/25 text-xs px-2 sm:px-3 py-1 border border-purple-primary/20"
                      >
                        {testimonial.category}
                      </Badge>
                    </CardContent>
                  </Card>
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Improved Mobile-Friendly Modal */}
      <Dialog
        open={!!selectedTestimonial}
        onOpenChange={closeModal}
      >
        <DialogContent className="modal-glass text-professional w-[95vw] max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl p-0 gap-0">
          {selectedTestimonial && (
            <>
              <DialogHeader className="border-b border-border/50 p-3 sm:p-4 md:p-6 sticky top-0 bg-background/80 backdrop-blur-sm z-10">
                <div className="flex items-center justify-between">
                  <DialogTitle className="text-lg sm:text-xl md:text-2xl font-bold text-professional flex items-center">
                    <Quote className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-purple-primary/60 mr-2" />
                    Client Testimonial
                  </DialogTitle>
                  <button
                    onClick={closeModal}
                    className="p-2 hover:bg-background/50 rounded-lg transition-colors"
                  >
                    <X className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              </DialogHeader>

              <div className="space-y-3 sm:space-y-4 md:space-y-6 p-3 sm:p-4 md:p-6">
                <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
                  <div className="w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 bg-gradient-to-br from-purple-primary/25 to-purple-dark/15 rounded-full flex items-center justify-center ring-2 ring-purple-primary/30 backdrop-blur-sm shadow-lg flex-shrink-0">
                    <span className="text-professional font-semibold text-xs sm:text-sm md:text-lg">
                      {selectedTestimonial.avatar}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-professional mb-1">
                      {selectedTestimonial.name}
                    </h3>
                    <p className="text-muted-professional text-xs sm:text-sm md:text-base mb-1">
                      {selectedTestimonial.title}
                    </p>
                    <p className="text-muted-professional text-xs md:text-sm mb-3 opacity-75">
                      {selectedTestimonial.company}
                    </p>

                    <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-muted-professional">
                      <div className="flex items-center bg-purple-primary/15 backdrop-blur-sm rounded-full px-2 py-1 border border-purple-primary/20">
                        <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1" />
                        {selectedTestimonial.location}
                      </div>
                      <div className="flex items-center bg-purple-primary/15 backdrop-blur-sm rounded-full px-2 py-1 border border-purple-primary/20">
                        <Calendar className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1" />
                        {selectedTestimonial.date}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-end">
                    <div className="flex items-center mb-2">
                      {[
                        ...Array(
                          selectedTestimonial.rating
                        ),
                      ].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current mr-1"
                        />
                      ))}
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-purple-primary/20 text-purple-primary hover:bg-purple-primary/30 text-xs px-2 sm:px-3 py-1 border border-purple-primary/25"
                    >
                      {selectedTestimonial.category}
                    </Badge>
                  </div>
                </div>

                <div className="content-glass rounded-2xl p-3 sm:p-4 md:p-6">
                  <div className="flex items-center mb-4">
                    <Award className="w-4 h-4 sm:w-5 sm:h-5 text-purple-primary mr-2" />
                    <h4 className="text-sm sm:text-base md:text-lg font-semibold text-professional">
                      Project:{" "}
                      {selectedTestimonial.projectType}
                    </h4>
                  </div>

                  <div className="relative">
                    <Quote className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 text-purple-primary/25 absolute -top-1.5 sm:-top-2 -left-1.5 sm:-left-2" />
                    <p className="text-muted-professional leading-relaxed text-xs sm:text-sm md:text-base pl-3 sm:pl-4 md:pl-6 italic">
                      {selectedTestimonial.fullTestimonial}
                    </p>
                  </div>
                </div>

                <div className="content-glass rounded-2xl p-3 sm:p-4 md:p-6">
                  <h4 className="text-sm sm:text-base md:text-lg font-semibold text-professional mb-4 flex items-center">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-primary rounded-full mr-3"></div>
                    Key Results & Impact
                  </h4>

                  <div className="grid grid-cols-1 gap-2 md:gap-3">
                    {selectedTestimonial.results.map(
                      (result, index) => (
                        <div
                          key={index}
                          className="flex items-start text-muted-professional result-glass rounded-xl p-2 sm:p-3 hover:border-purple-primary/40 transition-all duration-300"
                        >
                          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-purple-primary rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0"></div>
                          <span className="text-xs sm:text-sm md:text-base">
                            {result}
                          </span>
                        </div>
                      )
                    )}
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
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .dark .modal-glass {
          background: rgba(53, 27, 89, 0.95);
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
  );
};
