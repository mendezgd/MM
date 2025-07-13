import fs from 'fs'
import path from 'path'

const cleanFiles = [
  // TypeScript build info files
  'tsconfig.tsbuildinfo',
  'tsconfig.node.tsbuildinfo',
  
  // Vite cache
  'node_modules/.vite',
  
  // Build artifacts (optional - uncomment if needed)
  // 'dist',
  
  // OS generated files
  '.DS_Store',
  'Thumbs.db',
  
  // Editor files
  '.vscode/settings.json',
  '.idea',
  
  // Log files
  '*.log',
  'npm-debug.log*',
  'yarn-debug.log*',
  'yarn-error.log*',
]

const cleanDirectories = [
  // Cache directories
  '.cache',
  '.parcel-cache',
  
  // Coverage reports
  'coverage',
  
  // Test results
  'test-results',
]

function cleanProject() {
  console.log('🧹 Cleaning project...')
  
  let cleanedCount = 0
  
  // Clean files
  cleanFiles.forEach(file => {
    const filePath = path.join(process.cwd(), file)
    if (fs.existsSync(filePath)) {
      try {
        if (fs.lstatSync(filePath).isDirectory()) {
          fs.rmSync(filePath, { recursive: true, force: true })
        } else {
          fs.unlinkSync(filePath)
        }
        console.log(`✅ Removed: ${file}`)
        cleanedCount++
      } catch (error) {
        console.warn(`⚠️  Could not remove ${file}:`, error.message)
      }
    }
  })
  
  // Clean directories
  cleanDirectories.forEach(dir => {
    const dirPath = path.join(process.cwd(), dir)
    if (fs.existsSync(dirPath)) {
      try {
        fs.rmSync(dirPath, { recursive: true, force: true })
        console.log(`✅ Removed directory: ${dir}`)
        cleanedCount++
      } catch (error) {
        console.warn(`⚠️  Could not remove directory ${dir}:`, error.message)
      }
    }
  })
  
  console.log(`\n🎉 Cleanup complete! Removed ${cleanedCount} files/directories`)
  console.log('\n💡 Tip: Run "npm run dev:clean" to start with a fresh cache')
}

cleanProject() 