export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { href: 'https://fonts.googleapis.com/css?family=Roboto+Condensed|Roboto:500&display=swap', rel: 'stylesheet' },
      { href: 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', rel: 'stylesheet', integrity: 'sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN', crossorigin: 'anonymous' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/css/bootstrap.css', '@/assets/css/style.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~plugins/filters.js',
    { src: '~/plugins/vue-matomo.js', ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'nuxt-facebook-pixel-module',
    'nuxt-seo',
    'nuxt-svg-loader'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: 'https://tresk.si/d/jsonapi'
  },
  facebook: {
    track: 'PageView',
    pixelId: '199752654600647',
    disabled: false
  },
  seo: {
    name: 'Tresk #11',
    hostname: 'tresk.si',
    templateTitle: '%title% | %name%',
    description: 'Obračun glasbe in založništva',
    lang: 'si',
    image: 'https://tresk.si/img/tresk_social.jpg',
    'og-title': 'Tresk #11',
    'og-image': 'https://tresk.si/img/tresk_social.jpg'
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend (config, ctx) {},
    transpile: ['jsonapi-vuex']
  },
  pageTransition: {
    name: 'fade',
    mode: 'out-in'
  },
  layoutTransition: {
    name: 'fade',
    mode: 'out-in'
  },
  router: {
    extendRoutes (routes, resolve) {
      routes.push({
        path: '/program',
        component: 'pages/program/urnik.vue',
        name: 'program_index'
      })
    }
  }
}
