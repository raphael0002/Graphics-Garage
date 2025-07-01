import { ContactSection } from "@/components/ContactSection";
import { FloatingNav } from "@/components/FloatingNav";
import { Footer } from "@/components/Footer";
import { ServicePackagesSection } from "@/components/ServicePackageSection";
import { ServiceProcessSection } from "@/components/ServiceProcessSection";
import { ServiceSection } from "@/components/ServiceSection";
import { servicesData } from "@/data/services";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const service = servicesData.find(
    (s) => s.slug === resolvedParams.slug
  );

  if (!service) {
    return {
      title: "Service Not Found - Graphics Garage",
      description:
        "The requested service page could not be found.",
    };
  }

  return {
    title: `${service.title} - Graphics Garage`,
    description: service.shortDescription,
    openGraph: {
      title: `${service.title} - Graphics Garage`,
      description: service.shortDescription,
    },
  };
}

export default async function ServicePage({
  params,
}: ServicePageProps) {
  const resolvedParams = await params;
  const service = servicesData.find(
    (s) => s.slug === resolvedParams.slug
  );

  if (!service) {
    notFound();
  }

  return (
    <main className="relative min-h-screen overflow-x-hidden mb-16 md:mb-0">
      <FloatingNav />
      <ServiceSection service={service} />
      <ServicePackagesSection packages={service.packages} />
      <ServiceProcessSection process={service.process} />
      <ContactSection />
      <Footer />
    </main>
  );
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}
