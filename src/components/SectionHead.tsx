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
        "inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.22em]",
        dark ? "text-accent" : "text-primary",
        className
      )}
    >
      <span className={cn("h-px w-6", dark ? "bg-accent/60" : "bg-primary/40")} />
      {children}
      <span className={cn("h-px w-6", dark ? "bg-accent/60" : "bg-primary/40")} />
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
          "mt-5 font-display text-4xl font-semibold tracking-tight md:text-5xl",
          dark && "text-surface-dark-foreground"
        )}
      >
        {title}
      </h2>
      {children && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed md:text-lg",
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
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <div className="ornament-line-gold flex-1" />
      <div className="size-1.5 rotate-45 bg-accent/70" />
      <div className="ornament-line-gold flex-1" />
    </div>
  );
}
