<template>
  <div class="c-login">
    <div class="c-login__wrapper">
      <div class="c-login__logo">
        <img @click="showMenu" src="@/assets/svg/networksv_logo.svg" />
      </div>
      <div class="c-login__subtitle">
        Global Knowledge Network
      </div>
      <div class="c-login__login-cont">
        <div v-show="createAccountIsVisible" class="u-mrb-s c-login__cont">
          <v-text-field
            :hide-details="true"
            label="Username (Handle)"
            outlined
            class="c-login__cont--input u-mrb-s"
          >
          </v-text-field>
          <div class="u-mrb-s">
            <v-btn depressed color="#0885F6" dark to="/step-2" nuxt>
              Next
            </v-btn>
          </div>
          <p class="c-login__details">
            Already a member?
            <a @click="showLogin" href="#">
              Login
            </a>
          </p>
        </div>
        <div v-show="loginIsVisible" class="u-mrb-s c-login__cont">
          <v-text-field
            :hide-details="true"
            label="Username (Handle)"
            outlined
            class="c-login__cont--input u-mrb-s"
          >
          </v-text-field>
          <v-textarea
            outlined
            class="c-login__cont--textarea"
            label="Security Key"
          ></v-textarea>
          <div class="u-mrb-s">
            <v-btn depressed dark color="#0885F6">
              Login
            </v-btn>
          </div>
          <p class="c-login__details">
            Don’t have an account?
            <a @click="showCreateUser" href="#">
              Create Account
            </a>
          </p>
        </div>
        <div
          v-show="!createAccountIsVisible && !loginIsVisible"
          class="c-login__main-options"
        >
          <div class="u-pdb-s">
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
          <div class="u-pdb-s">
            <v-btn @click="showLogin" outlined color="#0885F6">Login</v-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      createAccountIsVisible: false,
      loginIsVisible: false
    }
  },
  watch: {
    createAccountIsVisible(value) {
      this.$emit('setAccountIsVisible', value)
    },
    loginIsVisible(value) {
      this.$emit('setLoginIsVisible', value)
    }
  },
  methods: {
    showMenu() {
      this.createAccountIsVisible = false
      this.loginIsVisible = false
    },
    showCreateUser() {
      this.createAccountIsVisible = true
      this.loginIsVisible = false
    },
    showLogin() {
      this.loginIsVisible = true
      this.createAccountIsVisible = false
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
</style>
<style lang="scss" scoped>
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
    }
  }
}
@media screen and (max-width: 768px) {
  .v-btn {
    min-width: 100% !important;
  }
  .c-login {
    &__wrapper {
      position: initial;
      padding-top: 30px;
      width: 100%;
    }
    &__login-cont {
      margin-top: 20px;
      width: 90%;
    }
  }
}
</style>