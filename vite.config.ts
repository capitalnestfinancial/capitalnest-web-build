import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

export default defineConfig({
  vite: {
    base: isGitHubPages ? "/capitalnest-web-build/" : "/",
  },

  tanstackStart: {
    server: {
      entry: "server",
    },
  },
});
