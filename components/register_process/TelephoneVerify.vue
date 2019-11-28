<template>
  <div class="c-info">
    <div class="c-info__text">
      We need to verify your phone number to create your wallet.
    </div>
    <div class="o-layout c-info__phone-cont u-align-center u-pdt-xxxh">
      <v-select
        :items="prefixes"
        :rules="[rules.required, rules.counter]"
        placeholder="Country"
        outlined
        height="64px"
        class="o-layout__item u-1/1 u-1/4@m u-pdr-s c-info__input--prefix"
      ></v-select>
      <v-text-field
        :rules="[rules.required, rules.counter]"
        placeholder="123 456 789"
        outlined
        height="64px"
        class="o-layout__item u-1/1 u-1/4@m"
        type="number"
      ></v-text-field>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TelephoneVerify',
  data() {
    return {
      prefixes: ['+34', '+44', '+33'],
      rules: {
        required: (value) => !!value || 'Required'
        // counter: (value) => value.length <= 9 || 'Wrong phone number'
      }
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
  &__input--prefix {
    max-width: 148px;
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
    &__phone-cont {
      flex-flow: column;
      padding-top: 68px !important;
    }
    &__input--prefix {
      padding-right: 0 !important;
    }
  }
}
</style>
