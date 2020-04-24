<template>
  <v-app>
    <!-- <v-content> -->
    <nuxt />
    <!-- </v-content> -->
  </v-app>
</template>

<script>
import { firebase } from '~/plugins/firebase'
import { g2clib } from '~/plugins/g2clib'

export default {
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
    // this.createPost()
    this.userConnected()
    this.userAttachDisconnect()
  },
  methods: {
    async userConnected() {
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
      const uid = 'ubc9fiKjZacO1SbmFNmYzBylGIT2' // user id
      // TODO: check if user exists

      // await firebase
      //   .database()
      //   .ref()
      //   .onDisconnect()
      //   .cancel()

      await firebase
        .database()
        .ref('users')
        .child(uid)
        .onDisconnect()
        .update({
          connected: 0
        })

      return true
    },
    async createPost() {
      const postData = {
        author: 'me',
        uid: 'uid1',
        body: 'body1',
        title: 'title1',
        starCount: 0
      }
      const newPostKey = firebase
        .database()
        .ref()
        .child('posts')
        .push().key
      const uid = 'ubc9fiKjZacO1SbmFNmYzBylGIT2' // user id
      const updates = {}
      updates['/posts/' + newPostKey] = postData
      updates['/user-posts/' + uid + '/' + newPostKey] = postData
      // Update database
      await true
      // await firebase
      //   .database()
      //   .ref()
      //   .update(updates)
    }
  }
}
</script>
