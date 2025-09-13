import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ModernMinimalistSection from "@/components/ModernMinimalistSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import AboutUsSection from "@/components/AboutUsSection";
import VirtualTourSection from "@/components/VirtualTourSection";
import EngagementSection from "@/components/EngagementSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-linearconcepts">
      <Header />
      <div className="pt-20">
        <HeroSection />
        <ModernMinimalistSection />
        {/* <StatsSection /> */}
        <ServicesSection />
        <AboutUsSection />
        <PortfolioSection />
        <WhyChooseUsSection />
        <VirtualTourSection />
        <EngagementSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
