"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { PRODUCTS } from "@/data/products";

gsap.registerPlugin(useGSAP);

/**
 * Owns the full animation lifecycle for the product stage: load-in reveal,
 * the continuous idle float, and the click-to-swap spin + background
 * transition. Keeping this in one hook lets the presentational components
 * stay pure layout/markup.
 */
export function useProductExperience() {
  const [active, setActive] = useState(0);
  // `display` is what the stage actually shows; it swaps mid-spin so the
  // new product is revealed as the bottle/cup turns back to face front.
  const [display, setDisplay] = useState(0);

  const rootRef = useRef<HTMLDivElement>(null);
  const floatRef = useRef<HTMLDivElement>(null);
  const spinRef = useRef<HTMLDivElement>(null);
  const idleTween = useRef<gsap.core.Tween | null>(null);
  const busy = useRef(false);

  const { contextSafe } = useGSAP(
    () => {
      const first = PRODUCTS[0];

      // Start from a neutral white so the load-in pastel wash reads.
      gsap.set(document.documentElement, {
        "--bg-inner": "#ffffff",
        "--bg-outer": "#ffffff",
        "--accent": first.accent,
      } as gsap.TweenVars);

      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
      intro
        .to(
          document.documentElement,
          {
            "--bg-inner": first.bg[0],
            "--bg-outer": first.bg[1],
            duration: 1.6,
            ease: "sine.inOut",
          } as gsap.TweenVars,
          0
        )
        .from(".nav", { y: -30, opacity: 0, duration: 0.9 }, 0.1)
        .from(".reveal", { y: 34, opacity: 0, duration: 0.9, stagger: 0.12 }, 0.25)
        .from(
          floatRef.current,
          { y: 90, opacity: 0, scale: 0.9, duration: 1.2, ease: "power4.out" },
          0.4
        )
        .from(".thumb", { y: 40, opacity: 0, duration: 0.7, stagger: 0.08 }, 0.7);

      // Continuous vertical floating idle animation.
      idleTween.current = gsap.to(floatRef.current, {
        y: -26,
        duration: 2.4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      // Glossy diagonal highlight sweeping across the bottle/cup on a loop.
      gsap.set(".bottle-float .shimmer", { xPercent: -160 });
      gsap.to(".bottle-float .shimmer", {
        xPercent: 220,
        duration: 1.8,
        repeat: -1,
        repeatDelay: 3.2,
        ease: "power1.inOut",
      });
    },
    { scope: rootRef }
  );

  const selectProduct = contextSafe((index: number) => {
    if (index === active || busy.current) return;
    busy.current = true;
    setActive(index);

    const next = PRODUCTS[index];

    // Pause the idle float so it doesn't fight the spin.
    idleTween.current?.pause();

    const tl = gsap.timeline({
      onComplete: () => {
        busy.current = false;
        idleTween.current?.restart(true);
      },
    });

    // Ease the float wrapper back to baseline before spinning.
    tl.to(floatRef.current, { y: 0, duration: 0.25, ease: "power2.out" }, 0);

    // Rapid 360° spin; a subtle scale pulse sells the weight of the object.
    tl.to(
      spinRef.current,
      {
        rotationY: "+=360",
        duration: 0.9,
        ease: "power2.inOut",
        onStart: () => {
          gsap.to(spinRef.current, {
            scale: 1.06,
            duration: 0.45,
            yoyo: true,
            repeat: 1,
            ease: "sine.inOut",
          });
        },
      },
      0.05
    );

    // Swap the product image at the spin's halfway point (edge-on, hidden face).
    tl.add(() => setDisplay(index), 0.05 + 0.45);

    // Transition the global background gradient + accent to match, in step
    // with the spin.
    tl.to(
      document.documentElement,
      {
        "--bg-inner": next.bg[0],
        "--bg-outer": next.bg[1],
        "--accent": next.accent,
        duration: 1.1,
        ease: "sine.inOut",
      } as gsap.TweenVars,
      0.05
    );
  });

  return {
    rootRef,
    floatRef,
    spinRef,
    active,
    product: PRODUCTS[display],
    selectProduct,
  };
}
