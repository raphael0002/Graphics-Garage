"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Star } from "lucide-react";
import type { ServicePackage } from "@/data/services";

interface ServicePackagesSectionProps {
  packages: ServicePackage[];
}

export const ServicePackagesSection = ({
  packages,
}: ServicePackagesSectionProps) => {
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
      id="packages"
      className="py-16 md:py-20 section-light transition-colors duration-300"
    >
      {/* Packages Container - Wide Layout with consistent spacing */}
      <div className="w-full max-w-[min(90vw,85rem)] mx-auto px-4 sm:px-6 lg:px-8">
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
            Service Packages
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-professional mb-4 md:mb-6">
            Choose Your Perfect Package
            <span className="text-purple-primary">.</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-professional max-w-4xl mx-auto leading-relaxed">
            Select the package that best fits your needs and
            budget. All packages include our commitment to
            quality and excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 30 }
              }
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className={`relative flex flex-col justify-between card-professional rounded-2xl p-4 sm:p-6 md:p-8 hover:shadow-xl transition-all duration-300 ${
                pkg.popular
                  ? "border-2 border-purple-primary shadow-lg scale-105"
                  : "hover:border-purple-primary hover:-translate-y-1"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-purple-primary text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-medium flex items-center gap-1">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-professional mb-2">
                  {pkg.name}
                </h3>
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-primary">
                    {pkg.price}
                  </span>
                  <span className="text-sm sm:text-base text-muted-professional ml-2">
                    /{pkg.duration}
                  </span>
                </div>
              </div>

              <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 flex-1">
                {pkg.features.map(
                  (feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-start space-x-2 sm:space-x-3"
                    >
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-purple-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-professional text-xs sm:text-sm leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  )
                )}
              </div>

              <motion.button
                onClick={scrollToContact}
                className={`w-full py-3 md:py-4 rounded-xl font-medium transition-all duration-300 text-sm sm:text-base ${
                  pkg.popular
                    ? "button-primary text-white shadow-lg hover:shadow-xl"
                    : "button-secondary hover:border-purple-primary hover:text-purple-primary"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
