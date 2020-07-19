<template>
  <div class="c-block">
    <PasswordResetForm
      :token="token"
      @createAccountIsVisible="setCreateAccountIsVisible"
      @loginIsVisible="setLoginIsVisible"
    />
  </div>
</template>

<script>
import PasswordResetForm from '~/components/login/PasswordResetForm'

export default {
  name: 'PasswordReset',
  components: {
    PasswordResetForm
  },
  props: {
    token: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      createAccountIsVisible: false,
      loginIsVisible: false
    }
  },
  methods: {
    setCreateAccountIsVisible(value) {
      this.createAccountIsVisible = value
    },
    setLoginIsVisible(value) {
      this.loginIsVisible = value
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
