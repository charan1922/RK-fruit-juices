export type MenuItem = {
  id: string;
  name: string;
  pricePerDay: number;
};

/**
 * Full à la carte daily menu, transcribed from the RK Cold Pressed price
 * list. Every simple juice is ₹40/day; bowls and richer drinks cost more.
 */
export const MENU_ITEMS: MenuItem[] = [
  { id: "protein-bowl", name: "Protein Bowl", pricePerDay: 50 },
  { id: "protein-bowl-egg", name: "Protein Bowl with Egg", pricePerDay: 60 },
  { id: "ragi-malt", name: "Ragi Malt", pricePerDay: 40 },
  { id: "millet-malt", name: "Millet Malt", pricePerDay: 40 },
  { id: "abc-juice", name: "ABC Juice", pricePerDay: 40 },
  { id: "apple-juice", name: "Apple Juice", pricePerDay: 40 },
  { id: "orange-juice", name: "Orange Juice", pricePerDay: 40 },
  { id: "keera-juice", name: "Keera Juice", pricePerDay: 40 },
  { id: "bottle-gourd-juice", name: "Bottle Gourd Juice", pricePerDay: 40 },
  { id: "ash-gourd-juice", name: "Ash Gourd Juice", pricePerDay: 60 },
];
