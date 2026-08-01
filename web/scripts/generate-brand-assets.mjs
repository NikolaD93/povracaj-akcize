import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const webRoot = path.resolve(scriptDirectory, "..");
const publicDirectory = path.join(webRoot, "public");
const appDirectory = path.join(webRoot, "src", "app");
const logoSvg = await readFile(path.join(publicDirectory, "ikonica.svg"));

await Promise.all([mkdir(publicDirectory, { recursive: true }), mkdir(appDirectory, { recursive: true })]);

async function renderLogo(size, destination) {
  await sharp(logoSvg, { density: 512 })
    .resize(size, size, { fit: "contain" })
    .png({ compressionLevel: 9 })
    .toFile(destination);
}

await Promise.all([
  renderLogo(16, path.join(publicDirectory, "favicon-16x16.png")),
  renderLogo(32, path.join(publicDirectory, "favicon-32x32.png")),
  renderLogo(180, path.join(publicDirectory, "apple-touch-icon.png")),
  renderLogo(192, path.join(publicDirectory, "android-chrome-192x192.png")),
  renderLogo(512, path.join(publicDirectory, "android-chrome-512x512.png")),
]);

const faviconPng = await sharp(logoSvg, { density: 512 })
  .resize(32, 32, { fit: "contain" })
  .png({ compressionLevel: 9 })
  .toBuffer();

const icoHeader = Buffer.alloc(22);
icoHeader.writeUInt16LE(0, 0);
icoHeader.writeUInt16LE(1, 2);
icoHeader.writeUInt16LE(1, 4);
icoHeader.writeUInt8(32, 6);
icoHeader.writeUInt8(32, 7);
icoHeader.writeUInt8(0, 8);
icoHeader.writeUInt8(0, 9);
icoHeader.writeUInt16LE(1, 10);
icoHeader.writeUInt16LE(32, 12);
icoHeader.writeUInt32LE(faviconPng.length, 14);
icoHeader.writeUInt32LE(22, 18);
await writeFile(path.join(appDirectory, "favicon.ico"), Buffer.concat([icoHeader, faviconPng]));

const ogSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="background" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0e2a47"/>
      <stop offset="0.62" stop-color="#143a5f"/>
      <stop offset="1" stop-color="#0b2138"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#background)"/>
  <circle cx="1100" cy="70" r="320" fill="#16a34a" opacity=".2"/>
  <circle cx="1080" cy="650" r="250" fill="#4ade80" opacity=".08"/>
  <rect x="72" y="68" width="104" height="104" rx="26" fill="#1fa463"/>
  <text x="88" y="143" font-family="Segoe UI, Arial, sans-serif" font-size="64" font-weight="800" fill="#fff">P</text>
  <text x="126" y="151" font-family="Segoe UI, Arial, sans-serif" font-size="48" font-weight="800" fill="#f2a93b">A</text>
  <path d="M156 92a27 27 0 0 0-50-7" fill="none" stroke="#fff" stroke-width="7" stroke-linecap="round"/>
  <path d="m106 85-2-13m2 13 13 5" fill="none" stroke="#fff" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="200" y="112" font-family="Segoe UI, Arial, sans-serif" font-size="31" font-weight="700" letter-spacing="1.5" fill="#4ade80">POVRACAJAKCIZE.RS</text>
  <text x="72" y="272" font-family="Segoe UI, Arial, sans-serif" font-size="64" font-weight="800" fill="#fff">Vratite akcizu na dizel</text>
  <text x="72" y="347" font-family="Segoe UI, Arial, sans-serif" font-size="64" font-weight="800" fill="#fff">koju ste već platili.</text>
  <text x="72" y="423" font-family="Segoe UI, Arial, sans-serif" font-size="31" fill="#c9d6e4">Za prevoznike, autobuske i građevinske firme</text>
  <rect x="72" y="484" width="506" height="80" rx="18" fill="#16a34a"/>
  <text x="108" y="536" font-family="Segoe UI, Arial, sans-serif" font-size="30" font-weight="700" fill="#fff">Od 14 do 37 din po litru</text>
  <text x="958" y="555" text-anchor="end" font-family="Segoe UI, Arial, sans-serif" font-size="25" fill="#b8c7d6">Do 5 godina unazad</text>
</svg>`;

await sharp(Buffer.from(ogSvg)).png({ compressionLevel: 9 }).toFile(path.join(publicDirectory, "og-image.png"));

console.log("Brand favicon, app icons and Open Graph image generated.");
