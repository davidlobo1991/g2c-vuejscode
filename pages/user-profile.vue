<template>
  <div class="u-custom-wrapper">
    <div v-if="$auth.loggedIn">
      <h1 class="mt-5 mb-5 ml-5 ">
        {{ $i18n.t('page.protected.welcome') }} <br />
        @{{ $auth.user.data.nick }}
      </h1>
      <AccountProfile />

      <v-btn @click="logout" text class="mt-5 ml-5 blue white--text"
        >Logout</v-btn
      >
    </div>
  </div>
</template>

<script>
import AccountProfile from '~/components/account/AccountProfile'
import { login } from '~/mixins/login'

export default {
  name: 'UserProfile',
  middleware: ['authUser'],
  components: {
    AccountProfile
  },
  mixins: [login],
  created() {
    this.$mixpanel.track('User Profile Page View')
  },
  methods: {
    logout() {
      this.handleLogout()
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
.u-custom-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
</style>
