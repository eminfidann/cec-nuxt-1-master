export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'cec-nuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [{
      charset: 'utf-8'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    },
    {
      hid: 'description',
      name: 'description',
      content: ''
    },
    {
      name: 'format-detection',
      content: 'telephone=no'
    }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/colors.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],


  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/fontawesome',
    '@nuxtjs/auth-next'
  ],

  auth: {
    // Options
  },

  env: {
    //eventURL: "https://ktucectest.herokuapp.com/"
    //eventURL: "https://kose-yazilari-87a1e-default-rtdb.firebaseio.com/",
    // eventURL: "https://ktucecapievettest.herokuapp.com/"
    eventURL: "https://ktucectest.herokuapp.com/api/events/",
    ACCOUNT_URL: "https://ktucectest.herokuapp.com/api/accounts/",
    baseURL: "https://ktucectest.herokuapp.com/api/"
  },

  /***********/
  /*
  router: {
    middleware: ['auth']
  },
  */
  /**********/

  compilerOptions: {
    "types": [
      "@nuxtjs/auth-next",
    ]
  },

  fontawesome: {
    component: 'fa',
    icons: {
      solid: true,
      brands: true,
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
