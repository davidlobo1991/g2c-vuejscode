export const apiNetworkSv = {
  data() {
    return {}
  },
  methods: {
    /**
     * Validate email code
     * @param {string} codeString - Validation email introduced code.
     * @returns {Promise<void>}
     */
    async validationCode(code) {
      try {
        const response = await this.$store.dispatch(
          'register/validationCode',
          code
        )

        return response.data
      } catch (error) {
        this.handleError(error, 'APINetworkUser@validationCode - Error')
        throw error
      }
    },

    /**
     * Validation phone code
     * @param verifyServiceId
     * @param code
     * @returns {Promise<void>}
     */
    async validationPhoneCode(code) {
      try {
        const response = await this.$store.dispatch(
          'register/validationPhoneCode',
          sessionStorage.verifyServiceId,
          code
        )
        return response.data
      } catch (error) {
        this.handleError(error, 'APINetworkUser@validationPhoneCode - Error')
        throw error
      }
    },
    /**
     * Sending email verification
     * @param {string} email
     * @returns {Promise<void>}
     */
    async sendValidationCode() {
      try {
        return await this.$store.dispatch('register/sendValidationCode')
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
    async sendMobileValidationCode() {
      try {
        return await this.$store.dispatch('register/sendMobileValidationCode')
      } catch (error) {
        this.handleError(
          error,
          'APINetworkUser@sendMobileValidationCode - Error'
        )
        throw error
      }
    },
    /**
     * @returns {Promise<void>}
     */
    async checkUserApi() {
      try {
        const response = await this.$store.dispatch('register/checkUserApi')
        return response
      } catch (error) {
        throw error
      }
    },

    /**
     * Check Email
     * @returns {Promise<void>}
     */
    async checkEmailApi() {
      try {
        const response = await this.$store.dispatch('register/checkEmailApi')

        return response
      } catch (error) {
        throw error
      }

      // try {
      //   await this.$axios
      //     .get('/users/check-email/' + email)
      //     .then((response) => response.data)
      // } catch (error) {
      //   this.handleError(error, 'APINetworkUser@checkUserApi - Error')
      //   throw error
      // }
    },

    /**
     * Check Phone
     * @returns {Promise<void>}
     */
    async checkPhoneApi() {
      try {
        const response = await this.$store.dispatch('register/checkPhoneApi')

        return response
      } catch (error) {
        throw error
      }
      // try {
      //   await this.$axios
      //     .get('/users/check-mobile/' + phone)
      //     .then((response) => response.data)
      // } catch (error) {
      //   this.handleError(error, 'APINetworkUser@checkUserApi - Error')
      //   throw error
      // }
    },
    /**
     * Sign in backend and firebase
     */
    async signInApi() {
      try {
        const response = await this.$store.dispatch('register/signInApi')

        return response
      } catch (error) {
        throw error
      }

      // const data = {
      //   'user[nick]': nick,
      //   'user[email]': email,
      //   'user[mobile_prefix]': prefix,
      //   'user[mobile_number]': phone,
      //   'user[ukresident]': ukresident
      // }
      //
      // try {
      //   await this.$axios
      //     .post('users/create', data)
      //     .then((response) => response.data)
      //     .error()
      // } catch (error) {
      //   this.handleError(error, 'APINetworkUser@signIn - Error')
      //   throw error
      // }
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