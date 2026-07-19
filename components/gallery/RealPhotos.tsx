import Image from "next/image";
import fruitCup from "@/public/images/products/fresh-fruit-cup/fruit-cup-1.jpeg";
import vegCup from "@/public/images/products/protein-snack-cup/veg-cup-1.jpeg";

const PHOTOS = [
  { src: fruitCup, alt: "Fresh fruit cup, hand-cut", caption: "Hand-cut seasonal fruit" },
  { src: vegCup, alt: "Protein veggie cup", caption: "Real veggies, real protein" },
];

export default function RealPhotos() {
  return (
    <section className="gallery" id="story" aria-label="Real photos from our kitchen">
      <div className="gallery-head">
        <h2>Made fresh. Every single day.</h2>
        <p>No stock photos — this is what leaves our kitchen each morning.</p>
      </div>
      <div className="gallery-grid">
        {PHOTOS.map((p) => (
          <figure key={p.alt} className="gallery-card">
            <Image
              src={p.src}
              alt={p.alt}
              fill
              sizes="(max-width: 640px) 50vw, 320px"
              style={{ objectFit: "cover" }}
              placeholder="blur"
            />
            <figcaption>{p.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
