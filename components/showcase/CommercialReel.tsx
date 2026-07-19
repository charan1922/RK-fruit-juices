"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import bottleTrio from "@/public/images/marketing/concept-panels/panel-02.png";
import splash from "@/public/images/marketing/concept-panels/panel-03.png";
import abcCup from "@/public/images/marketing/concept-panels/panel-04.png";
import proteinCup from "@/public/images/marketing/concept-panels/panel-06.png";
import mangoPour from "@/public/images/marketing/concept-panels/panel-08.png";
import greenJuice from "@/public/images/marketing/concept-panels/panel-12.png";

gsap.registerPlugin(useGSAP);

const SLIDES = [
  { src: bottleTrio, alt: "Three RK cold-pressed juices", caption: "Three ways to feel good" },
  { src: splash, alt: "Fresh fruit splash", caption: "Nothing but real fruit" },
  { src: abcCup, alt: "ABC juice, poured fresh", caption: "ABC Juice, ready to go" },
  { src: proteinCup, alt: "Protein bowl with boiled egg", caption: "Protein Bowl, fully loaded" },
  { src: mangoPour, alt: "Mango juice pouring", caption: "Cold-pressed, never from concentrate" },
  { src: greenJuice, alt: "Green cold-pressed juice", caption: "Green juices, done right" },
];

export default function CommercialReel() {
  const rootRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const shimmerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const slides = slideRefs.current.filter((el): el is HTMLDivElement => el !== null);
      if (slides.length === 0) return;

      gsap.set(slides, { autoAlpha: 0 });
      gsap.set(slides[0], { autoAlpha: 1 });

      // Crossfade round-robin — fully relative, so it loops with no seam.
      const tl = gsap.timeline({ repeat: -1 });
      slides.forEach((slide, i) => {
        const next = slides[(i + 1) % slides.length];
        tl.to(slide, { autoAlpha: 0, duration: 1, ease: "power2.inOut" }, "+=3.4");
        tl.to(next, { autoAlpha: 1, duration: 1, ease: "power2.inOut" }, "<");
      });

      // Continuous ken-burns breathing per slide, independent of the crossfade.
      slides.forEach((slide, i) => {
        const img = slide.querySelector("img");
        if (!img) return;
        gsap.to(img, {
          scale: 1.1,
          duration: 7,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: i * 0.3,
        });
      });

      // Diagonal shimmer sweep, independent loop.
      gsap.set(shimmerRef.current, { xPercent: -150 });
      gsap.to(shimmerRef.current, {
        xPercent: 250,
        duration: 2.4,
        repeat: -1,
        repeatDelay: 2.8,
        ease: "power1.inOut",
      });
    },
    { scope: rootRef }
  );

  return (
    <section className="reel" aria-label="RK Cold Pressed, in motion" ref={rootRef}>
      <div className="reel-head">
        <span className="reel-kicker">RK Cold Pressed</span>
        <h2>Fuel Your Body. Nourish Your Life.</h2>
      </div>
      <div className="reel-frame">
        <div className="reel-shimmer" ref={shimmerRef} />
        {SLIDES.map((s, i) => (
          <div
            className="reel-slide"
            key={s.caption}
            ref={(el) => {
              slideRefs.current[i] = el;
            }}
          >
            <Image src={s.src} alt={s.alt} fill sizes="(max-width: 900px) 100vw, 900px" style={{ objectFit: "contain" }} />
            <span className="reel-caption">{s.caption}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
