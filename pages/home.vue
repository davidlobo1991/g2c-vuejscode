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
  // middleware: ['authG2CUser'], // @TODO: Temporol disconnect. Not creating cookies tokenid, ... in local
  components: {
    Home
  }
}
</script>
