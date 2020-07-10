<template>
  <div class="c-info">
    <span class="c-info__text--title">
      <span v-if="kind === 'email'">
        Email Validation Code
      </span>
      <span v-if="kind === 'telephone'">
        Phone Validation Code
      </span>
    </span>
    <div class="c-info__text">
      <span v-if="kind === 'email'">
        We've send you an email with your validation code. Please, check your
        inbox an write down the code you've received to verify your email
        address.
      </span>
      <span v-if="kind === 'telephone'">
        Please enter the code you’ve receive in the phone number
        <span>{{ hideNumber }}</span>
      </span>
    </div>
    <div>
      <div class="c-info__pincode-cont">
        <v-text-field
          :id="kind === 'email' ? 'inputNumberBox1' : 'inputNumberBoxPhone1'"
          :hide-details="true"
          :error-messages="handleValidationCodeErrors() || []"
          v-model="verificationCode[0]"
          @keyup="
            kind === 'email'
              ? focusNextInput($event, 'inputNumberBox2')
              : focusNextInput($event, 'inputNumberBoxPhone2')
          "
          @paste="copyNumber($event)"
          @click="selectValue($event)"
          class="c-info__pincode__number u-mrh-xs"
          outlined
          step="1"
          oninput="this.value=this.value.replace(/[^0-9]/g,'');"
          maxlength="1"
          type="text"
        >
        </v-text-field>
        <v-text-field
          :id="kind === 'email' ? 'inputNumberBox2' : 'inputNumberBoxPhone2'"
          :hide-details="true"
          :error-messages="handleValidationCodeErrors() || []"
          v-model="verificationCode[1]"
          @keyup="
            kind === 'email'
              ? focusNextInput($event, 'inputNumberBox3')
              : focusNextInput($event, 'inputNumberBoxPhone3')
          "
          @click="selectValue($event)"
          class="c-info__pincode__number u-mrh-xs"
          outlined
          step="1"
          oninput="this.value=this.value.replace(/[^0-9]/g,'').slice(-1);"
          type="text"
        >
        </v-text-field>
        <v-text-field
          :id="kind === 'email' ? 'inputNumberBox3' : 'inputNumberBoxPhone3'"
          :hide-details="true"
          :error-messages="handleValidationCodeErrors() || []"
          v-model="verificationCode[2]"
          @keyup="
            kind === 'email'
              ? focusNextInput($event, 'inputNumberBox4')
              : focusNextInput($event, 'inputNumberBoxPhone4')
          "
          @click="selectValue($event)"
          class="c-info__pincode__number u-mrh-xs"
          outlined
          step="1"
          oninput="this.value=this.value.replace(/[^0-9]/g,'').slice(-1);"
          type="text"
        >
        </v-text-field>
        <v-text-field
          :id="kind === 'email' ? 'inputNumberBox4' : 'inputNumberBoxPhone4'"
          :hide-details="true"
          :error-messages="handleValidationCodeErrors() || []"
          v-model="verificationCode[3]"
          @click="selectValue($event)"
          class="c-info__pincode__number u-mrh-xs"
          outlined
          step="1"
          oninput="this.value=this.value.replace(/[^0-9]/g,'').slice(-1);"
          type="text"
        >
        </v-text-field>
      </div>
      <div v-show="errorValidation" class="c-error">
        {{ errorValidation }}
      </div>

      <div class="c-info__button--cont">
        <div class="c-info__button">
          <span @click="resendCode" class="c-info__link">
            <v-icon class="c-info__link--icon">mdi-replay</v-icon> Resend Code
          </span>
          <v-btn
            v-if="kind === 'telephone'"
            @click="verificationPhone"
            :loading="loading"
            depressed
            x-large
            dark
            color="#0086ff"
            class="rw-normal-text"
          >
            Sign in
          </v-btn>
          <v-btn
            v-if="kind === 'email'"
            @click="verificationEmail"
            :loading="loading"
            depressed
            x-large
            color="#0086ff"
            dark
            class="rw-normal-text"
          >
            Next
          </v-btn>
        </div>
      </div>
    </div>
    <div v-show="resendEmail" class="c-success">
      <v-icon>mdi-check-circle-outline</v-icon>
      Validation code resend
    </div>

    <div class="c-info__responsability u-flex u-flex-between">
      <div
        v-if="kind === 'telephone'"
        class="c-info__responsability--text-v2 u-pdt-xxxl"
      >
        Al hacer clic en Registrarte, aceptas nuestras Condiciones. Obtén más
        información sobre cómo recopilamos, usamos y compartimos tu información
        en la Política de datos, así como el uso que hacemos de las cookies en
        nuestra Política de cookies.
      </div>
    </div>
  </div>
</template>
<script>
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'PinVerify',
  props: {
    kind: {
      type: String,
      default: ''
    },
    hideNumber: {
      type: String,
      default: ''
    },
    loadingFromParent: {
      type: Boolean,
      default: false
    }
  },
  validations: {
    verificationCode: { required }
  },
  data() {
    return {
      verificationCode: [],
      verifyServiceId: null,
      errorValidation: null,
      resendEmail: false,
      loading: false
    }
  },
  watch: {
    loadingFromParent(data) {
      this.loading = data
    }
  },
  methods: {
    /**
     * Get verification code phone and validate
     * @returns {Promise<void>}
     */
    async verificationPhone() {
      this.loading = true
      const code = this.getVerificationCode()

      try {
        const validation = await this.validationPhoneCode(code)

        if (validation.error === true) {
          throw validation.message
        }
        this.errorValidation = null
        this.$emit('signIn')
      } catch (error) {
        this.loading = false
        this.errorValidation = this.$i18n.t('register.error.phone.verification')
        this.$v.$touch()
        // eslint-disable-next-line no-console
        console.error('PinVerify@verificationPhone - Error')
        // eslint-disable-next-line no-console
        console.error(error)
      }
    },
    /**
     * Get verification code email and validate
     * @returns {Promise<void>}
     */
    async verificationEmail() {
      this.loading = true
      const code = this.getVerificationCode()

      if (this.kind === 'email') {
        try {
          const validation = await this.validationCode(code)

          if (validation.error === true) {
            throw validation.message
          }

          this.errorValidation = null
          this.$emit('nextStep')
        } catch (error) {
          this.loading = false
          this.errorValidation = this.$i18n.t(
            'register.error.email.verification'
          )
          this.$v.$touch()
          // eslint-disable-next-line no-console
          console.error('PinVerify@nextStep - Error')
          // eslint-disable-next-line no-console
          console.error(error)
        }
      }
    },
    /**
     * Function to resend validation code (phone or email)
     * @returns {Promise<void>}
     */
    async resendCode() {
      let sendValidation = null
      if (this.kind === 'email') {
        sendValidation = await this.sendValidationCode()

        if (!sendValidation.error) {
          this.resendEmail = true
          this.errorValidation = null
        } else {
          this.errorValidation = this.$i18n.t('register.error.email.sending')
          this.$v.$touch()
        }
      } else {
        sendValidation = await this.sendMobileValidationCode()

        if (!sendValidation.error) {
          this.resendEmail = true
          sessionStorage.verifyServiceId = sendValidation.data.verifyServiceId
        } else {
          this.errorValidation = this.$i18n.t('register.error.phone.sending')
          this.$v.$touch()
        }
      }
    },
    /**
     * Put together inputs code
     * @returns {string}
     */
    getVerificationCode() {
      let code = ''
      this.verificationCode.forEach(function(pinCode) {
        code += pinCode
      })

      return code
    },
    /**
     * Handle code error
     * @returns {[]}
     */
    handleValidationCodeErrors() {
      const errors = []

      if (this.errorValidation) {
        errors.push('')
      }

      return errors
    },
    focusNextInput(event, focusInput) {
      if (event.key >= '0' && event.key <= '9') {
        document.getElementById(focusInput).focus()
      }
    },
    copyNumber(event) {
      const number = event.clipboardData.getData('text/plain')
      this.verificationCode = ('' + number).split('')
    },
    selectValue(event) {
      event.target.select()
    }
  }
}
</script>

<style lang="scss" scoped>
.rw-normal-text {
  text-transform: none;
}
.c-error {
  margin: 0 10px 20px;
}

.c-success {
  margin: 30px 0;
  color: #18de82;
  font-weight: 500;

  .v-icon {
    color: #18de82;
  }
}

.c-info {
  color: #4d4d4d;
  margin: 0 auto;
  font-size: 20px;
  max-width: 54%;
  display: flex;
  flex-flow: column;
  align-items: center;

  &__text {
    color: #4d4d4d;
    font-family: Roboto;
    /*line-height: 40px;*/
    text-align: center;

    &--title {
      display: block;
      font-size: 25px;
      font-weight: 500;
      padding-bottom: 40px;
    }
  }

  &__button--cont {
    text-align: right;
  }

  &__button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  &__pincode {
    &-cont {
      padding-top: 56px;
      padding-bottom: 25px;
      display: flex;
      justify-content: flex-end;
    }

    &__number {
      max-width: 64px;
      height: 64px !important;
      font-weight: bold;
      color: #4d4d4d;
      font-size: 22px;

      & input[type='number'] {
        -moz-appearance: textfield;
      }

      & input::-webkit-outer-spin-button,
      & input::-webkit-inner-spin-button {
        -webkit-appearance: none;
      }

      & input {
        text-align: center;
      }

      ::v-deep {
        .v-input__control .v-input__slot {
          min-height: 64px !important;
          & .v-text-field__slot,
          input {
            text-align: center;
            &::selection {
              color: none;
              background: none;
            }
            /* For Mozilla Firefox */
            &::-moz-selection {
              color: none;
              background: none;
            }
          }
        }
      }
    }
  }

  &__link {
    color: #0087ff;
    font-weight: 500;
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover .c-info__link--icon {
      transform: rotate(-150deg);
    }

    &--icon {
      color: #0087ff !important;
      margin-right: 5px;
    }
  }
}

@media screen and (max-width: 1500px) {
  .c-info {
    font-size: 16px;
    line-height: unset;
    padding: 0 0;
    width: 100%;

    &__text {
      line-height: unset;

      &--title {
        font-size: 18px;
        padding-bottom: 10px;
      }
    }

    &__secretword {
      font-size: 30px;
      line-height: unset;
      padding: 44px 0;
      max-width: 900px;
    }
  }
}

@media screen and (max-width: 992px) {
  .c-info {
    max-width: 70%;
  }
}

@media screen and (max-width: 768px) {
  .c-info {
    padding: 0;
    max-width: 100%;

    &__text {
      font-size: 12px;
      line-height: unset;

      &--title {
        font-size: 16px;
        padding-bottom: 0;
      }
    }

    &__button--cont {
      display: flex;
      flex-flow: column;
    }

    &__link {
      font-size: 12px;
      padding-bottom: 15px;
      padding-left: 0;
    }

    &__button {
      flex-flow: column;
      align-items: flex-start;

      & button {
        min-width: 100% !important;
      }
    }

    &__responsability--text {
      &-v2 {
        font-size: 10px;
        /*text-align: center;*/
      }
    }

    &__pincode {
      &-cont {
        padding-bottom: 10px;
      }

      &__number {
        max-width: 46px;
        height: 46px !important;

        &:first-of-type {
          margin-left: 0 !important;
        }
        ::v-deep {
          .v-input__control .v-input__slot {
            min-height: 46px !important;
          }
        }

        & input {
        }
      }
    }
  }
}
</style>
