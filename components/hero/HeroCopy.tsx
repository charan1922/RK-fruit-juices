import type { Product } from "@/types/product";

export default function HeroCopy({ product }: { product: Product }) {
  return (
    <div className="hero-copy">
      <span className="eyebrow reveal">Fresh Daily · Delivered by 9:00 AM</span>
      <h1 className="reveal">
        Cold-pressed juice,
        <br />
        <span className="accent">made fresh</span> for you.
      </h1>
      <p className="sub reveal">
        Featuring <strong>{product.name}</strong> — {product.tagline}. RK Cold
        Pressed Juices makes everything fresh each morning: 100% pure, no
        preservatives, no shortcuts.
      </p>
      <div className="hero-actions reveal">
        <a className="btn-primary" href="#subscribe">
          See Plans &amp; Order
        </a>
        <a className="btn-ghost" href="#story">
          Our Story ▸
        </a>
      </div>
      <div className="hero-stats reveal">
        <div className="stat">
          <b>₹{product.pricePerDay}</b>
          <span>Per day</span>
        </div>
        <div className="stat">
          <b>100%</b>
          <span>Pure, no preservatives</span>
        </div>
        <div className="stat">
          <b>6</b>
          <span>Days a week delivery</span>
        </div>
      </div>
    </div>
  );
}
