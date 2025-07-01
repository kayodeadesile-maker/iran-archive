import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sitemap from "vite-sitemap";

import * as path from "path";
import * as url from "url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sitemap({
      baseURL:
        process.env.NODE_ENV === "production"
          ? process.env.VITE_SITEMAP_PROD
          : process.env.VITE_SITEMAP_DEV,
    }) as any, // Cast to any to avoid type issues with vite-sitemap
  ],
  server: {
    host: "localhost",
    port: 3001,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
