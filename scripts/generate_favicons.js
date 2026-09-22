import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Standard 512x512 icon path definition
// Color can be black or white
function getSvg(color = '#000000', bgColor = null, padding = 0) {
  const bg = bgColor ? `<rect width="512" height="512" fill="${bgColor}" />` : '';
  
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  ${bg}
  <g fill="${color}" stroke="${color}">
    <!-- Left Arrow (Input) -->
    <!-- Stem: x=42 to 108, y=245 to 267 (thickness 22) -->
    <rect x="42" y="245" width="66" height="22" stroke="none" fill="${color}" />
    <!-- Arrowhead: base x=108 (y=216 to 296), tip x=168 (y=256) -->
    <polygon points="108,216 168,256 108,296" stroke="none" fill="${color}" />

    <!-- Center Ring (Process with left gap) -->
    <!-- Center (256, 256), Radius 108, Stroke 24 -->
    <!-- Arc starts after gap at 145 deg (x=167.5, y=194) and ends at 215 deg (x=167.5, y=318) -->
    <path d="M 168 194 A 108 108 0 1 1 168 318" fill="none" stroke="${color}" stroke-width="24" stroke-linecap="butt" />

    <!-- Right Arrow (Output) -->
    <!-- Stem starts at outer circle edge x=364 to 426, y=245 to 267 -->
    <rect x="364" y="245" width="62" height="22" stroke="none" fill="${color}" />
    <!-- Arrowhead: base x=426 (y=216 to 296), tip x=486 (y=256) -->
    <polygon points="426,216 486,256 426,296" stroke="none" fill="${color}" />
  </g>
</svg>`;
}

async function run() {
  const publicDir = path.resolve('public');
  const distDir = path.resolve('dist');

  [publicDir, distDir].forEach(dir => {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  });

  // 1. favicon.svg (Black icon, transparent background)
  const faviconSvg = getSvg('#000000', null);
  fs.writeFileSync(path.join(publicDir, 'favicon.svg'), faviconSvg);
  fs.writeFileSync(path.join(distDir, 'favicon.svg'), faviconSvg);

  // 2. favicon-96x96.png (96x96, black icon, transparent)
  const svgBufferBlack = Buffer.from(faviconSvg);
  await sharp(svgBufferBlack)
    .resize(96, 96)
    .png()
    .toFile(path.join(publicDir, 'favicon-96x96.png'));
  await sharp(svgBufferBlack)
    .resize(96, 96)
    .png()
    .toFile(path.join(distDir, 'favicon-96x96.png'));

  // 3. apple-touch-icon.png (180x180, black icon on white background or transparent)
  // Let's check user uploaded image 1: apple-touch-icon.png has white/transparent background with black icon
  await sharp(svgBufferBlack)
    .resize(180, 180)
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));
  await sharp(svgBufferBlack)
    .resize(180, 180)
    .png()
    .toFile(path.join(distDir, 'apple-touch-icon.png'));

  // 4. web-app-manifest-192x192.png (192x192, white icon on solid black #000000 background)
  const manifestSvg = getSvg('#ffffff', '#000000');
  const svgBufferWhite = Buffer.from(manifestSvg);

  await sharp(svgBufferWhite)
    .resize(192, 192)
    .png()
    .toFile(path.join(publicDir, 'web-app-manifest-192x192.png'));
  await sharp(svgBufferWhite)
    .resize(192, 192)
    .png()
    .toFile(path.join(distDir, 'web-app-manifest-192x192.png'));

  // 5. web-app-manifest-512x512.png (512x512, white icon on solid black #000000 background)
  await sharp(svgBufferWhite)
    .resize(512, 512)
    .png()
    .toFile(path.join(publicDir, 'web-app-manifest-512x512.png'));
  await sharp(svgBufferWhite)
    .resize(512, 512)
    .png()
    .toFile(path.join(distDir, 'web-app-manifest-512x512.png'));

  // 6. favicon.ico (Multi-size ICO with 16, 32, 48 via ImageMagick convert)
  // Generate 48x48 PNG temporary file then convert to ICO
  const fav48Path = path.join(publicDir, 'fav48.png');
  await sharp(svgBufferBlack).resize(48, 48).png().toFile(fav48Path);

  execSync(`convert ${fav48Path} -define icon:auto-resize=48,32,16 ${path.join(publicDir, 'favicon.ico')}`);
  execSync(`cp ${path.join(publicDir, 'favicon.ico')} ${path.join(distDir, 'favicon.ico')}`);
  fs.unlinkSync(fav48Path);

  // 7. site.webmanifest
  const manifestContent = JSON.stringify({
    "name": "DFD Master",
    "short_name": "DFD Master",
    "icons": [
      {
        "src": "/web-app-manifest-192x192.png?v=20260922",
        "sizes": "192x192",
        "type": "image/png",
        "purpose": "maskable"
      },
      {
        "src": "/web-app-manifest-512x512.png?v=20260922",
        "sizes": "512x512",
        "type": "image/png",
        "purpose": "maskable"
      }
    ],
    "theme_color": "#000000",
    "background_color": "#000000",
    "display": "standalone"
  }, null, 2);

  fs.writeFileSync(path.join(publicDir, 'site.webmanifest'), manifestContent);
  fs.writeFileSync(path.join(distDir, 'site.webmanifest'), manifestContent);

  console.log('All favicon and manifest assets generated successfully!');
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
