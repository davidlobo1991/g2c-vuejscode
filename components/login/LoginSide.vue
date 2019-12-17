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
        <div v-show="!createAccountIsVisible && !loginIsVisible">
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
    padding-top: 100px;
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
    margin-top: 70px;
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
@media screen and (max-width: 1200px) {
  .v-btn {
    min-width: 180px !important;
  }
}

@media screen and (max-width: 899px) {
  .v-btn {
    min-width: 262px !important;
  }
  .u-custom-wrapper {
    padding: 0;
  }
  .c-login {
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12);
    // height: 100%;
    &__logo img {
      width: 110px;
    }
    &__subtitle {
      font-size: 14px;
      padding-top: 12px;
      padding-bottom: 17px;
    }
    &__details {
      padding: 0;
      position: absolute;
      bottom: 0;
    }
    &__cont {
      display: flex;
      align-items: center;
      flex-flow: column;
      &--input {
        // padding-top: 113px;
        // width: 262px;
        // height: 56px;
      }
    }
  }
}
</style>
