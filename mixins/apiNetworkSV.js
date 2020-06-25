export const apiNetworkSv = {
  data() {
    return {}
  },
  methods: {
    validationCode() {
      let code = null
      this.verificationCode.forEach(function(pinCode) {
        code += pinCode
      })

      try {
        return new Promise((resolve, reject) => {
          // eslint-disable-next-line no-undef
          this.postCallApi('/users/email-validation/validate', {
            email: sessionStorage.registerEmail,
            validation_code: code
          })
        }).then((response) => {
          return {
            // nick: response.nick,
            // application: response.application,
            status_id: response.status
          }
        })
      } catch (err) {
        throw err
      }
    }
  },
  validationPhoneCode() {
    let codeString = null
    this.verificationCode.forEach(function(pinCode) {
      codeString += pinCode
    })

    try {
      return new Promise((resolve, reject) => {
        this.postCallApi('/twilio/services/verify/check-verification-token', {
          verify_service_id: sessionStorage.verifyServiceId,
          code: codeString,
          to: sessionStorage.registerPrefix + sessionStorage.registerPhone
        })
      }).then((response) => {
        return {
          // nick: response.nick,
          // application: response.application,
          status_id: response.status
        }
      })
    } catch (err) {
      throw err
    }
  },
  sendValidationCode() {
    const data = {
      email: this.registerEmail
    }
    return this.postCallApi('/users/email-validation/send', data)
  },
  sendMobileValidationCode() {
    const number = this.registerPrefix + this.registerPhone
    const data = {
      to: number
    }
    return this.postCallApi(
      '/twilio/services/verify/send-sms-verification',
      data
    )
  },
  checkUser(nick) {
    const validation = this.getCallApi('/users/check-nickname/', nick)
    validation.then((result) => {
      if (!result.error) {
        this.errorValidation = false
      } else {
        this.errorValidation = true
      }
    })
  },
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
  getCallApi(url, data = null) {
    return this.$axios.get(url + data).then((response) => response.data)
  },
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
