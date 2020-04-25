<template>
  <v-app>
    <!-- <v-content> -->
    <nuxt />
    <!-- </v-content> -->
  </v-app>
</template>

<script>
import { firebase } from '~/plugins/firebase'
// eslint-disable-next-line no-unused-vars
// const g2clib = require('@/assets/js/g2clib.min')
// import g2clib from '~/plugins/g2clib'

const prueba = require('~/assets/js/prueba')

export default {
  head() {
    return {
      script: [
        {
          src: 'js/bsv/1.5.0/bsv.min.js',
          defer: true
        },
        {
          src: 'js/bsv/1.5.0/bsv-message.min.js',
          defer: true
        },
        {
          src: 'js/bsv/1.5.0/bsv-mnemonic.min.js',
          defer: true
        },
        {
          src: 'js/extern-libs.js',
          defer: true
        },
        {
          src: 'js/g2clib.min.js',
          defer: true
        }
      ]
    }
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  mounted() {
    this.userConnected()
    this.userAttachDisconnect()

    // const randomWords = g2clib.g2c_getRandomWords()
    // console.log(randomWords)

    console.table({
      // eslint-disable-next-line no-undef
      words: g2c_getRandomWords(),
      prueba_test1: prueba.test1(),
      prueba_test2: prueba.test2()
    })

    // @TODO Remove after fix impor g2clib
    // const scripts = [
    //   'js/bsv/1.5.0/bsv.min.js',
    //   'js/bsv/1.5.0/bsv-message.min.js',
    //   'js/bsv/1.5.0/bsv-mnemonic.min.js',
    //   'js/extern-libs.js',
    //   'js/g2clib.min.js'
    // ]
    // scripts.forEach((script) => {
    //   // eslint-disable-next-line nuxt/no-globals-in-created
    //   const tag = document.createElement('script')
    //   tag.setAttribute('src', script)
    //   tag.setAttribute('type', 'application/javascript')
    //   // eslint-disable-next-line nuxt/no-globals-in-created
    //   document.head.appendChild(tag)
    // })
  },
  methods: {
    async userConnected() {
      // TODO: get user id dinamically
      const uid = 'ubc9fiKjZacO1SbmFNmYzBylGIT2' // user id
      const userData = await firebase
        .database()
        .ref('users')
        .child(uid)
        .once('value')
        .then((snap) => snap.val())
        .catch((error) => console.log(error))

      // TODO: check user exists
      userData.connected = 1
      // userData.test = 0
      // Change user data
      await firebase
        .database()
        .ref('users')
        .child(uid)
        .update(userData)
    },
    async userAttachDisconnect() {
      // TODO: get user id dinamically
      const uid = 'ubc9fiKjZacO1SbmFNmYzBylGIT2' // user id
      // TODO: check if user exists

      await firebase
        .database()
        .ref('users')
        .child(uid)
        .onDisconnect()
        .update({
          connected: 0
        })

      return true
    }
  }
}
</script>
