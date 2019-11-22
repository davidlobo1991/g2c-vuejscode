<template>
  <div class="o-wrapper o-wrapper--xl">
    <div class="o-layout o-layout--gutter-l">
      <div class="o-layout__item  u-1/3 u-pdt-h">
        <navigation-steps ref="NavigationSteps" />
      </div>
      <div class="o-layout__item u-2/3 u-pdt-h u-align-left">
        <div v-show="1 === step">
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
                <v-switch></v-switch>
              </div>
            </div>
          </div>
        </div>
        <div v-show="2 === step">
          <div class="c-info u-pdh-8xh">
            <div class="c-info__text">
              We need to verify your phone number to create your wallet.
            </div>
            <div class="u-align-center u-pdv-xxxh">
              <div class="o-layout o-layout--gutter-l">
                <v-select
                  :items="items"
                  placeholder="Country"
                  outlined
                  class="o-layout__item u-1/4"
                ></v-select>
                <v-text-field
                  placeholder="123 456 789"
                  outlined
                  class="o-layout__item u-3/4"
                ></v-text-field>
              </div>
            </div>
          </div>
        </div>
        <div v-show="3 === step">
          <div class="c-info u-pdh-8xh">
            <div class="c-info__text">
              Please enter the code you’ve receive in the phone number
              +34xxxxxxxxx965
            </div>
            <div class="u-align-center u-pdv-xxxh o-layout o-layout--gutter-l">
              <v-text-field
                class="c-info__pincode__number"
                outlined
              ></v-text-field>
              <v-text-field
                class="c-info__pincode__number"
                outlined
              ></v-text-field>
              <v-text-field
                class="c-info__pincode__number"
                outlined
              ></v-text-field>
              <v-text-field
                class="c-info__pincode__number"
                outlined
              ></v-text-field>
              <v-text-field
                class="c-info__pincode__number"
                outlined
              ></v-text-field>
            </div>
            <div class="c-info__responsability u-flex u-flex-between">
              <div class="c-info__responsability--text">
                Al hacer clic en Registrarte, aceptas nuestras Condiciones.
                Obtén más información sobre cómo recopilamos, usamos y
                compartimos tu información en la Política de datos, así como el
                uso que hacemos de las cookies y tecnologías similares en
                nuestra Política de cookies. Es posible que te enviemos
                notificaciones por SMS que podrás desactivar cuando quieras.
              </div>
            </div>
          </div>
        </div>
        <div class="c-info__button u-align-right">
          <v-btn depressed disabled large>Next</v-btn>
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
  &__pincode {
    &__number {
      max-width: 64px;
      height: 64px !important;
    }
  }
}
</style>
