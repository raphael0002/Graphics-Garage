import { AboutHeroSection } from "@/components/AboutSection";
import { CompanyStatsSection } from "@/components/CompanyStatsSection";
import { ContactSection } from "@/components/ContactSection";
import { FloatingNav } from "@/components/FloatingNav";
import { Footer } from "@/components/Footer";
import { TeamSection } from "@/components/TeamSection";
import { ValuesSection } from "@/components/ValuesSecion";


export default function AboutPage() {
    return (
        <main className="relative overflow-x-hidden mb-10 md:mb-0">
            <FloatingNav />
            <AboutHeroSection />
            <CompanyStatsSection />
            <ValuesSection />
            <TeamSection />
            <ContactSection />
            <Footer />
        </main>
    )
}
