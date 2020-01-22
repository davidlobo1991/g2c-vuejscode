<template>
  <v-layout>
    <!-- <Home title="Refineria"></Home> -->
    <Home></Home>
  </v-layout>
</template>

<script>
import Home from '~/components/Home.vue'

export default {
  layout: 'default',
  components: {
    Home
  }
}
</script>
