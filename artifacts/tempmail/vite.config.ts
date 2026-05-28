import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwind from '@tailwindcss/vite';
import cartographer from '@replit/vite-plugin-cartographer';
import devBanner from '@replit/vite-plugin-dev-banner';
import runtimeErrorModal from '@replit/vite-plugin-runtime-error-modal';

export default defineConfig({
  plugins: [
    react(),
    tailwind(),
    cartographer(),
    devBanner(),
    runtimeErrorModal(),
  ],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom'],
        },
      },
    },
  },
  server: {
    middlewareMode: false,
  },
});
