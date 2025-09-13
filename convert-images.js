const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function convertToWebP() {
  const publicDir = path.join(__dirname, 'public');
  
  // Convert logo.png to logo.webp
  try {
    await sharp(path.join(publicDir, 'logo.png'))
      .webp({ quality: 90, effort: 6 })
      .toFile(path.join(publicDir, 'logo.webp'));
    console.log('✅ Successfully converted logo.png to logo.webp');
    
    // Get file sizes for comparison
    const originalSize = fs.statSync(path.join(publicDir, 'logo.png')).size;
    const webpSize = fs.statSync(path.join(publicDir, 'logo.webp')).size;
    console.log(`📊 Logo size reduction: ${(originalSize / 1024 / 1024).toFixed(2)}MB → ${(webpSize / 1024 / 1024).toFixed(2)}MB (${((1 - webpSize/originalSize) * 100).toFixed(1)}% smaller)`);
  } catch (error) {
    console.error('❌ Error converting logo.png:', error);
  }

  // Convert typography.png to typography.webp
  try {
    await sharp(path.join(publicDir, 'typography.png'))
      .webp({ quality: 90, effort: 6 })
      .toFile(path.join(publicDir, 'typography.webp'));
    console.log('✅ Successfully converted typography.png to typography.webp');
    
    // Get file sizes for comparison
    const originalSize = fs.statSync(path.join(publicDir, 'typography.png')).size;
    const webpSize = fs.statSync(path.join(publicDir, 'typography.webp')).size;
    console.log(`📊 Typography size reduction: ${(originalSize / 1024 / 1024).toFixed(2)}MB → ${(webpSize / 1024 / 1024).toFixed(2)}MB (${((1 - webpSize/originalSize) * 100).toFixed(1)}% smaller)`);
  } catch (error) {
    console.error('❌ Error converting typography.png:', error);
  }

  // Also create highly optimized versions for different use cases
  try {
    // Create a smaller logo for favicon and small displays
    await sharp(path.join(publicDir, 'logo.png'))
      .resize(64, 64, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .webp({ quality: 95 })
      .toFile(path.join(publicDir, 'logo-64.webp'));
    console.log('✅ Created optimized 64x64 logo variant');

    // Create a medium logo for header
    await sharp(path.join(publicDir, 'logo.png'))
      .resize(128, 128, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .webp({ quality: 95 })
      .toFile(path.join(publicDir, 'logo-128.webp'));
    console.log('✅ Created optimized 128x128 logo variant');

    // Create a smaller typography preview
    await sharp(path.join(publicDir, 'typography.png'))
      .resize(1200, null, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 85 })
      .toFile(path.join(publicDir, 'typography-optimized.webp'));
    console.log('✅ Created optimized typography variant');
  } catch (error) {
    console.error('❌ Error creating optimized variants:', error);
  }

  console.log('\n🎉 Image optimization complete!');
  console.log('📁 Files created:');
  console.log('  - logo.webp (full size)');
  console.log('  - logo-64.webp (small)');
  console.log('  - logo-128.webp (medium)'); 
  console.log('  - typography.webp (full size)');
  console.log('  - typography-optimized.webp (optimized)');
}

convertToWebP();
