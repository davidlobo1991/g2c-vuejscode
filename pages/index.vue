<template>
  <v-layout>
    <Login />
  </v-layout>
</template>

<script>
import Login from '~/components/Login.vue'

export default {
  name: 'Home',
  middleware: ['home'],
  components: {
    Login
  },
  created() {
    this.$mixpanel.track('Home Page View')
  }
}
</script>
