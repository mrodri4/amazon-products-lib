import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '#components': path.join(__dirname, './src/components'),
      '#enums': path.join(__dirname, './src/enums'),
      '#types': path.join(__dirname, './src/types'),
      '#utils': path.join(__dirname, './src/utils')
    },
    preserveSymlinks: true
  },
  define: {
    'process.env': {}
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.tsx'),
      name: 'AmazonProductsLib',
      fileName: 'bundle',
      formats: ['iife']
    },
    sourcemap: false,
    outDir: './amazon-products-lib'
  }
});
