import { useState } from "react";
import { Navigation, LocateFixed, Car, Footprints, Loader2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

// Coordonnées GPS du restaurant (76 rue Paul Vaillant Couturier, Argenteuil)
const REST = { lat: 48.9437353, lng: 2.2496512 };
const DEST = `${REST.lat},${REST.lng}`;

// Distance à vol d'oiseau (formule de Haversine), en km
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
        // Facteur ~1,3 pour approcher la distance par la route
        const road = straight * 1.3;
        setTrip({
          km: road,
          car: (road / 28) * 60, // ~28 km/h en zone urbaine
          walk: (straight / 4.8) * 60, // ~4,8 km/h à pied
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
    <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
      {/* Panneau calcul de trajet */}
      <div className="flex flex-col rounded-xl border bg-card p-6">
        <div className="flex items-center gap-2">
          <div className="grid size-10 place-items-center rounded-full bg-accent text-accent-foreground">
            <Navigation className="size-5" />
          </div>
          <h3 className="font-serif text-xl font-semibold">Combien de temps pour venir&nbsp;?</h3>
        </div>
        <p className="mt-3 text-sm text-muted-foreground">
          Estimez votre temps de trajet jusqu'au restaurant depuis votre position actuelle.
        </p>

        <Button onClick={calculate} disabled={status === "loading"} className="mt-5 w-full">
          {status === "loading" ? <Loader2 className="animate-spin" /> : <LocateFixed />}
          {status === "loading" ? "Localisation…" : "Utiliser ma position"}
        </Button>

        {status === "done" && trip && (
          <div className="mt-5 space-y-3 rounded-lg border bg-secondary/50 p-4 text-sm animate-fade-up">
            <p className="font-medium">≈ {trip.km.toFixed(1)} km du restaurant</p>
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-2 text-muted-foreground"><Car className="size-4 text-primary" /> En voiture</span>
              <span className="font-semibold">{formatMin(trip.car)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-2 text-muted-foreground"><Footprints className="size-4 text-primary" /> À pied</span>
              <span className="font-semibold">{formatMin(trip.walk)}</span>
            </div>
            <p className="text-xs italic text-muted-foreground">Estimation indicative selon les conditions de circulation.</p>
          </div>
        )}

        {status === "error" && (
          <p className="mt-4 rounded-lg bg-accent/60 p-3 text-sm text-accent-foreground">{error}</p>
        )}

        <Button asChild variant="outline" className="mt-4 w-full">
          <a href={directionsUrl} target="_blank" rel="noreferrer">
            <Navigation /> Ouvrir l'itinéraire <ExternalLink className="size-3.5" />
          </a>
        </Button>
      </div>

      {/* Carte */}
      <div className="overflow-hidden rounded-xl border">
        <iframe
          title="Carte Restaurant Mésopotamie"
          className="h-full min-h-[360px] w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps?q=${DEST}&z=15&output=embed`}
        />
      </div>
    </div>
  );
}
