"use client"

import { motion } from "framer-motion"

export default function Loading() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background">
            <motion.div
                className="flex flex-col items-center space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="relative">
                    <div className="w-16 h-16 border-4 border-purple-primary/20 rounded-full"></div>
                    <motion.div
                        className="absolute top-0 left-0 w-16 h-16 border-4 border-purple-primary border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    ></motion.div>
                </div>
                <motion.p
                    className="text-muted-professional font-medium"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                >
                    Loading...
                </motion.p>
            </motion.div>
        </div>
    )
}
