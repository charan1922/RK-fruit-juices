import sharp from "sharp";
import fs from "node:fs";

const src = "d:/Learnings/juice/public/images/marketing/concept-grid-1.png";
const outDir = "d:/Learnings/juice/public/images/marketing/concept-panels";
fs.mkdirSync(outDir, { recursive: true });

const cols = 4;
const rows = 3;
const width = 1536;
const height = 1024;
const cellW = Math.floor(width / cols);

let n = 1;
for (let r = 0; r < rows; r++) {
  const top = Math.round((height * r) / rows);
  const bottom = Math.round((height * (r + 1)) / rows);
  const cellH = bottom - top;
  for (let c = 0; c < cols; c++) {
    const left = c * cellW;
    const outPath = `${outDir}/panel-${String(n).padStart(2, "0")}.png`;
    await sharp(src)
      .extract({ left, top, width: cellW, height: cellH })
      .png({ compressionLevel: 9 })
      .toFile(outPath);
    console.log("wrote", outPath);
    n++;
  }
}
