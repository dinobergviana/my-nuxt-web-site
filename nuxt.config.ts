import { defineNuxtConfig } from "nuxt/config";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import Components from "unplugin-vue-components/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-08-07",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  css: ["~/assets/css/tailwind.css"],

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
});
