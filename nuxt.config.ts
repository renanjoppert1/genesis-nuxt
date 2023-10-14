// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    'nuxt-quasar-ui'
  ],

  imports: {
    autoImport: true
  },

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

  quasar: {
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
  }
})
