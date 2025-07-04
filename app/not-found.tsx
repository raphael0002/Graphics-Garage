"use client"

import { motion } from "framer-motion"
import { Home, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-8"
                >
                    <h1 className="text-6xl md:text-8xl font-bold text-purple-primary mb-4">404</h1>
                    <h2 className="text-2xl md:text-3xl font-bold text-professional mb-4">Page Not Found</h2>
                    <p className="text-lg text-muted-professional max-w-md mx-auto">
                        {`Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.`}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Link href="/">
                        <motion.button
                            className="button-primary px-6 py-3 rounded-xl font-medium flex items-center gap-2 group"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Home className="w-4 h-4" />
                            Go Home
                        </motion.button>
                    </Link>
                    <motion.button
                        onClick={() => window.history.back()}
                        className="button-secondary px-6 py-3 rounded-xl font-medium flex items-center gap-2 group"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Go Back
                    </motion.button>
                </motion.div>
            </div>
        </div>
    )
}
