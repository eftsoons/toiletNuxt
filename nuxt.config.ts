import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  app: {
    head: {
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, user-scalable=no",
        },
      ],
      /*link: [
        { rel: "preload", as: "image", href: "_nuxt/public/img/logo.png" },
      ],*/
      title: "asd",
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
  css: ["./assets/style.css"],
});
