import { cookies } from '~/mixins/cookies'

export const apiG2c = {
  mixins: [cookies],
  data() {
    return {
      g2c_words: '',
      g2c_application: 'networksv.com',
      g2c_nick: '',
      g2c_tokenid: '',
      g2c_tokens1: ''
    }
  },
  methods: {
    /**
     * Create User
     * @param {any} nick - Alias that will be used by the user.
     * @param userwords
     * @return {Promise<string | null>} tokenid - The user identificator. Will be stored as a encrypted cookie on the browser.
     */
    createUser(nick, userwords) {
      try {
        const application = this.g2c_application
        return new Promise((resolve, reject) => {
          // eslint-disable-next-line no-undef
          g2cclient_createUser({ userwords, application, nick }, (response) => {
            if (response === undefined) {
              reject(Error('Undefined response'))
            }
            if (response.hasOwnProperty('error')) {
              reject(new Error(response.error))
            } else {
              resolve(response.data)
            }
          })
        })
          .then((token) => token)
          .catch((error) => {
            this.handleError(error, 'G2CUser@createUser - Error')
            throw error
          })
      } catch (error) {
        this.handleError(error, 'G2CUser@createUser - Error')
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
    }
  }
}
