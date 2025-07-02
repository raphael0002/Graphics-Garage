"use client";

import { motion } from "framer-motion";
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
  Play,
} from "lucide-react";
import Link from "next/link";

export const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden section-light transition-colors duration-300 pt-0 md:pt-8 lg:pt-0"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-primary/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-dark/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Hero Container - Wide Layout (90vw) */}
      <div className="w-full max-w-[95vw] sm:max-w-[92vw] md:max-w-[90vw] lg:max-w-[88vw] xl:max-w-[85vw] 2xl:max-w-[80vw] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 xl:gap-16 items-center justify-center mt-16 sm:mt-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 md:space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center px-3 sm:px-4 py-2 bg-purple-primary/10 border border-purple-primary/20 rounded-full text-purple-primary text-xs sm:text-sm font-medium backdrop-blur-sm"
            >
              <Zap className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              Digital Solutions That Drive Results
            </motion.div>

            <motion.h1
              className="flex flex-col gap-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-professional leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.span
                className="dark:text-purple-50 text-purple-primary"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                CREATE
              </motion.span>
              <motion.span
                className="dark:text-purple-50 text-purple-primary"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                DESIGN
              </motion.span>
              <motion.span
                className="dark:text-purple-50 text-purple-primary"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                BUILD
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-xl text-muted-professional max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              We craft digital experiences that inspire,
              engage, and deliver exceptional results for
              forward-thinking brands.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link href="/works">
                <motion.button
                  className="button-primary w-full sm:w-auto px-5 sm:px-6 md:px-8 py-3 md:py-4 rounded-xl font-medium flex items-center justify-center gap-2 group shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Play className="w-4 h-4 md:w-5 md:h-5" />
                  View Our Work
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>

              <motion.button
                onClick={scrollToContact}
                className="button-secondary px-5 sm:px-6 md:px-8 py-3 md:py-4 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get in Touch
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-primary">
                  200+
                </div>
                <div className="text-xs sm:text-sm text-muted-professional">
                  Projects Completed
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-primary">
                  50+
                </div>
                <div className="text-xs sm:text-sm text-muted-professional">
                  Happy Clients
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-primary">
                  5+
                </div>
                <div className="text-xs sm:text-sm text-muted-professional">
                  Years Experience
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side animation - keeping the same animated dashboard */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="relative flex items-center justify-center min-h-[400px] sm:min-h-[500px]">
              {/* Floating Marketing Icons */}
              <motion.div
                className="absolute -top-6 sm:-top-8 -left-6 sm:-left-8 w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-purple-primary/20 to-purple-dark/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-purple-primary/20 shadow-lg"
                animate={{
                  y: [-10, 10, -10],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-purple-primary" />
              </motion.div>

              <motion.div
                className="absolute -top-3 sm:-top-4 right-12 sm:right-16 w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-br from-purple-primary/20 to-purple-dark/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-purple-primary/20 shadow-lg"
                animate={{
                  y: [10, -10, 10],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <Target className="w-4 h-4 sm:w-5 sm:h-5 text-purple-primary" />
              </motion.div>

              <motion.div
                className="absolute top-6 sm:top-8 -right-8 sm:-right-12 w-12 sm:w-14 h-12 sm:h-14 bg-gradient-to-br from-purple-primary/20 to-purple-dark/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-purple-primary/20 shadow-lg"
                animate={{
                  y: [-5, 15, -5],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <Users className="w-6 h-6 sm:w-7 sm:h-7 text-purple-primary" />
              </motion.div>

              <motion.div
                className="absolute bottom-12 sm:bottom-16 -left-8 sm:-left-12 w-9 sm:w-11 h-9 sm:h-11 bg-gradient-to-br from-purple-primary/20 to-purple-dark/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-purple-primary/20 shadow-lg"
                animate={{
                  y: [5, -15, 5],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-purple-primary" />
              </motion.div>

              <motion.div
                className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8 w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-br from-purple-primary/20 to-purple-dark/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-purple-primary/20 shadow-lg"
                animate={{
                  y: [-8, 12, -8],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-purple-primary" />
              </motion.div>

              {/* Main Digital Marketing Dashboard */}
              <div className="relative">
                <motion.div
                  className="w-72 sm:w-80 md:w-96 h-52 sm:h-60 md:h-72 bg-gradient-to-br from-gray-dark/90 to-navy-dark/90 rounded-2xl relative shadow-2xl border border-purple-primary/20"
                  animate={{
                    boxShadow: [
                      "0 25px 50px -12px rgba(141, 105, 191, 0.1)",
                      "0 25px 50px -12px rgba(141, 105, 191, 0.3)",
                      "0 25px 50px -12px rgba(141, 105, 191, 0.1)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                >
                  {/* Screen Content */}
                  <div className="p-3 sm:p-4 h-full">
                    {/* Header Bar */}
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <div className="flex space-x-1.5 sm:space-x-2">
                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-400 rounded-full"></div>
                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-400 rounded-full"></div>
                      </div>
                      <div className="text-xs text-gray-light">
                        Analytics Dashboard
                      </div>
                    </div>

                    {/* Analytics Charts */}
                    <div className="grid grid-cols-2 gap-2 sm:gap-3 h-full">
                      <div className="bg-purple-primary/10 rounded-lg p-1.5 sm:p-2 relative overflow-hidden">
                        <motion.div
                          className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-purple-primary/30 to-transparent"
                          animate={{
                            height: [
                              "20%",
                              "60%",
                              "40%",
                              "80%",
                              "60%",
                            ],
                          }}
                          transition={{
                            duration: 4,
                            repeat:
                              Number.POSITIVE_INFINITY,
                          }}
                        />
                        <BarChart3 className="w-3 h-3 sm:w-4 sm:h-4 text-purple-primary mb-1" />
                        <div className="text-xs text-gray-light">
                          Growth
                        </div>
                      </div>
                      <div className="bg-purple-dark/20 rounded-lg p-1.5 sm:p-2 relative">
                        <div className="flex items-center justify-between mb-1 sm:mb-2">
                          <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-purple-primary" />
                          <motion.div
                            className="text-xs text-purple-primary font-bold"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{
                              duration: 2,
                              repeat:
                                Number.POSITIVE_INFINITY,
                            }}
                          >
                            +24%
                          </motion.div>
                        </div>
                        <div className="text-xs text-gray-light">
                          Engagement
                        </div>
                      </div>
                      <div className="bg-purple-primary/10 rounded-lg p-1.5 sm:p-2">
                        <div className="flex items-center space-x-1 mb-1">
                          <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-yellow-400" />
                          <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-yellow-400" />
                          <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-yellow-400" />
                        </div>
                        <div className="text-xs text-gray-light">
                          Reviews
                        </div>
                      </div>
                      <div className="bg-purple-dark/20 rounded-lg p-1.5 sm:p-2 relative">
                        <motion.div
                          className="w-full h-1 bg-purple-primary/20 rounded-full mb-1 sm:mb-2"
                          animate={{
                            background: [
                              "rgba(141, 105, 191, 0.2)",
                              "rgba(141, 105, 191, 0.6)",
                              "rgba(141, 105, 191, 0.2)",
                            ],
                          }}
                          transition={{
                            duration: 2,
                            repeat:
                              Number.POSITIVE_INFINITY,
                          }}
                        />
                        <div className="text-xs text-gray-light">
                          Traffic
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Mobile Device */}
                <motion.div
                  className="absolute -bottom-6 sm:-bottom-8 -right-12 sm:-right-16 w-16 sm:w-20 h-28 sm:h-36 bg-gradient-to-br from-gray-dark/90 to-navy-dark/90 rounded-2xl shadow-xl border border-purple-primary/20"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 2, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <div className="p-1.5 sm:p-2 h-full">
                    <div className="w-full h-4 sm:h-6 bg-purple-primary/20 rounded-lg mb-1.5 sm:mb-2 flex items-center justify-center">
                      <Smartphone className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-purple-primary" />
                    </div>
                    <div className="space-y-1">
                      <motion.div
                        className="w-full h-1.5 sm:h-2 bg-purple-primary/30 rounded"
                        animate={{
                          width: ["60%", "90%", "70%"],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Number.POSITIVE_INFINITY,
                        }}
                      />
                      <div className="w-3/4 h-1.5 sm:h-2 bg-purple-dark/30 rounded" />
                      <motion.div
                        className="w-full h-1.5 sm:h-2 bg-purple-primary/30 rounded"
                        animate={{
                          width: ["40%", "80%", "60%"],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Number.POSITIVE_INFINITY,
                        }}
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Tablet Device */}
                <motion.div
                  className="absolute -top-8 sm:-top-12 -left-16 sm:-left-20 w-24 sm:w-32 h-18 sm:h-24 bg-gradient-to-br from-gray-dark/90 to-navy-dark/90 rounded-xl shadow-xl border border-purple-primary/20"
                  animate={{
                    y: [0, 8, 0],
                    rotate: [0, -3, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <div className="p-1.5 sm:p-2 h-full">
                    <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                      <Monitor className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-purple-primary" />
                      <motion.div
                        className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                        }}
                      />
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                      <motion.div
                        className="h-2 sm:h-3 bg-purple-primary/40 rounded"
                        animate={{
                          height: ["6px", "12px", "8px"],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Number.POSITIVE_INFINITY,
                        }}
                      />
                      <motion.div
                        className="h-2 sm:h-3 bg-purple-dark/40 rounded"
                        animate={{
                          height: ["8px", "6px", "12px"],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Number.POSITIVE_INFINITY,
                        }}
                      />
                      <motion.div
                        className="h-2 sm:h-3 bg-purple-primary/40 rounded"
                        animate={{
                          height: ["7px", "10px", "6px"],
                        }}
                        transition={{
                          duration: 3.5,
                          repeat: Number.POSITIVE_INFINITY,
                        }}
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Floating Data Points */}
                <motion.div
                  className="absolute top-16 sm:top-20 left-8 sm:left-12 w-6 sm:w-8 h-6 sm:h-8 bg-gradient-to-br from-green-400/20 to-green-500/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-green-400/30 shadow-lg"
                  animate={{
                    y: [-5, 5, -5],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                >
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full" />
                </motion.div>

                <motion.div
                  className="absolute bottom-24 sm:bottom-32 right-3 sm:right-4 w-5 sm:w-6 h-5 sm:h-6 bg-gradient-to-br from-blue-400/20 to-blue-500/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-blue-400/30 shadow-lg"
                  animate={{
                    y: [3, -3, 3],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                >
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-400 rounded-full" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
