"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { JSX, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
// import { faqData } from "@/data/faq";

export interface FAQ {
  id: string;
  question: string;
  answer: JSX.Element;
  category: string;
}

export const faqData: FAQ[] = [
  {
    id: "services-offered",
    question: "What services does Graphics Garage offer?",
    answer: (
      <>
        <p className="text-muted-professional leading-relaxed pt-4 text-sm sm:text-base">
          We offer a range of creative services including:
        </p>
        <ul className="list-disc pl-6">
          <li>Branding & Visual Identity</li>
          <li>Graphics Design</li>
          <li>Social Media Design & Management</li>
          <li>UI/UX Design</li>
          <li>Web Design & Development</li>
        </ul>
      </>
    ),
    category: "Services",
  },
  {
    id: "project-timeline",
    question: "How can I get started with Graphics Garage?",
    answer: (
      <p className="text-muted-professional leading-relaxed pt-4 text-sm sm:text-base">
        Simply reach out via our WhatsApp: 9810046115 or
        send us an email at connectgraphicsgarage@gmail.com.
        We’ll get back to you to discuss your project,
        goals, and timelines.
      </p>
    ),
    category: "Process",
  },
  {
    id: "ongoing-support",
    question:
      "What makes Graphics Garage different from other design agencies?",
    answer: (
      <p className="text-muted-professional leading-relaxed pt-4 text-sm sm:text-base">
        We treat every brand like our own. From strategy to
        execution, we blend design with purpose to create
        meaningful brand experiences.
      </p>
    ),
    category: "Support",
  },
  {
    id: "design-process",
    question:
      "Can I hire you for just one service (e.g., only a logo or only UI/UX)?",
    answer: (
      <p className="text-muted-professional leading-relaxed pt-4 text-sm sm:text-base">
        Absolutely. Whether you need a complete brand
        identity or just a specific service, we’re here to
        help based on your needs.
      </p>
    ),
    category: "Process",
  },
  {
    id: "project-communication",
    question: "Do you also manage social media accounts?",
    answer: (
      <p className="text-muted-professional leading-relaxed pt-4 text-sm sm:text-base">
        Yes, we design content and can assist with account
        management strategies to help grow your brand
        online.
      </p>
    ),
    category: "Communication",
  },
  {
    id: "agency-difference",
    question:
      "Do you provide revisions during the project?",
    answer: (
      <p className="text-muted-professional leading-relaxed pt-4 text-sm sm:text-base">
        Yes, we work closely with you throughout the process
        and provide multiple rounds of revisions to ensure
        your satisfaction.
      </p>
    ),
    category: "About",
  },
  {
    id: "additional-services",
    question: "How much do your services cost?",
    answer: (
      <p className="text-muted-professional leading-relaxed pt-4 text-sm sm:text-base">
        Our pricing varies by project size and complexity.
        Contact us for a custom quote based on your specific
        needs.
      </p>
    ),
    category: "Services",
  },
  {
    id: "international-clients",
    question:
      "Where are you based, and do you work with international clients?",
    answer: (
      <p className="text-muted-professional leading-relaxed pt-4 text-sm sm:text-base">
        We’re based in Nepal but happily collaborate with
        clients from around the world.
      </p>
    ),
    category: "Location",
  },
];

export const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });
  const [openIndex, setOpenIndex] = useState<number | null>(
    0
  );

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-16 md:py-20 section-light transition-colors duration-300"
    >
      {/* FAQ Container - Wide Layout with consistent spacing */}
      <div className="w-full max-w-[min(90vw,85rem)] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={
            isInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 50 }
          }
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-3 sm:px-4 py-2 bg-purple-primary/10 border border-purple-primary/20 rounded-full text-purple-primary text-xs sm:text-sm font-medium backdrop-blur-sm mb-6"
          >
            Frequently Asked Questions
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-professional mb-4 md:mb-6">
            Got Questions? We Have Answers
            <span className="text-purple-primary">.</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-muted-professional">
            Everything you need to know about our services
            and process.
          </p>
        </motion.div>

        <div className="space-y-3 sm:space-y-4 max-w-7xl mx-auto">
          {faqData.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 30 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 30 }
              }
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? "card-professional border border-purple-primary/50 shadow-lg"
                  : "card-professional hover:border-purple-primary/30 hover:shadow-md"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8 text-left flex items-center justify-between transition-colors hover:bg-purple-primary/5"
              >
                <div
                  className={`text-sm sm:text-base md:text-lg font-semibold transition-colors duration-300 ${
                    openIndex === index
                      ? "text-purple-primary"
                      : "text-professional"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}.{" "}
                  {faq.question}
                </div>

                <motion.div
                  animate={{
                    rotate: openIndex === index ? 180 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 ml-4"
                >
                  <ChevronDown
                    className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-colors duration-300 ${
                      openIndex === index
                        ? "text-purple-primary"
                        : "text-muted-professional"
                    }`}
                  />
                </motion.div>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
                className="overflow-hidden"
              >
                <div className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 md:pb-10 border-t border-border/30">
                  <div>{faq.answer}</div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
