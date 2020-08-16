import { functions } from '~/mixins/functions'
import { cookies } from '~/mixins/cookies'

export const apiG2c = {
  mixins: [cookies, functions],
  data() {
    return {
      g2c_words: '',
      g2c_application: 'networksv.com',
      g2c_nick: '',
      g2c_tokenid: '',
      g2c_tokens1: '',
      g2c_tokenc1: ''
    }
  },
  methods: {
    /**
     * Must be used to generate a random valid collection of 12 words
     * @return {string} Returns a string containing 12 words.
     */
    getRandomWords() {
      let randomWords = null
      try {
        // eslint-disable-next-line no-undef
        randomWords = g2c_getRandomWords()
        return randomWords
      } catch (error) {
        this.handleErrors(error)
      }
    },
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
            this.handleErrors(error)
            throw error
          })
      } catch (error) {
        this.handleErrors(error)
        throw error
      }
    },

    /**
     * User Login
     * @param userwords
     * @param {string} application - Application where the user resides. An user MUST be associated to an application.
     * @param {any} nick - Alias that will be used by the user.
     * @return {object} Schema:
     * {
     *   tokenid: The user identificator. Will be stored as a encrypted cookie on the browser.
     *   tokens1: Token required for API operations. Stored as cookie.
     *   tokenc1: Token required for API operations. Stored as cookie.
     * }
     */
    loginUser(userwords, application, nick) {
      // eslint-disable-next-line no-unreachable
      try {
        return new Promise((resolve, reject) => {
          // eslint-disable-next-line no-undef
          g2cclient_loginUser({ userwords, application, nick }, (response) => {
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
            this.handleErrors(error)
            this.errorValidation = 'Login Fail'
            this.loading = false
            throw error
          })
        // eslint-disable-next-line no-unreachable
      } catch (error) {
        this.handleErrors(error)
        throw error
      }
    },
    /**
     * Logout User
     * @param {string} tokenid
     * @param {string} tokens1
     * @param {string} application - Retrieved user's Application. (Must be the same than the caller).
     * @param {string} nick - Retrieved user's alias.
     * @return {object} Schema:
     * {
     *   tokenid: The user identificator. Will be stored as a encrypted cookie on the browser.
     *   tokens1: Token required for API operations. Stored as cookie.
     *   tokenc1: Token required for API operations. Stored as cookie.
     * }
     */

    logoutUser(tokenid, tokens1, application, nick) {
      try {
        return new Promise((resolve, reject) => {
          // eslint-disable-next-line no-undef
          g2cclient_logoutUser(
            { tokenid, tokens1, application, nick },
            (response) => {
              console.log(response)
              if (response === undefined) {
                reject(Error('Undefined response'))
              }
              if (response.hasOwnProperty('error')) {
                reject(new Error(response.error))
              } else {
                resolve(response.data)
              }
            }
          )
        })
          .then((response) => response)
          .catch((error) => {
            this.handleErrors(error)
            throw error
          })
      } catch (error) {
        this.handleErrors(error)
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
            this.handleErrors(error)
            throw error
          })
      } catch (error) {
        this.handleErrors(error)
        throw error
      }
    },

    getUserBalance() {
      try {
        return new Promise((resolve, reject) => {
          const tokenid = this.$auth.$storage.getCookie('tokenid')
          const tokens1 = this.$auth.$storage.getCookie('tokens1')
          const tokenc1 = this.$auth.$storage.getCookie('tokenc1')
          const application = this.$auth.user.data.nick
          const nick = this.g2c_nick

          // eslint-disable-next-line no-undef
          g2cclient_getUserBalance(
            {
              tokenid,
              tokens1,
              tokenc1,
              application,
              nick
            },
            (response) => {
              if (response === undefined) {
                reject(Error('Undefined response'))
              }
              if (response.hasOwnProperty('error')) {
                reject(new Error(response.error))
              } else {
                resolve(response.data)
              }
            }
          )
        })
          .then((response) => {
            return {
              status_id: response.status
            }
          })
          .catch((error) => {
            this.handleErrors(error)
            throw error
          })
      } catch (error) {
        this.handleErrors(error)
        throw error
      }
    }
  }
}
