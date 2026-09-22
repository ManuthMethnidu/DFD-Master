import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Optically balanced, high-fidelity DFD icon
// Center: (256, 256). Radius: 98. Stroke: 24.
function getSvg(color = '#ffffff', bgColor = '#000000', isMaskable = false) {
  const bg = bgColor ? `<rect width="512" height="512" fill="${bgColor}" />` : '';
  const transform = isMaskable ? 'transform="translate(64, 64) scale(0.75)"' : '';
  
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512" shape-rendering="geometricPrecision">
  ${bg}
  <g fill="${color}" stroke="${color}" ${transform}>
    <!-- Left Input Arrow: Stem x=64..124, Head x=124..180 -->
    <rect x="64" y="244" width="60" height="24" stroke="none" fill="${color}" />
    <polygon points="124,212 180,256 124,300" stroke="none" fill="${color}" />

    <!-- Center Process Ring: Center (256, 256), Radius 98, Stroke 24 -->
    <!-- Clockwise arc leaving a clean gap on the left where the input arrow enters -->
    <path d="M 181 193 A 98 98 0 1 1 181 319" fill="none" stroke="${color}" stroke-width="24" stroke-linecap="round" />

    <!-- Right Output Arrow: Stem x=354..398, Head x=398..448 -->
    <rect x="354" y="244" width="44" height="24" stroke="none" fill="${color}" />
    <polygon points="398,212 448,256 398,300" stroke="none" fill="${color}" />
  </g>
</svg>`;
}

async function run() {
  const publicDir = path.resolve('public');
  const distDir = path.resolve('dist');

  [publicDir, distDir].forEach(dir => {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  });

  // 1. favicon.svg (Black icon on transparent for light browser tabs)
  const faviconSvg = getSvg('#000000', null, false);
  fs.writeFileSync(path.join(publicDir, 'favicon.svg'), faviconSvg);
  fs.writeFileSync(path.join(distDir, 'favicon.svg'), faviconSvg);

  // 2. favicon-96x96.png (96x96, crisp 300dpi rendering)
  const svgBufferBlack = Buffer.from(faviconSvg);
  await sharp(svgBufferBlack, { density: 300 })
    .resize(96, 96, { kernel: sharp.kernel.lanczos3 })
    .png()
    .toFile(path.join(publicDir, 'favicon-96x96.png'));
  await sharp(svgBufferBlack, { density: 300 })
    .resize(96, 96, { kernel: sharp.kernel.lanczos3 })
    .png()
    .toFile(path.join(distDir, 'favicon-96x96.png'));

  // 3. apple-touch-icon.png (Solid black background, white icon, NO alpha channel for iOS home screen)
  const manifestSvg = getSvg('#ffffff', '#000000', false);
  const svgBufferWhite = Buffer.from(manifestSvg);

  await sharp(svgBufferWhite, { density: 300 })
    .resize(180, 180, { kernel: sharp.kernel.lanczos3 })
    .removeAlpha()
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));
  await sharp(svgBufferWhite, { density: 300 })
    .resize(180, 180, { kernel: sharp.kernel.lanczos3 })
    .removeAlpha()
    .png()
    .toFile(path.join(distDir, 'apple-touch-icon.png'));

  // Also create a high-res apple touch icon
  await sharp(svgBufferWhite, { density: 300 })
    .resize(512, 512, { kernel: sharp.kernel.lanczos3 })
    .removeAlpha()
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon-512x512.png'));
  await sharp(svgBufferWhite, { density: 300 })
    .resize(512, 512, { kernel: sharp.kernel.lanczos3 })
    .removeAlpha()
    .png()
    .toFile(path.join(distDir, 'apple-touch-icon-512x512.png'));

  // 4. Standard PWA Icons (Clean, unpolluted URLs: pwa-192x192.png and pwa-512x512.png)
  await sharp(svgBufferWhite, { density: 300 })
    .resize(192, 192, { kernel: sharp.kernel.lanczos3 })
    .png()
    .toFile(path.join(publicDir, 'pwa-192x192.png'));
  await sharp(svgBufferWhite, { density: 300 })
    .resize(192, 192, { kernel: sharp.kernel.lanczos3 })
    .png()
    .toFile(path.join(distDir, 'pwa-192x192.png'));

  await sharp(svgBufferWhite, { density: 300 })
    .resize(512, 512, { kernel: sharp.kernel.lanczos3 })
    .png()
    .toFile(path.join(publicDir, 'pwa-512x512.png'));
  await sharp(svgBufferWhite, { density: 300 })
    .resize(512, 512, { kernel: sharp.kernel.lanczos3 })
    .png()
    .toFile(path.join(distDir, 'pwa-512x512.png'));

  // 5. Maskable PWA Icons (Android safe-zone: 15% outer padding for circular/squircle system masks)
  const maskableSvg = getSvg('#ffffff', '#000000', true);
  const svgBufferMaskable = Buffer.from(maskableSvg);

  await sharp(svgBufferMaskable, { density: 300 })
    .resize(192, 192, { kernel: sharp.kernel.lanczos3 })
    .png()
    .toFile(path.join(publicDir, 'pwa-maskable-192x192.png'));
  await sharp(svgBufferMaskable, { density: 300 })
    .resize(192, 192, { kernel: sharp.kernel.lanczos3 })
    .png()
    .toFile(path.join(distDir, 'pwa-maskable-192x192.png'));

  await sharp(svgBufferMaskable, { density: 300 })
    .resize(512, 512, { kernel: sharp.kernel.lanczos3 })
    .png()
    .toFile(path.join(publicDir, 'pwa-maskable-512x512.png'));
  await sharp(svgBufferMaskable, { density: 300 })
    .resize(512, 512, { kernel: sharp.kernel.lanczos3 })
    .png()
    .toFile(path.join(distDir, 'pwa-maskable-512x512.png'));

  // 6. Backwards compatibility icons
  await sharp(svgBufferWhite, { density: 300 })
    .resize(192, 192, { kernel: sharp.kernel.lanczos3 })
    .png()
    .toFile(path.join(publicDir, 'web-app-manifest-192x192.png'));
  await sharp(svgBufferWhite, { density: 300 })
    .resize(192, 192, { kernel: sharp.kernel.lanczos3 })
    .png()
    .toFile(path.join(distDir, 'web-app-manifest-192x192.png'));

  await sharp(svgBufferWhite, { density: 300 })
    .resize(512, 512, { kernel: sharp.kernel.lanczos3 })
    .png()
    .toFile(path.join(publicDir, 'web-app-manifest-512x512.png'));
  await sharp(svgBufferWhite, { density: 300 })
    .resize(512, 512, { kernel: sharp.kernel.lanczos3 })
    .png()
    .toFile(path.join(distDir, 'web-app-manifest-512x512.png'));

  await sharp(svgBufferWhite, { density: 300 })
    .resize(1024, 1024, { kernel: sharp.kernel.lanczos3 })
    .png()
    .toFile(path.join(publicDir, 'web-app-manifest-1024x1024.png'));
  await sharp(svgBufferWhite, { density: 300 })
    .resize(1024, 1024, { kernel: sharp.kernel.lanczos3 })
    .png()
    .toFile(path.join(distDir, 'web-app-manifest-1024x1024.png'));

  // 7. favicon.ico (Multi-size ICO with 16, 32, 48 via ImageMagick convert if available)
  const fav48Path = path.join(publicDir, 'fav48.png');
  await sharp(svgBufferBlack, { density: 300 })
    .resize(48, 48, { kernel: sharp.kernel.lanczos3 })
    .png()
    .toFile(fav48Path);

  try {
    execSync(`convert ${fav48Path} -define icon:auto-resize=48,32,16 ${path.join(publicDir, 'favicon.ico')}`);
    execSync(`cp ${path.join(publicDir, 'favicon.ico')} ${path.join(distDir, 'favicon.ico')}`);
  } catch (err) {
    console.warn('ImageMagick convert not found or failed, preserving existing favicon.ico');
  }
  if (fs.existsSync(fav48Path)) fs.unlinkSync(fav48Path);

  // 8. site.webmanifest with standard PWA icons and separate any and maskable purposes
  const manifestContent = JSON.stringify({
    "id": "/",
    "name": "DFD Master",
    "short_name": "DFD Master",
    "description": "Interactive Data Flow Diagram (DFD) simulator and learning tool for system modeling",
    "start_url": "/",
    "scope": "/",
    "display": "standalone",
    "orientation": "any",
    "theme_color": "#111111",
    "background_color": "#F9F9FB",
    "icons": [
      {
        "src": "/pwa-192x192.png",
        "sizes": "192x192",
        "type": "image/png",
        "purpose": "any"
      },
      {
        "src": "/pwa-512x512.png",
        "sizes": "512x512",
        "type": "image/png",
        "purpose": "any"
      },
      {
        "src": "/pwa-maskable-192x192.png",
        "sizes": "192x192",
        "type": "image/png",
        "purpose": "maskable"
      },
      {
        "src": "/pwa-maskable-512x512.png",
        "sizes": "512x512",
        "type": "image/png",
        "purpose": "maskable"
      },
      {
        "src": "/apple-touch-icon.png",
        "sizes": "180x180",
        "type": "image/png",
        "purpose": "any"
      }
    ]
  }, null, 2);

  fs.writeFileSync(path.join(publicDir, 'site.webmanifest'), manifestContent);
  fs.writeFileSync(path.join(distDir, 'site.webmanifest'), manifestContent);
  fs.writeFileSync(path.join(publicDir, 'manifest.webmanifest'), manifestContent);
  fs.writeFileSync(path.join(distDir, 'manifest.webmanifest'), manifestContent);

  console.log('All favicon and manifest assets generated successfully at ultra-high resolution!');
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});

