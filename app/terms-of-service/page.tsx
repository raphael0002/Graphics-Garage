import { FloatingNav } from "@/components/FloatingNav";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Graphics Garage",
  description:
    "Review the terms and conditions for using Graphics Garage services and website.",
};

export default function TermsOfServicePage() {
  return (
    <main className="relative min-h-screen">
      <FloatingNav />

      <section className="pt-10 md:pt-24 pb-16 md:pb-20 section-light transition-colors duration-300">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-professional mb-4">
              Terms of Service
              <span className="text-purple-primary">.</span>
            </h1>
            <p className="text-lg text-muted-professional">
              Last updated: July 4, 2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <p className="text-muted-professional">
                {`Welcome to Graphics Garage, a design and
                development company specializing in social
                media design, graphic design, UI/UX design,
                and website/app development. These Terms of
                Service ("Terms") govern your use of our
                website and services. By accessing or using
                our website, including the "Contact Us"
                form, you agree to be bound by these Terms.
                If you do not agree, please refrain from
                using our website or services.`}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-professional mb-2">
                1. Acceptance of Terms
              </h2>
              <p className="text-muted-professional">
                {`By accessing our website or submitting
                information through our "Contact Us" form,
                you agree to these Terms, our `}
                <a
                  href="/privacy-policy"
                  target="_blank"
                  className="text-purple-primary underline"
                >
                  Privacy Policy
                </a>
                , and our{" "}
                <a
                  href="/cookie-policy"
                  target="_blank"
                  className="text-purple-primary underline"
                >
                  Cookie Policy
                </a>
                . These Terms apply to all visitors, users,
                and clients who interact with our website or
                services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-professional mb-2">
                2. Use of Our Website
              </h2>
              <p className="text-muted-professional mb-2">
                {`Our website allows you to learn about our
                services and contact us via the "Contact Us"
                form. You agree to:`}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-professional">
                <li>
                  Use the website for lawful purposes only.
                </li>
                <li>
                  Provide accurate and truthful information
                  when submitting the form.
                </li>
                <li>
                  Not use the website in any way that could
                  harm, disable, or impair its functionality
                  or interfere with others’ access.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-professional mb-2">
                3. Our Services
              </h2>
              <p className="text-muted-professional mb-2">
                Graphics Garage provides professional
                services, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-professional">
                <li>Social media design</li>
                <li>Branding</li>
                <li>Graphic design</li>
                <li>UI/UX design</li>
                <li>Website and app development</li>
              </ul>
              <p className="text-muted-professional mt-2">
                Any engagement for our services will be
                governed by separate agreements outlining
                terms, deliverables, and payment.
                Information submitted via our contact form
                is used to respond to inquiries and initiate
                discussions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-professional mb-2">
                4. User Responsibilities
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-professional">
                <li>
                  Not submit false, misleading, or
                  fraudulent information.
                </li>
                <li>
                  Not use automated tools (e.g., bots or
                  scrapers) to access our website.
                </li>
                <li>
                  Not attempt to gain unauthorized access to
                  our systems or networks.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-professional mb-2">
                5. Intellectual Property
              </h2>
              <p className="text-muted-professional">
                All content on our website, including text,
                images, logos, and designs, is owned by
                Graphics Garage or its licensors and
                protected by intellectual property laws. You
                may not reproduce, distribute, or modify any
                content without our written consent, except
                for personal, non-commercial use.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-professional mb-2">
                6. Limitation of Liability
              </h2>
              <p className="text-muted-professional mb-2">
                To the fullest extent permitted by law,
                Graphics Garage is not liable for any
                direct, indirect, incidental, or
                consequential damages arising from:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-professional">
                <li>
                  Your use of or inability to use our
                  website.
                </li>
                <li>
                  Errors, interruptions, or inaccuracies in
                  website content or functionality.
                </li>
                <li>
                  Loss or damage resulting from unauthorized
                  third-party access.
                </li>
              </ul>
              <p className="text-muted-professional mt-2">
                {`The website is provided on an "as-is" and
                "as-available" basis without warranties of
                any kind.`}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-professional mb-2">
                7. Third-Party Links
              </h2>
              <p className="text-muted-professional">
                Our site may include links to third-party
                websites. We do not control or endorse their
                content and are not responsible for their
                privacy or practices. You access these links
                at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-professional mb-2">
                8. Termination
              </h2>
              <p className="text-muted-professional">
                We reserve the right to suspend or terminate
                your access to our website at any time,
                without notice, if you violate these Terms
                or engage in harmful activities.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-professional mb-2">
                9. Changes to These Terms
              </h2>
              <p className="text-muted-professional">
                {`
                We may update these Terms from time to time.
                Updates will be posted on this page with a
                new "Last Updated" date. Continued use of
                our website indicates your acceptance of any
                changes. 
                `}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-professional mb-2">
                10. Governing Law
              </h2>
              <p className="text-muted-professional">
                These Terms are governed by the laws of
                Nepal. Any disputes will be resolved in the
                courts of Kathmandu.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-professional mb-2">
                11. Contact Us
              </h2>
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
                Thank you for choosing Graphics Garage. We
                look forward to helping you build and grow
                your brand.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
