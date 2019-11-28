<template>
  <section id="NavigationSteps" ref="NavigationSteps">
    <div class="c-step">
      <div class="c-step__logo">
        <!-- <img src="@/assets/svg/networksv_logo.svg" /> -->
        <nuxt-link
          :src="require('@/assets/svg/networksv_logo.svg')"
          tag="img"
          to="/"
        />
      </div>
      <div class="c-step__steps">
        <div class="c-steps">
          <v-icon>mdi-check-circle-outline</v-icon>
          Username
        </div>
        <div v-if="step >= 1" class="c-steps">
          <v-icon v-if="step < 2">mdi-checkbox-blank-circle-outline</v-icon>
          <v-icon v-if="step >= 2">mdi-check-circle-outline</v-icon>
          <span v-bind:class="{ 'c-steps--current': step == 1 }">
            Security Key
          </span>
        </div>
        <div v-if="step >= 2" class="c-steps">
          <v-icon>mdi-checkbox-blank-circle-outline</v-icon>
          <!-- <v-icon v-if="step >= 3">mdi-check-circle-outline</v-icon> -->
          <span v-bind:class="{ 'c-steps--current': step >= 2 }">
            Phone Verification
          </span>
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
      step: 1
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
.v-btn {
  text-transform: capitalize;
  letter-spacing: 0px;
  height: 54px;
  width: 118px;
}
.v-icon {
  font-size: 27px;
  padding-right: 25px;
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
  padding-bottom: 30px;
  display: flex;
  align-items: center;
  &--current {
    color: #000;
  }
}
@media screen and (max-width: 899px) {
  .c-step {
    &__logo {
      padding-bottom: 0;
    }
    &__steps {
      display: none;
    }
  }
}
</style>
