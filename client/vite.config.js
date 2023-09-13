import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // build: {
  //   define: {
  //     'process.env.VITE_API_KEY': JSON.stringify(import.meta.env.VITE_API_KEY),
  //   },
  // }
});
