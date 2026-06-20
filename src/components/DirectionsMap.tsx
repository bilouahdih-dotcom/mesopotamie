import { useState } from "react";
import {
  Navigation,
  LocateFixed,
  Car,
  Footprints,
  Loader2,
  ExternalLink,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { restaurant } from "@/data/restaurant";

const REST = restaurant.coords;
const DEST = `${REST.lat},${REST.lng}`;

function haversineKm(lat1: number, lng1: number, lat2: number, lng2: number) {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function formatMin(min: number) {
  if (min < 60) return `${Math.max(1, Math.round(min))} min`;
  const h = Math.floor(min / 60);
  const m = Math.round(min % 60);
  return m ? `${h} h ${m} min` : `${h} h`;
}

type Trip = { km: number; car: number; walk: number; origin: { lat: number; lng: number } };

export function DirectionsMap() {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [trip, setTrip] = useState<Trip | null>(null);
  const [error, setError] = useState("");

  const calculate = () => {
    if (!("geolocation" in navigator)) {
      setStatus("error");
      setError("La géolocalisation n'est pas disponible sur cet appareil.");
      return;
    }
    setStatus("loading");
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        const straight = haversineKm(latitude, longitude, REST.lat, REST.lng);
        const road = straight * 1.3;
        setTrip({
          km: road,
          car: (road / 28) * 60,
          walk: (straight / 4.8) * 60,
          origin: { lat: latitude, lng: longitude },
        });
        setStatus("done");
      },
      () => {
        setStatus("error");
        setError("Position refusée. Vous pouvez quand même ouvrir l'itinéraire ci-dessous.");
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  };

  const directionsUrl = trip
    ? `https://www.google.com/maps/dir/?api=1&origin=${trip.origin.lat},${trip.origin.lng}&destination=${DEST}`
    : `https://www.google.com/maps/dir/?api=1&destination=${DEST}`;

  return (
    <div className="grid gap-6 overflow-hidden rounded-3xl border border-border/60 bg-card shadow-card lg:grid-cols-[1fr_1.5fr]">
      <div className="flex flex-col p-8">
        <div className="flex items-center gap-3">
          <div className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary">
            <Navigation className="size-5" />
          </div>
          <h3 className="font-display text-2xl font-semibold">Combien de temps pour venir ?</h3>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          Estimez votre temps de trajet jusqu'au restaurant depuis votre position actuelle.
        </p>

        <Button onClick={calculate} disabled={status === "loading"} className="mt-6 w-full">
          {status === "loading" ? <Loader2 className="animate-spin" /> : <LocateFixed />}
          {status === "loading" ? "Localisation…" : "Utiliser ma position"}
        </Button>

        {status === "done" && trip && (
          <div className="mt-6 space-y-4 rounded-2xl border border-border/60 bg-secondary/40 p-5 text-sm animate-fade-up">
            <p className="font-display text-lg font-semibold">≈ {trip.km.toFixed(1)} km du restaurant</p>
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-2 text-muted-foreground">
                <Car className="size-4 text-accent" /> En voiture
              </span>
              <span className="font-semibold">{formatMin(trip.car)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-2 text-muted-foreground">
                <Footprints className="size-4 text-accent" /> À pied
              </span>
              <span className="font-semibold">{formatMin(trip.walk)}</span>
            </div>
            <p className="text-xs italic text-muted-foreground">
              Estimation indicative selon les conditions de circulation.
            </p>
          </div>
        )}

        {status === "error" && (
          <p className="mt-4 rounded-xl bg-primary/10 p-4 text-sm text-primary">{error}</p>
        )}

        <Button asChild variant="outline" className="mt-5 w-full">
          <a href={directionsUrl} target="_blank" rel="noopener noreferrer">
            <Navigation /> Ouvrir l'itinéraire <ExternalLink className="size-3.5" />
          </a>
        </Button>
      </div>

      <div className="relative min-h-[400px] border-t border-border/60 lg:min-h-[480px] lg:border-l lg:border-t-0">
        <iframe
          title="Carte Restaurant Mésopotamie"
          className="absolute inset-0 h-full w-full grayscale-[20%] contrast-[1.05]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
          src={`https://www.google.com/maps?q=${DEST}&z=16&output=embed`}
        />
        <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-border/60 bg-card/95 p-5 shadow-elevated backdrop-blur-xl sm:inset-x-auto sm:left-4 sm:max-w-[19rem]">
          <div className="flex items-start gap-3">
            <div className="grid size-10 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
              <MapPin className="size-4" />
            </div>
            <div>
              <p className="font-display text-lg font-semibold leading-tight">
                Restaurant Mésopotamie
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                {restaurant.address.street}, {restaurant.address.postal} {restaurant.address.city}
              </p>
            </div>
          </div>
          <Button asChild size="sm" className="mt-4 w-full">
            <a href={directionsUrl} target="_blank" rel="noopener noreferrer">
              <Navigation /> Voir sur Google Maps
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
