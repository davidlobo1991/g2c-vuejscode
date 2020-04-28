<template>
  <v-app>
    <nuxt />
  </v-app>
</template>

<script>
import { firebase } from '~/plugins/firebase'

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
          src: 'https://gate2chain.ddns.net:5791/libs/g2clib.min.js',
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

    // @TODO Remove after testing
    console.log({
      // eslint-disable-next-line no-undef
      words: g2c_getRandomWords()
    })
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
