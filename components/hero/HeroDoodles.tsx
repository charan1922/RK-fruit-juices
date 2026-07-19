"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import appleBottle from "@/public/images/products/apple-juice/bottle.png";
import orangeBottle from "@/public/images/products/orange-juice/bottle.png";

gsap.registerPlugin(useGSAP);

/** Purely decorative — floating product cutouts + thin curved doodle lines,
 * echoing the scattered-imagery hero pattern without touching the main
 * interactive product stage. */
export default function HeroDoodles() {
  const appleRef = useRef<HTMLDivElement>(null);
  const orangeRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(appleRef.current, {
      y: -16,
      rotate: -8,
      duration: 3.2,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });
    gsap.to(orangeRef.current, {
      y: 14,
      rotate: 6,
      duration: 3.6,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      delay: 0.4,
    });
  });

  return (
    <div className="hero-doodles" aria-hidden="true">
      <svg className="doodle-lines" viewBox="0 0 1400 700" fill="none" preserveAspectRatio="none">
        <path
          d="M40,120 C220,20 340,180 180,300 C60,390 140,520 320,480"
          stroke="#f3c9dc"
          strokeWidth="2"
        />
        <path
          d="M1360,80 C1200,10 1120,160 1280,240 C1400,300 1340,420 1180,460"
          stroke="#f0dba8"
          strokeWidth="2"
        />
      </svg>
      <div className="doodle-img doodle-apple" ref={appleRef}>
        <Image src={appleBottle} alt="" />
      </div>
      <div className="doodle-img doodle-orange" ref={orangeRef}>
        <Image src={orangeBottle} alt="" />
      </div>
    </div>
  );
}
