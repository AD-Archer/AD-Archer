import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import path from 'path'
import { fileURLToPath } from 'url'

// Get the directory name from the URL
const __dirname = path.dirname(fileURLToPath(import.meta.url))

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
        },
        {
          src: 'public/resume.pdf',
          dest: '',
        }
      ]
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')  
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
