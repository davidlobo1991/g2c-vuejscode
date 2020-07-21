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
      if (words) {
        // eslint-disable-next-line no-unused-vars
        let g2cLoginResponse = null

        g2cLoginResponse = await this.loginUser(
          words,
          application,
          registerNick
        )

        if (!g2cLoginResponse.error) {
          await this.$auth
            .loginWith('g2c_user', {
              data: {
                nick: registerNick,
                password: registerPassword
              }
            })
            .then(() => {
              this.$router.push('/home')
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
      }
    }
  }
}
