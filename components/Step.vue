<template>
  <div class="o-wrapper o-wrapper--xl">
    <div class="o-layout o-layout--gutter-l">
      <div class="o-layout__item  u-1/3 u-pdt-h">
        <div class="c-step">
          <div class="c-step__logo">
            <img src="@/assets/svg/networksv_logo.svg" />
          </div>
          <div class="c-step__steps">
            <div class="c-steps">
              <v-icon>mdi-check-circle-outline</v-icon>
              Username
            </div>
            <div class="c-steps">
              <v-icon>mdi-checkbox-blank-circle-outline</v-icon>
              Security Key
            </div>
          </div>
        </div>
      </div>
      <div class="o-layout__item u-2/3 u-pdt-h u-align-left">
        <div class="c-info u-pdh-8xh">
          <div class="c-info__text">
            These words are your Security Key.
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
  </div>
</template>

<script>
export default {
  name: 'Login',
  props: {}
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
.c-step {
  &__logo {
    padding-bottom: 120px;
  }
}
.c-steps {
  color: #8c8c8c;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  line-height: 21px;
  padding-bottom: 40px;
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
