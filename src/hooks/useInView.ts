import { useEffect, useState, type RefObject } from "react";

// Renvoie true une fois que l'élément référencé entre dans le viewport.
// Mutualise la logique d'IntersectionObserver entre Reveal et CountUp.
export function useInView<T extends Element>(
  ref: RefObject<T>,
  { threshold = 0.15 }: { threshold?: number } = {}
) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Environnement sans IntersectionObserver (SSR, très vieux navigateur) : on révèle tout de suite.
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref, threshold]);

  return inView;
}
