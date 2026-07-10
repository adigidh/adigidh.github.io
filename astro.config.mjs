import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://adigidh.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'static',
});
