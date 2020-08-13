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
        v-model="registerPrefix"
        :hide-details="true"
        item-text="text"
        item-value="id"
        outlined
        label="Country"
        class="o-layout__item u-1/1 u-1/4@m c-info__input--prefix"
      >
      </v-select>
      <v-text-field
        v-model="registerPhone"
        :hide-details="handleValidationPhoneErrors().length === 0"
        :error-messages="handleValidationPhoneErrors() || []"
        outlined
        class="o-layout__item u-1/1 u-1/4@m c-info__input--phone"
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
          <v-checkbox
            :hide-details="true"
            v-model="registerUkResident"
            value="1"
            color="#376EFA"
          >
          </v-checkbox>
        </div>
      </div>
    </div>
    <div class="c-info__button-cont u-align-right">
      <v-btn
        @click="navigationNext"
        :loading="loading"
        depressed
        x-large
        color="#0086ff"
        class="c-info__button rw-normal-text white--text"
      >
        Next
      </v-btn>
    </div>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'TelephoneVerify',
  data() {
    return {
      prefixes: [
        { id: '+34', text: '(+34) Spain' },
        { id: '+44', text: '(+44) United Kingdom' },
        { id: '+33', text: '(+33) France' }
      ],
      registerPhone: null,
      registerPrefix: null,
      registerUkResident: 0,
      errorValidation: null,
      loading: false
    }
  },
  computed: {
    cssProps() {
      return {
        // '--variable-wrapper': this.variableWidth + '%'
      }
    }
  },
  validations: {
    registerPhone: { required }
  },
  watch: {
    registerPhone(value) {
      this.$emit('registerPhone', this.registerPhone)
    },
    registerPrefix(value) {
      this.$emit('registerPrefix', this.registerPrefix)
    },
    registerUkResident(value) {
      this.$emit('registerUkPrefix', this.registerUkResident)
    }
  },
  methods: {
    async navigationNext() {
      this.loading = true
      this.$v.$touch()

      if (this.$v.$invalid) {
        this.loading = false
        return
      }
      const checkPhone = await this.checkPhoneApi()

      if (!checkPhone.error) {
        const validation = await this.sendMobileValidationCode()

        if (!validation.error) {
          sessionStorage.verifyServiceId = validation.data.verifyServiceId
          this.$emit('nextStep')
          this.$mixpanel.track('Register Account Phone Inserted')
        } else {
          this.loading = false
          this.errorValidation = this.$i18n.t('register.error.phone.sending')
          this.$v.$touch()
        }
      } else {
        // eslint-disable-next-line no-console
        this.loading = false
        this.resendEmail = false
        this.errorValidation = this.$i18n.t('register.error.phone.exists')
        this.$v.$touch()
      }
    },
    handleValidationPhoneErrors() {
      const errors = []
      if (!this.$v.registerPhone.$dirty) {
        return errors
      }

      if (!this.$v.registerPhone.required) {
        errors.push(this.$i18n.t('register.error.phone.required'))
      }

      if (this.errorValidation) {
        errors.push(this.errorValidation)
      }

      return errors
    }
  }
}
</script>

<style lang="scss" scoped>
.rw-normal-text {
  text-transform: none;
}
.c-info {
  color: #4d4d4d;
  font-size: 22px;
  max-width: 572px;
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
    padding-bottom: 26px;
    &--title {
      font-weight: 500;
      padding-right: 15px;
    }
    &--toggle {
      transform: scale(1.2);
      & .v-input--selection-controls {
        margin-top: 0;
      }
    }
  }
  &__phone-cont {
    padding-top: 40px;
    padding-bottom: 40px;
  }
  &__input {
    &--prefix {
      max-width: 230px;
      padding-right: 16px !important;
      padding-bottom: 12px !important;
      ::v-deep {
        .v-input__control .v-input__slot {
          font-size: 20px;
          line-height: 23px !important;
          height: 90px;
          & .v-select__slot {
            & .v-select__selections {
              line-height: 23px;
            }
            & .v-label {
              font-size: 23px;
              top: 36px !important;
            }
            & .v-label--active {
              transform: translateY(-40px) scale(0.75) !important;
            }
          }
        }
      }
    }
    &--phone {
      max-width: 325px;

      ::v-deep {
        .v-input__control .v-input__slot {
          font-size: 20px;
          line-height: 23px;
          min-height: 90px;
          & .v-text-field__slot {
            .v-label {
              font-size: 23px;
              top: 36px !important;
            }
            & .v-label--active {
              transform: translateY(-40px) scale(0.75) !important;
            }
          }
        }
      }
    }
  }
  &__more-info {
    color: #e2edfa !important;
    background-color: #0087ff;
    border-radius: 50px;
    height: 20px;
    width: 20px;
  }
  &__button {
    min-height: 90px;
    width: 180px;
  }
}
@media screen and (max-width: 1500px) {
  .c-info {
    font-size: 16px;
    line-height: unset;
    padding: 0;
    max-width: 418px;
    &__text {
      line-height: unset;
      &--title {
        font-size: 18px;
        padding-bottom: 10px;
      }
    }
    &__input {
      &--prefix {
        ::v-deep {
          .v-input__control .v-input__slot {
            font-size: 16px;
            line-height: 16px !important;
            height: 64px;
            & .v-select__slot {
              & .v-label {
                font-size: 16px;
                top: 22px !important;
              }
              & .v-label--active {
                transform: translateY(-28px) scale(0.75) !important;
              }
            }
          }
        }
      }
      &--phone {
        ::v-deep {
          .v-input__control .v-input__slot {
            font-size: 16px;
            min-height: 64px;
            & .v-text-field__slot {
              .v-label {
                font-size: 16px;
                top: 22px !important;
              }
              & .v-label--active {
                transform: translateY(-28px) scale(0.75) !important;
              }
            }
          }
        }
      }
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
    }
    &__input {
      &--prefix {
        max-width: none;
        padding-left: 0;
        padding-right: 0;

        ::v-deep {
          .v-input__control .v-input__slot {
            font-size: 17px;
            height: 46px !important;
            min-height: 46px !important;
            & .v-select__slot {
              & .v-label {
                font-size: 17px;
                top: 14px !important;
              }
              & .v-label--active {
                transform: translateY(-21px) scale(0.75) !important;
              }
            }
          }
        }
      }
      &--phone {
        max-width: none;
        ::v-deep {
          .v-input__control .v-input__slot {
            font-size: 17px;
            min-height: 46px !important;
            & .v-text-field__slot {
              .v-label {
                font-size: 17px;
                top: 14px !important;
              }
              & .v-label--active {
                transform: translateY(-26px) scale(0.75) !important;
              }
            }
          }
        }
      }
    }
    &__responsability {
      &--title {
        font-size: 14px;
      }
      &--text {
        font-size: 12px;
      }
      &--toggle {
        transform: none;
      }
    }
    &__button {
      flex-flow: column;
      align-items: flex-start;
      width: 100%;
      min-height: 46px;
      & button {
        min-width: 100% !important;
      }
    }
  }
}
</style>
