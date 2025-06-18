import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      // Explicitly configure for default export, matching '?react' import style
      svgrOptions: {
        exportType: 'default', // SVGR's default, but being explicit
        // svgo: true, // Optional: enable SVGO optimization if desired
        // ref: true,  // Optional: allow refs on SVG components if needed
      },
      // Ensure it processes files with '?react' suffix (this is vite-plugin-svgr's default behavior)
      include: ['**/*.svg?react'], 
    }),
  ],
  server: {
    port: 9000,
    host: true,
  },
});
