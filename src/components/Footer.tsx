import { Phone, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DeliveryButtons } from "@/components/Hero";
import { OrnamentDivider } from "@/components/SectionHead";
import { restaurant } from "@/data/restaurant";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-surface-dark py-20 text-surface-dark-foreground md:py-24">
      <div className="absolute inset-0 mesh-bg opacity-40" />
      <div className="grain absolute inset-0" />
      <div className="container relative">
        <OrnamentDivider className="mb-12 max-w-md mx-auto" />
        <div className="flex flex-col items-center gap-10 text-center lg:flex-row lg:justify-between lg:text-left">
          <div className="max-w-xl">
            <h2 className="font-display text-4xl font-semibold md:text-5xl">
              Une envie de grillades ce soir ?
            </h2>
            <p className="mt-4 text-lg text-surface-dark-foreground/70">
              Appelez-nous pour commander ou réserver. À emporter et livraison sur Argenteuil et
              alentours.
            </p>
          </div>
          <div className="flex shrink-0 flex-col items-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-accent text-surface-dark shadow-glow-gold hover:bg-accent/90"
            >
              <a href={restaurant.tel}>
                <Phone />
                {restaurant.phone}
              </a>
            </Button>
            <DeliveryButtons />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-card py-14">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-left">
            <a href="#" className="font-display text-2xl font-semibold">
              Méso<span className="text-primary">potamie</span>
            </a>
            <p className="mt-2 text-sm text-muted-foreground">
              Grillades & spécialités turques · Argenteuil
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              {restaurant.address.street}, {restaurant.address.postal} {restaurant.address.city}
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" asChild className="rounded-full">
              <a href="#" aria-label="Instagram">
                <Instagram />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild className="rounded-full">
              <a href="#" aria-label="Facebook">
                <Facebook />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild className="rounded-full">
              <a href={restaurant.tel} aria-label="Téléphone">
                <Phone />
              </a>
            </Button>
          </div>
        </div>
        <div className="ornament-line mt-10" />
        <p className="mt-8 text-center text-xs text-muted-foreground">
          © 2026 Restaurant Mésopotamie — Maquette de démonstration réalisée à des fins de
          prospection. Données à valider avec l'établissement.
        </p>
      </div>
    </footer>
  );
}
