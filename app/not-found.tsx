'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center p-8 max-w-md mx-auto"
            >
                <h1 className="text-6xl md:text-8xl font-bold text-professional dark:text-white mb-4">
                    404
                    <span className="text-purple-primary">.</span>
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-professional dark:text-white mb-4">
                    Page Not Found
                </h2>
                <p className="text-lg text-muted-professional dark:text-gray-300 mb-8">
                    {`Oops! The page you're looking for doesn't exist or has been moved.`}
                </p>
                <Link
                    href="/"
                    className="inline-flex items-center px-6 py-3 bg-purple-primary text-white rounded-xl font-medium transition-all duration-300 hover:bg-purple-700"
                >
                    Return to Home
                </Link>
            </motion.div>
        </div>
    )
}