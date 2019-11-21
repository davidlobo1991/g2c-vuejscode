<template>
  <section id="NavigationSteps" ref="NavigationSteps">
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
          <div class="c-steps">
            <v-icon>mdi-checkbox-blank-circle-outline</v-icon>
            Phone Verification
          </div>
          <h1>{{ step }}</h1>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'NavigationSteps',
  data() {
    return {
      step: 0
    }
  },
  methods: {
    setStep(value) {
      this.step = value
    }
  }
}
</script>

<style lang="scss" scoped>
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
</style>
