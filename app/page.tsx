"use client";

import GlassNav from "@/components/layout/GlassNav";
import HeroCopy from "@/components/hero/HeroCopy";
import HeroDoodles from "@/components/hero/HeroDoodles";
import ProductStage from "@/components/product/ProductStage";
import FeatureGrid from "@/components/features/FeatureGrid";
import PricingSection from "@/components/pricing/PricingSection";
import RealPhotos from "@/components/gallery/RealPhotos";
import MenuList from "@/components/menu/MenuList";
import { useProductExperience } from "@/hooks/useProductExperience";

export default function Home() {
  const { rootRef, floatRef, spinRef, product } = useProductExperience();

  return (
    <div className="page" ref={rootRef}>
      <GlassNav />
      <main className="hero" id="flavors">
        <HeroDoodles />
        <HeroCopy product={product} />
        <ProductStage product={product} floatRef={floatRef} spinRef={spinRef} />
      </main>
      <FeatureGrid />
      <MenuList />
      <RealPhotos />
      <PricingSection />
    </div>
  );
}
