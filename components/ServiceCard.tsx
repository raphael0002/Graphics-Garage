"use client";

import type React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface ServiceCardProps {
  service: {
    id: string;
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
    features: string[];
    startingPrice: string;
    image: string;
  };
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="card-professional rounded-2xl overflow-hidden hover:border-purple-primary transition-all duration-300 group h-full"
    >
      <div className="aspect-video relative overflow-hidden">
        <Image
          src={service.image || "/placeholder.svg"}
          alt={service.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
            <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
        </div>
      </div>
      <div className="p-4 sm:p-6 md:p-8">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-professional mb-2 sm:mb-3 group-hover:text-purple-primary transition-colors">
          {service.title}
        </h3>
        <p className="text-sm sm:text-base text-muted-professional mb-4 sm:mb-6 leading-relaxed">
          {service.description}
        </p>
        <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
          {service.features
            .slice(0, 3)
            .map((feature, index) => (
              <div
                key={index}
                className="flex items-center text-xs sm:text-sm text-muted-professional"
              >
                <div className="w-1.5 h-1.5 bg-purple-primary rounded-full mr-2 sm:mr-3 flex-shrink-0" />
                {feature}
              </div>
            ))}
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs sm:text-sm text-muted-professional">
              Starting at
            </span>
            <div className="text-lg sm:text-xl md:text-2xl font-bold text-purple-primary">
              {service.startingPrice}
            </div>
          </div>
          <Link href={`/services/${service.id}`}>
            <button className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-primary/10 hover:bg-purple-primary rounded-xl flex items-center justify-center group-hover:bg-purple-primary transition-all duration-300">
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-purple-primary group-hover:text-white transition-colors" />
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
