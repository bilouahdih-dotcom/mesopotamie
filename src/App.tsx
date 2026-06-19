import { useState } from "react";
import {
  Phone,
  MapPin,
  Clock,
  Menu as MenuIcon,
  X,
  Star,
  Flame,
  Leaf,
  ChefHat,
  Instagram,
  Facebook,
  UtensilsCrossed,
  CreditCard,
  Accessibility,
  ArrowRight,
  ShoppingBag,
  Bike,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Carousel } from "@/components/Carousel";
import { DirectionsMap } from "@/components/DirectionsMap";

const PHONE = "01 39 47 03 82";
const TEL = "tel:0139470382";

// ⚠️ Liens de livraison : remplacer par la vraie page du restaurant une fois confirmée
const UBER_EATS = "https://www.ubereats.com/fr/search?q=Restaurant%20M%C3%A9sopotamie%20Argenteuil";
const DELIVEROO = "https://deliveroo.fr/fr/search?q=Restaurant%20M%C3%A9sopotamie%20Argenteuil";

function DeliveryButtons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <a
        href={UBER_EATS}
        target="_blank"
        rel="noreferrer"
        className="inline-flex h-11 items-center gap-2 rounded-full bg-[#06C167] px-5 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5"
      >
        <ShoppingBag className="size-4" /> Uber Eats
      </a>
      <a
        href={DELIVEROO}
        target="_blank"
        rel="noreferrer"
        className="inline-flex h-11 items-center gap-2 rounded-full bg-[#00CCBC] px-5 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5"
      >
        <Bike className="size-4" /> Deliveroo
      </a>
    </div>
  );
}

const nav = [
  { href: "#about", label: "Le restaurant" },
  { href: "#carte", label: "La carte" },
  { href: "#galerie", label: "Galerie" },
  { href: "#infos", label: "Infos & accès" },
];

const dishes = [
  { name: "Assiette Kebab", desc: "Viande grillée, frites maison, salade et sauce au choix.", price: "10,90 €", tag: "Best-seller" },
  { name: "Sandwich Kebab Poulet", desc: "Pain frais, poulet mariné, crudités et sauces maison.", price: "7,50 €" },
  { name: "Assiette Grillades mixtes", desc: "Adana, ailes et brochette de poulet, riz ou frites.", price: "15,90 €", tag: "Généreux" },
  { name: "Brochette Adana", desc: "Brochette de bœuf épicée grillée au charbon.", price: "13,50 €" },
  { name: "Aubergine farcie", desc: "Spécialité de la maison mijotée à la tomate.", price: "11,90 €", tag: "Maison" },
  { name: "Lahmacun", desc: "Fine galette turque garnie de viande hachée.", price: "6,00 €" },
  { name: "Menu enfant", desc: "Nuggets ou kebab, frites, boisson et dessert.", price: "8,00 €" },
  { name: "Baklava maison", desc: "Pâtisserie aux noix et au sirop, café offert.", price: "4,50 €", tag: "Dessert" },
];

const hours = [
  { d: "Lundi", h: "11h30 – 23h30" },
  { d: "Mardi", h: "11h30 – 23h30" },
  { d: "Mercredi", h: "11h30 – 23h30" },
  { d: "Jeudi", h: "11h30 – 23h30" },
  { d: "Vendredi", h: "11h30 – 23h30" },
  { d: "Samedi", h: "11h30 – 23h30" },
  { d: "Dimanche", h: "Fermé", closed: true },
];

const gallery = [
  { id: "photo-1561758033-d89a9ad46330", alt: "Kebab grillé" },
  { id: "photo-1633321702518-7feccafb94d5", alt: "Assortiment de grillades" },
  { id: "photo-1599487488170-d11ec9c172f0", alt: "Assiette généreuse" },
  { id: "photo-1606491956689-2ea866880c84", alt: "Spécialité turque" },
  { id: "photo-1530469912745-a215c6b256ea", alt: "Brochettes au charbon" },
  { id: "photo-1540713434306-58505cf1b6fc", alt: "Baklava maison" },
  { id: "photo-1555939594-58d7cb561ad1", alt: "Grillades variées" },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border bg-secondary px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
      {children}
    </span>
  );
}

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Top bar */}
      <div className="hidden border-b bg-secondary/60 md:block">
        <div className="container flex items-center justify-between py-2 text-xs text-muted-foreground">
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-1.5"><MapPin className="size-3.5" /> 76 rue Paul Vaillant Couturier, Argenteuil</span>
            <span className="inline-flex items-center gap-1.5"><Clock className="size-3.5" /> Lun–Sam · 11h30–23h30</span>
          </div>
          <span className="inline-flex items-center gap-1.5 font-medium text-foreground"><Leaf className="size-3.5 text-primary" /> 100% Halal</span>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <a href="#" className="font-serif text-xl font-bold tracking-tight">
            Méso<span className="text-primary">potamie</span>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:block">
            <Button asChild>
              <a href={TEL}><Phone /> Commander</a>
            </Button>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Menu">
            {open ? <X /> : <MenuIcon />}
          </Button>
        </div>
        {open && (
          <div className="border-t bg-background md:hidden">
            <div className="container flex flex-col gap-1 py-3">
              {nav.map((n) => (
                <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-secondary">
                  {n.label}
                </a>
              ))}
              <Button asChild className="mt-2"><a href={TEL}><Phone /> {PHONE}</a></Button>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b">
        <div className="container grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
          <div className="animate-fade-up">
            <Eyebrow><Flame className="size-3.5 text-primary" /> Grillades & spécialités turques</Eyebrow>
            <h1 className="mt-5 font-serif text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
              Le goût d'un savoir-faire venu de{" "}
              <span className="text-primary">Mésopotamie</span>
            </h1>
            <p className="mt-5 max-w-md text-lg text-muted-foreground">
              Kebabs généreux, viandes grillées au feu et spécialités maison, préparés avec des produits frais et 100% halal. Sur place, à emporter ou en livraison.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg"><a href="#carte">Découvrir la carte <ArrowRight /></a></Button>
              <Button asChild size="lg" variant="outline"><a href={TEL}><Phone /> {PHONE}</a></Button>
            </div>
            <div className="mt-5">
              <p className="mb-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">Livraison à domicile</p>
              <DeliveryButtons />
            </div>
            <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
              <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="size-4 fill-primary text-primary" />)}</div>
              <span><strong className="text-foreground">4,3/5</strong> · +1000 avis clients</span>
            </div>
          </div>
          <div className="relative animate-fade-up">
            <div className="absolute -right-6 -top-6 -z-10 h-full w-full rounded-3xl bg-accent" />
            <img
              src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=900&q=80"
              alt="Grillades du restaurant"
              className="aspect-[4/5] w-full rounded-2xl border object-cover shadow-xl"
            />
            <Card className="absolute -bottom-5 -left-5 hidden w-52 shadow-lg sm:block">
              <CardContent className="flex items-center gap-3 p-4">
                <div className="grid size-10 place-items-center rounded-full bg-accent text-accent-foreground"><ChefHat className="size-5" /></div>
                <div>
                  <p className="text-sm font-semibold">Fait minute</p>
                  <p className="text-xs text-muted-foreground">Grillé devant vous</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About / stats */}
      <section id="about" className="border-b bg-secondary/40 py-20">
        <div className="container grid items-center gap-12 md:grid-cols-2">
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Star, big: "4,3★", small: "Note moyenne" },
              { icon: Flame, big: "+1000", small: "Avis cumulés" },
              { icon: Leaf, big: "100%", small: "Halal" },
              { icon: UtensilsCrossed, big: "3", small: "Façons : sur place, emporter, livraison" },
            ].map((s, i) => (
              <Card key={i} className="bg-card">
                <CardContent className="p-6">
                  <s.icon className="size-5 text-primary" />
                  <p className="mt-3 font-serif text-3xl font-bold">{s.big}</p>
                  <p className="text-sm text-muted-foreground">{s.small}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div>
            <Eyebrow>Notre maison</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight md:text-4xl">
              Une cuisine généreuse, au cœur d'Argenteuil
            </h2>
            <p className="mt-4 text-muted-foreground">
              Au Restaurant Mésopotamie, on cuisine comme à la maison : des grillades préparées sous vos yeux, des assiettes copieuses et des saveurs qui voyagent entre la Turquie et le berceau de la Mésopotamie.
            </p>
            <p className="mt-4 text-muted-foreground">
              Viandes halal sélectionnées, pain chaud, sauces maison et un accueil chaleureux qui font revenir nos habitués midi et soir.
            </p>
          </div>
        </div>
      </section>

      {/* Carte */}
      <section id="carte" className="border-b py-20">
        <div className="container">
          <div className="mx-auto max-w-xl text-center">
            <Eyebrow>La carte</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight md:text-4xl">Nos spécialités</h2>
            <p className="mt-3 text-muted-foreground">
              Une sélection de nos plats les plus appréciés. Carte complète et menus disponibles sur place.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-x-12 gap-y-1 md:grid-cols-2">
            {dishes.map((d) => (
              <div key={d.name} className="flex items-start justify-between gap-4 border-b border-dashed py-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-serif text-lg font-semibold">{d.name}</h3>
                    {d.tag && <Badge variant="accent">{d.tag}</Badge>}
                  </div>
                  <p className="mt-0.5 text-sm text-muted-foreground">{d.desc}</p>
                </div>
                <span className="shrink-0 font-serif text-lg font-semibold text-primary">{d.price}</span>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-sm italic text-muted-foreground">
            ⚠️ Maquette de démonstration — plats et prix indicatifs, à confirmer avec le restaurant.
          </p>
        </div>
      </section>

      {/* Galerie */}
      <section id="galerie" className="border-b bg-secondary/40 py-20">
        <div className="container">
          <div className="mx-auto max-w-xl text-center">
            <Eyebrow>En images</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight md:text-4xl">L'ambiance & les assiettes</h2>
          </div>
          <div className="mt-12">
            <Carousel slides={gallery} />
          </div>
        </div>
      </section>

      {/* Infos & accès */}
      <section id="infos" className="border-b py-20">
        <div className="container">
          <div className="mx-auto max-w-xl text-center">
            <Eyebrow>Infos pratiques</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight md:text-4xl">Nous trouver</h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-semibold">Contact & services</h3>
                <div className="mt-5 space-y-4 text-sm">
                  <div className="flex gap-3"><MapPin className="size-5 shrink-0 text-primary" /><span><strong>76 rue Paul Vaillant Couturier</strong><br />95100 Argenteuil</span></div>
                  <div className="flex gap-3"><Phone className="size-5 shrink-0 text-primary" /><a href={TEL} className="hover:text-primary">{PHONE}</a></div>
                  <Separator />
                  <div className="flex gap-3"><UtensilsCrossed className="size-5 shrink-0 text-primary" /><span>Sur place · À emporter · Livraison · Menu enfant</span></div>
                  <div className="flex gap-3"><Accessibility className="size-5 shrink-0 text-primary" /><span>Accès PMR</span></div>
                  <div className="flex gap-3"><CreditCard className="size-5 shrink-0 text-primary" /><span>Carte bancaire · Espèces · Paiement mobile</span></div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-semibold">Horaires d'ouverture</h3>
                <ul className="mt-5 text-sm">
                  {hours.map((h) => (
                    <li key={h.d} className="flex justify-between border-b border-border/60 py-2 last:border-0">
                      <span className="font-medium">{h.d}</span>
                      <span className={h.closed ? "text-primary" : "text-muted-foreground"}>{h.h}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs italic text-muted-foreground">Horaires à confirmer avec le restaurant.</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6">
            <DirectionsMap />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <h2 className="font-serif text-3xl font-bold md:text-4xl">Une envie de grillades ce soir ?</h2>
            <p className="mt-2 text-primary-foreground/90">Appelez-nous pour commander ou réserver. À emporter et livraison sur Argenteuil.</p>
          </div>
          <div className="flex shrink-0 flex-col items-center gap-3 sm:flex-row">
            <Button asChild size="lg" variant="secondary">
              <a href={TEL}><Phone /> {PHONE}</a>
            </Button>
            <DeliveryButtons />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <a href="#" className="font-serif text-lg font-bold">Méso<span className="text-primary">potamie</span></a>
            <p className="mt-1 text-sm text-muted-foreground">Grillades & spécialités turques · Argenteuil</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" asChild><a href="#" aria-label="Instagram"><Instagram /></a></Button>
            <Button variant="outline" size="icon" asChild><a href="#" aria-label="Facebook"><Facebook /></a></Button>
            <Button variant="outline" size="icon" asChild><a href={TEL} aria-label="Téléphone"><Phone /></a></Button>
          </div>
        </div>
        <p className="container mt-8 text-center text-xs text-muted-foreground">
          © 2026 Restaurant Mésopotamie — Maquette de démonstration réalisée à des fins de prospection. Données à valider avec l'établissement.
        </p>
      </footer>
    </div>
  );
}
