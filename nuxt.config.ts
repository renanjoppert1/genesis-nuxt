// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  ssr: false,

  modules: [
    'nuxt-quasar-ui',
    '@nuxtjs/google-fonts',
    '@pinia/nuxt'
    // '@nuxtjs/tailwindcss'
  ],

  imports: {
    autoImport: true
  },

  components: [
    '~/components',
  ],

  app: {
    head: {
      title: 'Escola Genesis',
      htmlAttrs: {
        lang: 'pt-BR'
      },
      bodyAttrs: {
        class: ''
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },

  css: ['~/assets/css/main.css'],

  quasar: {

    plugins: [
      'Notify'
    ],

    config: {
      dark: true,
      brand: {
        primary: '#f1c400',
        secondary: '#f7dc43',
        accent: '#7b26a6',

        dark: '#1d1d1d',

        positive: '#21BA45',
        negative: '#C10015',
        info: '#31CCEC',
        warning: '#F2C037'
      }
    }
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  googleFonts: {
    families: {
      Poppins: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    }
  },

  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.API_URL,
      API_URI: process.env.API_URI
    }
  }
})
