<template>
  <div class="u-custom-wrapper">
    <h1>Pagina protegida, solo accesible si logeado</h1>
    <div v-if="$auth.loggedIn">
      <v-btn @click="logout" text class="blue white&#45;&#45;text"
        >Logout</v-btn
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserProfile',
  middleware: ['authUser'],
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
  width: 100%;
  height: 100%;
}
</style>
