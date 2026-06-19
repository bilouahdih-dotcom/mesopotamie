import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// base "/mesopotamie/" pour que le site fonctionne sur GitHub Pages
export default defineConfig({
    base: "/mesopotamie/",
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    server: {
        port: 5173,
        strictPort: true,
    },
});
