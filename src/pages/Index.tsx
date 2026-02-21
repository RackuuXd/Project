import HeroFish from "@/components/HeroFish";
import HeroSection from "@/components/HeroSection";
import Categories from "@/components/Categories";
import ProductGrid from "@/components/ProductGrid";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background gradient layers */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-midnight to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--violet-tint)/0.3),transparent_70%)]" />
      </div>

      <HeroFish />
      <Navbar />
      <HeroSection />
      <Categories />
      <ProductGrid />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
