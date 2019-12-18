<template>
  <div class="c-block">
    <div class="c-block__wrapper">
      <div v-if="viewportWidth > 768" class="c-block__video">
        {{ viewportWidth }}
        <ContentSide />
      </div>
      <div class="c-block__login">
        <LoginSide />
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
    -webkit-box-shadow: 0px 0px 14px 2px rgba(0, 0, 0, 0.19);
    -moz-box-shadow: 0px 0px 14px 2px rgba(0, 0, 0, 0.19);
    box-shadow: 0px 0px 14px 2px rgba(0, 0, 0, 0.19);
  }
  &__login {
    width: 32%;
  }
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
      -webkit-box-shadow: 0px 0px 14px 2px rgba(0, 0, 0, 0.19);
      -moz-box-shadow: 0px 0px 14px 2px rgba(0, 0, 0, 0.19);
      box-shadow: 0px 0px 14px 2px rgba(0, 0, 0, 0.19);
    }
  }
}
</style>
