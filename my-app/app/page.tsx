import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { DeliverySection } from "./components/DeliverySection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { RecordsSection } from "./components/RecordsSection";
import { SalesSection } from "./components/SalesSection";
import { ServicesSection } from "./components/ServicesSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fffaf3] text-slate-900">
      <Header />
      <main className="overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        <SalesSection />
        <ServicesSection />
        <RecordsSection />
        <DeliverySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
