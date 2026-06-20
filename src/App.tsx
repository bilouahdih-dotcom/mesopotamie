import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { SpecialtiesMarquee, MenuSection } from "@/components/MenuSection";
import { GallerySection } from "@/components/GallerySection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { InfoSection } from "@/components/InfoSection";
import { CtaSection, Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";

export default function App() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <SpecialtiesMarquee />
        <MenuSection />
        <GallerySection />
        <ReviewsSection />
        <InfoSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
