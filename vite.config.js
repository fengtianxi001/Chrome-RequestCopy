import { defineConfig, splitVendorChunkPlugin } from "vite";
import vue from "@vitejs/plugin-vue";
import crx from "vite-plugin-crx-mv3";
import Components from "unplugin-vue-components/vite";
import { ArcoResolver } from "unplugin-vue-components/resolvers";

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      vue(),
      crx({
        manifest: "./src/manifest.json",
      }),
      Components({
        resolvers: [ArcoResolver()],
      }),
      splitVendorChunkPlugin(),
    ],
    build: {
      emptyOutDir: mode == "production",
      rollupOptions: {
        input: ["panel.html"],
      },
    },
  };
});
