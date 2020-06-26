import { store } from '~/store'

export const apiNetworkSv = {
  store,
  data() {
    return {}
  },
  methods: {
    /**
     * Validate email code
     * @param {string} codeString - Validation email introduced code.
     * @returns {Promise<void>}
     */
    async validationCode(codeString) {
      try {
        // eslint-disable-next-line no-undef
        await this.$axios.post('/users/email-validation/validate', {
          email: sessionStorage.registerEmail,
          validation_code: codeString
        })
      } catch (error) {
        this.handleError(error, 'APINetworkUser@validationCode - Error')
        throw error
      }
    },

    /**
     * Validation phone code
     * @param verifyServiceId
     * @param codeString
     * @param registerPrefix
     * @param registerPhone
     * @returns {Promise<void>}
     */
    async validationPhoneCode(
      verifyServiceId,
      codeString,
      registerPrefix,
      registerPhone
    ) {
      try {
        await this.$axios.post(
          '/twilio/services/verify/check-verification-token',
          {
            verify_service_id: verifyServiceId,
            code: codeString,
            to: registerPrefix + registerPhone
          }
        )
      } catch (error) {
        this.handleError(error, 'APINetworkUser@validationPhoneCode - Error')
        throw error
      }
    },
    /**
     * Sending email verification
     * @param data
     * @returns {Promise<void>}
     */
    async sendValidationCode(data) {
      try {
        await this.$axios
          .post('/users/email-validation/send', {
            data
          })
          .then((response) => response.data)
      } catch (error) {
        this.handleError(error, 'APINetworkUser@sendValidationCode - Error')
        throw error
      }
    },
    /**
     * Sending phone code verification
     * @param data
     * @returns {Promise<void>}
     */
    async sendMobileValidationCode(data) {
      try {
        await this.$axios
          .post('/twilio/services/verify/send-sms-verification', data)
          .then((response) => response.data)
      } catch (error) {
        this.handleError(
          error,
          'APINetworkUser@sendMobileValidationCode - Error'
        )
        throw error
      }
    },
    /**
     * @param nick
     * @returns {Promise<void>}
     */
    checkUserApi(nick) {
      try {
        this.$store.dispatch('checkUserApi', nick)
      } catch (error) {
        console.log(error)

        throw error
      }
    },
    /**
     *
     * @param email
     * @returns {Promise<void>}
     */
    async checkEmailApi(email) {
      try {
        await this.$axios
          .get('/users/check-email/' + email)
          .then((response) => response.data)
      } catch (error) {
        this.handleError(error, 'APINetworkUser@checkUserApi - Error')
        throw error
      }
    },
    /**
     *
     * @param phone
     * @returns {Promise<void>}
     */
    async checkPhoneApi(phone) {
      try {
        await this.$axios
          .get('/users/check-mobile/' + phone)
          .then((response) => response.data)
      } catch (error) {
        this.handleError(error, 'APINetworkUser@checkUserApi - Error')
        throw error
      }
    },
    /**
     * Sign in backend and firebase
     * @param nick
     * @param email
     * @param prefix
     * @param phone
     * @param ukresident
     */
    async signInApi(nick, email, prefix, phone, ukresident) {
      const data = {
        'user[nick]': nick,
        'user[email]': email,
        'user[mobile_prefix]': prefix,
        'user[mobile_number]': phone,
        'user[ukresident]': ukresident
      }

      try {
        await this.$axios
          .post('users/create', data)
          .then((response) => response.data)
          .error()
      } catch (error) {
        this.handleError(error, 'APINetworkUser@signIn - Error')
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
