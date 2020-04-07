<template>
  <v-app>
    <!-- <v-content> -->
    <nuxt />
    <!-- </v-content> -->
  </v-app>
</template>

<script>
import { firebase } from '~/plugins/firebase'

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
    this.createPost()
  },
  methods: {
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
