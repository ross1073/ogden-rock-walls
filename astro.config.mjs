import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ogdenrockwalls.com',
  trailingSlash: 'always',
  integrations: [tailwind(), sitemap({
    lastmod: new Date(),
    filter: (page) => !page.includes('/thank-you') && !page.includes('/404'),
  })],
});
