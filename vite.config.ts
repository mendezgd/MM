import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { splitVendorChunkPlugin } from 'vite'
import compression from 'vite-plugin-compression'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    splitVendorChunkPlugin(),
    compression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 10240, // Only compress files larger than 10kb
    }),
    compression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 10240,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'es2015',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
        passes: 2,
        unsafe: true,
        unsafe_comps: true,
        unsafe_Function: true,
        unsafe_math: true,
        unsafe_proto: true,
        unsafe_regexp: true,
        unsafe_undefined: true,
      },
      mangle: {
        safari10: true,
        toplevel: true,
      },
      format: {
        comments: false,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Vendor chunks
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor'
            }
            if (id.includes('lucide-react') || id.includes('react-icons')) {
              return 'icons'
            }
            if (id.includes('@radix-ui')) {
              return 'radix-ui'
            }
            if (id.includes('clsx') || id.includes('class-variance-authority') || id.includes('tailwind-merge')) {
              return 'utils'
            }
            // All other node_modules
            return 'vendor'
          }
          // Component chunks
          if (id.includes('/components/')) {
            if (id.includes('/ui/')) {
              return 'ui-components'
            }
            return 'page-components'
          }
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.')
          const ext = info[info.length - 1]
          if (/\.(css)$/.test(assetInfo.name)) {
            return `assets/css/[name]-[hash].${ext}`
          }
          if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico|webp)$/i.test(assetInfo.name)) {
            return `assets/images/[name]-[hash].${ext}`
          }
          return `assets/[ext]/[name]-[hash].[ext]`
        },
      },
    },
    chunkSizeWarningLimit: 500, // Reduced from 1000
    sourcemap: false,
    cssCodeSplit: true,
    assetsInlineLimit: 4096,
    reportCompressedSize: false, // Faster builds
  },
  optimizeDeps: {
    include: [
      'react', 
      'react-dom', 
      'lucide-react',
      'react-icons',
      'clsx',
      'class-variance-authority',
      'tailwind-merge'
    ],
    exclude: ['@radix-ui/react-slot'],
  },
  server: {
    headers: {
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  },
  preview: {
    headers: {
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  },
})
