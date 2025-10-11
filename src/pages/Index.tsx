import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AwarenessSection from "@/components/AwarenessSection";
import SafetySection from "@/components/SafetySection";
import UtilizationSection from "@/components/UtilizationSection";
import ContactSection from "@/components/ContactSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AwarenessSection />
      <SafetySection />
      <UtilizationSection />
      <ContactSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;
