import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/components"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@utils": path.resolve(__dirname, "./src/utils"),
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
