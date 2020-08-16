<template>
  <div class="c-connections">
    <Messages />
  </div>
</template>

<script>
import Messages from '~/components/connections/Messages'

export default {
  name: 'ConnectionsMessages',
  components: {
    Messages
  },
  created() {
    this.$mixpanel.track('Connection Messages Page View')
  }
}
</script>

<style scoped>
.c-connections {
  width: 100%;
  height: 100vh;
}
</style>
