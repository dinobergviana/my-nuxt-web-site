import { defineNuxtConfig } from "nuxt/config";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import Components from "unplugin-vue-components/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-08-07",
  devtools: { enabled: process.env.NODE_ENV === "production" ? false : true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n"],
  i18n: {
    locales: [
      { code: "pt", name: "Português", file: "pt.json" },
      { code: "en", name: "English", file: "en.json" },
    ],
    defaultLocale: "pt",
    langDir: "locales",
    strategy: "no_prefix",
  },
  css: ["~/assets/css/tailwind.css", "@/assets/css/main.css"],
  vite: {
    plugins: [
      Components({
        resolvers: [
          IconsResolver({
            prefix: "Icon",
            enabledCollections: ["ph"],
          }),
        ],
      }),
      Icons({
        compiler: "vue3",
        autoInstall: true,
      }),
    ],
  },
  app: {
    head: {
      title: "Dinobergue Viana",
      meta: [
        {
          name: "description",
          content: "Conheça meus projetos, habilidades e experiências.",
        },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { charset: "utf-8" },
        { name: "author", content: "Dinobergue Viana" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.svg" }],
      script: [
        {
          // roda imediatamente no início, antes da renderização
          innerHTML: `
            (function() {
              try {
                const savedTheme = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            })()
          `,
        },
      ],
    },
  },
});
