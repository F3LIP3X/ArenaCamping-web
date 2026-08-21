import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  // El sitio se publica en https://f3lip3x.github.io/ArenaCamping-web/, no en
  // la raiz del dominio: sin esta base los assets se buscarian un nivel arriba.
  base: '/ArenaCamping-web/',
  plugins: [react()],
  server: {
    open: true,
  },
  build: {
    outDir: 'build',
  },
});
