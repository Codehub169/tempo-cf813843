import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 9000, // Default port for development server
    host: true, // Listen on all network interfaces (e.g., 0.0.0.0)
  },
});
