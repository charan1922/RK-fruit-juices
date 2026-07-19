import type { CSSProperties } from "react";
import type { Product } from "@/types/product";
import { PRODUCTS } from "@/data/products";

type ProductSelectorProps = {
  active: number;
  onSelect: (index: number) => void;
};

export default function ProductSelector({ active, onSelect }: ProductSelectorProps) {
  return (
    <section className="selector" id="flavors" aria-label="Choose a product">
      {PRODUCTS.map((p: Product, i: number) => (
        <button
          key={p.id}
          className={`thumb${i === active ? " active" : ""}`}
          style={{ "--thumb-accent": p.accent } as CSSProperties}
          onClick={() => onSelect(i)}
          aria-pressed={i === active}
        >
          <span
            className="swatch"
            style={{
              background: `radial-gradient(circle at 35% 30%, ${
                p.liquid?.[0] ?? p.contents?.[0] ?? p.accent
              }, ${p.liquid?.[1] ?? p.contents?.[1] ?? p.accent})`,
            }}
          />
          <span className="label">{p.name}</span>
          <span className="kcal">{p.category}</span>
        </button>
      ))}
    </section>
  );
}
