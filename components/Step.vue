<template>
  <div class="o-wrapper o-wrapper--xl u-pdt-xxxl c-info__wrapper">
    <div class="o-layout o-layout--gutter-l ">
      <div
        class="o-layout__item u-1/1 u-1/3@m u-flex u-flex-center u-pdt-h u-pdt-custom"
      >
        <navigation-steps ref="NavigationSteps" />
      </div>
      <div
        class="o-layout__item u-1/1 u-2/3@m u-pdt-h u-pdt-custom u-align-left "
      >
        <div v-show="1 === step">
          <div class="c-info u-pdt-l">
            <div class="c-info__text">
              Own your data and money.<br />
              These words are your Security Key. They will be required to access
              your account and wallet.<br />
              Without them all your data and funds will become inaccessible
              forever.<br />NetworkSV do not have access nor can’t restore your
              Security Key.<br />Write down these 12 words in that order in a
              piece of paper and keep them in a safe place.
            </div>
            <div class="c-info__secretword u-align-center u-pdv-xxxh">
              sudden awkward slam gown vapor change meat cable hover section
              cart
            </div>
            <div class="c-info__responsability u-flex u-flex-between">
              <div class="c-info__responsability--text">
                <b>Responsability Disclaimer</b><br />
                I have writen down these 12 words and I am resposable to keep
                them in a safe place.
              </div>
              <div class="c-info__responsability--toggle">
                <v-switch v-on:change="acceptedCheck"></v-switch>
              </div>
            </div>
          </div>
        </div>
        <div v-show="2 === step">
          <div class="c-info">
            <div class="c-info__text">
              We need to verify your phone number to create your wallet.
            </div>
            <div class="o-layout c-info__phone-cont u-align-center u-pdt-xxxh">
              <v-select
                :items="prefixes"
                :rules="[rules.required, rules.counter]"
                placeholder="Country"
                outlined
                height="64px"
                class="o-layout__item u-1/1 u-1/4@m u-pdr-s c-info__input--prefix"
              ></v-select>
              <v-text-field
                :rules="[rules.required, rules.counter]"
                placeholder="123 456 789"
                outlined
                height="64px"
                class="o-layout__item u-1/1 u-1/4@m"
                type="number"
              ></v-text-field>
            </div>
          </div>
        </div>
        <div v-show="3 === step">
          <div class="c-info">
            <div class="c-info__text">
              Please enter the code you’ve receive in the phone number
              +34xxxxxxxxx965
            </div>
            <div class="c-info__pincode-cont">
              <v-text-field
                :height="pinInputHeight"
                class="c-info__pincode__number u-mrh-xs"
                outlined
                maxlength="1"
                type="number"
              ></v-text-field>
              <v-text-field
                :height="pinInputHeight"
                class="c-info__pincode__number u-mrh-xs"
                outlined
                maxlength="1"
                type="number"
              ></v-text-field>
              <v-text-field
                :height="pinInputHeight"
                class="c-info__pincode__number u-mrh-xs"
                outlined
                maxlength="1"
                type="number"
              ></v-text-field>
              <v-text-field
                :height="pinInputHeight"
                class="c-info__pincode__number u-mrh-xs"
                outlined
                maxlength="1"
                type="number"
              ></v-text-field>
              <v-text-field
                :height="pinInputHeight"
                class="c-info__pincode__number u-mrl-xs"
                outlined
                maxlength="1"
                type="number"
              ></v-text-field>
            </div>
            <div class="c-info__button--cont">
              <div class="c-info__button u-align-right">
                <v-btn depressed x-large color="primary">
                  Sign in
                </v-btn>
              </div>
              <div class="c-info__responsability u-flex u-flex-between">
                <div class="c-info__responsability--text-v2 u-pdt-xxxl">
                  Al hacer clic en Registrarte, aceptas nuestras Condiciones.
                  Obtén más información sobre cómo recopilamos, usamos y
                  compartimos tu información en la Política de datos, así como
                  el uso que hacemos de las cookies y tecnologías similares en
                  nuestra Política de cookies. Es posible que te enviemos
                  notificaciones por SMS que podrás desactivar cuando quieras.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="c-info__button u-align-right">
          <v-btn
            v-bind:disabled="responsabilityCheck ? false : true"
            v-if="step != 3"
            @click="navigationNext"
            depressed
            x-large
            color="primary"
          >
            Next
          </v-btn>
        </div>
      </div>
    </div>

    <!-- <button @click="navigationPrevious">
      Previous
    </button>
    <button @click="navigationNext">
      Next
    </button>
    {{ step }} -->
  </div>
</template>

<script>
import NavigationSteps from '~/components/NavigationSteps'

export default {
  name: 'Login',
  components: {
    NavigationSteps
  },
  props: {},
  data() {
    return {
      step: 1,
      responsabilityCheck: false,
      prefixes: ['+34', '+44', '+33'],
      pinInputHeight: '64px',
      viewportWidth: 0,
      rules: {
        required: (value) => !!value || 'Required'
        // counter: (value) => value.length <= 9 || 'Wrong phone number'
      }
    }
  },
  watch: {
    step(value) {
      // console.info(value)
      this.$refs.NavigationSteps.setStep(value)

      this.$emit('enviarAlPadre', value)
    },
    viewportWidth(value) {
      if (this.viewportWidth < 900) {
        this.pinInputHeight = '42px'
      }
    }
  },
  beforeMount() {
    window.addEventListener('resize', this.onWindowSizeChange)
  },
  mounted() {
    this.viewportWidth = this.getWidth()
    if (this.viewportWidth < 900) {
      this.pinInputHeight = '56px'
    }
    console.log(this.viewportWidth)
    console.log(this.pinInputHeight)
  },
  destroyed() {
    window.removeEventListener('resize', this.onWindowSizeChange)
  },
  methods: {
    navigationNext() {
      this.step = this.step + 1
    },
    navigationPrevious() {
      this.step = this.step - 1
    },
    acceptedCheck() {
      this.responsabilityCheck = !this.responsabilityCheck
    },
    tabNextInput() {
      if (this.value.length === this.maxLength) {
        this.nextElementSibling.focus()
      }
    },
    onWindowSizeChange() {
      this.viewportWidth = this.getWidth()
    },
    getWidth() {
      // return "hola"
      return Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.c-info {
  padding-left: 120px;
  padding-right: 120px;
  &__text {
    padding-top: 30px;
    color: #4d4d4d;
    font-family: Roboto;
    font-size: 16px;
    line-height: 21px;
  }
  &__secretword {
    color: #4d4d4d;
    font-family: Roboto;
    font-size: 28px;
    font-weight: 500;
    line-height: 38px;
    text-align: center;
    max-width: 554px;
    margin: 0 auto;
  }
  &__responsability {
    color: #4d4d4d;
    font-family: Roboto;
    font-size: 15px;
    line-height: 19px;
  }
  &__button {
    // padding-top: 60px;
    padding-right: var(--space-8xh);
  }
  &__pincode {
    &-cont {
      padding-right: var(--space-8xh);
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
      & input {
        text-align: center;
      }
    }
  }
}
@media screen and (max-width: 899px) {
  .u-pdt-custom {
    padding-top: 0 !important;
  }
  .c-info {
    padding-left: 17px;
    padding-right: 17px;
    padding-top: 0 !important;
    &__wrapper {
      padding: 28px 0 0 0 !important;
    }
    &__text {
      padding-top: 0 !important;
      font-size: 12px;
      line-height: 15px;
    }
    &__secretword {
      padding-top: 33px !important;
      padding-bottom: 33px !important;
      font-size: 21px;
      line-height: 26px;
    }
    &__button--cont {
      display: flex;
      flex-flow: column-reverse;
    }
    &__button {
      padding-right: 0;
      padding-top: 35px;
      text-align: center !important;
      & button {
        min-width: 92% !important;
      }
    }
    &__responsability--text {
      font-size: 12px;
      padding-right: 15px;
      line-height: 15px;
      &-v2 {
        font-size: 10px;
        padding-right: 15px;
        line-height: 13px;
        color: #8c8c8c;
      }
    }
    &__phone-cont {
      flex-flow: column;
      padding-top: 68px !important;
    }
    &__input--prefix {
      padding-right: 0 !important;
    }
    &__pincode {
      &-cont {
        padding-right: 0;
        // padding-top: 56px;
        // padding-bottom: 32px;
        // display: flex;
        justify-content: center;
      }
      &__number {
        max-width: 56px;
        // height: 42px !important;
        // font-weight: bold;
        // color: #4d4d4d;
        // font-size: 22px;
        & input {
          // text-align: center;
        }
      }
    }
  }
}
</style>
