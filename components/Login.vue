<template>
  <div class="o-wrapper o-wrapper--xxl u-custom-wrapper">
    <div class="o-layout o-layout--gutter-l c-block">
      <div
        v-if="
          viewportWidth > 900 ||
            (viewportWidth < 900 && !createAccountIsVisible && !loginIsVisible)
        "
        class="o-layout__item c-block__video u-1/1 u-3/4@m"
      >
        <div class="c-video">
          <div class="c-video__title">
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
      <div
        class="o-layout__item u-1/1 u-1/4@m c-block__login u-pdt-h u-align-center"
      >
        <div class="c-login">
          <div class="c-login__logo">
            <img @click="showMenu" src="@/assets/svg/networksv_logo.svg" />
          </div>
          <div class="c-login__subtitle">
            Global Knowledge Network
          </div>
          <div class="c-login__login">
            <div v-show="createAccountIsVisible" class="u-mrb-s c-login__cont">
              <v-text-field
                :hide-details="true"
                label="Username (Handle)"
                outlined
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
                <v-btn depressed color="primary">
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
                <v-btn @click="showCreateUser" depressed color="primary">
                  Create Account
                </v-btn>
              </div>
              <div class="u-pdb-s">
                <v-btn @click="showLogin" outlined color="primary">Login</v-btn>
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
      createAccountIsVisible: false,
      loginIsVisible: false,
      viewportWidth: 0
    }
  },
  beforeMount() {
    window.addEventListener('resize', this.onWindowSizeChange)
  },
  mounted() {
    this.viewportWidth = this.getWidth()
    if (this.viewportWidth < 900) {
      this.pinInputHeight = '56px'
    }
  },
  destroyed() {
    window.removeEventListener('resize', this.onWindowSizeChange)
  },
  methods: {
    onWindowSizeChange() {
      this.viewportWidth = this.getWidth()
    },
    getWidth() {
      return Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0
      )
    },
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
    margin-top: 72px;
    padding-left: 83px;
    padding-top: 25px;
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
    &--textarea {
      width: 262px;
    }
    &--link {
      color: #1976d2;
      cursor: pointer;
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
  .c-block {
    height: 100%;
    flex-flow: column-reverse;
    padding-bottom: 0;
    &__login {
      height: 100%;
      padding-bottom: 0;
    }
    &__video {
      border-right: none;
      border-bottom: none;
      padding-bottom: 0;
    }
  }
  .c-video {
    &__title {
      height: auto;
      width: auto;
      font-size: 33px;
      padding-left: 30px;
      padding-right: 30px;
      padding-bottom: 0;
      margin-top: 0;
    }
    &__video {
      padding-top: 26px;
    }
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
