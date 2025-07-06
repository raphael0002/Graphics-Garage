"use client";

import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

interface PricingCardProps {
  package: {
    name: string;
    price: string;
    period: string;
    description: string;
    features: string[];
    popular: boolean;
  };
}

export function PricingCard({
  package: pkg,
}: PricingCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className={`relative card-professional rounded-2xl p-4 sm:p-6 md:p-8 h-full ${
        pkg.popular
          ? "border-purple-primary ring-2 ring-purple-primary/20"
          : ""
      }`}
    >
      {pkg.popular && (
        <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-purple-primary text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium flex items-center gap-1 sm:gap-2">
            <Star className="w-3 h-3 sm:w-4 sm:h-4" />
            Most Popular
          </div>
        </div>
      )}

      <div className="text-center mb-6 sm:mb-8">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-professional mb-2">
          {pkg.name}
        </h3>
        <p className="text-sm sm:text-base text-muted-professional mb-3 sm:mb-4 leading-relaxed">
          {pkg.description}
        </p>
        <div className="flex items-baseline justify-center">
          <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-primary">
            {pkg.price}
          </span>
          <span className="text-sm sm:text-base text-muted-professional ml-2">
            {pkg.period}
          </span>
        </div>
      </div>

      <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-1">
        {pkg.features.map((feature, index) => (
          <div
            key={index}
            className="flex items-start gap-2 sm:gap-3"
          >
            <div className="w-4 h-4 sm:w-5 sm:h-5 bg-purple-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-purple-primary" />
            </div>
            <span className="text-muted-professional text-xs sm:text-sm leading-relaxed">
              {feature}
            </span>
          </div>
        ))}
      </div>

      <button
        className={`w-full py-3 sm:py-4 rounded-xl font-medium transition-all duration-300 text-sm sm:text-base ${
          pkg.popular
            ? "bg-purple-primary text-white hover:bg-purple-dark"
            : "border border-border hover:border-purple-primary text-professional hover:text-purple-primary"
        }`}
      >
        Get Started
      </button>
    </motion.div>
  );
}
