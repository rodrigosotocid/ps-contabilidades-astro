import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://pscontabilidades.cl',
  integrations: [tailwind()]
});