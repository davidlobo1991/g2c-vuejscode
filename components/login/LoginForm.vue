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
          class="c-login__cont--textarea u-mrb-s"
          label="Security Key"
        >
        </v-textarea>
        <div class="u-mrb-s c-login__cont--btn">
          <v-btn @click.prevent="login" depressed dark color="#0885F6">
            Login
          </v-btn>
        </div>
      </form>
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
      formLogin: {
        nick: '',
        password: null,
        words: null
      }
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
      try {
        // Form Validation
        this.$v.$touch()

        if (this.$v.$invalid) {
          return
        }

        // eslint-disable-next-line no-unused-vars
        let g2cLoginResponse = null

        // @TODO: Check if words fields not empty
        if (this.formLogin.words !== null && this.formLogin.words.length > 0) {
          // @TODO: First, login in G2C
          try {
            g2cLoginResponse = await this.loginUser(
              this.formLogin.words,
              this.g2c_application,
              this.formLogin.nick
            )
          } catch (error) {
            // eslint-disable-next-line no-console
            console.error('G2C Login error')
            // eslint-disable-next-line no-console
            console.error(error)
          }
        }

        // @TODO: Set g2cLoginResponse in localStorage???
        // eslint-disable-next-line no-console
        // console.debug('g2cLoginResponse')
        // eslint-disable-next-line no-console
        // console.debug(g2cLoginResponse)

        // @TODO: Second, login in networksv backend
        // eslint-disable-next-line no-unreachable
        try {
          const response = await this.$auth.loginWith('local', {
            data: {
              nick: this.formLogin.nick,
              password: this.formLogin.password
            }
          })
          // eslint-disable-next-line no-console
          console.log('response login!!!')
          // eslint-disable-next-line no-console
          console.log(response)
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error('NetworkSV Login error')
          // eslint-disable-next-line no-console
          console.error(error)
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error)
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

<style>
.c-login__cont--input .v-input__control .v-input__slot {
  font-size: 21px;
  min-height: 70px;
}
.c-login__cont--input
  .v-input__control
  .v-input__slot
  .v-text-field__slot
  .v-label {
  font-size: 21px;
  top: 26px !important;
}
.c-login__cont--input
  .v-input__control
  .v-input__slot
  .v-text-field__slot
  .v-label--active {
  transform: translateY(-30px) scale(0.75) !important;
}
.c-login__cont--textarea .v-input__control .v-input__slot {
  font-size: 21px;
  min-height: 70px;
}
.c-login__cont--textarea
  .v-input__control
  .v-input__slot
  .v-text-field__slot
  .v-label {
  font-size: 21px;
  top: 26px !important;
}
.c-login__cont--textarea
  .v-input__control
  .v-input__slot
  .v-text-field__slot
  .v-label--active {
  transform: translateY(-30px) scale(0.75) !important;
}
@media screen and (max-width: 1500px) {
  .c-login__cont--input .v-input__control .v-input__slot {
    font-size: 21px;
    min-height: 70px;
  }
  .c-login__cont--input
    .v-input__control
    .v-input__slot
    .v-text-field__slot
    .v-label {
    font-size: 21px;
    top: 26px !important;
  }
  .c-login__cont--input
    .v-input__control
    .v-input__slot
    .v-text-field__slot
    .v-label--active {
    transform: translateY(-30px) scale(0.75) !important;
  }
  .c-login__cont--textarea .v-input__control .v-input__slot {
    font-size: 21px;
    min-height: 70px;
  }
  .c-login__cont--textarea
    .v-input__control
    .v-input__slot
    .v-text-field__slot
    .v-label {
    font-size: 21px;
    top: 26px !important;
  }
  .c-login__cont--textarea
    .v-input__control
    .v-input__slot
    .v-text-field__slot
    .v-label--active {
    transform: translateY(-30px) scale(0.75) !important;
  }
}
@media screen and (max-width: 992px) {
  .c-login__cont--input .v-input__control .v-input__slot {
    font-size: 18px;
    min-height: 55px;
  }
  .c-login__cont--input
    .v-input__control
    .v-input__slot
    .v-text-field__slot
    .v-label {
    font-size: 18px;
    top: 18px !important;
  }
  .c-login__cont--input
    .v-input__control
    .v-input__slot
    .v-text-field__slot
    .v-label--active {
    transform: translateY(-25px) scale(0.75) !important;
  }
  .c-login__cont--textarea .v-input__control .v-input__slot {
    font-size: 21px;
    min-height: 70px;
  }
  .c-login__cont--textarea
    .v-input__control
    .v-input__slot
    .v-text-field__slot
    .v-label {
    font-size: 21px;
    top: 26px !important;
  }
  .c-login__cont--textarea
    .v-input__control
    .v-input__slot
    .v-text-field__slot
    .v-label--active {
    transform: translateY(-30px) scale(0.75) !important;
  }
}
@media screen and (max-width: 768px) {
  .c-login__cont--input .v-input__control .v-input__slot {
    font-size: 14px;
    min-height: 46px;
  }
  .c-login__cont--input
    .v-input__control
    .v-input__slot
    .v-text-field__slot
    .v-label {
    font-size: 14px;
    top: 14px !important;
  }
  .c-login__cont--input
    .v-input__control
    .v-input__slot
    .v-text-field__slot
    .v-label--active {
    transform: translateY(-23px) scale(0.75) !important;
  }
  .c-login__cont--textarea .v-input__control .v-input__slot {
    font-size: 14px;
    /*min-height: 70px;*/
  }
  .c-login__cont--textarea
    .v-input__control
    .v-input__slot
    .v-text-field__slot
    .v-label {
    font-size: 14px;
    top: 14px !important;
  }
  .c-login__cont--textarea
    .v-input__control
    .v-input__slot
    .v-text-field__slot
    .v-label--active {
    transform: translateY(-20px) scale(0.75) !important;
  }
}
</style>
<style lang="scss" scoped>
.full-width {
  width: 100%;
}
.space-top {
  margin-top: 80px !important;
}
.v-btn {
  text-transform: capitalize;
  min-width: 350px !important;
  height: 70px !important;
  letter-spacing: 0;
  // font-weight: 500;
  letter-spacing: 0;
  font-family: Roboto;
  font-size: 21px;
}
.c-login {
  display: flex;
  justify-content: center;
  height: 100%;
  &__wrapper {
    padding-top: 80px;
    display: flex;
    flex-flow: column;
    align-items: center;
    // max-width: 50%;
    position: fixed;
  }
  &__logo {
    width: 210px;
    & img {
      width: 100%;
    }
  }
  &__login-cont {
    margin-top: 91px;
  }
  &__subtitle {
    padding-top: 20px;
    // padding-bottom: 160px;
    color: #29363d;
    font-family: Roboto;
    font-size: 21px;
    letter-spacing: 0.17px;
    line-height: 23px;
    text-align: center;
  }
  &__button-cont {
    width: 100%;
  }
  &__details {
    padding-top: 80px;
    font-size: 21px;
    // font-weight: 500;
    line-height: 19px;
    text-align: center;
  }
  &__cont {
    display: flex;
    align-items: center;
    flex-flow: column;

    &--input {
      width: 350px;
    }

    &--textarea {
      width: 350px;
    }

    &--link {
      color: #1976d2;
      cursor: pointer;
      font-weight: 500;
    }
  }
}
@media screen and (max-width: 1500px) {
  .v-btn {
    min-width: 300px !important;
  }
  .c-login {
    &__logo {
      width: 190px;
    }
    &__login-cont {
      margin-top: 80px;
    }
    &__subtitle {
      padding-top: 5px;
    }
    &__cont {
      &--input {
        width: 300px;
      }
      &--textarea {
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
  .v-btn {
    min-width: 240px !important;
  }
  .c-login {
    &__cont {
      &--input {
        width: 240px;
      }
      &--textarea {
        width: 240px;
      }
    }
    &__details {
      max-width: 240px;
    }
  }
}

@media screen and (max-width: 992px) {
  .v-btn {
    min-width: 200px !important;
    height: 55px !important;
    font-size: 18px;
  }
  .c-login {
    &__logo {
      width: 150px;
    }
    &__login-cont {
      margin-top: 73px;
    }
    &__subtitle {
      font-size: 18px;
    }
    &__cont {
      &--input {
        width: 200px;
      }
      &--textarea {
        width: 200px;
      }
    }
    &__details {
      /*max-width: 200px;*/
    }
  }
}
@media screen and (max-width: 768px) {
  .v-btn {
    min-width: 100% !important;
  }
  .c-login {
    &__logo {
      width: 110px;
    }
    &__wrapper {
      position: initial;
      padding-top: 30px;
      width: 100%;
    }
    &__subtitle {
      font-size: 14px;
    }
    &__login-cont {
      margin-top: 20px;
      width: 90%;
      height: 80%;
    }
    &__cont {
      display: flex;
      flex-flow: column;
      justify-content: space-between;
      height: 100%;
      &--input {
        width: 100%;
      }
      &--btn {
        width: 100%;
      }
      &--textarea {
        width: auto;
      }
    }
    &__details {
      padding: 0;
      font-size: 12px;
    }
  }
}
</style>
