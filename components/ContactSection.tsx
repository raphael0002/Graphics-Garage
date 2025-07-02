"use client";

import type React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message:
            "Message sent successfully! We'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message:
            data.message ||
            "Error sending message. Please try again.",
        });
      }
    } catch (error) {
      console.log("Error Message: ", error);
      setStatus({
        type: "error",
        message: "Error sending message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(
        () => setStatus({ type: null, message: "" }),
        5000
      );
    }
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-20 section-light transition-colors duration-300"
    >
      {/* Contact Container - Medium Layout (87vw) */}
      <div className="w-full max-w-[95vw] sm:max-w-[90vw] md:max-w-[87vw] lg:max-w-[85vw] xl:max-w-[82vw] 2xl:max-w-[78vw] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-start">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={
              isInView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: -50 }
            }
            transition={{ duration: 0.8 }}
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
              Get In Touch
            </motion.div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-professional mb-4 md:mb-6">
              {"Let's work together"}
              <span className="text-purple-primary">.</span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-muted-professional mb-8 md:mb-12 leading-relaxed">
              {
                "Ready to start your next project? Get in touch and let's create something amazing together."
              }
            </p>

            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              <motion.div
                className="flex items-center space-x-3 sm:space-x-4 group cursor-pointer"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-primary/10 rounded-xl flex items-center justify-center group-hover:bg-purple-primary/20 transition-colors duration-300">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-purple-primary" />
                </div>
                <div>
                  <p className="text-professional font-medium text-sm sm:text-base">
                    Email Us
                  </p>
                  <p className="text-muted-professional text-sm sm:text-base md:text-lg">
                    hello@graphicsgarage.com
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center space-x-3 sm:space-x-4 group cursor-pointer"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-primary/10 rounded-xl flex items-center justify-center group-hover:bg-purple-primary/20 transition-colors duration-300">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-purple-primary" />
                </div>
                <div>
                  <p className="text-professional font-medium text-sm sm:text-base">
                    Call Us
                  </p>
                  <p className="text-muted-professional text-sm sm:text-base md:text-lg">
                    +1 (555) 000-0000
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center space-x-3 sm:space-x-4 group cursor-pointer"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-primary/10 rounded-xl flex items-center justify-center group-hover:bg-purple-primary/20 transition-colors duration-300">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-purple-primary" />
                </div>
                <div>
                  <p className="text-professional font-medium text-sm sm:text-base">
                    Visit Us
                  </p>
                  <p className="text-muted-professional text-sm sm:text-base md:text-lg">
                    123 Design Street, Creative City
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={
              isInView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: 50 }
            }
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-4 sm:space-y-6"
            >
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-muted dark:bg-purple-dark/30 border border-gray-200 dark:border-purple-dark rounded-xl px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 text-professional dark:text-white placeholder-gray-500 dark:placeholder-gray-light focus:outline-none focus:border-purple-primary dark:focus:border-purple-primary transition-all duration-300 text-sm sm:text-base md:text-lg"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-muted dark:bg-purple-dark/30 border border-gray-200 dark:border-purple-dark rounded-xl px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 text-professional dark:text-white placeholder-gray-500 dark:placeholder-gray-light focus:outline-none focus:border-purple-primary dark:focus:border-purple-primary transition-all duration-300 text-sm sm:text-base md:text-lg"
                  required
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full bg-muted dark:bg-purple-dark/30 border border-gray-200 dark:border-purple-dark rounded-xl px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 text-professional dark:text-white placeholder-gray-500 dark:placeholder-gray-light focus:outline-none focus:border-purple-primary dark:focus:border-purple-primary transition-all duration-300 resize-none text-sm sm:text-base md:text-lg"
                  required
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full button-primary text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 group text-sm sm:text-base md:text-lg disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                whileHover={{
                  scale: isSubmitting ? 1 : 1.02,
                }}
                whileTap={{
                  scale: isSubmitting ? 1 : 0.98,
                }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </motion.button>

              {status.type && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-center gap-2 p-3 sm:p-4 rounded-xl ${
                    status.type === "success"
                      ? "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800"
                      : "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-800"
                  }`}
                >
                  {status.type === "success" ? (
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  )}
                  <p className="text-xs sm:text-sm md:text-base">
                    {status.message}
                  </p>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
