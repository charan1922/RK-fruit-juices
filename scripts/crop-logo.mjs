import sharp from "sharp";

const SRC = "d:/Learnings/juice/public/images/brand/IMG_8152.jpeg";
const OUT = "d:/Learnings/juice/public/images/brand/rk-mark.png";
const CROP = { left: 328, top: 118, width: 598, height: 330 };
const BG = [252, 244, 220]; // sampled cream background

function keyOutColor(data, info, target, tightRadius = 26, softRadius = 60) {
  const { width, height, channels } = info;
  const out = Buffer.alloc(width * height * 4);
  for (let i = 0; i < width * height; i++) {
    const r = data[i * channels];
    const g = data[i * channels + 1];
    const b = data[i * channels + 2];
    const dist = Math.sqrt((r - target[0]) ** 2 + (g - target[1]) ** 2 + (b - target[2]) ** 2);
    let alpha;
    if (dist < tightRadius) alpha = 0;
    else if (dist < softRadius) alpha = Math.round(255 * ((dist - tightRadius) / (softRadius - tightRadius)));
    else alpha = 255;
    out[i * 4] = r;
    out[i * 4 + 1] = g;
    out[i * 4 + 2] = b;
    out[i * 4 + 3] = alpha;
  }
  return out;
}

const img = sharp(SRC).extract(CROP);
const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
const keyed = keyOutColor(data, info, BG);

await sharp(keyed, { raw: { width: info.width, height: info.height, channels: 4 } })
  .trim({ threshold: 12 })
  .png({ compressionLevel: 9 })
  .toFile(OUT);

console.log("wrote", OUT);
