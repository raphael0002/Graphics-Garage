"use client"

import { motion } from "framer-motion"
import {
    ArrowRight,
    TrendingUp,
    Users,
    Target,
    Zap,
    BarChart3,
    Smartphone,
    Monitor,
    MessageCircle,
    Heart,
    Star,
} from "lucide-react"

export const HeroSection = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative overflow-hidden section-light transition-colors duration-300"
        >
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6 md:space-y-8"
                    >
                        <motion.h1
                            className="text-5xl md:text-6xl lg:text-8xl font-bold text-professional leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            Create<span className="text-purple-primary">.</span>
                            <br />
                            Design<span className="text-purple-primary">.</span>
                            <br />
                            Build<span className="text-purple-primary">.</span>
                        </motion.h1>

                        <motion.p
                            className="text-lg md:text-xl text-muted-professional max-w-lg leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            We craft digital experiences that inspire, engage, and deliver exceptional results for forward-thinking
                            brands.
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            <button className="button-primary px-6 md:px-8 py-3 md:py-4 rounded-lg font-medium flex items-center gap-2 group">
                                View Our Work
                                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="button-secondary px-6 md:px-8 py-3 md:py-4 rounded-lg font-medium">
                                Get in Touch
                            </button>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        <div className="relative flex items-center justify-center min-h-[500px]">
                            {/* Floating Marketing Icons */}
                            <motion.div
                                className="absolute -top-8 -left-8 w-12 h-12 bg-gradient-to-br from-purple-primary/20 to-purple-dark/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-purple-primary/20"
                                animate={{
                                    y: [-10, 10, -10],
                                    rotate: [0, 5, 0],
                                }}
                                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                            >
                                <TrendingUp className="w-6 h-6 text-purple-primary" />
                            </motion.div>

                            <motion.div
                                className="absolute -top-4 right-16 w-10 h-10 bg-gradient-to-br from-purple-primary/20 to-purple-dark/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-purple-primary/20"
                                animate={{
                                    y: [10, -10, 10],
                                    scale: [1, 1.1, 1],
                                }}
                                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                            >
                                <Target className="w-5 h-5 text-purple-primary" />
                            </motion.div>

                            <motion.div
                                className="absolute top-8 -right-12 w-14 h-14 bg-gradient-to-br from-purple-primary/20 to-purple-dark/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-purple-primary/20"
                                animate={{
                                    y: [-5, 15, -5],
                                    rotate: [0, -5, 0],
                                }}
                                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                            >
                                <Users className="w-7 h-7 text-purple-primary" />
                            </motion.div>

                            <motion.div
                                className="absolute bottom-16 -left-12 w-11 h-11 bg-gradient-to-br from-purple-primary/20 to-purple-dark/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-purple-primary/20"
                                animate={{
                                    y: [5, -15, 5],
                                    rotate: [0, 10, 0],
                                }}
                                transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                            >
                                <Zap className="w-6 h-6 text-purple-primary" />
                            </motion.div>

                            <motion.div
                                className="absolute bottom-8 right-8 w-10 h-10 bg-gradient-to-br from-purple-primary/20 to-purple-dark/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-purple-primary/20"
                                animate={{
                                    y: [-8, 12, -8],
                                    scale: [1, 1.2, 1],
                                }}
                                transition={{ duration: 4.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                            >
                                <MessageCircle className="w-5 h-5 text-purple-primary" />
                            </motion.div>

                            {/* Main Digital Marketing Dashboard */}
                            <div className="relative">
                                {/* Main Monitor/Dashboard */}
                                <motion.div
                                    className="w-80 h-48 bg-gradient-to-br from-gray-dark/90 to-navy-dark/90 rounded-2xl relative shadow-2xl border border-purple-primary/20"
                                    animate={{
                                        boxShadow: [
                                            "0 25px 50px -12px rgba(141, 105, 191, 0.1)",
                                            "0 25px 50px -12px rgba(141, 105, 191, 0.3)",
                                            "0 25px 50px -12px rgba(141, 105, 191, 0.1)",
                                        ],
                                    }}
                                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                                >
                                    {/* Screen Content */}
                                    <div className="p-4 h-full">
                                        {/* Header Bar */}
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex space-x-2">
                                                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                                                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                                                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                                            </div>
                                            <div className="text-xs text-gray-light">Analytics Dashboard</div>
                                        </div>

                                        {/* Analytics Charts */}
                                        <div className="grid grid-cols-2 gap-3 h-full">
                                            {/* Growth Chart */}
                                            <div className="bg-purple-primary/10 rounded-lg p-2 relative overflow-hidden">
                                                <motion.div
                                                    className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-purple-primary/30 to-transparent"
                                                    animate={{ height: ["20%", "60%", "40%", "80%", "60%"] }}
                                                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                                                />
                                                <BarChart3 className="w-4 h-4 text-purple-primary mb-1" />
                                                <div className="text-xs text-gray-light">Growth</div>
                                            </div>

                                            {/* Engagement Metrics */}
                                            <div className="bg-purple-dark/20 rounded-lg p-2 relative">
                                                <div className="flex items-center justify-between mb-2">
                                                    <Heart className="w-4 h-4 text-purple-primary" />
                                                    <motion.div
                                                        className="text-xs text-purple-primary font-bold"
                                                        animate={{ scale: [1, 1.2, 1] }}
                                                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                                                    >
                                                        +24%
                                                    </motion.div>
                                                </div>
                                                <div className="text-xs text-gray-light">Engagement</div>
                                            </div>

                                            {/* Social Media Stats */}
                                            <div className="bg-purple-primary/10 rounded-lg p-2">
                                                <div className="flex items-center space-x-1 mb-1">
                                                    <Star className="w-3 h-3 text-yellow-400" />
                                                    <Star className="w-3 h-3 text-yellow-400" />
                                                    <Star className="w-3 h-3 text-yellow-400" />
                                                </div>
                                                <div className="text-xs text-gray-light">Reviews</div>
                                            </div>

                                            {/* Traffic Indicator */}
                                            <div className="bg-purple-dark/20 rounded-lg p-2 relative">
                                                <motion.div
                                                    className="w-full h-1 bg-purple-primary/20 rounded-full mb-2"
                                                    animate={{
                                                        background: [
                                                            "rgba(141, 105, 191, 0.2)",
                                                            "rgba(141, 105, 191, 0.6)",
                                                            "rgba(141, 105, 191, 0.2)",
                                                        ],
                                                    }}
                                                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                                                />
                                                <div className="text-xs text-gray-light">Traffic</div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Mobile Device */}
                                <motion.div
                                    className="absolute -bottom-8 -right-16 w-20 h-36 bg-gradient-to-br from-gray-dark/90 to-navy-dark/90 rounded-2xl shadow-xl border border-purple-primary/20"
                                    animate={{
                                        y: [0, -10, 0],
                                        rotate: [0, 2, 0],
                                    }}
                                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                                >
                                    <div className="p-2 h-full">
                                        <div className="w-full h-6 bg-purple-primary/20 rounded-lg mb-2 flex items-center justify-center">
                                            <Smartphone className="w-3 h-3 text-purple-primary" />
                                        </div>
                                        <div className="space-y-1">
                                            <motion.div
                                                className="w-full h-2 bg-purple-primary/30 rounded"
                                                animate={{ width: ["60%", "90%", "70%"] }}
                                                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                                            />
                                            <div className="w-3/4 h-2 bg-purple-dark/30 rounded" />
                                            <motion.div
                                                className="w-full h-2 bg-purple-primary/30 rounded"
                                                animate={{ width: ["40%", "80%", "60%"] }}
                                                transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
                                            />
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Tablet Device */}
                                <motion.div
                                    className="absolute -top-12 -left-20 w-32 h-24 bg-gradient-to-br from-gray-dark/90 to-navy-dark/90 rounded-xl shadow-xl border border-purple-primary/20"
                                    animate={{
                                        y: [0, 8, 0],
                                        rotate: [0, -3, 0],
                                    }}
                                    transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                                >
                                    <div className="p-2 h-full">
                                        <div className="flex items-center justify-between mb-2">
                                            <Monitor className="w-3 h-3 text-purple-primary" />
                                            <motion.div
                                                className="w-2 h-2 bg-green-400 rounded-full"
                                                animate={{ opacity: [0.5, 1, 0.5] }}
                                                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                                            />
                                        </div>
                                        <div className="grid grid-cols-3 gap-1">
                                            <motion.div
                                                className="h-3 bg-purple-primary/40 rounded"
                                                animate={{ height: ["8px", "16px", "12px"] }}
                                                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                                            />
                                            <motion.div
                                                className="h-3 bg-purple-dark/40 rounded"
                                                animate={{ height: ["12px", "8px", "16px"] }}
                                                transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
                                            />
                                            <motion.div
                                                className="h-3 bg-purple-primary/40 rounded"
                                                animate={{ height: ["10px", "14px", "8px"] }}
                                                transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY }}
                                            />
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Floating Data Points */}
                                <motion.div
                                    className="absolute top-20 left-12 w-8 h-8 bg-gradient-to-br from-green-400/20 to-green-500/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-green-400/30"
                                    animate={{
                                        y: [-5, 5, -5],
                                        opacity: [0.7, 1, 0.7],
                                    }}
                                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                                >
                                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                                </motion.div>

                                <motion.div
                                    className="absolute bottom-32 right-4 w-6 h-6 bg-gradient-to-br from-blue-400/20 to-blue-500/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-blue-400/30"
                                    animate={{
                                        y: [3, -3, 3],
                                        opacity: [0.6, 1, 0.6],
                                    }}
                                    transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
                                >
                                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    className="mt-16 md:mt-20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                >
                    <p className="text-muted-professional text-sm mb-6">Trusted by world-class companies</p>
                    <div className="flex items-center space-x-8 opacity-50">
                        <div className="flex items-center space-x-3">
                            <div className="w-4 h-4 bg-purple-primary" style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }} />
                            <span className="text-muted-professional text-sm">TechFlow</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="w-4 h-4 bg-purple-dark rounded-sm" />
                            <span className="text-muted-professional text-sm">CreativeStudio</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="w-4 h-4 bg-purple-primary rounded-full" />
                            <span className="text-muted-professional text-sm">MarketPro</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
