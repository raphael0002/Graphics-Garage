"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Lightbulb,
  Heart,
  Shield,
  Rocket,
} from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We constantly push boundaries and explore new technologies to deliver cutting-edge solutions that keep our clients ahead of the curve.",
  },
  {
    icon: Heart,
    title: "Passion",
    description:
      "We love what we do, and it shows in every project. Our passion for design and technology drives us to create exceptional experiences.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We believe in honest communication, transparent processes, and delivering on our promises. Trust is the foundation of our relationships.",
  },
  {
    icon: Rocket,
    title: "Excellence",
    description:
      "We strive for perfection in every detail, from initial concept to final delivery. Excellence is not just a goal, it's our standard.",
  },
];

export const ValuesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section className="py-16 md:py-20 section-light transition-colors duration-300">
      <div className="w-full max-w-[min(90vw,85rem)] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            className="inline-flex items-center px-4 py-2 bg-purple-primary/10 border border-purple-primary/20 rounded-full text-purple-primary text-sm font-medium backdrop-blur-sm mb-6"
          >
            Our Core Values
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-professional mb-4">
            What Drives Us Forward
            <span className="text-purple-primary">.</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-professional max-w-3xl mx-auto">
            Our values are the compass that guides every
            decision we make and every solution we create
            for our clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 30 }
              }
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              className="flex items-start space-x-4 md:space-x-6"
            >
              <div className="w-16 h-16 bg-purple-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                <value.icon className="w-8 h-8 text-purple-primary" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-professional mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-professional leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
