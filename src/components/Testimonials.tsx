import { Star, Quote } from "lucide-react";
import { Marquee } from "@/components/Marquee";

type Review = { name: string; initials: string; text: string; rating: number };

// ⚠️ Avis illustratifs (à remplacer par de vrais avis Google une fois validés)
const reviews: Review[] = [
  { name: "Karim B.", initials: "KB", rating: 5, text: "Le meilleur kebab d'Argenteuil ! Viande grillée parfaite et portions généreuses." },
  { name: "Sophie M.", initials: "SM", rating: 5, text: "Assiette mixte excellente, tout est frais et fait minute. Accueil très sympa." },
  { name: "Mehdi R.", initials: "MR", rating: 4, text: "Très bon rapport qualité-prix, l'aubergine farcie maison est un délice." },
  { name: "Laura D.", initials: "LD", rating: 5, text: "On commande souvent en livraison, toujours chaud et savoureux. Je recommande !" },
  { name: "Yanis T.", initials: "YT", rating: 5, text: "Grillades au top, le pain est chaud et les sauces maison font la différence." },
  { name: "Nadia K.", initials: "NK", rating: 4, text: "Cadre agréable, service rapide le midi. Le baklava en dessert, un régal." },
];

function ReviewCard({ r }: { r: Review }) {
  return (
    <div className="flex w-[300px] flex-col rounded-xl border bg-card p-5 shadow-sm sm:w-[340px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-full bg-accent font-serif text-sm font-semibold text-accent-foreground">
            {r.initials}
          </div>
          <span className="font-medium">{r.name}</span>
        </div>
        <Quote className="size-5 text-border" />
      </div>
      <div className="mt-3 flex">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={i < r.rating ? "size-4 fill-primary text-primary" : "size-4 text-border"} />
        ))}
      </div>
      <p className="mt-3 text-sm text-muted-foreground">{r.text}</p>
    </div>
  );
}

export function Testimonials() {
  return (
    <Marquee
      items={reviews}
      duration="48s"
      renderItem={(r) => <ReviewCard r={r} />}
    />
  );
}
