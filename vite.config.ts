import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Content-Security-Policy : restreint les sources autorisées (anti-XSS / injection).
// Injectée uniquement au build (le serveur de dev Vite a besoin de règles plus souples).
const CSP = [
  "default-src 'self'",
  "script-src 'self'",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com data:",
  "img-src 'self' data: https://images.unsplash.com",
  "frame-src https://www.google.com",
  "connect-src 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

function cspPlugin(): Plugin {
  return {
    name: "inject-csp",
    apply: "build",
    // 'post' : s'exécute après l'injection des balises script/link par Vite,
    // pour que la CSP placée en tête du <head> les gouverne toutes.
    enforce: "post",
    transformIndexHtml(html) {
      const tag = `<meta http-equiv="Content-Security-Policy" content="${CSP}" />`;
      const charset = '<meta charset="UTF-8" />';
      if (html.includes(charset)) {
        return html.replace(charset, `${charset}\n    ${tag}`);
      }
      return html.replace("<head>", `<head>\n    ${tag}`);
    },
  };
}

// base "/mesopotamie/" pour que le site fonctionne sur GitHub Pages
export default defineConfig({
  base: "/mesopotamie/",
  plugins: [react(), cspPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    // Port assigné par l'hôte (PORT) sinon 5173 par défaut
    port: Number(process.env.PORT) || 5173,
  },
});
