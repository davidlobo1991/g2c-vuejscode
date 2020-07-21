const state = () => ({
  nick: null,
  password: null,
  email: null,
  mobile_prefix: null,
  mobile_number: null,
  ukresident: null,
  words: null
})

const getters = {
  getNick: (state) => state.nick,
  getPassword: (state) => state.password,
  getEmail: (state) => state.email,
  getMobilePrefix: (state) => state.mobile_prefix,
  getMobileNumber: (state) => state.mobile_number,
  getUkresident: (state) => state.ukresident,
  getWords: (state) => state.words
}

const actions = {
  /**
   * Validate email code
   * @param {string} codeString - Validation email introduced code.
   * @returns {Promise<void>}
   * @param code
   */
  async validationCode({ getters, commit }, code) {
    try {
      const email = getters.getEmail

      const data = await this.$axios.post('/users/email-validation/validate', {
        email,
        validation_code: code
      })

      return data
    } catch (error) {
      throw error
    }
  },

  /**
   * Validation phone code
   * @param getters
   * @param commit
   * @param data
   * @returns {Promise<void>}
   */
  async validationPhoneCode({ getters, commit }, data) {
    try {
      const mobilePrefix = getters.getMobilePrefix
      const mobileNumber = getters.getMobileNumber
      const phone = `${mobilePrefix}${mobileNumber}`

      const response = await this.$axios.post(
        '/twilio/services/verify/check-verification-token',
        {
          verify_service_id: data.verifyServiceId,
          code: data.codeString,
          to: phone
        }
      )

      console.log(response)
      return response
    } catch (error) {
      throw error
    }
  },
  /**
   * Sending email verification
   * @param data
   * @returns {Promise<void>}
   */
  async sendValidationCode({ getters, commit }) {
    try {
      const email = getters.getEmail

      return await this.$axios
        .post('/users/email-validation/send', {
          email
        })
        .then((response) => response.data)
    } catch (error) {
      throw error
    }
  },
  /**
   * Sending phone code verification
   * @param data
   * @returns {Promise<void>}
   */
  async sendMobileValidationCode({ getters, commit }) {
    try {
      const mobilePrefix = getters.getMobilePrefix
      const mobileNumber = getters.getMobileNumber
      const phone = `${mobilePrefix}${mobileNumber}`

      return await this.$axios
        .post('/twilio/services/verify/send-sms-verification', { to: phone })
        .then((response) => response.data)
    } catch (error) {
      throw error
    }
  },

  /**
   * Check User
   */
  async checkUserApi({ getters, commit }) {
    try {
      const nick = getters.getNick
      const { data } = await this.$axios.get(`/users/check-nickname/${nick}`)
      return data
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
      throw error
    }
  },
  /**
   * Check Email
   * @returns {Promise<void>}
   */
  async checkEmailApi({ getters }) {
    try {
      const email = getters.getEmail

      return await this.$axios
        .get(`/users/check-email/${email}`)
        .then((response) => response.data)
    } catch (error) {
      this.handleError(error, 'APINetworkUser@checkEmailApi - Error')
      throw error
    }
  },
  /**
   * Check Phone
   * @returns {Promise<void>}
   */
  async checkPhoneApi({ getters }) {
    try {
      const mobilePrefix = getters.getMobilePrefix
      const mobileNumber = getters.getMobileNumber
      const phone = `${mobilePrefix}${mobileNumber}`

      return await this.$axios
        .get(`/users/check-mobile/${phone}`)
        .then((response) => response.data)
    } catch (error) {
      this.handleError(error, 'APINetworkUser@checkPhoneApi - Error')
      throw error
    }
  },
  /**
   * Sign in backend and firebase
   */
  async signInApi({ getters }, dataObject) {
    // eslint-disable-next-line camelcase
    const g2c_user = {
      userauth: dataObject.userauth,
      nick: sessionStorage.registerNick,
      application: dataObject.application
    }
    const user = {
      nick: sessionStorage.registerNick,
      password: sessionStorage.registerPassword,
      email: getters.getEmail,
      mobile_prefix: getters.getMobilePrefix,
      mobile_number: getters.getMobileNumber,
      ukresident: getters.getUkresident
    }

    const data = {
      user,
      g2c_user
    }

    try {
      return await this.$axios
        .post('users/create', data)
        .then((response) => response.data)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
      throw error
    }
  },
  /**
   * Send email with recover password link
   * @returns {Promise<void>}
   */
  async resetPasswordApi({ getters }, data) {
    try {
      return await this.$axios
        .post('password/reset', data)
        .then((response) => response.data)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
      throw error
    }
  },

  /**
   * Send email with recover password link
   * @returns {Promise<void>}
   */
  async sendRecoverPasswordEmail({ getters }, email) {
    try {
      return await this.$axios
        .get(`password/email/${email}`)
        .then((response) => response.data)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
      throw error
    }
  }
}

const mutations = {
  // SET_ERROR_VALIDATION(state, status) {
  //   state.errorValidation = status
  // },
  // SET_USER_CHECKED(state, status) {
  //   state.userChecked = status
  // },
  SET_NICK(state, nick) {
    state.nick = nick
  },
  SET_PASSWORD(state, password) {
    state.password = password
  },
  SET_EMAIL(state, email) {
    state.email = email
  },
  SET_MOBILE_PREFIX(state, mobilePrefix) {
    state.mobile_prefix = mobilePrefix
  },
  SET_MOBILE_NUMBER(state, mobileNumber) {
    state.mobile_number = mobileNumber
  },
  SET_UKRESIDENT(state, ukresident) {
    state.ukresident = ukresident
  },
  SET_WORDS(state, words) {
    state.words = words
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
