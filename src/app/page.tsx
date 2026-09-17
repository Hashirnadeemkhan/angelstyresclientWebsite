import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { Marquee } from "@/components/marquee";
import { AboutSection } from "@/components/about-section";
import { ServicesSection } from "@/components/services-section";
import { WhyChooseUsSection } from "@/components/why-choose-us-section";
import { ServiceAreasSection } from "@/components/service-areas-section";
import TestimonialsSection from "@/components/testimonials-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { FloatingCTA } from "@/components/floating-cta";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-brand-paper">
      <Header />
      <HeroSection />
      <Marquee />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ServiceAreasSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
