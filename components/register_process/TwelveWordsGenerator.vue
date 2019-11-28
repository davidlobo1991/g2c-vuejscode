<template>
  <div class="c-info u-pdt-l">
    <div class="c-info__text">
      Own your data and money.<br />
      These words are your Security Key. They will be required to access your
      account and wallet.<br />
      Without them all your data and funds will become inaccessible forever.<br />NetworkSV
      do not have access nor can’t restore your Security Key.<br />Write down
      these 12 words in that order in a piece of paper and keep them in a safe
      place.
    </div>
    <div class="c-info__secretword u-align-center u-pdv-xxxh">
      sudden awkward slam gown vapor change meat cable hover section cart
    </div>
    <div class="c-info__responsability u-flex u-flex-between">
      <div class="c-info__responsability--text">
        <b>Responsability Disclaimer</b><br />
        I have writen down these 12 words and I am resposable to keep them in a
        safe place.
      </div>
      <div class="c-info__responsability--toggle">
        <v-switch v-on:change="acceptedCheck"></v-switch>
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
  padding-left: 120px;
  padding-right: 120px;
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
    max-width: 554px;
    margin: 0 auto;
  }
  &__responsability {
    color: #4d4d4d;
    font-family: Roboto;
    font-size: 15px;
    line-height: 19px;
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
