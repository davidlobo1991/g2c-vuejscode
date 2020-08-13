import { functions } from '~/mixins/functions'
import { cookies } from '~/mixins/cookies'

export const login = {
  mixins: [functions, cookies],
  data() {
    return {}
  },
  methods: {
    /**
     * Method to login
     * @param words
     * @param registerNick
     * @param registerPassword
     * @param application
     */
    async handleLogin(words, registerNick, registerPassword, application) {
      try {
        if (words) {
          // eslint-disable-next-line no-unused-vars
          let g2cLoginResponse = null

          g2cLoginResponse = await this.loginUser(
            words,
            application,
            registerNick
          )

          if (!g2cLoginResponse.error) {
            this.$auth
              .loginWith('g2c_user', {
                data: {
                  nick: registerNick,
                  password: registerPassword
                }
              })
              .then(() => {
                this.$auth.$storage.setCookie(
                  'tokenid',
                  g2cLoginResponse.tokenid
                )
                this.$auth.$storage.setCookie(
                  'tokens1',
                  g2cLoginResponse.tokens1
                )
                this.$auth.$storage.setCookie(
                  'tokenc1',
                  g2cLoginResponse.tokenc1
                )
                // this.setCookie('tokenid', g2cLoginResponse.tokenid, 365)
                // this.setCookie('tokens1', g2cLoginResponse.tokens1, 365)
                // this.setCookie('tokenc1', g2cLoginResponse.tokenc1, 365)
                this.$router.push('/home')
                this.$mixpanel.identify(registerNick)
                this.$mixpanel.track('Log In to NetworkSV')
              })
              .catch((error) => {
                this.handleErrors(error, 'G2CUser@loginUser - Error')
                this.errorValidation = 'Login Fail'
                this.loading = false
                throw error
              })
          }
        } else {
          this.$auth
            .loginWith('user', {
              data: {
                nick: registerNick,
                password: registerPassword
              }
            })
            .then(() => {
              this.$router.push(this.localePath('/user-profile'))
              this.$mixpanel.identify(registerNick)
              this.$mixpanel.track('Log In Without Words')
            })
            .catch((error) => {
              this.handleErrors(error, 'G2CUser@loginUser - Error')
              this.errorValidation = 'Login Fail'
              this.loading = false
              throw error
            })
        }
      } catch (error) {
        this.handleErrors(error, 'G2CUser@loginUser - Error')
      }
    },

    async handleLogout() {
      this.$auth.$storage.removeCookie('tokenid')
      this.$auth.$storage.removeCookie('tokens1')
      this.$auth.$storage.removeCookie('tokenc1')

      await this.$auth.logout()
    }
  }
}
