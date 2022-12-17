import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
// import PWA
import { VitePWA } from "vite-plugin-pwa";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      // settings manifest
      manifest: {
        name: "Music Vue App",
        short_name: "MusicV",
        theme_color: "#ff5e3a",
        icons: [
          {
            src: "assets/img/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      },
      // setting workbox
      workbox: {
        globPatterns: ["**/*.{js,css,html,png,jpg,}"],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  // build size
  build: {
    chunkSizeWarningLimit: 1600,
  },
});
