import { useRef } from "react";
import { ShoppingBag, Bike, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Stars } from "@/components/Stars";
import { restaurant, ratingLabel, heroImage } from "@/data/restaurant";
import { useParallax } from "@/hooks/useParallax";
import { cn } from "@/lib/utils";

function DeliveryButtons({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-wrap items-center justify-center gap-2.5", className)}>
      <Button asChild size="sm" className="bg-[#06C167] text-black hover:bg-[#06C167]/90">
        <a href={restaurant.delivery.uberEats} target="_blank" rel="noopener noreferrer">
          <ShoppingBag />
          Uber Eats
        </a>
      </Button>
      <Button asChild size="sm" className="bg-[#00CCBC] text-black hover:bg-[#00CCBC]/90">
        <a href={restaurant.delivery.deliveroo} target="_blank" rel="noopener noreferrer">
          <Bike />
          Deliveroo
        </a>
      </Button>
    </div>
  );
}

export function Hero() {
  const imgRef = useRef<HTMLImageElement>(null);
  useParallax(imgRef, { speed: 0.1, baseScale: 1.2 });

  return (
    <section className="bg-background pt-14 text-center md:pt-20">
      <div className="container">
        <p className="animate-fade-up text-lg font-semibold text-muted-foreground">
          {restaurant.name}
        </p>

        <h1 className="animate-fade-up animate-delay-100 mx-auto mt-2 max-w-4xl font-display text-[44px] font-semibold leading-[1.05] tracking-[-0.02em] md:text-7xl">
          Le goût d'un savoir-faire
          <br className="hidden sm:block" /> venu de Mésopotamie
        </h1>

        <p className="animate-fade-up animate-delay-200 mx-auto mt-5 max-w-xl text-lg text-muted-foreground md:text-xl">
          Kebabs généreux, viandes grillées au feu et spécialités maison. Frais, 100% halal.
          Sur place, à emporter ou en livraison.
        </p>

        <div className="animate-fade-up animate-delay-300 mt-7 flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
          <Button asChild>
            <a href="#carte">Voir la carte</a>
          </Button>
          <Button asChild variant="link">
            <a href={restaurant.tel}>
              Commander {restaurant.phone}
              <ChevronRight className="size-4" />
            </a>
          </Button>
        </div>

        <div className="animate-fade-up animate-delay-300 mt-6 flex items-center justify-center gap-3 text-sm text-muted-foreground">
          <Stars rating={Math.round(restaurant.rating)} className="[&_svg]:size-4" />
          <span>
            <strong className="font-semibold text-foreground">{ratingLabel}/5</strong>
            <span className="mx-2 text-border">·</span>+{restaurant.reviewCount} avis
          </span>
        </div>

        <DeliveryButtons className="animate-fade-up animate-delay-400 mt-6" />
      </div>

      {/* Grande image produit, façon Apple — parallax au scroll */}
      <div className="mt-14 overflow-hidden md:mt-20">
        <div className="mx-auto h-[44vh] w-full max-w-[1400px] overflow-hidden md:h-[70vh]">
          <img
            ref={imgRef}
            src={heroImage}
            alt="Grillades du restaurant Mésopotamie"
            className="h-full w-full object-cover will-change-transform"
          />
        </div>
      </div>
    </section>
  );
}

export { DeliveryButtons };
