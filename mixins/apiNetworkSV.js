import { functions } from '~/mixins/functions'
import { cookies } from '~/mixins/cookies'

export const apiNetworkSv = {
  mixins: [functions, cookies],
  data() {
    return {}
  },
  methods: {
    async showUsers() {
      try {
        const response = await this.$store
          .dispatch('users/show')
          .then((response) => response.data)
        return response
      } catch (error) {
        this.handleError(error, 'APINetworkUser@validationCode - Error')
        throw error
      }
    },
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
     * Validate email code
     * @returns {Promise<void>}
     * @param code
     */
    async validationInvitationCode(code) {
      try {
        const response = await this.$store
          .dispatch('register/checkInvitationCode', code)
          .then((response) => response.data)
        return response
      } catch (error) {
        this.handleError(error, 'APINetworkUser@promotionalCode - Error')
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
     *
     * @param id
     * @returns {Promise<any>}
     */
    async createConnection(id, newStatus) {
      try {
        const response = await this.$store
          .dispatch('users/{id}/connections/create', {
            destination_user_id: id,
            status: newStatus
          })
          .then((response) => response.data)
        return response
      } catch (error) {
        throw error
      }
    }

    // /**
    //  * Edit users
    //  */
    // async editUser() {
    //   try {
    //     const response = await this.$store
    //       .dispatch('register/createUserApi')
    //       .then((response) => response.data)
    //     return response
    //   } catch (error) {
    //     throw error
    //   }
    // }
  }
}
