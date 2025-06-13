import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    react(),
    ViteImageOptimizer({
      jpg: {
        quality: 40
      },
      png: {
        quality: 40
      },

    })
  ],
  optimizeDeps: {
    exclude: ['lucide-react']
  },
  build: {
    outDir: 'dist',    
  },
});
