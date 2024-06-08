import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "", // 상대경로설정
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
        sw: "./sw.ts",
      },
    },
  },
});
