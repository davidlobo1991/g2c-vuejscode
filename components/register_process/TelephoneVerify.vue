<template>
  <div class="c-info">
    <div class="c-info__text">
      <span class="c-info__text--title">
        Trusted Accounts
      </span>
      We need to verify your phone number to create your wallet.
    </div>
    <div class="o-layout c-info__phone-cont">
      <v-select
        :items="prefixes"
        :rules="[rules.required, rules.counter]"
        outlined
        height="64px"
        label="Country"
        class="o-layout__item u-1/1 u-1/4@m u-pdr-s c-info__input--prefix"
      ></v-select>
      <v-text-field
        :rules="[rules.required, rules.counter]"
        outlined
        height="64px"
        class="o-layout__item u-1/1 u-1/4@m c-info__input--phone"
        label="Phone number"
        type="number"
      ></v-text-field>
    </div>
    <div class="c-info__responsability">
      <div class="c-info__responsability--title">I'm a UK resident</div>
      <div class="u-flex u-flex-between u-flex-middle">
        <div class="c-info__responsability--text">
          I'll let NetworkSV (a UK Company) charge me VAT.
        </div>
        <div class="c-info__responsability--toggle">
          <v-checkbox color="#376EFA"></v-checkbox>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TelephoneVerify',
  data() {
    return {
      prefixes: ['Spain (+34)', 'Spain (+44)', 'Spain (+33)'],
      rules: {
        required: (value) => !!value || 'Required'
        // counter: (value) => value.length <= 9 || 'Wrong phone number'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
// .c-info {
//   padding-left: 120px;
//   padding-right: 120px;
//   &__text {
//     padding-top: 30px;
//     color: #4d4d4d;
//     font-family: Roboto;
//     font-size: 16px;
//     line-height: 21px;
//   }
//   &__input--prefix {
//     max-width: 148px;
//   }
// }
.c-info {
  color: #4d4d4d;
  // padding-left: 120px;
  // padding-right: 120px;
  font-size: 22px;
  width: 50%;
  margin: 0 auto;
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
  &__responsability {
    &--title {
      font-weight: 500;
    }
    &--toggle {
      transform: scale(1.2);
    }
  }
  &__phone-cont {
    padding-top: 40px;
    justify-content: center;
  }
  &__input {
    &--prefix {
      max-width: 200px;
    }
    &--phone {
      max-width: 275px;
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
