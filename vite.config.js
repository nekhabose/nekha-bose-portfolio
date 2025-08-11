import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
   base: '/nekha-bose-portfolio/',
  plugins: [react()],
});