import colors from 'vuetify/es5/util/colors'
// eslint-disable-next-line nuxt/no-cjs-in-config
const webpack = require('webpack')
require('dotenv').config()

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
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        src: '/js/bsv/1.5.0/bsv.min.js',
        defer: true
      },
      {
        src: '/js/bsv/1.5.0/bsv-message.min.js',
        defer: true
      },
      {
        src: '/js/bsv/1.5.0/bsv-mnemonic.min.js',
        defer: true
      },
      {
        src: '/js/minercraft/0.0.8/minercraft.min.js',
        defer: true
      },
      {
        src: 'https://gate2chain.ddns.net:2020/libs/g2clib.min.js',
        defer: true
      }
    ]
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
  plugins: [
    '~/plugins/vuelidate',
    '~/plugins/api-g2c',
    '~/plugins/api-backend-network-sv'
  ],
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
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    '@nuxtjs/robots',
    [
      'nuxt-i18n',
      {
        // @TODO: Temp comment, only english
        // detectBrowserLanguage: {
        //   useCookie: true,
        //   cookieKey: 'i18n_redirected'
        // },
        locales: [
          {
            code: 'en',
            name: 'ENG',
            iso: 'en-GB',
            file: 'en-GB.js'
          },
          {
            code: 'es',
            name: 'ESP',
            iso: 'es-ES',
            file: 'es-ES.js'
          }
        ],
        parsePages: false,
        pages: {
          index: {
            en: '/',
            es: '/'
          },
          'create-account': {
            en: '/create-account',
            es: '/crear-cuenta'
          },
          home: {
            en: '/home',
            es: '/home'
          },
          'account/profile': {
            en: '/account/profile',
            es: '/cuenta/perfil'
          }
        },
        defaultLocale: 'en',
        lazy: true,
        seo: true,
        vuex: false,
        langDir: 'lang/'
      }
    ]
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
      user: {
        _scheme: 'local',
        endpoints: {
          login: {
            url: '/auth/login',
            method: 'post',
            propertyName: 'data.token'
            // redirect_uri: '/home'
          },
          logout: {
            url: '/auth/logout',
            method: 'post'
          },
          user: {
            url: '/auth/me',
            method: 'get',
            propertyName: false
          }
        }
      },
      g2c_user: {
        _scheme: 'local',
        endpoints: {
          login: {
            url: '/auth/login',
            method: 'post',
            propertyName: 'data.token'
            // redirect_url: '/test'
          },
          logout: {
            url: '/auth/logout',
            method: 'post'
          },
          user: {
            url: '/auth/me',
            method: 'get',
            propertyName: false
          }
        }
      }
    },
    redirect: {
      login: '/',
      logout: '/',
      home: '/home'
      // 'account/profile': ''
      // callback: '/'
    },
    cookie: {
      options: {
        expires: 365
      }
    }
  },
  // router: {
  //   middleware: ['auth']
  // },

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    headers: {
      common: { 'x-authorization': 'BGFs9tEvskC61SdpIYZU8UG' }
    },
    baseURL:
      process.env.API_BASE_URL || 'https://networksv-backend.herokuapp.com/api/'
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
    extend(config, ctx) {},
    filenames: {
      chunk: ({ isDev }) => (isDev ? '[name].js' : '[id].[contenthash].js')
    }
  },
  /**
   * Environment variables
   */
  env: {
    baseURL: process.env.BASE_URL || 'https://networksv-frontend.herokuapp.com',
    apiURLBase:
      process.env.API_URL_BASE || 'https://networksv-backend.herokuapp.com',
    apiURL:
      process.env.API_URL || 'https://networksv-backend.herokuapp.com/api/',
    baseFilesURL:
      process.env.BASE_FILES_URL || 'https://networksv-backend.rwdesarrollos'
  },
  robots: {
    /* module options */
    UserAgent: '*',
    Disallow: process.env.NODE_ENV !== 'production' ? '/' : ''
  }
}
