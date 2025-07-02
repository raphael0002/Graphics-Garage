"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

const footerLinks = {
  Company: ["About", "Works", "Contact", "Blog"],
  Services: [
    "Digital Strategy",
    "UI/UX Design",
    "Development",
    "Marketing",
  ],
  Legal: [
    "Privacy Policy",
    "Terms of Service",
    "Cookie Policy",
  ],
};

const linkMap: Record<string, string> = {
  About: "/about",
  Works: "/works",
  Contact: "/#contact",
  Blog: "/blog",
  "Digital Strategy": "/services/social-media-marketing",
  "UI/UX Design": "/services/ui-ux-design",
  Development: "/services/web-development",
  Marketing: "/services/social-media-marketing",
  "Privacy Policy": "/privacy-policy",
  "Terms of Service": "/terms-of-service",
  "Cookie Policy": "/cookie-policy",
};

export const Footer = () => {
  const { theme } = useTheme();

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

  return (
    <footer className="section-light border-t border-border py-12 md:py-16 transition-colors duration-300">
      {/* Footer Container - Wide Layout (90vw) - Same as Navbar */}
      <div className="w-full max-w-[95vw] sm:max-w-[92vw] md:max-w-[90vw] lg:max-w-[88vw] xl:max-w-[85vw] 2xl:max-w-[80vw] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12 mb-8 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center mb-6">
              <Image
                src={
                  theme === "dark"
                    ? "/logo-1.svg"
                    : "/logo-light-2.svg"
                }
                alt="Graphics Garage Logo"
                width={200}
                height={80}
                className="h-10 sm:h-12 w-auto"
              />
            </div>

            <p className="text-muted-professional leading-relaxed mb-6 text-sm sm:text-base">
              We craft digital experiences that inspire,
              engage, and deliver exceptional results for
              forward-thinking brands.
            </p>
          </motion.div>

          {Object.entries(footerLinks).map(
            ([category, links], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
              >
                <h4 className="text-professional font-semibold mb-4 text-sm sm:text-base">
                  {category}
                </h4>
                <ul className="space-y-2 sm:space-y-3">
                  {links.map((link) => {
                    const href = linkMap[link] || "#";
                    const isHashLink = href.startsWith("#");

                    return (
                      <li key={link}>
                        {isHashLink ? (
                          <button
                            onClick={() =>
                              scrollToSection(href)
                            }
                            className="text-muted-professional hover:text-purple-primary transition-colors duration-200 text-left text-xs sm:text-sm"
                          >
                            {link}
                          </button>
                        ) : (
                          <Link
                            href={href}
                            className="text-muted-professional hover:text-purple-primary transition-colors duration-200 text-xs sm:text-sm"
                          >
                            {link}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            )
          )}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-border pt-6 sm:pt-8 flex flex-col md:flex-row justify-center items-center"
        >
          <p className="text-muted-professional text-xs sm:text-sm mb-4 md:mb-0">
            © 2025 Graphics Garage. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
