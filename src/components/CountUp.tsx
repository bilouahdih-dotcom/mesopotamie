import { useEffect, useRef, useState } from "react";

// Compteur animé qui démarre quand il devient visible
export function CountUp({
  to,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1400,
}: {
  to: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const begin = () => {
      if (started.current) return;
      started.current = true;
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
        setValue(to * eased);
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) begin();
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    // Filet de sécurité : démarre le compteur même si l'observer ne se déclenche pas
    const fallback = window.setTimeout(begin, 1600);
    return () => {
      obs.disconnect();
      window.clearTimeout(fallback);
    };
  }, [to, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {value.toFixed(decimals).replace(".", ",")}
      {suffix}
    </span>
  );
}
