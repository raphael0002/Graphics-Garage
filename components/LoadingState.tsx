"use client"

import { motion } from "framer-motion"

export const LoadingState = () => {
    return (
        <div className="min-h-[200px] flex items-center justify-center">
            <motion.div
                className="w-8 h-8 border-2 border-purple-primary border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
        </div>
    )
}