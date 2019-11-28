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
          <TwelveWordsGenerator
            ref="TwelveWordsGenerator"
            @CheckResponsability="getCheck"
          />
        </div>
        <div v-show="2 === step">
          <TelephoneVerify />
        </div>
        <div v-show="3 === step">
          <PinVerify />
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
import NavigationSteps from '~/components/register_process/NavigationSteps'
import TwelveWordsGenerator from '~/components/register_process/TwelveWordsGenerator'
import TelephoneVerify from '~/components/register_process/TelephoneVerify'
import PinVerify from '~/components/register_process/PinVerify'

export default {
  name: 'Login',
  components: {
    NavigationSteps,
    TwelveWordsGenerator,
    TelephoneVerify,
    PinVerify
  },
  props: {},
  data() {
    return {
      step: 1,
      responsabilityCheck: false,
      pinInputHeight: '64px',
      viewportWidth: 0
    }
  },
  watch: {
    step(value) {
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

<style lang="scss" scoped>
.c-info {
  &__button {
    padding-right: var(--space-8xh);
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
    &__button {
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
