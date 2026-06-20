import {
  Phone,
  MapPin,
  UtensilsCrossed,
  Accessibility,
  CreditCard,
  Clock,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { DirectionsMap } from "@/components/DirectionsMap";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";
import { restaurant, hours } from "@/data/restaurant";

export function InfoSection() {
  return (
    <section id="infos" className="section-padding">
      <div className="container">
        <Reveal>
          <SectionHead eyebrow="Infos pratiques" title="Nous trouver">
            Retrouvez-nous au cœur d'Argenteuil. Sur place, à emporter ou en livraison.
          </SectionHead>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal delay={100}>
            <Card className="h-full overflow-hidden border-border/60 shadow-card">
              <CardContent className="p-8">
                <div className="flex items-center gap-3">
                  <div className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
                    <MapPin className="size-5" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold">Contact & services</h3>
                </div>
                <div className="mt-7 space-y-5 text-sm">
                  <div className="flex gap-4">
                    <MapPin className="size-5 shrink-0 text-accent" />
                    <span>
                      <strong className="block text-base">{restaurant.address.street}</strong>
                      {restaurant.address.postal} {restaurant.address.city}
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <Phone className="size-5 shrink-0 text-accent" />
                    <a href={restaurant.tel} className="text-base font-medium hover:text-primary">
                      {restaurant.phone}
                    </a>
                  </div>
                  <Separator />
                  <div className="flex gap-4">
                    <UtensilsCrossed className="size-5 shrink-0 text-accent" />
                    <span>Sur place · À emporter · Livraison · Menu enfant</span>
                  </div>
                  <div className="flex gap-4">
                    <Accessibility className="size-5 shrink-0 text-accent" />
                    <span>Accès PMR</span>
                  </div>
                  <div className="flex gap-4">
                    <CreditCard className="size-5 shrink-0 text-accent" />
                    <span>Carte bancaire · Espèces · Paiement mobile</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={200}>
            <Card className="h-full overflow-hidden border-border/60 shadow-card">
              <CardContent className="p-8">
                <div className="flex items-center gap-3">
                  <div className="grid size-11 place-items-center rounded-xl bg-accent/15 text-accent-foreground">
                    <Clock className="size-5" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold">Horaires d'ouverture</h3>
                </div>
                <ul className="mt-7">
                  {hours.map((h) => (
                    <li
                      key={h.d}
                      className="flex items-center justify-between border-b border-border/50 py-3 last:border-0"
                    >
                      <span className="font-medium">{h.d}</span>
                      <span
                        className={
                          "closed" in h && h.closed
                            ? "font-medium text-primary"
                            : "text-muted-foreground"
                        }
                      >
                        {h.h}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-xs italic text-muted-foreground">
                  Horaires à confirmer avec le restaurant.
                </p>
              </CardContent>
            </Card>
          </Reveal>
        </div>

        <Reveal className="mt-8" delay={300}>
          <DirectionsMap />
        </Reveal>
      </div>
    </section>
  );
}
