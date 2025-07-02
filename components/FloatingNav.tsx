"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Home,
  Briefcase,
  HelpCircle,
  Mail,
  Moon,
  Sun,
  User,
  Eye,
} from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems = [
  { name: "Home", link: "/", icon: Home },
  { name: "About", link: "/about", icon: User },
  { name: "Services", link: "/#services", icon: Briefcase },
  { name: "Works", link: "/works", icon: Eye },
  { name: "FAQ", link: "/#faq", icon: HelpCircle },
  { name: "Contact", link: "/#contact", icon: Mail },
];

export const FloatingNav = ({
  className,
}: {
  className?: string;
}) => {
  const [activeSection, setActiveSection] =
    useState("home");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { setTheme, theme } = useTheme();
  const pathname = usePathname();

  // Handle scroll direction for hide/show navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide navbar when scrolling down, show when scrolling up
      if (
        currentScrollY > lastScrollY &&
        currentScrollY > 100
      ) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);

      // Handle active section detection
      const sections = [
        "home",
        "services",
        "testimonials",
        "faq",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    if (sectionId.startsWith("#")) {
      const element = document.getElementById(
        sectionId.slice(1)
      );
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const isActive = (link: string) => {
    if (link === "/") return pathname === "/";
    if (link.includes("#"))
      return activeSection === link.slice(2);
    return pathname === link;
  };

  return (
    <>
      {/* Desktop Navbar - Top (Medium screens and above) */}
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{
              duration: 0.4,
              ease: [0.4, 0, 0.2, 1],
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            className={cn(
              "fixed top-4 left-1/2 -translate-x-1/2 z-50 hidden md:block",
              "w-full max-w-[95vw] sm:max-w-[92vw] md:max-w-[90vw] lg:max-w-[88vw] xl:max-w-[85vw] 2xl:max-w-[80vw]",
              "bg-background/40 backdrop-blur-xl",
              "border border-border/40",
              "shadow-2xl shadow-black/10 dark:shadow-black/30",
              "ring-1 ring-border/20",
              "rounded-2xl transition-all duration-300",
              "before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-background/10 before:to-transparent before:pointer-events-none",
              className
            )}
          >
            <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4 relative z-10">
              {/* Logo Section - Only on medium screens and above */}
              <div className="flex items-center flex-shrink-0">
                <Link
                  href="/"
                  className="flex items-center"
                >
                  <Image
                    src={
                      theme === "dark"
                        ? "/logo-1.svg"
                        : "/logo-light-2.svg"
                    }
                    alt="Logo"
                    width={150}
                    height={70}
                    className="h-8 lg:h-10 xl:h-12 w-auto"
                    priority
                  />
                </Link>
              </div>

              {/* Navigation Items - Center */}
              <div className="flex items-center justify-center flex-1 mx-6 lg:mx-8">
                <div className="flex items-center space-x-2 lg:space-x-3">
                  {navItems.map((navItem, idx) => (
                    <Link
                      key={`link-${idx}`}
                      href={navItem.link}
                      onClick={(e) => {
                        if (navItem.link.startsWith("#")) {
                          e.preventDefault();
                          scrollToSection(navItem.link);
                        }
                      }}
                      className={cn(
                        "relative flex items-center justify-center",
                        "px-4 py-2 lg:px-6 lg:py-2 ",
                        "rounded-xl transition-all duration-300",
                        "text-muted-foreground hover:text-foreground",
                        "hover:bg-background/40",
                        "text-sm lg:text-base font-medium group",
                        isActive(navItem.link) && [
                          "text-white bg-purple-primary/90 shadow-lg",
                          "ring-1 ring-purple-primary/30",
                          "hover:bg-purple-primary hover:text-white",
                        ]
                      )}
                    >
                      {/* Large screens: Text only */}
                      <div className="relative z-10">
                        {navItem.name}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Theme Toggle - Right */}
              <div className="flex items-center flex-shrink-0">
                <button
                  onClick={toggleTheme}
                  className={cn(
                    "w-10 h-10 rounded-xl",
                    "bg-background/40 backdrop-blur-sm",
                    "flex items-center justify-center",
                    "hover:bg-background/60 transition-all duration-200",
                    "border border-border/30",
                    "shadow-lg ring-1 ring-border/10"
                  )}
                  aria-label="Toggle theme"
                >
                  <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-muted-foreground" />
                  <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-muted-foreground" />
                </button>
              </div>
            </div>

            {/* Glass effect overlay */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-background/5 to-transparent pointer-events-none" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Navbar - Bottom (Small screens only) */}
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{
              duration: 0.4,
              ease: [0.4, 0, 0.2, 1],
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            className={cn(
              "fixed bottom-4 left-1/2 -translate-x-1/2 z-50 block md:hidden",
              "w-full max-w-[95vw] mx-auto px-4",
              "bg-background/40 backdrop-blur-xl",
              "border border-border/40",
              "shadow-2xl shadow-black/20 dark:shadow-black/40",
              "ring-1 ring-border/20",
              "rounded-2xl transition-all duration-300",
              "before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-background/10 before:to-transparent before:pointer-events-none"
            )}
          >
            <div className="flex items-center justify-between py-3 relative z-10">
              {/* Mobile Navigation Items - Icons Only */}
              <div className="flex items-center justify-between sm:justify-between space-x-1  w-full">
                <div className="flex items-center flex-shrink-0">
                  <Link
                    href="/"
                    className="flex items-center"
                  >
                    <Image
                      src={
                        theme === "dark"
                          ? "/logo-2.svg"
                          : "/logo-light-1.svg"
                      }
                      alt="Logo"
                      width={150}
                      height={70}
                      className="h-8 hidden sm:block lg:h-10 xl:h-12 w-auto"
                      priority
                    />
                  </Link>
                </div>
                <div className="flex items-center space-x-1">
                  {navItems.map((navItem, idx) => (
                    <Link
                      key={`mobile-link-${idx}`}
                      href={navItem.link}
                      onClick={(e) => {
                        if (navItem.link.startsWith("#")) {
                          e.preventDefault();
                          scrollToSection(navItem.link);
                        }
                      }}
                      className={cn(
                        "relative flex items-center justify-center",
                        "w-12 h-12 rounded-xl transition-all duration-300",
                        "text-muted-foreground hover:text-foreground",
                        "hover:bg-background/40",
                        "active:scale-95",
                        isActive(navItem.link) && [
                          "text-white bg-purple-primary/90 shadow-lg",
                          "ring-1 ring-purple-primary/30",
                          "hover:bg-purple-primary hover:text-white",
                        ]
                      )}
                    >
                      {/* Small screens: Icons only */}
                      <navItem.icon className="w-6 h-6" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Glass effect overlay */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-background/5 to-transparent pointer-events-none" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
