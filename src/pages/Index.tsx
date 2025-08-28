import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import CredibilitySection from "@/components/CredibilitySection";
import OfferSection from "@/components/OfferSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <BenefitsSection />
      <CredibilitySection />
      <OfferSection />
      <Footer />
    </div>
  );
};

export default Index;
