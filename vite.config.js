import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { 
      entry: "server",
      target: "vercel" // <--- TAMBAHKAN BARIS INI
    },
  },
  define: {
    global: "globalThis",
  },
});