<template>
  <div class="c-login">
    <div class="c-login__wrapper">
      <div class="c-login__logo">
        <img
          @click="showMenu"
          src="@/assets/svg/networksv_logo.svg"
          alt="apiNetworkSV Logo"
        />
      </div>
      <div class="c-login__subtitle">
        Global Knowledge Network
      </div>
      <div
        :class="[
          viewportWidth <= 768 && (!createAccountIsVisible || !loginIsVisible)
            ? 'space-top'
            : ''
        ]"
        class="c-login__login-cont"
      >
        <PreCreateForm
          v-show="createAccountIsVisible"
          :class="[
            viewportWidth <= 768 && (createAccountIsVisible || loginIsVisible)
              ? 'u-mrb-s'
              : ''
          ]"
          @showLogin="showLogin"
          class="c-login__cont"
        />
        <LoginForm
          v-show="loginIsVisible"
          :class="[
            viewportWidth <= 768 && (createAccountIsVisible || loginIsVisible)
              ? 'u-mrb-s'
              : ''
          ]"
          @showCreateUser="showCreateUser"
          @showRecoverPassword="showRecoverPassword"
          class="c-login__cont"
        />
        <SendEmailPasswordForm
          v-show="recoverPasswordIsVisible"
          :class="[
            viewportWidth <= 768 && (createAccountIsVisible || loginIsVisible)
              ? 'u-mrb-s'
              : ''
          ]"
        />
        <div
          v-show="
            !createAccountIsVisible &&
              !loginIsVisible &&
              !recoverPasswordIsVisible
          "
          class="c-login__main-options"
        >
          <div class="u-pdb-l@m c-login__button">
            <v-btn
              @click="showCreateUser"
              depressed
              color="#0885F6"
              dark
              width="100%"
            >
              Create Account
            </v-btn>
          </div>
          <div class="u-pdb-l c-login__button">
            <v-btn @click="showLogin" outlined color="#0885F6">Login</v-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { apiNetworkSv } from '~/mixins/apiNetworkSV'
import { apiG2c } from '~/mixins/apiG2c'
import LoginForm from '~/components/login/LoginForm'
import PreCreateForm from '~/components/login/PreCreateForm'
import SendEmailPasswordForm from '~/components/login/SendEmailPasswordForm'

export default {
  name: 'LoginSide',
  components: {
    LoginForm,
    PreCreateForm,
    SendEmailPasswordForm
  },
  mixins: [apiNetworkSv, apiG2c],
  props: {
    viewportWidth: {
      type: Number,
      default: null
    }
  },
  data() {
    return {
      createAccountIsVisible: false,
      loginIsVisible: false,
      errorValidation: false,
      recoverPasswordIsVisible: false
    }
  },
  watch: {
    createAccountIsVisible(value) {
      this.$emit('createAccountIsVisible', value)
    },
    loginIsVisible(value) {
      this.$emit('loginIsVisible', value)
    }
  },
  methods: {
    showMenu() {
      this.createAccountIsVisible = false
      this.loginIsVisible = false
      this.recoverPasswordIsVisible = false
    },
    showCreateUser() {
      this.createAccountIsVisible = true
      this.loginIsVisible = false
      this.recoverPasswordIsVisible = false
    },
    showLogin() {
      this.loginIsVisible = true
      this.createAccountIsVisible = false
      this.recoverPasswordIsVisible = false
    },
    showRecoverPassword() {
      this.recoverPasswordIsVisible = true
      this.loginIsVisible = false
      this.createAccountIsVisible = false
    },
    async logout() {
      await this.$auth.logout()
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
.full-width {
  width: 100%;
}
.space-top {
  margin-top: 80px !important;
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
  &__button {
    padding-bottom: 32px;
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
    line-height: 19px;
    text-align: center;
  }
  &__cont {
    display: flex;
    align-items: center;
    flex-flow: column;
    &--link {
      color: #1976d2;
      cursor: pointer;
      font-weight: 500;
    }
  }
}
@media screen and (max-width: 1500px) {
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
    &__button {
      ::v-deep {
        .v-btn {
          min-width: 300px !important;
        }
      }
    }
  }
}
@media screen and (max-width: 1200px) {
  .c-login {
    &__button {
      ::v-deep {
        .v-btn {
          min-width: 240px !important;
        }
      }
    }
  }
}

@media screen and (max-width: 992px) {
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
    &__button {
      ::v-deep {
        .v-btn {
          min-width: 200px !important;
          height: 55px !important;
          font-size: 18px;
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
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
    &__button {
      padding-bottom: 12px;
      ::v-deep {
        .v-btn {
          min-width: 100% !important;
        }
      }
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
      &--btn {
        width: 100%;
      }
    }
  }
}
</style>
