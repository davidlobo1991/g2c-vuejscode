export const login = {
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

                this.$router.push('/home')
              })
              .catch((error) => {
                this.handleError(error, 'G2CUser@loginUser - Error')
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
            })
            .catch((error) => {
              this.handleError(error, 'G2CUser@loginUser - Error')
              throw error
            })
        }
      } catch (error) {
        this.handleError(error, 'G2CUser@loginUser - Error')
        throw error
      }
    },
    /**
     * Error Handler
     * @param {Error} error
     * @param {string} title - Optional Title
     */
    handleError(error, title = '') {
      if (title.length > 0) {
        // eslint-disable-next-line no-console
        console.error(title)
      }

      // eslint-disable-next-line no-console
      console.error(error)
      this.errorValidation = 'Login Fail'
      this.loading = false
    }
  }
}
