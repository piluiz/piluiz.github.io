// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://piluiz.github.io",
  integrations: [mdx()],
  markdown: {
    shikiConfig: { theme: "github-dark-dimmed" },
  },
});
