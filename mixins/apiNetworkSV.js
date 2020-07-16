export const apiNetworkSv = {
  data() {
    return {}
  },
  methods: {
    /**
     * Validate email code
     * @returns {Promise<void>}
     * @param code
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
     * @param code
     * @returns {Promise<void>}
     */
    async validationPhoneCode(code) {
      try {
        const response = await this.$store.dispatch(
          'register/validationPhoneCode',
          {
            verifyServiceId: sessionStorage.verifyServiceId,
            codeString: code
          }
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
        return await this.$store.dispatch('register/checkUserApi')
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
        return await this.$store.dispatch('register/checkEmailApi')
      } catch (error) {
        throw error
      }
    },

    /**
     * Send recover password email
     * @returns {Promise<any>}
     */
    async sendRecoverPasswordEmail(email) {
      try {
        return await this.$store.dispatch(
          'register/sendRecoverPasswordEmail',
          email
        )
      } catch (error) {
        throw error
      }
    },
    /**
     * Send recover password email
     * @returns {Promise<any>}
     */
    async resetPasswordApi(password, token) {
      try {
        return await this.$store.dispatch('register/resetPasswordApi', {
          password,
          token
        })
      } catch (error) {
        throw error
      }
    },
    /**
     * Check Phone
     * @returns {Promise<void>}
     */
    async checkPhoneApi() {
      try {
        return await this.$store.dispatch('register/checkPhoneApi')
      } catch (error) {
        throw error
      }
    },
    /**
     *
     * @returns {Promise<any>}
     */
    async createUserServerApplication(userauth, application) {
      try {
        return await this.$store.dispatch(
          'register/createUserServerApplication',
          {
            userauth,
            application
          }
        )
      } catch (error) {
        throw error
      }
    },
    /**
     *
     * @returns {Promise<any>}
     */
    async checkUserServerApplicationStatus(jobId) {
      try {
        return await this.$store.dispatch(
          'register/checkUserServerApplicationStatus',
          {
            jobId
          }
        )
      } catch (error) {
        throw error
      }
    },
    /**
     * Sign in backend and firebase
     */
    async signInApi() {
      try {
        return await this.$store.dispatch('register/createUserApi')
      } catch (error) {
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
