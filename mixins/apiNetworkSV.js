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
        const response = await this.$store
          .dispatch('register/validationCode', code)
          .then((response) => response.data)
        return response
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
        const response = await this.$store
          .dispatch('register/validationPhoneCode', {
            verifyServiceId: sessionStorage.verifyServiceId,
            codeString: code
          })
          .then((response) => response.data)

        return response
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
        const response = await this.$store
          .dispatch('register/sendValidationCode')
          .then((response) => response.data)

        return response
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
        const response = await this.$store
          .dispatch('register/sendMobileValidationCode')
          .then((response) => response.data)

        return response
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
        const response = await this.$store
          .dispatch('register/checkUserApi')
          .then((response) => response.data)

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
        const response = await this.$store
          .dispatch('register/checkEmailApi')
          .then((response) => response.data)
        return response
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
        const response = await this.$store
          .dispatch('register/sendRecoverPasswordEmail', email)
          .then((response) => response.data)
        return response
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
        const response = await this.$store
          .dispatch('register/resetPasswordApi', {
            password,
            token
          })
          .then((response) => response.data)
        return response
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
        const response = await this.$store
          .dispatch('register/checkPhoneApi')
          .then((response) => response.data)
        return response
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
        const response = await this.$store
          .dispatch('register/createUserServerApplication', {
            userauth,
            application
          })
          .then((response) => response.data)
        return response
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
        const response = await this.$store
          .dispatch('register/checkUserServerApplicationStatus', {
            jobId
          })
          .then((response) => response.data)
        return response
      } catch (error) {
        throw error
      }
    },
    /**
     * Sign in backend and firebase
     */
    async createUserApi() {
      try {
        const response = await this.$store
          .dispatch('register/createUserApi')
          .then((response) => response.data)
        return response
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
