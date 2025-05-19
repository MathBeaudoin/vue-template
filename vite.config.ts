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
            "@logging": "/src/logging",
            "@components": "/src/components",
            "@pages": "/src/pages",
            "@router": "/src/router",
            "@scripts": "/src/scripts",
            "@stores": "/src/stores",
        },
    },
});
