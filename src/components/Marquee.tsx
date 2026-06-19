import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

// Bandeau défilant en continu (pause au survol), avec fondu sur les bords
export function Marquee<T>({
  items,
  renderItem,
  duration = "40s",
  reverse = false,
  className,
}: {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  duration?: string;
  reverse?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]",
        className
      )}
    >
      {[0, 1].map((copy) => (
        <div
          key={copy}
          aria-hidden={copy === 1}
          style={{ ["--duration" as string]: duration, animationDirection: reverse ? "reverse" : "normal" }}
          className="flex shrink-0 animate-marquee items-stretch gap-4 pr-4 group-hover:[animation-play-state:paused] motion-reduce:animate-none"
        >
          {items.map((item, i) => (
            <div key={i}>{renderItem(item, i)}</div>
          ))}
        </div>
      ))}
    </div>
  );
}
