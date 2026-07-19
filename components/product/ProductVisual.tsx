import Image from "next/image";
import type { Product } from "@/types/product";
import Bottle from "./Bottle";
import Cup from "./Cup";

export default function ProductVisual({ product }: { product: Product }) {
  if (product.image) {
    return (
      <Image
        src={product.image}
        alt={`${product.name} bottle`}
        fill
        sizes="(max-width: 768px) 60vw, 300px"
        style={{ objectFit: "contain" }}
        priority={false}
      />
    );
  }

  return product.container === "bottle" ? (
    <Bottle product={product} />
  ) : (
    <Cup product={product} />
  );
}
