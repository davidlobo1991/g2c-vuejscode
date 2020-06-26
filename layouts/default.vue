<template>
  <v-app>
    <nuxt />
  </v-app>
</template>

<script>
// import { firebase } from '~/plugins/firebase'
// import { apiG2c } from '~/mixins/apiG2c'
// import { apiG2cTest } from '~/mixins/apiG2cTest'

export default {
  name: 'DefaultLayout',
  // mixins: [apiG2cTest],
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false
    }
  },
  async mounted() {
    // this.userConnected()
    // this.userAttachDisconnect()
    // eslint-disable-next-line no-undef
    // const words = g2c_getRandomWords()
    //
    // eslint-disable-next-line no-console
    // console.log(this.getRandomWords())
    // this.testCreateUser()
    // this.testLoginUser()
    // this.testGetUser()
    // this.testLogoutUser()
    // @TODO: Delete after testing
    // try {
    //   // Set info
    //   this.g2c_nick = 'rsanchezp19f'
    //   this.g2c_words =
    //     'life direct spin plastic update throw furnace whip tape town stem lucky'
    //
    //   // @TODO: Test login
    //   const loginResponse = await this.testLoginUser()
    //
    //   this.g2c_tokenid = loginResponse.tokenid
    //   this.g2c_tokens1 = loginResponse.tokens1
    //
    //   // @TODO: After login, wait "x" seconds and logout
    //   setTimeout(() => this.testLogoutUser(), 2000)
    // } catch (error) {
    //   // eslint-disable-next-line no-console
    //   console.error(error)
    // }
  },
  methods: {
    async registerUser() {
      // eslint-disable-next-line no-undef
      const words = g2c_getRandomWords()
      const application = 'networksv.com'
      const nick = 'test321321321'

      // eslint-disable-next-line no-undef
      g2c_createUser(words, application, nick, function(result) {
        if (result.error) {
          // eslint-disable-next-line no-console
          console.log(JSON.stringify(result.error))
        } else {
          // eslint-disable-next-line no-console
          console.log(
            'My interaction tokens are : ' + JSON.stringify(result.data)
          )
        }
      })
      await JSON.stringify('test')
    }
    /*
      async userConnected() {
        // TODO: get user id dinamically
        const uid = 'ubc9fiKjZacO1SbmFNmYzBylGIT2' // user id
        const userData = await firebase
          .database()
          .ref('users')
          .child(uid)
          .once('value')
          .then((snap) => snap.val())
          .catch((error) => {
            // eslint-disable-next-line no-console
            console.log(error)
          })

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
      */
    /*
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
       */
  }
}
</script>
