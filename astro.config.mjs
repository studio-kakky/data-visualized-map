import { defineConfig } from "astro/config";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    build: {
      rollupOptions: {
        external: ["mapbox-gl", "mapbox-gl/dist/mapbox-gl.css"],
      },
    },
  },
});
