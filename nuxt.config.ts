// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  colorMode: {
    preference: 'light'
  },
  future: {
    compatibilityVersion: 4,
  },
  devtools: { enabled: false },
  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxt/ui',
    '@nuxt/icon',    
    '@nuxt/image',
    '@nuxtjs/google-fonts'
  ],
  typescript:{
    strict: true,
    typeCheck:true
  },
  googleFonts: {
    families: {
      'Inter': [100, 200, 300, 400, 500, 600, 700, 800, 900],
    }
  },
  image:{
    screens:{
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      'xxl': 1536,
      '2xl': 1536
    },
    // format: ['webp'],
    presets:{
      algol:{
        modifiers: {
          format: 'jpg',
          width: 50,
          height: 50
        }
      }
    }
  }
  

})
