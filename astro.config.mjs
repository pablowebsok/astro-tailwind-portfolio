// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

const siteUrl = "https://pablomgdev.xyz";

export default defineConfig({
  integrations: [
    tailwind(),
  ],
  site: siteUrl,
  devToolbar: {
    enabled: false,
  },

});
