<template>
  <div class="c-register__wrapper">
    <div class="c-register__left-side">
      <navigation-steps ref="NavigationSteps" />
    </div>
    <div class="c-register__right-side">
      <div class="c-register__logo">
        <nuxt-link
          :src="require('@/assets/svg/networksv_logo.svg')"
          tag="img"
          to="/"
        />
      </div>
      <div v-show="1 === step">
        <RegisterEmail @registerEmail="saveEmail" @nextStep="nextStep" />
      </div>
      <div v-show="2 === step">
        <PinVerify @nextStep="nextStep" kind="email" />
      </div>
      <div v-show="3 === step">
        <TwelveWordsGenerator
          ref="TwelveWordsGenerator"
          @CheckResponsability="getCheck"
          @nextStep="nextStep"
        />
      </div>
      <div v-show="4 === step">
        <TelephoneVerify
          @registerPhone="savePhone"
          @registerPrefix="savePrefix"
          @registerUkPrefix="saveUkResident"
          @nextStep="nextStep"
        />
      </div>
      <div v-show="5 === step">
        <PinVerify
          @signIn="signIn"
          :hide-number="mobilePrefix + ' ' + mobileNumber"
          :loadingFromParent="loading"
          kind="telephone"
        />
      </div>

      <div v-show="errorCreateAccount" class="c-error">
        {{ errorCreateAccount }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import NavigationSteps from '~/components/register_process/NavigationSteps'
import TwelveWordsGenerator from '~/components/register_process/TwelveWordsGenerator'
import TelephoneVerify from '~/components/register_process/TelephoneVerify'
import PinVerify from '~/components/register_process/PinVerify'
import RegisterEmail from '~/components/register_process/RegisterEmail'

export default {
  name: 'CreateAccountSteps',
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
      // registerEmail: null,
      errorValidation: null,
      errorCreateAccount: null,
      loading: true
    }
  },
  computed: {
    cssProps() {
      return {
        '--variable-wrapper': this.variableWidth + '%'
      }
    },
    ...mapState({
      nick: (state) => state.register.nick,
      password: (state) => state.register.password,
      email: (state) => state.register.email,
      mobilePrefix: (state) => state.register.mobile_prefix,
      mobileNumber: (state) => state.register.mobile_number,
      ukresident: (state) => state.register.ukresident,
      words: (state) => state.register.words
    })
  },
  watch: {
    step(value) {
      this.$refs.NavigationSteps.setStep(value)

      // this.$emit('enviarAlPadre', value)

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
    saveEmail(value) {
      this.$store.commit('register/SET_EMAIL', value)
    },
    savePhone(value) {
      this.$store.commit('register/SET_MOBILE_NUMBER', value)
    },
    saveUkResident(value) {
      this.$store.commit('register/SET_UKRESIDENT', value)
    },
    savePrefix(value) {
      this.$store.commit('register/SET_MOBILE_PREFIX', value)
    },
    getCheck(value) {
      this.responsabilityCheck = value
    },
    /**
     * If is the step 1 (introduce email) will verify the email and send the validation code
     */
    navigationNext() {
      this.step += 1
    },
    async signIn() {
      try {
        /** Send registerNick from Storage because if we get the nick of
        the store and the user update the site, the nickname will be lost */
        const response = await this.createUser(
          sessionStorage.registerNick,
          this.words
        )

        const register = await this.signInApi(
          response.userauth,
          this.g2c_application
        )

        if (!register.error) {
          console.log('Created user')
          this.login(this.nick, this.words)
        }
      } catch (error) {
        this.errorCreateAccount = this.$i18n.t(
          'register.error.creating.account'
        )

        this.loading = false
        // eslint-disable-next-line no-console
        console.error('testCreateUser - Error')
        // eslint-disable-next-line no-console
        console.error(error)
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
    async login() {
      try {
        // eslint-disable-next-line no-unused-vars
        let g2cLoginResponse = null

        g2cLoginResponse = await this.loginUser(
          this.words,
          this.g2c_application,
          sessionStorage.registerNick
        )
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('G2C Login error')
        // eslint-disable-next-line no-console
        console.error(error)
      }

      try {
        const response = await this.$auth.loginWith('local', {
          data: {
            nick: this.nick,
            password: this.password
          }
        })
        // eslint-disable-next-line no-console
        console.log(response)
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('NetworkSV Login error')
        // eslint-disable-next-line no-console
        console.error(error)
      }
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

.c-error {
  margin: 30px auto;
  text-align: center;
  font-weight: 500;
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
