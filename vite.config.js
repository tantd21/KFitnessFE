import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  plugins: [tailwindcss(),
    vue()],    
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'), // Đặt alias cho thư mục src
    },
  },
}); 