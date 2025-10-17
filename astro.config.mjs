// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
      output: 'server',
      adapter: vercel(),
     //site: process.env.MY_SITE_URL || 'http://localhost:4321',
});
// Puedes renombrarlos como:



