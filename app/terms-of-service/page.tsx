import { FloatingNav } from "@/components/FloatingNav"
import { Footer } from "@/components/Footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Terms of Service - Graphics Garage",
    description: "Read the terms and conditions for using Graphics Garage services.",
}

export default function TermsOfServicePage() {
    return (
        <main className="relative min-h-screen">
            <FloatingNav />

            <section className="pt-32 pb-16 md:pb-20 section-light transition-colors duration-300">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <div className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-professional mb-4">
                            Terms of Service<span className="text-purple-primary">.</span>
                        </h1>
                        <p className="text-lg text-muted-professional">Last updated: December 30, 2024</p>
                    </div>

                    <div className="prose prose-lg max-w-none">
                        <div className="space-y-8">
                            <section>
                                <h2 className="text-2xl font-bold text-professional mb-4">1. Acceptance of Terms</h2>
                                <p className="text-muted-professional leading-relaxed">
                                    By accessing and using Graphics Garage services, you accept and agree to be bound by the terms and
                                    provision of this agreement. If you do not agree to abide by the above, please do not use this
                                    service.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-professional mb-4">2. Services Description</h2>
                                <p className="text-muted-professional leading-relaxed mb-4">
                                    Graphics Garage provides digital design and development services including but not limited to:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-muted-professional">
                                    <li>Web design and development</li>
                                    <li>Graphic design and branding</li>
                                    <li>UI/UX design</li>
                                    <li>Digital marketing services</li>
                                    <li>Mobile app development</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-professional mb-4">3. Client Responsibilities</h2>
                                <p className="text-muted-professional leading-relaxed mb-4">As a client, you agree to:</p>
                                <ul className="list-disc pl-6 space-y-2 text-muted-professional">
                                    <li>Provide accurate and complete information</li>
                                    <li>Respond to requests for feedback in a timely manner</li>
                                    <li>Make payments according to agreed terms</li>
                                    <li>Respect intellectual property rights</li>
                                    <li>Provide necessary materials and access for project completion</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-professional mb-4">4. Payment Terms</h2>
                                <p className="text-muted-professional leading-relaxed mb-4">
                                    Payment terms will be specified in individual project agreements. Generally:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-muted-professional">
                                    <li>A deposit may be required before work begins</li>
                                    <li>Payments are due within 30 days of invoice date</li>
                                    <li>Late payments may incur additional fees</li>
                                    <li>Work may be suspended for overdue accounts</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-professional mb-4">5. Intellectual Property</h2>
                                <p className="text-muted-professional leading-relaxed">
                                    Upon full payment, clients receive ownership of the final deliverables created specifically for their
                                    project. Graphics Garage retains the right to use completed work for portfolio and marketing purposes
                                    unless otherwise agreed in writing.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-professional mb-4">6. Limitation of Liability</h2>
                                <p className="text-muted-professional leading-relaxed">
                                    {`Graphics Garage's liability is limited to the amount paid for services. We are not liable for any
                                    indirect, incidental, or consequential damages arising from the use of our services.`}
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-professional mb-4">7. Termination</h2>
                                <p className="text-muted-professional leading-relaxed">
                                    Either party may terminate services with written notice. Upon termination, payment is due for all work
                                    completed to date.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-professional mb-4">8. Contact Information</h2>
                                <p className="text-muted-professional leading-relaxed">
                                    For questions about these Terms of Service, please contact us:
                                </p>
                                <div className="mt-4 p-4 bg-purple-primary/5 rounded-lg border border-purple-primary/20">
                                    <p className="text-professional font-medium">Graphics Garage</p>
                                    <p className="text-muted-professional">Email: legal@graphicsgarage.com</p>
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
