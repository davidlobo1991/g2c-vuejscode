const state = () => ({
  items: [],
  checkoutStatus: null
})

const getters = {}
const mutations = {}

const actions = {
  /**
   * Validate email code
   * @param {string} codeString - Validation email introduced code.
   * @returns {Promise<void>}
   */
  validationCode(codeString) {
    try {
      // eslint-disable-next-line no-undef
      return axios.post('/users/email-validation/validate', {
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
  validationPhoneCode(
    verifyServiceId,
    codeString,
    registerPrefix,
    registerPhone
  ) {
    try {
      return this.$axios.post(
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
  sendValidationCode(data) {
    try {
      return this.$axios
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
  sendMobileValidationCode: ({ commit }, data) => {
    try {
      return this.$axios
        .post('/twilio/services/verify/send-sms-verification', data)
        .then((response) => response.data)
    } catch (error) {
      throw error
    }
  },

  /**
   *
   * @param commit
   * @param nick
   * @returns {Promise<AxiosResponse<any>>}
   */
  checkUserApi: ({ commit }, nick) => {
    try {
      this.$axios
        .get('/users/check-nickname/' + nick)
        .then((response) => response.data)
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
  checkEmailApi(email) {
    try {
      return this.$axios
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
  checkPhoneApi(phone) {
    try {
      return this.$axios
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
  signInApi(nick, email, prefix, phone, ukresident) {
    const data = {
      'user[nick]': nick,
      'user[email]': email,
      'user[mobile_prefix]': prefix,
      'user[mobile_number]': phone,
      'user[ukresident]': ukresident
    }

    try {
      return this.$axios
        .post('users/create', data)
        .then((response) => response.data)
        .error()
    } catch (error) {
      throw error
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
