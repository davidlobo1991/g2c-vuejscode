<template>
  <v-layout>
    <!-- <Account title="Refineria"></Account> -->
    <Account></Account>
  </v-layout>
</template>

<script>
import Account from '~/components/Account.vue'

export default {
  components: {
    Account
  },
  created() {
    this.$mixpanel.track('Account Profile Page View')
  }
}
</script>
