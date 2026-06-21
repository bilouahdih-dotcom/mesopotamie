"use client";

import { useEffect, useRef } from "react";

// Halo lumineux qui suit le curseur dans le conteneur parent (effet 21st.dev)
export function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const parent = el?.parentElement;
    if (!el || !parent) return;
    const move = (e: PointerEvent) => {
      const r = parent.getBoundingClientRect();
      el.style.setProperty("--x", `${e.clientX - r.left}px`);
      el.style.setProperty("--y", `${e.clientY - r.top}px`);
      el.style.opacity = "1";
    };
    const leave = () => {
      el.style.opacity = "0";
    };
    parent.addEventListener("pointermove", move);
    parent.addEventListener("pointerleave", leave);
    return () => {
      parent.removeEventListener("pointermove", move);
      parent.removeEventListener("pointerleave", leave);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300"
      style={{
        background:
          "radial-gradient(550px circle at var(--x, 50%) var(--y, 50%), hsl(var(--primary) / 0.12), transparent 65%)",
      }}
    />
  );
}
