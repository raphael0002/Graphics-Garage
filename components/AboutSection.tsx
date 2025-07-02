"use client";

import { motion } from "framer-motion";
import { Users, Target, Award, Zap } from "lucide-react";

export const AboutHeroSection = () => {
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
        <div className="text-center mt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 bg-purple-primary/10 border border-purple-primary/20 rounded-full text-purple-primary text-sm font-medium backdrop-blur-sm mb-6"
          >
            <Users className="w-4 h-4 mr-2" />
            About Graphics Garage
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-professional leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            We Are Digital
            <br />
            <span className="text-purple-primary">
              Innovators
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-professional max-w-3xl mx-auto leading-relaxed mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Founded with a passion for digital excellence,
            Graphics Garage has been transforming businesses
            through innovative design and technology
            solutions. We believe in the power of creativity
            combined with strategic thinking to deliver
            results that matter.
          </motion.p>

          {/* Mission Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="card-professional rounded-2xl p-6 md:p-8 text-center hover:border-purple-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 bg-purple-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-purple-primary" />
              </div>
              <h3 className="text-xl font-bold text-professional mb-3">
                Our Mission
              </h3>
              <p className="text-muted-professional leading-relaxed">
                To empower businesses with cutting-edge
                digital solutions that drive growth and
                create lasting impact.
              </p>
            </div>

            <div className="card-professional rounded-2xl p-6 md:p-8 text-center hover:border-purple-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 bg-purple-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-purple-primary" />
              </div>
              <h3 className="text-xl font-bold text-professional mb-3">
                Our Vision
              </h3>
              <p className="text-muted-professional leading-relaxed">
                To be the leading digital agency that
                transforms ideas into extraordinary digital
                experiences.
              </p>
            </div>

            <div className="card-professional rounded-2xl p-6 md:p-8 text-center hover:border-purple-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 bg-purple-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-primary" />
              </div>
              <h3 className="text-xl font-bold text-professional mb-3">
                Our Values
              </h3>
              <p className="text-muted-professional leading-relaxed">
                Innovation, integrity, and excellence in
                everything we do, with a focus on client
                success.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
