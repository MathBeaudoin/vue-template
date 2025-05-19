import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            "@": "/src",
            "@assets": "/src/assets",
            "@i18n": "/src/i18n",
            "@components": "/src/components",
            "@pages": "/src/pages",
            "@router": "/src/router",
            "@stores": "/src/stores",
        },
    },
});
