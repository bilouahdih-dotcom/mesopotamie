import { Star } from "lucide-react";
import { SectionHead } from "@/components/SectionHead";
import { Testimonials } from "@/components/Testimonials";
import { restaurant, ratingLabel } from "@/data/restaurant";

export function ReviewsSection() {
  return (
    <section id="avis" className="section-padding bg-surface-dark text-surface-dark-foreground">
      <div className="container">
        <SectionHead
          dark
          eyebrow={
            <>
              <Star className="size-3.5 fill-accent text-accent" /> Avis clients
            </>
          }
          title="Ils nous recommandent"
        >
          Note moyenne de {ratingLabel}/5 cumulée sur plus de {restaurant.reviewCount} avis.
        </SectionHead>
      </div>
      <div className="mt-14">
        <Testimonials />
      </div>
    </section>
  );
}
