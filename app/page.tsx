"use client";

import GlassNav from "@/components/layout/GlassNav";
import HeroCopy from "@/components/hero/HeroCopy";
import HeroDoodles from "@/components/hero/HeroDoodles";
import ProductStage from "@/components/product/ProductStage";
import ProductSelector from "@/components/selector/ProductSelector";
import FeatureGrid from "@/components/features/FeatureGrid";
import PricingSection from "@/components/pricing/PricingSection";
import RealPhotos from "@/components/gallery/RealPhotos";
import MenuList from "@/components/menu/MenuList";
import { useProductExperience } from "@/hooks/useProductExperience";

export default function Home() {
  const { rootRef, floatRef, spinRef, active, product, selectProduct } =
    useProductExperience();

  return (
    <div className="page" ref={rootRef}>
      <GlassNav />
      <main className="hero">
        <HeroDoodles />
        <HeroCopy product={product} />
        <ProductStage product={product} floatRef={floatRef} spinRef={spinRef} />
      </main>
      <ProductSelector active={active} onSelect={selectProduct} />
      <FeatureGrid />
      <MenuList />
      <RealPhotos />
      <PricingSection />
    </div>
  );
}
