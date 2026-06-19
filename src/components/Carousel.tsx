import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type Slide = { id: string; alt: string };

export function Carousel({ slides }: { slides: Slide[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  // Met à jour la pastille active selon la position de défilement
  const onScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const slideWidth = el.scrollWidth / slides.length;
    setActive(Math.round(el.scrollLeft / slideWidth));
  };

  const scrollTo = (index: number) => {
    const el = trackRef.current;
    if (!el) return;
    const slideWidth = el.scrollWidth / slides.length;
    const next = (index + slides.length) % slides.length;
    el.scrollTo({ left: next * slideWidth, behavior: "smooth" });
  };

  // Lecture automatique (pause au survol)
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => scrollTo(active + 1), 4000);
    return () => clearInterval(t);
  }, [active, paused]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        ref={trackRef}
        onScroll={onScroll}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {slides.map((s) => (
          <div key={s.id} className="w-[85%] shrink-0 snap-center sm:w-[55%] lg:w-[42%]">
            <img
              src={`https://images.unsplash.com/${s.id}?auto=format&fit=crop&w=900&q=80`}
              alt={s.alt}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-2xl border object-cover shadow-sm"
            />
          </div>
        ))}
      </div>

      {/* Flèches */}
      <Button
        variant="outline"
        size="icon"
        onClick={() => scrollTo(active - 1)}
        aria-label="Image précédente"
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/90 shadow-md backdrop-blur"
      >
        <ChevronLeft />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={() => scrollTo(active + 1)}
        aria-label="Image suivante"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/90 shadow-md backdrop-blur"
      >
        <ChevronRight />
      </Button>

      {/* Pastilles */}
      <div className="mt-5 flex justify-center gap-2">
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => scrollTo(i)}
            aria-label={`Aller à l'image ${i + 1}`}
            className={cn(
              "h-2 rounded-full transition-all",
              i === active ? "w-6 bg-primary" : "w-2 bg-border hover:bg-muted-foreground/40"
            )}
          />
        ))}
      </div>
    </div>
  );
}
