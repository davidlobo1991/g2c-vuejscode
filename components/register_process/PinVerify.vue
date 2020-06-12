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
        Please enter the code you’ve receive in the phone number +34xxxxxxxxx965
      </span>
    </div>
    <div>
      <div class="c-info__pincode-cont">
        <v-text-field
          id="inputNumberBox1"
          v-model="verificationCode[0]"
          class="c-info__pincode__number u-mrh-xs"
          outlined
          min="0"
          max="9"
          step="1"
          oninput="this.value=this.value.replace(/[^0-9]/g,'').slice(-1);"
          onkeyup="document.getElementById('inputNumberBox2').focus()"
          type="number"
        >
        </v-text-field>
        <v-text-field
          id="inputNumberBox2"
          v-model="verificationCode[1]"
          class="c-info__pincode__number u-mrh-xs"
          outlined
          min="0"
          max="9"
          step="1"
          oninput="this.value=this.value.replace(/[^0-9]/g,'').slice(-1);"
          onkeyup="document.getElementById('inputNumberBox3').focus()"
          type="number"
        >
        </v-text-field>
        <v-text-field
          id="inputNumberBox3"
          v-model="verificationCode[2]"
          class="c-info__pincode__number u-mrh-xs"
          outlined
          min="0"
          max="9"
          step="1"
          oninput="this.value=this.value.replace(/[^0-9]/g,'').slice(-1);"
          onkeyup="document.getElementById('inputNumberBox4').focus()"
          type="number"
        >
        </v-text-field>
        <v-text-field
          id="inputNumberBox4"
          v-model="verificationCode[3]"
          class="c-info__pincode__number u-mrh-xs"
          outlined
          min="0"
          max="9"
          step="1"
          oninput="this.value=this.value.replace(/[^0-9]/g,'').slice(-1);"
          onkeyup="document.getElementById('inputNumberBox5').focus()"
          type="number"
        >
        </v-text-field>
        <v-text-field
          id="inputNumberBox5"
          v-model="verificationCode[4]"
          class="c-info__pincode__number u-mrl-xs"
          outlined
          min="0"
          max="9"
          step="1"
          oninput="this.value=this.value.replace(/[^0-9]/g,'').slice(-1);"
          type="number"
        >
        </v-text-field>
      </div>

      <div class="c-info__button--cont">
        <div class="c-info__button">
          <span v-on:click="sendValidationCode" class="c-info__link">
            <v-icon class="c-info__link--icon">mdi-replay</v-icon> Resend Code
          </span>
          <v-btn
            v-if="kind === 'telephone'"
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
            v-on:click="nextStep"
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
    <div v-show="errorValidation" class="error">Error code</div>
    <div v-show="resendEmail" class="success">Email resend</div>

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
export default {
  name: 'PinVerify',
  props: {
    kind: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      verificationCode: [],
      verifyServiceId: null,
      errorValidation: false,
      resendEmail: false
    }
  },
  methods: {
    nextStep() {
      let validation = null

      if (this.kind === 'email') {
        validation = this.validationCode()
      } else {
        validation = this.validationPhoneCode()
      }

      validation.then((result) => {
        if (!result.error) {
          this.errorValidation = false
          this.$emit('nextStep')
        } else {
          this.errorValidation = true
        }
      })
    },
    sendValidationCode() {
      let sendValidation = null
      if (this.kind === 'email') {
        sendValidation = this.$parent.sendValidationCode() /** Step.vue */

        sendValidation.then((result) => {
          !result.error
            ? (this.resendEmail = true)
            : (this.errorValidation = true)
        })
      } else {
        sendValidation = this.$parent.sendMobileValidationCode() /** Step.vue */

        sendValidation.then((result) => {
          if (!result.error) {
            this.resendEmail = true
            sessionStorage.verifyServiceId = result.verifyServiceId
          } else {
            this.errorValidation = true
          }
        })
      }
      sendValidation.then((result) => {
        !result.error
          ? (this.resendEmail = true)
          : (this.errorValidation = true)
      })
    },
    validationCode() {
      let code = ''
      this.verificationCode.forEach(function(pinCode) {
        code += pinCode
      })
      return this.$axios
        .post('/users/email-validation/validate', {
          email: sessionStorage.registerEmail,
          validation_code: code
        })
        .then((response) => response.data)
    },
    validationPhoneCode() {
      let codeString = ''
      this.verificationCode.forEach(function(pinCode) {
        codeString += pinCode
      })
      return this.$axios
        .post('/twilio/services/verify/check-verification-token', {
          verify_service_id: sessionStorage.verifyServiceId,
          code: codeString,
          to: sessionStorage.registerPhone
        })
        .then((response) => response.data)
    }
  }
}
</script>

<style>
.rw-normal-text {
  text-transform: none;
}

.c-info__pincode__number,
.v-input__control,
.v-input__slot,
.v-text-field__slot,
input {
  text-align: center;
}

.c-info__pincode__number
  .v-text-field--filled
  > .v-input__control
  > .v-input__slot
  .v-text-field--full-width
  > .v-input__control
  > .v-input__slot
  .v-text-field--outlined
  > .v-input__control
  > .v-input__slot {
  height: 64px;
}

@media screen and (max-width: 768px) {
  .c-info__pincode__number
    .v-text-field--filled
    > .v-input__control
    > .v-input__slot,
  .v-text-field--full-width > .v-input__control > .v-input__slot,
  .v-text-field--outlined > .v-input__control > .v-input__slot {
    min-height: 46px;
    height: 46px;
  }
}
</style>
<style lang="scss" scoped>
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
  }

  &__pincode {
    &-cont {
      padding-top: 56px;
      padding-bottom: 32px;
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
      color: #0087ff;
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

        & input {
        }
      }
    }
  }
}
</style>
