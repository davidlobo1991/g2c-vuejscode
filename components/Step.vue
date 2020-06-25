<template>
  <div class="c-register__wrapper">
    <div class="c-register__left-side">
      <navigation-steps ref="NavigationSteps" />
    </div>
    <div class="c-register__right-side">
      <div class="c-register__logo">
        <!-- <img src="@/assets/svg/networksv_logo.svg" /> -->
        <nuxt-link
          :src="require('@/assets/svg/networksv_logo.svg')"
          tag="img"
          to="/"
        />
      </div>
      <div v-show="1 === step">
        <RegisterEmail v-on:registerEmail="saveEmail" />
      </div>
      <div v-show="2 === step">
        <PinVerify v-on:nextStep="nextStep" kind="email" />
      </div>
      <div v-show="3 === step">
        <TwelveWordsGenerator
          ref="TwelveWordsGenerator"
          @CheckResponsability="getCheck"
        />
      </div>
      <div v-show="4 === step">
        <TelephoneVerify
          v-on:registerPhone="savePhone"
          v-on:registerPrefix="savePrefix"
          v-on:registerUkPrefix="saveUkResident"
        />
      </div>
      <div v-show="5 === step">
        <PinVerify @signIn="signIn" kind="telephone" />
      </div>
      <div :style="cssProps" class="c-info__button-cont u-align-right">
        <v-btn
          v-bind:disabled="
            responsabilityCheck == false && step == 3 ? true : false
          "
          v-if="step !== 5 && step !== 2"
          @click="navigationNext"
          depressed
          x-large
          color="#0086ff"
          class="c-info__button"
        >
          Next
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationSteps from '~/components/register_process/NavigationSteps'
import TwelveWordsGenerator from '~/components/register_process/TwelveWordsGenerator'
import TelephoneVerify from '~/components/register_process/TelephoneVerify'
import PinVerify from '~/components/register_process/PinVerify'
import RegisterEmail from '~/components/register_process/RegisterEmail'

export default {
  name: 'Login',
  components: {
    NavigationSteps,
    TwelveWordsGenerator,
    TelephoneVerify,
    PinVerify,
    RegisterEmail
  },
  data() {
    return {
      step: 1,
      responsabilityCheck: false,
      // pinInputHeight: '64px',
      viewportWidth: 0,
      variableWidth: 27,
      registerPhone: null,
      registerPrefix: null,
      registerEmail: null,
      errorValidation: false
    }
  },
  computed: {
    cssProps() {
      return {
        '--variable-wrapper': this.variableWidth + '%'
      }
    }
  },
  watch: {
    step(value) {
      this.$refs.NavigationSteps.setStep(value)

      this.$emit('enviarAlPadre', value)

      if (this.viewportWidth > 768 && value === 3) {
        this.variableWidth = 12
      } else if (this.viewportWidth <= 768) {
        this.variableWidth = 0
      } else if (this.viewportWidth > 768 && value === 4) {
        this.variableWidth = 27
      } else {
        this.variableWidth = 27
      }
    },
    viewportWidth(value) {
      if (this.viewportWidth <= 768) {
        this.variableWidth = 0
      } else if (this.viewportWidth > 768 && value === 3) {
        this.variableWidth = 12
      } else if (this.viewportWidth > 768 && value === 4) {
        this.variableWidth = 27
      } else {
        this.variableWidth = 27
      }
    }
  },
  beforeMount() {
    window.addEventListener('resize', this.onWindowSizeChange)
  },
  mounted() {
    this.viewportWidth = this.getWidth()
  },
  destroyed() {
    window.removeEventListener('resize', this.onWindowSizeChange)
  },
  methods: {
    /**
     * Method to save email in the session
     * @param value
     */
    saveEmail(value) {
      this.registerEmail = value
      sessionStorage.registerEmail = this.registerEmail
    },
    /**
     * Method to save email in the session
     * @param value
     */
    savePhone(value) {
      this.registerPhone = value
      sessionStorage.registerPhone = this.registerPhone
    },
    /**
     * Method to save if the user is uk resident
     * @param value
     */
    saveUkResident(value) {
      this.registerUkResident = value
      sessionStorage.registerUkResident = this.registerUkResident
    },
    savePrefix(value) {
      this.registerPrefix = value
      sessionStorage.registerPrefix = this.registerPrefix
    },
    getCheck(value) {
      this.responsabilityCheck = value
    },
    /**
     * If is the step 1 (introduce email) will verify the email and send the validation code
     */
    navigationNext() {
      if (this.step === 1) {
        const checkEmail = this.checkEmail()
        checkEmail.then((result) => {
          if (!result.error) {
            const validation = this.sendValidationCode()
            validation.then((result) => {
              !result.error ? (this.step += 1) : (this.errorValidation = true)
              // eslint-disable-next-line no-console
              console.log(result)
            })
          } else {
            this.resendEmail = false
            this.errorValidation = true
          }
        })
      } else if (this.step === 4) {
        const checkPhone = this.checkPhone()
        checkPhone.then((result) => {
          if (!result.error) {
            const validation = this.sendMobileValidationCode()
            validation.then((result) => {
              if (!result.error) {
                sessionStorage.verifyServiceId = result.data.verifyServiceId
                this.step += 1
              } else {
                this.errorValidation = true
              }
            })
          } else {
            this.errorValidation = true
          }
        })
      } else {
        this.step += 1
      }
    },
    getWidth() {
      return Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0
      )
    },
    navigationPrevious() {
      this.step = this.step - 1
    },
    onWindowSizeChange() {
      this.viewportWidth = this.getWidth()
    },
    nextStep() {
      this.navigationNext()
    }
  }
}
</script>

<style>
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin: 0;
}
</style>
<style lang="scss" scoped>
.c-register {
  &__wrapper {
    display: flex;
    width: 100%;
  }
  &__logo {
    display: none;
  }
  &__left-side {
    width: 35%;
    background-color: #f5f8fd;
    box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.1);
    padding-top: 5%;
    display: flex;
    justify-content: center;
  }
  &__right-side {
    padding-top: 4.5%;
    width: 60%;
    margin: 0 auto;
  }
}
.c-info {
  &__button-cont {
    // padding-right: 27%;
    padding-right: var(--variable-wrapper);
  }
  &__button {
    width: 180px;
    height: 80px !important;
    font-size: 21px;
    color: #fff;
    text-transform: none;
  }
}
@media screen and (max-width: 768px) {
  .c-info {
    &__button {
      width: 118px;
      height: 54px !important;
      font-size: 16px;
      color: #fff;
      text-transform: none;
    }
  }
}
@media screen and (max-width: 768px) {
  .c-info {
    &__wrapper {
      /*padding: 28px 0 0 0 !important;*/
    }
    &__button {
      width: 100%;
      height: 56px !important;
      font-size: 18px;
    }
  }
  .c-register {
    &__logo {
      display: block;
      text-align: center;
      padding-bottom: 30px;
      & img {
        width: 110px;
      }
    }
    &__left-side {
      display: none;
    }
    &__right-side {
      width: 90%;
      padding-top: 8%;
    }
  }
}
</style>
