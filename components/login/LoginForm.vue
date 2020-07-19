<template>
  <div>
    <div class="full-width">
      <form>
        <v-text-field
          v-model="formLogin.nick"
          :hide-details="handleValidationNickErrors().length === 0"
          :error-messages="handleValidationNickErrors() || []"
          label="Username (Handle)"
          outlined
          class="c-login__cont--input u-mrb-s"
          required
        >
        </v-text-field>
        <v-text-field
          v-model="formLogin.password"
          :hide-details="handleValidationPasswordErrors().length === 0"
          :error-messages="handleValidationPasswordErrors() || []"
          :counter="6"
          type="password"
          label="Password"
          outlined
          class="c-login__cont--input u-mrb-s"
          autocomplete="false"
        >
        </v-text-field>
        <v-textarea
          v-model="formLogin.words"
          :hide-details="handleValidationSecurityKeyErrors().length === 0"
          :error-messages="handleValidationSecurityKeyErrors() || []"
          outlined
          class="c-login__cont--input u-mrb-s"
          label="Security Key"
        >
        </v-textarea>
        <div class="u-mrb-s c-login__cont--btn">
          <v-btn
            @click.prevent="login"
            :loading="loading"
            depressed
            dark
            color="#0885F6"
          >
            Login
          </v-btn>
        </div>
      </form>
    </div>
    <div v-if="errorValidation !== null" class="error--text">
      <p>{{ errorValidation }}</p>
    </div>
    <p class="c-login__details">
      Don’t have an account?
      <a @click="showCreateUser">
        Create Account
      </a>
    </p>
  </div>
</template>

<script>
import { required, requiredIf, minLength } from 'vuelidate/lib/validators'

export default {
  name: 'LoginForm',
  data() {
    return {
      errorValidation: null,
      formLogin: {
        nick: '',
        password: null,
        words: null
      },
      loading: false
    }
  },

  validations: {
    formLogin: {
      nick: {
        required
      },
      password: {
        required,
        minLength: minLength(6)
        // strongPassword(password) {
        //   return (
        //     /[a-z]/.test(password) && // checks for a-z
        //     /[0-9]/.test(password) && // checks for 0-9
        //     /\W|_/.test(password) && // checks for special char
        //     password.length >= 6
        //   );
        // }
      },
      words: {
        required: requiredIf((form) => {
          return form.words !== null && form.words.length > 0
        }),
        checkWords(words) {
          if (words === null || words.length === 0) {
            return true
          }
          return /^\W*(\w+\b\W*){12}$/.test(words)
        }
      }
    }
  },
  methods: {
    showCreateUser() {
      this.$emit('showCreateUser')
    },
    async login() {
      this.loading = true

      try {
        this.errorValidation = null

        // Form Validation
        this.$v.$touch()

        if (this.$v.$invalid) {
          return
        }

        // eslint-disable-next-line no-unused-vars
        let g2cLoginResponse = null

        // Check if words fields not empty
        if (this.formLogin.words !== null && this.formLogin.words.length > 0) {
          // First, login in G2C
          try {
            g2cLoginResponse = await this.loginUser(
              this.formLogin.words,
              this.g2c_application,
              this.formLogin.nick
            )

            await this.$auth.loginWith('admin', {
              data: {
                nick: this.formLogin.nick,
                password: this.formLogin.password
              }
            })
          } catch (error) {
            // eslint-disable-next-line no-console
            console.error('G2C Login error', error)
            this.errorValidation = error.message
          }
        } else {
          // Second, login in networksv backend
          try {
            await this.$auth.loginWith('user', {
              data: {
                nick: this.formLogin.nick,
                password: this.formLogin.password
              }
            })
          } catch (error) {
            // eslint-disable-next-line no-console
            console.error('NetworkSV Login error', error)
            this.errorValidation = this.$i18n.t('login.error.message')
            this.loading = false
          }
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error)
        this.loading = false
      }
    },
    handleValidationNickErrors() {
      const errors = []
      if (!this.$v.formLogin.nick.$dirty) {
        return errors
      }

      if (!this.$v.formLogin.nick.required) {
        errors.push('Username field is required')
      }

      return errors
    },
    handleValidationPasswordErrors() {
      const errors = []
      if (!this.$v.formLogin.password.$dirty) {
        return errors
      }

      if (!this.$v.formLogin.password.required) {
        errors.push('Password field is required')
      }

      if (!this.$v.formLogin.password.minLength) {
        errors.push('Password min lenght 6')
      }

      return errors
    },
    handleValidationSecurityKeyErrors() {
      const errors = []
      if (!this.$v.formLogin.password.$dirty) {
        return errors
      }

      if (!this.$v.formLogin.words.required) {
        errors.push('Password field is required')
      }

      if (!this.$v.formLogin.words.checkWords) {
        errors.push('Security key 12 words')
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
  &__details {
    margin-top: 60px;
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
      margin-top: 0;
    }
  }
}
</style>
