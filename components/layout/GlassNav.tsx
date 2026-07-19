import Image from "next/image";
import logo from "@/public/images/brand/rk-mark.png";

export default function GlassNav() {
  return (
    <nav className="nav">
      <div className="brand">
        <Image src={logo} alt="RK Cold Pressed Juices" className="brand-logo" priority />
        <span>Cold&nbsp;Pressed</span>
      </div>
      <div className="nav-links">
        <a href="#flavors">Products</a>
        <a href="#menu">Full Menu</a>
        <a href="#story">Our Story</a>
        <a href="#subscribe">Plans &amp; Pricing</a>
      </div>
      <a className="nav-cta" href="tel:+917674076898">
        Call to Order
      </a>
    </nav>
  );
}
