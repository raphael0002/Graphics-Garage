import { ContactSection } from "@/components/ContactSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { WorkSection } from "@/components/WorkSection";

export default function WorksPage() {
    return (
        <main className="relative overflow-x-hidden mb-10 md:mb-0">
            <WorkSection />
            <PortfolioSection />
            <ContactSection />
        </main>
    )
}
