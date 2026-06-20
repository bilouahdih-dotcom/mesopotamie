import { Star, Flame, Leaf, UtensilsCrossed } from "lucide-react";
import { CountUp } from "@/components/CountUp";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";
import { restaurant, unsplashUrl } from "@/data/restaurant";
import { cn } from "@/lib/utils";

const stats = [
  {
    icon: Star,
    node: (
      <>
        <CountUp to={restaurant.rating} decimals={1} />
        <span className="text-accent">★</span>
      </>
    ),
    label: "Note moyenne",
  },
  {
    icon: Flame,
    node: (
      <>
        <CountUp to={restaurant.reviewCount} prefix="+" />
      </>
    ),
    label: "Avis cumulés",
  },
  {
    icon: Leaf,
    node: (
      <>
        <CountUp to={100} suffix="%" />
      </>
    ),
    label: "Halal certifié",
  },
  {
    icon: UtensilsCrossed,
    node: "3 modes",
    label: "Sur place · emporter · livraison",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="mesh-bg absolute inset-0" />
      <div className="container relative">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-full w-full rounded-3xl border border-accent/20" />
              <img
                src={unsplashUrl("photo-1530469912745-a215c6b256ea", 800)}
                alt="Brochettes grillées au charbon"
                className="relative aspect-[4/5] w-full rounded-3xl object-cover shadow-elevated"
              />
              <div className="absolute -bottom-6 -right-4 max-w-[14rem] rounded-2xl border border-border/60 bg-card p-5 shadow-card md:-right-8">
                <p className="font-display text-4xl font-semibold text-primary">100%</p>
                <p className="mt-1 text-sm font-medium">Produits frais, viandes halal sélectionnées</p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal delay={100}>
              <SectionHead eyebrow="Notre maison" title="Une cuisine généreuse, au cœur d'Argenteuil" align="left">
                Au Restaurant Mésopotamie, on cuisine comme à la maison : des grillades préparées sous
                vos yeux, des assiettes copieuses et des saveurs qui voyagent entre la Turquie et le
                berceau de la Mésopotamie.
              </SectionHead>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Viandes halal sélectionnées, pain chaud, sauces maison et un accueil chaleureux qui
                font revenir nos habitués midi et soir. Chaque plat est une invitation au voyage —
                du lahmacun croustillant aux brochettes fumées au charbon de bois.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4">
                {stats.map((s, i) => (
                  <div
                    key={i}
                    className={cn(
                      "group rounded-2xl border border-border/60 bg-card p-5 shadow-card transition-all duration-300 hover:border-accent/30 hover:shadow-elevated",
                      i === 0 && "sm:col-span-2 sm:flex sm:items-center sm:gap-6"
                    )}
                  >
                    <s.icon className="size-5 text-accent transition-transform group-hover:scale-110" />
                    <div className={cn(i === 0 && "sm:mt-0", "mt-3")}>
                      <p className="font-display text-2xl font-semibold md:text-3xl">{s.node}</p>
                      <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
