import { defineConfig, type PluginOption } from "vite";
import vue from "@vitejs/plugin-vue";
import { visualizer } from "rollup-plugin-visualizer";
import tailwindcss from "@tailwindcss/vite";
import { componentTagger } from "lovable-tagger";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        visualizer({
            filename: "rollup_bundle_stats.html",
            template: "flamegraph",
            open: false,
        }) as PluginOption,
        tailwindcss(),
        componentTagger(),
    ],
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
    server: {
        port: 8080,
    },
});
