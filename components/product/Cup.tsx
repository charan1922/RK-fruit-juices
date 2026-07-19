import type { Product } from "@/types/product";

/**
 * A clear plastic cup with a domed lid and skewer, matching the fruit /
 * protein snack cups RK actually sells. Layered "contents" chunks and an
 * optional egg topper are driven by the active product.
 */
export default function Cup({ product }: { product: Product }) {
  const contents = product.contents ?? ["#E23B3B", "#FFD23F", "#7CC576"];
  const clipId = `cup-clip-${product.id}`;
  const sheenId = `cup-sheen-${product.id}`;
  const layerHeight = 230 / contents.length;

  return (
    <svg
      viewBox="0 0 200 460"
      width="100%"
      height="100%"
      aria-label={`${product.name} cup`}
      style={{ display: "block", overflow: "visible" }}
    >
      <defs>
        <linearGradient id={sheenId} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(255,255,255,0.06)" />
          <stop offset="42%" stopColor="rgba(255,255,255,0.32)" />
          <stop offset="58%" stopColor="rgba(255,255,255,0.06)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.16)" />
        </linearGradient>
        <clipPath id={clipId}>
          <path d="M52 190 L60 400 Q62 420 82 420 L118 420 Q138 420 140 400 L148 190 Z" />
        </clipPath>
      </defs>

      {/* soft contact shadow */}
      <ellipse cx="100" cy="432" rx="56" ry="10" fill="rgba(0,0,0,0.35)" />

      {/* cup body */}
      <path
        d="M52 190 L60 400 Q62 420 82 420 L118 420 Q138 420 140 400 L148 190 Z"
        fill="rgba(255,255,255,0.05)"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="1.5"
      />

      {/* layered contents, clipped to the cup */}
      <g clipPath={`url(#${clipId})`}>
        {contents.map((color, i) => {
          const yTop = 420 - layerHeight * (i + 1);
          return (
            <rect
              key={color + i}
              x="45"
              y={yTop}
              width="110"
              height={layerHeight + 2}
              fill={color}
              opacity={0.92}
            />
          );
        })}
        {/* a few chunk highlights for texture */}
        <circle cx="80" cy="360" r="10" fill="rgba(255,255,255,0.18)" />
        <circle cx="122" cy="300" r="8" fill="rgba(255,255,255,0.14)" />
        <circle cx="95" cy="250" r="9" fill="rgba(255,255,255,0.12)" />
        {/* plastic sheen over contents */}
        <rect x="45" y="190" width="110" height="230" fill={`url(#${sheenId})`} />
      </g>

      {/* dome lid */}
      <path
        d="M56 190 Q100 150 144 190 L144 198 Q100 168 56 198 Z"
        fill="rgba(255,255,255,0.12)"
        stroke="rgba(255,255,255,0.4)"
        strokeWidth="1.5"
      />
      <path
        d="M60 190 Q100 158 140 190"
        fill="none"
        stroke="rgba(255,255,255,0.3)"
        strokeWidth="1"
      />

      {/* skewer or topper poking through the lid */}
      {product.topper === "egg" ? (
        <>
          <line x1="100" y1="70" x2="100" y2="168" stroke="#C9A24B" strokeWidth="2.5" strokeLinecap="round" />
          <ellipse cx="100" cy="150" rx="22" ry="26" fill="#F5EFE0" />
          <ellipse cx="92" cy="140" rx="7" ry="9" fill="#FFFFFF" opacity="0.6" />
        </>
      ) : (
        <>
          <line x1="92" y1="66" x2="80" y2="172" stroke="#C9A24B" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="112" y1="70" x2="118" y2="172" stroke="#C9A24B" strokeWidth="2" strokeLinecap="round" />
        </>
      )}

      {/* label band */}
      <rect x="62" y="330" width="76" height="46" rx="8" fill="rgba(255,255,255,0.92)" />
      <circle cx="82" cy="353" r="9" fill={contents[0]} opacity="0.9" />
      <rect x="98" y="346" width="30" height="4" rx="2" fill="#222" opacity="0.55" />
      <rect x="98" y="356" width="24" height="3" rx="1.5" fill="#222" opacity="0.3" />

      {/* highlight edge */}
      <path
        d="M60 210 Q56 300 64 400"
        fill="none"
        stroke="rgba(255,255,255,0.4)"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
