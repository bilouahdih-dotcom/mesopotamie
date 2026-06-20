// Source unique des informations du restaurant — modifier ici se répercute partout.
export const restaurant = {
  name: "Mésopotamie",
  phone: "01 39 47 03 82",
  tel: "tel:0139470382",
  address: {
    street: "76 rue Paul Vaillant Couturier",
    postal: "95100",
    city: "Argenteuil",
  },
  coords: { lat: 48.9437353, lng: 2.2496512 },
  rating: 4.3,
  reviewCount: 1000,
  delivery: {
    uberEats: "https://www.ubereats.com/fr/store/mesopotamie/GuudggDwSwqBORrTovnyzQ",
    deliveroo: "https://deliveroo.fr/fr/menu/paris/argenteuil-centre-ville/mesopotamie-argenteuil",
  },
};

export const ratingLabel = restaurant.rating.toFixed(1).replace(".", ",");

export const nav = [
  { href: "#about", label: "Le restaurant" },
  { href: "#carte", label: "La carte" },
  { href: "#galerie", label: "Galerie" },
  { href: "#avis", label: "Avis" },
  { href: "#infos", label: "Accès" },
] as const;

export const specialties = [
  "Adana",
  "Kebab maison",
  "Lahmacun",
  "Grillades au feu",
  "Aubergine farcie",
  "100% Halal",
  "Brochettes",
  "Baklava",
  "Fait minute",
] as const;

export type MenuCategory = "grillades" | "kebabs" | "specialites" | "desserts";

export type Dish = {
  name: string;
  desc: string;
  price: string;
  tag?: string;
  category: MenuCategory;
  image: string;
};

export const menuCategories: { id: MenuCategory; label: string }[] = [
  { id: "grillades", label: "Grillades" },
  { id: "kebabs", label: "Kebabs" },
  { id: "specialites", label: "Spécialités" },
  { id: "desserts", label: "Desserts" },
];

export const dishes: Dish[] = [
  {
    name: "Assiette Grillades mixtes",
    desc: "Adana, ailes et brochette de poulet, riz ou frites maison.",
    price: "15,90 €",
    tag: "Signature",
    category: "grillades",
    image: "photo-1633321702518-7feccafb94d5",
  },
  {
    name: "Brochette Adana",
    desc: "Brochette de bœuf épicée grillée au charbon de bois.",
    price: "13,50 €",
    category: "grillades",
    image: "photo-1530469912745-a215c6b256ea",
  },
  {
    name: "Assiette Kebab",
    desc: "Viande grillée, frites maison, salade et sauce au choix.",
    price: "10,90 €",
    tag: "Best-seller",
    category: "kebabs",
    image: "photo-1561758033-d89a9ad46330",
  },
  {
    name: "Sandwich Kebab Poulet",
    desc: "Pain frais, poulet mariné, crudités et sauces maison.",
    price: "7,50 €",
    category: "kebabs",
    image: "photo-1599487488170-d11ec9c172f0",
  },
  {
    name: "Aubergine farcie",
    desc: "Spécialité de la maison mijotée à la tomate et aux épices.",
    price: "11,90 €",
    tag: "Maison",
    category: "specialites",
    image: "photo-1606491956689-2ea866880c84",
  },
  {
    name: "Lahmacun",
    desc: "Fine galette turque garnie de viande hachée et herbes fraîches.",
    price: "6,00 €",
    category: "specialites",
    image: "photo-1555939594-58d7cb561ad1",
  },
  {
    name: "Menu enfant",
    desc: "Nuggets ou kebab, frites, boisson et dessert.",
    price: "8,00 €",
    category: "specialites",
    image: "photo-1540713434306-58505cf1b6fc",
  },
  {
    name: "Baklava maison",
    desc: "Pâtisserie aux noix et au sirop, servie avec un café offert.",
    price: "4,50 €",
    tag: "Dessert",
    category: "desserts",
    image: "photo-1540713434306-58505cf1b6fc",
  },
];

export const hours = [
  { d: "Lundi", h: "11h30 – 23h30" },
  { d: "Mardi", h: "11h30 – 23h30" },
  { d: "Mercredi", h: "11h30 – 23h30" },
  { d: "Jeudi", h: "11h30 – 23h30" },
  { d: "Vendredi", h: "11h30 – 23h30" },
  { d: "Samedi", h: "11h30 – 23h30" },
  { d: "Dimanche", h: "Fermé", closed: true },
] as const;

export const gallery = [
  { id: "photo-1561758033-d89a9ad46330", alt: "Kebab grillé au charbon" },
  { id: "photo-1633321702518-7feccafb94d5", alt: "Assortiment de grillades" },
  { id: "photo-1599487488170-d11ec9c172f0", alt: "Assiette généreuse" },
  { id: "photo-1606491956689-2ea866880c84", alt: "Spécialité turque" },
  { id: "photo-1530469912745-a215c6b256ea", alt: "Brochettes au charbon" },
  { id: "photo-1540713434306-58505cf1b6fc", alt: "Baklava maison" },
  { id: "photo-1555939594-58d7cb561ad1", alt: "Grillades variées" },
] as const;

export const heroImage =
  "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1920&q=85";

export function unsplashUrl(id: string, w = 900) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;
}
