<template>
  <div class="u-custom-wrapper">
    <!--    <Settings />-->
    <div v-if="$auth.loggedIn">
      <h1>
        Pagina protegida. Bienvenido @{{ $auth.user.data.nick }}. Login perfil
        usuario.
      </h1>

      <v-btn @click="logout" text class="mt-2 blue white--text">Logout</v-btn>
    </div>
  </div>
</template>

<script>
// import Settings from '~/components/account/settings/Settings'
import { login } from '~/mixins/login'

export default {
  name: 'UserProfile',
  middleware: ['authUser'],
  // components: {
  //   Settings
  // },
  mixins: [login],
  methods: {
    async logout() {
      await this.handleLogout()
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
