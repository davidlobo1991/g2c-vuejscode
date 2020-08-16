<template>
  <EmeetingsRequests />
</template>

<script>
import EmeetingsRequests from '~/components/emeetings/EmeetingsRequests'

export default {
  name: 'Requests',
  components: {
    EmeetingsRequests
  },
  created() {
    this.$mixpanel.track('eMeetings Received Request Page View')
  }
}
</script>

<style scoped>
.c-connections {
  width: 100%;
  height: 100vh;
}
</style>
