<template>
  <div class="u-custom-wrapper">
    <h1>Pagina protegida. Login perfil usuario. (No Blockchain)</h1>
    <!--    <Settings />-->
    <div v-if="$auth.loggedIn">
      <v-btn @click="logout" text class="blue white&#45;&#45;text"
        >Logout</v-btn
      >
    </div>
  </div>
</template>

<script>
// import Settings from '~/components/account/settings/Settings'

export default {
  name: 'UserProfile',
  middleware: ['authUser'],
  // components: {
  //   Settings
  // },
  methods: {
    async logout() {
      await this.$auth.logout()
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
