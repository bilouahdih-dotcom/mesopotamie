import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type Slide = { id: string; alt: string };

export function Carousel({ slides }: { slides: Slide[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);

  const slideWidth = (el: HTMLDivElement) => el.scrollWidth / slides.length;

  const onScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const i = Math.round(el.scrollLeft / slideWidth(el));
    activeRef.current = i;
    setActive(i);
  };

  const scrollTo = (index: number) => {
    const el = trackRef.current;
    if (!el) return;
    const next = (index + slides.length) % slides.length;
    el.scrollTo({ left: next * slideWidth(el), behavior: "smooth" });
  };

  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => scrollTo(activeRef.current + 1), 4500);
    return () => clearInterval(t);
  }, [paused]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        ref={trackRef}
        onScroll={onScroll}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {slides.map((s, i) => (
          <div
            key={s.id}
            className="group w-[88%] shrink-0 snap-center sm:w-[58%] lg:w-[38%]"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-elevated">
              <img
                src={`https://images.unsplash.com/${s.id}?auto=format&fit=crop&w=900&q=85`}
                alt={s.alt}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 translate-y-full p-5 transition-transform duration-500 group-hover:translate-y-0">
                <p className="font-display text-lg font-medium text-white">{s.alt}</p>
              </div>
              <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-surface-dark backdrop-blur-sm">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
          </div>
        ))}
      </div>

      <Button
        variant="outline"
        size="icon"
        onClick={() => scrollTo(active - 1)}
        aria-label="Image précédente"
        className="absolute -left-2 top-1/2 z-10 hidden size-11 -translate-y-1/2 rounded-full border-border/60 bg-card/95 shadow-card backdrop-blur md:flex"
      >
        <ChevronLeft />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={() => scrollTo(active + 1)}
        aria-label="Image suivante"
        className="absolute -right-2 top-1/2 z-10 hidden size-11 -translate-y-1/2 rounded-full border-border/60 bg-card/95 shadow-card backdrop-blur md:flex"
      >
        <ChevronRight />
      </Button>

      <div className="mt-8 flex justify-center gap-2">
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => scrollTo(i)}
            aria-label={`Aller à l'image ${i + 1}`}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              i === active
                ? "w-8 bg-accent"
                : "w-1.5 bg-border hover:bg-muted-foreground/40"
            )}
          />
        ))}
      </div>
    </div>
  );
}
