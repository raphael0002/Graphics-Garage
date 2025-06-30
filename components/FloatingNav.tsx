"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Home, Briefcase, HelpCircle, Mail, Moon, Sun, User, Eye } from "lucide-react"
import { useTheme } from "next-themes"
import Image from "next/image"
import { usePathname } from "next/navigation"
import Link from "next/link"

const navItems = [
    { name: "Home", link: "/", icon: Home },
    { name: "About", link: "/about", icon: User },
    { name: "Services", link: "/#services", icon: Briefcase },
    { name: "Works", link: "/works", icon: Eye },
    { name: "FAQ", link: "/#faq", icon: HelpCircle },
    { name: "Contact", link: "/#contact", icon: Mail },
]

export const FloatingNav = ({ className }: { className?: string }) => {
    const [activeSection, setActiveSection] = useState("home")
    const { setTheme, theme } = useTheme()
    const pathname = usePathname()

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

        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToSection = (sectionId: string) => {
        if (sectionId.startsWith("#")) {
            const element = document.getElementById(sectionId.slice(1))
            if (element) {
                element.scrollIntoView({ behavior: "smooth" })
            }
        }
    }

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    const isActive = (link: string) => {
        if (link === "/") return pathname === "/"
        if (link.includes("#")) return activeSection === link.slice(2)
        return pathname === link
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className={cn(
                "fixed inset-x-0 mx-auto z-50 px-4 py-3 md:px-6 md:py-4",
                "bg-background/20 backdrop-blur-2xl",
                "border border-border/30",
                "shadow-2xl shadow-black/10 dark:shadow-black/30",
                "ring-1 ring-border/20",
                "rounded-2xl transition-all duration-300",
                "md:top-6 max-w-fit",
                "bottom-8 max-w-[95vw] md:max-w-[85vw] md:bottom-auto",
                "before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-background/10 before:to-transparent before:pointer-events-none",
                className,
            )}
        >
            <div className="flex items-center justify-end relative z-10">
                {/* Logo */}
                <div className="items-center mr-4 absolute left-0">
                    {/* Desktop Logo */}
                    <Image
                        src={theme === "dark" ? "/logo-1.svg" : "/logo-light-2.svg"}
                        alt="Logo"
                        width={100}
                        height={200}
                        className="mr-2 hidden md:block"
                    />
                    {/* Mobile Logo */}
                    <Image
                        src={theme === "dark" ? "/logo-2.svg" : "/logo-light-1.svg"}
                        alt="Logo"
                        width={30}
                        height={200}
                        className="mr-2 hidden md:hidden sm:block"
                    />
                </div>

                {/* Navigation Items */}
                <div className="flex justify-end items-center w-full md:w-fit gap-8">
                    <div className="flex items-center justify-center w-full space-x-1">
                        {navItems.map((navItem, idx) => (
                            <Link
                                key={`link-${idx}`}
                                href={navItem.link}
                                onClick={(e) => {
                                    if (navItem.link.startsWith("#")) {
                                        e.preventDefault()
                                        scrollToSection(navItem.link)
                                    }
                                }}
                                className={cn(
                                    "relative flex items-center justify-center px-4 py-2 rounded-xl transition-all duration-300",
                                    "text-muted-foreground hover:text-foreground",
                                    "hover:bg-background/30 backdrop-blur-sm",
                                    isActive(navItem.link) && "text-white drop-shadow-sm",
                                    "text-sm font-medium",
                                )}
                            >
                                <navItem.icon className="md:hidden w-5 h-5" />
                                {isActive(navItem.link) && (
                                    <motion.div
                                        layoutId="activeSection"
                                        className="absolute inset-0 bg-purple-primary/90 backdrop-blur-sm rounded-xl shadow-lg ring-1 ring-purple-primary/30 -z-10"
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                                <span className="hidden md:inline relative z-10">{navItem.name}</span>
                            </Link>
                        ))}
                    </div>

                    {/* Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        className="w-8 h-8 hidden rounded-xl bg-background/20 backdrop-blur-sm md:flex items-center justify-center hover:bg-background/30 transition-all duration-200 border border-border/20 shadow-lg ring-1 ring-border/10"
                    >
                        <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-muted-foreground drop-shadow-sm" />
                        <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-muted-foreground drop-shadow-sm" />
                    </button>
                </div>
            </div>

            {/* Additional glass effect overlay */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-background/5 to-transparent pointer-events-none" />
        </motion.div>
    )
}