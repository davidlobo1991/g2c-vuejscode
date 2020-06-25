<template>
  <div class="c-block">
    <div
      v-bind:class="[
        viewportWidth <= 768 && (createAccountIsVisible || loginIsVisible)
          ? 'full-height'
          : ''
      ]"
      class="c-block__wrapper"
    >
      <div
        v-if="
          viewportWidth > 768 ||
            (viewportWidth <= 768 && !createAccountIsVisible && !loginIsVisible)
        "
        class="c-block__video"
      >
        <ContentSide />
      </div>
      <div
        v-bind:class="[
          viewportWidth <= 768 && (createAccountIsVisible || loginIsVisible)
            ? 'full-height'
            : ''
        ]"
        class="c-block__login"
      >
        <LoginSide
          v-on:createAccountIsVisible="setCreateAccountIsVisible"
          v-on:loginIsVisible="setLoginIsVisible"
          v-on:checkUser="checkUser"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ContentSide from '~/components/login/ContentSide'
import LoginSide from '~/components/login/LoginSide'

export default {
  name: 'Login',
  components: {
    ContentSide,
    LoginSide
  },
  data() {
    return {
      viewportWidth: 0,
      createAccountIsVisible: false,
      loginIsVisible: false
    }
  },
  beforeMount() {
    window.addEventListener('resize', this.onWindowSizeChange)
  },
  mounted() {
    this.viewportWidth = this.getWidth()
  },
  destroyed() {
    window.removeEventListener('resize', this.onWindowSizeChange)
  },
  methods: {
    onWindowSizeChange() {
      this.viewportWidth = this.getWidth()
    },
    setCreateAccountIsVisible(value) {
      this.createAccountIsVisible = value
    },
    setLoginIsVisible(value) {
      this.loginIsVisible = value
    },
    getWidth() {
      return Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.c-block {
  width: 100%;
  background-color: #fff;
  &__wrapper {
    display: flex;
    height: 100%;
  }
  &__video {
    width: 68%;
    background-color: #fbfcfe;
    -webkit-box-shadow: 0 0 14px 2px rgba(0, 0, 0, 0.19);
    -moz-box-shadow: 0 0 14px 2px rgba(0, 0, 0, 0.19);
    box-shadow: 0 0 14px 2px rgba(0, 0, 0, 0.19);
  }
  &__login {
    width: 32%;
  }
}
.full-height {
  height: 100% !important;
}
@media screen and (max-width: 768px) {
  .c-block {
    &__wrapper {
      flex-flow: column-reverse;
      height: auto;
    }
    &__video {
      width: 100%;
      box-shadow: unset;
    }
    &__login {
      width: 100%;
      -webkit-box-shadow: 0 0 14px 2px rgba(0, 0, 0, 0.19);
      -moz-box-shadow: 0 0 14px 2px rgba(0, 0, 0, 0.19);
      box-shadow: 0 0 14px 2px rgba(0, 0, 0, 0.19);
    }
  }
}
</style>
