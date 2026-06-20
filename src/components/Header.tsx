import { useState } from "react";
import { Menu as MenuIcon, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { restaurant, nav } from "@/data/restaurant";
import { useScrolled } from "@/hooks/useScrolled";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(10);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        scrolled ? "border-border/70 bg-background/80 backdrop-blur-xl" : "border-transparent bg-background/80 backdrop-blur-xl"
      )}
    >
      <div className="container flex h-12 items-center justify-between">
        <a href="#" className="font-display text-[17px] font-semibold tracking-tight">
          Méso<span className="text-primary">potamie</span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-xs font-normal text-foreground/80 transition-colors hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild size="sm">
            <a href={restaurant.tel}>Commander</a>
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="size-9 md:hidden"
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
              <a href={restaurant.tel}>Commander · {restaurant.phone}</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
