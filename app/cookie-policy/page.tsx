import { FloatingNav } from "@/components/FloatingNav"
import { Footer } from "@/components/Footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Cookie Policy - Graphics Garage",
    description: "Learn about how Graphics Garage uses cookies and similar technologies.",
}

export default function CookiePolicyPage() {
    return (
        <main className="relative min-h-screen">
            <FloatingNav />

            <section className="pt-32 pb-16 md:pb-20 section-light transition-colors duration-300">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <div className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-professional mb-4">
                            Cookie Policy<span className="text-purple-primary">.</span>
                        </h1>
                        <p className="text-lg text-muted-professional">Last updated: December 30, 2024</p>
                    </div>

                    <div className="prose prose-lg max-w-none">
                        <div className="space-y-8">
                            <section>
                                <h2 className="text-2xl font-bold text-professional mb-4">1. What Are Cookies</h2>
                                <p className="text-muted-professional leading-relaxed">
                                    Cookies are small text files that are placed on your computer or mobile device when you visit our
                                    website. They are widely used to make websites work more efficiently and provide information to
                                    website owners.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-professional mb-4">2. How We Use Cookies</h2>
                                <p className="text-muted-professional leading-relaxed mb-4">We use cookies for several purposes:</p>
                                <ul className="list-disc pl-6 space-y-2 text-muted-professional">
                                    <li>
                                        <strong>Essential Cookies:</strong> Required for the website to function properly
                                    </li>
                                    <li>
                                        <strong>Analytics Cookies:</strong> Help us understand how visitors use our website
                                    </li>
                                    <li>
                                        <strong>Functional Cookies:</strong> Remember your preferences and settings
                                    </li>
                                    <li>
                                        <strong>Marketing Cookies:</strong> Used to deliver relevant advertisements
                                    </li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-professional mb-4">3. Types of Cookies We Use</h2>

                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-xl font-semibold text-professional mb-2">Essential Cookies</h3>
                                        <p className="text-muted-professional leading-relaxed">
                                            These cookies are necessary for the website to function and cannot be switched off. They are
                                            usually set in response to actions made by you such as setting privacy preferences or filling in
                                            forms.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold text-professional mb-2">Analytics Cookies</h3>
                                        <p className="text-muted-professional leading-relaxed">
                                            We use Google Analytics to collect information about how visitors use our site. These cookies help
                                            us improve our website by understanding which pages are most popular.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold text-professional mb-2">Functional Cookies</h3>
                                        <p className="text-muted-professional leading-relaxed">
                                            These cookies remember choices you make to improve your experience, such as your preferred
                                            language or theme settings.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-professional mb-4">4. Third-Party Cookies</h2>
                                <p className="text-muted-professional leading-relaxed mb-4">
                                    We may use third-party services that set cookies on our website:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-muted-professional">
                                    <li>
                                        <strong>Google Analytics:</strong> For website analytics and performance monitoring
                                    </li>
                                    <li>
                                        <strong>Social Media Platforms:</strong> For social sharing functionality
                                    </li>
                                    <li>
                                        <strong>Marketing Platforms:</strong> For advertising and remarketing purposes
                                    </li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-professional mb-4">5. Managing Cookies</h2>
                                <p className="text-muted-professional leading-relaxed mb-4">
                                    You can control and manage cookies in several ways:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-muted-professional">
                                    <li>Use your browser settings to block or delete cookies</li>
                                    <li>Use our cookie consent banner to manage preferences</li>
                                    <li>Opt out of Google Analytics using their opt-out tool</li>
                                    <li>{`Visit your browser's help section for specific instructions`}</li>
                                </ul>
                                <p className="text-muted-professional leading-relaxed mt-4">
                                    Please note that blocking certain cookies may impact your experience on our website.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-professional mb-4">6. Updates to This Policy</h2>
                                <p className="text-muted-professional leading-relaxed">
                                    We may update this Cookie Policy from time to time. Any changes will be posted on this page with an
                                    updated revision date.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-professional mb-4">7. Contact Us</h2>
                                <p className="text-muted-professional leading-relaxed">
                                    If you have any questions about our use of cookies, please contact us:
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
