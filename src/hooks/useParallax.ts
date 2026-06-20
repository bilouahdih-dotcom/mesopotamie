import { useEffect, type RefObject } from "react";

// Décale l'élément verticalement selon sa position dans le viewport (effet parallax).
// speed > 0 : bouge moins vite que le scroll. baseScale pour éviter les bords vides.
export function useParallax<T extends HTMLElement>(
  ref: RefObject<T>,
  { speed = 0.15, baseScale = 1.12 }: { speed?: number; baseScale?: number } = {}
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // distance du centre de l'élément au centre du viewport
      const offset = r.top + r.height / 2 - vh / 2;
      el.style.transform = `translate3d(0, ${(-offset * speed).toFixed(1)}px, 0) scale(${baseScale})`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [ref, speed, baseScale]);
}
