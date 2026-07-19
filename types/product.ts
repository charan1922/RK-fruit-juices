export type ContainerKind = "bottle" | "cup";
export type Topper = "egg" | "none";

export type Product = {
  id: string;
  name: string;
  category: string;
  tagline: string;
  /** Punchy accent used for the headline highlight + UI accents. */
  accent: string;
  /** Two-stop radial background gradient [inner, outer]. */
  bg: [string, string];
  container: ContainerKind;
  /** Real price, ₹ per day (à la carte). */
  pricePerDay: number;
  /** Bottle only: liquid gradient [light, deep]. */
  liquid?: [string, string];
  /** Cup only: chunk colors, layered bottom to top. */
  contents?: string[];
  /** Cup only: what pokes out of the lid. */
  topper?: Topper;
  /** Real product photo (public/ path). When set, replaces the procedural SVG. */
  image?: string;
};
