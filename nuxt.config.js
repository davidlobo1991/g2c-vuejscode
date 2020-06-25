import colors from 'vuetify/es5/util/colors'
// eslint-disable-next-line nuxt/no-cjs-in-config
const webpack = require('webpack')

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: 'NetworkSV',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, user-scalable=no'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'NetworkSV'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~/assets/scss/app.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/pwa'
    /*
    [
      '@nuxtjs/firebase',
      {
        config: {
          // apiKey: 'AIzaSyD_hg9JgEOeJfoDbgk-58DmJpOiaiNDj1U',
          // authDomain: 'quickstart-721ec.firebaseapp.com',
          // databaseURL: 'https://quickstart-721ec.firebaseio.com',
          // projectId: 'quickstart-721ec',
          // storageBucket: 'quickstart-721ec.appspot.com',
          // messagingSenderId: '1000499655102',
          // appId: '1:1000499655102:web:4719b60a1fd9d4d0e289ef'
        },
        services: {
          // auth: true // Just as example. Can be any other service.
        }
      }
    ]
    */
  ],
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/auth/login',
            method: 'post',
            propertyName: 'data.token'
          },
          logout: {
            url: '/auth/logout',
            method: 'post'
          },
          user: {
            url: '/auth/me',
            method: 'get',
            propertyName: 'data'
          }
        }
      }
    },
    redirect: {
      login: '/',
      logout: '/',
      home: '/dashboard'
      // callback: '/'
    }
  },

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    common: 'x-authorization: BGFs9tEvskC61SdpIYZU8UG',
    baseURL: 'https://networksv-backend.herokuapp.com/api/'
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /**
     * add external plugins
     */
    vendor: [],
    plugins: [new webpack.ProvidePlugin({})],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
