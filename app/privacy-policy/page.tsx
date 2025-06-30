import { FloatingNav } from "@/components/FloatingNav"
import { Footer } from "@/components/Footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Privacy Policy - Graphics Garage",
    description: "Learn how Graphics Garage collects, uses, and protects your personal information.",
}

export default function PrivacyPolicyPage() {
    return (
        <main className="relative min-h-screen">
            <FloatingNav />

            <section className="pt-32 pb-16 md:pb-20 section-light transition-colors duration-300">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <div className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-professional mb-4">
                            Privacy Policy<span className="text-purple-primary">.</span>
                        </h1>
                        <p className="text-lg text-muted-professional">Last updated: December 30, 2024</p>
                    </div>

                    <div className="prose prose-lg max-w-none">
                        <div className="space-y-8">
                            <section>
                                <h2 className="text-2xl font-bold text-professional mb-4">1. Information We Collect</h2>
                                <p className="text-muted-professional leading-relaxed mb-4">
                                    We collect information you provide directly to us, such as when you create an account, contact us, or
                                    use our services. This may include:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-muted-professional">
                                    <li>Name and contact information (email address, phone number)</li>
                                    <li>Company information and job title</li>
                                    <li>Project requirements and preferences</li>
                                    <li>Communication records and feedback</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-professional mb-4">2. How We Use Your Information</h2>
                                <p className="text-muted-professional leading-relaxed mb-4">We use the information we collect to:</p>
                                <ul className="list-disc pl-6 space-y-2 text-muted-professional">
                                    <li>Provide, maintain, and improve our services</li>
                                    <li>Process transactions and send related information</li>
                                    <li>Send technical notices, updates, and support messages</li>
                                    <li>Respond to your comments, questions, and customer service requests</li>
                                    <li>Communicate with you about products, services, and events</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-professional mb-4">3. Information Sharing</h2>
                                <p className="text-muted-professional leading-relaxed mb-4">
                                    We do not sell, trade, or otherwise transfer your personal information to third parties without your
                                    consent, except as described in this policy. We may share your information:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-muted-professional">
                                    <li>With service providers who assist us in operating our business</li>
                                    <li>To comply with legal obligations or protect our rights</li>
                                    <li>In connection with a business transfer or acquisition</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-professional mb-4">4. Data Security</h2>
                                <p className="text-muted-professional leading-relaxed">
                                    We implement appropriate technical and organizational measures to protect your personal information
                                    against unauthorized access, alteration, disclosure, or destruction. However, no method of
                                    transmission over the internet is 100% secure.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-professional mb-4">5. Your Rights</h2>
                                <p className="text-muted-professional leading-relaxed mb-4">You have the right to:</p>
                                <ul className="list-disc pl-6 space-y-2 text-muted-professional">
                                    <li>Access and update your personal information</li>
                                    <li>Request deletion of your personal information</li>
                                    <li>Opt out of marketing communications</li>
                                    <li>Request a copy of your personal information</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-professional mb-4">6. Contact Us</h2>
                                <p className="text-muted-professional leading-relaxed">
                                    If you have any questions about this Privacy Policy, please contact us at:
                                </p>
                                <div className="mt-4 p-4 bg-purple-primary/5 rounded-lg border border-purple-primary/20">
                                    <p className="text-professional font-medium">Graphics Garage</p>
                                    <p className="text-muted-professional">Email: privacy@graphicsgarage.com</p>
                                    <p className="text-muted-professional">Phone: +1 (555) 000-0000</p>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
