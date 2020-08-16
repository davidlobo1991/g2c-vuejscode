<template>
  <EmeetingsSent />
</template>

<script>
import EmeetingsSent from '~/components/emeetings/EmeetingsSent'

export default {
  name: 'Sent',
  components: {
    EmeetingsSent
  },
  created() {
    this.$mixpanel.track('eMeetings Sent Request Page View')
  }
}
</script>

<style scoped>
.c-connections {
  width: 100%;
  height: 100vh;
}
</style>
