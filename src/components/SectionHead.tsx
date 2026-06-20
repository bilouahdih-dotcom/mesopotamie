import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
  dark = false,
}: {
  children: ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <span
      className={cn(
        "text-sm font-semibold",
        dark ? "text-primary" : "text-primary",
        className
      )}
    >
      {children}
    </span>
  );
}

export function SectionHead({
  eyebrow,
  title,
  children,
  dark = false,
  align = "center",
}: {
  eyebrow: ReactNode;
  title: string;
  children?: ReactNode;
  dark?: boolean;
  align?: "center" | "left";
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
      <h2
        className={cn(
          "mt-3 font-display text-4xl font-semibold tracking-[-0.015em] md:text-5xl",
          dark && "text-surface-dark-foreground"
        )}
      >
        {title}
      </h2>
      {children && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed md:text-xl",
            dark ? "text-surface-dark-foreground/70" : "text-muted-foreground"
          )}
        >
          {children}
        </p>
      )}
    </div>
  );
}

export function OrnamentDivider({ className }: { className?: string }) {
  return <div className={cn("h-px w-full bg-border", className)} />;
}
