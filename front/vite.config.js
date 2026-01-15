import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "../../back/src/public/js/react", // dossier React propre
    emptyOutDir: false,                        // ne supprime pas tes fichiers back
    rollupOptions: {
      output: {
        entryFileNames: "cart.js",            // nom du bundle final
      },
    },
  },
});
