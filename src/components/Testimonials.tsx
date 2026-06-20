import { Quote } from "lucide-react";
import { Marquee } from "@/components/Marquee";
import { Stars } from "@/components/Stars";

type Review = { name: string; initials: string; text: string; rating: number };

const reviews: Review[] = [
  {
    name: "Karim B.",
    initials: "KB",
    rating: 5,
    text: "Le meilleur kebab d'Argenteuil ! Viande grillée parfaite et portions généreuses.",
  },
  {
    name: "Sophie M.",
    initials: "SM",
    rating: 5,
    text: "Assiette mixte excellente, tout est frais et fait minute. Accueil très sympa.",
  },
  {
    name: "Mehdi R.",
    initials: "MR",
    rating: 4,
    text: "Très bon rapport qualité-prix, l'aubergine farcie maison est un délice.",
  },
  {
    name: "Laura D.",
    initials: "LD",
    rating: 5,
    text: "On commande souvent en livraison, toujours chaud et savoureux. Je recommande !",
  },
  {
    name: "Yanis T.",
    initials: "YT",
    rating: 5,
    text: "Grillades au top, le pain est chaud et les sauces maison font la différence.",
  },
  {
    name: "Nadia K.",
    initials: "NK",
    rating: 4,
    text: "Cadre agréable, service rapide le midi. Le baklava en dessert, un régal.",
  },
];

function ReviewCard({ r }: { r: Review }) {
  return (
    <div className="flex w-[320px] flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:w-[360px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="grid size-11 place-items-center rounded-full bg-accent/20 font-display text-sm font-semibold text-accent">
            {r.initials}
          </div>
          <span className="font-medium text-surface-dark-foreground">{r.name}</span>
        </div>
        <Quote className="size-5 text-white/15" />
      </div>
      <Stars
        rating={r.rating}
        className="mt-4 [&_svg]:fill-accent [&_svg]:text-accent"
      />
      <p className="mt-4 text-sm leading-relaxed text-surface-dark-foreground/70">{r.text}</p>
    </div>
  );
}

export function Testimonials() {
  return (
    <Marquee
      items={reviews}
      duration="50s"
      renderItem={(r) => <ReviewCard r={r} />}
    />
  );
}
