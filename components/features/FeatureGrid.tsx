"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import badge from "@/public/images/brand/IMG_8152.jpeg";

gsap.registerPlugin(useGSAP);

const LEFT = [
  { icon: "🍊", label: "Fresh Daily" },
  { icon: "🌿", label: "100% Natural" },
  { icon: "🚫", label: "No Preservatives" },
  { icon: "💪", label: "High Protein" },
];

const RIGHT = [
  { icon: "⏰", label: "9 AM Delivery" },
  { icon: "📦", label: "Bulk Orders" },
  { icon: "🏷️", label: "Fair Pricing" },
  { icon: "❤️", label: "Made With Love" },
];

export default function FeatureGrid() {
  const badgeRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(badgeRef.current, {
      y: -14,
      duration: 2.6,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });
  });

  return (
    <section className="features">
      <div className="features-head">
        <h2>
          What makes RK <span className="accent-magenta">different</span>?
        </h2>
        <p>Everything we make is fresh, simple, and good for you.</p>
      </div>
      <div className="feature-grid">
        {LEFT.map((f, i) => (
          <div className={`feature-card fc-l${i + 1}`} key={f.label}>
            <span className="fc-icon">{f.icon}</span>
            <span className="fc-label">{f.label}</span>
          </div>
        ))}
        <div className="fc-center" ref={badgeRef}>
          <Image src={badge} alt="RK Cold Pressed — 100% pure, no preservatives" />
        </div>
        {RIGHT.map((f, i) => (
          <div className={`feature-card fc-r${i + 1}`} key={f.label}>
            <span className="fc-icon">{f.icon}</span>
            <span className="fc-label">{f.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
