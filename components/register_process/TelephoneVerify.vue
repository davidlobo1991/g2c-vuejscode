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
        outlined
        label="Country"
        class="o-layout__item u-1/1 u-1/4@m c-info__input--prefix c-test"
      >
      </v-select>
      <v-text-field
        outlined
        class="o-layout__item u-1/1 u-1/4@m c-info__input--phone c-test"
        label="Phone number"
        type="number"
      >
      </v-text-field>
    </div>
    <div class="c-info__responsability">
      <div class="c-info__responsability--title">
        I'm a UK resident
        <v-tooltip right color="#25273A" max-width="270px">
          <template v-slot:activator="{ on }">
            <v-icon v-on="on" class="c-info__more-info">
              mdi-help-circle
            </v-icon>
          </template>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id
            rutrum urna, et sodales arcu.
          </span>
        </v-tooltip>
      </div>
      <div class="u-flex u-flex-between u-flex-middle">
        <div class="c-info__responsability--text">
          I'll let NetworkSV (a UK Company) charge me VAT.
        </div>
        <div class="c-info__responsability--toggle">
          <v-checkbox color="#376EFA"> </v-checkbox>
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
      prefixes: ['(+34) Spain', '(+44) United Kingdom', '(+33) France']
    }
  }
}
</script>

<style lang="scss">
.c-info__input--prefix .v-input__control .v-input__slot {
  font-size: 20px;
  line-height: 23px !important;
  height: 90px;
}
.c-info__input--prefix
  .v-input__control
  .v-input__slot
  .v-select__slot
  .v-select__selections {
  line-height: 23px;
}
.c-info__input--prefix
  .v-input__control
  .v-input__slot
  .v-select__slot
  .v-label {
  font-size: 23px;
  top: 34px !important;
}
.c-info__input--prefix
  .v-input__control
  .v-input__slot
  .v-select__slot
  .v-label--active {
  transform: translateY(-40px) scale(0.75) !important;
}
.c-info__input--phone .v-input__control .v-input__slot {
  font-size: 20px;
  line-height: 23px !important;
  height: 90px;
}
.c-info__input--phone
  .v-input__control
  .v-input__slot
  .v-text-field__slot
  .v-label {
  font-size: 23px;
  top: 34px !important;
}
.c-info__input--phone
  .v-input__control
  .v-input__slot
  .v-text-field__slot
  .v-label--active {
  transform: translateY(-40px) scale(0.75) !important;
}
@media screen and (max-width: 1500px) {
  .c-info__input--prefix .v-input__control .v-input__slot {
    font-size: 16px;
    line-height: 16px !important;
    height: 64px;
  }
  .c-info__input--prefix
    .v-input__control
    .v-input__slot
    .v-select__slot
    .v-select__selections {
    /*line-height: 23px;*/
  }
  .c-info__input--prefix
    .v-input__control
    .v-input__slot
    .v-select__slot
    .v-label {
    font-size: 16px;
    top: 22px !important;
  }
  .c-info__input--prefix
    .v-input__control
    .v-input__slot
    .v-select__slot
    .v-label--active {
    transform: translateY(-28px) scale(0.75) !important;
  }
  .c-info__input--phone .v-input__control .v-input__slot {
    height: 64px;
    font-size: 16px;
    /*line-height: 23px !important;*/
  }
  .c-info__input--phone
    .v-input__control
    .v-input__slot
    .v-text-field__slot
    .v-label {
    font-size: 16px;
    top: 22px !important;
  }
  .c-info__input--phone
    .v-input__control
    .v-input__slot
    .v-text-field__slot
    .v-label--active {
    transform: translateY(-28px) scale(0.75) !important;
  }
}
@media screen and (max-width: 768px) {
  .c-info__input--prefix .v-input__control .v-input__slot {
    font-size: 17px;
    /*line-height: 17px !important;*/
    height: 46px;
  }
  .c-info__input--prefix
    .v-input__control
    .v-input__slot
    .v-select__slot
    .v-select__selections {
    /*line-height: 23px;*/
  }
  .c-info__input--prefix
    .v-input__control
    .v-input__slot
    .v-select__slot
    .v-label {
    font-size: 17px;
    top: 14px !important;
  }
  .c-info__input--prefix
    .v-input__control
    .v-input__slot
    .v-select__slot
    .v-label--active {
    transform: translateY(-25px) scale(0.75) !important;
  }
  .c-info__input--phone .v-input__control .v-input__slot {
    height: 46px;
    font-size: 17px;
    /*line-height: 23px !important;*/
  }
  .c-info__input--phone
    .v-input__control
    .v-input__slot
    .v-text-field__slot
    .v-label {
    font-size: 17px;
    top: 14px !important;
  }
  .c-info__input--phone
    .v-input__control
    .v-input__slot
    .v-text-field__slot
    .v-label--active {
    transform: translateY(-26px) scale(0.75) !important;
  }
}
</style>
<style lang="scss" scoped>
.c-info {
  color: #4d4d4d;
  font-size: 22px;
  width: 45%;
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
      padding-bottom: 10px;
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
      padding-right: 15px;
    }
    &--toggle {
      transform: scale(1.2);
    }
  }
  &__phone-cont {
    padding-top: 40px;
    padding-bottom: 40px;
  }
  &__input {
    &--prefix {
      max-width: 230px;
      padding-right: 16px;
    }
    &--phone {
      max-width: 325px;
    }
  }
  &__more-info {
    color: #e2edfa;
    background-color: #0087ff;
    border-radius: 50px;
    height: 20px;
    width: 20px;
  }
}
@media screen and (max-width: 1500px) {
  .c-info {
    font-size: 16px;
    line-height: unset;
    padding: 0 80px;
    width: 67%;
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
@media screen and (max-width: 1200px) {
  .c-info {
    width: 100%;
  }
}
@media screen and (max-width: 768px) {
  .c-info {
    /*padding-left: 17px;*/
    /*padding-right: 17px;*/
    /*padding-top: 0 !important;*/
    padding: 0;
    width: 100%;
    &__text {
      padding-top: 0 !important;
      font-size: 12px;
      line-height: 15px;
      &--title {
        font-size: 16px;
      }
    }
    &__phone-cont {
      /*flex-flow: column;*/
      /*padding-top: 68px !important;*/
    }
    &__input {
      &--prefix {
        max-width: none;
        padding: 0;
      }
      &--phone {
        max-width: none;
      }
    }
    &__responsability {
      &--title {
        font-size: 14px;
      }
      &--text {
        font-size: 12px;
      }
    }
  }
}
</style>
