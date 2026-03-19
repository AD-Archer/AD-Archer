#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const imagesDir = path.join(__dirname, 'public', 'images');

// Check if sharp is available
try {
  require('sharp');
} catch (e) {
  console.log('📦 Installing sharp for image optimization...');
  try {
    execSync('pnpm add sharp --save-dev', { stdio: 'inherit' });
  } catch (installError) {
    console.error('❌ Failed to install sharp. Please run: pnpm add sharp --save-dev');
    process.exit(1);
  }
}

const sharp = require('sharp');

async function optimizeImages(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  let optimizedCount = 0;
  let totalSaved = 0;

  for (const file of files) {
    const filePath = path.join(dir, file.name);

    if (file.isDirectory()) {
      const result = await optimizeImages(filePath);
      optimizedCount += result.optimizedCount;
      totalSaved += result.totalSaved;
    } else if (file.isFile() && /\.(jpg|jpeg|png|gif|bmp|tiff)$/i.test(file.name)) {
      const stats = fs.statSync(filePath);
      const sizeInMB = stats.size / (1024 * 1024);

      // Only optimize files larger than 100KB
      if (sizeInMB > 0.1) {
        console.log(`🔄 Optimizing ${file.name} (${sizeInMB.toFixed(2)}MB)...`);

        const outputPath = filePath.replace(/\.(jpg|jpeg|png|bmp|tiff)$/i, '.webp');

        // Skip if output path would be the same as input (already webp)
        if (outputPath === filePath) {
          console.log(`⏭️  Skipping ${file.name} (already WebP format)`);
          return { optimizedCount, totalSaved };
        }

        try {
          await sharp(filePath)
            .webp({ quality: 80 })
            .toFile(outputPath);

          const newStats = fs.statSync(outputPath);
          const newSizeInMB = newStats.size / (1024 * 1024);
          const savedBytes = stats.size - newStats.size;
          const savedMB = savedBytes / (1024 * 1024);

          console.log(`✅ Optimized to ${newSizeInMB.toFixed(2)}MB (${((savedBytes / stats.size) * 100).toFixed(1)}% reduction)`);

          // Replace original if optimization saved at least 30%
          if (newStats.size < stats.size * 0.7) {
            fs.unlinkSync(filePath);
            optimizedCount++;
            totalSaved += savedMB;
            console.log(`💾 Replaced original with optimized version`);
          } else {
            fs.unlinkSync(outputPath);
            console.log(`⏭️  Kept original (insufficient size reduction)`);
          }
        } catch (error) {
          console.error(`❌ Failed to optimize ${file.name}:`, error.message);
        }
      } else {
        console.log(`⏭️  Skipping ${file.name} (${sizeInMB.toFixed(2)}MB - too small)`);
      }
    }
  }

  return { optimizedCount, totalSaved };
}

async function main() {
  console.log('🚀 Starting image optimization...');
  console.log('📁 Scanning directory:', imagesDir);

  try {
    const startTime = Date.now();
    const result = await optimizeImages(imagesDir);
    const duration = ((Date.now() - startTime) / 1000).toFixed(1);

    console.log('\n🎉 Image optimization complete!');
    console.log(`📊 Optimized ${result.optimizedCount} images`);
    console.log(`💾 Total space saved: ${result.totalSaved.toFixed(2)}MB`);
    console.log(`⏱️  Time taken: ${duration}s`);

    if (result.optimizedCount === 0) {
      console.log('✨ All images are already optimized!');
    }
  } catch (error) {
    console.error('💥 Error during optimization:', error.message);
    process.exit(1);
  }
}

main();
