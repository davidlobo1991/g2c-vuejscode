import { cookies } from '~/mixins/cookies'

export const apiG2c = {
  mixins: [cookies],
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
      g2c_words: '',
      g2c_application: 'networksv.com',
      g2c_nick: '',
      g2c_tokenid: '',
      g2c_tokens1: ''
    }
  },
  methods: {
    /**
     * Must be used to generate a random valid collection of 12 words
     * @return {string} Returns a string containing 12 words.
     */
    async getRandomWords() {
      let randomWords = null
      try {
        // eslint-disable-next-line no-undef
        randomWords = await g2c_getRandomWords()
      } catch (error) {
        this.handleError(error, 'G2CService@getRandomWords - Error')
      }

      return randomWords
    },

    /**
     * Create User
     * @param {string} words - User's private 12 words.
     * @param {string} application - Application where the user resides. An user MUST be associated to an application.
     * @param {string} nick - Alias that will be used by the user.
     * @return {Promise<string | null>} tokenid - The user identificator. Will be stored as a encrypted cookie on the browser.
     */
    createUser(words, application, nick) {
      try {
        return new Promise((resolve, reject) => {
          // eslint-disable-next-line no-undef
          g2c_createUser(words, application, nick, (response) => {
            if (response === undefined) {
              reject(Error('Undefined response'))
            }
            if (response.hasOwnProperty('error')) {
              reject(new Error(response.error))
            } else {
              resolve(response.data.tokenid)
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
     * User Login
     * @param {string} words - User's private 12 words.
     * @param {string} application - Application where the user resides. An user MUST be associated to an application.
     * @param {string} nick - Alias that will be used by the user.
     * @return {object} Schema:
     * {
     *   tokenid: The user identificator. Will be stored as a encrypted cookie on the browser.
     *   tokens1: Token required for API operations. Stored as cookie.
     *   tokenc1: Token required for API operations. Stored as cookie.
     * }
     */
    loginUser(words, application, nick) {
      try {
        return new Promise((resolve, reject) => {
          // eslint-disable-next-line no-undef
          g2c_loginUser(words, application, nick, (response) => {
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
          .then((response) => {
            return {
              tokenid: response.tokenid,
              tokens1: response.tokens1,
              tokenc1: response.tokenc1
            }
          })
          .catch((error) => {
            this.handleError(error, 'G2CUser@loginUser - Error')
            throw error
          })
      } catch (error) {
        this.handleError(error, 'G2CUser@loginUser - Error')
        throw error
      }
    },

    /**
     * Logout User
     * @param {string} tokenid
     * @param {string} tokens1
     * @param {string} application - Retrieved user's Application. (Must be the same than the caller).
     * @param {string} nick - Retrieved user's alias.
     * @return {string} Example: "Successfully logged out"
     */
    logoutUser(tokenid, tokens1, application, nick) {
      try {
        return new Promise((resolve, reject) => {
          // @TODO: First, delete cookies:
          this.deleteCookie('tokenid')
          this.deleteCookie('tokens1')
          this.deleteCookie('tokenc1')
          this.deleteCookie('application')
          this.deleteCookie('nick')

          // eslint-disable-next-line no-undef
          g2c_logoutUser(tokenid, tokens1, application, nick, (response) => {
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
          .then((response) => response)
          .catch((error) => {
            this.handleError(error, 'G2CUser@logoutUser - Error')
            throw error
          })
      } catch (error) {
        this.handleError(error, 'G2CUser@logoutUser - Error')
        throw error
      }
    },

    /**
     * Get User
     * @param {string} tokenid
     * @param {string} tokens1
     * @param {string} application - Retrieved user's Application. (Must be the same than the caller).
     * @param {string} nick - Retrieved user's alias.
     * @return {object} Schema:
     * {
     *   status_id: User status ID.,
     *   status_message: User status message.
     * }
     *
     * USER_STATUS_ENABLED = 1
     * USER_STATUS_DISABLED = 2
     * USER_STATUS_DELETED = 4
     */
    getUser(tokenid, tokens1, application, nick) {
      const USER_STATUS = {
        1: 'USER_STATUS_ENABLED',
        2: 'USER_STATUS_DISABLED',
        4: 'USER_STATUS_DELETED'
      }

      try {
        return new Promise((resolve, reject) => {
          // eslint-disable-next-line no-undef
          g2c_getUser(tokenid, tokens1, application, nick, (response) => {
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
          .then((response) => {
            return {
              // nick: response.nick,
              // application: response.application,
              status_id: response.status,
              status_message: USER_STATUS[response.status] || ''
            }
          })
          .catch((error) => {
            this.handleError(error, 'G2CUser@getUser - Error')
            throw error
          })
      } catch (error) {
        this.handleError(error, 'G2CUser@getUser - Error')
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
