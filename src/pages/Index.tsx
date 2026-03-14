import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import KpiStrip from "@/components/KpiStrip";
import FeaturedListings from "@/components/FeaturedListings";
import ZonasSection from "@/components/ZonasSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <KpiStrip />
      <FeaturedListings />
      <ZonasSection />
      <Footer />
    </div>
  );
};

export default Index;
