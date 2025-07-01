import { ContactSection } from "@/components/ContactSection";
import { FloatingNav } from "@/components/FloatingNav";
import { Footer } from "@/components/Footer";
import { PortfolioSection } from "@/components/PortfolioSection";
import { WorkSection } from "@/components/WorkSection";

export default function WorksPage() {
    return (
        <main className="relative overflow-x-hidden mb-10 md:mb-0">
            <FloatingNav />
            <WorkSection />
            <PortfolioSection />
            <ContactSection />
            <Footer />
        </main>
    )
}
