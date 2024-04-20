import Icons from "unplugin-icons/vite";
import react from "@vitejs/plugin-react-swc";
import unocss from "unocss/vite";
import { defineConfig } from "vite";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [unocss(), Icons({ compiler: "jsx", jsx: "react" }), react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@shadcn": resolve(__dirname, "./src/components/ui")
    }
  }
});
