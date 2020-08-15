<template>
  <v-layout>
    <Home></Home>
  </v-layout>
</template>

<script>
import Home from '~/components/Home.vue'

export default {
  layout: 'default',
  name: 'HomeDashboard',
  middleware: ['authG2CUser'],
  components: {
    Home
  }
}
</script>
