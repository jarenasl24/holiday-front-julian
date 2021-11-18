export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Buzón de Navidad',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Crea tu lista de regalos con Walmart Puerto Rico.' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'og:image', property: 'og:image', content: '/ogImage.png' },
      { property: 'og:title', content: 'Buzón de Navidad' },
      { property: 'og:description', content: 'Crea tu lista de regalos con Walmart Puerto Rico.' },
      { property: 'og:url', content: 'https://buzondenavidad.com/' },
      { name: 'facebook-domain-verification', content: 'shx1pw5qxn39ywicy5araksdmadlli' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ],
    script: [
      { src: '/js/fb-pixel.js' },
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=G-0BJ9S2BRL3',
        async: true
      },
      { src: '/js/gtm.js' },
      { src: '/js/analitycs.js' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main', '@fortawesome/fontawesome-free/css/all.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/infiniteloading', ssr: false },
    '~/plugins/gtm',
    { src: '~/plugins/eko.js', mode: 'client', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/strapi',
    '@nuxtjs/google-analytics',
    '@nuxtjs/gtm',
    'nuxt-facebook-pixel-module',
    '@nuxtjs/auth-next',
    'cookie-universal-nuxt'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: { url: process.env.STRAPI_URL || 'http://localhost:1337' },

  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID, // Use as fallback if no runtime config is provided
    debug: {
      enabled: false,
      sendHitTask: false
    }
  },

  gtm: {
    id: process.env.GOOGLE_TAG_MANAGER_ID,
    debug: false,
    sendHitTask: false
  },

  facebook: {
    /* module options */
    track: 'PageView',
    pixelId: process.env.FACEBOOK_PIXEL_ID,
    autoPageView: true,
    disabled: false
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },
  strapi: {
    entities: ['products', 'product-categories', 'age-groups'],
    url: process.env.STRAPI_URL || 'http://localhost:1337'
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    optionsPath: './vuetify.options.js'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
