<template>
  <div class="o-wrapper o-wrapper--xl u-pdt-xxxl">
    <div class="o-layout o-layout--gutter-l">
      <div class="o-layout__item  u-1/3 u-flex u-flex-center u-pdt-h">
        <navigation-steps ref="NavigationSteps" />
      </div>
      <div class="o-layout__item u-2/3 u-pdt-h u-align-left">
        <div v-show="1 === step">
          <div class="c-info u-pdh-8xh u-pdt-l">
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
                <v-switch v-on:change="acceptedCheck"></v-switch>
              </div>
            </div>
          </div>
        </div>
        <div v-show="2 === step">
          <div class="c-info u-pdh-8xh">
            <div class="c-info__text">
              We need to verify your phone number to create your wallet.
            </div>
            <div class="u-align-center u-pdt-xxxh">
              <div class="o-layout">
                <!-- You can add masking functionality using a 3rd party library such as vue-the-mask. -->
                <v-select
                  :items="prefixes"
                  placeholder="Country"
                  outlined
                  height="64px"
                  :rules="[rules.required, rules.counter]"
                  class="o-layout__item u-1/4 u-pdr-s"
                ></v-select>
                <v-text-field
                  placeholder="123 456 789"
                  outlined
                  height="64px"
                  :rules="[rules.required, rules.counter]"
                  class="o-layout__item u-3/4"
                  type="number"
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
            <div
              class="c-info__pincode-cont u-align-center u-flex u-flex-right u-pdt-xxxl u-pdb-l"
            >
              <v-text-field
                class="c-info__pincode__number c-info__no-arrows u-mrh-xs"
                outlined
                maxlength="1"
                height="64px"
                type="number"
              ></v-text-field>
              <v-text-field
                class="c-info__pincode__number c-info__no-arrows u-mrh-xs"
                outlined
                maxlength="1"
                height="64px"
                type="number"
              ></v-text-field>
              <v-text-field
                class="c-info__pincode__number c-info__no-arrows u-mrh-xs"
                outlined
                maxlength="1"
                height="64px"
                type="number"
              ></v-text-field>
              <v-text-field
                class="c-info__pincode__number c-info__no-arrows u-mrh-xs"
                outlined
                maxlength="1"
                height="64px"
                type="number"
              ></v-text-field>
              <v-text-field
                class="c-info__pincode__number c-info__no-arrows u-mrl-xs"
                outlined
                maxlength="1"
                height="64px"
                type="number"
              ></v-text-field>
            </div>
            <div class="c-info__button u-align-right">
              <v-btn depressed x-large color="primary">
                Sign in
              </v-btn>
            </div>
            <div class="c-info__responsability u-flex u-flex-between">
              <div class="c-info__responsability--text u-pdt-xxxl">
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
      rules: {
        required: (value) => !!value || 'Required'
        // counter: (value) => value.length <= 9 || 'Wrong phone number'
      }
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
    },
    acceptedCheck() {
      this.responsabilityCheck = !this.responsabilityCheck
    },
    tabNextInput() {
      if (this.value.length === this.maxLength) {
        this.nextElementSibling.focus()
      }
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
  &__no-arrows {
    -webkit-appearance: none;
    -moz-appearance: textfield;
  }
}
</style>
