import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const width = 1200;
const height = 630;

const svg = `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Background Grid -->
    <pattern id="bg-grid" width="24" height="24" patternUnits="userSpaceOnUse">
      <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(255, 255, 255, 0.08)" stroke-width="1"/>
    </pattern>

    <!-- Canvas Dot Matrix -->
    <pattern id="dot-grid" width="16" height="16" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1" fill="#bbb" />
    </pattern>

    <style>
      .font-sans { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; }
      .font-serif { font-family: "Georgia", "Times New Roman", serif; }
      .font-mono { font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace; }
    </style>
  </defs>

  <!-- Background Base -->
  <rect width="${width}" height="${height}" fill="#0e1117" />
  <rect width="${width}" height="${height}" fill="url(#bg-grid)" />

  <!-- Top Pill Badge: DFD Master. -->
  <g transform="translate(600, 75)">
    <rect x="-85" y="-18" width="170" height="36" rx="18" fill="#181b22" stroke="#ffffff" stroke-width="2" />
    <text x="0" y="5" text-anchor="middle" fill="#ffffff" font-size="16" font-weight="600" class="font-sans" letter-spacing="0.5">DFD Master.</text>
  </g>

  <!-- Main Headline -->
  <text x="600" y="150" text-anchor="middle" fill="#ffffff" font-size="38" font-weight="800" class="font-sans" letter-spacing="-0.5">
    An interactive Context Diagram and DFD Simulator
  </text>

  <!-- Mockup App Window -->
  <g transform="translate(60, 230)">
    <!-- Window Outer Card with Brutalist Border -->
    <rect x="0" y="0" width="1080" height="450" fill="#ffffff" stroke="#000000" stroke-width="4" />

    <!-- App Header Bar -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="1080" height="48" fill="#ffffff" stroke="#000000" stroke-width="3" />
      
      <!-- Brand Logo in Window -->
      <text x="24" y="32" fill="#000000" font-size="24" font-weight="900" font-style="italic" class="font-serif">DFD Master.</text>
      
      <!-- Question Navigator -->
      <g transform="translate(250, 10)">
        <rect x="0" y="0" width="28" height="28" fill="#ffffff" stroke="#000000" stroke-width="2" />
        <path d="M 16 9 L 11 14 L 16 19" fill="none" stroke="#000000" stroke-width="2.5" />
        
        <rect x="35" y="0" width="115" height="28" fill="#ffffff" stroke="#000000" stroke-width="2" />
        <text x="92" y="19" text-anchor="middle" fill="#000000" font-size="11" font-weight="700" class="font-sans" letter-spacing="1">Q 1 OF 1000</text>
        
        <rect x="157" y="0" width="28" height="28" fill="#ffffff" stroke="#000000" stroke-width="2" />
        <path d="M 170 9 L 175 14 L 170 19" fill="none" stroke="#000000" stroke-width="2.5" />
      </g>

      <!-- Right Header Actions -->
      <g transform="translate(540, 10)">
        <rect x="0" y="0" width="80" height="28" fill="#ffffff" stroke="#000000" stroke-width="2" />
        <text x="40" y="18" text-anchor="middle" fill="#000000" font-size="10" font-weight="700" class="font-sans" letter-spacing="1">LEADERS</text>

        <rect x="86" y="0" width="75" height="28" fill="#ffffff" stroke="#000000" stroke-width="2" />
        <text x="123" y="18" text-anchor="middle" fill="#000000" font-size="10" font-weight="700" class="font-sans" letter-spacing="1">PROFILE</text>

        <line x1="171" y1="4" x2="171" y2="24" stroke="#cccccc" stroke-width="2" />

        <rect x="180" y="0" width="75" height="28" fill="#ffffff" stroke="#000000" stroke-width="2" />
        <text x="217" y="18" text-anchor="middle" fill="#000000" font-size="10" font-weight="700" class="font-sans" letter-spacing="1">RANDOM Q</text>

        <!-- Tool Icons -->
        <rect x="262" y="0" width="26" height="28" fill="#ffffff" stroke="#000000" stroke-width="2" />
        <rect x="268" y="7" width="5" height="5" fill="#000000" />
        <rect x="277" y="7" width="5" height="5" fill="#000000" />
        <rect x="268" y="16" width="5" height="5" fill="#000000" />
        <rect x="277" y="16" width="5" height="5" fill="#000000" />

        <rect x="294" y="0" width="26" height="28" fill="#000000" stroke="#000000" stroke-width="2" />
        <path d="M 302 9 L 307 14 L 312 9 M 307 14 L 307 20" stroke="#ffffff" stroke-width="2" fill="none" />

        <rect x="326" y="0" width="26" height="28" fill="#ffffff" stroke="#000000" stroke-width="2" />
        <path d="M 333 10 L 345 10 M 336 10 L 336 21 M 342 10 L 342 21" stroke="#000000" stroke-width="1.5" fill="none" />

        <rect x="358" y="0" width="26" height="28" fill="#ffffff" stroke="#000000" stroke-width="2" />
        <path d="M 366 12 L 363 15 L 366 18 M 363 15 L 373 15" stroke="#000000" stroke-width="2" fill="none" />

        <rect x="390" y="0" width="26" height="28" fill="#ffffff" stroke="#000000" stroke-width="2" />
        <path d="M 402 12 L 405 15 L 402 18 M 405 15 L 395 15" stroke="#000000" stroke-width="2" fill="none" />

        <rect x="422" y="0" width="55" height="28" fill="#ffffff" stroke="#000000" stroke-width="2" />
        <text x="449" y="18" text-anchor="middle" fill="#000000" font-size="10" font-weight="700" class="font-sans" letter-spacing="1">RULES</text>

        <rect x="483" y="0" width="26" height="28" fill="#ffffff" stroke="#000000" stroke-width="2" />
        <path d="M 498 8 A 6 6 0 1 1 493 19 A 6 6 0 0 0 498 8" fill="#000000" />
      </g>
    </g>

    <!-- Main Workspace Area -->
    <g transform="translate(0, 48)">
      <!-- Left Sidebar -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="260" height="402" fill="#ffffff" stroke="#000000" stroke-width="3" />
        
        <!-- Category & Syllabus Tags -->
        <rect x="16" y="16" width="90" height="20" fill="#ffffff" stroke="#000000" stroke-width="2" />
        <text x="61" y="30" text-anchor="middle" fill="#000000" font-size="9" font-weight="800" class="font-sans" letter-spacing="1">LEVEL 1 DFD</text>

        <rect x="112" y="16" width="105" height="20" fill="#000000" stroke="#000000" stroke-width="2" />
        <text x="164" y="30" text-anchor="middle" fill="#ffffff" font-size="9" font-weight="800" class="font-sans" letter-spacing="1">A/L PAST PAPERS</text>

        <!-- Question Scenario Title -->
        <text x="16" y="62" fill="#000000" font-size="15" font-weight="800" class="font-sans">Bookland Enquiries (2016/2017</text>
        <text x="16" y="80" fill="#000000" font-size="15" font-weight="800" class="font-sans">Past Paper)</text>

        <!-- Scenario Description Quote -->
        <g transform="translate(16, 95)">
          <line x1="0" y1="0" x2="0" y2="170" stroke="#000000" stroke-width="2" />
          <text x="10" y="14" fill="#333333" font-size="11" font-style="italic" class="font-serif">"A 'Customer' makes a 'Book Enquiry' to</text>
          <text x="10" y="32" fill="#333333" font-size="11" font-style="italic" class="font-serif">'Handle Enquiries' (Process). The process</text>
          <text x="10" y="50" fill="#333333" font-size="11" font-style="italic" class="font-serif">checks 'Book Details' in the 'Inventory'</text>
          <text x="10" y="68" fill="#333333" font-size="11" font-style="italic" class="font-serif">(Data Store). It then records a 'Hold-on</text>
          <text x="10" y="86" fill="#333333" font-size="11" font-style="italic" class="font-serif">Request' in the 'Hold-on Tray' (Data</text>
          <text x="10" y="104" fill="#333333" font-size="11" font-style="italic" class="font-serif">Store) and gives a 'Reply' to the</text>
          <text x="10" y="122" fill="#333333" font-size="11" font-style="italic" class="font-serif">'Customer'."</text>
        </g>

        <!-- Submit Button at Bottom of Sidebar -->
        <g transform="translate(16, 290)">
          <rect x="0" y="0" width="228" height="38" fill="#000000" stroke="#000000" stroke-width="2" />
          <text x="114" y="24" text-anchor="middle" fill="#ffffff" font-size="11" font-weight="800" class="font-sans" letter-spacing="1.5">SUBMIT DIAGRAM</text>
        </g>
      </g>

      <!-- Canvas Area -->
      <g transform="translate(260, 0)">
        <rect x="0" y="0" width="820" height="402" fill="#fcfcfc" />
        <rect x="0" y="0" width="820" height="402" fill="url(#dot-grid)" />

        <!-- Canvas Header Tag: LEVEL 1 DFD with Shadow -->
        <g transform="translate(20, 20)">
          <rect x="3" y="3" width="85" height="24" fill="#000000" />
          <rect x="0" y="0" width="85" height="24" fill="#ffffff" stroke="#000000" stroke-width="2" />
          <text x="42" y="16" text-anchor="middle" fill="#000000" font-size="10" font-weight="800" class="font-sans" letter-spacing="1">LEVEL 1 DFD</text>
        </g>

        <!-- Zoom / Viewport Controls Bottom Left -->
        <g transform="translate(20, 255)">
          <rect x="0" y="0" width="22" height="66" fill="#ffffff" stroke="#000000" stroke-width="2" />
          <text x="11" y="18" text-anchor="middle" font-size="14" font-weight="700">+</text>
          <line x1="0" y1="22" x2="22" y2="22" stroke="#000000" stroke-width="2" />
          <text x="11" y="40" text-anchor="middle" font-size="14" font-weight="700">−</text>
          <line x1="0" y1="44" x2="22" y2="44" stroke="#000000" stroke-width="2" />
          <circle cx="11" cy="55" r="3" fill="#000000" />
        </g>

        <!-- Bottom Palette Nodes Bar -->
        <g transform="translate(280, 275)">
          <rect x="3" y="3" width="210" height="58" fill="#000000" />
          <rect x="0" y="0" width="210" height="58" fill="#ffffff" stroke="#000000" stroke-width="2" />

          <!-- Entity Node Icon -->
          <g transform="translate(25, 20)">
            <ellipse cx="0" cy="0" rx="15" ry="10" fill="none" stroke="#000000" stroke-width="2" />
            <text x="0" y="19" text-anchor="middle" font-size="8" font-weight="800" class="font-sans" letter-spacing="0.5">ENTITY</text>
          </g>

          <line x1="52" y1="5" x2="52" y2="45" stroke="#000000" stroke-width="1.5" />

          <!-- Process Node Icon -->
          <g transform="translate(78, 20)">
            <rect x="-14" y="-12" width="28" height="24" fill="none" stroke="#000000" stroke-width="2" />
            <line x1="-14" y1="-5" x2="14" y2="-5" stroke="#000000" stroke-width="1.5" />
            <line x1="0" y1="-5" x2="0" y2="12" stroke="#000000" stroke-width="1.5" />
            <text x="0" y="19" text-anchor="middle" font-size="8" font-weight="800" class="font-sans" letter-spacing="0.5">PROCESS</text>
          </g>

          <line x1="105" y1="5" x2="105" y2="45" stroke="#000000" stroke-width="1.5" />

          <!-- Store Node Icon -->
          <g transform="translate(132, 20)">
            <path d="M 12 -10 L -12 -10 L -12 10 L 12 10" fill="none" stroke="#000000" stroke-width="2" />
            <line x1="-5" y1="-10" x2="-5" y2="10" stroke="#000000" stroke-width="1.5" />
            <text x="0" y="19" text-anchor="middle" font-size="8" font-weight="800" class="font-sans" letter-spacing="0.5">STORE</text>
          </g>

          <line x1="158" y1="5" x2="158" y2="45" stroke="#000000" stroke-width="1.5" />

          <!-- Note Icon -->
          <g transform="translate(184, 20)">
            <rect x="-10" y="-11" width="20" height="22" fill="#fff566" stroke="#000000" stroke-width="1.5" />
            <text x="0" y="19" text-anchor="middle" font-size="8" font-weight="800" class="font-sans" letter-spacing="0.5">NOTE</text>
          </g>
        </g>

        <!-- Expected Elements Button Bottom Right -->
        <g transform="translate(560, 290)">
          <rect x="0" y="0" width="180" height="34" fill="#ffffff" stroke="#000000" stroke-width="2" />
          <circle cx="20" cy="17" r="5" fill="none" stroke="#000000" stroke-width="1.5" />
          <circle cx="20" cy="17" r="2" fill="#000000" />
          <text x="35" y="21" fill="#000000" font-size="10" font-weight="800" class="font-sans" letter-spacing="1">EXPECTED ELEMENTS</text>
        </g>
      </g>
    </g>
  </g>
</svg>
`;

async function run() {
  const publicDir = path.resolve('public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const svgBuffer = Buffer.from(svg);
  await sharp(svgBuffer)
    .png({ quality: 100 })
    .toFile(path.join(publicDir, 'og.png'));

  // Also write to dist/og.png if dist exists
  const distDir = path.resolve('dist');
  if (fs.existsSync(distDir)) {
    await sharp(svgBuffer)
      .png({ quality: 100 })
      .toFile(path.join(distDir, 'og.png'));
  }

  console.log('Successfully generated public/og.png and dist/og.png');
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
