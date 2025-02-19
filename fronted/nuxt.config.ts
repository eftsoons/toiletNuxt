// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  app: {
    head: {
      meta: [
        {
          name: "viewport",
          content:
            "minimum-scale=1.0, width=device-width, maximum-scale=1, initial-scale=1, user-scalable=no",
        },
      ],
      /*link: [
        { rel: "preload", as: "image", href: "_nuxt/public/img/logo.png" },
      ],*/
      title: "Толчок вперед!",
    },
  },

  css: ["./assets/style.css"],
});
