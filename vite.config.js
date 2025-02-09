import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import path from 'path'

// Use import.meta.url to resolve paths in Vite
const resolvePath = (...segments) => path.resolve(new URL('.', import.meta.url).pathname, ...segments);

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic'
    }),
    viteStaticCopy({
      targets: [
        {
          src: 'public/robots.txt',
          dest: ''
        },
        {
          src: 'public/sitemap.xml',
          dest: ''
        }
      ]
    })
  ],
  resolve: {
    alias: {
      '@': resolvePath('src')
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    minify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'styled-components'],
          animations: ['framer-motion'],
        }
      }
    }
  }
})
