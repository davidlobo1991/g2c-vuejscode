<template>
  <div>
    <div class="full-width">
      <form>
        <v-text-field
          v-model="formRegister.nick"
          :value="nick"
          :hide-details="handleValidationNickErrors().length === 0"
          :error-messages="handleValidationNickErrors() || []"
          @input="updateNick"
          @blur="checkUser"
          label="Username (Handle)"
          outlined
          autocorrect="off"
          autocapitalize="none"
          class="c-login__cont--input u-mrb-s"
        >
        </v-text-field>
        <v-text-field
          v-model="formRegister.password"
          :hide-details="handleValidationPasswordErrors().length === 0"
          :error-messages="handleValidationPasswordErrors() || []"
          @input="updatePassword"
          :counter="6"
          type="password"
          label="Password"
          outlined
          class="c-login__cont--input u-mrb-s"
        >
        </v-text-field>

        <v-text-field
          v-model="formRegister.promotionalCode"
          @input="updateInvitationCode"
          :hide-details="handleValidationInvitationCodeErrors().length === 0"
          :error-messages="handleValidationInvitationCodeErrors() || []"
          type="text"
          label="Promotional Code"
          outlined
          class="c-login__cont--input u-mrb-s"
        >
        </v-text-field>
        <div class="u-mrb-s c-login__cont--btn">
          <v-btn
            @click="nextStep"
            :loading="loading"
            depressed
            color="#0885F6"
            dark
            nuxt
          >
            Next
          </v-btn>
        </div>
        <div v-if="errorValidation !== null" class="error--text">
          <p>{{ errorValidation }}</p>
        </div>
      </form>
    </div>
    <p class="c-login__details">
      Already a member?
      <a @click="showLogin">
        Login
      </a>
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { required, minLength, maxLength } from 'vuelidate/lib/validators'

export default {
  name: 'PreCreateForm',
  data() {
    return {
      formRegister: {
        nick: '',
        promotionalCode: '',
        password: null
      },
      loading: false,
      errorValidation: null,
      nickTaken: null,
      nickInvalid: null,
      invitationCodeError: null
    }
  },
  validations: {
    formRegister: {
      nick: {
        required,
        maxLength: maxLength(64)
      },
      password: {
        required,
        minLength: minLength(6)
      },
      promotionalCode: {
        required
      }
    }
  },
  computed: {
    ...mapState({
      nick: (state) => state.register.nick,
      password: (state) => state.register.password
    })
  },
  methods: {
    updateNick(value) {
      this.$store.commit('register/SET_NICK', value)
    },
    updatePassword(value) {
      this.$store.commit('register/SET_PASSWORD', value)
    },
    updateInvitationCode(value) {
      this.$store.commit('register/SET_INVITATION_CODE', value)
    },
    showLogin() {
      this.$emit('showLogin')
      this.$mixpanel.track('Login Form View')
    },
    /**
     * Check if user is taken
     * @returns {Promise<void>}
     */
    async checkUser() {
      try {
        const checkLowercase = this.checkIfAlphanumericAndLowerCase(this.nick)

        if (!checkLowercase) {
          this.nickInvalid = this.$i18n.t('register.error.nick.invalid')
        } else {
          this.nickInvalid = null
        }
        // eslint-disable-next-line no-unreachable
        this.$v.$touch()

        if (this.$v.$invalid) {
          this.loading = false
          return
        }

        const validation = await this.checkUserApi()

        if (validation.error === true) {
          this.nickTaken = this.$i18n.t('register.error.nick.exists')
        } else {
          this.nickTaken = null
        }
        this.$v.$touch()
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('PreCreateForm@checkUser - Error')
        // eslint-disable-next-line no-console
        console.error(error)
      }
    },
    /**
     * Go to create account page. First check if the user is taken, save nick and password in store and go to next step
     * @returns {Promise<void>}
     */
    async nextStep() {
      try {
        this.loading = true

        const checkLowercase = this.checkIfAlphanumericAndLowerCase(this.nick)

        if (!checkLowercase) {
          this.nickInvalid = this.$i18n.t('register.error.nick.invalid')
        }
        // eslint-disable-next-line no-unreachable
        this.$v.$touch()

        if (this.$v.$invalid) {
          this.loading = false
          return
        }

        const validationInvitationCode = await this.validationInvitationCode()

        if (validationInvitationCode.error === true) {
          this.invitationCodeError = this.$i18n.t('register.error.promocode')
          this.$v.$touch()
          this.loading = false
          return
        }

        const validation = await this.checkUserApi()

        if (validation.error === true) {
          this.nickTaken = this.$i18n.t('register.error.nick.exists')
          this.$v.$touch()
          this.loading = false
          return
        }

        // Save nick and password in session because if the user update the site they will be lost
        sessionStorage.registerNick = this.nick
        sessionStorage.registerPassword = this.password

        // Load Create Account Workflow
        await this.$router.push(this.localePath('create-account'))
        this.$mixpanel.track('Register Account Username/Password Inserted')
      } catch (error) {
        this.handleError(error, 'PreCreateForm@checkUser - Error')
        this.errorValidation = this.$i18n.t('register.error.default')
        this.$v.$touch()
        this.loading = false
      }
    },
    /**
     * @returns boolean
     */
    checkIfAlphanumericAndLowerCase(nick) {
      const regex = /^[a-z0-9-]+$/

      return regex.test(nick)
    },
    /**
     * Handle Vuelidate nick errors
     * @returns {[]}
     */
    handleValidationNickErrors() {
      const errors = []
      if (!this.$v.formRegister.nick.$dirty) {
        return errors
      }

      if (!this.$v.formRegister.nick.required) {
        errors.push(this.$i18n.t('register.error.nick.required'))
      }

      if (!this.$v.formRegister.nick.maxLength) {
        errors.push(this.$i18n.t('register.error.nick.length'))
      }

      if (this.nickInvalid) {
        errors.push(this.nickInvalid)
      }

      if (this.nickTaken) {
        errors.push(this.nickTaken)
      }

      return errors
    },
    /**
     * Handle Vuelidate password errors
     * @returns {[]}
     */
    handleValidationPasswordErrors() {
      const errors = []
      if (!this.$v.formRegister.password.$dirty) {
        return errors
      }

      if (!this.nickTaken && !this.$v.formRegister.password.required) {
        errors.push(this.$i18n.t('register.error.password.required'))
      }

      if (!this.$v.formRegister.password.minLength) {
        errors.push(this.$i18n.t('register.error.password.length'))
      }

      return errors
    },
    /**
     * Handle Vuelidate promocode errors
     * @returns {[]}
     */
    handleValidationInvitationCodeErrors() {
      const errors = []

      if (!this.$v.formRegister.promotionalCode.$dirty) {
        return errors
      }

      if (!this.$v.formRegister.promotionalCode.required) {
        errors.push(this.$i18n.t('register.error.promocode'))
      }

      if (this.invitationCodeError) {
        errors.push(this.invitationCodeError)
      }

      return errors
    }
  }
}
</script>

<style lang="scss" scoped>
.full-width {
  width: 100%;
}

.c-login {
  &__cont {
    &--btn {
      ::v-deep {
        .v-btn {
          font-size: 21px;
          text-transform: capitalize;
          min-width: 350px !important;
          height: 70px !important;
          letter-spacing: 0;
          font-family: Roboto;
        }
      }
    }
    &--input {
      width: 350px;
      ::v-deep {
        .v-input__control .v-input__slot {
          font-size: 21px;
          min-height: 70px;
          & .v-text-field__slot {
            .v-label {
              font-size: 21px;
              top: 26px !important;
            }
            & .v-label--active {
              transform: translateY(-30px) scale(0.75) !important;
            }
          }
        }
      }
    }
  }
  &__details {
    margin-top: 60px;
  }
}
@media screen and (max-width: 1500px) {
  .c-login {
    &__cont {
      &--btn {
        ::v-deep {
          .v-btn {
            min-width: 300px !important;
          }
        }
      }
      &--input {
        width: 300px;
      }
    }
    &__details {
      font-size: 14px;
      max-width: 300px;
    }
  }
}
@media screen and (max-width: 1200px) {
  .c-login {
    &__cont {
      &--btn {
        ::v-deep {
          .v-btn {
            min-width: 240px !important;
          }
        }
      }
      &--input {
        width: 240px;
      }
    }
    &__details {
      max-width: 240px;
    }
  }
}

@media screen and (max-width: 992px) {
  .c-login {
    &__cont {
      &--btn {
        ::v-deep {
          .v-btn {
            font-size: 18px;
            min-width: 200px !important;
            height: 55px !important;
          }
        }
      }
      &--input {
        width: 200px;
        ::v-deep {
          .v-input__control .v-input__slot {
            font-size: 18px;
            min-height: 55px;
            & .v-text-field__slot {
              .v-label {
                font-size: 18px;
                top: 18px !important;
              }
              & .v-label--active {
                transform: translateY(-25px) scale(0.75) !important;
              }
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .c-login {
    &__cont {
      &--btn {
        ::v-deep {
          .v-btn {
            font-size: 14px;
            min-width: 100% !important;
            height: 46px !important;
          }
        }
      }
      &--input {
        width: 100%;
        ::v-deep {
          .v-input__control .v-input__slot {
            font-size: 14px;
            min-height: 46px;
            & .v-text-field__slot {
              .v-label {
                font-size: 14px;
                top: 14px !important;
              }
              & .v-label--active {
                transform: translateY(-23px) scale(0.75) !important;
              }
            }
          }
        }
      }
    }
    &__details {
      padding: 0;
      font-size: 12px;
      margin-top: 0;
    }
  }
}
</style>
