<template>
  <div class="o-wrapper o-wrapper--xl">
    <div class="o-layout o-layout--gutter-l c-block">
      <div class="o-layout__item c-block__video u-2/3 u-pdt-h ">
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
      <div class="o-layout__item u-1/3 u-pdt-h c-block__login u-align-center">
        <div class="c-login">
          <div class="c-login__logo">
            <img src="@/assets/svg/networksv_logo.svg" />
          </div>
          <div class="c-login__subtitle">
            Global Knowledge Network
          </div>
          <div class="c-login__login">
            <v-btn depressed color="primary" large> Create Account</v-btn>
            <v-btn outlined color="primary" large>Login</v-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  props: {
    title: {
      type: String,
      default: 'caracol'
    }
  }
}
</script>

<style lang="scss" scoped>
v-btn {
  text-transform: capitalize;
  width: 100%;
  letter-spacing: 0;
  font-weight: 300;
  letter-spacing: 0;
}
.c-block {
  &__login {
    border-right: 2px rgba(0, 0, 0, 0.2);
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
  text-algin: center;
  &__login {
    text-algin: center;
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
}
</style>
