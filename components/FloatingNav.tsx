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
                    "bg-background/20 backdrop-blur-2xl",
                    // Enhanced border with subtle glow
                    "border border-border/30",
                    // Glass-like shadow and glow effects
                    "shadow-2xl shadow-black/10 dark:shadow-black/30",
                    // Ring effect for extra glassy appearance
                    "ring-1 ring-border/20",
                    "rounded-2xl transition-all duration-300",
                    "md:top-6 max-w-fit",
                    "bottom-4 max-w-[85vw] md:bottom-auto",
                    // Subtle gradient overlay for glass effect
                    "before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-background/10 before:to-transparent before:pointer-events-none",
                    className,
                )}
            >
                <div className="flex items-center md:justify-between justify-between relative z-10">
                    {/* Logo */}
                    <div className="flex items-center mr-4">
                        <span className="hidden md:block text-foreground/90 font-bold ml-2 text-2xl drop-shadow-sm">
                            Graphics Garage<span className="text-purple-primary">.</span>
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
                                        "text-muted-foreground hover:text-foreground",
                                        "hover:bg-background/20 backdrop-blur-sm",
                                        activeSection === navItem.link.slice(1) && "text-white drop-shadow-sm",
                                        "md:text-sm text-xs font-medium",
                                    )}
                                >
                                    <navItem.icon className="md:hidden w-5 h-5" />
                                    {activeSection === navItem.link.slice(1) && (
                                        <motion.div
                                            layoutId="activeSection"
                                            className="absolute inset-0 bg-purple-primary/90  backdrop-blur-sm rounded-xl shadow-lg ring-1 ring-purple-primary/30"
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
                            className="w-8 h-8 rounded-xl bg-background/20 backdrop-blur-sm flex items-center justify-center hover:bg-background/30 transition-all duration-200 border border-border/20 shadow-lg ring-1 ring-border/10"
                        >
                            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-muted-foreground drop-shadow-sm" />
                            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-muted-foreground drop-shadow-sm" />
                        </button>
                    </div>
                </div>

                {/* Additional glass effect overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-background/5 to-transparent pointer-events-none" />
            </motion.div>
        </AnimatePresence>
    )
}
