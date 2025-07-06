import { FloatingNav } from "@/components/FloatingNav";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Graphics Garage",
  description:
    "Learn how Graphics Garage collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="relative min-h-screen">
      <FloatingNav />

      <section className="pt-10 md:pt-24 pb-16 md:pb-20 section-light transition-colors duration-300 p">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-professional mb-4">
              Privacy Policy
              <span className="text-purple-primary">.</span>
            </h1>
            <p className="text-lg text-muted-professional">
              Last updated: December 30, 2024
            </p>
            <p className="text-muted-professional leading-relaxed mt-4">
              {`At Graphics Garage, we value your privacy and
              are committed to protecting your personal
              information. This Privacy Policy outlines how
              we collect, use, store, and protect the
              information you provide through our website,
              particularly via our "Contact Us" form. By
              using our website, you agree to the practices
              described in this policy.`}
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-professional mb-4">
                  1. Information We Collect
                </h2>
                <p className="text-muted-professional leading-relaxed mb-4">
                  {`We collect the following personal
                  information when you submit our "Contact
                  Us" form:`}
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-professional">
                  <li>
                    Name: To address you personally and
                    manage your inquiry.
                  </li>
                  <li>
                    Email Address: To respond to your
                    inquiry and communicate with you.
                  </li>
                  <li>
                    Phone Number: To contact you if needed
                    for follow-up or clarification.
                  </li>
                  <li>
                    Message: To understand your inquiry or
                    request and provide appropriate
                    assistance.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-professional mb-4">
                  2. How We Collect Information
                </h2>
                <p className="text-muted-professional leading-relaxed mb-4">
                  {`We collect personal information directly
                  from you when you voluntarily submit it
                  through the "Contact Us" form on our
                  website. The information you provide is
                  sent to our company email,
                  connectgraphicsgarage@gmail.com, for
                  processing and response.`}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-professional mb-4">
                  3. How We Use Your Information
                </h2>
                <p className="text-muted-professional leading-relaxed mb-4">
                  The personal information you provide is
                  used for the following purposes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-professional">
                  <li>
                    To respond to your inquiries, questions,
                    or requests.
                  </li>
                  <li>
                    To provide you with information about
                    our services, such as social media
                    design, graphic design, UI/UX design,
                    and website/app development.
                  </li>
                  <li>
                    To improve our services and customer
                    experience based on your feedback.
                  </li>
                  <li>
                    To manage and maintain our business
                    relationship with you.
                  </li>
                </ul>
                <p className="text-muted-professional leading-relaxed mt-4">
                  We do not use your information for
                  automated decision-making or profiling.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-professional mb-4">
                  4. Sharing Your Information
                </h2>
                <p className="text-muted-professional leading-relaxed">
                  We do not sell, trade, or otherwise share
                  your personal information with third
                  parties, except in the following
                  circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-professional">
                  <li>
                    Service Providers: We may share your
                    information with trusted service
                    providers (e.g., email service
                    providers) who assist us in operating
                    our website or managing communications,
                    provided they agree to keep your
                    information confidential.
                  </li>
                  <li>
                    Legal Requirements: We may disclose your
                    information if required by law or to
                    protect the rights, safety, or property
                    of Graphics Garage or others.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-professional mb-4">
                  5. Data Storage and Security
                </h2>
                <p className="text-muted-professional leading-relaxed mb-4">
                  Your personal information is stored
                  securely in our company email system and
                  related databases. We implement reasonable
                  technical and organizational measures to
                  protect your data from unauthorized
                  access, loss, or misuse. However, no
                  online system is completely secure, and we
                  cannot guarantee absolute security of your
                  information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-professional mb-4">
                  6. Data Retention
                </h2>
                <p className="text-muted-professional leading-relaxed mb-4">
                  We retain your personal information only
                  for as long as necessary to fulfill the
                  purposes outlined in this policy, respond
                  to your inquiries, or comply with legal
                  obligations. Once no longer needed, your
                  information will be securely deleted or
                  anonymized.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-professional mb-4">
                  7. Your Rights
                </h2>
                <p className="text-muted-professional leading-relaxed mb-4">
                  Depending on your location, you may have
                  the following rights regarding your
                  personal information:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-professional">
                  <li>
                    Access: Request a copy of the personal
                    information we hold about you.
                  </li>
                  <li>
                    Correction: Request correction of
                    inaccurate or incomplete information.
                  </li>
                  <li>
                    Deletion: Request deletion of your
                    personal information, subject to legal
                    obligations.
                  </li>
                  <li>
                    Objection: Object to the processing of
                    your personal information for specific
                    purposes.
                  </li>
                </ul>
                <p className="text-muted-professional leading-relaxed mt-4">
                  To exercise these rights, please contact
                  us at connectgraphicsgarage@gmail.com. We
                  will respond to your request within a
                  reasonable timeframe, in accordance with
                  applicable laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-professional mb-4">
                  8. Third-Party Links
                </h2>
                <p className="text-muted-professional leading-relaxed mb-4">
                  Our website may contain links to
                  third-party websites. We are not
                  responsible for the privacy practices or
                  content of these websites. We encourage
                  you to review the privacy policies of any
                  third-party sites you visit.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-professional mb-4">
                  9. Changes to This Privacy Policy
                </h2>
                <p className="text-muted-professional leading-relaxed mb-4">
                  {`
                  We may update this Privacy Policy from
                  time to time to reflect changes in our
                  practices or legal requirements. Any
                  updates will be posted on this page with
                  an updated "Last Updated" date. We
                  encourage you to review this policy
                  periodically.
                  `}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-professional mb-4">
                  6. Contact Us
                </h2>
                <p className="text-muted-professional leading-relaxed">
                  If you have any questions, concerns, or
                  requests regarding this Privacy Policy or
                  our data practices, please contact us at:
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
                    WhatsApp : +977-9810046115
                  </p>
                </div>
                <p className="text-muted-professional leading-relaxed mt-4">
                  Thank you for trusting Graphics Garage
                  with your personal information. We are
                  committed to safeguarding your privacy and
                  providing you with exceptional service.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
