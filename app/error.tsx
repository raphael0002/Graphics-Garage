"use client"

import { motion } from "framer-motion"
import { RefreshCw, Home } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-8"
                >
                    <h1 className="text-6xl md:text-8xl font-bold text-red-500 mb-4">Error</h1>
                    <h2 className="text-2xl md:text-3xl font-bold text-professional mb-4">Something went wrong!</h2>
                    <p className="text-lg text-muted-professional max-w-md mx-auto">
                        We encountered an unexpected error. Please try again or contact support if the problem persists.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <motion.button
                        onClick={reset}
                        className="button-primary px-6 py-3 rounded-xl font-medium flex items-center gap-2 group"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <RefreshCw className="w-4 h-4" />
                        Try Again
                    </motion.button>
                    <Link href="/">
                        <motion.button
                            className="button-secondary px-6 py-3 rounded-xl font-medium flex items-center gap-2 group"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Home className="w-4 h-4" />
                            Go Home
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </div>
    )
}
