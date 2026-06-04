import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { TrustSection } from "@/components/sections/trust-section";
import { WhyIlmoraSection } from "@/components/sections/why-ilmora";
import { ServicesEcosystem } from "@/components/sections/services-ecosystem";
import { StudentJourney } from "@/components/sections/student-journey";
import { EquivalencySection } from "@/components/sections/equivalency-section";
import { UniversityNetwork } from "@/components/sections/university-network";
import { SuccessStories } from "@/components/sections/success-stories";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { CTASection } from "@/components/sections/cta-section";
import { ClientWrapper } from "@/components/layout/client-wrapper";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TrustSection />
        <WhyIlmoraSection />
        <ServicesEcosystem />
        <StudentJourney />
        <EquivalencySection />
        <UniversityNetwork />
        <SuccessStories />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
      <ClientWrapper />
    </>
  );
}
