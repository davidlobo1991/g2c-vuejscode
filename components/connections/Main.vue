<template>
  <div class="c-connections">
    <ConnectionsNavbar />
    <Messages />
  </div>
</template>

<script>
import ConnectionsNavbar from '~/components/connections/ConnectionsNavbar'
import Messages from '~/components/connections/Messages'

export default {
  name: 'Main.vue',
  components: {
    ConnectionsNavbar,
    Messages
  }
}
</script>

<style scoped>
.c-connections {
  width: 100%;
}
</style>
