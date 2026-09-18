const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const ffmpeg = require("ffmpeg-static");

const WIDTH = 1280;
const HEIGHT = 720;
const FPS = 24;
const DURATION_SEC = 12;
const TOTAL_FRAMES = FPS * DURATION_SEC; // 288 frames

const OUT_DIR = path.join(__dirname, "../public/videos");
const TEMP_DIR = path.join(__dirname, "../.temp_video_frames");

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });
if (!fs.existsSync(TEMP_DIR)) fs.mkdirSync(TEMP_DIR, { recursive: true });

console.log(`Starting video generation: ${WIDTH}x${HEIGHT} @ ${FPS}fps (${TOTAL_FRAMES} frames)`);

// 1. WAV Audio generation with pleasant chime progression
function generateAudioWav(filepath) {
  const sampleRate = 44100;
  const numSamples = Math.floor(DURATION_SEC * sampleRate);
  const buffer = Buffer.alloc(44 + numSamples * 2);

  buffer.write("RIFF", 0);
  buffer.writeUInt32LE(36 + numSamples * 2, 4);
  buffer.write("WAVE", 8);
  buffer.write("fmt ", 12);
  buffer.writeUInt32LE(16, 16);
  buffer.writeUInt16LE(1, 20); // PCM
  buffer.writeUInt16LE(1, 22); // mono
  buffer.writeUInt32LE(sampleRate, 24);
  buffer.writeUInt32LE(sampleRate * 2, 28);
  buffer.writeUInt16LE(2, 32);
  buffer.writeUInt16LE(16, 34);
  buffer.write("data", 36);
  buffer.writeUInt32LE(numSamples * 2, 40);

  const notes = [
    { t0: 0.1, freq: 523.25 }, // C5
    { t0: 3.1, freq: 659.25 }, // E5
    { t0: 6.6, freq: 783.99 }, // G5
    { t0: 7.2, freq: 1046.5 }, // C6 (Copy click chime!)
    { t0: 9.6, freq: 659.25 }, // Outro chord
    { t0: 9.7, freq: 783.99 },
    { t0: 9.8, freq: 1046.5 },
  ];

  for (let i = 0; i < numSamples; i++) {
    const t = i / sampleRate;
    let sample = 0;
    for (const n of notes) {
      if (t >= n.t0 && t < n.t0 + 2.0) {
        const dt = t - n.t0;
        const env = Math.exp(-3.2 * dt);
        sample += 0.22 * env * Math.sin(2 * Math.PI * n.freq * dt);
        sample += 0.08 * env * Math.sin(4 * Math.PI * n.freq * dt);
      }
    }
    const s = Math.max(-1, Math.min(1, sample));
    buffer.writeInt16LE(Math.floor(s * 32767), 44 + i * 2);
  }

  fs.writeFileSync(filepath, buffer);
}

// Helper for escaping SVG text
function escapeXml(unsafe) {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case "<": return "&lt;";
      case ">": return "&gt;";
      case "&": return "&amp;";
      case "'": return "&apos;";
      case '"': return "&quot;";
    }
  });
}

// 2. SVG Frame Builder
function renderFrameSvg(frameIdx) {
  const t = frameIdx / FPS; // Time in seconds

  // Scene determination:
  // 0.0s - 3.0s: Step 1 (Type text)
  // 3.0s - 6.5s: Step 2 (Instant Unicode conversion)
  // 6.5s - 9.5s: Step 3 (Copy & Paste to social apps)
  // 9.5s - 12.0s: Scene 4 (Outro & Call to Action)

  let activeStep = 1;
  if (t >= 9.5) activeStep = 4;
  else if (t >= 6.5) activeStep = 3;
  else if (t >= 3.0) activeStep = 2;

  // Scene 1 text typing progression: "Cool Fonts ✨" (12 chars)
  const fullText = "Cool Fonts ✨";
  let typedText = "";
  if (t < 0.4) {
    typedText = "";
  } else if (t < 2.5) {
    const typingProgress = (t - 0.4) / 2.1;
    const charCount = Math.floor(typingProgress * fullText.length);
    typedText = fullText.slice(0, charCount);
  } else {
    typedText = fullText;
  }
  const showCursor = Math.floor(t * 3.5) % 2 === 0;

  // Step 3 cursor coordinates & click animation
  // Cursor moves from (640, 500) to (1050, 310) (Card 2 copy button) between t=6.5s and t=7.2s
  let cursorX = 640;
  let cursorY = 500;
  let isClicked = false;
  if (t >= 6.5 && t < 7.2) {
    const p = (t - 6.5) / 0.7;
    cursorX = 640 + (1050 - 640) * Math.sin(p * Math.PI / 2);
    cursorY = 500 + (310 - 500) * Math.sin(p * Math.PI / 2);
  } else if (t >= 7.2) {
    cursorX = 1050;
    cursorY = 310;
    isClicked = true;
  }

  // Header tracker styles
  const pillStyle = (step) => {
    if (step === activeStep) {
      return `fill="#4f46e5" stroke="#818cf8" stroke-width="2"`;
    }
    return `fill="#1e293b" stroke="#334155" stroke-width="1"`;
  };

  const textStyle = (step) => {
    if (step === activeStep) {
      return `fill="#ffffff" font-weight="bold"`;
    }
    return `fill="#94a3b8" font-weight="normal"`;
  };

  // Build SVG content
  let bodyContent = "";

  if (activeStep === 1) {
    // Scene 1: Step 1
    bodyContent = `
      <!-- Step 1 Badge -->
      <g transform="translate(640, 190)">
        <rect x="-140" y="-18" width="280" height="36" rx="18" fill="#312e81" stroke="#6366f1" stroke-width="1.5" />
        <text x="0" y="5" text-anchor="middle" fill="#c7d2fe" font-size="14" font-weight="bold" font-family="system-ui, -apple-system, sans-serif" letter-spacing="1">STEP 1: TYPE OR PASTE TEXT</text>
      </g>

      <!-- Main Headline -->
      <text x="640" y="275" text-anchor="middle" fill="#ffffff" font-size="34" font-weight="800" font-family="system-ui, -apple-system, sans-serif" letter-spacing="-0.5">Enter Any Text into FontGen</text>
      <text x="640" y="315" text-anchor="middle" fill="#94a3b8" font-size="18" font-family="system-ui, -apple-system, sans-serif">Real-time processing directly in your browser with zero latency</text>

      <!-- Big Glowing Input Field Mockup -->
      <g transform="translate(640, 420)">
        <rect x="-380" y="-45" width="760" height="90" rx="20" fill="#0f172a" stroke="#6366f1" stroke-width="3" filter="url(#glow)" />
        <text x="-330" y="10" fill="#ffffff" font-size="32" font-weight="600" font-family="system-ui, -apple-system, sans-serif">${escapeXml(typedText)}${showCursor ? '<tspan fill="#818cf8">|</tspan>' : ''}</text>
        <g transform="translate(320, 0)">
          <circle cx="0" cy="0" r="22" fill="#1e293b" />
          <path d="M-6 -6 L6 6 M6 -6 L-6 6" stroke="#94a3b8" stroke-width="2.5" stroke-linecap="round" />
        </g>
      </g>

      <!-- Feature Pill -->
      <g transform="translate(640, 560)">
        <rect x="-160" y="-16" width="320" height="32" rx="16" fill="#064e3b" stroke="#10b981" stroke-width="1" />
        <text x="0" y="5" text-anchor="middle" fill="#a7f3d0" font-size="13" font-weight="bold" font-family="system-ui, -apple-system, sans-serif">✓ 100% Client-Side Privacy (Zero Server Logs)</text>
      </g>
    `;
  } else if (activeStep === 2) {
    // Scene 2: Step 2
    bodyContent = `
      <!-- Step 2 Badge -->
      <g transform="translate(640, 180)">
        <rect x="-170" y="-18" width="340" height="36" rx="18" fill="#312e81" stroke="#6366f1" stroke-width="1.5" />
        <text x="0" y="5" text-anchor="middle" fill="#c7d2fe" font-size="14" font-weight="bold" font-family="system-ui, -apple-system, sans-serif" letter-spacing="1">STEP 2: 240+ UNICODE STYLES</text>
      </g>

      <!-- Subtitle -->
      <text x="640" y="240" text-anchor="middle" fill="#ffffff" font-size="28" font-weight="800" font-family="system-ui, -apple-system, sans-serif">Instant Typographic Transformations</text>

      <!-- 6 Font Cards Grid -->
      <!-- Row 1 -->
      <g transform="translate(180, 280)">
        <!-- Card 1: Bold Serif -->
        <g transform="translate(0, 0)">
          <rect width="420" height="95" rx="16" fill="#1e293b" stroke="#334155" stroke-width="1.5" />
          <text x="24" y="32" fill="#94a3b8" font-size="12" font-weight="bold" font-family="system-ui">BOLD SERIF</text>
          <text x="24" y="68" fill="#ffffff" font-size="24" font-weight="bold" font-family="system-ui">𝐂𝐨𝐨𝐥 𝐅𝐨𝐧𝐭𝐬 ✨</text>
          <rect x="330" y="30" width="68" height="36" rx="10" fill="#312e81" />
          <text x="364" y="53" text-anchor="middle" fill="#c7d2fe" font-size="12" font-weight="bold" font-family="system-ui">Copy</text>
        </g>
        <!-- Card 2: Cursive Script -->
        <g transform="translate(500, 0)">
          <rect width="420" height="95" rx="16" fill="#1e293b" stroke="#6366f1" stroke-width="2" />
          <text x="24" y="32" fill="#818cf8" font-size="12" font-weight="bold" font-family="system-ui">CURSIVE SCRIPT</text>
          <text x="24" y="68" fill="#ffffff" font-size="24" font-family="system-ui">𝒞𝑜𝑜𝓁 𝐹𝑜𝓃𝓉𝓈 ✨</text>
          <rect x="330" y="30" width="68" height="36" rx="10" fill="#4f46e5" />
          <text x="364" y="53" text-anchor="middle" fill="#ffffff" font-size="12" font-weight="bold" font-family="system-ui">Copy</text>
        </g>
      </g>

      <!-- Row 2 -->
      <g transform="translate(180, 400)">
        <!-- Card 3: Gothic Fraktur -->
        <g transform="translate(0, 0)">
          <rect width="420" height="95" rx="16" fill="#1e293b" stroke="#334155" stroke-width="1.5" />
          <text x="24" y="32" fill="#94a3b8" font-size="12" font-weight="bold" font-family="system-ui">GOTHIC FRAKTUR</text>
          <text x="24" y="68" fill="#ffffff" font-size="24" font-family="system-ui">𝕮𝖔𝖔𝖑 𝕱𝖔𝖓𝖙𝖘 ✨</text>
          <rect x="330" y="30" width="68" height="36" rx="10" fill="#312e81" />
          <text x="364" y="53" text-anchor="middle" fill="#c7d2fe" font-size="12" font-weight="bold" font-family="system-ui">Copy</text>
        </g>
        <!-- Card 4: Aesthetic Fullwidth -->
        <g transform="translate(500, 0)">
          <rect width="420" height="95" rx="16" fill="#1e293b" stroke="#334155" stroke-width="1.5" />
          <text x="24" y="32" fill="#94a3b8" font-size="12" font-weight="bold" font-family="system-ui">AESTHETIC FULLWIDTH</text>
          <text x="24" y="68" fill="#ffffff" font-size="24" font-family="system-ui">Ｃｏｏｌ Ｆｏｎｔｓ ✨</text>
          <rect x="330" y="30" width="68" height="36" rx="10" fill="#312e81" />
          <text x="364" y="53" text-anchor="middle" fill="#c7d2fe" font-size="12" font-weight="bold" font-family="system-ui">Copy</text>
        </g>
      </g>

      <!-- Row 3 -->
      <g transform="translate(180, 520)">
        <!-- Card 5: Bubble -->
        <g transform="translate(0, 0)">
          <rect width="420" height="95" rx="16" fill="#1e293b" stroke="#334155" stroke-width="1.5" />
          <text x="24" y="32" fill="#94a3b8" font-size="12" font-weight="bold" font-family="system-ui">BUBBLE TEXT</text>
          <text x="24" y="68" fill="#ffffff" font-size="24" font-family="system-ui">Ⓒⓞⓞⓛ Ⓕⓞⓝⓣⓢ ✨</text>
          <rect x="330" y="30" width="68" height="36" rx="10" fill="#312e81" />
          <text x="364" y="53" text-anchor="middle" fill="#c7d2fe" font-size="12" font-weight="bold" font-family="system-ui">Copy</text>
        </g>
        <!-- Card 6: Small Caps -->
        <g transform="translate(500, 0)">
          <rect width="420" height="95" rx="16" fill="#1e293b" stroke="#334155" stroke-width="1.5" />
          <text x="24" y="32" fill="#94a3b8" font-size="12" font-weight="bold" font-family="system-ui">SMALL CAPITALS</text>
          <text x="24" y="68" fill="#ffffff" font-size="24" font-family="system-ui">ᴄᴏᴏʟ ғᴏɴᴛs ✨</text>
          <rect x="330" y="30" width="68" height="36" rx="10" fill="#312e81" />
          <text x="364" y="53" text-anchor="middle" fill="#c7d2fe" font-size="12" font-weight="bold" font-family="system-ui">Copy</text>
        </g>
      </g>
    `;
  } else if (activeStep === 3) {
    // Scene 3: Step 3
    bodyContent = `
      <!-- Step 3 Badge -->
      <g transform="translate(640, 175)">
        <rect x="-170" y="-18" width="340" height="36" rx="18" fill="#312e81" stroke="#6366f1" stroke-width="1.5" />
        <text x="0" y="5" text-anchor="middle" fill="#c7d2fe" font-size="14" font-weight="bold" font-family="system-ui, -apple-system, sans-serif" letter-spacing="1">STEP 3: 1-CLICK COPY &amp; PASTE</text>
      </g>

      <!-- Featured Card focused in center -->
      <g transform="translate(340, 240)">
        <rect width="600" height="120" rx="20" fill="#1e1b4b" stroke="${isClicked ? '#10b981' : '#6366f1'}" stroke-width="${isClicked ? '3' : '2'}" filter="url(#glow)" />
        <text x="30" y="42" fill="#818cf8" font-size="14" font-weight="bold" font-family="system-ui">CURSIVE SCRIPT</text>
        <text x="30" y="85" fill="#ffffff" font-size="34" font-family="system-ui">𝒞𝑜𝑜𝓁 𝐹𝑜𝓃𝓉𝓈 ✨</text>

        <!-- Copy Button with dynamic click state -->
        <g transform="translate(450, 40)">
          <rect width="120" height="48" rx="12" fill="${isClicked ? '#059669' : '#4f46e5'}" />
          <text x="60" y="30" text-anchor="middle" fill="#ffffff" font-size="15" font-weight="bold" font-family="system-ui">
            ${isClicked ? '✓ Copied!' : 'Copy'}
          </text>
        </g>
      </g>

      <!-- Social Ecosystem Badges: Appear upon click -->
      <g opacity="${isClicked ? '1' : '0.2'}" transform="translate(640, 420)">
        <text x="0" y="0" text-anchor="middle" fill="#e2e8f0" font-size="20" font-weight="bold" font-family="system-ui">Paste Anywhere with Universal Compatibility:</text>

        <!-- Row of social badges -->
        <g transform="translate(-450, 30)">
          <!-- Instagram -->
          <g transform="translate(0, 0)">
            <rect width="130" height="50" rx="12" fill="#833ab4" />
            <text x="65" y="31" text-anchor="middle" fill="#ffffff" font-size="14" font-weight="bold" font-family="system-ui">Instagram</text>
          </g>
          <!-- TikTok -->
          <g transform="translate(160, 0)">
            <rect width="130" height="50" rx="12" fill="#000000" stroke="#25f4ee" stroke-width="1.5" />
            <text x="65" y="31" text-anchor="middle" fill="#ffffff" font-size="14" font-weight="bold" font-family="system-ui">TikTok</text>
          </g>
          <!-- Discord -->
          <g transform="translate(320, 0)">
            <rect width="130" height="50" rx="12" fill="#5865F2" />
            <text x="65" y="31" text-anchor="middle" fill="#ffffff" font-size="14" font-weight="bold" font-family="system-ui">Discord</text>
          </g>
          <!-- X / Twitter -->
          <g transform="translate(480, 0)">
            <rect width="130" height="50" rx="12" fill="#0f1419" stroke="#334155" stroke-width="1.5" />
            <text x="65" y="31" text-anchor="middle" fill="#ffffff" font-size="14" font-weight="bold" font-family="system-ui">Twitter / X</text>
          </g>
          <!-- Roblox -->
          <g transform="translate(640, 0)">
            <rect width="130" height="50" rx="12" fill="#1e293b" stroke="#e11d48" stroke-width="1.5" />
            <text x="65" y="31" text-anchor="middle" fill="#ffffff" font-size="14" font-weight="bold" font-family="system-ui">Roblox</text>
          </g>
          <!-- WhatsApp -->
          <g transform="translate(800, 0)">
            <rect width="130" height="50" rx="12" fill="#25D366" />
            <text x="65" y="31" text-anchor="middle" fill="#ffffff" font-size="14" font-weight="bold" font-family="system-ui">WhatsApp</text>
          </g>
        </g>
      </g>

      <!-- Subtitle -->
      <text x="640" y="580" text-anchor="middle" fill="#94a3b8" font-size="16" font-family="system-ui">
        No app downloads or custom font installation required • Works on iOS, Android &amp; Desktop
      </text>

      <!-- Animated Pointer Cursor -->
      ${t < 9.0 ? `
      <g transform="translate(${cursorX}, ${cursorY})">
        <path d="M0 0 L0 22 L5 17 L11 28 L15 26 L9 15 L17 15 Z" fill="#ffffff" stroke="#000000" stroke-width="1.5" filter="url(#cursorShadow)" />
      </g>` : ''}
    `;
  } else {
    // Scene 4: Outro (9.5s - 12.0s)
    bodyContent = `
      <!-- Big Outro Brand Icon -->
      <g transform="translate(640, 240)">
        <rect x="-60" y="-60" width="120" height="120" rx="32" fill="url(#brandGrad)" filter="url(#glow)" />
        <text x="0" y="24" text-anchor="middle" fill="#ffffff" font-size="76" font-weight="900" font-family="system-ui">F</text>
      </g>

      <!-- Logo Headline -->
      <text x="640" y="355" text-anchor="middle" fill="#ffffff" font-size="44" font-weight="900" font-family="system-ui, -apple-system, sans-serif" letter-spacing="-1">
        FontGen<tspan fill="#818cf8">.dev</tspan>
      </text>
      <text x="640" y="400" text-anchor="middle" fill="#cbd5e1" font-size="20" font-weight="600" font-family="system-ui">
        Free, Private &amp; Instant Font Generator
      </text>

      <!-- Value Props -->
      <g transform="translate(640, 470)">
        <rect x="-320" y="-22" width="640" height="44" rx="22" fill="#1e1b4b" stroke="#4f46e5" stroke-width="1.5" />
        <text x="0" y="6" text-anchor="middle" fill="#c7d2fe" font-size="15" font-weight="bold" font-family="system-ui">
          240+ Unicode Styles  •  100% Client-Side Privacy  •  Instant Copy &amp; Paste
        </text>
      </g>

      <!-- Final Call to Action -->
      <g transform="translate(640, 560)">
        <rect x="-180" y="-25" width="360" height="50" rx="14" fill="#4f46e5" filter="url(#glow)" />
        <text x="0" y="7" text-anchor="middle" fill="#ffffff" font-size="18" font-weight="bold" font-family="system-ui">
          Start Generating Fonts Now →
        </text>
      </g>
    `;
  }

  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${WIDTH} ${HEIGHT}" width="${WIDTH}" height="${HEIGHT}">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0b0f19" />
      <stop offset="50%" stop-color="#111827" />
      <stop offset="100%" stop-color="#1e1b4b" />
    </linearGradient>
    <linearGradient id="brandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4f46e5" />
      <stop offset="100%" stop-color="#7c3aed" />
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="4" stdDeviation="12" flood-color="#6366f1" flood-opacity="0.35" />
    </filter>
    <filter id="cursorShadow" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="#000000" flood-opacity="0.5" />
    </filter>
  </defs>

  <!-- Background Base -->
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bgGrad)" />

  <!-- Ambient Light Orbs -->
  <circle cx="200" cy="150" r="180" fill="#4f46e5" opacity="0.08" />
  <circle cx="1100" cy="600" r="220" fill="#7c3aed" opacity="0.08" />

  <!-- Top Navigation / Brand Bar -->
  <g transform="translate(60, 45)">
    <!-- Brand Mark -->
    <rect x="0" y="0" width="44" height="44" rx="12" fill="url(#brandGrad)" />
    <text x="22" y="31" text-anchor="middle" fill="#ffffff" font-size="26" font-weight="900" font-family="system-ui">F</text>
    <text x="56" y="30" fill="#ffffff" font-size="24" font-weight="900" font-family="system-ui, -apple-system, sans-serif" letter-spacing="-0.5">
      FontGen<tspan fill="#818cf8">.dev</tspan>
    </text>

    <!-- Step Progress Pills (Top Right) -->
    <g transform="translate(700, 4)">
      <!-- Step 1 Pill -->
      <rect x="0" y="0" width="130" height="34" rx="17" ${pillStyle(1)} />
      <text x="65" y="22" text-anchor="middle" ${textStyle(1)} font-size="12" font-family="system-ui">1. Type Text</text>

      <!-- Step 2 Pill -->
      <rect x="145" y="0" width="150" height="34" rx="17" ${pillStyle(2)} />
      <text x="220" y="22" text-anchor="middle" ${textStyle(2)} font-size="12" font-family="system-ui">2. Pick Style</text>

      <!-- Step 3 Pill -->
      <rect x="310" y="0" width="140" height="34" rx="17" ${pillStyle(3)} />
      <text x="380" y="22" text-anchor="middle" ${textStyle(3)} font-size="12" font-family="system-ui">3. Copy &amp; Paste</text>
    </g>
  </g>

  <!-- Horizontal divider -->
  <line x1="60" y1="110" x2="${WIDTH - 60}" y2="110" stroke="#334155" stroke-opacity="0.6" stroke-width="1" />

  <!-- Dynamic Body Content based on active scene -->
  ${bodyContent}
</svg>
  `.trim();
}

async function main() {
  const tStart = Date.now();

  // 1. Generate audio track
  const audioPath = path.join(TEMP_DIR, "audio.wav");
  console.log("Generating audio track...");
  generateAudioWav(audioPath);

  // 2. Render SVG frames & convert to PNG with sips
  console.log(`Rendering ${TOTAL_FRAMES} frames...`);
  const BATCH_SIZE = 12;

  for (let i = 0; i < TOTAL_FRAMES; i += BATCH_SIZE) {
    const end = Math.min(i + BATCH_SIZE, TOTAL_FRAMES);
    const promises = [];

    for (let f = i; f < end; f++) {
      const frameNum = String(f).padStart(4, "0");
      const svgPath = path.join(TEMP_DIR, `frame_${frameNum}.svg`);
      const pngPath = path.join(TEMP_DIR, `frame_${frameNum}.png`);

      const svgData = renderFrameSvg(f);
      fs.writeFileSync(svgPath, svgData, "utf8");

      promises.push(
        new Promise((resolve, reject) => {
          try {
            execSync(`sips -s format png "${svgPath}" --out "${pngPath}" 2>/dev/null`);
            // Clean up svg immediately to save disk
            fs.unlinkSync(svgPath);
            resolve();
          } catch (err) {
            reject(err);
          }
        })
      );
    }

    await Promise.all(promises);
    process.stdout.write(`\rRendered frames ${end}/${TOTAL_FRAMES} (${Math.round((end / TOTAL_FRAMES) * 100)}%)`);
  }
  console.log("\nAll frames rendered successfully!");

  // 3. Save Poster frame (Scene 2 or Scene 3, e.g. frame 190)
  const posterFrameNum = String(190).padStart(4, "0");
  const posterPngPath = path.join(TEMP_DIR, `frame_${posterFrameNum}.png`);
  const posterJpgPath = path.join(OUT_DIR, "how-it-works-poster.jpg");
  const posterWebpPath = path.join(OUT_DIR, "how-it-works-poster.webp");

  console.log("Generating poster images...");
  execSync(`sips -s format jpeg -s formatOptions 85 "${posterPngPath}" --out "${posterJpgPath}"`);
  execSync(`npx cwebp-bin -q 85 "${posterJpgPath}" -o "${posterWebpPath}" 2>/dev/null || true`);

  // 4. Encode MP4 (H.264 + AAC, faststart, yuv420p)
  const mp4Path = path.join(OUT_DIR, "how-font-generator-works.mp4");
  console.log("Encoding MP4 (H.264/AAC)...");
  const mp4Cmd = `${ffmpeg} -y -framerate ${FPS} -i "${path.join(TEMP_DIR, "frame_%04d.png")}" -i "${audioPath}" -c:v libx264 -pix_fmt yuv420p -profile:v high -level:v 4.0 -crf 22 -preset medium -movflags +faststart -c:a aac -b:a 128k -t ${DURATION_SEC} "${mp4Path}"`;
  execSync(mp4Cmd);

  // 5. Encode WebM (VP9 + Opus)
  const webmPath = path.join(OUT_DIR, "how-font-generator-works.webm");
  console.log("Encoding WebM (VP9/Opus)...");
  const webmCmd = `${ffmpeg} -y -framerate ${FPS} -i "${path.join(TEMP_DIR, "frame_%04d.png")}" -i "${audioPath}" -c:v libvpx-vp9 -crf 30 -b:v 0 -deadline good -cpu-used 2 -c:a libopus -b:a 96k -t ${DURATION_SEC} "${webmPath}"`;
  execSync(webmCmd);

  // 6. Generate WebVTT Captions file for accessibility and Google Video Search
  const vttPath = path.join(OUT_DIR, "how-it-works-captions.vtt");
  const vttContent = `WEBVTT - How FontGen Online Font Generator Works

00:00:00.000 --> 00:00:03.000
Step 1: Type or paste your text into the input field. FontGen processes each character in real time.

00:00:03.000 --> 00:00:06.500
Step 2: Choose from 240+ Unicode styles including Bold, Cursive Script, Gothic, Aesthetic, and Bubble fonts.

00:00:06.500 --> 00:00:09.500
Step 3: Click Copy to save to clipboard. Paste directly into Instagram, TikTok, Discord, and messaging apps.

00:00:09.500 --> 00:00:12.000
FontGen.dev: Free, private, and instant font generator with zero server logs. Start creating today!
`;
  fs.writeFileSync(vttPath, vttContent, "utf8");

  // 7. Cleanup temp directory
  console.log("Cleaning up temporary frame cache...");
  const tempFiles = fs.readdirSync(TEMP_DIR);
  for (const file of tempFiles) {
    fs.unlinkSync(path.join(TEMP_DIR, file));
  }
  fs.rmdirSync(TEMP_DIR);

  const duration = ((Date.now() - tStart) / 1000).toFixed(1);
  console.log(`Video generation complete in ${duration}s!`);
  console.log("MP4 Size:", (fs.statSync(mp4Path).size / 1024).toFixed(1) + " KB");
  console.log("WebM Size:", (fs.statSync(webmPath).size / 1024).toFixed(1) + " KB");
  console.log("Poster Size:", (fs.statSync(posterJpgPath).size / 1024).toFixed(1) + " KB");
}

main().catch((err) => {
  console.error("Error during video generation:", err);
  process.exit(1);
});
