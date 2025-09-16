import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import electron from 'vite-plugin-electron'
import path from 'path'
import pkg from './package.json'
const manualChunksConfig = {
  output: {
    manualChunks(id: string) {
      if (id.includes('node_modules')) return 'vendor'
    },
  },
}
const commonjsTarget = 'node18'
export default defineConfig({
  build: {
    target: 'esnext',
    rollupOptions: {
      ...manualChunksConfig,
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  plugins: [
    react(),
    tailwindcss(),
    electron([
      {
        entry: 'electron/main.ts',
        // onstart(args) {
        //   // dont restart electron when main.ts changes
        //   args.startup()
        // },
        vite: {
          build: {
            target: commonjsTarget,
            sourcemap: true,
            lib: {
              entry: 'electron/main.ts',
              formats: ['es'],
              fileName: 'main',
            },
            rollupOptions: {
              external: Object.keys(pkg.dependencies),
              ...manualChunksConfig,
            },
          },
          resolve: {
            alias: {
              '@': path.resolve(__dirname, '.'),
            },
          },
        },
      },
      {
        entry: 'electron/preload.ts',
        // onstart(args) {
        //   args.startup()
        // },
        vite: {
          build: {
            target: commonjsTarget,
            sourcemap: true,
            lib: {
              entry: 'electron/preload.ts',
              formats: ['cjs'],
              fileName: 'preload',
            },
            rollupOptions: {
              external: Object.keys(pkg.dependencies),
              ...manualChunksConfig,
            },
          },
          resolve: {
            alias: {
              '@': path.resolve(__dirname, '.'),
            },
          },
        },
      },
    ]),
  ],
})
