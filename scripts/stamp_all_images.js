const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

// UPPER placement configurations for each document so the stamp is prominently visible
// in the upper portion of the visa and fully visible in the card carousel
const UPPER_STAMP_CONFIGS = {
  // ppr-1: 858 x 1280. Right next to / over "Application status: Granted" (upper section)
  'ppr-1.jpeg': { xPercent: 0.52, yPercent: 0.22, sizePercent: 0.38, rotate: -13 },

  // ppr-2: 770 x 974. Across upper part of the Slovak visa sticker and page fold
  'ppr-2.jpeg': { xPercent: 0.48, yPercent: 0.38, sizePercent: 0.39, rotate: -12 },

  // ppr-3: 644 x 710. In upper-right of Malta visa over "STATI SCHENGEN"
  'ppr-3.jpeg': { xPercent: 0.48, yPercent: 0.20, sizePercent: 0.39, rotate: -14 },

  // ppr-4: 770 x 1012. Across upper part of the Slovak visa sticker and page fold
  'ppr-4.jpeg': { xPercent: 0.48, yPercent: 0.36, sizePercent: 0.39, rotate: -12 },

  // ppr-5: 720 x 846. Upper section of Gulf Air boarding pass
  'ppr-5.jpeg': { xPercent: 0.46, yPercent: 0.20, sizePercent: 0.37, rotate: -13 },

  // ppr-6: 720 x 1280. Across upper New Zealand entry clearance stamp area
  'ppr-6.jpeg': { xPercent: 0.42, yPercent: 0.16, sizePercent: 0.40, rotate: -12 },

  // ppr-7: 720 x 1017. Upper passport page 3 alongside / above the departed stamp
  'ppr-7.jpeg': { xPercent: 0.42, yPercent: 0.20, sizePercent: 0.38, rotate: -13 },

  // ppr-8: 810 x 1080. Upper white paper margin next to "Application status"
  'ppr-8.jpeg': { xPercent: 0.50, yPercent: 0.16, sizePercent: 0.36, rotate: -12 },

  // ppr-9: 937 x 1280. Upper section next to / over "Application status" box
  'ppr-9.jpeg': { xPercent: 0.52, yPercent: 0.25, sizePercent: 0.38, rotate: -13 },

  // ppr-10: 821 x 1280. Upper section right next to "Application status: Granted"
  'ppr-10.jpeg': { xPercent: 0.52, yPercent: 0.22, sizePercent: 0.38, rotate: -13 },
};

async function stampAllImagesUpper() {
  const origDir = path.join(__dirname, '..', 'public', 'ppr_original');
  const targetDir = path.join(__dirname, '..', 'public', 'ppr');
  const stampPath = path.join(__dirname, '..', 'public', 'provisa-stamp.png');

  const files = fs.readdirSync(origDir).filter(f => f.startsWith('ppr-') && f.endsWith('.jpeg'));

  for (const file of files) {
    const inputPath = path.join(origDir, file);
    const outputPath = path.join(targetDir, file);
    const cfg = UPPER_STAMP_CONFIGS[file] || { xPercent: 0.50, yPercent: 0.22, sizePercent: 0.38, rotate: -13 };

    const imgMeta = await sharp(inputPath).metadata();
    const stampDimension = Math.round(imgMeta.width * cfg.sizePercent);

    const stampRotatedBuffer = await sharp(stampPath)
      .resize(stampDimension, stampDimension)
      .rotate(cfg.rotate, { background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toBuffer();

    const stampMeta = await sharp(stampRotatedBuffer).metadata();

    let left = Math.round(imgMeta.width * cfg.xPercent);
    let top = Math.round(imgMeta.height * cfg.yPercent);

    if (left + stampMeta.width > imgMeta.width) left = imgMeta.width - stampMeta.width - 10;
    if (top + stampMeta.height > imgMeta.height) top = imgMeta.height - stampMeta.height - 10;
    if (left < 0) left = 10;
    if (top < 0) top = 10;

    await sharp(inputPath)
      .composite([
        {
          input: stampRotatedBuffer,
          top,
          left,
          blend: 'multiply',
        },
      ])
      .jpeg({ quality: 93 })
      .toFile(outputPath);

    console.log(`Stamped UPPER ${file} at (${left}, ${top}) with size ${stampDimension}px`);
  }

  console.log('All images updated with UPPER stamp placement!');
}

stampAllImagesUpper().catch(console.error);
