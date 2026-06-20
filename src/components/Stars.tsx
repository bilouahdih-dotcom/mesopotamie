import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

// Rangée de 5 étoiles, remplies jusqu'à `rating`.
export function Stars({ rating = 5, className }: { rating?: number; className?: string }) {
  return (
    <div className={cn("flex", className)} aria-label={`${rating} sur 5`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <Star
          key={i}
          className={cn("size-4", i < rating ? "fill-primary text-primary" : "text-border")}
        />
      ))}
    </div>
  );
}
