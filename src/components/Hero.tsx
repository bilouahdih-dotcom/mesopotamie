import { useRef } from "react";
import { ShoppingBag, Bike, ChevronRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
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
    <>
      <HeroGeometric
        badge={`${restaurant.name} · ${restaurant.address.city}`}
        title1="Le goût d'un savoir-faire"
        title2="venu de Mésopotamie"
        subtitle="Kebabs généreux, viandes grillées au feu et spécialités maison. Frais, 100% halal. Sur place, à emporter ou en livraison."
      >
        <div className="mt-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          <Button asChild>
            <a href="#carte">Voir la carte</a>
          </Button>
          <Button
            asChild
            variant="link"
            className="text-white hover:text-white/80"
          >
            <a href={restaurant.tel}>
              <Phone className="size-4" />
              Commander {restaurant.phone}
              <ChevronRight className="size-4" />
            </a>
          </Button>
        </div>

        <div className="mt-6 flex items-center justify-center gap-3 text-sm text-white/60">
          <Stars rating={Math.round(restaurant.rating)} className="[&_svg]:size-4" />
          <span>
            <strong className="font-semibold text-white">{ratingLabel}/5</strong>
            <span className="mx-2 text-white/30">·</span>+{restaurant.reviewCount} avis
          </span>
        </div>

        <DeliveryButtons className="mt-6" />
      </HeroGeometric>

      {/* Image produit pleine largeur, parallax au scroll */}
      <div className="overflow-hidden bg-background">
        <div className="mx-auto h-[44vh] w-full max-w-[1400px] overflow-hidden md:h-[70vh]">
          <img
            ref={imgRef}
            src={heroImage}
            alt="Grillades du restaurant Mésopotamie"
            className="h-full w-full object-cover will-change-transform"
          />
        </div>
      </div>
    </>
  );
}

export { DeliveryButtons };
