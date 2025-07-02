"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import type { Service } from "@/data/services";
import { Icon } from "@/components/ui/icon";

interface ServiceHeroSectionProps {
  service: Service;
}

export const ServiceSection = ({
  service,
}: ServiceHeroSectionProps) => {
  const scrollToPackages = () => {
    const element = document.getElementById("packages");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!service) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-professional mb-4">
            Service Not Found
          </h1>
          <p className="text-muted-professional">
            The requested service could not be found.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden section-light transition-colors duration-300 pt-0 md:pt-8 lg:pt-0">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-primary/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-dark/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center mt-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 md:space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center px-4 py-2 bg-purple-primary/10 border border-purple-primary/20 rounded-full text-purple-primary text-sm font-medium backdrop-blur-sm"
            >
              <Icon
                name={service.iconName}
                className="w-4 h-4 mr-2"
              />
              {service.title}
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-professional leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Professional
              <br />
              <span className="text-purple-primary">
                {service.title}
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-muted-professional leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {service.fullDescription}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button
                onClick={scrollToPackages}
                className="button-primary px-6 md:px-8 py-3 md:py-4 rounded-xl font-medium flex items-center justify-center gap-2 group shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Packages
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                onClick={scrollToContact}
                className="button-secondary px-6 md:px-8 py-3 md:py-4 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Quote
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex items-center space-x-8 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <div>
                <div className="text-2xl md:text-3xl font-bold text-purple-primary">
                  {service.stats.number}
                </div>
                <div className="text-sm text-muted-professional">
                  {service.stats.label}
                </div>
              </div>
              {service.stats.secondary && (
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-purple-primary">
                    {service.stats.secondary}
                  </div>
                  <div className="text-sm text-muted-professional">
                    {service.stats.secondaryLabel}
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Benefits */}
            <div className="card-professional rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-professional mb-6">
                Key Benefits
              </h3>
              <div className="space-y-4">
                {service.benefits?.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.6 + index * 0.1,
                    }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-purple-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-professional">
                      {benefit}
                    </span>
                  </motion.div>
                )) || []}
              </div>
            </div>

            {/* Technologies */}
            <div className="card-professional rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-professional mb-6">
                Technologies We Use
              </h3>
              <div className="flex flex-wrap gap-2">
                {service.technologies?.map(
                  (tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: 0.8 + index * 0.05,
                      }}
                      className="px-3 py-1 bg-purple-primary/10 text-purple-primary text-sm rounded-full border border-purple-primary/20"
                    >
                      {tech}
                    </motion.span>
                  )
                ) || []}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
