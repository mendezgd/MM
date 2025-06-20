import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const publicDir = './public';
const imagesToOptimize = [
  'nosotros.jpg',
  'gente.jpg', 
  'edificio.jpg',
  'logo.png'
];

async function optimizeImages() {
  console.log('Starting image optimization...');
  
  for (const imageName of imagesToOptimize) {
    const inputPath = path.join(publicDir, imageName);
    
    if (!fs.existsSync(inputPath)) {
      console.log(`Skipping ${imageName} - file not found`);
      continue;
    }
    
    try {
      console.log(`Optimizing ${imageName}...`);
      
      const originalSize = fs.statSync(inputPath).size;
      const ext = path.extname(imageName).toLowerCase();
      
      if (ext === '.jpg' || ext === '.jpeg') {
        // Optimize JPG with better compression
        const optimizedJpgPath = path.join(publicDir, `optimized-${imageName}`);
        await sharp(inputPath)
          .jpeg({ 
            quality: 75,
            progressive: true,
            mozjpeg: true
          })
          .toFile(optimizedJpgPath);
        
        const optimizedSize = fs.statSync(optimizedJpgPath).size;
        const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
        
        console.log(`✅ ${imageName} → optimized-${imageName}`);
        console.log(`   Original: ${(originalSize / 1024).toFixed(1)}KB`);
        console.log(`   Optimized: ${(optimizedSize / 1024).toFixed(1)}KB`);
        console.log(`   Savings: ${savings}%`);
        
        // Also create WebP version with aggressive compression
        const webpPath = path.join(publicDir, imageName.replace(/\.(jpg|jpeg)$/, '.webp'));
        await sharp(inputPath)
          .webp({ 
            quality: 60,
            effort: 6,
            nearLossless: false
          })
          .toFile(webpPath);
        
        const webpSize = fs.statSync(webpPath).size;
        const webpSavings = ((originalSize - webpSize) / originalSize * 100).toFixed(1);
        
        console.log(`✅ ${imageName} → ${imageName.replace(/\.(jpg|jpeg)$/, '.webp')}`);
        console.log(`   WebP size: ${(webpSize / 1024).toFixed(1)}KB`);
        console.log(`   WebP savings: ${webpSavings}%`);
        
      } else if (ext === '.png') {
        // Optimize PNG
        const optimizedPngPath = path.join(publicDir, `optimized-${imageName}`);
        await sharp(inputPath)
          .png({ 
            compressionLevel: 9,
            progressive: true
          })
          .toFile(optimizedPngPath);
        
        const optimizedSize = fs.statSync(optimizedPngPath).size;
        const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
        
        console.log(`✅ ${imageName} → optimized-${imageName}`);
        console.log(`   Original: ${(originalSize / 1024).toFixed(1)}KB`);
        console.log(`   Optimized: ${(optimizedSize / 1024).toFixed(1)}KB`);
        console.log(`   Savings: ${savings}%`);
        
        // Also create WebP version
        const webpPath = path.join(publicDir, imageName.replace(/\.png$/, '.webp'));
        await sharp(inputPath)
          .webp({ 
            quality: 80,
            effort: 6,
            nearLossless: true
          })
          .toFile(webpPath);
        
        const webpSize = fs.statSync(webpPath).size;
        const webpSavings = ((originalSize - webpSize) / originalSize * 100).toFixed(1);
        
        console.log(`✅ ${imageName} → ${imageName.replace(/\.png$/, '.webp')}`);
        console.log(`   WebP size: ${(webpSize / 1024).toFixed(1)}KB`);
        console.log(`   WebP savings: ${webpSavings}%`);
      }
      
      console.log('');
      
    } catch (error) {
      console.error(`❌ Error optimizing ${imageName}:`, error.message);
    }
  }
  
  console.log('Image optimization complete!');
}

optimizeImages().catch(console.error); 