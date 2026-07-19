import type { Product } from "@/types/product";

/**
 * Curated products featured in the animated hero stage. This is a subset of
 * the full menu (see data/menu.ts) — only items with a distinct visual
 * (a real photo or a purpose-built SVG) belong here.
 *
 * `bg` is a soft pastel tint [near-product-hue, white] — the hero background
 * still shifts per product (per the original brief) but stays light/airy.
 */
export const PRODUCTS: Product[] = [
  {
    id: "abc-juice",
    name: "ABC Juice",
    category: "Cold-Pressed Juice",
    tagline: "Apple · Beetroot · Carrot, pressed fresh every morning",
    accent: "#D81B60",
    bg: ["#fdeef4", "#ffffff"],
    container: "bottle",
    pricePerDay: 40,
    liquid: ["#8C1D4A", "#3D0818"],
    image: "/images/products/abc-juice/bottle.png",
  },
  {
    id: "apple-juice",
    name: "Apple Juice",
    category: "Cold-Pressed Juice",
    tagline: "Crisp apples, pressed fresh with nothing added",
    accent: "#B8860B",
    bg: ["#fbf3dd", "#ffffff"],
    container: "bottle",
    pricePerDay: 40,
    liquid: ["#E8C46B", "#B8860B"],
    image: "/images/products/apple-juice/bottle.png",
  },
  {
    id: "orange-juice",
    name: "Orange Juice",
    category: "Cold-Pressed Juice",
    tagline: "Sun-ripened oranges, squeezed fresh every morning",
    accent: "#F17A00",
    bg: ["#fdf0de", "#ffffff"],
    container: "bottle",
    pricePerDay: 40,
    liquid: ["#FFC24D", "#FF8A00"],
    image: "/images/products/orange-juice/bottle.png",
  },
  {
    id: "fruit-bowl",
    name: "Fruit Bowl",
    category: "Fruit Bowls",
    tagline: "Sweet, juicy seasonal fruit, cut and ready to grab & go",
    accent: "#E8622C",
    bg: ["#fdefe6", "#ffffff"],
    container: "cup",
    pricePerDay: 50,
    contents: ["#E23B3B", "#FFD23F", "#7CC576", "#E88A3C"],
    topper: "none",
  },
  {
    id: "protein-bowl",
    name: "Protein Bowl",
    category: "Protein Bowls",
    tagline: "Veggies, boiled egg, and lean protein to fuel your day",
    accent: "#2F8C3F",
    bg: ["#eaf6ec", "#ffffff"],
    container: "cup",
    pricePerDay: 60,
    contents: ["#4C8C3B", "#E8622C", "#F2C230"],
    topper: "egg",
  },
];
