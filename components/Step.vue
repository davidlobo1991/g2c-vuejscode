<template>
  <div class="c-register__wrapper">
    <div class="c-register__left-side">
      <navigation-steps ref="NavigationSteps" />
    </div>
    <div class="c-register__right-side">
      <div v-show="1 === step">
        <RegisterEmail />
      </div>
      <div v-show="2 === step">
        <TwelveWordsGenerator
          ref="TwelveWordsGenerator"
          @CheckResponsability="getCheck"
        />
      </div>
      <div v-show="3 === step">
        <TelephoneVerify />
      </div>
      <div v-show="4 === step">
        <PinVerify />
      </div>
      <div :style="cssProps" class="c-info__button-cont u-align-right">
        <v-btn
          v-bind:disabled="
            responsabilityCheck == false && step == 2 ? true : false
          "
          v-if="step != 4"
          @click="navigationNext"
          depressed
          x-large
          color="primary"
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
  props: {},
  data() {
    return {
      step: 1,
      responsabilityCheck: false,
      // pinInputHeight: '64px',
      viewportWidth: 0,
      variableWidth: 27
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

      if (value === 2) {
        this.variableWidth = 12
      } else {
        this.variableWidth = 27
      }
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
    // if (this.viewportWidth < 900) {
    //   this.pinInputHeight = '56px'
    // }
  },
  destroyed() {
    window.removeEventListener('resize', this.onWindowSizeChange)
  },
  methods: {
    getCheck(value) {
      this.responsabilityCheck = value
    },
    navigationNext() {
      this.step = this.step + 1
    },
    navigationPrevious() {
      this.step = this.step - 1
    },
    onWindowSizeChange() {
      this.viewportWidth = this.getWidth()
    },
    getWidth() {
      return Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0
      )
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
  &__left-side {
    width: 35%;
    background-color: #f5f8fd;
    box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.1);
    padding-top: 5%;
    display: flex;
    justify-content: center;
  }
  &__right-side {
    width: 65%;
    padding-top: 5%;
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
  }
}
@media screen and (max-width: 899px) {
  .u-pdt-custom {
    padding-top: 0 !important;
  }
  .c-info {
    &__wrapper {
      padding: 28px 0 0 0 !important;
    }
    &__button-cont {
      padding-right: 0;
      padding-top: 35px;
      text-align: center !important;
      & button {
        min-width: 92% !important;
      }
    }
  }
}
</style>
