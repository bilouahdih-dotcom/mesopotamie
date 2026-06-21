import { Marquee } from "@/components/Marquee";
import { gallery, unsplashUrl } from "@/data/restaurant";

// Bandeau de photos de plats qui défile en continu (très visible)
export function FoodMarquee() {
  return (
    <div className="overflow-hidden border-y border-border bg-secondary/40 py-6 md:py-8">
      <Marquee
        items={[...gallery]}
        duration="42s"
        renderItem={(g) => (
          <div className="group mx-2 h-40 w-60 overflow-hidden rounded-2xl shadow-card md:h-56 md:w-80">
            <img
              src={unsplashUrl(g.id, 600)}
              alt={g.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        )}
      />
    </div>
  );
}
