<template>
  <div class="c-info">
    <div class="c-info__text">
      <span class="c-info__text--title">
        Title Text
      </span>
      Text explaining why do we need your email. We won't spam.
    </div>
    <div class="c-info__input-cont">
      <v-text-field
        v-model="registerEmail"
        :hide-details="handleValidationEmailErrors().length === 0"
        :error-messages="handleValidationEmailErrors() || []"
        label="Email"
        outlined
        class="c-info__input"
      >
      </v-text-field>
    </div>
    <div :style="cssProps" class="c-info__button-cont u-align-right">
      <v-btn
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
import { required, email } from 'vuelidate/lib/validators'

export default {
  name: 'RegisterEmail',
  data() {
    return {
      registerEmail: null,
      variableWidth: 27,
      errorValidation: null
    }
  },
  validations: {
    registerEmail: { required, email }
  },
  computed: {
    cssProps() {
      return {
        '--variable-wrapper': this.variableWidth + '%'
      }
    }
  },
  watch: {
    registerEmail(value) {
      this.registerEmail = value
      this.$emit('registerEmail', this.registerEmail)
    }
  },
  methods: {
    async navigationNext() {
      this.$v.$touch()

      if (this.$v.$invalid) {
        return
      }
      const checkEmail = await this.checkEmailApi()

      if (!checkEmail.error) {
        const validation = await this.sendValidationCode()

        if (!validation.error) {
          this.$emit('nextStep')
        } else {
          this.errorValidation = this.$i18n.t('register.error.email.sending')
          this.$v.$touch()
        }
      } else {
        this.resendEmail = false
        this.errorValidation = this.$i18n.t('register.error.email.exists')
        this.$v.$touch()
      }
    },
    handleValidationEmailErrors() {
      const errors = []
      if (!this.$v.registerEmail.$dirty) {
        return errors
      }

      if (!this.$v.registerEmail.required) {
        errors.push(this.$i18n.t('register.error.email.required'))
      }

      if (!this.$v.registerEmail.email) {
        errors.push(this.$i18n.t('register.error.email.format'))
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
.v-text-field__slot {
  font-size: 80px !important;
}
.c-info {
  color: #4d4d4d;
  font-size: 20px;
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
      color: #202739;
    }
  }
  &__input-cont {
    max-width: 46%;
    margin: 0 auto;
    padding: 40px 0 12px 0;
  }
  &__input {
    text-align: center;
    padding-bottom: 20px;
    ::v-deep {
      .v-input__control .v-input__slot {
        font-size: 30px;
        min-height: 90px;
        & .v-text-field__slot {
          .v-label {
            font-size: 23px;
            top: 34px !important;
          }
          & .v-label--active {
            transform: translateY(-40px) scale(0.75) !important;
          }
        }
      }
    }
  }
  &__button-cont {
    padding-right: var(--variable-wrapper);
  }

  &__button {
    width: 180px;
    height: 80px !important;
    font-size: 21px !important;
    color: #fff !important;
    text-transform: none;
  }
}
@media screen and (max-width: 1500px) {
  .c-info {
    &__text {
      padding-top: 0 !important;
      font-size: 15px;
      &--title {
        font-size: 18px;
      }
    }
    &__input-cont {
      /*max-width: none;*/
      /*width: 100%;*/
    }
    &__input {
      ::v-deep {
        .v-input__control .v-input__slot {
          font-size: 15px;
          min-height: 64px;
          & .v-text-field__slot {
            .v-label {
              font-size: 15px;
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
@media screen and (max-width: 768px) {
  .c-info {
    &__text {
      padding-top: 0 !important;
      font-size: 12px;
      line-height: 15px;
      &--title {
        font-size: 18px;
      }
    }
    &__input-cont {
      max-width: none;
      width: 100%;
    }
    &__input {
      ::v-deep {
        .v-input__control .v-input__slot {
          min-height: 46px;
          & .v-text-field__slot {
            .v-label {
              top: 14px !important;
            }
            & .v-label--active {
              transform: translateY(-21px) scale(0.75) !important;
            }
          }
        }
      }
    }
    &__button {
      width: 100%;
      /*width: 118px;*/
      height: 46px !important;
      font-size: 16px;
      color: #fff;
      text-transform: none;
      &-cont {
        padding: 0;
      }
    }
  }
}
</style>
