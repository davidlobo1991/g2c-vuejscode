export const apiNetworkSv = {
  data() {
    return {}
  },
  methods: {
    /**
     *
     * @returns {Promise<void>}
     */
    async validationCode() {
      let code = null
      this.verificationCode.forEach(function(pinCode) {
        code += pinCode
      })

      try {
        // eslint-disable-next-line no-undef
        await this.postCallApi('/users/email-validation/validate', {
          email: sessionStorage.registerEmail,
          validation_code: code
        })
      } catch (err) {
        throw err
      }
    }
  },
  /**
   *
   * @returns {Promise<void>}
   */
  async validationPhoneCode() {
    let codeString = null
    this.verificationCode.forEach(function(pinCode) {
      codeString += pinCode
    })

    try {
      await this.postCallApi(
        '/twilio/services/verify/check-verification-token',
        {
          verify_service_id: sessionStorage.verifyServiceId,
          code: codeString,
          to: sessionStorage.registerPrefix + sessionStorage.registerPhone
        }
      )
    } catch (err) {
      throw err
    }
  },
  /**
   *
   * @returns {Promise<void>}
   */
  async sendValidationCode() {
    const data = {
      email: this.registerEmail
    }

    try {
      await this.postCallApi('/users/email-validation/send', {
        data
      })
    } catch (err) {
      throw err
    }
  },
  /**
   *
   * @returns {Promise<void>}
   */
  async sendMobileValidationCode() {
    const number = this.registerPrefix + this.registerPhone
    const data = {
      to: number
    }
    try {
      await this.postCallApi(
        '/twilio/services/verify/send-sms-verification',
        data
      )
    } catch (err) {
      throw err
    }
  },
  /**
   *
   * @param nick
   * @returns {Promise<void>}
   */
  async checkUser(nick) {
    try {
      await this.getCallApi('/users/check-nickname/', {
        nick
      })
    } catch (err) {
      throw err
    }
  },
  /**
   *
   */
  signIn() {
    const data = {
      'g2c_user[words]': sessionStorage.securityKey,
      'g2c_user[application]': 'networksv.com',
      'g2c_user[nick]': sessionStorage.registerNick,
      'user[nick]': sessionStorage.registerNick,
      'user[email]': sessionStorage.registerEmail,
      'user[mobile_prefix]': sessionStorage.registerPrefix,
      'user[mobile_number]': sessionStorage.registerPhone,
      'user[ukresident]': sessionStorage.registerUkResident
    }
    // eslint-disable-next-line no-unused-vars
    const response = this.postCallApi('users/create', data)

    response.then((result) => {
      if (!result.error) {
        this.$router.push({
          path: '/home'
        })
      } else {
        this.errorValidation = true
        // eslint-disable-next-line no-console
        console.log(result)
      }
    })
  },
  /**
   * Get call
   * @param url
   * @param data
   * @returns {Promise<AxiosResponse<any>>}
   */
  getCallApi(url, data = null) {
    return this.$axios.get(url + data).then((response) => response.data)
  },
  /**
   * Post call
   * @param url
   * @param data
   * @returns {Promise<AxiosResponse<any>>}
   */
  postCallApi(url, data = null) {
    return this.$axios
      .post(url, data, {
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      })
      .then((response) => response.data)
  }
}
