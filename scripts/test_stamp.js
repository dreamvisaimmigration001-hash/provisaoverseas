const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function testStamp() {
  const stampPath = path.join(__dirname, '..', 'public', 'provisa-stamp.png');
  const inputPath = path.join(__dirname, '..', 'public', 'ppr_original', 'ppr-1.jpeg');
  const outputPath = path.join(__dirname, '..', 'public', 'ppr', 'test-stamped-1.jpeg');

  const imgMeta = await sharp(inputPath).metadata();
  const stampSize = Math.round(imgMeta.width * 0.38); // 38% of width

  // Resize stamp and rotate it -14 degrees
  const stampBuffer = await sharp(stampPath)
    .resize(stampSize, stampSize)
    .rotate(-14, { background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  const stampMeta = await sharp(stampBuffer).metadata();

  // Position at bottom right
  const left = imgMeta.width - stampMeta.width - Math.round(imgMeta.width * 0.05);
  const top = imgMeta.height - stampMeta.height - Math.round(imgMeta.height * 0.08);

  await sharp(inputPath)
    .composite([
      {
        input: stampBuffer,
        top: Math.max(0, top),
        left: Math.max(0, left),
        blend: 'multiply',
      },
    ])
    .jpeg({ quality: 92 })
    .toFile(outputPath);

  console.log('Test stamped image saved:', outputPath);
}

testStamp().catch(console.error);
