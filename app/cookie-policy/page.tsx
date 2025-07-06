import { FloatingNav } from "@/components/FloatingNav";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy - Graphics Garage",
  description:
    "Learn how Graphics Garage uses cookies to enhance user experience on our website.",
};

export default function CookiePolicyPage() {
  return (
    <main className="relative min-h-screen">
      <FloatingNav />

      <section className="pt-10 md:pt-24 pb-16 md:pb-20 section-light transition-colors duration-300">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-professional mb-4">
              Cookie Policy
              <span className="text-purple-primary">.</span>
            </h1>
            <p className="text-lg text-muted-professional">
              Last updated: July 4, 2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <p className="text-muted-professional">
                At Graphics Garage, we use cookies to
                enhance your experience on our website. This
                Cookie Policy explains what cookies are, how
                we use them, and how you can manage your
                cookie preferences. This policy complements
                our{" "}
                <a
                  href="/privacy-policy"
                  target="_blank"
                  className="text-purple-primary underline"
                >
                  Privacy Policy
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-professional mb-2">
                1. What Are Cookies?
              </h2>
              <p className="text-muted-professional">
                Cookies are small text files placed on your
                device (computer, tablet, or mobile phone)
                when you visit our website. They help us
                improve website functionality, understand
                user behavior, and provide a better browsing
                experience.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-professional mb-2">
                2. Types of Cookies We Use
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-professional">
                <li>
                  <strong>Essential Cookies:</strong>
                  {`Necessary for the website to function
                  properly, such as enabling the "Contact
                  Us" form to securely transmit your
                  information.`}
                </li>
                <li>
                  <strong>Analytics Cookies:</strong> Help
                  us understand how visitors interact with
                  our website by collecting anonymous data
                  about user behavior.
                </li>
                <li>
                  <strong>Functional Cookies:</strong>{" "}
                  Enhance usability by remembering your
                  preferences or form inputs.
                </li>
              </ul>
              <p className="text-muted-professional mt-2">
                We do not use cookies for advertising or
                tracking across other websites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-professional mb-2">
                3. How We Use Cookies
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-professional">
                <li>
                  {`Ensure the "Contact Us" form operates
                  correctly and securely.`}
                </li>
                <li>
                  Analyze website performance and user
                  behavior to improve our services.
                </li>
                <li>
                  Remember your preferences to enhance your
                  browsing experience.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-professional mb-2">
                4. Third-Party Cookies
              </h2>
              <p className="text-muted-professional mb-2">
                We may use third-party services like Google
                Analytics that set cookies to analyze
                website usage. These cookies collect
                anonymous data and do not directly identify
                you.
              </p>
              <p className="text-muted-professional">
                We ensure third-party providers comply with
                our privacy standards and applicable data
                protection laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-professional mb-2">
                5. Managing Your Cookie Preferences
              </h2>
              <p className="text-muted-professional mb-2">
                You can control and manage cookies through
                your browser settings. Most browsers allow
                you to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-professional">
                <li>
                  View the cookies stored on your device
                </li>
                <li>Block or delete cookies</li>
                <li>
                  Set preferences to accept or reject
                  certain types of cookies
                </li>
              </ul>
              <p className="text-muted-professional mt-2">
                {`Please note: Disabling essential cookies may
                affect website functionality, including the
                "Contact Us" form. Refer to your browser’s
                help section for specific instructions.`}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-professional mb-2">
                6. Changes to This Cookie Policy
              </h2>
              <p className="text-muted-professional">
                {`We may update this Cookie Policy from time
                to time to reflect changes in our practices
                or legal requirements. Updates will be
                posted on this page with an updated "Last
                Updated" date.`}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-professional mb-2">
                7. Contact Us
              </h2>
              <p className="text-muted-professional mb-4">
                If you have any questions or concerns about
                our use of cookies, please contact us:
              </p>
              <div className="mt-4 p-4 bg-purple-primary/5 rounded-lg border border-purple-primary/20">
                <p className="text-professional font-medium">
                  Graphics Garage
                </p>
                <p className="text-muted-professional">
                  Email: connectgraphicsgarage@gmail.com
                </p>
                <p className="text-muted-professional">
                  Website: graphicsgaragestudio.com
                </p>
                <p className="text-muted-professional">
                  WhatsApp: +977-9810046115
                </p>
              </div>
              <p className="text-muted-professional mt-4">
                Thank you for visiting Graphics Garage. We
                are committed to providing a transparent and
                user-friendly experience.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
