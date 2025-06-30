"use client"

import { motion } from "framer-motion"
import { Check, Star } from "lucide-react"

interface PricingCardProps {
    package: {
        name: string
        price: string
        period: string
        description: string
        features: string[]
        popular: boolean
    }
}

export function PricingCard({ package: pkg }: PricingCardProps) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className={`relative card-professional rounded-2xl p-8 h-full ${pkg.popular ? "border-purple-primary ring-2 ring-purple-primary/20" : ""
                }`}
        >
            {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-purple-primary text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                        <Star className="w-4 h-4" />
                        Most Popular
                    </div>
                </div>
            )}

            <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-professional mb-2">{pkg.name}</h3>
                <p className="text-muted-professional mb-4">{pkg.description}</p>
                <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-purple-primary">{pkg.price}</span>
                    <span className="text-muted-professional ml-2">{pkg.period}</span>
                </div>
            </div>

            <div className="space-y-4 mb-8">
                {pkg.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-purple-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-purple-primary" />
                        </div>
                        <span className="text-muted-professional text-sm">{feature}</span>
                    </div>
                ))}
            </div>

            <button
                className={`w-full py-4 rounded-xl font-medium transition-all duration-300 ${pkg.popular
                        ? "bg-purple-primary text-white hover:bg-purple-dark"
                        : "border border-border hover:border-purple-primary text-professional hover:text-purple-primary"
                    }`}
            >
                Get Started
            </button>
        </motion.div>
    )
}
