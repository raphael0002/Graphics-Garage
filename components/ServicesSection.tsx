"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { servicesData } from "@/data/services";
import { Icon } from "@/components/ui/icon";

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="services"
      className="py-12 md:py-20 section-light transition-colors duration-300"
    >
      {/* Services Container - Medium Layout (87vw) */}
      <div className="w-full max-w-[95vw] sm:max-w-[90vw] md:max-w-[87vw] lg:max-w-[85vw] xl:max-w-[82vw] 2xl:max-w-[78vw] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={
            isInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 50 }
          }
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
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
            Our Expertise
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-professional mb-4 md:mb-6">
            Services That Drive Success
            <span className="text-purple-primary">.</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-muted-professional max-w-4xl mx-auto">
            We combine strategic thinking with cutting-edge
            technology to deliver solutions that set you
            apart from the competition.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12">
          {servicesData.map((service, index) => {
            if (!service || !service.id) {
              console.warn(
                "Invalid service data:",
                service
              );
              return null;
            }

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 50 }
                }
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="group h-full"
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="block h-full"
                >
                  <div className="card-professional rounded-2xl p-4 sm:p-6 md:p-8 h-full hover:border-purple-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <div className="w-10 sm:w-12 h-10 sm:h-12 bg-purple-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-primary/20 transition-colors duration-300">
                          <Icon
                            name={service.iconName}
                            className="w-5 h-5 sm:w-6 sm:h-6 text-purple-primary"
                          />
                        </div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-professional mb-3 group-hover:text-purple-primary transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-sm md:text-base text-muted-professional leading-relaxed mb-6">
                          {service.shortDescription}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-baseline space-x-4 sm:space-x-6">
                        <div>
                          <div className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-primary">
                            {service.stats.number}
                          </div>
                          <div className="text-xs md:text-sm text-muted-professional">
                            {service.stats.label}
                          </div>
                        </div>
                        {service.stats.secondary && (
                          <div>
                            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-primary">
                              {service.stats.secondary}
                            </div>
                            <div className="text-xs md:text-sm text-muted-professional">
                              {service.stats.secondaryLabel}
                            </div>
                          </div>
                        )}
                      </div>

                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-purple-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={
            isInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <button
            onClick={scrollToContact}
            className="inline-flex items-center justify-center space-x-4 text-professional cursor-pointer hover:text-purple-primary transition-colors duration-300 group"
          >
            <span className="font-semibold text-xl sm:text-2xl md:text-3xl">
              Ready to get started?
            </span>
            <div className="flex items-center mt-2">
              <div className="w-10 sm:w-12 h-0.5 bg-purple-primary rounded-full group-hover:w-12 sm:group-hover:w-16 transition-all duration-300"></div>
              <div className="w-0 h-0 border-l-6 sm:border-l-8 border-l-purple-primary border-t-3 sm:border-t-4 border-t-transparent border-b-3 sm:border-b-4 border-b-transparent ml-1 group-hover:translate-x-1 transition-transform duration-300"></div>
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};
