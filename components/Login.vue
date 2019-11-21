<template>
  <div class="o-wrapper o-wrapper--xxl">
    <div class="o-layout o-layout--gutter-l c-block">
      <div class="o-layout__item c-block__video u-3/4 u-pdt-h ">
        <div class="c-video">
          <div class="c-video__title u-pdl-h">
            Trade your knowledge anywhere and everywhere.
          </div>
          <div class="c-video__video">
            <video
              autoplay="true"
              loop="true"
              src="@/assets/video/1024093451.mp4"
            ></video>
          </div>
        </div>
      </div>
      <div class="o-layout__item u-1/4 u-pdt-h c-block__login u-align-center">
        <div class="c-login">
          <div class="c-login__logo">
            <img src="@/assets/svg/networksv_logo.svg" />
          </div>
          <div class="c-login__subtitle">
            Global Knowledge Network
          </div>
          <div class="c-login__login">
            <div v-show="userNameInputIsVisible" class="u-mrb-s c-login__cont">
              <v-text-field
                label="Username (Handle)"
                outlined
                hide-details="true"
                class="c-login__cont--input u-mrb-s"
              >
              </v-text-field>
              <div class="u-mrb-s">
                <v-btn depressed color="primary" to="/step-2" nuxt>
                  Next
                </v-btn>
              </div>
              <p class="c-login__details">
                Already a member?
                <a @click="showUserNameInput" href="#">
                  Login
                </a>
              </p>
            </div>
            <div v-show="!userNameInputIsVisible">
              <div class="u-mrb-s">
                <v-btn @click="showUserNameInput" depressed color="primary">
                  Create Account
                </v-btn>
              </div>
              <div>
                <v-btn outlined color="primary">Login</v-btn>
              </div>
            </div>
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
      userNameInputIsVisible: false
    }
  },
  methods: {
    showUserNameInput() {
      this.userNameInputIsVisible = !this.userNameInputIsVisible
    }
  }
}
</script>

<style lang="scss" scoped>
.v-btn {
  text-transform: capitalize;
  min-width: 262px !important;
  height: 56px !important;
  letter-spacing: 0;
  font-weight: 500;
  letter-spacing: 0;
  font-family: Roboto;
}
.c-block {
  height: 100vh;
  &__video {
    border-right: 2px solid rgba(0, 0, 0, 0.2);
  }
}
.c-video {
  &__title {
    height: 76px;
    width: 560px;
    color: #29363d;
    font-family: Roboto;
    font-size: 37px;
    font-weight: bold;
    letter-spacing: 0.35px;
    line-height: 40px;
  }
  &__video {
    padding-top: 70px;
  }
  &__video video {
    width: 100%;
  }
}
.c-login {
  &__login {
    width: 100%;
  }
  &__subtitle {
    padding-top: 20px;
    padding-bottom: 160px;
    color: #29363d;
    font-family: Roboto;
    font-size: 18px;
    letter-spacing: 0.17px;
    line-height: 23px;
    text-align: center;
  }
  &__details {
    padding-top: 80px;
    font-size: 14px;
    font-weight: 500;
    line-height: 19px;
    text-align: center;
  }
  &__cont {
    display: flex;
    align-items: center;
    flex-flow: column;
    &--input {
      width: 262px;
      height: 56px;
    }
    &--link {
      color: #1976d2;
      cursor: pointer;
    }
  }
}
</style>
