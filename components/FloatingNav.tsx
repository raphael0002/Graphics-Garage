"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Home, Briefcase, Users, HelpCircle, Mail, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

const navItems = [
    { name: "Home", link: "#home", icon: Home },
    { name: "Services", link: "#services", icon: Briefcase },
    { name: "Testimonials", link: "#testimonials", icon: Users },
    { name: "FAQ", link: "#faq", icon: HelpCircle },
    { name: "Contact", link: "#contact", icon: Mail },
]

export const FloatingNav = ({ className }: { className?: string }) => {
    const [visible] = useState(true)
    const [activeSection, setActiveSection] = useState("home")
    const { setTheme, theme } = useTheme()

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["home", "services", "testimonials", "faq", "contact"]
            const scrollPosition = window.scrollY + 100

            for (const section of sections) {
                const element = document.getElementById(section)
                if (element) {
                    const { offsetTop, offsetHeight } = element
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section)
                        break
                    }
                }
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{ opacity: 1, y: 0 }}
                animate={{ y: visible ? 0 : 100, opacity: visible ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={cn(
                    "fixed inset-x-0 mx-auto z-50 px-4 py-3 md:px-6 md:py-4",
                    // Glass effect with enhanced backdrop blur and transparency
                    "bg-white/20 dark:bg-gray-900/20 backdrop-blur-2xl",
                    // Enhanced border with subtle glow
                    "border border-white/30 dark:border-gray-700/30",
                    // Glass-like shadow and glow effects
                    "shadow-2xl shadow-black/10 dark:shadow-black/30",
                    // Ring effect for extra glassy appearance
                    "ring-1 ring-white/20 dark:ring-gray-700/20",
                    "rounded-2xl transition-all duration-300",
                    "md:top-6 max-w-fit",
                    "bottom-4 max-w-[85vw] md:bottom-auto",
                    // Subtle gradient overlay for glass effect
                    "before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-white/10 before:to-transparent dark:before:from-gray-800/10 before:pointer-events-none",
                    className,
                )}
            >
                <div className="flex items-center md:justify-between justify-between relative z-10">
                    {/* Logo */}
                    <div className="flex items-center mr-4">
                        <div className="w-8 h-8 bg-gradient-to-br from-red-500/90 to-red-600/90 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-lg ring-1 ring-red-400/20">
                            <span className="text-white font-bold text-sm drop-shadow-sm">S</span>
                        </div>
                        <span className="hidden md:block text-gray-900/90 dark:text-white/90 font-bold ml-2 text-base drop-shadow-sm">
                            Studio<span className="text-red-400">.</span>
                        </span>
                    </div>

                    {/* Navigation Items */}
                    <div className="flex gap-6">
                        <div className="flex items-center space-x-1">
                            {navItems.map((navItem, idx) => (
                                <button
                                    key={`link-${idx}`}
                                    onClick={() => scrollToSection(navItem.link.slice(1))}
                                    className={cn(
                                        "relative flex items-center justify-center px-3 py-2 rounded-xl transition-all duration-200",
                                        "text-gray-700/80 dark:text-gray-300/80 hover:text-gray-900 dark:hover:text-white",
                                        "hover:bg-white/20 dark:hover:bg-gray-800/20 backdrop-blur-sm",
                                        activeSection === navItem.link.slice(1) && "text-white drop-shadow-sm",
                                        "md:text-sm text-xs font-medium",
                                    )}
                                >
                                    <navItem.icon className="md:hidden w-5 h-5" />
                                    {activeSection === navItem.link.slice(1) && (
                                        <motion.div
                                            layoutId="activeSection"
                                            className="absolute inset-0 bg-gradient-to-r from-red-500/90 to-red-600/90 backdrop-blur-sm rounded-xl shadow-lg ring-1 ring-red-400/30"
                                            initial={false}
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                    <span className="hidden md:inline relative z-10">{navItem.name}</span>
                                </button>
                            ))}
                        </div>

                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="w-8 h-8 rounded-xl bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 dark:hover:bg-gray-700/30 transition-all duration-200 border border-white/20 dark:border-gray-700/20 shadow-lg ring-1 ring-white/10 dark:ring-gray-700/10"
                        >
                            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-gray-700/80 dark:text-gray-300/80 drop-shadow-sm" />
                            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-gray-700/80 dark:text-gray-300/80 drop-shadow-sm" />
                        </button>
                    </div>
                </div>

                {/* Additional glass effect overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/5 to-transparent dark:from-gray-800/5 pointer-events-none" />
            </motion.div>
        </AnimatePresence>
    )
}
