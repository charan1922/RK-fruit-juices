import type { Product } from "@/types/product";

/**
 * A cold-pressed juice bottle rendered entirely as SVG so every product
 * swap is instant and asset-free. Colors are driven by the active product.
 */
export default function Bottle({ product }: { product: Product }) {
  const [liqLight, liqDeep] = product.liquid ?? ["#FFB347", "#FF7A00"];
  const gid = `liq-${product.id}`;
  const gid2 = `glass-${product.id}`;
  const capGid = `cap-${product.id}`;

  return (
    <svg
      viewBox="0 0 200 460"
      width="100%"
      height="100%"
      aria-label={`${product.name} bottle`}
      style={{ display: "block", overflow: "visible" }}
    >
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={liqLight} />
          <stop offset="100%" stopColor={liqDeep} />
        </linearGradient>
        <linearGradient id={gid2} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(255,255,255,0.05)" />
          <stop offset="45%" stopColor="rgba(255,255,255,0.28)" />
          <stop offset="60%" stopColor="rgba(255,255,255,0.05)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.14)" />
        </linearGradient>
        {/* brushed-metal screw cap, matching the real bottle photography */}
        <linearGradient id={capGid} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#E7EAEE" />
          <stop offset="35%" stopColor="#9AA2AD" />
          <stop offset="55%" stopColor="#C9CED6" />
          <stop offset="100%" stopColor="#7C838D" />
        </linearGradient>
        <clipPath id={`clip-${product.id}`}>
          <path d="M70 150 Q70 120 78 108 L78 78 Q78 70 86 70 L114 70 Q122 70 122 78 L122 108 Q130 120 130 150 L130 400 Q130 424 106 424 L94 424 Q70 424 70 400 Z" />
        </clipPath>
      </defs>

      {/* soft contact shadow */}
      <ellipse cx="100" cy="436" rx="52" ry="10" fill="rgba(0,0,0,0.35)" />

      {/* glass body */}
      <path
        d="M70 150 Q70 120 78 108 L78 78 Q78 70 86 70 L114 70 Q122 70 122 78 L122 108 Q130 120 130 150 L130 400 Q130 424 106 424 L94 424 Q70 424 70 400 Z"
        fill="rgba(255,255,255,0.06)"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="1.5"
      />

      {/* juice fill (clipped to bottle) */}
      <g clipPath={`url(#clip-${product.id})`}>
        <rect x="60" y="150" width="80" height="280" fill={`url(#${gid})`} />
        {/* surface meniscus */}
        <ellipse cx="100" cy="150" rx="30" ry="6" fill={liqLight} opacity="0.9" />
        {/* glass sheen over juice */}
        <rect x="60" y="70" width="80" height="360" fill={`url(#${gid2})`} />
      </g>

      {/* metal screw cap */}
      <rect x="84" y="52" width="32" height="22" rx="4" fill={`url(#${capGid})`} />
      <rect x="82" y="60" width="36" height="3" fill="#6B7280" opacity="0.6" />
      <rect x="82" y="66" width="36" height="3" fill="#6B7280" opacity="0.6" />

      {/* label */}
      <rect
        x="74"
        y="250"
        width="52"
        height="96"
        rx="8"
        fill="rgba(255,255,255,0.92)"
      />
      <circle cx="100" cy="282" r="14" fill={liqDeep} opacity="0.9" />
      <rect x="84" y="306" width="32" height="4" rx="2" fill={liqDeep} opacity="0.55" />
      <rect x="88" y="316" width="24" height="3" rx="1.5" fill="#111" opacity="0.4" />
      <rect x="90" y="324" width="20" height="3" rx="1.5" fill="#111" opacity="0.25" />

      {/* highlight edge */}
      <path
        d="M80 118 Q76 140 76 165 L76 395"
        fill="none"
        stroke="rgba(255,255,255,0.5)"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
