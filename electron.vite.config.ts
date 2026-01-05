import { defineConfig } from 'electron-vite'
import path from 'path'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  main: {
    build: {
      outDir: 'dist/electron/main',
      sourcemap: true,
      rollupOptions: {
        input: {
          index: path.resolve(__dirname, './electron/main.ts'),
        },
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
  },
  preload: {
    build: {
      outDir: 'dist/electron/preload',
      sourcemap: true,
      rollupOptions: {
        input: {
          index: path.resolve(__dirname, './electron/preload/index.ts'),
        },
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
  },
  renderer: {
    root: './app',
    build: {
      target: 'esnext',
      outDir: 'dist/app',
      rollupOptions: {
        input: {
          main: './app/index.html',
        },
        output: {
          manualChunks(id: string) {
            if (id.includes('node_modules')) return 'vendor'
          },
        },
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    plugins: [react(), tailwindcss()],
    server: {
      port: 1412,
    },
  },
})
