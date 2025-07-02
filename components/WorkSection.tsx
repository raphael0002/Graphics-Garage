"use client";

import { motion } from "framer-motion";
import { Eye } from "lucide-react";

export const WorkSection = () => {
  return (
    <section className="min-h-[60vh] flex items-center justify-center relative overflow-hidden section-light transition-colors duration-300 pt-0 md:pt-8 lg:pt-0">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-primary/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-dark/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 bg-purple-primary/10 border border-purple-primary/20 rounded-full text-purple-primary text-sm font-medium backdrop-blur-sm mb-6"
          >
            <Eye className="w-4 h-4 mr-2" />
            Our Portfolio
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-professional leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Our Creative
            <br />
            <span className="text-purple-primary">
              Works
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-professional max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Explore our portfolio of successful projects
            that showcase our expertise in creating
            exceptional digital experiences for businesses
            across various industries.
          </motion.p>
        </div>
      </div>
    </section>
  );
};
