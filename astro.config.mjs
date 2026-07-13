import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://teddytravels.net",
  integrations: [sitemap()],
});