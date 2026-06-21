import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/",
  plugins: [react()],
  server: {
    allowedHosts: [".loca.lt"],
    host: "0.0.0.0"
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        simulatorZugang: path.resolve(__dirname, "simulator-zugang.html"),
        kontakt: path.resolve(__dirname, "kontakt.html"),
        impressum: path.resolve(__dirname, "impressum.html"),
        datenschutz: path.resolve(__dirname, "datenschutz.html"),
        widerruf: path.resolve(__dirname, "widerruf.html"),
        agb: path.resolve(__dirname, "agb.html")
      }
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
});
