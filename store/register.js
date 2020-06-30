const state = () => ({
  // items: [],
  // errorValidation: false,
  // userChecked: false,
  // emailChecked: false,
  // phoneChecked: false,
  // checkoutStatus: null,
  nick: null,
  email: null,
  mobile_prefix: null,
  mobile_number: null,
  ukresident: null
})

const getters = {
  // getItems: (state) => state.items,
  // getErrorValidation: (state) => state.errorValidation,
  // getUserChecked: (state) => state.userChecked,
  // getEmailChecked: (state) => state.emailChecked,
  // getPhoneChecked: (state) => state.phoneChecked,
  // getCheckoutStatus: (state) => state.checkoutStatus,
  getNick: (state) => state.nick,
  getEmail: (state) => state.email,
  getMobilePrefix: (state) => state.mobile_prefix,
  getMobileNumber: (state) => state.mobile_number,
  getUkresident: (state) => state.ukresident
}

const actions = {
  /**
   * Validate email code
   * @param {string} codeString - Validation email introduced code.
   * @returns {Promise<void>}
   */
  async validationCode(codeString) {
    try {
      return await this.$axios.post('/users/email-validation/validate', {
        email: sessionStorage.registerEmail,
        validation_code: codeString
      })
    } catch (error) {
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
      return await this.$axios.post(
        '/twilio/services/verify/check-verification-token',
        {
          verify_service_id: verifyServiceId,
          code: codeString,
          to: registerPrefix + registerPhone
        }
      )
    } catch (error) {
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
      return await this.$axios
        .post('/users/email-validation/send', {
          data
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
  async sendMobileValidationCode({ commit }, data) {
    try {
      return await this.$axios
        .post('/twilio/services/verify/send-sms-verification', data)
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

      // if (data.error) {
      //   commit('SET_ERROR_VALIDATION', true)
      // } else {
      //   commit('SET_USER_CHECKED', true)
      // }

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
  async signInApi({ getters }) {
    const user = {
      nick: getters.getNick,
      email: getters.getEmail,
      mobile_prefix: getters.getMobilePrefix,
      mobile_number: getters.getMobileNumber,
      ukresident: getters.getUkresident
    }

    const data = {
      user
    }

    try {
      return await this.$axios
        .post('users/create', data)
        .then((response) => response.data)
        .error((error) => {
          throw error
        })
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
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
