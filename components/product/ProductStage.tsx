import type { RefObject } from "react";
import type { Product } from "@/types/product";
import ProductVisual from "./ProductVisual";

type ProductStageProps = {
  product: Product;
  floatRef: RefObject<HTMLDivElement | null>;
  spinRef: RefObject<HTMLDivElement | null>;
};

export default function ProductStage({ product, floatRef, spinRef }: ProductStageProps) {
  return (
    <div className="stage">
      <div className="glow" />
      <div className="pedestal" />
      <div className="bottle-float" ref={floatRef}>
        <div className="bottle-spin" ref={spinRef}>
          <ProductVisual product={product} />
        </div>
        <div className="shimmer" />
        <div className="flavor-tag">
          <div className="n">{product.name}</div>
          <div className="t">{product.category}</div>
        </div>
      </div>
    </div>
  );
}
