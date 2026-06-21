import { useState } from "react";
import { Flame } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Marquee } from "@/components/Marquee";
import { Reveal } from "@/components/Reveal";
import { TiltCard } from "@/components/TiltCard";
import { SectionHead } from "@/components/SectionHead";
import {
  dishes,
  menuCategories,
  specialties,
  unsplashUrl,
  type MenuCategory,
} from "@/data/restaurant";
import { cn } from "@/lib/utils";

export function SpecialtiesMarquee() {
  return (
    <div className="relative overflow-hidden bg-surface-dark py-4">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-surface-dark to-transparent" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-surface-dark to-transparent" />
      <Marquee
        items={[...specialties]}
        duration="35s"
        renderItem={(label) => (
          <span className="flex items-center gap-3 px-4 font-display text-xl font-medium text-surface-dark-foreground/90">
            {label}
            <Flame className="size-4 text-accent" />
          </span>
        )}
      />
    </div>
  );
}

export function MenuSection() {
  const [active, setActive] = useState<MenuCategory | "all">("all");

  const filtered =
    active === "all" ? dishes : dishes.filter((d) => d.category === active);

  return (
    <section id="carte" className="section-padding bg-secondary/30">
      <div className="container">
        <Reveal>
          <SectionHead eyebrow="La carte" title="Nos spécialités">
            Une sélection de nos plats les plus appréciés. Carte complète et menus disponibles sur
            place.
          </SectionHead>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setActive("all")}
              className={cn(
                "rounded-full px-5 py-2.5 text-sm font-medium transition-all",
                active === "all"
                  ? "bg-primary text-primary-foreground shadow-glow"
                  : "bg-card text-muted-foreground hover:bg-card hover:text-foreground"
              )}
            >
              Tout voir
            </button>
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={cn(
                  "rounded-full px-5 py-2.5 text-sm font-medium transition-all",
                  active === cat.id
                    ? "bg-primary text-primary-foreground shadow-glow"
                    : "bg-card text-muted-foreground hover:bg-card hover:text-foreground"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((d, i) => (
            <Reveal key={d.name} delay={(i % 4) * 80}>
              <TiltCard className="h-full [transform-style:preserve-3d]">
              <article className="card-lift group h-full overflow-hidden rounded-2xl border border-border/60 bg-card shadow-card">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={unsplashUrl(d.image, 600)}
                    alt={d.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  {d.tag && (
                    <Badge className="absolute left-3 top-3 border-0 bg-accent text-surface-dark shadow-sm">
                      {d.tag}
                    </Badge>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-xl font-semibold leading-tight">{d.name}</h3>
                    <span className="shrink-0 font-display text-lg font-semibold text-primary">
                      {d.price}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.desc}</p>
                </div>
              </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <p className="mt-12 text-center text-sm italic text-muted-foreground">
          Maquette de démonstration — plats et prix indicatifs, à confirmer avec le restaurant.
        </p>
      </div>
    </section>
  );
}
