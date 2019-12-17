<template>
  <div class="c-info">
    <div class="c-info__text">
      <span class="c-info__text--title">Own Your Data and Money.</span>
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
    <div class="c-info__secretword u-align-center u-pdv-xxxh">
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
          <v-switch v-on:change="acceptedCheck" color="#376EFA"></v-switch>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      responsabilityCheck: false
    }
  },
  methods: {
    acceptedCheck(value) {
      this.responsabilityCheck = !this.responsabilityCheck
      this.$emit('CheckResponsability', value)
    }
  }
}
</script>

<style lang="scss" scoped>
.c-info {
  color: #4d4d4d;
  padding-left: 120px;
  padding-right: 120px;
  font-size: 22px;
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
    &--highlighted {
      display: block;
      font-weight: 500;
      padding-top: 20px;
    }
  }
  &__secretword {
    margin: 0 auto;
    font-size: 42px;
    font-weight: 500;
    line-height: 55px;
    text-align: center;
    max-width: 900px;
  }
  &__responsability {
    // color: #4d4d4d;
    // font-family: Roboto;
    width: 95%;
    margin: 00 auto;
    &--title {
      font-weight: 500;
    }
    &--toggle {
      transform: scale(1.2);
    }
  }
}
@media screen and (max-width: 899px) {
  .c-info {
    padding-left: 17px;
    padding-right: 17px;
    padding-top: 0 !important;
    &__text {
      padding-top: 0 !important;
      font-size: 12px;
      line-height: 15px;
    }
    &__secretword {
      padding-top: 33px !important;
      padding-bottom: 33px !important;
      font-size: 21px;
      line-height: 26px;
    }
    &__responsability--text {
      font-size: 12px;
      padding-right: 15px;
      line-height: 15px;
    }
  }
}
</style>
