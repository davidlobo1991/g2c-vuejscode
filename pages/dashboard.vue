<template>
  <v-layout>
    <div class="u-custom-wrapper">
      <h1>Pagina protegida, solo accesible si logeado</h1>
      <div v-if="$auth.loggedIn">
        <p>Email: {{ $auth.user.email }}</p>
        <v-btn @click="logout" text class="blue white--text">Logout</v-btn>
      </div>
    </div>
  </v-layout>
</template>

<script>
export default {
  layout: 'default',
  name: 'Dashboard',
  middleware: ['auth'],
  methods: {
    async logout() {
      await this.handleLogout()
      this.$router.push('/')
    }
  }
}
</script>
