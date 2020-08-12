<template>
  <div>
    <div class="full-width">
      <form>
        <v-text-field
          v-model="form.password"
          :counter="6"
          type="password"
          label="Password"
          outlined
          class="c-login__cont--input u-mrb-s"
          autocomplete="false"
        >
        </v-text-field>
        <v-text-field
          v-model="form.repeatPassword"
          :counter="6"
          type="password"
          label="Repeat Password"
          outlined
          class="c-login__cont--input u-mrb-s"
          autocomplete="false"
        >
        </v-text-field>
        <div class="u-mrb-s c-login__cont--btn">
          <v-btn
            @click="resetPassword"
            :loading="loading"
            depressed
            dark
            color="#0885F6"
          >
            Change password
          </v-btn>
        </div>
      </form>
    </div>
    <div v-if="errorValidation !== null" class="error--text">
      <p>{{ errorValidation }}</p>
    </div>
    <div v-show="passwordChanged" class="c-success">
      <v-icon>mdi-check-circle-outline</v-icon>
      Password changed correctly
    </div>
  </div>
</template>

<script>
import { required, sameAs, minLength } from 'vuelidate/lib/validators'

export default {
  name: 'PasswordResetForm',
  props: {
    token: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      errorValidation: null,
      form: {
        password: '',
        repeatPassword: ''
      },
      loading: false,
      passwordChanged: false
    }
  },

  validations: {
    form: {
      password: {
        required,
        minLength: minLength(6)
      },
      repeatPassword: {
        required,
        sameAsPassword: sameAs(function() {
          return this.form.password
        })
      }
    }
  },
  methods: {
    showCreateUser() {
      this.$emit('showCreateUser')
    },
    showRecoverPassword() {
      this.$emit('showRecoverPassword')
    },
    async resetPassword() {
      this.loading = true

      try {
        this.errorValidation = null

        // Form Validation
        this.$v.$touch()

        if (this.$v.$invalid) {
          return
        }

        const resetPassword = await this.resetPasswordApi(
          this.form.password,
          this.token
        )

        if (!resetPassword.error) {
          this.loading = false
          this.passwordChanged = true
        } else {
          throw resetPassword.message
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error)
        this.loading = false
        this.errorValidation = this.$i18n.t('Token invalid')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.full-width {
  width: 100%;
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
