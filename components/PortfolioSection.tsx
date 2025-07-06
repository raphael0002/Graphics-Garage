"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Calendar, User } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import Image from "next/image";

export const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });
  const [filter, setFilter] = useState("All");

  const categories = [
    "All",
    ...Array.from(
      new Set(portfolioData.map((item) => item.category))
    ),
  ];
  const filteredProjects =
    filter === "All"
      ? portfolioData
      : portfolioData.filter(
          (item) => item.category === filter
        );

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
          <h2 className="text-4xl md:text-5xl font-bold text-professional mb-8">
            Featured Projects
            <span className="text-purple-primary">.</span>
          </h2>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-xl font-medium transition-all duration-300 ${
                  filter === category
                    ? "bg-purple-primary text-white shadow-lg"
                    : "bg-background border border-border hover:border-purple-primary text-muted-foreground hover:text-purple-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
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
              className="card-professional rounded-2xl overflow-hidden hover:border-purple-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-purple-primary/0 group-hover:bg-purple-primary/20 transition-colors duration-300 flex items-center justify-center">
                  <ExternalLink className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-purple-primary/10 text-purple-primary text-xs rounded-full border border-purple-primary/20">
                    {project.category}
                  </span>
                  <div className="flex items-center text-muted-professional text-xs">
                    <Calendar className="w-3 h-3 mr-1" />
                    {project.year}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-professional mb-2 group-hover:text-purple-primary transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-muted-professional text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex items-center text-muted-professional text-sm mb-4">
                  <User className="w-4 h-4 mr-2" />
                  {project.client}
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-background border border-border text-muted-foreground text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="space-y-1">
                  {project.results
                    .slice(0, 2)
                    .map((result, resultIndex) => (
                      <div
                        key={resultIndex}
                        className="flex items-center text-xs text-muted-professional"
                      >
                        <div className="w-1.5 h-1.5 bg-purple-primary rounded-full mr-2 flex-shrink-0" />
                        {result}
                      </div>
                    ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
