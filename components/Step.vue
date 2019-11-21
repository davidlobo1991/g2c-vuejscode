<template>
  <div class="o-wrapper o-wrapper--xl">
    <div class="o-layout o-layout--gutter-l">
      <navigation-steps ref="NavigationSteps" />
      <div class="o-layout__item u-2/3 u-pdt-h u-align-left">
        <div class="c-info u-pdh-8xh">
          <div class="c-info__text">
            These words are your Security Key. They will be required to access
            your account and wallet.<br />
            Without them all your data and funds will become inaccessible
            forever.<br />NetworkSV do not have access nor can’t restore your
            Security Key.<br />Write down these 12 words in that order in a
            piece of paper and keep them in a safe place.
          </div>
          <div class="c-info__secretword u-align-center u-pdv-xxxh">
            sudden awkward slam gown vapor change meat cable hover section cart
          </div>
          <div class="c-info__responsability u-flex u-flex-between">
            <div class="c-info__responsability--text">
              <b>Responsability Disclaimer</b><br />
              I have writen down these 12 words and I am resposable to keep them
              in a safe place.
            </div>
            <div class="c-info__responsability--toggle">
              <v-switch></v-switch>
            </div>
          </div>
          <div class="c-info__button u-align-right">
            <v-btn depressed disabled large>Next</v-btn>
          </div>
        </div>
      </div>
    </div>

    <button @click="navigationPrevious">
      Previous
    </button>
    <button @click="navigationNext">
      Next
    </button>
    {{ step }}

    <div v-show="1 === step">
      step 1
    </div>
    <div v-show="2 === step">
      step 2
    </div>
    <div v-show="3 === step">
      step 3
    </div>
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
      step: 1
    }
  },
  watch: {
    step(value) {
      console.info(value)
      this.$refs.NavigationSteps.setStep(value)

      this.$emit('enviarAlPadre', value)
    }
  },
  methods: {
    navigationNext() {
      this.step = this.step + 1
    },
    navigationPrevious() {
      this.step = this.step - 1
    }
  }
}
</script>

<style lang="scss" scoped>
.v-btn {
  text-transform: capitalize;
  letter-spacing: 0px;
  height: 54px;
  width: 118px;
}
.v-icon {
  font-size: 36px;
}
.mdi-check-circle-outline {
  color: #18de82;
}

.c-info {
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
    width: 554px;
  }
  &__responsability {
    color: #4d4d4d;
    font-family: Roboto;
    font-size: 15px;
    line-height: 19px;
  }
  &__button {
    padding-top: 60px;
  }
}
</style>
