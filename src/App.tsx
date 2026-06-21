import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { SpecialtiesMarquee, MenuSection } from "@/components/MenuSection";
import { GallerySection } from "@/components/GallerySection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { InfoSection } from "@/components/InfoSection";
import { CtaSection, Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Section } from "@/components/Section";
import { FoodMarquee } from "@/components/FoodMarquee";

export default function App() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <FoodMarquee />
        <Section><AboutSection /></Section>
        <SpecialtiesMarquee />
        <Section><MenuSection /></Section>
        <Section><GallerySection /></Section>
        <Section><ReviewsSection /></Section>
        <Section><InfoSection /></Section>
        <Section><CtaSection /></Section>
      </main>
      <Footer />
    </div>
  );
}
