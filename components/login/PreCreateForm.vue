<template>
  <div>
    <div class="full-width">
      <v-text-field
        :value="nick"
        :hide-details="true"
        @input="updateNick"
        label="Username (Handle)"
        outlined
        class="c-login__cont--input u-mrb-s"
      >
      </v-text-field>
      <div class="u-mrb-s c-login__cont--btn">
        <v-btn @click="checkUser" depressed color="#0885F6" dark nuxt>
          Next
        </v-btn>
      </div>
    </div>
    <p class="c-login__details">
      Already a member?
      <a @click="showLogin" href="#">
        Login
      </a>
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'PreCreateForm',
  computed: {
    ...mapState({
      nick: (state) => state.register.nick
    })
  },
  methods: {
    async checkUser() {
      try {
        const validation = await this.checkUserApi()

        if (validation.error === true) {
          throw validation.message
        }

        // @TODO: Username is valid, save nick in session storage??
        sessionStorage.registerNick = this.nick

        // Load Create Account Workflow
        await this.$router.push(this.localePath('create-account'))
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('PreCreateForm@checkUser - Error')
        // eslint-disable-next-line no-console
        console.error(error)
      }
    },
    updateNick(value) {
      this.$store.commit('register/SET_NICK', value)
    },
    showLogin() {
      this.$emit('showLogin')
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
