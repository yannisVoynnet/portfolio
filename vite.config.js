import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio/', // Indique que le projet est hébergé dans un sous-répertoire
  plugins: [react()],
});
