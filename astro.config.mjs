import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import UnoCSS from "@unocss/astro";

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  site: "https://vshubham.com/",
  integrations: [
    sitemap(),
    robotsTxt({
      sitemap: [
        "https://vshubham.com/sitemap-index.xml",
        "https://vshubham.com/sitemap-0.xml",
      ],
    }),
    solidJs(),
    UnoCSS({ injectReset: true }),
  ],
  output: 'static',
});
