import { Phone, ArrowRight, ChefHat, Flame, ShoppingBag, Bike } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Stars } from "@/components/Stars";
import { restaurant, ratingLabel, heroImage } from "@/data/restaurant";
import { cn } from "@/lib/utils";

function DeliveryButtons({ className, inverted = false }: { className?: string; inverted?: boolean }) {
  return (
    <div className={cn("flex flex-wrap gap-2.5", className)}>
      <Button
        asChild
        size="sm"
        className={cn(
          "bg-[#06C167] text-black hover:bg-[#06C167]/90",
          inverted && "border border-white/10"
        )}
      >
        <a href={restaurant.delivery.uberEats} target="_blank" rel="noopener noreferrer">
          <ShoppingBag />
          Uber Eats
        </a>
      </Button>
      <Button
        asChild
        size="sm"
        className={cn(
          "bg-[#00CCBC] text-black hover:bg-[#00CCBC]/90",
          inverted && "border border-white/10"
        )}
      >
        <a href={restaurant.delivery.deliveroo} target="_blank" rel="noopener noreferrer">
          <Bike />
          Deliveroo
        </a>
      </Button>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative -mt-[4.75rem] min-h-[100svh] overflow-hidden md:-mt-[7.25rem]">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Grillades du restaurant Mésopotamie"
          className="h-full w-full scale-105 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface-dark via-surface-dark/85 to-surface-dark/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-transparent to-surface-dark/30" />
        <div className="grain absolute inset-0 opacity-60" />
      </div>

      <div className="container relative flex min-h-[100svh] flex-col justify-end pb-16 pt-36 md:justify-center md:pb-24 md:pt-40">
        <div className="grid items-end gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
          <div>
            <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-widest text-white/80 backdrop-blur-sm">
              <Flame className="size-3.5 text-accent" />
              Grillades & spécialités turques
            </div>

            <h1 className="animate-fade-up animate-delay-100 mt-8 font-display text-[2.75rem] font-semibold leading-[1.02] tracking-tight text-white md:text-6xl lg:text-7xl">
              Le goût d'un savoir-faire
              <span className="mt-2 block text-gradient-gold">venu de Mésopotamie</span>
            </h1>

            <p className="animate-fade-up animate-delay-200 mt-6 max-w-lg text-base leading-relaxed text-white/70 md:text-lg">
              Kebabs généreux, viandes grillées au feu et spécialités maison, préparés avec des
              produits frais et 100% halal. Sur place, à emporter ou en livraison.
            </p>

            <div className="animate-fade-up animate-delay-300 mt-10 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-accent text-surface-dark shadow-glow-gold hover:bg-accent/90">
                <a href="#carte">
                  Découvrir la carte
                  <ArrowRight />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 bg-white/5 text-white backdrop-blur-sm hover:bg-white/10 hover:text-white"
              >
                <a href={restaurant.tel}>
                  <Phone />
                  {restaurant.phone}
                </a>
              </Button>
            </div>

            <div className="animate-fade-up animate-delay-400 mt-8">
              <p className="mb-2.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white/45">
                Livraison à domicile
              </p>
              <DeliveryButtons inverted />
            </div>

            <div className="animate-fade-up animate-delay-400 mt-10 flex items-center gap-3 text-sm text-white/60">
              <Stars rating={Math.round(restaurant.rating)} className="[&_svg]:size-4 [&_svg]:fill-accent [&_svg]:text-accent" />
              <span>
                <strong className="font-semibold text-white">{ratingLabel}/5</strong>
                <span className="mx-2 text-white/30">·</span>+{restaurant.reviewCount} avis clients
              </span>
            </div>
          </div>

          <div className="animate-fade-up animate-delay-200 hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent/20 to-primary/10 blur-2xl" />
              <div className="glass-panel relative overflow-hidden p-1">
                <img
                  src="https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=800&q=85"
                  alt="Assiette kebab du restaurant"
                  className="aspect-[4/5] w-full rounded-[calc(1rem-2px)] object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-surface-dark/90 via-surface-dark/50 to-transparent p-6 pt-16">
                  <div className="flex items-center gap-4">
                    <div className="grid size-12 place-items-center rounded-full bg-accent/20 text-accent backdrop-blur-sm">
                      <ChefHat className="size-5" />
                    </div>
                    <div>
                      <p className="font-display text-xl font-semibold text-white">Fait minute</p>
                      <p className="text-sm text-white/60">Grillé devant vous, servi chaud</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-6 -top-6 animate-float rounded-2xl border border-white/10 bg-surface-dark/90 px-5 py-4 shadow-elevated backdrop-blur-xl">
                <p className="font-display text-3xl font-semibold text-accent">15+</p>
                <p className="text-xs uppercase tracking-widest text-white/50">Années d'expérience</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block">
        <div className="flex flex-col items-center gap-2 text-white/40">
          <span className="text-[0.6rem] uppercase tracking-[0.3em]">Défiler</span>
          <div className="h-10 w-px bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}

export { DeliveryButtons };
