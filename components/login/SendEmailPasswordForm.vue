<template>
  <div>
    <div class="full-width">
      <form>
        <v-text-field
          v-model="email"
          :hide-details="handleValidationEmailErrors().length === 0"
          :error-messages="handleValidationEmailErrors() || []"
          label="Email"
          outlined
          class="c-login__cont--input u-mrb-s"
          required
        >
        </v-text-field>

        <div class="u-mrb-s c-login__cont--btn">
          <v-btn
            @click="sendRecoverLink"
            :loading="loading"
            depressed
            dark
            color="#0885F6"
          >
            Recover Password
          </v-btn>
        </div>
        <p class="c-login__details">
          Don’t have an account?
          <a @click="showCreateUser">
            Create Account
          </a>
        </p>
        <div v-show="recoverEmailSend" class="c-success">
          <v-icon>mdi-check-circle-outline</v-icon>
          Recover password email send
        </div>
      </form>
    </div>
    <div v-if="errorValidation !== null" class="error--text">
      <p>{{ errorValidation }}</p>
    </div>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'

export default {
  name: 'SendEmailPasswordForm',
  data() {
    return {
      errorValidation: null,
      email: null,
      formLogin: {
        nick: '',
        password: null,
        words: null
      },
      loading: false,
      recoverEmailSend: false
    }
  },

  validations: {
    email: {
      required,
      email
    }
  },
  methods: {
    showCreateUser() {
      this.$emit('showCreateUser')
    },
    showRecoverPassword() {
      this.$emit('showRecoverPassword')
    },
    async sendRecoverLink() {
      this.loading = true

      try {
        this.errorValidation = null

        // Form Validation
        this.$v.$touch()

        if (this.$v.$invalid) {
          return
        }

        const emailSend = await this.sendRecoverPasswordEmail(this.email)

        if (!emailSend.error) {
          this.recoverEmailSend = true
        } else {
          this.errorValidation = this.$i18n.t('login.error.email.exists')
          this.loading = false
          return
        }

        this.loading = false
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error)
        this.errorValidation = this.$i18n.t('login.error.email.error')
        this.loading = false
      }
    },
    handleValidationEmailErrors() {
      const errors = []
      if (!this.$v.email.$dirty) {
        return errors
      }

      if (!this.$v.email.required) {
        errors.push('Email field is required')
      }

      if (!this.$v.email.email) {
        errors.push('Email format')
      }

      return errors
    }
  }
}
</script>

<style lang="scss" scoped>
.full-width {
  width: 100%;
}
.c-success {
  margin-bottom: 15px;
  color: #18de82;
  font-weight: 500;

  .v-icon {
    margin-top: -3px;
    color: #18de82;
  }
}
.c-login {
  &__cont {
    &--btn {
      ::v-deep {
        .v-btn {
          font-size: 21px;
          text-transform: capitalize;
          min-width: 350px !important;
          height: 70px !important;
          letter-spacing: 0;
          font-family: Roboto;
        }
      }
    }
    &--input {
      width: 350px;
      ::v-deep {
        .v-input__control .v-input__slot {
          font-size: 21px;
          min-height: 70px;
          & .v-text-field__slot {
            .v-label {
              font-size: 21px;
              top: 26px !important;
            }
            & .v-label--active {
              transform: translateY(-30px) scale(0.75) !important;
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 1500px) {
  .c-login {
    &__cont {
      &--btn {
        ::v-deep {
          .v-btn {
            min-width: 300px !important;
          }
        }
      }
      &--input {
        width: 300px;
      }
    }
    &__details {
      font-size: 14px;
      max-width: 300px;
    }
  }
}
@media screen and (max-width: 1200px) {
  .c-login {
    &__cont {
      &--btn {
        ::v-deep {
          .v-btn {
            min-width: 240px !important;
          }
        }
      }
      &--input {
        width: 240px;
      }
    }
    &__details {
      max-width: 240px;
    }
  }
}

@media screen and (max-width: 992px) {
  .c-login {
    &__cont {
      &--btn {
        ::v-deep {
          .v-btn {
            font-size: 18px;
            min-width: 200px !important;
            height: 55px !important;
          }
        }
      }
      &--input {
        width: 200px;
        ::v-deep {
          .v-input__control .v-input__slot {
            font-size: 18px;
            min-height: 55px;
            & .v-text-field__slot {
              .v-label {
                font-size: 18px;
                top: 18px !important;
              }
              & .v-label--active {
                transform: translateY(-25px) scale(0.75) !important;
              }
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .c-login {
    &__cont {
      &--btn {
        ::v-deep {
          .v-btn {
            font-size: 14px;
            min-width: 100% !important;
            height: 46px !important;
          }
        }
      }
      &--input {
        width: 100%;
        ::v-deep {
          .v-input__control .v-input__slot {
            font-size: 14px;
            min-height: 46px;
            & .v-text-field__slot {
              .v-label {
                font-size: 14px;
                top: 14px !important;
              }
              & .v-label--active {
                transform: translateY(-23px) scale(0.75) !important;
              }
            }
          }
        }
      }
    }
    &__details {
      padding: 0;
      font-size: 12px;
    }
  }
}
</style>
