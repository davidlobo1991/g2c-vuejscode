<template>
  <div class="c-info">
    <span class="c-info__text--title">
      Phone Validation Code
    </span>
    <div class="c-info__text">
      Please enter the code you’ve receive in the phone number +34xxxxxxxxx965
    </div>
    <div>
      <div class="c-info__pincode-cont">
        <v-text-field
          id="inputNumberBox1"
          :height="pinInputHeight"
          class="c-info__pincode__number u-mrh-xs"
          outlined
          maxlength="1"
          type="number"
        ></v-text-field>
        <v-text-field
          id="inputNumberBox2"
          :height="pinInputHeight"
          class="c-info__pincode__number u-mrh-xs"
          outlined
          maxlength="1"
          type="number"
        ></v-text-field>
        <v-text-field
          id="inputNumberBox3"
          :height="pinInputHeight"
          class="c-info__pincode__number u-mrh-xs"
          outlined
          maxlength="1"
          type="number"
        ></v-text-field>
        <v-text-field
          id="inputNumberBox4"
          :height="pinInputHeight"
          class="c-info__pincode__number u-mrh-xs"
          outlined
          maxlength="1"
          type="number"
        ></v-text-field>
        <v-text-field
          id="inputNumberBox5"
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
      </div>
    </div>
    <div class="c-info__responsability u-flex u-flex-between">
      <div class="c-info__responsability--text-v2 u-pdt-xxxl">
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
  data() {
    return {
      viewportWidth: 0,
      pinInputHeight: '64px'
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

    const inputNumberBox1 = document.getElementById('inputNumberBox1')
    const inputNumberBox2 = document.getElementById('inputNumberBox2')
    const inputNumberBox3 = document.getElementById('inputNumberBox3')
    const inputNumberBox4 = document.getElementById('inputNumberBox4')
    const inputNumberBox5 = document.getElementById('inputNumberBox5')

    inputNumberBox1.onkeyup = function(event) {
      if (this.value.length === 1 && checkIfKeyPressedIsValid(event.keyCode)) {
        inputNumberBox2.focus()
      }
    }

    inputNumberBox2.onkeyup = function(event) {
      if (this.value.length === 1 && checkIfKeyPressedIsValid(event.keyCode)) {
        inputNumberBox3.focus()
      }
    }

    inputNumberBox3.onkeyup = function(event) {
      if (this.value.length === 1 && checkIfKeyPressedIsValid(event.keyCode)) {
        inputNumberBox4.focus()
      }
    }

    inputNumberBox4.onkeyup = function(event) {
      if (this.value.length === 1 && checkIfKeyPressedIsValid(event.keyCode)) {
        inputNumberBox5.focus()
      }
    }

    function checkIfKeyPressedIsValid(keyCode) {
      const skipKeys = [
        37, // left
        38, // up
        39, // right
        40 // down
      ]

      // return skipKeys.includes(keyCode) > -1 ? false : true
      return !(skipKeys.includes(keyCode) > -1)
    }
  },
  destroyed() {
    window.removeEventListener('resize', this.onWindowSizeChange)
  },
  methods: {
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
  color: #4d4d4d;
  font-size: 22px;
  text-align: center;
  // width: 30%;
  margin: 0 auto;
  font-size: 20px;
  // text-align: center;
  max-width: 54%;
  &__text {
    color: #4d4d4d;
    font-family: Roboto;
    line-height: 40px;
    text-align: center;
    &--title {
      display: block;
      font-size: 25px;
      font-weight: 500;
      padding-bottom: 40px;
    }
  }
  &__button {
    // padding-top: 60px;
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
      & input {
        text-align: center;
      }
    }
  }
}
@media screen and (max-width: 899px) {
  .c-info {
    padding-left: 17px;
    padding-right: 17px;
    padding-top: 0 !important;
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
      &-v2 {
        font-size: 10px;
        padding-right: 15px;
        line-height: 13px;
        color: #8c8c8c;
      }
    }
    &__pincode {
      &-cont {
        padding-right: 0;
        justify-content: center;
      }
      &__number {
        max-width: 56px;
        & input {
        }
      }
    }
  }
}
</style>
