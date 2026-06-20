import { useState } from "react";
import { Phone, MapPin, Clock, Menu as MenuIcon, X, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { restaurant, nav } from "@/data/restaurant";
import { useScrolled } from "@/hooks/useScrolled";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(60);

  return (
    <>
      <div className="hidden border-b border-white/5 bg-surface-dark text-surface-dark-foreground/80 md:block">
        <div className="container flex items-center justify-between py-2.5 text-xs">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-3.5 text-accent" />
              {restaurant.address.street}, {restaurant.address.city}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="size-3.5 text-accent" />
              Lun–Sam · 11h30–23h30
            </span>
          </div>
          <span className="inline-flex items-center gap-1.5 font-medium text-accent">
            <Leaf className="size-3.5" />
            100% Halal
          </span>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-border/60 bg-background/90 shadow-card backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <div className="container flex h-[4.25rem] items-center justify-between md:h-[4.75rem]">
          <a href="#" className="group flex flex-col">
            <span
              className={cn(
                "font-display text-2xl font-semibold leading-none tracking-tight transition-colors md:text-[1.65rem]",
                scrolled ? "text-foreground" : "text-white"
              )}
            >
              Méso<span className="text-accent">potamie</span>
            </span>
            <span
              className={cn(
                "mt-0.5 text-[0.6rem] font-medium uppercase tracking-[0.28em] transition-colors",
                scrolled ? "text-muted-foreground" : "text-white/50"
              )}
            >
              Grillades & spécialités
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  scrolled
                    ? "text-muted-foreground hover:bg-secondary hover:text-foreground"
                    : "text-white/75 hover:bg-white/10 hover:text-white"
                )}
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Button
              asChild
              className={cn(
                "shadow-glow-gold",
                !scrolled && "bg-accent text-surface-dark hover:bg-accent/90"
              )}
            >
              <a href={restaurant.tel}>
                <Phone />
                Commander
              </a>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className={cn("md:hidden", !scrolled && "text-white hover:bg-white/10 hover:text-white")}
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X /> : <MenuIcon />}
          </Button>
        </div>

        {open && (
          <div className="border-t border-border bg-background md:hidden">
            <div className="container flex flex-col gap-1 py-4">
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium transition-colors hover:bg-secondary"
                >
                  {n.label}
                </a>
              ))}
              <Button asChild className="mt-3">
                <a href={restaurant.tel}>
                  <Phone />
                  {restaurant.phone}
                </a>
              </Button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
