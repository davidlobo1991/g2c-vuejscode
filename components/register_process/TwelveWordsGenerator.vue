<template>
  <div class="c-info">
    <div class="c-info__text">
      <span class="c-info__text--title">Own your data and money.</span>
      These words are your Security Key. They will be required to access your
      account and wallet.<br />
      Without them all your data and funds will become inaccessible forever.
      <span class="c-info__text--highlighted">
        NetworkSV does not have access to your Security Key and cannot restore
        it.<br />
        Write down these 12 words in that order in a piece of paper and keep
        them in a safe place.
      </span>
    </div>
    <div v-html="generatedWords" class="c-info__secretword u-align-center">
      sudden awkward slam gown vapor change meat cable hover section cart
    </div>
    <div class="c-info__responsability">
      <div class="c-info__responsability--title">
        Responsability Disclaimer
      </div>
      <div class="u-flex u-flex-between u-flex-middle">
        <div class="c-info__responsability--text">
          I have writen down these 12 words and I am resposible to keeping them
          in a safe place.
        </div>
        <div class="c-info__responsability--toggle">
          <v-switch v-on:change="acceptedCheck" color="#0086ff"></v-switch>
        </div>
      </div>
    </div>
    <div :style="cssProps" class="c-info__button-cont u-align-right">
      <v-btn
        :disabled="responsabilityCheck === false"
        @click="navigationNext"
        depressed
        x-large
        color="#0086ff"
        class="c-info__button"
      >
        Next
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      generatedWords: null,
      responsabilityCheck: false
    }
  },
  mounted() {
    this.generatedWords = this.getRandomWords()
    this.$store.commit('register/SET_WORDS', this.generatedWords)
  },
  methods: {
    acceptedCheck(value) {
      this.responsabilityCheck = !this.responsabilityCheck
      this.$emit('CheckResponsability', value)
    },
    navigationNext() {
      this.$emit('nextStep')
    }
  }
}
</script>

<style lang="scss" scoped>
.c-info {
  color: #4d4d4d;
  padding-left: 120px;
  padding-right: 120px;
  font-size: 20px;
  &__text {
    color: #4d4d4d;
    font-family: Roboto;
    line-height: 30px;
    text-align: center;
    &--title {
      display: block;
      font-size: 25px;
      font-weight: 500;
      padding-bottom: 40px;
    }
    &--highlighted {
      display: block;
      font-weight: 500;
      padding-top: 20px;
    }
  }
  &__secretword {
    margin: 0 auto;
    font-size: 40px;
    font-weight: 500;
    line-height: 55px;
    text-align: center;
    max-width: 900px;
    padding: 60px 0;
  }
  &__responsability {
    // color: #4d4d4d;
    // font-family: Roboto;
    width: 95%;
    margin: 00 auto;
    &--title {
      font-weight: 500;
    }
    &--text {
      padding-right: 20px;
    }
    &--toggle {
      transform: scale(1.2);
    }
  }
}
@media screen and (max-width: 1500px) {
  .c-info {
    font-size: 16px;
    line-height: unset;
    padding: 0 80px;
    &__text {
      line-height: unset;
      &--title {
        font-size: 18px;
        padding-bottom: 10px;
      }
    }
    &__secretword {
      font-size: 30px;
      line-height: unset;
      padding: 44px 0;
      max-width: 900px;
    }
  }
}
@media screen and (max-width: 768px) {
  .c-info {
    padding: 0;

    &__text {
      padding-top: 0 !important;
      font-size: 12px;
      line-height: 15px;

      &--title {
        font-size: 16px;
        padding-bottom: 7px;
      }
    }

    &__secretword {
      padding-top: 33px !important;
      padding-bottom: 33px !important;
      font-size: 21px;
      line-height: 26px;
    }

    &__responsability {
      width: auto;
      &--text {
        font-size: 12px;
        padding-right: 15px;
        line-height: 15px;
      }
      &--title {
        font-size: 15px;
      }
    }
  }
}
</style>
