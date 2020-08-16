<template>
  <v-layout>
    <!-- <AccountSettings title="Refineria"></AccountSettings> -->
    <AccountSettings></AccountSettings>
  </v-layout>
</template>

<script>
import AccountSettings from '~/components/AccountSettings.vue'

export default {
  components: {
    AccountSettings
  },
  created() {
    this.$mixpanel.track('Account Settings Page View')
  }
}
</script>
