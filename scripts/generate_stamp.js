const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

function arcText(text, cx, cy, radius, startAngleDeg, endAngleDeg, inward = true, fontSize = 28, fontFamily = 'Arial Black, Impact, Arial, sans-serif') {
  const chars = text.split('');
  const totalChars = chars.length;
  const angleStep = (endAngleDeg - startAngleDeg) / (totalChars - 1 || 1);
  
  return chars.map((char, i) => {
    const angle = startAngleDeg + i * angleStep;
    const rad = (angle * Math.PI) / 180;
    const rot = inward ? angle + 90 : angle - 90;
    const x = cx + radius * Math.cos(rad);
    const y = cy + radius * Math.sin(rad);
    
    return `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}" 
      font-family="${fontFamily}" 
      font-size="${fontSize}" 
      font-weight="900" 
      text-anchor="middle" 
      dominant-baseline="central" 
      transform="rotate(${rot.toFixed(1)}, ${x.toFixed(1)}, ${y.toFixed(1)})">${char === '&' ? '&amp;' : char}</text>`;
  }).join('\n    ');
}

function generateStampSvg(color = '#144272') {
  // Top Arc: PRO VISA OVERSEAS
  const topText = arcText('★ PRO VISA OVERSEAS ★', 300, 300, 214, -150, -30, true, 29, 'Arial Black, Impact, sans-serif');
  
  // Bottom Arc: IMMIGRATION CONSULTANTS
  const bottomText = arcText('★ IMMIGRATION CONSULTANTS ★', 300, 300, 214, 150, 30, false, 20, 'Arial Black, Impact, sans-serif');

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
  <defs>
    <!-- Organic Rubber Stamp Ink Distress Filter -->
    <filter id="rubber-grunge" x="-10%" y="-10%" width="120%" height="120%">
      <feTurbulence type="fractalNoise" baseFrequency="0.045" numOctaves="3" result="noise" />
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.8" xChannelSelector="R" yChannelSelector="G" result="distorted" />
      <feTurbulence type="turbulence" baseFrequency="0.14" numOctaves="2" result="speckles" />
      <feColorMatrix type="matrix" values="1 0 0 0 0   0 1 0 0 0   0 0 1 0 0   0 0 0 8 -3.2" in="speckles" result="speckleMask" />
      <feComposite in="distorted" in2="speckleMask" operator="out" />
    </filter>
  </defs>

  <g filter="url(#rubber-grunge)" fill="${color}" stroke="${color}">
    
    <!-- Outer Heavy Ring -->
    <circle cx="300" cy="300" r="275" fill="none" stroke="${color}" stroke-width="7" />

    <!-- Outer Fine Ring -->
    <circle cx="300" cy="300" r="264" fill="none" stroke="${color}" stroke-width="2.5" />

    <!-- Dotted Accent Ring -->
    <circle cx="300" cy="300" r="254" fill="none" stroke="${color}" stroke-width="3" stroke-dasharray="2 8" stroke-linecap="round" />

    <!-- Inner Concentric Double Rings -->
    <circle cx="300" cy="300" r="172" fill="none" stroke="${color}" stroke-width="2.5" />
    <circle cx="300" cy="300" r="162" fill="none" stroke="${color}" stroke-width="4.5" />

    <!-- TOP ARC TEXT -->
    <g stroke="none">
    ${topText}
    </g>

    <!-- BOTTOM ARC TEXT -->
    <g stroke="none">
    ${bottomText}
    </g>

    <!-- Center Airplane Silhouette (Official Pro Visa Overseas Logo Mark) -->
    <g transform="translate(300, 204) scale(1.15)" stroke="none">
      <path d="M 0,-40 L 7,-18 L 36,0 L 36,9 L 7,2 L 6,24 L 16,32 L 16,38 L 0,34 L -16,38 L -16,32 L -6,24 L -7,2 L -36,9 L -36,0 L -7,-18 Z" fill="${color}" />
    </g>

    <!-- Center Box / Seal Plate -->
    <rect x="135" y="256" width="330" height="78" rx="6" fill="none" stroke="${color}" stroke-width="5" />
    <rect x="142" y="263" width="316" height="64" rx="4" fill="none" stroke="${color}" stroke-width="1.5" stroke-dasharray="7 4" />

    <!-- Center Text: VERIFIED & APPROVED -->
    <text x="300" y="297" font-family="'Arial Black', Impact, sans-serif" font-weight="900" font-size="25" letter-spacing="2.5" text-anchor="middle" dominant-baseline="central" stroke="none">
      VERIFIED &amp; APPROVED
    </text>

    <text x="300" y="318" font-family="'Arial Black', Arial, sans-serif" font-weight="900" font-size="10.5" letter-spacing="3" text-anchor="middle" dominant-baseline="central" stroke="none">
      OFFICIAL CONSULTANCY SEAL
    </text>

    <!-- Below Center Box: Location & Trust Stamp -->
    <text x="300" y="365" font-family="'Arial Black', Arial, sans-serif" font-weight="900" font-size="14" letter-spacing="2.5" text-anchor="middle" stroke="none">
      CHANDIGARH • INDIA
    </text>
    
    <text x="300" y="388" font-family="'Arial Black', Arial, sans-serif" font-weight="900" font-size="10" letter-spacing="2.5" text-anchor="middle" stroke="none">
      ★ REGD. VISA &amp; IMMIGRATION ★
    </text>

    <!-- Decorative Stars inside inner ring -->
    <g transform="translate(205, 218) scale(0.65)" stroke="none">
      <polygon points="0,-10 3,-3 10,-2 5,3 6,10 0,7 -6,10 -5,3 -10,-2 -3,-3" fill="${color}" />
    </g>
    <g transform="translate(395, 218) scale(0.65)" stroke="none">
      <polygon points="0,-10 3,-3 10,-2 5,3 6,10 0,7 -6,10 -5,3 -10,-2 -3,-3" fill="${color}" />
    </g>
    
    <g transform="translate(240, 412) scale(0.5)" stroke="none">
      <polygon points="0,-10 3,-3 10,-2 5,3 6,10 0,7 -6,10 -5,3 -10,-2 -3,-3" fill="${color}" />
    </g>
    <g transform="translate(300, 414) scale(0.65)" stroke="none">
      <polygon points="0,-10 3,-3 10,-2 5,3 6,10 0,7 -6,10 -5,3 -10,-2 -3,-3" fill="${color}" />
    </g>
    <g transform="translate(360, 412) scale(0.5)" stroke="none">
      <polygon points="0,-10 3,-3 10,-2 5,3 6,10 0,7 -6,10 -5,3 -10,-2 -3,-3" fill="${color}" />
    </g>
  </g>
</svg>`;
}

async function run() {
  const publicDir = path.join(__dirname, '..', 'public');

  // Red Stamp (Authentic Consular Red Ink)
  const redColor = '#b81414';
  const redSvg = generateStampSvg(redColor);
  fs.writeFileSync(path.join(publicDir, 'provisa-stamp.svg'), redSvg);
  fs.writeFileSync(path.join(publicDir, 'provisa-stamp-red.svg'), redSvg);
  await sharp(Buffer.from(redSvg)).png().toFile(path.join(publicDir, 'provisa-stamp.png'));
  await sharp(Buffer.from(redSvg)).png().toFile(path.join(publicDir, 'provisa-stamp-red.png'));
  console.log('Regenerated provisa-stamp.png (Authentic Red)');
}

run().catch(console.error);
