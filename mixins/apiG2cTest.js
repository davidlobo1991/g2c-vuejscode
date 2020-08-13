import { apiG2c } from '~/mixins/apiG2c'

export const apiG2cTest = {
  mixins: [apiG2c],
  methods: {
    /**
     * Gerante Random Nick
     * @param {string} base
     * @return {string} Return random nick string
     */
    genereteRandomNick(base = '') {
      return (
        base +
        Math.random()
          .toString(36)
          .substring(9)
      )
    },

    /**
     * Test Create User
     */
    async testCreateUser() {
      const words = this.getRandomWords()
      const application = this.g2c_application
      const nick = this.genereteRandomNick('testuser')

      // @TODO: Delete after testing
      // eslint-disable-next-line no-console
      console.table({
        words,
        application,
        nick
      })

      try {
        const response = await this.createUser(words, application, nick)
        // eslint-disable-next-line no-console
        console.log('Response Login User:')
        // eslint-disable-next-line no-console
        console.log(response)
        return response
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('testCreateUser - Error')
        // eslint-disable-next-line no-console
        console.error(error)
      }
    },

    /**
     * Test User Login
     */
    async testLoginUser() {
      // const words = this.g2c_words
      const application = this.g2c_application
      const nick = this.g2c_nick

      try {
        const response = await this.loginUser(words, application, nick)
        // eslint-disable-next-line no-console
        console.log('Response Login User:')
        // eslint-disable-next-line no-console
        console.log(response)
        return response
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('testCreateUser - Error')
        // eslint-disable-next-line no-console
        console.error(error)
      }
    },

    /**
     * Test Logout User
     */
    async testLogoutUser() {
      const tokenid = this.g2c_tokenid
      const tokens1 = this.g2c_tokens1
      const application = this.g2c_application
      const nick = this.g2c_nick

      try {
        const response = await this.logoutUser(
          tokenid,
          tokens1,
          application,
          nick
        )
        // eslint-disable-next-line no-console
        console.log('Response Logout User:')
        // eslint-disable-next-line no-console
        console.log(response)
        return response
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('testGetUser - Error')
        // eslint-disable-next-line no-console
        console.error(error)
      }
    },

    /**
     * Test Get User
     */
    async testGetUser() {
      const tokenid = this.g2c_tokenid
      const tokens1 = this.g2c_tokens1
      const application = this.g2c_application
      const nick = this.g2c_nick

      try {
        const response = await this.getUser(tokenid, tokens1, application, nick)
        // eslint-disable-next-line no-console
        console.log('Response Get User:')
        // eslint-disable-next-line no-console
        console.log(response)
        return response
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('testGetUser - Error')
        // eslint-disable-next-line no-console
        console.error(error)
      }
    }
  }
}
