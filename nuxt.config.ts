// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  css: ['~/assets/main.css'],
  devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss()]
  }
})
