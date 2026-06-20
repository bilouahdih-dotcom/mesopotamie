import { Carousel } from "@/components/Carousel";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";
import { gallery } from "@/data/restaurant";

export function GallerySection() {
  return (
    <section id="galerie" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />
      <div className="container relative">
        <Reveal>
          <SectionHead eyebrow="En images" title="L'ambiance & les assiettes">
            Des grillades fumées, des assiettes généreuses et l'ambiance chaleureuse de notre
            salle.
          </SectionHead>
        </Reveal>
        <Reveal className="mt-14" delay={150}>
          <Carousel slides={[...gallery]} />
        </Reveal>
      </div>
    </section>
  );
}
