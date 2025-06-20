import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { splitVendorChunkPlugin } from 'vite';
// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        splitVendorChunkPlugin(),
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
                pure_funcs: ['console.log'],
            },
            mangle: {
                safari10: true,
            },
        },
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ['react', 'react-dom'],
                    ui: ['lucide-react'],
                    utils: ['clsx', 'class-variance-authority', 'tailwind-merge'],
                },
                chunkFileNames: 'assets/js/[name]-[hash].js',
                entryFileNames: 'assets/js/[name]-[hash].js',
                assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
            },
        },
        chunkSizeWarningLimit: 1000,
        sourcemap: false,
        cssCodeSplit: true,
        assetsInlineLimit: 4096,
    },
    optimizeDeps: {
        include: ['react', 'react-dom', 'lucide-react'],
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
});
