import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const jobs = [
  {
    src: "d:/Learnings/juice/public/images/products/abc-juice/source.png",
    outDir: "d:/Learnings/juice/public/images/products/abc-juice",
    outFile: "bottle.png",
  },
];

// Soft white-key: pixels near-white become transparent, with a gradient
// falloff so cutout edges anti-alias instead of hard-clipping.
function keyOutWhite(data, info) {
  const { width, height, channels } = info;
  const out = Buffer.alloc(width * height * 4);
  for (let i = 0; i < width * height; i++) {
    const r = data[i * channels];
    const g = data[i * channels + 1];
    const b = data[i * channels + 2];
    const whiteness = Math.min(r, g, b);
    let alpha;
    if (whiteness > 244) alpha = 0;
    else if (whiteness > 190) alpha = Math.round(255 * (1 - (whiteness - 190) / (244 - 190)));
    else alpha = 255;
    out[i * 4] = r;
    out[i * 4 + 1] = g;
    out[i * 4 + 2] = b;
    out[i * 4 + 3] = alpha;
  }
  return out;
}

for (const job of jobs) {
  fs.mkdirSync(job.outDir, { recursive: true });
  const img = sharp(job.src).ensureAlpha();
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  const keyed = keyOutWhite(data, info);

  const outPath = path.join(job.outDir, job.outFile);
  await sharp(keyed, { raw: { width: info.width, height: info.height, channels: 4 } })
    .trim({ threshold: 10 })
    .png({ compressionLevel: 9 })
    .toFile(outPath);

  console.log("wrote", outPath);
}
