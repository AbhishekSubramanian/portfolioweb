import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // Only set base path for production builds (GitHub Pages)
  // For local dev, base is '/' so images load correctly
  base: command === 'build' ? '/portfolioweb/' : '/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
}));
