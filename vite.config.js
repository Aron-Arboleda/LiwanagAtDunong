import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import viteImagemin from "vite-plugin-imagemin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 75,
      },
      pngquant: {
        quality: [0.65, 0.8],
        speed: 4,
      },
      svgo: {
        plugins: [
          { name: "removeViewBox" },
          { name: "removeEmptyAttrs", active: false },
        ],
      },
      webp: {
        quality: 75,
      },
      avif: {
        quality: 50,
      },
    }),
  ],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/components"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@images": path.resolve(__dirname, "./src/assets/images"),
    },
  },
  build: {
    cssCodeSplit: true, // Split CSS into smaller chunks
    rollupOptions: {
      output: {
        // Ensure that CSS is prioritized and injected early in the head
        manualChunks: (id) => {
          if (id.includes("node_modules")) {
            return "vendor"; // Bundle vendor CSS into a separate chunk
          }
        },
        entryFileNames: "assets/[name]-[hash].js",
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]",
      },
    },
  },
});
