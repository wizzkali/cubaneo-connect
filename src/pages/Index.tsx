import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturesStrip from "@/components/FeaturesStrip";
import FeaturedListings from "@/components/FeaturedListings";
import ZonasSection from "@/components/ZonasSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturesStrip />
      <FeaturedListings />
      <ZonasSection />
      <Footer />
    </div>
  );
};

export default Index;
