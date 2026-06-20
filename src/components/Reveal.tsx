import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";

type Variant = "up" | "scale" | "blur";

const hidden: Record<Variant, string> = {
  up: "translate-y-10 opacity-0 blur-[6px]",
  scale: "scale-[0.94] opacity-0 blur-[6px]",
  blur: "opacity-0 blur-lg",
};

// Révèle son contenu (slide + blur + scale) facon Apple quand il entre dans le viewport
export function Reveal({
  children,
  className,
  delay = 0,
  variant = "up",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: Variant;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const shown = useInView(ref, { threshold: 0.15 });

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      className={cn(
        "transition-all [transition-duration:900ms] will-change-transform motion-reduce:transition-none motion-reduce:transform-none motion-reduce:blur-none",
        shown ? "translate-y-0 scale-100 opacity-100 blur-0" : hidden[variant],
        className
      )}
    >
      {children}
    </div>
  );
}
