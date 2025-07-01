"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  TrendingUp,
  Users,
  Award,
  Clock,
} from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    number: "200+",
    label: "Projects Completed",
    description:
      "Successfully delivered projects across various industries",
  },
  {
    icon: Users,
    number: "50+",
    label: "Happy Clients",
    description:
      "Satisfied clients who trust us with their digital needs",
  },
  {
    icon: Award,
    number: "15+",
    label: "Awards Won",
    description:
      "Recognition for excellence in design and innovation",
  },
  {
    icon: Clock,
    number: "5+",
    label: "Years Experience",
    description:
      "Years of expertise in digital solutions and design",
  },
];

export const CompanyStatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section className="py-16 md:py-20 section-light transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
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
          <h2 className="text-4xl md:text-5xl font-bold text-professional mb-4">
            Our Impact in Numbers
            <span className="text-purple-primary">.</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-professional max-w-3xl mx-auto">
            These numbers represent our commitment to
            delivering exceptional results and building
            lasting relationships with our clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
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
              className="card-professional rounded-2xl p-6 md:p-8 text-center hover:border-purple-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-purple-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-purple-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-purple-primary mb-2">
                {stat.number}
              </div>
              <h3 className="text-lg font-semibold text-professional mb-2">
                {stat.label}
              </h3>
              <p className="text-sm text-muted-professional leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
